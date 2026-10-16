require.r(exports);
require.d(exports, {
    CloudCanvasToolDiagnostic: ()=>CloudCanvasToolDiagnostic,
    CloudCanvasToolDiagnosticPosition: ()=>CloudCanvasToolDiagnosticPosition,
    CloudCanvasToolDiagnosticRange: ()=>CloudCanvasToolDiagnosticRange,
    ReadCanvasArgs: ()=>ReadCanvasArgs,
    ReadCanvasFailReason: ()=>ReadCanvasFailReason,
    ReadCanvasFailure: ()=>ReadCanvasFailure,
    ReadCanvasResult: ()=>ReadCanvasResult,
    ReadCanvasSuccess: ()=>ReadCanvasSuccess,
    ReadCanvasToolCall: ()=>ReadCanvasToolCall,
    WriteCanvasArgs: ()=>WriteCanvasArgs,
    WriteCanvasFailReason: ()=>WriteCanvasFailReason,
    WriteCanvasFailure: ()=>WriteCanvasFailure,
    WriteCanvasResult: ()=>WriteCanvasResult,
    WriteCanvasSuccess: ()=>WriteCanvasSuccess,
    WriteCanvasToolCall: ()=>WriteCanvasToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const WriteCanvasFailReason = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.WriteCanvasFailReason", [
    {
        no: 0,
        name: "WRITE_CANVAS_FAIL_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "WRITE_CANVAS_FAIL_REASON_TYPECHECK_FAILED",
        localName: "TYPECHECK_FAILED"
    },
    {
        no: 2,
        name: "WRITE_CANVAS_FAIL_REASON_COMPILE_FAILED",
        localName: "COMPILE_FAILED"
    },
    {
        no: 3,
        name: "WRITE_CANVAS_FAIL_REASON_TOO_LARGE",
        localName: "TOO_LARGE"
    },
    {
        no: 4,
        name: "WRITE_CANVAS_FAIL_REASON_UNAVAILABLE",
        localName: "UNAVAILABLE"
    },
    {
        no: 5,
        name: "WRITE_CANVAS_FAIL_REASON_NOT_FOUND",
        localName: "NOT_FOUND"
    },
    {
        no: 6,
        name: "WRITE_CANVAS_FAIL_REASON_REFUSED",
        localName: "REFUSED"
    }
]);
const ReadCanvasFailReason = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.ReadCanvasFailReason", [
    {
        no: 0,
        name: "READ_CANVAS_FAIL_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "READ_CANVAS_FAIL_REASON_NOT_FOUND",
        localName: "NOT_FOUND"
    },
    {
        no: 2,
        name: "READ_CANVAS_FAIL_REASON_UNAVAILABLE",
        localName: "UNAVAILABLE"
    },
    {
        no: 3,
        name: "READ_CANVAS_FAIL_REASON_REFUSED",
        localName: "REFUSED"
    },
    {
        no: 4,
        name: "READ_CANVAS_FAIL_REASON_INVALID_REFERENCE",
        localName: "INVALID_REFERENCE"
    }
]);
const CloudCanvasToolDiagnosticPosition = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CloudCanvasToolDiagnosticPosition", ()=>[
        {
            no: 1,
            name: "line",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "character",
            kind: "scalar",
            T: 5
        }
    ]);
const CloudCanvasToolDiagnosticRange = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CloudCanvasToolDiagnosticRange", ()=>[
        {
            no: 1,
            name: "start",
            kind: "message",
            T: CloudCanvasToolDiagnosticPosition
        },
        {
            no: 2,
            name: "end",
            kind: "message",
            T: CloudCanvasToolDiagnosticPosition
        }
    ]);
const CloudCanvasToolDiagnostic = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CloudCanvasToolDiagnostic", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "code",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "severity",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "range",
            kind: "message",
            T: CloudCanvasToolDiagnosticRange,
            opt: true
        }
    ]);
const WriteCanvasArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WriteCanvasArgs", ()=>[
        {
            no: 1,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "canvas_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const WriteCanvasSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WriteCanvasSuccess", ()=>[
        {
            no: 1,
            name: "canvas_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "url",
            kind: "scalar",
            T: 9
        }
    ]);
const WriteCanvasFailure = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WriteCanvasFailure", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(WriteCanvasFailReason)
        },
        {
            no: 2,
            name: "diagnostics",
            kind: "message",
            T: CloudCanvasToolDiagnostic,
            repeated: true
        },
        {
            no: 3,
            name: "detail",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const WriteCanvasResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WriteCanvasResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: WriteCanvasSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "failure",
            kind: "message",
            T: WriteCanvasFailure,
            oneof: "result"
        }
    ]);
const WriteCanvasToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WriteCanvasToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: WriteCanvasArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: WriteCanvasResult
        }
    ]);
const ReadCanvasArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadCanvasArgs", ()=>[
        {
            no: 1,
            name: "canvas_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ReadCanvasSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadCanvasSuccess", ()=>[
        {
            no: 1,
            name: "canvas_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "source",
            kind: "scalar",
            T: 9
        }
    ]);
const ReadCanvasFailure = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadCanvasFailure", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ReadCanvasFailReason)
        },
        {
            no: 2,
            name: "detail",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ReadCanvasResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadCanvasResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ReadCanvasSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "failure",
            kind: "message",
            T: ReadCanvasFailure,
            oneof: "result"
        }
    ]);
const ReadCanvasToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadCanvasToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ReadCanvasArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ReadCanvasResult
        }
    ]);
