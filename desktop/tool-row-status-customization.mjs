// OV-704: browser MCP tool rows in chat used a past-tense summary built from the
// call's arguments ("Navigated to <url>", "Clicked …") even when the call was
// refused or failed, because the browser branch of the tool-row display state
// ignored the row's error state. On error, show the failure instead; successful
// and running rows are unchanged. Other tools already use their error labels.
// Drift-guarded and idempotent for both workbench variants.
import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const marker = '/* OpenVision failed browser tool row v1 */';

export function failedBrowserToolRow(text) {
  if (text.includes(marker)) return text;
  const headers = [...text.matchAll(/function ([\w$]+)\(\{ vm: ([\w$]+), loading: ([\w$]+), hasError: ([\w$]+), nowMs: [^}]*\}\) \{\s*const [\w$]+ = [\w$]+\(\2\),\s*\{ details: [\w$]+ \} = [\w$]+\(\2\),\s*([\w$]+) = \4 \?\? \(!\3 && [\w$]+\(\2\)\),/g)];
  if (headers.length !== 1) throw new Error('Tool-row display state owner missing or ambiguous');
  const [header, , vm, , , failed] = headers[0];
  const branches = [...text.matchAll(/case "mcpToolCall": \{\s*const ([\w$]+) = [\w$]+\(([\w$]+)\),\s*([\w$]+) = !!\(\2\.providerIdentifier \?\? \2\.toolName \?\? \2\.rawName\);\s*if \(\3 && ([\w$]+)\(\1\)\) \{/g)];
  if (branches.length !== 1 || branches[0][2] !== vm || branches[0].index < headers[0].index ||
      branches[0].index - headers[0].index > 6000) throw new Error('Browser tool-row branch changed');
  const [branch, identity, , named, isBrowser] = branches[0];
  const condition = `if (${named} && ${isBrowser}(${identity})) {`;
  const replacement = `if (${named} && ${isBrowser}(${identity}) && ${failed}) { ${marker}
        return { action: "Failed", details: ${identity}.toolName || ${identity}.name || "browser tool" };
      }
      ${condition}`;
  const at = branches[0].index + branch.length - condition.length;
  return text.slice(0, at) + replacement + text.slice(at + condition.length);
}

export async function installToolRowStatus(root) {
  for (const variant of ['desktop', 'glass']) {
    const relative = `source/app/out/vs/workbench/workbench.${variant}.main.js`;
    const before = await readFile(join(root, relative), 'utf8');
    const after = failedBrowserToolRow(before);
    if (before === after) continue;
    const backup = join(root, 'backups/tool-row-status', relative);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(join(root, relative), backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(join(root, relative), after);
  }
  console.log('Tool rows: failed or refused browser tools show the failure');
}
