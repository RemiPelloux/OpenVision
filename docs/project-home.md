# Project home

OpenVision opens to a project dashboard with a blinking eye, a responsive layout
and immediate access to your work. It is included in the **0.2.0-preview.3**
portable app, with relocated native verification recorded in
[the package report](portable-preview3.md).

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
| Open / Focus | Recheck live windows, focus an existing project or open a new editor |
| Open folder / Open workspace | Native selection dialogs |
| Clone repository | Native Git clone flow |
| Remove from history | Remove the recent entry and its pin; keep project files |
| Refresh | Refresh history and current-window state on demand |

A missing local path produces an actionable message. Its history entry remains
until you remove it or open its new location. Project opening uses the native
window service with explicit editor routing; it preserves other open editors.
The native URI identity service handles Windows path casing and IPC URI values.
Folder and workspace identity stay distinct from displayed labels.

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

```sh
npm run test:project-home
npm run verify:project-home
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
