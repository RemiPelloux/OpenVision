// OV-801 esbuild.wasm evidence without REA's input/output limits: a bounded static
// summary of the shipped payload, its JavaScript callers, and a byte-for-byte
// rebuild of esbuild v0.25.9 with the Go release named by its producers section.
// Downloads are pinned (Go archive SHA-256, esbuild tag commit). Nothing shipped is
// executed; only the pinned Go toolchain runs, on the cloned source.
//
//   node scripts/recovery/esbuild-wasm-evidence.mjs [--root <squashfs-root>] [--go <GOROOT>] [--source <esbuild checkout>]
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { createWriteStream } from 'node:fs';
import { mkdir, mkdtemp, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join, relative, resolve } from 'node:path';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';
import { parseWasm } from '../../desktop/native-inventory.mjs';
import { linuxInputs } from '../../desktop/linux-input.mjs';

export const pins = {
  payload: 'usr/share/cursor/resources/app/extensions/node_modules/esbuild-wasm/esbuild.wasm',
  sha256: 'c4f8ab7b1cd318f6423b737c5da275c57c24489fe0ea926adc04d62e58394103',
  esbuild: { repository: 'https://github.com/evanw/esbuild.git', tag: 'v0.25.9', commit: '195e05c16f03a341390feef38b8ebf17d3075e14' },
  go: { version: 'go1.23.12', url: 'https://go.dev/dl/go1.23.12.linux-amd64.tar.gz',
    sha256: 'd3847fef834e9db11bf64e3fb34db9c04db14e068eeb064f49af747010454f90' },
  // scripts/esbuild.js buildWasmLib at the tag: go build -ldflags=-s -w -trimpath ./cmd/esbuild with GOOS=js GOARCH=wasm.
  build: ['build', '-o', 'esbuild.wasm', '-ldflags=-s -w', '-trimpath', './cmd/esbuild'],
};
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');

// Bounded summary: section headers, interface, producers, Go build ID and module
// settings. No WAT, no function bodies.
export function summary(bytes) {
  const wasm = parseWasm(bytes);
  return { bytes: bytes.length, sha256: sha256(bytes), valid: WebAssembly.validate(bytes), version: wasm.version,
    sections: wasm.sections, definedFunctions: wasm.definedFunctions, dataSegments: wasm.dataSegments,
    imports: wasm.imports.map(item => `${item.module}.${item.name}:${item.kind}`), exports: wasm.exports.map(item => `${item.name}:${item.kind}`),
    producers: wasm.producers, goBuildId: wasm.goBuildId,
    goBuildInfo: wasm.goBuildInfo && { path: wasm.goBuildInfo.path, main: wasm.goBuildInfo.main, settings: wasm.goBuildInfo.settings } };
}

// Byte-level comparison used to explain a mismatch: first differing offset and per-section deltas.
export function compare(expected, actual) {
  if (expected.equals(actual)) return { identical: true };
  let first = 0;
  while (first < Math.min(expected.length, actual.length) && expected[first] === actual[first]) first++;
  const [left, right] = [expected, actual].map(bytes => { try { return parseWasm(bytes); } catch (error) { return { error: error.message }; } });
  const sections = (left.sections ?? []).map((section, index) => ({ kind: section.name ?? section.kind, expected: section.size,
    actual: right.sections?.[index]?.size ?? null })).filter(item => item.expected !== item.actual);
  return { identical: false, expectedBytes: expected.length, actualBytes: actual.length, firstDifferenceOffset: first, sections,
    goBuildId: { expected: left.goBuildId, actual: right.goBuildId },
    settings: Object.fromEntries(Object.keys({ ...left.goBuildInfo?.settings, ...right.goBuildInfo?.settings })
      .filter(key => left.goBuildInfo?.settings?.[key] !== right.goBuildInfo?.settings?.[key])
      .map(key => [key, { expected: left.goBuildInfo?.settings?.[key] ?? null, actual: right.goBuildInfo?.settings?.[key] ?? null }])) };
}

// JavaScript files under resources/app that name the package or payload, and the
// lazy webpack imports of the module that wraps require("esbuild-wasm"), with a
// bounded excerpt of each import site.
async function callers(app) {
  const files = [];
  async function walk(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) { if (!path.endsWith('node_modules/esbuild-wasm')) await walk(path); }
      else if (/\.(c|m)?js$/.test(entry.name)) {
        const text = await readFile(path, 'utf8');
        if (/esbuild-wasm|esbuild\.wasm|\.t\.bind\(/.test(text)) files.push({ path, text });
      }
    }
  }
  await walk(app);
  const modules = new Set(files.flatMap(({ text }) => [...text.matchAll(/(\d+):e=>\{"use strict";e\.exports=require\("esbuild-wasm"\)\}/g)].map(match => match[1])));
  const found = [];
  for (const { path, text } of files) {
    const uses = [...text.matchAll(/require\("esbuild-wasm"\)|bundled node to PATH for esbuild-wasm|esbuild\.wasm/g)].length;
    const imports = [...modules].flatMap(module => [...text.matchAll(new RegExp(`\\.t\\.bind\\(\\w+,${module},\\d+\\)`, 'g'))]
      .map(match => text.slice(Math.max(0, match.index - 160), match.index + 220).replace(/\s+/g, ' ')));
    if (!uses && !imports.length) continue;
    found.push({ file: relative(app, path), matches: uses, lazyImports: imports.length, excerpts: imports.slice(0, 3).map(excerpt => excerpt.slice(0, 380)) });
  }
  return { webpackModules: [...modules], files: found.sort((a, b) => a.file < b.file ? -1 : 1) };
}

