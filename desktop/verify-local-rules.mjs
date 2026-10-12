import { _electron } from '../tooling/browser.mjs';
import { mkdtemp, mkdir, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import { platformLayout, linuxSandboxArguments } from './platform.mjs';
import { localSettings } from './import-json.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const layout = platformLayout(root);
await mkdir(join(root, 'logs'), {recursive:true});
const profile = await mkdtemp(join(root, 'logs/local-rules-verification-'));
const project = join(profile, 'project');
await mkdir(join(profile, 'User'), {recursive:true});
await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({...localSettings, 'git.openRepositoryInParentFolders':'never'}));
await writeFile(join(project, 'readme.txt'), 'OpenVision local rules verification\n');
const original = 'OpenVision fixture rule: use descriptive names.';
const edited = 'OpenVision fixture rule: verify changed behavior.';
const requests = [];
let app;

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
