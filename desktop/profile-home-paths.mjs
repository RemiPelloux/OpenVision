import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { classAt, applyTelemetryPatches } from './telemetry-patches.mjs';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';
import { validation } from './global-paths.mjs';

// Remaining user-global producers resolve their data from the OpenVision profile
// home (<user-data-dir>/User) instead of the operating-system home. Relative
// layouts are unchanged: ~/.cursor/projects (namespaced ~/.openvision/projects)
// becomes <profile home>/.openvision/projects, and ~/<dataFolderName>/argv.json
// becomes <profile home>/<dataFolderName>/argv.json.
//
// The main-process bootstrap publishes the profile home in
// VSCODE_OPENVISION_PROFILE_HOME immediately after parsing its arguments.
// Utility processes and extension hosts inherit it; integrated terminals drop
// VSCODE_* variables. Every patched path reads it and fails closed when it is
// missing or relative. The workbench uses its path service (appSettingsHome).
export const marker = '/* OpenVision profile home paths v1 */';
export const variable = 'VSCODE_OPENVISION_PROFILE_HOME';
export const terminalStatusSetting = 'openvision.terminal.externalAgentStatus';
const envHome = validation(`process.env.${variable}`);
const ownerKey = 'openvision.profileHomeOwner';
const uriHome = `(owner => { if (!owner) throw new Error("OpenVision profile home unavailable"); return owner.openvisionProfileHome; })(globalThis[Symbol.for("${ownerKey}")])`;

function unique(text, pattern, label) {
  const matches = [...text.matchAll(pattern)];
  if (matches.length !== 1) throw new Error(`Profile home ${label} contract missing or ambiguous (${matches.length})`);
  return matches[0];
}

// Replace the whole match with build(match).
const site = (text, pattern, label, build) => {
  const match = unique(text, pattern, label);
  return { start: match.index, end: match.index + match[0].length, after: build(match), reason: label };
};

function all(text, pattern, label, expected, build) {
  const matches = [...text.matchAll(pattern)];
  if (matches.length !== expected) throw new Error(`Profile home ${label} sites changed: expected ${expected}, found ${matches.length}`);
  return matches.map(match => ({ start: match.index, end: match.index + match[0].length, after: build(match), reason: label }));
}

const done = text => text.includes(marker);

