// OV-702 extension lifecycle fixtures. Every package is a local VSIX written
// from source in this file; no marketplace or network source is involved.
import { crc32, deflateRawSync } from 'node:zlib';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

export const publisher = 'openvision-lifecycle';
export const id = name => `${publisher}.${name}`;
// Setting written while 1.0.0 is installed; it must survive uninstall.
export const keptSetting = Object.freeze({ key: 'ovLifecycle.greeting', value: 'kept-after-uninstall' });
export const protectedTarget = 'anysphere.cursor-mcp';
export const languagePack = Object.freeze({ name: 'language-pack-fr', locale: 'fr', label: 'OVTEST-Plan' });

// Minimal deterministic ZIP (deflate, no extra fields, fixed timestamp).
export function zip(entries) {
  const locals = [], centrals = [];
  let offset = 0;
  for (const { name, data } of entries) {
    const raw = Buffer.isBuffer(data) ? data : Buffer.from(data);
    const packed = deflateRawSync(raw), file = Buffer.from(name), sum = crc32(raw);
    const header = Buffer.alloc(30);
    header.writeUInt32LE(0x04034b50, 0); header.writeUInt16LE(20, 4); header.writeUInt16LE(0x0800, 6);
    header.writeUInt16LE(8, 8); header.writeUInt16LE(0, 10); header.writeUInt16LE(0x5521, 12);
    header.writeUInt32LE(sum, 14); header.writeUInt32LE(packed.length, 18); header.writeUInt32LE(raw.length, 22);
    header.writeUInt16LE(file.length, 26); header.writeUInt16LE(0, 28);
    const central = Buffer.alloc(46);
    central.writeUInt32LE(0x02014b50, 0); central.writeUInt16LE(0x031e, 4); central.writeUInt16LE(20, 6);
    central.writeUInt16LE(0x0800, 8); central.writeUInt16LE(8, 10); central.writeUInt16LE(0, 12); central.writeUInt16LE(0x5521, 14);
    central.writeUInt32LE(sum, 16); central.writeUInt32LE(packed.length, 20); central.writeUInt32LE(raw.length, 24);
    central.writeUInt16LE(file.length, 28); central.writeUInt32LE((0o100644 << 16) >>> 0, 38); central.writeUInt32LE(offset, 42);
    locals.push(header, file, packed); centrals.push(central, file);
    offset += header.length + file.length + packed.length;
  }
  const directory = Buffer.concat(centrals), end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0); end.writeUInt16LE(entries.length, 8); end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(directory.length, 12); end.writeUInt32LE(offset, 16);
  return Buffer.concat([...locals, directory, end]);
}

const contentTypes = '<?xml version="1.0" encoding="utf-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
  '<Default Extension=".json" ContentType="application/json"/><Default Extension=".js" ContentType="application/javascript"/>' +
  '<Default Extension=".node" ContentType="application/octet-stream"/><Default Extension=".vsixmanifest" ContentType="text/xml"/></Types>';

export function vsix({ manifest, manifestText, files = {} }) {
  const text = manifestText !== undefined ? manifestText : JSON.stringify(manifest, null, 2);
  const identity = manifest ? `<Identity Language="en-US" Id="${manifest.name}" Version="${manifest.version}" Publisher="${manifest.publisher}"/>` : '';
  const entries = [{ name: '[Content_Types].xml', data: contentTypes },
    { name: 'extension.vsixmanifest', data: `<?xml version="1.0" encoding="utf-8"?><PackageManifest Version="2.0.0" xmlns="http://schemas.microsoft.com/developer/vsx-schema/2011"><Metadata>${identity}<DisplayName>OpenVision lifecycle fixture</DisplayName></Metadata><Installation><InstallationTarget Id="Microsoft.VisualStudio.Code"/></Installation><Assets><Asset Type="Microsoft.VisualStudio.Code.Manifest" Path="extension/package.json" Addressable="true"/></Assets></PackageManifest>` }];
  if (text !== null) entries.push({ name: 'extension/package.json', data: text });
  for (const [name, data] of Object.entries(files)) entries.push({ name: `extension/${name}`, data });
  return zip(entries);
}

const base = (name, version, extra = {}) => ({ name, publisher, version, displayName: `OV lifecycle ${name}`,
  engines: { vscode: '^1.90.0' }, main: './extension.js', activationEvents: ['onStartupFinished'], ...extra });
const exportsCode = (name, version, body = '') => `"use strict";\n${body}\nexports.activate = () => ({ name: ${JSON.stringify(name)}, version: ${JSON.stringify(version)}, pid: process.pid });\n`;
const addonCode = (name, version) => `"use strict";\nexports.activate = () => ({ name: ${JSON.stringify(name)}, version: ${JSON.stringify(version)}, ` +
  'pid: process.pid, marker: require("./native/addon.node").marker });\n';

