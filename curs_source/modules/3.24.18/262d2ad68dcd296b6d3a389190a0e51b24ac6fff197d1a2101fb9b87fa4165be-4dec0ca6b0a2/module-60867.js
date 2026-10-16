"use strict";
require.d(exports, {
    Ht: ()=>p,
    L1: ()=>a,
    RH: ()=>u,
    U_: ()=>h,
    Y6: ()=>l,
    p4: ()=>c,
    q3: ()=>d
});
var n = require("./module-36038.js"), o = require("./module-8592.js");
const s = "agent.v1.";
class i extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return s;
    }
}
var a = (0, o.QT)(n.proto3, s, "BugfixVerdict", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "FIXED"
    ],
    [
        2,
        "FALSE_POSITIVE"
    ],
    [
        3,
        "COULD_NOT_FIX"
    ],
    [
        4,
        "RESOLVED_BY_OTHER_FIX"
    ]
], 1);
class l extends i {
    constructor(e){
        super(), this.bugId = "", this.bugTitle = "", this.verdict = a.UNSPECIFIED, this.explanation = "", n.proto3.util.initPartial(e, this);
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
            "BugfixResultItem|1 bug_id 9|2 bug_title 9|3 verdict #0|4 explanation 9|5 severity 9?",
            a
        ];
    }
}
class c extends i {
    constructor(e){
        super(), this.summary = "", this.results = [], n.proto3.util.initPartial(e, this);
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
            "ReportBugfixResultsArgs|1 summary 9|2 results #0*",
            l
        ];
    }
}
class u extends i {
    constructor(e){
        super(), this.results = [], n.proto3.util.initPartial(e, this);
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
            "ReportBugfixResultsSuccess|1 results #0*",
            l
        ];
    }
}
class d extends i {
    constructor(e){
        super(), this.error = "", n.proto3.util.initPartial(e, this);
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
            "ReportBugfixResultsError|1 error 9"
        ];
    }
}
class p extends i {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "ReportBugfixResultsResult|1 success #0 result|2 error #1 result",
            u,
            d
        ];
    }
}
class h extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ReportBugfixResultsToolCall|1 args #0|2 result #1",
            c,
            p
        ];
    }
}
