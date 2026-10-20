// Rebuilds the Linux x64 storage, terminal, watcher, logging, keyboard, watchdog, Kerberos,
// policy and parser addons from the pinned upstream
// packages in native/linux-x64 against the verified Electron 42.10.0 headers.
// Usage: npm ci --prefix native/linux-x64 --ignore-scripts --omit=optional && npm run build:native:linux
import assert from 'node:assert/strict';
import { copyFile, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { join, relative, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { tokenizer } from '../tooling/dependencies.mjs';
import { fileHash } from './import-files.mjs';
import { exists } from './source-assembly.mjs';
import { preparePinnedArchives, prepareUpstreamInputs } from './upstream-host.mjs';

export const nativeAddons = [
  { package: 'node-pty', binary: 'build/Release/pty.node', recovered: '1.1.0-beta42',
    targets: ['node_modules/node-pty/build/Release/pty.node'] },
  { package: '@vscode/sqlite3', binary: 'build/Release/vscode-sqlite3.node', recovered: '5.1.12-vscode',
    targets: ['node_modules/@vscode/sqlite3/build/Release/vscode-sqlite3.node'] },
  { package: 'better-sqlite3', binary: 'build/Release/better_sqlite3.node', recovered: '12.11.1',
    targets: ['extensions/cursor-agent-exec/dist/node_modules/better-sqlite3/build/Release/better_sqlite3.node'] },
  // Cursor ships a 2.5.1-cursor fork; the upstream 2.5.1 base replaces its binary only.
  { package: '@parcel/watcher', binary: 'build/Release/watcher.node', recovered: '2.5.1-cursor',
    targets: ['node_modules/@parcel/watcher/build/Release/watcher.node'] },
  { package: '@vscode/spdlog', binary: 'build/Release/spdlog.node', recovered: '0.15.8',
    targets: ['node_modules/@vscode/spdlog/build/Release/spdlog.node'] },
  { package: 'native-keymap', binary: 'build/Release/keymapping.node', recovered: '3.3.5',
    targets: ['node_modules/native-keymap/build/Release/keymapping.node'] },
  { package: 'native-watchdog', binary: 'build/Release/watchdog.node', recovered: '1.4.2',
    targets: ['node_modules/native-watchdog/build/Release/watchdog.node'] },
  { package: 'kerberos', binary: 'build/Release/kerberos.node', recovered: '2.1.1',
    targets: ['node_modules/kerberos/build/Release/kerberos.node'] },
  // Cursor ships @anysphere/policy-watcher 1.3.2-cursor.2; upstream 1.3.2 is a Linux stub.
  { package: '@vscode/policy-watcher', binary: 'build/Release/vscode-policy-watcher.node', recovered: '1.3.2-cursor.2',
    targets: ['node_modules/@anysphere/policy-watcher/build/Release/vscode-policy-watcher.node'] },
  // Its binding.gyp pins -std=c++17, but Electron 42's V8 headers require C++20 (appended flags win).
  { package: 'tree-sitter', binary: 'build/Release/tree_sitter_runtime_binding.node', recovered: '0.21.1', cxxflags: '-std=gnu++20',
    targets: ['extensions/cursor-agent-exec/dist/node_modules/tree-sitter/build/Release/tree_sitter_runtime_binding.node',
      'extensions/cursor-agent-host/dist/agent-host-daemon/dist/node_modules/tree-sitter/build/Release/tree_sitter_runtime_binding.node'] },
  { package: 'tree-sitter-bash', binary: 'build/Release/tree_sitter_bash_binding.node', recovered: '0.21.0',
    targets: ['extensions/cursor-agent-exec/dist/node_modules/tree-sitter-bash/build/Release/tree_sitter_bash_binding.node',
      'extensions/cursor-agent-host/dist/agent-host-daemon/dist/node_modules/tree-sitter-bash/build/Release/tree_sitter_bash_binding.node'] },
];

function output(command, args, options = {}) {
  const result = spawnSync(command, args, { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, ...options });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`${command} ${args.join(' ')} exited ${result.status}: ${(result.stderr || result.stdout).slice(-2000)}`);
  return result.stdout + result.stderr;
}

export function toolVersions(clang) {
  const version = output(clang, ['--version']);
  return {
    clang: /clang version (\S+)/.exec(version)?.[1], llvm_commit: /llvm-project ([0-9a-f]{40})/.exec(version)?.[1],
    make: /GNU Make (\S+)/.exec(output('make', ['--version']))?.[1],
    python: /Python (\S+)/.exec(output('python3', ['--version']))?.[1], node: process.versions.node,
  };
}

export function assertToolchain(pinned, actual) {
  assert.equal(actual.clang, pinned.inputs.clang.compilerVersion, `clang ${actual.clang} differs from pinned ${pinned.inputs.clang.compilerVersion}`);
  assert.equal(actual.llvm_commit, pinned.inputs.clang.llvmCommit, `clang commit ${actual.llvm_commit} differs from pinned ${pinned.inputs.clang.llvmCommit}`);
  for (const name of ['make', 'python'])
    assert.equal(actual[name], pinned[name].version, `${name} ${actual[name]} differs from pinned ${pinned[name].version}; see native/linux-x64/toolchain.json`);
  assert.equal(actual.node, pinned.node.version, `node ${actual.node} differs from pinned ${pinned.node.version}`);
}

const versionParts = version => version.split('.').map(Number);
export function versionAtMost(version, limit) {
  const [left, right] = [versionParts(version), versionParts(limit)];
  for (let index = 0; index < Math.max(left.length, right.length); index++)
    if ((left[index] ?? 0) !== (right[index] ?? 0)) return (left[index] ?? 0) < (right[index] ?? 0);
  return true;
}

// The portability floor: no symbol newer than glibcMax and no shared C++ runtime.
export function assertPortable(abi, glibcMax, name) {
  assert.ok(abi.glibc && versionAtMost(abi.glibc, glibcMax), `${name} needs GLIBC_${abi.glibc}, above the ${glibcMax} floor`);
  assert.equal(abi.glibcxx, null, `${name} needs libstdc++ symbols (GLIBCXX_${abi.glibcxx})`);
  assert.deepEqual(abi.needed.filter(library => /^lib(std)?c\+\+/.test(library)), [], `${name} links a shared C++ runtime`);
}

// VS Code's x64 client recipe (build/azure-pipelines/linux/setup-env.sh): Chromium clang,
// Electron's libc++ in the Cr namespace with ThinLTO, glibc 2.28 sysroot. Prefix maps keep
// checkout and input paths out of the output so repeat builds can be compared.
export function compilerEnvironment(tools, { prefixMaps = [] } = {}) {
  const sysroot = join(tools.sysroot.directory, 'x86_64-linux-gnu/x86_64-linux-gnu/sysroot');
  const toolchain = join(tools.sysroot.directory, 'x86_64-linux-gnu');
  const clang = join(tools.clang.directory, 'bin');
  const headers = tools.libcxxHeaders.directory, abiHeaders = tools.libcxxabiHeaders.directory, objects = tools.libcxxObjects.directory;
  const maps = prefixMaps.map(([from, to]) => `-ffile-prefix-map=${from}=${to}`).join(' ');
  return {
    CC: `${clang}/clang --gcc-toolchain=${toolchain}`, CXX: `${clang}/clang++ --gcc-toolchain=${toolchain}`,
    CFLAGS: `--sysroot=${sysroot} -fPIC ${maps}`,
    CXXFLAGS: `-nostdinc++ -D__NO_INLINE__ -DSPDLOG_USE_STD_FORMAT -I${headers} -isystem${headers}/include -isystem${abiHeaders}/include -fPIC -flto=thin -fsplit-lto-unit -D_LIBCPP_ABI_NAMESPACE=Cr -D_LIBCPP_HARDENING_MODE=_LIBCPP_HARDENING_MODE_EXTENSIVE --sysroot=${sysroot} ${maps}`,
    LDFLAGS: `-stdlib=libc++ --sysroot=${sysroot} -fuse-ld=lld -flto=thin -L${objects} -lc++abi -L${sysroot}/usr/lib/x86_64-linux-gnu -L${sysroot}/lib/x86_64-linux-gnu -Wl,--lto-O0 -Wl,--build-id=sha1`,
  };
}

// Dynamic ELF facts used for the ABI check: the module registration entry point,
// the highest GLIBC/GLIBCXX symbol versions required and the needed libraries.
export function elfAbi(path) {
  const symbols = output('readelf', ['--dyn-syms', '--wide', path]);
  const versions = [...symbols.matchAll(/@(GLIBC(?:XX)?)_([0-9.]+)/g)].map(match => [match[1], match[2]]);
  const highest = family => versions.filter(([name]) => name === family).map(([, version]) => version)
    .sort((left, right) => left.localeCompare(right, 'en', { numeric: true })).at(-1) ?? null;
  const defined = [...symbols.matchAll(/^\s*\d+:\s+\S+\s+\d+\s+FUNC\s+GLOBAL\s+DEFAULT\s+\d+\s+(\S+)$/gm)].map(match => match[1]);
  const registration = defined.find(name => name === 'napi_register_module_v1' || /^node_register_module_v\d+$/.test(name)) ?? null;
  const needed = [...output('readelf', ['--dynamic', '--wide', path]).matchAll(/\(NEEDED\)\s+Shared library: \[([^\]]+)\]/g)].map(match => match[1]);
  return { registration, api: registration === 'napi_register_module_v1' ? 'node-api'
    : registration ? `node-module-${registration.split('_v').at(-1)}` : 'unknown',
  glibc: highest('GLIBC'), glibcxx: highest('GLIBCXX'), needed };
}

