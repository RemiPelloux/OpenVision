// OV-501 native verifier: where project data goes during a fixed workload.
// Linux only. The app runs in an owned no-route network namespace
// (data-destinations-namespace.sh). Every DNS name, TLS server name,
// connection and decrypted request is recorded and nothing is forwarded.
// A loopback model-provider fixture is the only configured destination.
// Workloads: indexing idle, Find in Files, Quick Open, provider setup, Agent,
// Tab, Quick Edit, terminal (echo + git commit), Source Control commit-message
// generation, a JS debug launch, an MCP STDIO fixture tool call, a local VSIX
// install and a final idle. Every loaded native addon is inventoried per
// process. Options: --no-strace, --proxy (also pass --proxy-server), --signal-trace (record signals and kill calls
// of the whole family to attribute an unrequested host exit).
import assert from 'node:assert/strict';
import { execFile, spawn } from 'node:child_process';
import { randomBytes } from 'node:crypto';
import { once } from 'node:events';
import { createServer } from 'node:http';
import { chmod, mkdir, mkdtemp, readdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { enterWorkspace } from './verification-workspace.mjs';
import { fileHash } from './import-files.mjs';
import { startCapture } from './capture-network.mjs';
import { canaryNeedles, findCanaries, payloadViews, summarizeRecords } from './data-destinations.mjs';
import { inventoryAddons, threadGroups, tgidOf } from './addon-inventory.mjs';
import { captureEnvironment, removedProxyVariables, startHeartbeat, startMapsSampler, parseSignalTrace } from './capture-harness.mjs';
import { createMcpStdioFixture } from './verify-mcp-stdio.mjs';
import { vsix } from './extension-lifecycle.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const run = promisify(execFile);
const innerIndex = process.argv.indexOf('--inner');

if (innerIndex < 0) {
  if (process.platform !== 'linux') throw new Error('verify:data-destinations requires Linux user and network namespaces');
  await mkdir(join(root, 'logs'), { recursive: true });
  const directory = await mkdtemp(join(root, 'logs/data-destinations-'));
  const child = spawn('unshare', ['--map-root-user', '--net', '--mount', 'sh',
    join(root, 'desktop/data-destinations-namespace.sh'), directory, String(process.getuid()), String(process.getgid()),
    process.execPath, fileURLToPath(import.meta.url), '--inner', directory, ...process.argv.slice(2)],
  { stdio: 'inherit', env: process.env });
  const [code] = await once(child, 'exit');
  process.exitCode = code ?? 1;
} else {
  await inner(process.argv[innerIndex + 1]);
}

async function inner(directory) {
  const { layout, appRoot } = await verificationRuntime(root);
  const tag = randomBytes(6).toString('hex');
  const canary = {
    content: `OVC-CONTENT-${tag}`, fileName: `ovc_name_${tag}`, dirName: `ovc-dir-${tag}`,
    commit: `OVC-COMMIT-${tag}`, branch: `ovc-branch-${tag}`, edit: `OVC-TYPED-${tag}`,
    terminal: `OVC-TERM-${tag}`, terminalCommit: `OVC-TCOMMIT-${tag}`, staged: `OVC-STAGED-${tag}`,
    debug: `OVC-DEBUG-${tag}`, vsix: `ovc-vsix-${tag}`,
  };
  const profile = join(directory, 'profile'), project = join(directory, 'project');
  const secretDir = join(project, canary.dirName), secretFile = join(secretDir, `${canary.fileName}.ts`);
  const main = join(project, 'main.js');
  const secretText = `// Private project canary.\nexport const secret = "${canary.content}";\n`;
  await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(secretDir, { recursive: true });
  await writeFile(secretFile, secretText);
  await writeFile(main, `// ${canary.content} reference\nconst answer = `);
  await writeFile(join(project, 'README.md'), `# Project ${canary.dirName}\n`);
  // JS debug fixture: the debuggee writes the debug canary to a marker file.
  const debugMarker = join(directory, 'debug-marker.txt'), terminalMarker = join(directory, 'terminal-marker.txt');
  await writeFile(join(project, 'debug-canary.js'), `const { writeFileSync } = require("node:fs");\n` +
    `const value = "${canary.debug}";\nconsole.log(value);\nwriteFileSync(process.argv[2], value);\n`);
  await mkdir(join(project, '.vscode'));
  await writeFile(join(project, '.vscode/launch.json'), JSON.stringify({ version: '0.2.0', configurations: [{ type: 'node', request: 'launch',
    name: 'OV debug canary', program: '${workspaceFolder}/debug-canary.js', args: [debugMarker], console: 'internalConsole' }] }, null, 2));
  const git = args => run('git', ['-c', 'user.name=OV', '-c', 'user.email=ov@example.invalid', '-c', 'init.defaultBranch=main', ...args], { cwd: project });
  await git(['init', '-q']); await git(['checkout', '-q', '-b', canary.branch]);
  await git(['add', '.']); await git(['commit', '-q', '-m', canary.commit]);
  await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
    'git.openRepositoryInParentFolders': 'never', 'editor.quickSuggestions': false, 'editor.formatOnSave': false,
    'editor.autoClosingBrackets': 'never', 'http.proxyStrictSSL': false,
    // In-workbench file picker (Install from VSIX); a controlled terminal shell.
    'files.simpleDialog.enable': true, 'terminal.integrated.enablePersistentSessions': false,
    'terminal.integrated.profiles.linux': { 'ov-bash': { path: '/bin/bash', args: ['--noprofile', '--norc'] } },
    'terminal.integrated.defaultProfile.linux': 'ov-bash' }));
  // Local VSIX fixture whose name and code carry the extension canary.
  const vsixFile = join(directory, `${canary.vsix}.vsix`);
  await writeFile(vsixFile, vsix({ manifest: { name: canary.vsix, publisher: 'openvision-fixture', version: '1.0.0',
    displayName: `OV destination ${canary.vsix}`, engines: { vscode: '^1.90.0' }, main: './extension.js', activationEvents: ['onStartupFinished'] },
  files: { 'extension.js': `"use strict";\nexports.activate = () => ({ canary: ${JSON.stringify(canary.vsix)} });\n` } }));
  const mcp = await createMcpStdioFixture();
  const canaries = [
    { id: 'content', value: canary.content, content: secretText }, { id: 'file-name', value: canary.fileName },
    { id: 'directory-name', value: canary.dirName }, { id: 'commit-message', value: canary.commit },
    { id: 'branch-name', value: canary.branch }, { id: 'typed-text', value: canary.edit },
    { id: 'terminal-echo', value: canary.terminal }, { id: 'terminal-commit', value: canary.terminalCommit },
    { id: 'staged-change', value: canary.staged }, { id: 'debug-output', value: canary.debug },
    { id: 'vsix-extension', value: canary.vsix }, { id: 'mcp-output', value: mcp.marker },
  ];
  const needles = canaryNeedles(canaries);
  let phase = 'startup';
  const phases = [];
  const enter = name => { phase = name; phases.push({ phase: name, at: new Date().toISOString() }); };
  enter('startup');

  const capture = await startCapture({ directory, clock: () => phase });
  const caFile = capture.authority.cert;

  // Configured model provider (the only allowed destination).
  const provider = [];
  let agentPlan = [], agentReply = 'OpenVision destination workload complete.';
  const generatedMessage = `OV fixture commit message ${tag}`;
  const server = createServer(async (request, response) => {
    const chunks = []; for await (const chunk of request) chunks.push(chunk);
    const body = Buffer.concat(chunks);
    const record = { phase, method: request.method, path: request.url, bytes: body.length + JSON.stringify(request.headers).length,
      canaries: findCanaries(payloadViews(body, request.headers), needles).map(hit => hit.canary) };
    provider.push(record);
    response.setHeader('content-type', 'application/json');
    if (request.url === '/v1/models') return response.end(JSON.stringify({ data: [{ id: 'fixture-model' }] }));
    if (request.url !== '/v1/chat/completions') { response.statusCode = 404; return response.end('{}'); }
    const payload = JSON.parse(body);
    record.kind = payload.tools?.length ? 'agent' : phase;
    if (payload.tools?.length) {
      record.tools = payload.tools.map(tool => tool.function?.name);
      response.writeHead(200, { 'content-type': 'text/event-stream' });
      const event = (delta, finish_reason = null) => response.write(`data: ${JSON.stringify({ id: 'fixture', object: 'chat.completion.chunk',
        model: payload.model, choices: [{ index: 0, delta, finish_reason }] })}\n\n`);
      const done = new Set(payload.messages.filter(message => message.role === 'tool').map(message => message.tool_call_id));
      const next = agentPlan.find(call => !done.has(call.id) && record.tools.includes(call.name));
      if (next) {
        event({ role: 'assistant', tool_calls: [{ index: 0, id: next.id, type: 'function', function: { name: next.name, arguments: JSON.stringify(next.args) } }] });
        event({}, 'tool_calls');
      } else {
        record.toolResults = payload.messages.filter(message => message.role === 'tool').map(message => message.tool_call_id);
        event({ role: 'assistant', content: agentReply }); event({}, 'stop');
      }
      return response.end('data: [DONE]\n\n');
    }
    const content = phase === 'tab' ? '42;' : phase === 'commit-message' ? generatedMessage : 'const answer = 2;';
    if (payload.stream) {
      response.writeHead(200, { 'content-type': 'text/event-stream' });
      for (const [delta, finish_reason] of [[{ role: 'assistant', content }, null], [{}, 'stop']])
        response.write(`data: ${JSON.stringify({ id: 'fixture', object: 'chat.completion.chunk', model: payload.model, choices: [{ index: 0, delta, finish_reason }] })}\n\n`);
      return response.end('data: [DONE]\n\n');
    }
    response.end(JSON.stringify({ choices: [{ finish_reason: 'stop', message: { role: 'assistant', content } }] }));
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const providerHost = '127.0.0.1';

  // Optional process attribution through strace on the owned process family.
  // clone/fork records map strace thread ids to their process (addon owners);
  // --signal-trace adds signal deliveries, kill calls and exit records.
  const signalTrace = process.argv.includes('--signal-trace');
  // The explicit proxy is opt-in (--proxy): with --proxy-server the BYOK Agent
  // turn never connects to the provider (reproduced here, logs/data-destinations-Zkbnby:
  // stream started, no connect; see rea-telemetry-linux.md). The namespace's
  // transparent catch-alls terminate TLS by SNI and record every request without it.
  const useProxy = process.argv.includes('--proxy');
  const strace = !process.argv.includes('--no-strace') && await run('strace', ['-V']).then(() => true, () => false);
  if (signalTrace && !strace) throw new Error('--signal-trace needs strace');
  const traceFile = join(directory, 'strace.log');
  let executable = layout.executable;
  if (strace) {
    executable = join(directory, 'traced-host.sh');
    const calls = ['execve', 'connect', 'sendto', 'clone', 'clone3', 'fork', 'vfork', ...(signalTrace ? ['kill', 'tgkill', 'tkill'] : [])];
    const signals = signalTrace ? `-q -ttt -e signal=TERM,INT,HUP,QUIT,KILL,PIPE,ABRT,SEGV,BUS,USR1,USR2` : '-qq -e signal=none';
    await writeFile(executable, `#!/bin/sh\nexec strace -f ${signals} -e trace=${calls.join(',')} -s 160 -o '${traceFile}' '${layout.executable}' "$@"\n`);
    await chmod(executable, 0o755);
  }

  const result = { checkedAt: new Date().toISOString(), platform: `${process.platform}-${process.arch}`, scope: 'Linux x64 source build; owned no-route network namespace; loopback provider fixture; nothing forwarded upstream',
    canaryTag: tag, strace, signalTrace, capture: useProxy ? 'explicit proxy + transparent catch-alls' : 'transparent catch-alls (AnyIP, DNS, nftables)', success: false, removedProxyVariables: removedProxyVariables(process.env), checks: {}, hashes: {
      workbench: await fileHash(join(appRoot, 'out/vs/workbench/workbench.desktop.main.js')),
      retrieval: await fileHash(join(appRoot, 'extensions/cursor-retrieval/dist/main.js')),
      fileServiceAddon: await fileHash(join(appRoot, 'extensions/cursor-retrieval/node_modules/@anysphere/file-service/file_service.linux-x64-gnu.node')),
    } };
  const errors = [];
  let app, page;
  const env = captureEnvironment(process.env, { NODE_EXTRA_CA_CERTS: caFile });
  // Host exits are recorded whether or not this verifier requested them; the
  // heartbeat survives a verifier that is itself stopped.
  const hostExits = [];
  let closing = false, rootPid;
  const heartbeat = startHeartbeat(join(directory, 'heartbeat.json'), () => ({ phase, hostPid: rootPid, hostExited: hostExits.length > 0 }));
  const maps = startMapsSampler(() => rootPid);
  const command = async name => {
    await page.keyboard.press('Escape');
    await page.keyboard.press('ControlOrMeta+Shift+p');
    const picker = page.locator('.quick-input-widget');
    await picker.locator('input[type="text"]').fill(`>${name}`);
    // Labels may carry a category prefix ("View: …").
    const row = picker.locator('.quick-input-list .monaco-list-row').filter({ hasText: name }).first();
    await row.waitFor(); await row.click();
  };
  const runAgent = async (text, plan, reply) => {
    agentPlan = plan; agentReply = reply;
    const input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
    await input.fill(text); await input.press('Enter');
  };
  try {
    app = await _electron.launch({ executablePath: executable, env, timeout: 90000,
      args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
        '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
        ...(useProxy ? [`--proxy-server=http://127.0.0.1:${capture.proxyPort}`] : []), '--ignore-certificate-errors',
        ...await linuxSandboxArguments(layout.host), project, main] });
    rootPid = app.process().pid;
    app.process().once('exit', (code, signal) => hostExits.push({ code, signal, phase, at: new Date().toISOString(), requested: closing }));
    page = await app.firstWindow(); page.setDefaultTimeout(20000);
    page.on('pageerror', error => errors.push(error.message));
    await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 90000 });
    await enterWorkspace(page);

    enter('idle-indexing');
    await page.waitForTimeout(Number(process.env.OV501_IDLE_MS ?? 60000));

    enter('find-in-files');
    await page.keyboard.press('ControlOrMeta+Shift+f');
    await page.waitForTimeout(800);
    await page.keyboard.insertText(canary.content);
    await page.keyboard.press('Enter');
    await page.locator('.search-view .monaco-list-row').filter({ hasText: canary.fileName }).first().waitFor({ timeout: 30000 });
    result.checks.findInFiles = true;

    enter('quick-open');
    await page.keyboard.press('ControlOrMeta+p');
    await page.locator('.quick-input-widget input[type="text"]').fill(canary.fileName);
    await page.locator('.quick-input-list .monaco-list-row').filter({ hasText: canary.fileName }).first().waitFor();
    await page.keyboard.press('Enter');
    await page.locator('.tabs-container .tab').filter({ hasText: canary.fileName }).first().waitFor();
    result.checks.quickOpen = true;

    enter('provider-setup');
    await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
    await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
    const settings = page.locator('.openvision-model-settings');
    await settings.getByRole('button', { name: 'Add Provider', exact: true }).click();
    await page.getByLabel('Provider Name', { exact: true }).fill('Destination fixture');
    await page.getByLabel('API Base URL', { exact: true }).fill(`http://${providerHost}:${server.address().port}/v1`);
    await page.getByLabel('API Key', { exact: true }).fill('fixture-key');
    await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
    await page.locator('dialog').waitFor({ state: 'detached' });
    await settings.getByRole('combobox', { name: 'Tab autocomplete model' }).selectOption({ label: 'Destination fixture · fixture-model' });

    enter('agent');
    await page.locator('.tabs-container .tab').filter({ hasText: 'main.js' }).first().click();
    await page.keyboard.press('ControlOrMeta+Shift+l');
    await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
    await page.getByText('fixture-model', { exact: true }).last().click();
    await page.keyboard.press('Escape');
    agentPlan = [
      { id: 'ov_read', name: 'Read', args: { path: secretFile } },
      { id: 'ov_grep', name: 'Grep', args: { path: project, pattern: canary.content, output_mode: 'content' } },
      { id: 'ov_glob', name: 'Glob', args: { target_directory: project, glob_pattern: `**/${canary.fileName}*` } },
      { id: 'ov_semantic', name: 'SemanticSearch', args: { query: canary.content } },
      { id: 'ov_codebase', name: 'codebase_search', args: { query: canary.content } },
    ];
    const input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
    await input.fill('Inspect the private canary module and search the project for it. Do not modify files.');
    await input.press('Enter');
    await page.getByText(agentReply, { exact: true }).first().waitFor({ timeout: 90000 });
    await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' }).catch(() => {});
    result.checks.agent = true;

    enter('tab');
    await page.locator('.tabs-container .tab').filter({ hasText: 'main.js' }).first().click();
    await page.locator('.monaco-editor .inputarea').first().focus();
    await page.keyboard.press('ControlOrMeta+End');
    await page.keyboard.insertText(' ');
    for (let i = 0; i < 100 && !provider.some(item => item.phase === 'tab' && item.kind === 'tab'); i++) await page.waitForTimeout(250);
    result.checks.tab = provider.some(item => item.phase === 'tab' && item.kind === 'tab');
    await page.keyboard.press('Escape');

    enter('inline-edit');
    await page.keyboard.press('ControlOrMeta+a'); await page.keyboard.press('ControlOrMeta+k');
    const prompt = page.locator('.monaco-editor [contenteditable="true"]').filter({ visible: true }).first();
    await prompt.click(); await page.keyboard.insertText(`Rewrite this ${canary.edit}`); await prompt.press('Enter');
    await page.getByText('Reject', { exact: true }).filter({ visible: true }).first().waitFor({ timeout: 30000 });
    await page.getByText('Reject', { exact: true }).filter({ visible: true }).first().click();
    result.checks.inlineEdit = provider.some(item => item.phase === 'inline-edit' && item.kind === 'inline-edit');

    enter('terminal');
    await command('Terminal: Create New Terminal');
    const terminal = page.locator('.terminal-wrapper .xterm-helper-textarea').filter({ visible: true }).first();
    await terminal.waitFor();
    const shellLine = `echo ${canary.terminal} > '${terminalMarker}' && printf '%s\\n' ${canary.terminal} > term-note.txt && git add term-note.txt && ` +
      `git -c user.name=OV -c user.email=ov@example.invalid commit -q -m ${canary.terminalCommit} && echo committed >> '${terminalMarker}'`;
    for (let attempt = 0; attempt < 3 && !(await readFile(terminalMarker, 'utf8').catch(() => '')).includes('committed'); attempt++) {
      await terminal.focus(); await page.keyboard.type(shellLine); await page.keyboard.press('Enter');
      for (let i = 0; i < 40 && !(await readFile(terminalMarker, 'utf8').catch(() => '')).includes('committed'); i++) await page.waitForTimeout(250);
    }
    result.checks.terminal = (await readFile(terminalMarker, 'utf8').catch(() => '')).startsWith(canary.terminal) &&
      (await git(['log', '-1', '--format=%s'])).stdout.trim() === canary.terminalCommit;

    enter('commit-message');
    await writeFile(join(project, 'staged-note.md'), `Staged change ${canary.staged}\n`);
    await git(['add', 'staged-note.md']);
    // Source Control has no palette command to open its view; both commands act
    // on the repository's SCM input, and the commit proves which message it held.
    await command('Generate Commit Message');
    for (let i = 0; i < 120 && !provider.some(item => item.phase === 'commit-message' && item.path === '/v1/chat/completions'); i++) await page.waitForTimeout(250);
    await page.waitForTimeout(2000);
    await command('Git: Commit Staged');
    const subject = async () => (await git(['log', '-1', '--format=%s'])).stdout.trim();
    for (let i = 0; i < 80 && await subject() !== generatedMessage; i++) await page.waitForTimeout(250);
    const generated = await subject() === generatedMessage;
    result.commitMessage = { providerRequests: provider.filter(item => item.phase === 'commit-message').length,
      stagedCanaryToProvider: provider.some(item => item.phase === 'commit-message' && item.canaries.includes('staged-change')),
      committedWithGeneratedMessage: generated };
    result.checks.commitMessage = generated && result.commitMessage.stagedCanaryToProvider;

    enter('debug');
    await page.keyboard.press('Escape');
    await command('Debug: Start Debugging');
    for (let i = 0; i < 160 && !existsSync(debugMarker); i++) await page.waitForTimeout(250);
    await page.waitForTimeout(3000);
    result.checks.debug = (await readFile(debugMarker, 'utf8').catch(() => '')) === canary.debug;

    enter('mcp');
    await writeFile(join(profile, 'User/mcp.json'), JSON.stringify({ mcpServers: { 'openvision-verify': mcp.configuration } }, null, 2));
    for (let i = 0; i < 180 && !mcp.requests.some(request => request.method === 'tools/list'); i++) await page.waitForTimeout(250);
    await page.waitForTimeout(3000);
    await page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first().click().catch(() => {});
    await runAgent('Call memory_probe on user-openvision-verify once.', [{ id: 'ov_mcp_call', name: 'CallMcpTool',
      args: { server: 'user-openvision-verify', toolName: 'memory_probe', description: 'OpenVision destination MCP probe', arguments: {} } }],
    'OpenVision MCP destination workload complete.');
    const approval = page.locator('[data-tool-approval-gate]').filter({ visible: true }).getByRole('button', { name: /^Run(?:\s|$)/ });
    await approval.first().waitFor({ timeout: 45000 }).then(() => approval.first().click(), () => {});
    await page.getByText('OpenVision MCP destination workload complete.', { exact: true }).first().waitFor({ timeout: 60000 });
    result.mcp = { toolLists: mcp.requests.filter(request => request.method === 'tools/list').length,
      toolCalls: mcp.requests.filter(request => request.method === 'tools/call').length, errors: mcp.errors };
    result.checks.mcp = result.mcp.toolCalls === 1 && provider.some(item => item.phase === 'mcp' && item.canaries.includes('mcp-output'));

    enter('vsix-install');
    await command('Extensions: Install from VSIX...');
    const pathInput = page.locator('.quick-input-widget input[type="text"]').filter({ visible: true }).first();
    await pathInput.waitFor();
    await pathInput.fill(vsixFile);
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    const installed = () => readdir(join(directory, 'extensions')).then(names => names.some(name => name.startsWith(`openvision-fixture.${canary.vsix}`)), () => false);
    for (let i = 0; i < 120 && !await installed(); i++) {
      const dialog = page.locator('.monaco-dialog-box').filter({ visible: true });
      if (await dialog.count()) {
        const button = dialog.first().getByRole('button', { name: /^(install|ok|trust)/i }).first();
        if (await button.count()) await button.click();
      }
      await page.waitForTimeout(250);
    }
    await page.waitForTimeout(3000);
    result.checks.vsixInstall = await installed();

    enter('idle-final');
    await page.waitForTimeout(Number(process.env.OV501_FINAL_IDLE_MS ?? 30000));
    await maps.sample();
    await page.screenshot({ path: join(directory, 'final.png') });
  } catch (error) {
    result.failure = error.stack; process.exitCode = 1;
    await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
  } finally {
    enter('shutdown');
    closing = true;
    if (app) {
      const child = app.process();
      const exited = new Promise(done => child.exitCode !== null || child.signalCode !== null ? done() : child.once('exit', done));
      const closed = app.close().catch(error => { result.cleanupFailure = error.message; });
      // A running Agent turn asks before quitting.
      await page?.getByText('Quit Anyway', { exact: true }).click({ timeout: 5000 }).catch(() => {});
      if (!await Promise.race([exited.then(() => true), new Promise(done => setTimeout(() => done(false), 60000))])) {
        result.cleanupFailure = 'Host did not exit within 60 s of quit; stopped through the launch handle';
        child.kill('SIGTERM'); // The launch handle owned by this verifier.
        await exited;
      }
      await closed;
      result.hostExit = { code: child.exitCode, signal: child.signalCode };
    }
    await maps.stop();
    await mcp.dispose().catch(error => { result.mcpCleanupFailure = error.message; });
    await heartbeat.stop();
    await new Promise(resolve => setTimeout(resolve, 1500));
    server.closeAllConnections(); server.close();
    await capture.close();
  }

  // Analysis.
  for (const record of capture.records)
    record.canaries = record.body ? findCanaries(payloadViews(record.body, record.headers ?? {}), needles) : [];
  const nameHits = [...capture.dns.map(entry => entry.name), ...capture.sni.map(entry => entry.name)]
    .filter(name => canaries.some(item => name.toLowerCase().includes(item.value.toLowerCase())));
  const requests = capture.records.filter(record => record.kind === 'request');
  const connections = capture.records.filter(record => record.kind === 'connection');
  const options = { providers: [providerHost] };
  const outbound = summarizeRecords(requests, options);
  const wire = summarizeRecords(connections, options);
  const providerSummary = { requests: provider.length, bytes: provider.reduce((sum, item) => sum + item.bytes, 0),
    byPhase: Object.fromEntries(phases.map(({ phase: name }) => [name, provider.filter(item => item.phase === name).length])),
    canaryPhases: [...new Set(provider.filter(item => item.canaries.length).map(item => item.phase))] };
  const sampled = maps.snapshot();
  const fileServicePids = [...sampled].filter(([, entry]) => entry.libraries.some(path => path.endsWith('file_service.linux-x64-gnu.node'))).map(([pid]) => pid);
  const trace = strace ? await attribute(traceFile, capture.proxyPort, fileServicePids) : undefined;
  const hashes = new Map();
  for (const path of new Set([...sampled.values()].flatMap(entry => entry.libraries)))
    if (path.endsWith('.node') || path.startsWith(appRoot) || path.startsWith(directory)) hashes.set(path, await fileHash(path).catch(() => null));
  const knownFile = join(root, 'desktop/fixtures/linux-x64-addons-3.21.13.json');
  const known = existsSync(knownFile) ? JSON.parse(await readFile(knownFile, 'utf8')).addons : [];
  const addons = inventoryAddons({ processes: sampled, hashes, known, appRoot, runDirectory: directory,
    directPids: trace ? [...new Set(trace.directConnects.map(item => item.tgid))] : [] });
  result.processes = [...sampled].map(([pid, entry]) => ({ pid, role: entry.role, command: entry.command,
    addons: entry.libraries.filter(path => hashes.has(path)), fileServiceLoaded: fileServicePids.includes(pid) }));
  const logs = await profileLogs(join(profile, 'logs'));
  Object.assign(result, {
    phases, errors,
    dns: summarizeNames(capture.dns), sni: summarizeNames(capture.sni),
    tunnels: capture.tunnels,
    outboundRequests: { count: outbound.requests, bytes: outbound.bytes, destinations: outbound.destinations },
    outboundConnections: { count: connections.length, wireBytesSent: wire.bytes,
      destinations: wire.destinations.map(({ host, category, requests: count, bytes, transports, phases: when }) => ({ host, category, connections: count, bytes, transports, phases: when })) },
    requestLog: requests.map(({ phase: when, transport, host, method, path, bodyBytes, bytes, canaries: hits }) =>
      ({ phase: when, transport, host, method, path, bodyBytes, bytes, canaries: hits })),
    canaryLeaks: outbound.canaryLeaks.map(({ host, path, canaries: hits, phase: when }) => ({ host, path, phase: when, canaries: hits })),
    canaryInNames: nameHits, provider: providerSummary,
    agentTools: provider.find(item => item.tools)?.tools, agentToolResults: provider.findLast(item => item.toolResults)?.toolResults,
    trace, localMode: logs,
    addons: { ...addons, knownList: existsSync(knownFile) ? 'desktop/fixtures/linux-x64-addons-3.21.13.json' : null, mapsSamples: maps.samples },
    hostExits, unrequestedHostExits: hostExits.filter(item => !item.requested),
    heartbeat: { beats: heartbeat.samples.length, minMemAvailableKiB: Math.min(...heartbeat.samples.map(item => item.memAvailableKiB)),
      maxPressureSomeAvg10: Math.max(0, ...heartbeat.samples.map(item => item.pressureSomeAvg10 ?? 0)) },
    signals: signalTrace ? summarizeSignals(parseSignalTrace(await readFile(traceFile, 'utf8').catch(() => '')), rootPid) : undefined,
    terminalProvider: provider.filter(item => item.phase === 'terminal').length,
  });
  result.checks.noCanaryOutsideProvider = result.canaryLeaks.length === 0 && nameHits.length === 0;
  result.checks.providerReceivedProjectData = providerSummary.canaryPhases.length > 0;
  result.checks.indexingDisabledByLocalMode = logs.localModeIndexingDisabled;
  if (trace) result.checks.fileServiceNoDirectSockets = trace.addonProcesses.every(pid => !trace.directConnects.some(item => item.tgid === pid));
  result.checks.addonsInventoried = addons.checks.addonsInventoried && fileServicePids.length > 0;
  if (trace) result.checks.noAddonDirectSockets = addons.checks.noAddonDirectSockets;
  // Nothing but the configured provider: no captured request, connection or direct connect.
  result.checks.noNonProviderTraffic = outbound.requests === 0 && connections.length === 0 && (!trace || trace.directConnects.length === 0);
  result.checks.hostExitRequested = hostExits.length > 0 && hostExits.every(item => item.requested);
  if (result.unrequestedHostExits.length) result.mainLogTail = await mainLogTail(join(profile, 'logs'));
  await writeFile(join(directory, 'requests.json'), JSON.stringify(capture.records.map(record => ({ ...record,
    body: record.body ? record.body.subarray(0, 4096).toString('base64') : undefined })), null, 2));
  result.success = !result.failure && Object.values(result.checks).every(Boolean);
  if (!result.success) process.exitCode = 1;
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2) + '\n');
  console.log(JSON.stringify({ directory, success: result.success, checks: result.checks, failure: result.failure?.split('\n')[0],
    outboundRequests: { count: outbound.requests, bytes: outbound.bytes }, outboundConnections: connections.length,
    hosts: [...new Set([...capture.dns.map(entry => entry.name), ...capture.sni.map(entry => entry.name)])],
    canaryLeaks: result.canaryLeaks, provider: providerSummary }, null, 2));
}

