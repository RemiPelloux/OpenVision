"use strict";
require.d(exports, {
    Gk: ()=>p,
    LD: ()=>y,
    M5: ()=>I,
    Ou: ()=>B,
    Yb: ()=>h,
    Zt: ()=>b,
    e9: ()=>A,
    h7: ()=>_,
    iz: ()=>g,
    m3: ()=>d,
    oF: ()=>E,
    sR: ()=>S,
    uh: ()=>l,
    vr: ()=>C,
    wY: ()=>m
});
var n = require("./module-6038.js"), s = require("./module-7918.js"), i = require("./module-8592.js");
const o = "aiserver.v1.";
class a extends i.HL {
    static get runtime() {
        return (0, i.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return o;
    }
}
var u = (0, i.QT)(n.proto3, o, "FSUploadErrorType", [
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
]), c = (0, i.QT)(n.proto3, o, "FSSyncErrorType", [
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
class l extends a {
    constructor(t){
        super(), this.uuid = "", this.relativeWorkspacePath = "", this.contents = "", this.modelVersion = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new l).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new l).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new l).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(l, t, e);
    }
    static $() {
        return [
            "FSUploadFileRequest|1 uuid 9|2 relative_workspace_path 9|3 contents 9|4 model_version 5|5 sha256_hash 9?"
        ];
    }
}
class m extends a {
    constructor(t){
        super(), this.error = u.FS_UPLOAD_ERROR_TYPE_UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new m).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new m).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new m).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(m, t, e);
    }
    static $() {
        return [
            "FSUploadFileResponse|1 error #0",
            u
        ];
    }
}
class d extends a {
    constructor(t){
        super(), this.modelVersion = 0, this.relativeWorkspacePath = "", this.updates = [], this.expectedFileLength = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new d).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new d).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new d).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(d, t, e);
    }
    static $() {
        return [
            "FilesyncUpdateWithModelVersion|1 model_version 5|2 relative_workspace_path 9|3 updates #0*|4 expected_file_length 5",
            f
        ];
    }
}
class f extends a {
    constructor(t){
        super(), this.startPosition = 0, this.endPosition = 0, this.changeLength = 0, this.replacedString = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new f).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new f).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new f).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(f, t, e);
    }
    static $() {
        return [
            "SingleUpdateRequest|1 start_position 5|2 end_position 5|3 change_length 5|4 replaced_string 9|5 range #0",
            s.SimpleRange
        ];
    }
}
class p extends a {
    constructor(t){
        super(), this.uuid = "", this.relativeWorkspacePath = "", this.modelVersion = 0, this.filesyncUpdates = [], this.sha256Hash = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new p).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new p).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new p).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(p, t, e);
    }
    static $() {
        return [
            "FSSyncFileRequest|1 uuid 9|2 relative_workspace_path 9|3 model_version 5|4 filesync_updates #0*|5 sha256_hash 9",
            d
        ];
    }
}
class h extends a {
    constructor(t){
        super(), this.error = c.FS_SYNC_ERROR_TYPE_UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new h).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new h).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new h).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(h, t, e);
    }
    static $() {
        return [
            "FSSyncFileResponse|1 error #0",
            c
        ];
    }
}
class g extends a {
    constructor(t){
        super(), this.uuid = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new g).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new g).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new g).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(g, t, e);
    }
    static $() {
        return [
            "FSIsEnabledForUserRequest|1 uuid 9"
        ];
    }
}
class A extends a {
    constructor(t){
        super(), this.enabled = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new A).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new A).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new A).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(A, t, e);
    }
    static $() {
        return [
            "FSIsEnabledForUserResponse|1 enabled 8"
        ];
    }
}
class _ extends a {
    constructor(t){
        super(), this.uuid = "", this.authId = "", this.relativeWorkspacePath = "", this.modelVersion = 0, this.filesyncUpdates = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_, t, e);
    }
    static $() {
        return [
            "FSGetFileContentsRequest|1 uuid 9|2 auth_id 9|3 relative_workspace_path 9|4 model_version 5|5 filesync_updates #0*|6 sha256_hash 9?|7 earliest_time #1?",
            d,
            n.Timestamp
        ];
    }
}
class y extends a {
    constructor(t){
        super(), this.contents = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new y).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new y).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new y).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(y, t, e);
    }
    static $() {
        return [
            "FSGetFileContentsResponse|1 contents 9|2 sha256_hash 9?"
        ];
    }
}
class w extends a {
    constructor(t){
        super(), this.relativeWorkspacePath = "", this.required = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new w).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new w).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new w).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(w, t, e);
    }
    static $() {
        return [
            "FileRequest|1 relative_workspace_path 9|2 requested_version 5?|3 sha256_hash 9?|4 required 8|5 earliest_time #0?",
            n.Timestamp
        ];
    }
}
class S extends a {
    constructor(t){
        super(), this.authId = "", this.filesyncUpdates = [], this.fileRequests = [], this.getAllRecentFiles = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new S).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new S).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new S).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(S, t, e);
    }
    static $() {
        return [
            "FSGetMultiFileContentsRequest|1 auth_id 9|2 filesync_updates #0*|3 file_requests #1*|4 get_all_recent_files 8",
            d,
            w
        ];
    }
}
class J extends a {
    constructor(t){
        super(), this.relativeWorkspacePath = "", this.contents = "", this.modelVersion = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new J).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new J).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new J).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(J, t, e);
    }
    static $() {
        return [
            "FileRetrieved|1 relative_workspace_path 9|2 contents 9|3 model_version 5|4 last_modified #0",
            n.Timestamp
        ];
    }
}
class B extends a {
    constructor(t){
        super(), this.files = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new B).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new B).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new B).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(B, t, e);
    }
    static $() {
        return [
            "FSGetMultiFileContentsResponse|1 files #0*",
            J
        ];
    }
}
class E extends a {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new E).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new E).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new E).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(E, t, e);
    }
    static $() {
        return [
            "FSInternalHealthCheckRequest|1 from_server 8?"
        ];
    }
}
class I extends a {
    constructor(t){
        super(), this.success = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new I).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new I).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new I).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(I, t, e);
    }
    static $() {
        return [
            "FSInternalHealthCheckResponse|1 success 8"
        ];
    }
}
class C extends a {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new C).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new C).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new C).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(C, t, e);
    }
    static $() {
        return [
            "FSConfigRequest"
        ];
    }
}
class b extends a {
    constructor(t){
        super(), this.checkFilesyncHashPercent = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new b).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new b).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new b).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(b, t, e);
    }
    static $() {
        return [
            "FSConfigResponse|1 check_filesync_hash_percent 2|2 rate_limiter_breaker_reset_time_ms 5?|3 rate_limiter_rps 5?|4 rate_limiter_burst_capacity 5?|5 max_recent_updates_stored 5?|6 max_model_version_cache_size 5?|7 max_file_size_to_sync_bytes 5?|8 sync_retry_max_attempts 5?|9 sync_retry_initial_delay_ms 5?|10 sync_retry_time_multiplier 5?|11 file_sync_status_max_cache_size 5?|12 successive_syncs_required_for_reliance 5?|13 extra_successful_syncs_needed_after_errors 5?|14 big_change_stripping_threshold_bytes 5?|15 last_n_updates_to_send 5?|16 file_sync_status_ttl_ms 5?|17 sync_debounce_ms 5?|18 sync_update_threshold 5?"
        ];
    }
}
