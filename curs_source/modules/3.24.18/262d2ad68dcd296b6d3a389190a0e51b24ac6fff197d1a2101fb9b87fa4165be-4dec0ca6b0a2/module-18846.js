"use strict";
require.d(exports, {
    B9: ()=>m,
    GR: ()=>u,
    RZ: ()=>p,
    Th: ()=>d,
    WZ: ()=>g,
    bN: ()=>h,
    mH: ()=>a
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
var a = (0, o.QT)(n.proto3, s, "SmartModeClassifierDecision", [
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
], 1), l = (0, o.QT)(n.proto3, s, "SmartModeClassifierRuleEffect", [
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
], 1), c = (0, o.QT)(n.proto3, s, "SmartModeClassifierRuleSource", [
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
class u extends i {
    constructor(e){
        super(), this.role = "", this.content = "", n.proto3.util.initPartial(e, this);
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
            "SmartModeClassifierConversationMessage|1 role 9|2 content 9"
        ];
    }
}
class d extends i {
    constructor(e){
        super(), this.toolCallId = "", this.conversationContext = [], n.proto3.util.initPartial(e, this);
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
            "SmartModeClassifierArgs|1 tool_call_id 9|2 parent_conversation_id 9?|3 target #0|4 conversation_context #1*",
            p,
            u
        ];
    }
}
class p extends i {
    constructor(e){
        super(), this.action = "", n.proto3.util.initPartial(e, this);
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
            "SmartModeRiskTarget|1 action 9|2 arguments #0",
            n.Struct
        ];
    }
}
class h extends i {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "SmartModeClassifierResult|1 success #0 result|2 error #1 result",
            m,
            g
        ];
    }
}
class m extends i {
    constructor(e){
        super(), this.decision = a.UNSPECIFIED, this.appliedRules = [], n.proto3.util.initPartial(e, this);
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
            "SmartModeClassifierSuccess|1 decision #0|2 block_reason 9?|3 proposed_allow_rule 9?|4 applied_rules #1*",
            a,
            f
        ];
    }
}
class f extends i {
    constructor(e){
        super(), this.effect = l.UNSPECIFIED, this.text = "", this.source = c.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new f).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new f).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new f).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(f, e, t);
    }
    static $() {
        return [
            "SmartModeClassifierAppliedRule|1 effect #0|2 text 9|3 source #1",
            l,
            c
        ];
    }
}
class g extends i {
    constructor(e){
        super(), this.error = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new g).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new g).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new g).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(g, e, t);
    }
    static $() {
        return [
            "SmartModeClassifierError|1 error 9"
        ];
    }
}
