import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';

// OV-1001: a model that repeats itself trips the Agent's single-message loop
// detector. The recovered step already applies its own mitigation: one retry
// with a loop reminder, then it throws AgentLoopError ("looped_again"). The
// local turn retry classifier (TEe) treated that error as transient, so the
// whole step was repeated up to maxRetries (10) times with backoff, sending the
// same or a growing request again each time. Loop exhaustion is model
// behaviour, not a transport fault: end the turn instead of repeating paid
// inference. Provider failures, transport retries and the built-in single
// reminder retry are unchanged.
const marker = '/* OpenVision loop exhaustion is terminal for turn retries v2 */';
// Unpublished first local build: an inline check without the shared helper.
const previous = /\n {10}\/\* OpenVision loop exhaustion is terminal for turn retries v1 \*\/\n.*\n.*return false;/;
export const loopRetryOwner = { name: 'TEe', relative: 'extensions/cursor-agent-exec/dist/main.js' };

export function isSingleMessageLoopError(error) {
  for (let value = error, depth = 0; value && typeof value === 'object' && depth < 16; value = value.cause, depth++)
    if (value.name === 'AgentLoopError' && value.loopType === 'singleMessage') return true;
  return false;
}
// The bundle receives exactly this function (renamed), so tests run what ships.
const helper = isSingleMessageLoopError.toString().replace('function isSingleMessageLoopError(', 'function openvisionSingleMessageLoop(');

export function terminalLoopRetries(text) {
  text = text.replace(previous, '');
  const anchor = `function ${loopRetryOwner.name}(e) {`, start = text.indexOf(anchor);
  if (start < 0 || text.indexOf(anchor, start + anchor.length) !== -1)
    throw Error(`Agent turn retry classifier missing or ambiguous: ${loopRetryOwner.name}`);
  const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  const source = text.slice(node.start, node.end);
  if (source.includes(marker)) return text;
  // Contract: the classifier owns the 4xx non-retryable set and the AgentLoopError
  // producer still throws after its one reminder retry.
  if (!source.includes('CEe.has(t.statusCode)') || !text.includes('"Single-message loop detected again after retry"') ||
    !text.includes('(this.name = "AgentLoopError")'))
    throw Error('Agent loop retry contract changed');
  const position = node.start + anchor.length;
  return `${helper};\n` + text.slice(0, position) + `\n          ${marker}\n          if (openvisionSingleMessageLoop(e)) return false;` + text.slice(position);
}

// The terminal loop failure keeps an explicit recovery action: it is reported
// through the same local error type as provider failures, so the workbench
// shows Try again (one explicit request) and keeps the failure across restart.
const recoveryMarker = '/* OpenVision loop exhaustion offers explicit Try again v1 */';
export const loopGuidance = 'The model kept repeating the same text, so OpenVision stopped this response after one corrective retry instead of ' +
  'sending it again automatically. Received output is kept. Choose Try again, rephrase the request, or choose another model.';
const conversion = /return ([^;\n]*)\? new ([\w$]+)\(i, l\) : new ([\w$]+)\(i, l\);/g;

export function loopFailureRecovery(text) {
  if (text.includes(recoveryMarker)) return text;
  const matches = [...text.matchAll(conversion)];
  if (matches.length !== 1) throw Error('Local agent error conversion changed');
  const [, , local, nonRetriable] = matches[0];
  if (!new RegExp(`class ${local.replace('$', '\\$')} extends ${nonRetriable.replace('$', '\\$')} \\{\\s+get name\\(\\) \\{\\s+return "LocalProviderError";`).test(text))
    throw Error('Local provider error type changed');
  const check = `${recoveryMarker}
                        if (openvisionSingleMessageLoop(e)) {
                          const guidance = ${JSON.stringify(loopGuidance)};
                          return new ${local}(\`\${guidance}\\n\\n\${i}\`, { ...l, displayInfo: { ...l.displayInfo, detail: \`\${guidance}\\n\\n\${l.displayInfo.detail}\` } });
                        }
                        `;
  return text.slice(0, matches[0].index) + check + text.slice(matches[0].index);
}

export async function installLoopRetryPolicy(root) {
  const path = join(root, 'source/app', loopRetryOwner.relative);
  const before = await readFile(path, 'utf8'), after = loopFailureRecovery(terminalLoopRetries(before));
  if (before === after) return;
  const backup = join(root, 'backups/agent-loop-retry', loopRetryOwner.relative);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
}
