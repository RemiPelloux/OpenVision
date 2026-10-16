require.r(exports);
require.d(exports, {
    DeleteArgs: ()=>DeleteArgs,
    DeleteError: ()=>DeleteError,
    DeleteFileBusy: ()=>DeleteFileBusy,
    DeleteFileNotFound: ()=>DeleteFileNotFound,
    DeleteNotFile: ()=>DeleteNotFile,
    DeletePermissionDenied: ()=>DeletePermissionDenied,
    DeleteRejected: ()=>DeleteRejected,
    DeleteResult: ()=>DeleteResult,
    DeleteSuccess: ()=>DeleteSuccess
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const DeleteArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.DeleteArgs", ()=>[
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
const DeleteResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.DeleteResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: DeleteSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "file_not_found",
            kind: "message",
            T: DeleteFileNotFound,
            oneof: "result"
        },
        {
            no: 3,
            name: "not_file",
            kind: "message",
            T: DeleteNotFile,
            oneof: "result"
        },
        {
            no: 4,
            name: "permission_denied",
            kind: "message",
            T: DeletePermissionDenied,
            oneof: "result"
        },
        {
            no: 5,
            name: "file_busy",
            kind: "message",
            T: DeleteFileBusy,
            oneof: "result"
        },
        {
            no: 6,
            name: "rejected",
            kind: "message",
            T: DeleteRejected,
            oneof: "result"
        },
        {
            no: 7,
            name: "error",
            kind: "message",
            T: DeleteError,
            oneof: "result"
        }
    ]);
const DeleteSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.DeleteSuccess", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "deleted_file",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "file_size",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "prev_content",
            kind: "scalar",
            T: 9
        }
    ]);
const DeleteFileNotFound = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.DeleteFileNotFound", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
const DeleteNotFile = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.DeleteNotFile", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "actual_type",
            kind: "scalar",
            T: 9
        }
    ]);
const DeletePermissionDenied = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.DeletePermissionDenied", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "client_visible_error",
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
const DeleteFileBusy = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.DeleteFileBusy", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
const DeleteRejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.DeleteRejected", ()=>[
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
const DeleteError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.DeleteError", ()=>[
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
