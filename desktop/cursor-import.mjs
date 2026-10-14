import { readdir, lstat } from 'node:fs/promises';
import { cursorLocations } from './platform.mjs';
import { join, resolve, relative, sep } from 'node:path';
import { extensionRecord, assertExtensionPlatform } from './import-extensions.mjs';
import { mergeSettings, mergeKeybindings, parseConfiguration, protectedSettings } from './import-json.mjs';
import { optionalFile, digest, fileHash, inside, tree, safeDestination } from './import-files.mjs';
import { importDestinations, safeImportDestination, destinationOwner } from './import-destinations.mjs';

export const categories = ['settings', 'keybindings', 'snippets', 'tasks', 'extensions'];
export function defaults(root, context) {
  return { root, ...cursorLocations(context), categories, overwrite: true };
}

export async function cursorProfiles(user) {
  const profiles = [{ name: 'Default', path: user }];
  try {
    for (const entry of await readdir(join(user, 'profiles'), { withFileTypes: true }))
      if (entry.isDirectory() && !entry.isSymbolicLink()) profiles.push({ name: entry.name, path: join(user, 'profiles', entry.name) });
  } catch (error) { if (error.code !== 'ENOENT') throw error; }
  return profiles;
}

function validate(options) {
  if (!options || typeof options.root !== 'string' || typeof options.user !== 'string' || typeof options.extensions !== 'string' ||
      !Array.isArray(options.categories) || !options.categories.every(category => categories.includes(category)) ||
      typeof options.overwrite !== 'boolean') throw new Error('Invalid Cursor import options.');
  return { ...options, categories: [...new Set(options.categories)], root: resolve(options.root), user: resolve(options.user), extensions: resolve(options.extensions) };
}

async function addFile(plan, path, data, category, source) {
  await safeImportDestination(plan.destinations, path);
  const before = await optionalFile(path);
  if (before?.equals(data)) return;
  plan.changes.push({ path, data, bytes: data.length, category, source, before: before ? digest(before) : null, after: digest(data) });
}

async function addExtensionFile(plan, path, source) {
  await safeImportDestination(plan.destinations, path);
  const before = await fileHash(path);
  if (before && !plan.options.overwrite) return;
  const after = await fileHash(source);
  if (!after) throw new Error(`Cursor extension disappeared: ${source}`);
  if (after === before) return;
  plan.changes.push({ path, source, category: 'extensions', bytes: (await lstat(source)).size, before, after });
}

async function importPreference(plan, name, category, merger) {
  const source = join(plan.options.user, name);
  const incoming = await optionalFile(source);
  if (!incoming) { plan.missing.push(source); return; }
  const destination = join(plan.destinations.user, name);
  const existing = await optionalFile(destination);
  const data = merger ? Buffer.from(merger(incoming.toString('utf8'), existing?.toString('utf8'), plan.options.overwrite)) : incoming;
  if (!merger) {
    parseConfiguration(incoming.toString('utf8'));
    if (existing && !plan.options.overwrite) return;
  }
  await addFile(plan, destination, data, category, source);
}

async function importSnippets(plan) {
  const directory = join(plan.options.user, 'snippets');
  for (const source of await tree(directory)) {
    if (!/\.(json|code-snippets)$/i.test(source)) continue;
    const destination = join(plan.destinations.user, 'snippets', relative(directory, source));
    const incoming = await optionalFile(source);
    parseConfiguration(incoming.toString('utf8'));
    const existing = await optionalFile(destination);
    if (existing && !plan.options.overwrite) continue;
    await addFile(plan, destination, incoming, 'snippets', source);
  }
}

function extensionPath(base, entry) {
  if (!entry || typeof entry.relativeLocation !== 'string' || !entry.identifier || typeof entry.identifier.id !== 'string' ||
      typeof entry.version !== 'string' || !entry.relativeLocation || /[\\/]/.test(entry.relativeLocation) ||
      ['.', '..'].includes(entry.relativeLocation)) throw new Error('Invalid installed extension registry entry.');
  const path = resolve(base, entry.relativeLocation);
  if (!inside(base, path)) throw new Error('Extension path escapes the source directory.');
  return path;
}

async function importExtensions(plan) {
  await safeDestination(plan.options.extensions, plan.options.extensions);
  const source = join(plan.options.extensions, 'extensions.json');
  const incoming = await optionalFile(source);
  if (!incoming) { plan.missing.push(source); return; }
  const entries = parseConfiguration(incoming.toString('utf8'), 'array');
  const directory = plan.destinations.extensions;
  const destination = join(directory, 'extensions.json');
  const before = await optionalFile(destination);
  const registry = before ? parseConfiguration(before.toString('utf8'), 'array') : [];
  for (const entry of registry) extensionPath(directory, entry);
  for (const entry of entries) {
    const input = extensionPath(plan.options.extensions, entry);
    const existing = registry.findIndex(item => item.identifier.id.toLowerCase() === entry.identifier.id.toLowerCase());
    if (existing >= 0 && !plan.options.overwrite) continue;
    assertExtensionPlatform(entry);
    const info = await lstat(input);
    if (!info.isDirectory() || info.isSymbolicLink()) throw new Error(`Invalid extension directory: ${input}`);
    const output = join(directory, entry.relativeLocation);
    for (const file of await tree(input)) {
      const path = join(output, relative(input, file));
      await addExtensionFile(plan, path, file);
    }
    const migrated = extensionRecord(entry, output);
    if (existing >= 0) registry[existing] = migrated; else registry.push(migrated);
  }
  const normalized = registry.map(entry => extensionRecord(entry, extensionPath(directory, entry)));
  if (JSON.stringify(normalized) !== JSON.stringify(before ? parseConfiguration(before.toString('utf8'), 'array') : []))
    await addFile(plan, destination, Buffer.from(JSON.stringify(normalized)), 'extensions', source);
}

export async function planImport(input) {
  const options = validate(input);
  const destinations = importDestinations(options.root, options.destinations);
  if (inside(options.root, options.user) || inside(options.root, options.extensions))
    throw new Error('Cursor source directories must be outside OpenVision.');
  for (const source of [options.user, options.extensions])
    if (['user', 'extensions', 'backups'].some(key => inside(destinations[key], source) || inside(source, destinations[key])))
      throw Error('Import sources and destinations must not overlap.');
  await safeDestination(options.user, options.user);
  const info = await lstat(options.user);
  if (!info.isDirectory() || info.isSymbolicLink()) throw new Error('Cursor User directory is unavailable.');
  const plan = { root: options.root, destinations, options, changes: [], missing: [] };
  for (const category of options.categories) {
    if (category === 'settings') await importPreference(plan, 'settings.json', category, mergeSettings);
    if (category === 'keybindings') await importPreference(plan, 'keybindings.json', category, mergeKeybindings);
    if (category === 'tasks') await importPreference(plan, 'tasks.json', category);
    if (category === 'snippets') await importSnippets(plan);
    if (category === 'extensions') await importExtensions(plan);
  }
  return plan;
}

export function summarize(plan) {
  const counts = Object.fromEntries(categories.map(category => [category, plan.changes.filter(change => change.category === category).length]));
  return { source: plan.options.user, destination: plan.destinations.user, extensionsDestination: plan.destinations.extensions, counts,
    files: plan.changes.length, bytes: plan.changes.reduce((sum, change) => sum + change.bytes, 0),
    paths: plan.changes.map(change => { const owner = destinationOwner(plan.destinations, change.path);
      return `${owner}/${relative(plan.destinations[owner], change.path).split(sep).join('/')}`; }),
    missing: plan.missing, protectedSettings: [...protectedSettings] };
}
