import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { loadCriticalSuite, validateCriticalSuite, selectEntries, classifyAttempts, summarize, scriptCommand,
  runDirectories } from './critical-suite.mjs';

const root = resolve(import.meta.dirname, '..');
const { scripts } = JSON.parse(await readFile(join(root, 'package.json'), 'utf8'));
const { requiredStoryIds } = JSON.parse(await readFile(join(root, 'docs/planning/feature-acceptance.json'), 'utf8'));

test('critical manifest names real stories, node verifier scripts and known platforms', async () => {
  const suite = await loadCriticalSuite(root);
  for (const entry of suite.entries) assert.ok(requiredStoryIds.includes(entry.story), entry.id);
  const linux = selectEntries(suite, { platform: 'linux-x64', subset: 'linux-critical' });
  assert.deepEqual(linux.map(({ entry }) => entry.id), ['package-linux', 'welcome', 'project', 'explorer', 'development',
    'git', 'agent', 'completion', 'extensions', 'linux-secrets']);
  assert.ok(linux.every(item => item.run));
  const windows = selectEntries(suite, { platform: 'win32-x64', subset: 'linux-critical' });
  assert.deepEqual(windows.filter(item => !item.run).map(({ entry }) => entry.id), ['package-linux', 'linux-secrets']);
});

test('manifest validation rejects unknown scripts, duplicates and platforms', () => {
  const entry = { id: 'a', story: 'OV-903', clause: 'c', script: 'verify:a', platforms: ['linux-x64'], subsets: ['s'] };
  const suite = entries => ({ platforms: ['linux-x64'], subsets: { s: 'set' }, entries });
  assert.doesNotThrow(() => validateCriticalSuite(suite([entry]), { 'verify:a': 'node a.mjs' }));
  assert.throws(() => validateCriticalSuite(suite([entry]), {}), /not a node npm script/);
  assert.throws(() => validateCriticalSuite(suite([entry, entry]), { 'verify:a': 'node a.mjs' }), /duplicate/);
  assert.throws(() => validateCriticalSuite(suite([{ ...entry, platforms: ['darwin-arm64'] }]), { 'verify:a': 'node a.mjs' }), /platform/);
});

test('a retry is labelled flaky and never counts as a first-time pass', () => {
  assert.equal(classifyAttempts([{ exitCode: 0 }]), 'pass');
  assert.equal(classifyAttempts([{ exitCode: 1 }, { exitCode: 0 }]), 'flaky');
  assert.equal(classifyAttempts([{ exitCode: 1 }, { exitCode: 1 }]), 'fail');
  assert.equal(classifyAttempts([]), 'skipped');
  const summary = summarize([{ outcome: 'pass' }, { outcome: 'flaky' }, { outcome: 'skipped' }]);
  assert.deepEqual(summary, { pass: 1, flaky: 1, fail: 0, skipped: 1, executed: 2, firstTimePassRate: 0.5, success: false });
  assert.equal(summarize([{ outcome: 'pass' }, { outcome: 'skipped' }]).success, true);
});

test('runner resolves npm scripts and run directories', () => {
  assert.deepEqual(scriptCommand({ 'verify:x': 'node desktop/verify-x.mjs --flag' }, 'verify:x'),
    { file: 'desktop/verify-x.mjs', args: ['--flag'] });
  const output = JSON.stringify({ directory: join(root, 'logs/welcome-verification-AbC123'),
    file: join(root, 'logs/welcome-verification-AbC123/result.json'), other: '/tmp/elsewhere', log: join(root, 'logs/desktop-launch.json') });
  assert.deepEqual(runDirectories(output, root), ['logs/welcome-verification-AbC123']);
});
