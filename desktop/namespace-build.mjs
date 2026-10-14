import { readFile, writeFile, readdir, mkdir, copyFile, rename } from 'node:fs/promises';
import { join, dirname, relative } from 'node:path';
import { digest } from './import-files.mjs';
import { namespaceEdits, applyNamespaceEdits } from './project-namespace.mjs';

async function* runtimeFiles(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules') yield* runtimeFiles(path);
    else if (entry.isFile() && !entry.name.startsWith('openvision-') &&
      /\.(?:js|mjs|cjs|json)$/.test(entry.name)) yield path;
  }
}

async function readJournal(path) {
  try { return JSON.parse(await readFile(path, 'utf8')); }
  catch (error) { if (error.code === 'ENOENT') return []; throw error; }
}

async function writeJournal(path, records) {
  await mkdir(dirname(path), { recursive: true });
  const temporary = `${path}.tmp`;
  await writeFile(temporary, JSON.stringify(records) + '\n');
  await rename(temporary, path);
}

// Recovered-owner patches expect their original path spellings. Restore only
// our exact, hash-verified edits before those patches run on the next build.
export async function restoreNamespaceInputs(root) {
  const path = join(root, 'build/namespace-journal.json');
  const journal = await readJournal(path);
  for (const record of journal) {
    const file = join(root, 'source/app', record.path);
    let source = await readFile(file, 'utf8');
    if (digest(source) === record.input) continue;
    if (digest(source) !== record.output) throw new Error(`Namespace input changed outside build: ${record.path}; preserve edits before rebuilding`);
    let offset = 0;
    const reverse = record.edits.map(edit => {
      const start = edit.start + offset;
      offset += edit.after.length - edit.before.length;
      return { start, before: edit.after, after: edit.before };
    });
    source = applyNamespaceEdits(source, reverse);
    if (digest(source) !== record.input) throw new Error(`Namespace restore mismatch: ${record.path}`);
    await writeFile(file, source);
  }
  await writeJournal(path, []);
}

export async function installProjectNamespace(root, { afterExtensions } = {}) {
  const app = join(root, 'source/app');
  const journalPath = join(root, 'build/namespace-journal.json');
  const journal = await readJournal(journalPath);
  const existing = new Map(journal.map(record => [record.path, record]));
  for (const section of ['extensions', 'out']) {
    if (section === 'out') await afterExtensions?.();
    for await (const path of runtimeFiles(join(app, section))) {
    const before = await readFile(path, 'utf8');
    const name = relative(app, path), prior = existing.get(name);
    if (prior) {
      if (digest(before) === prior.output) continue;
      throw new Error(`Restore namespace inputs before installing again: ${name}`);
    }
    if (!before.includes('.cursor') && !before.includes('\\.cursor')) continue;
    let edits;
    try { edits = namespaceEdits(before, path.endsWith('.json')); }
    catch (error) { throw new Error(`Namespace parse failed for ${path}: ${error.message}`, { cause: error }); }
    if (!edits.length) continue;
    const after = applyNamespaceEdits(before, edits);
    const backup = join(root, 'backups/project-namespace', name);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    journal.push({ path: name, input: digest(before), output: digest(after), edits });
    // Journal before mutation permits recovery if a build is interrupted.
    await writeJournal(journalPath, journal);
    await writeFile(path, after);
    }
  }
  console.log(`OpenVision project namespace: ${journal.length} runtime files updated`);
}
