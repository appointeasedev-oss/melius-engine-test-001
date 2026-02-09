# 🧠 Melius Engine Test 001

**By Sparrow AI Solutions**

---

## Overview

**Melius Engine Test 001** is an autonomous AI-powered **code improvement agent** designed to continuously improve a project’s codebase automatically. It functions as an **AI software editor**, reading files, analyzing them, improving the code, and committing changes — all without manual intervention.

This project serves as a test framework to demonstrate the **continuous AI-driven code improvement workflow**.

---

## Features

- **Autonomous Code Improvement**: Automatically reads, analyzes, and improves code files inside `/src`.
- **Safe Execution**: Only valid code is written; images, binaries, and non-code files are skipped.
- **Fallback Minimal Changes**: Even if AI fails, safe minimal edits keep files valid.
- **Long-Term Memory**: Stores improvement history in `/melius-engine-test-001/memory/long_term.json`.
- **Logging**: Records logs of all improvements in `/melius-engine-test-001/logs/history.json` and `/docs/logs.json`.
- **Incremental Improvement**: Can limit the number of files per run to reduce execution time.
- **Fully Automated**: Integrates easily with GitHub Actions or any CI/CD system.

---

## Project Structure

melius-engine-test-001/
│
├─ agent.py # Main orchestration agent
├─ planner.py # AI improvement planner
├─ executor.py # Executes improvements safely
├─ core_soul.py # Core AI instructions (persona and rules)
├─ memory/
│ └─ long_term.json # Long-term memory storage
├─ logs/
│ └─ history.json # Local improvement logs
├─ utils/
│ ├─ llm.py # Chat/AI API interface
│ ├─ repo.py # Repo file reading/listing
│ ├─ writer.py # Safe file writing utilities
│ └─ safety.py # Snapshots & restore utilities
├─ src/ # Sample project folder (React/Vite app, JS, TS, etc.)
│ └─ *.jsx, *.js, *.ts # Code files to improve
└─ docs/
└─ logs.json # Public log view


---

## Workflow & Flow Diagram

The Melius Engine workflow is **multi-step**, as shown below:

┌──────────────────┐
│ GitHub Repo │
│ (src/ codebase) │
└────────┬─────────┘
│
▼
┌──────────────────┐
│ Agent.py │
│ - Bootstrap │
│ - Load memory/log │
└────────┬─────────┘
│
▼
┌──────────────────┐
│ Planner.py │
│ - Filter /src files only │
│ - Skip images/binaries │
│ - Send files to AI │
│ - Return improvements dict │
└────────┬─────────┘
│
▼
┌──────────────────┐
│ Executor.py │
│ - Write AI-improved code safely │
│ - Minimal fallback edits │
└────────┬─────────┘
│
▼
┌──────────────────┐
│ Logs & Memory │
│ - Update history.json │
│ - Update long_term.json │
└────────┬─────────┘
│
▼
┌──────────────────┐
│ Git Commit │
│ - Push improvements to main repo│
└──────────────────┘


---

## Installation & Setup (Test Environment)

1. **Clone the Repository**

```bash
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

Only text/code files are processed; images/binaries are ignored.

Each improvement cycle is incremental to prevent long runtime.

AI output is validated and sanitized before writing to prevent build errors (e.g., no JSON in JSX).

Future Enhancements
Parallel AI calls to reduce runtime for large codebases.

Prioritize files that previously caused build errors.

Visualization of improvements over time using logs.

Integration with CI/CD pipelines for fully autonomous operation.

License
MIT License © 2026 Sparrow AI Solutions
