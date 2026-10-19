# Release matrix and evidence index format

18 October 2026. Part of OV-1004 (release owner can demonstrate completion and
recover from failures). This page defines how release evidence is indexed and
which release-safety gates exist. It does not promote any story; the
acceptance ledger and [release claims](release-claims.md) stay authoritative.

## Gates

| Gate | Command | What it proves | Platform cells |
| --- | --- | --- | --- |
| Critical suite | `npm run verify:critical` (OV-903, `desktop/verify-critical.mjs` + `desktop/critical-suite.json`) | Every accepted story's critical verifiers pass on one build | Owned by OV-903; not duplicated here |
| Secret scan | `npm run check:secrets` | No canary key, Authorization header, provider/platform token or private key in logs, verifier profiles, packaged output or docs | Linux x64 (this page); Windows ZIP and macOS cells moved to platform stories |
| Corrupt state | `npm run verify:corrupt-state` | One corrupted store per cell: app starts, original bytes kept, recovery guidance shown, unrelated data unchanged | Linux x64 |
| Crash recovery | `npm run verify:crash-recovery` | SIGKILL of one owned child process per cell (renderer, extension host, pty host, shared process, file watcher) during idle, Agent stream and terminal use | Linux x64 |
| Authority | `npm run verify:authority` | Run modes (approval-first default, Allowlist with one entry, Run Everything) against shell, MCP, file-write and workspace-task authority; read-only project and profile | Linux x64 (POSIX permissions) |
| Interruption | `npm run verify:agent-interruption` | Agent writes and tools interrupted by Stop, close and SIGKILL | Linux x64 ([report](../recovery/rea-agent-interruption.md)) |
| Profile I/O faults | `npm run verify:profile-io-faults` | Full volume and read-only profile | Linux x64 ([report](../recovery/rea-profile-io-faults.md)) |

Linux results for the four new gates are in the
[release-safety report](release-safety-linux.md).

## Secret scan

`npm run check:secrets [-- [--allowlist <file>] [--require-targets] [path ...]]`

- **Default targets:** `logs/` (verifier output and their disposable profiles),
  `build/packages/` (output of `npm run package:linux`), `docs/` and the
  top-level Markdown files. `.git` and `node_modules` are not descended into;
  symbolic links are not followed.
- **Self-test first:** every run plants fresh canaries in a temporary directory
  (UTF-8, UTF-16LE with BOM, UTF-16LE at an odd byte offset, across the 8 MiB
  read-window boundary, inside a stored ZIP, a deflated `.vsix` member and a
  gzip stream) and fails unless all are found and a redacted placeholder file
  produces no finding.
- **Rules:** planted canaries (`sk-ovcanary-` followed by 32 hex digits, used
  by the release-safety verifiers as fixture API keys), private-key headers,
  `Authorization:` Bearer/Basic/token values, `x-api-key`-style headers,
  Anthropic, OpenAI, GitHub, GitLab, Slack, AWS, Google API keys and JWTs.
  Header values that are placeholders (`[redacted]`, `<key>`, `${VAR}`,
  `xxxx…`, `****`) or have fewer than six distinct characters are ignored.
- **Encodings:** each 8 MiB window is decoded as UTF-8 and as UTF-16LE at both
  byte alignments. ZIP/VSIX members (stored or deflated) and gzip streams up to
  256 MiB are decompressed and scanned; larger or unsupported archives are
  listed as `opaque` in the result.
- **Findings never contain the secret:** rule, path, byte offset, encoding,
  SHA-256 of the matched value and a masked preview only.
- **Allowlist by digest:** `config/secret-scan-allowlist.json` (absent means
  empty) is an array of `{ "sha256", "rule", "reason" }`. The digest is of the
  matched value. Canary keys can never be allowlisted; every entry needs a
  reason.
- **Exit code:** 1 on any non-allowlisted finding, an unreadable file, a failed
  self-test, or (with `--require-targets`) a missing target. Use
  `--require-targets` for a release scan so it cannot pass without packaged
  output. The result is written to `logs/secret-scan-<id>/result.json`.

## Evidence index format

Each verifier writes one run directory `logs/<name>-<id>/` (git-ignored, never
published) containing `result.json`. A release evidence index is a Markdown
table in a dated report, one row per gate run, with these columns:

| Column | Content |
| --- | --- |
| Gate | npm script name |
| Run | `logs/<name>-<id>` as printed by the verifier |
| Commit | `identity.commit` plus `identity.dirty` (must be empty for release evidence) |
| Build | SHA-256 of the host and the main/workbench bundles from `identity.hashes` |
| Host | OS release, display (`x11`/`wayland`), Node version |
| Result | `success`, cell count, violations; first-time pass or rerun |
| Notes | flakes with their cause, limitations, owned-elsewhere observations |

Rules for the index:

1. A rerun never replaces a first run. Record both; a flake keeps its row.
2. Every gate links its row to the report section that interprets it.
3. Observations and inferences are separated in the report, as in
   [rea-agent-interruption.md](../recovery/rea-agent-interruption.md).
4. `--observe` runs are pre-fix controls and are never counted as passes.
5. Residual exclusions are listed explicitly: power loss, kernel crash and
   device EIO are not producible on the verification hosts and are excluded
   from every claim (default pending owner decision).

## Readiness rule

OV-1004 is the last story. Under the strict reading recorded as a default
pending owner decision, it can be promoted only when every other in-scope story
is Verified on its claimed platforms and the critical suite plus the gates
above pass on the same build. Until then, release-safety runs report readiness
only.

[Release claims](release-claims.md) · [Recovery guide](../guides/recovery.md) · [Verification index](README.md)
