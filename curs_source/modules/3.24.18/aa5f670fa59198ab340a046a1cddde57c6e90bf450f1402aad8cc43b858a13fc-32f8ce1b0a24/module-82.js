require.r(exports);
require.d(exports, {
    EditArgs: ()=>EditArgs,
    EditError: ()=>EditError,
    EditFileNotFound: ()=>EditFileNotFound,
    EditReadPermissionDenied: ()=>EditReadPermissionDenied,
    EditRejected: ()=>EditRejected,
    EditResult: ()=>EditResult,
    EditSuccess: ()=>EditSuccess,
    EditToolCall: ()=>EditToolCall,
    EditToolCallDelta: ()=>EditToolCallDelta,
    EditWritePermissionDenied: ()=>EditWritePermissionDenied
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const EditArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.EditArgs", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "stream_content",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const EditResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.EditResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: EditSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "file_not_found",
            kind: "message",
            T: EditFileNotFound,
            oneof: "result"
        },
        {
            no: 3,
            name: "read_permission_denied",
            kind: "message",
            T: EditReadPermissionDenied,
            oneof: "result"
        },
        {
            no: 4,
            name: "write_permission_denied",
            kind: "message",
            T: EditWritePermissionDenied,
            oneof: "result"
        },
        {
            no: 6,
            name: "rejected",
            kind: "message",
            T: EditRejected,
            oneof: "result"
        },
        {
            no: 7,
            name: "error",
            kind: "message",
            T: EditError,
            oneof: "result"
        }
    ]);
const EditSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.EditSuccess", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "lines_added",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "lines_removed",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 5,
            name: "diff_string",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "before_full_file_content",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "after_full_file_content",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "message",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const EditFileNotFound = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.EditFileNotFound", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
const EditReadPermissionDenied = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.EditReadPermissionDenied", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
const EditWritePermissionDenied = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.EditWritePermissionDenied", ()=>[
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
        },
        {
            no: 3,
            name: "is_readonly",
            kind: "scalar",
            T: 8
        }
    ]);
const EditRejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.EditRejected", ()=>[
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
const EditError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.EditError", ()=>[
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
        },
        {
            no: 5,
            name: "model_visible_error",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const EditToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.EditToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: EditArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: EditResult
        }
    ]);
const EditToolCallDelta = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.EditToolCallDelta", ()=>[
        {
            no: 1,
            name: "stream_content_delta",
            kind: "scalar",
            T: 9
        }
    ]);
