"use strict";
require.d(exports, {
    AC: ()=>X,
    Am: ()=>k,
    C7: ()=>w,
    D4: ()=>ge,
    DI: ()=>T,
    FN: ()=>p,
    FT: ()=>pe,
    Fw: ()=>Ee,
    G2: ()=>fe,
    Hc: ()=>l,
    IS: ()=>oe,
    KU: ()=>b,
    Mg: ()=>S,
    NN: ()=>h,
    R8: ()=>m,
    RK: ()=>g,
    S0: ()=>me,
    SD: ()=>ce,
    ST: ()=>de,
    Vr: ()=>x,
    WC: ()=>A,
    X0: ()=>ee,
    YG: ()=>he,
    Zc: ()=>f,
    Zf: ()=>ie,
    b7: ()=>_,
    bn: ()=>v,
    eQ: ()=>$,
    fJ: ()=>ye,
    iG: ()=>Z,
    iv: ()=>ae,
    jK: ()=>R,
    jR: ()=>se,
    kG: ()=>re,
    lj: ()=>le,
    m3: ()=>I,
    nF: ()=>y,
    nO: ()=>C,
    ni: ()=>ue,
    pQ: ()=>Y,
    qL: ()=>d,
    tB: ()=>u,
    up: ()=>Q,
    yJ: ()=>te
});
var n = require("./module-36038.js"), s = require("./module-43955.js"), o = require("./module-8592.js");
const i = "aiserver.v1.";
class a extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return i;
    }
}
var c = (0, o.QT)(n.proto3, i, "InferenceReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "GEMINI_VIDEO_SUBAGENT"
    ],
    [
        2,
        "GROK_BOT_PROACTIVITY_SUBAGENT"
    ]
], 1), l = (0, o.QT)(n.proto3, i, "InferenceAssistantPartKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "REASONING"
    ],
    [
        2,
        "TEXT"
    ],
    [
        3,
        "TOOL_CALL"
    ]
], 1), u = (0, o.QT)(n.proto3, i, "InferenceMessageRole", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "USER"
    ],
    [
        2,
        "ASSISTANT"
    ],
    [
        3,
        "TOOL"
    ],
    [
        4,
        "SYSTEM"
    ]
], 1), d = (0, o.QT)(n.proto3, i, "InferenceStreamErrorType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "UNKNOWN"
    ],
    [
        2,
        "INPUT_TOKEN_LIMIT"
    ],
    [
        3,
        "OUTPUT_TOKEN_LIMIT"
    ],
    [
        4,
        "RATE_LIMIT"
    ],
    [
        5,
        "AUTHENTICATION"
    ],
    [
        6,
        "PERMISSION"
    ],
    [
        7,
        "OVERLOADED"
    ],
    [
        8,
        "CONTENT_FILTER"
    ]
], 1), p = (0, o.QT)(n.proto3, i, "RunInferenceAgentModuleSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "STATIC"
    ],
    [
        2,
        "FLOOR"
    ],
    [
        3,
        "INSTALLED"
    ]
], 1), m = (0, o.QT)(n.proto3, i, "RunInferenceRoutingRole", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "USER"
    ],
    [
        2,
        "ASSISTANT"
    ]
], 1), h = (0, o.QT)(n.proto3, i, "RunInferenceInvocationPurpose", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CONTEXT_SUMMARIZATION"
    ]
], 1);
class f extends a {
    constructor(e){
        super(), this.messages = [], this.tools = [], this.providerDefinedTools = [], this.acceptedUnadvertisedToolNames = [], n.proto3.util.initPartial(e, this);
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
            "InferenceStreamRequest|1 messages #0*|2 tools #1*|3 provider_defined_tools #2*|4 model_config #3?|5 model_id 9?|6 invocation_id 9?|7 requested_model #4?|8 conversation_id 9?|9 accepted_unadvertised_tool_names 9*|10 automation_id 9?|11 inference_reason #5?|12 conversation_group_id 9?|13 parent_request_id 9?|14 root_parent_request_id 9?|15 parent_agent_tool_call_id 9?|16 subagent_type 9?|17 compaction_epoch 5?|18 turn_unit_id 9?|19 turn_unit_type 9?|20 originating_flow 9?|21 routing_reason 9?|22 summarized_message_count 5?|23 is_simulated_msg 8?|24 simulated_msg_reason 5?",
            w,
            C,
            x,
            T,
            g,
            c
        ];
    }
}
class g extends a {
    constructor(e){
        super(), this.modelId = "", this.maxMode = !1, this.parameters = [], this.builtInModel = !1, n.proto3.util.initPartial(e, this);
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
            "InferenceRequestedModel|1 model_id 9|2 max_mode 8|3 parameters #0*|4 built_in_model 8",
            y
        ];
    }
}
class y extends a {
    constructor(e){
        super(), this.id = "", this.value = "", n.proto3.util.initPartial(e, this);
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
            "InferenceModelParameterValue|1 id 9|2 value 9"
        ];
    }
}
class w extends a {
    constructor(e){
        super(), this.role = u.UNSPECIFIED, this.content = {
            case: void 0
        }, this.toolCalls = [], this.reasoningParts = [], this.assistantPartOrder = [], this.assistantTextParts = [], n.proto3.util.initPartial(e, this);
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
            "InferenceCoreMessage|1 role #0|2 text 9 content|3 parts #1 content|6 tool_content #2 content|4 tool_calls #3*|7 reasoning_parts #4*|8 model_provider_message_id 9?|9 openai_phase 9?|10 openai_phase_null 8?|11 cursor_inference_reason 9?|12 cursor_feature_type 9?|13 cursor_is_summary 8?|14 cursor_clear_at 9?|15 cursor_fallback_insert_before 9?|16 assistant_part_order #5*|17 assistant_text_parts 9*|18 anthropic_native_content 9?|19 lineage_tag 9?|20 cursor_request_id 9?",
            u,
            _,
            $,
            I,
            v,
            l
        ];
    }
}
class v extends a {
    constructor(e){
        super(), this.isRedacted = !1, this.text = "", n.proto3.util.initPartial(e, this);
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
            "InferenceReasoningPart|1 is_redacted 8|2 text 9|3 signature 9?|4 redacted_data 9?|5 model_name 9?|6 lineage_tag 9?"
        ];
    }
}
class _ extends a {
    constructor(e){
        super(), this.parts = [], n.proto3.util.initPartial(e, this);
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
            "InferenceContentParts|1 parts #0*",
            A
        ];
    }
}
class A extends a {
    constructor(e){
        super(), this.part = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "InferenceContentPart|1 text #0 part|2 image #1 part|3 file #2 part",
            S,
            b,
            E
        ];
    }
}
class S extends a {
    constructor(e){
        super(), this.text = "", n.proto3.util.initPartial(e, this);
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
            "InferenceTextPart|1 text 9|2 provider_options #0?",
            Y
        ];
    }
}
class b extends a {
    constructor(e){
        super(), this.data = "", n.proto3.util.initPartial(e, this);
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
            "InferenceImagePart|1 data 9|2 mime_type 9?|3 provider_options #0?",
            Y
        ];
    }
}
class E extends a {
    constructor(e){
        super(), this.data = "", this.mediaType = "", n.proto3.util.initPartial(e, this);
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
            "InferenceFilePart|1 data 9|2 media_type 9|3 filename 9?|4 provider_options #0?",
            Y
        ];
    }
}
class I extends a {
    constructor(e){
        super(), this.toolCallId = "", this.toolName = "", n.proto3.util.initPartial(e, this);
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
            "InferenceToolCall|1 tool_call_id 9|2 tool_name 9|3 args #0|4 raw_tool_call_args 9?",
            n.Struct
        ];
    }
}
class C extends a {
    constructor(e){
        super(), this.name = "", this.description = "", n.proto3.util.initPartial(e, this);
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
            "InferenceAgentTool|1 name 9|2 description 9|3 parameters #0|4 custom_tool_format #1?",
            n.Struct,
            k
        ];
    }
}
class k extends a {
    constructor(e){
        super(), this.type = "", this.definition = "", this.syntax = "", n.proto3.util.initPartial(e, this);
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
            "InferenceCustomToolFormat|1 type 9|2 definition 9|3 syntax 9"
        ];
    }
}
class x extends a {
    constructor(e){
        super(), this.name = "", this.id = "", this.type = "", n.proto3.util.initPartial(e, this);
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
            "InferenceNamedProviderDefinedTool|1 name 9|2 id 9|3 type 9|4 options #0",
            n.Struct
        ];
    }
}
class T extends a {
    constructor(e){
        super(), this.stopSequences = [], n.proto3.util.initPartial(e, this);
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
            "InferenceModelConfig|1 max_tokens 5?|2 temperature 2?|3 top_p 2?|4 stop_sequences 9*"
        ];
    }
}
class R extends a {
    constructor(e){
        super(), this.response = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "InferenceStreamResponse|1 text_part #0 response|2 tool_call_part #1 response|3 usage #2 response|4 response_info #3 response|5 extended_usage #4 response|6 provider_metadata #5 response|7 invocation_id #6 response|8 error #7 response|9 thinking_part #8 response|10 image_descriptions #9 response|11 lineage_tags #10 response",
            q,
            O,
            N,
            U,
            F,
            W,
            V,
            K,
            D,
            J,
            B
        ];
    }
}
class B extends a {
    constructor(e){
        super(), this.tags = [], n.proto3.util.initPartial(e, this);
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
            "InferenceLineageTagsInfo|1 tags #0*",
            P
        ];
    }
}
class P extends a {
    constructor(e){
        super(), this.messageIndex = 0, this.tag = "", this.reasoningTags = [], n.proto3.util.initPartial(e, this);
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
            "InferenceLineageTag|1 message_index 5|2 tag 9|3 reasoning_tags 9*"
        ];
    }
}
class J extends a {
    constructor(e){
        super(), this.descriptions = [], n.proto3.util.initPartial(e, this);
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
            "InferenceImageDescriptionsInfo|1 descriptions #0*",
            M
        ];
    }
}
class M extends a {
    constructor(e){
        super(), this.messageIndex = 0, this.partIndex = 0, this.description = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new M).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new M).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new M).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(M, e, t);
    }
    static $() {
        return [
            "InferenceImageDescription|1 message_index 5|2 part_index 5|3 exp_content_index 5?|4 description 9"
        ];
    }
}
class q extends a {
    constructor(e){
        super(), this.text = "", this.isFinal = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new q).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new q).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new q).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(q, e, t);
    }
    static $() {
        return [
            "InferenceTextStreamPart|1 text 9|2 is_final 8"
        ];
    }
}
class D extends a {
    constructor(e){
        super(), this.text = "", this.isFinal = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new D).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new D).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new D).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(D, e, t);
    }
    static $() {
        return [
            "InferenceThinkingStreamPart|1 text 9|2 signature 9?|3 is_final 8|4 is_already_summarized 8?|5 model_name 9?|6 redacted_data 9?"
        ];
    }
}
class O extends a {
    constructor(e){
        super(), this.toolCallId = "", this.toolName = "", this.args = "", this.isComplete = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new O).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new O).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new O).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(O, e, t);
    }
    static $() {
        return [
            "InferenceToolCallStreamPart|1 tool_call_id 9|2 tool_name 9|3 args 9|4 is_complete 8|5 tool_index 5?"
        ];
    }
}
class N extends a {
    constructor(e){
        super(), this.promptTokens = 0, this.completionTokens = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new N).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new N).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new N).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(N, e, t);
    }
    static $() {
        return [
            "InferenceUsageInfo|1 prompt_tokens 5|2 completion_tokens 5|3 total_tokens 5?"
        ];
    }
}
class F extends a {
    constructor(e){
        super(), this.inputTokens = 0, this.outputTokens = 0, this.cacheReadTokens = 0, this.cacheWriteTokens = 0, this.maxTokens = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new F).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new F).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new F).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(F, e, t);
    }
    static $() {
        return [
            "InferenceExtendedUsageInfo|1 input_tokens 5|2 output_tokens 5|3 cache_read_tokens 5|4 cache_write_tokens 5|5 max_tokens 5|6 reasoning_tokens 5?"
        ];
    }
}
class U extends a {
    constructor(e){
        super(), this.id = "", this.model = "", this.createdAt = n.protoInt64.zero, this.messages = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new U).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new U).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new U).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(U, e, t);
    }
    static $() {
        return [
            "InferenceResponseInfo|1 id 9|2 model 9|3 created_at 3|4 messages #0*|5 error_message 9?|6 inference_extra_data #1?|7 supports_self_summary 8?|8 early_compaction_context_token_threshold 5?",
            L,
            j
        ];
    }
}
class L extends a {
    constructor(e){
        super(), this.id = "", this.role = u.UNSPECIFIED, this.toolCalls = [], this.reasoningParts = [], this.assistantPartOrder = [], this.assistantTextParts = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new L).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new L).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new L).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(L, e, t);
    }
    static $() {
        return [
            "InferenceResponseMessage|1 id 9|2 role #0|3 content 9?|4 tool_calls #1*|5 tool_result #2?|6 reasoning_parts #3*|7 model_provider_message_id 9?|8 openai_phase 9?|9 openai_phase_null 8?|10 assistant_part_order #4*|11 assistant_text_parts 9*|12 anthropic_native_content 9?|13 lineage_tag 9?",
            u,
            I,
            $,
            v,
            l
        ];
    }
}
class $ extends a {
    constructor(e){
        super(), this.parts = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new $).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new $).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new $).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals($, e, t);
    }
    static $() {
        return [
            "InferenceToolResultContent|1 parts #0*",
            Q
        ];
    }
}
class Q extends a {
    constructor(e){
        super(), this.toolCallId = "", this.toolName = "", this.isError = !1, this.experimentalContent = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Q).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Q).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Q).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Q, e, t);
    }
    static $() {
        return [
            "InferenceToolResultPart|1 tool_call_id 9|2 tool_name 9|3 result #0|4 is_error 8|5 experimental_content #1*|6 provider_options #2?|7 cursor_tool_call_is_error 8?",
            n.Value,
            A,
            Y
        ];
    }
}
class j extends a {
    constructor(e){
        super(), this.tokenLogprobs = [], this.tokenIds = [], this.promptTokenIds = [], this.extraTokens = [], this.extraLogprobs = [], this.routingMatrix = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new j).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new j).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new j).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(j, e, t);
    }
    static $() {
        return [
            "InferenceExtraData|1 token_logprobs #0*|2 token_ids #1*|3 prompt_token_ids #1*|4 extra_tokens #1*|5 extra_logprobs #0*|6 routing_matrix #2*",
            G,
            H,
            z
        ];
    }
}
class G extends a {
    constructor(e){
        super(), this.values = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new G).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new G).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new G).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(G, e, t);
    }
    static $() {
        return [
            "InferenceTokenLogprobs|1 values 1*"
        ];
    }
}
class H extends a {
    constructor(e){
        super(), this.values = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new H).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new H).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new H).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(H, e, t);
    }
    static $() {
        return [
            "InferenceTokenIds|1 values 3*"
        ];
    }
}
class z extends a {
    constructor(e){
        super(), this.values = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new z).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new z).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new z).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(z, e, t);
    }
    static $() {
        return [
            "InferenceRoutingRow|1 values 9*"
        ];
    }
}
class W extends a {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new W).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new W).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new W).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(W, e, t);
    }
    static $() {
        return [
            "InferenceProviderMetadataInfo|1 metadata #0",
            n.Struct
        ];
    }
}
class V extends a {
    constructor(e){
        super(), this.invocationId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new V).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new V).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new V).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(V, e, t);
    }
    static $() {
        return [
            "InferenceInvocationIdInfo|1 invocation_id 9"
        ];
    }
}
class K extends a {
    constructor(e){
        super(), this.message = "", this.code = "", this.isInputTokenLimitError = !1, this.isOutputTokenLimitError = !1, this.errorType = d.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new K).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new K).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new K).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(K, e, t);
    }
    static $() {
        return [
            "InferenceStreamError|1 message 9|2 code 9|3 is_input_token_limit_error 8|4 is_output_token_limit_error 8|5 error_type #0",
            d
        ];
    }
}
class Y extends a {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Y).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Y).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Y).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Y, e, t);
    }
    static $() {
        return [
            "InferenceProviderOptions|1 anthropic #0?|2 cursor #1?",
            X,
            Z
        ];
    }
}
class Z extends a {
    constructor(e){
        super(), this.imageDescriptions = {}, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Z).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Z).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Z).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Z, e, t);
    }
    static $() {
        return [
            "InferenceCursorOptions|1 image_description 9?|2 image_descriptions 5,9|3 image_content_sha256 9?"
        ];
    }
}
class X extends a {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new X).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new X).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new X).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(X, e, t);
    }
    static $() {
        return [
            "InferenceAnthropicOptions|1 cache_control #0?",
            ee
        ];
    }
}
class ee extends a {
    constructor(e){
        super(), this.type = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ee).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ee).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ee).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ee, e, t);
    }
    static $() {
        return [
            "InferenceCacheControl|1 type 9"
        ];
    }
}
class te extends a {
    constructor(e){
        super(), this.requestId = "", this.replyingToRequestId = "", this.messages = [], this.messageRequestIds = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new te).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new te).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new te).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(te, e, t);
    }
    static $() {
        return [
            "AgentFollowupCategorizationRequest|1 request_id 9|2 replying_to_request_id 9|3 messages #0*|4 conversation_id 9?|5 agent_mode 9?|6 model_name 9?|7 served_model_name 9?|8 turn_agent_mode 9?|9 message_request_ids 9*",
            w
        ];
    }
}
class re extends a {
    constructor(e){
        super(), this.requestId = "", this.messages = [], this.externalSends = [], this.parentMessages = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new re).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new re).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new re).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(re, e, t);
    }
    static $() {
        return [
            "AgentPostTurnLabelingRequest|1 request_id 9|2 messages #0*|3 conversation_id 9?|4 agent_mode 9?|5 model_name 9?|6 external_sends #1*|7 external_send_only 8?|8 request_source 9?|9 is_subagent 8?|10 parent_messages #0*|11 external_send_reported 8?|12 turn_agent_mode 9?",
            w,
            ne
        ];
    }
}
class ne extends a {
    constructor(e){
        super(), this.toolCallId = "", this.toolName = "", this.connector = "", this.humanApprovedCard = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ne).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ne).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ne).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ne, e, t);
    }
    static $() {
        return [
            "AgentPostTurnExternalSend|1 tool_call_id 9|2 tool_name 9|3 connector 9|4 human_approved_card 8"
        ];
    }
}
class se extends a {
    constructor(e){
        super(), this.message = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new se).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new se).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new se).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(se, e, t);
    }
    static $() {
        return [
            "RunInferenceClientMessage|1 run_request #0 message|2 invoke_model #1 message|3 cancel_invocation #2 message|4 finish_run #3 message|5 client_heartbeat #4 message|6 agent_event #5 message|7 run_request_log #6 message|9 resolve_subagent_models #7 message",
            le,
            he,
            fe,
            ge,
            oe,
            ce,
            ie,
            ae
        ];
    }
}
class oe extends a {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new oe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new oe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new oe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(oe, e, t);
    }
    static $() {
        return [
            "RunInferenceClientHeartbeat"
        ];
    }
}
class ie extends a {
    constructor(e){
        super(), this.agentRunRequest = new Uint8Array(0), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ie).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ie).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ie).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ie, e, t);
    }
    static $() {
        return [
            "RunInferenceRunRequestLog|1 agent_run_request 12"
        ];
    }
}
class ae extends a {
    constructor(e){
        super(), this.resolutionId = "", this.requestedModels = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ae).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ae).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ae).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ae, e, t);
    }
    static $() {
        return [
            "RunInferenceResolveSubagentModels|1 resolution_id 9|2 requested_models 9*"
        ];
    }
}
class ce extends a {
    constructor(e){
        super(), this.methodName = "", this.optionsJson = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ce).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ce).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ce).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ce, e, t);
    }
    static $() {
        return [
            "RunInferenceAgentEvent|1 method_name 9|2 options_json 9|3 client_reported_at_ms 3?"
        ];
    }
}
class le extends a {
    constructor(e){
        super(), this.conversationId = "", this.routingConversation = [], this.selectedSubagentModels = [], this.subagentModelOverrides = [], this.supportsLongReasoningReminder = !1, this.supportsAgentLoopError = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new le).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new le).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new le).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(le, e, t);
    }
    static $() {
        return [
            "RunInferenceRunRequest|1 conversation_id 9|2 conversation_group_id 9?|3 requested_model #0|4 routing_conversation #1*|5 agent_mode 9?|6 subagent_type_name 9?|7 selected_subagent_models #0*|8 subagent_model_overrides #2*|9 is_summarize_action 8?|10 supports_long_reasoning_reminder 8|11 agent_module #3?|12 previous_request_id 9?|15 execute_plan #4?|16 turn_agent_mode 9?|17 supports_agent_loop_error 8",
            g,
            me,
            pe,
            de,
            ue
        ];
    }
}
class ue extends a {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ue).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ue).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ue).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ue, e, t);
    }
    static $() {
        return [
            "RunInferenceExecutePlan|1 plan_file_uri 9?|2 plan_file_content 9?"
        ];
    }
}
class de extends a {
    constructor(e){
        super(), this.generation = "", this.source = p.UNSPECIFIED, this.channel = "", this.interfaceRevision = 0, this.promptVersions = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new de).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new de).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new de).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(de, e, t);
    }
    static $() {
        return [
            "RunInferenceAgentModule|1 generation 9|2 source #0|3 channel 9|4 commit 9?|5 interface_revision 13|6 prompt_versions 9*",
            p
        ];
    }
}
class pe extends a {
    constructor(e){
        super(), this.subagentType = "", this.selection = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new pe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new pe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new pe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(pe, e, t);
    }
    static $() {
        return [
            "RunInferenceSubagentModelOverride|1 subagent_type 9|2 model #0 selection|3 inherit 8 selection|4 disabled 8 selection",
            g
        ];
    }
}
class me extends a {
    constructor(e){
        super(), this.role = m.UNSPECIFIED, this.text = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new me).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new me).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new me).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(me, e, t);
    }
    static $() {
        return [
            "RunInferenceRoutingMessage|1 role #0|2 text 9",
            m
        ];
    }
}
class he extends a {
    constructor(e){
        super(), this.invocationId = "", this.purpose = h.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new he).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new he).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new he).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(he, e, t);
    }
    static $() {
        return [
            "RunInferenceInvokeModel|1 invocation_id 9|2 request #0|3 purpose #1",
            f,
            h
        ];
    }
}
class fe extends a {
    constructor(e){
        super(), this.invocationId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new fe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new fe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new fe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(fe, e, t);
    }
    static $() {
        return [
            "RunInferenceCancelInvocation|1 invocation_id 9"
        ];
    }
}
class ge extends a {
    constructor(e){
        super(), this.aborted = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ge).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ge).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ge).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ge, e, t);
    }
    static $() {
        return [
            "RunInferenceFinishRun|1 aborted 8|2 turn_completed 8?"
        ];
    }
}
class ye extends a {
    constructor(e){
        super(), this.message = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ye).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ye).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ye).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ye, e, t);
    }
    static $() {
        return [
            "RunInferenceServerMessage|1 heartbeat #0 message|2 run_ready #1 message|3 invocation_response #2 message|4 invocation_end #3 message|5 subagent_models_resolved #4 message",
            we,
            Ae,
            qe,
            De,
            ve
        ];
    }
}
class we extends a {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new we).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new we).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new we).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(we, e, t);
    }
    static $() {
        return [
            "RunInferenceHeartbeat"
        ];
    }
}
class ve extends a {
    constructor(e){
        super(), this.resolutionId = "", this.models = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ve).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ve).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ve).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ve, e, t);
    }
    static $() {
        return [
            "RunInferenceSubagentModelsResolved|1 resolution_id 9|2 models #0*",
            _e
        ];
    }
}
class _e extends a {
    constructor(e){
        super(), this.requested = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _e).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _e).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _e).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_e, e, t);
    }
    static $() {
        return [
            "RunInferenceResolvedSubagentModel|1 requested 9|2 resolved_slug 9?"
        ];
    }
}
class Ae extends a {
    constructor(e){
        super(), this.supportsSelfSummary = !1, this.nonFileRules = [], this.acceptsClientHeartbeat = !1, this.acceptsAgentEvents = !1, this.agentRunRequestLogRequested = !1, this.kvBlobTelemetryEnabled = !1, this.acceptsAbortedFinish = !1, this.metricLabels = {}, this.acceptsSubagentModelResolution = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ae).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ae).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ae).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ae, e, t);
    }
    static $() {
        return [
            "RunInferenceRunReady|1 resolved_model #0|2 supports_self_summary 8|3 routed_model_display_name 9?|4 prompt_model_metadata #1|5 summarization #2|6 non_file_rules #3*|7 accepts_client_heartbeat 8|8 accepts_agent_events 8|10 agent_run_request_log_requested 8|9 kv_blob_telemetry_enabled 8|13 accepts_aborted_finish 8|12 metric_labels 9,9|14 accepts_subagent_model_resolution 8",
            g,
            Ee,
            Se,
            s.DX
        ];
    }
}
class Se extends a {
    constructor(e){
        super(), this.isFallbackToMainModel = !1, this.maxPromptChars = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Se).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Se).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Se).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Se, e, t);
    }
    static $() {
        return [
            "RunInferenceSummarizationConfig|1 model #0|2 is_fallback_to_main_model 8|3 max_prompt_chars 5|4 background #1",
            g,
            be
        ];
    }
}
class be extends a {
    constructor(e){
        super(), this.requireTriggerThresholdForMidLoopPersist = !1, this.discardOnError = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new be).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new be).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new be).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(be, e, t);
    }
    static $() {
        return [
            "RunInferenceBackgroundSummarizationConfig|1 unused_tokens_threshold_to_start 5?|2 unused_percent_tokens_threshold_to_start 1?|3 unused_tokens_threshold_to_persist 5?|4 unused_percent_tokens_threshold_to_persist 1?|5 require_trigger_threshold_for_mid_loop_persist 8|6 discard_on_error 8"
        ];
    }
}
class Ee extends a {
    constructor(e){
        super(), this.vendor = "", this.promptVersion = "", this.isSonnet45 = !1, this.isGemini3 = !1, this.isGpt51 = !1, this.isGpt52 = !1, this.isGpt5 = !1, this.isGpt55 = !1, this.isGpt56 = !1, this.isSonnet4 = !1, this.isCodexFamily = !1, this.isGpt54 = !1, this.isGpt52Codex = !1, this.isGpt53Codex = !1, this.isGpt53CodexSpark = !1, this.isClaude4x = !1, this.isOpus45 = !1, this.isOpus46 = !1, this.isOpus48 = !1, this.isOpus5 = !1, this.isOpus55 = !1, this.isFable5 = !1, this.isFable51 = !1, this.isFruitcake = !1, this.isGpt5Family = !1, this.isComposer1 = !1, this.isComposer15 = !1, this.isComposer2 = !1, this.isComposerMatterhorn = !1, this.isGrok45ProductPrompt = !1, this.isRawTrainingSlug = !1, this.isGrok46ProductPrompt = !1, this.useDsv3Harness = !1, this.persona = "", this.featureFlags = {}, this.supportsAssistantMessagePrefill = !1, this.enableLineNumbers = !1, this.useSparseReadLineNumbers = !1, this.selfIdentityName = "", this.agentModeConfigs = [], this.postToolReminders = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ee).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ee).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ee).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ee, e, t);
    }
    static $() {
        return [
            "RunInferencePromptModelMetadata|1 vendor 9|2 prompt_version 9|3 is_sonnet45 8|4 is_gemini3 8|5 is_gpt51 8|6 is_gpt52 8|7 is_gpt5 8|8 is_gpt55 8|9 is_gpt56 8|10 is_sonnet4 8|11 is_codex_family 8|12 is_gpt54 8|13 is_gpt52_codex 8|14 is_gpt53_codex 8|15 is_gpt53_codex_spark 8|16 is_claude_4x 8|17 is_opus45 8|18 is_opus46 8|19 is_opus48 8|20 is_opus5 8|50 is_opus55 8|21 is_fable5 8|43 is_fable51 8|22 is_fruitcake 8|23 is_gpt5_family 8|24 is_composer1 8|25 is_composer15 8|26 is_composer2 8|27 is_composer_matterhorn 8|28 is_grok45_product_prompt 8|29 is_raw_training_slug 8|34 is_grok46_product_prompt 8|30 reasoning_effort 9?|31 use_dsv3_harness 8|32 agent_token_limit 5?|33 estimated_cache_ttl_ms 5?|35 persona 9|36 feature_flags 9,#0|37 loop_nudge #1?|38 progress_reminder_threshold 5?|39 effort_level 9?|40 supports_assistant_message_prefill 8|41 enable_line_numbers 8|42 use_sparse_read_line_numbers 8|44 self_identity_name 9|45 dsv3_is_thinking 8?|46 agent_mode_configs #2*|47 use_new_plan_mode_prompts 8?|48 ask_question_config #3?|49 subagent_model_config #4?|51 post_tool_reminders #5*|52 enable_semantic_search 8?|53 long_reasoning_reminder #6?|54 smart_mode_classifier_mode 8?|55 smart_mode_classifier_shadow_mode 8?",
            Je,
            Me,
            Be,
            Re,
            ke,
            Ie,
            Ce
        ];
    }
}
class Ie extends a {
    constructor(e){
        super(), this.id = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ie).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ie).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ie).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ie, e, t);
    }
    static $() {
        return [
            "RunInferencePostToolReminder|1 id 9|2 interval_tool_calls 13?"
        ];
    }
}
class Ce extends a {
    constructor(e){
        super(), this.arm = "", this.enabled = !1, this.thresholdTokens = 0, this.delayCalls = 0, this.reminderText = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ce).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ce).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ce).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ce, e, t);
    }
    static $() {
        return [
            "RunInferenceLongReasoningReminderConfig|1 arm 9|2 enabled 8|3 threshold_tokens 13|4 delay_calls 13|5 reminder_text 9"
        ];
    }
}
class ke extends a {
    constructor(e){
        super(), this.forcePolicy = "", this.parentMaxMode = !1, this.models = [], this.overrides = [], this.taskToolOmitted = !1, this.parentRequestedModelName = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ke).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ke).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ke).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ke, e, t);
    }
    static $() {
        return [
            "RunInferenceSubagentModelConfig|1 force_policy 9|2 force_model_id 9?|3 parent_max_mode 8|4 models #0*|5 overrides #1*|6 task_tool_omitted 8|7 parent_requested_model_name 9",
            xe,
            Te
        ];
    }
}
class xe extends a {
    constructor(e){
        super(), this.slug = "", this.advertised = !1, this.valid = !1, this.blocked = !1, this.requiresMaxMode = !1, this.representativeCostDollars = 0, this.legacyAliases = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new xe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new xe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new xe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(xe, e, t);
    }
    static $() {
        return [
            "RunInferenceSubagentModelPolicy|1 slug 9|2 advertised 8|3 valid 8|4 blocked 8|5 requires_max_mode 8|6 representative_cost_dollars 1|7 legacy_aliases 9*"
        ];
    }
}
class Te extends a {
    constructor(e){
        super(), this.subagentType = "", this.kind = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Te).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Te).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Te).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Te, e, t);
    }
    static $() {
        return [
            "RunInferenceResolvedSubagentModelOverride|1 subagent_type 9|2 kind 9|3 model_id 9?"
        ];
    }
}
class Re extends a {
    constructor(e){
        super(), this.toolName = "", this.autoRejectFirst = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Re).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Re).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Re).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Re, e, t);
    }
    static $() {
        return [
            "RunInferenceAskQuestionConfig|1 tool_name 9|2 auto_reject_first 8"
        ];
    }
}
class Be extends a {
    constructor(e){
        super(), this.modeId = "", this.enableAskQuestionTool = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Be).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Be).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Be).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Be, e, t);
    }
    static $() {
        return [
            "RunInferenceAgentModeConfig|1 mode_id 9|2 enable_ask_question_tool 8|3 switch_mode_tool_config #0?",
            Pe
        ];
    }
}
class Pe extends a {
    constructor(e){
        super(), this.targetModes = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Pe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Pe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Pe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Pe, e, t);
    }
    static $() {
        return [
            "RunInferenceSwitchModeToolConfig|1 target_modes 9*"
        ];
    }
}
class Je extends a {
    constructor(e){
        super(), this.value = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Je).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Je).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Je).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Je, e, t);
    }
    static $() {
        return [
            "RunInferenceFlagValue|1 bool_value 8 value|2 number_value 1 value|3 string_value 9 value"
        ];
    }
}
class Me extends a {
    constructor(e){
        super(), this.minRepetitions = 0, this.minMessageLength = 0, this.injectReminder = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Me).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Me).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Me).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Me, e, t);
    }
    static $() {
        return [
            "RunInferenceLoopNudgeConfig|1 min_repetitions 5|2 min_message_length 5|3 inject_reminder 8"
        ];
    }
}
class qe extends a {
    constructor(e){
        super(), this.invocationId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new qe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new qe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new qe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(qe, e, t);
    }
    static $() {
        return [
            "RunInferenceInvocationResponse|1 invocation_id 9|2 response #0",
            R
        ];
    }
}
class De extends a {
    constructor(e){
        super(), this.invocationId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new De).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new De).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new De).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(De, e, t);
    }
    static $() {
        return [
            "RunInferenceInvocationEnd|1 invocation_id 9|2 error #0?",
            Oe
        ];
    }
}
class Oe extends a {
    constructor(e){
        super(), this.code = 0, this.message = "", this.details = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Oe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Oe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Oe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Oe, e, t);
    }
    static $() {
        return [
            "RunInferenceInvocationError|1 code 5|2 message 9|3 details #0*",
            Ne
        ];
    }
}
class Ne extends a {
    constructor(e){
        super(), this.type = "", this.value = new Uint8Array(0), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ne).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ne).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ne).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ne, e, t);
    }
    static $() {
        return [
            "RunInferenceErrorDetail|1 type 9|2 value 12"
        ];
    }
}
