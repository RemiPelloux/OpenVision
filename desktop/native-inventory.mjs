// OV-801 Linux x64 native and WebAssembly inventory of the pinned AppImage.
// Static, read-only: every regular file whose bytes start with an ELF, PE or
// WebAssembly signature (or that is named *.node, *.so* or *.wasm) gets a record
// with its digest, format, dynamic dependencies, symbol versions, Node addon
// interface, nearest shipped package and, for WebAssembly, its interface and
// producer sections. The only execution is the optional host-runtime probe
// (ELECTRON_RUN_AS_NODE=1 -p process.versions) of the two pinned Node runtimes.
//
//   node desktop/native-inventory.mjs --write    regenerate the committed JSON
//   node desktop/native-inventory.mjs            verify (npm run verify:native-inventory)
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { lstat, open, readdir, readFile, readlink, writeFile } from 'node:fs/promises';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseNativeHeader } from './native-identity.mjs';
import { linuxInputs } from './linux-input.mjs';

export const inventoryPath = 'docs/recovery/native-inventory-linux-x64.json';
export const dispositionsPath = 'docs/recovery/native-dispositions-linux.md';
export const dispositionClasses = ['upstream-release', 'rebuild-from-source', 'fork-delta', 'proprietary-replace', 'remove-unused', 'dead-on-platform'];

const signature = bytes => {
  if (bytes.length >= 4 && bytes.readUInt32BE(0) === 0x7f454c46) return 'elf';
  if (bytes.length >= 4 && bytes.readUInt32BE(0) === 0x0061736d) return 'wasm';
  if (bytes.length >= 2 && bytes.toString('latin1', 0, 2) === 'MZ') return 'pe';
  return null;
};
const named = path => /\.(node|wasm)$|\.so(\.\d+)*$/.test(path);
const cString = (bytes, offset) => {
  if (offset < 0 || offset >= bytes.length) return '';
  const end = bytes.indexOf(0, offset);
  return bytes.toString('latin1', offset, end < 0 ? bytes.length : end);
};
const compareVersions = (a, b) => {
  const left = a.split('.').map(Number), right = b.split('.').map(Number);
  for (let index = 0; index < Math.max(left.length, right.length); index++)
    if ((left[index] ?? 0) !== (right[index] ?? 0)) return (left[index] ?? 0) - (right[index] ?? 0);
  return 0;
};

