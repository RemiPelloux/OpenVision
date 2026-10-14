import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { digest } from './import-files.mjs';

const marker = '/* OpenVision explicit worktree inventory v1 */';
export function explicitWorktreeInventory(text) {
  if (text.includes(marker)) return text;
  const anchor = 'async getWorktreesFS() {';
  const index = text.indexOf(anchor);
  if (index < 0 || text.indexOf(anchor, index + 1) >= 0) throw new Error('Worktree inventory owner missing or ambiguous');
  const owner = parseExpressionAt(text, text.lastIndexOf('class ', index), { ecmaVersion: 'latest' });
  const inventory = owner.body.body.find(item => item.key?.name === 'getWorktreesFS');
  const lookup = owner.body.body.find(item => item.key?.name === 'getWorktrees');
  const guard = inventory?.value.body.body[0];
  if (guard?.type !== 'IfStatement' || !text.slice(guard.start, guard.end).includes('.get("detectWorktrees") === !0') ||
    !/^async getWorktrees\(\)\s*{\s*return await this.getWorktreesFS\(\);\s*}$/.test(text.slice(lookup?.start, lookup?.end)))
    throw new Error('Worktree background inventory contract changed');
  const calls = [...text.matchAll(/return await this\.run\(([\w$]+)\.GetWorktrees, \(\) => this\.repository\.getWorktrees\(\)\);/g)];
  if (calls.length !== 1) throw new Error('Explicit worktree operation missing or ambiguous');
  const call = calls[0];
  const edits = [
    [lookup.start, lookup.end, 'async getWorktrees(explicit = false) { return await this.getWorktreesFS(explicit); }'],
    [inventory.start, inventory.value.body.start, 'async getWorktreesFS(explicit = false) '],
    [guard.test.start, guard.test.end, `!explicit && (${text.slice(guard.test.start, guard.test.end)})`],
    [call.index, call.index + call[0].length, call[0].replace('getWorktrees()', 'getWorktrees(true)')],
  ];
  for (const [start, end, replacement] of edits.sort((a, b) => b[0] - a[0]))
    text = text.slice(0, start) + replacement + text.slice(end);
  return `${marker}\n${text}`;
}

export async function installExplicitWorktrees(root) {
  const path = join(root, 'source/app/extensions/git/dist/main.js');
  const before = await readFile(path, 'utf8'), after = explicitWorktreeInventory(before);
  if (before === after) return;
  const backup = join(root, 'backups/git-worktrees', `${digest(before)}.js`);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
}
