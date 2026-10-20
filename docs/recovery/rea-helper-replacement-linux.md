# Proprietary helper contracts and replacements on Linux

19 October 2026. Story **OV-803** (required proprietary helpers and hosted
contracts are replaceable). **Linux x64 only**: a 4-CPU container with Xvfb,
running a clean source build of the 3.21.13 runtime with Node 24.18.0. This is
not the preview.7 package. Windows and macOS helper variants are outside this
report.

The measured ranking that sets the priorities below is in
[proprietary-helper-ranking-linux.md](proprietary-helper-ranking-linux.md).
Loaded roles and dispositions come from
[native-loaded-roles-linux.md](native-loaded-roles-linux.md) and
[native-dispositions-linux.md](native-dispositions-linux.md).

**Sources.** Each helper has three kinds of source:

- The callers in the readable 3.24.18 bundles (`curs_source/javascript/3.24.18`).
  Line numbers below refer to these.
- The same callers in the 3.21.13 runtime bundles (`build/recovery/readable`).
- The 3.21.13 Linux binaries themselves: `--help` output, `strings`, `nm -D`, and
  runs of the helpers on disposable fixtures.

Pseudocode is analysis evidence only; nothing here was rebuilt from it.

## Summary

| Helper | Contract recovered | Replacement on this branch | Default |
| --- | --- | --- | --- |
| `cursorsandbox` | argv, policy JSON, exit codes, environment, stdio and fds, kill model, probe cache, and policy-file deletion (observed) | Landlock helper `desktop/sandbox-helper/openvision-sandbox.c`, built with `OPENVISION_SANDBOX_HELPER=landlock`. A removal path is `OPENVISION_SANDBOX_HELPER=none` | Original helper, unchanged |
| `crepectl` | It is spawned only by the native `GrepClient`. Recovered: argv flags, stdout JSON, outcomes and the cache location | **Not ripgrep-replaceable.** It builds the on-disk n-gram index that the addon reads. The removal path is `OPENVISION_CREPECTL=none` | Original helper, unchanged |
| `tree-chunk-napi` | Five classes and the members used. Its only caller is cloud semantic search | Loaded lazily, so it is never loaded in the workload. No tree-sitter port | Lazy load is the new default |
| `file_service` | The 19 exports and the `GrepClient` method shapes | Differential harness for the measured subset (`desktop/file-service-harness.mjs`). No replacement | — |
| `cursor_proclist.node` | — | Not touched; owned by OV-1003, which already disabled its polling | — |
| `cursor-tunnel` / `code-tunnel`, `appimageupdatetool` | — | Not touched; owned by OV-703 and OV-904 | — |

## `cursorsandbox`

### Callers (3.24.18; the same contract in 3.21.13)

Each bundle carries its own copy of the shell-exec code, and each copy keeps its
own probe cache.

| Process / bundle | Path resolution | Preflight |
| --- | --- | --- |
| Extension host (`extensionHostProcess.js`) | `<resourcesPath>/app/resources/helpers/cursorsandbox` (:160776) | Asynchronous and workspace-rooted (`primeSandboxHelperSupport`, :160946–161002). The result goes to the renderer through `$updateShellExecCapabilities` |
| `cursor-agent-exec` | Up to six candidate directories (:386653–386745) | Synchronous, on the first sandboxed spawn (:35746) |
| `cursor-mcp` | The same candidates (:62626–62653) | Synchronous, at activation (:62657–62660) |
| `cursor-agent-host` | `resolveSandboxHelperPath` (`746.js`, `821.js`) | Only when ripgrep is configured |
| MCP utility process | `<appRoot>/resources/helpers/cursorsandbox` (`main.js` :61468–61484) | Lazy, for sandboxed stdio MCP servers |
| `cursor-local-agent-runtime` | Never configured | — |

Every copy probes separately and re-probes when the working directory differs.
This explains the five startup preflights measured in
[startup-traversal-linux.md](../performance/startup-traversal-linux.md) and in
this branch's ranking runs.

### Command-line protocol

