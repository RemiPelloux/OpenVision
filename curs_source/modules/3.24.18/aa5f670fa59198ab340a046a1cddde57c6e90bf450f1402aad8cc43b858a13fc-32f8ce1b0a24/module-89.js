require.r(exports);
require.d(exports, {
    McpDescriptor: ()=>McpDescriptor,
    McpFileSystemOptions: ()=>McpFileSystemOptions,
    McpInstructions: ()=>McpInstructions,
    McpMetaToolOptions: ()=>McpMetaToolOptions,
    McpToolDefinition: ()=>McpToolDefinition,
    McpToolDescriptor: ()=>McpToolDescriptor,
    McpTools: ()=>McpTools
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const McpToolDefinition = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpToolDefinition", ()=>[
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
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Value
        },
        {
            no: 6,
            name: "input_schema_json",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "output_schema_json",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "annotations_json",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "meta_json",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const McpTools = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpTools", ()=>[
        {
            no: 1,
            name: "mcp_tools",
            kind: "message",
            T: McpToolDefinition,
            repeated: true
        }
    ]);
const McpInstructions = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpInstructions", ()=>[
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
    ]);
const McpDescriptor = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpDescriptor", ()=>[
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
            opt: true
        },
        {
            no: 4,
            name: "server_use_instructions",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "tools",
            kind: "message",
            T: McpToolDescriptor,
            repeated: true
        },
        {
            no: 7,
            name: "plugin",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "marketplace",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "plugin_db_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "marketplace_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const McpToolDescriptor = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpToolDescriptor", ()=>[
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
            opt: true
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "input_schema",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Value,
            opt: true
        },
        {
            no: 5,
            name: "input_schema_json",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "annotations_json",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const McpFileSystemOptions = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpFileSystemOptions", ()=>[
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
            T: McpDescriptor,
            repeated: true
        }
    ]);
const McpMetaToolOptions = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpMetaToolOptions", ()=>[
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
            T: McpDescriptor,
            repeated: true
        }
    ]);
