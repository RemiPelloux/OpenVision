import { spawn, spawnSync } from 'node:child_process';
import { createInterface } from 'node:readline';
import { randomUUID } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export const maxNotebookOutputBytes = 2_000_000;
export const notebookCancellationGraceMs = 2_000;

const defaultBridge = join(dirname(fileURLToPath(import.meta.url)), '../source/app/extensions/openvision-jupyter/kernel_bridge.py');

function pythonCommand(configured) {
  return configured || process.env.OPENVISION_JUPYTER_PYTHON || (process.platform === 'win32' ? 'python' : 'python3');
}

function spawnJson(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: ['ignore', 'pipe', 'pipe'], windowsHide: true, ...options });
    let stdout = '', stderr = '';
    child.stdout.setEncoding('utf8'); child.stderr.setEncoding('utf8');
    child.stdout.on('data', chunk => { stdout += chunk; }); child.stderr.on('data', chunk => { stderr += chunk; });
    child.once('error', reject);
    child.once('close', code => code === 0 ? resolve(stdout) : reject(Error(stderr.trim() || `${command} exited ${code}`)));
  });
}

export async function discoverKernelSpecs(pythonPath) {
  const script = 'from jupyter_client.kernelspec import KernelSpecManager; import json; m=KernelSpecManager(); print(json.dumps({"kernelspecs": {name: {"display_name": m.get_kernel_spec(name).display_name, "argv": m.get_kernel_spec(name).argv} for name in m.find_kernel_specs()}}))';
  const text = await spawnJson(pythonCommand(pythonPath), ['-c', script]);
  const value = JSON.parse(text), kernels = value.kernelspecs ?? {};
  return Object.entries(kernels).map(([id, spec]) => ({ id, displayName: spec.display_name || id, argv: spec.argv })).sort((a, b) => a.displayName.localeCompare(b.displayName));
}

export class JupyterKernelSession {
  constructor({ cwd, pythonPath, kernelName = 'python3', bridgePath = defaultBridge }) {
    this.cwd = cwd; this.pythonPath = pythonCommand(pythonPath); this.kernelName = kernelName; this.bridgePath = bridgePath;
    this.pending = new Map(); this.sequence = 0; this.starting = undefined; this.closed = false;
  }

  async start() {
    if (this.starting) return this.starting;
    if (this.child) return;
    this.starting = new Promise((resolve, reject) => {
      this.child = spawn(this.pythonPath, ['-u', this.bridgePath, '--kernel', this.kernelName, '--cwd', this.cwd], {
        cwd: this.cwd, env: { ...process.env, PYTHONUNBUFFERED: '1' }, stdio: ['pipe', 'pipe', 'pipe'], windowsHide: true,
      });
      const lines = createInterface({ input: this.child.stdout });
      lines.on('line', line => this.#message(line));
      this.child.stderr.setEncoding('utf8');
      this.child.stderr.on('data', chunk => { this.stderr = `${this.stderr ?? ''}${chunk}`.slice(-8000); });
      this.child.once('error', error => { this.#fail(error); reject(error); });
      this.child.once('close', code => { if (!this.closed) this.#fail(Error(this.stderr?.trim() || `Jupyter kernel exited ${code}`)); });
      this.ready = resolve;
      this.startReject = reject;
    }).finally(() => { this.starting = undefined; });
    return this.starting;
  }

  #message(line) {
    let message;
    try { message = JSON.parse(line); } catch { return; }
    if (message.type === 'ready') { this.ready?.(); this.ready = undefined; return; }
    if (message.type === 'fatal') { const error = Error(message.error || 'Jupyter kernel failed to start'); this.startReject?.(error); this.#fail(error); return; }
    const request = this.pending.get(message.id);
    if (!request) return;
    if (message.type === 'done') { this.pending.delete(message.id); request.resolve({ success: message.success, events: request.events }); return; }
    request.events.push(message); request.onEvent?.(message);
  }

  #fail(error) {
    for (const request of this.pending.values()) request.reject(error);
    this.pending.clear(); this.startReject?.(error); this.ready = undefined;
  }

  #forceRestart(error) {
    const child = this.child;
    this.child = undefined;
    this.closed = true;
    this.#fail(error);
    if (child && child.exitCode === null) {
      if (process.platform === 'win32') spawnSync('taskkill', ['/PID', String(child.pid), '/T', '/F'], { windowsHide: true });
      else child.kill('SIGKILL');
    }
    this.closed = false;
    this.stderr = '';
  }

  async execute(code, { signal, onEvent } = {}) {
    await this.start();
    if (signal?.aborted) throw Error('Notebook execution cancelled');
    const id = `exec-${++this.sequence}-${randomUUID()}`;
    const result = new Promise((resolve, reject) => this.pending.set(id, { resolve, reject, events: [], onEvent }));
    let cancellationTimer;
    const abort = () => {
      this.interrupt();
      cancellationTimer = setTimeout(() => {
        if (this.pending.has(id)) this.#forceRestart(Error('Notebook execution cancelled after the kernel did not interrupt promptly'));
      }, notebookCancellationGraceMs);
    };
    signal?.addEventListener('abort', abort, { once: true });
    this.child.stdin.write(`${JSON.stringify({ id, method: 'execute', code })}\n`);
    try { return await result; } finally { signal?.removeEventListener('abort', abort); clearTimeout(cancellationTimer); }
  }

  interrupt() { if (this.child && !this.closed) this.child.stdin.write('{"method":"interrupt"}\n'); }

  async dispose() {
    if (!this.child || this.closed) return;
    this.closed = true;
    try { this.child.stdin.write('{"method":"shutdown"}\n'); } catch {}
    await new Promise(resolve => { const timer = setTimeout(resolve, 1500); this.child.once('close', () => { clearTimeout(timer); resolve(); }); });
    this.child.kill(); this.#fail(Error('Jupyter kernel stopped'));
  }
}