// ELF64 little-endian (the only class shipped for Linux x64). Section-header based;
// stripped section tables are reported rather than guessed.
export function parseElf(bytes) {
  if (bytes[4] !== 2 || bytes[5] !== 1) throw new Error('Only ELF64 little-endian images are supported.');
  const u16 = offset => bytes.readUInt16LE(offset), u32 = offset => bytes.readUInt32LE(offset);
  const u64 = offset => Number(bytes.readBigUInt64LE(offset));
  const type = { 1: 'relocatable', 2: 'executable', 3: 'shared-object', 4: 'core' }[u16(16)] ?? `type-${u16(16)}`;
  const phoff = u64(32), shoff = u64(40), phentsize = u16(54), phnum = u16(56), shentsize = u16(58), shnum = u16(60);
  let interp = null;
  for (let index = 0; index < phnum; index++) {
    const base = phoff + index * phentsize;
    if (u32(base) === 3) interp = cString(bytes, u64(base + 8));
  }
  if (!shoff || !shnum || shoff + shnum * shentsize > bytes.length) throw new Error('ELF section header table is missing or truncated.');
  const sections = Array.from({ length: shnum }, (_, index) => {
    const base = shoff + index * shentsize;
    return { name: u32(base), type: u32(base + 4), offset: u64(base + 24), size: u64(base + 32), link: u32(base + 40), entsize: u64(base + 56) };
  });
  const names = sections[u16(62)];
  for (const section of sections) section.name = names ? cString(bytes, names.offset + section.name) : '';
  const strings = section => offset => cString(bytes, sections[section.link].offset + offset);
  const needed = [], rpath = [], runpath = [];
  let soname = null;
  for (const section of sections.filter(item => item.type === 6)) {
    const text = strings(section);
    for (let base = section.offset; base + 16 <= section.offset + section.size; base += 16) {
      const tag = u64(base), value = u64(base + 8);
      if (tag === 0) break;
      if (tag === 1) needed.push(text(value));
      if (tag === 14) soname = text(value);
      if (tag === 15) rpath.push(text(value));
      if (tag === 29) runpath.push(text(value));
    }
  }
  const imports = [], exports = [];
  for (const section of sections.filter(item => item.type === 11)) {
    const text = strings(section);
    for (let base = section.offset + 24; base + 24 <= section.offset + section.size; base += 24) {
      const name = text(u32(base)), binding = bytes[base + 4] >> 4, shndx = u16(base + 6);
      if (!name || ![1, 2, 10].includes(binding)) continue;
      (shndx === 0 ? imports : exports).push(name);
    }
  }
  // SHT_GNU_verneed: required symbol versions per needed library.
  const requiredVersions = {};
  for (const section of sections.filter(item => item.type === 0x6ffffffe)) {
    const text = strings(section);
    for (let entry = section.offset, guard = 0; guard < 4096; guard++) {
      const count = u16(entry + 2), file = text(u32(entry + 4));
      for (let aux = entry + u32(entry + 8), index = 0; index < count; index++) {
        (requiredVersions[file] ??= []).push(text(u32(aux + 8)));
        const next = u32(aux + 12); if (!next) break; aux += next;
      }
      const next = u32(entry + 12); if (!next) break; entry += next;
    }
  }
  const families = {};
  for (const version of Object.values(requiredVersions).flat()) {
    const match = /^(GLIBC|GLIBCXX|CXXABI|GCC)_(\d+(?:\.\d+)*)$/.exec(version);
    if (match && (!families[match[1]] || compareVersions(match[2], families[match[1]]) > 0)) families[match[1]] = match[2];
  }
  let buildId = null;
  for (const section of sections.filter(item => item.type === 7)) {
    for (let base = section.offset; base + 12 <= section.offset + section.size;) {
      const nameSize = u32(base), descSize = u32(base + 4), noteType = u32(base + 8);
      const descStart = base + 12 + Math.ceil(nameSize / 4) * 4;
      if (noteType === 3 && cString(bytes, base + 12) === 'GNU') buildId = bytes.toString('hex', descStart, descStart + descSize);
      base = descStart + Math.ceil(descSize / 4) * 4;
    }
  }
  return { type, interp, soname, needed, rpath, runpath, buildId, staticallyLinked: !interp && !needed.length && type === 'executable',
    requiredVersions: Object.fromEntries(Object.entries(requiredVersions).map(([file, list]) => [file, [...new Set(list)].sort(compareVersionNames)])),
    maxSymbolVersions: families, imports, exports, sectionNames: sections.map(item => item.name).filter(Boolean) };
}
function compareVersionNames(a, b) {
  const [left, right] = [a, b].map(name => /^([A-Z]+)_(\d+(?:\.\d+)*)$/.exec(name));
  if (left && right && left[1] === right[1]) return compareVersions(left[2], right[2]);
  return a < b ? -1 : a > b ? 1 : 0;
}

