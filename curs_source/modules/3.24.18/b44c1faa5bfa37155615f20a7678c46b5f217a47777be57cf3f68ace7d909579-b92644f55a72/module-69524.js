"use strict";
require.d(exports, {
    _V: ()=>p,
    d$: ()=>d,
    oT: ()=>u,
    xJ: ()=>f
});
var n = require("./module-36038.js"), s = require("./module-67918.js"), o = require("./module-66938.js"), i = require("./module-83341.js"), a = require("./module-8592.js");
const c = "aiserver.v1.";
class l extends a.HL {
    static get runtime() {
        return (0, a.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return c;
    }
}
class u extends l {
    constructor(e){
        super(), this.item = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "PotentiallyCachedContextItem|1 context_item #0 item|2 context_item_hash 9 item",
            f
        ];
    }
}
class d extends l {
    constructor(e){
        super(), this.contextItemStatuses = [], n.proto3.util.initPartial(e, this);
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
            "ContextStatusUpdate|1 context_item_statuses #0*",
            m
        ];
    }
}
class p extends l {
    constructor(e){
        super(), this.missingContextItemHashes = [], n.proto3.util.initPartial(e, this);
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
            "MissingContextItems|2 missing_context_item_hashes 9*"
        ];
    }
}
class m extends l {
    constructor(e){
        super(), this.contextItemHash = "", this.shownToTheModel = !1, this.score = 0, this.percentageOfAvailableSpace = 0, this.postGenerationEvaluation = h.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "ContextItemStatus|1 context_item_hash 9|2 shown_to_the_model 8|3 score 2|4 percentage_of_available_space 2|5 post_generation_evaluation #0",
            h
        ];
    }
}
var h = (0, a.QT)(n.proto3, c, "ContextItemStatus.PostGenerationEvaluation", [
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
class f extends l {
    constructor(e){
        super(), this.item = {
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
            "ContextItem|1 intent #0|2 file_chunk #1 item|3 outline_chunk #2 item|4 cmd_k_selection #3 item|5 cmd_k_immediate_context #4 item|6 cmd_k_query #5 item|7 cmd_k_query_history #6 item|8 custom_instructions #7 item|9 go_to_definition_result #8 item|10 documentation_chunk #9 item|11 lints #10 item|12 chat_history #11 item|13 notebook_cell_output #12 item|14 terminal_history #13 item|15 terminal_cmd_k_query #14 item|16 terminal_cmd_k_query_history #15 item|17 sparse_file_chunk #16 item|18 lsp_subgraph_chunk #17 item|19 commit_note_chunk #18 item|20 file_diff_history #19 item|21 cmd_k_query_history_in_diff_session #20 item|22 project_rule #21 item",
            U,
            g,
            v,
            _,
            S,
            E,
            k,
            P,
            J,
            M,
            q,
            R,
            O,
            B,
            I,
            C,
            y,
            N,
            F,
            A,
            x,
            s.CursorRule
        ];
    }
}
class g extends l {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.chunkContents = "", this.startLineNumber = 0, n.proto3.util.initPartial(e, this);
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
            "ContextItem.FileChunk|1 relative_workspace_path 9|2 chunk_contents 9|3 start_line_number 5"
        ];
    }
}
class y extends l {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.lines = [], this.totalNumberOfLinesInFile = 0, n.proto3.util.initPartial(e, this);
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
            "ContextItem.SparseFileChunk|1 relative_workspace_path 9|2 lines #0*|3 total_number_of_lines_in_file 5|4 cell_number 5?",
            w
        ];
    }
}
class w extends l {
    constructor(e){
        super(), this.line = "", this.lineNumber = 0, n.proto3.util.initPartial(e, this);
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
            "ContextItem.SparseFileChunk.Line|1 line 9|2 line_number 5"
        ];
    }
}
class v extends l {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.contents = "", n.proto3.util.initPartial(e, this);
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
            "ContextItem.OutlineChunk|1 relative_workspace_path 9|2 contents 9|3 full_range #0",
            s.LineRange
        ];
    }
}
class _ extends l {
    constructor(e){
        super(), this.lines = [], this.startLineNumber = 0, n.proto3.util.initPartial(e, this);
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
            "ContextItem.CmdKSelection|1 lines 9*|2 start_line_number 5"
        ];
    }
}
class A extends l {
    constructor(e){
        super(), this.howManyDiffsAgo = 0, this.isVeryRecent = !1, n.proto3.util.initPartial(e, this);
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
            "ContextItem.FileDiffHistory|1 cpp_file_diff_history #0|2 how_many_diffs_ago 5|3 is_very_recent 8",
            o.lIu
        ];
    }
}
class S extends l {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.lines = [], this.totalNumberOfLinesInFile = 0, n.proto3.util.initPartial(e, this);
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
            "ContextItem.CmdKImmediateContext|1 relative_workspace_path 9|2 lines #0*|3 total_number_of_lines_in_file 5|4 cell_number 5?",
            b
        ];
    }
}
class b extends l {
    constructor(e){
        super(), this.line = "", this.lineNumber = 0, n.proto3.util.initPartial(e, this);
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
            "ContextItem.CmdKImmediateContext.Line|1 line 9|2 line_number 5"
        ];
    }
}
class E extends l {
    constructor(e){
        super(), this.query = "", n.proto3.util.initPartial(e, this);
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
            "ContextItem.CmdKQuery|1 query 9"
        ];
    }
}
class I extends l {
    constructor(e){
        super(), this.query = "", n.proto3.util.initPartial(e, this);
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
            "ContextItem.TerminalCmdKQuery|1 query 9"
        ];
    }
}
class C extends l {
    constructor(e){
        super(), this.contextItemHashes = [], this.suggestedCommand = "", n.proto3.util.initPartial(e, this);
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
            "ContextItem.TerminalCmdKQueryHistory|1 query #0|2 query_history #1|5 context_item_hashes 9*|6 suggested_command 9",
            I,
            C
        ];
    }
}
class k extends l {
    constructor(e){
        super(), this.contextItemHashes = [], n.proto3.util.initPartial(e, this);
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
            "ContextItem.CmdKQueryHistory|1 query #0|2 immediate_context #1|3 selection #2|4 query_history #3|5 context_item_hashes 9*|6 timestamp 3?|7 timestamp_double 1?",
            E,
            S,
            _,
            k
        ];
    }
}
class x extends l {
    constructor(e){
        super(), this.pastCmdkQueries = [], this.currTimestampDouble = 0, n.proto3.util.initPartial(e, this);
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
            "ContextItem.CmdKQueryHistoryInDiffSession|1 past_cmdk_queries #0*|3 curr_timestamp_double 1",
            T
        ];
    }
}
class T extends l {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.timestampDouble = 0, n.proto3.util.initPartial(e, this);
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
            "ContextItem.CmdKQueryHistoryInDiffSession.PastCmdKQueryInDiffSession|1 query #0|2 relative_workspace_path 9|5 cmdk_was_accepted 8?|6 timestamp_double 1|7 timestamp_for_diff_interleaving 1?|8 request_id 9?",
            E
        ];
    }
}
class R extends l {
    constructor(e){
        super(), this.userMessage = "", this.assistantResponse = "", this.activeForCmdK = !1, n.proto3.util.initPartial(e, this);
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
            "ContextItem.ChatHistory|1 user_message 9|2 assistant_response 9|3 chat_history #0|4 active_for_cmd_k 8|5 timestamp 3?|6 timestamp_double 1?",
            R
        ];
    }
}
class B extends l {
    constructor(e){
        super(), this.history = "", this.cwdFull = "", this.cwdRelativeWorkspacePath = "", this.activeForCmdK = !1, n.proto3.util.initPartial(e, this);
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
            "ContextItem.TerminalHistory|1 history 9|5 cwd_full 9|6 cwd_relative_workspace_path 9|4 active_for_cmd_k 8|7 timestamp 3?|8 timestamp_double 1?"
        ];
    }
}
class P extends l {
    constructor(e){
        super(), this.instructions = "", n.proto3.util.initPartial(e, this);
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
            "ContextItem.CustomInstructions|1 instructions 9"
        ];
    }
}
class J extends l {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.line = "", this.lineNumber = 0, this.columnNumber = 0, n.proto3.util.initPartial(e, this);
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
            "ContextItem.GoToDefinitionResult|1 relative_workspace_path 9|2 line 9|3 line_number 5|4 column_number 5|5 definition_chunk #0",
            g
        ];
    }
}
class M extends l {
    constructor(e){
        super(), this.docName = "", this.pageUrl = "", this.documentationChunk = "", this.score = 0, n.proto3.util.initPartial(e, this);
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
            "ContextItem.DocumentationChunk|1 doc_name 9|2 page_url 9|3 documentation_chunk 9|4 score 2"
        ];
    }
}
class q extends l {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.lints = [], this.contextLines = [], n.proto3.util.initPartial(e, this);
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
            "ContextItem.Lints|1 relative_workspace_path 9|2 lints #0*|3 context_lines #1*",
            s.Lint,
            D
        ];
    }
}
class D extends l {
    constructor(e){
        super(), this.line = "", this.lineNumber = 0, n.proto3.util.initPartial(e, this);
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
            "ContextItem.Lints.Line|1 line 9|2 line_number 5"
        ];
    }
}
class O extends l {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.cellOutput = "", this.cellNumber = 0, n.proto3.util.initPartial(e, this);
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
            "ContextItem.NotebookCellOutput|1 relative_workspace_path 9|2 cell_output 9|3 cell_number 5"
        ];
    }
}
class N extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ContextItem.LspSubgraphChunk|1 lsp_subgraph_full_context #0",
            i.i9
        ];
    }
}
class F extends l {
    constructor(e){
        super(), this.note = "", n.proto3.util.initPartial(e, this);
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
            "ContextItem.CommitNoteChunk|1 note 9"
        ];
    }
}
class U extends l {
    constructor(e){
        super(), this.type = L.UNSPECIFIED, this.uuid = "", this.intent = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "ContextIntent|1 type #0|15 uuid 9|2 file #1 intent|3 code_selection #2 intent|5 lints #3 intent|6 recent_locations #4 intent|8 cmd_k_current_file #5 intent|9 cmd_k_query_etc #6 intent|14 terminal_cmd_k_defaults #7 intent|10 cmd_k_definitions #8 intent|11 documentation #9 intent|12 custom_instructions #10 intent|13 chat_history #11 intent|16 terminal_history #12 intent|17 visible_tabs #13 intent|18 lsp_subgraph #14 intent|19 commit_notes #15 intent|20 diff_history #16 intent|21 past_cmdk_messages_in_diff_sessions #17 intent",
            L,
            Q,
            G,
            z,
            K,
            X,
            ee,
            oe,
            re,
            $,
            te,
            ne,
            ie,
            Z,
            ae,
            H,
            se,
            Y
        ];
    }
}
var L = (0, a.QT)(n.proto3, c, "ContextIntent.Type", [
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
class $ extends l {
    constructor(e){
        super(), this.documentationIdentifier = "", n.proto3.util.initPartial(e, this);
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
            "ContextIntent.Documentation|1 documentation_identifier 9"
        ];
    }
}
class Q extends l {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.mode = j.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "ContextIntent.File|1 relative_workspace_path 9|2 mode #0",
            j
        ];
    }
}
var j = (0, a.QT)(n.proto3, c, "ContextIntent.File.Mode", [
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
class G extends l {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.text = "", n.proto3.util.initPartial(e, this);
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
            "ContextIntent.CodeSelection|1 relative_workspace_path 9|2 potentially_out_of_date_range #0|3 text 9",
            s.SimpleRange
        ];
    }
}
class H extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ContextIntent.CommitNotes"
        ];
    }
}
class z extends l {
    constructor(e){
        super(), this.scope = {
            case: void 0
        }, this.filterToSeverities = [], n.proto3.util.initPartial(e, this);
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
            "ContextIntent.Lints|1 cmdk_scope #0 scope|2 file_scope #1 scope|3 filter_to_severities #2*",
            W,
            V,
            s.LintSeverity
        ];
    }
}
class W extends l {
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
            "ContextIntent.Lints.CmdKScope"
        ];
    }
}
class V extends l {
    constructor(e){
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e, this);
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
            "ContextIntent.Lints.FileScope|1 relative_workspace_path 9|2 filter_range #0?",
            s.LineRange
        ];
    }
}
class K extends l {
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
            "ContextIntent.RecentLocations|2 timestamp 1?"
        ];
    }
}
class Y extends l {
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
            "ContextIntent.PastCmdkConversationsInDiffSessions"
        ];
    }
}
class Z extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ContextIntent.VisibleTabs"
        ];
    }
}
class X extends l {
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
            "ContextIntent.CmdKCurrentFile"
        ];
    }
}
class ee extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ContextIntent.CmdKQueryEtc"
        ];
    }
}
class te extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ContextIntent.CustomInstructions"
        ];
    }
}
class re extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ContextIntent.CmdKDefinitions"
        ];
    }
}
class ne extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ContextIntent.ChatHistory"
        ];
    }
}
class se extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ContextIntent.DiffHistory"
        ];
    }
}
class oe extends l {
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
            "ContextIntent.TerminalCmdKDefaults"
        ];
    }
}
class ie extends l {
    constructor(e){
        super(), this.instanceId = 0, this.activeForCmdK = !1, n.proto3.util.initPartial(e, this);
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
            "ContextIntent.TerminalHistory|1 instance_id 5|2 active_for_cmd_k 8|3 use_active_instance_as_fallback 8?"
        ];
    }
}
class ae extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ContextIntent.LspSubgraph"
        ];
    }
}
