import { _electron } from '../tooling/browser.mjs';
import { mkdtemp, mkdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { createServer } from 'node:http';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import { platformLayout, linuxSandboxArguments } from './platform.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { createLiveUserRule, inspectRulesRequest } from './verify-live-rules.mjs';
import { memoryRuleText } from './workspace-memory.js';
import { enterWorkspace, openChat } from './verification-workspace.mjs';
import { fileHash } from './import-files.mjs';

// --agent-context: after a native UI user rule and a restart, the first Agent
// request sent to a controlled local fixture provider must carry the user rule
// and an always-applied project rule, but not the body of a saved memory.
// Controlled fixture responses; this is not live inference.
const agentContext = process.argv.includes('--agent-context');

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const layout = platformLayout(root);
await mkdir(join(root, 'logs'), {recursive:true});
const profile = await mkdtemp(join(root, 'logs/local-rules-verification-'));
const project = join(profile, 'project');
await mkdir(join(profile, 'User'), {recursive:true});
await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({...verificationSettings, 'git.openRepositoryInParentFolders':'never'}));
await writeFile(join(project, 'readme.txt'), 'OpenVision local rules verification\n');
const original = 'OpenVision fixture rule: use descriptive names.';
const edited = 'OpenVision fixture rule: verify changed behavior.';
const requests = [];
let app;
if (agentContext) { await verifyAgentContext(); process.exit(process.exitCode ?? 0); }

async function launch() {
  const env = {...process.env};
  delete env.ELECTRON_RUN_AS_NODE;
  const sandbox = process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : [];
  app = await _electron.launch({executablePath:layout.executable, env, timeout:45000,
    args:[...sandbox, '--user-data-dir',profile,'--extensions-dir',join(profile,'extensions'),
      '--new-window','--disable-updates','--skip-welcome','--skip-release-notes',project,join(project,'readme.txt')]});
  const page = await app.firstWindow();
  page.on('request', request => {
    if (/\/KnowledgeBase(?:Add|List|Update|Remove)(?:\?|$)/i.test(request.url())) requests.push(new URL(request.url()).pathname);
  });
  page.setDefaultTimeout(15000);
  await page.locator('.monaco-workbench').waitFor({timeout:30000});
  // Popup listeners register after workbench restoration, not initial DOM creation.
  await page.waitForTimeout(8000);
  return page;
}

async function openRules(page) {
  const rules = page.getByRole('button', {name:'Rules',exact:true});
  const existing = page.locator('.tabs-container .tab').filter({hasText:/^Customize$/});
  if (await existing.count()) await existing.first().click();
  if (!await rules.isVisible()) {
    const key = process.platform === 'darwin' ? 'Meta' : 'Control';
    await page.keyboard.press(`${key}+Shift+P`);
    await page.locator('.quick-input-widget input[type="text"]').fill('>Open Customize');
    await page.locator('.quick-input-widget').getByText('Open Customize',{exact:true}).first().waitFor();
    await page.keyboard.press('Enter');
  }
  await rules.click();
}

async function close() {
  if (app) { const owned = app; app = undefined; await owned.close(); }
}

try {
  let page = await launch();
  await openRules(page);
  await page.getByRole('button',{name:'New',exact:true}).click();
  await page.locator('.quick-input-widget input[type="text"]').fill(original);
  await page.keyboard.press('Enter');
  await page.getByText(original,{exact:true}).click();
  await page.locator('textarea').fill(edited);
  await page.getByRole('button',{name:'Save',exact:true}).click();
  await page.getByText(edited,{exact:true}).waitFor();
  console.log('Native rules UI: create and edit passed');
  await close();
  page = await launch();
  await openRules(page);
  await page.getByText(edited,{exact:true}).waitFor();
  console.log('Native rules UI: persistence across process restart passed');
  await page.getByText(edited,{exact:true}).hover();
  await page.getByRole('button',{name:`${edited} options`,exact:true}).click();
  await page.getByRole('menuitem',{name:'Delete',exact:true}).click();
  await page.getByText('Delete Rule',{exact:true}).waitFor();
  await page.locator('span.truncate').filter({hasText:/^Delete$/}).click();
  await page.getByText(edited,{exact:true}).waitFor({state:'hidden'});
  assert.equal(requests.length, 0, 'No renderer-observed knowledge-base RPC may be needed for local rule CRUD');
  await close();
  const result = {checked_at:new Date().toISOString(), platform:process.platform, node:process.version,
    profile, native_ui_create:true, native_ui_edit:true, persisted_after_process_restart:true,
    native_ui_delete:true, renderer_observed_knowledge_base_requests:requests.length,
    limitations:['No live model inference was exercised. Renderer network observation does not cover every native process.']};
  await writeFile(join(root,'logs/local-rules-verification.json'),JSON.stringify(result,null,2)+'\n');
  console.log(JSON.stringify(result,null,2));
} finally { await close(); }

