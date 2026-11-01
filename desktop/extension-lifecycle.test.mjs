import { test } from 'node:test';
import assert from 'node:assert/strict';
import { inflateRawSync, crc32 } from 'node:zlib';
import { zip, vsix, elfMachine, retargetElf, translationKey, phasePlans, fixtureCatalogue, id, protectedTarget } from './extension-lifecycle.mjs';

function unzip(buffer) {
  const end = buffer.lastIndexOf(Buffer.from([0x50, 0x4b, 0x05, 0x06]));
  const count = buffer.readUInt16LE(end + 10);
  let at = buffer.readUInt32LE(end + 16);
  const files = {};
  for (let index = 0; index < count; index++) {
    assert.equal(buffer.readUInt32LE(at), 0x02014b50);
    const size = buffer.readUInt32LE(at + 20), length = buffer.readUInt16LE(at + 28), offset = buffer.readUInt32LE(at + 42);
    const name = buffer.toString('utf8', at + 46, at + 46 + length);
    const local = offset + 30 + buffer.readUInt16LE(offset + 26) + buffer.readUInt16LE(offset + 28);
    const data = inflateRawSync(buffer.subarray(local, local + size));
    assert.equal(crc32(data), buffer.readUInt32LE(at + 16));
    files[name] = data;
    at += 46 + length;
  }
  return files;
}

test('fixture VSIX files are valid deterministic archives with the manifest under extension/', () => {
  const fixture = { manifest: { name: 'x', publisher: 'p', version: '1.0.0' }, files: { 'extension.js': 'exports.activate = () => 1;' } };
  const first = vsix(fixture);
  assert.deepEqual(first, vsix(fixture));
  const files = unzip(first);
  assert.deepEqual(Object.keys(files), ['[Content_Types].xml', 'extension.vsixmanifest', 'extension/package.json', 'extension/extension.js']);
  assert.equal(JSON.parse(files['extension/package.json']).name, 'x');
  assert.ok(!('extension/package.json' in unzip(vsix({ manifestText: null, files: {} }))));
  assert.deepEqual(unzip(zip([{ name: 'a', data: Buffer.alloc(0) }])).a, Buffer.alloc(0));
});

test('wrong-architecture addon keeps a real ELF and changes only the machine field', () => {
  const elf = Buffer.alloc(64); elf.writeUInt32BE(0x7f454c46, 0); elf[4] = 2; elf.writeUInt16LE(62, 18);
  const arm = retargetElf(elf);
  assert.deepEqual(elfMachine(elf), { elfClass: 64, machine: 62 });
  assert.deepEqual(elfMachine(arm), { elfClass: 64, machine: 183 });
  assert.equal(Buffer.compare(arm.subarray(20), elf.subarray(20)), 0);
  assert.throws(() => retargetElf(Buffer.from('not elf')), /ELF/);
});

test('language-pack key resolves to its flat NLS message index and fails when the runtime drifts', () => {
  const module = 'vs/workbench/contrib/outline/browser/outline.view.contribution';
  const keys = [['a', ['one', 'two']], [module, ['x', 'name', 'name']]];
  assert.deepEqual(translationKey(keys), { module, key: 'name', index: 3 });
  assert.throws(() => translationKey([['a', ['name']]]), /missing/);
});

test('lifecycle cases fail closed when observations are missing', async () => {
  const { evaluateLifecycle } = await import('./extension-lifecycle-cases.mjs');
  const cases = evaluateLifecycle({ phases: [], directory: '/x', platform: 'linux', arch: 'x64' });
  assert.equal(Object.keys(cases).length, 16);
  assert.ok(Object.values(cases).every(item => item.status === 'fail'));
});

test('phase plans install only local fixtures and cover every lifecycle transition across restarts', () => {
  const plans = phasePlans('/fixtures', '/extensions');
  assert.deepEqual(plans.map(plan => plan.phase), [1, 2, 3, 4, 5]);
  const steps = plans.flatMap(plan => plan.steps);
  for (const step of steps.filter(item => item.op === 'install'))
    assert.match(step.vsix.replaceAll('\\', '/'), /^\/fixtures\/[\w.-]+\.vsix$/);
  const catalogue = fixtureCatalogue({ napi: Buffer.alloc(1), wrongAbi: Buffer.alloc(1), wrongArch: Buffer.alloc(1), translation: { module: 'm', key: 'k' },
    protectedManifest: { name: 'cursor-mcp', publisher: 'anysphere', version: '1.0.0' }, protectedFiles: {} });
  for (const step of steps.filter(item => item.op === 'install')) assert.ok(step.vsix.slice(10, -5) in catalogue, step.vsix);
  assert.deepEqual(steps.filter(item => item.op === 'uninstall').map(item => item.id), [id('lifecycle'), id('language-pack-fr')]);
  for (const name of ['protected', 'protected-full'])
    assert.equal(catalogue[name].manifest.publisher + '.' + catalogue[name].manifest.name, protectedTarget);
  assert.deepEqual(plans.map(plan => plan.locale ?? null), [null, null, 'fr', 'en', null]);
  assert.deepEqual(steps.filter(item => item.op === 'pathGone').map(item => item.path.replaceAll('\\', '/')),
    ['/extensions/openvision-lifecycle.lifecycle-1.0.0', '/extensions/openvision-lifecycle.language-pack-fr-1.0.0']);
});
