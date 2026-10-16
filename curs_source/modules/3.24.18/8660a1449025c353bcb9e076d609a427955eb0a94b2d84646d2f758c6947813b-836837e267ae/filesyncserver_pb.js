import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { Js } from "./timestamp_pb.js";
import { E } from "./tslib.es6.js";
import { Hu, m7 } from "./utils_pb.js";
var c0d, u0d, f9o, v9o, qmn, d0d, _9o, b9o, h0d, p0d, m0d, g0d, f0d, v0d, _0d, b0d, y0d, S0d, k0d, w0d;
export { S0d, _0d, _9o, b0d, b9o, c0d, d0d, f0d, f9o, g0d, h0d, k0d, m0d, p0d, qmn, u0d, v0d, v9o, w0d, y0d };
var __wakaru_y9o_initialized = false;
export function y9o() {
if (__wakaru_y9o_initialized) return;
__wakaru_y9o_initialized = true;
"use strict";
E(), hr(), Hu(), c0d = x.makeEnum("aiserver.v1.FSUploadErrorType", [
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
]), u0d = x.makeEnum("aiserver.v1.FSSyncErrorType", [
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
]), f9o = x.makeMessageType("aiserver.v1.FSUploadFileRequest", ()=>[
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
            opt: !0
        }
    ]), v9o = x.makeMessageType("aiserver.v1.FSUploadFileResponse", ()=>[
        {
            no: 1,
            name: "error",
            kind: "enum",
            T: x.getEnumType(c0d)
        }
    ]), qmn = x.makeMessageType("aiserver.v1.FilesyncUpdateWithModelVersion", ()=>[
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
            T: d0d,
            repeated: !0
        },
        {
            no: 4,
            name: "expected_file_length",
            kind: "scalar",
            T: 5
        }
    ]), d0d = x.makeMessageType("aiserver.v1.SingleUpdateRequest", ()=>[
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
            T: m7
        }
    ]), _9o = x.makeMessageType("aiserver.v1.FSSyncFileRequest", ()=>[
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
            T: qmn,
            repeated: !0
        },
        {
            no: 5,
            name: "sha256_hash",
            kind: "scalar",
            T: 9
        }
    ]), b9o = x.makeMessageType("aiserver.v1.FSSyncFileResponse", ()=>[
        {
            no: 1,
            name: "error",
            kind: "enum",
            T: x.getEnumType(u0d)
        }
    ]), h0d = x.makeMessageType("aiserver.v1.FSIsEnabledForUserRequest", ()=>[
        {
            no: 1,
            name: "uuid",
            kind: "scalar",
            T: 9
        }
    ]), p0d = x.makeMessageType("aiserver.v1.FSIsEnabledForUserResponse", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        }
    ]), m0d = x.makeMessageType("aiserver.v1.FSGetFileContentsRequest", ()=>[
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
            T: qmn,
            repeated: !0
        },
        {
            no: 6,
            name: "sha256_hash",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "earliest_time",
            kind: "message",
            T: Js,
            opt: !0
        }
    ]), g0d = x.makeMessageType("aiserver.v1.FSGetFileContentsResponse", ()=>[
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
            opt: !0
        }
    ]), f0d = x.makeMessageType("aiserver.v1.FileRequest", ()=>[
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
            opt: !0
        },
        {
            no: 3,
            name: "sha256_hash",
            kind: "scalar",
            T: 9,
            opt: !0
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
            T: Js,
            opt: !0
        }
    ]), v0d = x.makeMessageType("aiserver.v1.FSGetMultiFileContentsRequest", ()=>[
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
            T: qmn,
            repeated: !0
        },
        {
            no: 3,
            name: "file_requests",
            kind: "message",
            T: f0d,
            repeated: !0
        },
        {
            no: 4,
            name: "get_all_recent_files",
            kind: "scalar",
            T: 8
        }
    ]), _0d = x.makeMessageType("aiserver.v1.FileRetrieved", ()=>[
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
            T: Js
        }
    ]), b0d = x.makeMessageType("aiserver.v1.FSGetMultiFileContentsResponse", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: _0d,
            repeated: !0
        }
    ]), y0d = x.makeMessageType("aiserver.v1.FSInternalHealthCheckRequest", ()=>[
        {
            no: 1,
            name: "from_server",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), S0d = x.makeMessageType("aiserver.v1.FSInternalHealthCheckResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]), k0d = x.makeMessageType("aiserver.v1.FSConfigRequest", []), w0d = x.makeMessageType("aiserver.v1.FSConfigResponse", ()=>[
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
            opt: !0
        },
        {
            no: 3,
            name: "rate_limiter_rps",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "rate_limiter_burst_capacity",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 5,
            name: "max_recent_updates_stored",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "max_model_version_cache_size",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "max_file_size_to_sync_bytes",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 8,
            name: "sync_retry_max_attempts",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 9,
            name: "sync_retry_initial_delay_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 10,
            name: "sync_retry_time_multiplier",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 11,
            name: "file_sync_status_max_cache_size",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 12,
            name: "successive_syncs_required_for_reliance",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 13,
            name: "extra_successful_syncs_needed_after_errors",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 14,
            name: "big_change_stripping_threshold_bytes",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 15,
            name: "last_n_updates_to_send",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 16,
            name: "file_sync_status_ttl_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 17,
            name: "sync_debounce_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 18,
            name: "sync_update_threshold",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]);

}
