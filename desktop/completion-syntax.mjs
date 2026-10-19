import { spawn } from 'node:child_process';
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, relative, resolve } from 'node:path';
import * as nodeModule from 'node:module';
import { parseJavaScript } from '../tooling/dependencies.mjs';

// Syntax checks for scoring generated completions. Generated code is parsed,
// never compiled to a binary or executed: Python uses ast.parse, Go gofmt -e,
// Rust rustfmt (no macro expansion or build scripts), C cc -fsyntax-only.
// Toolchain diagnostics are discarded because they can echo the provider's text.
// When no toolchain is installed the result is a weaker lexical check
// (strings, comments and bracket balance), and its parser label says so.
const toolTimeoutMs = 10000;
const pythonParse = 'import ast,sys; ast.parse(sys.stdin.buffer.read())';
export const syntaxToolchains = Object.freeze({
  python: [{ name: 'python-ast', command: 'python3', args: ['-I', '-c', pythonParse] },
    { name: 'python-ast', command: 'python', args: ['-I', '-c', pythonParse] }],
  go: [{ name: 'gofmt', command: 'gofmt', args: ['-e'] }],
  rust: [{ name: 'rustfmt', command: 'rustfmt', args: ['--edition', '2021', '--emit', 'stdout'] }],
  c: ['cc', 'gcc', 'clang'].map(command => ({ name: command, command, includes: true,
    args: ['-fsyntax-only', '-std=c11', '-x', 'c', '-'] })),
});

function run(tool, input, cwd) {
  return new Promise(resolvePromise => {
    let child;
    try {
      child = spawn(tool.command, [...tool.args, ...(tool.includes ? ['-I', cwd] : [])],
        { cwd, stdio: ['pipe', 'ignore', 'ignore'], windowsHide: true });
    } catch { return resolvePromise('missing'); }
    const timer = setTimeout(() => child.kill(), toolTimeoutMs);
    child.once('error', error => { clearTimeout(timer); resolvePromise(error.code === 'ENOENT' ? 'missing' : 'failed'); });
    child.once('exit', (code, signal) => { clearTimeout(timer); resolvePromise(signal ? 'failed' : code === 0 ? 'valid' : 'invalid'); });
    child.stdin.on('error', () => {});
    child.stdin.end(input);
  });
}

async function withProjectFiles(projectFiles, action) {
  const directory = await mkdtemp(join(tmpdir(), 'openvision-syntax-'));
  try {
    for (const [path, content] of Object.entries(projectFiles ?? {})) {
      const target = resolve(directory, path);
      if (relative(directory, target).startsWith('..')) throw Error('Project file escapes the syntax directory');
      await mkdir(dirname(target), { recursive: true });
      await writeFile(target, content);
    }
    return await action(directory);
  } finally { await rm(directory, { recursive: true, force: true }); }
}

function javascriptValid(text) {
  try { parseJavaScript(text, { ecmaVersion: 'latest', sourceType: 'module' }); return true; }
  catch { return false; }
}

function typescriptValid(text) {
  // node:module stripTypeScriptTypes (Node >= 22.13) rejects invalid TypeScript;
  // the stripped JavaScript is then parsed. Neither step evaluates the code.
  try { return javascriptValid(nodeModule.stripTypeScriptTypes(text)); }
  catch { return false; }
}

const lexicalRules = {
  javascript: { line: ['//'], block: ['/*', '*/'], quotes: ["'", '"'], template: true },
  typescript: { line: ['//'], block: ['/*', '*/'], quotes: ["'", '"'], template: true },
  python: { line: ['#'], quotes: ["'", '"'], triple: true },
  go: { line: ['//'], block: ['/*', '*/'], quotes: ['"', "'"], raw: '`' },
  rust: { line: ['//'], block: ['/*', '*/'], quotes: ['"'], multilineStrings: true, rustChars: true, rustRaw: true },
  c: { line: ['//'], block: ['/*', '*/'], quotes: ['"', "'"] },
};

