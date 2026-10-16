require.r(exports);
require.d(exports, {
    McpAuthArgs: ()=>McpAuthArgs,
    McpAuthError: ()=>McpAuthError,
    McpAuthRejected: ()=>McpAuthRejected,
    McpAuthRequestQuery: ()=>McpAuthRequestQuery,
    McpAuthRequestResponse: ()=>McpAuthRequestResponse,
    McpAuthRequestResponse_Approved: ()=>McpAuthRequestResponse_Approved,
    McpAuthRequestResponse_Rejected: ()=>McpAuthRequestResponse_Rejected,
    McpAuthResult: ()=>McpAuthResult,
    McpAuthSuccess: ()=>McpAuthSuccess,
    McpAuthToolCall: ()=>McpAuthToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const McpAuthArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpAuthArgs", ()=>[
        {
            no: 1,
            name: "server_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
const McpAuthResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpAuthResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: McpAuthSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: McpAuthError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: McpAuthRejected,
            oneof: "result"
        }
    ]);
const McpAuthSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpAuthSuccess", ()=>[
        {
            no: 1,
            name: "server_identifier",
            kind: "scalar",
            T: 9
        }
    ]);
const McpAuthError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpAuthError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const McpAuthRejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpAuthRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
const McpAuthToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpAuthToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: McpAuthArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: McpAuthResult
        }
    ]);
const McpAuthRequestQuery = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpAuthRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: McpAuthArgs
        }
    ]);
const McpAuthRequestResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpAuthRequestResponse", ()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: McpAuthRequestResponse_Approved,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: McpAuthRequestResponse_Rejected,
            oneof: "result"
        }
    ]);
const McpAuthRequestResponse_Approved = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpAuthRequestResponse.Approved", [], {
    localName: "McpAuthRequestResponse_Approved"
});
const McpAuthRequestResponse_Rejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpAuthRequestResponse.Rejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "McpAuthRequestResponse_Rejected"
});
