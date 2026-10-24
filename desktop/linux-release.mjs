// Linux x64 release provenance (OV-904): a gzip tar of one portable package, a
// manifest with per-file and archive SHA-256, and a detached `ssh-keygen -Y`
// signature over the manifest. Verification is fail-closed and touches nothing
// outside the files it reads. Only Node built-ins plus `tar` and `ssh-keygen`,
// so the installer can run from any Node 24 without the build tooling.
import { spawn, spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { createReadStream, createWriteStream } from 'node:fs';
import { lstat, open, readdir, readFile, stat } from 'node:fs/promises';
import { basename, join, posix } from 'node:path';
import { Writable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { constants, createGunzip, createGzip, createZstdCompress, createZstdDecompress } from 'node:zlib';

// Under OpenVision's own runtime (ELECTRON_RUN_AS_NODE, the packaged
// openvision-install), Electron's fs presents .asar files as directories; a
// release must be hashed and compared as the plain files it contains.
if (process.versions.electron) process.noAsar = true;

export const signatureNamespace = 'openvision-release';
export const defaultSignerIdentity = 'openvision-release';
export const manifestSchema = 1;
const versionPattern = /^[0-9A-Za-z][0-9A-Za-z.+-]{0,63}$/;
const hexPattern = /^[0-9a-f]{64}$/;
// The profile is never part of a release; an archive carrying one is rejected.
const privatePrefixes = ['electron-host/data/', 'electron-host/backups/', 'electron-host/logs/'];

export const releaseName = (version, arch = 'x64') => `OpenVision-${version}-linux-${arch}`;
export const releaseFiles = (version, arch = 'x64') => {
  const name = releaseName(version, arch);
  return { prefix: name, archive: `${name}.tar.zst`, manifest: `${name}.manifest.json`, signature: `${name}.manifest.json.sig` };
};

export async function fileSha256(path, { onChunk } = {}) {
  const hash = createHash('sha256');
  for await (const chunk of createReadStream(path)) { hash.update(chunk); await onChunk?.(chunk); }
  return hash.digest('hex');
}

// Regular files and directories only. Links, sockets and devices are refused:
// the packager already refuses links, so one here means the tree was altered.
export async function packageTree(directory) {
  const files = [], directories = [];
  async function walk(relative) {
    const entries = (await readdir(join(directory, relative), { withFileTypes: true }))
      .map(entry => entry.name).sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
    for (const name of entries) {
      const path = relative ? `${relative}/${name}` : name, full = join(directory, path);
      const info = await lstat(full);
      if (info.isDirectory()) { directories.push(path); await walk(path); }
      else if (info.isFile()) files.push({ path, bytes: info.size, mode: info.mode & 0o111 ? 0o755 : 0o644, sha256: await fileSha256(full) });
      else throw Error(`Release input contains a link or special file: ${path}`);
    }
  }
  await walk('');
  return { files, directories };
}

function run(command, args, options = {}) {
  const result = spawnSync(command, args, { encoding: 'utf8', ...options });
  if (result.error) throw Error(`${command} could not start: ${result.error.message}`);
  return result;
}

// Deterministic archive: sorted names, numeric root ownership, normalized modes,
// a fixed modification time and a gzip header without name or time.
// zstd level 12 with a 128 MiB long-distance window: on the 1.1 GiB Linux package it is 18 %
// smaller than gzip -9 (325 vs 396 MB), compresses in 55 s instead of 131 s and decompresses
// about 4x faster. Node's bundled libzstd (pinned with Node) keeps the bytes reproducible;
// `.tar.gz` stays readable for older releases.
const zstdWindowLog = 27;
const zstdParams = { [constants.ZSTD_c_compressionLevel]: 12, [constants.ZSTD_c_windowLog]: zstdWindowLog,
  [constants.ZSTD_c_enableLongDistanceMatching]: 1, [constants.ZSTD_c_checksumFlag]: 1 };
const compressorFor = archive => archive.endsWith('.tar.gz') ? createGzip({ level: 9 }) : createZstdCompress({ params: zstdParams });

// Chooses the decoder from the archive's magic bytes, so the installer and verifier accept
// both current (.tar.zst) and older (.tar.gz) releases without a system zstd.
export function decompressorFor(head) {
  if (head[0] === 0x1f && head[1] === 0x8b) return createGunzip();
  if (head[0] === 0x28 && head[1] === 0xb5 && head[2] === 0x2f && head[3] === 0xfd)
    return createZstdDecompress({ params: { [constants.ZSTD_d_windowLogMax]: zstdWindowLog } });
  throw Error('Release archive is neither zstd nor gzip.');
}

// Streams `archive` through its decoder into `tar -x` in `directory`; `onChunk` sees the
// compressed bytes (for hashing and progress) before they are decoded.
export async function extractArchive({ archive, directory, onChunk = async () => {} }) {
  const handle = await open(archive, 'r');
  const head = Buffer.alloc(4);
  try { await handle.read(head, 0, 4, 0); } finally { await handle.close(); }
  const decoder = decompressorFor(head);
  const child = spawn('tar', ['-xf', '-', '-C', directory, '--no-same-owner', '--no-same-permissions'], { stdio: ['pipe', 'ignore', 'pipe'] });
  let stderr = '';
  child.stderr.on('data', chunk => { stderr += chunk; });
  const exit = new Promise((resolve, reject) => { child.on('error', reject); child.on('close', resolve); });
  const tap = async function* (source) { for await (const chunk of source) { await onChunk(chunk); yield chunk; } };
  // GNU tar stops reading at the end-of-archive marker, before the decoder has delivered
  // the trailing padding. Once tar has closed its stdin the rest is discarded, but the whole
  // archive is still read (and hashed by onChunk); tar's exit status decides the outcome.
  let closed = false, pending;
  const release = () => { closed = true; const callback = pending; pending = undefined; callback?.(); };
  child.stdin.on('error', release);
  child.stdin.on('close', release);
  const sink = new Writable({
    write(chunk, encoding, callback) {
      if (closed || child.stdin.write(chunk)) return callback();
      pending = callback;
      child.stdin.once('drain', () => { if (pending === callback) { pending = undefined; callback(); } });
    },
    final(callback) { if (!closed) child.stdin.end(); callback(); },
  });
  const streamed = pipeline(createReadStream(archive), tap, decoder, sink);
  const [code] = await Promise.all([exit, streamed.catch(error => { child.kill(); throw error; })]);
  if (code !== 0) throw Error(`tar failed (${code}): ${stderr.trim()}`);
}

export async function createArchive({ packageDirectory, prefix, archive, mtime = 0 }) {
  const parent = join(packageDirectory, '..'), name = basename(packageDirectory);
  const args = ['--sort=name', '--format=pax', '--pax-option=exthdr.name=%d/PaxHeaders/%f,delete=atime,delete=ctime',
    '--owner=0', '--group=0', '--numeric-owner', `--mtime=@${mtime}`, '--mode=u+rwX,go+rX,go-w',
    `--transform=s,^${name.replace(/[.[\]*^$\\]/g, '\\$&')},${prefix},`, '-C', parent, '-cf', '-', name];
  const child = spawn('tar', args, { stdio: ['ignore', 'pipe', 'pipe'] });
  let stderr = '';
  child.stderr.on('data', chunk => { stderr += chunk; });
  const exit = new Promise((resolve, reject) => { child.on('error', reject); child.on('close', resolve); });
  await pipeline(child.stdout, compressorFor(archive), createWriteStream(archive, { flags: 'wx' }));
  const code = await exit;
  if (code !== 0) throw Error(`tar failed (${code}): ${stderr.trim()}`);
}

export function buildManifest({ version, arch = 'x64', commit, prefix, tree, archive }) {
  return { schema: manifestSchema, name: 'OpenVision', version, platform: 'linux', arch, commit, prefix,
    archive, profileIncluded: false, credentialsIncluded: false, directories: tree.directories, files: tree.files };
}

// Keys stay with their owner: a private key path (or an agent-backed public key
// path) is supplied per run and never copied into the release directory.
export function signManifest({ manifest, key, namespace = signatureNamespace }) {
  if (!key) throw Error('A signing key path is required (--key or OPENVISION_RELEASE_SIGNING_KEY).');
  const result = run('ssh-keygen', ['-Y', 'sign', '-q', '-f', key, '-n', namespace, manifest], { stdio: ['ignore', 'pipe', 'pipe'] });
  if (result.status !== 0) throw Error(`ssh-keygen signing failed: ${(result.stderr || '').trim()}`);
  return `${manifest}.sig`;
}

export function verifySignature({ manifestBytes, signature, allowedSigners, identity = defaultSignerIdentity, namespace = signatureNamespace }) {
  if (!allowedSigners) throw Error('An allowed-signers file is required to verify a release.');
  const result = run('ssh-keygen', ['-Y', 'verify', '-f', allowedSigners, '-I', identity, '-n', namespace, '-s', signature],
    { input: manifestBytes, stdio: ['pipe', 'pipe', 'pipe'] });
  if (result.status !== 0) throw Error(`Release signature is not valid for ${identity}: ${(result.stderr || result.stdout || '').trim()}`);
}

export function safeRelativePath(path) {
  return typeof path === 'string' && path.length > 0 && path.length < 4096 && !path.includes('\\') && !path.includes('\0') &&
    !path.startsWith('/') && posix.normalize(path) === path && !path.split('/').some(part => part === '..' || part === '.' || part === '');
}

// Structural checks after the signature is valid. A signed manifest that is
// malformed is still rejected rather than interpreted.
export function validateManifest(manifest, { arch = process.arch, archiveName } = {}) {
  const fail = reason => { throw Error(`Release manifest rejected: ${reason}`); };
  if (!manifest || typeof manifest !== 'object') fail('not an object');
  if (manifest.schema !== manifestSchema) fail(`unsupported schema ${manifest.schema}`);
  if (manifest.name !== 'OpenVision' || manifest.platform !== 'linux') fail('not an OpenVision Linux release');
  if (manifest.arch !== arch) fail(`architecture ${manifest.arch} does not match ${arch}`);
  if (!versionPattern.test(manifest.version ?? '')) fail('invalid version');
  const expected = releaseFiles(manifest.version, manifest.arch);
  if (manifest.prefix !== expected.prefix) fail('prefix does not match the version');
  if (manifest.archive?.file !== expected.archive) fail('archive name does not match the version');
  if (archiveName !== undefined && archiveName !== expected.archive) fail(`archive ${archiveName} is not ${expected.archive}`);
  if (!Number.isSafeInteger(manifest.archive.bytes) || manifest.archive.bytes <= 0 || !hexPattern.test(manifest.archive.sha256 ?? ''))
    fail('invalid archive digest');
  if (!/^[0-9a-f]{40}$/.test(manifest.commit ?? '')) fail('invalid commit');
  if (manifest.profileIncluded !== false || manifest.credentialsIncluded !== false) fail('release declares user data');
  if (!Array.isArray(manifest.files) || !manifest.files.length || !Array.isArray(manifest.directories)) fail('missing file list');
  const seen = new Set();
  for (const entry of manifest.directories) {
    if (!safeRelativePath(entry) || seen.has(entry)) fail(`invalid directory ${JSON.stringify(entry)}`);
    seen.add(entry);
  }
  for (const entry of manifest.files) {
    if (!safeRelativePath(entry?.path) || seen.has(entry.path)) fail(`invalid file ${JSON.stringify(entry?.path)}`);
    if (!Number.isSafeInteger(entry.bytes) || entry.bytes < 0 || !hexPattern.test(entry.sha256 ?? '') || ![0o644, 0o755].includes(entry.mode))
      fail(`invalid entry for ${entry.path}`);
    seen.add(entry.path);
  }
  for (const path of seen) {
    if (privatePrefixes.some(prefix => `${path}/`.startsWith(prefix))) fail(`release contains user data path ${path}`);
    const parent = posix.dirname(path);
    if (parent !== '.' && !manifest.directories.includes(parent)) fail(`parent directory missing for ${path}`);
  }
  for (const required of ['OpenVision', 'openvision-package.json', 'electron-host/openvision'])
    if (!manifest.files.some(entry => entry.path === required)) fail(`missing ${required}`);
  return manifest;
}

// Fail-closed release check: signature over the exact manifest bytes first,
// then structure, then the archive's size and digest. Nothing is extracted.
export async function verifyRelease({ archive, manifest, signature, allowedSigners, identity, arch = process.arch, onArchiveChunk }) {
  manifest ??= archive.replace(/\.tar\.(gz|zst)$/, '.manifest.json');
  signature ??= `${manifest}.sig`;
  const manifestBytes = await readFile(manifest);
  await stat(signature);
  verifySignature({ manifestBytes, signature, allowedSigners, identity });
  let parsed;
  try { parsed = JSON.parse(manifestBytes.toString('utf8')); } catch { throw Error('Release manifest rejected: not JSON'); }
  validateManifest(parsed, { arch, archiveName: basename(archive) });
  const info = await stat(archive);
  if (info.size !== parsed.archive.bytes) throw Error(`Release archive size ${info.size} does not match the signed manifest (${parsed.archive.bytes}).`);
  const digest = await fileSha256(archive, { onChunk: onArchiveChunk });
  if (digest !== parsed.archive.sha256) throw Error('Release archive SHA-256 does not match the signed manifest.');
  return parsed;
}

// Compare an extracted tree with the signed file list: same set, sizes, modes
// and digests; no extra entries, links or special files.
export async function verifyTree(directory, manifest) {
  const tree = await packageTree(directory);
  const expected = new Map(manifest.files.map(entry => [entry.path, entry]));
  const problems = [];
  for (const entry of tree.files) {
    const want = expected.get(entry.path);
    if (!want) { problems.push(`unexpected file ${entry.path}`); continue; }
    expected.delete(entry.path);
    if (want.bytes !== entry.bytes || want.sha256 !== entry.sha256) problems.push(`content differs: ${entry.path}`);
    else if (want.mode !== entry.mode) problems.push(`mode differs: ${entry.path}`);
  }
  for (const path of expected.keys()) problems.push(`missing file ${path}`);
  const directories = new Set(manifest.directories);
  for (const path of tree.directories) if (!directories.delete(path)) problems.push(`unexpected directory ${path}`);
  for (const path of directories) problems.push(`missing directory ${path}`);
  if (problems.length) throw Error(`Extracted release does not match the signed manifest: ${problems.slice(0, 5).join('; ')}${problems.length > 5 ? ` (+${problems.length - 5} more)` : ''}`);
}