// PE32+ import, delay-import and export names (Windows addons shipped in the Linux image).
export function parsePe(bytes) {
  const pe = bytes.readUInt32LE(60), optional = pe + 24, magic = bytes.readUInt16LE(optional);
  if (magic !== 0x20b) throw new Error('Only PE32+ images are supported.');
  const sectionCount = bytes.readUInt16LE(pe + 6), optionalSize = bytes.readUInt16LE(pe + 20);
  const characteristics = bytes.readUInt16LE(pe + 22);
  const sections = Array.from({ length: sectionCount }, (_, index) => {
    const base = optional + optionalSize + index * 40;
    return { name: bytes.toString('latin1', base, base + 8).replace(/\0+$/, ''), virtualAddress: bytes.readUInt32LE(base + 12),
      virtualSize: bytes.readUInt32LE(base + 8), rawSize: bytes.readUInt32LE(base + 16), rawOffset: bytes.readUInt32LE(base + 20) };
  });
  const offset = rva => {
    const section = sections.find(item => rva >= item.virtualAddress && rva < item.virtualAddress + Math.max(item.virtualSize, item.rawSize));
    return section ? rva - section.virtualAddress + section.rawOffset : -1;
  };
  const directory = index => ({ rva: bytes.readUInt32LE(optional + 112 + index * 8), size: bytes.readUInt32LE(optional + 116 + index * 8) });
  const thunks = (rva, dll, into) => {
    for (let base = offset(rva); base >= 0 && base + 8 <= bytes.length; base += 8) {
      const value = bytes.readBigUInt64LE(base);
      if (value === 0n) break;
      into.push(value & (1n << 63n) ? `${dll}#${value & 0xffffn}` : cString(bytes, offset(Number(value & 0x7fffffffn)) + 2));
    }
  };
  const dlls = [], delayDlls = [], imports = [], exports = [];
  const imported = directory(1);
  for (let base = offset(imported.rva); imported.rva && base >= 0 && base + 20 <= bytes.length; base += 20) {
    const lookup = bytes.readUInt32LE(base), name = bytes.readUInt32LE(base + 12), first = bytes.readUInt32LE(base + 16);
    if (!name) break;
    const dll = cString(bytes, offset(name)); dlls.push(dll); thunks(lookup || first, dll, imports);
  }
  const delayed = directory(13);
  for (let base = offset(delayed.rva); delayed.rva && base >= 0 && base + 32 <= bytes.length; base += 32) {
    const name = bytes.readUInt32LE(base + 4), table = bytes.readUInt32LE(base + 16);
    if (!name) break;
    const dll = cString(bytes, offset(name)); delayDlls.push(dll); thunks(table, dll, imports);
  }
  const exported = directory(0), exportBase = offset(exported.rva);
  if (exported.rva && exportBase >= 0) {
    const count = bytes.readUInt32LE(exportBase + 24), names = offset(bytes.readUInt32LE(exportBase + 32));
    for (let index = 0; index < count && names >= 0; index++) exports.push(cString(bytes, offset(bytes.readUInt32LE(names + index * 4))));
  }
  return { type: characteristics & 0x2000 ? 'dll' : 'executable', dlls, delayDlls, imports, exports, sectionNames: sections.map(item => item.name) };
}

// Node addon interface from linkage alone: Node-API (napi_* / node_api_* imports or
// napi_register_module_v1) versus the V8/NAN ABI (node_register_module_v<ABI>).
export function addonInterface({ imports, exports }) {
  const napiImports = imports.filter(name => /^(napi|node_api)_/.test(name)).length;
  const legacy = exports.map(name => /^node_register_module_v(\d+)$/.exec(name)?.[1]).filter(Boolean).map(Number);
  const napiRegister = exports.includes('napi_register_module_v1');
  const v8Imports = imports.filter(name => /^_ZN2v8|^_ZNK2v8|^\?.*@v8@@/.test(name)).length;
  const kind = legacy.length ? 'nan-v8-abi' : napiRegister || napiImports ? 'node-api'
    : imports.includes('node_module_register') ? 'legacy-node-module' : exports.length ? 'not-detected' : 'no-entry-point';
  return { kind, napiImports, napiRegister, v8Imports, nodeModuleVersions: legacy,
    declaresNapiVersion: exports.includes('node_api_module_get_api_version_v1') };
}