| Item | Contract |
| --- | --- |
| Probe | `cursorsandbox --policy <file> --preflight-only -- /bin/true`, with stdio `ignore, ignore, pipe` and a 15 s timeout. On timeout the process group is sent SIGKILL |
| Run | `cursorsandbox --policy <file> -- <command> [args…]`. With `shell: true` the command is `/bin/sh -c "<cmd> <args>"` |
| Policy file | `$CURSOR_SANDBOX_POLICY_DIR` or `~/<data>/sandbox-policies/sandbox-policy-<16 hex>`. The file is mode 0600 in a directory with mode 0700. Callers prune files older than 1 h every 15 min. **Observed: the helper deletes the policy file after reading it.** A second run with the same file fails with `Failed to read policy file … (os error 2)` |
| Policy JSON | `{ sandbox: { type: workspace_readwrite \| workspace_readonly \| insecure_none, cwd, readBoundary: system \| workspace, hardcodedReadPaths, additionalReadonlyPaths, networkAccess, additionalReadwritePaths, disableTmpWrite, ignoreMapping? }, networkPolicy?, networkPolicyStrict? }` |
| Exit codes | Probe: 0 supported, 2 unsupported kernel features, anything else is a failure. Run: the command's own status. **No code separates a sandbox denial from a command failure.** Callers guess from `EPERM`/`EACCES` text on stderr (`analyzeFailure`, :578784) |
| Environment | Callers set `CURSOR_SANDBOX=native`. They remove `ELECTRON_RUN_AS_NODE` and, on Linux, `SSH_AUTH_SOCK`, `DBUS_SESSION_BUS_ADDRESS`, `XDG_RUNTIME_DIR` and `WAYLAND_DISPLAY` |
| stdio | Passed through. The bash executor passes six descriptors, with its state transport on fds 3–5 (:384638–384660) |
| Stop | The process group is detached. Stop sends SIGTERM to `-pid`, then SIGKILL after 1 s (:383237–383320) |
| Unavailable | The policy becomes `insecure_none`, and every non-allowlisted command waits for approval. An explicitly sandboxed request raises `ShellSandboxUnsupportedError` |

The original helper's internals come from its strings. Its stages are mount and
user namespaces, a private remount, Landlock V3, a seccomp dangerous-syscall
filter, a seccomp network block and an HTTP/SOCKS proxy for allow-listed
networks. There is also a Bubblewrap backend.

### OpenVision behavior before this branch

`desktop/autorun-customization.mjs` already makes the renderer report the sandbox
as unsupported and keeps new profiles on "Ask Every Time". Agent commands
therefore run as `insecure_none` after an explicit **Run**. The preflights still
run, five times at startup, each walking the workspace. The Auto-Run setting
still described allowlist mode without saying the sandbox was unavailable.

### Changes

1. **Clear "sandbox unavailable" message.** The Auto-Run allowlist description
   now says: *"The Agent command sandbox is unavailable in OpenVision. Only
   commands you have added to your allowlist run automatically; every other
   command waits for your approval."* The change is in the
   `autorun-customization.mjs` owner, desktop and glass variants. It is
   marker-guarded and idempotent, and refuses a missing or duplicated owner.
2. **Build option `OPENVISION_SANDBOX_HELPER`**
   (`desktop/helper-replacement-customization.mjs`):
   - `original` is the default, and the helper is unchanged.
   - `none` ships no helper. Every caller's existence check fails, so no
     preflight runs. This is the removal path; approval-first behavior is
     unchanged.
   - `landlock` compiles `desktop/sandbox-helper/openvision-sandbox.c` with
     `$CC` (default `cc`) and installs it under the original name.

   The first original helper is kept under `backups/helper-replacement/` and is
   restored when the option returns to `original`. The switch is idempotent.
