import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { classAt, applyTelemetryPatches } from './telemetry-patches.mjs';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';

// User-level customization owner contract: the OpenVision profile, not HOME.
// The recovered skills, commands, hooks and third-party compatibility readers
// resolved user-level roots from the operating-system home directory, so every
// installation and profile on the machine shared ~/.cursor (renamed
// ~/.openvision), ~/.claude, ~/.codex, ~/.agents and ~/.grok content. These
// producers now use a profile home: <user-data-dir>/User. Relative layouts are
// unchanged (for example <profile home>/.openvision/skills), and third-party
// user roots resolve inside the profile instead of the real home. Project-local
// inputs keep their original branches.
export const marker = '/* OpenVision profile customization home v1 */';
export const command = 'openvision.internal.profileHome';
export const extensionTargets = {
  exec: 'extensions/cursor-agent-exec/dist/main.js',
  hostActivation: 'extensions/cursor-agent-host/dist/77.js',
  hostMain: 'extensions/cursor-agent-host/dist/main.js',
};
const profileHomeGlobal = `(home => { if (typeof home !== "string") throw new Error("OpenVision profile home unavailable"); return home; })(globalThis[Symbol.for("${command}")])`;
export const validation = value => `(home => { if (typeof home !== "string" || !/^(?:\\/|[A-Za-z]:[\\\\/])/.test(home))
    throw new Error("OpenVision profile home unavailable"); return home; })(${value})`;

function unique(text, pattern, label) {
  const matches = [...text.matchAll(pattern)];
  if (matches.length !== 1) throw new Error(`Global path ${label} contract missing or ambiguous`);
  return matches[0];
}

const replace = (match, after, reason, offset = 0) =>
  ({ start: offset + match.index, end: offset + match.index + match[0].length, after, reason });

function method(owner, name, label) {
  const found = owner.body.body.filter(item => item.type === 'MethodDefinition' && item.key?.name === name);
  if (found.length !== 1) throw new Error(`Global path ${label} method missing or ambiguous: ${name}`);
  return found[0];
}

