import { lstat, mkdir, readFile, writeFile } from 'node:fs/promises';
import { homedir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { additiveImport } from './project-namespace-migration.mjs';

// Explicit, additive import of OpenVision data that earlier builds kept in the
// operating-system home into one profile home (<user-data-dir>/User). Sources
// are never moved, changed or deleted; they remain the backup. Existing profile
// files are never overwritten (different content is reported as a conflict),
// links are skipped, and repeating the import changes nothing.
export const profileItems = Object.freeze({
  '.openvision': ['skills', 'commands', 'hooks.json', 'plans', 'projects', 'plugins', 'ide_state.json', 'sandbox.json',
    'sandbox-policies', 'managed', 'ai-tracking', 'debug-logs', 'feature-gates', 'notepads'],
  '.openvision-local': ['argv.json', 'permissions.json', 'sandbox.json', 'blocklist', 'unified_repo_list.json'],
});
// Items whose profile location differs from the home layout: user subagents
// are read from <profile home>/agents, not <profile home>/.openvision/agents.
export const relocatedItems = Object.freeze({ '.openvision/agents': 'agents' });
// Not imported: worktrees are linked to their repositories by absolute path, and
// .gitignore is regenerated. Third-party folders stay an explicit user choice.
export const excludedItems = Object.freeze(['.openvision/worktrees', '.openvision/.gitignore']);

async function exists(file) {
  try { return await lstat(file); } catch (error) { if (error.code === 'ENOENT') return undefined; throw error; }
}

export async function migrateProfileHome({ home = homedir(), profile }) {
  for (const [name, value] of [['home', home], ['profile', profile]])
    if (typeof value !== 'string' || !path.isAbsolute(value)) throw new TypeError(`An absolute ${name} directory is required`);
  const profileHome = path.join(path.resolve(profile), 'User');
  if (path.resolve(home) === profileHome || profileHome.startsWith(path.resolve(home) + path.sep + '.openvision'))
    throw new Error('The profile must not be inside the home data folders');
  const result = { home: path.resolve(home), profileHome, copied: 0, unchanged: 0, conflicts: [], skippedLinks: [], errors: [], items: [] };
  for (const [folder, names] of Object.entries(profileItems)) {
    const source = path.join(home, folder);
    const stat = await exists(source);
    if (!stat) continue;
    if (stat.isSymbolicLink() || !stat.isDirectory()) { result.skippedLinks.push(source); continue; }
    for (const name of names) {
      if (!await exists(path.join(source, name))) continue;
      const before = result.copied;
      await mkdir(path.join(profileHome, folder), { recursive: true });
      await additiveImport(path.join(source, name), path.join(profileHome, folder, name), result);
      result.items.push({ item: `${folder}/${name}`, copied: result.copied - before });
    }
  }
  for (const [item, target] of Object.entries(relocatedItems)) {
    const source = path.join(home, item);
    const stat = await exists(source);
    if (!stat) continue;
    if (stat.isSymbolicLink()) { result.skippedLinks.push(source); continue; }
    const before = result.copied;
    await mkdir(profileHome, { recursive: true });
    await additiveImport(source, path.join(profileHome, target), result);
    result.items.push({ item, target, copied: result.copied - before });
  }
  // Record each run that copied something; an unchanged repeat leaves no trace.
  if (result.copied) {
    const record = path.join(profileHome, '.openvision', 'migrations', 'home-import.json');
    await mkdir(path.dirname(record), { recursive: true });
    const runs = JSON.parse(await readFile(record, 'utf8').catch(error => { if (error.code === 'ENOENT') return '[]'; throw error; }));
    runs.push({ at: new Date().toISOString(), home: result.home, copied: result.copied, unchanged: result.unchanged,
      conflicts: result.conflicts, items: result.items.filter(item => item.copied) });
    await writeFile(record, JSON.stringify(runs, null, 2) + '\n');
  }
  return result;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2), option = name => { const i = args.indexOf(name); return i < 0 ? undefined : args[i + 1]; };
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const result = await migrateProfileHome({ home: path.resolve(option('--home') ?? homedir()),
    profile: path.resolve(option('--profile') ?? path.join(root, 'data/local')) });
  console.log(JSON.stringify(result, null, 2));
  if (result.errors.length || result.conflicts.length || result.skippedLinks.length) process.exitCode = 1;
}
