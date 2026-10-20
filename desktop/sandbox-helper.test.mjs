import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn, spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdtemp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { compileLandlockHelper, helperModes, installHelperReplacements, landlockSignature } from './helper-replacement-customization.mjs';
import { authorityMatrix, expectedAuthority, identityAndCleanup, malformedCases, policy, run, sandboxFixture } from './sandbox-contract.mjs';

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

let work, helper;
test.before(async () => {
  if (skip) return;
  // Not below the system temporary directory, which both helpers keep writable.
  await mkdir(join(root, 'logs'), { recursive: true });
  work = await mkdtemp(join(root, 'logs/sandbox-helper-test-'));
  helper = join(work, 'cursorsandbox');
  compileLandlockHelper(root, helper);
});
test.after(async () => { if (work) await rm(work, { recursive: true, force: true }); });
const fixture = name => sandboxFixture(work, name);

test('the replacement enforces workspace writes, read-only workspaces and network denial', { skip }, async () => {
  assert.deepEqual(await authorityMatrix(helper, await fixture('authority')), expectedAuthority);
});

test('the replacement matches the original helper on the authority matrix', { skip: skip || (!existsSync(originalHelper) && 'Original helper unavailable') }, async t => {
  const probe = await fixture('original-probe');
  if (run(originalHelper, ['--policy', await policy(probe), '--preflight-only', '--', '/bin/true']).status !== 0) return t.skip('Original helper unsupported on this host');
  const [original, replacement] = [await authorityMatrix(originalHelper, await fixture('original')), await authorityMatrix(helper, await fixture('replacement'))];
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
  const { failClosed, outcome } = await (await malformedCases(await fixture('malformed'))).evaluate(helper);
  assert.equal(failClosed, true, JSON.stringify(outcome));
  // The replacement is stricter than the original: lenient inputs are refused too.
  for (const [name, value] of Object.entries(outcome)) {
    if (name === 'missing binary') { assert.equal(value.status, 127); continue; }
    assert.equal(value.status, 1, `${name}: exit 1 (${value.stderr})`);
    assert.match(value.stderr, /^Error: /, `${name}: error on stderr`);
    assert.equal(value.ran, false, `${name}: command not executed`);
  }
});

test('the command keeps the helper process, descriptors and process group; Stop leaves no survivors', { skip }, async () => {
  assert.deepEqual(await identityAndCleanup(helper, await fixture('cleanup')), { fd3Inherited: true, commandIsHelperProcess: true,
    commandOwnsSessionAndGroup: true, groupMembersBeforeStop: 3, stopSignal: 'SIGTERM', survivorsAfterGroupStop: 0, policyFileConsumed: true });
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
