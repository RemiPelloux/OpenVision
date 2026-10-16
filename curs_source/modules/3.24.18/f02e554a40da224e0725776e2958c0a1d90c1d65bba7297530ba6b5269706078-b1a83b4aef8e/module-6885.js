"use strict";
require.d(exports, {
    Ek: ()=>l,
    _B: ()=>c,
    h_: ()=>u,
    oQ: ()=>d
});
var n = require("./module-6038.js"), s = require("./module-4500.js"), i = require("./module-8592.js");
const o = "agent.v1.";
class a extends i.HL {
    static get runtime() {
        return (0, i.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return o;
    }
}
var u = (0, i.QT)(n.proto3, o, "DiagnosticSeverity", [
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
    constructor(t){
        super(), this.path = "", this.toolCallId = "", n.proto3.util.initPartial(t, this);
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
            "DiagnosticsArgs|1 path 9|2 tool_call_id 9"
        ];
    }
}
class l extends a {
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
            "DiagnosticsResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 file_not_found #3 result|5 permission_denied #4 result",
            m,
            f,
            p,
            h,
            g
        ];
    }
}
class m extends a {
    constructor(t){
        super(), this.path = "", this.diagnostics = [], this.totalDiagnostics = 0, n.proto3.util.initPartial(t, this);
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
            "DiagnosticsSuccess|1 path 9|2 diagnostics #0*|3 total_diagnostics 5",
            d
        ];
    }
}
class d extends a {
    constructor(t){
        super(), this.severity = u.UNSPECIFIED, this.message = "", this.source = "", this.code = "", this.isStale = !1, n.proto3.util.initPartial(t, this);
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
            "Diagnostic|1 severity #0|2 range #1|3 message 9|4 source 9|5 code 9|6 is_stale 8",
            u,
            s.Q6
        ];
    }
}
class f extends a {
    constructor(t){
        super(), this.path = "", this.error = "", n.proto3.util.initPartial(t, this);
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
            "DiagnosticsError|1 path 9|2 error 9"
        ];
    }
}
class p extends a {
    constructor(t){
        super(), this.path = "", this.reason = "", n.proto3.util.initPartial(t, this);
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
            "DiagnosticsRejected|1 path 9|2 reason 9"
        ];
    }
}
class h extends a {
    constructor(t){
        super(), this.path = "", n.proto3.util.initPartial(t, this);
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
            "DiagnosticsFileNotFound|1 path 9"
        ];
    }
}
class g extends a {
    constructor(t){
        super(), this.path = "", n.proto3.util.initPartial(t, this);
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
            "DiagnosticsPermissionDenied|1 path 9"
        ];
    }
}
