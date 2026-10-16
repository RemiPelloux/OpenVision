require.r(exports);
require.d(exports, {
    ListMcpResourcesError: ()=>ListMcpResourcesError,
    ListMcpResourcesExecArgs: ()=>ListMcpResourcesExecArgs,
    ListMcpResourcesExecResult: ()=>ListMcpResourcesExecResult,
    ListMcpResourcesExecResult_McpResource: ()=>ListMcpResourcesExecResult_McpResource,
    ListMcpResourcesRejected: ()=>ListMcpResourcesRejected,
    ListMcpResourcesSuccess: ()=>ListMcpResourcesSuccess,
    McpApproved: ()=>McpApproved,
    McpArgs: ()=>McpArgs,
    McpError: ()=>McpError,
    McpImageContent: ()=>McpImageContent,
    McpPermissionDenied: ()=>McpPermissionDenied,
    McpRecovery: ()=>McpRecovery,
    McpRecovery_Outcome: ()=>McpRecovery_Outcome,
    McpRefreshPolicy: ()=>McpRefreshPolicy,
    McpRejected: ()=>McpRejected,
    McpResult: ()=>McpResult,
    McpServerNotFound: ()=>McpServerNotFound,
    McpStateError: ()=>McpStateError,
    McpStateExecArgs: ()=>McpStateExecArgs,
    McpStateExecResult: ()=>McpStateExecResult,
    McpStateRejected: ()=>McpStateRejected,
    McpStateServer: ()=>McpStateServer,
    McpStateSuccess: ()=>McpStateSuccess,
    McpSuccess: ()=>McpSuccess,
    McpSymbolicPathArgument: ()=>McpSymbolicPathArgument,
    McpTextContent: ()=>McpTextContent,
    McpToolNotFound: ()=>McpToolNotFound,
    McpToolResultContentItem: ()=>McpToolResultContentItem,
    ReadMcpResourceError: ()=>ReadMcpResourceError,
    ReadMcpResourceExecArgs: ()=>ReadMcpResourceExecArgs,
    ReadMcpResourceExecResult: ()=>ReadMcpResourceExecResult,
    ReadMcpResourceNotFound: ()=>ReadMcpResourceNotFound,
    ReadMcpResourceRejected: ()=>ReadMcpResourceRejected,
    ReadMcpResourceSuccess: ()=>ReadMcpResourceSuccess,
    SystemReminder: ()=>SystemReminder
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-72.js");
var _mcp_pb_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-89.js");
const McpRefreshPolicy = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.McpRefreshPolicy", [
    {
        no: 0,
        name: "MCP_REFRESH_POLICY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MCP_REFRESH_POLICY_FORCE_IF_MISSING",
        localName: "FORCE_IF_MISSING"
    },
    {
        no: 2,
        name: "MCP_REFRESH_POLICY_FORCE",
        localName: "FORCE"
    }
]);
const McpArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpArgs", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "args",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Value
            }
        },
        {
            no: 3,
            name: "tool_call_id",
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
            no: 6,
            name: "smart_mode_approval",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.SmartModeApproval,
            opt: true
        },
        {
            no: 7,
            name: "smart_mode_approval_only",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "skip_approval",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "server_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "symbolic_path_arguments",
            kind: "message",
            T: McpSymbolicPathArgument,
            repeated: true
        }
    ]);
const McpSymbolicPathArgument = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpSymbolicPathArgument", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "sha256",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "size_bytes",
            kind: "scalar",
            T: 3
        }
    ]);
const McpResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: McpSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: McpError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: McpRejected,
            oneof: "result"
        },
        {
            no: 4,
            name: "permission_denied",
            kind: "message",
            T: McpPermissionDenied,
            oneof: "result"
        },
        {
            no: 5,
            name: "tool_not_found",
            kind: "message",
            T: McpToolNotFound,
            oneof: "result"
        },
        {
            no: 6,
            name: "server_not_found",
            kind: "message",
            T: McpServerNotFound,
            oneof: "result"
        },
        {
            no: 7,
            name: "approved",
            kind: "message",
            T: McpApproved,
            oneof: "result"
        }
    ]);
const McpApproved = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpApproved", []);
const McpToolNotFound = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpToolNotFound", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "available_tools",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "recovery",
            kind: "message",
            T: McpRecovery,
            opt: true
        }
    ]);
const McpServerNotFound = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpServerNotFound", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "available_servers",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const McpTextContent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpTextContent", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "output_location",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.OutputLocation,
            opt: true
        }
    ]);
const McpImageContent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpImageContent", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "mime_type",
            kind: "scalar",
            T: 9
        }
    ]);
const McpToolResultContentItem = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpToolResultContentItem", ()=>[
        {
            no: 1,
            name: "text",
            kind: "message",
            T: McpTextContent,
            oneof: "content"
        },
        {
            no: 2,
            name: "image",
            kind: "message",
            T: McpImageContent,
            oneof: "content"
        }
    ]);
