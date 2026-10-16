# Windows portable verification - preview.7

16 October 2026, Windows x64, pinned Node 24.18.0 for authoring checks.
The package contains the prepared 3.21.13 runtime base with current OpenVision
customizations. The separate 3.24.18 recovery archive is a reference snapshot.

## Archive identity

| Fact | Value |
| --- | --- |
| Archive | `OpenVision-0.2.0-preview.7-win32-x64.zip` |
| Compressed bytes | 343,195,020 |
| File entries / uncompressed bytes | 18,143 / 1,107,576,923 |
| SHA-256 | `d1ea83025571d41932b41401c42199ec2c70de5484a71e4d907d8ca738757162` |
| Copied inputs matched by SHA-256 | 18,139; four remaining files are generated launch/readme/package metadata |
| License/notice/copyright filename matches | 676 retained |
| Repository payload | Seven parts, maximum 48 MiB; individual and combined hashes checked |
| ZIP integrity | Full CRC check passed |

Packaging rejects external links. Targeted path checks found no author profile,
logs/backups, environment files, state databases or certificate/key files.
Metadata declares no profile or credentials included. This is scoped package
inspection, not a universal secret-scanner or third-party code audit.

## Packaged native checks

Provider run `logs/provider-identity-HLojQW/result.json` passes discovery with
custom headers and Authorization override, duplicate wire IDs on two providers,
independent A/B requests, restart persistence, A parent/B child/A continuation,
native Tab completion, unavailable/removed selection blocking, explicit
recovery, manual model names and rediscovery/restart. Every recorded connection
is authenticated correctly. Four application processes exit 0; no renderer
errors are recorded. Requests use real loopback sockets and deterministic
responses, with no external AI inference.

The first development provider run (`logs/provider-identity-WMf9o3/result.json`)
failed its all-connections-authenticated assertion: three Agent capability
requests overwrote custom Authorization with the Bearer default. The producing
catalog merge was corrected, the recovered-owner regression reproduces the
original failure, and the packaged rerun above passes. That first run is not
counted as successful verification.

Quick Edit run `logs/inline-edit-verification-RJZxm1/result.json` passes
custom-header dispatch, approved-rule
filtering, accept/save, Undo, reject, HTTP error/file preservation, explicit
recovery, transport cancellation and multiline Unicode/CRLF handling. Reflected
API-key/header fixture values are absent from the displayed error. Six submits
produce six inference requests, original rule records remain unchanged, both
hosts exit 0 and no renderer errors are recorded.

The repository installer verifies all seven parts and the reconstructed ZIP,
then extracts successfully into a fresh destination. The following checks run
against that **installed copy**, rather than the original package directory:

- `logs/agent-verification-k9Paft/result.json` passes authenticated streaming,
  native reads/search, multi-file edits, review rejection/acceptance, Undo/Redo,
  unrelated-file preservation, approval/denial and foreground command
  cancellation, upstream request closure and restart/resume with persisted edits.
  It records 20 controlled requests, no renderer errors and two host exits of 0.
- `logs/project-home-verification-82cGd3/result.json` passes 14 checks: bounded
  history, search/removal, reduced motion/responsive layout, persistent pins,
  existing-project focus, same-window folder/workspace/native-picker paths,
  unsaved-edit cancellation and clone-prompt cancellation. Three hosts exit 0,
  with no renderer errors. No network clone or AI inference is involved.

| Installed runtime component | SHA-256 |
| --- | --- |
| Main process | `9ba5ea1e76ab22241275318d9e255a801b4f43de8ce08a0115fedbb01088abde` |
| Editor workbench | `6e18d69477ec08d303e091303a667c0e7cfc28e3877cd10fd30e7959769246c8` |
| Agent execution | `8b5ba0f522ba310a3fd58bc891aa3fea536ef33288f9f1a2cb8b665d0f9fb5c5` |

Native request counts describe different workflows; they are not comparative
request-efficiency measurements. Earlier Git clone/theme/account evidence is
linked in the [release notes](../releases/0.2.0-preview.7.md) and was not all rerun
against this ZIP.

## Build and preparation

The generated Agent input initially failed namespace integrity and then
tokenization. Recovery preserved the damaged input and replaced only a small
region from retained source. The candidate matched the exact pre-damage SHA-256
`74e8d56a9358230317ecbb09a9f5c4b41c802282dbff189cf2a7b07625d4920d`.
The cause remains unknown; see [build integrity](../engineering/runtime-build-integrity.md#preview7-recovery-and-repeat-build).

The corrected full build and repeat build pass validation of **239 scripts,
124 manifests and 30 local main-process modules**. Desktop authoring syntax
checks pass. Account/settings tests pass **67/67**. Portable tests pass **30**
with **one platform-specific skip**. The catalog regression reproduces the
recovered Bearer override before verifying the fix against actual local HTTP.

The initial 120-test run passed 119 and failed a VM fixture that omitted the
new diagnostic-policy binding. The corrected run passed 120/120. Its scope
predates the catalog regression; final release checks are recorded below rather
than combined into an inflated total. The final focused release suite passes
**162/162**, zero skipped, including storage, model selection/performance,
header ownership, recovered catalog/fetch, routing, completion, Quick Edit,
generated integrity and installer safety (`logs/preview7-release-tests.txt`).

## Limits

The existing [live-provider matrix](live-provider-compatibility.md) and real
account checks remain separate historical evidence; no paid inference or user
login was repeated for packaging. Native Linux/macOS/ARM64, signing, marketplace
compatibility, active-write physical faults, complete upgrade/rollback and
independent native rebuilding remain open. No whole-app memory/CPU/token or
comparative latency improvement was measured. The acceptance ledger remains
**6/42 Verified (14.29%)**. GitHub Actions stays disabled.
