import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { digest } from './import-files.mjs';

const marker = '/* OpenVision approval-first Agent commands v2 */';

// A brand-new profile is migrated once to auto-run ("Auto-review", sandboxed on
// Linux/macOS). OpenVision keeps "Ask Every Time" until the user opts in, so
// Agent commands wait for approval on every platform.
// Linux/macOS also report Cursor's command sandbox as supported, which runs
// Agent shell commands in the sandbox without approval. Report it unsupported,
// as on Windows, so every command waits for an explicit Run.
function disableSandboxAutorun(text) {
  const effective = [...text.matchAll(/_setEffectiveSandboxSupport\((\w+)\) \{\n/g)];
  const initial = [...text.matchAll(/(\w+)\(this\.storageService, "sandboxSupported", (\w+)\)/g)];
  if (effective.length !== 1 || initial.length !== 1) throw new Error('Command sandbox support owner missing or ambiguous');
  text = text.slice(0, effective[0].index) + effective[0][0] +
    '    this._sandboxSupportedObs.set(!1, void 0);\n    return;\n' + text.slice(effective[0].index + effective[0][0].length);
  return text.replace(initial[0][0], `${initial[0][1]}(this.storageService, "sandboxSupported", !1)`);
}

export function keepApprovalDefault(text) {
  if (text.includes(marker)) return text;
  if (text.includes('/* OpenVision approval-first Agent commands v1 */'))
    return disableSandboxAutorun(text.replace('/* OpenVision approval-first Agent commands v1 */', marker));
  const matches = [...text.matchAll(/function (\w+)\(\{ initialMigrationVersion: (\w+), sandboxBackedAllowlistAvailable: (\w+), agentMode: (\w+) \}\) \{\n  if \(!\(\2 !== 0 \|\| !\w+\(\4\)\)\) return \3 \? "smart_auto_with_sandbox" : "smart_auto";\n\}/g)];
  if (matches.length !== 1) throw new Error('Agent auto-run default owner missing or ambiguous');
  const [match] = matches;
  return disableSandboxAutorun(text.slice(0, match.index) + `function ${match[1]}() {\n  ${marker}\n  return undefined;\n}` +
    text.slice(match.index + match[0].length));
}

const unavailableMarker = '/* OpenVision sandbox unavailable message v1 */';
const allowlistText = `"Only commands you've added to your allowlist will run automatically. Other commands will require user approval. Be cautious of potential prompt injection risks."`;
export const sandboxUnavailableText = 'The Agent command sandbox is unavailable in OpenVision. Only commands you have added to your allowlist run automatically; every other command waits for your approval. Be cautious of potential prompt injection risks.';

// The Auto-Run setting describes allowlist mode, the mode used when no sandbox
// is available. State plainly that the sandbox is unavailable, so approval
// prompts are not mistaken for a sandbox denial.
export function explainSandboxUnavailable(text) {
  if (text.includes(unavailableMarker)) return text;
  const count = text.split(allowlistText).length - 1;
  if (count !== 1) throw new Error(`Allowlist mode description missing or ambiguous (${count})`);
  return text.replace(allowlistText, `${unavailableMarker} ${JSON.stringify(sandboxUnavailableText)}`);
}

export async function installApprovalDefault(root) {
  for (const variant of ['desktop', 'glass']) {
    const relative = `source/app/out/vs/workbench/workbench.${variant}.main.js`;
    const before = await readFile(join(root, relative), 'utf8');
    const after = explainSandboxUnavailable(keepApprovalDefault(before));
    if (before === after) continue;
    const backup = join(root, 'backups/autorun', `${digest(before)}.js`);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(join(root, relative), backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(join(root, relative), after);
  }
  console.log('Agent commands ask for approval until the user enables auto-run');
}
