import { lstat, mkdir, readdir, realpath, rename, rm } from 'node:fs/promises';
import { join, relative, resolve } from 'node:path';

// Preserve conversation content only. Never archive the whole authenticated home.
const historyNames = {
  codex: ['sessions', 'archived_sessions', 'history.jsonl'],
  claude: ['projects', 'history.jsonl'],
};
async function exists(path) {
  try { return await lstat(path); } catch (error) { if (error.code !== 'ENOENT') throw error; }
}
async function rejectLinks(path) {
  const info = await lstat(path);
  if (info.isSymbolicLink() || (!info.isDirectory() && !info.isFile()))
    throw Error('Conversation history contains a link or special file. Cleanup stopped; the account remains listed for recovery.');
  if (info.isDirectory()) for (const entry of await readdir(path)) await rejectLinks(join(path, entry));
}
async function archiveDirectory(directory, account) {
  let path = directory;
  for (const name of ['history', account.provider, account.id]) {
    path = join(path, name);
    const info = await exists(path);
    if (info && (!info.isDirectory() || info.isSymbolicLink()))
      throw Error('History directory identity changed. Cleanup stopped to preserve your files.');
    if (!info) await mkdir(path);
  }
  if (relative(await realpath(path), resolve(path))) throw Error('History directory identity changed. Cleanup stopped to preserve your files.');
}
export async function removeAccountFiles(directory, account) {
  const home = join(directory, account.provider, account.id);
  const archive = join(directory, 'history', account.provider, account.id);
  if (!await exists(home)) return;
  if (relative(await realpath(join(directory, account.provider)), resolve(directory, account.provider)))
    throw Error('Account parent directory identity changed. Cleanup stopped to preserve your files.');
  if (!(await lstat(home)).isDirectory() || (await lstat(home)).isSymbolicLink())
    throw Error('Account directory identity changed. Cleanup stopped to preserve your files.');
  for (const name of historyNames[account.provider]) {
    const source = join(home, name);
    if (!await exists(source)) continue;
    await rejectLinks(source);
    await archiveDirectory(directory, account);
    if (await exists(join(archive, name))) throw Error('A history backup already exists. Cleanup stopped to preserve both copies.');
    await rename(source, join(archive, name));
  }
  await rm(home, { recursive: true, force: true });
}
