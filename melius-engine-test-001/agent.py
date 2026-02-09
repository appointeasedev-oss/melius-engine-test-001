import json
import datetime
from pathlib import Path

from utils.repo import list_files
from planner import plan
from executor import execute, is_code_file

# ------------------- Paths -------------------
BASE = Path("melius-engine-test-001")
MEMORY_DIR = BASE / "memory"
LOG_DIR = BASE / "logs"
MEM = MEMORY_DIR / "long_term.json"
LOG = LOG_DIR / "history.json"
DOC_LOG = Path("docs/logs.json")

# ------------------- Bootstrap -------------------
def ensure_bootstrap():
    MEMORY_DIR.mkdir(parents=True, exist_ok=True)
    LOG_DIR.mkdir(parents=True, exist_ok=True)
    DOC_LOG.parent.mkdir(parents=True, exist_ok=True)

    if not MEM.exists():
        MEM.write_text(json.dumps({
            "project_model": "",
            "improvement_history": [],
            "future_targets": []
        }, indent=2))

    if not LOG.exists():
        LOG.write_text("[]")

    if not DOC_LOG.exists():
        DOC_LOG.write_text("[]")

# ------------------- Memory Utilities -------------------
def load(path: Path):
    return json.loads(path.read_text())

def save(path: Path, data):
    path.write_text(json.dumps(data, indent=2))

# ------------------- Main Agent -------------------
def main():
    ensure_bootstrap()

    # Load memory
    memory = load(MEM)

    # List all files in project
    files = list_files()

    # Filter only allowed code/text files
    files_to_improve = [f for f in files if is_code_file(f)]

    if not files_to_improve:
        print("[MELIUS] No valid files to improve")
        return

    # ---------- PLAN ----------
    improvement_plan = plan(files_to_improve, memory)

    # ---------- EXECUTE ----------
    execute(improvement_plan)

    # ---------- LOGGING ----------
    entry = {
        "time": datetime.datetime.utcnow().isoformat() + "Z",
        "summary": improvement_plan.get("summary", ""),
        "files": list(improvement_plan.get("edit", {}).keys())
    }

    history = load(LOG)
    history.append(entry)
    save(LOG, history)
    save(DOC_LOG, history)  # For GitHub Pages/public view

    # ---------- MEMORY UPDATE ----------
    memory["improvement_history"].append(entry["summary"])
    memory["future_targets"] = improvement_plan.get("next", [])
    save(MEM, memory)

    print(f"[MELIUS] Applied improvements to {len(entry['files'])} file(s): {entry['files']}")

# ------------------- Entry Point -------------------
if __name__ == "__main__":
    main()
