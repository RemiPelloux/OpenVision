import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createHash } from 'node:crypto';
import { constants } from 'node:fs';
import { createServer } from 'node:http';
import { lstat, mkdir, mkdtemp, open, readdir, readFile, realpath, utimes, writeFile } from 'node:fs/promises';
import { join, relative as relativePath, resolve } from 'node:path';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { enterWorkspace } from './verification-workspace.mjs';
import { attributeTerminalHistory, parseShellRecord, terminalHistoryFile, unattributedAdditions } from './shell-history-policy.mjs';

// Native user-global path isolation. HOME points at a disposable directory
// holding marker skills, commands, subagents, rules and hooks in every
// user-global location the recovered producers can read. XDG base directories
// point at a separate disposable directory (platform runtime caches live there).
//
// Three runs start concurrently, each with launcher-style arguments:
//   install-a/data/local  (installation A, default profile, "alpha")
//   install-a/data/beta   (installation A, second named profile, "beta")
//   install-b/data/local  (installation B, default profile, "gamma")
// Each run lists only its own Customize items, creates a skill and a command,
// adds a local fixture provider, completes an Agent chat, runs an approved Agent
// shell command, creates a plan in Plan mode and uses an integrated terminal.
// Afterwards no file or directory under HOME may be created, changed or removed,
// and each run's agent data must be inside its own profile home. The one
// exception is the integrated terminal's own shell history (see
// shell-history-policy.mjs): allowed only when every recorded line is a command
// typed into an integrated terminal whose interactive shell reported that file.
// HOME startup files add a history entry in interactive `-c` shells, so an Agent state
// shell that saved history would add an unattributable line and fail the run.
// The fixture model is a local HTTP server: no AI provider request is made.
//
// HOME reads are detected through access times: after seeding, every HOME file
// gets an access time older than its modification time, so (relatime or
// strictatime) any read moves it. The verifier's own reads use O_NOATIME.
// HOME also holds MCP discovery configurations (product, Claude desktop,
// Windsurf; the Claude one also under XDG_CONFIG_HOME) with discovery enabled,
// Claude plugin installs, marketplaces and enabledPlugins, product local
// plugins and a file policy. Only alpha has a local plugin of its own, and
// alpha starts with the developer file policy enabled.
//
// Options:
//   --migrate                    Single alpha run after `npm run migrate:profile-home`
//                                imported legacy HOME data (additive, profile wins).
//   --second-installation <dir>  gamma runs from a separately packaged tree
//                                (`npm run package:linux -- <dir>`), with that tree's
//                                own electron-host/data/local, not the shared host.
const root = resolve(import.meta.dirname, '..');
const { layout } = await loadRuntime(root);
const argv = process.argv.slice(2);
const migrateMode = argv.includes('--migrate');
const secondIndex = argv.indexOf('--second-installation');
const secondInstallation = secondIndex < 0 ? undefined : resolve(argv[secondIndex + 1] ?? '');
if (secondIndex >= 0 && !argv[secondIndex + 1]) throw new Error('--second-installation needs a packaged directory');
if (migrateMode && secondInstallation) throw new Error('--migrate and --second-installation are separate runs');
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, migrateMode ? 'logs/global-paths-migrate-' : 'logs/global-paths-'));
const home = join(directory, 'home'), xdg = join(directory, 'xdg');
const spawnedDirectory = join(directory, 'spawned');
await mkdir(spawnedDirectory, { recursive: true });
const skill = name => `---\nname: ${name}\ndescription: ${name} fixture skill\n---\nFixture skill ${name}.\n`;
const agent = name => `---\nname: ${name}\ndescription: ${name} fixture agent\n---\nFixture agent ${name}.\n`;
const rule = name => `---\ndescription: ${name} fixture\nalwaysApply: true\n---\nFixture rule ${name}.\n`;
const hook = name => JSON.stringify({ version: 1, hooks: { beforeSubmitPrompt: [{ command: `echo ${name}` }] } });
const claudeHook = name => JSON.stringify({ hooks: { UserPromptSubmit: [{ hooks: [{ type: 'command', command: `echo ${name}` }] }] } });
const plain = name => `Fixture ${name}.\n`;

// Home markers: none of these may be listed. The names are unique substrings.
const leaks = {
  'home-openvision-skill': ['.openvision/skills/home-openvision-skill/SKILL.md', skill],
  'home-cursor-skill': ['.cursor/skills/home-cursor-skill/SKILL.md', skill],
  'home-claude-skill': ['.claude/skills/home-claude-skill/SKILL.md', skill],
  'home-codex-skill': ['.codex/skills/home-codex-skill/SKILL.md', skill],
  'home-agents-skill': ['.agents/skills/home-agents-skill/SKILL.md', skill],
  'home-grok-skill': ['.grok/skills/home-grok-skill/SKILL.md', skill],
  'home-builtin-skill': ['.openvision/skills-cursor/home-builtin-skill/SKILL.md', skill],
  'home-openvision-command': ['.openvision/commands/home-openvision-command.md', plain],
  'home-claude-command': ['.claude/commands/home-claude-command.md', plain],
  'home-openvision-agent': ['.openvision/agents/home-openvision-agent.md', agent],
  'home-claude-agent': ['.claude/agents/home-claude-agent.md', agent],
  'home-openvision-rule': ['.openvision/rules/home-openvision-rule.mdc', rule],
  'home-openvision-hook': ['.openvision/hooks.json', hook],
  'home-claude-hook': ['.claude/settings.json', name => JSON.stringify({ ...JSON.parse(claudeHook(name)),
    enabledPlugins: { 'home-claude-plugin@home-market': true, 'home-market-plugin@home-market': true } })],
  'home-claude-local-hook': ['.claude/settings.local.json', claudeHook],
};
// An MCP server whose start would leave a marker outside HOME.
const mcpServers = name => JSON.stringify({ mcpServers: { [name]: { command: process.execPath,
  args: ['-e', `require('fs').writeFileSync(${JSON.stringify(join(spawnedDirectory, name))}, 'started')`] } } });
