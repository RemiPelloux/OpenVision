# Rule discovery isolation

16 October 2026. Runtime input: Cursor 3.21.13 (recovered, formatted bundles).
Story: OV-302 (Partial; one more producer closed, not promoted). Linux x64 only.

## Defect

The [Linux verification](../verification/linux-verification.md#open) run reported
that Customize → Rules listed rules from the checkout's parent folder and the user's
home, and missed the project's `.openvision/rules`.

**Observed in this worktree before the fix.** `npm run verify:paste` passed: the
project rule was listed. The missing project rule did not reproduce here, and the
original run's build is not available. The listing of `.cursor` directories also
did not reproduce: the current build renames those path strings (project namespace
pass). A dedicated fixture (`npm run verify:rules-isolation`) uses a disposable
HOME, a parent folder that is its own Git repository, and a project inside it.
Before the fix it listed the parent's `.openvision/rules` rule and the parent
Git root's `.openvisionrules` file as **User** rules. The project's `AGENTS.md` was
missing: the parent's `AGENTS.md` had the same key and replaced it. Screenshot and
listing: `logs/rules-isolation-MBcBHe/` (private run directory).

## Root cause

**Observed (code).** The Agent extension's local rules service gathers rules for
each workspace folder and pushes them to the renderer's rules service, which
fills Customize and the Agent context. Its `loadRulesFromDirAndAncestors` loop
starts at the folder and continues up to the filesystem root. At each level it
reads `<dir>/.cursor/rules/**/*.mdc`, `AGENTS.md` and, when third-party
extensibility is enabled, `CLAUDE.md`/`CLAUDE.local.md`. `load` and the watcher
path `readRulesAtPath` also read the legacy single-file `.cursorrules` from the
enclosing Git root. The service is in three places:

| Bundle | Owner |
| --- | --- |
| `extensions/cursor-agent-exec/dist/main.js` | Agent extension; registers a rules provider |
| `extensions/cursor-agent-host/dist/main.js` | agent-host extension; its `77.js` also registers a provider |
| `extensions/cursor-agent-host/dist/agent-host-daemon/dist/bin/daemon.cjs` | the agent-host daemon copy |

**Derived.** The project namespace pass renames `.cursor` to `.openvision` in all
three. Every ancestor's `.openvision/rules` and `AGENTS.md` therefore still loads.
For a project under HOME, this includes `~/.openvision/rules` from the real home
directory. **Inferred:** the original report's `.cursor` listing came from a
build in which the namespace pass had not yet been applied. Its missing project
rule may be the same same-name replacement.

## Other producers

| Producer | Fact | Disposition |
| --- | --- | --- |
| Nested rules (`NestedExtensibilityService.discover`) | Walks only inside the folder; returns nothing outside a Git repository or when the folder is HOME | Unchanged |
| Renderer `getGlobalRules` | Accepts only `<folder>/.openvision/rules`, `AGENTS.md` and `CLAUDE.md` inside the folder | Unchanged |
| Profile user rules | Stored in the profile ([local rules](rea-local-rules.md)) | Unchanged; `verify:local-rules` passes |
| Deep-link rule **Add to Home** | `getRuleTargetDirectory(true)` wrote `~/.cursor/rules` (renamed `~/.openvision/rules`) in the real home | Now refused with a message pointing to Customize → Rules → New |
| Skills (`AgentSkillsCursorRulesService`) | Reads user skill roots under the real home, including third-party `.claude`, `.agents`, `.codex` | **Not changed**; separate OV-302 producer |
| Agent-requested rules | Same pushed list, filtered by description | Covered by the producer fix |

## Change

`desktop/rules-scope.mjs` (`installRuleScope`, run after subagent path isolation
and before the namespace pass):

- In all three bundles, the ancestor loop stops after the opened folder. The
  legacy single-file rule is read from that folder, not from the Git root.
- In both workbench variants, the home deep-link target throws an explicit error.
  Project targets are unchanged.

The build checks the class, method, loop-exit and call-site contracts, and fails
if they drift. It keeps the first original under `backups/rules-scope/`, is
cached and idempotent (marker), and reapplies after an input changes.

Policy (documented in [project configuration](../guides/project-configuration.md)):
project rules come from the opened folder's `.openvision/rules`, nested
`.openvision/rules`, `AGENTS.md` and `.openvisionrules`. Legacy `.cursor` content
is imported only with `npm run migrate:project`. Opening HOME itself as a folder
remains an explicit project choice. No user data is moved or deleted. Rules that
were previously inherited from parent folders no longer apply; copy them into
the project if they are wanted.

## Verification (Linux x64 only)

`OPENVISION_RECOVERY_DIR` pointed at the shared prepared 3.21.13 input.

| Command | Result |
| --- | --- |
| `npm run build:desktop` | Pass |
| `npm run verify:rules-isolation` | Before: fail (leaks above). After: **pass**. Project, nested and project `AGENTS` rules are listed as the 3 workspace rules; User group is 0; none of 6 leak fixtures is listed (parent `.cursor`/`.openvision` rules, Git-root `.openvisionrules`, home `.cursor`/`.openvision` rules, unmigrated project `.cursor` rule). Screenshot inspected |
| `npm run verify:paste` | Pass, including project rule discovery |
| `npm run verify:local-rules` | Pass (create/edit, restart persistence, delete) |
| `npm run verify:local-metadata` | Not run: the verifier is Windows-only and stops at its platform assertion |
| `npm run test:namespace` | 22/22 pass, including 7 new `rules-scope` tests |
| `npm run test:paste` | 6/6 pass |
| `npm run test:completion` (includes profile-paths and subagent-paths) | 38/38 pass |
| `npm run test:desktop` | 158/158 pass |
| `npm run test:build-integrity` | 26/26 pass |
| `npm run check:desktop` | Pass |

The new tests run the actual transformed methods from all three recovered bundles
against a filesystem fixture: home → parent Git root → project, plus a second
root. They use the namespaced path strings, real `stat` and path functions, and
stubs for tracing, Git-root lookup, the per-directory walker and the rule proto.
They confirm that the original reads the ancestors and Git root. The patched
service reads only the folder's rules, `AGENTS.md`, `CLAUDE.md` (with third-party
extensibility enabled) and `.openvisionrules`. Each multi-root folder is scoped
separately. Other tests cover the watcher reload path, workbench deep-link
targets, drift rejection, backups, cache and reapplication.

## Unverified

- Agent context: the fixture inspects Customize, which reads the same pushed list
  as the Agent. No model request was made.
- The native run did not record which registered provider supplied the list.
  All three copies are patched and run in tests.
- Native behavior of the deep-link refusal; Windows and macOS.
- OV-302 still needs two named profiles, another installation, skills/plugins/
  commands/hooks producers and migration of the remaining global paths. The
  story stays **Partial**.
- Packaging: source build only; the preview.7 portable payload predates this change.
- No REA Evidence record was produced in this pass. Findings come from focused
  reading of formatted bundles and the executed tests.
