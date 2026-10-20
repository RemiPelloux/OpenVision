import assert from 'node:assert/strict';
import { spawn, spawnSync, execFileSync } from 'node:child_process';
import { once } from 'node:events';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { mkdir, mkdtemp, readFile, readdir, realpath, rm, symlink, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { basename, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { setTimeout as delay } from 'node:timers/promises';
import { fileHash } from './import-files.mjs';
import { authorityMatrix, expectedAuthority, identityAndCleanup, malformedCases, sandboxFixture } from './sandbox-contract.mjs';

// OV-803 contract checks for every proprietary helper that verify:native-calls
// shows as loaded, under the decided defaults (original helpers): authority,
// malformed input, process identity and cleanup. Linux x64, unprivileged.
//
//   cursorsandbox   shipped binary, recovered command line (sandbox-contract.mjs)
//   crepectl        shipped binary, run directly as the addon runs it
//   file-service    GrepClient in a Node worker, spawning the shipped crepectl
//   cursor-proclist addon in a Node worker
//   tree-chunk-napi addon in a Node worker
//
// Addon workers run under strace. Each worker brackets its measured window
// with stat() calls on marker paths, so the window holds only the helper's own
// system calls. Only verifier-owned children and process groups are signalled.
const root = resolve(import.meta.dirname, '..');
const app = join(root, 'source/app');
export const helperPaths = Object.freeze({
  cursorsandbox: join(app, 'resources/helpers/cursorsandbox'),
  crepectl: join(app, 'resources/helpers/crepectl'),
  fileService: join(app, 'extensions/cursor-retrieval/node_modules/@anysphere/file-service'),
  fileServiceAddon: join(app, 'extensions/cursor-retrieval/node_modules/@anysphere/file-service/file_service.linux-x64-gnu.node'),
  proclist: join(app, 'node_modules/cursor-proclist'),
  proclistAddon: join(app, 'node_modules/cursor-proclist/build/Release/cursor_proclist.node'),
  treeChunk: join(app, 'extensions/cursor-agent-exec/dist/node_modules/@anysphere/tree-chunk-napi'),
  treeChunkAddon: join(app, 'extensions/cursor-agent-exec/dist/node_modules/@anysphere/tree-chunk-napi/tree-chunk-napi.linux-x64-gnu.node'),
});
const mark = name => `/openvision-contract-mark-${name}`;

// ---------- strace analysis ----------
const writeCall = /^(?:openat\(.*O_(?:WRONLY|RDWR|CREAT)|creat\(|mkdir(?:at)?\(|rename(?:at2?)?\(|unlink(?:at)?\(|rmdir\(|symlink(?:at)?\(|link(?:at)?\(|truncate\(|chmod\(|fchmodat\()/;
export function analyzeTrace(text) {
  const windows = {}; let current;
  for (const line of text.split('\n')) {
    const match = line.match(/^(\d+)\s+(.*)$/); if (!match) continue;
    const [, pid, call] = match;
    const marker = call.match(/"\/openvision-contract-mark-([\w-]+)-(begin|end)"/);
    if (marker) { current = marker[2] === 'begin' ? (windows[marker[1]] = { writes: [], reads: [], network: [], execs: [], pids: new Set() }) : undefined; continue; }
    if (!current) continue;
    current.pids.add(pid);
    const path = call.match(/^\w+\((?:AT_FDCWD|-?\d+), "((?:[^"\\]|\\.)*)"/)?.[1] ?? call.match(/^\w+\("((?:[^"\\]|\\.)*)"/)?.[1];
    if (/^execve\(/.test(call)) current.execs.push(call.match(/^execve\("([^"]*)"/)?.[1]);
    else if (/^(?:socket\((?:AF_INET|AF_INET6|AF_PACKET)|connect\()/.test(call)) current.network.push(call.slice(0, 80));
    else if (/^(?:rename|link|symlink)/.test(call)) current.writes.push(...[...call.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map(match => match[1]));
    else if (writeCall.test(call) && path) current.writes.push(path);
    else if (/^(?:openat|open)\(/.test(call) && path && !/= -1 /.test(call)) current.reads.push(path);
  }
  for (const window of Object.values(windows)) window.pids = window.pids.size;
  return windows;
}

// ---------- process helpers ----------
function processes() {
  return readdirSync('/proc').filter(entry => /^\d+$/.test(entry)).map(entry => {
    try {
      const stat = readFileSync(`/proc/${entry}/stat`, 'utf8'), fields = stat.slice(stat.lastIndexOf(')') + 2).split(' ');
      return { pid: Number(entry), state: fields[0], ppid: Number(fields[1]), cmdline: readFileSync(`/proc/${entry}/cmdline`, 'utf8').split('\0') };
    } catch { return undefined; }
  }).filter(Boolean);
}
// crepectl processes building a given worktree (matched by executable and fixture path, never by PID alone).
const crepectlFor = path => processes().filter(item => item.state !== 'Z' && item.cmdline[0] === helperPaths.crepectl && item.cmdline.includes(path));
const environOf = pid => { try { return Object.fromEntries(readFileSync(`/proc/${pid}/environ`, 'utf8').split('\0').filter(Boolean).map(entry => [entry.slice(0, entry.indexOf('=')), entry.slice(entry.indexOf('=') + 1)])); } catch { return {}; } };
const threads = () => readdirSync('/proc/self/task').length;
const rssMiB = () => Math.round(Number(readFileSync('/proc/self/statm', 'utf8').split(' ')[1]) * 4096 / 1048576);
const errorClass = error => ({ threw: true, code: error?.code ?? null, message: String(error?.message ?? error).replace(/\/[^\s'"]+/g, '<path>').slice(0, 80) });

// ---------- workers (run in a child Node process under strace) ----------
async function proclistWorker(output) {
  const require = createRequire(import.meta.url), fs = require('node:fs');
  const proclist = require(helperPaths.proclist);
  const result = { authority: {}, malformed: {}, identity: {}, cleanup: {} };
  fs.statSync(mark('proclist-authority-begin'), { throwIfNoEntry: false });
  const scans = [];
  for (let index = 0; index < 20; index++) scans.push(await proclist.cursor_proclist_scan_async());
  const memory = proclist.cursor_proclist_system_memory();
  fs.statSync(mark('proclist-authority-end'), { throwIfNoEntry: false });
  // Default roots: only this process and its descendants are reported.
  const own = new Set([process.pid]);
  result.authority.defaultScanOwnTreeOnly = scans.every(scan => scan.every(tuple => own.has(tuple[0])));
  result.authority.systemMemory = memory;
  for (const [name, args] of Object.entries({ stringRoots: ['x'], negative: [[-1]], huge: [[2 ** 40]], nan: [[NaN]], mixed: [[null, {}, 'a']],
    manyRoots: [Array.from({ length: 10000 }, (_, index) => index + 1)], extraArguments: [[process.pid], 'extra', 3] })) {
    try { const value = await proclist.cursor_proclist_scan_async(...args); result.malformed[name] = { resolved: true, count: value.length, ownOnly: value.every(tuple => tuple[0] === process.pid || tuple[1] === process.pid) }; }
    catch (error) { result.malformed[name] = errorClass(error); }
  }
  try { result.malformed.systemMemoryWithArgument = { value: proclist.cursor_proclist_system_memory('x') }; } catch (error) { result.malformed.systemMemoryWithArgument = errorClass(error); }
  const self = (await proclist.cursor_proclist_scan_async([process.pid])).find(tuple => tuple[0] === process.pid);
  result.identity = { pid: self?.[0] === process.pid, ppid: self?.[1] === process.ppid, name: self?.[2], argvMatches: Array.isArray(self?.[6]) ? self[6].join(' ').includes(basename(process.argv[1])) : String(self?.[6]).includes(basename(process.argv[1])) };
  const before = { threads: threads(), rss: rssMiB() };
  await Promise.all(Array.from({ length: 500 }, () => proclist.cursor_proclist_scan_async()));
  for (let round = 0; round < 4; round++) await Promise.all(Array.from({ length: 250 }, () => proclist.cursor_proclist_scan_async()));
  global.gc?.();
  result.cleanup = { concurrentScans: 1500, threadsBefore: before.threads, threadsAfter: threads(), rssBeforeMiB: before.rss, rssAfterMiB: rssMiB() };
  result.doneAt = Date.now();
  fs.writeFileSync(output, JSON.stringify(result, null, 2));
}

async function treeChunkWorker(output) {
  const require = createRequire(import.meta.url), fs = require('node:fs');
  const chunker = require(helperPaths.treeChunk);
  const result = { authority: {}, malformed: {}, identity: {}, cleanup: {} };
  const corpus = [['ts', 'a.ts', 'export function f(a: number) {\n  return a + 1;\n}\nclass B { m() { return 2; } }\n'],
    ['py', 'a.py', 'def f(x):\n    return x * 2\n\nclass C:\n    def m(self):\n        pass\n'],
    ['go', 'a.go', 'package main\nfunc main() {\n  println("x")\n}\n'], ['rs', 'a.rs', 'fn main() { let x = 1; }\n'],
    ['java', 'A.java', 'class A { void m() { int x = 1; } }\n'], ['c', 'a.c', 'int main(void) { return 0; }\n']];
  const router = new chunker.ChunkerRouter({ maxSize: 1 });
  fs.statSync(mark('treechunk-authority-begin'), { throwIfNoEntry: false });
  const outputs = [];
  for (const [type, name, text] of corpus) {
    const tree = await router.parseFile(type, name, text);
    outputs.push({ type, chunks: tree.chunk(40, 80).length, compressed: tree.compress([{ start: 0, end: 10 }], 2, 2).render().length,
      context: tree.contextualize([{ start: 0, end: 10 }]).render().length });
  }
  fs.statSync(mark('treechunk-authority-end'), { throwIfNoEntry: false });
  result.authority.corpus = outputs;
  const attempt = async fn => { try { const value = await fn(); return { value: typeof value === 'object' ? (Array.isArray(value) ? `array(${value.length})` : 'object') : value }; } catch (error) { return errorClass(error); } };
  const deep = `function f() {${'{'.repeat(20000)}${'}'.repeat(20000)}}`;
  const huge = `export const a = 1;\n${'const x = [1, 2, 3, 4, 5, 6, 7, 8];\n'.repeat(150000)}`;
  const parsed = await router.parseFile('ts', 'b.ts', 'const a = 1;\n');
  Object.assign(result.malformed, {
    constructorNoArguments: await attempt(() => new chunker.ChunkerRouter()),
    constructorWrongType: await attempt(() => new chunker.ChunkerRouter({ maxSize: 'x' })),
    unsupportedType: await attempt(() => router.parseFile('cobol', 'a.cbl', 'IDENTIFICATION DIVISION.')),
    wrongArgumentTypes: await attempt(() => router.parseFile(1, 2, 3)),
    missingArguments: await attempt(() => router.parseFile('ts')),
    loneSurrogates: await attempt(() => router.parseFile('ts', 'c.ts', 'const s = "\uD800\uDFFF\uDC00";')),
    nulBytes: await attempt(() => router.parseFile('ts', 'd.ts', 'const a = 1;\0\0\0 const b = 2;')),
    empty: await attempt(() => router.parseFile('ts', 'e.ts', '')),
    deepNesting: await attempt(() => router.parseFile('ts', 'f.ts', deep)),
    hugeFile: await attempt(async () => (await router.parseFile('ts', 'g.ts', huge)).chunk(40, 80)),
    chunkNegative: await attempt(() => parsed.chunk(-1, 0)),
    compressOutOfRange: await attempt(() => parsed.compress([{ start: 10 ** 9, end: 10 ** 9 + 5 }], 2, 2)),
    compressInvertedRange: await attempt(() => parsed.compress([{ start: 10, end: 1 }], 2, 2)),
    contextualizeWrongType: await attempt(() => parsed.contextualize('x')),
  });
  result.identity = { childProcesses: processes().filter(item => item.ppid === process.pid).length };
  const before = { threads: threads(), rss: rssMiB() };
  for (let index = 0; index < 300; index++) (await router.parseFile('ts', `h${index}.ts`, corpus[0][2])).chunk(40, 80);
  global.gc?.();
  result.cleanup = { parses: 300, threadsBefore: before.threads, threadsAfter: threads(), rssBeforeMiB: before.rss, rssAfterMiB: rssMiB() };
  result.doneAt = Date.now();
  fs.writeFileSync(output, JSON.stringify(result, null, 2));
}

async function grepWorker(output, repo, outsideToken, mode, secondRepo) {
  const require = createRequire(import.meta.url), fs = require('node:fs');
  const { GrepClient } = require(helperPaths.fileService);
  const events = { info: () => {}, error: () => {}, trace: () => {}, crepectlInvocation: (_, outcome) => { (result.invocations ??= []).push(outcome); } };
  const result = { authority: {}, malformed: {}, identity: {}, cleanup: {} };
  if (mode === 'kill') {
    // Construct, report the crepectl child, then wait to be killed by the driver.
    new GrepClient([{ path: repo, excludes: [] }], { crepectlPath: helperPaths.crepectl }, events);
    for (let attempt = 0; attempt < 1000 && !crepectlFor(repo).length; attempt++) await delay(5);
    fs.writeFileSync(output, JSON.stringify({ crepectl: crepectlFor(repo).map(item => ({ ppid: item.ppid === process.pid })) }));
    await delay(60000); return;
  }
  fs.statSync(mark('grep-authority-begin'), { throwIfNoEntry: false });
  const client = new GrepClient([{ path: repo, excludes: [] }], { crepectlPath: helperPaths.crepectl }, events);
  client.warmup([repo]);
  let seen;
  for (let attempt = 0; attempt < 2000 && !seen; attempt++) { seen = crepectlFor(repo)[0]; if (!seen) await delay(5); }
  if (seen) {
    const environ = environOf(seen.pid);
    result.identity = { crepectlSeen: true, parentIsHost: seen.ppid === process.pid, parentPidVariable: environ.CREPECTL_PARENT_PID === String(process.pid),
      argvShape: seen.cmdline.slice(1).map(value => value.startsWith('-') ? value : '<value>').join(' ') };
  } else result.identity = { crepectlSeen: false };
  let ready = null;
  for (let attempt = 0; attempt < 240 && !ready; attempt++) { ready = await client.query([repo], 'needle', { literal: true, caseInsensitive: false }); if (!ready) await delay(250); }
  fs.statSync(mark('grep-authority-end'), { throwIfNoEntry: false });
  const files = value => Object.values(value ?? {}).flatMap(entry => entry?.byFile?.map(file => file.file) ?? []);
  result.authority = { indexReady: !!ready,
    unknownRoot: await client.query(['/'], outsideToken, { literal: true, caseInsensitive: false }).then(value => ({ value, reason: client.takeLastUnsupportedReason?.() ?? null })),
    parentInclude: files(await client.query([repo], outsideToken, { literal: true, caseInsensitive: false, includes: ['../**', '../../**'] })),
    linkedOutside: files(await client.query([repo], outsideToken, { literal: true, caseInsensitive: false })) };
  const attempt = async fn => { try { const value = await fn(); return { value: value === null ? null : typeof value, reason: client.takeLastUnsupportedReason?.() ?? null }; } catch (error) { return errorClass(error); } };
  Object.assign(result.malformed, {
    constructorNoArguments: await attempt(() => new GrepClient()),
    constructorMissingPath: await attempt(() => new GrepClient([{ excludes: [] }], { crepectlPath: helperPaths.crepectl }, events)),
    constructorBadHelper: await attempt(() => { const other = new GrepClient([{ path: '/nonexistent-openvision', excludes: [] }], { crepectlPath: '/nonexistent/crepectl' }, events); other.dispose(); return 'constructed'; }),
    queryWrongTypes: await attempt(() => client.query([repo], 'needle', { literal: 'yes' })),
    queryRootsNotArray: await attempt(() => client.query(repo, 'needle', { literal: true, caseInsensitive: false })),
    invalidRegex: await attempt(() => client.query([repo], 'needle(', { literal: false, caseInsensitive: false })),
    hugePattern: await attempt(() => client.query([repo], 'n'.repeat(1 << 20), { literal: true, caseInsensitive: false })),
    nulPattern: await attempt(() => client.query([repo], 'a\0b', { literal: true, caseInsensitive: false })),
    fileEventOutsideRoot: await attempt(() => { client.onDidChange('/etc/passwd'); client.onDidDelete('../../x'); return 'accepted'; }),
  });
  client.dispose();
  result.cleanup.disposeTwice = await attempt(() => client.dispose());
  result.cleanup.queryAfterDispose = await attempt(() => client.query([repo], 'needle', { literal: true, caseInsensitive: false }));
  // Dispose while crepectl builds a fresh index: the build must not outlive the client.
  const building = new GrepClient([{ path: secondRepo, excludes: [] }], { crepectlPath: helperPaths.crepectl }, events);
  let child;
  for (let attempt = 0; attempt < 2000 && !child; attempt++) { child = crepectlFor(secondRepo)[0]; if (!child) await delay(5); }
  const disposedAt = Date.now(); building.dispose();
  let remaining = crepectlFor(secondRepo);
  while (remaining.length && Date.now() - disposedAt < 15000) { await delay(20); remaining = crepectlFor(secondRepo); }
  result.cleanup.disposeDuringBuild = { crepectlSeen: !!child, stoppedOrFinishedMs: remaining.length ? null : Date.now() - disposedAt, survivors: remaining.length };
  result.doneAt = Date.now();
  fs.writeFileSync(output, JSON.stringify(result, null, 2));
  // The original addon keeps its callback references after dispose(), so Node would
  // not exit on its own (measured separately as an observation); the extension host
  // exits explicitly, and so does this worker.
  process.exit(0);
}


// ---------- driver ----------
async function runWorker(directory, kind, args = [], { trace = true, deadlineMs = 180000, env, name = kind } = {}) {
  const output = join(directory, `${name}.json`), log = join(directory, `${name}.strace`);
  const command = [process.execPath, '--expose-gc', fileURLToPath(import.meta.url), '--worker', kind, output, ...args];
  const options = { stdio: ['ignore', 'inherit', 'inherit'], env: { ...process.env, ...env } };
  const child = trace ? spawn('strace', ['-f', '-qq', '-s', '4096', '-o', log, '-e', 'trace=%file,%network,%process', '-e', 'signal=none', ...command], options)
    : spawn(command[0], command.slice(1), options);
  const timer = setTimeout(() => child.kill('SIGKILL'), deadlineMs); // the owned worker only
  const [code, signal] = await once(child, 'exit'); clearTimeout(timer);
  const exitedAt = Date.now();
  const result = existsSync(output) ? JSON.parse(await readFile(output, 'utf8')) : {};
  return { ...result, exit: { code, signal, lagAfterDoneMs: result.doneAt ? exitedAt - result.doneAt : null }, trace: trace ? analyzeTrace(await readFile(log, 'utf8')) : undefined };
}

async function createRepository(path, files, extra) {
  await mkdir(path, { recursive: true });
  for (const [name, text] of Object.entries(files)) { await mkdir(join(path, name, '..'), { recursive: true }); await writeFile(join(path, name), text); }
  await extra?.(path);
  const git = (...args) => execFileSync('git', ['-c', 'user.email=fixture@openvision.invalid', '-c', 'user.name=fixture', '-c', 'init.defaultBranch=main', ...args], { cwd: path });
  git('init', '-q'); git('add', '-A'); git('commit', '-qm', 'fixture');
  return path;
}
const treeDigest = path => execFileSync('sh', ['-c', 'find . -path ./.git -prune -o -printf "%p %s %T@\\n" | sort | sha256sum'], { cwd: path, encoding: 'utf8' }).trim();
const within = (paths, ...roots) => paths.every(path => roots.some(root => path === root || path.startsWith(`${root}/`)));
const deviceOrProc = path => /^\/(?:dev|proc|sys)\//.test(path);

async function main() {
  if (process.platform !== 'linux' || process.arch !== 'x64') throw Error('verify:helper-contracts checks the Linux x64 helper set.');
  if (process.getuid?.() === 0) throw Error('Run verify:helper-contracts as an unprivileged user.');
  for (const [name, path] of Object.entries(helperPaths)) assert.ok(existsSync(path), `${name} missing: build the default source first (${path})`);
  await mkdir(join(root, 'logs'), { recursive: true });
  const directory = await realpath(await mkdtemp(join(root, 'logs/helper-contracts-')));
  const result = { checkedAt: new Date().toISOString(), directory, node: process.version, kernel: execFileSync('uname', ['-r'], { encoding: 'utf8' }).trim(),
    defaults: 'Original helpers (OPENVISION_SANDBOX_HELPER and OPENVISION_CREPECTL unset)',
    identity: Object.fromEntries(await Promise.all(['cursorsandbox', 'crepectl', 'fileServiceAddon', 'proclistAddon', 'treeChunkAddon'].map(async name => [name, await fileHash(helperPaths[name])]))),
    helpers: {}, checks: {}, observations: {},
    scope: 'Linux x64 only; shipped default helpers. Addons run in Node 24.18.0 workers, not inside Electron; helpers run as the extension host runs them.' };
  const check = (name, value, detail) => { result.checks[name] = value === true; if (value !== true) result.checks[`${name}:detail`] = detail ?? value; };
  try {
    // ----- cursorsandbox -----
    const sandbox = helperPaths.cursorsandbox;
    const authority = await authorityMatrix(sandbox, await sandboxFixture(directory, 'sandbox-authority'));
    const malformed = await (await malformedCases(await sandboxFixture(directory, 'sandbox-malformed'))).evaluate(sandbox);
    const identity = await identityAndCleanup(sandbox, await sandboxFixture(directory, 'sandbox-identity'));
    result.helpers.cursorsandbox = { authority, malformed, identity };
    check('cursorsandbox.authority', JSON.stringify(authority) === JSON.stringify(expectedAuthority), authority);
    check('cursorsandbox.malformed_fail_closed', malformed.failClosed, malformed.outcome);
    check('cursorsandbox.identity', identity.fd3Inherited && identity.commandIsHelperProcess && identity.commandOwnsSessionAndGroup && identity.groupMembersBeforeStop === 3, identity);
    check('cursorsandbox.cleanup', identity.stopSignal === 'SIGTERM' && identity.survivorsAfterGroupStop === 0, identity);
    result.observations.cursorsandbox = Object.fromEntries(Object.entries(malformed.outcome).filter(([, value]) => value.group === 'lenient').map(([name, value]) => [name, value]));

    // ----- crepectl (as the file-service addon runs it) -----
    const crepectl = helperPaths.crepectl;
    const repo = await createRepository(join(directory, 'crepe-repo'), Object.fromEntries(Array.from({ length: 300 }, (_, index) => [`src/f${index}.txt`, `content needle ${index}\n`])));
    const cache = join(directory, 'crepe-cache'); await mkdir(cache);
    const before = treeDigest(repo), trace = join(directory, 'crepectl.strace');
    const built = spawnSync('strace', ['-f', '-qq', '-s', '4096', '-o', trace, '-e', 'trace=%file,%network,%process', '-e', 'signal=none', crepectl, 'build', '--worktree', repo, '--cache-path', cache],
      { encoding: 'utf8', timeout: 120000, env: { ...process.env } });
    const stdout = (() => { try { return JSON.parse(built.stdout); } catch { return built.stdout.slice(0, 200); } })();
    const windows = analyzeTrace(`1 stat("/openvision-contract-mark-crepectl-begin")\n${await readFile(trace, 'utf8')}`);
    const crepeWindow = windows.crepectl;
    assert.ok(crepeWindow, 'crepectl trace window missing');
    const crepeAuthority = { exit: built.status, success: stdout?.success ?? null, indexUnderCache: typeof stdout?.success?.[1] === 'string' && within([resolve(stdout.success[1])], cache),
      writesOutsideCache: crepeWindow.writes.map(path => resolve(cache, path)).filter(path => !within([path], cache) && !deviceOrProc(path)),
      network: crepeWindow.network, otherExecs: crepeWindow.execs.filter(path => path !== crepectl), worktreeUnchanged: treeDigest(repo) === before,
      cacheEntries: (await readdir(cache)).sort() };
    check('crepectl.authority', crepeAuthority.exit === 0 && crepeAuthority.indexUnderCache && !crepeAuthority.writesOutsideCache.length && !crepeAuthority.network.length &&
      !crepeAuthority.otherExecs.length && crepeAuthority.worktreeUnchanged, crepeAuthority);
    const notGit = join(directory, 'not-git'); await mkdir(notGit); await writeFile(join(notGit, 'a.txt'), 'x\n');
    const fileAsCache = join(directory, 'cache-file'); await writeFile(fileAsCache, 'x');
    const crepeMalformed = {};
    for (const [name, args] of Object.entries({ noCommand: [], unknownCommand: ['index'], unknownOption: ['build', '--bogus'],
      missingWorktree: ['build', '-w', join(directory, 'absent'), '-C', cache], notAGitRepository: ['build', '-w', notGit, '-C', cache],
      unknownCommit: ['build', '-w', repo, '-C', cache, '-c', 'f'.repeat(40)], malformedCommit: ['build', '-w', repo, '-C', cache, '-c', 'not-a-sha'],
      unknownFilter: ['build', '-w', repo, '-C', cache, '-f', 'everything'], nonNumericMemory: ['build', '-w', repo, '-C', cache, '-M', 'lots'],
      missingCacheDirectory: ['build', '-w', repo, '-C', join(directory, 'absent-cache')], cacheIsAFile: ['build', '-w', repo, '-C', fileAsCache] })) {
      const entriesBefore = (await readdir(cache)).sort().join();
      const run = spawnSync(crepectl, args, { encoding: 'utf8', timeout: 60000 });
      const json = (() => { try { return JSON.parse(run.stdout); } catch { return undefined; } })();
      crepeMalformed[name] = { status: run.status, signal: run.signal, reportedError: !!json?.error, success: json?.success ?? null,
        newCacheEntries: (await readdir(cache)).sort().join() !== entriesBefore, stderr: run.stderr.trim().split('\n').pop()?.replace(/\/[^\s"']+/g, '<path>').slice(0, 100) };
    }
    result.helpers.crepectl = { authority: crepeAuthority, malformed: crepeMalformed };
    // A malformed request must not build an index: non-zero exit, or an error in the stdout JSON (the helper reports some failures with exit 0).
    check('crepectl.malformed_no_index', Object.values(crepeMalformed).every(value => value.signal === null && (value.status !== 0 || value.reportedError) && !value.success && !value.newCacheEntries), crepeMalformed);
    // Process identity: the helper only builds for the parent named in CREPECTL_PARENT_PID.
    const wrongParent = spawnSync(crepectl, ['build', '-w', repo, '-C', cache], { encoding: 'utf8', timeout: 60000, env: { ...process.env, CREPECTL_PARENT_PID: '1' } });
    const rightParent = spawnSync('/bin/sh', ['-c', `CREPECTL_PARENT_PID=$$ "${crepectl}" build -w "${repo}" -C "${cache}"; exit $?`], { encoding: 'utf8', timeout: 60000 });
    result.helpers.crepectl.identity = { wrongParentStatus: wrongParent.status, wrongParentBuilt: /"success":\[/.test(wrongParent.stdout), rightParentStatus: rightParent.status, rightParentBuilt: /"success":\[/.test(rightParent.stdout) };
    check('crepectl.identity_parent_pid', wrongParent.status !== 0 && !result.helpers.crepectl.identity.wrongParentBuilt && rightParent.status === 0 && result.helpers.crepectl.identity.rightParentBuilt, result.helpers.crepectl.identity);
    // Cleanup: a build whose parent dies stops promptly; leftovers are recorded.
    const big = await createRepository(join(directory, 'crepe-big'), {}, async path => {
      for (let folder = 0; folder < 200; folder++) {
        await mkdir(join(path, `d${folder}`));
        await Promise.all(Array.from({ length: 200 }, (_, index) => writeFile(join(path, `d${folder}`, `f${index}.txt`), `line ${folder} needle ${index} alpha beta gamma\n`.repeat(40))));
      }
    });
    const killCache = join(directory, 'crepe-kill-cache'); await mkdir(killCache);
    const parent = spawn('/bin/sh', ['-c', `CREPECTL_PARENT_PID=$$ "${crepectl}" build -w "${big}" -C "${killCache}" >/dev/null 2>&1`], { stdio: 'ignore' });
    let running = [];
    for (let attempt = 0; attempt < 400 && !running.length; attempt++) { running = crepectlFor(big); if (!running.length) await delay(5); }
    await delay(300);
    const runningBeforeKill = crepectlFor(big).length;
    const killedAt = Date.now(); parent.kill('SIGKILL'); // the owned shell only
    let left = crepectlFor(big);
    while (left.length && Date.now() - killedAt < 10000) { await delay(20); left = crepectlFor(big); }
    const leftovers = (await readdir(killCache)).sort();
    result.helpers.crepectl.cleanup = { runningBeforeKill, exitedAfterParentKillMs: left.length ? null : Date.now() - killedAt, survivors: left.length,
      leftovers, stagingLeft: leftovers.filter(name => name.includes('.staging.')).length, spillLeft: leftovers.filter(name => name.startsWith('crepe-spill-')).length };
    check('crepectl.cleanup_parent_death', runningBeforeKill === 1 && left.length === 0 && result.helpers.crepectl.cleanup.exitedAfterParentKillMs <= 2000 &&
      result.helpers.crepectl.cleanup.stagingLeft === 0, result.helpers.crepectl.cleanup);
    result.observations.crepectl = { missingCacheDirectory: 'exit 0 with {"success":null,"error":…} on stdout', spillDirectoryAfterParentKill: result.helpers.crepectl.cleanup.spillLeft };

    // ----- file-service GrepClient (spawns the shipped crepectl) -----
    // Fixture clones go through git's transport (--no-local): the crepectl kill above can leave git maintenance
    // repacking `big`, and a hard-linking --local clone then fails on objects that move underneath it.
    const outsideToken = `OV_OUTSIDE_${process.pid}_${Date.now()}`;
    const outside = join(directory, 'grep-outside'); await mkdir(outside); await writeFile(join(outside, 'secret.txt'), `${outsideToken}\n`);
    const grepRepo = join(directory, 'grep-repo');
    execFileSync('git', ['clone', '-q', '--no-local', big, grepRepo]);
    await symlink(outside, join(grepRepo, 'linked-outside'));
    const secondRepo = join(directory, 'grep-second-repo');
    execFileSync('git', ['clone', '-q', '--no-local', big, secondRepo]);
    const grep = await runWorker(directory, 'grep', [grepRepo, outsideToken, 'contract', secondRepo]);
    const grepWindow = grep.trace?.['grep-authority'];
    assert.ok(grepWindow, 'file-service authority window missing from the trace');
    const grepWrites = (grepWindow?.writes ?? []).map(path => resolve(grepRepo, path)).filter(path => !deviceOrProc(path));
    result.helpers.fileService = { authority: { ...grep.authority, writesOutsideIndexCache: grepWrites.filter(path => !within([path], join(grepRepo, '.git/cursor'))),
      network: grepWindow?.network ?? [], execs: [...new Set(grepWindow?.execs ?? [])] }, malformed: grep.malformed, identity: grep.identity, cleanup: grep.cleanup, exit: grep.exit, invocations: grep.invocations };
    const fsAuthority = result.helpers.fileService.authority;
    check('file-service.authority', grep.authority?.indexReady && grep.authority.unknownRoot?.value === null && !grep.authority.parentInclude.length &&
      !grep.authority.linkedOutside.length && !fsAuthority.writesOutsideIndexCache.length && !fsAuthority.network.length &&
      fsAuthority.execs.every(path => path === helperPaths.crepectl), fsAuthority);
    const fm = grep.malformed ?? {};
    // Bad shapes are refused by the binding with a typed error; bad queries yield null with a reason or a normal result; the host survives all of them.
    check('file-service.malformed', grep.exit.code === 0 && Object.keys(fm).length === 9 && fm.constructorNoArguments?.code === 'InvalidArg' &&
      fm.constructorMissingPath?.code === 'InvalidArg' && fm.queryWrongTypes?.code === 'BooleanExpected' && fm.queryRootsNotArray?.code === 'InvalidArg' &&
      fm.invalidRegex?.value === null && fm.invalidRegex.reason === 'exec_failure' && ['object', null].includes(fm.hugePattern?.value) && !fm.hugePattern?.threw, fm);
    check('file-service.identity', grep.identity?.crepectlSeen && grep.identity.parentIsHost && grep.identity.parentPidVariable, grep.identity);
    // Host death: the crepectl child spawned by GrepClient stops when its host process is killed.
    const killRepo = join(directory, 'grep-kill-repo');
    execFileSync('git', ['clone', '-q', '--no-local', big, killRepo]);
    const killOutput = join(directory, 'grep-kill.json');
    const host = spawn(process.execPath, [fileURLToPath(import.meta.url), '--worker', 'grep', killOutput, killRepo, outsideToken, 'kill'], { stdio: 'ignore' });
    for (let attempt = 0; attempt < 600 && !existsSync(killOutput); attempt++) await delay(20);
    const hostChild = JSON.parse(await readFile(killOutput, 'utf8').catch(() => '{}'));
    const hostKilledAt = Date.now(); host.kill('SIGKILL'); // the owned worker only
    let orphaned = crepectlFor(killRepo);
    while (orphaned.length && Date.now() - hostKilledAt < 10000) { await delay(20); orphaned = crepectlFor(killRepo); }
    const crepeDirectory = join(killRepo, '.git/cursor/crepe');
    const hostLeftovers = existsSync(crepeDirectory) ? (await readdir(crepeDirectory)).sort() : [];
    result.helpers.fileService.cleanup = { ...grep.cleanup, workerExitLagMs: grep.exit.lagAfterDoneMs, hostKill: { crepectlRunning: hostChild.crepectl?.length ?? 0,
      stoppedAfterHostKillMs: orphaned.length ? null : Date.now() - hostKilledAt, survivors: orphaned.length, leftovers: hostLeftovers } };
    const cyclesRun = await runWorker(directory, 'grep-cycles', [grepRepo, '3'], { trace: false, env: { MALLOC_ARENA_MAX: '2' }, deadlineMs: 300000 });
    const defaultArenas = await runWorker(directory, 'grep-cycles', [grepRepo, '3'], { trace: false, deadlineMs: 300000, name: 'grep-cycles-default-arenas' });
    const [, after10, , after30] = cyclesRun.samples ?? [];
    const cycles = after10 && after30 ? { samples: cyclesRun.samples, threadGrowth10to30: after30.threads - after10.threads, rssGrowth10to30MiB: after30.rss - after10.rss } : undefined;
    result.helpers.fileService.cleanup.cycles = cycles;
    check('file-service.cleanup', grep.exit.code === 0 && grep.cleanup?.disposeTwice && !grep.cleanup.disposeTwice.threw && grep.cleanup.queryAfterDispose?.value === null &&
      grep.cleanup.disposeDuringBuild?.crepectlSeen && grep.cleanup.disposeDuringBuild.survivors === 0 &&
      cycles && cycles.threadGrowth10to30 <= 4 && cycles.rssGrowth10to30MiB <= 16 &&
      hostChild.crepectl?.length === 1 && orphaned.length === 0 && result.helpers.fileService.cleanup.hostKill.stoppedAfterHostKillMs <= 2000 &&
      !hostLeftovers.some(name => name.includes('.staging.')), result.helpers.fileService.cleanup);
    // Observation: does Node exit on its own after construct + dispose (no explicit exit)?
    const probe = spawnSync(process.execPath, ['-e', `const { GrepClient } = require(${JSON.stringify(helperPaths.fileService)});
      const events = { info() {}, error() {}, trace() {}, crepectlInvocation() {} };
      new GrepClient([{ path: ${JSON.stringify(grepRepo)}, excludes: [] }], { crepectlPath: ${JSON.stringify(helperPaths.crepectl)} }, events).dispose();`], { timeout: 5000 });
    result.observations.fileService = { defaultArenaRss: defaultArenas.samples, spillDirectoriesAfterHostKill: hostLeftovers.filter(name => name.startsWith('crepe-spill-')).length,
      nodeExitsNaturallyAfterDispose: probe.status === 0 && probe.signal === null, naturalExitProbe: { status: probe.status, signal: probe.signal } };

    // ----- cursor-proclist -----
    const proclist = await runWorker(directory, 'proclist');
    const procWindow = proclist.trace?.['proclist-authority'];
    assert.ok(procWindow, 'proclist authority window missing from the trace');
    result.helpers.proclist = { ...proclist, trace: { writes: procWindow?.writes.filter(path => !deviceOrProc(path)), network: procWindow?.network, execs: procWindow?.execs,
      readsOutsideProc: [...new Set(procWindow?.reads.filter(path => !/^\/proc\//.test(path)))] } };
    const ptrace = result.helpers.proclist.trace;
    check('cursor-proclist.authority', proclist.authority?.defaultScanOwnTreeOnly && !ptrace.writes?.length && !ptrace.network?.length && !ptrace.execs?.length, { ...proclist.authority, ...ptrace });
    check('cursor-proclist.malformed', proclist.exit.code === 0 && Object.keys(proclist.malformed ?? {}).length === 8, proclist.malformed);
    check('cursor-proclist.identity', proclist.identity?.pid && proclist.identity.ppid && basename(String(proclist.identity.name)) === 'node', proclist.identity);
    check('cursor-proclist.cleanup', proclist.cleanup && proclist.cleanup.threadsAfter <= proclist.cleanup.threadsBefore + 4 && proclist.cleanup.rssAfterMiB - proclist.cleanup.rssBeforeMiB < 64 &&
      proclist.exit.lagAfterDoneMs !== null && proclist.exit.lagAfterDoneMs < 5000, { ...proclist.cleanup, exit: proclist.exit });

    // ----- tree-chunk-napi -----
    const chunk = await runWorker(directory, 'treechunk');
    const chunkWindow = chunk.trace?.['treechunk-authority'];
    assert.ok(chunkWindow, 'tree-chunk authority window missing from the trace');
    result.helpers.treeChunk = { ...chunk, trace: { writes: chunkWindow?.writes.filter(path => !deviceOrProc(path)), reads: [...new Set(chunkWindow?.reads.filter(path => !deviceOrProc(path)))],
      network: chunkWindow?.network, execs: chunkWindow?.execs } };
    const ctrace = result.helpers.treeChunk.trace;
    check('tree-chunk-napi.authority', chunk.authority?.corpus?.length === 6 && chunk.authority.corpus.every(item => item.chunks > 0) && !ctrace.writes?.length &&
      !ctrace.reads?.length && !ctrace.network?.length && !ctrace.execs?.length, { ...chunk.authority, ...ctrace });
    check('tree-chunk-napi.malformed', chunk.exit.code === 0 && Object.keys(chunk.malformed ?? {}).length === 14, chunk.malformed);
    check('tree-chunk-napi.identity', chunk.identity?.childProcesses === 0, chunk.identity);
    check('tree-chunk-napi.cleanup', chunk.cleanup && chunk.cleanup.threadsAfter <= chunk.cleanup.threadsBefore + 4 && chunk.cleanup.rssAfterMiB - chunk.cleanup.rssBeforeMiB < 128 &&
      chunk.exit.lagAfterDoneMs !== null && chunk.exit.lagAfterDoneMs < 5000, { ...chunk.cleanup, exit: chunk.exit });
  } catch (error) {
    result.failure = error.stack;
  }
  result.success = !result.failure && Object.entries(result.checks).filter(([name]) => !name.includes(':')).every(([, value]) => value === true);
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  // Large fixtures are removed; the strace logs and result stay for the evidence.
  for (const name of ['crepe-big', 'grep-repo', 'grep-second-repo', 'grep-kill-repo']) await rm(join(directory, name), { recursive: true, force: true });
  console.log(JSON.stringify({ directory, success: result.success, checks: Object.fromEntries(Object.entries(result.checks).filter(([name]) => !name.includes(':'))),
    failure: result.failure?.split('\n')[0] }, null, 2));
  if (!result.success) process.exitCode = 1;
}

// Repeated construct/dispose (one client per workspace change). Run untraced:
// strace delays thread exit. MALLOC_ARENA_MAX=2 separates leaks from glibc
// per-thread arena retention, which plateaus (recorded as an observation).
async function grepCyclesWorker(output, repo, rounds) {
  const require = createRequire(import.meta.url), fs = require('node:fs');
  const { GrepClient } = require(helperPaths.fileService);
  const events = { info: () => {}, error: () => {}, trace: () => {}, crepectlInvocation: () => {} };
  const samples = [];
  for (let round = 0; round <= Number(rounds); round++) {
    if (round) for (let index = 0; index < 10; index++) { const client = new GrepClient([{ path: repo, excludes: [] }], { crepectlPath: helperPaths.crepectl }, events); await delay(100); client.dispose(); }
    await delay(round ? 2500 : 0); global.gc?.();
    samples.push({ clients: round * 10, threads: threads(), rss: rssMiB() });
  }
  fs.writeFileSync(output, JSON.stringify({ samples, arenaMax: process.env.MALLOC_ARENA_MAX ?? null, doneAt: Date.now() }));
  process.exit(0); // see grepWorker
}

if (process.argv[2] === '--worker') {
  const [, , , kind, output, ...rest] = process.argv;
  if (kind === 'proclist') await proclistWorker(output);
  else if (kind === 'treechunk') await treeChunkWorker(output);
  else if (kind === 'grep') await grepWorker(output, ...rest);
  else if (kind === 'grep-cycles') await grepCyclesWorker(output, ...rest);
  else throw Error(`Unknown worker ${kind}`);
} else if (import.meta.url === `file://${process.argv[1]}`) await main();
