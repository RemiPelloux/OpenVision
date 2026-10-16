"use strict";
require.d(exports, {
    $2: ()=>C,
    D: ()=>Q,
    NF: ()=>d,
    Tv: ()=>U,
    V_: ()=>y,
    Xo: ()=>I,
    Xx: ()=>f,
    Z$: ()=>R,
    bO: ()=>_,
    jm: ()=>l,
    n9: ()=>m,
    xu: ()=>B
});
var n = require("./module-6038.js"), s = require("./module-9524.js"), i = require("./module-7918.js"), o = require("./module-6938.js"), a = require("./module-464.js"), u = require("./module-8592.js");
class c extends u.HL {
    static get runtime() {
        return (0, u.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "aiserver.v1.";
    }
}
class l extends c {
    constructor(t){
        super(), this.contextItems = [], n.proto3.util.initPartial(t, this);
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
            "RerankCmdKContextRequest|1 context_items #0*|3 legacy_context #1|2 cmd_k_options #2",
            s.oT,
            E,
            h
        ];
    }
}
class m extends c {
    constructor(t){
        super(), this.response = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "RerankCmdKContextResponse|1 context_status_update #0 response|2 missing_context_items #1 response|3 did_call 8?",
            s.d$,
            s._V
        ];
    }
}
class d extends c {
    constructor(t){
        super(), this.contextItems = [], n.proto3.util.initPartial(t, this);
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
            "RerankTerminalCmdKContextRequest|1 context_items #0*|2 cmd_k_options #1",
            s.oT,
            p
        ];
    }
}
class f extends c {
    constructor(t){
        super(), this.response = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "RerankTerminalCmdKContextResponse|1 context_status_update #0 response|2 missing_context_items #1 response",
            s.d$,
            s._V
        ];
    }
}
class p extends c {
    constructor(t){
        super(), this.chatMode = !1, this.adaCmdKContext = !1, n.proto3.util.initPartial(t, this);
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
            "TerminalCmdKOptions|3 model_details #0|1 chat_mode 8|2 ada_cmd_k_context 8|4 use_web 8?",
            i.ModelDetails
        ];
    }
}
class h extends c {
    constructor(t){
        super(), this.chatMode = !1, this.adaCmdKContext = !1, n.proto3.util.initPartial(t, this);
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
            "CmdKOptions|3 model_details #0|1 chat_mode 8|2 ada_cmd_k_context 8|4 use_reranker 8?|5 use_web 8?|6 request_is_for_caching 8?",
            i.ModelDetails
        ];
    }
}
class g extends c {
    constructor(t){
        super(), this.originalLines = [], this.relativePath = "", this.extraContextAbove = [], this.extraContextBelow = [], n.proto3.util.initPartial(t, this);
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
            "CmdKUpcomingEdit|1 original_lines 9*|3 relative_path 9|4 extra_context_above 9*|5 extra_context_below 9*"
        ];
    }
}
class A extends c {
    constructor(t){
        super(), this.originalLines = [], this.newLines = [], this.relativePath = "", this.extraContextAbove = [], this.extraContextBelow = [], n.proto3.util.initPartial(t, this);
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
            "CmdKPreviousEdit|1 original_lines 9*|2 new_lines 9*|3 relative_path 9|4 extra_context_above 9*|5 extra_context_below 9*"
        ];
    }
}
class _ extends c {
    constructor(t){
        super(), this.contextItems = [], this.sessionId = "", this.previousEdits = [], this.upcomingEdits = [], this.images = [], this.links = [], this.diffHistory = [], n.proto3.util.initPartial(t, this);
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
            "StreamHypermodeRequest|1 context_items #0*|2 cmd_k_options #1|4 cmd_k_debug_info #2|6 session_id 9|5 legacy_context #3|7 previous_edit #4?|8 previous_edits #4*|12 upcoming_edits #5*|9 use_big_cmdk_for_multi_file_edit 8?|10 images #6*|11 links #7*|13 diff_history #8*|14 hyper_model 9?|15 timing_info #9?",
            s.oT,
            h,
            i.CmdKDebugInfo,
            E,
            A,
            g,
            i.ImageProto,
            i.CmdKExternalLink,
            o.lIu,
            J
        ];
    }
}
class y extends c {
    constructor(t){
        super(), this.contextItems = [], this.sessionId = "", this.previousEdits = [], this.upcomingEdits = [], this.images = [], this.links = [], this.diffHistory = [], this.rules = [], n.proto3.util.initPartial(t, this);
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
            "StreamCmdKRequest|1 context_items #0*|2 cmd_k_options #1|4 cmd_k_debug_info #2|6 session_id 9|5 legacy_context #3|7 previous_edit #4?|8 previous_edits #4*|12 upcoming_edits #5*|9 use_big_cmdk_for_multi_file_edit 8?|10 images #6*|11 links #7*|13 diff_history #8*|14 diff_to_base_branch #9?|15 timing_info #10?|16 rules #11*",
            s.oT,
            h,
            i.CmdKDebugInfo,
            E,
            A,
            g,
            i.ImageProto,
            i.CmdKExternalLink,
            o.lIu,
            w,
            J,
            i.CursorRule
        ];
    }
}
class w extends c {
    constructor(t){
        super(), this.fileDiffs = [], this.commits = [], n.proto3.util.initPartial(t, this);
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
            "StreamCmdKRequest.BranchDiff|1 file_diffs #0*|2 commits #1*",
            S,
            a.gn
        ];
    }
}
class S extends c {
    constructor(t){
        super(), this.fileName = "", this.diff = "", this.tooBig = !1, n.proto3.util.initPartial(t, this);
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
            "StreamCmdKRequest.BranchDiff.FileDiff|1 file_name 9|2 diff 9|3 too_big 8"
        ];
    }
}
class J extends c {
    constructor(t){
        super(), this.userInputTime = 0, this.streamCmdkTime = 0, n.proto3.util.initPartial(t, this);
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
            "TimingInfo|1 user_input_time 1|2 stream_cmdk_time 1"
        ];
    }
}
class B extends c {
    constructor(t){
        super(), this.contextItems = [], this.sessionId = "", n.proto3.util.initPartial(t, this);
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
            "StreamTerminalCmdKRequest|1 context_items #0*|2 cmd_k_options #1|6 session_id 9|5 legacy_context #2",
            s.oT,
            p,
            E
        ];
    }
}
class E extends c {
    constructor(t){
        super(), this.promptCodeBlocks = [], this.documentationIdentifiers = [], n.proto3.util.initPartial(t, this);
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
            "CmdKLegacyContext|4 explicit_context #0|12 prompt_code_blocks #1*|10 documentation_identifiers 9*",
            i.ExplicitContext,
            i.CodeBlock
        ];
    }
}
class I extends c {
    constructor(t){
        super(), this.response = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "StreamCmdKResponseContextWrapped|1 real_response #0 response|2 context_status_update #1 response|3 missing_context_items #2 response",
            R,
            s.d$,
            s._V
        ];
    }
}
class C extends c {
    constructor(t){
        super(), this.response = {
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
            "StreamTerminalCmdKResponseContextWrapped|1 real_response #0 response|2 context_status_update #1 response|3 missing_context_items #2 response",
            b,
            s.d$,
            s._V
        ];
    }
}
class b extends c {
    constructor(t){
        super(), this.response = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "StreamTerminalCmdKResponse|1 terminal_command #0 response|4 chat #1 response|5 status_update #2 response",
            k,
            v,
            q
        ];
    }
}
class k extends c {
    constructor(t){
        super(), this.partialCommand = "", n.proto3.util.initPartial(t, this);
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
            "StreamTerminalCmdKResponse.TerminalCommand|1 partial_command 9"
        ];
    }
}
class v extends c {
    constructor(t){
        super(), this.text = "", n.proto3.util.initPartial(t, this);
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
            "StreamTerminalCmdKResponse.Chat|1 text 9"
        ];
    }
}
class q extends c {
    constructor(t){
        super(), this.messages = [], n.proto3.util.initPartial(t, this);
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
            "StreamTerminalCmdKResponse.StatusUpdate|1 messages 9*"
        ];
    }
}
class R extends c {
    constructor(t){
        super(), this.response = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "StreamCmdKResponse|1 edit_start #0 response|2 edit_stream #1 response|3 edit_end #2 response|4 chat #3 response|5 status_update #4 response",
            P,
            T,
            x,
            N,
            D
        ];
    }
}
class P extends c {
    constructor(t){
        super(), this.startLineNumber = 0, this.editId = 0, n.proto3.util.initPartial(t, this);
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
            "StreamCmdKResponse.EditStart|1 start_line_number 5|2 edit_id 5|3 max_end_line_number_exclusive 5?|4 file_path 9?"
        ];
    }
}
class T extends c {
    constructor(t){
        super(), this.text = "", this.editId = 0, n.proto3.util.initPartial(t, this);
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
            "StreamCmdKResponse.EditStream|1 text 9|2 edit_id 5|3 file_path 9?"
        ];
    }
}
class x extends c {
    constructor(t){
        super(), this.endLineNumberExclusive = 0, this.editId = 0, n.proto3.util.initPartial(t, this);
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
            "StreamCmdKResponse.EditEnd|1 end_line_number_exclusive 5|2 edit_id 5|3 file_path 9?"
        ];
    }
}
class N extends c {
    constructor(t){
        super(), this.text = "", n.proto3.util.initPartial(t, this);
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
            "StreamCmdKResponse.Chat|1 text 9"
        ];
    }
}
class D extends c {
    constructor(t){
        super(), this.messages = [], n.proto3.util.initPartial(t, this);
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
            "StreamCmdKResponse.StatusUpdate|1 messages 9*"
        ];
    }
}
class U extends c {
    constructor(t){
        super(), this.codeBlocks = [], this.contextItems = [], this.sessionId = "", n.proto3.util.initPartial(t, this);
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
            "GetRelevantChunksRequest|1 code_blocks #0*|2 cmd_k_options #1|3 context_items #2*|4 session_id 9|5 legacy_context #3",
            i.CodeBlock,
            h,
            s.oT,
            E
        ];
    }
}
class Q extends c {
    constructor(t){
        super(), this.response = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "StreamGetRelevantChunksResponseContextWrapped|1 real_response #0 response",
            M
        ];
    }
}
class M extends c {
    constructor(t){
        super(), this.response = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "GetRelevantChunksResponse|1 code_blocks #0 response|2 chain_of_thought_stream #1 response",
            F,
            O
        ];
    }
}
class O extends c {
    constructor(t){
        super(), this.text = "", n.proto3.util.initPartial(t, this);
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
            "GetRelevantChunksResponse.ChainOfThoughtStream|1 text 9"
        ];
    }
}
class F extends c {
    constructor(t){
        super(), this.codeBlocks = [], n.proto3.util.initPartial(t, this);
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
            "GetRelevantChunksResponse.CodeBlocks|1 code_blocks #0*",
            i.CodeBlock
        ];
    }
}
