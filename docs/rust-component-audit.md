# Rust component audit

**15 October 2026 · source audit, not a runtime trace or a completed rewrite.**
Reference: `7ed66741f7c1713fb0be77afcba71d20c75dc0ee`. Decisions below are proposed
architecture; linked code establishes the current boundary. Historical evidence
keeps its original date and scope. See the [roadmap](rust-roadmap.md) for points
and the [performance plan](rust-performance-plan.md) for how gains will be judged.

## Current architecture and limits

The [desktop builder](../desktop/build-source.mjs) assembles a recovered Electron
application and applies durable OpenVision customizations. The
[source assembler](../desktop/source-assembly.mjs) copies verified inputs into
the generated app and retains the compiled host/addons/WASM. The editable
`desktop/` modules are the durable customization layer; generated `source/app`
is not an independent original-source build.

The [recovery report](recovery-status.md) distinguishes formatted JavaScript,
pseudocode, metadata and missing original sources. Formatting a bundle does not
recover its original TypeScript, build system or server implementation. A Rust
replacement should implement documented behavior contracts rather than translate
all recovered text. File counts and decompilation counts cannot give a meaningful
percentage of Rust work or feature completeness.

There are two separate orchestration surfaces: the native editor's Agent/MCP
integration and the optional Node [control plane](../src/server.mjs). Rewriting
the latter alone would leave the editor, its Agent and its memory costs in place.
REA itself is an external investigation tool, not part of the OpenVision rewrite.

## Decision vocabulary

- **Rewrite:** OpenVision-owned logic moves into Rust, retaining its behavior.
- **Rebuild UI:** recreate the user experience in the chosen desktop toolkit;
  reuse assets, themes and contracts where applicable.
- **Retain/bridge:** keep a proven external implementation and replace only its
  OpenVision adapter or supervisor. It may still use JavaScript, C or C++.
- **Investigate/replace:** runtime role, provenance or required behavior is not
  established enough to select a replacement yet.
- **Retire/exclude:** remove superseded plumbing after cutover, or keep an
  explicitly excluded hosted feature out of the local product.

## App services: rewrite the owner, preserve the contract

Gains in these tables are expectations, not measured Rust improvements.

