import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdir, mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { addonInterface, checkInventory, goBuildInfo, parseDispositions, parseElf, parsePe, parseWasm, scanInstallation } from './native-inventory.mjs';

const uleb = value => { const out = []; do { let byte = value & 0x7f; value >>>= 7; if (value) byte |= 0x80; out.push(byte); } while (value); return out; };
const name = text => [...uleb(Buffer.byteLength(text)), ...Buffer.from(text)];
const section = (id, body) => [id, ...uleb(body.length), ...body];
// Minimal module: one imported function, one defined function, one export,
// producers, go:buildid and a Go modinfo blob in a data segment.
function wasmFixture() {
  const modinfo = Buffer.concat([Buffer.from('3077af0c9274080241e1c107e6d618e6', 'hex'),
    Buffer.from('path\texample.com/tool\nmod\texample.com/tool\t(devel)\t\nbuild\tGOOS=js\nbuild\tvcs.revision=abc123\n'),
    Buffer.from('f932433186182072008242104116d8f2', 'hex')]);
  return Buffer.from([0, 0x61, 0x73, 0x6d, 1, 0, 0, 0,
    ...section(1, [1, 0x60, 0, 0]),
    ...section(2, [1, ...name('env'), ...name('tick'), 0, 0]),
    ...section(3, [1, 0]),
    ...section(5, [1, 0, 1]),
    ...section(7, [2, ...name('run'), 0, 1, ...name('memory'), 2, 0]),
    ...section(10, [1, 2, 0, 0x0b]),
    ...section(11, [1, 0, 0x41, 0, 0x0b, ...uleb(modinfo.length), ...modinfo]),
    ...section(0, [...name('producers'), 1, ...name('language'), 1, ...name('Go'), ...name('go1.23.12')]),
    ...section(0, [...name('go:buildid'), ...Buffer.from('\xff Go build ID: "abc/def"\n \xff', 'latin1')])]);
}

// Minimal PE32+ DLL with one import (node.exe!napi_create_object) and one export.
function peFixture() {
  const bytes = Buffer.alloc(0x400);
  bytes.write('MZ', 0, 'latin1'); bytes.writeUInt32LE(64, 60);
  bytes.write('PE\0\0', 64, 'latin1');
  bytes.writeUInt16LE(0x8664, 68); bytes.writeUInt16LE(1, 70); bytes.writeUInt16LE(240, 84); bytes.writeUInt16LE(0x2022, 86);
  const optional = 88;
  bytes.writeUInt16LE(0x20b, optional);
  bytes.writeUInt32LE(0x10a0, optional + 112); bytes.writeUInt32LE(0x40, optional + 116); // export directory
  bytes.writeUInt32LE(0x1000, optional + 120); bytes.writeUInt32LE(0x28, optional + 124); // import directory
  const header = optional + 240;
  bytes.write('.rdata', header, 'latin1'); bytes.writeUInt32LE(0x200, header + 8); bytes.writeUInt32LE(0x1000, header + 12);
  bytes.writeUInt32LE(0x200, header + 16); bytes.writeUInt32LE(0x200, header + 20);
  const at = rva => rva - 0x1000 + 0x200;
  bytes.writeUInt32LE(0x1040, at(0x1000)); bytes.writeUInt32LE(0x1080, at(0x1000) + 12); bytes.writeUInt32LE(0x1040, at(0x1000) + 16);
  bytes.writeBigUInt64LE(0x1060n, at(0x1040));
  bytes.write('napi_create_object', at(0x1060) + 2, 'latin1');
  bytes.write('node.exe', at(0x1080), 'latin1');
  bytes.writeUInt32LE(1, at(0x10a0) + 24); bytes.writeUInt32LE(0x10d0, at(0x10a0) + 32);
  bytes.writeUInt32LE(0x10e0, at(0x10d0));
  bytes.write('napi_register_module_v1', at(0x10e0), 'latin1');
  return bytes;
}

test('WebAssembly sections, interface, producers and Go module information are decoded', () => {
  const bytes = wasmFixture();
  assert.equal(WebAssembly.validate(bytes), true);
  const wasm = parseWasm(bytes);
  assert.deepEqual(wasm.imports.map(item => `${item.module}.${item.name}:${item.kind}`), ['env.tick:func']);
  assert.deepEqual(wasm.exports.map(item => `${item.name}:${item.kind}`), ['run:func', 'memory:memory']);
  assert.equal(wasm.definedFunctions, 1);
  assert.deepEqual(wasm.producers, { language: [{ name: 'Go', version: 'go1.23.12' }] });
  assert.equal(wasm.goBuildId, 'abc/def');
  assert.equal(wasm.goBuildInfo.path, 'example.com/tool');
  assert.equal(wasm.goBuildInfo.settings['vcs.revision'], 'abc123');
  assert.equal(goBuildInfo(Buffer.from('no module information')), null);
  assert.throws(() => parseWasm(bytes.subarray(0, bytes.length - 3)), /overruns|Truncated/);
});

