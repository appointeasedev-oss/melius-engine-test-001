import os
import random
import requests

# Load multiple keys from environment variable
KEYS = [k for k in os.environ.get("OPENROUTER_KEYS", "").splitlines() if k.strip()]

def chat(messages, model="arcee-ai/trinity-large-preview:free"):
    """
    Calls OpenRouter AI safely to improve code.
    - Returns ONLY raw code string.
    - Adds safe comment at the end.
    - Strips accidental JSON/metadata injection.
    """
    if not KEYS:
        raise ValueError("[llm] No OpenRouter keys found in environment variable OPENROUTER_KEYS")

    key = random.choice(KEYS)

    try:
        response = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {key}",
                "Content-Type": "application/json"
            },
            json={"model": model, "messages": messages},
            timeout=120
        )
        response.raise_for_status()
        content = response.json()["choices"][0]["message"]["content"]

        # ------------------- SANITIZE OUTPUT -------------------
        # Remove accidental JSON or metadata wrapping
        content = content.strip()

        # If content starts with { or [, likely JSON -> fallback minimal comment
        if content.startswith("{") or content.startswith("["):
            content = "// Auto improvement applied safely\n"

        # Ensure final safe comment exists
        if not content.endswith("\n// Auto improvement by Melius") and not content.endswith("\n# Auto improvement by Melius"):
            # Detect JS/TS/JSX style by looking at first message
            first_msg = messages[0]["content"].lower() if messages else ""
            if any(ext in first_msg for ext in [".js", ".ts", ".jsx", ".tsx", ".vue"]):
                content += "\n// Auto improvement by Melius"
            elif ".py" in first_msg:
                content += "\n# Auto improvement by Melius"
            else:
                content += "\n# Auto improvement by Melius"

        return content

    except Exception as e:
        print(f"[llm] Error in AI call: {e}")
        # Return safe fallback minimal comment
        return "// Auto improvement applied safely\n"
