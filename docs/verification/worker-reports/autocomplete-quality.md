# Worker report: autocomplete quality (OV-602)

Branch `ov/autocomplete-quality`, from `main` at `b4f52a56`. Dates: 18–19 October
2026. Host: Linux x64 cloud container, 4 CPUs, 15 GB RAM, Xvfb + `dbus-run-session`,
Node 24.18.0, Cursor 3.21.13 Linux AppImage runtime built from source. Linux only.
No live provider was called and no quota was used. Evidence:
[quality harness report](../../recovery/rea-autocomplete-quality.md).

## Summary

OV-602 now has one-command live runs for the live-provider story, and both are
proven on Linux with labelled loopback fixtures:

- `verify:providers:live -- --live --mode completion-quality` sends a pinned
  36-case corpus (6 each of JS, TS, Python, Go, Rust, C, including mid-project
  files with imports) as the exact production request, and scores parse,
  exact/expected match, no Markdown and valid replacement range per case. It
  reports per-language pass rate, latency and reported tokens.
- `verify:completion -- --live --model <saved id>` decrypts the saved provider in
  the owned host, enters it through Models settings in a disposable profile,
  and in JS/Python/Go files requires a visible suggestion, Tab accept, save and
  exact undo. It records request count and latency, then deletes the profile.
- The adapter's request context is traced and documented. A bounded cross-file
  context design is recorded as a proposal only (setting off by default).

## Tasks

| Task | State | Notes |
| --- | --- | --- |
| 1. Corpus, scorer, `--mode completion-quality`, unit tests | Done | `desktop/completion-quality-corpus.mjs`, `completion-syntax.mjs`, `live-completion-quality-probe.mjs`, `completion-quality-fixture.mjs`; 12 tests in `test:provider-probe`. Scorer proven against good, bad (wrong code), truncated and Markdown fixture replies, both in unit tests and over HTTP through the full verifier path (`--fixture-saved-provider --fixture-responses …`). |
| 2. Native `--live --model` editor acceptance | Done (fixture dry run) | `desktop/verify-completion-live.mjs`, dispatched from `verify-completion.mjs` by a two-line `--live` branch; shared saved-provider helpers in `desktop/saved-providers.mjs`. Live per-model runs moved. |
| 3. Context investigation and cross-file proposal | Done | Report section "What the adapter sends"; proposal not implemented. |
| 4. Final reruns with run IDs | Done | See Verification. |

## Defects found and fixed

| Defect | Owner | Commit |
| --- | --- | --- |
| Quality probe latency included local parser time (Python cases up to 1,377 ms in `JqJoGO`) | `desktop/live-completion-quality-probe.mjs` (new in this branch) | `fix(completion): exclude local syntax checking from quality probe latency`; regression test with a slow parser fails on the previous code |

No product defect was found. Unrelated: none recorded.

## Verification

Native runs as an unprivileged user via
`xvfb-run -a -s "-screen 0 1920x1080x24" dbus-run-session -- <keyring wrapper> npm run …`,
serially. The wrapper starts `gnome-keyring-daemon --unlock --components=secrets`.
Packages installed with apt: `gnome-keyring`, `libsecret-tools`, `rustfmt`.

| Command | Run ID | Result | First-time pass? |
| --- | --- | --- | --- |
| `npm run verify:completion -- --live --fixture-saved-provider` | `33gB3M` | Fail: no Secret Service on the host (`encryptString` unavailable) | — host precondition, not a product defect |
| same | `7bfE56` | Pass (JS/Python/Go; 1 request each; undo exact) | First run after installing gnome-keyring |
| same (after final code) | `XeDiSw`, `blKav0` | Pass, pass | Yes, both |
| `npm run verify:providers:live -- --live --mode completion-quality --fixture-saved-provider` (good / bad / truncated / markdown) | `JqJoGO` / `K2bgvj` / `qgI6tO` / `8c9ehm` | Exit 0 / 1 / 1 / 1 as designed; exposed the latency defect; Rust lexical fallback | Superseded |
| same, after fix (good / bad / truncated / markdown / good) | `NzEtCX` / `cO7uxB` / `nDFggI` / `D5eCct` / `Lpri30` | 36/36 pass; 0/36; 0/36 truncated errors; 0/36 Markdown errors; 36/36 pass. Server count = probe count, host exit 0 | Yes |
| `npm run verify:completion` (default matrix; file changed by the dispatch) | `VOJmSd`, `vVMGZd` | Pass, pass | Yes |
| `npm run test:completion` | — | 43/43 with `OPENVISION_RECOVERY_DIR=build/recovery` (2 recovery-dependent tests skip without it) | — |
| `npm run test:provider-probe` | — | 22/22 | — |
| `npm run check:desktop`, `npm run docs:check`, `npm run status:features` | — | Pass, 0 failures, unchanged | — |

Host notes: the first build attempt failed because the sibling
`/home/user/OpenVision Projects` folder was not writable by the build user and
left a stale namespace journal; both were recreated before the successful build.
No customization was changed, so no rebuild was needed after code changes.

## Recommendation per story

**OV-602: not yet Verified.** The Linux-doable gaps are closed: the quality
harness and native live-mode path exist and are proven with fixtures. What
remains is live only: the corpus run and native live editor acceptance per
claimed model (see below), judged against the proposed threshold.

## Moved to platform/live stories

- `npm run verify:providers:live -- --live --mode completion-quality --model <id>`
  for `gpt-6.1-sol`, `deepseek-v4-flash`, `grok-4.7` (36 requests each).
- `npm run verify:completion -- --live --model <id>` for the same three models.
- Windows and macOS reruns of both commands and of the fixture dry runs.

## Defaults pending owner decision

- "Useful" = per-language pass rate **≥ 60%** on the pinned corpus, with no
  Markdown and valid ranges required in every pass, measured per claimed model
  (`usefulPassRate` in the probe). The live run fails unless every language meets it.
- Claimed models = the three configured: GPT (`gpt-6.1-sol`), DeepSeek
  (`deepseek-v4-flash`), Grok (`grok-4.7`).
- Live editor acceptance refuses saved providers with custom headers (the
  Models settings entry does not copy them) and a model enabled in more than
  one saved provider.
- Cross-file context: proposal only, off by default if built.

## Open risks

- Fixture replies are authored; real models may return valid but unexpected
  code. The accepted patterns are deliberately narrow for most cases and lenient
  for symbols the adapter cannot see; the corpus may need tuning after the first
  live run (any change alters the recorded corpus SHA-256).
- Parse strength depends on installed toolchains; the result labels the parser.
  On Windows, `python3`, `gofmt`, `rustfmt` and `cc` may be absent, giving
  lexical checks. C uses `cc -fsyntax-only`, which also resolves names.
- `stripTypeScriptTypes` is experimental in Node and prints a warning.
- The live editor verifier wraps the main-process `net.fetch` for counting;
  if the adapter stops using `net.fetch`, the count reads 0 and the run fails
  rather than passing silently.
- Linux native runs need a Secret Service; without one the run fails early.