const SystemReminder = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SystemReminder", ()=>[
        {
            no: 1,
            name: "body",
            kind: "scalar",
            T: 9
        }
    ]);
const McpSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpSuccess", ()=>[
        {
            no: 1,
            name: "content",
            kind: "message",
            T: McpToolResultContentItem,
            repeated: true
        },
        {
            no: 2,
            name: "is_error",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "structured_content",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Struct
        },
        {
            no: 4,
            name: "system_reminders",
            kind: "message",
            T: SystemReminder,
            repeated: true
        }
    ]);
const McpError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "needs_auth",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 3,
            name: "recovery",
            kind: "message",
            T: McpRecovery,
            opt: true
        },
        {
            no: 4,
            name: "http_status",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const McpRecovery = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpRecovery", ()=>[
        {
            no: 1,
            name: "outcome",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(McpRecovery_Outcome)
        },
        {
            no: 2,
            name: "fresh_input_schema_json",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "available_tools",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const McpRecovery_Outcome = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.McpRecovery.Outcome", [
    {
        no: 0,
        name: "OUTCOME_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "OUTCOME_CHANGED",
        localName: "CHANGED"
    },
    {
        no: 2,
        name: "OUTCOME_REMOVED",
        localName: "REMOVED"
    },
    {
        no: 3,
        name: "OUTCOME_UNCHANGED",
        localName: "UNCHANGED"
    },
    {
        no: 4,
        name: "OUTCOME_REFRESH_FAILED",
        localName: "REFRESH_FAILED"
    }
]);
const McpRejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_readonly",
            kind: "scalar",
            T: 8
        }
    ]);
const McpPermissionDenied = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpPermissionDenied", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_readonly",
            kind: "scalar",
            T: 8
        }
    ]);
const McpStateExecArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpStateExecArgs", ()=>[
        {
            no: 1,
            name: "server_identifiers",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "kick_only",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "refresh_policy",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(McpRefreshPolicy),
            opt: true
        }
    ]);
const McpStateExecResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpStateExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: McpStateSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: McpStateError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: McpStateRejected,
            oneof: "result"
        }
    ]);
const McpStateServer = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpStateServer", ()=>[
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
            name: "plugin",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "marketplace",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "tools",
            kind: "message",
            T: _mcp_pb_js__WEBPACK_IMPORTED_MODULE_2__.McpToolDefinition,
            repeated: true
        },
        {
            no: 6,
            name: "instructions",
            kind: "message",
            T: _mcp_pb_js__WEBPACK_IMPORTED_MODULE_2__.McpInstructions,
            repeated: true
        },
        {
            no: 7,
            name: "status",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const McpStateSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpStateSuccess", ()=>[
        {
            no: 1,
            name: "servers",
            kind: "message",
            T: McpStateServer,
            repeated: true
        }
    ]);
const McpStateError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpStateError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const McpStateRejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpStateRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
const ListMcpResourcesExecArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ListMcpResourcesExecArgs", ()=>[
        {
            no: 1,
            name: "server",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ListMcpResourcesExecResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ListMcpResourcesExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ListMcpResourcesSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ListMcpResourcesError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: ListMcpResourcesRejected,
            oneof: "result"
        }
    ]);
const ListMcpResourcesExecResult_McpResource = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ListMcpResourcesExecResult.McpResource", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
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
            name: "mime_type",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "server",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "annotations",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ], {
    localName: "ListMcpResourcesExecResult_McpResource"
});
const ListMcpResourcesSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ListMcpResourcesSuccess", ()=>[
        {
            no: 1,
            name: "resources",
            kind: "message",
            T: ListMcpResourcesExecResult_McpResource,
            repeated: true
        }
    ]);
const ListMcpResourcesError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ListMcpResourcesError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const ListMcpResourcesRejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ListMcpResourcesRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
const ReadMcpResourceExecArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadMcpResourceExecArgs", ()=>[
        {
            no: 1,
            name: "server",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "download_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "smart_mode_approval",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.SmartModeApproval,
            opt: true
        }
    ]);
const ReadMcpResourceExecResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadMcpResourceExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ReadMcpResourceSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ReadMcpResourceError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: ReadMcpResourceRejected,
            oneof: "result"
        },
        {
            no: 4,
            name: "not_found",
            kind: "message",
            T: ReadMcpResourceNotFound,
            oneof: "result"
        }
    ]);
const ReadMcpResourceSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadMcpResourceSuccess", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
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
            name: "mime_type",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "text",
            kind: "scalar",
            T: 9,
            oneof: "content"
        },
        {
            no: 6,
            name: "blob",
            kind: "scalar",
            T: 12,
            oneof: "content"
        },
        {
            no: 7,
            name: "annotations",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 8,
            name: "download_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "output_location",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.OutputLocation,
            opt: true
        },
        {
            no: 10,
            name: "meta_json",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ReadMcpResourceError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadMcpResourceError", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const ReadMcpResourceRejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadMcpResourceRejected", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
const ReadMcpResourceNotFound = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadMcpResourceNotFound", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9
        }
    ]);
