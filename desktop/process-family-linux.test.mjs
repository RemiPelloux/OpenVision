import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { growth, processFamily, processRole, stillAlive, summarize } from './process-family-linux.mjs';

const linux = { skip: process.platform !== 'linux' ? 'Linux /proc' : false, timeout: 20000 };

test('roles come from Electron metrics first, then the command line', () => {
  assert.equal(processRole({ type: 'Utility', name: 'extensionHost-4' }, ''), 'extension-host');
  assert.equal(processRole({ type: 'Utility', name: 'ptyHost-7' }, ''), 'pty-host');
  assert.equal(processRole({ type: 'Utility', name: 'shared-process-1' }, ''), 'shared-process');
  assert.equal(processRole({ type: 'Utility', name: 'fileWatcher-6' }, ''), 'file-watcher');
  assert.equal(processRole({ type: 'Browser' }, ''), 'main');
  assert.equal(processRole({ type: 'Tab' }, ''), 'renderer');
  assert.equal(processRole({ type: 'Utility', name: 'Network Service' }, ''), 'utility:Network Service');
  assert.equal(processRole(undefined, '/x/openvision --type=zygote', 'openvision'), 'zygote');
  assert.equal(processRole(undefined, '/bin/bash --noprofile --norc', 'bash'), 'child:shell');
  assert.equal(processRole(undefined, '/usr/bin/rg --json x', 'rg'), 'child:ripgrep');
});

test('growth reports strictly increasing steps and a least-squares slope', () => {
  assert.deepEqual(growth([1, 2, 3, 4]), { n: 4, increasingSteps: 3, slopeMiBPerIteration: 1, monotonic: true, first: 1, last: 4 });
  const noisy = growth([10, 12, 9, 11]);
  assert.equal(noisy.monotonic, false); assert.equal(noisy.increasingSteps, 2);
  assert.equal(growth([5]).monotonic, false);
});

test('summaries add USS, PSS and swap per role without RSS', () => {
  const summary = summarize([{ role: 'a', ussKiB: 1024, pssKiB: 2048, swapKiB: 512 }, { role: 'a', ussKiB: 1024, pssKiB: 1024, swapKiB: 0 }]);
  assert.equal(summary.ussMiB, 2); assert.equal(summary.pssMiB, 3); assert.equal(summary.swapMiB, 0.5);
  assert.equal(summary.privateWithSwapMiB, 2.5); assert.deepEqual(summary.roles.a, { count: 2, ussMiB: 2, pssMiB: 3, swapMiB: 0.5 });
});

test('the family follows descendants of the owned root only, with watcher detail', linux, async () => {
  const parent = spawn(process.execPath, ['-e', `
    const { spawn } = require('node:child_process');
    const child = spawn(process.execPath, ['-e', 'require("node:fs").watch("."); setInterval(() => {}, 1000)'], { stdio: 'ignore' });
    process.on('SIGTERM', () => { child.once('exit', () => process.exit(0)); child.kill(); });
    process.stdout.write(String(child.pid) + '\\n'); setInterval(() => {}, 1000);`], { stdio: ['ignore', 'pipe', 'ignore'] });
  const outsider = spawn(process.execPath, ['-e', 'setInterval(() => {}, 1000)'], { stdio: 'ignore' });
  try {
    const [line] = await once(parent.stdout, 'data');
    const childPid = Number(String(line).trim());
    await new Promise(done => setTimeout(done, 300));
    const family = await processFamily({ rootPid: parent.pid, groups: [], detail: true });
    const pids = family.map(item => item.pid);
    assert.ok(pids.includes(parent.pid) && pids.includes(childPid));
    assert.ok(!pids.includes(outsider.pid) && !pids.includes(process.pid));
    const child = family.find(item => item.pid === childPid);
    assert.ok(child.ussKiB > 0 && child.pssKiB > 0 && child.inotifyWatches >= 1, JSON.stringify(child));
    assert.deepEqual((await stillAlive(family)).length, family.length);
  } finally {
    // Only the handles started by this test.
    const ended = once(parent, 'exit'); parent.kill(); outsider.kill(); await ended;
  }
});
