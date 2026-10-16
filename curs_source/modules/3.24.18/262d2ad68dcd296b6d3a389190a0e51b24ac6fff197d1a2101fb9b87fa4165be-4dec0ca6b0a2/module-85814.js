"use strict";
require.d(exports, {
    H4: ()=>d,
    JU: ()=>a,
    W1: ()=>l,
    rQ: ()=>h,
    ud: ()=>u,
    y$: ()=>c
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
            "ApplyAgentDiffToolCall|1 args #0|2 result #1",
            l,
            c
        ];
    }
}
class l extends i {
    constructor(e){
        super(), this.agentId = "", n.proto3.util.initPartial(e, this);
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
            "ApplyAgentDiffArgs|1 agent_id 9"
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
            "ApplyAgentDiffResult|1 success #0 result|2 error #1 result",
            u,
            h
        ];
    }
}
class u extends i {
    constructor(e){
        super(), this.appliedChanges = [], n.proto3.util.initPartial(e, this);
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
            "ApplyAgentDiffSuccess|1 applied_changes #0*",
            d
        ];
    }
}
class d extends i {
    constructor(e){
        super(), this.path = "", this.changeType = p.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "AppliedAgentChange|1 path 9|2 change_type #0|3 before_content 9?|4 after_content 9?|5 error 9?|6 message_for_model 9?",
            p
        ];
    }
}
var p = (0, o.QT)(n.proto3, s, "AppliedAgentChange.ChangeType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CREATED"
    ],
    [
        2,
        "MODIFIED"
    ],
    [
        3,
        "DELETED"
    ]
], 1);
class h extends i {
    constructor(e){
        super(), this.error = "", this.appliedChanges = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new h).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new h).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new h).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(h, e, t);
    }
    static $() {
        return [
            "ApplyAgentDiffError|1 error 9|2 applied_changes #0*",
            d
        ];
    }
}