const wrapperFile = path => /\.(js|cjs|mjs)$/.test(path) && !/\.test\.|(^|\/)(build|src|deps|scripts|test|node_modules|prebuilds)\//.test(path);
// Recovered JavaScript is reformatted, so wrappers are compared as token streams.
export function jsTokens(text) {
  const tokens = [];
  for (const token of tokenizer(text, { ecmaVersion: 'latest', sourceType: 'script', allowHashBang: true, allowReturnOutsideFunction: true }))
    tokens.push(token.type.label === 'string' || token.type.label === 'num' ? `${token.type.label}:${token.value}` : token.value ?? token.type.label);
  return tokens;
}

// Tokens present in one stream but not matched in the other (multiset difference), so a
// renamed identifier counts once per use rather than shifting every later token.
function tokenDelta(left, right) {
  const counts = new Map();
  for (const token of left) counts.set(token, (counts.get(token) ?? 0) + 1);
  for (const token of right) counts.set(token, (counts.get(token) ?? 0) - 1);
  let onlyUpstream = 0, onlyRecovered = 0;
  for (const count of counts.values()) if (count > 0) onlyUpstream += count; else onlyRecovered -= count;
  return { upstream_tokens: left.length, recovered_tokens: right.length, tokens_only_upstream: onlyUpstream, tokens_only_recovered: onlyRecovered };
}

