import { mkdir, readFile, writeFile, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { utilityProcessContract } from './utility-process-contract.mjs';
import { digest } from './import-files.mjs';

const marker = '/* OpenVision utility process listener ownership v1 */';
const field = 'this.openvisionProcessListeners';

function replaceCount(text, before, after, count) {
  if (text.split(before).length !== count + 1) throw Error(`Utility process contract changed: ${before}`);
  return text.replaceAll(before, after);
}

export function ownUtilityProcessListeners(text) {
  if (text.includes(marker)) return text;
  const { base, window, method } = utilityProcessContract(text);
  if (text.includes('openvisionProcessListeners') || !text.includes('(Te = $E)'))
    throw Error('Utility process disposable owner changed');
  const edits = [];
  for (const [owner, name, count] of [[base, 'registerListeners', 7], [base, 'once', 1], [window, 'registerWindowListeners', 2]]) {
    const node = method(owner, name), source = text.slice(node.start, node.end);
    edits.push({ start: node.start, end: node.end,
      value: replaceCount(source, 'this._register(', `${field}.add(`, count) });
  }
  const ended = method(base, 'onDidExitOrCrashOrKill');
  const terminalSource = text.slice(ended.start, ended.end);
  if (!terminalSource.includes('Hn.all.delete(this.processPid)') || !terminalSource.includes('(this.process = void 0)'))
    throw Error('Utility process termination identity changed');
  edits.push({ start: ended.value.body.end - 1, end: ended.value.body.end - 1,
    value: `${field}.clear();` });
  const kill = method(base, 'kill');
  const decision = kill.value.body.body.at(-1)?.expression?.expressions?.at(-1);
  const requested = decision?.consequent;
  if (decision?.type !== 'ConditionalExpression' || requested?.type !== 'SequenceExpression' ||
      requested.expressions.length !== 2 || text.slice(decision.test.start, decision.test.end) !== 'this.process.kill()' ||
      text.slice(requested.expressions[1].start, requested.expressions[1].end) !== 'this.onDidExitOrCrashOrKill()')
    throw Error('Utility process kill ownership changed');
  edits.push({ start: requested.start, end: requested.end,
    value: text.slice(requested.expressions[0].start, requested.expressions[0].end) });
  // A successful kill is a termination request. The exit/crash notification
  // releases listeners and identity; a failed kill retains the same owner too.
  edits.push({ start: base.body.start + 1, end: base.body.start + 1,
    value: `\nopenvisionProcessListeners = this._register(new Te());\n` });
  for (const edit of edits.sort((a, b) => b.start - a.start))
    text = text.slice(0, edit.start) + edit.value + text.slice(edit.end);
  return `${marker}\n${text}`;
}

// Electron's child-process-gone details carry no pid, so the owner matches its
// child by service name, and that name was the same for every run of one owner.
// A late "killed" event of the previous child then reached the next run's
// listener, which reported a crash and released the live replacement (its
// listeners and identity) while that child kept running. Each later run of an
// owner now gets its own service name; the first run keeps the upstream name.
const runMarker = '/* OpenVision utility process run identity v1 */';
const runName = 'const t = `${this.configuration.type}-${this.id}`';
export function isolateUtilityProcessRuns(text) {
  if (text.includes(runMarker)) return text;
  if (!text.includes(marker)) throw Error('Utility process run identity requires listener ownership');
  const { base, method } = utilityProcessContract(text);
  const start = method(base, 'doStart'), listeners = method(base, 'registerListeners');
  const startSource = text.slice(start.start, start.end), listenerSource = text.slice(listeners.start, listeners.end);
  const [, , service] = listeners.value.params.map(param => param.name);
  if (startSource.split(runName).length !== 2 || !/serviceName: t,/.test(startSource) ||
      !listeners.value.params[2] || listenerSource.split('"child-process-gone"').length !== 2 ||
      !listenerSource.includes(`.name === ${service}`) || text.includes('openvisionRuns'))
    throw Error('Utility process service identity changed');
  const at = start.start + startSource.indexOf(runName) + runName.length;
  text = text.slice(0, at) + ' + (this.openvisionRuns++ ? `-run${this.openvisionRuns}` : "")' + text.slice(at);
  const field = base.body.start + 1;
  return `${runMarker}\n${text.slice(0, field)}\nopenvisionRuns = 0;\n${text.slice(field)}`;
}

// OV-1004: Electron reports a killed utility child's "exit" before the app-level
// "child-process-gone" event. Exit releases every listener of the run, so the
// crash was never reported: a SIGKILLed shared process showed no "restart the
// application" prompt. On exit, the run's service name is now handed to one
// shared app listener (installed once, not per owner) that forwards a gone
// event for that name to the owner's onCrash. The hand-off ends when the event
// arrives, after a short grace, or when the owner's next run starts, so a late
// event never reaches a later run and no listener stays with the owner.
const crashMarker = '/* OpenVision utility process late crash v1 */';
const lateGrace = 5000;
export function forwardLateCrash(text) {
  if (text.includes(crashMarker)) return text;
  if (!text.includes(marker) || !text.includes(runMarker)) throw Error('Utility late crash requires listener ownership and run identity');
  const { base, method } = utilityProcessContract(text);
  const listeners = method(base, 'registerListeners'), source = text.slice(listeners.start, listeners.end);
  const [, , service] = listeners.value.params.map(param => param.name);
  const exit = /"exit",\s*\)\(\(([\w$]+)\) => \{[\s\S]*?this\._onExit\.fire\(\{ pid: this\.processPid, code: \1, signal: "unknown" \}\),\s*(?=this\.onDidExitOrCrashOrKill\(\))/g;
  const matches = [...source.matchAll(exit)];
  if (matches.length !== 1 || !service || !/\bHn = class extends z\b/.test(text) || !text.includes('MessageChannelMain as sUe, app as iUe'))
    throw Error('Utility process exit contract changed');
  // Before onExit fires: an exit listener may start the next run at once, and
  // that run must find (and end) this hand-off.
  const at = matches[0].index + matches[0][0].indexOf('this._onExit.fire(');
  let edited = source.slice(0, at) + `this.openvisionAwaitLateGone(${service}),\n                    ` + source.slice(at);
  const body = listeners.value.body.start + 1 - listeners.start;
  edited = edited.slice(0, body) + `\n${crashMarker}\nHn.openvisionLateGone?.delete(this.openvisionLateName);` + edited.slice(body);
  text = text.slice(0, listeners.start) + edited + text.slice(listeners.end);
  const helper = `
openvisionLateName = void 0;
openvisionAwaitLateGone(name) {
  const runs = Hn.openvisionLateGone ??= (iUe.on("child-process-gone", (event, details) => {
    const forward = details?.type === "Utility" ? Hn.openvisionLateGone.get(details.name) : void 0;
    if (forward) { Hn.openvisionLateGone.delete(details.name); forward(details); }
  }), new Map());
  const pid = this.processPid;
  const forward = details => { clearTimeout(timer); this._onCrash.fire({ pid, code: details.exitCode, reason: details.reason }); };
  const timer = setTimeout(() => { if (runs.get(name) === forward) runs.delete(name); }, ${lateGrace});
  timer.unref?.();
  this.openvisionLateName = name;
  runs.set(name, forward);
}
`;
  const fieldAt = base.body.start + 1;
  return text.slice(0, fieldAt) + helper + text.slice(fieldAt);
}

export async function installUtilityProcessOwnership(root) {
  const path = join(root, 'source/app/out/main.js'), before = await readFile(path, 'utf8');
  const after = forwardLateCrash(isolateUtilityProcessRuns(ownUtilityProcessListeners(before)));
  if (before === after) return;
  const backup = join(root, 'backups/utility-process', `${digest(before)}.js`);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
}