const pluginManifest = name => JSON.stringify({ name, displayName: name, description: `${name} fixture plugin`, version: '1.0.0' });
const claudeInstall = join(home, '.claude/plugins/cache/home-market/home-claude-plugin/1.0.0');
// Editor MCP discovery (Claude desktop, Windsurf, product global mcp.json) and
// the agent-host daemon's user mcp.json: none may be listed, read or started.
const mcpLeaks = {
  'home-mcp-openvision': ['.openvision/mcp.json', mcpServers],
  'home-mcp-cursor': ['.cursor/mcp.json', mcpServers],
  'home-mcp-claude-desktop': ['.config/Claude/claude_desktop_config.json', mcpServers],
  'home-mcp-windsurf': ['.codeium/windsurf/mcp_config.json', mcpServers],
};
// Plugins: product local plugins and the Claude plugin import with real content.
const pluginLeaks = {
  'home-local-plugin': ['.openvision/plugins/local/home-local-plugin/plugin.json', pluginManifest],
  'home-local-plugin-skill': ['.openvision/plugins/local/home-local-plugin/skills/home-local-plugin-skill/SKILL.md', skill],
  'home-local-plugin-agent': ['.openvision/plugins/local/home-local-plugin/agents/home-local-plugin-agent.md', agent],
  'home-claude-plugin': ['.claude/plugins/installed_plugins.json', () => JSON.stringify({ version: 2, plugins: {
    'home-claude-plugin@home-market': [{ scope: 'user', installPath: claudeInstall, version: '1.0.0' }] } })],
  'home-claude-plugin-manifest': ['.claude/plugins/cache/home-market/home-claude-plugin/1.0.0/.claude-plugin/plugin.json',
    () => pluginManifest('home-claude-plugin')],
  'home-claude-plugin-skill': ['.claude/plugins/cache/home-market/home-claude-plugin/1.0.0/skills/home-claude-plugin-skill/SKILL.md', skill],
  'home-claude-plugin-agent': ['.claude/plugins/cache/home-market/home-claude-plugin/1.0.0/agents/home-claude-plugin-agent.md', agent],
  'home-market-plugin': ['.claude/plugins/marketplaces/home-market/.claude-plugin/marketplace.json', name => JSON.stringify({
    name: 'home-market', owner: { name: 'fixture' }, plugins: [{ name, source: './plugins/home-market-plugin', description: `${name} fixture` }] })],
  'home-market-plugin-skill': ['.claude/plugins/marketplaces/home-market/plugins/home-market-plugin/skills/home-market-plugin-skill/SKILL.md', skill],
  'home-known-marketplaces': ['.claude/plugins/known_marketplaces.json', () => JSON.stringify({ 'home-market': {
    source: { source: 'directory', path: join(home, '.claude/plugins/marketplaces/home-market') },
    installLocation: join(home, '.claude/plugins/marketplaces/home-market') } })],
  'home-openvision-plugin-cache': ['.openvision/plugins/cache/home-cache/home-cache-plugin/1.0.0/plugin.json', pluginManifest],
  'home-github-plugins': ['.openvision/plugins/github-plugins.json', () => JSON.stringify({ version: 1, plugins: [] })],
};
// Gated or developer-only home roots: none may be read.
const gatedLeaks = {
  'home-file-policy': ['.openvision-local/policy.json', () => JSON.stringify({ UpdateMode: 'none' })],
  'home-linux-policy': ['.openvision/policy.json', () => JSON.stringify({})],
};
const xdgLeaks = { 'xdg-mcp-claude-desktop': ['config/Claude/claude_desktop_config.json', mcpServers] };
// Files whose access time must not move: everything except shell startup and history.
const readGuarded = { ...mcpLeaks, ...pluginLeaks, ...gatedLeaks };
// Pre-existing HOME data from earlier builds: readers must not use it either.
const homeData = {
  'home-plan': ['.openvision/plans/home-plan.plan.md', plain],
  'home-ide-state': ['.openvision/ide_state.json', () => JSON.stringify({ recentlyViewedFiles: [] })],
  'home-argv': ['.openvision-local/argv.json', () => '{}\n'],
  'home-claude-session': ['.claude/projects/placeholder/session.jsonl', () => '{}\n'],
  'home-codex-session': ['.codex/sessions/2026/session.jsonl', () => '{}\n'],
};
// Project markers: intentional project-local inputs, expected in every run.
const projectItems = {
  'project-openvision-skill': ['.openvision/skills/project-openvision-skill/SKILL.md', skill],
  'project-openvision-command': ['.openvision/commands/project-openvision-command.md', plain],
  'project-openvision-rule': ['.openvision/rules/project-openvision-rule.mdc', rule],
};
// Startup files like a user's: an interactive `-c` shell (the Agent's state
// shell) records a history entry; integrated terminals (no `c` flag) do not.
const shellStartup = {
  'bash-profile': ['.bash_profile', () => '[ -f ~/.bashrc ] && . ~/.bashrc\n'],
  'bashrc': ['.bashrc', () => 'case $- in *c*) history -s "ov-startup-history $$" ;; esac\n' +
    // Attribution outside HOME: which process started each interactive shell.
    `case $- in *i*) { printf '%s\\t%s\\t%s\\t%s\\t' "$$" "$-" "$PPID" "\${BASH_EXECUTION_STRING:0:160}" | tr '\\n' ' '; ` +
    `tr '\\0' ' ' < /proc/$PPID/cmdline | cut -c1-200; } >> '${join(directory, 'shell-startups.tsv')}' ;; esac\n`],
};
// Legacy HOME data for --migrate, and one item that the profile already owns.
const legacy = {
  'legacy-skill': ['.openvision/skills/legacy-skill/SKILL.md', skill],
  'legacy-agent': ['.openvision/agents/legacy-agent.md', agent],
  'legacy-plan': ['.openvision/plans/legacy-plan.plan.md', plain],
  'legacy-command': ['.openvision/commands/legacy-command.md', plain],
  'conflict-skill': ['.openvision/skills/conflict-skill/SKILL.md', () => '---\nname: conflict-skill\ndescription: conflict-skill home version\n---\nHome.\n'],
};
const conflictProfile = '---\nname: conflict-skill\ndescription: conflict-skill profile version\n---\nProfile.\n';
const write = async (base, items) => {
  for (const [name, [relative, body]] of Object.entries(items)) {
    await mkdir(resolve(join(base, relative), '..'), { recursive: true });
    await writeFile(join(base, relative), body(name));
  }
};
// --migrate keeps the markers that the import does not cover (third-party and
// other-product folders) as leaks; product data in HOME becomes legacy input.
const activeLeaks = migrateMode
  ? Object.fromEntries(Object.entries(leaks).filter(([, [relative]]) => !relative.startsWith('.openvision/'))) : leaks;
