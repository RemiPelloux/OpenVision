import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdir, mkdtemp, readFile, writeFile, symlink } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { _electron } from '../tooling/browser.mjs';
import { createRuntimeOverlay } from './verification-runtime-overlay.mjs';
import { exposeUtilityProcessOwners } from './utility-process-contract.mjs';
import { probeUtilityListeners } from './utility-listener-probe.mjs';
import { memorySample } from './native-baseline.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { fileHash } from './import-files.mjs';

const root = resolve(import.meta.dirname, '..');
const directory = await mkdtemp(join(root, 'logs/utility-listeners-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify(verificationSettings));
const relative = 'resources/app/out/main.js', original = join(root, 'electron-host', relative);
const originalHash = await fileHash(original);
const baseline = process.argv.indexOf('--baseline-main');
const input = baseline < 0 ? original : resolve(process.argv[baseline + 1]);
const control = baseline >= 0;
const overlay = await createRuntimeOverlay(join(root, 'electron-host'), join(directory, 'host'),
  new Map([[relative, exposeUtilityProcessOwners(await readFile(input, 'utf8'))]]));
await symlink(join(root, 'desktop'), join(directory, 'host/desktop'), 'junction');
await writeFile(join(directory, 'host/resources/app/out/openvision-utility-probe.js'), `
  process.stdout.write('probe stdout\\n'); process.stderr.write('probe stderr\\n');
  const timer = setInterval(() => {}, 1000);
  process.parentPort.on('message', ({ data }) => {
    if (data === 'exit') { clearInterval(timer); process.exit(0); }
  });
  process.parentPort.postMessage('ready');
`, { flag: 'wx' });
const result = { directory, control, success: false, checks: {}, identity: { originalHash, input,
  inputHash: await fileHash(input), overlay: overlay.records,
  commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  verifierHash: await fileHash(join(root, 'desktop/verify-utility-listeners.mjs')),
  probeHash: await fileHash(join(root, 'desktop/utility-listener-probe.mjs')) },
  scope: 'Native Electron utility owner and real forks in a disposable overlay; no AI inference or whole-app RAM claim.' };
let app;
try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: overlay.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(profile, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', project] });
  result.stderr = '';
  app.process().stderr?.on('data', chunk => { result.stderr = (result.stderr + chunk).slice(-32768); });
  const page = await app.firstWindow();
  await page.locator('.openvision-project-home-button').waitFor({ timeout: 60000 });
  result.memory = [await memorySample(app, 'before cycles')];
  result.samples = [];
  for (const windowBound of [false, true])
    result.samples.push(await app.evaluate(probeUtilityListeners, { control, windowBound }));
  result.memory.push(await memorySample(app, 'after cycles'));
  await page.screenshot({ path: join(directory, 'native.png') });
  for (const sample of result.samples) {
    assert.equal(sample.cycles.length, 16);
    assert.ok(sample.cycles.every(cycle => cycle.code === 0 && cycle.ownerCleared));
    assert.equal(sample.afterDispose, 0);
    if (control) assert.equal(sample.cycles.at(-1).afterExit, 16, 'Baseline must reproduce listener accumulation');
    else {
      assert.ok(sample.cycles.every(cycle => cycle.active === 1 && cycle.afterExit === 0 &&
        cycle.childListeners.length === 0 && cycle.stdoutListeners === 0 && cycle.stderrListeners === 0 &&
        cycle.reloadListeners === 0 && cycle.windowClosedListeners === 0));
      for (const [name, value] of Object.entries(sample.kill))
        if (!['exit', 'windowCloseExit', 'listenersAfterExit'].includes(name)) assert.equal(value, true, name);
      assert.equal(sample.kill.listenersAfterExit, 0);
    }
  }
  result.checks.realForkExitCycles = true;
  result.checks[control ? 'originalLeakReproduced' : 'listenersReleasedAndKillOwnershipPreserved'] = true;
  result.success = true;
} catch (error) { result.failure = error.stack; }
finally {
  if (app) {
    const child = app.process();
    try { await app.close(); result.exitCode = child.exitCode; assert.equal(child.exitCode, 0); }
    catch (error) { result.cleanupError = error.stack; result.success = false; }
  }
  assert.equal(await fileHash(original), originalHash);
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2)); if (!result.success) process.exitCode = 1;
}
