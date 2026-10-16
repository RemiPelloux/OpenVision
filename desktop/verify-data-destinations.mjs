// OV-501 native verifier: where project data goes during a fixed workload.
// Linux only. The app runs in an owned no-route network namespace
// (data-destinations-namespace.sh). Every DNS name, TLS server name,
// connection and decrypted request is recorded and nothing is forwarded.
// A loopback model-provider fixture is the only configured destination.
import assert from 'node:assert/strict';
import { execFile, spawn } from 'node:child_process';
import { randomBytes } from 'node:crypto';
import { once } from 'node:events';
import { createServer } from 'node:http';
import { chmod, mkdir, mkdtemp, readdir, readFile, writeFile } from 'node:fs/promises';
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
  };
  const profile = join(directory, 'profile'), project = join(directory, 'project');
  const secretDir = join(project, canary.dirName), secretFile = join(secretDir, `${canary.fileName}.ts`);
  const main = join(project, 'main.js');
  const secretText = `// Private project canary.\nexport const secret = "${canary.content}";\n`;
  await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(secretDir, { recursive: true });
  await writeFile(secretFile, secretText);
  await writeFile(main, `// ${canary.content} reference\nconst answer = `);
  await writeFile(join(project, 'README.md'), `# Project ${canary.dirName}\n`);
  const git = args => run('git', ['-c', 'user.name=OV', '-c', 'user.email=ov@example.invalid', '-c', 'init.defaultBranch=main', ...args], { cwd: project });
  await git(['init', '-q']); await git(['checkout', '-q', '-b', canary.branch]);
  await git(['add', '.']); await git(['commit', '-q', '-m', canary.commit]);
  await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
    'git.openRepositoryInParentFolders': 'never', 'editor.quickSuggestions': false, 'editor.formatOnSave': false,
    'editor.autoClosingBrackets': 'never', 'http.proxyStrictSSL': false }));
  const canaries = [
    { id: 'content', value: canary.content, content: secretText }, { id: 'file-name', value: canary.fileName },
    { id: 'directory-name', value: canary.dirName }, { id: 'commit-message', value: canary.commit },
    { id: 'branch-name', value: canary.branch }, { id: 'typed-text', value: canary.edit },
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
  let agentPlan = [];
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
        event({ role: 'assistant', content: 'OpenVision destination workload complete.' }); event({}, 'stop');
      }
      return response.end('data: [DONE]\n\n');
    }
    const content = phase === 'tab' ? '42;' : 'const answer = 2;';
    response.end(JSON.stringify({ choices: [{ finish_reason: 'stop', message: { role: 'assistant', content } }] }));
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const providerHost = '127.0.0.1';

  // Optional process attribution through strace on the owned process family.
  const strace = !process.argv.includes('--no-strace') && await run('strace', ['-V']).then(() => true, () => false);
  const traceFile = join(directory, 'strace.log');
  let executable = layout.executable;
  if (strace) {
    executable = join(directory, 'traced-host.sh');
    await writeFile(executable, `#!/bin/sh\nexec strace -f -qq -e trace=execve,connect,sendto -e signal=none -s 160 -o '${traceFile}' '${layout.executable}' "$@"\n`);
    await chmod(executable, 0o755);
  }

  const result = { checkedAt: new Date().toISOString(), platform: `${process.platform}-${process.arch}`, scope: 'Linux x64 source build; owned no-route network namespace; loopback provider fixture; nothing forwarded upstream',
    canaryTag: tag, strace, success: false, checks: {}, hashes: {
      workbench: await fileHash(join(appRoot, 'out/vs/workbench/workbench.desktop.main.js')),
      retrieval: await fileHash(join(appRoot, 'extensions/cursor-retrieval/dist/main.js')),
      fileServiceAddon: await fileHash(join(appRoot, 'extensions/cursor-retrieval/node_modules/@anysphere/file-service/file_service.linux-x64-gnu.node')),
    } };
  const errors = [];
  let app, page;
  const env = { ...process.env, NODE_EXTRA_CA_CERTS: caFile }; delete env.ELECTRON_RUN_AS_NODE;
  try {
    app = await _electron.launch({ executablePath: executable, env, timeout: 90000,
      args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
        '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
        `--proxy-server=http://127.0.0.1:${capture.proxyPort}`, '--ignore-certificate-errors',
        ...await linuxSandboxArguments(layout.host), project, main] });
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
    await page.getByText('OpenVision destination workload complete.', { exact: true }).first().waitFor({ timeout: 90000 });
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

    enter('idle-final');
    await page.waitForTimeout(Number(process.env.OV501_FINAL_IDLE_MS ?? 30000));
    result.processes = await ownedProcesses(app.process().pid);
    await page.screenshot({ path: join(directory, 'final.png') });
  } catch (error) {
    result.failure = error.stack; process.exitCode = 1;
    await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
  } finally {
    enter('shutdown');
    if (app) {
      const child = app.process();
      await app.close().catch(error => { result.cleanupFailure = error.message; });
      result.hostExit = { code: child.exitCode, signal: child.signalCode };
    }
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
  const trace = strace ? await attribute(traceFile, capture.proxyPort,
    (result.processes ?? []).filter(item => item.fileServiceLoaded).map(item => item.pid)) : undefined;
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
  });
  result.checks.noCanaryOutsideProvider = result.canaryLeaks.length === 0 && nameHits.length === 0;
  result.checks.providerReceivedProjectData = providerSummary.canaryPhases.length > 0;
  result.checks.indexingDisabledByLocalMode = logs.localModeIndexingDisabled;
  if (trace) result.checks.fileServiceNoDirectSockets = trace.addonProcesses.every(pid => !trace.directConnects.some(item => item.pid === pid));
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

