"use strict";
require.r(exports), require.d(exports, {
    PrivateInferenceService: ()=>b
});
var n = require("./module-6038.js"), s = require("./module-8844.js"), i = require("./module-8592.js");
const o = "aiserver.v1.";
class a extends i.HL {
    static get runtime() {
        return (0, i.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return o;
    }
}
var u = (0, i.QT)(n.proto3, o, "PrivateInferenceInvocationStatus", [
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
class c extends a {
    constructor(t){
        super(), this.modelName = "", this.conversationId = "", this.clientTurnId = "", n.proto3.util.initPartial(t, this);
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
            "AdmitRunRequest|1 model_name 9|2 conversation_id 9|3 client_turn_id 9|4 prompt_model_name 9?|5 prompt_model #0?",
            s.RK
        ];
    }
}
class l extends a {
    constructor(t){
        super(), this.usageUuid = "", n.proto3.util.initPartial(t, this);
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
            "AdmitRunResponse|1 usage_uuid 9|2 prompt_model_metadata #0",
            s.Fw
        ];
    }
}
class m extends a {
    constructor(t){
        super(), this.invocations = [], this.turns = [], n.proto3.util.initPartial(t, this);
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
            "ReportPrivateInferenceUsageRequest|1 invocations #0*|2 turns #1*",
            p,
            d
        ];
    }
}
class d extends a {
    constructor(t){
        super(), this.usageUuid = "", this.invocationCount = 0, this.modelOutputDelivered = !1, n.proto3.util.initPartial(t, this);
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
            "PrivateInferenceTurnOutcome|1 usage_uuid 9|2 finished_at #0|3 invocation_count 5|4 model_output_delivered 8",
            n.Timestamp
        ];
    }
}
class f extends a {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "ReportPrivateInferenceUsageResponse"
        ];
    }
}
class p extends a {
    constructor(t){
        super(), this.usageUuid = "", this.invocationId = "", this.modelId = "", this.status = u.UNSPECIFIED, this.usage = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "PrivateInferenceInvocationUsage|1 usage_uuid 9|2 invocation_id 9|3 model_id 9|4 observed_at #0|5 status #1|6 inference_reason 9?|7 header_usage #2|10 openai_chat_completions #3 usage|11 openai_responses #4 usage|12 anthropic_messages #5 usage|13 bedrock_converse #6 usage",
            n.Timestamp,
            u,
            h,
            g,
            y,
            J,
            C
        ];
    }
}
class h extends a {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "PrivateInferenceHeaderUsage|1 prompt_tokens 5?|2 cached_prompt_tokens 5?"
        ];
    }
}
class g extends a {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "OpenAIChatCompletionsUsage|1 prompt_tokens 5?|2 completion_tokens 5?|3 prompt_tokens_details #0|4 completion_tokens_details #1|5 input_tokens 5?|6 output_tokens 5?|7 cache_read_input_tokens 5?|8 cache_creation_input_tokens 5?",
            A,
            _
        ];
    }
}
class A extends a {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new A).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new A).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new A).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(A, t, e);
    }
    static $() {
        return [
            "OpenAIPromptTokensDetails|1 cached_tokens 5?|2 cache_write_tokens 5?"
        ];
    }
}
class _ extends a {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_, t, e);
    }
    static $() {
        return [
            "OpenAICompletionTokensDetails|1 reasoning_tokens 5?"
        ];
    }
}
class y extends a {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new y).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new y).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new y).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(y, t, e);
    }
    static $() {
        return [
            "OpenAIResponsesUsage|1 input_tokens 5?|2 output_tokens 5?|3 input_tokens_details #0|4 output_tokens_details #1",
            w,
            S
        ];
    }
}
class w extends a {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new w).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new w).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new w).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(w, t, e);
    }
    static $() {
        return [
            "OpenAIInputTokensDetails|1 cached_tokens 5?|2 cache_write_tokens 5?"
        ];
    }
}
class S extends a {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new S).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new S).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new S).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(S, t, e);
    }
    static $() {
        return [
            "OpenAIOutputTokensDetails|1 reasoning_tokens 5?"
        ];
    }
}
class J extends a {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new J).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new J).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new J).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(J, t, e);
    }
    static $() {
        return [
            "AnthropicMessagesUsage|1 initial #0|2 final #0",
            B
        ];
    }
}
class B extends a {
    constructor(t){
        super(), this.iterations = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new B).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new B).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new B).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(B, t, e);
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
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new E).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new E).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new E).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(E, t, e);
    }
    static $() {
        return [
            "AnthropicUsageIteration|1 type 9?|2 model 9?|3 input_tokens 5?|4 output_tokens 5?|5 cache_creation_input_tokens 5?|6 cache_read_input_tokens 5?|7 cache_creation #0",
            I
        ];
    }
}
class I extends a {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new I).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new I).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new I).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(I, t, e);
    }
    static $() {
        return [
            "AnthropicCacheCreationUsage|1 ephemeral_5m_input_tokens 5?|2 ephemeral_1h_input_tokens 5?"
        ];
    }
}
class C extends a {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new C).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new C).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new C).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(C, t, e);
    }
    static $() {
        return [
            "BedrockConverseUsage|1 input_tokens 5?|2 output_tokens 5?|3 cache_read_input_tokens 5?|4 cache_write_input_tokens 5?"
        ];
    }
}
const b = {
    typeName: "aiserver.v1.PrivateInferenceService",
    methods: {
        admitRun: {
            name: "AdmitRun",
            I: c,
            O: l,
            kind: n.MethodKind.Unary
        },
        reportUsage: {
            name: "ReportUsage",
            I: m,
            O: f,
            kind: n.MethodKind.Unary
        }
    }
};
