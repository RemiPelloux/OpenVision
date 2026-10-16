require.r(exports);
require.d(exports, {
    CanvasDiagnosticsArgs: ()=>CanvasDiagnosticsArgs,
    CanvasDiagnosticsError: ()=>CanvasDiagnosticsError,
    CanvasDiagnosticsResult: ()=>CanvasDiagnosticsResult,
    CanvasDiagnosticsSuccess: ()=>CanvasDiagnosticsSuccess
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _diagnostics_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-86.js");
const CanvasDiagnosticsArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CanvasDiagnosticsArgs", ()=>[
        {
            no: 1,
            name: "path",
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
const CanvasDiagnosticsResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CanvasDiagnosticsResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: CanvasDiagnosticsSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: CanvasDiagnosticsError,
            oneof: "result"
        },
        {
            no: 3,
            name: "canvas_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "save_state",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "save_detail",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const CanvasDiagnosticsSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CanvasDiagnosticsSuccess", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diagnostics",
            kind: "message",
            T: _diagnostics_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.Diagnostic,
            repeated: true
        }
    ]);
const CanvasDiagnosticsError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CanvasDiagnosticsError", ()=>[
        {
            no: 1,
            name: "path",
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
