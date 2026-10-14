# Contributing to OpenVision

OpenVision is a development preview. Start with the [feature roadmap](docs/roadmap.md)
and [acceptance ledger](docs/completion-sprints.md), then describe the user-visible
problem, intended scope and evidence needed to close it.

Use Node.js 24.18.0 and `npm ci --prefix tooling`. Native runtime checks require
your own compatible local inputs. Keep durable edits in `desktop/`, `assets/`
and documentation; generated `source/` files are not contribution artifacts.

Run the checks relevant to your change:

```sh
npm run check:desktop
npm run test:portable
npm run test:desktop
npm run build:desktop
```

Run the relevant native verifier for behavioral changes. State whether evidence
comes from source inspection, controlled HTTP fixtures, the actual desktop or a
live AI provider. Passing discovery is not proof of model capabilities. Do not
increase acceptance scores until the whole story's required evidence is present.

Never commit API keys, user profiles, recovered application bundles, executable
hosts, dependencies, logs or backups. Preserve source provenance, normal profiles
and uncommitted user work. Do not enable GitHub Actions or add hosted CI costs.

Use Conventional Commit subjects. Keep pull requests focused and include exact
checks run, limitations and steps to reproduce. A human owner must review and
approve any public contribution; automation cannot attest to that review.
Review [licensing scope](NOTICE.md) before submitting third-party material.
