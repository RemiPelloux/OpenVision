import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as fs from 'node:fs';
import { mkdtemp, writeFile, rm, readFile, mkdir, readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { installNativeAddonDiagnostics, nativeAddonDiagnostics, installNativeAddonGuard, marker } from './native-addon-diagnostics.mjs';
import { retargetElf } from './extension-lifecycle.mjs';

const elf = machine => { const bytes = Buffer.alloc(64); bytes.writeUInt32BE(0x7f454c46, 0); bytes[4] = 2; bytes[5] = 1; bytes.writeUInt16LE(machine, 18); return bytes; };
function host(error) {
  const calls = [];
  const proc = { platform: 'linux', arch: 'x64', dlopen(module, file) { calls.push(file); if (error) throw error(file); module.exports = { ok: true }; } };
  return { proc, calls };
}
const dlopenError = file => Object.assign(new Error(`${file}: cannot open shared object file: No such file or directory`), { code: 'ERR_DLOPEN_FAILED' });

test('wrong-architecture addon errors name the addon architecture and host platform', async t => {
  const directory = await mkdtemp(join(tmpdir(), 'openvision-native-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  const arm = join(directory, 'arm.node'), x64 = join(directory, 'x64.node'), text = join(directory, 'text.node');
  await writeFile(arm, retargetElf(elf(62))); await writeFile(x64, elf(62)); await writeFile(text, 'not a library');
  const { proc } = host(dlopenError);
  assert.equal(installNativeAddonDiagnostics(proc, fs), true);
  assert.equal(installNativeAddonDiagnostics(proc, fs), false, 'second install is a no-op');
  assert.throws(() => proc.dlopen({}, arm), error => /built for arm64, but this extension host runs linux-x64/.test(error.message) &&
    error.message.includes(arm) && /No such file or directory/.test(error.message) && error.code === 'ERR_DLOPEN_FAILED');
  assert.throws(() => proc.dlopen({}, text), /not a native library for linux-x64/);
  // Same-architecture failures (missing symbols, ABI) keep the runtime's original message.
  assert.throws(() => proc.dlopen({}, x64), error => !error.openvisionNativeDiagnostics && !/built for/.test(error.message));
  assert.throws(() => proc.dlopen({}, join(directory, 'missing.node')), error => !error.openvisionNativeDiagnostics);
});

test('successful loads and unrelated errors pass through unchanged', () => {
  const ok = host(null);
  installNativeAddonDiagnostics(ok.proc, fs);
  const module = {};
  ok.proc.dlopen(module, '/x.node');
  assert.deepEqual(module.exports, { ok: true });
  const other = host(() => new TypeError('boom'));
  installNativeAddonDiagnostics(other.proc, fs);
  assert.throws(() => other.proc.dlopen({}, '/x.node'), error => error.message === 'boom');
});

test('extension host patch is idempotent, guarded and backed up once', async t => {
  const source = 'class X { async _doLoadModule(e, n) { return 1; } }\n';
  const once = nativeAddonDiagnostics(source);
  assert.ok(once.startsWith(marker) && once.endsWith(source));
  assert.equal(nativeAddonDiagnostics(once), once);
  assert.throws(() => nativeAddonDiagnostics(once + marker), /more than once/);
  assert.throws(() => nativeAddonDiagnostics('class X {}'), /shape changed/);
  const root = await mkdtemp(join(tmpdir(), 'openvision-native-build-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const path = join(root, 'source/app/out/vs/workbench/api/node/extensionHostProcess.js');
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, source);
  assert.equal(await installNativeAddonGuard(root), true);
  assert.equal(await installNativeAddonGuard(root), false);
  assert.equal(await readFile(path, 'utf8'), once);
  const backups = await readdir(join(root, 'backups/native-addon-diagnostics'));
  assert.equal(backups.length, 1);
  assert.equal(await readFile(join(root, 'backups/native-addon-diagnostics', backups[0]), 'utf8'), source);
  // The serialized guard parses as a script.
  new Function(once.slice(0, once.length - source.length));
});
