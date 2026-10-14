import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { digest } from './import-files.mjs';

const marker = '/* OpenVision shutdown resource ownership v1 */';
const registration = /N\.once\((\w+)\.onWillShutdown\)\(\((\w+)\) => \{\s*\((\w+)\.dispose\(\),\s*(\w+)\.dispose\(\),\s*\2\.join\(/g;

export function retainShutdownResources(text) {
  if (text.includes(marker)) return text;
  const matches = [...text.matchAll(registration)];
  if (matches.length !== 1) throw new Error('Shutdown disposal owner missing or ambiguous');
  const [match] = matches;
  const owner = parseExpressionAt(text, text.lastIndexOf('class ', match.index), { ecmaVersion: 'latest' });
  const startup = owner.body.body.find(item => item.key?.name === 'startup');
  const [, lifecycle, event, files, configuration] = match;
  if (!startup || startup.start > match.index || startup.end < match.index ||
      !new RegExp(`\\b${files}\\s*=\\s*\\w+\\.get\\(Jt\\)`).test(text.slice(startup.start, match.index)) ||
      !text.slice(match.index, startup.end).includes('"instanceLockfile"') ||
      !text.includes('await this.stateService.close();'))
    throw new Error('Shutdown state-flush contract changed');
  // The lifecycle owner flushes state AFTER all shutdown joiners. File-service
  // disposal in a joiner (or directly in the event) is therefore too early.
  const replacement = `N.once(${lifecycle}.onWillShutdown)((${event}) => {
    (process.once("exit", () => { ${files}.dispose(); ${configuration}.dispose(); }),
      ${event}.join(`;
  return `${marker}\n${text.slice(0, match.index)}${replacement}${text.slice(match.index + match[0].length)}`;
}

export async function installShutdownOwnership(root) {
  const relative = 'source/app/out/main.js';
  const before = await readFile(join(root, relative), 'utf8');
  const after = retainShutdownResources(before);
  if (before === after) return;
  const backup = join(root, 'backups/shutdown', `${digest(before)}.js`);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(join(root, relative), backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(join(root, relative), after);
}