| Component and current evidence | Decision / package | Expected benefit and required proof |
| --- | --- | --- |
| Project history/open/clone: [project service](../desktop/project-home-service.js), [window integration](../desktop/project-window-customization.mjs) | Rewrite service; rebuild UI · 03/04/08 | Share workspace facts, page recents/tree nodes, avoid eager scans. Same-window project switching and clone errors must remain correct |
| File watching, Explorer and global search: recovered workbench; [scale verification](project-scale-verification.md) | Rewrite orchestration; retain OS watcher APIs and ripgrep · 03 | Incremental updates and bounded queues reduce duplicate filesystem work. Verify ignores, links, case, overflow, multiple roots and external edits |
| Chunking, indexing and retrieval: [native inventory](native-recovery-inventory.md), [feature gap audit](feature-gap-audit.md) | Investigate existing contracts; implement owned Rust service · 03 | Highest plausible CPU/index-memory gain; quality depends on ranking/chunking. Trace actual callers, establish corpus/query goldens, rebuild indexes after drift |
| Provider URLs, catalogs and identity: [providers](../desktop/model-providers.js), [routing](../desktop/provider-routing.mjs), [discovery HTTP](../desktop/model-http.mjs) | Rewrite · 05 | One bounded network/catalog owner, shared discovery, lifecycle cancellation. Preserve custom endpoint/key, display name versus model ID and per-provider failures |
| Model reasoning capabilities: [reasoning module](../desktop/model-reasoning.js), [account models](../desktop/model-accounts.js) | Rewrite logic; rebuild picker · 05/08 | Typed capabilities remove duplicate interpretation. Preserve provider-specific levels, explicit unknowns and unsupported combinations |
| Agent relay and tools: [customization](../desktop/agent-customization.mjs), [runtime](../desktop/agent-runtime.cjs) | Rewrite complete execution owner, not just relay helper · 05 | Bounded streaming, structured jobs and cancellation. Recovered scheduler/context/tool behavior needs contracts before replacement |
| Agent context/Git reads: [context work](../desktop/context-work.cjs) | Rewrite · 03/05 | Share reads and bound concurrency; existing code already deduplicates some work. Verify provenance, freshness, prompt quality and token totals |
| Autocomplete: [IPC owner](../desktop/completion-ipc.mjs), [preparation](../desktop/completion-preparation.mjs), [HTTP](../desktop/completion-http.mjs) | Rewrite service; rebuild editor adapter · 05/08 | Incremental context and fewer copies. Keep current debounce-before-read optimization, document generations, cancellation, acceptance and undo |
| Quick Edit: [context](../desktop/inline-edit-context.js), [provider](../desktop/inline-edit-provider.js) | Rewrite service; rebuild review UI · 05/08 | Selection-scoped work and versioned edits. Do not reapply a stale patch or rescan the entire project after each edit |
| Profile/settings/import: [import transaction](../desktop/import-transaction.mjs), [profile store](../desktop/account-profile-store.mjs) | Rewrite storage owner · 04 | Atomic transactions, single writer, explicit schema upgrades. Back up originals; exercise concurrent windows, disk-full and interrupted migration |
| Rules, memories, plans and paste: [durable rules](../desktop/rules-durable.js), [memory](../desktop/workspace-memory.js), [project guide](project-configuration.md) | Rewrite · 04/05 | Incremental loading and bounded attachments. Preserve `.openvision`, approve-before-save memories, reviewed legacy imports and original records |
| Conversation/checkpoint/reasoning history: [session bridge](../desktop/account-chat-session.cjs), [metadata ownership](local-conversation-metadata.md) | Rewrite durable owner · 04/05 | Page long histories and release inactive resident state. Keep tool IDs, branch/retry replay, local titles and exact edit checkpoints |
| Child processes/commands: [shell owner](../desktop/owned-shell-process.cjs), [utility contract](../desktop/utility-process-contract.mjs) | Rewrite · 06 | Explicit lifetime and bounded buffers. Rust ownership alone does not kill children; verify OS process identity, pipe drains and retryable failed cleanup |
| MCP lifecycle: [attempt owner](../desktop/mcp-attempt-runtime.mjs), [cancel owner](../desktop/mcp-cancel-runtime.mjs) | Rewrite adapter/supervision; retain protocol/servers · 06 | Lazy shared connections and cancellation through to I/O. Preserve session identity, chosen transport, permission checks and ownership across windows |
| Optional HTTP control plane: [server](../src/server.mjs), [MCP](../src/mcp.mjs), [REA adapter](../src/rea.mjs) | Rewrite if retained in supported scope; bridge REA CLI/MCP · 06 | Bound subprocess output/cache bytes and cancel transport on timeout. Keep this distinct from native editor Agent; pin loopback access/auth contracts |

The control plane's REA adapter has an entry-count cache bound but no
total-byte bound and accumulates subprocess stdout/stderr. At the pinned audit
revision, its MCP timeout could finish the pending result without aborting HTTP.
The subsequent [HTTP ownership fix](control-plane-http-resources.md) now cancels
timed-out/disconnected work and bounds decoded response bytes; real loopback
socket tests verify it. Other control-plane lifecycle gates remain open. The
subsequent [discovery ownership fix](model-discovery-resources.md) adds
renderer-lifetime cancellation, non-OK-body disposal and strict UTF-8 validation.
The original fault is reproduced and the candidate verified in a minimal native
Electron host; the full-workbench startup gate remains blocked. These fixes do
not require Rust. Rust can reproduce the original faults if the same ownership
design is ported unchanged.

## Desktop UI and editor: the largest compatibility investment

