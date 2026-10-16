// Preserve previously recovered text with its producer digests; never copy profiles.
import { mkdir, readFile, writeFile, copyFile, readdir, stat } from 'node:fs/promises';
import { createReadStream, constants } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const app = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const prior = join(dirname(app), 'cursor');
const output = join(app, 'curs_source/snapshots/3.21.13');
const records = [];
const digest = async path => {
  const hash = createHash('sha256');
  for await (const chunk of createReadStream(path)) hash.update(chunk);
  return hash.digest('hex');
};
async function preserve(source, destination, expected) {
  const hash = await digest(source);
  if (expected && hash !== expected) throw new Error('Producer digest mismatch: ' + source);
  await mkdir(dirname(destination), { recursive: true });
  try { await copyFile(source, destination, constants.COPYFILE_EXCL); }
  catch (error) { if (error.code !== 'EEXIST') throw error; }
  if (await digest(destination) !== hash) throw new Error('Export differs: ' + destination);
  records.push({ path: relative(output, destination).replaceAll('\\', '/'), sha256: hash,
    bytes: (await stat(destination)).size });
}
for (const report of ['readability', 'raw-readability']) {
  const data = JSON.parse(await readFile(join(prior, 'reports', report + '.json'), 'utf8'));
  for (const file of data.files) {
    await preserve(join(prior, file.output), join(output, file.output), file.output_sha256);
    if (records.length % 2000 === 0) console.log('Verified text outputs: ' + records.length);
  }
}
for (const report of ['bundle-recovery', 'raw-bundle-recovery']) {
  const data = JSON.parse(await readFile(join(prior, 'reports', report + '.json'), 'utf8'));
  for (const bundle of data.files) {
    for (const file of bundle.files ?? []) {
      await preserve(join(prior, bundle.output, file.path), join(output, bundle.output, file.path), file.sha256);
    }
  }
}
const reportNames = ['installation-manifest', 'readability', 'raw-readability', 'bundle-recovery',
  'raw-bundle-recovery', 'rea-ledger', 'rea-coverage', 'source-maps-verified', 'summary', 'verification'];
for (const name of reportNames) {
  await preserve(join(prior, 'reports', name + '.json'), join(output, 'reports', name + '.json'));
}
for (const name of await readdir(join(prior, 'evidence'))) {
  if (name.endsWith('.json')) await preserve(join(prior, 'evidence', name), join(output, 'evidence', name));
}
for (const name of ['LICENSE.txt', 'ThirdPartyNotices.txt']) {
  await preserve(join(prior, 'artifacts/installation/resources/app', name), join(output, name));
}
await writeFile(join(output, 'export-manifest.json'), JSON.stringify({ schema_version: 1,
  version: '3.21.13', verified_at: new Date().toISOString(), files: records,
  count: records.length, bytes: records.reduce((sum, file) => sum + file.bytes, 0),
  representation: 'formatted-shipped-javascript-and-derived-module-extraction',
  original_source_recovered: false, independently_buildable: false,
  verification: 'Every exported file matched its local producer output; recorded producer SHA-256 values were rechecked where available.',
}, null, 2) + '\n');
console.log('Historical recovery exported and verified: ' + records.length + ' files');
