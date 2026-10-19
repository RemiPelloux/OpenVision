import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { appendFile, copyFile, mkdir, mkdtemp, readFile, rm, symlink, truncate, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { createArchive, packageTree, safeRelativePath, signManifest, validateManifest, verifyRelease, verifyTree } from './linux-release.mjs';
import { createRelease, createSigner } from './linux-release-fixture.mjs';

const root = resolve(import.meta.dirname, '..');
const linux = { skip: process.platform !== 'linux' };
let directory, signer, other;
test.before(async () => {
  directory = await mkdtemp(join(tmpdir(), 'openvision-release-test-'));
  signer = await createSigner(join(directory, 'signer'));
  other = await createSigner(join(directory, 'other'));
});
test.after(() => rm(directory, { recursive: true, force: true }));
const fresh = async (version, options = {}) => createRelease({ directory: await mkdtemp(join(directory, 'case-')), version, signer, ...options });

test('a signed release verifies and extracts to exactly the signed tree', linux, async () => {
  const release = await fresh('1.0.0');
  const manifest = await verifyRelease({ ...release, allowedSigners: signer.allowedSigners });
  assert.equal(manifest.version, '1.0.0');
  assert.ok(manifest.files.some(entry => entry.path === 'electron-host/openvision' && entry.mode === 0o755));
  const out = await mkdtemp(join(directory, 'extract-'));
  assert.equal(spawnSync('tar', ['-xzf', release.archive, '-C', out]).status, 0);
  await verifyTree(join(out, manifest.prefix), manifest);
});

test('archives are reproducible from the same tree', linux, async () => {
  const release = await fresh('1.0.1');
  const again = join(directory, 'again.tar.gz');
  await createArchive({ packageDirectory: release.packageDirectory, prefix: 'OpenVision-1.0.1-linux-x64', archive: again, mtime: 1 });
  assert.deepEqual(await readFile(again), await readFile(release.archive));
});

test('tampered archive bytes fail closed', linux, async () => {
  const release = await fresh('1.1.0');
  const bytes = await readFile(release.archive); bytes[bytes.length >> 1] ^= 0xff;
  await writeFile(release.archive, bytes);
  await assert.rejects(verifyRelease({ ...release, allowedSigners: signer.allowedSigners }), /SHA-256 does not match/);
});

test('truncated or extended archives fail on size before hashing', linux, async () => {
  const release = await fresh('1.1.1');
  await appendFile(release.archive, 'x');
  await assert.rejects(verifyRelease({ ...release, allowedSigners: signer.allowedSigners }), /size .* does not match/);
  await truncate(release.archive, 10);
  await assert.rejects(verifyRelease({ ...release, allowedSigners: signer.allowedSigners }), /size .* does not match/);
});

test('an edited manifest invalidates the signature', linux, async () => {
  const release = await fresh('1.2.0');
  const text = await readFile(release.manifest, 'utf8');
  await writeFile(release.manifest, text.replace('"version": "1.2.0"', '"version": "1.2.1"'));
  await assert.rejects(verifyRelease({ ...release, allowedSigners: signer.allowedSigners }), /signature is not valid/);
});

test('a signature from an untrusted key, a missing signature or the wrong identity fail closed', linux, async () => {
  const release = await fresh('1.3.0');
  await assert.rejects(verifyRelease({ ...release, allowedSigners: other.allowedSigners }), /signature is not valid/);
  await assert.rejects(verifyRelease({ ...release, allowedSigners: signer.allowedSigners, identity: 'someone-else' }), /signature is not valid/);
  await assert.rejects(verifyRelease({ ...release, allowedSigners: undefined }), /allowed-signers file is required/);
  await rm(release.signature);
  await assert.rejects(verifyRelease({ ...release, allowedSigners: signer.allowedSigners }), /ENOENT/);
});

test('a signature for another namespace is rejected', linux, async () => {
  const release = await fresh('1.3.1');
  await rm(release.signature);
  signManifest({ manifest: release.manifest, key: signer.key, namespace: 'file' });
  await assert.rejects(verifyRelease({ ...release, allowedSigners: signer.allowedSigners }), /signature is not valid/);
});

test('a validly signed manifest for another archive is rejected (mismatch)', linux, async () => {
  const first = await fresh('2.0.0'), second = await fresh('2.0.1');
  // Same name, different signed release: the digest no longer matches.
  await copyFile(second.archive, first.archive);
  await assert.rejects(verifyRelease({ ...first, allowedSigners: signer.allowedSigners }), /does not match/);
  // Renamed archive: the signed name binds the version.
  const renamed = join(directory, 'OpenVision-9.9.9-linux-x64.tar.gz');
  await copyFile(second.archive, renamed);
  await assert.rejects(verifyRelease({ archive: renamed, manifest: second.manifest, signature: second.signature, allowedSigners: signer.allowedSigners }), /is not OpenVision-2.0.1/);
});

test('signed manifests with unsafe or private entries are still rejected', linux, async () => {
  for (const [mutate, pattern] of [
    [manifest => { manifest.files.push({ path: '../escape', bytes: 1, mode: 0o644, sha256: 'a'.repeat(64) }); }, /invalid file/],
    [manifest => { manifest.directories.push('electron-host/data'); manifest.files.push({ path: 'electron-host/data/x', bytes: 1, mode: 0o644, sha256: 'a'.repeat(64) }); }, /user data path/],
    [manifest => { manifest.arch = manifest.arch === 'x64' ? 'arm64' : 'x64'; }, /architecture/],
    [manifest => { manifest.profileIncluded = true; }, /declares user data/],
    [manifest => { manifest.files = manifest.files.filter(entry => entry.path !== 'electron-host/openvision'); }, /missing electron-host\/openvision/],
  ]) {
    const release = await fresh(`3.0.${Math.floor(Math.random() * 1e6)}`, { mutateManifest: mutate });
    await assert.rejects(verifyRelease({ ...release, allowedSigners: signer.allowedSigners }), pattern);
  }
});

test('extracted trees with extra, missing, changed or linked files are rejected', linux, async () => {
  const release = await fresh('4.0.0');
  const manifest = await verifyRelease({ ...release, allowedSigners: signer.allowedSigners });
  const extract = async () => {
    const out = await mkdtemp(join(directory, 'tree-'));
    spawnSync('tar', ['-xzf', release.archive, '-C', out]);
    return join(out, manifest.prefix);
  };
  let tree = await extract(); await writeFile(join(tree, 'extra'), 'x');
  await assert.rejects(verifyTree(tree, manifest), /unexpected file extra/);
  tree = await extract(); await rm(join(tree, 'openvision.png'));
  await assert.rejects(verifyTree(tree, manifest), /missing file openvision.png/);
  tree = await extract(); await writeFile(join(tree, 'OpenVision'), '#!/bin/sh\nevil\n');
  await assert.rejects(verifyTree(tree, manifest), /content differs: OpenVision/);
  tree = await extract(); await rm(join(tree, 'openvision.png')); await symlink('/etc/passwd', join(tree, 'openvision.png'));
  await assert.rejects(verifyTree(tree, manifest), /link or special file/);
});

test('package trees refuse links and path helpers refuse traversal', linux, async () => {
  const tree = await mkdtemp(join(directory, 'links-'));
  await mkdir(join(tree, 'a')); await symlink('/', join(tree, 'a/root'));
  await assert.rejects(packageTree(tree), /link or special file/);
  for (const bad of ['', '/abs', 'a/../b', './a', 'a//b', 'a\\b', 'a/'])
    assert.equal(safeRelativePath(bad), false, bad);
  assert.equal(safeRelativePath('electron-host/resources/app/product.json'), true);
  assert.throws(() => validateManifest({ schema: 2 }), /unsupported schema/);
});

test('release-verify CLI exits non-zero on tampering and zero (with --deep) when intact', linux, async () => {
  const release = await fresh('5.0.0');
  const run = (...extra) => spawnSync(process.execPath, [join(root, 'desktop/release-verify.mjs'), '--archive', release.archive,
    '--allowed-signers', signer.allowedSigners, ...extra], { encoding: 'utf8' });
  const ok = run('--deep');
  assert.equal(ok.status, 0, ok.stderr); assert.equal(JSON.parse(ok.stdout).deep, true);
  await appendFile(release.manifest, ' ');
  const bad = run();
  assert.equal(bad.status, 1); assert.match(bad.stderr, /Release rejected: Release signature is not valid/);
});

test('release:linux signs an existing package and self-verifies with allowed signers', linux, async () => {
  const release = await fresh('6.0.0');
  const out = await mkdtemp(join(directory, 'cli-out-'));
  const result = spawnSync(process.execPath, [join(root, 'desktop/release-linux.mjs'), '--package', release.packageDirectory,
    '--version', '6.0.0', '--out', out, '--allowed-signers', signer.allowedSigners], { encoding: 'utf8',
    env: { ...process.env, OPENVISION_RELEASE_SIGNING_KEY: signer.key } });
  assert.equal(result.status, 0, result.stderr);
  const summary = JSON.parse(result.stdout);
  assert.equal(summary.verified, true); assert.match(summary.commit, /^[0-9a-f]{40}$/);
  const manifest = JSON.parse(await readFile(summary.manifest, 'utf8'));
  assert.equal(typeof manifest.sourceClean, 'boolean');
  assert.doesNotMatch(await readFile(summary.manifest, 'utf8'), /PRIVATE KEY/);
  const unsigned = spawnSync(process.execPath, [join(root, 'desktop/release-linux.mjs'), '--package', release.packageDirectory,
    '--version', '6.0.0', '--out', await mkdtemp(join(directory, 'cli-nokey-'))], { encoding: 'utf8',
    env: { ...process.env, OPENVISION_RELEASE_SIGNING_KEY: '' } });
  assert.notEqual(unsigned.status, 0); assert.match(unsigned.stderr, /signing key is required/);
});

test('the packaged runtime (ELECTRON_RUN_AS_NODE) hashes .asar archives as files', { skip: process.platform !== 'linux' ||
  !existsSync(join(root, 'electron-host/openvision')) }, async () => {
  const tree = await mkdtemp(join(directory, 'asar-'));
  await writeFile(join(tree, 'node_modules.asar'), 'not an archive the runtime may open as a folder');
  const result = spawnSync(join(root, 'electron-host/openvision'), ['--input-type=module', '-e',
    `const { packageTree } = await import(${JSON.stringify(new URL('./linux-release.mjs', import.meta.url).href)}); console.log(JSON.stringify(await packageTree(${JSON.stringify(tree)})));`],
  { encoding: 'utf8', env: { ...process.env, ELECTRON_RUN_AS_NODE: '1' } });
  assert.equal(result.status, 0, result.stderr);
  const listed = JSON.parse(result.stdout.trim().split('\n').at(-1));
  assert.deepEqual(listed.directories, []);
  assert.deepEqual(listed.files.map(entry => entry.path), ['node_modules.asar']);
});