| Component and current evidence | Decision / package | Expected benefit and required proof |
| --- | --- | --- |
| Electron main/renderer and window services: [assembly](../desktop/source-assembly.mjs), [startup](local-startup.md) | Temporary bridge, then replace shell · 07/08 | Removing the bundled Chromium host is the largest structural memory opportunity. Compare whole-process costs; system webviews can still be heavy |
| Text editor, layout, undo, diff and save: recovered workbench; [acceptance ledger](completion-sprints.md) | Native editor prototype, then production rewrite · 07/08 | Incremental text storage/layout and viewport rendering. Huge complexity: IME, Unicode, multi-cursor, large files, accessibility, conflict/undo correctness |
| Agent transcript, model/account picker and settings: [settings](../desktop/model-settings.js), [picker](../desktop/model-picker.mjs) | Rebuild UI · 08 | Virtualized visible rows and batched streams. Existing optimizations must be preserved; Rust does not compensate for rendering every message |
| Welcome, project home and onboarding: [welcome](../desktop/welcome-screen.js), [onboarding](../desktop/onboarding.js) | Rebuild UI · 08 | Fast demand-loaded project startup; preserve simple appearance, same-window use, keyboard navigation, setup replay and error feedback |
| Themes, icons, motion and preferences: [appearance guide](appearance.md), [native assets](../desktop/native-assets.mjs) | Retain assets/settings intent; rebuild toolkit bindings · 08 | Consistent contrast, spacing, focus, reduced motion and high DPI. No inherent performance gain from changing language |
| Terminal rendering, debugger views, tasks and language UI: [development evidence](development-workflows.md) | Rebuild UI; retain engines/protocols · 06/08 | Fewer unnecessary UI copies if proven. Verify terminal escape/scrollback behavior, resize, breakpoints, task exit and diagnostics |
| Extension host/API/webviews: [extension integrity](../desktop/extension-integrity.mjs), [build](../desktop/build-source.mjs) | Retain isolated JS host initially; implement declared compatibility · 07/08 | Keeps useful extensions; retains Node/webview memory. A native shell does not automatically implement the editor extension API |

RUST-07 must publish a candidate comparison before choosing a framework. A Rust
backend with a Tauri/system-webview frontend still includes web UI/runtime costs.
Keeping Monaco in a webview is a valid transition option but does not deliver a
native Rust editor. Replacing every language, debugger or extension with new Rust
code would expand scope dramatically without a demonstrated user benefit.

Required extension compatibility needs an inventory of actual API calls, commands,
workspace/editor events, filesystem access, terminal/debug hooks and webviews.
Test representative user-installed extensions, not only a toy extension. Mark
unsupported APIs explicitly and measure memory with the required host enabled.

## Accounts and integrations: retain supported external clients

| Component and evidence | Decision / package | Compatibility and cost |
| --- | --- | --- |
| Official Codex/Claude execution: [client adapters](../desktop/account-chat-clients.cjs), [Claude adapter](../desktop/account-claude-client.cjs) | Retain clients; rewrite supervisor/protocol adapter · 05/06 | Keep supported authentication and tool routing. Client inference, subprocess RAM and quota remain external costs |
| Login, callback and account selection: [auth](../desktop/account-auth.cjs), [auth process](../desktop/account-auth-process.cjs), [integration guide](account-integrations.md) | Rewrite orchestration; retain official auth flow · 04/05/08 | Preserve direct browser open, timeout/cancel, callback ownership and isolated account switching while editor stays open |
| Secret storage/deletion: [profile cleanup](../desktop/account-profile-cleanup.mjs), [privacy scope](account-integration-privacy.md) | Rewrite OS adapters and cleanup ownership · 04 | Delete selected credentials/cache, retain conversation history; no cross-account reads. Provider-side revocation is a separate operation |
| Account usage/limits: [usage protocol](../desktop/account-usage-protocol.cjs), [status bar](../desktop/account-usage-statusbar.cjs) | Rewrite adapter; rebuild UI · 05/08 | Respect unavailable/stale data, avoid frequent polling and expose real provider scope. Never fabricate remaining quota |
| OpenVision telemetry controls and third-party traffic: [privacy audit](account-integration-privacy.md) | Preserve policy; reverify every retained client · 05/09 | No built-in product telemetry. Supported client switches do not prove zero third-party diagnostics; authenticated network verification remains required |

No credential extraction, invented OAuth endpoint or private token bypass is part
of the rewrite. Live account acceptance requires an eligible signed-in account and
available quota. Fixture success establishes local integration behavior, not real
provider eligibility or inference performance.

## Engines and compiled dependencies: keep what already works

