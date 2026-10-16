"use strict";
require.d(exports, {
    Gk: ()=>h,
    LD: ()=>v,
    M5: ()=>I,
    Ou: ()=>b,
    Yb: ()=>f,
    Zt: ()=>k,
    e9: ()=>y,
    h7: ()=>w,
    iz: ()=>g,
    m3: ()=>p,
    oF: ()=>E,
    sR: ()=>A,
    uh: ()=>u,
    vr: ()=>C,
    wY: ()=>d
});
var n = require("./module-36038.js"), s = require("./module-67918.js"), o = require("./module-8592.js");
const i = "aiserver.v1.";
class a extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return i;
    }
}
var c = (0, o.QT)(n.proto3, i, "FSUploadErrorType", [
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
]), l = (0, o.QT)(n.proto3, i, "FSSyncErrorType", [
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
class u extends a {
    constructor(e){
        super(), this.uuid = "", this.relativeWorkspacePath = "", this.contents = "", this.modelVersion = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new u).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new u).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new u).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(u, e, t);
    }
    static $() {
        return [
            "FSUploadFileRequest|1 uuid 9|2 relative_workspace_path 9|3 contents 9|4 model_version 5|5 sha256_hash 9?"
        ];
    }
}
class d extends a {
    constructor(e){
        super(), this.error = c.FS_UPLOAD_ERROR_TYPE_UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new d).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new d).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new d).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(d, e, t);
    }
    static $() {
        return [
            "FSUploadFileResponse|1 error #0",
            c
        ];
    }
}
class p extends a {
    constructor(e){
        super(), this.modelVersion = 0, this.relativeWorkspacePath = "", this.updates = [], this.expectedFileLength = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new p).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new p).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new p).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(p, e, t);
    }
    static $() {
        return [
            "FilesyncUpdateWithModelVersion|1 model_version 5|2 relative_workspace_path 9|3 updates #0*|4 expected_file_length 5",
            m
        ];
    }
}
class m extends a {
    constructor(e){
        super(), this.startPosition = 0, this.endPosition = 0, this.changeLength = 0, this.replacedString = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new m).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new m).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new m).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(m, e, t);
    }
    static $() {
        return [
            "SingleUpdateRequest|1 start_position 5|2 end_position 5|3 change_length 5|4 replaced_string 9|5 range #0",
            s.SimpleRange
        ];
    }
}
class h extends a {
    constructor(e){
        super(), this.uuid = "", this.relativeWorkspacePath = "", this.modelVersion = 0, this.filesyncUpdates = [], this.sha256Hash = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new h).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new h).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new h).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(h, e, t);
    }
    static $() {
        return [
            "FSSyncFileRequest|1 uuid 9|2 relative_workspace_path 9|3 model_version 5|4 filesync_updates #0*|5 sha256_hash 9",
            p
        ];
    }
}
class f extends a {
    constructor(e){
        super(), this.error = l.FS_SYNC_ERROR_TYPE_UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new f).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new f).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new f).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(f, e, t);
    }
    static $() {
        return [
            "FSSyncFileResponse|1 error #0",
            l
        ];
    }
}
class g extends a {
    constructor(e){
        super(), this.uuid = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new g).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new g).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new g).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(g, e, t);
    }
    static $() {
        return [
            "FSIsEnabledForUserRequest|1 uuid 9"
        ];
    }
}
class y extends a {
    constructor(e){
        super(), this.enabled = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new y).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new y).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new y).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(y, e, t);
    }
    static $() {
        return [
            "FSIsEnabledForUserResponse|1 enabled 8"
        ];
    }
}
class w extends a {
    constructor(e){
        super(), this.uuid = "", this.authId = "", this.relativeWorkspacePath = "", this.modelVersion = 0, this.filesyncUpdates = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new w).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new w).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new w).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(w, e, t);
    }
    static $() {
        return [
            "FSGetFileContentsRequest|1 uuid 9|2 auth_id 9|3 relative_workspace_path 9|4 model_version 5|5 filesync_updates #0*|6 sha256_hash 9?|7 earliest_time #1?",
            p,
            n.Timestamp
        ];
    }
}
class v extends a {
    constructor(e){
        super(), this.contents = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new v).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new v).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new v).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(v, e, t);
    }
    static $() {
        return [
            "FSGetFileContentsResponse|1 contents 9|2 sha256_hash 9?"
        ];
    }
}
class _ extends a {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.required = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_, e, t);
    }
    static $() {
        return [
            "FileRequest|1 relative_workspace_path 9|2 requested_version 5?|3 sha256_hash 9?|4 required 8|5 earliest_time #0?",
            n.Timestamp
        ];
    }
}
class A extends a {
    constructor(e){
        super(), this.authId = "", this.filesyncUpdates = [], this.fileRequests = [], this.getAllRecentFiles = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new A).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new A).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new A).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(A, e, t);
    }
    static $() {
        return [
            "FSGetMultiFileContentsRequest|1 auth_id 9|2 filesync_updates #0*|3 file_requests #1*|4 get_all_recent_files 8",
            p,
            _
        ];
    }
}
class S extends a {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.contents = "", this.modelVersion = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new S).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new S).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new S).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(S, e, t);
    }
    static $() {
        return [
            "FileRetrieved|1 relative_workspace_path 9|2 contents 9|3 model_version 5|4 last_modified #0",
            n.Timestamp
        ];
    }
}
class b extends a {
    constructor(e){
        super(), this.files = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new b).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new b).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new b).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(b, e, t);
    }
    static $() {
        return [
            "FSGetMultiFileContentsResponse|1 files #0*",
            S
        ];
    }
}
class E extends a {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new E).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new E).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new E).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(E, e, t);
    }
    static $() {
        return [
            "FSInternalHealthCheckRequest|1 from_server 8?"
        ];
    }
}
class I extends a {
    constructor(e){
        super(), this.success = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new I).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new I).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new I).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(I, e, t);
    }
    static $() {
        return [
            "FSInternalHealthCheckResponse|1 success 8"
        ];
    }
}
class C extends a {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new C).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new C).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new C).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(C, e, t);
    }
    static $() {
        return [
            "FSConfigRequest"
        ];
    }
}
class k extends a {
    constructor(e){
        super(), this.checkFilesyncHashPercent = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new k).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new k).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new k).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(k, e, t);
    }
    static $() {
        return [
            "FSConfigResponse|1 check_filesync_hash_percent 2|2 rate_limiter_breaker_reset_time_ms 5?|3 rate_limiter_rps 5?|4 rate_limiter_burst_capacity 5?|5 max_recent_updates_stored 5?|6 max_model_version_cache_size 5?|7 max_file_size_to_sync_bytes 5?|8 sync_retry_max_attempts 5?|9 sync_retry_initial_delay_ms 5?|10 sync_retry_time_multiplier 5?|11 file_sync_status_max_cache_size 5?|12 successive_syncs_required_for_reliance 5?|13 extra_successful_syncs_needed_after_errors 5?|14 big_change_stripping_threshold_bytes 5?|15 last_n_updates_to_send 5?|16 file_sync_status_ttl_ms 5?|17 sync_debounce_ms 5?|18 sync_update_threshold 5?"
        ];
    }
}
