"use strict";
require.r(exports), require.d(exports, {
    BidiAppendRequest: ()=>a,
    BidiAppendResponse: ()=>u,
    BidiPollRequest: ()=>c,
    BidiPollResponse: ()=>l,
    BidiRequestId: ()=>o
});
var n = require("./module-6038.js"), s = require("./module-8592.js");
class i extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "aiserver.v1.";
    }
}
class o extends i {
    constructor(t){
        super(), this.requestId = "", n.proto3.util.initPartial(t, this);
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
            "BidiRequestId|1 request_id 9"
        ];
    }
}
class a extends i {
    constructor(t){
        super(), this.data = "", this.appendSeqno = n.protoInt64.zero, this.dataBinary = new Uint8Array(0), n.proto3.util.initPartial(t, this);
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
            "BidiAppendRequest|1 data 9|2 request_id #0|3 append_seqno 3|4 data_binary 12",
            o
        ];
    }
}
class u extends i {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "BidiAppendResponse"
        ];
    }
}
class c extends i {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "BidiPollRequest|1 request_id #0|2 start_request 8?",
            o
        ];
    }
}
class l extends i {
    constructor(t){
        super(), this.seqno = n.protoInt64.zero, this.data = "", n.proto3.util.initPartial(t, this);
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
            "BidiPollResponse|1 seqno 3|2 data 9|3 eof 8?"
        ];
    }
}
