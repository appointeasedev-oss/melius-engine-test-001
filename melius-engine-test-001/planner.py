import json
from core_soul import CORE_SOUL
from utils.llm import chat

def plan(files, memory):
    response = chat([
        {"role": "system", "content": CORE_SOUL},
        {"role": "user", "content": json.dumps({
            "files": files,
            "memory": memory,
            "task": "Create a multi-step improvement plan"
        })}
    ])
    return json.loads(response)
