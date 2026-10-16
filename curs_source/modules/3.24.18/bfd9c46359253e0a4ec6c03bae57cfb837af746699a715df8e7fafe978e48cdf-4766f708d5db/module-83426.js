"use strict";
require.d(exports, {
    Uy: ()=>u,
    Vo: ()=>a,
    bT: ()=>c,
    x9: ()=>l
});
var n = require("./module-36038.js"), s = require("./module-38036.js"), o = require("./module-8592.js");
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
        super(), this.pattern = "", n.proto3.util.initPartial(e, this);
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
            "PiFindExecArgs|1 pattern 9|2 path 9?|3 limit 5?"
        ];
    }
}
class c extends i {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "PiFindExecResult|1 success #0 result|2 error #1 result",
            l,
            u
        ];
    }
}
class l extends i {
    constructor(e){
        super(), this.output = "", n.proto3.util.initPartial(e, this);
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
            "PiFindExecSuccess|1 output 9|2 truncation #0?|3 result_limit_reached 13?",
            s.d
        ];
    }
}
class u extends i {
    constructor(e){
        super(), this.error = "", n.proto3.util.initPartial(e, this);
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
            "PiFindExecError|1 error 9"
        ];
    }
}
