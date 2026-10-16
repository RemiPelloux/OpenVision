require.r(exports);
require.d(exports, {
    ReadArgs: ()=>ReadArgs,
    ReadError: ()=>ReadError,
    ReadFileNotFound: ()=>ReadFileNotFound,
    ReadInvalidFile: ()=>ReadInvalidFile,
    ReadPermissionDenied: ()=>ReadPermissionDenied,
    ReadRejected: ()=>ReadRejected,
    ReadResult: ()=>ReadResult,
    ReadSuccess: ()=>ReadSuccess
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const ReadArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadArgs", ()=>[
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
        },
        {
            no: 4,
            name: "offset",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 5,
            name: "limit",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 6,
            name: "encoding_hint",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "digest_only",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const ReadResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ReadSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ReadError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: ReadRejected,
            oneof: "result"
        },
        {
            no: 4,
            name: "file_not_found",
            kind: "message",
            T: ReadFileNotFound,
            oneof: "result"
        },
        {
            no: 5,
            name: "permission_denied",
            kind: "message",
            T: ReadPermissionDenied,
            oneof: "result"
        },
        {
            no: 6,
            name: "invalid_file",
            kind: "message",
            T: ReadInvalidFile,
            oneof: "result"
        }
    ]);
const ReadSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadSuccess", ()=>[
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
            T: 9,
            oneof: "output"
        },
        {
            no: 5,
            name: "data",
            kind: "scalar",
            T: 12,
            oneof: "output"
        },
        {
            no: 3,
            name: "total_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "file_size",
            kind: "scalar",
            T: 3
        },
        {
            no: 6,
            name: "truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "output_blob_id",
            kind: "scalar",
            T: 12,
            opt: true
        },
        {
            no: 8,
            name: "range_applied",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "sha256",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "size_bytes",
            kind: "scalar",
            T: 3,
            opt: true
        }
    ]);
const ReadError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadError", ()=>[
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
const ReadRejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadRejected", ()=>[
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
const ReadFileNotFound = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadFileNotFound", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
const ReadPermissionDenied = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadPermissionDenied", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
const ReadInvalidFile = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadInvalidFile", ()=>[
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
