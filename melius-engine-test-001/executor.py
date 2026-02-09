from pathlib import Path

def is_code_file(fpath):
    """
    Returns True if the file is a text/code file we want to improve.
    Skips binaries like images, fonts, etc.
    """
    TEXT_EXTENSIONS = (
        ".js", ".ts", ".tsx", ".jsx", ".vue",
        ".py", ".json", ".html", ".css", ".scss",
        ".md", ".txt"
    )
    return fpath.lower().endswith(TEXT_EXTENSIONS)

def execute(plan):
    """
    Execute AI improvement plan safely.
    Writes improved code to disk.
    """
    edits = plan.get("edit", {})
    for fpath, improved_code in edits.items():
        # Skip files that are not code
        if not is_code_file(fpath):
            continue

        # Ensure parent folder exists
        Path(fpath).parent.mkdir(parents=True, exist_ok=True)

        # Write improved code safely
        try:
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(improved_code)
            print(f"[executor] Updated {fpath}")
        except Exception as e:
            print(f"[executor] Failed to write {fpath}: {e}")
