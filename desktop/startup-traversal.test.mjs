import test from 'node:test';
import assert from 'node:assert/strict';
import { classifyScanner, evaluateStartup, startupBudget } from './startup-traversal.mjs';

test('scanners are attributed by program and argv', () => {
  assert.equal(classifyScanner('cursorsandbox', ['--policy', 'x', '--preflight-only', '--', '/bin/true']), 'sandbox-preflight');
  assert.equal(classifyScanner('cursorsandbox', ['--policy', 'x', '--', 'ls']), 'sandbox-run');
  assert.equal(classifyScanner('rg', ['--files', '--glob', '**/.cursorignore', '/w']), 'rg:cursorignore');
  assert.equal(classifyScanner('rg', ['--files', '--glob', '**/AGENTS.md', '/w']), 'rg:rules');
  assert.equal(classifyScanner('rg', ['--files', '-g', '**/.cursor/rules/**/*.mdc']), 'rg:rules');
  assert.equal(classifyScanner('rg', ['--files', '--glob', '**/tsconfig.json']), 'rg:tsconfig');
  assert.equal(classifyScanner('rg', ['--files', '--hidden', '/w']), 'rg:files');
  assert.equal(classifyScanner('rg', ['needle', '/w']), 'rg:other');
  assert.equal(classifyScanner('bash', ['-c', 'true']), undefined);
});

test('the startup budget fails when exceeded or unmeasured', () => {
  const within = { scanners: { 'sandbox-preflight': 2, 'rg:rules': 2 }, listings: { total: 10 } };
  assert.equal(evaluateStartup(startupBudget, within).pass, true);
  const over = evaluateStartup(startupBudget, { scanners: { 'sandbox-preflight': 6, 'rg:rules': 6 }, listings: { total: 10 } });
  assert.deepEqual(over.failures.map(item => item.name), ['scanners.sandbox-preflight', 'scanners.rg:rules']);
  assert.deepEqual(evaluateStartup(startupBudget, undefined).failures.map(item => item.reason), ['unmeasured', 'unmeasured']);
});