const leb = (bytes, state) => {
  let result = 0n, shift = 0n;
  for (;;) {
    if (state.offset >= bytes.length) throw new Error('Truncated LEB128 value.');
    const byte = bytes[state.offset++];
    result |= BigInt(byte & 0x7f) << shift; shift += 7n;
    if (!(byte & 0x80)) return Number(result);
  }
};
const wasmName = (bytes, state) => { const length = leb(bytes, state); const text = bytes.toString('utf8', state.offset, state.offset + length); state.offset += length; return text; };
const wasmKinds = ['func', 'table', 'memory', 'global', 'tag'];
const sectionNames = ['custom', 'type', 'import', 'function', 'table', 'memory', 'global', 'export', 'start', 'element', 'code', 'data', 'datacount', 'tag'];

// Section-level WebAssembly reader: section headers, imports, exports, counts and
// the custom producers/go:buildid/target_features sections.
export function parseWasm(bytes) {
  if (bytes.length < 8 || bytes.readUInt32BE(0) !== 0x0061736d) throw new Error('Not a WebAssembly binary.');
  const version = bytes.readUInt32LE(4);
  const sections = [], imports = [], exports = [], custom = {};
  let definedFunctions = 0, codeBodies = 0, dataSegments = 0, start = null, producers = null, goBuildId = null, targetFeatures = null;
  for (const state = { offset: 8 }; state.offset < bytes.length;) {
    const id = bytes[state.offset++], size = leb(bytes, state), begin = state.offset, end = begin + size;
    if (end > bytes.length) throw new Error(`Section ${id} overruns the module.`);
    const section = { id, kind: sectionNames[id] ?? `unknown-${id}`, offset: begin, size };
    const body = { offset: begin };
    if (id === 0) {
      section.name = wasmName(bytes, body);
      custom[section.name] = (custom[section.name] ?? 0) + 1;
      if (section.name === 'producers') {
        producers = {};
        for (let fields = leb(bytes, body); fields-- > 0;) {
          const field = wasmName(bytes, body);
          producers[field] = Array.from({ length: leb(bytes, body) }, () => ({ name: wasmName(bytes, body), version: wasmName(bytes, body) }));
        }
      } else if (section.name === 'go:buildid') {
        const text = bytes.toString('latin1', body.offset, end);
        goBuildId = /Go build ID: "([^"]+)"/.exec(text)?.[1] ?? text;
      }
      else if (section.name === 'target_features') {
        targetFeatures = Array.from({ length: leb(bytes, body) }, () => `${String.fromCharCode(bytes[body.offset++])}${wasmName(bytes, body)}`);
      }
    } else if (id === 2) {
      for (let count = leb(bytes, body); count-- > 0;) {
        const entry = { module: wasmName(bytes, body), name: wasmName(bytes, body), kind: wasmKinds[bytes[body.offset]] ?? `kind-${bytes[body.offset]}` };
        const kind = bytes[body.offset++];
        if (kind === 0) entry.type = leb(bytes, body);
        else if (kind === 1 || kind === 2) {
          if (kind === 1) entry.element = bytes[body.offset++];
          const flags = leb(bytes, body); entry.min = leb(bytes, body);
          if (flags & 1) entry.max = leb(bytes, body);
          if (flags & 2) entry.shared = true;
          if (flags & 4) entry.memory64 = true;
        } else if (kind === 3) { entry.valueType = bytes[body.offset++]; entry.mutable = bytes[body.offset++] === 1; }
        else if (kind === 4) { body.offset++; entry.type = leb(bytes, body); }
        else throw new Error(`Unknown import kind ${kind}.`);
        imports.push(entry);
      }
    } else if (id === 3) definedFunctions = leb(bytes, body);
    else if (id === 7) {
      for (let count = leb(bytes, body); count-- > 0;) {
        const name = wasmName(bytes, body), kind = bytes[body.offset++];
        exports.push({ name, kind: wasmKinds[kind] ?? `kind-${kind}`, index: leb(bytes, body) });
      }
    } else if (id === 8) start = leb(bytes, body);
    else if (id === 10) codeBodies = leb(bytes, body);
    else if (id === 11) dataSegments = leb(bytes, body);
    sections.push(section);
    state.offset = end;
  }
  if (definedFunctions !== codeBodies) throw new Error(`Function (${definedFunctions}) and code (${codeBodies}) section counts differ.`);
  return { version, sections: sections.map(({ kind, name, size }) => name ? { kind, name, size } : { kind, size }),
    imports, exports, definedFunctions, dataSegments, start, producers, goBuildId, targetFeatures, customSections: custom,
    goBuildInfo: goBuildInfo(bytes) };
}

