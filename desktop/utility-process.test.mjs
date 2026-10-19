import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, readdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { parseJavaScript } from '../tooling/dependencies.mjs';
import { ownUtilityProcessListeners, isolateUtilityProcessRuns, installUtilityProcessOwnership } from './utility-process-customization.mjs';

// An authored contract fixture; native acceptance executes the actual owner,
// Electron forks and window lifecycle in verify-utility-listeners.mjs.
const registrations = count => Array(count).fill('this._register(subscribe());').join('\n');
const fixture = `let Te, Hn, fp; (Te = $E);
const initialize = { "utilityProcess.js"() {
  Hn = class extends z {
    doStart(e) {
      const t = \`\${this.configuration.type}-\${this.id}\`, n = "bootstrap-fork.js";
      return (this.process = fork(n, [], { serviceName: t, stdio: "pipe" })), this.registerListeners(this.process, e, t), !0;
    }
    registerListeners(e, t, n) { ${registrations(6)}
      this._register(gone(app, "child-process-gone")(({ details: r }) => { r.type === "Utility" && r.name === n && this.crash(); })); }
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
    fixture.replace(registrations(6), registrations(5)), fixture.replace('this.process.kill()', 'this.other.kill()'),
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

test('gives every later run of one owner its own service name; first run keeps the upstream name', () => {
  const output = isolateUtilityProcessRuns(ownUtilityProcessListeners(fixture));
  parseJavaScript(output, { ecmaVersion: 'latest' });
  assert.equal(isolateUtilityProcessRuns(output), output);
  const names = [];
  const owner = { configuration: { type: 'fileWatcher' }, id: 3, openvisionRuns: 0 };
  const expression = /const t = (`\$\{this\.configuration\.type\}-\$\{this\.id\}` \+ \(this\.openvisionRuns\+\+ \? `-run\$\{this\.openvisionRuns\}` : ""\))/.exec(output)[1];
  for (let run = 0; run < 3; run++) names.push(Function(`return ${expression};`).call(owner));
  assert.deepEqual(names, ['fileWatcher-3', 'fileWatcher-3-run2', 'fileWatcher-3-run3']);
  assert.ok(output.includes('openvisionRuns = 0;'));
});

test('run identity refuses a drifted service-name match or a missing listener ownership change', () => {
  assert.throws(() => isolateUtilityProcessRuns(fixture), /requires listener ownership/);
  for (const input of [fixture.replace('r.name === n', 'r.serviceName === n'), fixture.replace('serviceName: t,', 'serviceName: n,'),
    fixture.replace('`${this.configuration.type}-${this.id}`', '`${this.configuration.type}`')])
    assert.throws(() => isolateUtilityProcessRuns(ownUtilityProcessListeners(input)), /service identity changed/);
});