await write(home, migrateMode ? { ...activeLeaks, ...legacy, ...shellStartup }
  : { ...leaks, ...homeData, ...mcpLeaks, ...pluginLeaks, ...gatedLeaks, ...shellStartup });
// The XDG base directories exist, as on a desktop session; otherwise libraries
// such as Chromium's fontconfig fall back to legacy HOME caches (~/.fontconfig).
for (const name of ['config', 'data', 'cache', 'state']) await mkdir(join(xdg, name), { recursive: true });
if (!migrateMode) await write(xdg, xdgLeaks);

// The second installation is a packaged tree with its own launcher data root.
let second;
if (secondInstallation) {
  const host = join(secondInstallation, 'electron-host');
  const manifest = JSON.parse(await readFile(join(secondInstallation, 'openvision-package.json'), 'utf8'));
  if (await lstat(join(host, 'data/local')).then(() => true, () => false))
    throw new Error('The second installation already has data/local; package a fresh tree');
  const real = await realpath(secondInstallation);
  if (real.startsWith(layout.host + '/') || real === layout.host) throw new Error('The second installation must be a separate tree');
  second = { directory: real, host, executable: join(host, 'openvision'), manifest };
}
const runs = (migrateMode ? [{ name: 'alpha', installation: 'install-a', profile: 'data/local' }] : [
  { name: 'alpha', installation: 'install-a', profile: 'data/local' },
  { name: 'beta', installation: 'install-a', profile: 'data/beta' },
  { name: 'gamma', installation: 'install-b', profile: 'data/local' },
]).map(run => run.name === 'gamma' && second
  ? { ...run, installation: 'packaged-b', host: second.host, executable: second.executable,
    profile: join(second.host, 'data/local'), extensions: join(second.host, 'data/local-extensions'), project: join(directory, `project-${run.name}`) }
  : { ...run, host: layout.host, executable: layout.executable, profile: join(directory, run.installation, run.profile),
    extensions: join(directory, run.installation, `data/extensions-${run.name}`), project: join(directory, `project-${run.name}`) });
// The profile home is <user-data-dir>/User; user-level paths keep their layout.
const profileItems = name => ({
  [`${name}-profile-skill`]: [`User/.openvision/skills/${name}-profile-skill/SKILL.md`, skill],
  [`${name}-profile-command`]: [`User/.openvision/commands/${name}-profile-command.md`, plain],
  [`${name}-profile-hook`]: ['User/.openvision/hooks.json', hook],
  [`${name}-profile-agent`]: [`User/agents/${name}-profile-agent.md`, agent],
  // Only alpha owns a local plugin; its skill and subagent come with it.
  ...(name === 'alpha' && !migrateMode ? {
    'alpha-local-plugin': ['User/.openvision/plugins/local/alpha-local-plugin/plugin.json', pluginManifest],
    'alpha-plugin-skill': ['User/.openvision/plugins/local/alpha-local-plugin/skills/alpha-plugin-skill/SKILL.md', skill],
    'alpha-plugin-agent': ['User/.openvision/plugins/local/alpha-local-plugin/agents/alpha-plugin-agent.md', agent],
  } : {}),
});
// Discovery-path files inside the profile home: the redirected adapters may read
// them (not required); they hold no servers, so nothing is listed or started.
const profileDiscovery = {
  'profile-mcp-openvision': ['User/.openvision/mcp.json', () => '{"mcpServers":{}}'],
  'profile-mcp-claude-desktop': ['User/.config/Claude/claude_desktop_config.json', () => '{"mcpServers":{}}'],
  'profile-mcp-windsurf': ['User/.codeium/windsurf/mcp_config.json', () => '{"mcpServers":{}}'],
};
const profilePolicy = 'User/.openvision-local/policy.json';
for (const run of runs) {
  await mkdir(join(run.profile, 'User'), { recursive: true });
  await write(run.profile, migrateMode ? {} : { ...profileItems(run.name), ...profileDiscovery });
  if (!migrateMode && run.name === 'alpha') await write(run.profile, { policy: [profilePolicy, () => '{}'] });
  await writeFile(join(run.profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
    'git.openRepositoryInParentFolders': 'never',
    // Editor MCP discovery on for every adapter: it must still not reach HOME.
    'chat.mcp.enabled': true, 'chat.mcp.discovery.enabled': true, 'chat.mcp.autostart': 'newAndOutdated' }));
  await write(run.project, projectItems);
  await writeFile(join(run.project, 'readme.txt'), 'OpenVision global path verification\n');
}

