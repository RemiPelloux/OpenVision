// npm run release:linux -- [--version V] [--out DIR] [--key PRIVATE_KEY] [--package DIR] [--allowed-signers FILE]
// Builds the Linux portable package (unless --package names an existing one),
// archives it, writes the signed manifest and, when allowed signers are given,
// verifies the result exactly as an installer would.
import { execFileSync, spawnSync } from 'node:child_process';
import { lstat, mkdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildManifest, createArchive, fileSha256, packageTree, releaseFiles, signManifest, verifyRelease } from './linux-release.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const option = name => { const index = args.indexOf(name); return index < 0 ? undefined : args[index + 1]; };
if (process.platform !== 'linux') throw Error('release:linux runs on Linux.');
const arch = process.arch;
const version = option('--version') ?? JSON.parse(await readFile(join(root, 'package.json'), 'utf8')).version;
const out = resolve(option('--out') ?? join(root, 'build/releases'));
const key = option('--key') ?? process.env.OPENVISION_RELEASE_SIGNING_KEY;
if (!key) throw Error('A signing key is required: --key PATH or OPENVISION_RELEASE_SIGNING_KEY. Keys are never stored in the repository.');
const git = (...command) => execFileSync('git', command, { cwd: root, encoding: 'utf8' }).trim();
const commit = git('rev-parse', 'HEAD');
const sourceClean = git('status', '--porcelain', '--untracked-files=no') === '';
const names = releaseFiles(version, arch);
await mkdir(out, { recursive: true });
for (const name of [names.archive, names.manifest, names.signature])
  if (await lstat(join(out, name)).then(() => true, () => false)) throw Error(`${join(out, name)} already exists; choose a new --out.`);

let packageDirectory = option('--package') && resolve(option('--package'));
const builtPackage = !packageDirectory;
if (builtPackage) {
  packageDirectory = join(out, `${names.prefix}.package`);
  const result = spawnSync(process.execPath, [join(root, 'desktop/package-portable.mjs'), packageDirectory, '--version', version], { stdio: 'inherit' });
  if (result.status !== 0) throw Error('Packaging failed.');
}
const info = JSON.parse(await readFile(join(packageDirectory, 'openvision-package.json'), 'utf8'));
if (info.version !== version || info.platform !== 'linux' || info.arch !== arch) throw Error('Package identity does not match the release.');
const tree = await packageTree(packageDirectory);
const archive = join(out, names.archive);
await createArchive({ packageDirectory, prefix: names.prefix, archive, mtime: Number(git('log', '-1', '--format=%ct')) });
const manifest = buildManifest({ version, arch, commit, prefix: names.prefix, tree,
  archive: { file: names.archive, bytes: (await stat(archive)).size, sha256: await fileSha256(archive) } });
manifest.sourceClean = sourceClean;
await writeFile(join(out, names.manifest), JSON.stringify(manifest, null, 2) + '\n', { flag: 'wx' });
signManifest({ manifest: join(out, names.manifest), key });
const allowedSigners = option('--allowed-signers') ?? process.env.OPENVISION_RELEASE_ALLOWED_SIGNERS;
if (allowedSigners) await verifyRelease({ archive, allowedSigners: resolve(allowedSigners), identity: option('--identity') });
if (builtPackage && !args.includes('--keep-package')) await rm(packageDirectory, { recursive: true, force: true });
console.log(JSON.stringify({ version, commit, sourceClean, archive, manifest: join(out, names.manifest),
  signature: join(out, names.signature), files: tree.files.length, bytes: manifest.archive.bytes, sha256: manifest.archive.sha256,
  verified: Boolean(allowedSigners) }, null, 2));
