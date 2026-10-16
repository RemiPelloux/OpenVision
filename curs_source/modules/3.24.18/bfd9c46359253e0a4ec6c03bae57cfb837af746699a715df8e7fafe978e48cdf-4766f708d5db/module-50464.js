"use strict";
require.d(exports, {
    O9: ()=>v,
    gn: ()=>Ee,
    yf: ()=>R,
    An: ()=>Ae,
    hS: ()=>G,
    jF: ()=>de,
    I8: ()=>ce,
    ZP: ()=>W,
    KR: ()=>b,
    TS: ()=>T,
    cf: ()=>x,
    Bh: ()=>q,
    jp: ()=>k,
    D8: ()=>B,
    XE: ()=>A,
    Bo: ()=>D,
    O0: ()=>E
});
var n = require("./module-36038.js"), s = require("./module-77620.js"), o = require("./module-67918.js"), i = require("./module-65610.js"), a = (require("./module-4067.js"), require("./module-9825.js")), c = require("./module-69584.js"), l = require("./module-89396.js"), u = require("./module-89582.js"), d = (require("./module-26885.js"), require("./module-8592.js"));
class p extends d.HL {
    static get runtime() {
        return (0, d.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "aiserver.v1.";
    }
}
class m extends p {
    constructor(e){
        super(), this.lints = [], n.proto3.util.initPartial(e, this);
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
            "GetLintsForChangeResponse|1 lints #0*",
            h
        ];
    }
}
class h extends p {
    constructor(e){
        super(), this.message = "", this.severity = "", this.relativeWorkspacePath = "", this.startLineNumberOneIndexed = 0, this.startColumnOneIndexed = 0, this.endLineNumberInclusiveOneIndexed = 0, this.endColumnOneIndexed = 0, this.quickFixes = [], n.proto3.util.initPartial(e, this);
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
            "GetLintsForChangeResponse.Lint|1 message 9|2 severity 9|3 relative_workspace_path 9|4 start_line_number_one_indexed 5|5 start_column_one_indexed 5|6 end_line_number_inclusive_one_indexed 5|7 end_column_one_indexed 5|9 quick_fixes #0*",
            f
        ];
    }
}
class f extends p {
    constructor(e){
        super(), this.message = "", this.kind = "", this.isPreferred = !1, this.edits = [], n.proto3.util.initPartial(e, this);
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
            "GetLintsForChangeResponse.Lint.QuickFix|1 message 9|2 kind 9|3 is_preferred 8|4 edits #0*",
            g
        ];
    }
}
class g extends p {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.text = "", this.startLineNumberOneIndexed = 0, this.startColumnOneIndexed = 0, this.endLineNumberInclusiveOneIndexed = 0, this.endColumnOneIndexed = 0, n.proto3.util.initPartial(e, this);
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
            "GetLintsForChangeResponse.Lint.QuickFix.Edit|1 relative_workspace_path 9|2 text 9|3 start_line_number_one_indexed 5|4 start_column_one_indexed 5|5 end_line_number_inclusive_one_indexed 5|6 end_column_one_indexed 5"
        ];
    }
}
const y = "aiserver.v1.";
class w extends d.HL {
    static get runtime() {
        return (0, d.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return y;
    }
}
var v = (0, d.QT)(n.proto3, y, "ChunkType", [
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
], 1), _ = (0, d.QT)(n.proto3, y, "SubagentType", [
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
class b extends w {
    constructor(e){
        super(), this.summary = "", this.truncationLastBubbleIdInclusive = "", this.clientShouldStartSendingFromInclusiveBubbleId = "", this.previousConversationSummaryBubbleId = "", this.includesToolResults = !1, this.strategy = "", n.proto3.util.initPartial(e, this);
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
            "ConversationSummary|1 summary 9|2 truncation_last_bubble_id_inclusive 9|3 client_should_start_sending_from_inclusive_bubble_id 9|4 previous_conversation_summary_bubble_id 9|5 includes_tool_results 8|6 strategy 9"
        ];
    }
}
class S extends w {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.contents = "", n.proto3.util.initPartial(e, this);
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
            "ContextToRank|1 relative_workspace_path 9|2 contents 9|3 line_range #0?|4 code_block #1?",
            o.MT,
            o.NG
        ];
    }
}
class k extends w {
    constructor(e){
        super(), this.score = 0, n.proto3.util.initPartial(e, this);
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
            "RankedContext|1 context #0|2 score 2",
            S
        ];
    }
}
class x extends w {
    constructor(e){
        super(), this.chunks = [], n.proto3.util.initPartial(e, this);
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
            "DocumentationCitation|1 chunks #0*",
            i.ci
        ];
    }
}
class E extends w {
    constructor(e){
        super(), this.references = [], n.proto3.util.initPartial(e, this);
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
            "WebCitation|1 references #0*",
            I
        ];
    }
}
class I extends w {
    constructor(e){
        super(), this.title = "", this.url = "", this.chunk = "", n.proto3.util.initPartial(e, this);
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
            "WebReference|2 title 9|1 url 9|3 chunk 9"
        ];
    }
}
class T extends w {
    constructor(e){
        super(), this.title = "", this.url = "", this.chunk = "", this.name = "", n.proto3.util.initPartial(e, this);
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
            "DocsReference|1 title 9|2 url 9|3 chunk 9|4 name 9"
        ];
    }
}
class C extends w {
    constructor(e){
        super(), this.content = "", this.title = "", n.proto3.util.initPartial(e, this);
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
            "AiWebSearchResult|1 content 9|2 title 9"
        ];
    }
}
class P extends w {
    constructor(e){
        super(), this.message = "", n.proto3.util.initPartial(e, this);
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
            "StatusUpdate|1 message 9|2 metadata 9?"
        ];
    }
}
class A extends w {
    constructor(e){
        super(), this.updates = [], n.proto3.util.initPartial(e, this);
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
            "StatusUpdates|1 updates #0*",
            P
        ];
    }
}
class R extends w {
    constructor(e){
        super(), this.fileName = "", this.diffHistory = [], this.diffHistoryTimestamps = [], n.proto3.util.initPartial(e, this);
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
            "ComposerFileDiffHistory|1 file_name 9|2 diff_history 9*|3 diff_history_timestamps 1*"
        ];
    }
}
var M = (0, d.QT)(n.proto3, y, "StreamUnifiedChatRequest.UnifiedMode", [
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
], 1);
n.proto3;
class J extends w {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.content = "", this.score = 0, n.proto3.util.initPartial(e, this);
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
            "ContextPiece|1 relative_workspace_path 9|2 content 9|3 score 2"
        ];
    }
}
class O extends w {
    constructor(e){
        super(), this.percentageRemaining = 0, n.proto3.util.initPartial(e, this);
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
            "ContextWindowStatus|1 percentage_remaining 5|2 tokens_used 5?|3 token_limit 5?|4 percentage_remaining_float 2?"
        ];
    }
}
class B extends w {
    constructor(e){
        super(), this.message = "", this.codicon = "", n.proto3.util.initPartial(e, this);
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
            "ServiceStatusUpdate|1 message 9|2 codicon 9|3 allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown 8?|4 action_to_run_on_status_update 9?"
        ];
    }
}
class D extends w {
    constructor(e){
        super(), this.symbolName = "", this.symbolSearchString = "", this.relativeWorkspacePath = "", this.roughLineNumber = 0, n.proto3.util.initPartial(e, this);
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
            "SymbolLink|1 symbol_name 9|2 symbol_search_string 9|3 relative_workspace_path 9|4 rough_line_number 5"
        ];
    }
}
class q extends w {
    constructor(e){
        super(), this.displayName = "", this.relativeWorkspacePath = "", n.proto3.util.initPartial(e, this);
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
            "FileLink|1 display_name 9|2 relative_workspace_path 9"
        ];
    }
}
class N extends w {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.redRanges = [], this.redRangesReversed = [], this.startHash = "", this.endHash = "", n.proto3.util.initPartial(e, this);
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
            "RedDiff|1 relative_workspace_path 9|2 red_ranges #0*|3 red_ranges_reversed #0*|4 start_hash 9|5 end_hash 9",
            o.l2
        ];
    }
}
class F extends w {
    constructor(e){
        super(), this.fileDetails = "", this.fileName = "", n.proto3.util.initPartial(e, this);
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
            "DiffFile|1 file_details 9|2 file_name 9"
        ];
    }
}
class U extends w {
    constructor(e){
        super(), this.description = "", this.message = "", this.files = [], n.proto3.util.initPartial(e, this);
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
            "ViewableCommitProps|1 description 9|2 message 9|3 files #0*",
            F
        ];
    }
}
class L extends w {
    constructor(e){
        super(), this.title = "", this.body = "", this.files = [], n.proto3.util.initPartial(e, this);
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
            "ViewablePRProps|1 title 9|2 body 9|3 files #0*",
            F
        ];
    }
}
class $ extends w {
    constructor(e){
        super(), this.files = [], this.diffPreface = "", n.proto3.util.initPartial(e, this);
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
            "ViewableDiffProps|1 files #0*|2 diff_preface 9",
            F
        ];
    }
}
class j extends w {
    constructor(e){
        super(), this.diffData = [], n.proto3.util.initPartial(e, this);
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
            "ViewableGitContext|1 commit_data #0?|2 pull_request_data #1?|3 diff_data #2*",
            U,
            L,
            $
        ];
    }
}
class G extends w {
    constructor(e){
        super(), this.text = "", this.type = z.UNSPECIFIED, this.attachedCodeChunks = [], this.codebaseContextChunks = [], this.commits = [], this.pullRequests = [], this.gitDiffs = [], this.assistantSuggestedDiffs = [], this.interpreterResults = [], this.images = [], this.attachedFolders = [], this.approximateLintErrors = [], this.bubbleId = "", this.attachedFoldersNew = [], this.lints = [], this.userResponsesToSuggestedCodeBlocks = [], this.relevantFiles = [], this.toolResults = [], this.notepads = [], this.capabilities = [], this.editTrailContexts = [], this.suggestedCodeBlocks = [], this.diffsForCompressingFiles = [], this.multiFileLinterErrors = [], this.diffHistories = [], this.recentlyViewedFiles = [], this.recentLocationsHistory = [], this.isAgentic = !1, this.fileDiffTrajectories = [], this.existedSubsequentTerminalCommand = !1, this.existedPreviousTerminalCommand = !1, this.docsReferences = [], this.webReferences = [], this.aiWebSearchResults = [], this.attachedFoldersListDirResults = [], this.humanChanges = [], this.attachedHumanChanges = !1, this.summarizedComposers = [], this.cursorRules = [], this.contextPieces = [], this.allThinkingBlocks = [], this.diffsSinceLastApply = [], this.deletedFiles = [], this.supportedTools = [], this.consoleLogs = [], this.knowledgeItems = [], this.uiElementPicked = [], this.documentationSelections = [], this.externalLinks = [], this.projectLayouts = [], this.capabilityContexts = [], this.todos = [], this.requestId = "", this.createdAt = "", this.mcpDescriptors = [], this.workspaceUris = [], this.cursorCommands = [], this.cursorCommandsExplicitlySet = !1, this.pastChats = [], this.pastChatsExplicitlySet = !1, n.proto3.util.initPartial(e, this);
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
            "ConversationMessage|1 text 9|2 type #0|3 attached_code_chunks #1*|4 codebase_context_chunks #2*|5 commits #3*|6 pull_requests #4*|7 git_diffs #5*|8 assistant_suggested_diffs #6*|9 interpreter_results #7*|10 images #8*|11 attached_folders 9*|12 approximate_lint_errors #9*|13 bubble_id 9|32 server_bubble_id 9?|14 attached_folders_new #10*|15 lints #11*|16 user_responses_to_suggested_code_blocks #12*|17 relevant_files 9*|18 tool_results #13*|19 notepads #14*|20 is_capability_iteration 8?|21 capabilities #15*|22 edit_trail_contexts #16*|23 suggested_code_blocks #17*|24 diffs_for_compressing_files #18*|25 multi_file_linter_errors #19*|26 diff_histories #20*|27 recently_viewed_files #1*|28 recent_locations_history #21*|29 is_agentic 8|30 file_diff_trajectories #22*|31 conversation_summary #23?|33 existed_subsequent_terminal_command 8|34 existed_previous_terminal_command 8|35 docs_references #24*|36 web_references #25*|75 ai_web_search_results #26*|37 git_context #27?|38 attached_folders_list_dir_results #28*|39 cached_conversation_summary #23?|40 human_changes #29*|41 attached_human_changes 8|42 summarized_composers #30*|43 cursor_rules #31*|44 context_pieces #32*|45 thinking #33?|46 all_thinking_blocks #33*|85 thinking_style #34?|47 unified_mode #35?|98 agent_mode #36?|48 diffs_since_last_apply #37*|49 deleted_files #38*|50 usage_uuid 9?|51 supported_tools #39*|52 current_file_location_data #40?|53 edit_tool_supports_search_and_replace 8?|54 last_terminal_cwd 9?|55 user_explicitly_asked_to_generate_cursor_rules 8?|56 console_logs #41*|57 rich_text 9?|58 knowledge_items #42*|59 ui_element_picked #43*|60 user_explicitly_asked_to_add_to_knowledge_base 8?|61 documentation_selections #44*|62 external_links #45*|63 use_web 8?|64 project_layouts #46*|65 thinking_duration_ms 5?|88 step_duration_ms 5?|66 subagent_return #47?|67 is_simple_looping_message 8?|68 capability_contexts #48*|69 checkpoint_commit_hash 9?|70 git_status_raw 9?|71 todos #49*|72 is_review_edits_followup 8?|74 request_id 9|73 ide_editors_state #50?|76 context_window_status #51?|77 is_plan_execution 8?|78 created_at 9|79 model_info #52|80 is_quick_search_query 8?|81 plan_update #53?|82 is_simulated_msg 8?|95 simulated_msg_reason #54?|97 simulated_message_metadata #55?|83 mcp_descriptors #56*|84 workspace_project_dir 9?|87 workspace_uris 9*|86 debug_mode_config #57?|89 text_blob_id 12?|90 rich_text_blob_id 12?|91 cursor_commands #58*|92 cursor_commands_explicitly_set 8|93 past_chats #59*|94 past_chats_explicitly_set 8|96 triggering_user_info #60?|99 turn_steer 8?|100 sent_by_agent_id 9?|101 sent_by_voice_call 8?|102 sender #61?",
            z,
            H,
            o.NG,
            Ee,
            Ie,
            o.o$,
            ke,
            Se,
            o.UR,
            ne,
            _e,
            se,
            Ce,
            X,
            Z,
            a.Gn,
            re,
            Te,
            N,
            o.U$,
            Oe,
            oe,
            R,
            b,
            T,
            I,
            C,
            j,
            s.$PL,
            ae,
            ee,
            o.DX,
            J,
            ce,
            W,
            M,
            c.xyI,
            le,
            ue,
            s.XaY,
            ve,
            o.EZ,
            de,
            o.c5,
            pe,
            o.ot,
            $e,
            Be,
            a.Km,
            s.kWq,
            me,
            O,
            o.Wj,
            fe,
            c.c_h,
            ge,
            ye,
            l.TT,
            u.Ps,
            u.AW,
            c.iHX,
            c.D$r
        ];
    }
}
var z = (0, d.QT)(n.proto3, y, "ConversationMessage.MessageType", [
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
], 1), W = (0, d.QT)(n.proto3, y, "ConversationMessage.ThinkingStyle", [
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
class H extends w {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.startLineNumber = 0, this.lines = [], this.languageIdentifier = "", n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.CodeChunk|1 relative_workspace_path 9|2 start_line_number 5|3 lines 9*|4 summarization_strategy #0?|5 language_identifier 9|6 intent #1?|7 is_final_version 8?|8 is_first_version 8?|9 contents_are_missing 8?|10 is_only_included_from_folder 8?|11 code_chunk_git_context #2?",
            V,
            K,
            Y
        ];
    }
}
var K = (0, d.QT)(n.proto3, y, "ConversationMessage.CodeChunk.Intent", [
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
], 1), V = (0, d.QT)(n.proto3, y, "ConversationMessage.CodeChunk.SummarizationStrategy", [
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
class Y extends w {
    constructor(e){
        super(), this.gitInfo = [], n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.CodeChunk.CodeChunkGitContext|1 git_info #0*",
            Q
        ];
    }
}
class Q extends w {
    constructor(e){
        super(), this.commit = "", this.author = "", this.date = "", this.message = "", n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.CodeChunk.CodeChunkGitContext.CodeChunkGitInfo|1 commit 9|2 author 9|3 date 9|4 message 9"
        ];
    }
}
class X extends w {
    constructor(e){
        super(), this.toolCallId = "", this.toolName = "", this.toolIndex = 0, this.args = "", this.rawArgs = "", this.attachedCodeChunks = [], this.images = [], n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.ToolResult|1 tool_call_id 9|2 tool_name 9|3 tool_index 13|12 model_call_id 9?|4 args 9|5 raw_args 9|6 attached_code_chunks #0*|7 content 9?|8 result #1|9 error #2?|10 images #3*|11 tool_call #4?|13 started_at_ms 4?|14 completed_at_ms 4?",
            H,
            s.Ue3,
            s.MtQ,
            o.UR,
            s.TE4
        ];
    }
}
class Z extends w {
    constructor(e){
        super(), this.name = "", this.text = "", this.attachedCodeChunks = [], this.attachedFolders = [], this.commits = [], this.pullRequests = [], this.gitDiffs = [], this.images = [], n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.NotepadContext|1 name 9|2 text 9|3 attached_code_chunks #0*|4 attached_folders 9*|5 commits #1*|6 pull_requests #2*|7 git_diffs #3*|8 images #4*",
            H,
            Ee,
            Ie,
            o.o$,
            o.UR
        ];
    }
}
class ee extends w {
    constructor(e){
        super(), this.name = "", n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.ComposerContext|1 name 9|2 conversation_summary #0",
            b
        ];
    }
}
class te extends w {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.contextLines = "", this.text = "", n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.EditLocation|1 relative_workspace_path 9|3 range #0|4 initial_range #0|5 context_lines 9|6 text 9|7 text_range #0",
            o.l2
        ];
    }
}
class re extends w {
    constructor(e){
        super(), this.uniqueId = "", this.editTrailSorted = [], n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.EditTrailContext|1 unique_id 9|2 edit_trail_sorted #0*",
            te
        ];
    }
}
class ne extends w {
    constructor(e){
        super(), this.message = "", this.value = "", this.startLine = 0, this.endLine = 0, this.startColumn = 0, this.endColumn = 0, n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.ApproximateLintError|1 message 9|2 value 9|3 start_line 5|4 end_line 5|5 start_column 5|6 end_column 5"
        ];
    }
}
class se extends w {
    constructor(e){
        super(), this.chatCodeblockModelValue = "", n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.Lints|1 lints #0|2 chat_codeblock_model_value 9",
            m
        ];
    }
}
class oe extends w {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.lineNumber = 0, n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.RecentLocation|1 relative_workspace_path 9|2 line_number 5"
        ];
    }
}
class ie extends w {
    constructor(e){
        super(), this.startLineNumber = 0, this.endLineNumberExclusive = 0, this.beforeContextLines = [], this.removedLines = [], this.addedLines = [], this.afterContextLines = [], n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.RenderedDiff|1 start_line_number 5|2 end_line_number_exclusive 5|3 before_context_lines 9*|4 removed_lines 9*|5 added_lines 9*|6 after_context_lines 9*"
        ];
    }
}
class ae extends w {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.renderedDiffs = [], n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.HumanChange|1 relative_workspace_path 9|2 rendered_diffs #0*",
            ie
        ];
    }
}
class ce extends w {
    constructor(e){
        super(), this.text = "", this.signature = "", this.redactedThinking = "", this.isLastThinkingChunk = !1, n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.Thinking|1 text 9|2 signature 9|3 redacted_thinking 9|4 is_last_thinking_chunk 8"
        ];
    }
}
class le extends w {
    constructor(e){
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.DiffSinceLastApply|1 relative_workspace_path 9|2 diff #0?|4 is_accepted 8?|5 is_rejected 8?|6 last_apply_chained_from_n_human_messages_ago 5?",
            s.KRm
        ];
    }
}
class ue extends w {
    constructor(e){
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.DeletedFile|1 relative_workspace_path 9"
        ];
    }
}
class de extends w {
    constructor(e){
        super(), this.title = "", this.knowledge = "", this.knowledgeId = "", this.isGenerated = !1, n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.KnowledgeItem|1 title 9|2 knowledge 9|3 knowledge_id 9|4 is_generated 8"
        ];
    }
}
class pe extends w {
    constructor(e){
        super(), this.docId = "", this.name = "", n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.DocumentationSelection|1 doc_id 9|2 name 9"
        ];
    }
}
class me extends w {
    constructor(e){
        super(), this.isPillDisplayed = !1, this.visibleFilePaths = [], this.recentlyViewedFilePaths = [], this.visibleFiles = [], this.recentlyViewedFiles = [], n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.IdeEditorsState|1 is_pill_displayed 8|2 visible_file_paths 9*|3 recently_viewed_file_paths 9*|4 visible_files #0*|5 recently_viewed_files #0*",
            he
        ];
    }
}
class he extends w {
    constructor(e){
        super(), this.relativePath = "", n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.IdeEditorsState.File|1 relative_path 9|2 is_currently_focused 8?|3 current_line_number 5?|4 current_line_text 9?|5 line_count 5?|6 absolute_path 9?"
        ];
    }
}
class fe extends w {
    constructor(e){
        super(), this.currentPlan = "", this.isFirstTimeSeen = !1, n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.PlanUpdate|1 current_plan 9|2 is_first_time_seen 8"
        ];
    }
}
class ge extends w {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.SimulatedMessageMetadata|1 title 9?|2 task_id 9?|3 fsd_finding_action 9?|4 url 9?|5 subscription_source #0?|6 subscription_event_display #1?|7 interaction_response #2?",
            c.vns,
            c.gan,
            c.nh0
        ];
    }
}
class ye extends w {
    constructor(e){
        super(), this.folderPath = "", this.tools = [], n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.McpDescriptor|1 folder_path 9|2 server_name 9?|3 tools #0*|4 server_use_instructions 9?",
            we
        ];
    }
}
class we extends w {
    constructor(e){
        super(), this.toolName = "", n.proto3.util.initPartial(e, this);
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
            "ConversationMessage.McpDescriptor.Tool|1 tool_name 9|2 description 9?"
        ];
    }
}
class ve extends w {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.lineNumber = 0, this.text = "", n.proto3.util.initPartial(e, this);
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
            "CurrentFileLocationData|1 relative_workspace_path 9|2 line_number 5|3 text 9"
        ];
    }
}
class _e extends w {
    constructor(e){
        super(), this.relativePath = "", this.files = [], n.proto3.util.initPartial(e, this);
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
            "FolderInfo|1 relative_path 9|2 files #0*",
            be
        ];
    }
}
class be extends w {
    constructor(e){
        super(), this.relativePath = "", this.content = "", this.truncated = !1, this.score = 0, n.proto3.util.initPartial(e, this);
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
            "FolderFileInfo|1 relative_path 9|2 content 9|3 truncated 8|4 score 2"
        ];
    }
}
class Se extends w {
    constructor(e){
        super(), this.output = "", this.success = !1, n.proto3.util.initPartial(e, this);
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
            "InterpreterResult|1 output 9|2 success 8"
        ];
    }
}
class ke extends w {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.chunks = [], n.proto3.util.initPartial(e, this);
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
            "SimpleFileDiff|1 relative_workspace_path 9|3 chunks #0*",
            xe
        ];
    }
}
class xe extends w {
    constructor(e){
        super(), this.oldLines = [], this.newLines = [], n.proto3.util.initPartial(e, this);
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
            "SimpleFileDiff.Chunk|1 old_lines 9*|2 new_lines 9*|3 old_range #0|4 new_range #0",
            o.MT
        ];
    }
}
class Ee extends w {
    constructor(e){
        super(), this.sha = "", this.message = "", this.description = "", this.diff = [], this.author = "", this.date = "", n.proto3.util.initPartial(e, this);
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
            "Commit|1 sha 9|2 message 9|3 description 9|4 diff #0*|5 author 9|6 date 9",
            o.QP
        ];
    }
}
class Ie extends w {
    constructor(e){
        super(), this.title = "", this.body = "", this.diff = [], this.id = n.protoInt64.zero, this.number = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
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
            "PullRequest|1 title 9|2 body 9|3 diff #0*|4 id 3|5 number 3",
            o.QP
        ];
    }
}
class Te extends w {
    constructor(e){
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e, this);
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
            "SuggestedCodeBlock|1 relative_workspace_path 9"
        ];
    }
}
class Ce extends w {
    constructor(e){
        super(), this.userResponseType = Pe.UNSPECIFIED, this.filePath = "", n.proto3.util.initPartial(e, this);
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
            "UserResponseToSuggestedCodeBlock|1 user_response_type #0|2 file_path 9|3 user_modifications_to_suggested_code_blocks #1?",
            Pe,
            o.QP
        ];
    }
}
var Pe = (0, d.QT)(n.proto3, y, "UserResponseToSuggestedCodeBlock.UserResponseType", [
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
class Ae extends w {
    constructor(e){
        super(), this.fileName = "", this.fileContent = "", n.proto3.util.initPartial(e, this);
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
            "ContextRerankingCandidateFile|1 file_name 9|2 file_content 9"
        ];
    }
}
class Re extends w {
    constructor(e){
        super(), this.chunks = [], this.editor = Me.UNSPECIFIED, this.hitTimeout = !1, n.proto3.util.initPartial(e, this);
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
            "ComposerFileDiff|1 chunks #0*|2 editor #1|3 hit_timeout 8",
            Je,
            Me
        ];
    }
}
var Me = (0, d.QT)(n.proto3, y, "ComposerFileDiff.Editor", [
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
class Je extends w {
    constructor(e){
        super(), this.diffString = "", this.oldStart = 0, this.newStart = 0, this.oldLines = 0, this.newLines = 0, this.linesRemoved = 0, this.linesAdded = 0, n.proto3.util.initPartial(e, this);
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
            "ComposerFileDiff.ChunkDiff|1 diff_string 9|2 old_start 5|3 new_start 5|4 old_lines 5|5 new_lines 5|6 lines_removed 5|7 lines_added 5"
        ];
    }
}
class Oe extends w {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.diffs = [], this.timestamp = 0, this.uniqueId = "", n.proto3.util.initPartial(e, this);
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
            "DiffHistoryData|1 relative_workspace_path 9|2 diffs #0*|3 timestamp 1|4 unique_id 9|5 start_to_end_diff #0",
            Re
        ];
    }
}
n.proto3, n.proto3;
n.proto3, n.proto3;
class Be extends w {
    constructor(e){
        super(), this.subagentType = _.UNSPECIFIED, this.returnValue = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "SubagentReturnCall|1 subagent_type #0|2 deep_search_return_value #1 return_value|3 fix_lints_return_value #2 return_value|4 task_return_value #3 return_value|5 spec_return_value #4 return_value",
            _,
            De,
            Ne,
            Fe,
            Ue
        ];
    }
}
class De extends w {
    constructor(e){
        super(), this.contextItems = [], n.proto3.util.initPartial(e, this);
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
            "DeepSearchSubagentReturnValue|1 context_items #0*",
            qe
        ];
    }
}
class qe extends w {
    constructor(e){
        super(), this.file = "", this.explanation = "", n.proto3.util.initPartial(e, this);
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
            "DeepSearchSubagentReturnValue.ContextItem|1 file 9|2 line_range #0?|3 explanation 9",
            o.MT
        ];
    }
}
class Ne extends w {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "FixLintsSubagentReturnValue"
        ];
    }
}
class Fe extends w {
    constructor(e){
        super(), this.summary = "", n.proto3.util.initPartial(e, this);
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
            "TaskSubagentReturnValue|1 summary 9"
        ];
    }
}
class Ue extends w {
    constructor(e){
        super(), this.summary = "", this.stringReplacements = [], n.proto3.util.initPartial(e, this);
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
            "SpecSubagentReturnValue|1 summary 9|2 string_replacements #0*",
            Le
        ];
    }
}
class Le extends w {
    constructor(e){
        super(), this.oldString = "", this.newString = "", n.proto3.util.initPartial(e, this);
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
            "StringReplacement|1 old_string 9|2 new_string 9"
        ];
    }
}
class $e extends w {
    constructor(e){
        super(), this.rootPath = "", n.proto3.util.initPartial(e, this);
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
            "ProjectLayout|1 root_path 9|2 content #0|3 list_dir_v2_result #1?",
            je,
            s.$rP
        ];
    }
}
class je extends w {
    constructor(e){
        super(), this.directories = [], this.files = [], this.hiddenFiles = [], n.proto3.util.initPartial(e, this);
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
            "ProjectLayoutDirectoryContent|1 directories #0*|2 files #1*|3 total_files 5?|4 total_subfolders 5?|5 hidden_files #1*",
            Ge,
            ze
        ];
    }
}
class Ge extends w {
    constructor(e){
        super(), this.name = "", n.proto3.util.initPartial(e, this);
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
            "ProjectLayoutDirectory|1 name 9|2 content #0",
            je
        ];
    }
}
class ze extends w {
    constructor(e){
        super(), this.name = "", n.proto3.util.initPartial(e, this);
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
            "ProjectLayoutFile|1 name 9"
        ];
    }
}