async function wrapperFiles(base, directory = base) {
  const found = [];
  for (const entry of await readdir(directory, { withFileTypes: true }).catch(() => [])) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) found.push(...await wrapperFiles(base, path));
    else if (wrapperFile(relative(base, path))) found.push(relative(base, path));
  }
  return found.sort();
}

// Estimates the recovered JavaScript delta from the upstream package, ignoring formatting and comments.
export async function wrapperDiff(upstream, recovered) {
  const [left, right] = [await wrapperFiles(upstream), await wrapperFiles(recovered)];
  const result = { compared: 0, identical: 0, differing: [], upstream_only: left.filter(path => !right.includes(path)),
    recovered_only: right.filter(path => !left.includes(path)) };
  for (const path of left.filter(path => right.includes(path))) {
    result.compared++;
    const [a, b] = [jsTokens(await readFile(join(upstream, path), 'utf8')), jsTokens(await readFile(join(recovered, path), 'utf8'))];
    if (a.length === b.length && a.every((token, index) => token === b[index])) { result.identical++; continue; }
    result.differing.push({ path, ...tokenDelta(a, b) });
  }
  return result;
}

async function licenseRecord(directory, metadata) {
  for (const name of ['LICENSE', 'LICENSE.md', 'License.txt', 'LICENSE.txt'])
    if (await exists(join(directory, name))) return { id: metadata.license ?? null, file: name, sha256: await fileHash(join(directory, name)) };
  return { id: metadata.license ?? null, file: null, sha256: null };
}

