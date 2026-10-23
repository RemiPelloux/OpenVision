# Owner decisions (issue #5)

Recorded **20 October 2026** on the owner's instruction to settle
[#5](https://github.com/RemiPelloux/OpenVision/issues/5). One rule applies to every
item: **a bar is never lowered only to raise the verified count.**

- A default is accepted when it is safe for the user and backed by evidence.
- A gap that is a real defect, a missed budget or an untested path goes back to work.
- Legal questions stay with the owner.

Every decision is reversible here. The [ledger](completion-sprints.md) and the
[status page](eta-and-definition-of-done.md) apply them.

## Release-wide rules

| Topic | Decision |
| --- | --- |
| Promotion order | A story may be promoted while a story it depends on is Partial, **if** its own clauses pass without the unfinished part, and that gap stays recorded in the dependency's row. OV-702 stands. |
| Performance budgets | Absolute budgets set from baselines stay the gate for Verified, measured on a reference-class host. A same-host A/B run showing no regression against the pre-merge build is accepted as **interim evidence only**. Budgets are not relaxed to fit a slower host, and software-rendering budgets are not adopted as the release bar. |
| Release gate | OV-1004 is promoted last, on the same build as every other story. |
| macOS | **Keep the claim.** OV-902 stays open until a Mac is available ([#2](https://github.com/RemiPelloux/OpenVision/issues/2)). Dropping it would remove acceptance clauses only to move the number. |

## Accepted defaults

| Story | Accepted |
| --- | --- |
| OV-103 | Items 1–4 and 6. **1:** power loss, kernel crash and disk I/O errors are excluded; the host cannot produce them. **2:** a review whose record cannot be deleted until shutdown returns as pending. **3:** a command whose process-group leader exits early is no longer tracked. **4:** if the save during Undo fails, the error shows, Retry works, and the restored text stays in the unsaved editor. **6:** the interrupted-edit wording, the 64 MiB restore limit and the startup-sweep limits. |
| OV-402 | Python, Go and Rust are syntax-only by default. Full language features need a user-installed language server, and the UI must say so. |
| OV-502 | Lexical FTS5/BM25 retrieval is the release scope. Embeddings stay optional and off, and no model ships. Thresholds equal the measured baseline. Other defaults: links are not followed, the tool is named `CodebaseSearch`, and the index starts on first search. |
| OV-602 | The "useful" bar is a pass rate of at least 60 % per language on the pinned corpus, measured live in OV-205. |
| OV-604 | **Exclude next-edit prediction from this release** (Path A of the [decision paper](../recovery/next-edit-decision.md)). It needs a hosted model contract that the local provider path does not offer. The absence check (no jump hint, no prediction traffic) is the acceptance test. |
| OV-704 | Scope table: image input is included; computer use is excluded on Linux, with the visible explanation; the in-app browser is included; browser automation is included only if the local Agent can reach it. Browser tools keep **Ask Every Time** by default. **Updated 20 October, after native evidence:** (a) a Cursor team-policy check blocks browser automation in local profiles, so it is explained as unavailable; that check is not relaxed. (b) Image generation turned out to be provider-backed (`/v1/images/generations` on the configured provider), not "no local producer". It is **hidden** from the local Agent for this release and can be revisited with live providers in OV-205. Tool rows must never show a success label for a refused or failed tool. |
| OV-703 | Declared matrix: **SSH to Linux x64**. WSL moves to OV-901, and containers are excluded from this release (no supported daemon path). The Agent runs **locally only** in remote windows, so provider keys never leave the client. Other defaults: strict host keys without trust-on-first-use, the server always comes from the local prepared archive, the server stops promptly when its last window closes or reloads intentionally (upstream's 3-hour reconnection grace applies only to genuine network loss, and is bounded), dynamic forwarding is off, and open-remote-ssh 0.4.0 is used. |
| OV-801 | The Linux AppImage is the inventory denominator. Non-REA `esbuild.wasm` evidence is accepted. The 3.24.18 reference counts are informational. |
| OV-802 | Official SHA-pinned Electron and Node release binaries count as the built host. Also: Cursor's 4 KiB alignment transform is kept, upstream bases replace the watcher and policy-watcher forks, the package carries the Electron LICENSE, and libstdc++ is linked statically. |
| OV-803 | Defaults stay on the original helpers. The `none` and `landlock` sandbox options and the `none` crepectl option remain build choices. tree-chunk loads lazily. Sandboxed auto-run stays off. Indexed grep (GrepClient + crepectl) stays for this release; ripgrep cannot replace it. |
| OV-903 | Claimed matrix: x64/glibc, X11 and Wayland, gnome-keyring or the no-service path. `--glass` is a supported entry point. OV-804 does not block OV-903. |
| OV-904 | Updates are **manual**: there is no update endpoint, and a signed release is downloaded by the user. The release signing key is held by the owner, offline, and never enters the repository or a worker session. |
| OV-1005 | All 206 drifted server-controlled features ship **off** by default. Other defaults: local VSIX installs skip the Marketplace lookup, a cached Statsig bootstrap is ignored, and `instant_grep_indexing`, `custom_agents_enabled` and `customize_global_search` stay off. |
| OV-303 | Shared-process MCP transports are on, project MCP approvals are asked again once, and approvals are scoped by workspace folder. |
| OV-304 | Supported auth: OAuth 2.1 with PKCE and dynamic registration, pre-registered clients and static headers. Other defaults: denied consent needs Authenticate again, a rejected refresh never reopens the browser by itself, the precedence is project, then profile, then plugin, and unknown MCP transports are reported and skipped. |
| OV-302 | Named VS Code profiles inside one user-data folder share customizations. This is documented as a known limit; separate user-data folders stay fully isolated. |
| OV-103 retry | Local Agent auto-retry must start every replay from a clean turn, as on the hosted path (option A, 23 October): the local retry loop calls the renderer reset before each replay. Auto-retry is kept; a reply shown by a failed attempt is never appended to. |
| Unknown tool calls | A call to a tool that was not offered, or with malformed JSON arguments, drains its arguments, returns a tool error to the model and lets the turn finish (23 October). An invented tool name gets no fabricated UI row: the model's reply explains it; malformed arguments to a real tool show its failed row. |

## Sent back to work

| Story | Why it is not accepted | Work |
| --- | --- | --- |
| OV-103 | Item 5: Stop or close during argument streaming, during MCP tool calls and between the files of a multi-file edit was never tested. An untested cancel path cannot be accepted. | Native tests for the three cases; fix what they find |
| OV-402 | Large-file symbols take 13.0 s against 10 s (30 % over), and renderer p95 is 259 ms against 250 ms. Both are product budgets. | Optimize; budgets unchanged |
| OV-1001 | A closed 110-turn chat keeps about half its history in memory. That is a leak, not a framework limit. | Release the React/Solid retainers; closed-chat budgets pass ×3 |
| OV-704 | The scope is now decided, but the image-input matrix and browser reachability have no native evidence. | Run both and fix what fails |
| OV-703 | The remote host still writes to `~/.cursor`, so remote profile isolation fails. | Namespace and isolate the remote profile, then rerun the SSH verifier ×2 |
| OV-802 | Rebuilt add-ons need glibc 2.38, which excludes Debian 12 and Ubuntu 22.04. The recovered build runs on 2.28. | Rebuild on the glibc 2.28 sysroot with the clang/libc++ recipe |
| OV-803 | Authority, malformed-input, process-identity and cleanup tests must be confirmed for every loaded helper under the decided defaults. | Close the remaining clauses |
| OV-1002, OV-1003 | Budgets must be met on a reference-class host. This container has no GPU and shows a slower idle-CPU baseline. | Rerun on a reference host ([#3](https://github.com/RemiPelloux/OpenVision/issues/3)) |

## Owner and legal only

| Story | Status |
| --- | --- |
| OV-804 | **Not decided here.** Publishing the recovered 3.21.13 application source as an OpenVision-owned input is a distribution-rights question that needs the owner and legal advice. Until then nothing is published, OV-804 stays blocked, and it is left out of the 36/44 plan. |
| OV-802 redistribution | Electron, Node and add-on redistribution terms are recorded in the worker report; accepting them is the owner's call before any release. |
