import os
import json
from datetime import datetime
from pathlib import Path

BASE = Path("melius-engine-test-001")
LOGS = BASE / "logs"
LOGS.mkdir(parents=True, exist_ok=True)

LOG_FILE = LOGS / "run.log"

def log(msg):
    line = f"[{datetime.utcnow().isoformat()}] {msg}\n"
    LOG_FILE.write_text(
        LOG_FILE.read_text() + line if LOG_FILE.exists() else line
    )

def main():
    keys = os.environ.get("OPENROUTER_KEYS", "").strip().splitlines()

    log("Agent started")
    log(f"Detected {len(keys)} OpenRouter keys")

    # Simple guaranteed repo change (heartbeat)
    heartbeat = BASE / "heartbeat.txt"
    heartbeat.write_text(f"Last run: {datetime.utcnow().isoformat()}")

    log("Heartbeat updated")
    log("Agent finished successfully")

if __name__ == "__main__":
    main()
