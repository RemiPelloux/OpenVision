"use strict";
require.d(exports, {
    FW: ()=>u,
    I6: ()=>a,
    Tu: ()=>c,
    Uk: ()=>l,
    iv: ()=>i
});
var n = require("./module-36038.js"), s = require("./module-8592.js");
class o extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class i extends o {
    constructor(e){
        super(), this.title = "", this.file = "", this.startLine = 0, this.endLine = 0, this.description = "", this.severity = "", this.category = "", this.rationale = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new i).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new i).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new i).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(i, e, t);
    }
    static $() {
        return [
            "ReportBugArgs|1 title 9|2 file 9|3 start_line 5|4 end_line 5|5 description 9|6 severity 9|7 category 9|8 rationale 9"
        ];
    }
}
class a extends o {
    constructor(e){
        super(), this.output = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new a).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new a).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new a).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(a, e, t);
    }
    static $() {
        return [
            "ReportBugSuccess|1 output 9"
        ];
    }
}
class c extends o {
    constructor(e){
        super(), this.errorMessage = "", n.proto3.util.initPartial(e, this);
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
            "ReportBugError|1 error_message 9"
        ];
    }
}
class l extends o {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "ReportBugResult|1 success #0 result|2 error #1 result",
            a,
            c
        ];
    }
}
class u extends o {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ReportBugToolCall|1 args #0|2 result #1",
            i,
            l
        ];
    }
}
