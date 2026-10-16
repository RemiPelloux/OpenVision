require.r(exports);
require.d(exports, {
    PiWriteToolArgs: ()=>PiWriteToolArgs,
    PiWriteToolCall: ()=>PiWriteToolCall,
    PiWriteToolError: ()=>PiWriteToolError,
    PiWriteToolRejected: ()=>PiWriteToolRejected,
    PiWriteToolResult: ()=>PiWriteToolResult,
    PiWriteToolSuccess: ()=>PiWriteToolSuccess
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const PiWriteToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiWriteToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: PiWriteToolArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: PiWriteToolResult
        }
    ]);
const PiWriteToolArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiWriteToolArgs", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]);
const PiWriteToolResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiWriteToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PiWriteToolSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: PiWriteToolError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: PiWriteToolRejected,
            oneof: "result"
        }
    ]);
const PiWriteToolSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiWriteToolSuccess", ()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        }
    ]);
const PiWriteToolError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiWriteToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const PiWriteToolRejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiWriteToolRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
