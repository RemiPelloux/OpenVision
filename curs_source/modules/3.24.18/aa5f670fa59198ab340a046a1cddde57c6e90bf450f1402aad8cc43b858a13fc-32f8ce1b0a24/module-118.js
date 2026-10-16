require.r(exports);
require.d(exports, {
    GetMcpToolsAgentResult: ()=>GetMcpToolsAgentResult,
    GetMcpToolsArgs: ()=>GetMcpToolsArgs,
    GetMcpToolsError: ()=>GetMcpToolsError,
    GetMcpToolsSuccess: ()=>GetMcpToolsSuccess,
    GetMcpToolsToolCall: ()=>GetMcpToolsToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const GetMcpToolsArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GetMcpToolsArgs", ()=>[
        {
            no: 1,
            name: "server",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "tool_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "pattern",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
const GetMcpToolsAgentResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GetMcpToolsAgentResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: GetMcpToolsSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: GetMcpToolsError,
            oneof: "result"
        }
    ]);
const GetMcpToolsSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GetMcpToolsSuccess", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "output_file_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const GetMcpToolsError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GetMcpToolsError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const GetMcpToolsToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GetMcpToolsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: GetMcpToolsArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: GetMcpToolsAgentResult
        }
    ]);
