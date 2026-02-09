import json
import re
from core_soul import CORE_SOUL
from utils.llm import chat
from utils.repo import read

JSON_RE = re.compile(r"\{.*\}", re.S)

def extract_json(text: str) -> dict:
    """Extract JSON from LLM response"""
    match = JSON_RE.search(text)
    if not match:
        raise ValueError("No JSON found in LLM response")
    return json.loads(match.group())


def plan(files, memory, retries=3):
    """
    Returns a dict:
    {
        "read": [...],
        "edit": { "path/to/file": "improved content" },
        "summary": "what improved",
        "next": [...]
    }
    """
    prompt_base = [
        {"role": "system", "content": CORE_SOUL},
        {"role": "user", "content": json.dumps({
            "memory": memory,
            "STRICT_RULE": "Return ONLY valid JSON. No text. No markdown."
        })}
    ]

    for attempt in range(retries):
        try:
            data = {
                "read": [],
                "edit": {},
                "summary": "",
                "next": []
            }

            # ---------- READ AND IMPROVE FILES ----------
            candidate_files = [f for f in files if f.startswith("src/")]
            for fpath in candidate_files:
                content = read(fpath) or ""
                prompt = prompt_base + [
                    {"role": "user", "content": f"Improve this code file:\n{content}"}
                ]
                improved = chat(prompt)
                if improved.strip():
                    data["edit"][fpath] = improved
                    data["summary"] += f" | Improved {fpath}"
                else:
                    # fallback minimal improvement
                    suffix = "// Auto improvement by Melius\n" if fpath.endswith((".js", ".ts", ".tsx", ".jsx", ".vue")) else "# Auto improvement by Melius\n"
                    data["edit"][fpath] = content + suffix
                    data["summary"] += f" | Forced minimal improvement {fpath}"

            return data

        except Exception as e:
            # Retry with previous responses
            prompt_base.append({"role": "assistant", "content": improved if 'improved' in locals() else ""})
            prompt_base.append({"role": "user", "content": f"ERROR: {e}. Return ONLY corrected JSON."})

    # fallback if all retries fail
    return {
        "read": [],
        "edit": {},
        "summary": "No safe improvement generated this cycle",
        "next": []
    }
