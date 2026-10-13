# REA sprint follow-up: MCP and cloud boundary

13 October 2026. This pass analyzes the recovered transport owner for MCP-adjacent
AI services and records the local product boundary. Account identity, billing,
hosted cloud agents and their server implementations are explicitly excluded from
OpenVision's completion target at the user's direction.

## Scope decision

OpenVision's required scope is local profile, project work, user-configured model
URLs and keys, local rules, custom MCP servers, chat/Agent/edit behavior, and
supported editor services. The following original product areas are excluded and
must not reduce the OpenVision completion score:

- login, signup, account sessions and hosted account entitlement checks;
- billing, team administration and vendor-managed server configuration;
- hosted cloud agents/background composers and their unavailable backend;
- vendor telemetry or account-only feature flags, except where needed to keep the
  local process safe and explain an unsupported capability.

The exclusion applies to feature parity. It does not authorize deleting unrelated
local safety checks or silently sending user-configured provider credentials to a
vendor endpoint.

## Recovered transport evidence

REA analyzed three recovered modules from bundle 2:

- Parent Evidence: `ev_ed972694e3a964c7ba7baadd717d8829b1fc2d229f9983c2d7d92ae546669fce`.
- Summary Evidence: `ev_384921e1fd131b69e5b805ecbb032620f9dfe43ec4dde31f3b325e2e5bf5b9c0`.
- Root digest: `04b22ba8bde630bbc58b3173fd142eb3fdc0fd872d735f9383b3d899d854db0d`.
- Selected files: `module-12702.js`, `module-77213.js`, `module-63414.js`.
- Three files parsed, 76,435 bytes read and 10,842 AST nodes visited; 1,097
  inventoried files were outside the selected scope. Coverage is partial.

The recovered `AiConnectTransportHandler` maps methods to separate transports:

| Recovered method family | Static route | OpenVision disposition |
| --- | --- | --- |
| `AgentService.run`, chat streaming/tool methods and inference | agent-bidi or agentic-composer transports | Local Agent/provider routing is required; vendor hosted implementation is excluded. |
| `AiService.streamCpp` and cursor prediction | geo completion transport | Covered by the separate autocomplete contract; backend compatibility remains open. |
| `AiService.cppConfig` | completion-config transport | A local completion adapter must own its configuration and capability errors. |
| Repository, Git index and upload services | repository transport | Local project operations remain in scope; upload destinations need explicit investigation. |
| File sync and remote-agent presence | file-sync/remote presence transports | Local indexing and supported remote workflows remain separate stories. |
| Background composer secret methods | hosted background-composer proxy | Excluded cloud feature. Do not implement vendor secret management as a local requirement. |
| Dashboard secret creation/revocation | hosted dashboard proxy | Excluded account/cloud feature. Local provider keys use OpenVision secret storage. |

The module also declares server-sent-event and polling variants for several
bidirectional methods. That is evidence of client fallback shapes, not proof that
any endpoint is reachable or that a local custom server implements them.

## Remaining local MCP work

This REA pass does not close local MCP lifecycle stories. The recovered client
contains MCP UI, tool-call display and authentication terminology, but the selected
transport modules do not establish STDIO process ownership, HTTP reconnect,
approval, cancellation or cleanup behavior for a user-owned server. Those checks
remain in OV-302–OV-304 and must use disposable local fixtures.

Required acceptance evidence:

1. Start a disposable STDIO MCP server and verify discovery, one tool call,
   approval/denial, cancellation, timeout and owned-process cleanup.
2. Start a disposable HTTP MCP server and verify reconnect, malformed responses,
   auth failure and socket cleanup.
3. Restart OpenVision and confirm local MCP configuration persists without account
   login; keep credentials in secret storage and out of logs.
4. Exercise two OpenVision profiles and another installation to prove global MCP,
   skills, agents and plugins do not cross-contaminate. Keep project-local inputs
   such as `.cursor` compatibility paths intentional.

No live server or account endpoint was contacted during this investigation. The
transport map is derived static evidence and does not prove runtime behavior.
