import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { createServer } from 'node:net';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { randomUUID } from 'node:crypto';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { ownedProcessMarker, ownedProcessRuntime, ownedProcessTargets, retainOwnedProcessesDebugger,
  retainOwnedProcessesMain } from './owned-process-journal.mjs';

const linux = { skip: process.platform !== 'linux' ? 'Linux /proc identity journal' : false, timeout: 30000 };
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

// Recovered producers, from the build's first backups.
const recovered = relative => readFile(new URL(`../backups/owned-processes/${relative}`, import.meta.url), 'utf8');
const available = await recovered(ownedProcessTargets[0][0]).then(() => true, () => false);
const producers = { skip: available ? false : 'run build:desktop first (recovered producers are read from backups/)' };

test('main transform: idempotent; reaps at start and releases children at exit', producers, async () => {
  const text = await recovered('out/main.js');
  const patched = retainOwnedProcessesMain(text);
  assert.equal(retainOwnedProcessesMain(patched), patched);
  assert.equal(patched.split(ownedProcessMarker).length, 2);
  assert.ok(patched.includes('process.once("exit", () => openvisionOwnedProcesses.releaseChildren());'));
  assert.ok(patched.includes('setImmediate(() => openvisionOwnedProcesses.reap());'));
  assert.ok(patched.endsWith(text));
});

test('debugger transform: records internal-console debuggees only and keeps the strict prologue', producers, async () => {
  const text = await recovered('extensions/ms-vscode.js-debug/src/extension.js');
  const patched = retainOwnedProcessesDebugger(text);
  assert.equal(retainOwnedProcessesDebugger(patched), patched);
  assert.ok(/^\/\*[^\n]*\*\/\n"use strict";\n\/\* OpenVision owned process journal v1 \*\//.test(patched) ||
    patched.startsWith(`"use strict";\n${ownedProcessMarker}`));
  assert.equal(patched.split('openvisionOwnedProcesses.track(c.pid, "tree", (l) => c.once("exit", l));').length, 2);
  assert.throws(() => retainOwnedProcessesDebugger(text.replace('return e.console === "internalConsole";', 'return !0;')), /contract changed/);
});