3. **Landlock helper.** It is a drop-in for the protocol above:
   - **Probe.** It enforces the ruleset in a child and exits 0, or 2 when the
     Landlock ABI is below 3.
   - **Run.** It applies the rules and then `execvp`s the command, without
     forking. PID, process group, signals, inherited descriptors and the exit
     status all belong to the command.
   - **Policy file.** It is read once with `O_NOFOLLOW`, is at most 1 MiB, and
     is deleted after reading, as the original does.
   - **Failures.** Malformed input exits 1 with `Error: …` and runs nothing.
     A missing command exits 127 and a non-executable one exits 126.
   - **Filesystem.** Reads are allowed below `/` (`readBoundary: system`), or
     only below the system directories, the workspace and the listed read paths
     (`readBoundary: workspace`). Writes are allowed below the workspace
     (`workspace_readwrite` only), `additionalReadwritePaths`, the temporary
     directories unless `disableTmpWrite`, and standard character devices. With
     a workspace read boundary only the caller's `TMPDIR` is shared.
   - **Network off.** Landlock TCP bind and connect (ABI ≥ 4) and abstract UNIX
     sockets (ABI ≥ 6) are denied. A seccomp filter fails IPv4, IPv6 and packet
     socket creation with `EACCES`, which covers UDP.
   - **Signals.** With ABI ≥ 6 the command cannot signal processes outside the
     sandbox.

### Verification of the helper

`node --test desktop/sandbox-helper.test.mjs` passes 9/9 (part of
`npm run test:helper-replacement`). The tests compile the helper and run it as
an unprivileged user on Landlock ABI 7:

| Check | Result |
| --- | --- |
| Writes in the workspace succeed; writes outside it fail and leave no file | Pass |
| `workspace_readonly` denies workspace writes | Pass |
| TCP connect and UDP socket creation denied without network; allowed with `networkAccess: true` | Pass |
| Exit status passthrough (7) and missing command (127) | Pass |
| **Differential against the original `cursorsandbox`** on the same authority matrix and policies | **Equal** on all 8 results |
| Workspace read boundary denies reads outside; temporary-directory and allow-listed write paths | Pass |
| 19 malformed inputs fail closed with exit 1 and `Error:` on stderr, and the command never runs | Pass |
| Inputs covered: missing, empty or symlinked policy; bad JSON; trailing data; unknown type, boundary or option; relative paths; `NUL` escape; deep nesting; a policy over 1 MiB | (included above) |
| Policy file consumed | Pass |
| fd 3 inherited; the command keeps the helper's PID | Pass |
| SIGTERM to the owned process group stops the shell and two background children with no survivors | Pass |
| A sandboxed `kill -0` of an outside process fails | Pass |
| Build options: default, switch, idempotence, restore from the first backup | Pass |

**Limitations.**
- The original's network allow-list proxy is not implemented. `networkPolicy`
  is honored only as allow-all; anything else denies.
- There is no mount namespace, so ignore-mapping deny globs are not enforced.
- A `workspace_readonly` workspace below a writable temporary directory remains
  writable through the temporary-directory rule, because Landlock cannot subtract
  a rule.
- The renderer still reports the sandbox as unsupported, so commands keep
  waiting for approval with every option. The landlock option changes what the
  preflights and sandboxed callers (MCP, ripgrep) get; it does not enable
  auto-run. Enabling sandboxed auto-run is an owner decision.

## `crepectl`

**JavaScript never spawns it.** The retrieval extension resolves
`<appRoot>/resources/helpers/crepectl` (3.24.18 :65506–65518, 3.21.13
:66270–66276). It passes that path as `crepectlPath` to the native
`GrepClient`, and the addon (`snapshot.rs`) spawns the helper. A missing helper
in a production build records `no_crepectl`, disables the indexed grep service
and rechecks once after 5 s (:65415–65433, :65795).

