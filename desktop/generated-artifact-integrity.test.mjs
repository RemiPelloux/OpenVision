import assert from 'node:assert/strict';
import test from 'node:test';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { rejectCorruptText, validateGeneratedArtifacts } from './generated-artifact-integrity.mjs';
import { validateLocalModuleImports } from './generated-module-integrity.mjs';

async function fixture(t, contents) {
  const root = await mkdtemp(join(tmpdir(), 'openvision-artifacts-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  for (const [name, value] of Object.entries(contents)) {
    await mkdir(dirname(join(root, name)), { recursive: true });
    await writeFile(join(root, name), value);
  }
  return root;
}

test('streaming integrity rejects empty and NUL text, including a later chunk', async t => {
  const root = await fixture(t, { empty: '', zero: Buffer.alloc(4096), late: Buffer.concat([Buffer.alloc(65536, 32), Buffer.from([0])]), valid: 'export const a = "\\0";' });
  for (const name of ['empty', 'zero', 'late']) await assert.rejects(rejectCorruptText(join(root, name)), /empty|NUL/);
  await rejectCorruptText(join(root, 'valid'));
});

test('actual parser catches a named import missing from the local bridge without executing code', async t => {
  const root = await fixture(t, {
    'main.mjs': 'import { SafeShellApp, Menu } from "./bridge.mjs"; throw new Error("must not execute");',
    'bridge.mjs': 'export const SafeShellApp = {};',
  });
  await assert.rejects(validateLocalModuleImports([join(root, 'main.mjs')]), /imports Menu from .\/bridge.mjs/);
  await writeFile(join(root, 'main.mjs'), 'import { SafeShellApp } from "./bridge.mjs"; import { Menu } from "electron"; throw new Error("must not execute");');
  assert.equal((await validateLocalModuleImports([join(root, 'main.mjs')])).modules, 2);
});

test('local import audit traverses reexports, cycles, destructuring and default CommonJS interop', async t => {
  const root = await fixture(t, {
    'main.mjs': 'import { a, b, c, ns } from "./barrel.mjs"; import common from "./common.cjs";',
    'barrel.mjs': 'export * from "./values.mjs"; export { d as c } from "./values.mjs"; export * as ns from "./values.mjs";',
    'values.mjs': 'export * from "./barrel.mjs"; export const { a, b } = {}; export const d = 1;',
    'common.cjs': 'throw new Error("must not execute"); module.exports = {};',
  });
  assert.equal((await validateLocalModuleImports([join(root, 'main.mjs')])).modules, 4);
  await writeFile(join(root, 'values.mjs'), 'export * from "./barrel.mjs"; export const { a, b } = {};');
  await assert.rejects(validateLocalModuleImports([join(root, 'main.mjs')]), /imports c|imports d/);
});

test('missing dependencies and malformed local modules fail instead of being skipped', async t => {
  const root = await fixture(t, { 'main.mjs': 'import "./missing.mjs";' });
  await assert.rejects(validateLocalModuleImports([join(root, 'main.mjs')]), /ENOENT/);
  await writeFile(join(root, 'missing.mjs'), 'export const = ;');
  await assert.rejects(validateLocalModuleImports([join(root, 'main.mjs')]), /Cannot inspect generated module/);
});

async function runtimeFixture(t) {
  const entries = {
    'source/app/package.json': '{"type":"module","main":"./out/main.js"}',
    'source/app/out/main.js': 'export const start = 1;',
    'source/app/out/vs/workbench/workbench.desktop.main.js': 'const desktop = 1;',
    'source/app/out/vs/workbench/workbench.glass.main.js': 'const glass = 1;',
    'source/app/out/vs/workbench/api/node/extensionHostProcess.js': 'const host = 1;',
  };
  for (const name of ['cursor-agent-exec', 'cursor-agent-host', 'cursor-agent-worker',
    'cursor-always-local', 'cursor-browser-automation', 'cursor-computer-use',
    'cursor-local-agent-runtime', 'cursor-mcp', 'cursor-ndjson-ingest', 'cursor-retrieval']) {
    entries[`source/app/extensions/${name}/package.json`] = '{"main":"./dist/main"}';
    entries[`source/app/extensions/${name}/dist/main.js`] = 'const extension = 1;';
  }
  return fixture(t, entries);
}

test('build boundary validates generated chunks, extensionless entries and package manifests', async t => {
  const root = await runtimeFixture(t);
  assert.deepEqual(await validateGeneratedArtifacts(root), { scripts: 14, manifests: 11, localModules: 1 });
  const chunk = join(root, 'source/app/extensions/cursor-agent-host/dist/chunk.js');
  await writeFile(chunk, Buffer.alloc(1024));
  await assert.rejects(validateGeneratedArtifacts(root, { preflight: true }), /NUL/);
  await writeFile(chunk, 'function broken( {');
  await assert.rejects(validateGeneratedArtifacts(root), /chunk.js/);
  await writeFile(chunk, 'const fixed = 1;');
  await writeFile(join(root, 'source/app/extensions/cursor-mcp/package.json'), Buffer.alloc(100));
  await assert.rejects(validateGeneratedArtifacts(root, { preflight: true }), /Invalid generated package manifest:.*cursor-mcp/);
});

test('missing critical extension and escaped package entry cannot pass preflight', async t => {
  const root = await runtimeFixture(t), manifest = join(root, 'source/app/extensions/cursor-mcp/package.json');
  await writeFile(manifest, '{"main":"../cursor-agent-host/dist/main.js"}');
  await assert.rejects(validateGeneratedArtifacts(root, { preflight: true }), /escapes/);
  await rm(manifest);
  await assert.rejects(validateGeneratedArtifacts(root, { preflight: true }), /ENOENT/);
});