// Main process: bootstrap variable, argv.json, AI code tracking, update flags
// and shadow workspaces. Environment services (every process) use the profile
// home for argv.json.
export function isolateMainProfileHome(text) {
  if (done(text)) return text;
  const patches = [];
  const resolved = unique(text, /var ([\w$]+) = ([\w$]+)\(([\w$]+), ([\w$]+)\.nameShort \?\? "code-oss-dev"\);\s*if \(process\.platform === "win32"\)/g, 'user data path');
  const [, , userDataPath, args, product] = resolved;
  const argvPath = unique(text, /function [\w$]+\(\) \{\s*const ([\w$]+) = process\.env\.VSCODE_PORTABLE;\s*return \1 \? ([\w$]+)\.join\(\1, "argv\.json"\) : \2\.join\([\w$]+\.homedir\(\), ([\w$]+), "argv\.json"\);\s*\}/g, 'argv bootstrap path');
  const path = argvPath[2];
  // Publish the variable before argv.json is read (`args = parse(), argv = read(args)`).
  patches.push(site(text, new RegExp(`(\\b${args.replace('$', '\\$')} = [\\w$]+\\(\\),\\s*)([\\w$]+) = ([\\w$]+)\\(${args.replace('$', '\\$')}\\);`, 'g'), 'bootstrap variable',
    m => `${m[1]}${m[2]} = (${marker} process.env.${variable} = ${path}.join(${userDataPath}(${args}, ${product}.nameShort ?? "code-oss-dev"), "User"), ${m[3]}(${args}));`));
  patches.push(site(text, /return ([\w$]+) \? ([\w$]+)\.join\(\1, "argv\.json"\) : \2\.join\([\w$]+\.homedir\(\), ([\w$]+), "argv\.json"\);/g, 'argv bootstrap',
    m => `return ${m[1]} ? ${m[2]}.join(${m[1]}, "argv.json") : ${m[2]}.join(${envHome}, ${m[3]}, "argv.json");`));
  patches.push(...environmentServicePatches(text));
  patches.push(site(text, /async getAiCodeTrackingDbPath\(\) \{\s*const ([\w$]+) = this\.environmentService\.userHome\.fsPath;/g, 'AI code tracking database',
    m => `async getAiCodeTrackingDbPath() { const ${m[1]} = ${envHome};`));
  patches.push(site(text, /return ([\w$]+)\.join\([\w$]+\.homedir\(\), ([\w$]+), "shouldUpdate"\);/g, 'update flag',
    m => `return ${m[1]}.join(${envHome}, ${m[2]}, "shouldUpdate");`));
  patches.push(site(text, /getExitWatchdogMarkerPath\(\) \{\s*return ([\w$]+)\([\w$]+\(\), this\.productService\.dataFolderName/g, 'update exit watchdog',
    m => `getExitWatchdogMarkerPath() { return ${m[1]}(${envHome}, this.productService.dataFolderName`));
  patches.push(site(text, /return ([\w$]+)\.joinPath\([\w$]+\.userHome, ([\w$]+)\.dataFolderName, "shadow-workspaces"\);/g, 'shadow workspaces',
    m => `return ${m[1]}.joinPath(${m[1]}.file(${envHome}), ${m[2]}.dataFolderName, "shadow-workspaces");`));
  // Editor MCP discovery (Claude desktop, Windsurf, global mcp.json adapters)
  // resolves every adapter from the profile home: the home is the profile home
  // and the APPDATA/XDG_CONFIG_HOME overrides are dropped, so each adapter
  // falls back to its layout under the profile home on every platform.
  patches.push(site(text, /homedir: ([\w$]+)\.file\([\w$]+\(\)\),\s*winAppData: this\.uriFromEnvVariable\("APPDATA"\),\s*xdgHome: this\.uriFromEnvVariable\("XDG_CONFIG_HOME"\),/g,
    'MCP discovery home', m => `homedir: ${m[1]}.file(${envHome}), winAppData: void 0, xdgHome: void 0,`));
  return marker + '\n' + applyTelemetryPatches(text, patches);
}

function environmentServicePatches(text) {
  if (!/get appSettingsHome\(\) \{/.test(text)) throw new Error('Profile home environment service contract changed');
  const patches = [site(text, /: ([\w$]+)\(this\.userHome, this\.productService\.dataFolderName, "argv\.json"\)/g, 'environment argv.json',
    m => `: ${m[1]}(this.appSettingsHome, this.productService.dataFolderName, "argv.json")`)];
  // The developer-only file policy (--__enable-file-policy) reads policy.json
  // from the profile home; every environment service with the getter must match.
  if (/get policyFile\(\) \{/.test(text))
    patches.push(site(text, /: ([\w$]+)\(this\.userHome, this\.productService\.dataFolderName, "policy\.json"\)/g, 'environment policy.json',
      m => `: ${m[1]}(this.appSettingsHome, this.productService.dataFolderName, "policy.json")`));
  return patches;
}

export function isolateEnvironmentProfileHome(text) {
  if (done(text)) return text;
  return marker + '\n' + applyTelemetryPatches(text, environmentServicePatches(text));
}

// Node bundles: every `join(homedir(), ".cursor" | ".claude", …)` path plus the
// plugin services that receive the home directory as an argument. The expected
// counts are drift guards; `~` expansion, shell working directories and other
// tools' folders keep the operating-system home.
const homedir = '(?:\\(0, )?[\\w$]+\\.homedir\\)?\\(\\)';
const wrappedHomedir = '(?:\\(0, )?[\\w$]+(?:\\.default)?\\.homedir\\)?\\(\\)';
const patterns = {
  join: [new RegExp(`((?:\\(0, )?[\\w$]+\\.join\\)?\\()${homedir}(, "\\.(?:cursor|claude)")(?!, "mcp\\.json")`, 'g'),
    m => `${m[1]}${envHome}${m[2]}`],
  prefix: [new RegExp(`\`\\$\\{${homedir}\\}\\$\\{([\\w$]+)\\.sep\\}\\.cursor\\$\\{`, 'g'),
    m => `\`\${${envHome}}\${${m[1]}.sep}.cursor\${`],
  pluginCache: [/new ([\w$]+\.[\w$]+)\([\w$]+\.homedir\(\)\)/g, m => `new ${m[1]}(${envHome})`],
  pluginSettings: [/\}\)\([\w$]+\.homedir\(\), ([\w$]+)\)/g, m => `})(${envHome}, ${m[1]})`],
  // Not the shell description, whose home is the real one (retrieval).
  pluginRemoval: [/(?<!suggestedShell: [\w$]+,\s*)userHomeDir: [\w$]+\.homedir\(\)/g, () => `userHomeDir: ${envHome}`],
  pluginService: [/(new [\w$]+\.[\w$]+\(\s*[\w$]+,\s*)[\w$]+\.homedir\(\)(,\s*\(\) => \(\{\s*importThirdPartyPlugins)/g,
    m => `${m[1]}${envHome}${m[2]}`],
  // Another product's data/config overrides (and its XDG config folder) would
  // share that product's data with OpenVision; the profile home is used instead.
  overrides: [/const ([\w$]+) = process\.env\.CURSOR_(?:DATA|CONFIG)_DIR;/g, m => `const ${m[1]} = void 0;`],
  xdgConfig: [/const ([\w$]+) = process\.env\.XDG_CONFIG_HOME;(\s*return \(null == \1 \? void 0 : \1\.trim\(\)\)\s*\? \(0, [\w$]+\.join\)\(\1, "cursor"\))/g,
    m => `const ${m[1]} = void 0;${m[2]}`],
  // The same joins wrapped over several lines (computer-use data; in the daemon
  // also projects, marketplaces and the Linux sign-in policy.json).
  wrapped: [new RegExp(`((?:\\(0, )?[\\w$]+(?:\\.default)?\\.join\\)?\\(\\s*\\n\\s*)${wrappedHomedir}(,\\s*"\\.(?:cursor|claude)")`, 'g'),
    m => `${m[1]}${envHome}${m[2]}`],
  // One-line joins through a default-import home (daemon getCursorDataDir).
  defaultJoin: [/((?:\(0, )?[\w$]+(?:\.default)?\.join\)?\()[\w$]+\.default\.homedir\(\)(, "\.(?:cursor|claude)")/g,
    m => `${m[1]}${envHome}${m[2]}`],
  // Skill store moves and skill plugin packing compare against the user skills root.
  userHomeDirectory: [/userHomeDirectory: \(0, [\w$]+\.homedir\)\(\)/g, () => `userHomeDirectory: ${envHome}`],
  // Agent-host daemon: its user MCP configuration is the profile's own
  // User/mcp.json (the file the editor's MCP service owns), approvals for it
  // are rooted in the profile home, and its XDG config branch is ignored.
  daemonMcp: [new RegExp(`(\\(0, [\\w$]+\\.join\\)\\()${wrappedHomedir}, "\\.cursor", "mcp\\.json"\\)`, 'g'),
    m => `${m[1]}${envHome}, "mcp.json")`],
  daemonMcpApproval: [new RegExp(`createPolicyMiddlewares\\(${wrappedHomedir}\\)`, 'g'), () => `createPolicyMiddlewares(${envHome})`],
  daemonXdg: [/const ([\w$]+) = process\.env\.XDG_CONFIG_HOME;(\s*if \(\1 === null \|\| \1 === void 0 \? void 0 : \1\.trim\(\)\)\s*return \(0, [\w$]+\.join\)\(\1, "cursor"\);)/g,
    m => `const ${m[1]} = void 0;${m[2]}`],
  daemonProjects: [new RegExp(`getProjectPath\\(${wrappedHomedir}, `, 'g'), () => `getProjectPath(${envHome}, `],
  daemonSkillsHome: [new RegExp(`\\? ([\\w$]+) : ${wrappedHomedir};(\\s*const allowExternalSubagentSymlinks)`, 'g'),
    m => `? ${m[1]} : ${envHome};${m[2]}`],
  daemonSandbox: [new RegExp(`(\\(0, [\\w$]+\\.join\\)\\(\\s*)${wrappedHomedir}(,\\s*userSandboxDataFolderName,)`, 'g'),
    m => `${m[1]}${envHome}${m[2]}`],
  // Retrieval: codebase snapshots and watchers of the agent data folders, and
  // its worktree root. Other tools' CLAUDE_CONFIG_DIR/CODEX_HOME overrides are
  // ignored; their folders resolve inside the profile home (still gated).
  retrievalDotDirs: [/(function [\w$]+\(\) \{\s*const ([\w$]+) = )[\w$]+\.homedir\(\);(\s*return \[\s*\{\s*path: [\w$]+\.join\(\2, "\.cursor"\),)/g,
    m => `${m[1]}${envHome};${m[3]}`],
  retrievalOverrides: [/process\.env\.(?:CLAUDE_CONFIG_DIR|CODEX_HOME) \|\| /g, () => ''],
  retrievalWorktrees: [/const ([\w$]+) = [\w$]+\.homedir\(\);(\s*[\w$]+ =\s*\1 && \1\.length > 0\s*\? [\w$]+\.join\(\1, \.\.\.[\w$]+\.split\("\/"\)\))/g,
    m => `const ${m[1]} = ${envHome};${m[2]}`],
};
export const nodeTargets = {
  'extensions/cursor-agent-exec/dist/main.js': { join: 13, prefix: 1, overrides: 2, xdgConfig: 1, pluginCache: 4, pluginSettings: 1, pluginRemoval: 1, pluginService: 1,
    wrapped: 1, userHomeDirectory: 3 },
  'extensions/cursor-agent-host/dist/main.js': { join: 10, prefix: 1, overrides: 2, xdgConfig: 1, wrapped: 1 },
  'extensions/cursor-agent-host/dist/292.js': { join: 3, pluginCache: 3, pluginSettings: 1, pluginRemoval: 1, pluginService: 1, userHomeDirectory: 3 },
  'extensions/cursor-agent-host/dist/817.js': { pluginCache: 1 },
  'extensions/cursor-agent-host/dist/agent-host-daemon/dist/bin/daemon.cjs': { join: 5, prefix: 1, overrides: 2, wrapped: 5,
    defaultJoin: 1, daemonMcp: 1, daemonMcpApproval: 1, daemonXdg: 1, daemonProjects: 2, daemonSkillsHome: 1, daemonSandbox: 1 },
  'extensions/cursor-local-agent-runtime/dist/main.js': { join: 7, overrides: 1, xdgConfig: 1, wrapped: 1 },
  'extensions/cursor-retrieval/dist/main.js': { retrievalDotDirs: 1, retrievalOverrides: 2, retrievalWorktrees: 1 },
  'extensions/cursor-mcp/dist/main.js': { join: 1 },
  'extensions/cursor-browser-automation/dist/extension.js': { join: 2 },
  'extensions/cursor-ndjson-ingest/dist/main.js': { join: 1 },
  'out/vs/workbench/api/node/extensionHostProcess.js': { join: 1 },
  'out/vs/code/electron-utility/mcpProcess/mcpProcessMain.js': { join: 1 },
};

export function isolateNodeProfileHome(text, expected) {
  if (done(text)) return text;
  const patches = [];
  for (const [name, [pattern, build]] of Object.entries(patterns))
    patches.push(...all(text, pattern, name, expected[name] ?? 0, build));
  // A daemon or bundle without a shebang can take the marker on its first line.
  const shebang = text.startsWith('#!') ? text.indexOf('\n') + 1 : 0;
  const patched = applyTelemetryPatches(text, patches);
  return patched.slice(0, shebang) + marker + '\n' + patched.slice(shebang);
}

// Workbench (desktop and Glass): the path service publishes itself so helpers
// without injected services can resolve the profile home.
export function isolateWorkbenchProfileHome(text) {
  if (done(text)) return text;
  if (!text.includes('get openvisionProfileHome()')) throw new Error('Profile home getter missing; run global path isolation first');
  const patches = [];
  const pathOwner = classAt(text, unique(text, /this\.localUserHome = [\w$]+\)/g, 'path owner').index);
  const constructor = pathOwner.body.body.find(item => item.kind === 'constructor');
  if (!constructor) throw new Error('Profile home path owner constructor missing');
  patches.push({ start: constructor.value.body.end - 1, end: constructor.value.body.end - 1, reason: 'path owner',
    after: `; globalThis[Symbol.for("${ownerKey}")] = this;` });

  // Plans: the shared user plans helper and the plan storage service.
  patches.push(site(text, /function ([\w$]+)\(([\w$]+)\) \{\s*return ([\w$]+)\(\2, "\.cursor", "plans"\);\s*\}/g, 'plans helper',
    m => `function ${m[1]}(${m[2]}) { return ${m[3]}(${uriHome}, ".cursor", "plans"); }`));
  patches.push(site(text, /async getUserPlansDir\(\) \{\s*const ([\w$]+) = await this\.pathService\.userHome\(\);/g, 'plan storage',
    m => `async getUserPlansDir() { const ${m[1]} = this.pathService.openvisionProfileHome;`));
  // `~/.openvision/plans/…` links in chat resolve to the profile.
  patches.push(site(text, /const ([\w$]+) = await ([\w$]+)\.pathService\.userHome\(\);\s*([\w$]+) = ([\w$]+)\(\1, ([\w$]+)\);\s*const ([\w$]+) = await \2\.fileService\.exists\(\3\);\s*if \(\6 \|\| !([\w$]+)\(\5\)\)/g, 'plan links',
    m => m[0].replace(`await ${m[2]}.pathService.userHome()`, `(${m[7]}(${m[5]}) ? ${m[2]}.pathService.openvisionProfileHome : await ${m[2]}.pathService.userHome())`)));

  // Per-project agent data: transcripts, terminals, tool output and canvases.
  const projects = unique(text, /([\w$]+) = "\.cursor\/projects"/g, 'projects root')[1];
  const p = projects.replace('$', '\\$');
  patches.push(site(text, new RegExp(`([\\w$]+) = await ([\\w$]+)\\.userHome\\(\\);\\s*return [\\w$]+\\.joinPath\\(\\1, ${p}, `, 'g'), 'project directory',
    m => m[0].replace(`await ${m[2]}.userHome()`, `${m[2]}.openvisionProfileHome`)));
  patches.push(site(text, new RegExp(`\\.joinPath\\(await ([\\w$]+)\\.pathService\\.userHome\\(\\), ${p}, `, 'g'), 'transcript directory',
    m => `.joinPath(${m[1]}.pathService.openvisionProfileHome, ${projects}, `));
  patches.push(site(text, new RegExp(`const ([\\w$]+) = this\\._pathService\\.userHome\\(\\{ preferLocal: !0 \\}\\),\\s*([\\w$]+) = [\\w$]+\\.joinPath\\(\\1, ${p}, `, 'g'), 'hook spill directory',
    m => m[0].replace('this._pathService.userHome({ preferLocal: !0 })', 'this._pathService.openvisionProfileHome')));
  patches.push(site(text, /async collectDirectorySizeMetrics\(\) \{\s*const ([\w$]+) = await this\.pathService\.userHome\(\),/g, 'disk usage metrics',
    m => `async collectDirectorySizeMetrics() { const ${m[1]} = this.pathService.openvisionProfileHome,`));

  // Recently viewed files.
  patches.push(site(text, /const ([\w$]+) = await this\.pathService\.userHome\(\{ preferLocal: !1 \}\),\s*([\w$]+) = [\w$]+\.joinPath\(\1, "\.cursor"\),\s*([\w$]+) = [\w$]+\.joinPath\(\2, "ide_state\.json"\)/g, 'recently viewed files',
    m => m[0].replace('await this.pathService.userHome({ preferLocal: !1 })', 'this.pathService.openvisionProfileHome')));

  // Agent worktrees and the agent data directory used for path comparisons.
  patches.push(site(text, /const ([\w$]+) = this\.pathService\.userHome\(\{ preferLocal: !0 \}\),\s*([\w$]+) = [\w$]+\.joinPath\(\1, "\.cursor"\);\s*this\._cursorDataDirPath/g, 'agent data directory',
    m => m[0].replace('this.pathService.userHome({ preferLocal: !0 })', 'this.pathService.openvisionProfileHome')));
  patches.push(site(text, /getWorktreesRoot\(\) \{\s*if \(!this\._worktreesRoot\) \{\s*const ([\w$]+) = this\.pathService\.userHome\(\{ preferLocal: !0 \}\),/g, 'worktree manager',
    m => m[0].replace('this.pathService.userHome({ preferLocal: !0 })', 'this.pathService.openvisionProfileHome')));
  patches.push(site(text, /const ([\w$]+) = ([\w$]+)\.userHome\(\{ preferLocal: !0 \}\);\s*\(\(this\.cursorManagedWorktreesRoot = /g, 'worktree watcher exclusion',
    m => m[0].replace(`${m[2]}.userHome({ preferLocal: !0 })`, `${m[2]}.openvisionProfileHome`)));
  patches.push(site(text, /([\w$]+) = ([\w$]+) && ([\w$]+)\.scheme === "file" \? ([\w$]+)\.joinPath\(\2, \.\.\.([\w$]+)\.split\("\/"\)\) : void 0/g, 'worktree display root',
    m => `${m[1]} = ${m[2]} && ${m[3]}.scheme === "file" ? ${m[4]}.joinPath(${uriHome}, ...${m[5]}.split("/")) : void 0`));

  // Auto-run permissions and sandbox files.
  patches.push(site(text, /_getDefaultPermissionsFilePath\(([\w$]+)\) \{\s*const ([\w$]+) = this\._productService\.dataFolderName \?\? "\.cursor";\s*return this\._uriIdentityService\.extUri\.joinPath\(\1, \2, "permissions\.json"\);/g, 'permissions file',
    m => m[0].replace(`joinPath(${m[1]}, ${m[2]},`, `joinPath(this._pathService.openvisionProfileHome, ${m[2]},`)));
  patches.push(site(text, /const ([\w$]+) = await this\._pathService\.userHome\(\{ preferLocal: !1 \}\),\s*([\w$]+) = this\._productService\.dataFolderName \?\? "\.cursor",\s*([\w$]+) = this\._uriIdentityService\.extUri\.joinPath\(\1, \2, "sandbox\.json"\)/g, 'sandbox file',
    m => m[0].replace('await this._pathService.userHome({ preferLocal: !1 })', 'this._pathService.openvisionProfileHome')));

  // Team hooks, debug-mode logs and action-only exports.
  patches.push(site(text, /const ([\w$]+) = await this\.pathService\.userHome\(\),\s*([\w$]+) = this\.uriIdentityService\.extUri\.joinPath\(\s*\1,\s*"\.cursor",\s*"managed",/g, 'team hooks',
    m => m[0].replace('await this.pathService.userHome()', 'this.pathService.openvisionProfileHome')));
  patches.push(site(text, /([\w$]+)\.pathService\.userHome\(\)\.then\(\(([\w$]+)\) => \{\s*([\w$]+) \|\| ([\w$]+)\(([\w$]+)\(\2, ([\w$]+)\)\);/g, 'debug logs',
    m => m[0].replace(`${m[1]}.pathService.userHome()`, `Promise.resolve(${m[1]}.pathService.openvisionProfileHome)`)));
  for (const name of ['feature-gates', 'notepads', 'commands'])
    patches.push(site(text, new RegExp(`([\\w$]+) = await ([\\w$]+)\\.userHome\\(\\{ preferLocal: !0 \\}\\),\\s*([\\w$]+) = [\\w$]+\\.joinPath\\(\\1, "\\.cursor", "${name}"\\);`, 'g'), `${name} export`,
      m => m[0].replace(`await ${m[2]}.userHome({ preferLocal: !0 })`, `${m[2]}.openvisionProfileHome`)));
  patches.push(...all(text, /const ([\w$]+) = await this\.pathService\.userHome\(\);\s*return [\w$]+\.joinPath\(\1, this\.productService\.dataFolderName, "(?:blocklist|unified_repo_list\.json)"\);/g,
    'repository blocklist', 2, m => m[0].replace('await this.pathService.userHome()', 'this.pathService.openvisionProfileHome')));

  // Skill chips and the publish check use the profile skills directory.
  patches.push(site(text, /([\w$]+)\.joinPath\(([\w$]+)\.userHomeUri, "\.cursor", "skills", /g, 'skill chip link',
    m => `${m[1]}.joinPath(${uriHome}, ".cursor", "skills", `));
  patches.push(site(text, /([\w$]+) = await this\.pathService\.userHome\(\);\s*if \(!([\w$]+) && !([\w$]+)\(([\w$]+)\.filePath, \1\.fsPath\)\)/g, 'skill publish check',
    m => m[0].replace('await this.pathService.userHome()', 'this.pathService.openvisionProfileHome')));
  // Markdown editors for agent data under the profile home.
  patches.push(site(text, /([\w$]+)\(\s*([\w$]+),\s*this\._pathService\.userHome\(\{ preferLocal: !0 \}\),\s*this\._workspaceContextService\.getWorkspace\(\)\.folders\.map/g, 'markdown editor state',
    m => m[0].replace('this._pathService.userHome({ preferLocal: !0 })', 'this._pathService.openvisionProfileHome')));
  patches.push(site(text, /([\w$]+)\(\s*([\w$]+),\s*this\.pathService\.userHome\(\{ preferLocal: !0 \}\),\s*this\.workspaceContextService\.getWorkspace\(\)\.folders\.map/g, 'markdown editor resolver',
    m => m[0].replace('this.pathService.userHome({ preferLocal: !0 })', 'this.pathService.openvisionProfileHome')));

  // External CLI history analytics never read another tool's home folder.
  patches.push(site(text, /async _poll\(\) \{\s*if \(this\.experimentService\.checkFeatureGate\("enable_ex_hs"/g, 'external CLI analytics',
    () => `async _poll() { return; if (this.experimentService.checkFeatureGate("enable_ex_hs"`));

  // Terminal Claude/Codex status reads those tools' session files from the real
  // home only after the user enables the explicit setting (off by default).
  const configuration = unique(text, /([\w$]+) = [\w$]+\("configurationService"\)/g, 'configuration service identifier')[1];
  patches.push(site(text, /_isEnabled\(\) \{\s*return [\w$]+\(this\._experimentService, \{ disableExposureLog: !1 \}\);\s*\}/g, 'terminal agent status gate',
    () => `_isEnabled() { return this._instantiationService.invokeFunction(accessor => accessor.get(${configuration}).getValue("${terminalStatusSetting}") === !0); }`));
  patches.push(site(text, /async _beginExternalAgentRun\(([\w$]+), ([\w$]+), ([\w$]+)\) \{/g, 'terminal agent status run',
    m => `${m[0]} if (!this._isEnabled()) return;`));
  patches.push(site(text, /"terminal\.integrated\.enablePersistentSessions": \{/g, 'terminal agent status setting',
    m => `"${terminalStatusSetting}": { type: "boolean", default: !1, scope: 1,
        markdownDescription: "Show Claude Code and Codex turn status on terminal tabs. When enabled, OpenVision reads those tools' session files in your home directory (\`~/.claude/projects\`, \`~/.codex/sessions\`). Off by default." },
      ${m[0]}`));

  patches.push(...environmentServicePatches(text));
  return marker + '\n' + applyTelemetryPatches(text, patches);
}

const environmentTargets = ['out/vs/code/electron-utility/sharedProcess/sharedProcessMain.js',
  'out/vs/platform/terminal/node/ptyHostMain.js'];

async function transformFile(root, relative, transform) {
  const path = join(root, 'source/app', relative);
  const before = await readFile(path, 'utf8'), after = transform(before);
  if (before === after) return;
  const backup = join(root, 'backups/profile-home-paths', relative);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
}

export async function installProfileHomePaths(root) {
  const dependencies = ['desktop/profile-home-paths.mjs', 'desktop/global-paths.mjs', 'desktop/telemetry-patches.mjs',
    'desktop/build-cache.mjs', 'desktop/import-files.mjs', 'tooling/dependencies.mjs', 'tooling/package-lock.json'];
  const hashes = await Promise.all(dependencies.map(path => fileHash(join(root, path))));
  if (hashes.some(hash => !hash)) throw new Error('Profile home customization dependency missing');
  const recipe = digest(JSON.stringify([process.versions.node, hashes]));
  const targets = [['out/main.js', isolateMainProfileHome],
    ...['desktop', 'glass'].map(variant => [`out/vs/workbench/workbench.${variant}.main.js`, isolateWorkbenchProfileHome]),
    ...environmentTargets.map(relative => [relative, isolateEnvironmentProfileHome]),
    ...Object.entries(nodeTargets).map(([relative, expected]) => [relative, text => {
      // The MCP utility process also owns an environment service.
      const isolated = isolateNodeProfileHome(text, expected);
      return relative.endsWith('mcpProcessMain.js') && isolated !== text
        ? applyTelemetryPatches(isolated, environmentServicePatches(isolated)) : isolated;
    }])];
  for (const [relative, transform] of targets)
    await cachedFile({ path: join(root, 'source/app', relative), recipe,
      marker: join(root, `build/cache/profile-home-paths-${digest(relative)}.json`) }, () => transformFile(root, relative, transform));
  console.log('Agent data, plans, worktrees, sandbox, plugins and argv.json resolved from the OpenVision profile home');
}