| Item | Contract (from addon and helper strings, and a run on a fixture) |
| --- | --- |
| Command | `crepectl build --worktree <repo> --cache-path <dir> [--commit <sha>] [--filter no-filter\|hidden-file-filter\|ripgrep-default-filter]`. `--memory-limit <MB>` exists; the addon does not pass it |
| Environment | `CREPECTL_PARENT_PID`. **Observed:** the helper exits 3 without building unless the value equals its parent PID. It exits within about 50 ms after that parent dies |
| stdout | **Observed:** `{"success":[<documents>,"<index directory>"],"error":null}`, or `{"success":null,"error":"…"}` on failure. Some failures still exit 0, for example a missing worktree, cache directory or commit. stderr carries logs. (The `DiskIndexPath` string in the binary is an internal type.) |
| Index | `index.bin`, `metadata.json`, `postings.bin` and `definitions.bin` under **`<repo>/.git/cursor/crepe/<commit>`**. This was observed on the harness fixture. It is a project-data destination inside `.git` |
| Outcomes | `success`, `timeout`, `spawn_failed`, `crashed`, `bad_output`, `build_error`. They reach JavaScript only as the metric callback `crepectlInvocation` |
| Gate | `instant_grep_indexing` (default off, server-driven) and the `indexingGrepEnabled` setting. There is no local-mode check |

**Why ripgrep cannot stand in.** crepectl is not a search front end. It builds
a proprietary on-disk index that the addon queries in process. A ripgrep wrapper
cannot produce that index. Ripgrep is already the fallback: Agent grep falls
back to it when `GrepClient.query` returns null or exceeds 25 s, and workbench
search uses it unless `useIndex` holds. The replaceable unit is therefore the
indexed-grep service as a whole (addon plus helper), not crepectl alone.
`OPENVISION_CREPECTL=none` is the removal path; the default stays unchanged.

## `tree-chunk-napi`

The package exports `Chunk`, `ChunkerRouter`, `CompressedFileOutline`,
`FileTree` and `PartialFileContext`. It is written in Rust with tree-sitter
grammars for C, C++, Go, Java, JavaScript, Python, Rust, TypeScript and TSX,
plus an indentation scanner.

Its only caller recontextualizes cloud semantic-search results:

- `new ChunkerRouter({ maxSize: 1 })`
- `parseFile(ext, name, contents)`, then `chunk(40, 80)`, `compress(ranges, 2, 2)`
  and `contextualize(ranges)`

The `SemanticSearch` tool exists only when `repositoryInfos` (the cloud codebase
index) is non-empty (3.24.18 `tool-config.js` L395).

**Measured.** `verify:native-calls` saw the addon loaded in the extension host
during the Agent phase with **0 calls**. The 3.21.13 Agent bundles require it at
module scope (`cursor-agent-exec` `main.js` :122842; `cursor-agent-host` and
`cursor-local-agent-runtime` likewise). 3.24.18 already loads it lazily.

**Change.** `desktop/tree-chunk-lazy-customization.mjs` turns each binding into
a getter that requires the addon on the first `ChunkerRouter` use:

- The transform refuses a binding with any other use.
- A load failure now rejects that search call instead of failing Agent module
  evaluation.
- Guards: `desktop/tree-chunk-lazy.test.mjs` (5 tests, including drift guards on
  all three recovered bundles).

The task's replacement condition was "if it is actually loaded in the
workload". After this change it is not loaded in the workload. A tree-sitter
port with a differential harness was therefore not built; it remains the path if
the owner wants semantic search without the proprietary chunker.

## `file_service`: interface and measured-subset harness

- **Loader.** A standard napi-rs `index.js`. On Linux x64 glibc it loads
  `file_service.linux-x64-gnu.node` and re-exports 19 names.
- **Exports used by JavaScript.** `GrepClient`, `MerkleClient`,
  `CodebaseSnapshotClient`, `GitHistorySession` and `CycleOutcomeKind`,
  `GitGraph`, `LocalBugbotContext` with its enums, and
  `MULTI_ROOT_ABSOLUTE_PATH`.
- **Exports never referenced.** `GitClient`, `DiffClient`, `DiffType`,
  `CommitFileStatus`, `CommitChainGetFiles`, `GitHistoryRetryStrategy`,
  `CodebaseRejectionReason`, `AdvanceResult` and `GeneratePackfileStatus`.
- **Local mode.** `MerkleClient`, `CodebaseSnapshotClient` and
  `GitHistorySession` are never constructed (`FastIndexer` returns early; the
  codebase telemetry is disabled).
