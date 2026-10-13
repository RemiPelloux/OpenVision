# Provider selection lifecycle — 13 October 2026

Disabling or removing the selected model now preserves that choice and blocks
the next Agent request with **Choose an available model** and an actionable
explanation. The user must explicitly select a replacement. Re-enabling the
original model restores its route. No credentials are copied into the catalog.

## Defect and producing boundaries

The native persisted-selection reader previously changed unavailable IDs to
`default`; its availability migration could also replace the saved model. The
picker then selected another provider before the strict request resolver ran.
Both normalization owners now retain the explicit choice in local mode.
Malformed, ambiguous, unavailable and stale-setting errors use the native
non-retryable local-provider error contract. Unexpected errors retain their
original identity. Nonlocal normalization is unchanged.

`logs/provider-identity-GPhvjH/result.json` captured the original silent fallback.
The next run, `NkFudK`, retained the selection but rendered a generic connection
error. Autocomplete also produced traffic during that test phase; it was not
evidence of an Agent fallback. The verifier now disables autocomplete after its
separate acceptance check, then counts every connection during blocked phases.
These failed records remain local; the earlier identity report did not establish
the disabled/deleted native lifecycle.

REA Evidence
`ev_8b7a162aa0128070a1b04326f2b92520fc1685b4c951f1c11c4564355c3f0682`
analyzed three original JavaScript owner slices plus a provenance JSON file:
8,279 bytes, 1,085 AST nodes, zero parse failures. Original workbench SHA-256:
`5a447679d1f3b98e7da3e90c7dc3afe733fd949006e326e798a79a6dd1f2de27`.
The local provenance records exact character ranges and function wrappers.
This is partial static evidence; omitted dependencies and execution remain
outside its scope. The public CLI retained the complete record at
`logs/rea-selection-owners-evidence.json`.

## OV-201 acceptance evidence

These are actual native Windows app workflows against **simulated loopback
providers**, with disposable profiles, projects and fixture credentials. They
verify local configuration and routing, not upstream model intelligence or
compatibility. Real Codex Easy results are in the separate
[live-provider report](live-provider-compatibility.md).

| Accepted clause | Native evidence |
| --- | --- |
| URL/key and discovery | Both verifiers add providers through settings and require authenticated catalog requests. |
| Empty and malformed catalogs | Retention run preserves models, names and enablement, shows the malformed response error, and marks missing entries unlisted. |
| Duplicate IDs across providers | Identity run presents two choices for the same wire ID, routes A/B independently, preserves B after restart, and verifies parent A → child B → parent A and B autocomplete. |
| Manual IDs and renamed entries | Identity run adds `manual/日本語:custom`, renames it, rediscovers and restarts; requests retain the exact wire ID. Retention run preserves an edited discovered name. |
| Key replacement and persistence | Retention run replaces the key, checks authenticated discovery/inference, restarts, and checks inference with the replacement key again. |
| No silent fallback; selected credentials only | Identity run records zero connections after disabling the selected model, removing its provider, and restarting with that removed selection. Explicit B selection restores inference. All recorded fixture connections use the expected provider's credential. |

Passing records:

- `logs/provider-identity-ZUH4gU/result.json`: four owned hosts exited 0, no
  renderer errors, manual rename/discovery/restart and all three blocked phases
  passed. Twelve inference requests include two autocomplete requests.
- `logs/catalog-retention-E8BelS/result.json`: malformed/empty/reduced catalogs,
  unlisted inference, replacement key after restart and explicit removal passed;
  owned hosts exited 0, no renderer errors.

Both use workbench SHA-256
`abd2eda32dbb4f68e60c93baa86850a264826a2d2418a735549588894c171962`.
Four normalization/error-contract regression checks execute the relevant
desktop/glass boundaries. Existing owner tests cover configuration changes
during awaited secret access, ambiguity, malformed IDs and credential isolation.

OV-201 is Verified for this local configuration contract on Windows. The
42-story denominator is unchanged. OV-202 accessibility/large-picker checks,
OV-203 reasoning support, OV-204 provider failures and native macOS/Linux
release gates remain open. The later [picker update](model-picker-scale.md)
replaces the disabled selection's encoded display with a readable unavailable
label and completes the local OV-202 acceptance checks.
