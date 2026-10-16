"use strict";
require.d(exports, {
    H4: ()=>d,
    JU: ()=>a,
    W1: ()=>c,
    rQ: ()=>m,
    ud: ()=>u,
    y$: ()=>l
});
var n = require("./module-36038.js"), s = require("./module-8592.js");
const o = "agent.v1.";
class i extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return o;
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
            c,
            l
        ];
    }
}
class c extends i {
    constructor(e){
        super(), this.agentId = "", n.proto3.util.initPartial(e, this);
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
            "ApplyAgentDiffArgs|1 agent_id 9"
        ];
    }
}
class l extends i {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "ApplyAgentDiffResult|1 success #0 result|2 error #1 result",
            u,
            m
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
var p = (0, s.QT)(n.proto3, o, "AppliedAgentChange.ChangeType", [
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
class m extends i {
    constructor(e){
        super(), this.error = "", this.appliedChanges = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new m).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new m).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new m).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(m, e, t);
    }
    static $() {
        return [
            "ApplyAgentDiffError|1 error 9|2 applied_changes #0*",
            d
        ];
    }
}
