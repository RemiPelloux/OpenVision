require.r(exports);
require.d(exports, {
    FSConfigRequest: ()=>FSConfigRequest,
    FSConfigResponse: ()=>FSConfigResponse,
    FSGetFileContentsRequest: ()=>FSGetFileContentsRequest,
    FSGetFileContentsResponse: ()=>FSGetFileContentsResponse,
    FSGetMultiFileContentsRequest: ()=>FSGetMultiFileContentsRequest,
    FSGetMultiFileContentsResponse: ()=>FSGetMultiFileContentsResponse,
    FSInternalHealthCheckRequest: ()=>FSInternalHealthCheckRequest,
    FSInternalHealthCheckResponse: ()=>FSInternalHealthCheckResponse,
    FSIsEnabledForUserRequest: ()=>FSIsEnabledForUserRequest,
    FSIsEnabledForUserResponse: ()=>FSIsEnabledForUserResponse,
    FSSyncErrorType: ()=>FSSyncErrorType,
    FSSyncFileRequest: ()=>FSSyncFileRequest,
    FSSyncFileResponse: ()=>FSSyncFileResponse,
    FSUploadErrorType: ()=>FSUploadErrorType,
    FSUploadFileRequest: ()=>FSUploadFileRequest,
    FSUploadFileResponse: ()=>FSUploadFileResponse,
    FileRequest: ()=>FileRequest,
    FileRetrieved: ()=>FileRetrieved,
    FilesyncUpdateWithModelVersion: ()=>FilesyncUpdateWithModelVersion,
    SingleUpdateRequest: ()=>SingleUpdateRequest
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-55.js");
const FSUploadErrorType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.FSUploadErrorType", [
    {
        no: 0,
        name: "FS_UPLOAD_ERROR_TYPE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "FS_UPLOAD_ERROR_TYPE_NON_EXISTANT"
    },
    {
        no: 2,
        name: "FS_UPLOAD_ERROR_TYPE_HASH_MISMATCH"
    }
]);
const FSSyncErrorType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.FSSyncErrorType", [
    {
        no: 0,
        name: "FS_SYNC_ERROR_TYPE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "FS_SYNC_ERROR_TYPE_NON_EXISTANT"
    },
    {
        no: 2,
        name: "FS_SYNC_ERROR_TYPE_HASH_MISMATCH"
    }
]);
const FSUploadFileRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FSUploadFileRequest", ()=>[
        {
            no: 1,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "model_version",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "sha256_hash",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const FSUploadFileResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FSUploadFileResponse", ()=>[
        {
            no: 1,
            name: "error",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(FSUploadErrorType)
        }
    ]);
const FilesyncUpdateWithModelVersion = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FilesyncUpdateWithModelVersion", ()=>[
        {
            no: 1,
            name: "model_version",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "updates",
            kind: "message",
            T: SingleUpdateRequest,
            repeated: true
        },
        {
            no: 4,
            name: "expected_file_length",
            kind: "scalar",
            T: 5
        }
    ]);
const SingleUpdateRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SingleUpdateRequest", ()=>[
        {
            no: 1,
            name: "start_position",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end_position",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "change_length",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "replaced_string",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "range",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.SimpleRange
        }
    ]);
const FSSyncFileRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FSSyncFileRequest", ()=>[
        {
            no: 1,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "model_version",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "filesync_updates",
            kind: "message",
            T: FilesyncUpdateWithModelVersion,
            repeated: true
        },
        {
            no: 5,
            name: "sha256_hash",
            kind: "scalar",
            T: 9
        }
    ]);
const FSSyncFileResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FSSyncFileResponse", ()=>[
        {
            no: 1,
            name: "error",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(FSSyncErrorType)
        }
    ]);
const FSIsEnabledForUserRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FSIsEnabledForUserRequest", ()=>[
        {
            no: 1,
            name: "uuid",
            kind: "scalar",
            T: 9
        }
    ]);
const FSIsEnabledForUserResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FSIsEnabledForUserResponse", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        }
    ]);
const FSGetFileContentsRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FSGetFileContentsRequest", ()=>[
        {
            no: 1,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "auth_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "model_version",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "filesync_updates",
            kind: "message",
            T: FilesyncUpdateWithModelVersion,
            repeated: true
        },
        {
            no: 6,
            name: "sha256_hash",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "earliest_time",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Timestamp,
            opt: true
        }
    ]);
const FSGetFileContentsResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FSGetFileContentsResponse", ()=>[
        {
            no: 1,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "sha256_hash",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const FileRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FileRequest", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "requested_version",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "sha256_hash",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "required",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "earliest_time",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Timestamp,
            opt: true
        }
    ]);
const FSGetMultiFileContentsRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FSGetMultiFileContentsRequest", ()=>[
        {
            no: 1,
            name: "auth_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "filesync_updates",
            kind: "message",
            T: FilesyncUpdateWithModelVersion,
            repeated: true
        },
        {
            no: 3,
            name: "file_requests",
            kind: "message",
            T: FileRequest,
            repeated: true
        },
        {
            no: 4,
            name: "get_all_recent_files",
            kind: "scalar",
            T: 8
        }
    ]);
const FileRetrieved = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FileRetrieved", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "model_version",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "last_modified",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Timestamp
        }
    ]);
const FSGetMultiFileContentsResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FSGetMultiFileContentsResponse", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: FileRetrieved,
            repeated: true
        }
    ]);
const FSInternalHealthCheckRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FSInternalHealthCheckRequest", ()=>[
        {
            no: 1,
            name: "from_server",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const FSInternalHealthCheckResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FSInternalHealthCheckResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]);
const FSConfigRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FSConfigRequest", []);
const FSConfigResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FSConfigResponse", ()=>[
        {
            no: 1,
            name: "check_filesync_hash_percent",
            kind: "scalar",
            T: 2
        },
        {
            no: 2,
            name: "rate_limiter_breaker_reset_time_ms",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "rate_limiter_rps",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "rate_limiter_burst_capacity",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 5,
            name: "max_recent_updates_stored",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 6,
            name: "max_model_version_cache_size",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 7,
            name: "max_file_size_to_sync_bytes",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 8,
            name: "sync_retry_max_attempts",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 9,
            name: "sync_retry_initial_delay_ms",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 10,
            name: "sync_retry_time_multiplier",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 11,
            name: "file_sync_status_max_cache_size",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 12,
            name: "successive_syncs_required_for_reliance",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 13,
            name: "extra_successful_syncs_needed_after_errors",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 14,
            name: "big_change_stripping_threshold_bytes",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 15,
            name: "last_n_updates_to_send",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 16,
            name: "file_sync_status_ttl_ms",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 17,
            name: "sync_debounce_ms",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 18,
            name: "sync_update_threshold",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
