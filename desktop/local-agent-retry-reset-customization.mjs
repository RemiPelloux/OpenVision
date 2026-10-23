import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';

// Local (custom provider) Agent turns run their retry loop in the extension host
// (`[local_agent_retries]`). Before each replay the loop awaits
// `runOptions.onRetryStarting`, the hook through which the hosted path resets the
// turn in the renderer (`replayCurrentAction`: delete every bubble after the last
// human message). The local run options never supplied it: the renderer's run
// options hold the hook, but only a fixed set of callbacks crosses to the
// extension host. A reply shown by an attempt that then failed (for example on
// SQLITE_FULL) was therefore appended to by the replay. Owner decision (option A,
// 23 October 2026): route the hook to the renderer so every replay starts from a
// clean turn, exactly as on the hosted path; auto-retry is kept.
//
// The route: Agent exec run options -> extension-host callback object ->
// main-thread RPC method -> the renderer's local-run callbacks -> the turn's
// `onRetryStarting`. Only plain values cross (attempt, action case, resume flag,
// attempt request id); the renderer adds the turn's conversation state.
export const localRetryResetMarker = '/* OpenVision local Agent retry reset v1 */';
export const localRetryResetTargets = {
  agentExec: 'extensions/cursor-agent-exec/dist/main.js',
  extensionHost: 'out/vs/workbench/api/node/extensionHostProcess.js',
  workbench: 'out/vs/workbench/workbench.desktop.main.js',
};

function replaceOnce(text, before, after, label) {
  if (text.split(before).length !== 2) throw new Error(`Local Agent retry reset contract changed: ${label}`);
  return text.replace(before, after);
}

// 1. Agent exec: the local run options gain the hook, backed by the callback object.
const runOptions = `(b = {
              ...t.runOptions,
              requestedModel: t.runOptions.requestedModel`;
export function resetLocalRetriesInAgentExec(text) {
  if (text.includes(localRetryResetMarker)) return text;
  const start = text.indexOf('async runLocalAgent(t, r, n) {');
  if (start < 0 || text.indexOf('async runLocalAgent(t, r, n) {', start + 1) >= 0)
    throw new Error('Local Agent retry reset contract changed: runLocalAgent');
  const body = text.slice(start, text.indexOf('async runLocalInference(e) {', start));
  if (!body.includes('await r.handleCheckpoint(t.toBinary());') || !body.includes('await o.run(') ||
      body.split(runOptions).length !== 2 || !text.includes('r.call(b, R, {\n                          actionCase: A.action.case,'))
    throw new Error('Local Agent retry reset contract changed: local run options');
  return text.slice(0, start) + body.replace(runOptions, `(b = {
              ...t.runOptions,
              ${localRetryResetMarker}
              onRetryStarting:
                "function" == typeof r.retryStarting
                  ? (e, t) =>
                      r.retryStarting(e, {
                        actionCase: t?.actionCase,
                        isResume: t?.isResume === !0,
                        attemptRequestId: t?.attemptRequestId,
                      })
                  : void 0,
              requestedModel: t.runOptions.requestedModel`) + text.slice(start + body.length);
}

// 2. Extension host: the callback object forwards the hook to the main thread.
const upload = `uploadPromptQualitySnapshot: (A, w) =>
          this._proxy.$localAgentUploadPromptQualitySnapshot(n, A, w),`;
export function resetLocalRetriesInExtensionHost(text) {
  if (text.includes(localRetryResetMarker)) return text;
  if (!text.includes('async $startLocalAgentRun(n, a, t, s) {') || !text.includes('const c = l.runLocalAgent;'))
    throw new Error('Local Agent retry reset contract changed: $startLocalAgentRun');
  return replaceOnce(text, upload, `${upload}
        ${localRetryResetMarker}
        retryStarting: (A, w) => this._proxy.$localAgentRetryStarting(n, A, w),`, 'extension-host callbacks');
}

// 3. Main thread: the RPC method reaches the run's renderer callbacks.
const mainThread = `  async $localAgentUploadPromptQualitySnapshot(e, t, n) {
    const i = this._getLocalRunCallbacks(e);
    if (i === void 0) throw new Error(\`Local agent run \${e} not found\`);
    await i.uploadPromptQualitySnapshot(t, n);
  }`;
const mainThreadReset = `${mainThread}
  ${localRetryResetMarker}
  async $localAgentRetryStarting(e, t, n) {
    const i = this._getLocalRunCallbacks(e);
    if (i === void 0) throw new Error(\`Local agent run \${e} not found\`);
    await i.retryStarting?.(t, n);
  }`;
// 4. Renderer: the local run's callbacks call the turn's onRetryStarting, which
// resets the turn (replayCurrentAction) unless the attempt resumes a checkpoint.
const checkpoint = `handleCheckpoint: async (y) => {
                    await o.handleCheckpoint(e, dg.fromBinary(y.buffer));
                  },`;
const checkpointReset = `${checkpoint}
                  ${localRetryResetMarker}
                  retryStarting: async (y, k) => {
                    await l.onRetryStarting?.(y, { ...k, conversationState: t });
                  },`;
export function resetLocalRetriesInWorkbench(text) {
  if (text.includes(localRetryResetMarker)) {
    if (text.split(localRetryResetMarker).length !== 3) throw new Error('Local Agent retry reset marker is ambiguous');
    return text;
  }
  const start = text.indexOf('async runLocalAgentInExtensionHost(e, t, n, i, r, s, o, a, c, l) {');
  const owner = start < 0 ? undefined : parseExpressionAt(`class{${text.slice(start)}`, 0, { ecmaVersion: 'latest' }).body.body[0];
  const source = owner && text.slice(start, start + owner.end - 'class{'.length);
  if (!source || source.split(checkpoint).length !== 2 || !source.includes('runOptions: {\n                    conversationId: l.conversationId,') ||
      !text.includes('onRetryStarting: He,') || !text.includes('(Te(), !ht.isResume && (await De({ case: "replayCurrentAction" })));'))
    throw new Error('Local Agent retry reset contract changed: renderer local-run callbacks');
  text = text.slice(0, start) + source.replace(checkpoint, checkpointReset) + text.slice(start + source.length);
  return replaceOnce(text, mainThread, mainThreadReset, 'main-thread local-run callbacks');
}

const transforms = { agentExec: resetLocalRetriesInAgentExec, extensionHost: resetLocalRetriesInExtensionHost,
  workbench: resetLocalRetriesInWorkbench };

export async function installLocalRetryReset(root) {
  for (const [id, relative] of Object.entries(localRetryResetTargets)) {
    const path = join(root, 'source/app', relative);
    const before = await readFile(path, 'utf8'), after = transforms[id](before);
    if (before === after) continue;
    const backup = join(root, 'backups/local-retry-reset', relative);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  }
}
