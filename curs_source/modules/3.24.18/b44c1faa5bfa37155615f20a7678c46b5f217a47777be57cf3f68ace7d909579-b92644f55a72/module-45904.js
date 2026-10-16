"use strict";
require.d(exports, {
    L0: ()=>m,
    Ln: ()=>d,
    Ts: ()=>c,
    YN: ()=>p,
    a4: ()=>u,
    ah: ()=>A,
    f$: ()=>f,
    kF: ()=>v,
    pH: ()=>_,
    u: ()=>l,
    u0: ()=>h
});
var n = require("./module-36038.js"), s = require("./module-8844.js"), o = require("./module-8592.js");
const i = "aiserver.v1.";
class a extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return i;
    }
}
var c = (0, o.QT)(n.proto3, i, "PrivateInferenceInvocationStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SUCCESS"
    ],
    [
        2,
        "ABORTED"
    ],
    [
        3,
        "ERRORED"
    ]
], 1);
class l extends a {
    constructor(e){
        super(), this.modelName = "", this.conversationId = "", this.clientTurnId = "", n.proto3.util.initPartial(e, this);
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
            "AdmitRunRequest|1 model_name 9|2 conversation_id 9|3 client_turn_id 9|4 prompt_model_name 9?|5 prompt_model #0?",
            s.RK
        ];
    }
}
class u extends a {
    constructor(e){
        super(), this.usageUuid = "", n.proto3.util.initPartial(e, this);
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
            "AdmitRunResponse|1 usage_uuid 9|2 prompt_model_metadata #0",
            s.Fw
        ];
    }
}
class d extends a {
    constructor(e){
        super(), this.invocations = [], this.turns = [], n.proto3.util.initPartial(e, this);
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
            "ReportPrivateInferenceUsageRequest|1 invocations #0*|2 turns #1*",
            h,
            p
        ];
    }
}
class p extends a {
    constructor(e){
        super(), this.usageUuid = "", this.invocationCount = 0, this.modelOutputDelivered = !1, n.proto3.util.initPartial(e, this);
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
            "PrivateInferenceTurnOutcome|1 usage_uuid 9|2 finished_at #0|3 invocation_count 5|4 model_output_delivered 8",
            n.Timestamp
        ];
    }
}
class m extends a {
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
            "ReportPrivateInferenceUsageResponse"
        ];
    }
}
class h extends a {
    constructor(e){
        super(), this.usageUuid = "", this.invocationId = "", this.modelId = "", this.status = c.UNSPECIFIED, this.usage = {
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
            "PrivateInferenceInvocationUsage|1 usage_uuid 9|2 invocation_id 9|3 model_id 9|4 observed_at #0|5 status #1|6 inference_reason 9?|7 header_usage #2|10 openai_chat_completions #3 usage|11 openai_responses #4 usage|12 anthropic_messages #5 usage|13 bedrock_converse #6 usage",
            n.Timestamp,
            c,
            f,
            g,
            v,
            S,
            C
        ];
    }
}
class f extends a {
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
            "PrivateInferenceHeaderUsage|1 prompt_tokens 5?|2 cached_prompt_tokens 5?"
        ];
    }
}
class g extends a {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "OpenAIChatCompletionsUsage|1 prompt_tokens 5?|2 completion_tokens 5?|3 prompt_tokens_details #0|4 completion_tokens_details #1|5 input_tokens 5?|6 output_tokens 5?|7 cache_read_input_tokens 5?|8 cache_creation_input_tokens 5?",
            y,
            w
        ];
    }
}
class y extends a {
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
            "OpenAIPromptTokensDetails|1 cached_tokens 5?|2 cache_write_tokens 5?"
        ];
    }
}
class w extends a {
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
            "OpenAICompletionTokensDetails|1 reasoning_tokens 5?"
        ];
    }
}
class v extends a {
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
            "OpenAIResponsesUsage|1 input_tokens 5?|2 output_tokens 5?|3 input_tokens_details #0|4 output_tokens_details #1",
            _,
            A
        ];
    }
}
class _ extends a {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "OpenAIInputTokensDetails|1 cached_tokens 5?|2 cache_write_tokens 5?"
        ];
    }
}
class A extends a {
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
            "OpenAIOutputTokensDetails|1 reasoning_tokens 5?"
        ];
    }
}
class S extends a {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "AnthropicMessagesUsage|1 initial #0|2 final #0",
            b
        ];
    }
}
class b extends a {
    constructor(e){
        super(), this.iterations = [], n.proto3.util.initPartial(e, this);
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
            "AnthropicUsage|1 input_tokens 5?|2 output_tokens 5?|3 cache_creation_input_tokens 5?|4 cache_read_input_tokens 5?|5 iterations #0*|6 cache_creation #1",
            E,
            I
        ];
    }
}
class E extends a {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "AnthropicUsageIteration|1 type 9?|2 model 9?|3 input_tokens 5?|4 output_tokens 5?|5 cache_creation_input_tokens 5?|6 cache_read_input_tokens 5?|7 cache_creation #0",
            I
        ];
    }
}
class I extends a {
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
            "AnthropicCacheCreationUsage|1 ephemeral_5m_input_tokens 5?|2 ephemeral_1h_input_tokens 5?"
        ];
    }
}
class C extends a {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "BedrockConverseUsage|1 input_tokens 5?|2 output_tokens 5?|3 cache_read_input_tokens 5?|4 cache_write_input_tokens 5?"
        ];
    }
}
