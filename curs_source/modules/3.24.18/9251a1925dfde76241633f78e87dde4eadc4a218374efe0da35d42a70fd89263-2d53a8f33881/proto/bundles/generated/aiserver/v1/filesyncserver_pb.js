import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { Timestamp } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/timestamp_pb.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { SimpleRange, init_utils_pb2 } from "./utils_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage126, __protoMessage3123, FSUploadErrorType, FSSyncErrorType, FSUploadFileRequest, FSUploadFileResponse, FilesyncUpdateWithModelVersion, SingleUpdateRequest, FSSyncFileRequest, FSSyncFileResponse, FSIsEnabledForUserRequest, FSIsEnabledForUserResponse, FSGetFileContentsRequest, FSGetFileContentsResponse, FileRequest, FSGetMultiFileContentsRequest, FileRetrieved, FSGetMultiFileContentsResponse, FSInternalHealthCheckRequest, FSInternalHealthCheckResponse, FSConfigRequest, FSConfigResponse;
export { FSConfigRequest, FSConfigResponse, FSGetFileContentsRequest, FSGetFileContentsResponse, FSGetMultiFileContentsRequest, FSGetMultiFileContentsResponse, FSInternalHealthCheckRequest, FSInternalHealthCheckResponse, FSIsEnabledForUserRequest, FSIsEnabledForUserResponse, FSSyncErrorType, FSSyncFileRequest, FSSyncFileResponse, FSUploadErrorType, FSUploadFileRequest, FSUploadFileResponse, FileRequest, FileRetrieved, FilesyncUpdateWithModelVersion, SingleUpdateRequest, __protoMessage3123, __protoPackage126 };
var __wakaru_init_filesyncserver_pb_initialized = false;
export function init_filesyncserver_pb() {
if (__wakaru_init_filesyncserver_pb_initialized) return;
__wakaru_init_filesyncserver_pb_initialized = true;
"use strict";
init_esm2();
init_utils_pb2();
init_compact();
__protoPackage126 = "aiserver.v1.";
__protoMessage3123 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage126;
    }
};
FSUploadErrorType = enumType2(proto3, __protoPackage126, "FSUploadErrorType", [
    [
        0,
        "FS_UPLOAD_ERROR_TYPE_UNSPECIFIED"
    ],
    [
        1,
        "FS_UPLOAD_ERROR_TYPE_NON_EXISTANT"
    ],
    [
        2,
        "FS_UPLOAD_ERROR_TYPE_HASH_MISMATCH"
    ]
]);
FSSyncErrorType = enumType2(proto3, __protoPackage126, "FSSyncErrorType", [
    [
        0,
        "FS_SYNC_ERROR_TYPE_UNSPECIFIED"
    ],
    [
        1,
        "FS_SYNC_ERROR_TYPE_NON_EXISTANT"
    ],
    [
        2,
        "FS_SYNC_ERROR_TYPE_HASH_MISMATCH"
    ]
]);
FSUploadFileRequest = class _FSUploadFileRequest extends __protoMessage3123 {
    constructor(data){
        super();
        this.uuid = "";
        this.relativeWorkspacePath = "";
        this.contents = "";
        this.modelVersion = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FSUploadFileRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FSUploadFileRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FSUploadFileRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FSUploadFileRequest, a, b2);
    }
    static $() {
        return [
            "FSUploadFileRequest|1 uuid 9|2 relative_workspace_path 9|3 contents 9|4 model_version 5|5 sha256_hash 9?"
        ];
    }
};
FSUploadFileResponse = class _FSUploadFileResponse extends __protoMessage3123 {
    constructor(data){
        super();
        this.error = FSUploadErrorType.FS_UPLOAD_ERROR_TYPE_UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FSUploadFileResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FSUploadFileResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FSUploadFileResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FSUploadFileResponse, a, b2);
    }
    static $() {
        return [
            "FSUploadFileResponse|1 error #0",
            FSUploadErrorType
        ];
    }
};
FilesyncUpdateWithModelVersion = class _FilesyncUpdateWithModelVersion extends __protoMessage3123 {
    constructor(data){
        super();
        this.modelVersion = 0;
        this.relativeWorkspacePath = "";
        this.updates = [];
        this.expectedFileLength = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FilesyncUpdateWithModelVersion().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FilesyncUpdateWithModelVersion().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FilesyncUpdateWithModelVersion().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FilesyncUpdateWithModelVersion, a, b2);
    }
    static $() {
        return [
            "FilesyncUpdateWithModelVersion|1 model_version 5|2 relative_workspace_path 9|3 updates #0*|4 expected_file_length 5",
            SingleUpdateRequest
        ];
    }
};
SingleUpdateRequest = class _SingleUpdateRequest extends __protoMessage3123 {
    constructor(data){
        super();
        this.startPosition = 0;
        this.endPosition = 0;
        this.changeLength = 0;
        this.replacedString = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SingleUpdateRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SingleUpdateRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SingleUpdateRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SingleUpdateRequest, a, b2);
    }
    static $() {
        return [
            "SingleUpdateRequest|1 start_position 5|2 end_position 5|3 change_length 5|4 replaced_string 9|5 range #0",
            SimpleRange
        ];
    }
};
FSSyncFileRequest = class _FSSyncFileRequest extends __protoMessage3123 {
    constructor(data){
        super();
        this.uuid = "";
        this.relativeWorkspacePath = "";
        this.modelVersion = 0;
        this.filesyncUpdates = [];
        this.sha256Hash = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FSSyncFileRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FSSyncFileRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FSSyncFileRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FSSyncFileRequest, a, b2);
    }
    static $() {
        return [
            "FSSyncFileRequest|1 uuid 9|2 relative_workspace_path 9|3 model_version 5|4 filesync_updates #0*|5 sha256_hash 9",
            FilesyncUpdateWithModelVersion
        ];
    }
};
FSSyncFileResponse = class _FSSyncFileResponse extends __protoMessage3123 {
    constructor(data){
        super();
        this.error = FSSyncErrorType.FS_SYNC_ERROR_TYPE_UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FSSyncFileResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FSSyncFileResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FSSyncFileResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FSSyncFileResponse, a, b2);
    }
    static $() {
        return [
            "FSSyncFileResponse|1 error #0",
            FSSyncErrorType
        ];
    }
};
FSIsEnabledForUserRequest = class _FSIsEnabledForUserRequest extends __protoMessage3123 {
    constructor(data){
        super();
        this.uuid = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FSIsEnabledForUserRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FSIsEnabledForUserRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FSIsEnabledForUserRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FSIsEnabledForUserRequest, a, b2);
    }
    static $() {
        return [
            "FSIsEnabledForUserRequest|1 uuid 9"
        ];
    }
};
FSIsEnabledForUserResponse = class _FSIsEnabledForUserResponse extends __protoMessage3123 {
    constructor(data){
        super();
        this.enabled = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FSIsEnabledForUserResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FSIsEnabledForUserResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FSIsEnabledForUserResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FSIsEnabledForUserResponse, a, b2);
    }
    static $() {
        return [
            "FSIsEnabledForUserResponse|1 enabled 8"
        ];
    }
};
FSGetFileContentsRequest = class _FSGetFileContentsRequest extends __protoMessage3123 {
    constructor(data){
        super();
        this.uuid = "";
        this.authId = "";
        this.relativeWorkspacePath = "";
        this.modelVersion = 0;
        this.filesyncUpdates = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FSGetFileContentsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FSGetFileContentsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FSGetFileContentsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FSGetFileContentsRequest, a, b2);
    }
    static $() {
        return [
            "FSGetFileContentsRequest|1 uuid 9|2 auth_id 9|3 relative_workspace_path 9|4 model_version 5|5 filesync_updates #0*|6 sha256_hash 9?|7 earliest_time #1?",
            FilesyncUpdateWithModelVersion,
            Timestamp
        ];
    }
};
FSGetFileContentsResponse = class _FSGetFileContentsResponse extends __protoMessage3123 {
    constructor(data){
        super();
        this.contents = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FSGetFileContentsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FSGetFileContentsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FSGetFileContentsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FSGetFileContentsResponse, a, b2);
    }
    static $() {
        return [
            "FSGetFileContentsResponse|1 contents 9|2 sha256_hash 9?"
        ];
    }
};
FileRequest = class _FileRequest extends __protoMessage3123 {
    constructor(data){
        super();
        this.relativeWorkspacePath = "";
        this.required = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FileRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FileRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FileRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FileRequest, a, b2);
    }
    static $() {
        return [
            "FileRequest|1 relative_workspace_path 9|2 requested_version 5?|3 sha256_hash 9?|4 required 8|5 earliest_time #0?",
            Timestamp
        ];
    }
};
FSGetMultiFileContentsRequest = class _FSGetMultiFileContentsRequest extends __protoMessage3123 {
    constructor(data){
        super();
        this.authId = "";
        this.filesyncUpdates = [];
        this.fileRequests = [];
        this.getAllRecentFiles = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FSGetMultiFileContentsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FSGetMultiFileContentsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FSGetMultiFileContentsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FSGetMultiFileContentsRequest, a, b2);
    }
    static $() {
        return [
            "FSGetMultiFileContentsRequest|1 auth_id 9|2 filesync_updates #0*|3 file_requests #1*|4 get_all_recent_files 8",
            FilesyncUpdateWithModelVersion,
            FileRequest
        ];
    }
};
FileRetrieved = class _FileRetrieved extends __protoMessage3123 {
    constructor(data){
        super();
        this.relativeWorkspacePath = "";
        this.contents = "";
        this.modelVersion = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FileRetrieved().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FileRetrieved().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FileRetrieved().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FileRetrieved, a, b2);
    }
    static $() {
        return [
            "FileRetrieved|1 relative_workspace_path 9|2 contents 9|3 model_version 5|4 last_modified #0",
            Timestamp
        ];
    }
};
FSGetMultiFileContentsResponse = class _FSGetMultiFileContentsResponse extends __protoMessage3123 {
    constructor(data){
        super();
        this.files = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FSGetMultiFileContentsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FSGetMultiFileContentsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FSGetMultiFileContentsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FSGetMultiFileContentsResponse, a, b2);
    }
    static $() {
        return [
            "FSGetMultiFileContentsResponse|1 files #0*",
            FileRetrieved
        ];
    }
};
FSInternalHealthCheckRequest = class _FSInternalHealthCheckRequest extends __protoMessage3123 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FSInternalHealthCheckRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FSInternalHealthCheckRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FSInternalHealthCheckRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FSInternalHealthCheckRequest, a, b2);
    }
    static $() {
        return [
            "FSInternalHealthCheckRequest|1 from_server 8?"
        ];
    }
};
FSInternalHealthCheckResponse = class _FSInternalHealthCheckResponse extends __protoMessage3123 {
    constructor(data){
        super();
        this.success = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FSInternalHealthCheckResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FSInternalHealthCheckResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FSInternalHealthCheckResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FSInternalHealthCheckResponse, a, b2);
    }
    static $() {
        return [
            "FSInternalHealthCheckResponse|1 success 8"
        ];
    }
};
FSConfigRequest = class _FSConfigRequest extends __protoMessage3123 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FSConfigRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FSConfigRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FSConfigRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FSConfigRequest, a, b2);
    }
    static $() {
        return [
            "FSConfigRequest"
        ];
    }
};
FSConfigResponse = class _FSConfigResponse extends __protoMessage3123 {
    constructor(data){
        super();
        this.checkFilesyncHashPercent = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FSConfigResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FSConfigResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FSConfigResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FSConfigResponse, a, b2);
    }
    static $() {
        return [
            "FSConfigResponse|1 check_filesync_hash_percent 2|2 rate_limiter_breaker_reset_time_ms 5?|3 rate_limiter_rps 5?|4 rate_limiter_burst_capacity 5?|5 max_recent_updates_stored 5?|6 max_model_version_cache_size 5?|7 max_file_size_to_sync_bytes 5?|8 sync_retry_max_attempts 5?|9 sync_retry_initial_delay_ms 5?|10 sync_retry_time_multiplier 5?|11 file_sync_status_max_cache_size 5?|12 successive_syncs_required_for_reliance 5?|13 extra_successful_syncs_needed_after_errors 5?|14 big_change_stripping_threshold_bytes 5?|15 last_n_updates_to_send 5?|16 file_sync_status_ttl_ms 5?|17 sync_debounce_ms 5?|18 sync_update_threshold 5?"
        ];
    }
};

}
