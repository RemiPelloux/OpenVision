# Live Codex Easy providers on Linux

Date: **16 October 2026**. **Linux x64 only**: Omarchy/Hyprland on Wayland,
with the gnome-keyring Secret Service. Source build of the 3.21.13 runtime
input, parent commit `c20b9e58` plus this change. Windows and macOS were not
run for this report.

Every request listed below is a **real, authenticated request to Codex Easy**
(`https://codex-easy.ai/v1`). Each provider used its own saved key. The one
exception is the deliberate invalid probe key that `--retry-auth` uses for its
first request. **No successful inference took place.** All three Codex Easy
accounts answered every request with HTTP 403
`{"code":"INSUFFICIENT_BALANCE","message":"Insufficient account balance"}`.
That includes model discovery. The success-path clauses are therefore
**BLOCKED (insufficient balance)**; they are not failed and not passed.

No acceptance story is promoted. OV-102, OV-103 and OV-204 stay **Partial**.
The ledger stays at **6/42 Verified (14.29%)**.

## Provider setup

The three providers were saved into this worktree's `data/local` profile
through the Models settings UI, driven by Playwright:

| Provider | Models added | Discovery |
| --- | --- | --- |
| Codex Easy DeepSeek | `deepseek-flash`, `deepseek-v4-flash`, `deepseek-v4-flash-vision-exp`, `deepseek-v4-pro` | HTTP 403 |
| Codex Easy GPT | `gpt-6-astra`, `gpt-5.6-sol`, `gpt-5.6-terra`, `gpt-5.6-luna`, `gpt-6-luna`, `gpt-6-sol`, `gpt-6.1-sol` | HTTP 403 |
| Codex Easy Grok | `grok-4.7`, `grok-4.7-build` | HTTP 403 |

**How the keys were entered.** The setup script read each key in-process and
typed it into the password field of **Add Provider**. No key went through
argv, stdout or a file.

**Models and capabilities.** Discovery failed, so the models were added with
**Add Model** (ID and display name only). The capabilities recorded by the
user's other agent (reasoning, image input and context window) **could not be
saved**. OpenVision takes capabilities only from discovery and has no manual
capability field. The model rows show `Compatibility hints · Unverified`.
`grok-4.7-build` shows `No reasoning levels declared`.

**Possible feature:** an importer for an existing agent's provider and model
configuration, which would also carry capabilities. None was built here.

**Persistence and storage.** After a full restart, all three providers and 13
models were restored with every model enabled.

- Each provider has a `secret://openvision.provider.<id>` record with the
  `v11` prefix, meaning it is encrypted through the Secret Service.
- A raw-byte scan for each of the three keys (UTF-8 and UTF-16LE) covered
  **252 files** under `data/` and `logs/`. It found **0 plaintext hits**.
- The settings UI never displayed a key.
- `verify:providers:live` decrypted each credential in an owned disposable
  profile (`credentialAvailable: true`). That confirms on Linux that the
  Secret Service key is not bound to a single profile.

## Runs

The `logs/` paths are private, ignored run artifacts. "Requests" counts
upstream Codex Easy requests only. No response exposed token usage, and no
tokens were billed, because every request was rejected before inference.

| Run | Command / model | Requests | Result |
| --- | --- | --- | --- |
| direct | Discovery and one minimal request per provider (`deepseek-v4-flash`, `gpt-6.1-sol` Responses, `grok-4.7`) | 3 GET + 3 POST | All 403 `INSUFFICIENT_BALANCE` (request IDs `5bb259ed…`, `9c59179f…`, `27162921…`) |
| UI setup | Save providers; restart; discovery check | 9–10 GET | All 403 |
| `WBp0TO` | `verify:providers:live --model gpt-6.1-sol` | 1 | Fails at discovery, 403 |
| `yopMES` | `verify:providers:live --model deepseek-v4-flash` | 1 | Fails at discovery, 403 |
| `3s6WBd` | `verify:providers:live --model grok-4.7` | 1 | Fails at discovery, 403 |
| `RVuVin` | `verify:providers:live --model gpt-6.1-sol --mode tools` | 1 | Fails at discovery, 403; tools not reached |
| `RifUVE` | `verify:agent:live --model deepseek-v4-flash --retry-auth` (before the guidance fix) | 2 | 401 → Try again → 403; run fails |
| `Q5dcQ5` | `verify:agent:live --model gpt-6.1-sol --failure-restart` (new) | 2 | 401 → restart → restored → Try again → 403; run fails |
| `4w0zHr` | `verify:agent:live --model deepseek-v4-flash --retry-auth` (after the guidance fix) | 2 | 401 → Try again → 403; run fails |
| — | `--edit` with `gpt-6.1-sol` and with `deepseek-v4-flash` | 0 | **BLOCKED (insufficient balance)**; not run |
| — | `--stop` with `grok-4.7` | 0 | **BLOCKED (insufficient balance)**; not run |
| — | `--history-failure` with `gpt-6.1-sol` | 0 | **BLOCKED (insufficient balance)**; needs a successful Read first; not run |

Total: about **26 upstream requests**: 9 inference POSTs (all rejected) and
16–17 discovery GETs. The budget was 40.

Every owned launcher exited 0. Helper and verifier identities for the Agent
runs:

| Item | SHA-256 |
| --- | --- |
| Agent exec | `ec5f9aca0315c293d94851db24d4bda7ca2d5ba1709be8551d53cab445a5d1aa` |
| Workbench | `c03f9fac10b356a787fa7c8303b9c021b47303d74266e29df14d34f6d2a2ebb8` |
| Relay | `d6e39376ac8276d3f569e66d387c21b62a634eaa2c0f48772913ce9767ebdd66` |
| Exec error helper (`4w0zHr`) | `c6c0e1d0754d31be5e66ea681d9e0edac1a32b75361034cd9ba2a09f26de80b3` |

## What the failure runs prove

**Real 401, then native retry** (`RifUVE`, `4w0zHr`):

- The upstream `INVALID_API_KEY` 401 was shown with **Try again**.
- No request was sent automatically during the 2.5-second observation window.
- After the saved key was restored, **Try again sent exactly one request**.
  That request kept the same message roles (`system, user, user`) and one
  copy of the prompt, with no empty assistant message.

**Live failure persistence** (`Q5dcQ5`, the live check of `c20b9e58`). After a
real 401 the app was closed and relaunched. It then showed:

- the same chat;
- the provider error;
- **Try again**;
- **0 requests** sent during the restore.

Clicking Try again with the saved key sent **exactly one request**, with the
same roles and one copy of the prompt.

**Real 403 `INSUFFICIENT_BALANCE`** (new failure class). The status, the
provider's message and **Try again** were visible. There were **0 automatic
requests** in the 2.5-second window.

**Not proved:**

- any successful live stream;
- a Read continuation, editing, Stop, history or Fork;
- retry ending in success;
- timeout;
- capability handling;
- Windows or macOS behaviour.

## Defects found and fixed

1. **The Agent gave misleading guidance for an exhausted balance.**
   - Before the fix (`RifUVE`), the error said: "Forbidden (HTTP 403): your API
     key/token was rejected or lacks access — refresh it and try again." The
     key had been accepted. OpenAI-style 429 `insufficient_quota` errors were
     also called rate limiting.
   - `desktop/provider-error-policy.js` now looks at the provider's own code
     and text. For 402, or for 403/429 that name balance, quota or billing, it
     says: "The provider reports that this account has no remaining balance or
     quota. Add credit or check your plan with the provider, then choose Try
     again." It also drops the recovered key-refresh sentence.
   - Other 401/403/429 handling is unchanged. The fix was verified natively in
     `4w0zHr`.
2. **Model discovery hid the provider's reason.** It showed only "Model
   discovery failed (HTTP 403). Check the URL, key and provider access."
   - `desktop/model-discovery.mjs` now adds `Provider message: <text>`. This
     happens only for a complete JSON error of at most 4 KiB that arrives
     within 500 ms.
   - The message has control characters removed, the key and header values
     redacted, and is capped at 200 characters. Other bodies keep the generic
     message.
   - Observed natively: "… Provider message: Insufficient account balance".
3. **The verifier recorded the wrong platform.** `verify-live-agent.mjs`
   wrote "Windows native …" in its scope on every platform. It now records
   the actual platform.

## Verifier extensions

- **`--failure-restart`.** Implies `--retry-auth`. It restarts the app
  between the real failure and the retry. It requires the same chat, the
  error, Try again and zero requests on restore, then exactly one request
  after Try again. Implemented in `desktop/verify-live-retry.mjs` and
  `desktop/verify-live-agent.mjs`.
- **Real failure body to the app.** In `--retry-auth` mode, the relay now
  sends the real, redacted upstream failure status and body to the app
  instead of a synthetic 502. The probe still fails.
- **Failure UI record.** The verifier records how the app presents that
  failure: `nativeProviderFailure` with status, message, Try again and the
  number of automatic requests.

No assertion was weakened.

## Observations not changed

- Each launch whose providers never completed discovery retries capability
  discovery at startup. That is one GET per provider per launch.
- No provider becomes the default connection while discovery fails. Agent
  still routes each model to its own provider.

## Checks

```sh
npm run test:provider-errors     # 49/49
npm run test:agent-retry         # 28/28
npm run test:model-discovery     # 37/37
node --test desktop/live-agent-relay.test.mjs   # 19/19
npm run build:desktop            # 239 scripts, 124 manifests, 30 main-process modules
```

`npm run test:provider-probe` fails 1 of 10 cases, in
`live-completion-probe.test.mjs`. That file and its code are untouched by
this change, and the failure was not investigated here.

## To finish after a balance top-up

```sh
npm run verify:providers:live -- --live --model gpt-6.1-sol
npm run verify:providers:live -- --live --model deepseek-v4-flash
npm run verify:providers:live -- --live --model grok-4.7
npm run verify:providers:live -- --live --model gpt-6.1-sol --mode tools
npm run verify:agent:live -- --live --model gpt-6.1-sol --edit
npm run verify:agent:live -- --live --model deepseek-v4-flash --edit
npm run verify:agent:live -- --live --model grok-4.7 --stop
npm run verify:agent:live -- --live --model deepseek-v4-flash --retry-auth
npm run verify:agent:live -- --live --model gpt-6.1-sol --history-failure
npm run verify:agent:live -- --live --model gpt-6.1-sol --failure-restart
```