- **`GrepClient` methods:**
  - `query(roots, pattern, options)` is async and returns `null` when the query
    is unsupported; `takeLastUnsupportedReason()` then gives the reason.
  - `queryWithCallback(root, pattern, options, cb)`.
  - `warmup`, `getTrackedState`, `getWorkspaceStatuses`.
  - `on/offTrackedStateInvalidated`, `onDidChange/Create/Delete(path)`,
    `dispose`.

**Measured.** The addon is loaded at startup by `cursor-retrieval` and makes **0
calls** in the workload. The measured subset is therefore the module surface,
plus `GrepClient` as the first export a gate change would reach.

`desktop/file-service-harness.mjs` characterizes an implementation and compares
it with a baseline:

- Each implementation runs in a child process with a 120 s deadline.
- Results are normalized: sorted files, and error classes instead of message
  text.
- The fixture is a disposable Git repository with Unicode, CRLF, binary,
  ignored, untracked, excluded and 4 MiB files.
- It covers 17 query cases, an unknown root, 6 malformed constructor shapes,
  and dispose behavior.

The original (`--original`, run `file-service-harness-eEXeLf`) and a second
fresh run compared against it (`…-d42HWW`) are **equivalent: 0 differences**.
The harness itself is deterministic.

Observed original behavior a replacement must match or deliberately change:

| Case | Original |
| --- | --- |
| Index bootstrap | The first query returns `null` / `index_no_snapshot`; then results arrive. The worktree is tracked: untracked files match and `.gitignore` is honored |
| Constructor `excludes: ["excluded/**"]` | **Not applied**: `excluded/skip.txt` matches. The query-level `excludes` option is applied |
| Match at the end of a 4 MiB file | **0 results, not `null`**, so callers would not fall back to ripgrep |
| Invalid regex / empty pattern / unknown root | `null` with `exec_failure` / `unsupported_shape` / `no_index` |
| Wrong option types | Throws `BooleanExpected`. Missing constructor arguments throw `InvalidArg` |
| `maxResults: 2` | 2 files, `truncated: true` |
| After `dispose` | `null` with `no_index`. Disposing twice does not throw |

The 4 MiB result is an inference about current behavior only. If the
`instant_grep_indexing` gate were turned on, Agent grep could report no matches
for content in large files instead of falling back. The gate is off in local
mode, so nothing reaches this path today. The finding is recorded, not changed.

No replacement was written. Its scope would be the indexed-grep service (an
index format plus queries); ripgrep already provides the unindexed path.

## Native contract checks under the decided defaults (20 October 2026)

The owner decided ([owner decisions](../planning/owner-decisions.md)):

- Defaults stay on the original helpers.
- `tree-chunk-napi` loads lazily.
- Sandboxed auto-run stays off.
- Indexed grep stays for this release.

`npm run verify:helper-contracts` (`desktop/verify-helper-contracts.mjs`)
checks authority, malformed input, process identity and cleanup for every helper
the ranking shows as loaded. It runs the **shipped default binaries**, as an
unprivileged user:

- Executables run as their callers run them.
- Addons run in Node 24.18.0 workers under strace, not inside Electron.
- Each worker brackets its measured window with marker `stat()` calls.
- Only verifier-owned children and process groups are signalled.

Values below are from the iteration run `helper-contracts-UrUQPh` (all 20 checks passed). The counted runs are listed in the [worker report](../verification/worker-reports/helper-replacement.md).

