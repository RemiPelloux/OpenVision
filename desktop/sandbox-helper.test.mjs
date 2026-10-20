import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn, spawnSync } from 'node:child_process';
import { once } from 'node:events';
import { existsSync } from 'node:fs';
import { mkdtemp, mkdir, readFile, readdir, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { compileLandlockHelper, helperModes, installHelperReplacements, landlockSignature } from './helper-replacement-customization.mjs';

// OV-803 replacement for the Agent command sandbox (desktop/sandbox-helper).
// Authority, malformed input, exit status, descriptor inheritance and cleanup
// are checked on the compiled helper; the same authority matrix runs against
// the original cursorsandbox when a prepared source build provides it.
const root = resolve(import.meta.dirname, '..');
const originalHelper = join(root, 'source/app/resources/helpers/cursorsandbox');
const linux = process.platform === 'linux' && process.arch === 'x64';
const compiler = linux && spawnSync(process.env.CC || 'cc', ['--version']).status === 0;
const landlock = linux && spawnSync('python3', ['-c', 'import ctypes;l=ctypes.CDLL(None,use_errno=True);print(l.syscall(444,None,0,1))'], { encoding: 'utf8' }).stdout?.trim();
const abi = Number(landlock) || 0;
const skip = !linux ? 'Linux x64 only' : !compiler ? 'No C compiler' : abi < 3 ? `Landlock ABI ${abi} < 3` : false;

let work, helper, seq = 0;
test.before(async () => {
  if (skip) return;
  // Not below the system temporary directory, which both helpers keep writable.
  await mkdir(join(root, 'logs'), { recursive: true });
  work = await mkdtemp(join(root, 'logs/sandbox-helper-test-'));
  helper = join(work, 'cursorsandbox');
  compileLandlockHelper(root, helper);
});
test.after(async () => { if (work) await rm(work, { recursive: true, force: true }); });

async function fixture(name) {
  const base = join(work, name); await mkdir(join(base, 'ws'), { recursive: true }); await mkdir(join(base, 'outside'), { recursive: true });
  return base;
}
async function policy(base, sandbox = {}, extra = {}) {
  const file = join(base, `policy-${++seq}.json`);
  await writeFile(file, JSON.stringify({ sandbox: { type: 'workspace_readwrite', cwd: join(base, 'ws'), readBoundary: 'system', hardcodedReadPaths: [],
    additionalReadonlyPaths: {}, networkAccess: false, additionalReadwritePaths: [], disableTmpWrite: false, ...sandbox }, ...extra }), { mode: 0o600 });
  return file;
}
const run = (binary, args, options = {}) => spawnSync(binary, args, { encoding: 'utf8', timeout: 20000, ...options });

// The authority matrix, shared by the replacement and the original helper.
async function authority(binary, base) {
  const ws = join(base, 'ws'), outside = join(base, 'outside');
  const sh = async (script, sandbox) => run(binary, ['--policy', await policy(base, sandbox), '--', '/bin/sh', '-c', script], { cwd: ws });
  const python = async (code, sandbox) => run(binary, ['--policy', await policy(base, sandbox), '--', 'python3', '-c', code], { cwd: ws });
  return {
    preflight: run(binary, ['--policy', await policy(base), '--preflight-only', '--', '/bin/true']).status,
    workspaceWrite: (await sh(`echo inside > '${ws}/inside.txt'`)).status === 0 && existsSync(join(ws, 'inside.txt')),
    outsideWriteDenied: (await sh(`echo outside > '${outside}/escape.txt'`)).status !== 0 && !existsSync(join(outside, 'escape.txt')),
    readonlyWorkspaceDenied: (await sh(`echo ro > '${ws}/readonly.txt'`, { type: 'workspace_readonly' })).status !== 0 && !existsSync(join(ws, 'readonly.txt')),
    tcpDenied: (await python("import socket;s=socket.socket();s.settimeout(2);s.connect(('127.0.0.1',9))")).stderr.includes('PermissionError'),
    udpDenied: (await python('import socket;socket.socket(socket.AF_INET,socket.SOCK_DGRAM)')).stderr.includes('PermissionError'),
    networkAllowed: (await python('import socket;socket.socket(socket.AF_INET,socket.SOCK_DGRAM)', { networkAccess: true })).status === 0,
    exitStatus: (await sh('exit 7')).status,
  };
}

test('the replacement enforces workspace writes, read-only workspaces and network denial', { skip }, async () => {
  const base = await fixture('authority');
  assert.deepEqual(await authority(helper, base), { preflight: 0, workspaceWrite: true, outsideWriteDenied: true, readonlyWorkspaceDenied: true,
    tcpDenied: true, udpDenied: true, networkAllowed: true, exitStatus: 7 });
});

test('the replacement matches the original helper on the authority matrix', { skip: skip || (!existsSync(originalHelper) && 'Original helper unavailable') }, async t => {
  const probe = await fixture('original-probe');
  if (run(originalHelper, ['--policy', await policy(probe), '--preflight-only', '--', '/bin/true']).status !== 0) return t.skip('Original helper unsupported on this host');
  const [original, replacement] = [await authority(originalHelper, await fixture('original')), await authority(helper, await fixture('replacement'))];
  t.diagnostic(JSON.stringify({ original, replacement }));
  assert.deepEqual(replacement, original);
});

test('workspace read boundary, temporary directory and allow-listed write paths', { skip }, async () => {
  const base = await fixture('boundary'), extra = join(base, 'extra'); await mkdir(extra);
  await writeFile(join(base, 'outside', 'secret.txt'), 'secret\n');
  const cat = async sandbox => run(helper, ['--policy', await policy(base, sandbox), '--', '/bin/cat', join(base, 'outside', 'secret.txt')]);
  assert.equal((await cat({})).stdout, 'secret\n', 'system read boundary reads outside the workspace');
  assert.notEqual((await cat({ readBoundary: 'workspace' })).status, 0, 'workspace read boundary denies outside reads');
  const write = async (target, sandbox) => run(helper, ['--policy', await policy(base, sandbox), '--', '/bin/sh', '-c', `echo x > '${target}'`]).status;
  assert.equal(await write(join(extra, 'allowed.txt'), { additionalReadwritePaths: [extra] }), 0);
  const scratch = await mkdtemp(join(tmpdir(), 'openvision-sandbox-tmp-'));
  try {
    assert.equal(await write(join(scratch, 't.txt'), {}), 0, 'temporary directory writable by default');
    assert.notEqual(await write(join(scratch, 'u.txt'), { disableTmpWrite: true }), 0, 'disableTmpWrite denies it');
  } finally { await rm(scratch, { recursive: true, force: true }); }
  assert.equal(run(helper, ['--policy', await policy(base, { readBoundary: 'workspace' }), '--', '/bin/sh', '-c', 'echo ok > /dev/null && echo ok']).stdout, 'ok\n',
    'standard devices and system binaries stay usable with a workspace read boundary');
});

test('malformed arguments and policies fail closed without running the command', { skip }, async () => {
  const base = await fixture('malformed'), marker = join(base, 'ws', 'ran.txt');
  const command = ['--', '/bin/sh', '-c', `echo ran > '${marker}'`];
  const bad = async text => { const file = join(base, `bad-${++seq}.json`); await writeFile(file, text); return file; };
  const cases = {
    'no policy': [...command],
    'policy without value': ['--policy'],
    'no command': ['--policy', await policy(base)],
    'empty command': ['--policy', await policy(base), '--'],
    'unknown option': ['--network', 'all', '--policy', await policy(base), ...command],
    'missing policy file': ['--policy', join(base, 'absent.json'), ...command],
    'directory policy': ['--policy', base, ...command],
    'invalid JSON': ['--policy', await bad('{"sandbox":'), ...command],
    'trailing data': ['--policy', await bad('{"sandbox":{"type":"workspace_readwrite","cwd":"/"}} x'), ...command],
    'missing sandbox': ['--policy', await bad('{}'), ...command],
    'unknown type': ['--policy', await bad('{"sandbox":{"type":"workspace_admin","cwd":"/"}}'), ...command],
    'relative cwd': ['--policy', await bad('{"sandbox":{"type":"workspace_readwrite","cwd":"ws"}}'), ...command],
    'relative write path': ['--policy', await bad(`{"sandbox":{"type":"workspace_readwrite","cwd":"/","additionalReadwritePaths":["."]}}`), ...command],
    'non-boolean network': ['--policy', await bad('{"sandbox":{"type":"workspace_readwrite","cwd":"/","networkAccess":"yes"}}'), ...command],
    'unknown read boundary': ['--policy', await bad('{"sandbox":{"type":"workspace_readwrite","cwd":"/","readBoundary":"home"}}'), ...command],
    'NUL escape': ['--policy', await bad('{"sandbox":{"type":"workspace_readwrite","cwd":"/a\\u0000b"}}'), ...command],
    'deep nesting': ['--policy', await bad(`{"sandbox":{"type":"workspace_readwrite","cwd":"/","x":${'['.repeat(64)}${']'.repeat(64)}}}`), ...command],
    'oversized policy': ['--policy', await bad(`{"sandbox":{"type":"workspace_readwrite","cwd":"/","x":"${'a'.repeat(1 << 20)}"}}`), ...command],
  };
  const link = join(base, 'link.json'); await symlink(await policy(base), link);
  cases['symlinked policy'] = ['--policy', link, ...command];
  for (const [name, args] of Object.entries(cases)) {
    const result = run(helper, args);
    assert.equal(result.status, 1, `${name}: exit 1 (${result.stderr.trim()})`);
    assert.match(result.stderr, /^Error: /, `${name}: error on stderr`);
    assert.equal(existsSync(marker), false, `${name}: command not executed`);
  }
  assert.equal(run(helper, ['--policy', await policy(base), '--', join(base, 'absent-binary')]).status, 127);
});

test('policy files are consumed, as by the original helper', { skip }, async () => {
  const base = await fixture('consume'), file = await policy(base);
  assert.equal(run(helper, ['--policy', file, '--', '/bin/true']).status, 0);
  assert.equal(existsSync(file), false);
});

test('the command keeps the helper process, descriptors and process group; Stop leaves no survivors', { skip }, async () => {
  const base = await fixture('cleanup');
  // fd 3 is inherited (the bash executor passes its state transport on fds 3-5).
  const fd = run(helper, ['--policy', await policy(base), '--', '/bin/sh', '-c', 'echo through-fd3 >&3'], { stdio: ['ignore', 'pipe', 'pipe', 'pipe'] });
  assert.equal(fd.status, 0); assert.equal(fd.output[3], 'through-fd3\n');
  // A detached command tree is stopped like the original: SIGTERM to the group.
  const child = spawn(helper, ['--policy', await policy(base), '--', '/bin/sh', '-c', 'echo $$; sleep 60 & sleep 60 & wait'], { detached: true, stdio: ['ignore', 'pipe', 'ignore'] });
  const [line] = await once(child.stdout, 'data');
  assert.equal(Number(String(line).trim()), child.pid, 'the command replaces the helper (same PID)');
  const members = async () => {
    const found = [];
    for (const entry of await readdir('/proc')) {
      if (!/^\d+$/.test(entry)) continue;
      const stat = await readFile(`/proc/${entry}/stat`, 'utf8').catch(() => '');
      const fields = stat.slice(stat.lastIndexOf(')') + 2).split(' ');
      if (Number(fields[2]) === child.pid && fields[0] !== 'Z') found.push(Number(entry));
    }
    return found;
  };
  for (let attempt = 0; attempt < 50 && (await members()).length < 3; attempt++) await delay(100);
  assert.equal((await members()).length, 3, 'shell and two sleeps in the owned group');
  const exited = once(child, 'exit');
  process.kill(-child.pid, 'SIGTERM'); // the verifier-owned group created above
  const [, signal] = await exited;
  assert.equal(signal, 'SIGTERM');
  let survivors = await members();
  for (let attempt = 0; attempt < 50 && survivors.length; attempt++) { await delay(100); survivors = await members(); }
  assert.deepEqual(survivors, []);
});

test('the command cannot signal processes outside the sandbox (Landlock ABI 6)', { skip: skip || (abi < 6 && `Landlock ABI ${abi} < 6`) }, async () => {
  const base = await fixture('signal');
  const outside = spawn('sleep', ['30'], { stdio: 'ignore' });
  try {
    const result = run(helper, ['--policy', await policy(base), '--', '/bin/kill', '-0', String(outside.pid)]);
    assert.notEqual(result.status, 0); assert.equal(outside.exitCode, null);
  } finally { outside.kill(); }
});

test('build options default to the original helpers and reject unknown values', () => {
  assert.deepEqual(helperModes({}), { OPENVISION_SANDBOX_HELPER: 'original', OPENVISION_CREPECTL: 'original' });
  assert.deepEqual(helperModes({ OPENVISION_SANDBOX_HELPER: 'landlock', OPENVISION_CREPECTL: 'none' }), { OPENVISION_SANDBOX_HELPER: 'landlock', OPENVISION_CREPECTL: 'none' });
  assert.throws(() => helperModes({ OPENVISION_SANDBOX_HELPER: 'bubblewrap' }), /must be one of/);
  assert.throws(() => helperModes({ OPENVISION_CREPECTL: 'ripgrep' }), /must be one of/);
});

test('build options switch helpers reversibly and keep the first original', { skip }, async () => {
  const tree = join(work, 'tree'), helpers = join(tree, 'source/app/resources/helpers');
  await mkdir(join(tree, 'desktop/sandbox-helper'), { recursive: true }); await mkdir(helpers, { recursive: true });
  await writeFile(join(tree, 'desktop/sandbox-helper/openvision-sandbox.c'), await readFile(join(root, 'desktop/sandbox-helper/openvision-sandbox.c')));
  await writeFile(join(helpers, 'cursorsandbox'), 'original sandbox', { mode: 0o755 });
  await writeFile(join(helpers, 'crepectl'), 'original crepectl', { mode: 0o755 });
  const state = async () => ({ sandbox: await readFile(join(helpers, 'cursorsandbox')).then(bytes => bytes.includes(landlockSignature) ? 'landlock' : String(bytes), () => 'absent'),
    crepectl: await readFile(join(helpers, 'crepectl'), 'utf8').catch(() => 'absent') });
  await installHelperReplacements(tree, {});
  assert.deepEqual(await state(), { sandbox: 'original sandbox', crepectl: 'original crepectl' });
  await installHelperReplacements(tree, { OPENVISION_SANDBOX_HELPER: 'landlock', OPENVISION_CREPECTL: 'none' });
  assert.deepEqual(await state(), { sandbox: 'landlock', crepectl: 'absent' });
  await installHelperReplacements(tree, { OPENVISION_SANDBOX_HELPER: 'landlock', OPENVISION_CREPECTL: 'none' });
  assert.deepEqual(await state(), { sandbox: 'landlock', crepectl: 'absent' }, 'idempotent');
  await installHelperReplacements(tree, { OPENVISION_SANDBOX_HELPER: 'none' });
  assert.deepEqual(await state(), { sandbox: 'absent', crepectl: 'original crepectl' });
  await installHelperReplacements(tree, {});
  assert.deepEqual(await state(), { sandbox: 'original sandbox', crepectl: 'original crepectl' }, 'restored from the first backup');
  assert.equal((await readdir(join(tree, 'backups/helper-replacement'))).length, 4, 'one record and one backup per helper');
});
