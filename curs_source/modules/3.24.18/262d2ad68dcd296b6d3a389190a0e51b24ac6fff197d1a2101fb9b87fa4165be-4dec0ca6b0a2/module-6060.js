"use strict";
require.d(exports, {
    QN: ()=>l,
    jZ: ()=>a,
    nz: ()=>c
});
var n = require("./module-36038.js"), o = require("./module-11197.js"), s = require("./module-8592.js");
class i extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class a extends i {
    constructor(e){
        super(), this.error = "", this.readToolDefReminder = "", this.systemReminders = [], n.proto3.util.initPartial(e, this);
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
            "McpToolError|1 error 9|2 read_tool_def_reminder 9|3 system_reminders #0*",
            o.Kp
        ];
    }
}
class l extends i {
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
            "McpToolResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 permission_denied #3 result",
            o.QW,
            a,
            o.xo,
            o.HQ
        ];
    }
}
class c extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "McpToolCall|1 args #0|2 result #1|3 description 9?",
            o.E_,
            l
        ];
    }
}
