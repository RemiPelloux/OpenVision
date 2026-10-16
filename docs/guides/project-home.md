# Project home

OpenVision opens to a project dashboard with a blinking eye, a responsive layout
and immediate access to your work. It is included in the **0.2.0-preview.6**
portable app, with relocated native verification recorded in
[the package report](../verification/portable-preview6.md). Home and cloning follow your
[selected theme and custom colors](appearance.md).

The preview.6 portable app and development checkout reuse the current window
when opening a project. Projects already open elsewhere focus their existing
window. Native unsaved-file prompts protect edits before a switch.

## Start and resume

Double-click `OpenVision.cmd` in the portable package, or run
`start-openvision.cmd` / `npm start` in a prepared development checkout.
The launcher opens project home instead of creating/opening the demonstration
project. Pass a project explicitly with `npm start -- "D:\Projects\My app"`.
Inside the editor, the **Projects** titlebar button reopens the dashboard.
An empty editor also shows home on startup, except when opened through the
home window's **Enter workspace** action.

| Action | Behavior |
| --- | --- |
| Recent | Existing native folder/workspace history in its saved order |
| Pinned | Favorites saved in your local profile, independently per project |
| Open now | Projects with a currently open editor window |
| Search | Match project names or paths; Enter opens the first visible result |
| Open / Focus | Recheck live windows, focus an already-open project or load it in the current window |
| Open folder / Open workspace | Native selection dialogs; open in the current window |
| Clone repository | Paste a URL, choose a destination, clone and open in the current window |
| Remove from history | Remove the recent entry and its pin; keep project files |
| Refresh | Refresh history and current-window state on demand |
| Color theme | Choose a theme through the native theme picker |

A missing local path produces an actionable message. Its history entry remains
until you remove it or open its new location. Project opening uses the native
window service with explicit editor routing and current-window reuse. Native
unsaved-file handling can cancel a switch; other windows are left open.
The native URI identity service handles Windows path casing and IPC URI values.
Folder and workspace identity stay distinct from displayed labels.

## Clone a repository

Choose **Clone repository**, paste an HTTPS or SSH Git URL, then select
**Choose location & clone**. Pick a parent folder in the native destination
picker. Git shows progress and opens the completed checkout in the current window.
Absolute local paths and `file://` URLs also work. Git manages credentials for
private repositories through its configured authentication tools.

The form validates input, focuses the URL field, supports keyboard submission
and restores focus after Escape. Canceling destination selection creates no
checkout. An existing checkout is preserved; Git chooses an available folder
name. A failed clone opens no project and leaves another attempt available.

This fixes the previous generic source-selection screen, which offered
“Provide repository URL” without a usable direct URL field in Project Home.
The new form passes the URL directly to native Git and explicitly opens only
the successful returned checkout.

## Resource behavior

- One bulk history read and one bulk window read when home loads. No per-project
  `stat`, Git scan, recursive directory scan or AI request for the dashboard.
- At most **18 project rows** mounted per page. Only the current page is replaced
  while searching. Search text is prepared once when history is loaded.
- Overlapping refresh events share the pending read and coalesce into one
  follow-up refresh. No polling timer is added.
- Dismissal drops rows and removes history/focus listeners. Late results cannot
  repopulate a disposed home. The eye respects reduced-motion preferences.
- Local home no longer automatically installs the remote-development extensions.
  Explicit extension management remains available.

The underlying desktop shell still starts substantial native/workbench services.
This change does not establish a whole-app RAM reduction or a performance lead
over another editor. Further startup/extension-host work needs separate measurement.

## Verification

14 October 2026 window-reuse follow-up: Home no longer sends forced-new-window
flags. The native routing owner maps an explicit reuse request from the startup
screen to the editor, and the native picker boundary forwards that request.
Unload vetoes remain owned by the native lifecycle; no close-and-reopen workaround
or separate window-selection cache was added.

Development runs `project-home-verification-RwzP6h` and
`project-home-verification-cY6lQ7` kept native window ID 1 and created zero new
windows for startup project selection, editor workspace switching and both native
pickers. The latter also edited a real file, canceled the save prompt during a
switch, verified unchanged disk contents and retained unsaved editor text, then
saved that text successfully. Three launchers exited 0 with no renderer errors.
Run `project-clone-verification-qIYDjL` verified the same window ID and zero window
creation for real local Git clones from Home and the editor, including existing
destination protection and failure/retry. Its launcher exited 0 without renderer
errors. Native dialog selections and save-prompt cancellation are harness supplied.