// Workbench: the path service owns the validated profile home; commands, hooks
// and skill creation/migration consume it instead of the operating-system home.
export function isolateWorkbenchGlobalPaths(text) {
  if (text.includes(marker)) return text;
  const patches = [];
  const pathOwner = classAt(text, unique(text, /this\.localUserHome = [\w$]+\)/g, 'path owner').index);
  const token = unique(text, /([\w$]+) = [\w$]+\("pathService"\)/g, 'path service identifier')[1];
  patches.push({ start: pathOwner.body.end - 1, end: pathOwner.body.end - 1, reason: 'profile home getter',
    after: `get openvisionProfileHome() { ${marker}
    const root = this.environmentService.appSettingsHome;
    if (!root || root.scheme !== "file") throw new Error("OpenVision local profile directory unavailable");
    return root;
  }` });

  // Customize > Skills > New: the user skills directory under the profile home.
  const skill = unique(text, /([\w$]+)\.joinPath\(([\w$]+)\.userHome, "\.cursor", "skills"\)/g, 'skill creation path');
  patches.push(replace(skill, `${skill[1]}.joinPath(${skill[2]}.openvisionProfileHome, ".cursor", "skills")`, 'skill creation'));
  const context = unique(text, /userHome: await ([\w$]+)\.userHome\(\{ preferLocal: !0 \}\),\s*resolveSkillRoot:/g, 'creation context');
  patches.push({ start: context.index, end: context.index, after: `openvisionProfileHome: ${context[1]}.openvisionProfileHome, `,
    reason: 'creation context' });

  // Skills store migration compares and trashes sources under the user skills root.
  const migration = unique(text, /async homeSkillsRoot\(\) \{\s*const ([\w$]+) = await this\.pathService\.userHome\(\);/g, 'skills migration root');
  patches.push(replace(migration, `async homeSkillsRoot() { const ${migration[1]} = this.pathService.openvisionProfileHome;`, 'skills migration'));

  // Commands service: discovery, watchers and Customize creation.
  const commandOwner = classAt(text, unique(text, /async discoverCommandsDirs\(\) \{/g, 'commands owner').index);
  for (const name of ['discoverCommandsDirs', 'getCommandTargetDirectory', 'setupWatchers', 'loadAllCommands', 'findPersonalCommandsDir'])
    method(commandOwner, name, 'commands');
  const commandSource = text.slice(commandOwner.start, commandOwner.end);
  const discovery = unique(commandSource, /async discoverCommandsDirs\(\) \{\s*const ([\w$]+) = this\.pathService\.userHome\(\{ preferLocal: !0 \}\);\s*\(\(this\.personalCommandsDir = [\w$]+\.joinPath\([\w$]+, "\.cursor", "commands"\)\),\s*\(this\.personalClaudeCommandsDir = /g, 'commands discovery');
  patches.push(replace(discovery, discovery[0].replace('this.pathService.userHome({ preferLocal: !0 })', 'this.pathService.openvisionProfileHome'),
    'commands discovery', commandOwner.start));
  const target = unique(commandSource, /getCommandTargetDirectory\(([\w$]+)\) \{\s*if \(\1\) \{\s*const ([\w$]+) = this\.pathService\.userHome\(\{ preferLocal: !0 \}\);\s*return [\w$]+\.joinPath\(\2, "\.cursor", "commands"\);/g, 'commands target');
  patches.push(replace(target, target[0].replace('this.pathService.userHome({ preferLocal: !0 })', 'this.pathService.openvisionProfileHome'),
    'commands target', commandOwner.start));
  // The command palette New Command action has its own user target.
  const action = unique(text, /const ([\w$]+) = await ([\w$]+)\.userHome\(\{ preferLocal: !0 \}\);\s*([\w$]+) = [\w$]+\.joinPath\(\1, "\.cursor", "commands"\);/g, 'new command action');
  patches.push(replace(action, action[0].replace(`await ${action[2]}.userHome({ preferLocal: !0 })`, `${action[2]}.openvisionProfileHome`), 'new command action'));

  // Hooks service: user hooks.json and the third-party user settings file.
  const hooks = unique(text, /this\.logger\.logInfo\("Initializing Cursor Hooks Service\.\.\."\);\s*try \{\s*const ([\w$]+) = await this\.pathService\.userHome\(\);\s*\(\(this\.configUri = this\.uriIdentityService\.extUri\.joinPath\(\1, "\.cursor", "hooks\.json"\)\),\s*\(this\.claudeUserConfigUri = /g, 'hooks owner');
  patches.push(replace(hooks, hooks[0].replace('await this.pathService.userHome()', 'this.pathService.openvisionProfileHome'), 'hooks'));
  // Developer "initialize user hooks" writes the same user hooks file.
  const init = unique(text, /const ([\w$]+) = await ([\w$]+)\.userHome\(\),\s*([\w$]+) = [\w$]+\.extUri\.joinPath\(\1, "\.cursor"\),\s*[\w$]+ = [\w$]+\.extUri\.joinPath\(\3, "hooks"\),/g, 'hooks initializer');
  patches.push(replace(init, init[0].replace(`await ${init[2]}.userHome()`, `${init[2]}.openvisionProfileHome`), 'hooks initializer'));

  const registry = unique(text, /([\w$]+)\.registerCommand\("noop",/g, 'command registry')[1];
  return marker + '\n' + applyTelemetryPatches(text, patches) +
    `\n${registry}.registerCommand("${command}", accessor => accessor.get(${token}).openvisionProfileHome.fsPath);\n`;
}

// Agent extension activation: the skills/rules service, the user subagent
// reader (third-party user agents) and the skill management handlers receive
// the profile home. Shell, sandbox and plugin cache home values are unchanged.
export function isolateExecGlobalPaths(text) {
  if (text.includes(marker)) return text;
  const api = unique(text, /([\w$]+)\.cursor\.registerSubagentsProvider\(/g, 'exec provider registration')[1];
  // The profile home is resolved first in activation: the builtin skills sync
  // starts before the extensibility services are constructed.
  const start = unique(text, /async function [\w$]+\([\w$]+, [\w$]+ = \{\}\) \{\s*var [\w$]+ = \[\];\s*try \{(?=\s*const [\w$]+ = Date\.now\(\),\s*[\w$]+ = [\w$]+\.runtimeExtensionPath \?\? )/g, 'exec activation start');
  const anchor = unique(text, /const \{ pluginsService: ([\w$]+), refreshPluginHooks: [\w$]+ \} = [\w$]+;/g, 'exec activation');
  const end = unique(text, new RegExp(`${api.replace('$', '\\$')}\\.cursor\\.registerCursorRulesProvider\\(`, 'g'), 'exec rules provider').index;
  const window = text.slice(anchor.index, end);
  const home = '__openvisionProfileHome';
  // Each site has one named `home` group: the operating-system home argument.
  const sites = [
    [/\?\.\(\{ pluginsService: [\w$]+, deleteDirectoryToTrash: [\w$]+, userHomeDirectory: (?<home>[\w$]+\.homedir\(\)) \}\)/dg, 'skill publish handler'],
    [/cacheManager: new [\w$.]+\([\w$]+\.homedir\(\)\),\s*userHomeDirectory: (?<home>[\w$]+\.homedir\(\))/dg, 'skill unpublish handler'],
    [/\(\) => \(\{ agentStoreSkillsDirs: [\w$]+\.get\(\), userHomeDirectory: (?<home>[\w$]+\.homedir\(\)) \}\)/dg, 'skills context'],
    [/new [\w$]+\.[\w$]+\([\w$]+, [\w$]+, (?<home>[\w$]+\.homedir\(\)), [\w$]+, !0, [\w$]+, [\w$]+, [\w$]+, "ide",/dg, 'skills service'],
    [/new [\w$]+\.[\w$]+\((?<home>[\w$]+\.homedir\(\)), [\w$]+, "user", /dg, 'user subagent reader'],
  ];
  const at = start.index + start[0].length;
  const patches = [{ start: at, end: at, reason: 'exec profile home',
    after: ` ${marker} const ${home} = (globalThis[Symbol.for("${command}")] = ${validation(`await ${api}.commands.executeCommand("${command}")`)});\n` }];
  // Builtin skills (synchronized and canvas SDK mirror) use the same profile home.
  patches.push(builtinRoot(text));
  for (const [pattern, label] of sites) {
    const [start, stop] = unique(window, pattern, label).indices.groups.home;
    patches.push({ start: anchor.index + start, end: anchor.index + stop, after: home, reason: label });
  }
  return applyTelemetryPatches(text, patches);
}

// Host activation: the disk extensibility factory receives the profile home
// for skills and the user subagent reader.
export function isolateHostGlobalPaths(text) {
  if (text.includes(marker)) return text;
  const api = unique(text, /([\w$]+)\.cursor\.registerSubagentsProvider\(/g, 'host registration')[1];
  const home = unique(text, /userHome: [\w$]+\.userHome \?\? [\w$]+\.homedir\(\),/g, 'host context');
  return marker + '\n' + text.replace(home[0],
    `userHome: (globalThis[Symbol.for("${command}")] = ${validation(`await ${api}.commands.executeCommand("${command}")`)}),`);
}

function builtinRoot(text) {
  const builtin = unique(text, /function [\w$]+\(\) \{\s*return [\w$]+\(\(0, [\w$]+\.homedir\)\(\)\)\.dirPath;\s*\}/g, 'builtin skills root');
  const home = unique(builtin[0], /\(0, [\w$]+\.homedir\)\(\)/g, 'builtin skills home');
  if (!/configDir: "\.cursor", subdir: "skills-cursor", thirdParty: !1, builtin: !0/.test(text))
    throw new Error('Global path builtin skills table contract changed');
  return { start: builtin.index + home.index, end: builtin.index + home.index + home[0].length,
    after: profileHomeGlobal, reason: 'builtin skills root' };
}

// Host extension: its builtin skills writer uses the profile home that either
// Agent extension activation published.
export function isolateHostBuiltinSkills(text) {
  if (text.includes(marker)) return text;
  return marker + '\n' + applyTelemetryPatches(text, [builtinRoot(text)]);
}

async function transformFile(root, relative, transform) {
  const path = join(root, 'source/app', relative);
  const before = await readFile(path, 'utf8'), after = transform(before);
  if (before === after) return;
  const backup = join(root, 'backups/global-paths', relative);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
}

export async function installGlobalPathIsolation(root) {
  const dependencies = ['desktop/global-paths.mjs', 'desktop/telemetry-patches.mjs', 'desktop/build-cache.mjs',
    'desktop/import-files.mjs', 'tooling/dependencies.mjs', 'tooling/package-lock.json'];
  const hashes = await Promise.all(dependencies.map(path => fileHash(join(root, path))));
  if (hashes.some(hash => !hash)) throw new Error('Global path customization dependency missing');
  const recipe = digest(JSON.stringify([process.versions.node, hashes]));
  const targets = ['desktop', 'glass'].map(variant => [`out/vs/workbench/workbench.${variant}.main.js`, isolateWorkbenchGlobalPaths]);
  targets.push([extensionTargets.exec, isolateExecGlobalPaths], [extensionTargets.hostActivation, isolateHostGlobalPaths],
    [extensionTargets.hostMain, isolateHostBuiltinSkills]);
  for (const [relative, transform] of targets)
    await cachedFile({ path: join(root, 'source/app', relative), recipe,
      marker: join(root, `build/cache/global-paths-${digest(relative)}.json`) }, () => transformFile(root, relative, transform));
  console.log('User skills, commands and hooks resolved from the OpenVision profile home');
}
