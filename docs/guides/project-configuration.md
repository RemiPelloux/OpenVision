# OpenVision project files

New project configuration uses `.openvision/`:

| Content | Path |
| --- | --- |
| Project rules | `.openvision/rules/*.mdc` |
| Project plans | `.openvision/plans/*.plan.md` |
| Large chat pastes | `.openvision/paste/*.txt` |
| Project agents | `.openvision/agents/` |
| Skills and commands | `.openvision/skills/`, `.openvision/commands/` |
| Project MCP servers | `.openvision/mcp.json` |

Plans initially use the profile's `User/.openvision/plans/`, with the existing
workspace fallback and Move to Workspace flow. Profile rules, global MCP configuration, user
agents, skills, commands and hooks use isolated OpenVision profile storage. Legacy single-file
project rules use `.openvisionrules`; new rules belong in `.openvision/rules/`.

The launcher additively migrates its selected Playground project. For another
existing project, run this once before opening it:

```sh
npm run migrate:project -- "/absolute/path/to/project"
```

This copies the old configuration directory into `.openvision`, without deleting
the originals or overwriting any destination. It reports conflicts and skipped
symbolic links/junctions. Repeating it is safe. Original files are the retained
backup. It does not recursively search your disk or import unrelated projects.
Previous conversations and plan registries may still reference old absolute paths;
keep those files until those conversations no longer need them. The migration
does not rewrite saved chat or plan-registry data.

Rules are discovered only inside each opened folder: `.openvision/rules`, nested
`.openvision/rules`, `AGENTS.md`, `.openvisionrules` and, with third-party
extensibility enabled, `CLAUDE.md`. Parent folders, the enclosing Git root and the
home directory are not searched, and rule deep links cannot write home-directory
rule files. To keep rules that a project previously inherited from a parent
folder, copy them into the project. See [rule isolation](../recovery/rea-rules-isolation.md).

## User-level customization

User skills, commands and hooks belong to the OpenVision profile, not your home
directory. The profile home is the profile's `User` folder (`data/local/User`
for the default launcher profile). It uses the same layout as before:
`.openvision/skills/`, `.openvision/commands/` and `.openvision/hooks.json`.
Customize → New writes there. User subagents stay in `User/agents/`.

OpenVision no longer reads `~/.openvision`, `~/.cursor`, `~/.claude`, `~/.codex`,
`~/.agents` or `~/.grok` skills, commands, subagents or hook settings from your
home directory. Each profile and installation sees only its own items. With
third-party extensibility enabled, the same third-party folder names are read
inside the profile home, for example `User/.claude/skills/`. Nothing is moved or
deleted.

### Agent data and runtime arguments

The following also live in the profile home, with their previous layout:
- per-project agent data: transcripts, terminal output, tool output, canvases and
  MCP tool descriptors
- plans and agent worktrees
- recently viewed files
- auto-run permissions and sandbox files
- plugins, including the Claude plugin import
- team hooks and debug-mode logs
- the AI code-tracking database
- `argv.json`
- the developer-only file policy (`User/.openvision-local/policy.json`, read only
  with `--__enable-file-policy`)

For example: `User/.openvision/projects/<project>/`, `User/.openvision/plans/`,
`User/.openvision/worktrees/` and `User/.openvision-local/argv.json`. Each
installation (each `data/local`) and each separate data directory
(`--user-data-dir`) has its own copy. Two installations side by side do not see
each other's data.

Named profiles that you create with **Profiles** inside one data directory share
that directory's `User` folder. They therefore share these OpenVision
customizations and data, including `User/mcp.json`. To keep two setups apart, use
two data directories or two installations.

### MCP servers

Your MCP servers are in the profile's `User/mcp.json`, and a project's are in
`<project>/.openvision/mcp.json`. OpenVision does not read MCP servers from your
home directory. This covers `~/.openvision/mcp.json`, `~/.cursor/mcp.json`, the
Claude desktop configuration and the Windsurf configuration.

The editor setting `chat.mcp.discovery.enabled` does not change this. Its
adapters look only under the profile home, for example
`User/.config/Claude/claude_desktop_config.json`. The background agent host also
uses `User/mcp.json` and keeps its approvals in the profile home. To use a server
from another tool, copy its entry into `User/mcp.json`.

Codebase snapshots and watchers of agent folders also use the profile home, for
example `User/.openvision` and, when enabled, `User/.claude`. Other tools'
`CLAUDE_CONFIG_DIR` and `CODEX_HOME` variables are ignored.

OpenVision passes the profile home to its own processes in the internal
`VSCODE_OPENVISION_PROFILE_HOME` variable. Integrated terminals do not receive
it, but commands run by the Agent may see it. OpenVision ignores `CURSOR_DATA_DIR`,
`CURSOR_CONFIG_DIR` and `$XDG_CONFIG_HOME/cursor`. Another product's settings
therefore cannot redirect OpenVision's data.

#### Signing in to MCP servers

A remote MCP server that needs OAuth shows **Needs authentication** in
Customize → MCPs. Choose **Authenticate**: OpenVision opens the server's sign-in
page in your browser and finishes when the page returns to OpenVision. It
supports OAuth 2.1 with PKCE and dynamic client registration, a pre-registered
client (`"auth": { "CLIENT_ID": "…", "CLIENT_SECRET": "…" }`), and static headers
such as `"headers": { "Authorization": "Bearer ${env:MY_TOKEN}" }`.

