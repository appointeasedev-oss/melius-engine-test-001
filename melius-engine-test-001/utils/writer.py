from pathlib import Path

def write(path, content):
    Path(path).write_text(content, encoding="utf-8")