// Go module information: the "\xff Go buildinf:" header of native images (Go 1.18+
// inline strings, flag bit 2), or, in js/wasm builds, the runtime.modinfo string
// framed by Go's fixed 16-byte sentinels. The Go version of a wasm build comes
// from its producers section.
const modinfoStart = Buffer.from('3077af0c9274080241e1c107e6d618e6', 'hex');
const modinfoEnd = Buffer.from('f932433186182072008242104116d8f2', 'hex');
export function goBuildInfo(bytes) {
  let goVersion = null, modules = null;
  const header = bytes.indexOf(Buffer.from('\xff Go buildinf:', 'latin1'));
  if (header >= 0 && bytes[header + 15] & 2) {
    const state = { offset: header + 32 };
    goVersion = wasmName(bytes, state);
    modules = wasmName(bytes, state).slice(16, -16);
  } else {
    const start = bytes.indexOf(modinfoStart);
    const end = start < 0 ? -1 : bytes.indexOf(modinfoEnd, start);
    if (end < 0) return null;
    modules = bytes.toString('utf8', start + 16, end);
  }
  const lines = modules.split('\n').filter(Boolean);
  const pick = prefix => lines.filter(line => line.startsWith(prefix)).map(line => line.slice(prefix.length).split('\t'));
  const main = pick('mod\t')[0];
  return { goVersion, path: pick('path\t')[0]?.[0] ?? null,
    main: main ? { path: main[0], version: main[1], sum: main[2] || null } : null,
    deps: pick('dep\t').map(([path, version, sum]) => ({ path, version, sum: sum || null })),
    settings: Object.fromEntries(pick('build\t').map(([pair]) => { const index = pair.indexOf('='); return [pair.slice(0, index), pair.slice(index + 1)]; })) };
}

async function nearestPackage(file, root, cache) {
  for (let directory = dirname(file); directory.startsWith(root); directory = dirname(directory)) {
    if (!cache.has(directory)) {
      const text = await readFile(join(directory, 'package.json'), 'utf8').catch(() => null);
      let manifest = null;
      try { manifest = text && JSON.parse(text); } catch { manifest = null; }
      cache.set(directory, manifest?.name ? manifest : null);
    }
    const manifest = cache.get(directory);
    if (manifest) {
      const repository = typeof manifest.repository === 'string' ? manifest.repository : manifest.repository?.url ?? null;
      const license = typeof manifest.license === 'string' ? manifest.license : manifest.license?.type
        ?? manifest.licenses?.map?.(item => item.type ?? item).join(' OR ') ?? null;
      return { name: manifest.name, version: manifest.version ?? null, license, repository,
        directory: relative(root, directory).split(sep).join('/') };
    }
    if (directory === root) break;
  }
  return null;
}

async function walk(root, directory = root, files = []) {
  for (const entry of (await readdir(directory, { withFileTypes: true })).sort((a, b) => a.name < b.name ? -1 : 1)) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await walk(root, path, files);
    else files.push(path);
  }
  return files;
}

