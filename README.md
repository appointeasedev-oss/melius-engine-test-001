Melius Engine Test 001
Overview

Melius Engine Test 001 is an autonomous AI-powered code improvement agent designed to continuously improve a project’s codebase automatically. It works as an AI software editor, reading files, analyzing them, improving the code, and committing changes — all without manual intervention.

The project is structured as a test framework to demonstrate the continuous AI-driven code improvement workflow.

Features

Autonomous Code Improvement: Automatically reads, analyzes, and improves code files inside /src.

Safe Execution: Ensures only valid code is written; images/binaries are skipped.

Fallback Minimal Changes: Even if AI fails, safe minimal edits ensure files remain valid.

Long-Term Memory: Stores improvement history in /melius-engine-test-001/memory/long_term.json.

Logging: Keeps logs of all improvements in /melius-engine-test-001/logs/history.json and /docs/logs.json.

Incremental Improvement: Can limit number of files per run to avoid long execution times.

Fully Automated: Integrates with GitHub Actions or any CI/CD system.

Project Structure
melius-engine-test-001/
│
├─ agent.py               # Main orchestration agent
├─ planner.py             # AI improvement planner
├─ executor.py            # Executes improvements safely
├─ core_soul.py           # Core AI instructions (persona and rules)
├─ memory/
│  └─ long_term.json      # Long-term memory storage
├─ logs/
│  └─ history.json        # Local improvement logs
├─ utils/
│  ├─ llm.py              # Chat/AI API interface
│  ├─ repo.py             # Repo file reading/listing
│  ├─ writer.py           # Safe file writing utilities
│  └─ safety.py           # Snapshots & restore utilities
├─ src/                   # Sample project folder (React/Vite app, JS, TS, etc.)
│  └─ *.jsx, *.js, *.ts   # Code files to improve
└─ docs/
   └─ logs.json           # Public log view

Workflow & Flow Diagram

The workflow of Melius Engine is multi-step, and can be visualized as follows:

┌──────────────────┐
│ GitHub Repo       │
│ (src/ codebase)   │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Agent.py          │
│ - Bootstrap       │
│ - Load memory/log │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Planner.py        │
│ - Filter /src files only      │
│ - Skip images/binaries        │
│ - Send files to AI            │
│ - Return improvements dict    │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Executor.py       │
│ - Write AI-improved code safely │
│ - Minimal fallback edits         │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Logs & Memory     │
│ - Update history.json            │
│ - Update long_term.json          │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Git Commit        │
│ - Push improvements to main repo│
└──────────────────┘


Optional GitHub Actions Integration:

Runs every 7 minutes

Automatically executes the above workflow

Commits improvements and logs automatically

Installation & Setup (Test Environment)

Clone Repository

git clone https://github.com/appointeasedev-oss/melius-engine-test-001.git
cd melius-engine-test-001


Install Python Dependencies

pip install -r requirements.txt


Set AI API Keys

Place your OpenAI / LLM API keys in repo environment variables as required.

Ensure they are accessible by utils/llm.py.

Run Agent (Test Mode)

python melius-engine-test-001/agent.py


The agent will read /src files, improve them, and update memory/logs.

Any invalid edits are safely skipped or replaced with fallback edits.

Logs & Memory

memory/long_term.json: Stores project model, improvement history, and next targets.

logs/history.json: Records timestamped summaries of changes.

docs/logs.json: Public logs view for GitHub Pages or other static display.

Development Notes

The agent can be extended to other codebases by changing the /src path.

Only text/code files are processed. Images, binaries, and non-code files are ignored.

Each improvement cycle is incremental to prevent long runtime.

AI output is validated and sanitized before writing to prevent build errors (e.g., no JSON in JSX).

Future Enhancements

Parallel AI calls to reduce runtime for large codebases.

Prioritize files that previously caused build errors.

Visualization of improvements over time using logs.

Integration with CI/CD pipelines for fully autonomous operation.

License

MIT License © Sparrow AI Solutions
