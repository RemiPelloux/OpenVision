import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { EW } from "./struct_pb.js";
import { x } from "./tslib.es6.js";
var AMe, y4i, iDn, rDn, S4i, V7t, k4i;
export { AMe, S4i, V7t, iDn, k4i, rDn, y4i };
var __wakaru_FQe_initialized = false;
export function FQe() {
if (__wakaru_FQe_initialized) return;
__wakaru_FQe_initialized = true;
"use strict";
x(), bi(), AMe = k.makeMessageType("agent.v1.McpToolDefinition", ()=>[
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
            T: EW
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
    ]), y4i = k.makeMessageType("agent.v1.McpTools", ()=>[
        {
            no: 1,
            name: "mcp_tools",
            kind: "message",
            T: AMe,
            repeated: !0
        }
    ]), iDn = k.makeMessageType("agent.v1.McpInstructions", ()=>[
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
    ]), rDn = k.makeMessageType("agent.v1.McpDescriptor", ()=>[
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
            T: S4i,
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
    ]), S4i = k.makeMessageType("agent.v1.McpToolDescriptor", ()=>[
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
            T: EW,
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
    ]), V7t = k.makeMessageType("agent.v1.McpFileSystemOptions", ()=>[
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
            T: rDn,
            repeated: !0
        }
    ]), k4i = k.makeMessageType("agent.v1.McpMetaToolOptions", ()=>[
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
            T: rDn,
            repeated: !0
        }
    ]);

}
