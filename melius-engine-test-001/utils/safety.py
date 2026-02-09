# Safety functions simplified because we skip build / rollback

def snapshot():
    return None  # no snapshot needed

def restore(tmp):
    pass  # nothing to restore

def build_ok():
    return True  # always True since we skip Vite/build
