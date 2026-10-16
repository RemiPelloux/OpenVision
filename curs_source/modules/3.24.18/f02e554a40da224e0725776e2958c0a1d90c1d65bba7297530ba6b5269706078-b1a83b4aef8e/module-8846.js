"use strict";
require.d(exports, {
    Th: ()=>m,
    bN: ()=>f
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
var a = (0, s.QT)(n.proto3, i, "SmartModeClassifierDecision", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ALLOW"
    ],
    [
        2,
        "BLOCK"
    ]
], 1), u = (0, s.QT)(n.proto3, i, "SmartModeClassifierRuleEffect", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ALLOW"
    ],
    [
        2,
        "ASK_FIRST"
    ]
], 1), c = (0, s.QT)(n.proto3, i, "SmartModeClassifierRuleSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CUSTOM_RULE"
    ],
    [
        2,
        "TEAM_RULE"
    ]
], 1);
class l extends o {
    constructor(t){
        super(), this.role = "", this.content = "", n.proto3.util.initPartial(t, this);
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
            "SmartModeClassifierConversationMessage|1 role 9|2 content 9"
        ];
    }
}
class m extends o {
    constructor(t){
        super(), this.toolCallId = "", this.conversationContext = [], n.proto3.util.initPartial(t, this);
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
            "SmartModeClassifierArgs|1 tool_call_id 9|2 parent_conversation_id 9?|3 target #0|4 conversation_context #1*",
            d,
            l
        ];
    }
}
class d extends o {
    constructor(t){
        super(), this.action = "", n.proto3.util.initPartial(t, this);
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
            "SmartModeRiskTarget|1 action 9|2 arguments #0",
            n.Struct
        ];
    }
}
class f extends o {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new f).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new f).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new f).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(f, t, e);
    }
    static $() {
        return [
            "SmartModeClassifierResult|1 success #0 result|2 error #1 result",
            p,
            g
        ];
    }
}
class p extends o {
    constructor(t){
        super(), this.decision = a.UNSPECIFIED, this.appliedRules = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new p).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new p).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new p).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(p, t, e);
    }
    static $() {
        return [
            "SmartModeClassifierSuccess|1 decision #0|2 block_reason 9?|3 proposed_allow_rule 9?|4 applied_rules #1*",
            a,
            h
        ];
    }
}
class h extends o {
    constructor(t){
        super(), this.effect = u.UNSPECIFIED, this.text = "", this.source = c.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new h).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new h).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new h).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(h, t, e);
    }
    static $() {
        return [
            "SmartModeClassifierAppliedRule|1 effect #0|2 text 9|3 source #1",
            u,
            c
        ];
    }
}
class g extends o {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new g).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new g).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new g).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(g, t, e);
    }
    static $() {
        return [
            "SmartModeClassifierError|1 error 9"
        ];
    }
}
