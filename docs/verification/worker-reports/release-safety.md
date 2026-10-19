# Worker report: OV-1004 release safety (Linux x64)

19 October 2026. Branch `ov/release-safety`, based on the coordinator branch
`ccr-a39d6f13-jurmdv` at `2700b330`. Source change after **0.2.0-preview.7**;
no package was published. Linux x64 only. **Draft — updated as runs complete.**

## Summary

In progress. Done so far:

- `npm run check:secrets`: secret scanner with self-test, UTF-8/UTF-16LE,
  ZIP/VSIX/gzip members, digest allowlist (commit `299bf430`).
- Startup recovery notice for unreadable profile data (commits `76302ac9`,
  `7aa1a191`).
- Two product defects found by the first corrupt-state run and fixed at their
  owners: one unreadable rule hid every rule (`bccb29f0`); an unreadable
  provider store blanked the Settings pane (`a7fb2e6a`).
- Verifiers `verify:corrupt-state`, `verify:crash-recovery`, `verify:authority`
  (commit `13ea3206`); native runs pending the rebuilt runtime.

## Verification so far

| Run | Result | Notes |
| --- | --- | --- |
| `logs/secret-scan-5ReVKj` | Pass, self-test 7/7 | Docs only; `build/packages` absent |
| `logs/corrupt-state-7fjf7x` | First native run, 10 cells, violations | Pre-fix observation for rules, providers, project MCP and reviews; harness defect (project reset discarded the baseline edit, so the app correctly dropped the stale review) fixed afterwards |
