import test from 'node:test';
import assert from 'node:assert/strict';
import { attributeTerminalHistory, parseShellRecord, terminalHistoryFile, unattributedAdditions } from './shell-history-policy.mjs';

const home = '/tmp/ov-home';
const typed = ['echo ov-terminal > terminal-alpha.txt; echo done', 'echo ov-terminal > terminal-beta.txt; echo done'];
const terminal = { pid: 10, flags: 'himBHs', interactive: true, histfile: `${home}/.bash_history` };
const content = `#1792228920\n${typed[0]}\n#1792228947\n${typed[1]}\n`;
const base = { home, added: [terminalHistoryFile], content, typed, terminals: [terminal, { ...terminal, pid: 11 }] };

test('integrated terminal history is attributed by content and by the shell that reported it', () => {
  const result = attributeTerminalHistory(base);
  assert.deepEqual(result, { allowed: [terminalHistoryFile], unattributed: [], reasons: [] });
  assert.deepEqual(unattributedAdditions(['/.bash_history', '/.openvision/x'], result), ['/.openvision/x']);
});

test('an Agent or startup-file entry in HOME history is not allowed', () => {
  for (const line of ['node -e "require(\'fs\').writeFileSync(\'agent-alpha.txt\', \'ok\')"', 'ov-agent-startup-history']) {
    const result = attributeTerminalHistory({ ...base, content: content + line + '\n' });
    assert.deepEqual(result.allowed, []);
    assert.deepEqual(result.unattributed, [line]);
  }
});

test('history is not allowed without an interactive terminal shell that owns it', () => {
  assert.deepEqual(attributeTerminalHistory({ ...base, terminals: [] }).allowed, []);
  assert.deepEqual(attributeTerminalHistory({ ...base, terminals: [{ ...terminal, interactive: false }] }).allowed, []);
  assert.deepEqual(attributeTerminalHistory({ ...base, terminals: [{ ...terminal, histfile: '/dev/null' }] }).allowed, []);
  assert.deepEqual(attributeTerminalHistory({ ...base, content: '#1792228920\n' }).allowed, []);
  assert.deepEqual(attributeTerminalHistory({ ...base, content: undefined }).allowed, []);
});

test('no other HOME path is ever allowed', () => {
  const result = attributeTerminalHistory({ ...base, added: ['/.zsh_history', '/.openvision/ide_state.json'] });
  assert.deepEqual(result.allowed, []);
  assert.deepEqual(unattributedAdditions(['/.zsh_history'], result), ['/.zsh_history']);
});

test('shell self-reports parse', () => {
  assert.deepEqual(parseShellRecord('42|himBHs|/h/.bash_history\n'),
    { pid: 42, flags: 'himBHs', interactive: true, histfile: '/h/.bash_history', history: undefined });
  assert.deepEqual(parseShellRecord('7|hBc||off'), { pid: 7, flags: 'hBc', interactive: false, histfile: '', history: 'off' });
  assert.equal(parseShellRecord(undefined).interactive, false);
});
