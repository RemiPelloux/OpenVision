require.r(exports);
require.d(exports, {
    SendFinalSummaryArgs: ()=>SendFinalSummaryArgs,
    SendFinalSummaryError: ()=>SendFinalSummaryError,
    SendFinalSummaryResult: ()=>SendFinalSummaryResult,
    SendFinalSummarySuccess: ()=>SendFinalSummarySuccess,
    SendFinalSummaryToolCall: ()=>SendFinalSummaryToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const SendFinalSummaryArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SendFinalSummaryArgs", ()=>[
        {
            no: 1,
            name: "final_summary",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SendFinalSummarySuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SendFinalSummarySuccess", ()=>[
        {
            no: 1,
            name: "final_summary",
            kind: "scalar",
            T: 9
        }
    ]);
const SendFinalSummaryError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SendFinalSummaryError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const SendFinalSummaryResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SendFinalSummaryResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: SendFinalSummarySuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: SendFinalSummaryError,
            oneof: "result"
        }
    ]);
const SendFinalSummaryToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SendFinalSummaryToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: SendFinalSummaryArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: SendFinalSummaryResult
        }
    ]);