export async function rebuildNative(root, { only } = {}) {
  if (process.platform !== 'linux' || process.arch !== 'x64') throw new Error('The pinned native rebuild targets Linux x64 only.');
  const workspace = join(root, 'native/linux-x64');
  const pinned = JSON.parse(await readFile(join(workspace, 'toolchain.json'), 'utf8'));
  const toolInputs = await preparePinnedArchives(join(root, 'build/inputs/toolchain'), pinned.inputs);
  const tools = toolVersions(join(toolInputs.clang.directory, 'bin/clang'));
  assertToolchain(pinned, tools);
  const lock = JSON.parse(await readFile(join(workspace, 'package-lock.json'), 'utf8'));
  const gyp = join(workspace, 'node_modules/node-gyp/bin/node-gyp.js');
  assert.equal(JSON.parse(await readFile(join(workspace, 'node_modules/node-gyp/package.json'), 'utf8')).version, pinned.nodeGyp.version,
    'Installed node-gyp differs from the lockfile; run npm ci --prefix native/linux-x64 --ignore-scripts --omit=optional');
  const inputs = await prepareUpstreamInputs(root);
  const nodedir = inputs.headers.nodedir;
  assert.match(await readFile(join(nodedir, 'include/node/node_version.h'), 'utf8'), new RegExp(`#define NODE_MODULE_VERSION ${pinned.electron.nodeModuleVersion}\\b`));
  const destination = join(root, 'build/native/linux-x64');
  await mkdir(destination, { recursive: true });
  const addons = [];
  for (const addon of nativeAddons.filter(entry => !only || only.includes(entry.package))) {
    const directory = join(workspace, 'node_modules', addon.package);
    const metadata = JSON.parse(await readFile(join(directory, 'package.json'), 'utf8'));
    const locked = lock.packages[`node_modules/${addon.package}`];
    assert.equal(metadata.version, locked.version, `${addon.package} differs from the lockfile`);
    await rm(join(directory, 'build'), { recursive: true, force: true });
    const args = [gyp, 'rebuild', `--nodedir=${nodedir}`, `--target=${pinned.electron.version}`, '--runtime=electron', '--arch=x64', '--jobs=4'];
    const environment = compilerEnvironment(toolInputs, { prefixMaps: [[directory, '.'], [nodedir, '/electron-headers'], [join(root, 'build/inputs/toolchain'), '/toolchain']] });
    if (addon.cxxflags) environment.CXXFLAGS += ` ${addon.cxxflags}`;
    const log = output(process.execPath, args, { cwd: directory, env: { ...process.env, ...environment, npm_config_build_from_source: 'true', SOURCE_DATE_EPOCH: '0' } });
    const built = join(directory, addon.binary);
    const target = join(destination, addon.package.replace('/', '__'), addon.binary.split('/').at(-1));
    await mkdir(join(target, '..'), { recursive: true });
    await copyFile(built, target);
    await writeFile(`${target}.build.log`, log);
    const recoveredPackage = join(root, 'source/app', addon.targets[0].replace(/\/build\/Release\/[^/]+$/, ''));
    addons.push({ package: addon.package, version: metadata.version, recovered_version: addon.recovered,
      source: { resolved: locked.resolved, integrity: locked.integrity, repository: metadata.repository?.url ?? metadata.repository ?? null,
        git_head: metadata.gitHead ?? null },
      command: `node node_modules/node-gyp/bin/node-gyp.js ${args.slice(1).join(' ').replaceAll(nodedir, '<electron-headers>')} (cwd native/linux-x64/node_modules/${addon.package}; ${Object.entries(environment).map(([name, value]) => `${name}=${value}`).join('; ').replaceAll(join(root, 'build/inputs/toolchain'), '<toolchain>').replaceAll(directory, '<package>').replaceAll(nodedir, '<electron-headers>')})`,
      output: relative(root, target), sha256: await fileHash(target), bytes: (await readFile(target)).length, abi: elfAbi(target),
      recovered_sha256: await exists(join(root, 'source/app', addon.targets[0])) ? await fileHash(join(root, 'source/app', addon.targets[0])) : null,
      recovered_abi: await exists(join(root, 'source/app', addon.targets[0])) ? elfAbi(join(root, 'source/app', addon.targets[0])) : null,
      license: await licenseRecord(directory, metadata), wrapper_diff: await wrapperDiff(directory, recoveredPackage), targets: addon.targets });
    assertPortable(addons.at(-1).abi, pinned.glibcMax, addon.package);
    console.log(`Rebuilt ${addon.package}@${metadata.version}: ${addons.at(-1).sha256} (${addons.at(-1).abi.api}, GLIBC_${addons.at(-1).abi.glibc})`);
  }
  const manifest = { name: 'OpenVision Linux x64 native rebuild', created_at: new Date().toISOString(),
    toolchain: { ...tools, node_gyp: pinned.nodeGyp.version, electron: pinned.electron.version, glibc_max: pinned.glibcMax,
      inputs: Object.fromEntries(Object.entries(toolInputs).map(([name, input]) => [name, { url: input.url, sha256: input.sha256 }])),
      node_module_version: pinned.electron.nodeModuleVersion, headers: { url: inputs.headers.url, sha256: inputs.headers.sha256 } },
    lockfile_sha256: await fileHash(join(workspace, 'package-lock.json')), addons };
  await writeFile(join(destination, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
  return manifest;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const root = resolve(import.meta.dirname, '..');
  const index = process.argv.indexOf('--only');
  const manifest = await rebuildNative(root, { only: index < 0 ? undefined : process.argv[index + 1].split(',') });
  console.log(`Native manifest: build/native/linux-x64/manifest.json (${manifest.addons.length} addons)`);
}
