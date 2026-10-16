import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { To } from "./struct_pb.js";
import { h } from "./tslib.es6.js";
var lP, hq, dP, gq, fq, _q;
export { _q, dP, fq, gq, hq, lP };
var __wakaru_Eg_initialized = false;
export function Eg() {
if (__wakaru_Eg_initialized) return;
__wakaru_Eg_initialized = true;
"use strict";
h(), F(), lP = c.makeMessageType("agent.v1.McpToolDefinition", ()=>[
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
            T: To
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
    ]), hq = c.makeMessageType("agent.v1.McpInstructions", ()=>[
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
    ]), dP = c.makeMessageType("agent.v1.McpDescriptor", ()=>[
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
            T: gq,
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
    ]), gq = c.makeMessageType("agent.v1.McpToolDescriptor", ()=>[
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
            T: To,
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
    ]), fq = c.makeMessageType("agent.v1.McpFileSystemOptions", ()=>[
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
            T: dP,
            repeated: !0
        }
    ]), _q = c.makeMessageType("agent.v1.McpMetaToolOptions", ()=>[
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
            T: dP,
            repeated: !0
        }
    ]);

}
