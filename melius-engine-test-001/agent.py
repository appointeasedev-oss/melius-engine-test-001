import json, datetime
from utils.repo import list_files
from utils.safety import snapshot, restore, build_ok
from planner import plan
from executor import execute

MEM = "melius-engine-test-001/memory/long_term.json"
LOG = "melius-engine-test-001/logs/history.json"
DOC_LOG = "docs/logs.json"

def load(p): return json.load(open(p))
def save(p, d): json.dump(d, open(p, "w"), indent=2)

def main():
    memory = load(MEM)
    files = list_files()

    improvement_plan = plan(files, memory)

    snap = snapshot()
    execute(improvement_plan)

    if not build_ok():
        restore(snap)
        return

    entry = {
        "time": datetime.datetime.utcnow().isoformat(),
        "summary": improvement_plan["summary"],
        "files": list(improvement_plan["edit"].keys())
    }

    history = load(LOG)
    history.append(entry)
    save(LOG, history)
    save(DOC_LOG, history)

    memory["improvement_history"].append(entry["summary"])
    memory["future_targets"] = improvement_plan.get("next", [])
    save(MEM, memory)

if __name__ == "__main__":
    main()