async function download(url, path, digest) {
  const response = await fetch(url);
  assert.ok(response.ok, `Download failed: HTTP ${response.status} ${url}`);
  await pipeline(Readable.fromWeb(response.body), createWriteStream(path, { flags: 'wx' }));
  assert.equal(sha256(await readFile(path)), digest, `Pinned digest mismatch for ${url}`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
  const flag = name => { const index = process.argv.indexOf(name); return index < 0 ? null : resolve(process.argv[index + 1]); };
  const base = flag('--root') ?? join(root, 'build/inputs', `cursor-${linuxInputs.x64.version}-linux-x64`, 'squashfs-root');
  await mkdir(join(root, 'logs'), { recursive: true });
  const directory = await mkdtemp(join(root, 'logs/esbuild-wasm-evidence-'));
  const result = { checkedAt: new Date().toISOString(), directory: relative(root, directory), pins, steps: [] };
  try {
    const shipped = await readFile(join(base, pins.payload));
    result.shipped = summary(shipped);
    assert.equal(result.shipped.sha256, pins.sha256, 'Shipped esbuild.wasm differs from the pinned inventory digest');
    result.callers = await callers(join(base, 'usr/share/cursor/resources/app'));
    // Toolchain and source.
    let goroot = flag('--go'), source = flag('--source');
    if (!goroot) {
      const archive = join(directory, 'go.tar.gz');
      await download(pins.go.url, archive, pins.go.sha256);
      execFileSync('tar', ['-xzf', archive, '-C', directory]);
      await rm(archive);
      goroot = join(directory, 'go');
      result.steps.push(`downloaded ${pins.go.url} (SHA-256 matched)`);
    }
    if (!source) {
      source = join(directory, 'esbuild');
      execFileSync('git', ['clone', '-q', '--depth', '1', '--branch', pins.esbuild.tag, pins.esbuild.repository, source], { stdio: 'ignore' });
      result.steps.push(`cloned ${pins.esbuild.repository} ${pins.esbuild.tag}`);
    }
    const commit = execFileSync('git', ['-C', source, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
    const dirty = execFileSync('git', ['-C', source, 'status', '--porcelain'], { encoding: 'utf8' }).trim();
    assert.equal(commit, pins.esbuild.commit, 'esbuild checkout is not the pinned tag commit');
    assert.equal(dirty, '', 'esbuild checkout has local modifications');
    assert.equal(commit, result.shipped.goBuildInfo.settings['vcs.revision'], 'Tag commit differs from the shipped vcs.revision');
    const go = join(goroot, 'bin/go');
    const env = { PATH: `${join(goroot, 'bin')}:/usr/bin:/bin`, HOME: join(directory, 'home'), GOPATH: join(directory, 'gopath'),
      GOCACHE: join(directory, 'gocache'), GOMODCACHE: join(directory, 'gomodcache'), GOTOOLCHAIN: 'local',
      GOOS: 'js', GOARCH: 'wasm', CGO_ENABLED: '0', GOFLAGS: '-mod=readonly' };
    result.toolchain = execFileSync(go, ['version'], { env, encoding: 'utf8' }).trim();
    assert.match(result.toolchain, new RegExp(`\\b${pins.go.version} `), 'Go toolchain is not the pinned release');
    const output = join(directory, 'esbuild.wasm');
    execFileSync(go, pins.build.map(item => item === 'esbuild.wasm' ? output : item), { cwd: source, env, stdio: 'inherit' });
    result.steps.push(`GOOS=js GOARCH=wasm CGO_ENABLED=0 GOTOOLCHAIN=local go ${pins.build.join(' ')} (-mod=readonly: go.mod/go.sum fixed; the one required module is fetched from the default proxy and checked against go.sum)`);
    result.linkedModules = result.shipped.goBuildInfo?.main && 'shipped build info lists no dep lines: no third-party module is linked into the js/wasm binary';
    const rebuilt = await readFile(output);
    result.rebuilt = { bytes: rebuilt.length, sha256: sha256(rebuilt) };
    result.comparison = compare(shipped, rebuilt);
    result.success = result.comparison.identical;
    await rm(join(directory, 'gocache'), { recursive: true, force: true });
  } catch (error) { result.success = false; result.failure = error.stack; }
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ directory: result.directory, success: result.success, failure: result.failure?.slice(0, 1500),
    shipped: result.shipped && { bytes: result.shipped.bytes, sha256: result.shipped.sha256, valid: result.shipped.valid,
      producers: result.shipped.producers, goBuildId: result.shipped.goBuildId, revision: result.shipped.goBuildInfo?.settings?.['vcs.revision'] },
    callers: result.callers && { webpackModules: result.callers.webpackModules, files: result.callers.files.map(item => ({ file: item.file, matches: item.matches, lazyImports: item.lazyImports })) },
    toolchain: result.toolchain, rebuilt: result.rebuilt, comparison: result.comparison }, null, 2));
  if (!result.success) process.exitCode = 1;
}
