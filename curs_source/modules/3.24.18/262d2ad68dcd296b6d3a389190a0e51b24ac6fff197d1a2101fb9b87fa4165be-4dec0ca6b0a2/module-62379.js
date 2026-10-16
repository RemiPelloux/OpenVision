"use strict";
require.d(exports, {
    Al: ()=>a,
    RN: ()=>l,
    VM: ()=>i,
    iz: ()=>c,
    mJ: ()=>u
});
var n = require("./module-36038.js"), o = require("./module-8592.js");
class s extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class i extends s {
    constructor(e){
        super(), this.toolCallId = "", n.proto3.util.initPartial(e, this);
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
            "GetMcpToolsArgs|1 server 9?|2 tool_name 9?|3 pattern 9?|4 tool_call_id 9"
        ];
    }
}
class a extends s {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "GetMcpToolsAgentResult|1 success #0 result|2 error #1 result",
            l,
            c
        ];
    }
}
class l extends s {
    constructor(e){
        super(), this.content = "", n.proto3.util.initPartial(e, this);
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
            "GetMcpToolsSuccess|1 content 9|2 output_file_path 9?"
        ];
    }
}
class c extends s {
    constructor(e){
        super(), this.error = "", n.proto3.util.initPartial(e, this);
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
            "GetMcpToolsError|1 error 9"
        ];
    }
}
class u extends s {
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
            "GetMcpToolsToolCall|1 args #0|2 result #1",
            i,
            a
        ];
    }
}
