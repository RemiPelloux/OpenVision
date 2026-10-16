# Contributing to OpenVision

OpenVision is a development preview. Start with the [feature roadmap](docs/planning/roadmap.md)
and [acceptance ledger](docs/planning/completion-sprints.md), then describe the user-visible
problem, intended scope and evidence needed to close it.

Use Node.js 24.18.0 and `npm ci --prefix tooling`. Native runtime checks require
your own compatible local inputs. Keep durable edits in `desktop/`, `assets/`
and documentation; generated `source/` files are not contribution artifacts.
See the [repository layout](docs/engineering/repository-layout.md) for directory ownership.

Run the checks relevant to your change:

```sh
npm run check:desktop
npm run test:portable
npm run test:desktop
npm run build:desktop
npm run docs:check
```

Run the relevant native verifier for behavioral changes. State whether evidence
comes from source inspection, controlled HTTP fixtures, the actual desktop or a
live AI provider. Passing discovery is not proof of model capabilities. Do not
increase acceptance scores until the whole story's required evidence is present.

Never commit API keys, user profiles, local runtime binaries, installed
dependencies, logs or backups. New recovered material requires reviewed provenance,
distribution authority and an explicit publication scope; preserve the existing
[`curs_source` archive](curs_source/README.md) and its versioned manifests. Preserve
normal profiles and uncommitted user work. Do not enable GitHub Actions or add
hosted CI costs.

Use Conventional Commit subjects. Keep pull requests focused and include exact
checks run, limitations and steps to reproduce. A human owner must review and
approve any public contribution; automation cannot attest to that review.
Review [licensing scope](NOTICE.md) before submitting third-party material.
