import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Chunking for the OpenVision retrieval index. Chunk format (contract v1):
// { startLine, endLine (1-based, inclusive), kind, symbol, text }.
// Chunks cover the file without gaps; overlap only comes from line windows.
export const chunkerVersion = 1;
export const chunkLimits = Object.freeze({ maxLines: 60, windowLines: 50, overlapLines: 10, maxChars: 6000 });

const languages = new Map(Object.entries({
  ts: 'typescript', mts: 'typescript', cts: 'typescript', tsx: 'typescript', js: 'javascript', mjs: 'javascript',
  cjs: 'javascript', jsx: 'javascript', css: 'css', py: 'python', go: 'go', rs: 'rust', java: 'java',
  kt: 'kotlin', rb: 'ruby', php: 'php', c: 'c', h: 'c', cc: 'cpp', cpp: 'cpp', hpp: 'cpp', cs: 'csharp',
  sh: 'shell', bash: 'shell', md: 'markdown', json: 'json', yaml: 'yaml', yml: 'yaml', toml: 'toml',
  html: 'html', sql: 'sql', swift: 'swift', scala: 'scala', lua: 'lua',
}));
export const languageOf = path => languages.get(path.slice(path.lastIndexOf('.') + 1).toLowerCase()) ?? 'text';

// Grammars shipped in the pinned runtime (@vscode/tree-sitter-wasm 0.1.4).
const grammars = { typescript: 'tree-sitter-typescript.wasm', javascript: 'tree-sitter-typescript.wasm', css: 'tree-sitter-css.wasm' };

const lineStarts = text => {
  const starts = [0];
  for (let index = text.indexOf('\n'); index >= 0; index = text.indexOf('\n', index + 1)) starts.push(index + 1);
  if (starts.length > 1 && starts.at(-1) === text.length) starts.pop();
  return starts;
};

function slice(lines, text, start, end) {
  return text.slice(lines[start - 1], end < lines.length ? lines[end] : text.length);
}

export function lineWindows(text, { from = 1, to, kind = 'lines', symbol = '' } = {}) {
  const lines = lineStarts(text), last = to ?? lines.length, chunks = [];
  if (!text.length) return chunks;
  const { windowLines, overlapLines, maxChars } = chunkLimits;
  for (let start = from; start <= last;) {
    let end = Math.min(last, start + windowLines - 1);
    while (end > start && slice(lines, text, start, end).length > maxChars) end = start + Math.floor((end - start) / 2);
    chunks.push({ startLine: start, endLine: end, kind, symbol, text: slice(lines, text, start, end) });
    if (end >= last) break;
    start = Math.max(start + 1, end - overlapLines + 1);
  }
  return chunks;
}

const declarationName = node => {
  for (const candidate of [node, ...node.namedChildren]) {
    const name = candidate.childForFieldName?.('name');
    if (name) return name.text;
    if (candidate.type === 'variable_declarator') return candidate.childForFieldName('name')?.text ?? '';
  }
  if (node.type === 'rule_set') return node.namedChildren[0]?.text?.slice(0, 80) ?? '';
  return '';
};

const containers = new Set(['export_statement', 'class_declaration', 'abstract_class_declaration', 'class_body',
  'class', 'interface_declaration', 'interface_body', 'enum_declaration', 'module', 'internal_module', 'statement_block']);

// Split syntax nodes at declaration boundaries, recursing into containers that
// are too long and merging short neighbours, then fill gaps so every line of
// the file belongs to exactly one chunk.
function syntaxSpans(node, limit) {
  const spans = [];
  for (const child of node.namedChildren) {
    const start = child.startPosition.row + 1, end = child.endPosition.row + 1;
    if (end - start + 1 > limit) {
      const inner = containers.has(child.type) || child.namedChildren.some(grand => containers.has(grand.type))
        ? syntaxSpans(child, limit) : [];
      if (inner.length) {
        const name = declarationName(child);
        spans.push(...inner.map(span => ({ ...span, symbol: span.symbol || name, parent: span.parent || name })));
        continue;
      }
    }
    spans.push({ startLine: start, endLine: end, kind: child.type, symbol: declarationName(child) });
  }
  return spans;
}

