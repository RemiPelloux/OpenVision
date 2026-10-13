import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { classAt, functionAt, applyTelemetryPatches } from './telemetry-patches.mjs';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';

const marker = '/* OpenVision user subagent paths v1 */';
const command = 'openvision.internal.userAgentsDirectory';

function unique(text, pattern, label) {
  const matches = [...text.matchAll(pattern)];
  if (matches.length !== 1) throw new Error(`Subagent ${label} contract missing or ambiguous`);
  return matches[0];
}

function replacement(match, after) {
  return { start: match.index, end: match.index + match[0].length, after };
}

export function subagentReaderOwner(text) {
  return classAt(text, unique(text, /computeAgentsDirs\(\)\s*\{/g, 'reader').index);
}

function patchReaderClass(text) {
  const owner = subagentReaderOwner(text), source = text.slice(owner.start, owner.end);
  const constructor = owner.body.body.find(item => item.kind === 'constructor');
  const compute = owner.body.body.find(item => item.key?.name === 'computeAgentsDirs');
  if (constructor?.value.params.length !== 4 || !compute) throw new Error('Subagent reader signature changed');
  const path = unique(source, /\(0, ([\w$]+)\.join\)\(\w+, "\.cursor", "agents"\)/g, 'reader path');
  const validation = `if (this.cursorAgentsSource === "user" &&
    (typeof this.openvisionUserAgentsDirectory !== "string" || !${path[1]}.isAbsolute(this.openvisionUserAgentsDirectory)))
    throw new Error("OpenVision user subagent directory unavailable");`;
  const dir = unique(source, /dirPath: (\(0, [\w$]+\.join\)\(\w+, "\.cursor", "agents"\))/g, 'directory entry');
  const boundary = unique(source, /this\.allowExternalAgentSymlinks \? void 0 : this\.workspacePath/g, 'symlink boundary');
  const load = owner.body.body.find(item => item.key?.name === 'load');
  const loadSource = text.slice(load.start, load.end);
  const iterator = unique(loadSource, /for \(const \{ dirPath: ([\w$]+), source: [\w$]+ \} of [\w$]+\)/g, 'directory loop')[1];
  const patched = applyTelemetryPatches(source, [
    { start: constructor.value.params.at(-1).end - owner.start, end: constructor.value.params.at(-1).end - owner.start,
      after: ', openvisionUserAgentsDirectory' },
    { start: constructor.value.body.start - owner.start + 1, end: constructor.value.body.start - owner.start + 1,
      after: ' this.openvisionUserAgentsDirectory = openvisionUserAgentsDirectory; ' },
    { start: compute.value.body.start - owner.start + 1, end: compute.value.body.start - owner.start + 1, after: validation },
    replacement(dir, `dirPath: this.cursorAgentsSource === "user" ? this.openvisionUserAgentsDirectory : ${dir[1]}`),
    replacement(boundary, `this.allowExternalAgentSymlinks ? void 0 : (${iterator} === this.openvisionUserAgentsDirectory ? this.openvisionUserAgentsDirectory : this.workspacePath)`),
  ]);
  return text.slice(0, owner.start) + patched + text.slice(owner.end);
}

export function isolateSubagentReader(text) {
  if (text.includes(marker)) return text;
  text = patchReaderClass(text);
  const activation = unique(text, /new ([\w$]+\.[\w$]+)\(([\w$]+)\.homedir\(\), ([\w$]+), "user", ([\w$]+)\)/g, 'activation');
  const api = unique(text, /([\w$]+)\.cursor\.registerSubagentsProvider\(/g, 'provider registration')[1];
  return marker + '\n' + text.replace(activation[0],
    `new ${activation[1]}(${activation[2]}.homedir(), ${activation[3]}, "user", ${activation[4]}, await ${api}.commands.executeCommand("${command}"))`);
}

export function isolateHostSubagentReader(text) {
  return text.includes(marker) ? text : marker + '\n' + patchReaderClass(text);
}

export function isolateHostSubagentActivation(text) {
  if (text.includes(marker)) return text;
  const api = unique(text, /([\w$]+)\.cursor\.registerSubagentsProvider\(/g, 'host registration')[1];
  const home = unique(text, /userHome: [\w$]+\.userHome \?\? [\w$]+\.homedir\(\),/g, 'host context');
  return marker + '\n' + text.replace(home[0], `${home[0]}
    openvisionUserAgentsDirectory: await ${api}.commands.executeCommand("${command}"),`);
}

export function isolateHostSubagentFactory(text) {
  if (text.includes(marker)) return text;
  const activation = unique(text, /new ([\w$]+\.[\w$]+)\(([\w$]+), ([\w$]+), "user", ([\w$]+)\)/g, 'host reader factory');
  const owner = [...text.slice(0, activation.index).matchAll(/\bfunction [\w$]+\(([\w$]+)\)\s*\{/g)].at(-1);
  if (!owner || !text.slice(owner.index, activation.index).includes(`${owner[1]}.allowExternalSubagentSymlinks`))
    throw new Error('Subagent host factory options contract changed');
  return marker + '\n' + text.replace(activation[0],
    `new ${activation[1]}(${activation[2]}, ${activation[3]}, "user", ${activation[4]}, ${owner[1]}.openvisionUserAgentsDirectory)`);
}

export function isolateSubagentWorkbench(text) {
  if (text.includes(marker)) return text;
  const pathOwner = classAt(text, unique(text, /this\.localUserHome = [\w$]+\)/g, 'path owner').index);
  const watcher = unique(text, /this\._userAgentsDir = ([\w$]+)\.joinPath\([\w$]+, "\.cursor", "agents"\);/g, 'watcher');
  const watchOwner = classAt(text, watcher.index);
  const watchMethod = watchOwner.body.body.find(item => item.key?.name === 'initializeWatchedPaths');
  const watchSource = text.slice(watchMethod.start, watchMethod.end);
  const unusedHome = unique(watchSource, /const [\w$]+ = this\.pathService\.userHome\(\{\s*preferLocal: !0,?\s*\}\);/g, 'watcher home');
  const oldDiagnostic = unique(watchSource, /Failed to ensure ~\/\.cursor\/agents before watch/g, 'watcher diagnostic');
  const uri = watcher[1];
  const create = unique(text, /([\w$]+)\.joinPath\(([\w$]+)\.userHome, "\.cursor", "agents"\)/g, 'creation');
  const createOwner = functionAt(text, create.index);
  const createSource = text.slice(createOwner.start, createOwner.end);
  if (!createSource.includes('subagentsService.refresh()')) throw new Error('Subagent creation refresh contract changed');
  const context = unique(text, /userHome: await ([\w$]+)\.userHome\(\{ preferLocal: !0 \}\),\s*resolveSkillRoot:/g, 'creation context');
  const registry = unique(text, /([\w$]+)\.registerCommand\("noop",/g, 'command registry')[1];
  const token = unique(text, /([\w$]+) = [\w$]+\("pathService"\)/g, 'path service identifier')[1];
  const getter = `get openvisionUserAgentsDirectory() {
    const root = this.environmentService.appSettingsHome;
    if (!root || root.scheme !== "file") throw new Error("OpenVision local profile directory unavailable");
    return ${uri}.joinPath(root, "agents");
  }`;
  const patches = [
    { start: pathOwner.body.end - 1, end: pathOwner.body.end - 1, after: getter },
    { ...replacement(unusedHome, ''), start: watchMethod.start + unusedHome.index,
      end: watchMethod.start + unusedHome.index + unusedHome[0].length },
    { start: watchMethod.start + oldDiagnostic.index, end: watchMethod.start + oldDiagnostic.index + oldDiagnostic[0].length,
      after: 'Failed to ensure OpenVision user agents directory before watch' },
    replacement(watcher, 'this._userAgentsDir = this.pathService.openvisionUserAgentsDirectory;'),
    replacement(create, `${create[2]}.userAgentsDirectory`),
    replacement(context, `userAgentsDirectory: ${context[1]}.openvisionUserAgentsDirectory, ${context[0]}`),
  ];
  return marker + '\n' + applyTelemetryPatches(text, patches) +
    `\n${registry}.registerCommand("${command}", accessor => accessor.get(${token}).openvisionUserAgentsDirectory.fsPath);\n`;
}

export async function installSubagentPathIsolation(root) {
  const dependencies = ['desktop/subagent-paths.mjs', 'desktop/telemetry-patches.mjs', 'desktop/build-cache.mjs',
    'desktop/import-files.mjs', 'tooling/dependencies.mjs', 'tooling/package-lock.json'];
  const recipe = digest(JSON.stringify(await Promise.all(dependencies.map(path => fileHash(join(root, path))))));
  const targets = ['desktop', 'glass'].map(variant =>
    [`out/vs/workbench/workbench.${variant}.main.js`, isolateSubagentWorkbench]);
  targets.push(['extensions/cursor-agent-exec/dist/main.js', isolateSubagentReader]);
  targets.push(['extensions/cursor-agent-host/dist/main.js', isolateHostSubagentReader],
    ['extensions/cursor-agent-host/dist/77.js', isolateHostSubagentActivation],
    ['extensions/cursor-agent-host/dist/980.js', isolateHostSubagentFactory]);
  for (const [relative, transform] of targets) {
    const path = join(root, 'source/app', relative);
    await cachedFile({ path, recipe, marker: join(root, `build/cache/subagent-paths-${digest(relative)}.json`) }, async () => {
      const before = await readFile(path, 'utf8'), after = transform(before);
      if (before === after) return;
      const backup = join(root, 'backups/subagent-paths', relative);
      await mkdir(dirname(backup), {recursive: true});
      await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
      await writeFile(path, after);
    });
  }
}