// Reads that leave access times unchanged (the verifier owns these files).
async function quietRead(file) {
  let handle;
  try { handle = await open(file, constants.O_RDONLY | constants.O_NOATIME); }
  catch (error) { if (error.code !== 'EPERM') throw error; handle = await open(file, constants.O_RDONLY); }
  try { return await handle.readFile(); } finally { await handle.close(); }
}
async function walkFiles(path, visit) {
  for (const entry of await readdir(path, { withFileTypes: true })) {
    const full = join(path, entry.name);
    if (entry.isDirectory()) await walkFiles(full, visit); else await visit(full, entry);
  }
}
async function snapshot(path) {
  const out = {};
  async function walk(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name), info = await lstat(full), key = full.slice(path.length);
      if (entry.isDirectory()) { out[key + '/'] = `dir ${info.mtimeMs}`; await walk(full); }
      else out[key] = entry.isFile() ? `${info.size} ${info.mtimeMs} ${(await quietRead(full)).toString('base64')}` : `link ${info.mtimeMs}`;
    }
  }
  await walk(path);
  return out;
}
const list = async path => Object.keys(await snapshot(path).catch(() => ({}))).filter(key => !key.endsWith('/'));
// Access time one hour before modification: the next read of the file moves it.
async function armReadDetector(path) {
  const armed = {};
  await walkFiles(path, async (full, entry) => {
    if (!entry.isFile()) return;
    const info = await lstat(full);
    await utimes(full, new Date(info.mtimeMs - 3600e3), info.mtime);
    armed[full.slice(path.length)] = (await lstat(full)).atimeMs;
  });
  return armed;
}
async function readSince(path, armed) {
  const read = [];
  for (const [key, atime] of Object.entries(armed)) {
    const info = await lstat(join(path, key)).catch(() => undefined);
    if (info && info.atimeMs !== atime) read.push(key);
  }
  return read.sort();
}
// The detector must work on this filesystem (fails closed on noatime).
const probe = join(directory, 'atime-probe');
await writeFile(probe, 'probe');
const probeArmed = await armReadDetector(directory).then(armed => ({ '/atime-probe': armed['/atime-probe'] }));
await readFile(probe);
const readDetector = { works: (await readSince(directory, probeArmed)).includes('/atime-probe'),
  mount: (await readFile('/proc/self/mounts', 'utf8')).split('\n').filter(line => / \/ /.test(line)).join('; ') };
if (!readDetector.works) throw new Error(`HOME read detector does not work on this filesystem: ${readDetector.mount}`);

// --migrate: the profile already owns conflict-skill; the explicit import runs twice.
const npm = (...args) => new Promise((done, fail) => {
  const child = spawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', args, { cwd: root, env: process.env });
  let stdout = '', stderr = '';
  child.stdout.on('data', chunk => { stdout += chunk; }); child.stderr.on('data', chunk => { stderr += chunk; });
  child.once('error', fail); child.once('exit', code => done({ code, stdout, stderr }));
});
const migration = {};
if (migrateMode) {
  const [alpha] = runs;
  await write(alpha.profile, { conflict: ['User/.openvision/skills/conflict-skill/SKILL.md', () => conflictProfile] });
  const homeBeforeImport = await snapshot(home);
  const importOnce = async () => {
    const output = await npm('run', '--silent', 'migrate:profile-home', '--', '--home', home, '--profile', alpha.profile);
    return { exitCode: output.code, result: JSON.parse(output.stdout.slice(output.stdout.indexOf('{'))), stderr: output.stderr.trim() };
  };
  migration.first = await importOnce();
  migration.recordAfterFirst = await readFile(join(alpha.profile, 'User/.openvision/migrations/home-import.json'), 'utf8').catch(() => undefined);
  const profileAfterFirst = await snapshot(join(alpha.profile, 'User'));
  migration.second = await importOnce();
  migration.profileUnchangedBySecond = JSON.stringify(await snapshot(join(alpha.profile, 'User'))) === JSON.stringify(profileAfterFirst);
  migration.homeUnchanged = JSON.stringify(await snapshot(home)) === JSON.stringify(homeBeforeImport);
  migration.files = Object.fromEntries(await Promise.all([
    ['skill', 'User/.openvision/skills/legacy-skill/SKILL.md'], ['agent', 'User/agents/legacy-agent.md'],
    ['plan', 'User/.openvision/plans/legacy-plan.plan.md'], ['command', 'User/.openvision/commands/legacy-command.md'],
    ['conflict', 'User/.openvision/skills/conflict-skill/SKILL.md'],
  ].map(async ([key, file]) => [key, await readFile(join(alpha.profile, file), 'utf8').catch(() => undefined)])));
}
const homeArmed = await armReadDetector(home);
const xdgArmed = await armReadDetector(xdg);
const profileArmed = Object.fromEntries(await Promise.all(runs.map(async run => [run.name, await armReadDetector(join(run.profile, 'User'))])));
const homeBefore = await snapshot(home);

