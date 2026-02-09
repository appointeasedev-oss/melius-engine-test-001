from pathlib import Path

EXCLUDE = {
    ".git", ".github", "node_modules", "melius-engine-test-001", "docs"
}

def list_files():
    return [
        str(p)
        for p in Path(".").rglob("*")
        if p.is_file() and not any(x in p.parts for x in EXCLUDE)
    ]

def read(path):
    return Path(path).read_text(encoding="utf-8")
