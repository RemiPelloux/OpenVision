"use strict";
require.d(exports, {
    C: ()=>a,
    e: ()=>c
});
var n = require("./module-36038.js"), s = require("./module-62671.js"), o = require("./module-8592.js");
class i extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class a extends i {
    constructor(e){
        super(), this.command = "", this.workingDirectory = "", n.proto3.util.initPartial(e, this);
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
            "ShellAllowlistPrecheckArgs|1 command 9|2 working_directory 9|3 parsing_result #0|4 classifier_result #1?|5 tool_call_id 9?",
            s.HO,
            s.E4
        ];
    }
}
class c extends i {
    constructor(e){
        super(), this.allowlisted = !1, n.proto3.util.initPartial(e, this);
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
            "ShellAllowlistPrecheckResult|1 allowlisted 8"
        ];
    }
}
