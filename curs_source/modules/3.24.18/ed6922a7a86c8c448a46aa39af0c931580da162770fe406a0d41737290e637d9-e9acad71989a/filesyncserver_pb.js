import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { Nr } from "./timestamp_pb.js";
import { x } from "./tslib.es6.js";
import { hu, x3 } from "./utils_pb.js";
var Xvd, Zvd, uno, dno, CHt, Qvd, hno, pno, Jvd, e_d, t_d, n_d, i_d, r_d, s_d, o_d, a_d, c_d, l_d, u_d;
export { CHt, Jvd, Qvd, Xvd, Zvd, a_d, c_d, dno, e_d, hno, i_d, l_d, n_d, o_d, pno, r_d, s_d, t_d, u_d, uno };
var __wakaru_mno_initialized = false;
export function mno() {
if (__wakaru_mno_initialized) return;
__wakaru_mno_initialized = true;
"use strict";
x(), bi(), hu(), Xvd = k.makeEnum("aiserver.v1.FSUploadErrorType", [
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
]), Zvd = k.makeEnum("aiserver.v1.FSSyncErrorType", [
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
]), uno = k.makeMessageType("aiserver.v1.FSUploadFileRequest", ()=>[
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
    ]), dno = k.makeMessageType("aiserver.v1.FSUploadFileResponse", ()=>[
        {
            no: 1,
            name: "error",
            kind: "enum",
            T: k.getEnumType(Xvd)
        }
    ]), CHt = k.makeMessageType("aiserver.v1.FilesyncUpdateWithModelVersion", ()=>[
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
            T: Qvd,
            repeated: !0
        },
        {
            no: 4,
            name: "expected_file_length",
            kind: "scalar",
            T: 5
        }
    ]), Qvd = k.makeMessageType("aiserver.v1.SingleUpdateRequest", ()=>[
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
            T: x3
        }
    ]), hno = k.makeMessageType("aiserver.v1.FSSyncFileRequest", ()=>[
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
            T: CHt,
            repeated: !0
        },
        {
            no: 5,
            name: "sha256_hash",
            kind: "scalar",
            T: 9
        }
    ]), pno = k.makeMessageType("aiserver.v1.FSSyncFileResponse", ()=>[
        {
            no: 1,
            name: "error",
            kind: "enum",
            T: k.getEnumType(Zvd)
        }
    ]), Jvd = k.makeMessageType("aiserver.v1.FSIsEnabledForUserRequest", ()=>[
        {
            no: 1,
            name: "uuid",
            kind: "scalar",
            T: 9
        }
    ]), e_d = k.makeMessageType("aiserver.v1.FSIsEnabledForUserResponse", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        }
    ]), t_d = k.makeMessageType("aiserver.v1.FSGetFileContentsRequest", ()=>[
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
            T: CHt,
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
            T: Nr,
            opt: !0
        }
    ]), n_d = k.makeMessageType("aiserver.v1.FSGetFileContentsResponse", ()=>[
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
    ]), i_d = k.makeMessageType("aiserver.v1.FileRequest", ()=>[
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
            T: Nr,
            opt: !0
        }
    ]), r_d = k.makeMessageType("aiserver.v1.FSGetMultiFileContentsRequest", ()=>[
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
            T: CHt,
            repeated: !0
        },
        {
            no: 3,
            name: "file_requests",
            kind: "message",
            T: i_d,
            repeated: !0
        },
        {
            no: 4,
            name: "get_all_recent_files",
            kind: "scalar",
            T: 8
        }
    ]), s_d = k.makeMessageType("aiserver.v1.FileRetrieved", ()=>[
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
            T: Nr
        }
    ]), o_d = k.makeMessageType("aiserver.v1.FSGetMultiFileContentsResponse", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: s_d,
            repeated: !0
        }
    ]), a_d = k.makeMessageType("aiserver.v1.FSInternalHealthCheckRequest", ()=>[
        {
            no: 1,
            name: "from_server",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), c_d = k.makeMessageType("aiserver.v1.FSInternalHealthCheckResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]), l_d = k.makeMessageType("aiserver.v1.FSConfigRequest", []), u_d = k.makeMessageType("aiserver.v1.FSConfigResponse", ()=>[
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
