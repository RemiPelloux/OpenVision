// Ignore rules for the OpenVision retrieval index (OV-503).
// ripgrep owns .gitignore, .ignore, .git/info/exclude and global Git excludes.
// This module owns the rules ripgrep cannot read by name: .cursorignore and
// .cursorindexingignore (Git syntax, any directory) and files.exclude (VS Code
// glob syntax, relative to the workspace root). Paths are POSIX, root-relative.

export const cursorIgnoreNames = Object.freeze(['.cursorignore', '.cursorindexingignore']);

const escape = text => text.replace(/[.+^$()|\\]/g, '\\$&');

function characterClass(pattern, index) {
  const end = pattern.indexOf(']', index + 2);
  if (end < 0) return undefined;
  let body = pattern.slice(index + 1, end);
  if (body.startsWith('!')) body = `^${body.slice(1)}`;
  return { source: `[${body.replace(/\\/g, '\\\\')}]`, end };
}

// Git wildmatch: '*' and '?' stop at '/', '**' crosses directories.
function gitSegmentSource(pattern) {
  let source = '';
  for (let index = 0; index < pattern.length; index++) {
    const char = pattern[index];
    if (char === '\\' && index + 1 < pattern.length) source += escape(pattern[++index]).replace(/[*?[\]{}]/g, '\\$&');
    else if (char === '*') {
      if (pattern[index + 1] === '*') {
        const before = index === 0 || pattern[index - 1] === '/', after = pattern[index + 2];
        if (before && after === '/') { source += '(?:.*/)?'; index += 2; continue; }
        if (before && after === undefined) { source += '.*'; index++; continue; }
      }
      source += '[^/]*';
    } else if (char === '?') source += '[^/]';
    else if (char === '[') {
      const found = characterClass(pattern, index);
      if (found) { source += found.source; index = found.end; } else source += '\\[';
    } else source += escape(char).replace(/[{}]/g, '\\$&');
  }
  return source;
}

export function parseGitIgnore(text, base = '') {
  const rules = [];
  for (let line of text.split(/\r?\n/)) {
    if (!line || line.startsWith('#')) continue;
    line = line.replace(/(?<!\\)\s+$/, '');
    if (!line) continue;
    let negate = false;
    if (line.startsWith('!')) { negate = true; line = line.slice(1); }
    else if (line.startsWith('\\!') || line.startsWith('\\#')) line = line.slice(1);
    let directoryOnly = false;
    if (line.endsWith('/')) { directoryOnly = true; line = line.slice(0, -1); }
    if (!line) continue;
    const anchored = line.includes('/');
    if (line.startsWith('/')) line = line.slice(1);
    const body = gitSegmentSource(line);
    const source = anchored ? `^${body}$` : `^(?:.*/)?${body}$`;
    rules.push({ base, negate, directoryOnly, pattern: new RegExp(source) });
  }
  return rules;
}

const inside = (base, path) => !base || path === base || path.startsWith(`${base}/`);
const relativeTo = (base, path) => base ? path.slice(base.length + 1) : path;

function lastMatch(rules, path, directory) {
  let ignored;
  for (const rule of rules) {
    if (!inside(rule.base, path) || path === rule.base) continue;
    if (rule.directoryOnly && !directory) continue;
    if (rule.pattern.test(relativeTo(rule.base, path))) ignored = !rule.negate;
  }
  return ignored;
}

// Rules are ordered from shallow to deep files; a later match wins and an
// ignored directory cannot have children re-included, as in Git.
export function gitIgnored(rules, path) {
  if (!rules.length) return false;
  const parts = path.split('/');
  for (let depth = 1; depth < parts.length; depth++)
    if (lastMatch(rules, parts.slice(0, depth).join('/'), true)) return true;
  return lastMatch(rules, path, false) === true;
}

// VS Code glob syntax: '**', '*', '?', '{a,b}', '[...]'. A pattern also
// excludes everything below a matching directory.
function globSource(pattern) {
  let source = '', depth = 0;
  for (let index = 0; index < pattern.length; index++) {
    const char = pattern[index];
    if (char === '*') {
      if (pattern[index + 1] === '*') {
        index++;
        if (pattern[index + 1] === '/') { source += '(?:.*/)?'; index++; } else source += '.*';
      } else source += '[^/]*';
    } else if (char === '?') source += '[^/]';
    else if (char === '{') { depth++; source += '(?:'; }
    else if (char === '}' && depth) { depth--; source += ')'; }
    else if (char === ',' && depth) source += '|';
    else if (char === '[') {
      const found = characterClass(pattern, index);
      if (found) { source += found.source; index = found.end; } else source += '\\[';
    } else source += escape(char).replace(/[{}]/g, '\\$&');
  }
  return source;
}

export function filesExcludeMatcher(filesExclude = {}) {
  const patterns = Object.entries(filesExclude ?? {}).filter(([, value]) => value === true)
    .map(([pattern]) => pattern.replace(/^\.\//, '').replace(/\/+$/, '')).filter(Boolean).sort();
  const expressions = patterns.map(pattern => new RegExp(`^${globSource(pattern)}$`));
  const matches = path => {
    const parts = path.split('/');
    for (let depth = 1; depth <= parts.length; depth++) {
      const prefix = parts.slice(0, depth).join('/');
      if (expressions.some(expression => expression.test(prefix))) return true;
    }
    return false;
  };
  // Literal '**/name' patterns let ripgrep prune whole directories early.
  const pruneGlobs = patterns.filter(pattern => /^\*\*\/[^*?{}[\]/]+$/.test(pattern)).map(pattern => `!${pattern.slice(3)}`);
  return { patterns, matches, pruneGlobs };
}

// Narrowest directory a files.exclude change can affect.
export function excludeScope(pattern) {
  const literal = [];
  for (const part of pattern.replace(/^\.\//, '').split('/')) {
    if (/[*?{}[\]]/.test(part)) break;
    literal.push(part);
  }
  if (literal.length === pattern.split('/').length) literal.pop();
  return literal.join('/');
}

export function changedExcludeScopes(before = {}, after = {}) {
  const keys = new Set([...Object.keys(before ?? {}), ...Object.keys(after ?? {})]);
  const scopes = [...keys].filter(key => (before?.[key] === true) !== (after?.[key] === true)).map(excludeScope);
  return collapseScopes(scopes);
}

export function collapseScopes(scopes) {
  const sorted = [...new Set(scopes)].sort((left, right) => left.length - right.length);
  const kept = [];
  for (const scope of sorted) if (!kept.some(parent => inside(parent, scope))) kept.push(scope);
  return kept;
}

export class IgnoreRules {
  constructor(filesExclude) {
    this.files = new Map(); // ignore-file path -> rules
    this.rules = [];
    this.exclude = filesExcludeMatcher(filesExclude);
  }

  setFile(path, text) {
    const base = path.includes('/') ? path.slice(0, path.lastIndexOf('/')) : '';
    if (text === undefined) this.files.delete(path); else this.files.set(path, parseGitIgnore(text, base));
    const ordered = [...this.files.entries()].sort(([left], [right]) =>
      left.split('/').length - right.split('/').length || left.localeCompare(right));
    this.rules = ordered.flatMap(([, rules]) => rules);
  }

  ignored(path) {
    return this.exclude.matches(path) || gitIgnored(this.rules, path);
  }
}

export const isCursorIgnoreFile = path => cursorIgnoreNames.includes(path.slice(path.lastIndexOf('/') + 1));
export const isGitIgnoreFile = path => /(^|\/)(\.gitignore|\.ignore|\.rgignore)$/.test(path) || path === '.git/info/exclude';
export { inside as pathInside };
