"use strict";
require.d(exports, {
    $m: ()=>l,
    B$: ()=>d,
    H7: ()=>u,
    Zf: ()=>a,
    pT: ()=>c,
    w$: ()=>p
});
var n = require("./module-36038.js"), o = require("./module-8592.js");
const s = "agent.v1.";
class i extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return s;
    }
}
var a = (0, o.QT)(n.proto3, s, "ConversationSearchSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "LOCAL"
    ],
    [
        2,
        "CLOUD_CACHE"
    ]
], 1);
class l extends i {
    constructor(e){
        super(), this.query = "", this.toolCallId = "", n.proto3.util.initPartial(e, this);
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
            "ConversationSearchArgs|1 query 9|2 tool_call_id 9|3 limit 5?"
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
            "ConversationSearchResult|1 success #0 result|2 error #1 result",
            u,
            p
        ];
    }
}
class u extends i {
    constructor(e){
        super(), this.hits = [], this.truncated = !1, this.partial = !1, this.rebuilding = !1, n.proto3.util.initPartial(e, this);
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
            "ConversationSearchSuccess|1 hits #0*|2 truncated 8|3 partial 8|4 rebuilding 8",
            d
        ];
    }
}
class d extends i {
    constructor(e){
        super(), this.conversationId = "", this.title = "", this.source = a.UNSPECIFIED, this.updatedAtMs = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
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
            "ConversationSearchHit|1 conversation_id 9|2 title 9|3 source #0|4 updated_at_ms 3|5 snippet 9?",
            a
        ];
    }
}
class p extends i {
    constructor(e){
        super(), this.error = "", n.proto3.util.initPartial(e, this);
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
            "ConversationSearchError|1 error 9"
        ];
    }
}
