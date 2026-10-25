import argparse
import json
import queue
import sys
import threading


MAX_EVENT_BYTES = 2_000_000


def emit(message):
    encoded = json.dumps(message, ensure_ascii=False, separators=(",", ":"))
    if len(encoded.encode("utf-8")) > MAX_EVENT_BYTES:
        encoded = json.dumps({"id": message.get("id"), "type": "error", "ename": "OutputLimit", "evalue": "Notebook output exceeded 2,000,000 bytes", "traceback": []})
    sys.stdout.write(encoded + "\n")
    sys.stdout.flush()


def read_commands(commands):
    for line in sys.stdin:
        try:
            commands.put(json.loads(line))
        except json.JSONDecodeError:
            emit({"type": "warning", "message": "Ignored malformed kernel command"})


def execute(request, client, manager, commands):
    request_id = request["id"]
    message_id = client.execute(request.get("code", ""), allow_stdin=False, stop_on_error=False)
    success = True
    while True:
        try:
            while True:
                command = commands.get_nowait()
                if command.get("method") == "interrupt":
                    manager.interrupt_kernel()
                    emit({"id": request_id, "type": "interrupt"})
                elif command.get("method") == "shutdown":
                    manager.shutdown_kernel(now=True)
        except queue.Empty:
            pass
        try:
            message = client.get_iopub_msg(timeout=0.1)
        except queue.Empty:
            continue
        parent = message.get("parent_header", {}).get("msg_id")
        if parent != message_id:
            continue
        content = message.get("content", {})
        kind = message.get("msg_type")
        if kind == "stream":
            emit({"id": request_id, "type": "stream", "name": content.get("name"), "text": content.get("text", "")})
        elif kind in ("execute_result", "display_data"):
            emit({"id": request_id, "type": "result" if kind == "execute_result" else "data", "data": content.get("data", {})})
        elif kind == "error":
            success = False
            emit({"id": request_id, "type": "error", "ename": content.get("ename"), "evalue": content.get("evalue"), "traceback": content.get("traceback", [])})
        elif kind == "status" and content.get("execution_state") == "idle":
            emit({"id": request_id, "type": "done", "success": success})
            return


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--kernel", default="python3")
    parser.add_argument("--cwd", required=True)
    args = parser.parse_args()
    commands = queue.Queue()
    threading.Thread(target=read_commands, args=(commands,), daemon=True).start()
    try:
        from jupyter_client import KernelManager
        manager = KernelManager(kernel_name=args.kernel)
        manager.start_kernel(cwd=args.cwd)
        client = manager.client()
        client.start_channels()
        client.wait_for_ready(timeout=30)
        emit({"type": "ready", "kernel": args.kernel})
        while True:
            request = commands.get()
            method = request.get("method")
            if method == "execute":
                execute(request, client, manager, commands)
            elif method == "interrupt":
                manager.interrupt_kernel()
            elif method == "shutdown":
                manager.shutdown_kernel(now=True)
                return
    except Exception as error:
        emit({"type": "fatal", "error": str(error)})
        return 1
    finally:
        try:
            client.stop_channels()
            manager.shutdown_kernel(now=True)
        except Exception:
            pass


if __name__ == "__main__":
    raise SystemExit(main() or 0)
