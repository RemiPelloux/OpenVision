// OV-704: the bundled computer-use extension has backends for macOS and Windows
// only. On every other platform its activation returned silently, so a Linux
// user had no record of why the Agent never offers computer-use tools. Explain
// the reason at the owner, before any gate, sidecar manifest or download is
// read: in the "Computer Use" log output channel (Output panel, and a file in
// the window's exthost log folder) and on the extension's own console logger.
// The change is drift-guarded, idempotent, upgrades v1 and keeps a first backup.
import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

export const computerUseTarget = 'source/app/extensions/cursor-computer-use/dist/extension.js';
const previousMarker = '/* OpenVision computer use unavailable explanation v1 */';
const marker = '/* OpenVision computer use unavailable explanation v2 */';
export const computerUseChannel = 'Computer Use';
export const computerUseExplanation = 'Computer use is unavailable on this platform: OpenVision has no local ' +
  'computer-use helper for it, so the Agent is offered no computer-use tools and no helper is downloaded.';

export function explainComputerUseUnavailable(text) {
  if (text.includes(marker)) return text;
  // v1 only logged to the console, which reaches the renderer console and no log file.
  const previous = [...text.matchAll(/if \(void 0 === ([\w$]+)\) \{ \/\* OpenVision computer use unavailable explanation v1 \*\/ [^\n]*?return; \}/g)];
  if (text.includes(previousMarker)) {
    if (previous.length !== 1) throw new Error('Computer use explanation v1 changed');
    text = text.slice(0, previous[0].index) + `if (void 0 === ${previous[0][1]}) return;` + text.slice(previous[0].index + previous[0][0].length);
  }
  const factories = [...text.matchAll(/async function [\w$]+\(([\w$]+)\) \{\s*const ([\w$]+) = \(function \(([\w$]+) = process\.platform\) \{\s*switch \(\3\) \{\s*case "darwin":\s*return [\w$]+;\s*case "win32":\s*return [\w$]+;\s*default:\s*return;\s*\}\s*\}\)\(\);\s*if \(void 0 === \2\) return;/g)];
  const loggers = [...text.matchAll(/function ([\w$]+)\(([\w$]+), ([\w$]+)\) \{\s*const [\w$]+ = `\[cursor-computer-use\] \$\{\3\}`;/g)];
  if (factories.length !== 1 || loggers.length !== 1) throw new Error('Computer use backend selection owner missing or ambiguous');
  const [factory] = factories, [, context, backend] = factory, guard = `if (void 0 === ${backend}) return;`;
  const at = factory.index + factory[0].length - guard.length;
  const gate = /\bawait ([\w$]+)\.cursor\.checkFeatureGate\(/.exec(text.slice(at, at + 400));
  if (!gate) throw new Error('Computer use extension API owner missing');
  const vscode = gate[1];
  const explanation = `if (void 0 === ${backend}) { ${marker}
        const openvisionMessage = ${JSON.stringify(computerUseExplanation)} + " (" + process.platform + ")";
        ${loggers[0][1]}("info", openvisionMessage);
        try {
          const openvisionChannel = ${vscode}.window.createOutputChannel(${JSON.stringify(computerUseChannel)}, { log: !0 });
          ${context}.subscriptions.push(openvisionChannel);
          openvisionChannel.info(openvisionMessage);
        } catch (openvisionError) { ${loggers[0][1]}("error", "explanation channel failed: " + String(openvisionError)); }
        return;
      }`;
  return text.slice(0, at) + explanation + text.slice(at + guard.length);
}

export async function installComputerUseExplanation(root) {
  const path = join(root, computerUseTarget);
  const before = await readFile(path, 'utf8');
  const after = explainComputerUseUnavailable(before);
  if (before === after) return;
  const backup = join(root, 'backups/computer-use', computerUseTarget);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
  console.log(`Computer use: unavailable-platform explanation in the "${computerUseChannel}" log channel`);
}