test('PE imports and exports identify a Node-API addon', () => {
  const pe = parsePe(peFixture());
  assert.equal(pe.type, 'dll');
  assert.deepEqual(pe.dlls, ['node.exe']);
  assert.deepEqual(pe.imports, ['napi_create_object']);
  assert.deepEqual(pe.exports, ['napi_register_module_v1']);
  assert.equal(addonInterface(pe).kind, 'node-api');
});

test('addon interface separates Node-API, the V8/NAN ABI and files without an entry point', () => {
  assert.deepEqual(addonInterface({ imports: ['_ZN2v87Isolate10GetCurrentEv'], exports: ['node_register_module_v146'] }),
    { kind: 'nan-v8-abi', napiImports: 0, napiRegister: false, v8Imports: 1, nodeModuleVersions: [146], declaresNapiVersion: false });
  assert.equal(addonInterface({ imports: ['napi_define_properties'], exports: [] }).kind, 'node-api');
  assert.equal(addonInterface({ imports: ['__cxa_finalize'], exports: [] }).kind, 'no-entry-point');
});

test('ELF dependencies, symbol versions and addon symbols match readelf for a compiled fixture', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'native-inventory-'));
  await writeFile(join(directory, 'addon.c'), [
    '#include <math.h>', '#include <stdio.h>', 'extern void *napi_create_object(void *, void *);',
    'void *napi_register_module_v1(void *env, void *exports) { napi_create_object(env, exports); return exports; }',
    'double scaled(double value) { printf("%f", value); return sqrt(value); }', ''].join('\n'));
  const output = join(directory, 'fixture.node');
  execFileSync('cc', ['-shared', '-fPIC', '-o', output, join(directory, 'addon.c'), '-lm', '-Wl,--build-id=sha1', '-Wl,-soname,fixture.node']);
  const elf = parseElf(await readFile(output));
  const dynamic = execFileSync('readelf', ['-dW', output], { encoding: 'utf8' });
  const needed = [...dynamic.matchAll(/\(NEEDED\)\s+Shared library: \[([^\]]+)\]/g)].map(match => match[1]);
  assert.deepEqual(elf.needed, needed);
  assert.equal(elf.soname, 'fixture.node');
  const versions = [...execFileSync('readelf', ['-VW', output], { encoding: 'utf8' }).matchAll(/Name: (GLIBC_[\d.]+)/g)].map(match => match[1]);
  const highest = versions.map(item => item.slice(6)).sort((a, b) => a.localeCompare(b, undefined, { numeric: true })).at(-1);
  assert.equal(elf.maxSymbolVersions.GLIBC, highest);
  assert.match(elf.buildId, /^[0-9a-f]{40}$/);
  assert.equal(elf.type, 'shared-object');
  assert.equal(addonInterface(elf).kind, 'node-api');
  assert.ok(elf.imports.includes('napi_create_object'));
});

test('scan and check: missing records, digest drift and incomplete dispositions fail', async () => {
  const base = await mkdtemp(join(tmpdir(), 'native-inventory-scan-'));
  await mkdir(join(base, 'lib/pkg'), { recursive: true });
  await writeFile(join(base, 'lib/pkg/package.json'), JSON.stringify({ name: 'pkg', version: '1.2.3', license: 'MIT', repository: { url: 'git+https://example.invalid/pkg.git' } }));
  await writeFile(join(base, 'lib/pkg/module.wasm'), wasmFixture());
  await writeFile(join(base, 'lib/pkg/addon.node'), peFixture());
  await writeFile(join(base, 'lib/pkg/readme.txt'), 'not native');
  const scan = await scanInstallation(base, { probeRuntimes: false });
  assert.deepEqual(scan.counts, { nativePaths: 1, distinctNatives: 1, wasmPaths: 1, distinctWasm: 1, elf: 0, pe: 1, unrecognized: 0, symlinks: 0 });
  assert.deepEqual(scan.wasm[0].package, { name: 'pkg', version: '1.2.3', license: 'MIT', repository: 'git+https://example.invalid/pkg.git', directory: 'lib/pkg' });
  assert.equal(scan.wasm[0].validation.parserMatchesEngine, true);
  const rows = [scan.natives[0], scan.wasm[0]].map(item => `| \`${item.sha256.slice(0, 16)}\` | ${item.path} | example | v1 | MIT | node-api | \`upstream-release\` |`);
  const dispositions = parseDispositions(['| Digest | Payload | Upstream | Ref | License | ABI | Class |', '| --- | --- | --- | --- | --- | --- | --- |', ...rows].join('\n'));
  assert.deepEqual(checkInventory(scan, scan, dispositions), []);
  const missing = { ...scan, wasm: [] };
  assert.match(checkInventory(missing, scan, dispositions).join('\n'), /WASM path without a committed record/);
  const drifted = { ...scan, natives: [{ ...scan.natives[0], sha256: '0'.repeat(64) }] };
  assert.match(checkInventory(drifted, scan, dispositions).join('\n'), /native digest drift/);
  assert.match(checkInventory(scan, scan, dispositions.slice(1)).join('\n'), /without a disposition/);
  const incomplete = [{ ...dispositions[0], license: '' }, { ...dispositions[1], class: 'keep' }];
  const failures = checkInventory(scan, scan, incomplete).join('\n');
  assert.match(failures, /empty license/);
  assert.match(failures, /unknown class keep/);
});
