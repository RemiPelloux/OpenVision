import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { openSync, closeSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const wrapper = fileURLToPath(new URL('./pty-exec.cjs', import.meta.url));
const linux = { skip: process.platform !== 'linux' ? 'Linux /proc descriptors' : false };
const probe = 'printf "%s|" "$$" "${ELECTRON_RUN_AS_NODE-unset}" "${NODE_OPTIONS-unset}" "${OV_KEEP-unset}"; ' +
  'ls /proc/self/fd | tr "\\n" " "; printf "|"; grep -m1 SigIgn /proc/self/status';

function run(env, extraFds = 0) {
  const fds = Array.from({ length: extraFds }, () => openSync('/dev/null', 'r'));
  try {
    // Extra stdio entries are inherited without close-on-exec, like pty masters.
    return spawnSync(process.execPath, [wrapper, '--', 'sh', '-c', probe],
      { env, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe', ...fds] });
  } finally { fds.forEach(fd => closeSync(fd)); }
}

test('closes inherited descriptors above 2 and execs the shell in place', linux, () => {
  const result = run({ PATH: process.env.PATH, OV_KEEP: 'yes' }, 3);
  assert.equal(result.status, 0, result.stderr);
  const [pid, , , keep, fds, sigIgn] = result.stdout.split('|');
  assert.equal(Number(pid), result.pid, 'exec replaces the wrapper: same PID');
  assert.equal(keep, 'yes');
  // Only stdio plus the descriptor `ls` opens for /proc/self/fd itself.
  assert.deepEqual(fds.trim().split(' ').map(Number).filter(fd => fd > 2).length, 1, fds);
  assert.match(sigIgn, /SigIgn:\s+0+\s*$/, 'the runtime\'s ignored signals must not reach the shell');
});

test('restores the shell environment the wrapper borrowed', linux, () => {
  const restored = run({ PATH: process.env.PATH, ELECTRON_RUN_AS_NODE: '1', OPENVISION_PTY_EXEC_NODE_OPTIONS: '--max-old-space-size=64',
    OPENVISION_PTY_EXEC_RUN_AS_NODE: 'user' });
  assert.equal(restored.status, 0, restored.stderr);
  assert.deepEqual(restored.stdout.split('|').slice(1, 3), ['user', '--max-old-space-size=64']);
  const absent = run({ PATH: process.env.PATH, ELECTRON_RUN_AS_NODE: '1' });
  assert.deepEqual(absent.stdout.split('|').slice(1, 3), ['unset', 'unset']);
});

test('reports a missing executable like the recovered fork path', linux, () => {
  const result = spawnSync(process.execPath, [wrapper, '--', 'openvision-no-such-shell'], { env: { PATH: '/nonexistent' }, encoding: 'utf8' });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /execvp\(3\) failed/);
});

test('control: without the wrapper the shell inherits the descriptors', linux, () => {
  const fds = [openSync('/dev/null', 'r'), openSync('/dev/null', 'r')];
  try {
    const result = spawnSync('sh', ['-c', 'ls /proc/self/fd | tr "\\n" " "'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe', ...fds] });
    assert.ok(result.stdout.trim().split(' ').map(Number).filter(fd => fd > 2).length >= 3, result.stdout);
  } finally { fds.forEach(fd => closeSync(fd)); }
});