const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
// Small bounded lists in the committed record; full symbol lists stay out of Git.
const nativeRecord = (bytes, path) => {
  const kind = signature(bytes);
  const format = parseNativeHeader(bytes.subarray(0, 65536));
  const record = { path, kind, bytes: bytes.length, sha256: sha256(bytes), format };
  if (kind === 'elf') {
    const elf = parseElf(bytes);
    Object.assign(record, { elfType: elf.type, interp: elf.interp, soname: elf.soname, needed: elf.needed, rpath: elf.rpath, runpath: elf.runpath,
      buildId: elf.buildId, staticallyLinked: elf.staticallyLinked, maxSymbolVersions: elf.maxSymbolVersions,
      glibcMax: elf.maxSymbolVersions.GLIBC ?? null, requiredVersions: elf.requiredVersions,
      dynamicImports: elf.imports.length, dynamicExports: elf.exports.length,
      goBuildId: elf.sectionNames.includes('.note.go.buildid') || null,
      rustSections: elf.sectionNames.filter(name => /rustc|\.dep-v0/.test(name)) });
    record.addon = path.endsWith('.node') ? addonInterface(elf) : null;
  } else {
    const pe = parsePe(bytes);
    Object.assign(record, { peType: pe.type, needed: pe.dlls, delayNeeded: pe.delayDlls, dynamicImports: pe.imports.length,
      dynamicExports: pe.exports.length, glibcMax: null });
    record.addon = path.endsWith('.node') ? addonInterface(pe) : null;
  }
  return record;
};

const wasmRecord = (bytes, path) => {
  const wasm = parseWasm(bytes);
  const valid = WebAssembly.validate(bytes);
  let engine = null;
  if (valid) {
    const module = new WebAssembly.Module(bytes);
    engine = { imports: WebAssembly.Module.imports(module).length, exports: WebAssembly.Module.exports(module).length };
  }
  return { path, kind: 'wasm', bytes: bytes.length, sha256: sha256(bytes), wasmVersion: wasm.version,
    validation: { engine: `V8 ${process.versions.v8} WebAssembly.validate`, valid,
      parserMatchesEngine: Boolean(engine && engine.imports === wasm.imports.length && engine.exports === wasm.exports.length) },
    sections: wasm.sections, definedFunctions: wasm.definedFunctions, dataSegments: wasm.dataSegments, start: wasm.start,
    imports: wasm.imports.map(({ module, name, kind }) => `${module}.${name}:${kind}`),
    exports: wasm.exports.map(({ name, kind }) => `${name}:${kind}`),
    importModules: [...new Set(wasm.imports.map(item => item.module))],
    producers: wasm.producers, targetFeatures: wasm.targetFeatures, goBuildId: wasm.goBuildId,
    goBuildInfo: wasm.goBuildInfo && { goVersion: wasm.goBuildInfo.goVersion ?? wasm.producers?.language?.find(item => item.name === 'Go')?.version ?? null, path: wasm.goBuildInfo.path, main: wasm.goBuildInfo.main,
      settings: wasm.goBuildInfo.settings, deps: wasm.goBuildInfo.deps.length } };
};

// Runtime identity of the two shipped Node runtimes (Electron host and the helper node).
function runtimeVersions(executable) {
  const env = { PATH: '/usr/bin:/bin', ELECTRON_RUN_AS_NODE: '1', HOME: process.env.HOME ?? '/tmp' };
  const text = execFileSync(executable, ['-p', 'JSON.stringify(process.versions)'], { env, encoding: 'utf8', timeout: 30000 });
  const versions = JSON.parse(text.trim().split('\n').at(-1));
  const pick = ['node', 'v8', 'modules', 'napi', 'electron', 'chrome', 'uv', 'openssl', 'boringssl', 'zlib', 'icu'];
  return Object.fromEntries(pick.filter(key => versions[key]).map(key => [key, versions[key]]));
}

