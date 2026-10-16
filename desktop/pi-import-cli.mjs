import { existsSync } from 'node:fs';
import { DatabaseSync } from 'node:sqlite';
import { isAbsolute, join, resolve } from 'node:path';
import { normalizeBaseUrl, normalizeUserCapabilities } from './model-providers.js';
import { planPiImport, describeCapabilities } from './pi-import.js';
import { piAgentDirectory, readPiSource, writeStagedRequest } from './pi-import-host.mjs';

const usage = `Usage: node desktop/import-cli.mjs --pi [--pi-dir PI_AGENT_DIR] [--target-user-data USER_DATA_PATH]
       [--apply [--providers ID,...] [--replace ID,...]]
Previews providers and models from a pi coding-agent configuration (models.json, auth.json).
Default source: $PI_CODING_AGENT_DIR or ~/.pi/agent. pi files are only read, never changed.
Without --apply, prints a preview. Keys are never printed.
--apply queues the selection (new providers, plus --replace for existing ones) without keys.
OpenVision shows the queued import in Settings > Models for confirmation and stores keys
there in its encrypted credential storage. Existing providers are never changed unless
listed in --replace.`;

function readExisting(userData) {
  const path = join(userData, 'User/globalStorage/state.vscdb');
  if (!existsSync(path)) return [];
  const db = new DatabaseSync(path, { readOnly: true });
  try {
    const row = db.prepare('SELECT value FROM ItemTable WHERE key = ?').get('openvision.model-providers.v1');
    return row ? JSON.parse(String(row.value)).providers ?? [] : [];
  } finally { db.close(); }
}

const write = text => new Promise(done => process.stdout.write(text + '\n', done));

export async function runPiImportCli(root, args) {
  let piDir, userData = join(root, 'data/local'), apply = false, only, replace = [];
  try {
    for (let index = 0; index < args.length; index++) {
      const argument = args[index];
      if (argument === '--pi') continue;
      if (argument === '--apply') { apply = true; continue; }
      if (argument === '--help') { await write(usage); return 0; }
      if (!['--pi-dir', '--target-user-data', '--providers', '--replace'].includes(argument)) throw new Error(`Unknown option for --pi: ${argument}`);
      const value = args[++index];
      if (!value || value.startsWith('--')) throw new Error(`Missing value for ${argument}`);
      if (argument === '--pi-dir') piDir = resolve(value);
      if (argument === '--target-user-data') { if (!isAbsolute(value)) throw new Error('--target-user-data must be absolute.'); userData = resolve(value); }
      if (argument === '--providers') only = value.split(',').map(item => item.trim()).filter(Boolean);
      if (argument === '--replace') replace = value.split(',').map(item => item.trim()).filter(Boolean);
    }
    if (!apply && (only || replace.length)) throw new Error('--providers and --replace require --apply.');
    const source = await readPiSource(piDir ?? piAgentDirectory());
    const plan = planPiImport({ models: source.models, auth: source.auth, existing: readExisting(userData) },
      { normalizeUrl: normalizeBaseUrl, normalizeCapabilities: normalizeUserCapabilities });
    const preview = { source: source.dir, digest: source.digest, target: userData, summary: plan.summary,
      providers: plan.providers.map(entry => ({ id: entry.sourceId, status: entry.status, ...(entry.reason ? { reason: entry.reason } : {}),
        ...(entry.url ? { url: entry.url, api: entry.apiLabel, key: entry.key } : {}),
        models: entry.models.map(model => ({ id: model.id, name: model.name, capabilities: describeCapabilities(model.userCapabilities),
          ...(model.notes ? { notes: model.notes } : {}) })), ...(entry.notes.length ? { notes: entry.notes } : {}) })) };
    if (!apply) { await write(JSON.stringify({ ...preview, applied: false }, null, 2)); return 0; }
    const byId = new Map(plan.providers.map(entry => [entry.sourceId, entry]));
    for (const id of [...(only ?? []), ...replace]) if (!byId.has(id)) throw new Error(`pi provider "${id}" is not in the preview.`);
    for (const id of replace) if (!['imported', 'conflict'].includes(byId.get(id).status))
      throw new Error(`--replace applies only to existing providers; "${id}" is ${byId.get(id).status}.`);
    const selected = plan.providers.filter(entry => entry.status === 'new' && (!only || only.includes(entry.sourceId))).map(entry => entry.sourceId);
    for (const id of only ?? []) if (!selected.includes(id) && !replace.includes(id))
      throw new Error(`pi provider "${id}" is ${byId.get(id).status}; add it to --replace to update an existing provider.`);
    if (!selected.length && !replace.length) throw new Error('Nothing to import: no new providers were selected.');
    const path = await writeStagedRequest(userData, { source: source.dir, digest: source.digest,
      providers: [...selected, ...replace], replace, requestedAt: new Date().toISOString() });
    await write(JSON.stringify({ ...preview, applied: false, queued: { path, providers: selected, replace,
      next: 'Open OpenVision Settings > Models to review and confirm. Keys are stored there in encrypted storage.' } }, null, 2));
    return 0;
  } catch (error) {
    await new Promise(done => process.stderr.write(error.message + '\n', done));
    return 1;
  }
}
