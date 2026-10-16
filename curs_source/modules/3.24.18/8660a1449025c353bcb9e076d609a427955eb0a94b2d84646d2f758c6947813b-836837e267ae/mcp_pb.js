import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { nz } from "./struct_pb.js";
import { E } from "./tslib.es6.js";
var B$e, rSr, Kti, Yti, sSr, mmn, oSr;
export { B$e, Kti, Yti, mmn, oSr, rSr, sSr };
var __wakaru_Q_t_initialized = false;
export function Q_t() {
if (__wakaru_Q_t_initialized) return;
__wakaru_Q_t_initialized = true;
"use strict";
E(), hr(), B$e = x.makeMessageType("agent.v1.McpToolDefinition", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "provider_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "input_schema",
            kind: "message",
            T: nz
        },
        {
            no: 6,
            name: "input_schema_json",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "output_schema_json",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "annotations_json",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "meta_json",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), rSr = x.makeMessageType("agent.v1.McpTools", ()=>[
        {
            no: 1,
            name: "mcp_tools",
            kind: "message",
            T: B$e,
            repeated: !0
        }
    ]), Kti = x.makeMessageType("agent.v1.McpInstructions", ()=>[
        {
            no: 1,
            name: "server_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "instructions",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "server_identifier",
            kind: "scalar",
            T: 9
        }
    ]), Yti = x.makeMessageType("agent.v1.McpDescriptor", ()=>[
        {
            no: 1,
            name: "server_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "server_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "folder_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "server_use_instructions",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "tools",
            kind: "message",
            T: sSr,
            repeated: !0
        },
        {
            no: 7,
            name: "plugin",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "marketplace",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "plugin_db_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "marketplace_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), sSr = x.makeMessageType("agent.v1.McpToolDescriptor", ()=>[
        {
            no: 1,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "definition_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "input_schema",
            kind: "message",
            T: nz,
            opt: !0
        },
        {
            no: 5,
            name: "input_schema_json",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "annotations_json",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), mmn = x.makeMessageType("agent.v1.McpFileSystemOptions", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "workspace_project_dir",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "mcp_descriptors",
            kind: "message",
            T: Yti,
            repeated: !0
        }
    ]), oSr = x.makeMessageType("agent.v1.McpMetaToolOptions", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "mcp_descriptors",
            kind: "message",
            T: Yti,
            repeated: !0
        }
    ]);

}
