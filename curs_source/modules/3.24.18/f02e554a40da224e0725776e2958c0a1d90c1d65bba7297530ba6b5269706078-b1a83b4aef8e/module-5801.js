"use strict";
require.d(exports, {
    KS: ()=>E,
    Oy: ()=>C,
    uw: ()=>ot,
    uu: ()=>at,
    BU: ()=>T,
    Hi: ()=>x,
    Ov: ()=>M,
    k4: ()=>O,
    Tu: ()=>U,
    pe: ()=>Q,
    Pg: ()=>j,
    zP: ()=>X,
    hs: ()=>_t,
    TW: ()=>yt,
    Y3: ()=>R,
    KE: ()=>P,
    W3: ()=>V,
    wq: ()=>z,
    KD: ()=>N,
    sY: ()=>D,
    dw: ()=>nt,
    JH: ()=>it,
    Il: ()=>b,
    mw: ()=>k,
    xk: ()=>W,
    JF: ()=>Y,
    k5: ()=>mt,
    ic: ()=>At,
    vw: ()=>v,
    HJ: ()=>q,
    yD: ()=>L,
    W$: ()=>$,
    uK: ()=>H,
    eE: ()=>K
});
var n = require("./module-6038.js"), s = require("./module-6993.js"), i = require("./module-6209.js"), o = require("./module-4175.js"), a = require("./module-7595.js"), u = require("./module-8592.js");
class c extends u.HL {
    static get runtime() {
        return (0, u.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class l extends c {
    constructor(t){
        super(), this.message = "", n.proto3.util.initPartial(t, this);
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
            "Error|1 message 9"
        ];
    }
}
class m extends c {
    constructor(t){
        super(), this.blobId = new Uint8Array(0), n.proto3.util.initPartial(t, this);
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
            "GetBlobArgs|1 blob_id 12"
        ];
    }
}
class d extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "GetBlobResult|1 blob_data 12?|2 error #0?",
            l
        ];
    }
}
class f extends c {
    constructor(t){
        super(), this.blobId = new Uint8Array(0), this.blobData = new Uint8Array(0), n.proto3.util.initPartial(t, this);
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
            "SetBlobArgs|1 blob_id 12|2 blob_data 12"
        ];
    }
}
class p extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "SetBlobResult|1 error #0?",
            l
        ];
    }
}
class h extends c {
    constructor(t){
        super(), this.id = 0, this.message = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "KvServerMessage|1 id 13|2 get_blob_args #0 message|3 set_blob_args #1 message|4 span_context #2?",
            m,
            f,
            a.Kg
        ];
    }
}
class g extends c {
    constructor(t){
        super(), this.id = 0, this.message = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "KvClientMessage|1 id 13|2 get_blob_result #0 message|3 set_blob_result #1 message",
            d,
            p
        ];
    }
}
const A = "agent.v1.";
class _ extends u.HL {
    static get runtime() {
        return (0, u.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return A;
    }
}
var y = (0, u.QT)(n.proto3, A, "LocalPromptQualityInvocationStatus", [
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
        "ERRORED"
    ],
    [
        3,
        "ABORTED"
    ]
], 1), w = (0, u.QT)(n.proto3, A, "LocalAgentMailboxGapReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "TRIMMED"
    ],
    [
        2,
        "LOST"
    ]
], 1), S = (0, u.QT)(n.proto3, A, "LocalAgentMailboxEndedReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NO_ACTIVE_SUBSCRIPTIONS"
    ],
    [
        2,
        "STORE_DELETED"
    ],
    [
        3,
        "MIGRATED_TO_CLOUD"
    ]
], 1);
class J extends _ {
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
            "ClientHeartbeat"
        ];
    }
}
class B extends _ {
    constructor(t){
        super(), this.selectedSubagentModels = [], this.selectedSubagentModelDetails = [], this.preFetchedBlobs = [], this.subagentModelOverrides = [], n.proto3.util.initPartial(t, this);
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
            "PrewarmRequest|1 model_details #0|9 requested_model #1?|2 conversation_id 9?|3 conversation_state #2|4 mcp_tools #3|5 mcp_file_system_options #4?|6 best_of_n_group_id 9?|7 try_use_best_of_n_promotion 8?|8 custom_system_prompt 9?|10 suggest_next_prompt 8?|11 subagent_type_name 9?|12 exclude_workspace_context 8?|13 harness 9?|14 selected_subagent_models #1*|15 selected_subagent_model_details #0*|16 conversation_group_id 9?|17 pre_fetched_blobs #5*|18 client_supports_inline_images 8?|19 subagent_model_overrides #6*|20 can_create_cloud_subagents 8?|21 suppress_subagent_progress_update_tool 8?|22 client_supports_send_to_user 8?|23 computer_use_coordinate_mode 9?|24 agent_session_id 9?|26 client_supports_routed_model_update 8?|27 client_llm_gateway_credential #7?|28 client_supports_preview_card 8?|29 started_as_new_project 8?|30 first_project_onboarding 8?",
            s.Gmx,
            i.G4,
            s.Y9z,
            o.Or,
            o.Is,
            s.onr,
            s.Bjv,
            s.Ibo
        ];
    }
}
class E extends _ {
    constructor(t){
        super(), this.message = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "AgentClientMessage|1 run_request #0 message|2 exec_client_message #1 message|5 exec_client_control_message #2 message|3 kv_client_message #3 message|4 conversation_action #4 message|6 interaction_response #5 message|7 client_heartbeat #6 message|8 prewarm_request #7 message",
            s.Mpn,
            a.yT,
            a.$Y,
            g,
            s.QFf,
            s.Y5,
            J,
            B
        ];
    }
}
class I extends _ {
    constructor(t){
        super(), this.serverFirstTokenMs = 0, this.preStreamSetupMs = 0, this.waitForFirstEventMs = 0, this.slowPoolWaitMs = 0, this.clientClock = !1, n.proto3.util.initPartial(t, this);
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
            "TtftBreakdown|1 server_first_token_ms 1|2 pre_stream_setup_ms 1|3 wait_for_first_event_ms 1|4 provider_ttft_ms 1?|5 slow_pool_wait_ms 1|6 client_prep_ms 1?|7 client_clock 8"
        ];
    }
}
class C extends _ {
    constructor(t){
        super(), this.message = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "AgentServerMessage|1 interaction_update #0 message|2 exec_server_message #1 message|5 exec_server_control_message #2 message|3 conversation_checkpoint_update #3 message|4 kv_server_message #4 message|7 interaction_query #5 message|8 ttft_breakdown #6",
            s.Uq,
            a.Ye,
            a.Nv,
            s.Y9z,
            h,
            s.Pd7,
            I
        ];
    }
}
class b extends _ {
    constructor(t){
        super(), this.userMessage = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new b).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new b).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new b).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(b, t, e);
    }
    static $() {
        return [
            "NameAgentRequest|1 user_message 9"
        ];
    }
}
class k extends _ {
    constructor(t){
        super(), this.name = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new k).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new k).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new k).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(k, t, e);
    }
    static $() {
        return [
            "NameAgentResponse|1 name 9"
        ];
    }
}
class v extends _ {
    constructor(t){
        super(), this.conversationId = "", this.workspacePaths = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new v).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new v).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new v).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(v, t, e);
    }
    static $() {
        return [
            "UpdateConversationMetadataRequest|1 conversation_id 9|2 name 9?|3 only_set_name_if_empty 8?|4 workspace_paths 9*"
        ];
    }
}
class q extends _ {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new q).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new q).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new q).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(q, t, e);
    }
    static $() {
        return [
            "UpdateConversationMetadataResponse"
        ];
    }
}
class R extends _ {
    constructor(t){
        super(), this.conversationId = "", this.rootPromptMessagesJson = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new R).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new R).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new R).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(R, t, e);
    }
    static $() {
        return [
            "GetPromptContextUsageRequest|1 conversation_id 9|3 root_prompt_messages_json 12*"
        ];
    }
}
class P extends _ {
    constructor(t){
        super(), this.unavailableBlobCount = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new P).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new P).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new P).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(P, t, e);
    }
    static $() {
        return [
            "GetPromptContextUsageResponse|2 unavailable_blob_count 13|3 tree #0",
            s.d2k
        ];
    }
}
class T extends _ {
    constructor(t){
        super(), this.formattedConversation = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new T).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new T).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new T).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(T, t, e);
    }
    static $() {
        return [
            "CreateTranscriptOverviewRequest|1 formatted_conversation 9"
        ];
    }
}
class x extends _ {
    constructor(t){
        super(), this.overview = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new x).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new x).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new x).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(x, t, e);
    }
    static $() {
        return [
            "CreateTranscriptOverviewResponse|1 overview 9"
        ];
    }
}
class N extends _ {
    constructor(t){
        super(), this.customModelIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new N).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new N).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new N).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(N, t, e);
    }
    static $() {
        return [
            "GetUsableModelsRequest|1 custom_model_ids 9*"
        ];
    }
}
class D extends _ {
    constructor(t){
        super(), this.models = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new D).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new D).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new D).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(D, t, e);
    }
    static $() {
        return [
            "GetUsableModelsResponse|1 models #0*",
            s.Gmx
        ];
    }
}
class U extends _ {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new U).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new U).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new U).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(U, t, e);
    }
    static $() {
        return [
            "GetDefaultModelForCliRequest"
        ];
    }
}
class Q extends _ {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Q).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Q).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Q).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Q, t, e);
    }
    static $() {
        return [
            "GetDefaultModelForCliResponse|1 model #0",
            s.Gmx
        ];
    }
}
class M extends _ {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new M).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new M).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new M).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(M, t, e);
    }
    static $() {
        return [
            "GetAllowedModelIntentsRequest"
        ];
    }
}
class O extends _ {
    constructor(t){
        super(), this.modelIntents = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new O).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new O).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new O).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(O, t, e);
    }
    static $() {
        return [
            "GetAllowedModelIntentsResponse|1 model_intents 9*"
        ];
    }
}
class F extends _ {
    constructor(t){
        super(), this.id = new Uint8Array(0), this.value = new Uint8Array(0), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new F).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new F).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new F).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(F, t, e);
    }
    static $() {
        return [
            "BlobEntry|1 id 12|2 value 12"
        ];
    }
}
class L extends _ {
    constructor(t){
        super(), this.conversationId = "", this.blobs = [], this.chunkIndex = 0, this.totalChunks = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new L).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new L).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new L).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(L, t, e);
    }
    static $() {
        return [
            "UploadConversationBlobsRequest|1 conversation_id 9|2 blobs #0*|3 chunk_index 5|4 total_chunks 5",
            F
        ];
    }
}
class $ extends _ {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($, t, e);
    }
    static $() {
        return [
            "UploadConversationBlobsResponse"
        ];
    }
}
class G extends _ {
    constructor(t){
        super(), this.invocationId = "", this.attemptRequestId = "", this.attempt = 0, this.startedAt = "", this.completedAt = "", this.modelId = "", this.providerName = "", this.status = y.UNSPECIFIED, this.messages = [], this.responseMessages = [], this.toolsJson = "", this.promptTokens = n.protoInt64.zero, this.completionTokens = n.protoInt64.zero, this.totalTokens = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new G).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new G).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new G).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(G, t, e);
    }
    static $() {
        return [
            "LocalPromptQualityInvocation|1 invocation_id 9|2 attempt_request_id 9|3 attempt 5|4 started_at 9|5 completed_at 9|6 model_id 9|7 provider_name 9|8 status #0|9 messages 12*|10 response_messages 12*|11 tools_json 9|12 prompt_tokens 3|13 completion_tokens 3|14 total_tokens 3|15 token_limit 3?|16 error_message 9?|17 prompt_tag 9?|18 feature_type 9?",
            y
        ];
    }
}
class H extends _ {
    constructor(t){
        super(), this.schemaVersion = 0, this.generationUuid = "", this.conversationId = "", this.payloadDigest = "", this.invocations = [], this.terminalStatus = y.UNSPECIFIED, this.createdAt = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new H).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new H).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new H).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(H, t, e);
    }
    static $() {
        return [
            "UploadLocalAgentRunToPromptQualityRequest|1 schema_version 5|2 generation_uuid 9|3 conversation_id 9|4 payload_digest 9|5 invocations #0*|6 terminal_status #1|7 created_at 9",
            G,
            y
        ];
    }
}
class K extends _ {
    constructor(t){
        super(), this.requestId = "", this.primaryInvocationId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new K).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new K).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new K).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(K, t, e);
    }
    static $() {
        return [
            "UploadLocalAgentRunToPromptQualityResponse|1 request_id 9|2 primary_invocation_id 9"
        ];
    }
}
class V extends _ {
    constructor(t){
        super(), this.conversationId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new V).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new V).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new V).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(V, t, e);
    }
    static $() {
        return [
            "GetSignedUrlForAttachedMediaRequest|3 conversation_id 9|1 key 9?|2 mime_type 9?|4 content_length_bytes 3?"
        ];
    }
}
class z extends _ {
    constructor(t){
        super(), this.key = "", this.postUrl = "", this.getUrl = "", this.expiresAtUnixMs = n.protoInt64.zero, this.refreshAfterUnixMs = n.protoInt64.zero, this.postFields = {}, this.putUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new z).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new z).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new z).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(z, t, e);
    }
    static $() {
        return [
            "GetSignedUrlForAttachedMediaResponse|1 key 9|2 post_url 9|3 get_url 9|4 expires_at_unix_ms 3|5 refresh_after_unix_ms 3|6 post_fields 9,9|7 put_url 9"
        ];
    }
}
class W extends _ {
    constructor(t){
        super(), this.conversationId = "", this.sourceConversationId = "", this.sourceRequestId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new W).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new W).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new W).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(W, t, e);
    }
    static $() {
        return [
            "NotifyConversationCloneRequest|1 conversation_id 9|2 source_conversation_id 9|3 source_request_id 9"
        ];
    }
}
class Y extends _ {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Y).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Y).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Y).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Y, t, e);
    }
    static $() {
        return [
            "NotifyConversationCloneResponse"
        ];
    }
}
class j extends _ {
    constructor(t){
        super(), this.currentModel = "", this.maxMode = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new j).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new j).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new j).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(j, t, e);
    }
    static $() {
        return [
            "GetNewChatNudgeLegacyModelPickerRequest|1 current_model 9|2 max_mode 8"
        ];
    }
}
class X extends _ {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new X).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new X).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new X).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(X, t, e);
    }
    static $() {
        return [
            "GetNewChatNudgeLegacyModelPickerResponse|1 nudge #0?",
            rt
        ];
    }
}
class Z extends _ {
    constructor(t){
        super(), this.bannerMessage = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Z).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Z).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Z).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Z, t, e);
    }
    static $() {
        return [
            "NudgeBumpVariant|1 banner_message 9|2 banner_description 9?"
        ];
    }
}
class tt extends _ {
    constructor(t){
        super(), this.popupMessage = "", this.acceptLabel = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new tt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new tt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new tt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(tt, t, e);
    }
    static $() {
        return [
            "NudgeAskVariant|1 popup_message 9|2 accept_label 9"
        ];
    }
}
class et extends _ {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new et).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new et).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new et).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(et, t, e);
    }
    static $() {
        return [
            "NudgeSilentSwitchVariant"
        ];
    }
}
class rt extends _ {
    constructor(t){
        super(), this.nudgeId = "", this.targetModel = "", this.experimentName = "", this.variant = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new rt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new rt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new rt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(rt, t, e);
    }
    static $() {
        return [
            "NewChatNudge|1 nudge_id 9|2 target_model 9|3 experiment_name 9|4 bump #0 variant|5 ask #1 variant|6 silent_switch #2 variant",
            Z,
            tt,
            et
        ];
    }
}
class nt extends _ {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new nt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new nt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new nt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(nt, t, e);
    }
    static $() {
        return [
            "ListLocalSubscriptionToolsRequest"
        ];
    }
}
class st extends _ {
    constructor(t){
        super(), this.toolName = "", this.description = "", this.inputSchemaJson = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new st).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new st).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new st).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(st, t, e);
    }
    static $() {
        return [
            "LocalSubscriptionToolDefinition|1 tool_name 9|2 description 9|3 input_schema_json 9"
        ];
    }
}
class it extends _ {
    constructor(t){
        super(), this.tools = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new it).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new it).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new it).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(it, t, e);
    }
    static $() {
        return [
            "ListLocalSubscriptionToolsResponse|1 tools #0*",
            st
        ];
    }
}
class ot extends _ {
    constructor(t){
        super(), this.conversationId = "", this.toolName = "", this.toolArgsJson = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ot).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ot).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ot).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ot, t, e);
    }
    static $() {
        return [
            "CallLocalSubscriptionToolRequest|1 conversation_id 9|2 tool_name 9|3 tool_args_json 9"
        ];
    }
}
class at extends _ {
    constructor(t){
        super(), this.resultJson = "", this.isError = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new at).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new at).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new at).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(at, t, e);
    }
    static $() {
        return [
            "CallLocalSubscriptionToolResponse|1 result_json 9|2 is_error 8|3 watch_expires_at_unix_ms 3?"
        ];
    }
}
class ut extends _ {
    constructor(t){
        super(), this.subscriptionId = "", this.eventId = "", this.inboxRelPath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ut).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ut).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ut).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ut, t, e);
    }
    static $() {
        return [
            "SubscriptionDeliveryEntry|1 subscription_id 9|2 event_id 9|3 inbox_rel_path 9"
        ];
    }
}
class ct extends _ {
    constructor(t){
        super(), this.subscriptionId = "", this.inboxRelPath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ct).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ct).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ct).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ct, t, e);
    }
    static $() {
        return [
            "SubscriptionRemovedEntry|1 subscription_id 9|2 inbox_rel_path 9"
        ];
    }
}
class lt extends _ {
    constructor(t){
        super(), this.localAgentMailboxEntryId = "", this.payload = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new lt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new lt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new lt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(lt, t, e);
    }
    static $() {
        return [
            "LocalAgentMailboxEntry|1 local_agent_mailbox_entry_id 9|2 subscription_delivery #0 payload|3 subscription_removed #1 payload",
            ut,
            ct
        ];
    }
}
class mt extends _ {
    constructor(t){
        super(), this.conversations = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mt, t, e);
    }
    static $() {
        return [
            "StreamLocalAgentMailboxRequest|1 conversations #0*",
            dt
        ];
    }
}
class dt extends _ {
    constructor(t){
        super(), this.conversationId = "", this.afterOffset = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new dt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new dt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new dt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(dt, t, e);
    }
    static $() {
        return [
            "StreamLocalAgentMailboxRequest.ConversationCursor|1 conversation_id 9|2 after_offset 9"
        ];
    }
}
class ft extends _ {
    constructor(t){
        super(), this.conversationId = "", this.offset = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ft).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ft).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ft).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ft, t, e);
    }
    static $() {
        return [
            "LocalAgentMailboxDelivery|1 conversation_id 9|2 offset 9|3 entry #0",
            lt
        ];
    }
}
class pt extends _ {
    constructor(t){
        super(), this.conversationId = "", this.afterOffset = "", this.resumeOffset = "", this.reason = w.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pt, t, e);
    }
    static $() {
        return [
            "LocalAgentMailboxGap|1 conversation_id 9|2 after_offset 9|3 resume_offset 9|4 reason #0",
            w
        ];
    }
}
class ht extends _ {
    constructor(t){
        super(), this.conversationId = "", this.reason = S.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ht).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ht).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ht).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ht, t, e);
    }
    static $() {
        return [
            "LocalAgentMailboxEnded|1 conversation_id 9|2 reason #0",
            S
        ];
    }
}
class gt extends _ {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gt, t, e);
    }
    static $() {
        return [
            "StreamLocalAgentMailboxHeartbeat"
        ];
    }
}
class At extends _ {
    constructor(t){
        super(), this.message = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new At).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new At).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new At).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(At, t, e);
    }
    static $() {
        return [
            "StreamLocalAgentMailboxResponse|1 delivery #0 message|2 heartbeat #1 message|3 gap #2 message|4 ended #3 message",
            ft,
            gt,
            pt,
            ht
        ];
    }
}
class _t extends _ {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _t).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _t).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _t).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_t, t, e);
    }
    static $() {
        return [
            "GetNewChatNudgeParameterizedModelPickerRequest|1 current_model #0|2 model_nudges_enabled 8?",
            i.G4
        ];
    }
}
class yt extends _ {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yt, t, e);
    }
    static $() {
        return [
            "GetNewChatNudgeParameterizedModelPickerResponse|1 nudge #0?",
            wt
        ];
    }
}
class wt extends _ {
    constructor(t){
        super(), this.nudgeId = "", this.experimentName = "", this.variant = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wt, t, e);
    }
    static $() {
        return [
            "NewChatNudgeV2|1 nudge_id 9|2 target_model #0|3 experiment_name 9|4 bump #1 variant|5 ask #2 variant|6 silent_switch #3 variant",
            i.G4,
            Z,
            tt,
            et
        ];
    }
}
