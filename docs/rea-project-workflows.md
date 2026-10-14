# Native local project workflow evidence

`desktop/verify-project.mjs` exercises the assembled OpenVision desktop through its real workbench UI. It creates a disposable two-folder workspace, fresh user-data directory and empty extension directory under ignored `logs/project-verification-*`. It never attaches to an existing user window or writes to an existing project.

Run after assembling the desktop:

```sh
node desktop/verify-project.mjs
```

The verifier starts the host selected by `loadRuntime`, drives the native editor, search and task picker, checks saved bytes and task output, and closes only the Electron application it launched. It does not install dependencies or contact an AI provider. The process-task fixture runs the same Node executable used to start the verifier.

## Observed on Windows

Successful run: `logs/project-verification-gUNJuh/result.json`, 2026-10-13, Node 24.18.0, Windows. Screenshots are retained alongside the result as `multi-root-search.png` and `native-task.png`.

| Workflow | Evidence |
| --- | --- |
| Open a two-root workspace | One `.code-workspace` file selected two independently created folders. |
| Edit and save Unicode text | Real editor input saved `OpenVision saved change — café 日本語` with exact expected UTF-8 file contents. |
| Undo and redo | Six native undo stops returned to the original file; replaying six redo stops restored the exact edited file. Each endpoint was saved and checked on disk. |
| Search across both roots | Native workspace search returned `UniqueSearchPrimary` and `UniqueSearchSecondary` from different roots; screenshot records two results in two files. |
| Execute a configured process task | The native task picker ran a Node task from `.vscode/tasks.json`. Its result recorded the selected folder as current directory and the explicitly configured `OPENVISION_TASK_FIXTURE` value. |
| Display task output | The native terminal screenshot shows `OpenVision task café 日本語`. The result file independently checks the message, environment value and working directory. |
| Workbench errors | No renderer `pageerror` events occurred during the successful workflow. This does not prove absence of every logged or native-process error. |

This is executable runtime evidence for existing recovered functionality. It is not evidence that native binaries were independently rebuilt or that all original features are available.

## Harness corrections and retained failures

Initial verification attempts assumed a whole Unicode `insertText` operation would produce one undo stop. The native editor grouped the composed input into multiple stops. The verifier now unwinds and replays the actual bounded sequence and verifies exact endpoint bytes. A failed command-palette attempt also exposed a harness race: typing a command and immediately pressing Enter could select a stale command result. The verifier now clicks the exact command entry. Neither failure establishes a product defect.

The first successful run retained all five assertions: edit/save, undo, redo, multi-root search and native process task. Earlier failures and their screenshots remain in ignored logs rather than being rewritten as success.

## Acceptance still outstanding

OV-401 remains **Partial**. The later [native lifecycle check](project-lifecycle-verification.md)
covers rename/move/delete, directory junctions, actual permission-denied saves,
external conflicts and graceful unsaved restart. File-symlink cases, large-project
watcher behavior and incremental filesystem work remain open.

OV-402 remains **Partial**: this verifies text editing and undo/redo, but does not establish a language/extension matrix, diagnostics, rename, references, navigation, formatting, conflicts or large-file performance.

OV-403 remains **Partial**. The later [native development matrix](development-workflows.md)
passes Command Prompt/PowerShell resize, Unicode, environment, cancellation,
restart, task problem matching and Node debugger break/step/Stop. It checks actual
child release and fixes final state persistence. An intermittent host exit 134
remains unexplained; a successful later run does not close that failure gate.

This initial fixture does not exercise Git or worktree behavior. The later
[native Git matrix](git-workflows.md) verifies OV-404 separately, including
conflicts, owned worktree cleanup and recovery after abnormal host exit.

macOS and Linux branches in the launcher are unverified here. No percentage increase is justified by counting these individual assertions as independent completed stories.