// Fixture catalogue. `expect` describes the required observed outcome.
export function fixtureCatalogue(addons) {
  const lifecycle = version => ({ manifest: base('lifecycle', version, { contributes: { configuration: { title: 'OV lifecycle',
    properties: { [keptSetting.key]: { type: 'string', default: 'default' } } } } }), files: { 'extension.js': exportsCode('lifecycle', version) } });
  const native = (name, addon) => ({ manifest: base(name, '1.0.0'), files: { 'extension.js': addonCode(name, '1.0.0'), 'native/addon.node': addon } });
  const translations = { version: '1.0.0', contents: { [addons.translation.module]: { [addons.translation.key]: languagePack.label } } };
  return {
    'lifecycle-1.0.0': lifecycle('1.0.0'),
    'lifecycle-2.0.0': lifecycle('2.0.0'),
    healthy: { manifest: base('healthy', '1.0.0'), files: { 'extension.js': exportsCode('healthy', '1.0.0') } },
    throws: { manifest: base('throws', '1.0.0'), files: { 'extension.js': '"use strict";\nexports.activate = () => { throw new Error("OV fixture activation failure"); };\n' } },
    'load-error': { manifest: base('load-error', '1.0.0'), files: { 'extension.js': '"use strict";\nrequire("./missing-dependency");\n' } },
    'native-napi': native('native-napi', addons.napi),
    'native-wrong-abi': native('native-wrong-abi', addons.wrongAbi),
    'native-wrong-arch': native('native-wrong-arch', addons.wrongArch),
    'engine-incompatible': { manifest: base('engine-incompatible', '1.0.0', { engines: { vscode: '^99.0.0' } }), files: { 'extension.js': exportsCode('engine-incompatible', '1.0.0') } },
    'malformed-json': { manifestText: '{ "name": "malformed-json", "publisher": ', files: { 'extension.js': '' } },
    'missing-manifest': { manifestText: null, files: { 'extension.js': '' } },
    'missing-identity': { manifest: { version: '1.0.0', engines: { vscode: '^1.90.0' } }, files: {} },
    [languagePack.name]: { manifest: { name: languagePack.name, publisher, version: '1.0.0', engines: { vscode: '^1.90.0' },
      categories: ['Language Packs'], contributes: { localizations: [{ languageId: languagePack.locale, languageName: 'French',
        localizedLanguageName: 'français (OV test)', translations: [{ id: 'vscode', path: './translations/main.i18n.json' }] }] } },
      files: { 'translations/main.i18n.json': JSON.stringify(translations) } },
    // Same identity as a protected bundled extension, with an extra entry point.
    protected: { manifest: { name: protectedTarget.split('.')[1], publisher: protectedTarget.split('.')[0], version: '99.0.0',
      engines: { vscode: '^1.90.0' }, main: './replacement.js', activationEvents: ['onStartupFinished'] },
      files: { 'replacement.js': '"use strict";\nexports.activate = () => ({ replaced: true });\n' } },
    // The bundled files byte for byte plus the extra entry point; hashes alone cannot reject it.
    'protected-full': { manifest: { ...addons.protectedManifest, version: '99.0.1', main: './replacement.js', activationEvents: ['onStartupFinished'] },
      files: { ...addons.protectedFiles, 'replacement.js': '"use strict";\nexports.activate = () => ({ replaced: true });\n' } },
  };
}

// Native addons are compiled locally from source with the host compiler.
const napiSource = `#include <node_api.h>
NAPI_MODULE_INIT() {
  napi_value value;
  napi_create_string_utf8(env, "openvision-napi-ok", NAPI_AUTO_LENGTH, &value);
  napi_set_named_property(env, exports, "marker", value);
  return exports;
}
`;
const abiSource = `#include <node.h>
static void Init(v8::Local<v8::Object> exports) {}
NODE_MODULE(openvision_wrong_abi, Init)
`;

export function elfMachine(buffer) {
  if (buffer.length < 20 || buffer.readUInt32BE(0) !== 0x7f454c46) return null;
  return { elfClass: buffer[4] === 2 ? 64 : 32, machine: buffer.readUInt16LE(18) };
}

// Mark a valid x64 shared object as AArch64 (e_machine 183); the bytes stay a real ELF.
export function retargetElf(buffer, machine = 183) {
  if (!elfMachine(buffer)) throw new Error('Expected an ELF shared object');
  const copy = Buffer.from(buffer); copy.writeUInt16LE(machine, 18); return copy;
}

