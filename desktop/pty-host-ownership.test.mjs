import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { once, EventEmitter } from 'node:events';
import { fileURLToPath } from 'node:url';
import { ptyExecMarker, ptyExecRuntime, ptyHostStopMarker, ptyHostStopRuntime, retainPtyExec, retainPtyHostStop } from './pty-host-ownership-customization.mjs';

const recovered = relative => readFile(new URL(`../backups/pty-host-ownership/${relative}`, import.meta.url), 'utf8');
const available = await recovered('out/main.js').then(() => true, () => false);
const producers = { skip: available ? false : 'run build:desktop first (recovered producers are read from backups/)' };
const linux = { skip: process.platform !== 'linux' ? 'Linux /proc identity' : false, timeout: 20000 };

test('pty host transform: every terminal starts through the exec wrapper; drift fails', producers, async () => {
  const text = await recovered('out/vs/platform/terminal/node/ptyHostMain.js');
  const patched = retainPtyExec(text);
  assert.equal(retainPtyExec(patched), patched);
  assert.equal(patched.split(ptyExecMarker).length, 2);
  assert.match(patched, /const r = openvisionPtyExec\([\w$]+, e\.executable, s, t\);/);
  assert.throws(() => retainPtyExec(text.replace('(this._ptyProcess = r)', '(this._other = r)')), /contract changed/);
  assert.throws(() => retainPtyExec(text + text), /ambiguous/);
});

test('main transform: quit joins a bounded pty host stop; drift fails', producers, async () => {
  const text = await recovered('out/main.js');
  const patched = retainPtyHostStop(text);
  assert.equal(retainPtyHostStop(patched), patched);
  assert.equal(patched.split(ptyHostStopMarker).length, 2);
  assert.ok(patched.includes('openvisionShutdown.join("openvisionPtyHost", openvisionStopPtyHost(this.utilityProcess));'));
  assert.throws(() => retainPtyHostStop(text.replace('processTitle: "terminal pty-host"', 'processTitle: "other"')), /contract changed/);
});

test('exec wrapper is used on Linux with the shell environment preserved for restoration', () => {
  const openvisionPtyExec = new Function('process', 'importMeta', `${ptyExecRuntime.replace('import.meta.dirname', 'importMeta')}; return openvisionPtyExec;`)(
    { platform: 'linux', execPath: '/runtime/openvision', env: {}, getBuiltinModule: name => name === 'node:fs' ? { existsSync: () => true } : { join: (...parts) => parts.join('/') } },
    '/app/out/vs/platform/terminal/node');
  const calls = [];
  openvisionPtyExec((...call) => calls.push(call), '/bin/bash', ['--noprofile'], { cwd: '/p', env: { A: '1', NODE_OPTIONS: '--x' } });
  assert.deepEqual(calls[0][0], '/runtime/openvision');
  assert.deepEqual(calls[0][1], ['/app/out/vs/platform/terminal/node/openvision-pty-exec.cjs', '--', '/bin/bash', '--noprofile']);
  assert.deepEqual(calls[0][2], { cwd: '/p', env: { A: '1', ELECTRON_RUN_AS_NODE: '1', OPENVISION_PTY_EXEC_NODE_OPTIONS: '--x' } });
});

// The stand-in owner wraps a real child process the way the main utility owner does.
function owner(ignoreTerm) {
  const child = spawn(process.execPath, ['-e', `${ignoreTerm ? "process.on('SIGTERM',()=>{});" : ''}setInterval(()=>{},1000)`], { stdio: 'ignore' });
  const events = new EventEmitter();
  child.once('exit', () => events.emit('exit'));
  return { child, owner: { process: child, processPid: child.pid, kill: () => child.kill(),
    onExit: listener => { events.on('exit', listener); return { dispose: () => events.off('exit', listener) }; } } };
}
const stopper = new Function('process', `${ptyHostStopRuntime}; return openvisionStopPtyHost;`)(process);

test('pty host stop: SIGTERM through the owned handle ends a cooperative host', linux, async () => {
  const { child, owner: handle } = owner(false);
  await new Promise(resolve => setTimeout(resolve, 200));
  await stopper(handle, 2000);
  assert.equal(child.signalCode, 'SIGTERM');
});

test('pty host stop: escalates to SIGKILL after the grace period for the same process only', linux, async () => {
  const { child, owner: handle } = owner(true);
  await new Promise(resolve => setTimeout(resolve, 300));
  const started = Date.now();
  await stopper(handle, 500);
  assert.equal(child.signalCode, 'SIGKILL');
  assert.ok(Date.now() - started < 3000);
});

test('pty host stop: never escalates for a process that is not this main process child', linux, async () => {
  const { child, owner: handle } = owner(true);
  await new Promise(resolve => setTimeout(resolve, 300));
  const foreign = { ...process, pid: process.pid + 1_000_000, platform: 'linux', getBuiltinModule: process.getBuiltinModule, kill: process.kill };
  await new Function('process', `${ptyHostStopRuntime}; return openvisionStopPtyHost;`)(foreign)(handle, 300);
  assert.equal(child.exitCode, null); assert.equal(child.signalCode, null);
  child.kill('SIGKILL'); await once(child, 'exit');
});
