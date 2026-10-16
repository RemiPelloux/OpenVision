"use strict";
require.d(exports, {
    RH: ()=>l,
    U_: ()=>f,
    Y6: ()=>u,
    q3: ()=>m
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
var a = (0, s.QT)(n.proto3, i, "BugfixVerdict", [
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
class u extends o {
    constructor(t){
        super(), this.bugId = "", this.bugTitle = "", this.verdict = a.UNSPECIFIED, this.explanation = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new u).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new u).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new u).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(u, t, e);
    }
    static $() {
        return [
            "BugfixResultItem|1 bug_id 9|2 bug_title 9|3 verdict #0|4 explanation 9|5 severity 9?",
            a
        ];
    }
}
class c extends o {
    constructor(t){
        super(), this.summary = "", this.results = [], n.proto3.util.initPartial(t, this);
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
            "ReportBugfixResultsArgs|1 summary 9|2 results #0*",
            u
        ];
    }
}
class l extends o {
    constructor(t){
        super(), this.results = [], n.proto3.util.initPartial(t, this);
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
            "ReportBugfixResultsSuccess|1 results #0*",
            u
        ];
    }
}
class m extends o {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
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
            "ReportBugfixResultsError|1 error 9"
        ];
    }
}
class d extends o {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "ReportBugfixResultsResult|1 success #0 result|2 error #1 result",
            l,
            m
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
            "ReportBugfixResultsToolCall|1 args #0|2 result #1",
            c,
            d
        ];
    }
}
