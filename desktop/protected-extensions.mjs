import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { digest } from './import-files.mjs';
import { integrityTable } from './extension-integrity.mjs';

// OV-702: bundled extensions listed in the extension host's integrity table are
// protected. Upstream lets a user-installed extension with the same identifier
// and an equal or higher version replace a builtin one (and inherit isBuiltin).
// For protected extensions that silently disabled the bundled copy, and a copy
// with the original files plus a different entry point passed the file-hash
// check. OpenVision refuses such installs and never lets a user or workspace
// copy displace a protected bundled extension at scan time. VSIX installs also
// require a manifest identity before anything is extracted or registered.
export const marker = '/* OpenVision protected extensions v1 */';

export function protectedIds(hostText) {
  const ids = Object.keys(integrityTable(hostText).value).map(id => id.toLowerCase()).sort();
  if (!ids.length || ids.some(id => !/^[a-z0-9-]+\.[a-z0-9-]+$/.test(id))) throw new Error('Protected extension identifiers are invalid');
  return ids;
}

function unique(text, pattern, label) {
  const matches = [...text.matchAll(pattern)];
  if (matches.length !== 1) throw new Error(`Protected extension ${label} contract missing or ambiguous (${matches.length})`);
  return matches[0];
}
const literal = ids => JSON.stringify(ids);
const installedMarker = (text, ids) => {
  const count = text.split(marker).length - 1;
  if (!count) return false;
  if (!text.includes(literal(ids))) throw new Error('Protected extension list changed; rebuild from a clean source');
  return true;
};

// Shared process and CLI: ExtensionManagementService.install(vsix).
export function guardProtectedInstall(text, ids) {
  if (installedMarker(text, ids)) return text;
  const match = unique(text, /(const \{ location: [\w$]+, cleanup: [\w$]+ \} = await this\.downloadVsix\([\w$]+\);\s*try \{\s*const ([\w$]+) = await [\w$]+\([\w$]+\([\w$]+\.fsPath\)\),\s*([\w$]+) = [\w$]+\(\2\.publisher, \2\.name\);)/g, 'VSIX install');
  const manifest = match[2], id = match[3], end = match.index + match[0].length;
  // A manifest without an identity used to be extracted and registered as
  // undefined_publisher.undefined before failing with an unrelated scan error.
  const identity = `["publisher", "name", "version"].filter(key => typeof ${manifest}?.[key] !== "string" || !${manifest}[key].trim())`;
  return text.slice(0, end) + `\n        ${marker} { const missing = ${identity}; if (missing.length) throw new Error(\`Unable to install the extension package: its package.json must declare \${missing.map(key => \`"\${key}"\`).join(", ")}.\`); }` +
    ` if (${literal(ids)}.includes(String(${id}).toLowerCase())) throw new Error(\`Unable to install extension '\${${id}}': it would replace an extension bundled with OpenVision. Remove the package or change its identifier.\`);` + text.slice(end);
}

// Workbench extension set: user and workspace copies never replace protected builtins.
export function guardProtectedScan(text, ids) {
  if (installedMarker(text, ids)) return text;
  const match = unique(text, /(\.forEach\(\(([\w$]+)\) => \{\s*const ([\w$]+) = [\w$]+\.get\(\2\.identifier\);\s*if \(\3\)\s*if \(\3\.isBuiltin\) \{)(\s*if \([\w$]+\(\3\.version, \2\.version\)\) \{\s*([\w$]+)\.warn\(\s*`Skipping extension \$\{\2\.extensionLocation\.path\} in favour of the builtin extension)/g, 'builtin override');
  const [, head, user, existing, rest, log] = match;
  const guard = `\n          ${marker} if (${literal(ids)}.includes(String(${user}.identifier.value ?? ${user}.identifier).toLowerCase())) { ${log}.warn(\`Skipping extension \${${user}.extensionLocation.path}: it would replace the protected bundled extension \${${existing}.extensionLocation.path}.\`); return; }`;
  return text.slice(0, match.index) + head + guard + rest + text.slice(match.index + match[0].length);
}

const owners = [
  ['out/vs/code/electron-utility/sharedProcess/sharedProcessMain.js', guardProtectedInstall],
  ['out/vs/code/node/cliProcessMain.js', guardProtectedInstall],
  ['out/vs/workbench/workbench.desktop.main.js', guardProtectedScan],
  ['out/vs/workbench/workbench.glass.main.js', guardProtectedScan],
];

export async function installProtectedExtensions(root) {
  const app = join(root, 'source/app');
  const ids = protectedIds(await readFile(join(app, 'out/vs/workbench/api/node/extensionHostProcess.js'), 'utf8'));
  const changed = [];
  for (const [relative, transform] of owners) {
    const path = join(app, relative);
    const before = await readFile(path, 'utf8'), after = transform(before, ids);
    if (before === after) continue;
    const backup = join(root, 'backups/protected-extensions', `${digest(before)}.js`);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
    changed.push(relative);
  }
  return { ids: ids.length, changed };
}
