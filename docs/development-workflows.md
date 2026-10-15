# Native terminals, tasks and Node debugging

**OV-403 remains Partial pending an intermittent shutdown-exit investigation.** Real Command Prompt
and Windows PowerShell terminals, the bundled task runner and the shipped Node
debugger passed the accepted workflow and process-release checks. This adds no
claim about other debuggers, remote environments or operating systems.

Run the repeatable check against a prepared desktop:

```sh
npm run verify:development
```

The verifier creates a disposable project, profile and declared extension driver
under ignored `logs/development-verification-*`. It launches its own OpenVision
window and closes only that application. The driver uses public terminal/task/
debug APIs and the actual debugger protocol; the outer runner changes the native
window dimensions and sends Ctrl+C through the visible terminal. There are no
mock terminal, task or debugger providers. Small synthetic Node workloads make
process identity, output and expected debugger values explicit. No AI requests
are sent, and the normal user profile is not modified.

## Launcher and native shutdown evidence

On Windows, Playwright launches Electron through `cmd.exe`; `app.process()`
identifies that launcher. Earlier reports called its exit code `hostExit`.
Those results establish the launcher exit only. In particular, the retained
`AYXW1r` code 134 does not identify a native crash or its cause.

The verifier now records the actual main PID, parent, executable and versions
inside Electron, plus separate launcher exit/close events. Before closing the
owned app it adds synchronous diagnostic breadcrumbs for native quit, process
exit and uncaught exceptions. It neither suppresses errors nor changes shutdown
behavior. Missing or malformed diagnostics fail verification; success requires
a code-0 process-exit event from the recorded native main PID.

Runs `EXDDWn` and `VW33w4` passed the full terminal/task/debugger matrix, child
release and persisted-state checks. Native main PIDs 21028 and 9584 respectively
recorded process-exit/quit code 0; both launchers also exited/closed with code 0.
`VW33w4` includes the fail-closed evidence assertion. Its main/workbench digests
are `165b5b1d9651f215d9d9321c212345d6da17b1fa97aceec13e556f3f0295a318` /
`42b189a00a9c54629b458bfec622be8eb4a8e04d26c02f1500efd59f7e696bd0`.
Retained stderr includes a mutex-already-exists diagnostic while another app
instance was running; it does not explain the earlier exit 134.

Final runner check `Id9taJ` also passed the complete matrix after making malformed
breadcrumb handling fail closed. Native PID 8832 recorded process-exit code 0,
the launcher exited 0, children were released and shutdown state was saved.

Initial diagnostic run `KyuBKQ` passed the workflows but could not install the
breadcrumbs because dynamic import was unavailable in the evaluation context.
Its old success flag is not native clean-exit evidence. The final runner uses
the built-in filesystem module and rejects missing evidence. No product crash
fix is claimed; OV-403 remains Partial until the earlier exit is understood.

## Pinned result and acceptance mapping

Successful run after the state-flush fix:
`logs/development-verification-qsrEut/result.json`, 14 October 2026. Driver interval:
`13:17:32.686Z`–`13:17:47.627Z` (14.941 seconds; excludes initial application launch
and final shutdown). All listed checks passed, the launcher exited 0 and the final
shutdown state was persisted. No renderer page errors occurred. An earlier run,
`development-verification-AYXW1r`, passed its driver but its launcher exited 134 during app
shutdown. That failure is retained and unresolved; a later passing run does not
establish its cause or a fix. This is functional verification, not a speed
benchmark or proof that every diagnostic log is error-free.

The final runner revision also passed at
`logs/development-verification-N6n805/result.json`: all workflow, child-release
and persisted-state checks succeeded, launcher exit was 0, and the captured stderr
had no storage-provider error. Its driver interval was 15.808 seconds. This
confirms the final harness against the same runtime hashes; it does not explain
the earlier intermittent exit.

| Accepted clause | Observed native result |
| --- | --- |
| Shells | Real `cmd.exe /d /q` and Windows PowerShell `-NoLogo -NoProfile` |
| Resize | Native PTY size changed from 81×13 to 57×12 for Command Prompt, then 57×12 to 103×13 for PowerShell |
| Unicode | Both rendered `OpenVision café 日本語`; terminal text and screenshots retained |
| Environment | Explicit fixture variable and exact project working directory reached the child in both shells |
| Cancel | Actual Ctrl+C input reached an interactive raw-input client, which exited; the original process became absent |
| Restart and disposal | A new client ran in the same shell; terminal disposal released that client and its shell |
| Normal exit | A newly opened shell accepted `exit 0`, reported exit code 0 and disappeared |
| Problem matching | Native process task exited 2; its registered matcher published the expected error at `problem.c:3:5` |
| Task cancellation and rerun | Two successive real task executions each started a parent and child; native termination released both pairs |
| Debug breakpoint | Shipped `pwa-node` paused on source line 5 with reason `breakpoint`; evaluating `value` returned 3 |
| Step and continue | Actual `next` changed the evaluated value to 9; `continue` executed the marker write and spawned a child |
| Debug Stop | Public Stop terminated the debug session, debuggee PID 13392 and child PID 23556 |
| Window closure | Shell PID 10244, client PID 9856 and child PID 23812 became absent after the owned host closed |
| Final state flush | `lifecycle.lastShutdownJoinerTimings` was saved, including the completed instance-lock joiner |