export async function scanInstallation(base, { probeRuntimes = true } = {}) {
  const records = [], wasm = [], symlinks = [], packages = new Map();
  for (const file of await walk(base)) {
    const path = relative(base, file).split(sep).join('/');
    const info = await lstat(file);
    if (info.isSymbolicLink()) { symlinks.push({ path, target: await readlink(file) }); continue; }
    if (!info.isFile()) continue;
    const head = Buffer.alloc(4);
    const handle = await open(file, 'r');
    try { await handle.read(head, 0, 4, 0); } finally { await handle.close(); }
    const kind = signature(head);
    if (!kind && !named(path)) continue;
    const bytes = await readFile(file);
    if (!kind) { records.push({ path, kind: 'unrecognized', bytes: bytes.length, sha256: sha256(bytes) }); continue; }
    const record = kind === 'wasm' ? wasmRecord(bytes, path) : nativeRecord(bytes, path);
    record.executable = Boolean(info.mode & 0o111);
    record.package = await nearestPackage(file, base, packages);
    // AppImage payloads embed their own squashfs; their contents are not scanned here.
    if (kind === 'elf' && bytes.includes(Buffer.from('hsqs', 'latin1'), 0) && /\.AppImage$/.test(path)) record.nestedImage = 'appimage-squashfs (contents not inventoried)';
    (kind === 'wasm' ? wasm : records).push(record);
  }
  const distinct = list => [...Object.entries(Object.groupBy(list, item => item.sha256))]
    .map(([digest, items]) => ({ sha256: digest, paths: items.map(item => item.path) })).sort((a, b) => a.sha256 < b.sha256 ? -1 : 1);
  const runtimes = {};
  if (probeRuntimes) for (const path of ['usr/share/cursor/cursor', 'usr/share/cursor/resources/app/resources/helpers/node'])
    runtimes[path] = { observedBy: 'executed with ELECTRON_RUN_AS_NODE=1 -p process.versions', ...runtimeVersions(join(base, path)) };
  return { natives: records, wasm, symlinks, runtimes,
    distinctNatives: distinct(records), distinctWasm: distinct(wasm),
    counts: { nativePaths: records.length, distinctNatives: distinct(records).length, wasmPaths: wasm.length, distinctWasm: distinct(wasm).length,
      elf: records.filter(item => item.kind === 'elf').length, pe: records.filter(item => item.kind === 'pe').length,
      unrecognized: records.filter(item => item.kind === 'unrecognized').length, symlinks: symlinks.length } };
}

// Dispositions: one Markdown table row per distinct digest (first 16 hex digits).
export function parseDispositions(markdown) {
  const rows = [];
  const columns = ['digest', 'payload', 'upstream', 'ref', 'license', 'abi', 'class'];
  for (const line of markdown.split('\n')) {
    const match = /^\|\s*`([0-9a-f]{16})`\s*\|(.*)\|\s*$/.exec(line);
    if (!match) continue;
    const cells = [match[1], ...match[2].split('|').map(cell => cell.trim())];
    rows.push(Object.fromEntries(columns.map((key, index) => [key, cells[index] ?? ''])));
  }
  return rows;
}

