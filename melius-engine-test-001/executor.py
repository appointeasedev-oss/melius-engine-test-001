from utils.repo import read
from utils.writer import write

def execute(plan):
    # Read requested files (if any)
    for f in plan.get("read", []):
        read(f)

    # Apply edits safely
    for path, content in plan.get("edit", {}).items():
        if not path.startswith("src/"):
            continue  # hard safety gate
        write(path, content)
