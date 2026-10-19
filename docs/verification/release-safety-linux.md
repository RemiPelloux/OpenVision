# Release safety on Linux (OV-1004)

Status: **in progress, not verified.** This placeholder keeps the links from the
[recovery guide](../guides/recovery.md) and the [release matrix](release-matrix.md)
valid until the native evidence is recorded.

Merged from `ov/release-safety` (head `02fcc1dd`), 19 October 2026:

- `npm run check:secrets`: a secret scanner for logs, profiles, packages and docs, with unit tests.
- Startup recovery notice for unreadable profile data.
- Six product fixes with unit tests:
  - an unreadable store gets a notice;
  - one unreadable rule no longer hides every rule;
  - a corrupt provider row no longer blanks Settings;
  - an unreadable review no longer loses Undo silently;
  - the shared-process crash prompt now fires;
  - **security:** workspace tasks no longer auto-run when a folder is opened (`task.allowAutomaticTasks` is off by default).
- Verifiers `verify:corrupt-state`, `verify:crash-recovery` and `verify:authority`, written but **not yet run with assertions on the final build**.

Remaining before OV-1004 can be judged:

- The first full `verify:corrupt-state` run on the final build (`3qUekW`) failed in its baseline: the "Provider Name" field was not found.
- Run all three matrices twice; run `verify:utility-listeners` twice; run `verify:local-rules` and `verify:profile-io-faults` once each.
- Run `npm run package:linux` then `npm run check:secrets -- --require-targets`.

See the [worker report](worker-reports/release-safety.md).
