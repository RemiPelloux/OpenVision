import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const currentPlatform = (context = process) => `${context.platform}-${context.arch}`;

export async function loadCriticalSuite(root) {
  const suite = JSON.parse(await readFile(join(root, 'desktop/critical-suite.json'), 'utf8'));
  const { scripts } = JSON.parse(await readFile(join(root, 'package.json'), 'utf8'));
  validateCriticalSuite(suite, scripts);
  return suite;
}

export function validateCriticalSuite(suite, scripts) {
  const ids = new Set();
  for (const entry of suite.entries) {
    if (!/^[a-z0-9-]+$/.test(entry.id) || ids.has(entry.id)) throw Error(`Invalid or duplicate critical entry id: ${entry.id}`);
    ids.add(entry.id);
    if (!/^OV-\d+$/.test(entry.story) || !entry.clause) throw Error(`${entry.id}: story and clause are required`);
    if (!scripts[entry.script]?.startsWith('node ')) throw Error(`${entry.id}: ${entry.script} is not a node npm script`);
    if (!entry.platforms.length || entry.platforms.some(platform => !suite.platforms.includes(platform)))
      throw Error(`${entry.id}: unknown platform`);
    if (entry.subsets.some(subset => !suite.subsets[subset])) throw Error(`${entry.id}: unknown subset`);
  }
}

// Entries are kept in manifest order so a run is reproducible.
export function selectEntries(suite, { platform, subset, stories, ids } = {}) {
  return suite.entries.map(entry => {
    const chosen = (!subset || entry.subsets.includes(subset)) && (!stories?.length || stories.includes(entry.story))
      && (!ids?.length || ids.includes(entry.id));
    if (!chosen) return null;
    return entry.platforms.includes(platform) ? { entry, run: true } : { entry, run: false, reason: `not supported on ${platform}` };
  }).filter(Boolean);
}

// A retry never upgrades a failed first attempt to a pass: it can only show flakiness.
export function classifyAttempts(attempts) {
  if (!attempts.length) return 'skipped';
  if (attempts[0].exitCode === 0) return 'pass';
  return attempts.some(attempt => attempt.exitCode === 0) ? 'flaky' : 'fail';
}

export function summarize(results) {
  const counts = { pass: 0, flaky: 0, fail: 0, skipped: 0 };
  for (const result of results) counts[result.outcome]++;
  const executed = counts.pass + counts.flaky + counts.fail;
  return { ...counts, executed, firstTimePassRate: executed ? counts.pass / executed : null,
    success: executed > 0 && counts.pass === executed };
}

// The npm script line is "node <file> [args]"; run the file directly so the
// runner owns the child process and can pass verifier arguments without npm.
export function scriptCommand(scripts, name) {
  const words = scripts[name].split(/\s+/);
  return { file: words[1], args: words.slice(2) };
}

// Verifiers print their private run directory as an absolute path under logs/.
export function runDirectories(output, root) {
  const prefix = join(root, 'logs') + '/';
  const found = new Set();
  for (const match of output.matchAll(/"((?:[^"\\]|\\.)*)"/g)) {
    const value = match[1];
    if (!value.startsWith(prefix)) continue;
    const [first] = value.slice(prefix.length).split('/');
    if (first && !first.includes('.')) found.add(join('logs', first));
  }
  return [...found];
}
