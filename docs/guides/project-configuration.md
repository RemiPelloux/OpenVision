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

Plans initially use `~/.openvision/plans/`, with the existing workspace fallback
and Move to Workspace flow. Profile rules, global MCP configuration, user
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
deleted. To keep items you stored in your home directory, copy them into the
profile once, without overwriting:

```sh
mkdir -p data/local/User/.openvision
cp -Rn ~/.openvision/skills ~/.openvision/commands data/local/User/.openvision/
cp -n ~/.openvision/hooks.json data/local/User/.openvision/
```

Project folders (`.openvision/skills`, `.openvision/commands`, and `.claude/…`
with third-party extensibility) are unchanged. Some agent data, such as per-project
transcripts, plans and worktrees, still uses the home directory. See
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