// Returns the index after a quoted string starting at `start`, or -1 when unterminated.
function skipQuoted(text, start, quote, multiline) {
  for (let index = start + 1; index < text.length; index++) {
    const character = text[index];
    if (character === '\\') { index++; continue; }
    if (character === quote) return index + 1;
    if (!multiline && (character === '\n' || character === '\r')) return -1;
  }
  return -1;
}

export function lexicalSyntaxValid(text, language) {
  const rules = lexicalRules[language];
  if (!rules) throw Error(`No lexical rules for ${language}`);
  const pairs = { ')': '(', ']': '[', '}': '{' }, stack = [];
  let index = 0;
  const templateText = () => {
    // Inside a JavaScript template literal: returns false when unterminated.
    for (; index < text.length; index++) {
      if (text[index] === '\\') { index++; continue; }
      if (text[index] === '`') { index++; return true; }
      if (text.startsWith('${', index)) { stack.push('${'); index += 2; return true; }
    }
    return false;
  };
  while (index < text.length) {
    const character = text[index];
    if (rules.line.some(token => text.startsWith(token, index))) {
      const end = text.slice(index).search(/\r|\n/);
      index = end < 0 ? text.length : index + end; continue;
    }
    if (rules.block && text.startsWith(rules.block[0], index)) {
      const end = text.indexOf(rules.block[1], index + rules.block[0].length);
      if (end < 0) return false;
      index = end + rules.block[1].length; continue;
    }
    if (rules.triple && (text.startsWith('"""', index) || text.startsWith("'''", index))) {
      const end = text.indexOf(text.slice(index, index + 3), index + 3);
      if (end < 0) return false;
      index = end + 3; continue;
    }
    if (rules.rustRaw && /^b?r#*"/.test(text.slice(index, index + 260)) && !/\w/.test(text[index - 1] ?? '')) {
      const opening = /^b?r(#*)"/.exec(text.slice(index));
      const end = text.indexOf(`"${opening[1]}`, index + opening[0].length);
      if (end < 0) return false;
      index = end + 1 + opening[1].length; continue;
    }
    if (rules.rustChars && character === "'") {
      // Char literal ('x', '\n', '\u{1F600}') or lifetime ('a): only the literal needs closing.
      const literal = /^'(\\(u\{[0-9a-fA-F]{1,6}\}|x[0-9a-fA-F]{2}|.)|[^\\'\r\n])'/u.exec(text.slice(index, index + 14));
      index += literal ? literal[0].length : 1; continue;
    }
    if (rules.raw && character === rules.raw) {
      const end = text.indexOf(rules.raw, index + 1);
      if (end < 0) return false;
      index = end + 1; continue;
    }
    if (rules.quotes.includes(character)) {
      index = skipQuoted(text, index, character, rules.multilineStrings);
      if (index < 0) return false;
      continue;
    }
    if (rules.template && character === '`') { index++; if (!templateText()) return false; continue; }
    if (character === '(' || character === '[' || character === '{') stack.push(character);
    else if (character === ')' || character === ']' || character === '}') {
      const open = stack.pop();
      if (rules.template && character === '}' && open === '${') { index++; if (!templateText()) return false; continue; }
      if (open !== pairs[character]) return false;
    }
    index++;
  }
  return stack.length === 0;
}

// Checks a whole document. `toolchains` is injectable so tests can prove the
// toolchain path with a controlled command; unavailable commands fall through.
export async function checkSyntax(text, language, { projectFiles, toolchains = syntaxToolchains } = {}) {
  if (language === 'javascript') return { valid: javascriptValid(text), parser: 'acorn' };
  if (language === 'typescript' && typeof nodeModule.stripTypeScriptTypes === 'function')
    return { valid: typescriptValid(text), parser: 'node-strip-types+acorn' };
  for (const tool of toolchains[language] ?? []) {
    const outcome = await withProjectFiles(tool.includes ? projectFiles : undefined, directory => run(tool, text, directory));
    if (outcome === 'missing') continue;
    if (outcome === 'failed') return { valid: false, parser: tool.name, toolFailure: true };
    return { valid: outcome === 'valid', parser: tool.name };
  }
  return { valid: lexicalSyntaxValid(text, language), parser: 'lexical' };
}
