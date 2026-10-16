require.r(exports);
require.d(exports, {
    ReportBugArgs: ()=>ReportBugArgs,
    ReportBugError: ()=>ReportBugError,
    ReportBugResult: ()=>ReportBugResult,
    ReportBugSuccess: ()=>ReportBugSuccess,
    ReportBugToolCall: ()=>ReportBugToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const ReportBugArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReportBugArgs", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "end_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "severity",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "category",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "rationale",
            kind: "scalar",
            T: 9
        }
    ]);
const ReportBugSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReportBugSuccess", ()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        }
    ]);
const ReportBugError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReportBugError", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]);
const ReportBugResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReportBugResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ReportBugSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ReportBugError,
            oneof: "result"
        }
    ]);
const ReportBugToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReportBugToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ReportBugArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ReportBugResult
        }
    ]);
