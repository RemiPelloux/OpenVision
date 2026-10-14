# Native project lifecycle verification

14 October 2026, Windows x64, Node 24.18.0. The real OpenVision Explorer/editor
passed rename, cross-root move, confirmed delete, external change handling,
directory-junction editing, actual filesystem write denial and unsaved-session
restoration. This establishes more of the existing recovered product's behavior;
no replacement filesystem or mocked editor was used.

Run from a prepared checkout:

```sh
npm run verify:project:lifecycle
```

The verifier creates a disposable two-root workspace and profile. It drives
native editor/Explorer commands, compares exact disk bytes and closes only its
owned Electron host. It uses no AI provider. The test configures built-in dialogs
so deletion and failure feedback are observable through the workbench.

## Passing evidence

`logs/project-lifecycle-verification-vgZpGy/result.json` passed all 11 checks.
Both owned host processes exited 0 and no renderer page errors were recorded.
The workbench SHA-256 was
`2112b9f58f07c174d282a9ec2885df1b26a9bcfd56c8473904b8c203ae3f7b30`.

| Workflow | Observed assertion |
| --- | --- |
| Rename | Original path disappeared; renamed file retained exact Unicode bytes |
| Cross-root move | Native cut/paste moved the renamed file into the other workspace root; source disappeared and content matched |
| Delete | Native confirmation removed only the selected file; unrelated target remained intact |
| External clean edit | File written outside the editor reloaded into the clean editor |
| External dirty conflict | Save showed a newer-content error, preserved the external disk bytes and retained unsaved local editor content |
| Explicit resolution | Clicking Overwrite saved exactly the reviewed local content |
| Directory junction | Opening and editing through a real Windows junction updated the intended target file |
| Denied write | An actual Windows deny ACL rejected an independent write probe and native Save; original disk bytes and dirty editor contents remained intact |
| ACL restoration | Original security descriptor was backed up outside the locked folder, restored in `finally`, and compared exactly |
| Retry | Native Save succeeded with the same editor contents after permissions were restored |
| Unsaved restart | Normal host shutdown left disk unchanged; restart restored the dirty editor; subsequent Save persisted its exact content |

The ACL helper accepts only an ordinary descendant directory of the disposable
fixture root and never changes execution policy. It loads Windows PowerShell's
own security module explicitly because inherited PowerShell 7 module paths can
otherwise select an incompatible module. Original ACLs and synthetic logs remain
local, ignored by Git. No user folder or profile permissions are changed.

## Failed attempts retained

`LHpmeQ` reached rename/move but waited for a custom dialog while the fixture used
native OS dialogs. `Sl5rdP` reached the save conflict but read a hidden editor
model; its screenshot showed the dirty content correctly preserved. The verifier
now selects the visible editor. `Ap4AqA` observed a window close during an editor
read; the cause is unknown, and that run is not counted as passing.

`ZXzVYk` passed file operations/conflicts/junctions but failed to load the ACL
module before applying a denial. Explicitly selecting the child PowerShell's
module corrected that harness issue. The final run above includes the real
denial and restoration. Earlier passing run `8bM44Y` covered eight checks before
permission testing was added. Original failed artifacts remain available.

## Remaining requirements

The companion [project scale verifier](project-scale-verification.md) passed
eight assertions across 100-file and 10,000-file projects in final run
`logs/project-scale-verification-QhYlDX/result.json`. Each case delivered exactly
five create, five change and five delete notifications, none for unrelated files,
and no recursive project watcher restart during the edits. Both hosts exited 0.
Native watcher traces and CPU/memory snapshots are retained with that evidence.
Actual Windows file-symlink creation returned `EPERM`, so file-symlink behavior
remains unverified; the test did not substitute a directory junction.

OV-401 remains Partial. The lifecycle fixture is small, and the larger watcher
fixture does not measure OS directory traversal/read counts or establish bounded
filesystem work across all project operations. A graceful hot exit
does not establish crash/power-loss recovery. Write denial is not full-disk or
physical I/O failure. macOS/Linux remain untested. No universal speed/RAM
improvement or independent native rebuild is claimed.