// Stateless fixture model: the reply depends only on the last user message, so
// concurrent runs cannot interfere.
const requests = [];
const lastUser = messages => JSON.stringify(messages?.findLast(message => message.role === 'user')?.content ?? '');
const server = createServer(async (request, response) => {
  if (request.url === '/v1/models') {
    response.setHeader('content-type', 'application/json');
    return response.end(JSON.stringify({ data: [{ id: 'fixture-agent' }] }));
  }
  if (request.url !== '/v1/chat/completions') { response.statusCode = 404; return response.end(); }
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  const payload = JSON.parse(Buffer.concat(chunks)), text = lastUser(payload.messages);
  const tools = payload.tools?.map(tool => tool.function?.name) ?? [];
  const run = runs.find(item => text.includes(`OV-${item.name}`));
  requests.push({ run: run?.name, tools, authorized: request.headers.authorization === 'Bearer fixture-key' });
  response.writeHead(200, { 'Content-Type': 'text/event-stream' });
  const event = (delta, finish_reason = null) => response.write(`data: ${JSON.stringify({
    id: 'fixture', object: 'chat.completion.chunk', model: payload.model, choices: [{ index: 0, delta, finish_reason }] })}\n\n`);
  const toolResult = payload.messages?.at(-1)?.role === 'tool';
  const say = content => { event({ role: 'assistant', content }); event({}, 'stop'); };
  const call = (name, args) => { event({ role: 'assistant', tool_calls: [{ index: 0, id: `call_${name}_${run?.name}`, type: 'function',
    function: { name, arguments: JSON.stringify(args) } }] }); event({}, 'tool_calls'); };
  if (!run) say('Fixture.');
  else if (text.includes('shell step') && !toolResult)
    call('Shell', { command: `${agentShellRecord(run.name)}; node -e "require('fs').writeFileSync('agent-${run.name}.txt', 'ok')"`, working_directory: run.project,
      description: `Write OV-${run.name} agent marker`, block_until_ms: 30000 });
  else if (text.includes('plan step') && !toolResult) {
    const plan = payload.tools?.find(tool => /plan/i.test(tool.function?.name ?? '') && /create/i.test(tool.function.name));
    if (!plan) say(`OV-${run.name} no plan tool.`);
    else {
      const properties = plan.function.parameters?.properties ?? {};
      const args = {};
      for (const [key, schema] of Object.entries(properties))
        args[key] = schema.type === 'array' ? [] : schema.type === 'boolean' ? false : `OV-${run.name} plan ${key}`;
      Object.assign(args, { name: `ov-${run.name}-plan`, overview: `OV-${run.name} plan overview`,
        plan: `# OV-${run.name} plan\n\nFixture plan.\n` });
      for (const key of Object.keys(args)) if (!(key in properties)) delete args[key];
      call(plan.function.name, args);
    }
  } else say(toolResult ? `OV-${run.name} tool finished.` : `OV-${run.name} reply verified.`);
  response.end('data: [DONE]\n\n');
});
await new Promise(done => server.listen(0, '127.0.0.1', done));

// Self-reports: PID, shell flags ($- has `i` when interactive) and HISTFILE.
const shellRecord = '"$$" "$-" "${HISTFILE-}"';
const agentShellRecord = name => `printf '%s|%s|%s|%s' ${shellRecord} "$(builtin shopt -qo history && echo on || echo off)" > agent-shell-${name}.txt`;
const terminalCommand = name => `echo ov-terminal > terminal-${name}.txt; printenv VSCODE_OPENVISION_PROFILE_HOME > terminal-env-${name}.txt; ` +
  `printf '%s|%s|%s\\n' ${shellRecord} > terminal-shell-${name}.txt; echo done`;
