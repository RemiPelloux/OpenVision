# Recovering from profile, keyring, crash and update failures

18 October 2026. What OpenVision does when its saved state or one of its
processes fails, what you see, and what to do. Behaviour marked **verified**
was observed on Linux x64 in the
[release-safety report](../verification/release-safety-linux.md); other
platforms are not yet covered by that evidence.

Your profile is the folder passed as `--user-data-dir`:
`electron-host/data/local/` in a portable package, `data/local/` in a source
checkout. Below, `<profile>` means that folder.

**Before any manual repair, quit OpenVision completely** and copy the whole
`<profile>` folder somewhere safe. Never edit `state.vscdb` while the app runs.

## Corrupt or unreadable profile data

On startup OpenVision checks its profile without changing it. When something
was unreadable, a notice titled **"OpenVision recovered from unreadable profile
data"** lists each problem, what OpenVision did, and where the original bytes
are. **Dismiss** hides those findings until something changes.

| What broke | What OpenVision does | What you do |
| --- | --- | --- |
| `<profile>/User/globalStorage/state.vscdb` (providers, API keys, chats, rules, reviews) | Renames the unreadable file to `state.vscdb.corrupted.<time>`, starts with `state.vscdb.backup` if one exists, otherwise with empty storage. The original bytes are kept. | Re-add providers and keys, or restore a copy you trust (see below). Keep the `.corrupted.` file until you no longer need it. |
| `<profile>/User/workspaceStorage/<id>/state.vscdb` (per-project layout, project rules) | Same rename and fresh start for that project only. | Usually nothing; per-project view state is rebuilt. |
| `<profile>/User/settings.json` | Leaves the file untouched; settings in it are ignored until it parses. | Run **Preferences: Open User Settings (JSON)** and fix the reported line. |
| `<profile>/User/.openvision-local/argv.json` | Leaves the file untouched; runtime arguments fall back to defaults. | Run **Preferences: Configure Runtime Arguments** and fix it. |
| `<profile>/User/mcp.json`, `<project>/.openvision/mcp.json` | Leaves the file untouched; servers in it do not start. | Fix the JSON in the file; servers are listed under **Settings > Customize > MCPs**. |
| Saved provider configuration (`openvision.model-providers.v1`) | Settings stay usable; account connections keep working. **Settings > Models** explains the error and offers **Back up and reset providers**. The stored value is never changed until you choose that. | Choose **Back up and reset providers**: the exact stored text is first saved as `openvision.model-providers.v1.unreadable.<time>` and acknowledged by SQLite, then the configuration is cleared. Add providers again and re-enter their keys. |
| One saved profile rule | Every readable rule still loads and reaches the Agent; the unreadable record is kept unchanged and listed in the notice. New or changed rules cannot be saved while it exists, so nothing can hide it. | Restore a profile copy, or remove the listed record with a SQLite tool while OpenVision is closed: `DELETE FROM ItemTable WHERE key = '<listed key>'` in `User/globalStorage/state.vscdb` (work on a copy first). |
| A saved Agent review | The conversation still opens and shows the change, but that review has no Keep/Undo controls; the notice lists it. The record and the project file are not changed. | Check the edited file with your version control and revert by hand if needed, or restore a profile copy. |

### Restoring a known-good copy

1. Quit OpenVision.
2. Move the current `<profile>` aside (do not delete it).
3. Copy your saved profile into place and start OpenVision.

A copy made on another machine cannot decrypt its API keys (see below). To
recover a single row from a `.corrupted.` file, open a **copy** of it with a
SQLite tool; a file that is truly corrupt may not open at all.

## API keys after keyring loss

Provider keys are encrypted with the operating system keyring
(Linux Secret Service, macOS Keychain, Windows DPAPI). They cannot be read when:

- the keyring was reset, its password changed, or a different keyring daemon
  is running;
- the profile was copied to another machine or user account;
- the Linux session has no Secret Service and the key was saved with one.

Symptoms: providers are listed, but requests fail with an authentication error,
or the key field is empty. Fix: start your keyring (Linux:
`gnome-keyring-daemon --start --components=secrets`, then restart OpenVision);
if the keyring itself was reset, open **Settings > Models**, edit each provider
and enter its key again. Keys are never written to logs or plaintext profile
files, so there is no other copy to recover. See
[API keys and the keyring](linux.md#api-keys-and-the-keyring).

## Crashes

| What crashed | What you see | Recovery | Unsaved work |
| --- | --- | --- | --- |
| A window (renderer) | Dialog "The window terminated unexpectedly" | Choose **Reopen** | Unsaved editors and the chat are restored |
| Extension hosts (Agent, language features) | Usually nothing; after repeated crashes "Extension host terminated unexpectedly 3 times within the last 5 minutes." | Restart automatically; otherwise click **Restart Extension Host** | Editors are unaffected; a running Agent turn ends, its provider request is closed, and the next prompt works |
| Terminal backend (pty host) | Terminals disconnect | Restarts automatically; open a new terminal | Commands running in old terminals end |
| Shared background process | Prompt "A shared background process terminated unexpectedly. Please restart the application to recover." | Choose the prompt's restart action, or quit and start OpenVision | Restored after restart |
| File watcher | Explorer stops refreshing briefly | Restarts automatically | Not affected |
| The whole app (killed or power cut) | — | Start OpenVision again | Unsaved editors are restored from hot-exit backups when `files.hotExit` is on (default); an Agent edit that was being written is either fully applied with a review or not applied ([interruption evidence](../recovery/rea-agent-interruption.md)) |

The verified Linux results per cell, including which recoveries are automatic,
are in the [release-safety report](../verification/release-safety-linux.md).
Power loss, kernel crashes and device I/O errors are **not** covered by any
OpenVision evidence.

## Workspace tasks and Agent approvals

OpenVision does not run a project's `.vscode/tasks.json` tasks marked
`"runOn": "folderOpen"` when you open the folder: `task.allowAutomaticTasks`
defaults to `off` because Workspace Trust is off in this runtime. Set it to `on`
only for projects you trust. Agent shell commands, MCP tools and writes outside
the project wait for approval in the default **Allowlist** run mode with an
empty allowlist (the `+ cd`-style chips are suggestions until you add them);
**Run Everything** asks for confirmation before it removes those prompts.

## Rolling back an update

Portable updates are manual, so the previous version stays usable:

1. Before updating, quit OpenVision and copy `electron-host/data/`.
2. Extract the new release into a **new** folder and copy the data into it.
3. To roll back, quit the new version and start the old folder again **with the
   data copy you made before updating**. A newer version may have changed the
   profile in ways the older one does not read; do not point the old version at
   the newer version's data.

See [installation and updates](native-runtime.md#update-and-rollback). Full
upgrade/rollback acceptance is still open in the
[release claims](../verification/release-claims.md).

## Reporting a problem

Before sharing logs or a profile, run `npm run check:secrets -- <folder>` from
a source checkout: it fails if the folder contains API keys, Authorization
headers, tokens or private keys (see
[release matrix](../verification/release-matrix.md#secret-scan)). Never attach
`state.vscdb` files: they hold your chats and encrypted keys.

[User guide](user-guide.md) · [Linux guide](linux.md) · [Documentation index](../README.md)