function coverSpans(spans, lineCount) {
  const limit = chunkLimits.maxLines, merged = [];
  for (const span of spans.sort((left, right) => left.startLine - right.startLine)) {
    const previous = merged.at(-1);
    if (previous && span.startLine <= previous.endLine) { previous.endLine = Math.max(previous.endLine, span.endLine); continue; }
    const small = previous && span.endLine - previous.startLine + 1 <= limit &&
      (!previous.symbol || !span.symbol || previous.endLine - previous.startLine < 3 || span.endLine - span.startLine < 3);
    if (small) {
      previous.endLine = span.endLine;
      if (!previous.symbol) { previous.symbol = span.symbol; previous.kind = span.kind; }
    } else merged.push({ ...span });
  }
  // Leading comments and blank lines belong to the following declaration.
  let next = 1;
  for (const span of merged) { span.startLine = next; next = span.endLine + 1; }
  if (merged.length && next <= lineCount) merged.at(-1).endLine = lineCount;
  return merged;
}

export class Chunker {
  constructor({ grammarDirectory } = {}) {
    this.grammarDirectory = grammarDirectory;
    this.parsers = new Map();
    this.status = { treeSitter: grammarDirectory ? 'pending' : 'unavailable', error: undefined };
  }

  async api() {
    if (this.loaded) return this.loaded;
    this.loaded = (async () => {
      const path = join(this.grammarDirectory, 'tree-sitter.js');
      // The shipped UMD bundle returns its exports from the factory, so it is
      // evaluated with an AMD-style define instead of require().
      let api; const define = (_dependencies, factory) => { api = factory(); }; define.amd = true;
      const { createRequire } = await import('node:module');
      new Function('define', 'require', '__filename', await readFile(path, 'utf8'))(define, createRequire(path), path);
      await api.Parser.init({ locateFile: file => join(this.grammarDirectory, file) });
      return api;
    })();
    return this.loaded;
  }

  async parser(language) {
    const grammar = grammars[language];
    if (!grammar || !this.grammarDirectory) return undefined;
    if (!this.parsers.has(grammar)) this.parsers.set(grammar, (async () => {
      try {
        const api = await this.api();
        const parser = new api.Parser();
        parser.setLanguage(await api.Language.load(join(this.grammarDirectory, grammar)));
        this.status.treeSitter = 'ready';
        return parser;
      } catch (error) {
        this.status = { treeSitter: 'failed', error: error.message };
        return undefined;
      }
    })());
    return this.parsers.get(grammar);
  }

  // Returns { chunks, parsed } where parsed reports whether a syntax tree was used.
  async chunk(path, text) {
    const language = languageOf(path), lines = lineStarts(text);
    const parser = text.length <= 512 * 1024 ? await this.parser(language) : undefined;
    if (parser) {
      const tree = parser.parse(text);
      try {
        if (tree && !tree.rootNode.hasError) {
          const spans = coverSpans(syntaxSpans(tree.rootNode, chunkLimits.maxLines), lines.length);
          const chunks = [];
          for (const span of spans) {
            const body = slice(lines, text, span.startLine, span.endLine);
            if (span.endLine - span.startLine + 1 > chunkLimits.maxLines || body.length > chunkLimits.maxChars)
              chunks.push(...lineWindows(text, { from: span.startLine, to: span.endLine, kind: span.kind, symbol: span.symbol }));
            else chunks.push({ startLine: span.startLine, endLine: span.endLine, kind: span.kind, symbol: span.symbol, text: body });
          }
          return { chunks, parsed: 'syntax', language };
        }
      } finally { tree?.delete(); }
    }
    return { chunks: lineWindows(text), parsed: 'lines', language };
  }

  dispose() {
    for (const pending of this.parsers.values()) pending.then(parser => parser?.delete()).catch(() => {});
    this.parsers.clear();
  }
}
