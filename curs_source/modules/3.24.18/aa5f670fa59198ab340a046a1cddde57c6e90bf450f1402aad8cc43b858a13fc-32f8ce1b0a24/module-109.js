require.r(exports);
require.d(exports, {
    StartGrindExecutionArgs: ()=>StartGrindExecutionArgs,
    StartGrindExecutionError: ()=>StartGrindExecutionError,
    StartGrindExecutionResult: ()=>StartGrindExecutionResult,
    StartGrindExecutionSuccess: ()=>StartGrindExecutionSuccess,
    StartGrindExecutionToolCall: ()=>StartGrindExecutionToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const StartGrindExecutionArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.StartGrindExecutionArgs", ()=>[
        {
            no: 1,
            name: "explanation",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
const StartGrindExecutionResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.StartGrindExecutionResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: StartGrindExecutionSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: StartGrindExecutionError,
            oneof: "result"
        }
    ]);
const StartGrindExecutionSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.StartGrindExecutionSuccess", []);
const StartGrindExecutionError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.StartGrindExecutionError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const StartGrindExecutionToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.StartGrindExecutionToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: StartGrindExecutionArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: StartGrindExecutionResult
        }
    ]);