function summarizeNames(entries) {
  const names = new Map();
  for (const entry of entries) {
    const item = names.get(entry.name) ?? { name: entry.name, count: 0, phases: new Set() };
    item.count += 1; item.phases.add(entry.phase); names.set(entry.name, item);
  }
  return [...names.values()].map(item => ({ ...item, phases: [...item.phases] })).sort((a, b) => b.count - a.count);
}

// Signals and exits around the host: who signalled the traced family, and
// how each process ended. The launched process is strace; its child is main.
function summarizeSignals({ deliveries, sends, exits }, tracer) {
  const external = deliveries.filter(item => item.sender !== undefined && item.code === 'SI_USER');
  return { deliveries: deliveries.slice(-40), sends: sends.slice(-40), externalSenders: [...new Set(external.map(item => item.sender))],
    exitsWithSignal: exits.filter(item => item.signal), tracer };
}

// Attribute connect/sendto calls to processes from the strace log.
async function attribute(file, proxyPort, addonProcesses) {
  const text = await readFile(file, 'utf8').catch(() => '');
  const groups = threadGroups(text);
  const exec = new Map(), connects = [];
  for (const line of text.split('\n')) {
    const pid = Number(line.match(/^(\d+)\s/)?.[1]);
    if (!pid) continue;
    const command = line.match(/execve\("([^"]+)", \[(.*?)\]/);
    if (command) {
      const type = command[2].match(/"--type=([^"]+)"/)?.[1];
      exec.set(pid, type ? `${command[1].split('/').pop()}:${type}` : `${command[1].split('/').pop()} ${command[2].slice(0, 120)}`);
    }
    const address = line.match(/(connect|sendto)\(\d+, .*?sin6?_port=htons\((\d+)\), (?:sin_addr=inet_addr\("([^"]+)"\)|inet_pton\(AF_INET6, "([^"]+)")/);
    if (address) connects.push({ pid, tgid: tgidOf(groups, pid), call: address[1], port: Number(address[2]), address: address[3] ?? address[4],
      result: line.match(/= (-?\d+.*)$/)?.[1] });
  }
  const loopback = address => /^127\.|^::1$|^::ffff:127\./.test(address);
  const label = pid => exec.get(pid) ?? exec.get(tgidOf(groups, pid)) ?? 'inherited image';
  const directConnects = connects.filter(item => !loopback(item.address) && item.address !== '0.0.0.0');
  const proxyConnects = connects.filter(item => loopback(item.address) && item.port === proxyPort);
  const dnsQueries = connects.filter(item => item.port === 53);
  const byProcess = (items) => Object.entries(items.reduce((map, item) => {
    const key = `${item.tgid} ${label(item.tgid)}`; map[key] = (map[key] ?? 0) + 1; return map; }, {}));
  const traced = await readFile(file, 'utf8').then(() => true, () => false);
  return { traced, processes: exec.size, threadsResolved: groups.size, connectCalls: connects.length,
    directConnects: directConnects.map(item => ({ ...item, process: label(item.pid) })),
    proxyConnectsByProcess: byProcess(proxyConnects), dnsQueriesByProcess: byProcess(dnsQueries),
    addonProcesses, addonProcessLabels: addonProcesses.map(label) };
}

// Last main-process log lines, to show what the app recorded before an
// unrequested exit.
async function mainLogTail(directory) {
  const sessions = (await readdir(directory).catch(() => [])).sort();
  const text = await readFile(join(directory, sessions.at(-1) ?? '', 'main.log'), 'utf8').catch(() => '');
  return text.split('\n').filter(Boolean).slice(-30);
}

async function profileLogs(directory) {
  const found = { localModeIndexingDisabled: false, lines: [] };
  async function walk(path) {
    for (const entry of await readdir(path, { withFileTypes: true }).catch(() => [])) {
      const child = join(path, entry.name);
      if (entry.isDirectory()) await walk(child);
      else if (entry.name.endsWith('.log')) {
        const text = await readFile(child, 'utf8').catch(() => '');
        for (const line of text.split('\n'))
          if (/FastIndexer|codebase indexing|FileSync|file sync|repoBackend|semantic search|private inference/i.test(line))
            found.lines.push(`${child.slice(directory.length + 1)}: ${line.slice(0, 300)}`);
        if (text.includes('Local mode enabled — codebase indexing disabled')) found.localModeIndexingDisabled = true;
      }
    }
  }
  await walk(directory);
  found.lines = found.lines.slice(0, 80);
  return found;
}
