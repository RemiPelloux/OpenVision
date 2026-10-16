"use strict";
require.d(exports, {
    $0: ()=>p,
    Hr: ()=>c,
    mK: ()=>d,
    nU: ()=>a,
    uo: ()=>u,
    vH: ()=>l,
    wj: ()=>i
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
        super(), this.taskId = "", n.proto3.util.initPartial(e, this);
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
            "AwaitArgs|1 task_id 9|2 block_until_ms 13?|3 regex 9?"
        ];
    }
}
class a extends o {
    constructor(e){
        super(), this.taskId = "", this.runtimeMs = n.protoInt64.zero, this.outputFilePath = "", this.outputLength = n.protoInt64.zero, this.regexRequested = !1, n.proto3.util.initPartial(e, this);
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
            "AwaitTaskComplete|1 task_id 9|2 runtime_ms 4|3 output_file_path 9|4 output_length 4|5 regex_requested 8|6 regex_match 9?|7 exit_code 17?|8 wake_reason 9?"
        ];
    }
}
class c extends o {
    constructor(e){
        super(), this.taskId = "", this.runtimeMs = n.protoInt64.zero, this.outputFilePath = "", this.outputLength = n.protoInt64.zero, this.regexRequested = !1, n.proto3.util.initPartial(e, this);
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
            "AwaitTaskStillRunning|1 task_id 9|2 runtime_ms 4|3 output_file_path 9|4 output_length 4|5 regex_requested 8|6 regex_match 9?|7 wake_reason 9?"
        ];
    }
}
class l extends o {
    constructor(e){
        super(), this.error = "", n.proto3.util.initPartial(e, this);
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
            "AwaitError|1 error 9"
        ];
    }
}
class u extends o {
    constructor(e){
        super(), this.awaitResult = {
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
            "AwaitSuccess|1 complete #0 await_result|2 still_running #1 await_result",
            a,
            c
        ];
    }
}
class d extends o {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "AwaitResult|1 complete #0 result|2 still_running #1 result|3 error #2 result|4 success #3 result",
            a,
            c,
            l,
            u
        ];
    }
}
class p extends o {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "AwaitToolCall|1 args #0|2 result #1",
            i,
            d
        ];
    }
}
