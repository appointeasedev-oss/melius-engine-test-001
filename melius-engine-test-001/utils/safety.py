import subprocess, shutil, tempfile

def snapshot():
    tmp = tempfile.mkdtemp()
    shutil.copytree(".", tmp, dirs_exist_ok=True)
    return tmp

def restore(tmp):
    shutil.copytree(tmp, ".", dirs_exist_ok=True)

def build_ok():
    try:
        subprocess.run(["npm", "run", "build"], check=True)
        return True
    except:
        return False
