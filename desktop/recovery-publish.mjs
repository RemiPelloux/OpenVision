// Publish verified text recovery; captured installations and installed dependencies stay local.
import { copyFile, mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { constants, createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { basename, dirname, extname, join, resolve, win32 } from 'node:path';
import { fileURLToPath } from 'node:url';

const app = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const version = process.argv[2] ?? '3.24.18';
if (!/^\d+\.\d+\.\d+$/.test(version)) throw new Error('Expected a snapshot version');
const root = join(app, 'curs_source');
const snapshot = join(root, 'snapshots', version);
const load = async path => JSON.parse(await readFile(path, 'utf8'));
const bundleId = file => file.input_sha256 + '-' + createHash('sha256').update(file.input).digest('hex').slice(0, 12);
const digest = async path => {
  const hash = createHash('sha256');
  for await (const chunk of createReadStream(path)) hash.update(chunk);
  return hash.digest('hex');
};
function sourcePath(value) {
  if (win32.isAbsolute(value) || value.includes('\\') || value.split('/').some(x => !x || x === '.' || x === '..'))
    throw new Error('Invalid recovery-relative path: ' + value);
  // Preserve the original path separately; avoid installation/build directory names in Git.
  return value.split('/').map(x => x === 'dist' ? 'bundles' : x === 'out' ? 'editor' :
    x === 'node_modules' ? 'embedded' : x).join('/');
}
function modulePath(value) {
  const mapped = sourcePath(value);
  const maximumModulePath = 80;
  if (mapped.length <= maximumModulePath) return mapped;
  const extension = extname(mapped);
  const name = basename(mapped, extension).slice(0, 48);
  const identity = createHash('sha256').update(value).digest('hex').slice(0, 16);
  return `files/${name}-${identity}${extension}`;
}
async function publish(input, path, expected) {
  const sourceHash = await digest(input);
  if (sourceHash !== expected) throw new Error('Producer output changed: ' + input);
  const output = join(root, path);
  await mkdir(dirname(output), { recursive: true });
  try { await copyFile(input, output, constants.COPYFILE_EXCL); }
  catch (error) { if (error.code !== 'EEXIST') throw error; }
  if (await digest(output) !== expected) throw new Error('Published output changed: ' + output);
  return { path, sha256: expected, bytes: (await stat(output)).size };
}
const inventory = await load(join(snapshot, 'reports/installation-manifest.json'));
const readability = await load(join(snapshot, 'reports/readability.json'));
const application = [];
for (const file of readability.files.filter(x => !x.output.split('/').includes('node_modules'))) {
  if (await digest(join(snapshot, 'artifacts/installation', file.input)) !== file.input_sha256)
    throw new Error('Captured application input changed: ' + file.input);
  const path = `javascript/${version}/${sourcePath(file.output.slice('readable/app/'.length))}`;
  application.push({ input: file.input, input_sha256: file.input_sha256, status: file.status,
    ...await publish(join(snapshot, file.output), path, file.output_sha256) });
}
const recovery = await load(join(snapshot, 'reports/raw-bundle-recovery.json'));
const bundles = [];
for (const file of recovery.files) {
  if (await digest(join(snapshot, 'artifacts/installation/resources/app', file.input)) !== file.input_sha256)
    throw new Error('Captured bundle input changed: ' + file.input);
  const row = { input: file.input, input_sha256: file.input_sha256, exit_code: file.exit_code,
    error: file.error ?? null, representation: 'structural-raw-module-extraction', files: [] };
  if (file.exit_code === 0) {
    for (const output of file.files ?? []) {
      const path = `modules/${version}/${bundleId(file)}/${modulePath(output.path)}`;
      row.files.push({ producer_path: output.path,
        ...await publish(join(snapshot, file.output, output.path), path, output.sha256) });
    }
  }
  bundles.push(row);
}
// Long-running/format-specific retries retain their independent attempt records.
const supplemental = [];
for (const name of ['glass-export', 'commerce-export']) {
  let report;
  try { report = await load(join(snapshot, 'reports', name + '.json')); }
  catch (error) { if (error.code === 'ENOENT') continue; throw error; }
  const row = { ...report, files: [] };
  for (const file of report.files) {
    const path = `modules/${version}/${bundleId(report)}/${modulePath(file.path)}`;
    row.files.push({ ...file, producer_path: file.path,
      ...await publish(join(snapshot, report.output, file.path), path, file.sha256) });
  }
  supplemental.push(row);
}
for (const name of ['LICENSE.txt', 'ThirdPartyNotices.txt']) {
  const input = join(snapshot, 'artifacts/installation/resources/app', name);
  await publish(input, `javascript/${version}/${name}`, await digest(input));
}
const sourceMaps = await load(join(snapshot, 'reports/source-maps-verified.json'));
const wasm = await load(join(snapshot, 'wasm/manifest.json'));
const historicalNative = await load(join(root, 'native/manifest.json'));
const nativeFiles = inventory.files.filter(x => /\.(?:exe|dll|node)$/i.test(x.path));
const native = nativeFiles.map(file => {
  const prior = historicalNative.modules.find(x => x.sha256 === file.sha256);
  return { path: file.path, sha256: file.sha256, bytes: file.bytes,
    matching_historical_pseudocode: prior?.export_directory ?? null };
});
let rea = null;
try { rea = await load(join(snapshot, 'reports/rea-ledger.json')); }
catch (error) { if (error.code !== 'ENOENT') throw error; }
const report = { schema_version: 1, version, generated_at: new Date().toISOString(),
  application: inventory.application, executable: inventory.files.find(x => x.path.toLowerCase() === 'cursor.exe'),
  captured_files: inventory.files.length, formatted_files: readability.formatted,
  published_application_files: application.length, files: application, bundles, supplemental,
  original_maps: sourceMaps.parsed_maps, embedded_original_sources: sourceMaps.embedded_source_count,
  native, rea,
  wasm: { source_paths: wasm.source_paths, distinct_payloads: wasm.distinct_payloads, decoded: wasm.decoded,
    results: wasm.results.map(({ sha256, paths, bytes, validated, wat }) => ({ sha256, paths, bytes, validated, wat })) },
  original_source_recovered: false, independently_buildable: false,
  verification: 'Every published text file was checked against its recorded producer SHA-256. Captured input SHA-256 values are retained separately.',
  exclusions: ['Installed node_modules remain in the local snapshot.', 'Raw binaries, full Evidence, large WAT and historical duplicate representations remain local.'],
};
await writeFile(join(root, 'manifest.json'), JSON.stringify(report, null, 2) + '\n');
const rows = bundles.map(bundle => {
  const retry = supplemental.find(x => x.input === bundle.input && x.input_sha256 === bundle.input_sha256);
  const result = bundle.exit_code === 0 ? bundle : retry;
  const entry = result?.files.find(x => x.path.endsWith('/entry.js')) ?? result?.files[0];
  const link = entry ? `[Browse](${entry.path.slice(`modules/${version}/`.length)})` : 'No extraction';
  return `| \`${bundle.input}\` | ${result?.representation ?? 'failed'} | ${result?.files.length ?? 0} | ${link} |`;
});
await writeFile(join(root, 'modules', version, 'README.md'),
  `# Extracted application modules · ${version}\n\n` +
  'These are derived static representations. Filenames ending in TypeScript do not establish original TypeScript recovery. ' +
  'The source manifest preserves input hashes, producer paths, retries and output hashes. ' +
  'File counts include extracted resources and provenance sidecars. Statement extraction does not establish a runnable module graph.\n\n' +
  '| Input bundle | Representation | Files | Entry point |\n| --- | --- | ---: | --- |\n' + rows.join('\n') + '\n');
console.log(JSON.stringify({ application: application.length, selected_bundles: bundles.length,
  successful_structural_extractions: bundles.filter(x => x.exit_code === 0).length,
  modules: bundles.reduce((n, x) => n + x.files.length, 0), supplemental: supplemental.map(x => ({ input: x.input, files: x.files.length })) }));
