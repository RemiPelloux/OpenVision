// Node-side reader for an explicit pi import. It only reads the pi files (never
// writes, renames or locks them) and keeps key material out of everything it
// returns except piKeys(), which the app calls after the user confirms.
import { createHash } from 'node:crypto';
import { open, readFile, rm, writeFile, rename, mkdir } from 'node:fs/promises';
import { homedir } from 'node:os';
import { dirname, isAbsolute, join, resolve } from 'node:path';
import { parsePiModels, summarizePiAuth, piAuthKey } from './pi-import.js';

const maxBytes = 4 * 1024 * 1024;
export const stagedRequestName = 'openvision-pi-import-request.json';

export function piAgentDirectory(env = process.env, home = homedir()) {
  const configured = env.PI_CODING_AGENT_DIR;
  if (configured) {
    if (!isAbsolute(configured)) throw new Error('PI_CODING_AGENT_DIR must be an absolute path.');
    return resolve(configured);
  }
  return join(home, '.pi', 'agent');
}

async function readBounded(path, optional) {
  let handle;
  try { handle = await open(path, 'r'); }
  catch (error) {
    if (optional && error.code === 'ENOENT') return undefined;
    if (error.code === 'ENOENT') throw new Error(`No pi configuration found: ${path} does not exist.`);
    throw new Error(`Cannot read ${path}: ${error.code ?? 'read failed'}.`);
  }
  try {
    const { size } = await handle.stat();
    if (size > maxBytes) throw new Error(`${path} is larger than 4 MiB.`);
    return await handle.readFile('utf8');
  } finally { await handle.close(); }
}

export async function readPiSource(directory) {
  const dir = resolve(directory);
  const modelsText = await readBounded(join(dir, 'models.json'), false);
  const authText = await readBounded(join(dir, 'auth.json'), true);
  const models = parsePiModels(modelsText);
  const auth = summarizePiAuth(authText);
  const digest = createHash('sha256').update(modelsText).update('\0').update(authText ?? '').digest('hex');
  return { dir, models, auth, authText, digest };
}

// Everything a preview needs, with no key material: models.json apiKey and
// header values are removed; auth.json is reduced to per-provider status.
export function publicPiSource(source) {
  const providers = {};
  for (const [id, provider] of Object.entries(source.models.providers)) {
    if (!provider || typeof provider !== 'object' || Array.isArray(provider)) { providers[id] = provider; continue; }
    const { apiKey, headers, ...rest } = provider;
    providers[id] = { ...rest, ...(apiKey !== undefined ? { apiKey: '[not imported]' } : {}),
      ...(headers !== undefined ? { headers: '[not imported]' } : {}) };
  }
  return { dir: source.dir, digest: source.digest, models: { providers }, auth: source.auth };
}

export function piKeys(source, providerIds) {
  const keys = {};
  if (!source.authText) return keys;
  for (const id of providerIds) {
    const key = piAuthKey(source.authText, id);
    if (key !== undefined) keys[id] = key;
  }
  return keys;
}

// Staged CLI request: names the pi directory, its digest at preview time and the
// selected providers. It never contains keys.
export async function readStagedRequest(userData) {
  try {
    const value = JSON.parse(await readFile(join(userData, stagedRequestName), 'utf8'));
    if (value?.version !== 1 || typeof value.source !== 'string' || !isAbsolute(value.source) ||
        typeof value.digest !== 'string' || !Array.isArray(value.providers) || !Array.isArray(value.replace) ||
        ![...value.providers, ...value.replace].every(id => typeof id === 'string'))
      return { invalid: true };
    return value;
  } catch (error) {
    if (error.code === 'ENOENT') return undefined;
    return { invalid: true };
  }
}

export async function writeStagedRequest(userData, request) {
  const path = join(userData, stagedRequestName), temporary = `${path}.${process.pid}.tmp`;
  await mkdir(dirname(path), { recursive: true });
  await writeFile(temporary, JSON.stringify({ version: 1, ...request }, null, 2) + '\n', { mode: 0o600 });
  await rename(temporary, path);
  return path;
}

export async function clearStagedRequest(userData) {
  await rm(join(userData, stagedRequestName), { force: true });
}

// IPC owner used by the main process. Responses never include keys except for
// the confirmed `keys` action, and that action requires the previewed digest.
export function createPiImportHandler({ userData, env = process.env, home } = {}) {
  let busy = false;
  const sourceDirectory = staged => staged && !staged.invalid ? staged.source : piAgentDirectory(env, home ?? homedir());
  return async request => {
    if (busy) return { ok: false, error: 'Another pi import operation is running.' };
    busy = true;
    try {
      const profile = userData();
      if (request?.action === 'staged') {
        const staged = await readStagedRequest(profile);
        return { ok: true, staged: staged ? { invalid: staged.invalid === true } : undefined };
      }
      if (request?.action === 'clear-staged') { await clearStagedRequest(profile); return { ok: true }; }
      const staged = await readStagedRequest(profile);
      if (request?.action === 'read') {
        const source = await readPiSource(sourceDirectory(staged));
        return { ok: true, ...publicPiSource(source),
          staged: staged ? (staged.invalid ? { invalid: true } : { ...staged, current: staged.digest === source.digest }) : undefined };
      }
      if (request?.action === 'keys' && typeof request.digest === 'string' && Array.isArray(request.providers) &&
          request.providers.every(id => typeof id === 'string')) {
        const source = await readPiSource(sourceDirectory(staged));
        if (source.digest !== request.digest) throw new Error('The pi configuration changed since the preview. Open Import from pi again.');
        return { ok: true, keys: piKeys(source, request.providers) };
      }
      throw new Error('Invalid pi import request.');
    } catch (error) { return { ok: false, error: error.message }; }
    finally { busy = false; }
  };
}
