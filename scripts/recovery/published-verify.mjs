// Check the published source tree without requiring an installed target or REA provider.
import { readFile } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../curs_source');
const manifest = JSON.parse(await readFile(join(root, 'manifest.json'), 'utf8'));
if (manifest.original_source_recovered !== false || manifest.independently_buildable !== false)
  throw new Error('Recovery limitations are missing');
const records = [...manifest.files, ...manifest.bundles.flatMap(x => x.files),
  ...manifest.supplemental.flatMap(x => x.files)];
const seen = new Map();
let bytes = 0;
for (const file of records) {
  const path = resolve(root, file.path);
  if (!path.startsWith(root + sep) || file.path.split('/').includes('node_modules'))
    throw new Error('Unexpected publication path: ' + file.path);
  if (seen.has(path)) {
    if (seen.get(path) !== file.sha256) throw new Error('Conflicting publication identity: ' + file.path);
    continue;
  }
  const hash = createHash('sha256');
  for await (const chunk of createReadStream(path)) { hash.update(chunk); bytes += chunk.length; }
  if (hash.digest('hex') !== file.sha256) throw new Error('Published source digest mismatch: ' + file.path);
  seen.set(path, file.sha256);
}
if (manifest.files.length !== manifest.published_application_files) throw new Error('Application source count mismatch');
const coverage = manifest.selection_coverage;
if (coverage.selected_inputs !== manifest.bundles.length ||
    ![coverage.structural_unchanged_input, coverage.structural_derived_filename_label].every(Number.isSafeInteger) ||
    coverage.structural_unchanged_input < 0 || coverage.structural_derived_filename_label < 0 ||
    coverage.structural_unchanged_input + coverage.structural_derived_filename_label > coverage.selected_inputs)
  throw new Error('Invalid selected-bundle coverage');
console.log(JSON.stringify({ version: manifest.version, verified_text_files: seen.size, bytes,
  application_files: manifest.files.length, source_maps: manifest.original_maps,
  native_payloads: manifest.native.length,
  matching_historical_pseudocode: manifest.native.filter(x => x.matching_historical_pseudocode).length,
  selection_coverage: coverage, original_source_recovered: false }));
