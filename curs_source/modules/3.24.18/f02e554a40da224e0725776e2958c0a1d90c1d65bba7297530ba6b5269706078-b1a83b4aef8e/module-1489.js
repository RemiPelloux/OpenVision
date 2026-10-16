"use strict";
require.d(exports, {
    UM: ()=>o,
    uN: ()=>a
});
var n = require("./module-6038.js"), s = require("./module-8592.js");
class i extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class o extends i {
    constructor(t){
        super(), this.url = "", this.toolCallId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new o).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new o).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new o).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(o, t, e);
    }
    static $() {
        return [
            "FetchArgs|1 url 9|2 tool_call_id 9"
        ];
    }
}
class a extends i {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new a).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new a).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new a).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(a, t, e);
    }
    static $() {
        return [
            "FetchResult|1 success #0 result|2 error #1 result",
            u,
            c
        ];
    }
}
class u extends i {
    constructor(t){
        super(), this.url = "", this.content = "", this.statusCode = 0, this.contentType = "", n.proto3.util.initPartial(t, this);
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
            "FetchSuccess|1 url 9|2 content 9|3 status_code 5|4 content_type 9"
        ];
    }
}
class c extends i {
    constructor(t){
        super(), this.url = "", this.error = "", n.proto3.util.initPartial(t, this);
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
            "FetchError|1 url 9|2 error 9"
        ];
    }
}
