import os
from pathlib import Path
import shutil

# Only allow text/code file types
ALLOWED_EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx', '.py', '.html', '.css', '.md', '.json', '.txt']

def is_code_file(file_path: str) -> bool:
    return any(file_path.endswith(ext) for ext in ALLOWED_EXTENSIONS)

def write_file_safe(file_path: str, content: str):
    """
    Write improved code safely:
    - Avoid JSON injection
    - Keep JSX/JS syntax intact
    - Optional safe comment at the end
    """
    if not is_code_file(file_path):
        return  # Skip images/binaries

    try:
        # Ensure directory exists
        os.makedirs(os.path.dirname(file_path), exist_ok=True)

        # Remove leading/trailing JSON brackets if AI output is malformed
        content = content.strip()
        if content.startswith("{") and content.endswith("}"):
            # Check for AI metadata mistakenly injected
            if '"files_to_read"' in content or '"improvement_plan"' in content:
                # Strip metadata (keep only raw code part if possible)
                content = "// Auto improvement applied\n"

        # Add safe comment at the end
        content += "\n// Auto improvement by Melius\n"

        # Write to file
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)

    except Exception as e:
        print(f"[executor] Error writing file {file_path}: {e}")

def restore_snapshot(snapshot_dir: str, target_dir: str):
    """
    Restore snapshot safely (used for rollback)
    """
    if not os.path.exists(snapshot_dir):
        return
    try:
        for item in os.listdir(snapshot_dir):
            s = os.path.join(snapshot_dir, item)
            d = os.path.join(target_dir, item)
            if os.path.isdir(s):
                shutil.copytree(s, d, dirs_exist_ok=True)
            else:
                shutil.copy2(s, d)
    except Exception as e:
        print(f"[executor] Error restoring snapshot: {e}")