// Behavior: a stand-in main process starts a stand-in owner (pty host or
// extension host) that records children. Fixture processes report to this test's
// nonce-authenticated socket; cleanup goes only through that socket.
async function harness(scenario) {
  const directory = await mkdtemp(join(tmpdir(), 'openvision-owned-processes-test-'));
  const token = randomUUID(), fixtures = new Map();
  const server = createServer(socket => {
    socket.setEncoding('utf8');
    socket.once('data', data => {
      const message = JSON.parse(data);
      if (message.token !== token) return socket.destroy();
      fixtures.set(message.name, { ...message, socket, closed: once(socket, 'close').then(() => true) });
    });
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  // Exits on SIGHUP/SIGTERM (default dispositions) or when the socket asks.
  const fixture = name => `const s=require('net').connect(${server.address().port},'127.0.0.1',()=>s.write(JSON.stringify({token:${JSON.stringify(token)},name:${JSON.stringify(name)},pid:process.pid})));` +
    `s.on('data',()=>process.exit(0));${name.includes('nohup') ? "process.on('SIGHUP',()=>{});" : ''}setInterval(()=>{},1000);setTimeout(()=>process.exit(9),60000);`;
  const runtime = ownedProcessRuntime(JSON.stringify(directory)).replace(`({ key: ${JSON.stringify(directory)} })`,
    `({ key: ${JSON.stringify(directory)}, directory: ${JSON.stringify(directory)} })`);
  const owner = join(directory, 'owner.cjs'), main = join(directory, 'main.cjs');
  await writeFile(owner, `${runtime}
const { spawn } = require('node:child_process');
const node = process.execPath;
// A process the user detached (its own session; never recorded).
spawn(node, ['-e', process.env.FX_detached], { detached: true, stdio: 'ignore' }).unref();
// A debuggee tree in the owner's group.
const debuggee = spawn(node, ['-e', "require('child_process').spawn(process.execPath, ['-e', process.env.FX_debuggeeChild], { stdio: 'ignore' });" + process.env.FX_debuggee], { stdio: 'ignore' });
openvisionOwnedProcesses.track(debuggee.pid, 'tree', l => debuggee.once('exit', l));
process.send?.('ready');
// Like a utility process, the stand-in owner ends when its parent goes away.
process.once('disconnect', () => process.exit(0));
setInterval(() => {}, 1000);
`);
  await writeFile(main, `${runtime}
process.once('exit', () => openvisionOwnedProcesses.releaseChildren());
if (process.argv[2] === 'restart') { openvisionOwnedProcesses.reap(500); setTimeout(() => process.exit(0), 2000); return; }
const owner = require('node:child_process').fork(${JSON.stringify(owner)}, { stdio: 'inherit' });
owner.once('message', () => process.send('ready'));
process.on('message', message => {
  if (message === 'kill-owner') owner.kill('SIGKILL');
  if (message === 'exit') process.exit(0); // graceful: owner still running
});
`);
  const env = { ...process.env };
  for (const name of ['detached', 'debuggee', 'debuggeeChild']) env[`FX_${name}`] = fixture(name);
  const host = spawn(process.execPath, [main], { stdio: ['ignore', 'inherit', 'inherit', 'ipc'], env });
  try {
    await once(host, 'message');
    for (let attempt = 0; fixtures.size < 3 && attempt < 100; attempt++) await pause(50);
    assert.equal(fixtures.size, 3, 'all fixtures reported');
    const records = (await readdir(directory, { recursive: true })).filter(name => name.endsWith('.json'));
    assert.equal(records.length, 1, 'one tree record');
    if (scenario === 'graceful') host.send('exit');
    else { host.send('kill-owner'); await pause(300); host.kill('SIGKILL'); }
    await once(host, 'exit');
    const ended = async (ms) => Object.fromEntries(await Promise.all([...fixtures].map(async ([name, entry]) =>
      [name, await Promise.race([entry.closed, pause(ms).then(() => false)])])));
    const result = { afterExit: await ended(1500) };
    if (scenario !== 'graceful') {
      // A record whose identity no longer matches (reused PID) must never be signalled.
      if (scenario === 'tampered') for (const name of (await readdir(directory, { recursive: true })).filter(item => item.endsWith('.json'))) {
        const path = join(directory, name), record = JSON.parse(await readFile(path, 'utf8'));
        await writeFile(path, JSON.stringify({ ...record, child: { ...record.child, start: '1' } }));
      }
      const restarted = spawn(process.execPath, [main, 'restart'], { stdio: 'inherit', env });
      await once(restarted, 'exit');
      result.afterRestart = await ended(500);
    }
    result.remainingRecords = (await readdir(directory, { recursive: true })).filter(name => name.endsWith('.json')).length;
    return result;
  } finally {
    for (const entry of fixtures.values()) if (!entry.socket.destroyed) entry.socket.write('exit');
    if (host.exitCode === null && host.signalCode === null) host.kill('SIGKILL');
    await pause(200); server.close(); await rm(directory, { recursive: true, force: true });
  }
}

test('graceful main exit ends recorded debuggee trees only', linux, async () => {
  const result = await harness('graceful');
  assert.deepEqual(result.afterExit, { detached: false, debuggee: true, debuggeeChild: true });
  assert.equal(result.remainingRecords, 0);
});

test('abrupt exit: the debuggee tree survives until the next start reclaims it', linux, async () => {
  const result = await harness('abrupt');
  assert.deepEqual(result.afterExit, { detached: false, debuggee: false, debuggeeChild: false });
  assert.deepEqual(result.afterRestart, { detached: false, debuggee: true, debuggeeChild: true });
  assert.equal(result.remainingRecords, 0);
});

test('next start never signals a recorded PID whose identity changed', linux, async () => {
  const result = await harness('tampered');
  assert.deepEqual(result.afterRestart, { detached: false, debuggee: false, debuggeeChild: false });
  assert.equal(result.remainingRecords, 0, 'mismatched records are discarded');
});
