# Model discovery: request ownership and native evidence

15 October 2026 · source change after preview.6; no full-story promotion.

## Problem and structural fix

The previous discovery IPC handler had a deadline, but a window reload, closure
or renderer crash did not cancel its HTTP work. A non-success response returned
without explicitly disposing its unfinished body. Invalid UTF-8 was decoded with
replacement characters and could change a provider's model ID.

[The discovery owner](../desktop/model-discovery.mjs) now owns each request's
AbortController, deadline and response reader. Each WebContents shares one set of
lifecycle listeners while requests are active. Its final request removes them.
Main-frame navigation, renderer loss and destruction cancel only that window's
requests. A destroyed sender cannot dispatch new work. Non-success bodies are
canceled without returning remote body text; successful bodies have a **4 MiB
decoded-byte limit** and strict UTF-8 decoding. Readers and deadlines are released
on every completion path.

The [IPC adapter](../desktop/model-http.mjs) retains workbench sender checks and
uses Electron `net.fetch`. Existing URL normalization and model parsing remain
the interpretation owners. This does not add another catalog cache or change
provider/model identity, capability semantics or credentials.

## Executed verification

- **34/34 focused checks**, no skips: discovery real-socket tests plus the
  existing provider and identity suites. The socket suite covers header/body
  deadlines, canceled requests, subframe navigation, reader/listener cleanup,
  decoded gzip overflow, malformed catalogs and invalid UTF-8. Its sender events
  are simulated; the native checks below independently exercise actual windows.
- **12/12 native integration checks** using the actual OpenVision executable,
  generated production IPC adapter, sandboxed renderer preload and Electron
  networking. Real reload, close and renderer-crash operations cancel the owning
  connection; another window stays connected until its own reload. Foreign-page
  IPC fails before a network request. Healthy discovery works after recovery.
- Final source build and desktop/fixture syntax checks pass. The post-build
  native repeat also passes **12/12** (`logs/discovery-host-ijWGbP/result.json`),
  with matching input hashes. Adding the acceptance-denominator regression to
  the focused run yields **35/35**, no failures or skips.
- The **same final native verifier** against the unchanged committed adapter
  reproduces invalid UTF-8 acceptance and four retained-response cases: unfinished
  HTTP 503, reload, closing window and renderer crash. Each exceeds the fixture's
  **2-second observation deadline**. Both native hosts exit zero after cleanup.

This is production-boundary integration in a minimal native host, **not a full
workbench UI, live Codex Everywhere, inference or release acceptance result**.
The HTTP server is an explicit loopback fixture with a fixture-only credential.

| Fixture observation | Previous adapter | Candidate |
| --- | --- | --- |
| Unfinished HTTP 503 body | Still open at observation deadline | Closed; 1.93 ms request lifetime |
| Reloaded window's request | Still open at observation deadline | Closed; 26.95 ms request lifetime |
| Closed window's request | Still open at observation deadline | Closed; 28.10 ms request lifetime |
| Renderer-crash request | Still open at observation deadline | Closed; 22.84 ms request lifetime |
| Twelve healthy calls plus listener check | 32.99 ms | 35.42 ms |

Lifetimes run from server-observed request start to connection close; they are
**not exact cancellation-event latency**. These single runs establish bounded
cleanup and correctness, not a throughput improvement. Baseline connections
eventually close at host shutdown; that is not prompt request cancellation.
AI tokens, CPU time, peak process-family memory, cold/warm comparisons and
long-session growth were not measured. No whole-app RAM saving is claimed.

## Reproduction and provenance

After the normal desktop build:

```sh
npm run test:model-discovery
npm run verify:model-discovery:host
npm run verify:model-discovery
```

The isolated host currently supports Windows only. It hardlinks companion runtime
files into an ignored disposable directory and loads the production adapter;
it does not alter the installed executable. The full-workbench verifier is kept
separate and must pass before claiming UI acceptance.

Ignored local artifacts: `logs/discovery-host-oFmfUt/result.json` (baseline),
`logs/discovery-host-Nenli5/result.json` (candidate). Both identify source parent
`41499a2479d0fa3ed01a40867af2caf00ef33199`; the candidate includes the uncommitted
source changes identified below. No result is inferred from commit identity alone.