async function verifyAgentContext() {
  const marker = `OPENVISION_RULE_ANSWER_${randomToken()}`, projectRule = `OPENVISION_PROJECT_RULE_${randomToken()}`;
  const userRule = `OpenVision fixture user rule ${randomToken()}: answer the verification question with one short sentence.`;
  const memory = { title: 'Hidden fixture memory', description: 'When asked about the hidden fixture memory',
    content: `The hidden fixture memory is OPENVISION_HIDDEN_MEMORY_${randomToken()}.` };
  const rulesDirectory = join(project, '.openvision/rules');
  await mkdir(rulesDirectory, {recursive:true});
  await writeFile(join(rulesDirectory, 'fixture-always.mdc'),
    `---\ndescription: Fixture always-applied rule\nalwaysApply: true\n---\nProject label: ${projectRule}.\n`);
  // Same text and hash-derived name as an approved memory saved through the review card.
  const memoryText = memoryRuleText(memory);
  const memoryName = `memory-${createHash('sha256').update(memoryText).digest('hex')}.mdc`;
  await writeFile(join(rulesDirectory, memoryName), memoryText);
  const bodies = [], errors = [], exits = [];
  const server = createServer(async (request, response) => {
    if (request.url === '/v1/models') { response.setHeader('content-type', 'application/json'); return response.end(JSON.stringify({data:[{id:'rules-fixture'}]})); }
    if (request.url !== '/v1/chat/completions') { response.writeHead(404); return response.end(); }
    let body = ''; for await (const chunk of request) body += chunk;
    bodies.push(body);
    const payload = JSON.parse(body);
    response.writeHead(200, {'Content-Type':'text/event-stream'});
    const event = (delta, finish_reason = null) => response.write(`data: ${JSON.stringify({id:`rules-${bodies.length}`,
      object:'chat.completion.chunk', model:payload.model, choices:[{index:0, delta, finish_reason}]})}\n\n`);
    event({role:'assistant', content:'Rules fixture reply.'}); event({}, 'stop'); response.end('data: [DONE]\n\n');
  });
  await new Promise(done => server.listen(0, '127.0.0.1', done));
  const result = {checked_at:new Date().toISOString(), mode:'agent-context', platform:process.platform, arch:process.arch,
    node:process.version, directory:profile, checks:{}, host_exits:exits,
    scope:'Controlled local fixture provider over HTTP; the reply is fixed. Not live inference.',
    hashes:Object.fromEntries(await Promise.all(['local-rules.js', 'workspace-memory.js'].map(async file =>
      [file, await fileHash(join(root, 'source/app/out/vs/code/electron-sandbox/workbench', `openvision-${file}`)).catch(() => null)])))};
  const start = async () => {
    const page = await launch(); page.on('pageerror', error => errors.push(error.message));
    await enterWorkspace(page); return page;
  };
  const stop = async () => {
    const child = app?.process(); await close();
    if (child) { exits.push({code:child.exitCode, signal:child.signalCode}); assert.equal(child.exitCode, 0, 'Owned host exits cleanly'); }
  };
  try {
    let page = await start();
    await configureFixtureProvider(page, `http://127.0.0.1:${server.address().port}/v1`);
    await createLiveUserRule(page, userRule);
    assert.equal(bodies.length, 0, 'Configuration and rule creation send no Agent request');
    await stop();
    page = await start();
    result.checks.restarted_before_first_request = true;
    const input = await openChat(page);
    await input.fill('Answer the verification question.'); await input.press('Enter');
    await page.getByText('Rules fixture reply.', {exact:true}).filter({visible:true}).first().waitFor({timeout:30000});
    assert.ok(bodies.length >= 1, 'The Agent turn reached the fixture provider');
    inspectRulesRequest(bodies[0], {userRule, projectRule, marker}, result.checks);
    const messages = JSON.stringify(JSON.parse(bodies[0]).messages);
    assert.ok(!messages.includes(memory.content), 'A saved memory body is not eagerly added to the first request');
    result.checks.hiddenMemoryBodyAbsentFromFirstRequest = true;
    result.checks.memoryDescriptionDiscoverable = messages.includes(memory.description);
    assert.equal(requests.length, 0, 'No renderer-observed knowledge-base RPC');
    await stop();
    assert.deepEqual(errors, [], 'Native pages report no uncaught errors');
    result.status = 'passed';
  } catch (error) {
    result.status = 'failed'; result.error = error.stack; process.exitCode = 1;
  } finally {
    await close().catch(() => {});
    server.closeAllConnections(); await new Promise(done => server.close(done));
    result.requestCount = bodies.length; result.pageErrors = errors;
    await writeFile(join(profile, 'first-request.json'), bodies[0] ?? '');
    await writeFile(join(profile, 'result.json'), JSON.stringify(result, null, 2) + '\n');
    console.log(JSON.stringify(result, null, 2));
  }
}

function randomToken() { return createHash('sha256').update(`${process.pid}-${Math.random()}-${Date.now()}`).digest('hex').slice(0, 16); }

async function configureFixtureProvider(page, baseUrl) {
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({hasText:/^Models$/}).locator('..').click();
  await page.locator('.openvision-model-settings').getByRole('button', {name:'Add Provider', exact:true}).click();
  await page.getByLabel('Provider Name', {exact:true}).fill('Rules fixture');
  await page.getByLabel('API Base URL', {exact:true}).fill(baseUrl);
  await page.getByLabel('API Key', {exact:true}).fill('fixture-key');
  await page.locator('dialog').getByRole('button', {name:'Save', exact:true}).click();
  await page.locator('dialog').waitFor({state:'detached'});
  await page.keyboard.press('ControlOrMeta+w');
  await page.keyboard.press('ControlOrMeta+Shift+l');
  await page.locator('.vscode-model-picker__trigger-markdown').filter({visible:true}).first().click();
  await page.getByText('rules-fixture', {exact:true}).last().click(); await page.keyboard.press('Escape');
}
