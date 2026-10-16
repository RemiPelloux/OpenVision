require.r(exports);
require.d(exports, {
    WriteArgs: ()=>WriteArgs,
    WriteError: ()=>WriteError,
    WriteNoSpace: ()=>WriteNoSpace,
    WritePermissionDenied: ()=>WritePermissionDenied,
    WriteRejected: ()=>WriteRejected,
    WriteResult: ()=>WriteResult,
    WriteSuccess: ()=>WriteSuccess
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const WriteArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WriteArgs", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "return_file_content_after_write",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "file_bytes",
            kind: "scalar",
            T: 12
        },
        {
            no: 6,
            name: "encoding_hint",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const WriteResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WriteResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: WriteSuccess,
            oneof: "result"
        },
        {
            no: 3,
            name: "permission_denied",
            kind: "message",
            T: WritePermissionDenied,
            oneof: "result"
        },
        {
            no: 4,
            name: "no_space",
            kind: "message",
            T: WriteNoSpace,
            oneof: "result"
        },
        {
            no: 5,
            name: "error",
            kind: "message",
            T: WriteError,
            oneof: "result"
        },
        {
            no: 6,
            name: "rejected",
            kind: "message",
            T: WriteRejected,
            oneof: "result"
        }
    ]);
const WriteSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WriteSuccess", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "lines_created",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "file_size",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "file_content_after_write",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const WritePermissionDenied = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WritePermissionDenied", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "directory",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "operation",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "is_readonly",
            kind: "scalar",
            T: 8
        }
    ]);
const WriteNoSpace = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WriteNoSpace", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
const WriteError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WriteError", ()=>[
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
const WriteRejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WriteRejected", ()=>[
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
