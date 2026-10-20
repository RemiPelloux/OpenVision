// OV-704: the bundled browser-automation MCP server (cursor-ide-browser) stays
// unavailable to OpenVision local profiles. Cursor's MCPService allows it only
// for a known non-enterprise account or an enterprise whose admin enabled browser
// features; local profiles have no membership answer, so it is blocked. The Agent
// and Settings then reported "Server is blocked by team admin", which is false
// for a profile with no team. Keep the block and say why instead. The reconnect
// path that recognizes an admin block treats this message the same way.
// Drift-guarded and idempotent for both workbench variants.
import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const marker = '/* OpenVision local browser server explanation v1 */';
export const browserUnavailableMessage = 'Browser automation is unavailable in OpenVision local profiles: Cursor ' +
  'allows its built-in browser server only through Cursor account and team settings, which a local profile does not have.';

export function explainLocalBrowserBlock(text, variant) {
  if (text.includes(marker)) return text;
  const flag = { desktop: 'zc', glass: 'Rl' }[variant];
  if (!flag) throw new Error(`Unknown workbench variant: ${variant}`);
  if (!new RegExp(`\\b${flag}\\.localMode\\b`).test(text)) throw new Error('OpenVision local-mode flag missing');
  const owners = [...text.matchAll(/getMcpAdminBlockMessage\(([\w$]+)\) \{\s*const ([\w$]+) = this\.adminSettingsService\.getCached\(\)\.allowedMcpConfiguration;\s*if \(\2\?\.disableAll === !0\) return ([\w$]+);\s*const ([\w$]+) = \1\.identifier === [\w$]+ \|\| \1\.identifier === [\w$]+,\s*([\w$]+) = this\.reactiveStorageService\.applicationUserPersistentStorage\.isEnterprise;\s*if \(\4\)\s*return \5 !== !1\s*\? this\.adminSettingsService\.getBrowserFeaturesForCurrentIdentity\(\) === !0\s*\? void 0\s*: \3\s*: void 0;/g)];
  if (owners.length !== 1) throw new Error('Browser MCP admin block owner missing or ambiguous');
  const [owner, , , blocked, , enterprise] = owners[0];
  const reconnects = [...text.matchAll(new RegExp(`\\(([\\w$]+)\\.error === ${blocked.replace('$', '\\$')} \\|\\| \\1\\.error === ([\\w$]+)\\)`, 'g'))];
  if (reconnects.length !== 1) throw new Error('MCP blocked-server reconnect owner missing or ambiguous');
  const message = JSON.stringify(browserUnavailableMessage);
  const fallback = `: ${blocked}\n                : void 0;`;
  const at = owners[0].index + owner.lastIndexOf(fallback);
  if (owner.lastIndexOf(fallback) < 0) throw new Error('Browser MCP admin block result changed');
  // Same block; only the reason differs when a local profile has no membership answer.
  const replaced = `: (${marker} ${enterprise} === void 0 && ${flag}.localMode ? ${message} : ${blocked})\n                : void 0;`;
  text = text.slice(0, at) + replaced + text.slice(at + fallback.length);
  const [reconnect, status, network] = [...text.matchAll(new RegExp(`\\(([\\w$]+)\\.error === ${blocked.replace('$', '\\$')} \\|\\| \\1\\.error === ([\\w$]+)\\)`, 'g'))][0];
  const index = text.indexOf(reconnect);
  return text.slice(0, index) + `(${status}.error === ${blocked} || ${status}.error === ${network} || ${status}.error === ${message})` +
    text.slice(index + reconnect.length);
}

export async function installBrowserAutomationExplanation(root) {
  for (const variant of ['desktop', 'glass']) {
    const relative = `source/app/out/vs/workbench/workbench.${variant}.main.js`;
    const before = await readFile(join(root, relative), 'utf8');
    const after = explainLocalBrowserBlock(before, variant);
    if (before === after) continue;
    const backup = join(root, 'backups/browser-automation', relative);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(join(root, relative), backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(join(root, relative), after);
  }
  console.log('Browser automation: local profiles see why the bundled browser server is unavailable');
}
