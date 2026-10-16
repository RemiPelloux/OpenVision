// Read-only source recovery/export. Run from the REA checkout with its pinned toolchain.
import { mkdir, readFile, writeFile, readdir, copyFile } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Client } from '@modelcontextprotocol/client';
import { StdioClientTransport } from '@modelcontextprotocol/client/stdio';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../..');
const recovery = join(root, 'cursor/native');
const captured = join(root, 'cursor/artifacts/installation');
const output = join(root, 'openvision/curs_source/native');
const inventory = JSON.parse(await readFile(join(recovery, 'inventory.json'), 'utf8'));
const sourcePackage = JSON.parse(await readFile(join(captured, 'resources/app/package.json'), 'utf8'));
const sourceVersion = sourcePackage.version;
const pe = inventory.files.filter(x => ['.exe', '.dll', '.node'].includes(x.extension));
const digest = async path => {
  const hash = createHash('sha256');
  for await (const chunk of createReadStream(path)) hash.update(chunk);
  return hash.digest('hex');
};
const json = async (path, value) => writeFile(path, JSON.stringify(value, null, 2) + '\n');
const decode = raw => raw.structuredContent ?? JSON.parse(raw.content.find(x => x.type === 'text').text);
const moduleId = file => file.relative_path.split('/').at(-1).replace(/[^A-Za-z0-9_.-]/g, '_') + '-' + file.sha256.slice(0, 12);
await mkdir(output, { recursive: true });
for (const file of pe) {
  if (await digest(join(captured, file.relative_path)) !== file.sha256) throw new Error('Captured target identity mismatch: ' + file.relative_path);
}
const proclist = pe.find(x => x.relative_path.endsWith('/cursor_proclist.node'));
const originalDir = join(recovery, 'cursor-proclist');
const exportedDir = join(output, moduleId(proclist));
await mkdir(exportedDir, { recursive: true });
for (const name of await readdir(originalDir)) {
  if (!/^0x[0-9a-f]+\.(?:json|c)$/.test(name) && !['coverage.json', 'all-functions.c'].includes(name)) continue;
  if (/^0x.*\.json$/.test(name)) {
    const evidence = JSON.parse(await readFile(join(originalDir, name), 'utf8'));
    if (evidence.subject?.digest?.sha256 !== proclist.sha256) throw new Error('Stale process-list Evidence: ' + name);
  }
  await copyFile(join(originalDir, name), join(exportedDir, name));
}
for (const name of ['pe-metadata.json', 'resources-evidence.json']) await copyFile(join(recovery, name), join(output, name));
for (const [name, destination] of [['cursor-proclist-procedures.json', 'procedures.json'], ['cursor-proclist-overview.json', 'overview.json']]) {
  const evidence = decode(JSON.parse(await readFile(join(recovery, name), 'utf8')));
  if (evidence.subject?.digest?.sha256 !== proclist.sha256) throw new Error('Stale process-list inventory: ' + name);
  await json(join(exportedDir, destination), evidence);
}
await json(join(exportedDir, 'origin.json'), { relative_path: proclist.relative_path, sha256: proclist.sha256, bytes: proclist.bytes, provider: { id: 'ghidra', version: '12.1.4' }, origin: 'Existing REA pseudocode exported after captured installation digest recheck', representation: 'decompiler-generated-non-source', compilable: false });

