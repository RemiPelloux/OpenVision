"use strict";
require.d(exports, {
    $u: ()=>a,
    N8: ()=>m,
    T4: ()=>d,
    Tj: ()=>u,
    ol: ()=>p,
    y: ()=>c,
    yH: ()=>h,
    zH: ()=>l
});
var n = require("./module-36038.js"), s = require("./module-8592.js");
const o = "agent.v1.";
class i extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return o;
    }
}
var a = (0, s.QT)(n.proto3, o, "RecordingMode", [
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
], 1), c = (0, s.QT)(n.proto3, o, "RequestedFilePathRejectedReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SLASHES_NOT_ALLOWED"
    ]
], 1);
class l extends i {
    constructor(e){
        super(), this.mode = a.UNSPECIFIED, this.toolCallId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new l).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new l).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new l).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(l, e, t);
    }
    static $() {
        return [
            "RecordScreenArgs|1 mode #0|2 tool_call_id 9|3 save_as_filename 9?",
            a
        ];
    }
}
class u extends i {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "RecordScreenResult|1 start_success #0 result|2 save_success #1 result|3 discard_success #2 result|4 failure #3 result",
            d,
            p,
            m,
            h
        ];
    }
}
class d extends i {
    constructor(e){
        super(), this.wasPriorRecordingCancelled = !1, this.wasSaveAsFilenameIgnored = !1, n.proto3.util.initPartial(e, this);
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
            "RecordScreenStartSuccess|1 was_prior_recording_cancelled 8|2 was_save_as_filename_ignored 8"
        ];
    }
}
class p extends i {
    constructor(e){
        super(), this.path = "", this.recordingDurationMs = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
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
            "RecordScreenSaveSuccess|1 path 9|2 recording_duration_ms 3|3 requested_file_path_rejected_reason #0?",
            c
        ];
    }
}
class m extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "RecordScreenDiscardSuccess"
        ];
    }
}
class h extends i {
    constructor(e){
        super(), this.error = "", n.proto3.util.initPartial(e, this);
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
            "RecordScreenFailure|1 error 9"
        ];
    }
}