| Input | SHA-256 |
| --- | --- |
| Executable, both runs | `3332045e575c2d3995a570e19ec6fae3eedfaabfec8a24c6049b4926e3371b2a` |
| Baseline adapter | `85e5396090ce069f4cf0d0bedbb7d8174065cfc5b4000952c66d1212c8449a65` |
| Candidate adapter | `bf65f96df94101b02d9f32eb5a5b21504ee1024868a7c29aad9beca290ce76aa` |
| Candidate request owner | `294afd605ec03b2e57346e5ce456e989cd3f69c3fd63f27612de16f907bd2aac` |
| Native fixture main | `879d20cddc340b1fdd1254d12105638de6c7877421009308ab19dfd80187e0b0` |
| Native verifier | `55ad7d61ce0513df7eefb55599896dd408f265571e3bf72e32985838cb3d8569` |

## Full-app startup gate

Earlier full-workbench candidate runs (`logs/model-discovery-4b49n0/result.json`
and `logs/model-discovery-WikBMz/result.json`) exited **3221225501 /
0xC000001D** before a usable window. Those runs remain historical evidence.
An existing Windows generated runtime passed startup and the native model
discovery matrix in `logs/model-discovery-8rTqru/result.json`: valid, malformed,
oversized and UTF-8 catalogs were handled, pending requests were cancelled on
reload, sibling-window ownership was preserved, and all fixture requests were
authorized. The fixture uses local HTTP sockets and no AI inference, so it does
not establish upstream model availability or quality. That run did not establish
a reproducible build of the committed patch. The subsequent
[build-integrity correction](runtime-build-integrity.md) records an invalid
fresh-patch import and damaged generated extension inputs, their recovery and
new verification. Preserve this older run as evidence for its recorded runtime.

A locally captured Windows minidump of an owned disposable app process records
the exception in **`urlmon.dll + 0x112b86`**, RIP `0x7fff2eb72b86`.
CDB unwinding shows a shell/path stack through `windows_storage`, including
`SHCreateShellItemArrayFromIDLists`. Offsets from nearest exports do not establish
exact function identities without matching symbols. The loaded module's numeric
version **11.0.26100.9711** matches the disk DLL's fixed version fields.
FileVersionInfo's display string is **11.00.26100.8875**; the apparent version
discrepancy was a comparison of different metadata fields. Both dumps and disk
also match timestamp `0x8B1366E6`, checksum `0x1E6C33` and image size `0x1DE000`.
The workstation reports Windows 10.0.26200.

A read-only MINIDUMP parser confirms that both dumps directly capture the same
32 bytes at the fault site; these are not debugger fallbacks to the disk image.
Compared with the disk bytes at the matching PE RVA, offsets 0, 8, 16 and 24 each
contain `c5` instead. Disk SHA-256:
`ed9262ab87744cf701e2cdd6a3714c3d1bdd30a1985f0d97a76c4bd35b03e239`.
The shared memory/disk differences are observed; their cause remains unknown.
They do not establish corruption, a particular interfering component or a fix.
No system DLL or runtime memory is patched. Dump, decoded metadata and CDB output remain ignored under
`logs/startup-dump-mM0mlj/` and are not uploaded.

The same executable runs the minimal native host successfully. The current
helper-process boundary prevents the observed Windows shell/notification fault
from taking down the editor, while reporting those native capabilities as
unavailable when the helper fails. This is application containment evidence; it
does not prove an OS-wide fix or identify the underlying Windows fault. Package,
settings/catalog retention and long-session gates still require their own runs.

An earlier post-build full-workbench repeat also exited 0xC000001D with zero
discovery requests (`logs/model-discovery-JZWnxQ/result.json`). A separate
read-only PowerShell `Get-AppxPackage Microsoft.WinDbg` query fails with the same
code and recorded RIP. Its CDB stack includes `SHCreateItemFromParsingName` and
`ABI.Windows.ApplicationModel.IPackage.get_InstalledLocation`. Evidence remains
under ignored `logs/windows-package-control/`. The matching fault site narrows
investigation beyond app-specific JavaScript; it does not establish a shared root
cause or permission to repair the OS. Preserve both investigations separately.

A passive method-entry probe in a disposable full-app copy reached
`browser-window-created` and returned from the synchronous `webContents.loadURL`
call before the same exit code. This does not mean its navigation Promise
resolved. No calls to the instrumented JumpList, recent-document, file-icon,
shell or clipboard-read methods were recorded before the fault. The observation
is bounded to those wrappers; it does not exclude native calls elsewhere.
Artifacts: ignored `logs/startup-shell-observation-46g4Gr/events.jsonl` and
`result.json`. The probe preserved method behavior; no startup repair is claimed.
