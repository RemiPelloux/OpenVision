"use strict";
require.d(exports, {
    $2: ()=>C,
    D: ()=>N,
    NF: ()=>p,
    Tv: ()=>O,
    V_: ()=>v,
    Xo: ()=>I,
    Xx: ()=>m,
    Z$: ()=>B,
    bO: ()=>w,
    jm: ()=>u,
    n9: ()=>d,
    xu: ()=>b
});
var n = require("./module-36038.js"), s = require("./module-69524.js"), o = require("./module-67918.js"), i = require("./module-66938.js"), a = require("./module-50464.js"), c = require("./module-8592.js");
class l extends c.HL {
    static get runtime() {
        return (0, c.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "aiserver.v1.";
    }
}
class u extends l {
    constructor(e){
        super(), this.contextItems = [], n.proto3.util.initPartial(e, this);
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
            "RerankCmdKContextRequest|1 context_items #0*|3 legacy_context #1|2 cmd_k_options #2",
            s.oT,
            E,
            f
        ];
    }
}
class d extends l {
    constructor(e){
        super(), this.response = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "RerankCmdKContextResponse|1 context_status_update #0 response|2 missing_context_items #1 response|3 did_call 8?",
            s.d$,
            s._V
        ];
    }
}
class p extends l {
    constructor(e){
        super(), this.contextItems = [], n.proto3.util.initPartial(e, this);
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
            "RerankTerminalCmdKContextRequest|1 context_items #0*|2 cmd_k_options #1",
            s.oT,
            h
        ];
    }
}
class m extends l {
    constructor(e){
        super(), this.response = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "RerankTerminalCmdKContextResponse|1 context_status_update #0 response|2 missing_context_items #1 response",
            s.d$,
            s._V
        ];
    }
}
class h extends l {
    constructor(e){
        super(), this.chatMode = !1, this.adaCmdKContext = !1, n.proto3.util.initPartial(e, this);
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
            "TerminalCmdKOptions|3 model_details #0|1 chat_mode 8|2 ada_cmd_k_context 8|4 use_web 8?",
            o.ModelDetails
        ];
    }
}
class f extends l {
    constructor(e){
        super(), this.chatMode = !1, this.adaCmdKContext = !1, n.proto3.util.initPartial(e, this);
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
            "CmdKOptions|3 model_details #0|1 chat_mode 8|2 ada_cmd_k_context 8|4 use_reranker 8?|5 use_web 8?|6 request_is_for_caching 8?",
            o.ModelDetails
        ];
    }
}
class g extends l {
    constructor(e){
        super(), this.originalLines = [], this.relativePath = "", this.extraContextAbove = [], this.extraContextBelow = [], n.proto3.util.initPartial(e, this);
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
            "CmdKUpcomingEdit|1 original_lines 9*|3 relative_path 9|4 extra_context_above 9*|5 extra_context_below 9*"
        ];
    }
}
class y extends l {
    constructor(e){
        super(), this.originalLines = [], this.newLines = [], this.relativePath = "", this.extraContextAbove = [], this.extraContextBelow = [], n.proto3.util.initPartial(e, this);
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
            "CmdKPreviousEdit|1 original_lines 9*|2 new_lines 9*|3 relative_path 9|4 extra_context_above 9*|5 extra_context_below 9*"
        ];
    }
}
class w extends l {
    constructor(e){
        super(), this.contextItems = [], this.sessionId = "", this.previousEdits = [], this.upcomingEdits = [], this.images = [], this.links = [], this.diffHistory = [], n.proto3.util.initPartial(e, this);
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
            "StreamHypermodeRequest|1 context_items #0*|2 cmd_k_options #1|4 cmd_k_debug_info #2|6 session_id 9|5 legacy_context #3|7 previous_edit #4?|8 previous_edits #4*|12 upcoming_edits #5*|9 use_big_cmdk_for_multi_file_edit 8?|10 images #6*|11 links #7*|13 diff_history #8*|14 hyper_model 9?|15 timing_info #9?",
            s.oT,
            f,
            o.CmdKDebugInfo,
            E,
            y,
            g,
            o.ImageProto,
            o.CmdKExternalLink,
            i.lIu,
            S
        ];
    }
}
class v extends l {
    constructor(e){
        super(), this.contextItems = [], this.sessionId = "", this.previousEdits = [], this.upcomingEdits = [], this.images = [], this.links = [], this.diffHistory = [], this.rules = [], n.proto3.util.initPartial(e, this);
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
            "StreamCmdKRequest|1 context_items #0*|2 cmd_k_options #1|4 cmd_k_debug_info #2|6 session_id 9|5 legacy_context #3|7 previous_edit #4?|8 previous_edits #4*|12 upcoming_edits #5*|9 use_big_cmdk_for_multi_file_edit 8?|10 images #6*|11 links #7*|13 diff_history #8*|14 diff_to_base_branch #9?|15 timing_info #10?|16 rules #11*",
            s.oT,
            f,
            o.CmdKDebugInfo,
            E,
            y,
            g,
            o.ImageProto,
            o.CmdKExternalLink,
            i.lIu,
            _,
            S,
            o.CursorRule
        ];
    }
}
class _ extends l {
    constructor(e){
        super(), this.fileDiffs = [], this.commits = [], n.proto3.util.initPartial(e, this);
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
            "StreamCmdKRequest.BranchDiff|1 file_diffs #0*|2 commits #1*",
            A,
            a.gn
        ];
    }
}
class A extends l {
    constructor(e){
        super(), this.fileName = "", this.diff = "", this.tooBig = !1, n.proto3.util.initPartial(e, this);
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
            "StreamCmdKRequest.BranchDiff.FileDiff|1 file_name 9|2 diff 9|3 too_big 8"
        ];
    }
}
class S extends l {
    constructor(e){
        super(), this.userInputTime = 0, this.streamCmdkTime = 0, n.proto3.util.initPartial(e, this);
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
            "TimingInfo|1 user_input_time 1|2 stream_cmdk_time 1"
        ];
    }
}
class b extends l {
    constructor(e){
        super(), this.contextItems = [], this.sessionId = "", n.proto3.util.initPartial(e, this);
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
            "StreamTerminalCmdKRequest|1 context_items #0*|2 cmd_k_options #1|6 session_id 9|5 legacy_context #2",
            s.oT,
            h,
            E
        ];
    }
}
class E extends l {
    constructor(e){
        super(), this.promptCodeBlocks = [], this.documentationIdentifiers = [], n.proto3.util.initPartial(e, this);
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
            "CmdKLegacyContext|4 explicit_context #0|12 prompt_code_blocks #1*|10 documentation_identifiers 9*",
            o.ExplicitContext,
            o.CodeBlock
        ];
    }
}
class I extends l {
    constructor(e){
        super(), this.response = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "StreamCmdKResponseContextWrapped|1 real_response #0 response|2 context_status_update #1 response|3 missing_context_items #2 response",
            B,
            s.d$,
            s._V
        ];
    }
}
class C extends l {
    constructor(e){
        super(), this.response = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "StreamTerminalCmdKResponseContextWrapped|1 real_response #0 response|2 context_status_update #1 response|3 missing_context_items #2 response",
            k,
            s.d$,
            s._V
        ];
    }
}
class k extends l {
    constructor(e){
        super(), this.response = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "StreamTerminalCmdKResponse|1 terminal_command #0 response|4 chat #1 response|5 status_update #2 response",
            x,
            T,
            R
        ];
    }
}
class x extends l {
    constructor(e){
        super(), this.partialCommand = "", n.proto3.util.initPartial(e, this);
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
            "StreamTerminalCmdKResponse.TerminalCommand|1 partial_command 9"
        ];
    }
}
class T extends l {
    constructor(e){
        super(), this.text = "", n.proto3.util.initPartial(e, this);
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
            "StreamTerminalCmdKResponse.Chat|1 text 9"
        ];
    }
}
class R extends l {
    constructor(e){
        super(), this.messages = [], n.proto3.util.initPartial(e, this);
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
            "StreamTerminalCmdKResponse.StatusUpdate|1 messages 9*"
        ];
    }
}
class B extends l {
    constructor(e){
        super(), this.response = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "StreamCmdKResponse|1 edit_start #0 response|2 edit_stream #1 response|3 edit_end #2 response|4 chat #3 response|5 status_update #4 response",
            P,
            J,
            M,
            q,
            D
        ];
    }
}
class P extends l {
    constructor(e){
        super(), this.startLineNumber = 0, this.editId = 0, n.proto3.util.initPartial(e, this);
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
            "StreamCmdKResponse.EditStart|1 start_line_number 5|2 edit_id 5|3 max_end_line_number_exclusive 5?|4 file_path 9?"
        ];
    }
}
class J extends l {
    constructor(e){
        super(), this.text = "", this.editId = 0, n.proto3.util.initPartial(e, this);
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
            "StreamCmdKResponse.EditStream|1 text 9|2 edit_id 5|3 file_path 9?"
        ];
    }
}
class M extends l {
    constructor(e){
        super(), this.endLineNumberExclusive = 0, this.editId = 0, n.proto3.util.initPartial(e, this);
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
            "StreamCmdKResponse.EditEnd|1 end_line_number_exclusive 5|2 edit_id 5|3 file_path 9?"
        ];
    }
}
class q extends l {
    constructor(e){
        super(), this.text = "", n.proto3.util.initPartial(e, this);
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
            "StreamCmdKResponse.Chat|1 text 9"
        ];
    }
}
class D extends l {
    constructor(e){
        super(), this.messages = [], n.proto3.util.initPartial(e, this);
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
            "StreamCmdKResponse.StatusUpdate|1 messages 9*"
        ];
    }
}
class O extends l {
    constructor(e){
        super(), this.codeBlocks = [], this.contextItems = [], this.sessionId = "", n.proto3.util.initPartial(e, this);
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
            "GetRelevantChunksRequest|1 code_blocks #0*|2 cmd_k_options #1|3 context_items #2*|4 session_id 9|5 legacy_context #3",
            o.CodeBlock,
            f,
            s.oT,
            E
        ];
    }
}
class N extends l {
    constructor(e){
        super(), this.response = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "StreamGetRelevantChunksResponseContextWrapped|1 real_response #0 response",
            F
        ];
    }
}
class F extends l {
    constructor(e){
        super(), this.response = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "GetRelevantChunksResponse|1 code_blocks #0 response|2 chain_of_thought_stream #1 response",
            L,
            U
        ];
    }
}
class U extends l {
    constructor(e){
        super(), this.text = "", n.proto3.util.initPartial(e, this);
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
            "GetRelevantChunksResponse.ChainOfThoughtStream|1 text 9"
        ];
    }
}
class L extends l {
    constructor(e){
        super(), this.codeBlocks = [], n.proto3.util.initPartial(e, this);
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
            "GetRelevantChunksResponse.CodeBlocks|1 code_blocks #0*",
            o.CodeBlock
        ];
    }
}
