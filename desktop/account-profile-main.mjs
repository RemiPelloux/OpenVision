import { app, ipcMain } from 'electron';
import { join } from 'node:path';
import { AccountProfiles } from './account-profile-store.mjs';
import loginUrl from './account-login-url.cjs';
import { assertWorkbenchSender } from '../../../desktop/workbench-sender.mjs';

const expected = new URL('./vs/code/electron-sandbox/workbench/workbench.html', import.meta.url);
let store;
const hosts = new Map();
function profiles() { return store ??= new AccountProfiles(join(app.getPath('userData'), 'openvision-accounts')); }
export function accountHostEnvironment(env, host) {
  return profiles().environment(env, selected => {
    const listener = host.onExit(() => { hosts.delete(host); listener.dispose(); });
    hosts.set(host, { codex: selected.OPENVISION_CODEX_ACCOUNT_ID, claude: selected.OPENVISION_CLAUDE_ACCOUNT_ID });
  });
}
function assertUnused(account) {
  for (const selected of hosts.values()) if (selected[account.provider] === account.id)
    throw Error('This account is still connected in another window or agent host. Switch that window to another account, then retry Delete.');
}

ipcMain.handle('vscode:openvision-account-profiles', async (event, request) => {
  assertWorkbenchSender(event, expected);
  if (request?.action === 'login-url') {
    if (!['codex', 'claude'].includes(request.provider)) throw Error('Choose Codex or Claude.');
    return loginUrl.officialLoginUrl(request.url, request.provider);
  }
  if (request?.action === 'list') return profiles().read();
  if (request?.action === 'create') return profiles().create(request.provider, request.label);
  if (request?.action === 'select') return profiles().select(request.provider, request.id);
  if (request?.action === 'remove') return profiles().remove(request.provider, request.id, assertUnused);
  throw Error('Unknown account profile operation.');
});
