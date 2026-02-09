import os, random, requests

KEYS = [k for k in os.environ["OPENROUTER_KEYS"].splitlines() if k.strip()]

def chat(messages, model="openai/gpt-4.1-mini"):
    key = random.choice(KEYS)
    r = requests.post(
        "https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {key}",
            "Content-Type": "application/json"
        },
        json={"model": model, "messages": messages},
        timeout=120
    )
    r.raise_for_status()
    return r.json()["choices"][0]["message"]["content"]
