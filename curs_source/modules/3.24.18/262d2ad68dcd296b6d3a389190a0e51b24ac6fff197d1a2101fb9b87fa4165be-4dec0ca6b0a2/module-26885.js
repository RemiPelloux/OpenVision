"use strict";
require.d(exports, {
    Ek: ()=>u,
    Ho: ()=>h,
    J6: ()=>m,
    Mu: ()=>f,
    RP: ()=>g,
    _B: ()=>c,
    a1: ()=>d,
    h_: ()=>l,
    oQ: ()=>p
});
var n = require("./module-36038.js"), o = require("./module-64500.js"), s = require("./module-8592.js");
const i = "agent.v1.";
class a extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return i;
    }
}
var l = (0, s.QT)(n.proto3, i, "DiagnosticSeverity", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ERROR"
    ],
    [
        2,
        "WARNING"
    ],
    [
        3,
        "INFORMATION"
    ],
    [
        4,
        "HINT"
    ]
], 1);
class c extends a {
    constructor(e){
        super(), this.path = "", this.toolCallId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new c).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new c).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new c).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(c, e, t);
    }
    static $() {
        return [
            "DiagnosticsArgs|1 path 9|2 tool_call_id 9"
        ];
    }
}
class u extends a {
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
            "DiagnosticsResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 file_not_found #3 result|5 permission_denied #4 result",
            d,
            h,
            m,
            f,
            g
        ];
    }
}
class d extends a {
    constructor(e){
        super(), this.path = "", this.diagnostics = [], this.totalDiagnostics = 0, n.proto3.util.initPartial(e, this);
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
            "DiagnosticsSuccess|1 path 9|2 diagnostics #0*|3 total_diagnostics 5",
            p
        ];
    }
}
class p extends a {
    constructor(e){
        super(), this.severity = l.UNSPECIFIED, this.message = "", this.source = "", this.code = "", this.isStale = !1, n.proto3.util.initPartial(e, this);
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
            "Diagnostic|1 severity #0|2 range #1|3 message 9|4 source 9|5 code 9|6 is_stale 8",
            l,
            o.Q6
        ];
    }
}
class h extends a {
    constructor(e){
        super(), this.path = "", this.error = "", n.proto3.util.initPartial(e, this);
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
            "DiagnosticsError|1 path 9|2 error 9"
        ];
    }
}
class m extends a {
    constructor(e){
        super(), this.path = "", this.reason = "", n.proto3.util.initPartial(e, this);
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
            "DiagnosticsRejected|1 path 9|2 reason 9"
        ];
    }
}
class f extends a {
    constructor(e){
        super(), this.path = "", n.proto3.util.initPartial(e, this);
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
            "DiagnosticsFileNotFound|1 path 9"
        ];
    }
}
class g extends a {
    constructor(e){
        super(), this.path = "", n.proto3.util.initPartial(e, this);
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
            "DiagnosticsPermissionDenied|1 path 9"
        ];
    }
}
