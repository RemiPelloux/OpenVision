# Shared development tooling

This folder owns locked development dependencies and helpers used by build,
formatting, browser verification and resource benchmarks. Use the repository's
pinned Node.js version, then run `npm ci --prefix tooling` from the root.
Installed `node_modules/` stays ignored.

| Entry point | Responsibility |
| --- | --- |
| `package.json` and `package-lock.json` | Dependency declarations and exact dependency versions |
| `dependencies.mjs` | Shared parser, HTML and image dependency exports |
| `formatter.mjs` | Formatting helpers |
| `browser.mjs` | Browser tooling used by verification |
| `benchmark-mcp-*.mjs` | Local MCP response-resource measurements |

Benchmark outputs are evidence for their declared workload. They do not replace
whole-application measurements or native desktop acceptance. See the
[performance index](../docs/performance/README.md) and
[contribution guide](../CONTRIBUTING.md).
