"use strict";
require.d(exports, {
    HJ: ()=>_,
    Hq: ()=>w,
    L5: ()=>y,
    N9: ()=>p,
    Pw: ()=>d,
    S3: ()=>S,
    TN: ()=>h,
    Y: ()=>v,
    a3: ()=>b,
    bE: ()=>g,
    jh: ()=>u,
    od: ()=>A,
    vS: ()=>m,
    zJ: ()=>f
});
var n = require("./module-36038.js"), s = require("./module-86209.js"), o = require("./module-11491.js"), i = require("./module-89582.js"), a = require("./module-8592.js");
const c = "agent.v1.";
class l extends a.HL {
    static get runtime() {
        return (0, a.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return c;
    }
}
var u = (0, a.QT)(n.proto3, c, "ForceBackgroundSubagentStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ACCEPTED"
    ],
    [
        2,
        "NOT_FOUND"
    ]
], 1);
class d extends l {
    constructor(e){
        super(), this.toolCallId = "", this.subagentType = "", this.modelId = "", this.prompt = "", this.readonly = !1, this.credentials = {
            case: void 0
        }, this.mode = o.FL.UNSPECIFIED, this.environment = o.dU.UNSPECIFIED, this.modelParameters = [], n.proto3.util.initPartial(e, this);
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
            "SubagentArgs|1 tool_call_id 9|2 subagent_type 9|3 model_id 9|4 prompt 9|5 readonly 8|6 resume_agent_id 9?|7 run_in_background 8?|8 continuation_config #0|9 parent_conversation_id 9?|10 api_key_credentials #1 credentials|11 azure_credentials #2 credentials|12 bedrock_credentials #3 credentials|13 interrupt 8?|14 mode #4|15 fork_agent_id 9?|16 root_parent_conversation_id 9?|17 selected_context #5?|18 direct_meta_parent_child_subagent 8?|19 environment #6|20 cloud_base_branch 9?|21 model_parameters #7*",
            p,
            s.G0,
            s.ih,
            s.R4,
            o.FL,
            i.xv,
            o.dU,
            s.SR
        ];
    }
}
class p extends l {
    constructor(e){
        super(), this.idleThreshold = 0, this.maxLoops = 0, this.nudgeMessage = "", this.escapeMessageTemplate = "", this.collectBackgroundChildren = !1, this.childrenCompletedMessageTemplate = "", this.continuationRoundDelayMs = 0, n.proto3.util.initPartial(e, this);
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
            "ClientContinuationConfig|1 idle_threshold 5|2 max_loops 5|3 nudge_message 9|4 escape_message_template 9|5 collect_background_children 8|6 children_completed_message_template 9|7 continuation_round_delay_ms 5"
        ];
    }
}
class m extends l {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "SubagentResult|1 success #0 result|2 error #1 result",
            _,
            A
        ];
    }
}
class h extends l {
    constructor(e){
        super(), this.agentId = "", this.timeoutMs = 0, n.proto3.util.initPartial(e, this);
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
            "SubagentAwaitArgs|1 agent_id 9|2 timeout_ms 13"
        ];
    }
}
class f extends l {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "SubagentAwaitResult|1 complete #0 result|2 still_running #1 result|3 not_found #2 result|4 error #3 result",
            g,
            y,
            w,
            v
        ];
    }
}
class g extends l {
    constructor(e){
        super(), this.agentId = "", this.toolCallCount = 0, n.proto3.util.initPartial(e, this);
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
            "SubagentAwaitComplete|1 agent_id 9|2 transcript_path 9?|3 tool_call_count 5|4 final_message 9?"
        ];
    }
}
class y extends l {
    constructor(e){
        super(), this.agentId = "", n.proto3.util.initPartial(e, this);
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
            "SubagentAwaitStillRunning|1 agent_id 9|2 transcript_path 9?"
        ];
    }
}
class w extends l {
    constructor(e){
        super(), this.agentId = "", n.proto3.util.initPartial(e, this);
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
            "SubagentAwaitNotFound|1 agent_id 9"
        ];
    }
}
class v extends l {
    constructor(e){
        super(), this.error = "", n.proto3.util.initPartial(e, this);
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
            "SubagentAwaitError|1 agent_id 9?|2 error 9"
        ];
    }
}
class _ extends l {
    constructor(e){
        super(), this.agentId = "", this.toolCallCount = 0, this.backgroundReason = o.qL.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "SubagentSuccess|1 agent_id 9|2 final_message 9?|3 tool_call_count 5|4 background_reason #0|5 transcript_path 9?",
            o.qL
        ];
    }
}
class A extends l {
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
            "SubagentError|1 agent_id 9?|2 error 9"
        ];
    }
}
class S extends l {
    constructor(e){
        super(), this.toolCallId = "", n.proto3.util.initPartial(e, this);
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
            "ForceBackgroundSubagentArgs|1 tool_call_id 9"
        ];
    }
}
class b extends l {
    constructor(e){
        super(), this.status = u.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "ForceBackgroundSubagentResult|1 status #0",
            u
        ];
    }
}