export function checkInventory(committed, current, dispositions) {
  const failures = [];
  const index = list => new Map(list.map(item => [item.path, item]));
  for (const [label, key] of [['native', 'natives'], ['WASM', 'wasm']]) {
    const before = index(committed[key] ?? []), after = index(current[key]);
    for (const [path, item] of after) {
      const record = before.get(path);
      if (!record) failures.push(`${label} path without a committed record: ${path}`);
      else if (record.sha256 !== item.sha256) failures.push(`${label} digest drift: ${path} ${record.sha256.slice(0, 16)} -> ${item.sha256.slice(0, 16)}`);
      else if (JSON.stringify({ ...record, package: undefined }) !== JSON.stringify({ ...item, package: undefined }) ||
        JSON.stringify(record.package) !== JSON.stringify(item.package)) failures.push(`${label} record drift (parser output changed): ${path}`);
    }
    for (const path of before.keys()) if (!after.has(path)) failures.push(`${label} record without a shipped path: ${path}`);
  }
  for (const item of current.natives) if (item.kind === 'unrecognized') failures.push(`Named native without a recognized format: ${item.path}`);
  for (const item of current.wasm) if (!item.validation.valid || !item.validation.parserMatchesEngine) failures.push(`WASM validation or parser cross-check failed: ${item.path}`);
  if (JSON.stringify(committed.runtimes ?? {}) !== JSON.stringify(current.runtimes)) failures.push('Runtime versions drifted from the committed record');
  if (dispositions) {
    const rows = new Map();
    for (const row of dispositions) {
      if (rows.has(row.digest)) failures.push(`Duplicate disposition row ${row.digest}`);
      rows.set(row.digest, row);
    }
    const digests = [...current.distinctNatives, ...current.distinctWasm].map(item => item.sha256.slice(0, 16));
    for (const digest of digests) {
      const row = rows.get(digest);
      if (!row) { failures.push(`Distinct payload without a disposition: ${digest}`); continue; }
      for (const key of ['payload', 'upstream', 'ref', 'license', 'abi', 'class'])
        if (!row[key] || row[key] === '-' || row[key] === '?') failures.push(`Disposition ${digest} has empty ${key}`);
      if (!dispositionClasses.includes(row.class.replaceAll('`', ''))) failures.push(`Disposition ${digest} has unknown class ${row.class}`);
    }
    for (const digest of rows.keys()) if (!digests.includes(digest)) failures.push(`Disposition row without a shipped payload: ${digest}`);
  }
  return failures;
}

export function inventoryDocument(scan, input = linuxInputs.x64) {
  return { schema: 1, story: 'OV-801', scope: 'Linux x64 pinned AppImage, extracted squashfs; paths relative to squashfs-root',
    input: { file: input.file, version: input.version, bytes: input.bytes, sha256: input.sha256 },
    method: { tool: 'desktop/native-inventory.mjs', selection: 'regular files with an ELF, PE or WebAssembly signature, or named *.node, *.so*, *.wasm',
      wasmValidation: 'V8 WebAssembly.validate plus a section parser cross-checked against WebAssembly.Module imports/exports',
      limitations: ['Static linkage facts only; loaded roles are measured separately (verify:native-loaded).',
        'Nested AppImage payloads are recorded as one file; their embedded squashfs is not inventoried.',
        'Nearest package.json metadata is the shipped manifest, not authenticated upstream provenance.',
        'WebAssembly embedded as JavaScript strings is not part of this file inventory.'] },
    counts: scan.counts, runtimes: scan.runtimes, distinctNatives: scan.distinctNatives, distinctWasm: scan.distinctWasm,
    natives: scan.natives, wasm: scan.wasm, symlinks: scan.symlinks };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
  const flag = name => { const index = process.argv.indexOf(name); return index < 0 ? null : process.argv[index + 1]; };
  const base = resolve(flag('--root') ?? join(root, 'build/inputs', `cursor-${linuxInputs.x64.version}-linux-x64`, 'squashfs-root'));
  const appimage = join(dirname(base), linuxInputs.x64.file);
  const scan = await scanInstallation(base);
  const document = inventoryDocument(scan);
  if (process.argv.includes('--write')) {
    await writeFile(join(root, inventoryPath), JSON.stringify(document, null, 2) + '\n');
    console.log(JSON.stringify({ written: inventoryPath, counts: document.counts }, null, 2));
  } else {
    const committed = JSON.parse(await readFile(join(root, inventoryPath), 'utf8'));
    const dispositions = parseDispositions(await readFile(join(root, dispositionsPath), 'utf8'));
    const failures = checkInventory(committed, document, dispositions);
    const imageDigest = await readFile(appimage).then(sha256, () => null);
    if (imageDigest && imageDigest !== linuxInputs.x64.sha256) failures.push(`AppImage digest ${imageDigest} differs from the pinned input`);
    console.log(JSON.stringify({ root: base, appimage: imageDigest ? 'pinned digest matched' : 'image absent (extracted tree checked)',
      counts: document.counts, dispositions: dispositions.length, failures }, null, 2));
    if (failures.length) process.exitCode = 1;
  }
}
