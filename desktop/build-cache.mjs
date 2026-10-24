import { readFile, writeFile, mkdir, rename, readdir, rm, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import zlib from 'node:zlib';
import { fileHash } from './import-files.mjs';

// zstd (Node 22.15+/23.8+) compresses minified bundles about 5x at level 3 and decompresses
// a 56 MB bundle in ~0.15 s; gzip is the fallback for older runtimes.
const zstd = typeof zlib.zstdCompress === 'function';
const compress = zstd
  ? data => promisify(zlib.zstdCompress)(data, { params: { [zlib.constants.ZSTD_c_compressionLevel]: 3 } })
  : data => promisify(zlib.gzip)(data, { level: 6 });
const decompress = zstd ? promisify(zlib.zstdDecompress) : promisify(zlib.gunzip);
const objectExtension = zstd ? '.zst' : '.gz';

const objectsOf = marker => join(dirname(marker), 'objects');

// A restore is keyed on every customization module, the parser and its lockfile, and the
// Node version, not only on a call site's own recipe: some recipes do not list every helper
// they use, and a stale-but-equal recipe must never bring back output from older code.
const repository = resolve(dirname(fileURLToPath(import.meta.url)), '..');
let fingerprintPromise;
export function codeFingerprint(root = repository) {
  if (root !== repository) return computeFingerprint(root);
  return fingerprintPromise ??= computeFingerprint(root);
}
async function computeFingerprint(root) {
  const desktop = (await readdir(join(root, 'desktop'))).filter(name => /\.mjs$/.test(name) && !/\.test\.mjs$/.test(name)).sort();
  const files = [...desktop.map(name => join('desktop', name)), 'tooling/dependencies.mjs', 'tooling/package-lock.json'];
  const hash = createHash('sha256').update(process.versions.node);
  for (const file of files) hash.update(`\0${file}\0${await fileHash(join(root, file)) ?? 'missing'}`);
  return hash.digest('hex');
}
const objectPath = (marker, hash) => join(objectsOf(marker), hash + objectExtension);

async function storeObject(marker, hash, path) {
  const target = objectPath(marker, hash);
  if (await stat(target).then(() => true, () => false)) return;
  await mkdir(dirname(target), { recursive: true });
  const temporary = `${target}.${process.pid}.tmp`;
  await writeFile(temporary, await compress(await readFile(path)));
  await rename(temporary, target);
}

// Restores only bytes whose SHA-256 matches the recorded output; any mismatch or missing
// object falls back to running the transform.
async function restoreObject(marker, hash, path) {
  let data;
  try { data = await decompress(await readFile(objectPath(marker, hash))); }
  catch { return false; } // Missing or undecodable: fall back to the transform.
  if (createHash('sha256').update(data).digest('hex') !== hash) return false;
  const temporary = `${path}.${process.pid}.restore`;
  await writeFile(temporary, data, { mode: (await stat(path)).mode & 0o7777 });
  await rename(temporary, path);
  return true;
}

// Hash streams, rather than loading large bundles merely to check freshness.
// Each output is also kept in a compressed content-addressed store, so a clean rebuild that
// re-assembles the same input with the same code restores it instead of re-running the
// transform. Every transform writes nothing under source/ or electron-host/ except `path`
// (backups/ and build/ side files persist across clean builds); a transform that ever does
// must pass `restorable: false`. OPENVISION_NO_BUILD_CACHE=1 forces every transform to run.
export async function cachedFile(options, transform) {
  const { path, marker, recipe, restorable = true } = options;
  const before = await fileHash(path);
  if (!before) throw new Error(`Build input missing: ${path}`);
  let previous;
  try { previous = JSON.parse(await readFile(marker, 'utf8')); }
  catch (error) { if (error.code !== 'ENOENT' && !(error instanceof SyntaxError)) throw error; }
  if (previous?.recipe === recipe && previous.output === before) return false;
  const fingerprint = restorable ? await codeFingerprint() : undefined;
  if (restorable && !process.env.OPENVISION_NO_BUILD_CACHE && previous?.recipe === recipe && previous.input === before
    && previous.fingerprint === fingerprint && previous.output && await restoreObject(marker, previous.output, path)) return 'restored';
  await transform();
  const output = await fileHash(path);
  if (!output) throw new Error(`Build output missing: ${path}`);
  if (restorable) await storeObject(marker, output, path);
  await mkdir(dirname(marker), { recursive: true });
  const temporary = `${marker}.${process.pid}.tmp`;
  await writeFile(temporary, JSON.stringify({ recipe, fingerprint, input: before, output }) + '\n');
  await rename(temporary, marker);
  return true;
}

// Deletes stored outputs that no marker references any more (superseded recipes or inputs).
export async function pruneCacheObjects(cacheDirectory) {
  const objects = join(cacheDirectory, 'objects');
  const names = await readdir(objects).catch(error => { if (error.code === 'ENOENT') return []; throw error; });
  if (!names.length) return { kept: 0, removed: 0 };
  const referenced = new Set();
  for (const name of await readdir(cacheDirectory)) {
    if (!name.endsWith('.json')) continue;
    try { const marker = JSON.parse(await readFile(join(cacheDirectory, name), 'utf8')); if (marker.output) referenced.add(marker.output); }
    catch (error) { if (!(error instanceof SyntaxError)) throw error; }
  }
  let removed = 0;
  for (const name of names) {
    if (referenced.has(name.replace(/\.(zst|gz)$/, ''))) continue;
    await rm(join(objects, name), { force: true });
    removed++;
  }
  return { kept: names.length - removed, removed };
}
