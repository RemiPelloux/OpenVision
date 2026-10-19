# Autocomplete quality harness and live editor acceptance (OV-602)

Date: **18–19 October 2026**. Host: **Linux x64** cloud container (4 CPUs, 15 GB RAM),
Xvfb 1920×1080×24 under `dbus-run-session`, Node 24.18.0, Cursor 3.21.13 Linux
AppImage runtime built from source on this branch. No live provider was called
and no quota was used: every run below is a **controlled fixture** and labelled
as such. Windows and macOS were not run.

This report adds the tooling that the live-provider story needs to measure
whether a configured completion backend offers *useful* suggestions, and proves
that tooling on Linux. It makes no quality claim about any real model.

## One-command live runs (moved to the live-provider story)

```sh
# Multi-language quality corpus, 36 production requests per saved model.
npm run verify:providers:live -- --live --mode completion-quality --model <saved id>
# Native editor: saved provider through Models settings, 3 languages.
npm run verify:completion -- --live --model <saved id>
```

Both use real API quota. Without `--model`, `verify:providers:live` probes the
first configured GPT/DeepSeek/Grok model of each saved provider, as before.
Results go to the ignored `logs/live-provider-verification-*/result.json` and
`logs/completion-live-verification-*/result.json`.

Quota-free dry runs of the same paths, used for the evidence below:

```sh
npm run verify:providers:live -- --live --mode completion-quality --fixture-saved-provider [--fixture-responses good|bad|truncated|markdown]
npm run verify:completion -- --live --fixture-saved-provider
```

## Quality corpus and scorer

`desktop/completion-quality-corpus.mjs` pins 36 cases: six each for
JavaScript, TypeScript, Python, Go, Rust and C. Each language has at least two
mid-project files with imports (JS 2, TS 2, Python 3, Go 4, Rust 2, C 5).
`desktop/live-completion-quality-probe.mjs` sends each case as the **exact
production request**: `completionContext` from the renderer provider computes
the bounded prefix/suffix and language id, and `fetchCompletion` from the
adapter builds the body, headers, 512-token bound and response validation. The
probe only adds a bounded read of a response clone for reported token usage.

A case passes when all of these hold:

| Check | Meaning |
| --- | --- |
| Parses | The whole document with the insertion parses. JS: acorn. TS: Node `stripTypeScriptTypes` then acorn. Python `ast.parse`, Go `gofmt -e`, Rust `rustfmt`, C `cc -fsyntax-only` with the case's headers. Missing toolchain: a weaker lexical check, labelled `lexical`. Generated code is never executed or compiled. |
| Exact / expected | The whitespace-normalized insertion equals a reference answer or matches an accepted pattern. |
| No Markdown | No fence anywhere; a leading fence is already rejected by the production reader. |
| Valid range | The adapter's one-line replacement (`linePrefix + insertion + lineSuffix`) applied to the document reconstructs prefix + insertion + suffix, stays inside the document, has no lone surrogate and does not repeat the line's own prefix or suffix. |

Errors (HTTP, truncation, refusal, timeout, Markdown) fail the case with the
adapter's locally authored message. The result reports, per language: pass
rate, each check's count, parsers used, median/max request latency, and token
sums when the provider reports `usage`. The corpus SHA-256 is recorded.

### Proposal pending owner decision: "useful"

A model is useful for a language when its pass rate on the pinned corpus is
**at least 60%**, with no Markdown and valid ranges as part of every pass. The
live run succeeds only when every language meets that. It is measured per
claimed model: the three configured models `gpt-6.1-sol`, `deepseek-v4-flash`
and `grok-4.7`. `usefulPassRate` in the probe is the single place to change it.

## Native live editor acceptance

`desktop/verify-completion-live.mjs` (dispatched by `verify:completion -- --live`):

1. Reads the saved provider from `data/local/User/globalStorage/state.vscdb`
   (read-only) and requires the model in exactly one saved provider without
   custom headers.
