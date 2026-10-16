# Optional local control plane

These modules implement the optional local HTTP control plane. The desktop
application has its own launch and provider flows under [desktop/](../desktop/README.md).

| Module | Responsibility |
| --- | --- |
| `server.mjs` | Local HTTP endpoints and request routing |
| `config.mjs` | Configuration admission, selection and durable mutations |
| `mcp.mjs` | MCP connection/tool lifecycle and resource ownership |
| `mcp-http-response.mjs` | HTTP response consumption and bounds |
| `mcp-stdio-response.mjs` | STDIO response handling and bounds |
| `rea.mjs` | REA command invocation and retained results |

Run `npm run control-plane` from the repository root to start it. It binds to
`127.0.0.1:4317` by default. Shareable examples live in [config/](../config/);
machine-specific `config/servers.json` stays ignored.

Run `npm run check` for syntax and `npm run test:mcp` for the MCP/configuration
integration suite. See [performance and lifecycle evidence](../docs/performance/README.md)
and [test organization](../test/README.md).
