import test from 'node:test';
import assert from 'node:assert/strict';
import { completionQualityCorpus, corpusCase, corpusLanguages, cursorMarker } from './completion-quality-corpus.mjs';
import { probeCompletionQuality, scoreInsertion, replacementRange, usefulPassRate, corpusSha256 } from './live-completion-quality-probe.mjs';
import { qualityFixtureReply } from './completion-quality-fixture.mjs';
import { checkSyntax, lexicalSyntaxValid } from './completion-syntax.mjs';
import { completionContext } from './completion-provider.js';
import { fetchCompletion } from './completion-http.mjs';
import { probeProvider } from './live-provider-probe.mjs';

const provider = { url: 'http://127.0.0.1:8000/v1', key: 'fixture-key' };
// Lexical-only syntax keeps these tests independent of installed toolchains;
// the toolchain path is proven separately with a controlled command.
const lexical = { toolchains: {} };

function recordedFetch(set, sent = []) {
  return async (url, options) => {
    const body = JSON.parse(options.body);
    sent.push({ url, options, body });
    const reply = qualityFixtureReply(set, JSON.parse(body.messages.at(-1).content));
    return Response.json({ choices: [{ finish_reason: reply.finish_reason ?? 'stop',
      message: { role: 'assistant', content: reply.content } }], ...(reply.usage ? { usage: reply.usage } : {}) });
  };
}

test('pinned corpus covers six languages with 5-10 cases each, project files with imports and one cursor', () => {
  const ids = new Set();
  for (const language of corpusLanguages) {
    const cases = completionQualityCorpus.filter(entry => entry.language === language);
    assert.ok(cases.length >= 5 && cases.length <= 10, language);
    assert.ok(cases.filter(entry => entry.midProject).length >= 2, `${language} mid-project cases`);
  }
  for (const entry of completionQualityCorpus) {
    assert.ok(!ids.has(entry.id), entry.id); ids.add(entry.id);
    assert.equal(entry.document.split(cursorMarker).length, 2, entry.id);
    assert.ok(entry.exact.length > 0 && Array.isArray(entry.expected), entry.id);
    assert.ok(corpusLanguages.includes(entry.language), entry.id);
  }
  assert.match(corpusSha256, /^[0-9a-f]{64}$/);
  assert.equal(usefulPassRate, 0.6);
});

test('every reference answer passes the scorer, and an unrelated insertion does not', async () => {
  for (const raw of completionQualityCorpus) {
    const entry = corpusCase(raw);
    for (const answer of entry.exact) {
      const score = await scoreInsertion(entry, answer, lexical);
      assert.deepEqual({ ok: score.ok, parses: score.parses, exact: score.exact, noMarkdown: score.noMarkdown, validRange: score.validRange },
        { ok: true, parses: true, exact: true, noMarkdown: true, validRange: true }, `${entry.id}: ${answer}`);
    }
    const unrelated = await scoreInsertion(entry, 'unrelatedIdentifier42', lexical);
    assert.equal(unrelated.expected, false, entry.id); assert.equal(unrelated.ok, false, entry.id);
  }
});

test('each case sends exactly the production autocomplete request', async () => {
  const sent = [];
  await probeCompletionQuality(provider, 'coder', { fetch: recordedFetch('good', sent), syntax: lexical });
  assert.equal(sent.length, completionQualityCorpus.length);
  for (const [index, raw] of completionQualityCorpus.entries()) {
    const entry = corpusCase(raw), context = completionContext(entry.text, entry.position, entry.language);
    let expected;
    await fetchCompletion({ baseUrl: provider.url, apiKey: provider.key, model: 'coder', prefix: context.prefix,
      suffix: context.suffix, language: context.language }, { fetch: async (url, options) => {
      expected = { url, body: options.body, headers: options.headers, redirect: options.redirect };
      return Response.json({ choices: [{ finish_reason: 'stop', message: { role: 'assistant', content: '' } }] });
    } });
    assert.equal(sent[index].url, expected.url);
    assert.equal(sent[index].options.body, expected.body, entry.id);
    assert.deepEqual(sent[index].options.headers, expected.headers);
    assert.equal(sent[index].options.redirect, 'error');
    assert.deepEqual(JSON.parse(sent[index].body.messages[1].content), { language: entry.language, prefix: entry.before, suffix: entry.after });
  }
});

test('recorded good replies pass every language with latency and reported tokens', async () => {
  const result = await probeCompletionQuality(provider, 'coder', { fetch: recordedFetch('good'), syntax: lexical });
  assert.equal(result.ok, true);
  assert.equal(result.requests, completionQualityCorpus.length);
  assert.equal(result.corpusSha256, corpusSha256);
  for (const language of corpusLanguages) {
    const summary = result.languages[language];
    assert.equal(summary.passRate, 1, language); assert.equal(summary.useful, true);
    assert.equal(summary.tokens.reportedCases, summary.cases);
    assert.ok(summary.tokens.total > summary.tokens.completion && summary.tokens.completion > 0);
    assert.equal(typeof summary.latencyMs.median, 'number');
  }
  assert.deepEqual(result.languages.javascript.parsers, ['acorn']);
  assert.deepEqual(result.languages.typescript.parsers, ['node-strip-types+acorn']);
  assert.deepEqual(result.languages.python.parsers, ['lexical']);
});

test('recorded wrong code fails every language even where it parses', async () => {
  const result = await probeCompletionQuality(provider, 'coder', { fetch: recordedFetch('bad'), syntax: lexical });
  assert.equal(result.ok, false);
  for (const language of corpusLanguages) {
    assert.equal(result.languages[language].passed, 0, language);
    assert.equal(result.languages[language].useful, false);
  }
  assert.ok(result.cases.filter(item => item.parses).length > completionQualityCorpus.length / 2, 'scorer separates parsing from usefulness');
  assert.ok(result.cases.every(item => item.expected === false && item.noMarkdown && item.insertion === 'unrelatedValue'));
});

