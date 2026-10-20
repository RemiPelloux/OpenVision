import { createHash } from 'node:crypto';

// Request-body accounting for OV-1001 fixed Agent workloads. Bytes are exact
// UTF-8 sizes of the JSON the provider fixture received. Token counts are
// estimates: tokenx (heuristic, no model vocabulary) when available, otherwise
// ceil(characters / 4). Neither is a provider-reported usage figure.
let tokenx;
try { tokenx = await import('../tooling/node_modules/tokenx/dist/index.mjs'); } catch { tokenx = undefined; }
export const tokenEstimator = tokenx ? 'tokenx 1.6.0 heuristic estimate' : 'characters/4 estimate';
export function estimateTokens(text) {
  return tokenx ? tokenx.estimateTokenCount(text) : Math.ceil(text.length / 4);
}

const bytes = value => Buffer.byteLength(typeof value === 'string' ? value : JSON.stringify(value ?? null));
const text = value => typeof value === 'string' ? value : JSON.stringify(value ?? '');
const sha = value => createHash('sha256').update(value).digest('hex');

// Identity of the conversation state a request asks the model to continue.
// Volatile envelope fields (stream options, ids) are excluded, so two requests
// with the same messages and tools count as duplicates.
export function requestIdentity(body) {
  return sha(JSON.stringify({ model: body.model, messages: body.messages, tools: body.tools }));
}

/**
 * Split one Chat Completions request into system, tools, history, current
 * turn and file context. `files` maps a label to exact fixture file text; each
 * occurrence of that text anywhere in the body is counted.
 */
export function analyzeRequest(raw, files = {}) {
  const body = typeof raw === 'string' || Buffer.isBuffer(raw) ? JSON.parse(String(raw)) : raw;
  const serialized = typeof raw === 'string' || Buffer.isBuffer(raw) ? String(raw) : JSON.stringify(raw);
  const messages = body.messages ?? [];
  const lastUser = messages.findLastIndex(message => message.role === 'user');
  const parts = { system: 0, tools: bytes(body.tools ?? []), history: 0, currentUser: 0, currentTurnTools: 0, toolResults: 0 };
  let reasoningReplayed = 0, toolCallsReplayed = 0, assistantMessages = 0, loopReminders = 0;
  messages.forEach((message, index) => {
    const size = bytes(message);
    if (message.role === 'system' || message.role === 'developer') parts.system += size;
    else if (index === lastUser) parts.currentUser += size;
    else if (index > lastUser) parts.currentTurnTools += size;
    else parts.history += size;
    if (message.role === 'tool') parts.toolResults += size;
    if (message.role === 'user' && text(message.content).includes('flagged as looping')) loopReminders++;
    if (message.role === 'assistant') {
      assistantMessages++;
      if (message.reasoning_content || message.reasoning) reasoningReplayed++;
      toolCallsReplayed += message.tool_calls?.length ?? 0;
    }
  });
  const fileOccurrences = {}, fileBytes = {};
  // Read results carry line-number prefixes, so a file is identified by its
  // first line, which every fixture file makes unique. Bytes are whole-file.
  const haystack = messages.map(message => text(message.content)).join('\n');
  for (const [label, content] of Object.entries(files)) {
    const probe = content.split('\n')[0];
    const count = probe ? haystack.split(probe).length - 1 : 0;
    fileOccurrences[label] = count; fileBytes[label] = count * Buffer.byteLength(content);
  }
  const fileContext = Object.values(fileBytes).reduce((sum, value) => sum + value, 0);
  const total = Buffer.byteLength(serialized);
  return {
    bodyBytes: total, estimatedTokens: estimateTokens(serialized),
    systemBytes: parts.system, toolSchemaBytes: parts.tools, historyBytes: parts.history,
    currentUserBytes: parts.currentUser, currentTurnToolBytes: parts.currentTurnTools, toolResultBytes: parts.toolResults,
    fileContextBytes: fileContext, fileOccurrences,
    otherBytes: total - parts.system - parts.tools - parts.history - parts.currentUser - parts.currentTurnTools,
    systemTokens: estimateTokens(messages.filter(message => message.role === 'system' || message.role === 'developer')
      .map(message => text(message.content)).join('\n')),
    toolSchemaTokens: estimateTokens(JSON.stringify(body.tools ?? [])),
    messageCount: messages.length, toolCount: body.tools?.length ?? 0,
    toolNames: (body.tools ?? []).map(tool => tool.function?.name ?? tool.name),
    assistantMessages, reasoningReplayed, toolCallsReplayed, loopReminders,
    identity: requestIdentity(body), auxiliary: !(body.tools?.length),
  };
}

