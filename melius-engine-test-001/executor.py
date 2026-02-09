from pathlib import Path

def execute(plan):
    """
    Writes improved code safely to files.
    plan["edit"] = { "path": "improved code string" }
    """
    for fpath, improved_code in plan.get("edit", {}).items():
        path = Path(fpath)
        if not path.parent.exists():
            path.parent.mkdir(parents=True, exist_ok=True)
        # Write code safely
        path.write_text(improved_code)
