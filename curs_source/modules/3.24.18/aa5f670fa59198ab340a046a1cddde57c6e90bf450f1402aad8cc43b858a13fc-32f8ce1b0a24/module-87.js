require.r(exports);
require.d(exports, {
    McpToolCall: ()=>McpToolCall,
    McpToolError: ()=>McpToolError,
    McpToolResult: ()=>McpToolResult
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _mcp_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-88.js");
const McpToolError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "read_tool_def_reminder",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "system_reminders",
            kind: "message",
            T: _mcp_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.SystemReminder,
            repeated: true
        }
    ]);
const McpToolResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: _mcp_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.McpSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: McpToolError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: _mcp_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.McpRejected,
            oneof: "result"
        },
        {
            no: 4,
            name: "permission_denied",
            kind: "message",
            T: _mcp_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.McpPermissionDenied,
            oneof: "result"
        }
    ]);
const McpToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: _mcp_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.McpArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: McpToolResult
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
