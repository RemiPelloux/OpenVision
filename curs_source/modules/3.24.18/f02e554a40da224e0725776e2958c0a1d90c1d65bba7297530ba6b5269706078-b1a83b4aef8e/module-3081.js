"use strict";
require.d(exports, {
    $m: ()=>u,
    pT: ()=>c
});
var n = require("./module-6038.js"), s = require("./module-8592.js");
const i = "agent.v1.";
class o extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return i;
    }
}
var a = (0, s.QT)(n.proto3, i, "ConversationSearchSource", [
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
class u extends o {
    constructor(t){
        super(), this.query = "", this.toolCallId = "", n.proto3.util.initPartial(t, this);
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
            "ConversationSearchArgs|1 query 9|2 tool_call_id 9|3 limit 5?"
        ];
    }
}
class c extends o {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "ConversationSearchResult|1 success #0 result|2 error #1 result",
            l,
            d
        ];
    }
}
class l extends o {
    constructor(t){
        super(), this.hits = [], this.truncated = !1, this.partial = !1, this.rebuilding = !1, n.proto3.util.initPartial(t, this);
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
            "ConversationSearchSuccess|1 hits #0*|2 truncated 8|3 partial 8|4 rebuilding 8",
            m
        ];
    }
}
class m extends o {
    constructor(t){
        super(), this.conversationId = "", this.title = "", this.source = a.UNSPECIFIED, this.updatedAtMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new m).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new m).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new m).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(m, t, e);
    }
    static $() {
        return [
            "ConversationSearchHit|1 conversation_id 9|2 title 9|3 source #0|4 updated_at_ms 3|5 snippet 9?",
            a
        ];
    }
}
class d extends o {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new d).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new d).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new d).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(d, t, e);
    }
    static $() {
        return [
            "ConversationSearchError|1 error 9"
        ];
    }
}
