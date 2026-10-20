# Proprietary helper ranking on Linux (measured)

19 October 2026. Story **OV-803**. **Linux x64 only**: a 4-CPU container with
Xvfb, a private D-Bus session and a disposable keyring, running a clean source
build of the 3.21.13 runtime with Node 24.18.0. This is not the preview.7
package. Controlled model responses come from a local HTTP fixture; this is not
live inference.

Contracts and replacements for each helper are in
[rea-helper-replacement-linux.md](rea-helper-replacement-linux.md). This page
ranks the helpers by what they actually did in one fixed workload.

## Method

```sh
npm run build:desktop
npm run verify:native-calls                     # desktop/verify-native-calls.mjs (300 s idle)
npm run verify:native-calls -- --idle-seconds=10   # iteration aid only, not counted
npm run test:helper-replacement                 # includes the parser/summary unit tests
```

The measurement has two parts.

- **Addon calls.** `desktop/native-call-log.cjs` is loaded first by the main
  process, every extension host and the agent-host daemon (build customization
  `desktop/native-call-log-customization.mjs`). It does nothing unless
  `OPENVISION_NATIVE_CALL_LOG` names an absolute directory. When enabled, every
  load of `file_service.linux-x64-gnu.node`, `tree-chunk-napi.linux-x64-gnu.node`
  or `cursor_proclist.node` is wrapped in a proxy. For each class, function and
  instance method it records:
  - the export and member;
  - the argument byte sizes and types (never the contents);
  - the synchronous duration and the promise settlement time;
  - the loading call site (bundle base names and positions).

  Instances returned through promises or arrays are wrapped too. Proxies are
  unwrapped before native calls.
- **Helper processes.** The launched program is
  `strace -f --seccomp-bpf -e trace=execve,execveat`, so the tracer is the
  ancestor of every process and nothing is attached by PID. Successful `execve`
  records are attributed to the workload phase by timestamp.

The export surfaces come from the loader and from napi registration: each
`.node` has a single dynamic export, `napi_register_module_v1` (`nm -D`), so
classes and members are read from the loaded module (the `load` record).

**Fixed workload, in order:**

1. **startup**: a fresh profile and a 50-file project, with 15 s to settle.
2. **explorer**: open `src/module-7.js` from the tree.
3. **terminal**: a new integrated bash terminal runs a command that writes a
   marker file.
4. **agent**: add the loopback provider. Run the Agent search fixture (Glob, a
   content Grep and an empty Grep, which is four provider turns). Then propose
   one command that is denied and one that is approved; both must wait for
   approval.
5. **search**: workbench text search, expecting 10 results in 10 files.
6. **idle**: 300 s.
7. **control**: one call to `cursor_proclist_system_memory()` from the main
   process, through the binding that is already loaded. It is counted apart from
   the ranking. It proves that a zero count means "not called" rather than "not
   observed".

## Ranking

The table is from the two counted runs on the final default build,
`native-calls-92z3FR` and `native-calls-gAnroI`. Both passed on the first
attempt with identical rankings, and the control call was logged in both. The
first full run, `uWY02Z`, came before the `tree-chunk-napi` lazy-load change; it
is the evidence for that row's earlier state.

| Rank | Component | Kind | Measured dependency | Detail |
| ---: | --- | --- | --- | --- |
| 1 | `cursorsandbox` | static executable | **Used** | 5 executions, all in startup, all `--policy <file> --preflight-only -- /bin/true`. No sandboxed run, because commands use `insecure_none` after approval |
| 2 | `cursor_proclist.node` | napi addon (main) | Loaded, no calls | Loaded at startup by `out/main.js`. Polling is disabled by OV-1003 (`idle-services-customization.mjs`). Control call logged |
| 3 | `file_service.linux-x64-gnu.node` | napi addon (extension host) | Loaded, no calls | Loaded at startup by `cursor-retrieval` `main.js` (the module-level require). There is no `GrepClient`, because the `instant_grep_indexing` gate is off |
| 4 | `appimageupdatetool` | nested AppImage | Not used | 0 executions (OV-904) |
| 5 | `crepectl` | static executable | Not used | 0 executions. Only the native `GrepClient` spawns it |
| 6 | `cursor-tunnel` / `code-tunnel` | executable | Not used | 0 executions (OV-703) |
| 7 | `tree-chunk-napi.linux-x64-gnu.node` | napi addon (extension host) | **Not loaded** (was: loaded, no calls) | Before the change (run `uWY02Z`) it was loaded during the Agent phase by `cursor-agent-exec` `main.js:122842`, a module-scope require, and never called. Its only caller is cloud semantic search. With the lazy load it is not loaded in the workload |

The `tree-chunk-napi` copy beside the agent-host daemon was never loaded. No
daemon process loaded the hook in this workload.

