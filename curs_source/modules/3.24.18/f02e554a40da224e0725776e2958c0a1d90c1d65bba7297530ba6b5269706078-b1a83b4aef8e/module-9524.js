"use strict";
require.d(exports, {
    _V: ()=>d,
    d$: ()=>m,
    oT: ()=>l,
    xJ: ()=>h
});
var n = require("./module-6038.js"), s = require("./module-7918.js"), i = require("./module-6938.js"), o = require("./module-3341.js"), a = require("./module-8592.js");
const u = "aiserver.v1.";
class c extends a.HL {
    static get runtime() {
        return (0, a.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return u;
    }
}
class l extends c {
    constructor(t){
        super(), this.item = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "PotentiallyCachedContextItem|1 context_item #0 item|2 context_item_hash 9 item",
            h
        ];
    }
}
class m extends c {
    constructor(t){
        super(), this.contextItemStatuses = [], n.proto3.util.initPartial(t, this);
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
            "ContextStatusUpdate|1 context_item_statuses #0*",
            f
        ];
    }
}
class d extends c {
    constructor(t){
        super(), this.missingContextItemHashes = [], n.proto3.util.initPartial(t, this);
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
            "MissingContextItems|2 missing_context_item_hashes 9*"
        ];
    }
}
class f extends c {
    constructor(t){
        super(), this.contextItemHash = "", this.shownToTheModel = !1, this.score = 0, this.percentageOfAvailableSpace = 0, this.postGenerationEvaluation = p.UNSPECIFIED, n.proto3.util.initPartial(t, this);
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
            "ContextItemStatus|1 context_item_hash 9|2 shown_to_the_model 8|3 score 2|4 percentage_of_available_space 2|5 post_generation_evaluation #0",
            p
        ];
    }
}
var p = (0, a.QT)(n.proto3, u, "ContextItemStatus.PostGenerationEvaluation", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "USEFUL"
    ],
    [
        2,
        "USELESS"
    ]
], 1);
class h extends c {
    constructor(t){
        super(), this.item = {
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
            "ContextItem|1 intent #0|2 file_chunk #1 item|3 outline_chunk #2 item|4 cmd_k_selection #3 item|5 cmd_k_immediate_context #4 item|6 cmd_k_query #5 item|7 cmd_k_query_history #6 item|8 custom_instructions #7 item|9 go_to_definition_result #8 item|10 documentation_chunk #9 item|11 lints #10 item|12 chat_history #11 item|13 notebook_cell_output #12 item|14 terminal_history #13 item|15 terminal_cmd_k_query #14 item|16 terminal_cmd_k_query_history #15 item|17 sparse_file_chunk #16 item|18 lsp_subgraph_chunk #17 item|19 commit_note_chunk #18 item|20 file_diff_history #19 item|21 cmd_k_query_history_in_diff_session #20 item|22 project_rule #21 item",
            O,
            g,
            y,
            w,
            J,
            E,
            b,
            P,
            T,
            x,
            N,
            q,
            U,
            R,
            I,
            C,
            A,
            Q,
            M,
            S,
            k,
            s.CursorRule
        ];
    }
}
class g extends c {
    constructor(t){
        super(), this.relativeWorkspacePath = "", this.chunkContents = "", this.startLineNumber = 0, n.proto3.util.initPartial(t, this);
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
            "ContextItem.FileChunk|1 relative_workspace_path 9|2 chunk_contents 9|3 start_line_number 5"
        ];
    }
}
class A extends c {
    constructor(t){
        super(), this.relativeWorkspacePath = "", this.lines = [], this.totalNumberOfLinesInFile = 0, n.proto3.util.initPartial(t, this);
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
            "ContextItem.SparseFileChunk|1 relative_workspace_path 9|2 lines #0*|3 total_number_of_lines_in_file 5|4 cell_number 5?",
            _
        ];
    }
}
class _ extends c {
    constructor(t){
        super(), this.line = "", this.lineNumber = 0, n.proto3.util.initPartial(t, this);
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
            "ContextItem.SparseFileChunk.Line|1 line 9|2 line_number 5"
        ];
    }
}
class y extends c {
    constructor(t){
        super(), this.relativeWorkspacePath = "", this.contents = "", n.proto3.util.initPartial(t, this);
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
            "ContextItem.OutlineChunk|1 relative_workspace_path 9|2 contents 9|3 full_range #0",
            s.LineRange
        ];
    }
}
class w extends c {
    constructor(t){
        super(), this.lines = [], this.startLineNumber = 0, n.proto3.util.initPartial(t, this);
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
            "ContextItem.CmdKSelection|1 lines 9*|2 start_line_number 5"
        ];
    }
}
class S extends c {
    constructor(t){
        super(), this.howManyDiffsAgo = 0, this.isVeryRecent = !1, n.proto3.util.initPartial(t, this);
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
            "ContextItem.FileDiffHistory|1 cpp_file_diff_history #0|2 how_many_diffs_ago 5|3 is_very_recent 8",
            i.lIu
        ];
    }
}
class J extends c {
    constructor(t){
        super(), this.relativeWorkspacePath = "", this.lines = [], this.totalNumberOfLinesInFile = 0, n.proto3.util.initPartial(t, this);
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
            "ContextItem.CmdKImmediateContext|1 relative_workspace_path 9|2 lines #0*|3 total_number_of_lines_in_file 5|4 cell_number 5?",
            B
        ];
    }
}
class B extends c {
    constructor(t){
        super(), this.line = "", this.lineNumber = 0, n.proto3.util.initPartial(t, this);
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
            "ContextItem.CmdKImmediateContext.Line|1 line 9|2 line_number 5"
        ];
    }
}
class E extends c {
    constructor(t){
        super(), this.query = "", n.proto3.util.initPartial(t, this);
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
            "ContextItem.CmdKQuery|1 query 9"
        ];
    }
}
class I extends c {
    constructor(t){
        super(), this.query = "", n.proto3.util.initPartial(t, this);
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
            "ContextItem.TerminalCmdKQuery|1 query 9"
        ];
    }
}
class C extends c {
    constructor(t){
        super(), this.contextItemHashes = [], this.suggestedCommand = "", n.proto3.util.initPartial(t, this);
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
            "ContextItem.TerminalCmdKQueryHistory|1 query #0|2 query_history #1|5 context_item_hashes 9*|6 suggested_command 9",
            I,
            C
        ];
    }
}
class b extends c {
    constructor(t){
        super(), this.contextItemHashes = [], n.proto3.util.initPartial(t, this);
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
            "ContextItem.CmdKQueryHistory|1 query #0|2 immediate_context #1|3 selection #2|4 query_history #3|5 context_item_hashes 9*|6 timestamp 3?|7 timestamp_double 1?",
            E,
            J,
            w,
            b
        ];
    }
}
class k extends c {
    constructor(t){
        super(), this.pastCmdkQueries = [], this.currTimestampDouble = 0, n.proto3.util.initPartial(t, this);
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
            "ContextItem.CmdKQueryHistoryInDiffSession|1 past_cmdk_queries #0*|3 curr_timestamp_double 1",
            v
        ];
    }
}
class v extends c {
    constructor(t){
        super(), this.relativeWorkspacePath = "", this.timestampDouble = 0, n.proto3.util.initPartial(t, this);
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
            "ContextItem.CmdKQueryHistoryInDiffSession.PastCmdKQueryInDiffSession|1 query #0|2 relative_workspace_path 9|5 cmdk_was_accepted 8?|6 timestamp_double 1|7 timestamp_for_diff_interleaving 1?|8 request_id 9?",
            E
        ];
    }
}
class q extends c {
    constructor(t){
        super(), this.userMessage = "", this.assistantResponse = "", this.activeForCmdK = !1, n.proto3.util.initPartial(t, this);
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
            "ContextItem.ChatHistory|1 user_message 9|2 assistant_response 9|3 chat_history #0|4 active_for_cmd_k 8|5 timestamp 3?|6 timestamp_double 1?",
            q
        ];
    }
}
class R extends c {
    constructor(t){
        super(), this.history = "", this.cwdFull = "", this.cwdRelativeWorkspacePath = "", this.activeForCmdK = !1, n.proto3.util.initPartial(t, this);
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
            "ContextItem.TerminalHistory|1 history 9|5 cwd_full 9|6 cwd_relative_workspace_path 9|4 active_for_cmd_k 8|7 timestamp 3?|8 timestamp_double 1?"
        ];
    }
}
class P extends c {
    constructor(t){
        super(), this.instructions = "", n.proto3.util.initPartial(t, this);
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
            "ContextItem.CustomInstructions|1 instructions 9"
        ];
    }
}
class T extends c {
    constructor(t){
        super(), this.relativeWorkspacePath = "", this.line = "", this.lineNumber = 0, this.columnNumber = 0, n.proto3.util.initPartial(t, this);
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
            "ContextItem.GoToDefinitionResult|1 relative_workspace_path 9|2 line 9|3 line_number 5|4 column_number 5|5 definition_chunk #0",
            g
        ];
    }
}
class x extends c {
    constructor(t){
        super(), this.docName = "", this.pageUrl = "", this.documentationChunk = "", this.score = 0, n.proto3.util.initPartial(t, this);
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
            "ContextItem.DocumentationChunk|1 doc_name 9|2 page_url 9|3 documentation_chunk 9|4 score 2"
        ];
    }
}
class N extends c {
    constructor(t){
        super(), this.relativeWorkspacePath = "", this.lints = [], this.contextLines = [], n.proto3.util.initPartial(t, this);
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
            "ContextItem.Lints|1 relative_workspace_path 9|2 lints #0*|3 context_lines #1*",
            s.Lint,
            D
        ];
    }
}
class D extends c {
    constructor(t){
        super(), this.line = "", this.lineNumber = 0, n.proto3.util.initPartial(t, this);
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
            "ContextItem.Lints.Line|1 line 9|2 line_number 5"
        ];
    }
}
class U extends c {
    constructor(t){
        super(), this.relativeWorkspacePath = "", this.cellOutput = "", this.cellNumber = 0, n.proto3.util.initPartial(t, this);
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
            "ContextItem.NotebookCellOutput|1 relative_workspace_path 9|2 cell_output 9|3 cell_number 5"
        ];
    }
}
class Q extends c {
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
            "ContextItem.LspSubgraphChunk|1 lsp_subgraph_full_context #0",
            o.i9
        ];
    }
}
class M extends c {
    constructor(t){
        super(), this.note = "", n.proto3.util.initPartial(t, this);
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
            "ContextItem.CommitNoteChunk|1 note 9"
        ];
    }
}
class O extends c {
    constructor(t){
        super(), this.type = F.UNSPECIFIED, this.uuid = "", this.intent = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "ContextIntent|1 type #0|15 uuid 9|2 file #1 intent|3 code_selection #2 intent|5 lints #3 intent|6 recent_locations #4 intent|8 cmd_k_current_file #5 intent|9 cmd_k_query_etc #6 intent|14 terminal_cmd_k_defaults #7 intent|10 cmd_k_definitions #8 intent|11 documentation #9 intent|12 custom_instructions #10 intent|13 chat_history #11 intent|16 terminal_history #12 intent|17 visible_tabs #13 intent|18 lsp_subgraph #14 intent|19 commit_notes #15 intent|20 diff_history #16 intent|21 past_cmdk_messages_in_diff_sessions #17 intent",
            F,
            $,
            H,
            V,
            Y,
            Z,
            tt,
            it,
            rt,
            L,
            et,
            nt,
            ot,
            X,
            at,
            K,
            st,
            j
        ];
    }
}
var F = (0, a.QT)(n.proto3, u, "ContextIntent.Type", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "USER_ADDED"
    ],
    [
        2,
        "AUTOMATIC"
    ]
], 1);
class L extends c {
    constructor(t){
        super(), this.documentationIdentifier = "", n.proto3.util.initPartial(t, this);
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
            "ContextIntent.Documentation|1 documentation_identifier 9"
        ];
    }
}
class $ extends c {
    constructor(t){
        super(), this.relativeWorkspacePath = "", this.mode = G.UNSPECIFIED, n.proto3.util.initPartial(t, this);
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
            "ContextIntent.File|1 relative_workspace_path 9|2 mode #0",
            G
        ];
    }
}
var G = (0, a.QT)(n.proto3, u, "ContextIntent.File.Mode", [
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
        "CHUNKS"
    ]
], 1);
class H extends c {
    constructor(t){
        super(), this.relativeWorkspacePath = "", this.text = "", n.proto3.util.initPartial(t, this);
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
            "ContextIntent.CodeSelection|1 relative_workspace_path 9|2 potentially_out_of_date_range #0|3 text 9",
            s.SimpleRange
        ];
    }
}
class K extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "ContextIntent.CommitNotes"
        ];
    }
}
class V extends c {
    constructor(t){
        super(), this.scope = {
            case: void 0
        }, this.filterToSeverities = [], n.proto3.util.initPartial(t, this);
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
            "ContextIntent.Lints|1 cmdk_scope #0 scope|2 file_scope #1 scope|3 filter_to_severities #2*",
            z,
            W,
            s.LintSeverity
        ];
    }
}
class z extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "ContextIntent.Lints.CmdKScope"
        ];
    }
}
class W extends c {
    constructor(t){
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(t, this);
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
            "ContextIntent.Lints.FileScope|1 relative_workspace_path 9|2 filter_range #0?",
            s.LineRange
        ];
    }
}
class Y extends c {
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
            "ContextIntent.RecentLocations|2 timestamp 1?"
        ];
    }
}
class j extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "ContextIntent.PastCmdkConversationsInDiffSessions"
        ];
    }
}
class X extends c {
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
            "ContextIntent.VisibleTabs"
        ];
    }
}
class Z extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "ContextIntent.CmdKCurrentFile"
        ];
    }
}
class tt extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "ContextIntent.CmdKQueryEtc"
        ];
    }
}
class et extends c {
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
            "ContextIntent.CustomInstructions"
        ];
    }
}
class rt extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "ContextIntent.CmdKDefinitions"
        ];
    }
}
class nt extends c {
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
            "ContextIntent.ChatHistory"
        ];
    }
}
class st extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "ContextIntent.DiffHistory"
        ];
    }
}
class it extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "ContextIntent.TerminalCmdKDefaults"
        ];
    }
}
class ot extends c {
    constructor(t){
        super(), this.instanceId = 0, this.activeForCmdK = !1, n.proto3.util.initPartial(t, this);
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
            "ContextIntent.TerminalHistory|1 instance_id 5|2 active_for_cmd_k 8|3 use_active_instance_as_fallback 8?"
        ];
    }
}
class at extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "ContextIntent.LspSubgraph"
        ];
    }
}