/** Aggregate per-request analyses for one workload run. */
export function summarizeWorkload(entries) {
  const sum = key => entries.reduce((total, entry) => total + entry.analysis[key], 0);
  const seen = new Map(); let duplicates = 0, stepDuplicates = 0;
  const steps = new Set();
  for (const entry of entries) {
    const identity = entry.analysis.identity;
    if (seen.has(identity)) duplicates++; else seen.set(identity, entry.index);
    if (entry.step) { if (steps.has(entry.step)) stepDuplicates++; else steps.add(entry.step); }
  }
  const last = entries.at(-1)?.analysis;
  const repeatedFile = entries.reduce((total, entry) => total + Object.values(entry.analysis.fileOccurrences)
    .reduce((count, value) => count + Math.max(0, value - 1), 0), 0);
  return {
    requests: entries.length, auxiliaryRequests: entries.filter(entry => entry.analysis.auxiliary).length,
    duplicateRequests: duplicates, nearDuplicateRequests: stepDuplicates,
    inputBytes: sum('bodyBytes'), estimatedInputTokens: sum('estimatedTokens'),
    systemBytes: sum('systemBytes'), toolSchemaBytes: sum('toolSchemaBytes'), historyBytes: sum('historyBytes'),
    currentUserBytes: sum('currentUserBytes'), currentTurnToolBytes: sum('currentTurnToolBytes'),
    fileContextBytes: sum('fileContextBytes'), otherBytes: sum('otherBytes'),
    repeatedFileOccurrences: repeatedFile,
    maxRequestBytes: Math.max(0, ...entries.map(entry => entry.analysis.bodyBytes)),
    maxToolSchemaBytes: Math.max(0, ...entries.map(entry => entry.analysis.toolSchemaBytes)),
    lastRequestBytes: last?.bodyBytes ?? 0, lastHistoryBytes: last?.historyBytes ?? 0,
    lastMessageCount: last?.messageCount ?? 0,
    reasoningReplayed: Math.max(0, ...entries.map(entry => entry.analysis.reasoningReplayed)),
    toolCallsReplayed: Math.max(0, ...entries.map(entry => entry.analysis.toolCallsReplayed)),
  };
}

/** Messages of `role` whose text contains `needle` (e.g. a source chat's prompt inside a fork request). */
export function messagesContaining(raw, needle, role = 'user') {
  const body = typeof raw === 'string' || Buffer.isBuffer(raw) ? JSON.parse(String(raw)) : raw;
  return (body.messages ?? []).filter(message => message.role === role && text(message.content).includes(needle)).length;
}

/**
 * Dry-run usage for the controlled fixture only: prompt and completion tokens
 * are tokenx estimates, and cached tokens are the estimate of the byte prefix
 * shared with the previous request (a stand-in for provider prefix caching).
 * These are synthetic numbers that exercise the capture path; they are never
 * provider-reported usage.
 */
export function fixtureUsage(raw, previousRaw, completion) {
  const current = String(raw), previous = previousRaw === undefined ? '' : String(previousRaw);
  let shared = 0; const limit = Math.min(current.length, previous.length);
  while (shared < limit && current.charCodeAt(shared) === previous.charCodeAt(shared)) shared++;
  const prompt_tokens = estimateTokens(current), completion_tokens = estimateTokens(completion ?? '');
  return { prompt_tokens, completion_tokens, total_tokens: prompt_tokens + completion_tokens,
    prompt_tokens_details: { cached_tokens: Math.min(prompt_tokens, shared ? estimateTokens(current.slice(0, shared)) : 0) } };
}

/** Provider-reported usage next to the local estimate, per request and in total. */
export function usageComparison(entries) {
  const rows = entries.map(entry => ({ index: entry.index, estimatedPromptTokens: entry.analysis.estimatedTokens,
    promptTokens: entry.usage?.promptTokens, completionTokens: entry.usage?.completionTokens,
    cachedTokens: entry.usage?.cachedTokens, reasoningTokens: entry.usage?.reasoningTokens }));
  const total = key => rows.every(row => Number.isFinite(row[key])) ? rows.reduce((sum, row) => sum + row[key], 0) : null;
  return { requests: rows.length, requestsWithUsage: rows.filter(row => Number.isFinite(row.promptTokens)).length,
    requestsWithCachedTokens: rows.filter(row => Number.isFinite(row.cachedTokens)).length,
    estimatedPromptTokens: total('estimatedPromptTokens'), promptTokens: total('promptTokens'),
    completionTokens: total('completionTokens'), cachedTokens: total('cachedTokens'), rows };
}

/** Compare a measured result with numeric budgets; returns failed checks. */
export function checkBudgets(result, budgets) {
  const failures = [];
  const check = (path, actual, limit, kind = 'max') => {
    if (limit === undefined) return;
    if (actual === undefined || actual === null || Number.isNaN(actual)) failures.push({ path, actual, limit, kind, reason: 'unmeasured' });
    else if (kind === 'max' ? actual > limit : actual < limit) failures.push({ path, actual, limit, kind });
  };
  for (const [pass, workloads] of Object.entries(result.passes ?? {})) {
    for (const [name, limits] of Object.entries(budgets.workloads ?? {})) {
      const measured = workloads[name]?.summary;
      if (!measured) { failures.push({ path: `${pass}.${name}`, reason: 'workload missing' }); continue; }
      for (const [key, limit] of Object.entries(limits)) {
        if (key.startsWith('min:')) check(`${pass}.${name}.${key.slice(4)}`, measured[key.slice(4)], limit, 'min');
        else check(`${pass}.${name}.${key}`, measured[key], limit);
      }
    }
  }
  for (const [key, limit] of Object.entries(budgets.session ?? {})) {
    if (key.startsWith('min:')) check(`session.${key.slice(4)}`, result.session?.[key.slice(4)], limit, 'min');
    else check(`session.${key}`, result.session?.[key], limit);
  }
  return failures;
}