// Owned descendants of the launched host, with any that mapped the
// file-service addon. Read-only /proc inspection; nothing is signalled.
async function ownedProcesses(rootPid) {
  const parents = new Map();
  for (const entry of await readdir('/proc')) {
    if (!/^\d+$/.test(entry)) continue;
    const stat = await readFile(`/proc/${entry}/stat`, 'utf8').catch(() => '');
    const ppid = Number(stat.slice(stat.lastIndexOf(')') + 2).split(' ')[1]);
    parents.set(Number(entry), ppid);
  }
  const owned = new Set([rootPid]);
  for (let changed = true; changed;) {
    changed = false;
    for (const [pid, ppid] of parents) if (owned.has(ppid) && !owned.has(pid)) { owned.add(pid); changed = true; }
  }
  const processes = [];
  for (const pid of owned) {
    const cmdline = (await readFile(`/proc/${pid}/cmdline`, 'utf8').catch(() => '')).split('\0').filter(Boolean);
    const maps = await readFile(`/proc/${pid}/maps`, 'utf8').catch(() => '');
    processes.push({ pid, type: cmdline.find(arg => arg.startsWith('--type='))?.slice(7) ?? (cmdline[0]?.split('/').pop()),
      fileServiceLoaded: maps.includes('file_service.linux-x64-gnu.node') });
  }
  return processes;
}

// Attribute connect/sendto calls to processes from the strace log.
async function attribute(file, proxyPort, addonProcesses) {
  const text = await readFile(file, 'utf8').catch(() => '');
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
    if (address) connects.push({ pid, call: address[1], port: Number(address[2]), address: address[3] ?? address[4],
      result: line.match(/= (-?\d+.*)$/)?.[1] });
  }
  const loopback = address => /^127\.|^::1$|^::ffff:127\./.test(address);
  const label = pid => exec.get(pid) ?? 'inherited image';
  const directConnects = connects.filter(item => !loopback(item.address) && item.address !== '0.0.0.0');
  const proxyConnects = connects.filter(item => loopback(item.address) && item.port === proxyPort);
  const dnsQueries = connects.filter(item => item.port === 53);
  const byProcess = (items) => Object.entries(items.reduce((map, item) => {
    const key = `${item.pid} ${label(item.pid)}`; map[key] = (map[key] ?? 0) + 1; return map; }, {}));
  const traced = await readFile(file, 'utf8').then(() => true, () => false);
  return { traced, processes: exec.size, connectCalls: connects.length,
    directConnects: directConnects.map(item => ({ ...item, process: label(item.pid) })),
    proxyConnectsByProcess: byProcess(proxyConnects), dnsQueriesByProcess: byProcess(dnsQueries),
    addonProcesses, addonProcessLabels: addonProcesses.map(label) };
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
