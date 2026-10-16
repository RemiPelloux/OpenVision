# Project-data destinations (OV-501)

16 October 2026. **Linux x64 only** (Omarchy, Hyprland Wayland, Node 26.8.1).
Source-build scope: no portable package was tested. **OV-501 stays Unknown.**
No native application capture was completed in this pass, so no destination is
promoted to "local only". This report records the static trace, the capture
tooling that was verified, and the gates that are still open.

## Observed, inferred and open

| Operation / owner | Possible project data | Destination in code | Status in OpenVision build | Evidence class |
| --- | --- | --- | --- | --- |
| Codebase indexing (`cursor-retrieval` FastIndexer): `RepositoryService/FastRepoInitHandshakeV2`, `SyncMerkleSubtreeV2`, `FastUpdateFileV2`, `FastRepoSyncComplete`, `EnsureIndexCreated` | File contents, relative paths (plaintext or AES-256-CTR), Merkle hashes | Credential-supplied `repoBackendUrl` (`repo42.cursor.sh` in the bundle) | Constructor returns early when `$e.cursor.isLocalMode` is true; the build sets `buildFlags.localMode` to `true` (`source/app/out/main.js`). Without local mode, a missing Cursor credential also stops client creation | **Static, inferred.** Not observed natively |
| Semantic search (`SearchRepositoryV2`, `SemSearchFast`, `SemSearch`) | Query, encrypted path filters | Same repository backend | Depends on the indexing client above | Static, inferred |
| File sync for Tab (`FileSyncService/FSUploadFile`, `FSSyncFile`) | File body, filename, edit history | Cursor backend | The recovered bundle classes these as hosted-only RPCs (the `codebase-indexing`/`tab` table in `cursor-retrieval`). OpenVision Tab uses the custom Chat Completions adapter ([autocomplete](rea-custom-autocomplete.md)) | Static, inferred |
| Codebase snapshot upload (native `CodebaseSnapshotClient`: `CreatePackfileUpload`, `UploadPackfileChunk`, `CompletePackfileUpload`) | Packfiles of repository contents | Credential-supplied `backendUrl` | The [telemetry customization](rea-telemetry-audit.md) never registers or starts the uploader | Static (existing tests) |
| Native `@anysphere/file-service` addon | Anything its clients are given | Links `socket`/`connect`/`getaddrinfo`/`send`; contains rustls/hyper strings | Network capability **observed** in the binary (SHA-256 `3b0290b101e8d8f772b829689e5cdc1b082608a4596be0627f3d86c3a76b7cb0`); whether it connects during a session is **open** | Static observation |
| `cursor-file-service` extension | None | None | `dist/main.js` exports only `DUMMY = 1`; the real service is the addon above | Static observation |
| Cmd-K / inline edit (`CmdKService/*`), commit/branch naming, knowledge base, web search/fetch, share | Instruction, selection, diffs, transcripts | Cursor backend | The recovered bundle marks them hosted-only; OpenVision Quick Edit uses the configured provider ([inline edit](rea-inline-edit.md)) | Static, inferred |
| Agent turns | Prompt, tool results (file contents) | Configured model provider | Allowed destination; [Agent runtime](rea-agent-runtime.md) observes one provider request per submit on Windows | Prior native evidence (Windows) |
| TypeScript Automatic Type Acquisition | Package names derived from project imports | `registry.npmjs.org` | Reported by the OV-1005 telemetry agent from a Linux strace capture; that agent owns the `typescript.disableAutomaticTypeAcquisition` setting | Observed by OV-1005, not by this verifier |
| Extension control metadata | No project data | `api2.cursor.sh/extensions-control` | Seen in earlier Windows telemetry captures | Prior observation |

## Capture tooling verified in this pass

- `desktop/data-destinations.mjs`: decodes gzip/br/deflate/zstd bodies and
  Connect/gRPC envelopes (with compressed frames), searches every view for
  canaries in UTF-8, UTF-16LE, base64, URL encoding and SHA-256/SHA-1/MD5 content
  digests (hex, raw and base64), classifies destinations (configured provider,
  user-initiated, original hosted service, telemetry, marketplace, unclassified),
  summarizes requests/bytes per host, answers DNS locally and reads TLS SNI.
  `npm run test:data-destinations` passes **6/6**.
- `desktop/data-destinations-namespace.sh`: an unprivileged
  `unshare --map-root-user --net --mount` namespace with no off-machine route.
  Every IPv4/IPv6 address is local (AnyIP), non-80/443 TCP is redirected to a
  catch-all with nftables, host resolver sockets (`systemd-resolved`, Avahi,
  machined) are masked, `tcpdump` records any non-loopback packet, and the
  workload runs as the original uid in a nested user namespace.
  A smoke run observed: lookups answered by the verifier's DNS
  (`198.18.0.1 api2.cursor.sh`), with no host resolver escape; a direct TLS
  connection recorded with its SNI (`repo42.cursor.sh`, 1,576 bytes); and an
  HTTP request to port 8080 redirected to the catch-all with its Host header.
  Without masking, `getent` inside a bare network namespace still resolved real
  addresses through the resolved socket. That is why the masking is required.

**Not working yet:** the decrypting TLS/HTTP-2 MITM and CONNECT proxy
(`--proxy-server`) failed in the smoke run ("socket hang up"; no per-host leaf
certificate was generated). That prototype is not committed. Nothing was
forwarded off the machine.

## Commands

```sh
npm ci --prefix tooling
OPENVISION_RECOVERY_DIR=<recovery-3.21.13> npm run build:desktop
npm run test:data-destinations
unshare --map-root-user --net --mount sh desktop/data-destinations-namespace.sh <run-dir> "$(id -u)" "$(id -g)" node <workload>
nm -D --undefined-only extensions/cursor-retrieval/node_modules/@anysphere/file-service/file_service.linux-x64-gnu.node
```

Recovered retrieval bundle SHA-256 (3.21.13 readable):
`abf50fc1197106c937360ca4369e477dd6fd85912ba4eee469def5b67d81872d`.

## Open gates for OV-501 (all clauses still required)

1. Fix the TLS termination in the capture proxy and catch-all, then add
   `verify:data-destinations`. It should run an owned project with canary file
   names, contents and a Git history through idle indexing, Find in Files, Quick
   Open, Agent (Read/Grep/Glob and any codebase-search tool), Tab and Quick Edit
   against a loopback provider fixture.
2. Search every captured payload, DNS name and SNI for the canaries, and
   classify every destination. Measure request count and bytes for that fixed
   workload before and after any owner change.
3. Observe natively whether the file-service addon opens sockets, and whether
   local mode keeps FastIndexer, file sync and semantic search inactive.
4. Block or replace any unexpected destination at its owner, with backups and
   drift guards. Disable hosted-only features with a UI explanation.
5. Windows/macOS behavior is not covered by this Linux evidence.
