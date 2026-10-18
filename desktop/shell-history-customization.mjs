import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

// Shell history of the Agent's own shells (OV-302).
//
// Agent commands run in a non-interactive `bash -c` (or `zsh -c`) that replays a
// state snapshot. The snapshot comes from a *state shell* started interactively
// (`bash -O extglob -ilc`, `zsh -o extendedglob -ilc`), so the user's startup
// files run and the shell keeps a history list. An interactive bash saves that
// list to $HISTFILE (default ~/.bash_history) on exit whenever a startup file
// added an entry, and the snapshot replays `set -o history` into every later
// Agent command. The same executor is bundled in the Agent, Agent-host (and its
// daemon), local runtime and MCP extensions, the extension-host process and the
// MCP utility process.
//
// This owner turns history off in those state shells only, after the startup
// files have run. bash: `set +o history` (HISTFILE and the environment are left
// as they are). zsh: `unset HISTFILE` (an exported HISTFILE is then absent from
// Agent commands; zsh is not installed on the verification host). The snapshot
// carries history off into each Agent command. Integrated terminals are started
// by the pty host, and the shell-environment resolver by the main process; both
// are unchanged.
export const shellHistoryMarker = '/* OpenVision Agent shell history v1 */';
export const shellHistoryGuards = {
  bash: 'builtin set +o history 2>/dev/null; ',
  zsh: 'builtin unset HISTFILE 2>/dev/null; ',
};
export const shellHistoryTargets = [
  ...['cursor-agent-exec', 'cursor-agent-host', 'cursor-local-agent-runtime', 'cursor-mcp'].map(name => `extensions/${name}/dist/main.js`),
  'extensions/cursor-agent-host/dist/agent-host-daemon/dist/bin/daemon.cjs',
  'out/vs/workbench/api/node/extensionHostProcess.js',
  'out/vs/code/electron-utility/mcpProcess/mcpProcessMain.js',
];

// `builtin printf '${<marker>}\\n'; dump_<shell>_state\`` ends each state template.
const sites = ['bash_state', 'zsh_state', 'zsh_state_light'].map(name => ({ shell: name.split('_')[0],
  anchor: new RegExp(`builtin printf '\\$\\{[\\w$]+\\}\\\\\\\\n'; dump_${name}\``, 'g') }));
// The template must be the argument after "-ilc": `<script> + " " + \``,
// `<script> + \` ` or `\`${<script>} `, depending on the bundle.
const argument = /^"-ilc",\s*(?:[\w$]+ \+ " " \+ `|[\w$]+ \+ ` |`\$\{[\w$]+\} )$/;

export function disableAgentShellHistory(text) {
  if (text.includes(shellHistoryMarker)) return text;
  const edits = sites.map(({ shell, anchor }) => {
    const found = [...text.matchAll(anchor)];
    if (found.length !== 1) throw new Error(`Agent ${shell} state shell missing or ambiguous`);
    const index = found[0].index;
    const flag = text.lastIndexOf('"-ilc",', index);
    if (flag < 0 || !argument.test(text.slice(flag, index))) throw new Error(`Unexpected Agent ${shell} state shell contract`);
    return { at: index, guard: shellHistoryGuards[shell] };
  }).sort((a, b) => b.at - a.at);
  let out = text;
  for (const { at, guard } of edits) out = out.slice(0, at) + guard + out.slice(at);
  // After a shebang line, if any, so the file stays executable.
  const head = out.startsWith('#!') ? out.indexOf('\n') + 1 : 0;
  return `${out.slice(0, head)}${shellHistoryMarker}\n${out.slice(head)}`;
}

export async function installShellHistoryGuards(root) {
  for (const relative of shellHistoryTargets) {
    const path = join(root, 'source/app', relative);
    const before = await readFile(path, 'utf8'), after = disableAgentShellHistory(before);
    if (before === after) continue;
    const backup = join(root, 'backups/shell-history', relative);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  }
}