export async function buildAddons(directory, headers, run = promisify(execFile)) {
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, 'napi.c'), napiSource);
  await writeFile(join(directory, 'abi.cc'), abiSource);
  await run('cc', ['-shared', '-fPIC', '-O2', `-I${headers}`, '-o', join(directory, 'napi.node'), join(directory, 'napi.c')]);
  await run('c++', ['-std=c++20', '-shared', '-fPIC', '-O1', `-I${headers}`, '-o', join(directory, 'abi.node'), join(directory, 'abi.cc')]);
  const napi = await readFile(join(directory, 'napi.node'));
  const abiHeader = await readFile(join(headers, 'node_version.h'), 'utf8');
  return { napi, wrongAbi: await readFile(join(directory, 'abi.node')), wrongArch: retargetElf(napi),
    headerModuleVersion: Number(abiHeader.match(/#define NODE_MODULE_VERSION (\d+)/)?.[1]) };
}

// A language-pack translation needs a real NLS module/key from this runtime.
// Default: the Outline view title, which the workbench renders at startup.
export function translationKey(keys, module = 'vs/workbench/contrib/outline/browser/outline.view.contribution', key = 'name') {
  const entry = keys.find(([name]) => name === module);
  if (!entry || !entry[1].includes(key)) throw new Error(`NLS key ${module}#${key} is missing from this runtime`);
  return { module, key, index: keys.slice(0, keys.indexOf(entry)).reduce((sum, [, names]) => sum + names.length, 0) + entry[1].indexOf(key) };
}

const failing = ['throws', 'load-error', 'native-wrong-abi', 'native-wrong-arch'];
const activated = ['healthy', 'native-napi'];
const rejected = ['engine-incompatible', 'malformed-json', 'missing-manifest', 'missing-identity'];
export const fixtureGroups = Object.freeze({ failing, activated, rejected });

// One plan per launch. Launches run strictly one after another on one profile.
export function phasePlans(vsix, extensions) {
  const file = name => join(vsix, `${name}.vsix`);
  const gone = name => ({ op: 'pathGone', path: join(extensions, `${id(name)}-1.0.0`), label: `files removed ${name}` });
  const install = (name, version = '1.0.0', label = `install ${name}`) =>
    ({ op: 'install', vsix: file(name), id: id(name.replace(/-\d+\.\d+\.\d+$/, '')), version, label });
  const activate = name => ({ op: 'activate', id: id(name), label: `activate ${name}` });
  return [
    { phase: 1, steps: [{ op: 'environment' }, { op: 'present', id: id('lifecycle'), label: 'fresh profile' },
      install('lifecycle-1.0.0'), activate('lifecycle'), { op: 'setSetting', ...keptSetting },
      ...[...failing, ...activated].map(name => install(name)), ...failing.map(activate), ...activated.map(activate),
      ...rejected.map(name => ({ ...install(name), wait: false })),
      { op: 'install', vsix: file('protected'), id: protectedTarget, version: '99.0.0', wait: false, label: 'install protected replacement' },
      { ...install('lifecycle-2.0.0', '2.0.0'), wait: false }, { op: 'activate', id: id('lifecycle'), label: 'running version after update' },
      { op: 'environment', label: 'host after failures' }] },
    { phase: 2, steps: [{ op: 'environment' }, activate('lifecycle'), { op: 'readSetting', key: keptSetting.key },
      ...[...failing, ...activated].map(activate), { op: 'present', id: protectedTarget, label: 'protected after restart' },
      { op: 'activate', id: protectedTarget, label: 'activate protected' },
      { op: 'install', vsix: file('protected-full'), id: protectedTarget, version: '99.0.1', wait: false, label: 'install protected full copy' },
      install('lifecycle-1.0.0', '1.0.0', 'downgrade lifecycle'), install(languagePack.name)] },
    // Before launch 3 the verifier registers a protected copy directly, as an
    // older build or an imported profile could have left it.
    { phase: 3, locale: languagePack.locale, seedProtected: '99.0.2', steps: [{ op: 'environment' }, activate('lifecycle'),
      { op: 'present', id: protectedTarget, label: 'protected after full copy' }, { op: 'activate', id: protectedTarget, label: 'activate protected full copy' },
      { op: 'uninstall', id: id('lifecycle') }, { op: 'readSetting', key: keptSetting.key }] },
    { phase: 4, locale: 'en', steps: [{ op: 'environment' }, gone('lifecycle'), { op: 'present', id: id('lifecycle'), label: 'after uninstall restart' },
      { op: 'readSetting', key: keptSetting.key }, install('lifecycle-1.0.0', '1.0.0', 'reinstall lifecycle'), activate('lifecycle'),
      { op: 'uninstall', id: id(languagePack.name) }] },
    { phase: 5, steps: [{ op: 'environment' }, gone(languagePack.name), activate('lifecycle'), activate('healthy'), { op: 'present', id: id(languagePack.name) }] },
  ];
}
