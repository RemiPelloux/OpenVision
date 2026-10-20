// Checks that every native file substituted into the upstream-host package has a provenance
// record in docs/recovery/native-provenance-linux.md: source, toolchain, command, license and
// either its exact output digest or (for unmodified release files) the verified archive digest.
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileHash } from './import-files.mjs';
import { readUpstreamManifest, upstreamPackageName } from './upstream-host-build.mjs';
import { hostInputs, prepareUpstreamInputs } from './upstream-host.mjs';

export const provenanceDocument = 'docs/recovery/native-provenance-linux.md';
const columns = ['Path', 'SHA-256', 'Source', 'Toolchain', 'Command', 'License'];

// Rows of the first Markdown table whose header is exactly `columns`.
export function provenanceRows(markdown) {
  const lines = markdown.split('\n');
  const cells = line => line.trim().replace(/^\||\|$/g, '').split('|').map(cell => cell.trim().replace(/^`|`$/g, ''));
  const start = lines.findIndex(line => line.trim().startsWith('|') && cells(line).join() === columns.join());
  if (start < 0) throw new Error(`No provenance table with columns ${columns.join(', ')}`);
  const rows = [];
  for (const line of lines.slice(start + 2)) {
    if (!line.trim().startsWith('|')) break;
    const values = cells(line);
    if (values.length !== columns.length) throw new Error(`Malformed provenance row: ${line}`);
    rows.push(Object.fromEntries(columns.map((name, index) => [name, values[index]])));
  }
  return rows;
}

const pattern = glob => new RegExp(`^${glob.replace(/[.+^${}()|[\]\\]/g, '\\$&').replaceAll('*', '[^/]*')}$`);

// Returns the problems found; an empty list means every substitution is recorded.
export function checkProvenance(rows, substitutions, archives) {
  const problems = [];
  for (const entry of substitutions) {
    const row = rows.find(candidate => candidate.Path === entry.path) ?? rows.find(candidate => candidate.Path.includes('*') && pattern(candidate.Path).test(entry.path));
    if (!row) { problems.push(`${entry.path}: no provenance record`); continue; }
    for (const name of columns) if (!row[name] || row[name] === '—') problems.push(`${entry.path}: empty ${name}`);
    const archive = /^archive:([0-9a-f]{64})$/.exec(row['SHA-256']);
    if (archive) {
      if (!archives.has(archive[1])) problems.push(`${entry.path}: ${archive[1]} is not a pinned release archive`);
      if (!entry.origin?.startsWith(archives.get(archive[1]) ?? '\0')) problems.push(`${entry.path}: origin ${entry.origin} is not from the recorded archive`);
      if (entry.status === 'different') problems.push(`${entry.path}: archive-level records need the unmodified release file`);
    } else if (row['SHA-256'] !== entry.sha256) problems.push(`${entry.path}: recorded ${row['SHA-256']} but packaged ${entry.sha256}`);
  }
  return problems;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const root = resolve(import.meta.dirname, '..');
  const index = process.argv.indexOf('--package');
  const directory = resolve(index < 0 ? join(root, 'build/upstream-host', upstreamPackageName) : process.argv[index + 1]);
  const manifest = await readUpstreamManifest(directory);
  const rows = provenanceRows(await readFile(join(root, provenanceDocument), 'utf8'));
  const archives = new Map(Object.values(hostInputs()).map(input => [input.sha256, input.url]));
  const problems = checkProvenance(rows, manifest.substitutions, archives);
  // Archive-level records hold only when each file still equals the one inside the verified archive.
  const inputs = await prepareUpstreamInputs(root);
  for (const entry of manifest.substitutions.filter(entry => entry.origin?.startsWith(`${inputs.electron.url}#`))) {
    assert.equal(await fileHash(join(directory, entry.path)), entry.sha256, `${entry.path} changed after packaging`);
    assert.equal(await fileHash(join(inputs.electron.host, entry.origin.split('#')[1])), entry.sha256, `${entry.path} differs from the release archive`);
  }
  console.log(JSON.stringify({ success: problems.length === 0, package: directory, substitutions: manifest.substitutions.length,
    records: rows.length, addons: manifest.substitutions.filter(entry => entry.status === 'rebuilt').length, problems }, null, 2));
  if (problems.length) process.exitCode = 1;
}
