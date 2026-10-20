// Runs native verifiers against the package built by `npm run build:desktop -- --upstream-host`
// (or --upstream-addons), one at a time, after checking every recorded substitution on disk.
import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readdir, readFile, writeFile } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { spawn, execFileSync } from 'node:child_process';
import { fileHash } from './import-files.mjs';
import { readUpstreamManifest, upstreamPackageName } from './upstream-host-build.mjs';
import { hostInputs, readFuseWire } from './upstream-host.mjs';

const root = resolve(import.meta.dirname, '..');
const option = name => { const index = process.argv.indexOf(name); return index < 0 ? undefined : process.argv[index + 1]; };
// Suites are npm script names. --critical runs the linux-critical subset of desktop/critical-suite.json.
const hostSuite = ['verify:welcome', 'verify:project', 'verify:development', 'verify:linux-secrets', 'verify:agent'];
const addonSuite = ['verify:development', 'verify:project:scale', 'test:provider-storage', 'verify:linux-secrets'];
const scripts = JSON.parse(await readFile(join(root, 'package.json'), 'utf8')).scripts;
const critical = JSON.parse(await readFile(join(root, 'desktop/critical-suite.json'), 'utf8')).entries
  .filter(entry => entry.subsets?.includes('linux-critical') && (entry.platforms ?? ['linux-x64']).includes('linux-x64')).map(entry => entry.script);
const packageDirectory = resolve(option('--package') ?? join(root, 'build/upstream-host', upstreamPackageName));
const manifest = await readUpstreamManifest(packageDirectory);
const addons = process.argv.includes('--addons');
const suite = option('--only')?.split(',') ?? (process.argv.includes('--critical') ? critical : addons ? addonSuite : hostSuite);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/upstream-host-'));
const result = { success: false, checkedAt: new Date().toISOString(), package: packageDirectory, suite,
  commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(), checks: {}, runs: [] };

async function checkSubstitutions() {
  const inputs = hostInputs();
  for (const entry of manifest.substitutions)
    assert.equal(await fileHash(join(packageDirectory, entry.path)), entry.sha256, `${entry.path} changed after substitution`);
  result.checks.substitutions = manifest.substitutions.length;
  const executable = manifest.substitutions.find(entry => entry.path === 'electron-host/openvision');
  assert.equal(executable.origin, `${inputs.electron.url}#electron`, 'Host executable must come from the pinned Electron release');
  result.checks.executable_sha256 = executable.sha256;
  const fuses = readFuseWire(await readFile(join(packageDirectory, 'electron-host/openvision')));
  assert.equal(fuses.wire, manifest.fuses.wire, 'Packaged fuses must match the recorded wire');
  result.checks.fuses = fuses.fuses;
  if (addons) assert.ok(manifest.substitutions.some(entry => entry.status === 'rebuilt'), '--addons needs a package built with --upstream-addons');
}

function runOne(name) {
  const script = /^node (desktop\/\S+\.mjs)$/.exec(scripts[name] ?? '')?.[1];
  assert.ok(name.startsWith('test:') || script, `${name} is not a node desktop verifier script`);
  // The package verifier re-packages; give it the staged upstream native host instead of a package.
  const target = name === 'verify:package:linux' ? ['--native-host', join(dirname(packageDirectory), 'native-host')] : ['--portable', packageDirectory];
  const command = name.startsWith('test:') ? ['npm', ['run', name]] : [process.execPath, [join(root, script), ...target]];
  return new Promise(resolvePromise => {
    const started = Date.now();
    const log = createWriteStream(join(directory, `${name.replaceAll(':', '-')}.log`));
    const child = spawn(command[0], command[1], { cwd: root, stdio: ['ignore', 'pipe', 'pipe'] });
    child.stdout.pipe(log, { end: false }); child.stderr.pipe(log, { end: false });
    child.once('close', (code, signal) => { log.end(); resolvePromise({ name, code, signal, milliseconds: Date.now() - started }); });
  });
}

async function newRuns(before) {
  return (await readdir(join(root, 'logs'))).filter(entry => !before.has(entry) && entry !== directory.split('/').pop());
}

try {
  await checkSubstitutions();
  for (const name of suite) {
    const before = new Set(await readdir(join(root, 'logs')));
    const run = await runOne(name);
    run.logs = await newRuns(before);
    for (const entry of run.logs) {
      const report = await readFile(join(root, 'logs', entry, 'result.json'), 'utf8').then(JSON.parse, () => undefined);
      if (report?.nativeMain?.executable) run.nativeExecutable = report.nativeMain.executable;
      if (report?.nativeMain?.versions) run.versions = { electron: report.nativeMain.versions.electron, node: report.nativeMain.versions.node,
        chrome: report.nativeMain.versions.chrome, modules: report.nativeMain.versions.modules };
    }
    if (run.nativeExecutable) assert.equal(run.nativeExecutable, join(packageDirectory, 'electron-host/openvision'), `${name} ran a different host`);
    result.runs.push(run);
    console.log(`${name}: exit ${run.code ?? run.signal} (${run.milliseconds} ms) ${run.logs.join(' ')}`);
  }
  await checkSubstitutions();
  result.success = result.runs.every(run => run.code === 0);
  if (!result.success) process.exitCode = 1;
} catch (error) {
  result.error = error.stack; process.exitCode = 1;
} finally {
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2) + '\n');
  console.log(JSON.stringify({ success: result.success, result: join(directory, 'result.json'), error: result.error }, null, 2));
}
