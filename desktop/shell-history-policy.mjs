import { join } from 'node:path';

// Shell-history policy for the HOME isolation verifier (OV-302).
//
// A user's own integrated terminal runs the user's interactive shell. That
// shell saving its history to $HISTFILE (bash: ~/.bash_history) when the
// terminal closes is the user's shell behaving normally; it is not OpenVision
// data. The verifier therefore accepts exactly one HOME addition, the history
// file, and only when it can attribute every recorded command to the
// integrated terminals it drove:
//   - the file is the HISTFILE that each terminal shell itself reported, and
//     every terminal shell reported itself interactive;
//   - every line is a bash timestamp comment (`#<epoch>`) or a command line the
//     verifier typed into an integrated terminal.
// Anything else (an Agent command, a startup-file entry, an unknown writer)
// stays a HOME modification and fails the run. No other HOME path is allowed.
export const terminalHistoryFile = '/.bash_history';

// Parses the `printf '%s|%s|%s\n' "$$" "$-" "${HISTFILE-}"` record a terminal
// or Agent shell writes about itself.
export function parseShellRecord(text) {
  const [pid = '', flags = '', histfile = '', history] = String(text ?? '').trim().split('|');
  return { pid: Number(pid) || undefined, flags, interactive: flags.includes('i'), histfile, history };
}

export function attributeTerminalHistory({ home, added, content, typed, terminals }) {
  const result = { allowed: [], unattributed: [], reasons: [] };
  if (!added.includes(terminalHistoryFile)) return result;
  if (typeof content !== 'string') result.reasons.push('history file is not a regular file');
  const histfile = join(home, terminalHistoryFile);
  if (!terminals.length) result.reasons.push('no integrated terminal reported its shell');
  for (const shell of terminals) {
    if (!shell.interactive) result.reasons.push(`terminal shell ${shell.pid ?? '?'} is not interactive`);
    if (shell.histfile !== histfile) result.reasons.push(`terminal shell ${shell.pid ?? '?'} HISTFILE is ${shell.histfile || 'unset'}`);
  }
  const commands = new Set(typed);
  const lines = (content ?? '').split('\n').filter(line => line !== '');
  result.unattributed = lines.filter(line => !/^#\d+$/.test(line) && !commands.has(line));
  if (result.unattributed.length) result.reasons.push('history records commands not typed into an integrated terminal');
  if (!lines.some(line => commands.has(line))) result.reasons.push('history records no integrated terminal command');
  if (!result.reasons.length) result.allowed.push(terminalHistoryFile);
  return result;
}

// HOME additions that remain after the attributed terminal history is set aside.
export const unattributedAdditions = (added, attribution) => added.filter(path => !attribution.allowed.includes(path));
