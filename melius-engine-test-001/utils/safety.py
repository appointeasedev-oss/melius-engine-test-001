import shutil
import tempfile
from pathlib import Path
import subprocess

EXCLUDE = {".git", "node_modules"}

def snapshot():
    tmp = Path(tempfile.mkdtemp())
    for p in Path(".").rglob("*"):
        if any(x in p.parts for x in EXCLUDE):
            continue
        dest = tmp / p.relative_to(".")
        dest.parent.mkdir(parents=True, exist_ok=True)
        if p.is_file():
            shutil.copy2(p, dest)
    return tmp

def restore(tmp):
    for p in tmp.rglob("*"):
        dest = Path(".") / p.relative_to(tmp)
        dest.parent.mkdir(parents=True, exist_ok=True)
        if p.is_file():
            shutil.copy2(p, dest)

def build_ok():
    try:
        subprocess.run(["npm", "run", "build"], check=True)
        return True
    except:
        return False
