require.r(exports);
require.d(exports, {
    ListMcpResourcesToolCall: ()=>ListMcpResourcesToolCall,
    ReadMcpResourceToolCall: ()=>ReadMcpResourceToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _mcp_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-88.js");
const ListMcpResourcesToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ListMcpResourcesToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: _mcp_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.ListMcpResourcesExecArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: _mcp_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.ListMcpResourcesExecResult
        }
    ]);
const ReadMcpResourceToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadMcpResourceToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: _mcp_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.ReadMcpResourceExecArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: _mcp_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.ReadMcpResourceExecResult
        }
    ]);
