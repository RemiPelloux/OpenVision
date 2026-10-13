import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { cpus, totalmem, release } from 'node:os';
import { createHash } from 'node:crypto';
import { fileHash } from './import-files.mjs';

const execute = promisify(execFile);
const snapshotScript = fileURLToPath(new URL('./windows-process-snapshot.ps1', import.meta.url));

// Read-only ancestry observation, never authority for terminating a process.
export function observedProcessTree(processes, root) {
  const byPid = new Map(processes.map(process => [process.pid, process]));
  assert.equal(byPid.size, processes.length, 'Ambiguous duplicate PID in snapshot');
  const current = byPid.get(root.pid);
  assert.ok(current && Number.isFinite(current.createdMs), 'Owned main process missing from snapshot');
  assert.ok(Math.abs(current.createdMs - root.creationTime) < 2, 'Main process identity changed while sampling');
  const children = new Map();
  for (const process of processes) {
    if (!children.has(process.parentPid)) children.set(process.parentPid, []);
    children.get(process.parentPid).push(process);
  }
  const entries = [current], seen = new Set([current.pid]);
  for (const parent of entries)
    for (const process of children.get(parent.pid) ?? []) {
      if (seen.has(process.pid) || !Number.isFinite(process.createdMs) || process.createdMs < parent.createdMs) continue;
      seen.add(process.pid); entries.push(process);
    }
  for (const process of entries)
    for (const value of [process.privateBytes, process.workingSetBytes])
      assert.ok(Number.isSafeInteger(value) && value >= 0, 'Invalid process memory counter');
  return { processes: entries, privateBytes: entries.reduce((sum, process) => sum + process.privateBytes, 0),
    summedWorkingSetBytes: entries.reduce((sum, process) => sum + process.workingSetBytes, 0) };
}

export async function memorySample(app, label) {
  const started = performance.now();
  const electron = await app.evaluate(({ app }) => ({ mainPid: process.pid, metrics: app.getAppMetrics(), versions: process.versions }));
  const main = electron.metrics.find(entry => entry.pid === electron.mainPid);
  assert.ok(main, 'Electron must identify its owned main process');
  const result = { label, at: new Date().toISOString(), electron };
  if (process.platform === 'win32') {
    const { stdout } = await execute('powershell.exe', ['-NoProfile', '-NonInteractive', '-Command', await readFile(snapshotScript, 'utf8')],
      { windowsHide: true, timeout: 15000, maxBuffer: 4 * 1024 * 1024 });
    result.observedTree = observedProcessTree(JSON.parse(stdout), { pid: main.pid, creationTime: main.creationTime });
    assert.equal(await app.evaluate(() => process.pid), main.pid, 'Attached main process changed during sampling');
  } else result.observedTree = { unknown: 'Native process ancestry sampler implemented only for Windows' };
  result.samplingMs = Math.round(performance.now() - started);
  return result;
}

export function requestMeasurement(body, payload) {
  return { bodyBytes: Buffer.byteLength(body), bodySha256: createHash('sha256').update(body).digest('hex'),
    messageBytes: Buffer.byteLength(JSON.stringify(payload.messages ?? [])),
    toolSchemaBytes: Buffer.byteLength(JSON.stringify(payload.tools ?? [])),
    inputTokens: null, inputTokensReason: 'Fixture has no provider tokenizer or reported input usage' };
}

export async function baselineIdentity(manifest) {
  const reports = dirname(manifest.input_manifest);
  const inventoryPath = join(reports, 'installation-manifest.json');
  const inventory = JSON.parse(await readFile(inventoryPath, 'utf8'));
  const executable = inventory.files.find(file => /^(?:Cursor|cursor)\.exe$/.test(file.path));
  assert.ok(executable, 'Windows original executable identity is required for this baseline');
  const digest = await fileHash(join(inventory.snapshot_directory, executable.path));
  assert.equal(digest, executable.sha256, 'Original snapshot bytes differ from their inventory');
  const processors = cpus();
  return { original: { version: inventory.application.version, vscodeVersion: inventory.application.vscode_version,
    executableSha256: digest, installationManifestSha256: await fileHash(inventoryPath),
    readabilityManifestSha256: await fileHash(manifest.input_manifest) },
    hardware: { cpu: processors[0]?.model, logicalProcessors: processors.length, totalMemoryBytes: totalmem(), osRelease: release() },
    samplerSha256: await fileHash(fileURLToPath(import.meta.url)), windowsSamplerSha256: await fileHash(snapshotScript),
    workload: 'verify-agent-v1: fresh profile, stream, Read, two multifile reviews, command deny/allow/stop, stream Stop, restart and resume',
    limits: ['Fresh-profile startup is not cold OS-cache startup.',
      'Private bytes are committed private memory, not resident RAM; summed working sets can double-count shared pages.',
      'CIM ancestry is a point-in-time observation; exited or reparented descendants may be absent.',
      'Samples are not a continuous peak or long-session leak measurement.',
      'Loopback provider request counts and latency do not establish live-model performance.'] };
}
