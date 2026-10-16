"use strict";
require.d(exports, {
    O9: ()=>_,
    gn: ()=>ot,
    yf: ()=>H,
    An: ()=>ut,
    hS: ()=>Ee,
    jF: ()=>Ge,
    I8: ()=>$e,
    ZP: ()=>Ce,
    KR: ()=>B,
    Db: ()=>Lt,
    xb: ()=>$t,
    TS: ()=>O,
    cf: ()=>M,
    Bh: ()=>ge,
    K4: ()=>vt,
    jp: ()=>J,
    dq: ()=>$,
    pf: ()=>Q,
    D8: ()=>he,
    XE: ()=>L,
    fN: ()=>S,
    w1: ()=>W,
    jc: ()=>b,
    Wu: ()=>x,
    QX: ()=>ie,
    pV: ()=>k,
    gr: ()=>R,
    Bo: ()=>fe,
    oP: ()=>ft,
    O0: ()=>q
});
var n = require("./module-36038.js"), s = require("./module-77620.js"), o = require("./module-67918.js"), i = require("./module-65610.js"), a = require("./module-81563.js"), c = require("./module-9825.js"), l = require("./module-69584.js"), u = require("./module-89396.js"), d = require("./module-89582.js"), p = (require("./module-26885.js"), require("./module-8592.js"));
class m extends p.HL {
    static get runtime() {
        return (0, p.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "aiserver.v1.";
    }
}
class h extends m {
    constructor(e){
        super(), this.lints = [], n.proto3.util.initPartial(e, this);
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
            "GetLintsForChangeResponse|1 lints #0*",
            f
        ];
    }
}
class f extends m {
    constructor(e){
        super(), this.message = "", this.severity = "", this.relativeWorkspacePath = "", this.startLineNumberOneIndexed = 0, this.startColumnOneIndexed = 0, this.endLineNumberInclusiveOneIndexed = 0, this.endColumnOneIndexed = 0, this.quickFixes = [], n.proto3.util.initPartial(e, this);
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
            "GetLintsForChangeResponse.Lint|1 message 9|2 severity 9|3 relative_workspace_path 9|4 start_line_number_one_indexed 5|5 start_column_one_indexed 5|6 end_line_number_inclusive_one_indexed 5|7 end_column_one_indexed 5|9 quick_fixes #0*",
            g
        ];
    }
}
class g extends m {
    constructor(e){
        super(), this.message = "", this.kind = "", this.isPreferred = !1, this.edits = [], n.proto3.util.initPartial(e, this);
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
            "GetLintsForChangeResponse.Lint.QuickFix|1 message 9|2 kind 9|3 is_preferred 8|4 edits #0*",
            y
        ];
    }
}
class y extends m {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.text = "", this.startLineNumberOneIndexed = 0, this.startColumnOneIndexed = 0, this.endLineNumberInclusiveOneIndexed = 0, this.endColumnOneIndexed = 0, n.proto3.util.initPartial(e, this);
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
            "GetLintsForChangeResponse.Lint.QuickFix.Edit|1 relative_workspace_path 9|2 text 9|3 start_line_number_one_indexed 5|4 start_column_one_indexed 5|5 end_line_number_inclusive_one_indexed 5|6 end_column_one_indexed 5"
        ];
    }
}
const w = "aiserver.v1.";
class v extends p.HL {
    static get runtime() {
        return (0, p.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return w;
    }
}
var _ = (0, p.QT)(n.proto3, w, "ChunkType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CODEBASE"
    ],
    [
        2,
        "LONG_FILE"
    ],
    [
        3,
        "DOCS"
    ]
], 1), A = (0, p.QT)(n.proto3, w, "SubagentType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DEEP_SEARCH"
    ],
    [
        2,
        "FIX_LINTS"
    ],
    [
        3,
        "TASK"
    ],
    [
        4,
        "SPEC"
    ]
], 1);
class S extends v {
    constructor(e){
        super(), this.requestId = "", n.proto3.util.initPartial(e, this);
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
            "StreamReplayChatRequest|1 request_id 9|3 tokens_per_second 1?"
        ];
    }
}
class b extends v {
    constructor(e){
        super(), this.request = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "StreamUnifiedChatRequestWithTools|1 stream_unified_chat_request #0 request|2 client_side_tool_v2_result #1 request",
            W,
            s.Ue3
        ];
    }
}
class E extends v {
    constructor(e){
        super(), this.rules = [], n.proto3.util.initPartial(e, this);
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
            "UserRules|1 rules #0*",
            Ge
        ];
    }
}
class I extends v {
    constructor(e){
        super(), this.padding = "", n.proto3.util.initPartial(e, this);
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
            "StreamStart|1 padding 9"
        ];
    }
}
class C extends v {
    constructor(e){
        super(), this.traceId = "", this.spanId = "", n.proto3.util.initPartial(e, this);
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
            "SpanContext|1 trace_id 9|2 span_id 9|3 trace_flags 13?|4 trace_state 9?"
        ];
    }
}
class k extends v {
    constructor(e){
        super(), this.response = {
            case: void 0
        }, this.eventId = "", n.proto3.util.initPartial(e, this);
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
            "StreamUnifiedChatResponseWithTools|1 client_side_tool_v2_call #0 response|2 stream_unified_chat_response #1 response|3 conversation_summary #2 response|4 user_rules #3 response|5 stream_start #4 response|6 tracing_context #5?|7 event_id 9",
            s.TE4,
            ie,
            B,
            E,
            I,
            C
        ];
    }
}
class x extends v {
    constructor(e){
        super(), this.request = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "StreamUnifiedChatRequestWithToolsIdempotent|1 client_chunk #0 request|2 abort #1 request|3 close #1 request|4 idempotency_key 9?|5 seqno 13?",
            b,
            n.Empty
        ];
    }
}
class T extends v {
    constructor(e){
        super(), this.message = "", this.isDegradedMode = !1, n.proto3.util.initPartial(e, this);
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
            "WelcomeMessage|1 message 9|2 is_degraded_mode 8"
        ];
    }
}
class R extends v {
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
            "StreamUnifiedChatResponseWithToolsIdempotent|1 server_chunk #0 response|3 welcome_message #1 response|4 seqno_ack 13 response",
            k,
            T
        ];
    }
}
class B extends v {
    constructor(e){
        super(), this.summary = "", this.truncationLastBubbleIdInclusive = "", this.clientShouldStartSendingFromInclusiveBubbleId = "", this.previousConversationSummaryBubbleId = "", this.includesToolResults = !1, this.strategy = "", n.proto3.util.initPartial(e, this);
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
            "ConversationSummary|1 summary 9|2 truncation_last_bubble_id_inclusive 9|3 client_should_start_sending_from_inclusive_bubble_id 9|4 previous_conversation_summary_bubble_id 9|5 includes_tool_results 8|6 strategy 9"
        ];
    }
}
class P extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.contents = "", n.proto3.util.initPartial(e, this);
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
            "ContextToRank|1 relative_workspace_path 9|2 contents 9|3 line_range #0?|4 code_block #1?",
            o.LineRange,
            o.CodeBlock
        ];
    }
}
class J extends v {
    constructor(e){
        super(), this.score = 0, n.proto3.util.initPartial(e, this);
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
            "RankedContext|1 context #0|2 score 2",
            P
        ];
    }
}
class M extends v {
    constructor(e){
        super(), this.chunks = [], n.proto3.util.initPartial(e, this);
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
            "DocumentationCitation|1 chunks #0*",
            i.ci
        ];
    }
}
class q extends v {
    constructor(e){
        super(), this.references = [], n.proto3.util.initPartial(e, this);
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
            "WebCitation|1 references #0*",
            D
        ];
    }
}
class D extends v {
    constructor(e){
        super(), this.title = "", this.url = "", this.chunk = "", n.proto3.util.initPartial(e, this);
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
            "WebReference|2 title 9|1 url 9|3 chunk 9"
        ];
    }
}
class O extends v {
    constructor(e){
        super(), this.title = "", this.url = "", this.chunk = "", this.name = "", n.proto3.util.initPartial(e, this);
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
            "DocsReference|1 title 9|2 url 9|3 chunk 9|4 name 9"
        ];
    }
}
class N extends v {
    constructor(e){
        super(), this.content = "", this.title = "", n.proto3.util.initPartial(e, this);
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
            "AiWebSearchResult|1 content 9|2 title 9"
        ];
    }
}
class F extends v {
    constructor(e){
        super(), this.results = [], n.proto3.util.initPartial(e, this);
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
            "AiWebSearchResults|1 results #0*",
            N
        ];
    }
}
class U extends v {
    constructor(e){
        super(), this.message = "", n.proto3.util.initPartial(e, this);
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
            "StatusUpdate|1 message 9|2 metadata 9?"
        ];
    }
}
class L extends v {
    constructor(e){
        super(), this.updates = [], n.proto3.util.initPartial(e, this);
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
            "StatusUpdates|1 updates #0*",
            U
        ];
    }
}
class $ extends v {
    constructor(e){
        super(), this.query = "", this.documents = [], n.proto3.util.initPartial(e, this);
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
            "RerankDocumentsRequest|1 query 9|2 documents #0*",
            j
        ];
    }
}
class Q extends v {
    constructor(e){
        super(), this.documents = [], n.proto3.util.initPartial(e, this);
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
            "RerankDocumentsResponse|1 documents #0*",
            G
        ];
    }
}
class j extends v {
    constructor(e){
        super(), this.content = "", this.id = "", n.proto3.util.initPartial(e, this);
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
            "Document|1 content 9|2 id 9"
        ];
    }
}
class G extends v {
    constructor(e){
        super(), this.documentId = "", this.score = 0, n.proto3.util.initPartial(e, this);
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
            "DocumentIdsWithScores|1 document_id 9|2 score 2"
        ];
    }
}
class H extends v {
    constructor(e){
        super(), this.fileName = "", this.diffHistory = [], this.diffHistoryTimestamps = [], n.proto3.util.initPartial(e, this);
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
            "ComposerFileDiffHistory|1 file_name 9|2 diff_history 9*|3 diff_history_timestamps 1*"
        ];
    }
}
class z extends v {
    constructor(e){
        super(), this.uri = "", this.name = "", n.proto3.util.initPartial(e, this);
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
            "WorkspaceFolder|1 uri 9|2 name 9"
        ];
    }
}
class W extends v {
    constructor(e){
        super(), this.conversation = [], this.fullConversationHeadersOnly = [], this.documentationIdentifiers = [], this.externalLinks = [], this.diffsForCompressingFiles = [], this.multiFileLinterErrors = [], this.fileDiffHistories = [], this.quotes = [], this.additionalRankedContext = [], this.isChat = !1, this.conversationId = "", this.replyingToRequestId = "", this.repositoryInfoShouldQueryStaging = !1, this.repositoryInfoShouldQueryProd = !1, this.repoQueryAuthToken = "", this.isAgentic = !1, this.supportedTools = [], this.enableYoloMode = !1, this.yoloPrompt = "", this.useUnifiedChatPrompt = !1, this.mcpTools = [], this.isHeadless = !1, this.isBackgroundComposer = !1, this.toolsRequiringAcceptedReturn = [], this.projectLayouts = [], this.supportsGitIndex = !1, this.forceIsNotDev = !1, this.allowServerSideSemanticSearch = !1, this.workspaceFolders = [], n.proto3.util.initPartial(e, this);
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
            "StreamUnifiedChatRequest|1 conversation #0*|30 full_conversation_headers_only #1*|2 allow_long_file_scan 8?|3 explicit_context #2|4 can_handle_filenames_after_language_ids 8?|5 model_details #3|6 linter_errors #4|7 documentation_identifiers 9*|8 use_web 9?|9 external_links #5*|10 project_context #0?|11 diffs_for_compressing_files #6*|12 compress_edits 8?|13 should_cache 8?|14 multi_file_linter_errors #4*|15 current_file #7|16 recent_edits #8?|17 use_reference_composer_diff_prompt 8?|18 file_diff_histories #9*|19 use_new_compression_scheme 8?|21 quotes #10*|20 additional_ranked_context #11*|22 is_chat 8|23 conversation_id 9|72 replying_to_request_id 9|24 repository_info #12|25 repository_info_should_query_staging 8|39 repository_info_should_query_prod 8|52 query_only_repo_access #13|44 repo_query_auth_token 9|26 environment_info #14|27 is_agentic 8|28 conversation_summary #15?|29 supported_tools #16*|31 enable_yolo_mode 8|32 yolo_prompt 9|33 use_unified_chat_prompt 8|34 mcp_tools #17*|35 use_full_inputs_context 8?|36 is_resume 8?|37 allow_model_fallbacks 8?|38 number_of_times_shown_fallback_model_warning 5?|40 context_bank_session_id 9?|41 context_bank_version 5?|43 context_bank_encryption_key 12?|45 is_headless 8|68 is_background_composer 8|42 uses_codebase_results #18?|46 unified_mode #19?|47 tools_requiring_accepted_return #16*|48 should_disable_tools 8?|49 thinking_level #20?|50 should_use_chat_prompt 8?|55 background_composer_id 9?|51 uses_rules 8?|53 mode_uses_auto_apply 8?|54 unified_mode_name 9?|56 use_generate_rules_prompt 8?|57 edit_tool_supports_search_and_replace 8?|58 project_layouts #21*|59 repository_name_if_unindexed 9?|60 indexing_progress 1?|61 full_file_cmd_k_options #22?|62 indexing_phase_if_unindexed 9?|63 use_knowledge_base_prompt 8?|64 indexing_num_files_if_unindexed 5?|66 subagent_info #23?|67 supports_git_index 8|69 force_is_not_dev 8|70 disable_edit_file_timeout 8?|71 should_attach_linter_errors 8?|73 should_speculatively_route_gpt5 8?|74 force_terminal_hanging_detection 8?|75 force_summarization 8?|76 is_quick_search_query 8?|77 is_spec_mode 8?|78 allow_server_side_semantic_search 8|79 speculative_summarization_encryption_key 12?|81 workspace_folders #24*|82 does_readfile_support_images 8?|83 sandboxing_support_enabled 8?|84 custom_planning_instructions 9?|85 enable_terminal_file_persistence 8?|86 terminals_folder 9?|93 agent_transcripts_folder 9?|87 agent_notes_folder 9?|88 agent_tools_folder 9?|89 current_plan #25?|90 has_mcp_descriptors 8?|91 best_of_n_group_id 9?|92 try_use_best_of_n_promotion 8?",
            Ee,
            we,
            o.ExplicitContext,
            o.ModelDetails,
            o.LinterErrors,
            o.ComposerExternalLink,
            Y,
            o.CurrentFileInfo,
            Z,
            H,
            o.ChatQuote,
            J,
            a.bn,
            a.bq,
            o.EnvironmentInfo,
            B,
            s.XaY,
            s.q20,
            te,
            V,
            K,
            Ot,
            re,
            Ct,
            z,
            ne
        ];
    }
}
var V = (0, p.QT)(n.proto3, w, "StreamUnifiedChatRequest.UnifiedMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CHAT"
    ],
    [
        2,
        "AGENT"
    ],
    [
        3,
        "EDIT"
    ],
    [
        4,
        "CUSTOM"
    ],
    [
        5,
        "PLAN"
    ],
    [
        6,
        "DEBUG"
    ]
], 1), K = (0, p.QT)(n.proto3, w, "StreamUnifiedChatRequest.ThinkingLevel", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "MEDIUM"
    ],
    [
        2,
        "HIGH"
    ]
], 1);
class Y extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.redRanges = [], this.redRangesReversed = [], this.startHash = "", this.endHash = "", n.proto3.util.initPartial(e, this);
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
            "StreamUnifiedChatRequest.RedDiff|1 relative_workspace_path 9|2 red_ranges #0*|3 red_ranges_reversed #0*|4 start_hash 9|5 end_hash 9",
            o.SimplestRange
        ];
    }
}
class Z extends v {
    constructor(e){
        super(), this.codeBlockInfo = [], this.finalFileValues = [], n.proto3.util.initPartial(e, this);
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
            "StreamUnifiedChatRequest.RecentEdits|1 code_block_info #0*|2 final_file_values #1*|3 edits_belong_to_composer_generation_uuid 9?",
            X,
            ee
        ];
    }
}
class X extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e, this);
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
            "StreamUnifiedChatRequest.RecentEdits.CodeBlockInfo|1 relative_workspace_path 9|2 content_before 9?|3 content_after 9?|4 generation_uuid 9?|5 version 5?"
        ];
    }
}
class ee extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.content = "", n.proto3.util.initPartial(e, this);
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
            "StreamUnifiedChatRequest.RecentEdits.FileInfo|1 relative_workspace_path 9|2 content 9"
        ];
    }
}
class te extends v {
    constructor(e){
        super(), this.results = [], this.allFiles = [], n.proto3.util.initPartial(e, this);
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
            "StreamUnifiedChatRequest.CodeSearchResult|1 results #0*|2 all_files #1*",
            a.PT,
            o.File
        ];
    }
}
class re extends v {
    constructor(e){
        super(), this.filePath = "", n.proto3.util.initPartial(e, this);
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
            "StreamUnifiedChatRequest.FullFileCmdKOptions|1 file_path 9"
        ];
    }
}
class ne extends v {
    constructor(e){
        super(), this.content = "", this.name = "", n.proto3.util.initPartial(e, this);
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
            "StreamUnifiedChatRequest.CurrentPlan|1 content 9|2 name 9"
        ];
    }
}
class se extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.content = "", this.score = 0, n.proto3.util.initPartial(e, this);
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
            "ContextPiece|1 relative_workspace_path 9|2 content 9|3 score 2"
        ];
    }
}
class oe extends v {
    constructor(e){
        super(), this.pieces = [], n.proto3.util.initPartial(e, this);
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
            "ContextPieceUpdate|1 pieces #0*",
            se
        ];
    }
}
class ie extends v {
    constructor(e){
        super(), this.text = "", n.proto3.util.initPartial(e, this);
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
            "StreamUnifiedChatResponse|1 text 9|22 server_bubble_id 9?|2 debugging_only_chat_prompt 9?|3 debugging_only_token_count 5?|4 document_citation #0|5 filled_prompt 9?|6 is_big_file 8?|7 intermediate_text 9?|10 is_using_slow_request 8?|8 chunk_identity #1?|9 docs_reference #2?|11 web_citation #3?|33 ai_web_search_results #4?|12 status_updates #5?|13 tool_call #6?|36 tool_call_v2 #7?|14 should_break_ai_message 8?|15 partial_tool_call #8?|16 final_tool_result #9?|17 symbol_link #10?|19 file_link #11?|18 conversation_summary #12?|20 service_status_update #13?|21 viewable_git_context #14?|23 context_piece_update #15?|24 used_code #16?|25 thinking #17?|37 thinking_style #18?|26 stop_using_dsv3_agentic_model 8?|27 usage_uuid 9?|28 conversation_summary_starter #19?|29 subagent_return #20?|30 context_window_status #21?|31 image_description #22?|32 parallel_tool_calls_complete 8?|34 stars_feedback_request #23?|35 model_provider_request_json 9?",
            M,
            ce,
            O,
            q,
            F,
            L,
            s.Faf,
            s.bR2,
            s.AUe,
            le,
            fe,
            ge,
            B,
            he,
            be,
            oe,
            ae,
            $e,
            Ce,
            me,
            It,
            de,
            ue,
            pe
        ];
    }
}
class ae extends v {
    constructor(e){
        super(), this.codeResults = [], n.proto3.util.initPartial(e, this);
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
            "StreamUnifiedChatResponse.UsedCode|1 code_results #0*",
            a.PT
        ];
    }
}
class ce extends v {
    constructor(e){
        super(), this.fileName = "", this.startLine = 0, this.endLine = 0, this.text = "", this.chunkType = _.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "StreamUnifiedChatResponse.ChunkIdentity|1 file_name 9|2 start_line 5|3 end_line 5|4 text 9|5 chunk_type #0",
            _
        ];
    }
}
class le extends v {
    constructor(e){
        super(), this.toolCallId = "", n.proto3.util.initPartial(e, this);
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
            "StreamUnifiedChatResponse.FinalToolResult|1 tool_call_id 9|2 result #0",
            s.Ue3
        ];
    }
}
class ue extends v {
    constructor(e){
        super(), this.description = "", this.imageUuid = "", n.proto3.util.initPartial(e, this);
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
            "StreamUnifiedChatResponse.ImageDescription|1 description 9|2 image_uuid 9"
        ];
    }
}
class de extends v {
    constructor(e){
        super(), this.percentageRemaining = 0, n.proto3.util.initPartial(e, this);
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
            "ContextWindowStatus|1 percentage_remaining 5|2 tokens_used 5?|3 token_limit 5?|4 percentage_remaining_float 2?"
        ];
    }
}
class pe extends v {
    constructor(e){
        super(), this.bubbleId = "", this.message = "", n.proto3.util.initPartial(e, this);
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
            "StarsFeedbackRequest|1 bubble_id 9|2 message 9"
        ];
    }
}
class me extends v {
    constructor(e){
        super(), this.message = "", n.proto3.util.initPartial(e, this);
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
            "ConversationSummaryStarter|1 message 9"
        ];
    }
}
class he extends v {
    constructor(e){
        super(), this.message = "", this.codicon = "", n.proto3.util.initPartial(e, this);
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
            "ServiceStatusUpdate|1 message 9|2 codicon 9|3 allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown 8?|4 action_to_run_on_status_update 9?"
        ];
    }
}
class fe extends v {
    constructor(e){
        super(), this.symbolName = "", this.symbolSearchString = "", this.relativeWorkspacePath = "", this.roughLineNumber = 0, n.proto3.util.initPartial(e, this);
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
            "SymbolLink|1 symbol_name 9|2 symbol_search_string 9|3 relative_workspace_path 9|4 rough_line_number 5"
        ];
    }
}
class ge extends v {
    constructor(e){
        super(), this.displayName = "", this.relativeWorkspacePath = "", n.proto3.util.initPartial(e, this);
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
            "FileLink|1 display_name 9|2 relative_workspace_path 9"
        ];
    }
}
class ye extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.redRanges = [], this.redRangesReversed = [], this.startHash = "", this.endHash = "", n.proto3.util.initPartial(e, this);
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
            "RedDiff|1 relative_workspace_path 9|2 red_ranges #0*|3 red_ranges_reversed #0*|4 start_hash 9|5 end_hash 9",
            o.SimplestRange
        ];
    }
}
class we extends v {
    constructor(e){
        super(), this.bubbleId = "", this.type = Ie.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "ConversationMessageHeader|1 bubble_id 9|2 server_bubble_id 9?|3 type #0",
            Ie
        ];
    }
}
class ve extends v {
    constructor(e){
        super(), this.fileDetails = "", this.fileName = "", n.proto3.util.initPartial(e, this);
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
            "DiffFile|1 file_details 9|2 file_name 9"
        ];
    }
}
class _e extends v {
    constructor(e){
        super(), this.description = "", this.message = "", this.files = [], n.proto3.util.initPartial(e, this);
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
            "ViewableCommitProps|1 description 9|2 message 9|3 files #0*",
            ve
        ];
    }
}
class Ae extends v {
    constructor(e){
        super(), this.title = "", this.body = "", this.files = [], n.proto3.util.initPartial(e, this);
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
            "ViewablePRProps|1 title 9|2 body 9|3 files #0*",
            ve
        ];
    }
}
class Se extends v {
    constructor(e){
        super(), this.files = [], this.diffPreface = "", n.proto3.util.initPartial(e, this);
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
            "ViewableDiffProps|1 files #0*|2 diff_preface 9",
            ve
        ];
    }
}
class be extends v {
    constructor(e){
        super(), this.diffData = [], n.proto3.util.initPartial(e, this);
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
            "ViewableGitContext|1 commit_data #0?|2 pull_request_data #1?|3 diff_data #2*",
            _e,
            Ae,
            Se
        ];
    }
}
class Ee extends v {
    constructor(e){
        super(), this.text = "", this.type = Ie.UNSPECIFIED, this.attachedCodeChunks = [], this.codebaseContextChunks = [], this.commits = [], this.pullRequests = [], this.gitDiffs = [], this.assistantSuggestedDiffs = [], this.interpreterResults = [], this.images = [], this.attachedFolders = [], this.approximateLintErrors = [], this.bubbleId = "", this.attachedFoldersNew = [], this.lints = [], this.userResponsesToSuggestedCodeBlocks = [], this.relevantFiles = [], this.toolResults = [], this.notepads = [], this.capabilities = [], this.editTrailContexts = [], this.suggestedCodeBlocks = [], this.diffsForCompressingFiles = [], this.multiFileLinterErrors = [], this.diffHistories = [], this.recentlyViewedFiles = [], this.recentLocationsHistory = [], this.isAgentic = !1, this.fileDiffTrajectories = [], this.existedSubsequentTerminalCommand = !1, this.existedPreviousTerminalCommand = !1, this.docsReferences = [], this.webReferences = [], this.aiWebSearchResults = [], this.attachedFoldersListDirResults = [], this.humanChanges = [], this.attachedHumanChanges = !1, this.summarizedComposers = [], this.cursorRules = [], this.contextPieces = [], this.allThinkingBlocks = [], this.diffsSinceLastApply = [], this.deletedFiles = [], this.supportedTools = [], this.consoleLogs = [], this.knowledgeItems = [], this.uiElementPicked = [], this.documentationSelections = [], this.externalLinks = [], this.projectLayouts = [], this.capabilityContexts = [], this.todos = [], this.requestId = "", this.createdAt = "", this.mcpDescriptors = [], this.workspaceUris = [], this.cursorCommands = [], this.cursorCommandsExplicitlySet = !1, this.pastChats = [], this.pastChatsExplicitlySet = !1, n.proto3.util.initPartial(e, this);
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
            "ConversationMessage|1 text 9|2 type #0|3 attached_code_chunks #1*|4 codebase_context_chunks #2*|5 commits #3*|6 pull_requests #4*|7 git_diffs #5*|8 assistant_suggested_diffs #6*|9 interpreter_results #7*|10 images #8*|11 attached_folders 9*|12 approximate_lint_errors #9*|13 bubble_id 9|32 server_bubble_id 9?|14 attached_folders_new #10*|15 lints #11*|16 user_responses_to_suggested_code_blocks #12*|17 relevant_files 9*|18 tool_results #13*|19 notepads #14*|20 is_capability_iteration 8?|21 capabilities #15*|22 edit_trail_contexts #16*|23 suggested_code_blocks #17*|24 diffs_for_compressing_files #18*|25 multi_file_linter_errors #19*|26 diff_histories #20*|27 recently_viewed_files #1*|28 recent_locations_history #21*|29 is_agentic 8|30 file_diff_trajectories #22*|31 conversation_summary #23?|33 existed_subsequent_terminal_command 8|34 existed_previous_terminal_command 8|35 docs_references #24*|36 web_references #25*|75 ai_web_search_results #26*|37 git_context #27?|38 attached_folders_list_dir_results #28*|39 cached_conversation_summary #23?|40 human_changes #29*|41 attached_human_changes 8|42 summarized_composers #30*|43 cursor_rules #31*|44 context_pieces #32*|45 thinking #33?|46 all_thinking_blocks #33*|85 thinking_style #34?|47 unified_mode #35?|98 agent_mode #36?|48 diffs_since_last_apply #37*|49 deleted_files #38*|50 usage_uuid 9?|51 supported_tools #39*|52 current_file_location_data #40?|53 edit_tool_supports_search_and_replace 8?|54 last_terminal_cwd 9?|55 user_explicitly_asked_to_generate_cursor_rules 8?|56 console_logs #41*|57 rich_text 9?|58 knowledge_items #42*|59 ui_element_picked #43*|60 user_explicitly_asked_to_add_to_knowledge_base 8?|61 documentation_selections #44*|62 external_links #45*|63 use_web 8?|64 project_layouts #46*|65 thinking_duration_ms 5?|88 step_duration_ms 5?|66 subagent_return #47?|67 is_simple_looping_message 8?|68 capability_contexts #48*|69 checkpoint_commit_hash 9?|70 git_status_raw 9?|71 todos #49*|72 is_review_edits_followup 8?|74 request_id 9|73 ide_editors_state #50?|76 context_window_status #51?|77 is_plan_execution 8?|78 created_at 9|79 model_info #52|80 is_quick_search_query 8?|81 plan_update #53?|82 is_simulated_msg 8?|95 simulated_msg_reason #54?|97 simulated_message_metadata #55?|83 mcp_descriptors #56*|84 workspace_project_dir 9?|87 workspace_uris 9*|86 debug_mode_config #57?|89 text_blob_id 12?|90 rich_text_blob_id 12?|91 cursor_commands #58*|92 cursor_commands_explicitly_set 8|93 past_chats #59*|94 past_chats_explicitly_set 8|96 triggering_user_info #60?|99 turn_steer 8?|100 sent_by_agent_id 9?|101 sent_by_voice_call 8?|102 sender #61?",
            Ie,
            ke,
            o.CodeBlock,
            ot,
            it,
            o.GitDiff,
            nt,
            rt,
            o.ImageProto,
            Oe,
            et,
            Ne,
            ct,
            Pe,
            Je,
            c.Gn,
            De,
            at,
            ye,
            o.LinterErrorsWithoutFileContents,
            ht,
            Fe,
            H,
            B,
            O,
            D,
            N,
            be,
            s.$PL,
            Le,
            Me,
            o.CursorRule,
            se,
            $e,
            Ce,
            V,
            l.xyI,
            Qe,
            je,
            s.XaY,
            Xe,
            o.RCPLogEntry,
            Ge,
            o.RCPUIElementPicked,
            He,
            o.ComposerExternalLink,
            Ot,
            It,
            c.Km,
            s.kWq,
            ze,
            de,
            o.ModelInfo,
            Ve,
            l.c_h,
            Ke,
            Ye,
            u.TT,
            d.Ps,
            d.AW,
            l.iHX,
            l.D$r
        ];
    }
}
var Ie = (0, p.QT)(n.proto3, w, "ConversationMessage.MessageType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "HUMAN"
    ],
    [
        2,
        "AI"
    ]
], 1), Ce = (0, p.QT)(n.proto3, w, "ConversationMessage.ThinkingStyle", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DEFAULT"
    ],
    [
        2,
        "CODEX"
    ],
    [
        3,
        "GPT5"
    ]
], 1);
class ke extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.startLineNumber = 0, this.lines = [], this.languageIdentifier = "", n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.CodeChunk|1 relative_workspace_path 9|2 start_line_number 5|3 lines 9*|4 summarization_strategy #0?|5 language_identifier 9|6 intent #1?|7 is_final_version 8?|8 is_first_version 8?|9 contents_are_missing 8?|10 is_only_included_from_folder 8?|11 code_chunk_git_context #2?",
            Te,
            xe,
            Re
        ];
    }
}
var xe = (0, p.QT)(n.proto3, w, "ConversationMessage.CodeChunk.Intent", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "COMPOSER_FILE"
    ],
    [
        2,
        "COMPRESSED_COMPOSER_FILE"
    ],
    [
        3,
        "RECENTLY_VIEWED_FILE"
    ],
    [
        4,
        "OUTLINE"
    ],
    [
        5,
        "MENTIONED_FILE"
    ],
    [
        6,
        "CODE_SELECTION"
    ],
    [
        7,
        "AI_EDITED_FILE"
    ],
    [
        8,
        "VISIBLE_FILE"
    ],
    [
        9,
        "TERMINAL_SELECTION"
    ]
], 1), Te = (0, p.QT)(n.proto3, w, "ConversationMessage.CodeChunk.SummarizationStrategy", [
    [
        0,
        "NONE_UNSPECIFIED"
    ],
    [
        1,
        "SUMMARIZED"
    ],
    [
        2,
        "EMBEDDED"
    ]
], 1);
class Re extends v {
    constructor(e){
        super(), this.gitInfo = [], n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.CodeChunk.CodeChunkGitContext|1 git_info #0*",
            Be
        ];
    }
}
class Be extends v {
    constructor(e){
        super(), this.commit = "", this.author = "", this.date = "", this.message = "", n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.CodeChunk.CodeChunkGitContext.CodeChunkGitInfo|1 commit 9|2 author 9|3 date 9|4 message 9"
        ];
    }
}
class Pe extends v {
    constructor(e){
        super(), this.toolCallId = "", this.toolName = "", this.toolIndex = 0, this.args = "", this.rawArgs = "", this.attachedCodeChunks = [], this.images = [], n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.ToolResult|1 tool_call_id 9|2 tool_name 9|3 tool_index 13|12 model_call_id 9?|4 args 9|5 raw_args 9|6 attached_code_chunks #0*|7 content 9?|8 result #1|9 error #2?|10 images #3*|11 tool_call #4?|13 started_at_ms 4?|14 completed_at_ms 4?",
            ke,
            s.Ue3,
            s.MtQ,
            o.ImageProto,
            s.TE4
        ];
    }
}
class Je extends v {
    constructor(e){
        super(), this.name = "", this.text = "", this.attachedCodeChunks = [], this.attachedFolders = [], this.commits = [], this.pullRequests = [], this.gitDiffs = [], this.images = [], n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.NotepadContext|1 name 9|2 text 9|3 attached_code_chunks #0*|4 attached_folders 9*|5 commits #1*|6 pull_requests #2*|7 git_diffs #3*|8 images #4*",
            ke,
            ot,
            it,
            o.GitDiff,
            o.ImageProto
        ];
    }
}
class Me extends v {
    constructor(e){
        super(), this.name = "", n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.ComposerContext|1 name 9|2 conversation_summary #0",
            B
        ];
    }
}
class qe extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.contextLines = "", this.text = "", n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.EditLocation|1 relative_workspace_path 9|3 range #0|4 initial_range #0|5 context_lines 9|6 text 9|7 text_range #0",
            o.SimplestRange
        ];
    }
}
class De extends v {
    constructor(e){
        super(), this.uniqueId = "", this.editTrailSorted = [], n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.EditTrailContext|1 unique_id 9|2 edit_trail_sorted #0*",
            qe
        ];
    }
}
class Oe extends v {
    constructor(e){
        super(), this.message = "", this.value = "", this.startLine = 0, this.endLine = 0, this.startColumn = 0, this.endColumn = 0, n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.ApproximateLintError|1 message 9|2 value 9|3 start_line 5|4 end_line 5|5 start_column 5|6 end_column 5"
        ];
    }
}
class Ne extends v {
    constructor(e){
        super(), this.chatCodeblockModelValue = "", n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.Lints|1 lints #0|2 chat_codeblock_model_value 9",
            h
        ];
    }
}
class Fe extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.lineNumber = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Fe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Fe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Fe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Fe, e, t);
    }
    static $() {
        return [
            "ConversationMessage.RecentLocation|1 relative_workspace_path 9|2 line_number 5"
        ];
    }
}
class Ue extends v {
    constructor(e){
        super(), this.startLineNumber = 0, this.endLineNumberExclusive = 0, this.beforeContextLines = [], this.removedLines = [], this.addedLines = [], this.afterContextLines = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ue).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ue).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ue).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ue, e, t);
    }
    static $() {
        return [
            "ConversationMessage.RenderedDiff|1 start_line_number 5|2 end_line_number_exclusive 5|3 before_context_lines 9*|4 removed_lines 9*|5 added_lines 9*|6 after_context_lines 9*"
        ];
    }
}
class Le extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.renderedDiffs = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Le).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Le).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Le).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Le, e, t);
    }
    static $() {
        return [
            "ConversationMessage.HumanChange|1 relative_workspace_path 9|2 rendered_diffs #0*",
            Ue
        ];
    }
}
class $e extends v {
    constructor(e){
        super(), this.text = "", this.signature = "", this.redactedThinking = "", this.isLastThinkingChunk = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new $e).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new $e).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new $e).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals($e, e, t);
    }
    static $() {
        return [
            "ConversationMessage.Thinking|1 text 9|2 signature 9|3 redacted_thinking 9|4 is_last_thinking_chunk 8"
        ];
    }
}
class Qe extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Qe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Qe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Qe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Qe, e, t);
    }
    static $() {
        return [
            "ConversationMessage.DiffSinceLastApply|1 relative_workspace_path 9|2 diff #0?|4 is_accepted 8?|5 is_rejected 8?|6 last_apply_chained_from_n_human_messages_ago 5?",
            s.KRm
        ];
    }
}
class je extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new je).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new je).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new je).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(je, e, t);
    }
    static $() {
        return [
            "ConversationMessage.DeletedFile|1 relative_workspace_path 9"
        ];
    }
}
class Ge extends v {
    constructor(e){
        super(), this.title = "", this.knowledge = "", this.knowledgeId = "", this.isGenerated = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ge).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ge).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ge).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ge, e, t);
    }
    static $() {
        return [
            "ConversationMessage.KnowledgeItem|1 title 9|2 knowledge 9|3 knowledge_id 9|4 is_generated 8"
        ];
    }
}
class He extends v {
    constructor(e){
        super(), this.docId = "", this.name = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new He).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new He).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new He).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(He, e, t);
    }
    static $() {
        return [
            "ConversationMessage.DocumentationSelection|1 doc_id 9|2 name 9"
        ];
    }
}
class ze extends v {
    constructor(e){
        super(), this.isPillDisplayed = !1, this.visibleFilePaths = [], this.recentlyViewedFilePaths = [], this.visibleFiles = [], this.recentlyViewedFiles = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ze).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ze).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ze).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ze, e, t);
    }
    static $() {
        return [
            "ConversationMessage.IdeEditorsState|1 is_pill_displayed 8|2 visible_file_paths 9*|3 recently_viewed_file_paths 9*|4 visible_files #0*|5 recently_viewed_files #0*",
            We
        ];
    }
}
class We extends v {
    constructor(e){
        super(), this.relativePath = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new We).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new We).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new We).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(We, e, t);
    }
    static $() {
        return [
            "ConversationMessage.IdeEditorsState.File|1 relative_path 9|2 is_currently_focused 8?|3 current_line_number 5?|4 current_line_text 9?|5 line_count 5?|6 absolute_path 9?"
        ];
    }
}
class Ve extends v {
    constructor(e){
        super(), this.currentPlan = "", this.isFirstTimeSeen = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ve).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ve).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ve).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ve, e, t);
    }
    static $() {
        return [
            "ConversationMessage.PlanUpdate|1 current_plan 9|2 is_first_time_seen 8"
        ];
    }
}
class Ke extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ke).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ke).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ke).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ke, e, t);
    }
    static $() {
        return [
            "ConversationMessage.SimulatedMessageMetadata|1 title 9?|2 task_id 9?|3 fsd_finding_action 9?|4 url 9?|5 subscription_source #0?|6 subscription_event_display #1?|7 interaction_response #2?",
            l.vns,
            l.gan,
            l.nh0
        ];
    }
}
class Ye extends v {
    constructor(e){
        super(), this.folderPath = "", this.tools = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ye).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ye).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ye).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ye, e, t);
    }
    static $() {
        return [
            "ConversationMessage.McpDescriptor|1 folder_path 9|2 server_name 9?|3 tools #0*|4 server_use_instructions 9?",
            Ze
        ];
    }
}
class Ze extends v {
    constructor(e){
        super(), this.toolName = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ze).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ze).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ze).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ze, e, t);
    }
    static $() {
        return [
            "ConversationMessage.McpDescriptor.Tool|1 tool_name 9|2 description 9?"
        ];
    }
}
class Xe extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.lineNumber = 0, this.text = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Xe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Xe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Xe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Xe, e, t);
    }
    static $() {
        return [
            "CurrentFileLocationData|1 relative_workspace_path 9|2 line_number 5|3 text 9"
        ];
    }
}
class et extends v {
    constructor(e){
        super(), this.relativePath = "", this.files = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new et).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new et).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new et).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(et, e, t);
    }
    static $() {
        return [
            "FolderInfo|1 relative_path 9|2 files #0*",
            tt
        ];
    }
}
class tt extends v {
    constructor(e){
        super(), this.relativePath = "", this.content = "", this.truncated = !1, this.score = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new tt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new tt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new tt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(tt, e, t);
    }
    static $() {
        return [
            "FolderFileInfo|1 relative_path 9|2 content 9|3 truncated 8|4 score 2"
        ];
    }
}
class rt extends v {
    constructor(e){
        super(), this.output = "", this.success = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new rt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new rt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new rt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(rt, e, t);
    }
    static $() {
        return [
            "InterpreterResult|1 output 9|2 success 8"
        ];
    }
}
class nt extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.chunks = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new nt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new nt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new nt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(nt, e, t);
    }
    static $() {
        return [
            "SimpleFileDiff|1 relative_workspace_path 9|3 chunks #0*",
            st
        ];
    }
}
class st extends v {
    constructor(e){
        super(), this.oldLines = [], this.newLines = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new st).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new st).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new st).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(st, e, t);
    }
    static $() {
        return [
            "SimpleFileDiff.Chunk|1 old_lines 9*|2 new_lines 9*|3 old_range #0|4 new_range #0",
            o.LineRange
        ];
    }
}
class ot extends v {
    constructor(e){
        super(), this.sha = "", this.message = "", this.description = "", this.diff = [], this.author = "", this.date = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ot).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ot).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ot).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ot, e, t);
    }
    static $() {
        return [
            "Commit|1 sha 9|2 message 9|3 description 9|4 diff #0*|5 author 9|6 date 9",
            o.FileDiff
        ];
    }
}
class it extends v {
    constructor(e){
        super(), this.title = "", this.body = "", this.diff = [], this.id = n.protoInt64.zero, this.number = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new it).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new it).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new it).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(it, e, t);
    }
    static $() {
        return [
            "PullRequest|1 title 9|2 body 9|3 diff #0*|4 id 3|5 number 3",
            o.FileDiff
        ];
    }
}
class at extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new at).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new at).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new at).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(at, e, t);
    }
    static $() {
        return [
            "SuggestedCodeBlock|1 relative_workspace_path 9"
        ];
    }
}
class ct extends v {
    constructor(e){
        super(), this.userResponseType = lt.UNSPECIFIED, this.filePath = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ct).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ct).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ct).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ct, e, t);
    }
    static $() {
        return [
            "UserResponseToSuggestedCodeBlock|1 user_response_type #0|2 file_path 9|3 user_modifications_to_suggested_code_blocks #1?",
            lt,
            o.FileDiff
        ];
    }
}
var lt = (0, p.QT)(n.proto3, w, "UserResponseToSuggestedCodeBlock.UserResponseType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ACCEPT"
    ],
    [
        2,
        "REJECT"
    ],
    [
        3,
        "MODIFY"
    ]
], 1);
class ut extends v {
    constructor(e){
        super(), this.fileName = "", this.fileContent = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ut).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ut).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ut).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ut, e, t);
    }
    static $() {
        return [
            "ContextRerankingCandidateFile|1 file_name 9|2 file_content 9"
        ];
    }
}
class dt extends v {
    constructor(e){
        super(), this.chunks = [], this.editor = pt.UNSPECIFIED, this.hitTimeout = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new dt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new dt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new dt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(dt, e, t);
    }
    static $() {
        return [
            "ComposerFileDiff|1 chunks #0*|2 editor #1|3 hit_timeout 8",
            mt,
            pt
        ];
    }
}
var pt = (0, p.QT)(n.proto3, w, "ComposerFileDiff.Editor", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "AI"
    ],
    [
        2,
        "HUMAN"
    ]
], 1);
class mt extends v {
    constructor(e){
        super(), this.diffString = "", this.oldStart = 0, this.newStart = 0, this.oldLines = 0, this.newLines = 0, this.linesRemoved = 0, this.linesAdded = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new mt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new mt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new mt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(mt, e, t);
    }
    static $() {
        return [
            "ComposerFileDiff.ChunkDiff|1 diff_string 9|2 old_start 5|3 new_start 5|4 old_lines 5|5 new_lines 5|6 lines_removed 5|7 lines_added 5"
        ];
    }
}
class ht extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.diffs = [], this.timestamp = 0, this.uniqueId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ht).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ht).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ht).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ht, e, t);
    }
    static $() {
        return [
            "DiffHistoryData|1 relative_workspace_path 9|2 diffs #0*|3 timestamp 1|4 unique_id 9|5 start_to_end_diff #0",
            dt
        ];
    }
}
class ft extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ft).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ft).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ft).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ft, e, t);
    }
    static $() {
        return [
            "WarmStreamUnifiedChatWithToolsResponse"
        ];
    }
}
class gt extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.startLineNumber = 0, this.endLineNumberInclusive = 0, this.intent = yt.UNSPECIFIED, this.inclusionType = wt.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new gt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new gt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new gt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(gt, e, t);
    }
    static $() {
        return [
            "CodeChunkContextInclusionInfoV2|1 relative_workspace_path 9|2 start_line_number 5|3 end_line_number_inclusive 5|4 intent #0|10 inclusion_type #1|6 tooltip_text 9?|9 pill_is_dashed 8?|8 pill_sub_codicon_name 9?|5 detail_text 9?|7 codicon_name 9?",
            yt,
            wt
        ];
    }
}
var yt = (0, p.QT)(n.proto3, w, "CodeChunkContextInclusionInfoV2.Intent", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "FILE"
    ],
    [
        2,
        "SELECTION"
    ]
], 1), wt = (0, p.QT)(n.proto3, w, "CodeChunkContextInclusionInfoV2.InclusionType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "FULL"
    ],
    [
        2,
        "OUTLINE"
    ],
    [
        3,
        "FILENAME"
    ]
], 1);
class vt extends v {
    constructor(e){
        super(), this.codeChunks = [], this.userMessageTokenLimit = 0, this.codeChunksV2 = [], this.folderExclusionTooltip = "", this.barFraction = 0, this.didBarOverflow = !1, this.shouldShowNewChatHint = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new vt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new vt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new vt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(vt, e, t);
    }
    static $() {
        return [
            "GetPromptDryRunResponse|1 code_chunks #0*|3 user_message_token_limit 5|4 user_message_token_count #1|5 full_conversation_token_count #1|6 code_chunks_v2 #2*|2 folder_exclusion_tooltip 9|7 bar_fraction 2|8 did_bar_overflow 8|9 should_show_new_chat_hint 8",
            At,
            _t,
            gt
        ];
    }
}
class _t extends v {
    constructor(e){
        super(), this.isOverTokenLimit = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _t).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _t).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _t).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_t, e, t);
    }
    static $() {
        return [
            "GetPromptDryRunResponse.TokenCount|1 is_over_token_limit 8|2 num_tokens 5?"
        ];
    }
}
class At extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.startLineNumber = 0, this.endLineNumberInclusive = 0, this.inclusionType = St.UNSPECIFIED, this.fullFileTokenCount = 0, this.promptTokenCount = 0, this.intent = bt.UNSPECIFIED, this.chunkIsFromLastUserMessage = !1, this.isCompressed = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new At).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new At).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new At).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(At, e, t);
    }
    static $() {
        return [
            "CodeChunkContextInclusionInfo|1 relative_workspace_path 9|2 start_line_number 5|3 end_line_number_inclusive 5|4 inclusion_type #0|5 full_file_token_count 5|6 prompt_token_count 5|11 full_file_tokens_count #1|7 exclusion_tooltip 9?|8 intent #2|9 chunk_is_from_last_user_message 8|10 is_compressed 8",
            St,
            Et,
            bt
        ];
    }
}
var St = (0, p.QT)(n.proto3, w, "CodeChunkContextInclusionInfo.InclusionType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "FULL"
    ],
    [
        2,
        "OUTLINE"
    ],
    [
        3,
        "FILENAME"
    ]
], 1), bt = (0, p.QT)(n.proto3, w, "CodeChunkContextInclusionInfo.Intent", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "FILE"
    ],
    [
        2,
        "SELECTION"
    ]
], 1);
class Et extends v {
    constructor(e){
        super(), this.isTooLargeToCount = !1, this.numTokens = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Et).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Et).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Et).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Et, e, t);
    }
    static $() {
        return [
            "CodeChunkContextInclusionInfo.TokenCount|1 is_too_large_to_count 8|2 num_tokens 5"
        ];
    }
}
class It extends v {
    constructor(e){
        super(), this.subagentType = A.UNSPECIFIED, this.returnValue = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new It).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new It).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new It).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(It, e, t);
    }
    static $() {
        return [
            "SubagentReturnCall|1 subagent_type #0|2 deep_search_return_value #1 return_value|3 fix_lints_return_value #2 return_value|4 task_return_value #3 return_value|5 spec_return_value #4 return_value",
            A,
            xt,
            Bt,
            Jt,
            qt
        ];
    }
}
class Ct extends v {
    constructor(e){
        super(), this.subagentType = A.UNSPECIFIED, this.subagentId = "", this.params = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ct).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ct).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ct).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ct, e, t);
    }
    static $() {
        return [
            "SubagentInfo|1 subagent_type #0|2 subagent_id 9|3 deep_search_params #1 params|4 fix_lints_params #2 params|6 task_params #3 params|7 spec_params #4 params|5 parent_request_id 9?",
            A,
            kt,
            Rt,
            Pt,
            Mt
        ];
    }
}
class kt extends v {
    constructor(e){
        super(), this.query = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new kt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new kt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new kt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(kt, e, t);
    }
    static $() {
        return [
            "DeepSearchSubagentParams|1 query 9"
        ];
    }
}
class xt extends v {
    constructor(e){
        super(), this.contextItems = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new xt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new xt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new xt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(xt, e, t);
    }
    static $() {
        return [
            "DeepSearchSubagentReturnValue|1 context_items #0*",
            Tt
        ];
    }
}
class Tt extends v {
    constructor(e){
        super(), this.file = "", this.explanation = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Tt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Tt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Tt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Tt, e, t);
    }
    static $() {
        return [
            "DeepSearchSubagentReturnValue.ContextItem|1 file 9|2 line_range #0?|3 explanation 9",
            o.LineRange
        ];
    }
}
class Rt extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Rt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Rt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Rt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Rt, e, t);
    }
    static $() {
        return [
            "FixLintsSubagentParams"
        ];
    }
}
class Bt extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Bt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Bt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Bt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Bt, e, t);
    }
    static $() {
        return [
            "FixLintsSubagentReturnValue"
        ];
    }
}
class Pt extends v {
    constructor(e){
        super(), this.taskDescription = "", this.allowedWriteDirectories = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Pt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Pt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Pt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Pt, e, t);
    }
    static $() {
        return [
            "TaskSubagentParams|1 task_description 9|2 allowed_write_directories 9*"
        ];
    }
}
class Jt extends v {
    constructor(e){
        super(), this.summary = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Jt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Jt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Jt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Jt, e, t);
    }
    static $() {
        return [
            "TaskSubagentReturnValue|1 summary 9"
        ];
    }
}
class Mt extends v {
    constructor(e){
        super(), this.plan = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Mt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Mt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Mt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Mt, e, t);
    }
    static $() {
        return [
            "SpecSubagentParams|1 plan 9"
        ];
    }
}
class qt extends v {
    constructor(e){
        super(), this.summary = "", this.stringReplacements = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new qt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new qt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new qt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(qt, e, t);
    }
    static $() {
        return [
            "SpecSubagentReturnValue|1 summary 9|2 string_replacements #0*",
            Dt
        ];
    }
}
class Dt extends v {
    constructor(e){
        super(), this.oldString = "", this.newString = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Dt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Dt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Dt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Dt, e, t);
    }
    static $() {
        return [
            "StringReplacement|1 old_string 9|2 new_string 9"
        ];
    }
}
class Ot extends v {
    constructor(e){
        super(), this.rootPath = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ot).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ot).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ot).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ot, e, t);
    }
    static $() {
        return [
            "ProjectLayout|1 root_path 9|2 content #0|3 list_dir_v2_result #1?",
            Nt,
            s.$rP
        ];
    }
}
class Nt extends v {
    constructor(e){
        super(), this.directories = [], this.files = [], this.hiddenFiles = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Nt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Nt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Nt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Nt, e, t);
    }
    static $() {
        return [
            "ProjectLayoutDirectoryContent|1 directories #0*|2 files #1*|3 total_files 5?|4 total_subfolders 5?|5 hidden_files #1*",
            Ft,
            Ut
        ];
    }
}
class Ft extends v {
    constructor(e){
        super(), this.name = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ft).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ft).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ft).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ft, e, t);
    }
    static $() {
        return [
            "ProjectLayoutDirectory|1 name 9|2 content #0",
            Nt
        ];
    }
}
class Ut extends v {
    constructor(e){
        super(), this.name = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ut).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ut).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ut).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ut, e, t);
    }
    static $() {
        return [
            "ProjectLayoutFile|1 name 9"
        ];
    }
}
class Lt extends v {
    constructor(e){
        super(), this.fileStates = {}, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Lt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Lt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Lt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Lt, e, t);
    }
    static $() {
        return [
            "ConvertOALToNALRequest|1 request #0|2 file_states 9,#1",
            W,
            l.Mzv
        ];
    }
}
class $t extends v {
    constructor(e){
        super(), this.blobs = {}, this.bubbleCheckpoints = {}, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new $t).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new $t).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new $t).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals($t, e, t);
    }
    static $() {
        return [
            "ConvertOALToNALResponse|1 conversation_state #0|2 blobs 9,12|3 bubble_checkpoints 9,#0",
            l.Y9z
        ];
    }
}
