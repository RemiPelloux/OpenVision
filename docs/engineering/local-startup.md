# Local Explorer startup ordering

The editable source build defers the local startup contribution until workbench
parts have restored. Previously it could open Explorer during blocking restore,
before the sidebar owner was ready, and log an undefined pane-composite error.
Nonlocal startup keeps its previous lifecycle. This source fix is **not included
in the preview.6 portable payload**.

The transformer identifies the unique contribution registration, parses its
lifecycle expression and rejects missing, ambiguous or changed contracts. It is
idempotent. Desktop and Glass source tests verify local/nonlocal behavior and
reject lifecycle drift; native execution below covers Windows desktop only.

## Native verification — 15 October 2026

```sh
npm run verify:local-startup
npm run verify:local-startup -- --blocking-control
```

The verifier launches an owned runtime overlay with a disposable profile and
two project folders. It inspects actual renderer logs, preserves the normal
runtime hash, and requires a clean native host exit. It performs no AI inference.

| Candidate check | Observed result |
| --- | --- |
| Startup | Explorer and a project file visible |
| Native Developer: Reload Window | Open editor restored; Explorer visible |
| Project Home switch | Next folder opens in the same native window; zero new windows |
| Logs | No matching startup-contribution errors; no renderer page errors |
| Cleanup | Host exit 0; normal workbench unchanged |

Candidate: `logs/local-startup-verification-sN4LNG/result.json`. An earlier
candidate `yxozs9` passed the same checks. Positive control:
`logs/local-startup-verification-rPnKAm/result.json`. Restoring only the original
blocking lifecycle reproduced the pane-composite startup error; the host still
exited 0. This demonstrates that exit 0 alone does not establish clean startup.

Both runs used source based on Git `ce28e244ac03e24382844baab91e320572de13b0`
with the documented local changes. Normal workbench SHA-256:
`5db7a724f0b3539f53dac9939491ac442f0f99a10ebd08fb9b49137bf3a46c5f`.
Verifier SHA-256:
`beeb141f8c83d4ec6fd5da51428f69f90738c53778a5afd4bac962d4790d65fd`.
The result records the distinct control-overlay digest and log paths.

Initial harness run `O31niv` used a browser reload and failed its editor-state
expectation. The verifier now invokes native Developer: Reload Window, which
persists editor state through its owning service. No product editor-restoration
fix or credit is attributed to that harness correction.

This fixes one cause under OV-403. Duplicate-command and mutex diagnostics, the
earlier unexplained launcher exit 134, broader shutdown coverage, and native
macOS/Linux checks remain open. No startup speed or memory improvement was
measured. The acceptance ledger remains **6/42 Verified (14.29%)**.
