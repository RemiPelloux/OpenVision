import { randomUUID } from 'node:crypto';
import { mkdir, readFile, writeFile, rename, copyFile } from 'node:fs/promises';
import { join } from 'node:path';
import { removeAccountFiles } from './account-profile-cleanup.mjs';

const providers = new Set(['codex', 'claude']);
const uuid = /^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/;
function providerId(value) {
  if (!providers.has(value)) throw Error('Choose Codex or Claude.');
  return value;
}
function validate(value) {
  if (value?.version !== 1 || !Array.isArray(value.accounts) || !value.active || typeof value.active !== 'object')
    throw Error('Account profile settings are invalid. The saved file was preserved.');
  const ids = new Set();
  for (const account of value.accounts) {
    if (!uuid.test(account.id) || ids.has(account.id) || !providers.has(account.provider) ||
        typeof account.label !== 'string' || !account.label.trim() || account.label.length > 120 ||
        (account.removing !== undefined && typeof account.removing !== 'boolean'))
      throw Error('Account profile metadata is invalid. The saved file was preserved.');
    ids.add(account.id);
  }
  for (const [provider, id] of Object.entries(value.active))
    if (!providers.has(provider) || !value.accounts.some(account => account.id === id && account.provider === provider))
      throw Error('Selected account is missing from the saved profiles.');
  return value;
}

export class AccountProfiles {
  constructor(directory) { this.directory = directory; this.path = join(directory, 'profiles.json'); this.pending = Promise.resolve(); }
  async read() {
    try { return validate(JSON.parse(await readFile(this.path, 'utf8'))); }
    catch (error) {
      if (error.code === 'ENOENT') return { version: 1, accounts: [], active: {} };
      throw error;
    }
  }
  mutate(change) {
    const task = this.pending.then(async () => {
      const state = await this.read(); const result = await change(state);
      validate(state); await mkdir(this.directory, { recursive: true });
      const temporary = `${this.path}.${randomUUID()}.tmp`;
      await writeFile(temporary, JSON.stringify(state, null, 2) + '\n', { flag: 'wx', mode: 0o600 });
      await copyFile(this.path, `${this.path}.backup`).catch(error => { if (error.code !== 'ENOENT') throw error; });
      await rename(temporary, this.path); return result;
    });
    this.pending = task.catch(() => {}); return task;
  }
  create(provider, label) {
    providerId(provider);
    if (typeof label !== 'string' || !label.trim() || label.trim().length > 120) throw Error('Enter an account name of up to 120 characters.');
    return this.mutate(async state => {
      const account = { id: randomUUID(), provider, label: label.trim() };
      await this.prepare(account); state.accounts.push(account);
      return account;
    });
  }
  select(provider, id) {
    providerId(provider);
    return this.mutate(state => {
      if (id !== null && !state.accounts.some(account => account.id === id && account.provider === provider && !account.removing)) throw Error('Choose a saved account for this provider.');
      if (id === null) delete state.active[provider];
      else state.active[provider] = id;
      return { provider, id };
    });
  }
  async remove(provider, id, assertUnused) {
    providerId(provider);
    const account = await this.mutate(state => {
      const account = state.accounts.find(item => item.id === id && item.provider === provider);
      if (!account) throw Error('This account profile no longer exists. Refresh status.');
      if (state.active[provider] === id) throw Error('Disconnect this account before deleting it.');
      assertUnused(account); account.removing = true; return account;
    });
    // A retained record owns interrupted cleanup, so Delete can safely retry it.
    await removeAccountFiles(this.directory, account);
    return this.mutate(state => {
      state.accounts = state.accounts.filter(item => item.id !== id);
      return { historyPreserved: true, historyDirectory: join(this.directory, 'history', provider, id) };
    });
  }
  directoryFor(account) { return join(this.directory, account.provider, account.id); }
  async prepare(account) {
    const directory = this.directoryFor(account); await mkdir(directory, { recursive: true });
    if (account.provider === 'codex') await writeFile(join(directory, 'config.toml'),
      'cli_auth_credentials_store = "file"\nforced_login_method = "chatgpt"\n[analytics]\nenabled = false\n[feedback]\nenabled = false\n',
      { flag: 'wx', mode: 0o600 }).catch(error => { if (error.code !== 'EEXIST') throw error; });
  }
  environment(original, capture = () => {}) {
    const task = this.pending.then(async () => {
      const env = await this.buildEnvironment(original); capture(env); return env;
    });
    this.pending = task.catch(() => {}); return task;
  }
  async buildEnvironment(original) {
    const state = await this.read(), env = { ...original };
    for (const provider of providers) {
      const account = state.accounts.find(item => item.id === state.active[provider] && item.provider === provider);
      if (account?.removing) throw Error('Account cleanup is pending. Finish deleting the account in Settings.');
      if (account) await this.prepare(account);
      const alternativeAuth = provider === 'codex'
        ? new Set(['OPENAI_API_KEY', 'CODEX_ACCESS_TOKEN'])
        : new Set(['ANTHROPIC_API_KEY', 'ANTHROPIC_AUTH_TOKEN', 'CLAUDE_CODE_OAUTH_TOKEN']);
      for (const key of Object.keys(env)) if (alternativeAuth.has(key.toUpperCase())) delete env[key];
      const directory = account ? this.directoryFor(account) : join(this.directory, 'disconnected', provider);
      await mkdir(directory, { recursive: true });
      env[provider === 'codex' ? 'CODEX_HOME' : 'CLAUDE_CONFIG_DIR'] = directory;
      delete env[`OPENVISION_${provider.toUpperCase()}_ACCOUNT_ID`];
      if (account) env[`OPENVISION_${provider.toUpperCase()}_ACCOUNT_ID`] = account.id;
    }
    env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC = '1';
    env.DISABLE_TELEMETRY = '1'; env.DO_NOT_TRACK = '1';
    return env;
  }
}
