import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { assertNodePtyMaster, ptyKillReleaseMarker, ptyKillReleaseRuntime, retainPtyKillRelease } from './pty-kill-release-customization.mjs';

const recovered = relative => readFile(new URL(`../backups/pty-kill-release/${relative}`, import.meta.url), 'utf8');
const available = await recovered('out/vs/platform/terminal/node/ptyHostMain.js').then(() => true, () => false);
const producers = { skip: available ? false : 'run build:desktop first (the recovered producer is read from backups/)' };

function runtime(platform = 'linux') {
  const timers = [];
  const release = new Function('process', 'setTimeout', `${ptyKillReleaseRuntime}; return openvisionReleasePty;`)(
    { platform }, (callback, ms) => { const timer = { callback, ms, unref() { this.unrefed = true; } }; timers.push(timer); return timer; });
  return { release, timers };
}
function fakePty() {
  const pty = { listeners: [], disposed: 0, destroyed: 0, logs: [],
    onExit(listener) { pty.listeners.push(listener); return { dispose: () => { pty.disposed++; } }; },
    _socket: { destroyed: false, destroy() { pty.destroyed++; this.destroyed = true; } } };
  return pty;
}
const log = pty => ({ info: message => pty.logs.push(message) });

test('kill transform: the killed pty is released after its hangup; idempotent; drift fails', producers, async () => {
  const text = await recovered('out/vs/platform/terminal/node/ptyHostMain.js');
  const patched = retainPtyKillRelease(text);
  assert.equal(retainPtyKillRelease(patched), patched);
  assert.equal(patched.split(ptyKillReleaseMarker).length, 2);
  assert.ok(patched.includes('openvisionReleasePty(this._ptyProcess, this._logService),\n            this._ptyProcess.kill());'));
  // The release is registered before the hangup is sent, inside the recovered _kill owner.
  assert.ok(patched.indexOf('openvisionReleasePty(this._ptyProcess') > patched.indexOf('async _kill() {'));
  assert.throws(() => retainPtyKillRelease(text.replace('this._onProcessExit.fire(this._exitCode || 0), this.dispose()', 'this.dispose()')), /contract changed/);
  assert.throws(() => retainPtyKillRelease(text.replace('this._ptyProcess.kill());', 'this._ptyProcess.destroy());')), /missing or ambiguous/);
});

test('node-pty master contract is checked', () => {
  assert.doesNotThrow(() => assertNodePtyMaster('_this._socket = new tty.ReadStream(term.fd);\nUnixTerminal.prototype.kill = function (signal) {'));
  assert.throws(() => assertNodePtyMaster('_this._master = new tty.ReadStream(term.fd);'), /contract changed/);
});

test('a shell that exits after the hangup keeps its master untouched', () => {
  const { release, timers } = runtime(), pty = fakePty();
  release(pty, log(pty));
  assert.equal(timers.length, 1); assert.equal(timers[0].ms, 1000); assert.ok(timers[0].unrefed);
  pty.listeners[0](); timers[0].callback();
  assert.equal(pty.destroyed, 0); assert.equal(pty.disposed, 1); assert.deepEqual(pty.logs, []);
});

test('a shell still running after the grace has its owned master closed once', () => {
  const { release, timers } = runtime(), pty = fakePty();
  release(pty, log(pty));
  timers[0].callback();
  assert.equal(pty.destroyed, 1); assert.equal(pty.disposed, 1); assert.equal(pty.logs.length, 1);
  // An already closed master is not closed again.
  const again = runtime(), second = fakePty(); second._socket.destroyed = true;
  again.release(second, log(second)); again.timers[0].callback();
  assert.equal(second.destroyed, 0);
});

test('Windows and missing ptys are unchanged', () => {
  const windows = runtime('win32'), pty = fakePty();
  windows.release(pty, log(pty));
  assert.equal(windows.timers.length, 0); assert.equal(pty.listeners.length, 0);
  const linux = runtime();
  assert.doesNotThrow(() => linux.release(undefined)); assert.doesNotThrow(() => linux.release({}));
  assert.equal(linux.timers.length, 0);
});
