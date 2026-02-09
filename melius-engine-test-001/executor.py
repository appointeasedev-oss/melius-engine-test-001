from utils.repo import read
from utils.writer import write

def execute(plan):
    context = {f: read(f) for f in plan["read"]}
    for path, content in plan["edit"].items():
        write(path, content)