2. Launches the owned app with a disposable profile and project. The owned host
   decrypts the credential with `safeStorage`, as `verify:providers:live` does
   (on Windows, only the DPAPI-wrapped key is copied into the profile).
3. Adds the provider through **Models settings** (name, base URL, key), searches
   for the model and selects it as the Tab autocomplete model.
4. For JavaScript, Python and Go mid-project files, types the trigger, requires a
   visible suggestion, presses Tab, saves, checks the insertion is only at the
   cursor, undoes and saves, and requires the exact typed text.
5. Records request count, status and time to response headers through a
   verification-only wrapper of the main-process `net.fetch` (the product's
   requests are not changed), and trigger-to-visible-suggestion time.
6. Deletes the disposable profile after the host exits; it holds a re-encrypted
   credential. Screenshots of the editor and `result.json` remain.

The fixture dry run replaces step 1 with a fixture saved-provider database whose
key the owned host encrypts, and serves a loopback route. It additionally checks
that the instrumented count equals the requests the loopback route received.

## What the adapter sends

Traced from `desktop/completion-customization.mjs` → `localCompletion` in
`desktop/completion-provider.js` → IPC `vscode:openvision-completion` in
`desktop/completion-ipc.mjs` → `fetchCompletion` in `desktop/completion-http.mjs`:

- **Sent:** the model id; the current document text before the cursor (at most
  8,000 UTF-16 units) and after it (at most 2,000), cut outside surrogate
  pairs; the editor's language id. They are a JSON user message after a fixed
  system prompt, with `stream: false` and `max_tokens: 512`. The credential and
  any saved custom headers go only in HTTP headers.
- **Not sent:** file path or name, workspace identity, other files, open tabs,
  imported symbol definitions, diagnostics, LSP data, edit/diff history, cursor
  coordinates, EOL style. The recovered `StreamCppRequest` declares fields for
  several of these, but the local adapter populates none. The line prefix,
  suffix and EOL are used only locally to build the replacement.

Consequence, visible in the corpus: cases referring to an imported symbol
(`ts-repository-lookup`, `rs-match-arm`, `py-uploader-success`) depend on the
model guessing names it cannot see; their accepted patterns are lenient.

### Design proposal only: bounded cross-file context (not implemented)

A small, safe addition is feasible behind a setting that is **off by default**:

- Setting `openvision.completion.crossFileContext`: `off` (default) or
  `openEditors`. The Models settings help text and Tab tooltip state what is sent.
- Source: only editors already open in the window, same workspace, `file:` scheme,
  limited first to files the current document imports (resolved by path
  match, no language server dependency), then other visible editors of the same
  language. No disk reads of unopened files.
- Excluded: untitled, outside the workspace, `files.exclude`/`search.exclude`,
  ignored files, `.env*`, key/certificate and other secret-like names, files
  over a size limit.
- Budget: at most 3 excerpts, 1,500 UTF-16 units each, 4,000 in total, cut outside
  surrogate pairs. Excerpts prefer top-level declarations (signature lines).
- Request: an optional `context: [{ path, excerpt }]` array in the user JSON,
  with workspace-relative paths, validated in `fetchCompletion` with its own
  ceiling. The system prompt states that excerpts are read-only reference.
- Freshness: snapshot with document versions; switching file or provider still
  invalidates the result.
- Evidence before shipping: unit tests for budget, exclusions and truncation;
  corpus cases run with and without context to measure the change; a native
  fixture run that sees context only when enabled.

## Evidence on Linux (fixture only)

Host setup recorded for reproducibility: `gnome-keyring` and `libsecret-tools`
(Secret Service; the profile cannot save or encrypt a provider key without one)
and `rustfmt` were installed with apt. Native runs used an unprivileged user,
`xvfb-run -a -s "-screen 0 1920x1080x24" dbus-run-session --` and a wrapper that
starts `gnome-keyring-daemon --unlock --components=secrets` with a test password.
Runs were serial.

### Quality harness: `verify:providers:live -- --live --mode completion-quality --fixture-saved-provider`

