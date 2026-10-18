// OV-704: the bundled computer-use extension has backends for macOS and Windows
// only. On every other platform its activation returned silently, so a Linux
// user had no record of why the Agent never offers computer-use tools. Log the
// reason at the owner, before any gate, sidecar manifest or download is read.
// The change is drift-guarded, idempotent and keeps a first backup.
import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

export const computerUseTarget = 'source/app/extensions/cursor-computer-use/dist/extension.js';
const marker = '/* OpenVision computer use unavailable explanation v1 */';
export const computerUseExplanation = 'Computer use is unavailable on this platform: OpenVision has no local ' +
  'computer-use helper for it, so the Agent is offered no computer-use tools and no helper is downloaded.';

export function explainComputerUseUnavailable(text) {
  if (text.includes(marker)) return text;
  const factories = [...text.matchAll(/const ([\w$]+) = \(function \(([\w$]+) = process\.platform\) \{\s*switch \(\2\) \{\s*case "darwin":\s*return [\w$]+;\s*case "win32":\s*return [\w$]+;\s*default:\s*return;\s*\}\s*\}\)\(\);\s*if \(void 0 === \1\) return;/g)];
  const loggers = [...text.matchAll(/function ([\w$]+)\(([\w$]+), ([\w$]+)\) \{\s*const [\w$]+ = `\[cursor-computer-use\] \$\{\3\}`;/g)];
  if (factories.length !== 1 || loggers.length !== 1) throw new Error('Computer use backend selection owner missing or ambiguous');
  const [factory] = factories, guard = `if (void 0 === ${factory[1]}) return;`;
  const at = factory.index + factory[0].length - guard.length;
  const explanation = `if (void 0 === ${factory[1]}) { ${marker} ${loggers[0][1]}("info", ${JSON.stringify(computerUseExplanation)} + " (" + process.platform + ")"); return; }`;
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
  console.log('Computer use: unavailable-platform explanation logged by the bundled extension');
}
