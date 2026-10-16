"use strict";
require.d(exports, {
    BU: ()=>C,
    HJ: ()=>b,
    Hi: ()=>k,
    Il: ()=>_,
    JF: ()=>Q,
    JH: ()=>Z,
    KD: ()=>x,
    KE: ()=>I,
    KS: ()=>y,
    Ov: ()=>P,
    Oy: ()=>v,
    Pg: ()=>j,
    QI: ()=>M,
    TW: ()=>pe,
    Tu: ()=>R,
    W$: ()=>D,
    W3: ()=>U,
    Y3: ()=>E,
    dw: ()=>K,
    eE: ()=>F,
    gq: ()=>w,
    hs: ()=>de,
    ic: ()=>ue,
    k4: ()=>J,
    k5: ()=>se,
    kA: ()=>f,
    mw: ()=>A,
    pe: ()=>B,
    sY: ()=>T,
    uK: ()=>N,
    uu: ()=>ee,
    uw: ()=>X,
    vw: ()=>S,
    wq: ()=>L,
    xk: ()=>$,
    yD: ()=>q,
    zP: ()=>G
});
var n = require("./module-36038.js"), s = require("./module-69584.js"), o = require("./module-86209.js"), i = require("./module-34175.js"), a = require("./module-55094.js"), c = require("./module-54386.js"), l = require("./module-8592.js");
const u = "agent.v1.";
class d extends l.HL {
    static get runtime() {
        return (0, l.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return u;
    }
}
var p = (0, l.QT)(n.proto3, u, "LocalPromptQualityInvocationStatus", [
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
], 1), m = (0, l.QT)(n.proto3, u, "LocalAgentMailboxGapReason", [
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
], 1), h = (0, l.QT)(n.proto3, u, "LocalAgentMailboxEndedReason", [
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
class f extends d {
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
            "ClientHeartbeat"
        ];
    }
}
class g extends d {
    constructor(e){
        super(), this.selectedSubagentModels = [], this.selectedSubagentModelDetails = [], this.preFetchedBlobs = [], this.subagentModelOverrides = [], n.proto3.util.initPartial(e, this);
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
            "PrewarmRequest|1 model_details #0|9 requested_model #1?|2 conversation_id 9?|3 conversation_state #2|4 mcp_tools #3|5 mcp_file_system_options #4?|6 best_of_n_group_id 9?|7 try_use_best_of_n_promotion 8?|8 custom_system_prompt 9?|10 suggest_next_prompt 8?|11 subagent_type_name 9?|12 exclude_workspace_context 8?|13 harness 9?|14 selected_subagent_models #1*|15 selected_subagent_model_details #0*|16 conversation_group_id 9?|17 pre_fetched_blobs #5*|18 client_supports_inline_images 8?|19 subagent_model_overrides #6*|20 can_create_cloud_subagents 8?|21 suppress_subagent_progress_update_tool 8?|22 client_supports_send_to_user 8?|23 computer_use_coordinate_mode 9?|24 agent_session_id 9?|26 client_supports_routed_model_update 8?|27 client_llm_gateway_credential #7?|28 client_supports_preview_card 8?|29 started_as_new_project 8?|30 first_project_onboarding 8?",
            s.Gmx,
            o.G4,
            s.Y9z,
            i.Or,
            i.Is,
            s.onr,
            s.Bjv,
            s.Ibo
        ];
    }
}
class y extends d {
    constructor(e){
        super(), this.message = {
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
            "AgentClientMessage|1 run_request #0 message|2 exec_client_message #1 message|5 exec_client_control_message #2 message|3 kv_client_message #3 message|4 conversation_action #4 message|6 interaction_response #5 message|7 client_heartbeat #6 message|8 prewarm_request #7 message",
            s.Mpn,
            a.yT,
            a.$Y,
            c.gm,
            s.QFf,
            s.Y5,
            f,
            g
        ];
    }
}
class w extends d {
    constructor(e){
        super(), this.serverFirstTokenMs = 0, this.preStreamSetupMs = 0, this.waitForFirstEventMs = 0, this.slowPoolWaitMs = 0, this.clientClock = !1, n.proto3.util.initPartial(e, this);
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
            "TtftBreakdown|1 server_first_token_ms 1|2 pre_stream_setup_ms 1|3 wait_for_first_event_ms 1|4 provider_ttft_ms 1?|5 slow_pool_wait_ms 1|6 client_prep_ms 1?|7 client_clock 8"
        ];
    }
}
class v extends d {
    constructor(e){
        super(), this.message = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "AgentServerMessage|1 interaction_update #0 message|2 exec_server_message #1 message|5 exec_server_control_message #2 message|3 conversation_checkpoint_update #3 message|4 kv_server_message #4 message|7 interaction_query #5 message|8 ttft_breakdown #6",
            s.Uq,
            a.Ye,
            a.Nv,
            s.Y9z,
            c.km,
            s.Pd7,
            w
        ];
    }
}
class _ extends d {
    constructor(e){
        super(), this.userMessage = "", n.proto3.util.initPartial(e, this);
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
            "NameAgentRequest|1 user_message 9"
        ];
    }
}
class A extends d {
    constructor(e){
        super(), this.name = "", n.proto3.util.initPartial(e, this);
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
            "NameAgentResponse|1 name 9"
        ];
    }
}
class S extends d {
    constructor(e){
        super(), this.conversationId = "", this.workspacePaths = [], n.proto3.util.initPartial(e, this);
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
            "UpdateConversationMetadataRequest|1 conversation_id 9|2 name 9?|3 only_set_name_if_empty 8?|4 workspace_paths 9*"
        ];
    }
}
class b extends d {
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
            "UpdateConversationMetadataResponse"
        ];
    }
}
class E extends d {
    constructor(e){
        super(), this.conversationId = "", this.rootPromptMessagesJson = [], n.proto3.util.initPartial(e, this);
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
            "GetPromptContextUsageRequest|1 conversation_id 9|3 root_prompt_messages_json 12*"
        ];
    }
}
class I extends d {
    constructor(e){
        super(), this.unavailableBlobCount = 0, n.proto3.util.initPartial(e, this);
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
            "GetPromptContextUsageResponse|2 unavailable_blob_count 13|3 tree #0",
            s.d2k
        ];
    }
}
class C extends d {
    constructor(e){
        super(), this.formattedConversation = "", n.proto3.util.initPartial(e, this);
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
            "CreateTranscriptOverviewRequest|1 formatted_conversation 9"
        ];
    }
}
class k extends d {
    constructor(e){
        super(), this.overview = "", n.proto3.util.initPartial(e, this);
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
            "CreateTranscriptOverviewResponse|1 overview 9"
        ];
    }
}
class x extends d {
    constructor(e){
        super(), this.customModelIds = [], n.proto3.util.initPartial(e, this);
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
            "GetUsableModelsRequest|1 custom_model_ids 9*"
        ];
    }
}
class T extends d {
    constructor(e){
        super(), this.models = [], n.proto3.util.initPartial(e, this);
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
            "GetUsableModelsResponse|1 models #0*",
            s.Gmx
        ];
    }
}
class R extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "GetDefaultModelForCliRequest"
        ];
    }
}
class B extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "GetDefaultModelForCliResponse|1 model #0",
            s.Gmx
        ];
    }
}
class P extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "GetAllowedModelIntentsRequest"
        ];
    }
}
class J extends d {
    constructor(e){
        super(), this.modelIntents = [], n.proto3.util.initPartial(e, this);
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
            "GetAllowedModelIntentsResponse|1 model_intents 9*"
        ];
    }
}
class M extends d {
    constructor(e){
        super(), this.id = new Uint8Array(0), this.value = new Uint8Array(0), n.proto3.util.initPartial(e, this);
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
            "BlobEntry|1 id 12|2 value 12"
        ];
    }
}
class q extends d {
    constructor(e){
        super(), this.conversationId = "", this.blobs = [], this.chunkIndex = 0, this.totalChunks = 0, n.proto3.util.initPartial(e, this);
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
            "UploadConversationBlobsRequest|1 conversation_id 9|2 blobs #0*|3 chunk_index 5|4 total_chunks 5",
            M
        ];
    }
}
class D extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "UploadConversationBlobsResponse"
        ];
    }
}
class O extends d {
    constructor(e){
        super(), this.invocationId = "", this.attemptRequestId = "", this.attempt = 0, this.startedAt = "", this.completedAt = "", this.modelId = "", this.providerName = "", this.status = p.UNSPECIFIED, this.messages = [], this.responseMessages = [], this.toolsJson = "", this.promptTokens = n.protoInt64.zero, this.completionTokens = n.protoInt64.zero, this.totalTokens = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
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
            "LocalPromptQualityInvocation|1 invocation_id 9|2 attempt_request_id 9|3 attempt 5|4 started_at 9|5 completed_at 9|6 model_id 9|7 provider_name 9|8 status #0|9 messages 12*|10 response_messages 12*|11 tools_json 9|12 prompt_tokens 3|13 completion_tokens 3|14 total_tokens 3|15 token_limit 3?|16 error_message 9?|17 prompt_tag 9?|18 feature_type 9?",
            p
        ];
    }
}
class N extends d {
    constructor(e){
        super(), this.schemaVersion = 0, this.generationUuid = "", this.conversationId = "", this.payloadDigest = "", this.invocations = [], this.terminalStatus = p.UNSPECIFIED, this.createdAt = "", n.proto3.util.initPartial(e, this);
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
            "UploadLocalAgentRunToPromptQualityRequest|1 schema_version 5|2 generation_uuid 9|3 conversation_id 9|4 payload_digest 9|5 invocations #0*|6 terminal_status #1|7 created_at 9",
            O,
            p
        ];
    }
}
class F extends d {
    constructor(e){
        super(), this.requestId = "", this.primaryInvocationId = "", n.proto3.util.initPartial(e, this);
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
            "UploadLocalAgentRunToPromptQualityResponse|1 request_id 9|2 primary_invocation_id 9"
        ];
    }
}
class U extends d {
    constructor(e){
        super(), this.conversationId = "", n.proto3.util.initPartial(e, this);
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
            "GetSignedUrlForAttachedMediaRequest|3 conversation_id 9|1 key 9?|2 mime_type 9?|4 content_length_bytes 3?"
        ];
    }
}
class L extends d {
    constructor(e){
        super(), this.key = "", this.postUrl = "", this.getUrl = "", this.expiresAtUnixMs = n.protoInt64.zero, this.refreshAfterUnixMs = n.protoInt64.zero, this.postFields = {}, this.putUrl = "", n.proto3.util.initPartial(e, this);
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
            "GetSignedUrlForAttachedMediaResponse|1 key 9|2 post_url 9|3 get_url 9|4 expires_at_unix_ms 3|5 refresh_after_unix_ms 3|6 post_fields 9,9|7 put_url 9"
        ];
    }
}
class $ extends d {
    constructor(e){
        super(), this.conversationId = "", this.sourceConversationId = "", this.sourceRequestId = "", n.proto3.util.initPartial(e, this);
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
            "NotifyConversationCloneRequest|1 conversation_id 9|2 source_conversation_id 9|3 source_request_id 9"
        ];
    }
}
class Q extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "NotifyConversationCloneResponse"
        ];
    }
}
class j extends d {
    constructor(e){
        super(), this.currentModel = "", this.maxMode = !1, n.proto3.util.initPartial(e, this);
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
            "GetNewChatNudgeLegacyModelPickerRequest|1 current_model 9|2 max_mode 8"
        ];
    }
}
class G extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "GetNewChatNudgeLegacyModelPickerResponse|1 nudge #0?",
            V
        ];
    }
}
class H extends d {
    constructor(e){
        super(), this.bannerMessage = "", n.proto3.util.initPartial(e, this);
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
            "NudgeBumpVariant|1 banner_message 9|2 banner_description 9?"
        ];
    }
}
class z extends d {
    constructor(e){
        super(), this.popupMessage = "", this.acceptLabel = "", n.proto3.util.initPartial(e, this);
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
            "NudgeAskVariant|1 popup_message 9|2 accept_label 9"
        ];
    }
}
class W extends d {
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
            "NudgeSilentSwitchVariant"
        ];
    }
}
class V extends d {
    constructor(e){
        super(), this.nudgeId = "", this.targetModel = "", this.experimentName = "", this.variant = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "NewChatNudge|1 nudge_id 9|2 target_model 9|3 experiment_name 9|4 bump #0 variant|5 ask #1 variant|6 silent_switch #2 variant",
            H,
            z,
            W
        ];
    }
}
class K extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ListLocalSubscriptionToolsRequest"
        ];
    }
}
class Y extends d {
    constructor(e){
        super(), this.toolName = "", this.description = "", this.inputSchemaJson = "", n.proto3.util.initPartial(e, this);
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
            "LocalSubscriptionToolDefinition|1 tool_name 9|2 description 9|3 input_schema_json 9"
        ];
    }
}
class Z extends d {
    constructor(e){
        super(), this.tools = [], n.proto3.util.initPartial(e, this);
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
            "ListLocalSubscriptionToolsResponse|1 tools #0*",
            Y
        ];
    }
}
class X extends d {
    constructor(e){
        super(), this.conversationId = "", this.toolName = "", this.toolArgsJson = "", n.proto3.util.initPartial(e, this);
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
            "CallLocalSubscriptionToolRequest|1 conversation_id 9|2 tool_name 9|3 tool_args_json 9"
        ];
    }
}
class ee extends d {
    constructor(e){
        super(), this.resultJson = "", this.isError = !1, n.proto3.util.initPartial(e, this);
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
            "CallLocalSubscriptionToolResponse|1 result_json 9|2 is_error 8|3 watch_expires_at_unix_ms 3?"
        ];
    }
}
class te extends d {
    constructor(e){
        super(), this.subscriptionId = "", this.eventId = "", this.inboxRelPath = "", n.proto3.util.initPartial(e, this);
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
            "SubscriptionDeliveryEntry|1 subscription_id 9|2 event_id 9|3 inbox_rel_path 9"
        ];
    }
}
class re extends d {
    constructor(e){
        super(), this.subscriptionId = "", this.inboxRelPath = "", n.proto3.util.initPartial(e, this);
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
            "SubscriptionRemovedEntry|1 subscription_id 9|2 inbox_rel_path 9"
        ];
    }
}
class ne extends d {
    constructor(e){
        super(), this.localAgentMailboxEntryId = "", this.payload = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "LocalAgentMailboxEntry|1 local_agent_mailbox_entry_id 9|2 subscription_delivery #0 payload|3 subscription_removed #1 payload",
            te,
            re
        ];
    }
}
class se extends d {
    constructor(e){
        super(), this.conversations = [], n.proto3.util.initPartial(e, this);
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
            "StreamLocalAgentMailboxRequest|1 conversations #0*",
            oe
        ];
    }
}
class oe extends d {
    constructor(e){
        super(), this.conversationId = "", this.afterOffset = "", n.proto3.util.initPartial(e, this);
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
            "StreamLocalAgentMailboxRequest.ConversationCursor|1 conversation_id 9|2 after_offset 9"
        ];
    }
}
class ie extends d {
    constructor(e){
        super(), this.conversationId = "", this.offset = "", n.proto3.util.initPartial(e, this);
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
            "LocalAgentMailboxDelivery|1 conversation_id 9|2 offset 9|3 entry #0",
            ne
        ];
    }
}
class ae extends d {
    constructor(e){
        super(), this.conversationId = "", this.afterOffset = "", this.resumeOffset = "", this.reason = m.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "LocalAgentMailboxGap|1 conversation_id 9|2 after_offset 9|3 resume_offset 9|4 reason #0",
            m
        ];
    }
}
class ce extends d {
    constructor(e){
        super(), this.conversationId = "", this.reason = h.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "LocalAgentMailboxEnded|1 conversation_id 9|2 reason #0",
            h
        ];
    }
}
class le extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "StreamLocalAgentMailboxHeartbeat"
        ];
    }
}
class ue extends d {
    constructor(e){
        super(), this.message = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "StreamLocalAgentMailboxResponse|1 delivery #0 message|2 heartbeat #1 message|3 gap #2 message|4 ended #3 message",
            ie,
            le,
            ae,
            ce
        ];
    }
}
class de extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "GetNewChatNudgeParameterizedModelPickerRequest|1 current_model #0|2 model_nudges_enabled 8?",
            o.G4
        ];
    }
}
class pe extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "GetNewChatNudgeParameterizedModelPickerResponse|1 nudge #0?",
            me
        ];
    }
}
class me extends d {
    constructor(e){
        super(), this.nudgeId = "", this.experimentName = "", this.variant = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "NewChatNudgeV2|1 nudge_id 9|2 target_model #0|3 experiment_name 9|4 bump #1 variant|5 ask #2 variant|6 silent_switch #3 variant",
            o.G4,
            H,
            z,
            W
        ];
    }
}