Process IDs identify this retained run only. The verifier checks disappearance;
it never kills a process merely because a stored PID exists. Workload parent IDs
and spawn records establish the observed relationships. This does not prove
cleanup of arbitrary detached daemons or all possible descendant topologies.

## Runtime identity

- Windows x64, Node **24.18.0**, editor API **1.128.0**.
- Windows PowerShell **5.1.26100.9444**. Both shell executables report file version
  **10.0.26100.8875 (WinBuild.160101.0800)**.
- Bundled `ms-vscode.js-debug` **1.93.0**; implementation SHA-256
  `5251540b6fc728ed8046e563d4e7b40cb79115936124038b2ff7740eee149666`.
- Workbench SHA-256
  `f5e44f0c2a9cc9a682b9da9bb91f289bd08ba952cb2901826496b4ff54633aff`.
- Patched main-process SHA-256
  `5ad05fc7d65b0d532359c20fc750fb72a1eb188bec910a7f0483ae63f21f469e`.

Shell integration and persistent terminal sessions are disabled in the disposable
profile. Accessibility mode exposes terminal text, with GPU rendering disabled.
The tested PowerShell environment sets `PSModulePath` to the built-in Windows
PowerShell module directory. These explicit fixture settings scope the result;
the suite does not establish arbitrary user-profile/module compatibility.

## Shutdown resource ownership fix

The recovered startup listener disposed its file service and configuration
service synchronously during `onWillShutdown`. The lifecycle owner then awaited
shutdown joiners and attempted to save final state through that already-disposed
file service. Multiple native runs recorded `ENOPRO` for `storage.json`, including
otherwise successful hosts. This was a producing-owner ordering bug.

`shutdown-customization.mjs` retains those resources until process exit, after
the lifecycle's existing final state flush. The lockfile cleanup remains a joined
shutdown operation. No second storage writer, late retry or swallowed filesystem
error is introduced. The patch validates the startup/file-service owner and state
flush contract, is idempotent and preserves a backup when changing source.
Focused checks cover pending and rejected joiners and exactly-once disposal.

The rebuilt native run above saved the final joiner timings and produced no
`ENOPRO` in its captured shutdown stderr. This fixes the demonstrated state-save
failure; **it does not establish the cause of exit 134** in `AYXW1r`. That run had
no captured native stderr. A later pre-fix run, `RMDNqt`, exited 0 while still
logging `ENOPRO`, so the two symptoms must not be equated. The verifier now retains
a bounded stderr tail and records cleanup evidence even after a failed host exit.
OV-403 stays Partial until that remaining failure is understood.

The later [build-integrity correction](runtime-build-integrity.md) also separates
these runtime observations from reproducible generation. Fresh generation exposed
a faulty shell import and damaged Agent/MCP inputs. Those inputs have been
restored with retained provenance; successful editor-only runs do not validate
extension workflows or explain the earlier exit 134.

Three further diagnostic runs (`ZykGLe`, `oLPXzL`, `NLKpup`) passed the full
workflow, process release and state-save checks with exit 0 and no storage error
in retained stderr. A read-only query of the Windows Application event log for
15:11:30–15:13:30 local time found no Application Error/Windows Error Reporting
record for the earlier failure. This bounded negative check and the successful
reruns do not establish why `AYXW1r` exited 134; its status remains unresolved.

## Harness findings and limits

Initial runs `RZbBdC` and `yIwOrQ` failed resize observation: the Node fixture did
not read console input, which Windows requires to deliver console resize events.
It now reads raw input and samples the public TTY size, writing only changes.
Ctrl+C is handled by that declared client; this does not test every shell's
signal semantics for arbitrary programs.

Run `sQ6e26` completed the Command Prompt checks but stopped at a publisher-trust
prompt caused by inherited PowerShell 7 module paths in Windows PowerShell 5.1.
The fixture now selects the built-in module directory. No execution policy or
publisher-trust setting was weakened. Failed artifacts remain retained.

Run `d6kWsU` passed the initial matrix. The later expanded runs additionally
require debugger-child and shell-process release. The final harness publishes
recurring process records and driver phase/result files by rename so readers
cannot mistake an incomplete write for a malformed result. It also requires the
debugger's actual session-termination event.

PowerShell 7, C/C++ debugging, remote shells, persistent terminal restoration,
abrupt host death and macOS/Linux are unverified here. Remote and platform release
requirements remain in OV-703/902/903; general crash/resource guarantees remain
in OV-1003/1004. The fixed 42-story denominator is unchanged. CPU time, peak
process-family memory and agent analysis tokens were not measured; inference
requests and inference tokens are zero. The shutdown fix loads on the next full
application start; reloading an editor window does not replace the main process.