- Tokens and client secrets are stored encrypted with your system keyring (the
  Secret Service on Linux) in the OpenVision data folder, never in `mcp.json`.
  They are per data folder and survive restarts.
- If you deny access on the sign-in page, OpenVision says so and saves nothing;
  choose **Authenticate** to try again.
- Expired tokens are refreshed silently. If the server rejects the refresh, the
  server returns to **Needs authentication**; the failed tool call is not
  repeated.
- `${env:NAME}` values are resolved in memory and never written back. Note that a
  variable exported in the environment that starts OpenVision can still be
  saved by the Agent's terminal session state; prefer the keyring for long-lived
  secrets.

See [MCP OAuth evidence](../recovery/rea-mcp-oauth.md).

### Same names and invalid files

Skills, subagents, commands and MCP servers can exist in the project, in your
profile and in a plugin under the same name.

- Customize lists skills and MCP servers from every scope, labelled **Project**,
  **User** or with the plugin's name.
- When the Agent uses one, the project item wins, then the profile item, then
  the plugin's. Subagents and commands keep one item per name, the project one.
- An invalid `mcp.json` entry, skill front matter, subagent file or plugin
  manifest shows a warning naming the file and the reason. The other items still
  load, and fixing the file takes effect without a restart.

See [customization evidence](../recovery/rea-customization-lifecycle.md).

### Shell history

Your integrated terminals run your own shell with your own settings. When a
terminal closes, bash saves its history to `$HISTFILE` (`~/.bash_history` by
default), as in any other terminal. OpenVision does not change this.

Commands run by the Agent never add to your shell history. The Agent prepares
each shell session once in an interactive login shell, which reads your startup
files. OpenVision turns history off in that shell after your startup files run
(bash: `set +o history`; zsh: `HISTFILE` is unset). Agent commands then run with
history off. Your `HISTFILE` and other variables are not changed. Only with zsh
is an exported `HISTFILE` absent from Agent commands.
See [shell history evidence](../recovery/rea-global-path-isolation.md#18-october-2026-shell-history-in-home-linux-x64-only).

### Importing data from your home directory

Earlier builds kept this data in `~/.openvision` and `~/.openvision-local`.
OpenVision no longer reads it there. To bring it into a profile once, run:

```sh
npm run migrate:profile-home                       # into data/local
npm run migrate:profile-home -- --profile /path/to/user-data-dir
```

The import copies skills, commands, user subagents (`~/.openvision/agents` into
`User/agents`), `hooks.json`, plans, per-project agent
data, plugins, recently viewed files, sandbox and permission files, team hooks,
the AI tracking database, debug logs, `argv.json` and the repository blocklist.
- It never moves, changes or deletes the originals, which remain your backup.
- It never overwrites a profile file. A file that differs is reported as a conflict.
- It skips links. Repeating it changes nothing.
- Each import that copies files is recorded in
  `User/.openvision/migrations/home-import.json`.

Agent worktrees are not copied, because Git links them by absolute path. Finish
or remove them in their original location.

### Claude Code and Codex status in the terminal

The `openvision.terminal.externalAgentStatus` setting is off by default. When you
turn it on, a terminal running `claude` or `codex` shows that tool's turn status
on its tab. To do this, OpenVision reads those tools' own session files in your
home directory (`~/.claude/projects`, `~/.codex/sessions`). This is the only
home-directory read OpenVision makes for another tool, and it happens only when the
setting is on. OpenVision never reads other tools' command history for analytics.

Project folders (`.openvision/skills`, `.openvision/commands`, and `.claude/…`
with third-party extensibility) are unchanged. See
[global path isolation](../recovery/rea-global-path-isolation.md).

## Implementation and limits

The build changes JavaScript string, template and path-regex tokens, and parsed
JSON strings across recovered workbenches, native-process JavaScript and bundled
extensions. Readers, writers, watchers and path labels use the same namespace.
Backups and a hash-checked journal allow subsequent recovered-owner patches to
run on their expected inputs. Extension integrity hashes are rebuilt after the
extension changes and before the extension-host namespace pass.

API identifiers, extension identities, CSS names, vendor domains and explicit
import sources retain their identity. Compiled native indexing still recognizes
`.cursorignore` and `.cursorindexingignore`; those compatibility filenames have
not been renamed. Native exclusions for `.cursor/keys` are not proven to cover
`.openvision/keys`; do not infer native exclusion parity from JavaScript changes.
Third-party plugin manifests retain their existing compatibility names.

This is a scoped change to the previously recovered snapshot, not a claim of
complete native decompilation or a newly downloaded upstream version. Windows
runtime verification is available; macOS and Linux native behavior remains
unverified. See [large-paste evidence](../recovery/rea-large-paste.md).

## Verification

On Windows, 43 focused tests passed across paste, namespace migration, plan
writers, profile isolation, subagent paths, the provider relay and extension
integrity. Plan checks execute the recovered desktop and Glass methods with
filesystem adapters; they are not native plan UI evidence. Two successive builds
and desktop syntax checks passed. The real native Rules screen discovered a
project rule in `.openvision/rules/`. Native paste and real Codex Easy Read
verification are recorded in the linked paste report. No feature percentage
is increased by these scoped checks.
