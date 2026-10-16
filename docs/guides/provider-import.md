# Import providers from pi and set model capabilities

OpenVision can import providers and models from an existing
[pi](https://github.com/badlogic/pi-mono) coding-agent configuration. You can
also enter a model's capabilities yourself when discovery fails or reports
them wrongly. Evidence: [provider import on Linux](../verification/provider-import-linux.md).

## Import from pi

The import only runs when you start it, and it never changes your pi files.
OpenVision reads two files from `$PI_CODING_AGENT_DIR`, or from `~/.pi/agent`
when that variable is not set:

- `models.json`: providers (`baseUrl`, `api`) and their models (`reasoning`,
  `thinkingLevelMap`, `input`, `contextWindow`, `maxTokens`).
- `auth.json`: one entry per provider. Only `{"type": "api_key", "key": ...}`
  entries are used.

### From the Models settings

1. Open **Settings → Models** and choose **Import from pi…**.
2. Review the preview. It lists every provider with its URL, its API type, whether
   a key was found, and each model with the capabilities it will receive.
3. New providers are selected. Providers you imported before, and providers
   whose name matches one you created yourself, are listed but **not selected**.
   Tick **Update** only if you want to change them.
4. Choose **Import**.

Keys never appear in the preview or in the settings page. Each key is written
only to OpenVision's encrypted credential storage (the Secret Service on Linux).

### From the command line

```sh
npm run import:settings -- --pi                      # preview, no changes
npm run import:settings -- --pi --apply              # queue the new providers
npm run import:settings -- --pi --apply --providers ce-gpt --replace ce-grok
```

Options: `--pi-dir DIR` reads another pi directory, and `--target-user-data DIR`
picks the OpenVision profile. The default profile is `data/local`.

The command line cannot reach the app's encrypted storage. So `--apply` only
**queues** your selection, with no keys in it. The next time you open
**Settings → Models**, OpenVision shows the queued import, already selected.
Choose **Import** there to store the keys encrypted, or **Discard queued
import**. If the pi files changed after the command-line preview, OpenVision
tells you and shows the current files instead.

### How pi settings are mapped

| pi | OpenVision |
| --- | --- |
| `openai-completions` | OpenAI-compatible provider |
| `openai-responses` | OpenAI-compatible provider. OpenVision chooses the request format itself. |
| `anthropic-messages` and any other API type | **Not imported**, and the preview says why |
| `reasoning: false` | No reasoning levels |
| `reasoning: true` with `thinkingLevelMap` | One level for each mapped value. When two levels send the same value, OpenVision keeps one of them. |
| `reasoning: true` without a map | Low, Medium and High |
| `input` contains `image` | Image input on; otherwise text only |
| `contextWindow`, `maxTokens` | Context window, max output tokens |
| `compat`, `cost`, custom `headers`, `apiKey` in `models.json` | Not imported. The preview names what was skipped. |
| `auth.json` OAuth or `!command` keys | Not imported. The provider is created without a key. |

Running the import again does not create duplicates. It shows your providers
as **Already imported**. If you choose **Update**, OpenVision adds any missing
models, fills in only the capabilities you have not set yourself, and replaces
the saved key. Your model names, enabled state and your own capability values
stay as they are.

## Set capabilities by hand

Open **Edit** on a model row. Under **Capabilities · User-specified** you can set:

- **Reasoning**: *Use discovered*, *Not supported*, or *Supported with these
  levels*. Enter the levels as a comma-separated list, such as `low, medium, high`.
  To send a value that differs from the name, write `name=value`.
- **Image input**: *Use discovered*, *Text only*, or *Text and images*.
- **Context window** and **Max output tokens**: leave a field empty to keep
  the discovered value.

Any field you set is labelled **User-specified** on the model row, in the
model menu and in its tooltip. Fields you leave alone keep the values the
provider reports.

What your settings change:

- **Reasoning menu.** Agent and subagent requests also reject any level you
  have not allowed.
- **Image input.** When a model is **text only**, either from discovery or
  set by you, an Agent message with an image is stopped before anything is
  sent. You see **Image input is off for this model**. Remove the image, pick
  another model, or allow images for this model. When image support is
  unknown, the provider still decides.
- **Context window and max output tokens.** These are shown in the model
  tooltip. Agent requests do not use them yet.

[User guides](README.md) · [Documentation index](../README.md)
