"use strict";
require.d(exports, {
    Tj: ()=>l,
    zH: ()=>c
});
var n = require("./module-6038.js"), s = require("./module-8592.js");
const i = "agent.v1.";
class o extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return i;
    }
}
var a = (0, s.QT)(n.proto3, i, "RecordingMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "START_RECORDING"
    ],
    [
        2,
        "SAVE_RECORDING"
    ],
    [
        3,
        "DISCARD_RECORDING"
    ]
], 1), u = (0, s.QT)(n.proto3, i, "RequestedFilePathRejectedReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SLASHES_NOT_ALLOWED"
    ]
], 1);
class c extends o {
    constructor(t){
        super(), this.mode = a.UNSPECIFIED, this.toolCallId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new c).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new c).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new c).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(c, t, e);
    }
    static $() {
        return [
            "RecordScreenArgs|1 mode #0|2 tool_call_id 9|3 save_as_filename 9?",
            a
        ];
    }
}
class l extends o {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "RecordScreenResult|1 start_success #0 result|2 save_success #1 result|3 discard_success #2 result|4 failure #3 result",
            m,
            d,
            f,
            p
        ];
    }
}
class m extends o {
    constructor(t){
        super(), this.wasPriorRecordingCancelled = !1, this.wasSaveAsFilenameIgnored = !1, n.proto3.util.initPartial(t, this);
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
            "RecordScreenStartSuccess|1 was_prior_recording_cancelled 8|2 was_save_as_filename_ignored 8"
        ];
    }
}
class d extends o {
    constructor(t){
        super(), this.path = "", this.recordingDurationMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
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
            "RecordScreenSaveSuccess|1 path 9|2 recording_duration_ms 3|3 requested_file_path_rejected_reason #0?",
            u
        ];
    }
}
class f extends o {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "RecordScreenDiscardSuccess"
        ];
    }
}
class p extends o {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
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
            "RecordScreenFailure|1 error 9"
        ];
    }
}
