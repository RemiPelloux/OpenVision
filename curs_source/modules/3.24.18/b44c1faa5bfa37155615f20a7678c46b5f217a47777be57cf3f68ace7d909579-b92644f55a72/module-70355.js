"use strict";
require.d(exports, {
    $_: ()=>c,
    AH: ()=>p,
    AL: ()=>w,
    CI: ()=>S,
    D2: ()=>h,
    FW: ()=>y,
    H: ()=>v,
    Ks: ()=>a,
    Od: ()=>_,
    Ru: ()=>m,
    U1: ()=>k,
    W0: ()=>u,
    Wn: ()=>b,
    b3: ()=>l,
    hy: ()=>C,
    mL: ()=>g,
    rT: ()=>A,
    rY: ()=>E,
    ty: ()=>d,
    u1: ()=>f,
    uB: ()=>I
});
var n = require("./module-36038.js"), s = require("./module-86209.js"), o = require("./module-8592.js");
class i extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class a extends i {
    constructor(e){
        super(), this.trigger = "", this.contextUsagePercent = 0, this.contextTokens = n.protoInt64.zero, this.contextWindowSize = n.protoInt64.zero, this.messageCount = 0, this.messagesToCompact = 0, this.isFirstCompaction = !1, this.modelParams = [], n.proto3.util.initPartial(e, this);
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
            "PreCompactRequestQuery|1 trigger 9|2 context_usage_percent 1|3 context_tokens 3|4 context_window_size 3|5 message_count 5|6 messages_to_compact 5|7 is_first_compaction 8|8 conversation_id 9?|9 generation_id 9?|10 model 9?|11 model_id 9?|12 model_params #0*",
            s.SR
        ];
    }
}
class c extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "PreCompactRequestResponse|1 user_message 9?"
        ];
    }
}
class l extends i {
    constructor(e){
        super(), this.subagentId = "", this.subagentType = "", this.task = "", this.parentConversationId = "", this.isParallelWorker = !1, this.modelParams = [], n.proto3.util.initPartial(e, this);
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
            "SubagentStartRequestQuery|1 subagent_id 9|2 subagent_type 9|3 task 9|4 parent_conversation_id 9|5 tool_call_id 9?|6 subagent_model 9?|7 is_parallel_worker 8|8 git_branch 9?|9 conversation_id 9?|10 generation_id 9?|11 model 9?|12 model_id 9?|13 model_params #0*",
            s.SR
        ];
    }
}
class u extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "SubagentStartRequestResponse|1 permission 9?|2 user_message 9?|3 additional_context 9?"
        ];
    }
}
class d extends i {
    constructor(e){
        super(), this.subagentId = "", this.subagentType = "", this.status = "", this.durationMs = n.protoInt64.zero, this.parentConversationId = "", this.messageCount = 0, this.toolCallCount = 0, this.modifiedFiles = [], this.loopCount = 0, this.modelParams = [], n.proto3.util.initPartial(e, this);
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
            "SubagentStopRequestQuery|1 subagent_id 9|2 subagent_type 9|3 status 9|4 duration_ms 3|5 summary 9?|6 parent_conversation_id 9|7 message_count 5|8 tool_call_count 5|9 error_message 9?|10 modified_files 9*|11 git_branch 9?|12 conversation_id 9?|13 generation_id 9?|14 model 9?|15 loop_count 5|16 task 9?|17 description 9?|18 model_id 9?|19 model_params #0*|20 child_conversation_id 9?",
            s.SR
        ];
    }
}
class p extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "SubagentStopRequestResponse|1 followup_message 9?|2 additional_context 9?"
        ];
    }
}
class m extends i {
    constructor(e){
        super(), this.type = "", this.filePath = "", n.proto3.util.initPartial(e, this);
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
            "BeforeSubmitPromptAttachment|1 type 9|2 file_path 9"
        ];
    }
}
class h extends i {
    constructor(e){
        super(), this.prompt = "", this.attachments = [], this.modelParams = [], n.proto3.util.initPartial(e, this);
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
            "BeforeSubmitPromptRequestQuery|1 prompt 9|2 attachments #0*|3 composer_mode 9?|4 conversation_id 9?|5 generation_id 9?|6 model 9?|7 model_id 9?|8 model_params #1*",
            m,
            s.SR
        ];
    }
}
class f extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "BeforeSubmitPromptRequestResponse|1 continue 8?|2 user_message 9?|3 additional_context 9?"
        ];
    }
}
class g extends i {
    constructor(e){
        super(), this.text = "", this.modelParams = [], n.proto3.util.initPartial(e, this);
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
            "AfterAgentResponseRequestQuery|1 text 9|2 conversation_id 9?|3 generation_id 9?|4 model 9?|5 model_id 9?|6 model_params #0*|7 input_tokens 3?|8 output_tokens 3?|9 cache_read_tokens 3?|10 cache_write_tokens 3?",
            s.SR
        ];
    }
}
class y extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "AfterAgentResponseRequestResponse"
        ];
    }
}
class w extends i {
    constructor(e){
        super(), this.text = "", this.modelParams = [], n.proto3.util.initPartial(e, this);
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
            "AfterAgentThoughtRequestQuery|1 text 9|2 duration_ms 3?|3 conversation_id 9?|4 generation_id 9?|5 model 9?|6 model_id 9?|7 model_params #0*",
            s.SR
        ];
    }
}
class v extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "AfterAgentThoughtRequestResponse"
        ];
    }
}
class _ extends i {
    constructor(e){
        super(), this.status = "", this.loopCount = 0, this.modelParams = [], n.proto3.util.initPartial(e, this);
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
            "StopRequestQuery|1 status 9|2 loop_count 5|3 conversation_id 9?|4 generation_id 9?|5 model 9?|6 model_id 9?|7 model_params #0*|8 input_tokens 3?|9 output_tokens 3?|10 cache_read_tokens 3?|11 cache_write_tokens 3?",
            s.SR
        ];
    }
}
class A extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "StopRequestResponse|1 followup_message 9?"
        ];
    }
}
class S extends i {
    constructor(e){
        super(), this.toolName = "", this.toolUseId = "", this.modelParams = [], n.proto3.util.initPartial(e, this);
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
            "PreToolUseRequestQuery|1 tool_name 9|2 tool_input #0|3 tool_use_id 9|4 cwd 9?|5 conversation_id 9?|6 generation_id 9?|7 model 9?|8 model_id 9?|9 model_params #1*|10 parent_tool_call_id 9?",
            n.Struct,
            s.SR
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
            "PreToolUseRequestResponse|1 permission 9?|2 user_message 9?|3 agent_message 9?|4 updated_input 9?|5 additional_context 9?"
        ];
    }
}
class E extends i {
    constructor(e){
        super(), this.toolName = "", this.toolOutput = "", this.durationMs = n.protoInt64.zero, this.toolUseId = "", this.modelParams = [], n.proto3.util.initPartial(e, this);
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
            "PostToolUseRequestQuery|1 tool_name 9|2 tool_input #0|3 tool_output 9|4 duration_ms 3|5 tool_use_id 9|6 cwd 9?|7 conversation_id 9?|8 generation_id 9?|9 model 9?|10 model_id 9?|11 model_params #1*|12 parent_tool_call_id 9?",
            n.Struct,
            s.SR
        ];
    }
}
class I extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "PostToolUseRequestResponse|1 additional_context 9?"
        ];
    }
}
class C extends i {
    constructor(e){
        super(), this.toolName = "", this.errorMessage = "", this.failureType = "", this.durationMs = n.protoInt64.zero, this.toolUseId = "", this.isInterrupt = !1, this.modelParams = [], n.proto3.util.initPartial(e, this);
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
            "PostToolUseFailureRequestQuery|1 tool_name 9|2 tool_input #0|3 error_message 9|4 failure_type 9|5 duration_ms 3|6 tool_use_id 9|7 is_interrupt 8|8 conversation_id 9?|9 generation_id 9?|10 model 9?|11 model_id 9?|12 model_params #1*|13 parent_tool_call_id 9?",
            n.Struct,
            s.SR
        ];
    }
}
class k extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "PostToolUseFailureRequestResponse|1 additional_context 9?"
        ];
    }
}
