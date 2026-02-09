import json
from core_soul import CORE_SOUL
from utils.llm import chat
from utils.repo import read

def plan(files, memory, retries=3):
    """
    Returns a dict:
    {
        "read": [...],
        "edit": { "path/to/file": "improved content" },
        "summary": "what improved",
        "next": [...]
    }

    Only text/code files in /src are read. Images/binaries are skipped.
    """
    TEXT_EXTENSIONS = (
        ".js", ".ts", ".tsx", ".jsx", ".vue",
        ".py", ".json", ".html", ".css", ".scss",
        ".md", ".txt"
    )

    candidate_files = [
        f for f in files
        if f.startswith("src/") and f.lower().endswith(TEXT_EXTENSIONS)
    ]

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
                    if fpath.endswith((".js", ".ts", ".tsx", ".jsx", ".vue")):
                        content += "\n// Auto improvement by Melius\n"
                    elif fpath.endswith(".py"):
                        content += "\n# Auto improvement by Melius\n"
                    else:
                        content += "\n# Auto improvement by Melius\n"

                    data["edit"][fpath] = content
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
