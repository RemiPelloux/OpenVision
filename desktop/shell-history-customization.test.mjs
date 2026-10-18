import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { disableAgentShellHistory, installShellHistoryGuards, shellHistoryGuards, shellHistoryMarker,
  shellHistoryTargets } from './shell-history-customization.mjs';

// First originals kept by the build, or the prepared recovery when no build ran.
async function recovered(relative) {
  for (const base of [new URL('../backups/shell-history/', import.meta.url).pathname,
    process.env.OPENVISION_RECOVERY_DIR && join(process.env.OPENVISION_RECOVERY_DIR, 'readable/app')].filter(Boolean))
    try { return await readFile(join(base, relative), 'utf8'); } catch {}
}
// Both recovered layouts: formatted extension bundles and the MCP utility process.
const fixture = [
  'n = ["-o", "extendedglob",\n  "-ilc",\n  `${or} builtin printf \'${r}\\\\n\'; dump_zsh_state`,\n];',
  'n = ["-O", "extglob",\n  "-ilc",\n  ht + " " + `builtin printf \'${r}\\\\n\'; dump_bash_state`,\n];',
  'n = ["-o", "extendedglob", "-ilc", `${dr} builtin printf \'${r}\\\\n\'; dump_zsh_state_light`];',
  'b = ["-O", "extglob", "-c", `snap=$(command cat <&3) && builtin eval -- "$snap"; dump_bash_state >&4`];',
].join('\n');
const utility = 'n = ["-O", "extglob", "-ilc", Uf + ` builtin printf \'${r}\\\\n\'; dump_bash_state`],\n' +
  fixture.split('\n').filter(line => !/bash/.test(line) && !/^ *ht|extglob",$/.test(line)).join('\n');

test('Agent state shells disable history after startup files; command shells are unchanged', () => {
  for (const input of [fixture, utility]) {
    const patched = disableAgentShellHistory(input);
    assert.equal(disableAgentShellHistory(patched), patched, 'Reapplication is a no-op');
    assert.equal(patched.split(shellHistoryMarker).length, 2);
    assert.equal(patched.split(`${shellHistoryGuards.bash}builtin printf`).length, 2);
    assert.equal(patched.split(`${shellHistoryGuards.zsh}builtin printf`).length, 3);
    assert.equal(patched.replace(`${shellHistoryMarker}\n`, '').replaceAll(shellHistoryGuards.bash, '').replaceAll(shellHistoryGuards.zsh, ''),
      input, 'Only the three guards are added');
  }
  assert.ok(disableAgentShellHistory(fixture).endsWith(fixture.split('\n').at(-1)), 'The non-interactive command shell is not changed');
});

test('Agent shell history transform rejects drift', () => {
  assert.throws(() => disableAgentShellHistory(fixture.replace('dump_bash_state`,', 'dump_state`,')), /bash state shell missing/);
  assert.throws(() => disableAgentShellHistory(fixture.replace(/"-ilc",\n  ht/, '"-lc",\n  ht')), /Unexpected Agent bash/);
  assert.throws(() => disableAgentShellHistory(fixture.replace('`${or} builtin', '`${or}${x} builtin')), /Unexpected Agent zsh/);
  const twice = fixture + '\n' + fixture.split('\n').slice(4, 8).join('\n');
  assert.throws(() => disableAgentShellHistory(twice), /missing or ambiguous/);
});

test('recovered bundles: each has exactly three state shells to guard', async t => {
  const texts = await Promise.all(shellHistoryTargets.map(recovered));
  if (texts.some(text => !text)) return t.skip('needs a build or OPENVISION_RECOVERY_DIR');
  for (const [index, text] of texts.entries()) {
    const patched = disableAgentShellHistory(text);
    assert.equal(patched.length - text.length, shellHistoryMarker.length + 1 +
      shellHistoryGuards.bash.length + 2 * shellHistoryGuards.zsh.length, shellHistoryTargets[index]);
    assert.equal(disableAgentShellHistory(patched), patched);
    // The command template that replays the snapshot is untouched.
    assert.equal(patched.split('builtin eval -- "$snap"').length, text.split('builtin eval -- "$snap"').length);
  }
});

test('install keeps first backups and is idempotent', async () => {
  const root = await mkdtemp(join(tmpdir(), 'ov-shell-history-'));
  const inputs = shellHistoryTargets.map(path => [path, path.endsWith('.cjs') ? `#!/usr/bin/env node\n${fixture}` : fixture]);
  try {
    for (const [relative, body] of inputs) {
      await mkdir(join(root, 'source/app', relative, '..'), { recursive: true });
      await writeFile(join(root, 'source/app', relative), body);
    }
    await installShellHistoryGuards(root);
    const first = await Promise.all(inputs.map(([relative]) => readFile(join(root, 'source/app', relative), 'utf8')));
    await installShellHistoryGuards(root);
    for (const [index, [relative, body]] of inputs.entries()) {
      assert.equal(await readFile(join(root, 'source/app', relative), 'utf8'), first[index], relative);
      assert.notEqual(first[index], body, relative);
      // The marker goes after a shebang line, so the daemon stays executable.
      assert.ok(first[index].startsWith(body.startsWith('#!') ? `#!/usr/bin/env node\n${shellHistoryMarker}\n` : shellHistoryMarker), relative);
      assert.equal(await readFile(join(root, 'backups/shell-history', relative), 'utf8'), body);
    }
  } finally { await rm(root, { recursive: true, force: true }); }
});

// Executes the bash state template with a real bash. HOME has startup files that
// add a history entry only in `-c` shells, as some users' do, and export HISTFILE.
const bash = spawnSync('bash', ['--version']).status === 0;
test('patched bash state shell writes no history; the recovered one does', { skip: !bash && 'bash not found' }, async () => {
  const template = text => /`(builtin (?:set|printf)[^`]*dump_bash_state)`/.exec(text)[1]
    .replace('${r}', '__OV_MARKER__').replaceAll('\\\\', '\\');
  const run = async script => {
    const home = await mkdtemp(join(tmpdir(), 'ov-shell-history-home-'));
    try {
      await writeFile(join(home, '.bash_profile'), '[ -f ~/.bashrc ] && . ~/.bashrc\n');
      await writeFile(join(home, '.bashrc'), 'export HISTFILE=~/.bash_history\ncase $- in *c*) history -s ov-agent-startup-history ;; esac\n');
      const dump = 'dump_bash_state() { builtin shopt -po history; builtin printf "%s\\n" "$HISTFILE"; }; ';
      const child = spawnSync('bash', ['-O', 'extglob', '-ilc', dump + script], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'],
        env: { PATH: process.env.PATH, HOME: home, TERM: 'dumb' } });
      const history = await readFile(join(home, '.bash_history'), 'utf8').catch(() => undefined);
      return { stdout: child.stdout.replaceAll(home, '~'), history };
    } finally { await rm(home, { recursive: true, force: true }); }
  };
  const before = await run(template(fixture)), after = await run(template(disableAgentShellHistory(fixture)));
  assert.match(before.history ?? '', /ov-agent-startup-history/, 'Control: the recovered state shell saves startup history to HOME');
  assert.equal(before.stdout, '__OV_MARKER__\nset -o history\n~/.bash_history\n');
  assert.equal(after.history, undefined, 'The guarded state shell writes no HOME history');
  // History is off in the snapshot; the user's exported HISTFILE is kept.
  assert.equal(after.stdout, '__OV_MARKER__\nset +o history\n~/.bash_history\n');
});