The [native inventory](native-recovery-inventory.md) lists 52 Windows PE paths;
it does not establish that every file is loaded or unique. The
[WASM inventory](rea-wasm-inventory.md) identifies 15 distinct payloads, with
14 complete inspection records. Neither inventory establishes rebuildable source
or a reason to translate each payload to Rust. These are family-level dispositions;
RUST-01/03/07 must bind actual callers and resource use before per-binary decisions.

| Family | Recommended disposition | Why / release gate |
| --- | --- | --- |
| Git executable and ripgrep | Retain pinned tools; Rust wrappers | Mature native implementations; ripgrep is already Rust. Gain comes from fewer calls/shared reads, not rewriting it |
| SQLite | Retain engine through a maintained Rust binding | Transaction and compatibility value; design schema, WAL/checkpoints, paging and ownership separately |
| Tree-sitter and language grammars | Retain/pin source-based parser engines where suitable; Rust adapters | Incremental parsing already exists. Own chunking and language selection; benchmark grammars/large-file limits |
| Language servers, clangd, TypeScript service and debug adapters | Retain supervised external tools | Rewriting compilers/servers is a different product. Preserve LSP/DAP semantics and include their RAM/CPU |
| Shells and OS PTY facilities | Retain OS implementation; replace Node adapter | Windows ConPTY/POSIX PTY behavior must survive. Do not rewrite a terminal driver |
| Keychain/Secret Service/Windows credential protection, registry, certificates, keyboard hooks and process enumeration | Rust adapters to OS APIs or maintained crates | Verify permissions, encoding and OS fallback behavior; do not port opaque addons blindly |
| Proprietary retrieval/chunk/language-detection helpers | Investigate callers; replace required behavior with owned contracts | Unknown source/provenance and quality parity are blockers. A renamed binary is not an owned implementation |
| Regex, parser, image, build and debug WASM payloads | Reuse source-based engines or retire with their callers | Decode evidence is not original source. Preserve regex semantics, language behavior and asset decoding only where actually needed |
| Chromium/graphics/media libraries | Retire bundled host when native shell replaces its consumers | Let toolkit/OS dependencies supply needed rendering; optional webviews can retain equivalent costs |
| Existing tunnel/updater/helpers | Investigate use; replace only supported update/remote contracts | Native metadata alone cannot determine necessity. Remote features stay an explicit scope decision |
| Branding, docs, test corpora and public protocol fixtures | Retain/adapt | Useful assets and behavior evidence do not need language translation; new native harness must exercise the real Rust boundary |

Candidate libraries, subject to the same gates, include Tokio for bounded async
I/O, Serde for parsed contracts, reqwest/rustls for provider HTTP, rusqlite for
SQLite, Tree-sitter for parsing, a rope-based document model and maintained PTY/OS
secret adapters. These are evaluation candidates, not chosen dependencies. Pin
versions and source provenance; verify proxy/TLS behavior, keyring access,
cancellation and OS support before adoption. Use local opt-in diagnostics with
secret redaction; adding a Rust logging crate must not add a telemetry endpoint.

## Retirements, exclusions and unresolved gates

After owned replacements pass parity and rollback, retire the corresponding AST
bundle transforms, recovered runtime assembly, obsolete Node adapters and duplicate
stores/watchers. Retain import readers needed for migration and external protocol
compatibility. Archive provenance evidence; do not make recovery tools production
dependencies. Build scripts may remain scripts where no runtime benefit warrants
rewriting them, but the shipped app must build independently of recovered inputs.

Hosted accounts/cloud agents stay excluded. Local provider account sign-in remains
included. Remote SSH/containers/WSL and special modes need a supported-scope decision
and their own verification; do not silently claim them through the local Rust core.

The largest unresolved scope items are native editor/toolkit accessibility,
extension/webview compatibility, retrieval quality/contract ownership, full history
migration, authenticated third-party privacy, and native macOS/additional Linux
verification. Existing [Linux evidence](linux-verification.md) covers declared
current-runtime cases, not the future Rust implementation.

The proposed result is therefore **Rust-owned OpenVision with declared external
engines**, not a claim that every shipped byte is Rust. No component-count or
source-line percentage is used as evidence of compatibility or speed.
