import assert from 'node:assert/strict';
import test from 'node:test';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { discoverKernelSpecs, JupyterKernelSession, maxNotebookOutputBytes, notebookCancellationGraceMs } from './jupyter-kernel.mjs';

const root = resolve(import.meta.dirname, '..');
const bridgePath = join(root, 'source/app/extensions/openvision-jupyter/kernel_bridge.py');

test('discovers local Jupyter kernels without a hosted service', async () => {
  const kernels = await discoverKernelSpecs('python');
  assert.ok(kernels.some(kernel => kernel.id === 'python3'));
  assert.ok(kernels.every(kernel => kernel.displayName));
});

test('keeps one local kernel state across cells and reports rich results/errors', async () => {
  const cwd = await mkdtemp(join(tmpdir(), 'openvision-jupyter-'));
  const session = new JupyterKernelSession({ cwd, pythonPath: 'python', bridgePath });
  try {
    const first = await session.execute('value = 21\nprint("ready")');
    assert.equal(first.success, true);
    assert.ok(first.events.some(event => event.type === 'stream' && event.text.includes('ready')));
    const second = await session.execute('value * 2');
    assert.equal(second.success, true);
    assert.ok(second.events.some(event => event.type === 'result' && event.data['text/plain']?.includes('42')));
    const failed = await session.execute('raise ValueError("cell failed")');
    assert.equal(failed.success, false);
    assert.ok(failed.events.some(event => event.type === 'error' && event.evalue.includes('cell failed')));
  } finally { await session.dispose(); await rm(cwd, { recursive: true, force: true }); }
});

test('interrupts a running cell and releases the kernel', async () => {
  const cwd = await mkdtemp(join(tmpdir(), 'openvision-jupyter-interrupt-'));
  const session = new JupyterKernelSession({ cwd, pythonPath: 'python', bridgePath });
  const controller = new AbortController();
  try {
    await session.start();
    const running = session.execute('import time\ntime.sleep(30)', { signal: controller.signal });
    await new Promise(resolve => setTimeout(resolve, 500));
    controller.abort();
    await assert.rejects(running, /cancelled/);
    assert.ok(notebookCancellationGraceMs <= 2_000);
  } finally { await session.dispose(); await rm(cwd, { recursive: true, force: true }); }
});

test('bridge and extension manifest are packaged inputs with bounded output defaults', async () => {
  const manifest = JSON.parse(await readFile(join(root, 'source/app/extensions/openvision-jupyter/package.json'), 'utf8'));
  assert.equal(manifest.publisher, 'openvision');
  assert.equal(manifest.main, './extension.js');
  assert.equal(maxNotebookOutputBytes, 2_000_000);
  assert.match(await readFile(bridgePath, 'utf8'), /KernelManager/);
});