Each run decrypted the fixture saved provider in the owned host, ran discovery
and sent all 36 production requests. Loopback route requests equalled the
probe's count (36) in every run, all authorized; owned host exit 0.

| Run | Replies | Exit | Result per language (JS, TS, Python, Go, Rust, C) |
| --- | --- | --- | --- |
| `NzEtCX` | good | 0 | 6/6 each; parsers acorn, strip-types+acorn, python-ast, gofmt, rustfmt, cc; tokens reported for all 36 |
| `cO7uxB` | bad (`unrelatedValue`) | 1 | 0/6 each; still parses: JS, TS, Python, Rust 6/6, Go 5/6, C 0/6 (`cc` rejects the undeclared name) |
| `nDFggI` | truncated (`finish_reason: length`) | 1 | 0/6 each; 36 adapter "truncated" errors; no tokens |
| `D5eCct` | Markdown fence | 1 | 0/6 each; 36 adapter Markdown errors; `noMarkdown` 0 |
| `Lpri30` | good (repeat) | 0 | 6/6 each |

Request latency against the loopback route was 2–17 ms (median 3–4 ms); it
measures the harness, not a provider. `cc -fsyntax-only` is a compiler front end,
so for C "parses" also means names and types resolve against the case's headers.

The first dry-run set (`JqJoGO` good, `K2bgvj`, `qgI6tO`, `8c9ehm`) produced the
same pass/fail outcomes but exposed a **harness defect**: case latency was taken
after local syntax checking, so Python cases showed up to 1,377 ms (the
`python3` start-up). Latency now stops when the response has been read; a unit
test with a deliberately slow parser proves it. In that set Rust used the
lexical fallback because the unprivileged user could not reach the root-owned
toolchain; `rustfmt` was then installed system-wide.

### Native editor: `verify:completion -- --live --fixture-saved-provider`

| Run | Result | JS / Python / Go trigger-to-visible suggestion | Requests (instrumented = loopback) |
| --- | --- | --- | --- |
| `7bfE56` | Pass | 927 / 856 / 865 ms | 1 per case, 3 = 3 |
| `XeDiSw` | Pass | 932 / 844 / 854 ms | 1 per case, 3 = 3 |
| `blKav0` | Pass | 885 / 854 / 881 ms | 1 per case, 3 = 3 |

Every case showed a ghost suggestion, Tab inserted exactly the fixture reply at
the cursor only (the accepted files parse with acorn, `ast.parse` and `gofmt`),
save then undo restored the typed text exactly, no renderer errors, host exit 0,
and the disposable profile was deleted. The trigger-to-visible time includes the
400 ms native debounce; loopback time to response headers was 6–11 ms.

The first attempt `33gB3M` failed before opening the editor: the container had
no Secret Service, so `safeStorage.encryptString` reported encryption
unavailable. That is a host precondition (as for any provider Save on Linux),
not a product defect; `7bfE56` is the first run after installing gnome-keyring.

### Regression

`npm run verify:completion` (default 13-case failure matrix, unchanged by this
work apart from the `--live` dispatch) passed twice: `VOJmSd`, `vVMGZd`.
`npm run test:completion` 43/43 with `OPENVISION_RECOVERY_DIR` set (two
recovery-dependent tests skip without it); `npm run test:provider-probe` 22/22.

## Limitations

- No live inference was performed here. Quality, latency and token numbers of
  real models, and native live editor acceptance per model, belong to the
  live-provider story and need the owner's saved providers and quota.
- Fixture replies are authored, not recorded from a model; they prove the
  scorer separates good, wrong, truncated and Markdown output and that the
  native path accepts and undoes a suggestion.
- When a language toolchain is absent the parse check is lexical only and is
  labelled `lexical`; a Python f-string interior is not checked lexically.
- The corpus is small (36 cases) and single-cursor; it does not measure
  multi-line edits, partial accepts, or large-project context.
- The live editor run covers three languages with end-of-line triggers; it
  does not exercise custom provider headers.
