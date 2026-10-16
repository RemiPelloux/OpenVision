require.r(exports);
require.d(exports, {
    Diagnostic: ()=>Diagnostic,
    DiagnosticSeverity: ()=>DiagnosticSeverity,
    DiagnosticsArgs: ()=>DiagnosticsArgs,
    DiagnosticsError: ()=>DiagnosticsError,
    DiagnosticsFileNotFound: ()=>DiagnosticsFileNotFound,
    DiagnosticsPermissionDenied: ()=>DiagnosticsPermissionDenied,
    DiagnosticsRejected: ()=>DiagnosticsRejected,
    DiagnosticsResult: ()=>DiagnosticsResult,
    DiagnosticsSuccess: ()=>DiagnosticsSuccess
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-72.js");
const DiagnosticSeverity = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.DiagnosticSeverity", [
    {
        no: 0,
        name: "DIAGNOSTIC_SEVERITY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "DIAGNOSTIC_SEVERITY_ERROR",
        localName: "ERROR"
    },
    {
        no: 2,
        name: "DIAGNOSTIC_SEVERITY_WARNING",
        localName: "WARNING"
    },
    {
        no: 3,
        name: "DIAGNOSTIC_SEVERITY_INFORMATION",
        localName: "INFORMATION"
    },
    {
        no: 4,
        name: "DIAGNOSTIC_SEVERITY_HINT",
        localName: "HINT"
    }
]);
const DiagnosticsArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.DiagnosticsArgs", ()=>[
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
const DiagnosticsResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.DiagnosticsResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: DiagnosticsSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: DiagnosticsError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: DiagnosticsRejected,
            oneof: "result"
        },
        {
            no: 4,
            name: "file_not_found",
            kind: "message",
            T: DiagnosticsFileNotFound,
            oneof: "result"
        },
        {
            no: 5,
            name: "permission_denied",
            kind: "message",
            T: DiagnosticsPermissionDenied,
            oneof: "result"
        }
    ]);
const DiagnosticsSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.DiagnosticsSuccess", ()=>[
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
            T: Diagnostic,
            repeated: true
        },
        {
            no: 3,
            name: "total_diagnostics",
            kind: "scalar",
            T: 5
        }
    ]);
const Diagnostic = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.Diagnostic", ()=>[
        {
            no: 1,
            name: "severity",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(DiagnosticSeverity)
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.Range
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
const DiagnosticsError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.DiagnosticsError", ()=>[
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
const DiagnosticsRejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.DiagnosticsRejected", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
const DiagnosticsFileNotFound = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.DiagnosticsFileNotFound", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
const DiagnosticsPermissionDenied = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.DiagnosticsPermissionDenied", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
