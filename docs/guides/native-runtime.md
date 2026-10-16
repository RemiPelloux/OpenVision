# Run OpenVision

The **Windows x64 portable package** includes the desktop executable, editable
application JavaScript, bundled extensions, native modules and runtime support.
No separate editor installation, Node.js or npm is needed to run it.

## Download and launch

1. Open the [OpenVision releases](https://github.com/RemiPelloux/OpenVision/releases).
2. Download **OpenVision-0.2.0-preview.7-win32-x64.zip** and extract it to a writable folder.
3. Double-click **OpenVision.cmd**.
4. Use **Project Home** to open a folder, resume recent work or pin a favorite project.
5. Open **OpenVision Settings → Models & integrations → API connections**, add a provider URL and your key, and discover models.

The ZIP is approximately **327 MiB**; reserve at least **2 GiB** of free space for
extraction and your profile. Keep the folder writable. This preview is not signed
with an OpenVision publisher certificate; Windows may display a publisher warning.
It is a development preview, with remaining gates recorded in the
[feature roadmap](../planning/roadmap.md).

## Run directly from the repository

The full Windows payload is also tracked under `downloads/windows-x64/` as seven
numbered parts. These are regular Git files, with no Git LFS or external runtime
download required. They keep each file below GitHub's per-file limit.

```sh
git clone --depth 1 https://github.com/RemiPelloux/OpenVision.git
cd OpenVision
```

Double-click **Run-OpenVision.cmd**. It verifies every part and the reconstructed
archive with SHA-256, extracts into **OpenVision-portable/**, and opens the app.
The next launch reuses that folder, preserving your settings and editable code.
GitHub's **Code → Download ZIP** also includes the parts; extract that repository
ZIP first, then run the same launcher. Git itself is optional for that route.

To choose another installation folder without launching:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\Install-OpenVision.ps1 -Destination "D:\Apps\OpenVision"
```

The installer uses built-in Windows PowerShell and .NET only. It refuses to
overwrite an unrelated folder or another version. An interrupted extraction
retains its separate `.install-<id>` folder for inspection; remove that exact
folder after confirming it contains no files you need, then retry.

After pulling a newer release, an existing **OpenVision-portable/** from an older
version is intentionally preserved. Install into a new destination, for example:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\Install-OpenVision.ps1 -Destination "D:\Apps\OpenVision-preview7"
```

Then follow the profile-copy instructions below before running the new app.

## Your files and editable application

| Location inside the extracted package | Contents |
| --- | --- |
| `OpenVision.cmd` | Desktop launcher |
| `electron-host/OpenVision.exe` | Windows x64 executable |
| `electron-host/resources/app/` | Materialized, editable application files; no external junction |
| `electron-host/resources/app/out/` | Application JavaScript and UI assets |
| `electron-host/resources/app/extensions/` | Bundled extensions |
| `electron-host/desktop/` | OpenVision runtime adapters and helpers |
| `electron-host/data/local/` | Your new local profile, created on first launch |
| `electron-host/data/local-extensions/` | Extensions you install |
| `electron-host/data/local/Backups/openvision-import/` | Native settings-import backups, when created |

No author profile, API keys, chats or import backups are included. API keys are
saved in local secret storage after you configure them. Project rules, plans,
skills and large pastes live in the project's `.openvision/` folder.

Close every OpenVision window before changing application files. JavaScript is
editable; native executables, addons and WASM remain compiled. An independent
rebuild of every native component is still a roadmap item. Editing application
files does not require rebuilding them through npm; restart to load your changes.
The customization source and verification scripts remain in `desktop/` in this
repository; those development scripts require the pinned Node toolchain.

## Update and rollback

Extract a new release into a **new** folder. Close the old app, back up its
`electron-host/data/` and any application changes, then copy the data into the
new package before launching. Keep the old folder until your settings, models
and projects work in the new version. Portable updates are manual; there is
no background updater. Secret-storage portability across machines is not
guaranteed: re-enter your keys on a new machine.

## Platform status and verification

| Platform | Release status |
| --- | --- |
| Windows x64 | Full portable package; relocated native autocomplete/editing and repository extraction verified |
| Windows ARM64 | No native release package yet |
| macOS Intel / Apple Silicon | Native packaging and verification remain on the roadmap |
| Linux x64 | Native local build and portable package (`npm run package:linux`); see the [Linux guide](linux.md) |
| Linux ARM64 | Needs a pinned ARM64 input; not yet verified |

Windows files do not run natively on macOS or Linux; Linux builds use the native
Linux input described in the [Linux guide](linux.md). Native tests used disposable
profiles and controlled local HTTP responses; they establish the package wiring
and named workflows, not blanket live-model compatibility. See
[portable verification](../verification/portable-preview7.md) and
[release claims](../verification/release-claims.md) for the exact evidence.
GitHub Actions remains disabled.

Third-party license files and notices are preserved in the package. See
[licensing scope](../../NOTICE.md). The final native architecture work is tracked in
the [Rust roadmap](../planning/rust/rust-roadmap.md), using points and acceptance gates.