const sections = ['Skills', 'Commands', 'Subagents', 'Hooks', 'Rules', 'Plugins', 'MCPs'];
// Customize shows some names title-cased ("Alpha Local Plugin"): compare
// case-insensitively with spaces, underscores and hyphens as one separator.
const normalized = text => text.toLowerCase().replace(/[\s_-]+/g, '-');
async function execute(run) {
  const { name, profile } = run, result = { profile: name, installation: run.installation, userDataDir: profile };
  const env = { ...process.env, HOME: home, XDG_CONFIG_HOME: join(xdg, 'config'),
    XDG_DATA_HOME: join(xdg, 'data'), XDG_CACHE_HOME: join(xdg, 'cache'), XDG_STATE_HOME: join(xdg, 'state') };
  for (const key of ['ELECTRON_RUN_AS_NODE', 'CLAUDE_CONFIG_DIR', 'CODEX_HOME', 'CURSOR_DATA_DIR', 'CURSOR_CONFIG_DIR', 'VSCODE_OPENVISION_PROFILE_HOME'])
    delete env[key];
  let app, page;
  const step = async (label, action) => {
    try { await action(); result.steps[label] = true; }
    catch (error) {
      result.steps[label] = false; result.stepErrors[label] = error.message.split('\n')[0];
      await page?.screenshot({ path: join(directory, `${name}-${label}-failure.png`) }).catch(() => {});
      await page?.keyboard.press('Escape').catch(() => {});
    }
  };
  result.steps = {}; result.stepErrors = {};
  try {
    app = await _electron.launch({ executablePath: run.executable, env, timeout: 60000,
      args: ['--user-data-dir', profile, '--extensions-dir', run.extensions, '--new-window',
        '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
        // Developer-only file policy, read from the profile home.
        ...(run.name === 'alpha' && !migrateMode ? ['--__enable-file-policy'] : []),
        ...(process.platform === 'linux' ? await linuxSandboxArguments(run.host) : []),
        run.project, join(run.project, 'readme.txt')] });
    page = await app.firstWindow(); page.setDefaultTimeout(20000);
    await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
    await enterWorkspace(page);
    await page.waitForTimeout(8000);
    const palette = async command => {
      await page.keyboard.press('ControlOrMeta+Shift+p');
      await page.locator('.quick-input-widget input[type="text"]').fill(`>${command}`);
      await page.locator('.quick-input-widget').getByText(command, { exact: true }).first().waitFor();
      await page.keyboard.press('Enter');
    };
    const openCustomize = async () => {
      await palette('Open Customize');
      await page.getByRole('button', { name: 'Rules', exact: true }).waitFor();
    };
    await openCustomize();
    // Providers push their lists after debounced discovery; allow late producers.
    await page.waitForTimeout(6000);
    const texts = {};
    for (const section of sections) {
      const button = page.getByRole('button', { name: section, exact: true });
      if (!await button.count()) continue;
      await button.first().click();
      await page.waitForTimeout(1500);
      texts[section] = await page.locator('body').innerText();
      await page.screenshot({ path: join(directory, `${name}-${section.toLowerCase()}.png`) }).catch(() => {});
      await writeFile(join(directory, `${name}-${section.toLowerCase()}.txt`), texts[section]);
    }
    // Customize > New for user skills and commands writes into this profile.
    result.created = {};
    for (const [section, file] of [['Skills', `User/.openvision/skills/${name}-created-skill/SKILL.md`],
      ['Commands', `User/.openvision/commands/${name}-created-command.md`]]) {
      // Three concurrent windows contend for focus; a quick input that closes
      // before it is filled is retried once. Only the profile file decides success.
      for (let attempt = 0; attempt < 2 && !result.created[section]; attempt++) {
        try {
          await openCustomize();
          await page.getByRole('button', { name: section, exact: true }).first().click();
          await page.waitForTimeout(1000);
          await page.getByRole('button', { name: 'New', exact: true }).first().click();
          const input = page.locator('.quick-input-widget input[type="text"]');
          await input.waitFor();
          await page.waitForTimeout(500);
          await input.fill(`${name}-created-${section === 'Skills' ? 'skill' : 'command'}`, { timeout: 10000 });
          await page.keyboard.press('Enter');
          await page.waitForTimeout(2500);
        } catch (error) { result.creationRetries = [...(result.creationRetries ?? []), `${section}: ${error.message.split('\n')[0]}`]; }
        result.created[section] = await readFile(join(profile, file), 'utf8').then(() => true, () => false);
        await page.keyboard.press('Escape');
      }
    }
    const all = Object.values(texts).join('\n'), lists = item => normalized(all).includes(normalized(item));
    // Other profiles' items, including alpha's plugin when this is not alpha.
    const others = ['alpha', 'beta', 'gamma'].filter(item => item !== name).flatMap(item => Object.keys(profileItems(item)));
    const listedLeaks = migrateMode ? Object.keys(activeLeaks)
      : [...Object.keys(leaks), ...Object.keys(mcpLeaks), ...Object.keys(pluginLeaks), ...Object.keys(xdgLeaks)];
    result.leaked = [...listedLeaks, ...others].filter(lists);
    result.missing = [...Object.keys(projectItems), ...(migrateMode ? ['legacy-skill', 'legacy-agent', 'legacy-command', 'conflict-skill'] : []),
      ...(migrateMode ? [] : Object.keys(profileItems(name)))].filter(item => !lists(item));
    if (migrateMode) result.conflictListed = { profile: lists('conflict-skill profile version'), home: lists('conflict-skill home version') };
    if (migrateMode) return result;

    // Full session: provider, Agent chat, approved shell command, plan, terminal.
    await step('provider', async () => {
      await page.keyboard.press('Escape');
      await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
      await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
      const settings = page.locator('.openvision-model-settings');
      await settings.getByRole('button', { name: 'Add Provider', exact: true }).click();
      await page.getByLabel('Provider Name', { exact: true }).fill('Global path fixture');
      await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${server.address().port}/v1`);
      await page.getByLabel('API Key', { exact: true }).fill('fixture-key');
      await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
      await page.locator('dialog').waitFor({ state: 'detached' });
      await page.locator('.tabs-container .tab').filter({ hasText: 'readme.txt' }).first().click();
      await page.keyboard.press('ControlOrMeta+Shift+l');
      await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
      await page.getByText('fixture-agent', { exact: true }).last().click();
      await page.keyboard.press('Escape');
    });
    const input = () => page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
    await step('chat', async () => {
      await input().fill(`OV-${name}: reply step. Do not use tools.`); await input().press('Enter');
      await page.getByText(`OV-${name} reply verified.`, { exact: true }).first().waitFor({ timeout: 45000 });
    });
    await step('agentShell', async () => {
      await input().fill(`OV-${name}: shell step.`); await input().press('Enter');
      await page.getByText('Pending approval', { exact: true }).filter({ visible: true }).waitFor({ timeout: 30000 });
      await page.getByRole('button', { name: 'Run', exact: true }).filter({ visible: true }).click();
      await page.getByText(`OV-${name} tool finished.`, { exact: true }).first().waitFor({ timeout: 45000 });
      assert.equal(await readFile(join(run.project, `agent-${name}.txt`), 'utf8'), 'ok');
      result.agentShell = parseShellRecord(await readFile(join(run.project, `agent-shell-${name}.txt`), 'utf8'));
    });
    await step('plan', async () => {
      // Select Plan from the composer mode menu (the control left of the model picker).
      await writeFile(join(directory, `${name}-composer.txt`), await page.locator('body').ariaSnapshot());
      // The mode control has no accessible name; it sits immediately left of the model picker.
      const model = await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().boundingBox();
      await page.mouse.click(model.x - 28, model.y + model.height / 2);
      await page.waitForTimeout(800);
      await writeFile(join(directory, `${name}-mode-menu.txt`), await page.locator('body').ariaSnapshot());
      await page.getByText('Plan', { exact: true }).filter({ visible: true }).last().click();
      await page.waitForTimeout(800);
      await input().fill(`OV-${name}: plan step.`); await input().press('Enter');
      const deadline = Date.now() + 45000;
      while (Date.now() < deadline && !(await list(join(profile, 'User/.openvision/plans'))).some(file => file.endsWith('.plan.md')))
        await page.waitForTimeout(1000);
      await page.screenshot({ path: join(directory, `${name}-plan.png`) }).catch(() => {});
      assert.ok((await list(join(profile, 'User/.openvision/plans'))).some(file => file.endsWith('.plan.md')), 'No plan file in the profile');
    });
    await step('terminal', async () => {
      await page.keyboard.press('Escape');
      await palette('Terminal: Create New Terminal');
      await page.locator('.terminal-wrapper .xterm').filter({ visible: true }).first().waitFor({ timeout: 30000 });
      await page.waitForTimeout(3000);
      await page.keyboard.type(`${terminalCommand(name)}\n`);
      const marker = join(run.project, `terminal-${name}.txt`), deadline = Date.now() + 20000;
      while (Date.now() < deadline && !await readFile(marker, 'utf8').catch(() => '')) await page.waitForTimeout(500);
      assert.equal((await readFile(marker, 'utf8')).trim(), 'ov-terminal');
      // Integrated terminals do not inherit the internal VSCODE_* variable.
      result.terminalProfileVariable = (await readFile(join(run.project, `terminal-env-${name}.txt`), 'utf8').catch(() => '')).trim();
      const shellFile = join(run.project, `terminal-shell-${name}.txt`);
      while (Date.now() < deadline && !await readFile(shellFile, 'utf8').catch(() => '')) await page.waitForTimeout(500);
      result.terminalShell = parseShellRecord(await readFile(shellFile, 'utf8').catch(() => ''));
    });
    await page.screenshot({ path: join(directory, `${name}-session.png`) }).catch(() => {});
  } catch (error) {
    result.error = error.stack;
    if (page) {
      await page.screenshot({ path: join(directory, `${name}-failure.png`) }).catch(() => {});
      await writeFile(join(directory, `${name}-failure.txt`), await page.locator('body').innerText()).catch(() => {});
    }
  } finally {
    if (app) {
      const child = app.process(), exited = new Promise(done => child.once('exit', done));
      const window = app.windows()[0], closing = app.close();
      await window?.getByText('Quit Anyway', { exact: true }).click({ timeout: 5000 }).catch(() => {});
      await closing; if (child.exitCode === null && child.signalCode === null) await exited;
      result.ownedHostExit = { exitCode: child.exitCode, signalCode: child.signalCode, at: Date.now() };
    }
  }
  // Agent data that earlier builds wrote to HOME must now be in this profile home.
  const files = await list(join(profile, 'User'));
  result.pluginRoot = await lstat(join(profile, 'User/.openvision/plugins/local')).then(info => info.isDirectory(), () => false);
  if (migrateMode) return result;
  result.profileData = {
    projects: files.some(file => file.startsWith('/.openvision/projects/')),
    plans: files.some(file => /^\/\.openvision\/plans\/.+\.plan\.md$/.test(file)),
    gitignore: files.includes('/.openvision/.gitignore'),
    ideState: files.includes('/.openvision/ide_state.json'),
    argv: files.includes('/.openvision-local/argv.json'),
  };
  return result;
}

const result = { success: false, checkedAt: new Date().toISOString(), platform: process.platform, arch: process.arch,
  scope: migrateMode
    ? 'Native Linux x64 source build. Legacy product data in a disposable HOME is imported into one profile with npm run migrate:profile-home (twice), then that profile starts and Customize lists the imported items. No AI provider request.'
    : `Native Linux x64 ${second ? 'source build plus a separately packaged second installation' : 'source build'}. Disposable HOME with product and third-party markers, MCP discovery configurations (discovery enabled), Claude plugin installs and marketplaces, product local plugins and a file policy; XDG directories outside HOME. Two named profiles of installation A and the default profile of installation B (${second ? 'its own packaged tree and launcher data root' : 'same compiled host, separate launcher-style data roots'}) run concurrently. Customize discovery and creation, local fixture provider, Agent chat, approved Agent shell command, Plan mode plan, integrated terminal. HOME reads detected by access time. No AI provider request.`,
  mode: migrateMode ? 'migrate' : second ? 'second-installation' : 'default', readDetector, migration, runs: [] };
if (second) {
  const digestOf = async file => createHash('sha256').update(await quietRead(file)).digest('hex');
  result.secondInstallation = { directory: second.directory, manifest: second.manifest, executable: second.executable,
    sharedHost: layout.host, relativeToSharedHost: relativePath(layout.host, second.host),
    mainBundle: { packaged: await digestOf(join(second.host, 'resources/app/out/main.js')), shared: await digestOf(join(layout.host, 'resources/app/out/main.js')) } };
}
try {
  result.runs = await Promise.all(runs.map(execute));
  result.homeRead = await readSince(home, homeArmed);
  result.xdgRead = await readSince(xdg, xdgArmed);
  result.profileRead = Object.fromEntries(await Promise.all(runs.map(async run => [run.name, await readSince(join(run.profile, 'User'), profileArmed[run.name])])));
  result.spawned = await readdir(spawnedDirectory);
  const homeAfter = await snapshot(home);
  result.homeAdded = Object.keys(homeAfter).filter(key => !(key in homeBefore));
  const history = join(home, terminalHistoryFile);
  const historyInfo = await lstat(history).catch(() => undefined);
  result.shellHistory = {
    content: historyInfo?.isFile() ? await readFile(history, 'utf8') : undefined,
    mtimeMs: historyInfo?.mtimeMs, mode: historyInfo && (historyInfo.mode & 0o777).toString(8),
  };
  result.shellHistory.attribution = attributeTerminalHistory({ home, added: result.homeAdded, content: result.shellHistory.content,
    typed: runs.map(run => terminalCommand(run.name)), terminals: result.runs.map(run => run.terminalShell).filter(Boolean) });
  result.homeRemoved = Object.keys(homeBefore).filter(key => !(key in homeAfter));
  result.homeChanged = Object.keys(homeBefore).filter(key => key in homeAfter && homeBefore[key] !== homeAfter[key]);
  result.shellStartups = (await readFile(join(directory, 'shell-startups.tsv'), 'utf8').catch(() => '')).split('\n').filter(Boolean)
    .map(line => { const [pid, flags, parent, command, parentCommand] = line.split('\t'); return { pid, flags, parent, command, parentCommand }; });
  result.xdgFiles = [...new Set((await list(xdg)).map(path => path.split('/').slice(0, 4).join('/')))].sort();
  result.requests = { total: requests.length, unauthorized: requests.filter(item => !item.authorized).length };
  // No guarded HOME or XDG file is read, and no discovered server starts.
  const guardedPaths = Object.values(readGuarded).map(([relative]) => '/' + relative);
  assert.deepEqual(result.homeRead.filter(path => guardedPaths.includes(path)), [], 'HOME MCP, plugin or policy files were read');
  assert.deepEqual(result.xdgRead.filter(path => path.includes('/Claude/')), [], 'XDG Claude desktop configuration was read');
  assert.deepEqual(result.spawned, [], 'An MCP server from HOME was started');
  if (!migrateMode) assert.ok(result.profileRead.alpha.includes('/' + profilePolicy.slice('User/'.length)),
    'alpha did not read its profile file policy (gate on)');
  if (migrateMode) {
    const { first, second: repeat } = migration;
    assert.equal(first.exitCode, 1, 'first import must report the profile conflict');
    assert.deepEqual(first.result.conflicts, [join(runs[0].profile, 'User/.openvision/skills/conflict-skill/SKILL.md')]);
    assert.deepEqual([first.result.errors, first.result.skippedLinks], [[], []]);
    assert.equal(first.result.copied, 4, 'legacy skill, agent, plan and command copied');
    assert.ok(migration.recordAfterFirst && JSON.parse(migration.recordAfterFirst).length === 1, 'home-import.json written once');
    assert.equal(repeat.result.copied, 0, 'second import copies nothing');
    assert.ok(migration.profileUnchangedBySecond, 'second import changed the profile');
    assert.ok(migration.homeUnchanged, 'import changed HOME');
    for (const key of ['skill', 'agent', 'plan', 'command']) assert.ok(migration.files[key], `migrated ${key} missing`);
    assert.equal(migration.files.conflict, conflictProfile, 'profile file must win');
  }
  for (const run of result.runs) {
    assert.equal(run.error, undefined, `${run.profile}: ${run.error}`);
    assert.deepEqual(run.leaked, [], `${run.profile}: global, other-profile or other-installation items listed`);
    assert.deepEqual(run.missing, [], `${run.profile}: expected profile/project items missing`);
    if (migrateMode) { assert.deepEqual(run.conflictListed, { profile: true, home: false }, `${run.profile}: conflicting skill not the profile's`); continue; }
    assert.equal(run.pluginRoot, true, `${run.profile}: local plugin root not created in the profile home`);
    assert.deepEqual(run.created, { Skills: true, Commands: true }, `${run.profile}: Customize creation did not write the profile`);
    assert.deepEqual(run.stepErrors, {}, `${run.profile}: session steps failed`);
    assert.deepEqual(run.profileData, { projects: true, plans: true, gitignore: true, ideState: true, argv: true },
      `${run.profile}: agent data missing from the profile home`);
    assert.equal(run.terminalProfileVariable, '', `${run.profile}: integrated terminal inherited the profile variable`);
    // The user's terminal shell is unchanged: interactive, with its own default HISTFILE.
    assert.equal(run.terminalShell?.interactive, true, `${run.profile}: integrated terminal shell is not interactive`);
    // Agent commands run in a non-interactive shell with history off.
    assert.equal(run.agentShell?.interactive, false, `${run.profile}: Agent command shell is interactive`);
    assert.equal(run.agentShell?.history, 'off', `${run.profile}: Agent command shell has history enabled`);
  }
  assert.deepEqual(result.shellHistory.attribution.unattributed, [], 'HOME shell history records non-terminal commands');
  assert.deepEqual({ added: unattributedAdditions(result.homeAdded, result.shellHistory.attribution), removed: result.homeRemoved, changed: result.homeChanged },
    { added: [], removed: [], changed: [] }, 'HOME was modified during the session');
  assert.equal(result.requests.unauthorized, 0);
  result.success = true;
} catch (error) {
  result.error ??= error.stack;
} finally {
  server.closeAllConnections(); await new Promise(done => server.close(done));
}
await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
console.log(JSON.stringify({ ...result, directory }, null, 2));
if (!result.success) process.exitCode = 1;
