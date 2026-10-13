import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { once, getEventListeners } from 'node:events';
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { customizeShellProcess } from './agent-process-customization.mjs';

for (const kind of ['exec', 'host']) {
  test(`${kind} shell patch preserves caller options and untouched platform/sandbox paths`, async () => {
    const source = await readFile(new URL(`../backups/agent-process/extensions/cursor-agent-${kind}/dist/main.js`, import.meta.url), 'utf8');
    const patched = customizeShellProcess(source);
    assert.equal(customizeShellProcess(patched), patched);
    assert.throws(() => customizeShellProcess('function unexpected() {}'), /missing or ambiguous/);
    const start = patched.indexOf('function ot(e, t = [], r = {}, n, s) {');
    let node = parseExpressionAt(patched, start, { ecmaVersion: 'latest' });
    while (node.type === 'CallExpression' || node.type === 'SequenceExpression') node = node.callee ?? node.expressions[0];
    const routes = [];
    const owned = { spawnWindowsShell: (...args) => { routes.push(['owned', args]); return 'owned-child'; } };
    const original = (...args) => { routes.push(['original', args]); return 'original-child'; };
    const normalize = env => ({ ...env, NORMALIZED: 'yes' });
    const load = (platform, arch = 'x64') => new Function('process', 'openvisionOwnedShell', 'Xe', 'b', 'v',
      `return (${patched.slice(node.start, node.end)});`)({ platform, arch, env: {} }, owned, original, normalize, normalize);
    const options = { cwd: 'fixture', env: { KEEP: 'chosen' }, stdio: ['pipe', 'pipe', 'pipe'] };
    assert.equal(load('win32')('shell', ['arg'], options, { type: 'insecure_none' }), 'owned-child');
    assert.deepEqual(routes[0][1], ['shell', ['arg'], { ...options, env: { KEEP: 'chosen', NORMALIZED: 'yes' } }, undefined]);
    assert.equal(load('linux')('shell', [], options, { type: 'insecure_none' }), 'original-child');
    assert.equal(load('win32', 'arm64')('shell', [], options, { type: 'insecure_none' }), 'original-child');
    assert.equal(load('win32')('shell', [], options, { type: 'workspace_readonly' }), 'original-child');
    assert.equal(load('win32')('shell', [], { ...options, stdio: [...options.stdio, 'pipe'] }, { type: 'insecure_none' }), 'original-child');
  });
}

const native = { skip: process.platform !== 'win32' || process.arch !== 'x64' ? 'Windows x64 native authority required' : false, timeout: 15000 };
const require = createRequire(import.meta.url);
const runtimePath = '../source/app/extensions/cursor-agent-exec/dist/openvision-owned-shell.cjs';
const options = { cwd: process.cwd(), env: { ...process.env, OPENVISION_TEST_VALUE: 'café 日本語' }, stdio: ['pipe', 'pipe', 'pipe'] };

test('native owned shell preserves stdin, Unicode, environment and normal completion', native, async () => {
  const { spawnWindowsShell } = require(runtimePath), controller = new AbortController();
  const child = spawnWindowsShell(process.execPath, ['-e',
    "process.stdin.setEncoding('utf8');let s='';process.stdin.on('data',x=>s+=x);process.stdin.on('end',()=>console.log(JSON.stringify({input:s,env:process.env.OPENVISION_TEST_VALUE,cwd:process.cwd()})));"], options, controller.signal);
  let output = ''; child.stdout.on('data', value => output += value);
  const closed = once(child, 'close');
  try {
    child.stdin.end('héllo 日本語');
    assert.equal((await closed)[0], 0);
    assert.deepEqual(JSON.parse(output), { input: 'héllo 日本語', env: 'café 日本語', cwd: process.cwd() });
    assert.equal(getEventListeners(controller.signal, 'abort').length, 0);
  } finally { assert.equal((await child.cleanup()).cleaned, true); }
});

test('native cancellation owns detached descendants and preserves an unrelated child', native, async () => {
  const { spawnWindowsShell } = require(runtimePath), controller = new AbortController();
  const unrelated = spawn(process.execPath, ['-e', 'setInterval(()=>{},1000)'], { windowsHide: true, stdio: 'ignore' });
  const unrelatedClosed = once(unrelated, 'close');
  const grandchild = "console.log('descendant-ready');setInterval(()=>{},1000)";
  const command = `require('node:child_process').spawn(process.execPath,['-e',${JSON.stringify(grandchild)}],{detached:true,stdio:'inherit',windowsHide:true});setInterval(()=>{},1000);`;
  const child = spawnWindowsShell(process.execPath, ['-e', command], options, controller.signal);
  const closed = once(child, 'close'), ready = Promise.withResolvers();
  let output = '';
  child.stdout.on('data', value => { output += value; if (output.includes('descendant-ready')) ready.resolve(); });
  try {
    await ready.promise; controller.abort(); await closed;
    assert.equal((await child.cleanup()).cleaned, true, 'Native close requires zero active job members');
    assert.equal(unrelated.exitCode, null); assert.equal(unrelated.signalCode, null);
    assert.equal(getEventListeners(controller.signal, 'abort').length, 0);
  } finally {
    await child.cleanup(); unrelated.kill(); await unrelatedClosed;
  }
});

test('native pre-cancellation and invalid pipe configurations fail before launch', native, () => {
  const { spawnWindowsShell } = require(runtimePath), controller = new AbortController();
  controller.abort(new Error('Already stopped'));
  assert.throws(() => spawnWindowsShell(process.execPath, [], options, controller.signal), /Already stopped/);
  assert.throws(() => spawnWindowsShell(process.execPath, [], { ...options, stdio: 'inherit' }), /Unsupported/);
});
