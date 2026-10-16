require.r(exports);
require.d(exports, {
    DiagnosticItem: ()=>DiagnosticItem,
    DiagnosticRange: ()=>DiagnosticRange,
    FileDiagnostics: ()=>FileDiagnostics,
    ReadLintsToolArgs: ()=>ReadLintsToolArgs,
    ReadLintsToolCall: ()=>ReadLintsToolCall,
    ReadLintsToolError: ()=>ReadLintsToolError,
    ReadLintsToolResult: ()=>ReadLintsToolResult,
    ReadLintsToolSuccess: ()=>ReadLintsToolSuccess
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _diagnostics_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-86.js");
var _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-72.js");
const ReadLintsToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadLintsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ReadLintsToolArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ReadLintsToolResult
        }
    ]);
const ReadLintsToolArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadLintsToolArgs", ()=>[
        {
            no: 1,
            name: "paths",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const ReadLintsToolResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadLintsToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ReadLintsToolSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ReadLintsToolError,
            oneof: "result"
        }
    ]);
const ReadLintsToolSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadLintsToolSuccess", ()=>[
        {
            no: 1,
            name: "file_diagnostics",
            kind: "message",
            T: FileDiagnostics,
            repeated: true
        },
        {
            no: 2,
            name: "total_files",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "total_diagnostics",
            kind: "scalar",
            T: 5
        }
    ]);
const FileDiagnostics = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.FileDiagnostics", ()=>[
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
            T: DiagnosticItem,
            repeated: true
        },
        {
            no: 3,
            name: "diagnostics_count",
            kind: "scalar",
            T: 5
        }
    ]);
const DiagnosticItem = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.DiagnosticItem", ()=>[
        {
            no: 1,
            name: "severity",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_diagnostics_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.DiagnosticSeverity)
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: DiagnosticRange
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "source",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "code",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "is_stale",
            kind: "scalar",
            T: 8
        }
    ]);
const DiagnosticRange = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.DiagnosticRange", ()=>[
        {
            no: 1,
            name: "start",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.Position
        },
        {
            no: 2,
            name: "end",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.Position
        }
    ]);
const ReadLintsToolError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadLintsToolError", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]);
