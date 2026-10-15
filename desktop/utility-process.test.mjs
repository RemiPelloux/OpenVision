import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, readdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { parseJavaScript } from '../tooling/dependencies.mjs';
import { ownUtilityProcessListeners, installUtilityProcessOwnership } from './utility-process-customization.mjs';

// An authored contract fixture; native acceptance executes the actual owner,
// Electron forks and window lifecycle in verify-utility-listeners.mjs.
const registrations = count => Array(count).fill('this._register(subscribe());').join('\n');
const fixture = `let Te, Hn, fp; (Te = $E);
const initialize = { "utilityProcess.js"() {
  Hn = class extends z {
    registerListeners(e, t, n) { ${registrations(7)} }
    once(e, t) { ${registrations(1)} }
    kill() {
      if (!this.process) return;
      (this.log("attempting kill", Qe.Info), this.process.kill()
        ? (this.log("killed", Qe.Info), this.onDidExitOrCrashOrKill()) : this.log("failed", Qe.Warning));
    }
    onDidExitOrCrashOrKill() {
      (typeof this.processPid == "number" && Hn.all.delete(this.processPid), (this.process = void 0));
    }
  };
  fp = class extends Hn { registerWindowListeners(e, t) { ${registrations(2)} } };
} };`;

test('scopes the selected process/window listeners; accepts formatting and is idempotent', () => {
  for (const input of [fixture, fixture.replaceAll('\n', ' ')]) {
    const output = ownUtilityProcessListeners(input);
    parseJavaScript(output, { ecmaVersion: 'latest' });
    assert.equal(ownUtilityProcessListeners(output), output);
    assert.equal(output.split('this.openvisionProcessListeners.add(').length, 11);
    assert.ok(output.includes('this.openvisionProcessListeners.clear();'));
    assert.ok(!output.includes('this.onDidExitOrCrashOrKill()'));
  }
});

test('rejects missing/ambiguous modules and drifted resource or kill contracts', () => {
  for (const input of [fixture.replace('utilityProcess.js', 'other.js'), fixture + fixture,
    fixture.replace(registrations(7), registrations(6)), fixture.replace('this.process.kill()', 'this.other.kill()'),
    fixture.replace('Hn.all.delete(this.processPid)', 'Hn.all.delete(otherPid)'), fixture.replace('(Te = $E)', '(Te = Other)')])
    assert.throws(() => ownUtilityProcessListeners(input), /Utility process/);
});

test('installer keeps an immutable backup and a second run performs no additional migration', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'openvision-utility-'));
  try {
    const path = join(directory, 'source/app/out/main.js');
    await mkdir(join(directory, 'source/app/out'), { recursive: true }); await writeFile(path, fixture);
    await installUtilityProcessOwnership(directory); const first = await readFile(path, 'utf8');
    await installUtilityProcessOwnership(directory); assert.equal(await readFile(path, 'utf8'), first);
    const backups = await readdir(join(directory, 'backups/utility-process'));
    assert.equal(backups.length, 1);
    assert.equal(await readFile(join(directory, 'backups/utility-process', backups[0]), 'utf8'), fixture);
  } finally { await rm(directory, { recursive: true, force: true }); }
});
