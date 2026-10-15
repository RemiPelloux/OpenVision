'use strict';

const { codexServer, runJson } = require('./account-auth-process.cjs');
const { accountStatus } = require('./account-auth.cjs');
const { readClaudeUsage } = require('./account-usage-protocol.cjs');
const USAGE_REFRESH_MS = 5 * 60 * 1000;
const MIN_REFRESH_MS = 30000;
const text = value => typeof value === 'string' ? value.slice(0, 120) : null;
const finite = value => typeof value === 'number' && Number.isFinite(value);

function quotaWindow(value, options) {
  if (!value || !finite(value[options.percent]) || value[options.percent] < 0 || value[options.percent] > 100) return null;
  const raw = value[options.reset];
  const reset = typeof raw === 'string' ? Date.parse(raw) : finite(raw) ? raw * 1000 : NaN;
  return { label: options.label, usedPercent: value[options.percent],
    resetsAt: Number.isFinite(reset) && reset > 0 && reset <= 8640000000000000 ? reset : null };
}

function codexWindows(result) {
  const buckets = result?.rateLimitsByLimitId;
  const entries = buckets && typeof buckets === 'object' && !Array.isArray(buckets) && Object.keys(buckets).length
    ? Object.entries(buckets).slice(0, 16) : [['codex', result?.rateLimits]];
  return entries.flatMap(([id, bucket]) => ['primary', 'secondary'].map(key => {
    const value = bucket?.[key], minutes = value?.windowDurationMins;
    const duration = finite(minutes) && minutes > 0 ? minutes % 1440 === 0 ? `${minutes / 1440}d`
      : minutes % 60 === 0 ? `${minutes / 60}h` : `${minutes}m` : key;
    return quotaWindow(value, { label: `${text(bucket?.limitName) || text(id) || 'Codex'} · ${duration}`, percent: 'usedPercent', reset: 'resetsAt' });
  }).filter(Boolean));
}

function claudeWindows(result) {
  return [['five_hour', '5h'], ['seven_day', '7d'], ['seven_day_sonnet', 'Sonnet · 7d'], ['seven_day_opus', 'Opus · 7d']]
    .map(([key, label]) => quotaWindow(result?.rate_limits?.[key], { label, percent: 'utilization', reset: 'resets_at' })).filter(Boolean);
}

async function readUsage(options, dependencies = {}) {
  if (options.provider === 'claude') {
    const account = accountStatus('claude', await (dependencies.runJson ?? runJson)(options, ['auth', 'status', '--json']));
    if (!account.signedIn) return { ...account, windows: [], state: 'signed-out' };
    const result = await (dependencies.claude ?? readClaudeUsage)(options).catch(() => null);
    const windows = claudeWindows(result);
    return { ...account, windows, state: windows.length ? 'available' : 'unavailable', source: 'official-claude-code-control' };
  }
  const server = await (dependencies.codex ?? codexServer)(options);
  try {
    const { account } = await server.request('account/read', { refreshToken: false });
    const identity = accountStatus('codex', account);
    if (!identity.signedIn) return { ...identity, windows: [], state: 'signed-out' };
    const windows = codexWindows(await server.request('account/rateLimits/read', {}).catch(() => null));
    return { ...identity, windows, state: windows.length ? 'available' : 'unavailable', source: 'official-codex-app-server' };
  } finally { await server.close(); }
}

function createUsageReader(resolve, dependencies = {}) {
  const read = dependencies.read ?? readUsage, now = dependencies.now ?? Date.now;
  const cache = new Map(), pending = new Map();
  let disposed = false, generation = 0;
  function invalidate() {
    generation++; cache.clear();
    for (const task of pending.values()) task.controller.abort();
    pending.clear();
  }
  async function usage(extension, provider, refresh = false) {
    if (disposed) throw new Error('Account usage is shutting down.');
    const cached = cache.get(provider.id), age = cached ? now() - cached.checkedAt : Infinity;
    if (age < (refresh ? MIN_REFRESH_MS : USAGE_REFRESH_MS)) return cached;
    if (pending.has(provider.id)) return pending.get(provider.id).promise;
    const controller = new AbortController(), epoch = generation;
    const task = { controller };
    task.promise = (async () => {
      let result;
      try {
        const runtime = await resolve(extension, provider);
        controller.signal.throwIfAborted();
        result = await read({ ...runtime, signal: controller.signal });
      } catch { result = { provider: provider.id, state: 'unavailable', windows: [] }; }
      controller.signal.throwIfAborted();
      if (epoch !== generation || disposed) throw new Error('Account usage changed.');
      const snapshot = { ...result, checkedAt: now() }; cache.set(provider.id, snapshot); return snapshot;
    })().finally(() => { if (pending.get(provider.id) === task) pending.delete(provider.id); });
    pending.set(provider.id, task); return task.promise;
  }
  return { usage, invalidate, dispose() { disposed = true; invalidate(); } };
}

module.exports = { readUsage, codexWindows, claudeWindows, quotaWindow, createUsageReader, USAGE_REFRESH_MS };