async function writeManifest() {
  const modules = [];
  for (const file of pe) {
    const id = moduleId(file);
    let coverage = null;
    let rustMetadata = null;
    try { coverage = JSON.parse(await readFile(join(output, id, 'coverage.json'), 'utf8')); }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
    try {
      rustMetadata = JSON.parse(await readFile(join(output, id, 'rust-metadata.json'), 'utf8'));
      if (rustMetadata.subject?.digest?.sha256 !== file.sha256) throw new Error('Stale Rust metadata: ' + file.relative_path);
    } catch (error) { if (error.code !== 'ENOENT') throw error; }
    modules.push({ relative_path: file.relative_path, sha256: file.sha256, bytes: file.bytes, captured_digest_verified: true,
      status: coverage ? (coverage.requested === coverage.identified_internal_functions ? 'identified-functions-attempted' : 'partial-function-export') : 'metadata-only',
      export_directory: coverage ? id : null,
      rust_metadata: rustMetadata ? { path: id + '/rust-metadata.json', evidence_id: rustMetadata.evidence_id } : null,
      identified_internal_functions: coverage?.identified_internal_functions ?? null,
      requested: coverage?.requested ?? 0, pseudocode_returned: coverage?.pseudocode_returned ?? 0,
      explicit_errors: coverage?.explicit_errors ?? 0, null_or_empty_pseudocode: coverage?.null_or_empty_pseudocode ?? 0 });
  }
  await json(join(output, 'manifest.json'), { schema_version: 1, captured_installation: 'cursor/artifacts/installation',
    captured_application_version: sourceVersion, snapshot_role: 'historical-captured-installation', current_installed_application_coverage: false,
    source_snapshot: inventory.created_at, native_payload_paths: modules.length, native_payload_identities: new Set(modules.map(x => x.sha256)).size,
    modules_with_pseudocode: modules.filter(x => x.pseudocode_returned).length, pseudocode_functions: modules.reduce((sum, x) => sum + x.pseudocode_returned, 0),
    classification: 'decompiler-generated-non-source', original_source_recovered: false, independently_buildable: false,
    limitations: ['All captured native target hashes were verified before export. No target code was executed.', 'Coverage counts Ghidra-identified internal procedures, including local thunks and compiler runtime code; it does not prove exhaustive machine-code function discovery.', 'Native pseudocode is not original C/C++/Rust source and is not an independently compilable project.', 'Metadata-only images have no pseudocode export. Hosted services and missing source/build metadata cannot be recovered from the installation.'], modules });
}
await writeManifest();
const selectors = process.argv.slice(2);
if (selectors.length) {
  const selected = selectors.map(selector => {
    const hits = pe.filter(x => x.relative_path === selector || x.relative_path.endsWith('/' + selector));
    if (hits.length !== 1) throw new Error('Expected one exact native target for selector: ' + selector);
    return hits[0];
  });
  const client = new Client({ name: 'openvision-native-recovery', version: '1.0.0' });
  const transport = new StdioClientTransport({ command: process.execPath, args: [join(root, 'scripts/rea.mjs'), 'mcp'], cwd: root, stderr: 'pipe', env: { ...process.env, GHIDRA_HEADLESS_MAXMEM: '768M' } });
  let stderr = '';
  transport.stderr?.on('data', chunk => { stderr += chunk; });
  const call = async (name, args) => client.callTool({ name, arguments: args }, { timeout: 900000 });
  let opened = false;
  let currentDestination;
  try {
    await client.connect(transport);
    for (const file of selected) {
      const destination = join(output, moduleId(file));
      currentDestination = destination;
      await mkdir(destination, { recursive: true });
      console.log('Open ' + file.relative_path);
      const rawOpen = await call('open_binary', { path: join(captured, file.relative_path), provider_id: 'ghidra' });
      await json(join(destination, 'open.json'), rawOpen);
      if (rawOpen.isError) throw new Error('Open failed: ' + JSON.stringify(rawOpen));
      opened = true;
      const rawList = await call('list_procedures', {});
      const list = decode(rawList);
      await json(join(destination, 'procedures.json'), list);
      if (rawList.isError || list.subject?.digest?.sha256 !== file.sha256) throw new Error('Procedure inventory failed or identity mismatch');
      const procedures = list.normalized_result.filter(x => x.address.startsWith('0x') && !x.procedure?.external);
      const results = [];
      let combined = '/* REA / Ghidra decompiler-generated pseudocode. Not original source; not compilable. */\n';
      const flush = async () => {
        await writeFile(join(destination, 'all-functions.c'), combined);
        await json(join(destination, 'coverage.json'), { sha256: file.sha256, procedure_inventory_evidence_id: list.evidence_id,
          identified_internal_functions: procedures.length, identified_external_functions: list.normalized_result.length - procedures.length,
          requested: results.length, pseudocode_returned: results.filter(x => x.has_pseudocode).length,
          explicit_errors: results.filter(x => x.is_error).length, null_or_empty_pseudocode: results.filter(x => !x.has_pseudocode && !x.is_error).length, functions: results });
      };
      await json(join(destination, 'origin.json'), { relative_path: file.relative_path, sha256: file.sha256, bytes: file.bytes, provider: list.provider, analysis_profile: list.analysis_profile, representation: 'decompiler-generated-non-source', compilable: false });
      for (const [index, procedure] of procedures.entries()) {
        const path = join(destination, procedure.address + '.json');
        let raw;
        try {
          const cached = JSON.parse(await readFile(path, 'utf8'));
          if (cached.subject?.digest?.sha256 === file.sha256 && cached.analysis_profile?.digest === list.analysis_profile?.digest && cached.evidence_id && !cached.is_error) raw = { structuredContent: cached };
        } catch (error) { if (error.code !== 'ENOENT') throw error; }
        raw ??= await call('procedure_pseudo_code', { procedure: procedure.address });
        const evidence = decode(raw);
        await json(path, evidence);
        const code = evidence.normalized_result;
        const hasCode = !raw.isError && typeof code === 'string' && code.length > 0;
        results.push({ ...procedure, evidence_id: evidence.evidence_id ?? null, is_error: raw.isError ?? false, has_pseudocode: hasCode, limitations: evidence.limitations ?? [], error: raw.isError ? evidence : undefined });
        if (hasCode) {
          const text = `\n/* Address: ${procedure.address}; Evidence: ${evidence.evidence_id} */\n` + code;
          await writeFile(join(destination, procedure.address + '.c'), text);
          combined += text;
        }
        if ((index + 1) % 50 === 0) { await flush(); console.log(`${file.relative_path}: ${index + 1}/${procedures.length}`); }
      }
      await flush();
      await json(join(destination, 'close.json'), await call('close_binary', {}));
      opened = false;
      if (await digest(join(captured, file.relative_path)) !== file.sha256) throw new Error('Target changed during read-only analysis');
      await writeManifest();
      console.log(`Complete ${file.relative_path}: ${results.length} attempted, ${results.filter(x => x.has_pseudocode).length} pseudocode`);
    }
  } catch (error) {
    if (currentDestination) await json(join(currentDestination, 'last-failure.json'), { message: error.message, code: error.code ?? null, details: error.data ?? null });
    throw error;
  } finally {
    try {
      if (opened) await call('close_binary', {});
    } finally {
      await client.close();
      await writeFile(join(root, 'cursor/native', 'openvision-export-stderr.log'), stderr);
      await writeManifest();
    }
  }
}
const files = [];
async function inventoryExports(directory, prefix = '') {
  for (const entry of (await readdir(directory, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name))) {
    const relative = prefix + entry.name;
    if (entry.isDirectory()) await inventoryExports(join(directory, entry.name), relative + '/');
    else if (entry.isFile() && relative !== 'export-hashes.json') files.push({ path: relative, sha256: await digest(join(directory, entry.name)) });
  }
}
await inventoryExports(output);
await json(join(output, 'export-hashes.json'), { schema_version: 1, captured_application_version: sourceVersion, algorithm: 'sha256', files });
console.log('Native manifest: ' + join(output, 'manifest.json'));
