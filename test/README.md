# Control-plane tests

This folder contains the optional local control plane's configuration, MCP
transport and HTTP integration tests. `fixtures/` contains declared test servers
and workloads; `helpers/` contains test lifecycle helpers.

Run `npm run test:mcp` from the repository root. Desktop implementation tests
remain beside their modules in [desktop/](../desktop/README.md); its native
verifiers exercise a prepared application separately.

Controlled fixtures verify the behavior they exercise. They do not establish
compatibility with a real AI provider, native platform or complete desktop
workflow. See [release verification](../docs/verification/README.md) for actual
executed coverage and [source ownership](../src/README.md) for the tested modules.