Exports seen at load (class members in braces):

- **`file-service`:** 19 exports, including
  `GrepClient{dispose,getTrackedState,getWorkspaceStatuses,offTrackedStateInvalidated,onDidChange,onDidCreate,onDidDelete,onTrackedStateInvalidated,query,queryWithCallback,takeLastUnsupportedReason,warmup}`,
  `MerkleClient`, `CodebaseSnapshotClient`, `GitHistorySession`, `GitGraph`,
  `LocalBugbotContext`, `GitClient`, `DiffClient`, eight enums and
  `MULTI_ROOT_ABSOLUTE_PATH`.
- **`tree-chunk-napi`:**
  - `ChunkerRouter{parseFile,supportsFileType}`
  - `FileTree{applyingChanges,chunk,compress,contents,contextualize,fileType,getUtf16CuToByteRange,init,path}`
  - `Chunk{content,prefixes,render,renderWithLimit,suffixes}`
  - `CompressedFileOutline{elements,render}`
  - `PartialFileContext{elements,render}`
- **`cursor-proclist`:** `cursor_proclist_scan_async`,
  `cursor_proclist_system_memory`.

Other executables, for scale: Git 34, ripgrep 10 (the Cursor fork
`15.1.0-cursor5`, outside the OV-803 set), and the shell-environment probes
(`base64`, `cat`, `tr`, `sh`).

## What the ranking means for replacement

- **`cursorsandbox` is the only helper that does work.** That work is five
  startup preflights whose verdict the renderer ignores, because OpenVision
  already reports the sandbox as unsupported. `OPENVISION_SANDBOX_HELPER=none`
  removes them; `=landlock` replaces the helper. Both are build options; the
  default is unchanged.
- **The addons are loaded and never called.** For `tree-chunk-napi` the load
  itself is removed: it is now loaded lazily, and the counted runs no longer
  load it. For `file-service`, the
  measured subset is the module load. The `GrepClient` harness covers the first
  export a gate change would reach.
- **`crepectl`, the tunnels and the AppImage updater do not run.** They are
  removal candidates (crepectl behind `OPENVISION_CREPECTL=none`; the others
  under their owning stories).

## Evidence

| Run | Content |
| --- | --- |
| `logs/native-calls-92z3FR` | **Counted run 1**, final default build: pass, 300 s idle; hook in the main process and 4 extension hosts; control logged |
| `logs/native-calls-gAnroI` | **Counted run 2**, final default build: pass; identical ranking |
| `logs/native-calls-uWY02Z` | First full run, before the `tree-chunk-napi` lazy load: pass; the addon was loaded during the Agent phase with 0 calls |
| `logs/native-calls-4trGUk` | Build with `OPENVISION_SANDBOX_HELPER=landlock`: pass; 5 preflights served by the Landlock helper (SHA-256 prefix `f551c498f1e163b8`); commands still wait for approval |
| `logs/native-calls-8cObQ2` | Build with `OPENVISION_SANDBOX_HELPER=none OPENVISION_CREPECTL=none`: pass; **0 helper executions**; commands still wait for approval. The identity hash reads `null` for absent files |
| `logs/native-calls-YwNPyd` | Iteration run (10 s idle), not counted |
| `logs/native-calls-RrImCf` | Iteration run: failed at the model picker because the proxy environment variables were inherited. Not counted |

Identity of the measured helpers (SHA-256; the same in all runs on the default build):

| File | SHA-256 |
| --- | --- |
| `file-service` | `3b0290b101e8d8f772b829689e5cdc1b082608a4596be0627f3d86c3a76b7cb0` |
| `tree-chunk-napi` (both paths) | `6dbfb46f03a9486741964441e81847c7261222a1b09373044e8bb8fa0d51f1f1` |
| `cursor-proclist` | `19e3f28befb0a39d23a26e200a45fe2bcb156d69bc00ef885551182d979dd942` |
| `crepectl` | `a145cdb8b2a0235123448a2c1150f5ebf40984729b5670bf711513db3c39d2ca` |
| `cursorsandbox` | `80fcddbf185f64445364251c7102d798a5b5a0f106a688b8b6275f6278d51b15` |

Run directories are private (`logs/` is ignored). They hold `result.json`,
`execve.log`, `helper-execs.json` and the per-process call logs.

## Limitations

- This is a single workload on one host. Counts depend on the feature gates
  served to a local-mode profile without an account. A gate such as
  `instant_grep_indexing` would add `GrepClient` and crepectl activity.
- strace and the proxy add overhead, so durations are indicative only.
- The call log covers the three addon files listed above. Other native modules
  (`node-pty`, `sqlite3`, `keytar`, `@vscode/ripgrep` and others) are open
  source and outside this ranking; see the native inventory.
- Linux x64 only. Windows and macOS variants are moved to the platform stories.
