import { createHash } from 'node:crypto';
import { fetchCompletion, CompletionResponseError } from './completion-http.mjs';
import { completionContext } from './completion-provider.js';
import { completionQualityCorpus, corpusCase, corpusLanguages } from './completion-quality-corpus.mjs';
import { checkSyntax } from './completion-syntax.mjs';

// Proposal pending owner decision: a model is "useful" for a language when at
// least 60% of that language's pinned cases pass. A case passes when the whole
// document parses, the insertion matches a reference/expected answer, contains
// no Markdown, and fits the production replacement range without repeating
// the surrounding line.
export const usefulPassRate = 0.6;
const timeoutMs = 15000, usageBytes = 64 * 1024, recordedCharacters = 2000;

export const corpusSha256 = createHash('sha256').update(JSON.stringify(completionQualityCorpus)).digest('hex');

const normalize = text => text.trim().replace(/\s+/g, ' ');
const loneSurrogate = /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/;

// Applies the adapter's one-line replacement (completion-provider.js yields the
// cursor line as linePrefix + insertion + lineSuffix) to the original document.
export function replacementRange(entry, insertion) {
  const context = completionContext(entry.text, entry.position, entry.language);
  const text = insertion.replace(/\r\n|\r|\n/g, context.eol);
  const lines = entry.text.split(/(?<=\n|\r(?!\n))/);
  const range = { startLineNumber: context.lineNumber, endLineNumberInclusive: context.lineNumber };
  const line = lines[range.startLineNumber - 1] ?? '';
  const eol = /(\r\n|\n|\r)$/.exec(line)?.[0] ?? '';
  const applied = lines.slice(0, range.startLineNumber - 1).join('') + context.linePrefix + text + context.lineSuffix + eol +
    lines.slice(range.endLineNumberInclusive).join('');
  const linePrefix = context.linePrefix.trim(), lineSuffix = context.lineSuffix.trim();
  const repeatsLine = (!!linePrefix && text.trimStart().startsWith(linePrefix)) ||
    (!!lineSuffix && text.trimEnd().endsWith(lineSuffix));
  const inDocument = range.startLineNumber >= 1 && range.endLineNumberInclusive <= lines.length;
  return { range, document: applied, repeatsLine,
    valid: inDocument && applied === entry.before + text + entry.after && !loneSurrogate.test(text) && !repeatsLine };
}

export async function scoreInsertion(entry, insertion, options = {}) {
  const exact = entry.exact.some(answer => normalize(answer) === normalize(insertion));
  const expected = exact || entry.expected.some(pattern => new RegExp(pattern, 'u').test(normalize(insertion)));
  const range = replacementRange(entry, insertion);
  const syntax = await checkSyntax(range.document, entry.language, { projectFiles: entry.projectFiles, ...options });
  const noMarkdown = !insertion.includes('```');
  return { ok: syntax.valid && expected && noMarkdown && range.valid && insertion.trim() !== '',
    parses: syntax.valid, parser: syntax.parser, exact, expected, noMarkdown, validRange: range.valid,
    ...(range.repeatsLine ? { repeatsLine: true } : {}) };
}

async function usageFrom(response) {
  // Reads a clone of the response only for token usage; the production reader
  // consumes and validates the original body.
  const reader = response.body?.getReader();
  if (!reader) return undefined;
  const chunks = [];
  let bytes = 0;
  try {
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > usageBytes) return undefined;
      chunks.push(Buffer.from(value));
    }
    const usage = JSON.parse(Buffer.concat(chunks).toString('utf8'))?.usage;
    const tokens = Object.fromEntries(['prompt_tokens', 'completion_tokens', 'total_tokens']
      .filter(key => Number.isInteger(usage?.[key]) && usage[key] >= 0).map(key => [key, usage[key]]));
    return Object.keys(tokens).length ? tokens : undefined;
  } catch { return undefined; } finally { await reader.cancel().catch(() => {}); }
}

const median = values => {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b), middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : Math.round((sorted[middle - 1] + sorted[middle]) / 2);
};

export function summarizeQuality(cases, threshold = usefulPassRate) {
  const languages = {};
  for (const language of corpusLanguages) {
    const selected = cases.filter(item => item.language === language);
    if (!selected.length) continue;
    const count = key => selected.filter(item => item[key]).length;
    const latency = selected.filter(item => item.requests).map(item => item.elapsedMs);
    const usage = selected.filter(item => item.usage);
    const sum = key => usage.some(item => item.usage[key] !== undefined)
      ? usage.reduce((total, item) => total + (item.usage[key] ?? 0), 0) : null;
    const passed = count('ok');
    languages[language] = { cases: selected.length, passed, passRate: Math.round(passed / selected.length * 1000) / 1000,
      useful: passed / selected.length >= threshold, parses: count('parses'), exact: count('exact'),
      expected: count('expected'), noMarkdown: count('noMarkdown'), validRange: count('validRange'),
      errors: selected.filter(item => item.error).length,
      parsers: [...new Set(selected.map(item => item.parser).filter(Boolean))],
      latencyMs: { median: median(latency), max: latency.length ? Math.max(...latency) : null },
      tokens: { reportedCases: usage.length, prompt: sum('prompt_tokens'), completion: sum('completion_tokens'), total: sum('total_tokens') } };
  }
  const summaries = Object.values(languages);
  return { ok: summaries.length > 0 && summaries.every(item => item.useful), threshold, languages,
    requests: cases.reduce((total, item) => total + item.requests, 0) };
}

export async function probeCompletionQuality(provider, model, { fetch, corpus = completionQualityCorpus, syntax = {} }) {
  const cases = [];
  for (const raw of corpus) {
    const entry = corpusCase(raw);
    // Exactly the renderer's context: bounded prefix/suffix around the cursor plus language id.
    const context = completionContext(entry.text, entry.position, entry.language);
    let requests = 0, usage;
    const started = performance.now();
    const observed = { id: entry.id, language: entry.language, midProject: entry.midProject,
      promptCharacters: context.prefix.length + context.suffix.length };
    try {
      const insertion = await fetchCompletion({ baseUrl: provider.url, apiKey: provider.key, model,
        customHeaders: provider.customHeaders, prefix: context.prefix, suffix: context.suffix, language: context.language }, {
        signal: AbortSignal.timeout(timeoutMs),
        fetch: async (...args) => {
          requests++;
          const response = await fetch(...args);
          if (response.ok && response.body) usage = usageFrom(response.clone());
          return response;
        },
      });
      Object.assign(observed, { insertion: insertion.slice(0, recordedCharacters), ...await scoreInsertion(entry, insertion, syntax) });
    } catch (error) {
      const message = error instanceof CompletionResponseError ? error.message :
        error.name === 'TimeoutError' ? 'Completion timed out after 15 seconds.' : 'Completion transport failed.';
      Object.assign(observed, { ok: false, parses: false, exact: false, expected: false, validRange: false,
        noMarkdown: !/Markdown/.test(message), error: message });
    }
    observed.usage = await usage;
    if (!observed.usage) delete observed.usage;
    Object.assign(observed, { requests, elapsedMs: Math.round(performance.now() - started) });
    cases.push(observed);
  }
  return { ...summarizeQuality(cases), model, corpusSha256, cases,
    scope: 'Pinned multi-language corpus sent as the unchanged production autocomplete request; generated code parsed, never executed. Pass threshold is a proposal pending owner decision; not a native editor measurement.' };
}
