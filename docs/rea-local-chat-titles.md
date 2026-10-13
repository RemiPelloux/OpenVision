# Local chat titles

OpenVision generates a new chat title from the first message locally. This removes the separate title inference call that was observed in the agent fixture at `logs/agent-verification-ywoavU/result.json`. It does not change the main agent inference request, commit-message generation or branch-name generation.

The recovered `localAgent.nameAgent` owner already computed a fallback before opening a prompt session: examine at most the first 2,000 UTF-16 code units, take the first four Unicode letter/number words, and pass them through the existing formatter. OpenVision retains that code and its Promise wrapper, returns the fallback immediately, and removes the unused title prompt declaration and network branch. The formatter keeps the existing 48-character limit and `New Agent` fallback for empty or punctuation-only input. These titles are inexpensive labels; they do not summarize the entire conversation.

`desktop/local-chat-title.mjs` applies this transformation to both bundled local-agent extensions. It locates the request owner, parses the function, validates its local fallback and prompt ownership, and fails on missing or ambiguous contracts. It preserves the first original under ignored `backups/local-chat-title/`, uses content-hash build caching, and tolerates repeated installation. Integrate `installLocalChatTitles(root)` before refreshing extension integrity hashes.

## Evidence and verification

- REA parent evidence: `ev_b924c02542bc8eb4e6c82ce402cb19f8bf7f9b611f9d942205fc898be017b0a0`.
- Readable app root: `ba01e0c07d13a65493a64fe89dc2cd862dd56bb12ce8dd77617c25d19839d126`.
- REA scope is partial: the agent-exec worker exhausted its heap, and local-agent-runtime analysis had semantic truncation. The scoped source inspection and tests below do not establish complete extension recovery.
- Tests execute the transformed functions extracted from both real recovered bundles with no provider/session available, check Promise behavior, Unicode and punctuation handling, whitespace and input limits, and parse each complete transformed bundle. Installer tests verify retained originals, cache records and repeat safety. Three focused tests passed with the pinned Node runtime.
- The fresh Windows run `logs/agent-verification-RpTqIJ/result.json` proves one initial Agent request, successful streamed reply, and no auxiliary title request. It also verifies a real Read tool continuation and upstream Stop. See [native Agent evidence](rea-agent-runtime.md). Real external-provider and macOS/Linux runtime verification remain open.
