"use strict";
require.d(exports, {
    $: ()=>l,
    c: ()=>a
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
        super(), n.proto3.util.initPartial(e, this);
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
            "ListMcpResourcesToolCall|1 args #0|2 result #1",
            o.kj,
            o.kP
        ];
    }
}
class l extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ReadMcpResourceToolCall|1 args #0|2 result #1",
            o.DI,
            o.ZD
        ];
    }
}
