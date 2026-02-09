import json
import re
from core_soul import CORE_SOUL
from utils.llm import chat

JSON_RE = re.compile(r"\{.*\}", re.S)

def extract_json(text: str) -> dict:
    match = JSON_RE.search(text)
    if not match:
        raise ValueError("No JSON found in LLM response")
    return json.loads(match.group())


def plan(files, memory, retries=3):
    prompt = [
        {"role": "system", "content": CORE_SOUL},
        {"role": "user", "content": json.dumps({
            "files": files,
            "memory": memory,
            "STRICT_RULE": "Return ONLY valid JSON. No text. No markdown."
        })}
    ]

    for attempt in range(retries):
        response = chat(prompt)

        try:
            data = extract_json(response)

            # minimal schema validation
            if not isinstance(data, dict):
                raise ValueError("Plan is not an object")

            data.setdefault("read", [])
            data.setdefault("edit", {})
            data.setdefault("summary", "")
            data.setdefault("next", [])

            return data

        except Exception as e:
            prompt.append({
                "role": "assistant",
                "content": response
            })
            prompt.append({
                "role": "user",
                "content": f"ERROR: {e}. Return ONLY corrected JSON."
            })

    # ultimate fallback — safe no-op improvement
    return {
        "read": [],
        "edit": {},
        "summary": "No safe improvement generated this cycle",
        "next": []
    }