The main-process digest is
`446524fc4161df2ccd821a0826f74a6ad233f0871c873007fb41ccac2b7abbf9`;
Home service digest is
`ea11e1048617e88945f22fae33bb8fa0e4e15b063208a4bfd681eb596746d2a9`.
Ten focused tests, the full development build and desktop/generated JavaScript
syntax checks passed. Earlier run `aKpl4t` failed only because the verifier compared
editor nonbreaking spaces literally; its disposable unsaved window needed forced
cleanup. That run is retained as a failure, and the verifier now normalizes rendered
spaces and discards only disposable fixture edits during cleanup. The final run
above exited normally. macOS/Linux and remote project switching remain unverified.
No RAM reduction or full acceptance-story promotion is claimed.

```sh
npm run test:project-home
npm run verify:project-home
npm run verify:project-clone -- --remote https://github.com/octocat/Hello-World.git
npm run verify:welcome
npm run check:desktop
```

Native Windows run `logs/project-home-verification-S3Giau/result.json` passed
existing-window focus, a 250-entry history with paging, search/missing-path
handling, removal without file deletion, pins after restart, real folder and
saved-workspace opening, responsive layout, reduced motion and DOM disposal.
Native picker dispatch/cancellation also passed using a controlled Electron
dialog return. The clone command's real repository-source prompt opened and
canceled; no remote repository was cloned in this check.
All three owned hosts exited 0; no uncaught renderer errors were observed.
The history scale fixture is seeded in a disposable profile. Native project
opening itself is real. No AI inference is involved.

The later clone-specific Windows run
`logs/project-clone-verification-tLhuMj/result.json` exercised real local cloning
from both the start window and editor Project Home, exact file/HEAD/origin
checks, duplicate destination protection, failure followed by a successful retry,
destination cancellation, validation, Escape/focus restoration and a 390-pixel
layout. It also cloned `https://github.com/octocat/Hello-World.git` over HTTPS
and matched remote HEAD `7fd1a60b01f91b314f59955a4e4d4e80d8edf11d`.
The final relocated portable run `logs/project-clone-verification-yjIqWO/result.json`
passed the same matrix and explicitly verified and dismissed the native Git error
dialog before retry. Only native folder selection and error-dialog dismissal were
supplied by the harness; Git operations and editor opening were real. The host
exited 0 without renderer errors. Earlier portable runs `ouFZEq` and `9MWcFZ`
timed out because the test left that native error dialog open, blocking the next
destination picker. Their failed records are retained; the verifier now follows
the full failure/dismiss/retry interaction.
Private authentication, SSH transport and interruption during a large transfer
remain unverified. These checks do not establish every Git workflow.

The existing welcome check also passed entry/dismissal, native branding/window
controls, blink and reduced motion at `logs/welcome-verification-9PbXzU/result.json`.
Nine focused regression tests and desktop syntax checks passed. Repeated builds
passed generated desktop/Glass syntax checks. Desktop bundle SHA-256:
`a7060c6957720cc7152e019357323d0f39e40c649bb542e495bf61d352cef80e`.

The measurements below are from the earlier passing core-flow run
`logs/project-home-verification-ehusGx/result.json`. The final expanded run above
ran alongside welcome verification; its launch observation was 6,201 ms, so it
is not treated as an isolated performance comparison.

| Measurement | Scope and observation |
| --- | --- |
| Launch to project rows | 4,876 ms, new process with warmed OS caches and seeded profile; not a cold-install benchmark |
| Native search | 28 ms automation round trip for a 250-entry history |
| Synthetic 10,000-entry search | About 1 ms in headless Edge; 18 initial rows, one matching row, no additional load request |
| Desktop resource sample | Nine Electron-reported processes; summed working sets about 1,797 MiB and cumulative CPU 15.34 seconds after the fixture interactions |
| Memory limits | The sample can double-count shared pages; summed per-process peaks are not simultaneous process-family peak memory. External descendants and cold/warm comparisons remain unmeasured |
| Tokens | No model request from project home. Agent engineering token usage was not measured |

These are single-run observations, not comparative benchmarks. The stress test
also verifies in-flight refresh coalescing and disposal before an outstanding
response resolves. Native macOS/Linux and remote-workspace execution remain
unverified. No accepted feature story is promoted solely by this dashboard.

Preview.5 uses a compact native-theme layout and a Color theme action.
Windows restart/custom colors/installed theme evidence is recorded in
[preview.5 verification](../verification/portable-preview5.md). Earlier benchmark figures above
are unchanged historical observations, not measurements of this redesign.