| Helper | Authority | Malformed input | Process identity | Cleanup |
| --- | --- | --- | --- | --- |
| `cursorsandbox` (original) | The shared matrix (`desktop/sandbox-contract.mjs`): workspace writes allowed, outside writes and read-only workspaces denied, TCP and UDP denied unless `networkAccess` | 14 invalid inputs fail closed: non-zero exit, command not run | The command replaces the helper: same PID, own session and group. fd 3 is inherited | SIGTERM to the group stops the shell and two background children; no survivors |
| `crepectl` | Writes only under `--cache-path`; no IP sockets; no other process; worktree unchanged | 11 malformed requests build no index. Each exits 2 (usage) or reports an error in the stdout JSON | Builds only when `CREPECTL_PARENT_PID` equals its parent; otherwise exits 3 | Parent killed mid-build: exits within 2 s, staging directory removed |
| `file-service` `GrepClient` | Nothing outside its roots: unknown roots return `null` (`no_index`), `../**` includes and a symlink out of the repository give no results. Writes only under `<repo>/.git/cursor`; no IP sockets; the only process started is `crepectl` | Bad shapes throw typed errors (`InvalidArg`, `BooleanExpected`); an invalid regex returns `null` (`exec_failure`); a 1 MiB pattern returns normally; the host survives | `crepectl` is a child of the host process, with `CREPECTL_PARENT_PID` set to the host PID | Dispose during a build: the build does not outlive the client. Thread growth over 10–30 construct/dispose cycles ≤ 4 and RSS growth ≤ 16 MiB (`MALLOC_ARENA_MAX=2`). Host killed: `crepectl` stops within 2 s, no staging left |
| `cursor-proclist` | 20 scans: no writes, IP sockets or processes. The default scan reports only the caller's own tree | 7 malformed scans and 1 bad memory call resolve without crashing; invalid roots fall back to the caller | Its own tuple has the correct PID and parent PID; the name is the executable path | 1,500 concurrent scans: threads unchanged, RSS +1 MiB, prompt exit |
| `tree-chunk-napi` | Parse, chunk, compress and contextualize over 6 languages: no file opens, writes, IP sockets or processes | 14 malformed calls throw typed errors or return results, including surrogates, NUL bytes, 20,000-level nesting, a 5 MB file and out-of-range ranges | In process; starts no child process | 300 parses: threads unchanged, RSS +1 MiB, prompt exit |

**Observations, recorded and not changed** (all in the original binaries):

- **`GrepClient` callbacks stay referenced after `dispose()`.** Node does not
  exit on its own after construct plus dispose. The extension host exits
  explicitly, so the product is not affected.
- **glibc arenas.** With default per-thread arenas, RSS grows during repeated
  construct/dispose and plateaus at about 245 MiB after 90 clients on a
  40,000-file repository. With `MALLOC_ARENA_MAX=2` it stays flat (87 MiB).
  This is arena retention, not a leak.
- **Spill directory left behind.** A `crepectl` build killed through its parent
  leaves an empty `crepe-spill-*` directory, which the next build does not
  remove. With the original helpers this sits under `<repo>/.git/cursor/crepe`,
  and only when indexed grep is enabled (`instant_grep_indexing` is off by
  default).
- **`cursorsandbox` leniency.** It accepts a relative `cwd` (resolved against the
  caller's directory), a 4 MiB policy and a symlinked policy file. Callers
  write absolute paths into a 0700 directory, so none of these arise. The
  Landlock replacement refuses all three.
- **`tree-chunk-napi` input handling.** An unsupported file type parses with
  the indentation fallback, and a 5 MB file produces 0 chunks.
- **`cursor-proclist` roots.** It reports other processes when the caller names
  them as roots. This is the API contract; the OpenVision callers are disabled
  (OV-1003).

Unit guards: `desktop/helper-contracts.test.mjs` covers trace windows,
hyphenated marker names and rename destinations.
`desktop/sandbox-helper.test.mjs` runs the same sandbox contract against the
Landlock replacement.

## Remaining Linux gaps

- A tree-sitter replacement for `tree-chunk-napi`, if semantic search without
  the proprietary chunker is wanted.
- A replacement for the indexed-grep service (file-service `GrepClient` plus
  crepectl), or an owner decision to remove it, since ripgrep already covers
  search.
- The other file-service exports have no harness. Local mode never reaches them.
- The Landlock helper's network allow-list proxy and mount-based deny globs.

Windows and macOS helper variants (`cursorsandbox.exe`, `crepectl.exe`, macOS
Seatbelt) belong to the platform stories.
