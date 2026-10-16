"use strict";
require.d(exports, {
    $y: ()=>k,
    D: ()=>c,
    K2: ()=>l,
    NT: ()=>E,
    PL: ()=>w,
    Pw: ()=>g,
    UR: ()=>J,
    Wy: ()=>d,
    Yc: ()=>A,
    Zd: ()=>_,
    b6: ()=>T,
    bY: ()=>P,
    c6: ()=>h,
    h2: ()=>I,
    hA: ()=>v,
    iN: ()=>y,
    kX: ()=>m,
    lC: ()=>u,
    lm: ()=>R,
    mE: ()=>B,
    o3: ()=>C,
    oV: ()=>x,
    rL: ()=>S,
    sM: ()=>f,
    wm: ()=>b,
    xX: ()=>p
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
var a = (0, s.QT)(n.proto3, o, "CreateAgentPlacementApprovalState", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "REQUIRED"
    ],
    [
        2,
        "DENIED"
    ]
], 1);
class c extends i {
    constructor(e){
        super(), this.toolCallId = "", this.agentIds = [], n.proto3.util.initPartial(e, this);
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
            "GetAgentStatusArgs|1 tool_call_id 9|2 agent_ids 9*"
        ];
    }
}
class l extends i {
    constructor(e){
        super(), this.bcId = "", this.name = "", this.lifecycle = "", this.turnInFlight = !1, this.lastTerminalTurnStatus = "", this.prUrl = "", this.lastActivityAtMs = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
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
            "GetAgentStatusWorker|1 bc_id 9|2 name 9|3 lifecycle 9|4 turn_in_flight 8|5 last_terminal_turn_status 9|6 pr_url 9|7 last_activity_at_ms 4"
        ];
    }
}
class u extends i {
    constructor(e){
        super(), this.workers = [], this.message = "", n.proto3.util.initPartial(e, this);
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
            "GetAgentStatusSuccess|1 workers #0*|2 message 9",
            l
        ];
    }
}
class d extends i {
    constructor(e){
        super(), this.error = "", n.proto3.util.initPartial(e, this);
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
            "GetAgentStatusError|1 error 9"
        ];
    }
}
class p extends i {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "GetAgentStatusResult|1 success #0 result|2 error #1 result",
            u,
            d
        ];
    }
}
class m extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "GetAgentStatusToolCall|1 args #0|2 result #1",
            c,
            p
        ];
    }
}
class h extends i {
    constructor(e){
        super(), this.toolCallId = "", this.agentId = "", this.message = "", this.delivery = "", this.title = "", n.proto3.util.initPartial(e, this);
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
            "SendToAgentArgs|1 tool_call_id 9|2 agent_id 9|3 message 9|4 delivery 9|5 title 9|6 model 9?"
        ];
    }
}
class f extends i {
    constructor(e){
        super(), this.workerBcId = "", this.deliveredAs = "", this.message = "", n.proto3.util.initPartial(e, this);
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
            "SendToAgentSuccess|1 worker_bc_id 9|2 delivered_as 9|3 message 9"
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
            "SendToAgentError|1 error 9"
        ];
    }
}
class y extends i {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new y).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new y).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new y).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(y, e, t);
    }
    static $() {
        return [
            "SendToAgentResult|1 success #0 result|2 error #1 result",
            f,
            g
        ];
    }
}
class w extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new w).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new w).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new w).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(w, e, t);
    }
    static $() {
        return [
            "SendToAgentToolCall|1 args #0|2 result #1",
            h,
            y
        ];
    }
}
class v extends i {
    constructor(e){
        super(), this.toolCallId = "", this.agentId = "", this.mode = "", this.maxTurns = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new v).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new v).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new v).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(v, e, t);
    }
    static $() {
        return [
            "ReadAgentTranscriptArgs|1 tool_call_id 9|2 agent_id 9|3 mode 9|4 max_turns 13"
        ];
    }
}
class _ extends i {
    constructor(e){
        super(), this.transcript = "", this.truncated = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_, e, t);
    }
    static $() {
        return [
            "ReadAgentTranscriptSuccess|1 transcript 9|2 truncated 8"
        ];
    }
}
class A extends i {
    constructor(e){
        super(), this.error = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new A).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new A).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new A).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(A, e, t);
    }
    static $() {
        return [
            "ReadAgentTranscriptError|1 error 9"
        ];
    }
}
class S extends i {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new S).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new S).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new S).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(S, e, t);
    }
    static $() {
        return [
            "ReadAgentTranscriptResult|1 success #0 result|2 error #1 result",
            _,
            A
        ];
    }
}
class b extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new b).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new b).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new b).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(b, e, t);
    }
    static $() {
        return [
            "ReadAgentTranscriptToolCall|1 args #0|2 result #1",
            v,
            S
        ];
    }
}
class E extends i {
    constructor(e){
        super(), this.toolCallId = "", this.prompt = "", this.labels = {}, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new E).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new E).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new E).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(E, e, t);
    }
    static $() {
        return [
            "CreateAgentArgs|1 tool_call_id 9|2 prompt 9|3 name 9?|4 model 9?|5 base_branch 9?|6 machine_type 9?|7 worker_id 9?|8 pool 9?|9 labels 9,9|10 environment_build_id 9?|11 environment_id 9?"
        ];
    }
}
class I extends i {
    constructor(e){
        super(), this.agentId = "", this.message = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new I).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new I).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new I).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(I, e, t);
    }
    static $() {
        return [
            "CreateAgentSuccess|1 agent_id 9|2 message 9"
        ];
    }
}
class C extends i {
    constructor(e){
        super(), this.error = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new C).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new C).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new C).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(C, e, t);
    }
    static $() {
        return [
            "CreateAgentError|1 error 9|2 placement_approval_state #0?",
            a
        ];
    }
}
class k extends i {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new k).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new k).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new k).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(k, e, t);
    }
    static $() {
        return [
            "CreateAgentResult|1 success #0 result|2 error #1 result",
            I,
            C
        ];
    }
}
class x extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new x).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new x).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new x).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(x, e, t);
    }
    static $() {
        return [
            "CreateAgentToolCall|1 args #0|2 result #1",
            E,
            k
        ];
    }
}
class T extends i {
    constructor(e){
        super(), this.toolCallId = "", this.agentId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new T).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new T).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new T).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(T, e, t);
    }
    static $() {
        return [
            "StopAgentArgs|1 tool_call_id 9|2 agent_id 9"
        ];
    }
}
class R extends i {
    constructor(e){
        super(), this.workerBcId = "", this.message = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new R).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new R).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new R).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(R, e, t);
    }
    static $() {
        return [
            "StopAgentSuccess|1 worker_bc_id 9|2 message 9"
        ];
    }
}
class B extends i {
    constructor(e){
        super(), this.error = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new B).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new B).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new B).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(B, e, t);
    }
    static $() {
        return [
            "StopAgentError|1 error 9"
        ];
    }
}
class P extends i {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new P).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new P).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new P).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(P, e, t);
    }
    static $() {
        return [
            "StopAgentResult|1 success #0 result|2 error #1 result",
            R,
            B
        ];
    }
}
class J extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new J).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new J).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new J).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(J, e, t);
    }
    static $() {
        return [
            "StopAgentToolCall|1 args #0|2 result #1",
            T,
            P
        ];
    }
}