test('truncated and Markdown replies are rejected by the production reader and counted as failures', async () => {
  const truncated = await probeCompletionQuality(provider, 'coder', { fetch: recordedFetch('truncated'), syntax: lexical });
  assert.equal(truncated.ok, false);
  assert.ok(truncated.cases.every(item => !item.ok && /truncated/.test(item.error) && item.requests === 1 && !item.usage));
  for (const summary of Object.values(truncated.languages)) {
    assert.equal(summary.errors, summary.cases); assert.equal(summary.tokens.total, null);
  }
  const markdown = await probeCompletionQuality(provider, 'coder', { fetch: recordedFetch('markdown'), syntax: lexical });
  assert.equal(markdown.ok, false);
  assert.ok(markdown.cases.every(item => !item.ok && item.noMarkdown === false && /Markdown/.test(item.error)));
});

test('scorer rejects repeated surrounding text, trailing fences, broken syntax, empty text and lone surrogates', async () => {
  const sum = corpusCase(completionQualityCorpus.find(entry => entry.id === 'js-sum-return'));
  const repeatedSuffix = await scoreInsertion(sum, 'a + b;', lexical);
  assert.equal(repeatedSuffix.validRange, false); assert.equal(repeatedSuffix.repeatsLine, true); assert.equal(repeatedSuffix.ok, false);
  const repeatedPrefix = await scoreInsertion(sum, 'return a + b', lexical);
  assert.equal(repeatedPrefix.validRange, false);
  const fence = await scoreInsertion(sum, 'a + b\n```', lexical);
  assert.equal(fence.noMarkdown, false); assert.equal(fence.ok, false);
  const broken = await scoreInsertion(sum, 'a + (b', lexical);
  assert.equal(broken.parses, false); assert.equal(broken.ok, false);
  assert.equal((await scoreInsertion(sum, '', lexical)).ok, false);
  assert.equal((await scoreInsertion(sum, 'a + b \uD800', lexical)).validRange, false);
});

test('replacement range applies the adapter line edit, preserving CRLF documents', () => {
  const entry = corpusCase({ id: 'crlf', language: 'javascript', document: 'function f() {\r\n  return <|cursor|>;\r\n}\r\n', exact: ['1'], expected: [] });
  const range = replacementRange(entry, 'a\nb');
  assert.deepEqual(range.range, { startLineNumber: 2, endLineNumberInclusive: 2 });
  assert.equal(range.document, 'function f() {\r\n  return a\r\nb;\r\n}\r\n');
  assert.equal(range.valid, true);
});

test('toolchain parsers run on stdin with project headers, and fall back to the next or lexical checker', async () => {
  const stub = { name: 'stub', command: process.execPath, includes: true, args: ['-e',
    "let t='';process.stdin.on('data',d=>t+=d).on('end',()=>process.exit(t.includes('valid();')&&require('fs').existsSync(require('path').join(process.argv.at(-1),'vector.h'))?0:1))", '--'] };
  const missing = { name: 'missing', command: 'openvision-missing-syntax-tool', args: [] };
  const toolchains = { c: [missing, stub] };
  assert.deepEqual(await checkSyntax('valid();', 'c', { toolchains, projectFiles: { 'vector.h': '' } }), { valid: true, parser: 'stub' });
  assert.deepEqual(await checkSyntax('valid();', 'c', { toolchains }), { valid: false, parser: 'stub' });
  assert.deepEqual(await checkSyntax('other(', 'c', { toolchains, projectFiles: { 'vector.h': '' } }), { valid: false, parser: 'stub' });
  assert.deepEqual(await checkSyntax('int x;', 'c', { toolchains: { c: [missing] } }), { valid: true, parser: 'lexical' });
  await assert.rejects(checkSyntax('x', 'c', { toolchains: { c: [stub] }, projectFiles: { '../escape.h': '' } }), /escapes/);
});

test('lexical checker handles strings, comments, raw strings, lifetimes and templates per language', () => {
  for (const [language, valid, invalid] of [
    ['javascript', 'const s = `a ${f({ x: "}" })} b`; // )', 'const s = `a ${f(}`;'],
    ['typescript', "const s: string = '(' /* ] */;", 'const s = [1, 2;'],
    ['python', 'x = """ ( """\ny = "#"  # )', "x = 'unterminated\n"],
    ['go', 'var s = `\n(\n`\nvar r = \')\'', 'func f() { return "x }'],
    ['rust', "fn f<'a>(x: &'a str) -> char { let _ = r#\"(\"#; '}' }", "fn f() { let c = '(' "],
    ['c', 'char c = \'}\'; /* { */ int x = (1);', 'int x = (1;'],
  ]) {
    assert.equal(lexicalSyntaxValid(valid, language), true, `${language} valid`);
    assert.equal(lexicalSyntaxValid(invalid, language), false, `${language} invalid`);
  }
});

test('provider probe routes completion-quality mode and redacts the credential', async () => {
  const fetch = async (url, options) => url.endsWith('/models')
    ? Response.json({ data: [{ id: 'coder' }] })
    : (url.endsWith('/chat/completions') ? recordedFetch('good')(url, options) : Response.json({}, { status: 404 }));
  const result = await probeProvider({ ...provider, models: ['coder'], probeModel: 'coder', probeMode: 'completion-quality' }, { fetch });
  assert.equal(result.discovery.ok, true);
  assert.equal(result.completionQuality.requests, completionQualityCorpus.length);
  assert.equal(typeof result.completionQuality.ok, 'boolean');
  assert.doesNotMatch(JSON.stringify(result), /fixture-key/);
});
