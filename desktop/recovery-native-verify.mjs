// Verify published native recovery against its complete retained per-function Evidence.
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolve, join, dirname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const output = resolve(dirname(fileURLToPath(import.meta.url)), '../curs_source/native');
const readJson = async path => JSON.parse(await readFile(path, 'utf8'));
const manifest = await readJson(join(output, 'manifest.json'));
if (manifest.original_source_recovered !== false || manifest.independently_buildable !== false || manifest.current_installed_application_coverage !== false) throw new Error('Native coverage must preserve its limitations');
if (manifest.captured_application_version !== '3.21.13') throw new Error('Unexpected historical version');
let procedures = 0;
let codeCount = 0;
let modules = 0;
for (const module of manifest.modules) {
  if (!module.export_directory) continue;
  modules++;
  const directory = join(output, module.export_directory);
  const coverage = await readJson(join(directory, 'coverage.json'));
  const combined = await readFile(join(directory, 'all-functions.c'), 'utf8');
  if (coverage.functions.length !== coverage.requested || coverage.requested > coverage.identified_internal_functions) throw new Error('Invalid coverage count: ' + directory);
  if (new Set(coverage.functions.map(x => x.address)).size !== coverage.functions.length) throw new Error('Duplicate procedure: ' + directory);
  let count = 0;
  for (const procedure of coverage.functions) {
    const evidence = await readJson(join(directory, procedure.address + '.json'));
    if (evidence.subject?.digest?.sha256 !== module.sha256 || evidence.evidence_id !== procedure.evidence_id) throw new Error('Evidence identity mismatch: ' + directory + '/' + procedure.address);
    if (procedure.has_pseudocode) {
      const code = evidence.normalized_result;
      const heading = `\n/* Address: ${procedure.address}; Evidence: ${evidence.evidence_id} */\n`;
      const actual = await readFile(join(directory, procedure.address + '.c'), 'utf8');
      if (typeof code !== 'string' || actual !== heading + code || !combined.includes(actual)) throw new Error('Pseudocode differs from retained Evidence: ' + directory + '/' + procedure.address);
      count++;
    }
    procedures++;
  }
  if (count !== coverage.pseudocode_returned || count !== module.pseudocode_returned) throw new Error('Pseudocode count mismatch: ' + directory);
  codeCount += count;
}
if (modules !== manifest.modules_with_pseudocode || codeCount !== manifest.pseudocode_functions || manifest.modules.length !== manifest.native_payload_paths) throw new Error('Manifest aggregate count mismatch');
const hashes = await readJson(join(output, 'export-hashes.json'));
for (const file of hashes.files) {
  const path = resolve(output, file.path);
  if (!path.startsWith(output + sep)) throw new Error('Export path escapes recovery root');
  if (createHash('sha256').update(await readFile(path)).digest('hex') !== file.sha256) throw new Error('Export digest mismatch: ' + file.path);
}
console.log(JSON.stringify({ captured_application_version: manifest.captured_application_version, modules, procedures, pseudocode: codeCount, verified_export_files: hashes.files.length, original_source_recovered: false }));
