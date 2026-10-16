"use strict";
require.d(exports, {
    $FK: ()=>b,
    $pi: ()=>_,
    DLS: ()=>St,
    DOp: ()=>w,
    Deb: ()=>bt,
    Ijy: ()=>U,
    JEF: ()=>Et,
    Tob: ()=>yt,
    Zk9: ()=>vt,
    d0d: ()=>wt,
    f14: ()=>B,
    feo: ()=>y,
    jSP: ()=>At,
    lIu: ()=>D,
    mv: ()=>F,
    nWu: ()=>P,
    qcI: ()=>m,
    r5_: ()=>N,
    rgN: ()=>O,
    vfF: ()=>g,
    z8t: ()=>E
});
var n = require("./module-36038.js"), s = require("./module-67918.js"), o = require("./module-83341.js"), i = require("./module-66637.js"), a = require("./module-81563.js"), c = require("./module-21934.js"), l = require("./module-8592.js");
const u = "aiserver.v1.";
class d extends l.HL {
    static get runtime() {
        return (0, l.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return u;
    }
}
n.proto3;
var p = (0, l.QT)(n.proto3, u, "CppSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "LINE_CHANGE"
    ],
    [
        2,
        "TYPING"
    ],
    [
        3,
        "OPTION_HOLD"
    ],
    [
        4,
        "LINTER_ERRORS"
    ],
    [
        5,
        "PARAMETER_HINTS"
    ],
    [
        6,
        "CURSOR_PREDICTION"
    ],
    [
        7,
        "MANUAL_TRIGGER"
    ],
    [
        8,
        "EDITOR_CHANGE"
    ],
    [
        9,
        "LSP_SUGGESTIONS"
    ]
], 1);
class m extends d {
    constructor(e){
        super(), this.source = "", n.proto3.util.initPartial(e, this);
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
            "CppIntentInfo|1 source 9"
        ];
    }
}
class h extends d {
    constructor(e){
        super(), this.label = "", n.proto3.util.initPartial(e, this);
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
            "LspSuggestion|1 label 9"
        ];
    }
}
class f extends d {
    constructor(e){
        super(), this.suggestions = [], n.proto3.util.initPartial(e, this);
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
            "LspSuggestedItems|1 suggestions #0*",
            h
        ];
    }
}
class g extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ShouldTurnOnCppOnboardingRequest"
        ];
    }
}
class y extends d {
    constructor(e){
        super(), this.shouldTurnOnCppOnboarding = !1, n.proto3.util.initPartial(e, this);
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
            "ShouldTurnOnCppOnboardingResponse|1 should_turn_on_cpp_onboarding 8"
        ];
    }
}
class w extends d {
    constructor(e){
        super(), this.diffHistory = [], this.contextItems = [], this.diffHistoryKeys = [], this.fileDiffHistories = [], this.mergedDiffHistories = [], this.blockDiffPatches = [], this.parameterHints = [], this.lspContexts = [], this.additionalFiles = [], this.filesyncUpdates = [], this.timeSinceRequestStart = 0, this.timeAtRequestSend = 0, this.codeResults = [], n.proto3.util.initPartial(e, this);
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
            "StreamCppRequest|1 current_file #0|2 diff_history 9*|3 model_name 9?|4 linter_errors #1?|13 context_items #2*|5 diff_history_keys 9*|6 give_debug_output 8?|7 file_diff_histories #3*|8 merged_diff_histories #3*|9 block_diff_patches #4*|10 is_nightly 8?|11 is_debug 8?|12 immediately_ack 8?|17 enable_more_context 8?|14 parameter_hints #5*|15 lsp_contexts #6*|16 cpp_intent_info #7?|18 workspace_id 9?|19 additional_files #8*|20 control_token #9?|21 client_time 1?|22 filesync_updates #10*|23 time_since_request_start 1|24 time_at_request_send 1|25 client_timezone_offset 1?|26 lsp_suggested_items #11?|27 supports_cpt 8?|28 supports_crlf_cpt 8?|29 code_results #12*",
            s.CurrentFileInfo,
            s.LinterErrors,
            F,
            D,
            Et,
            U,
            o.i9,
            m,
            q,
            v,
            i.m3,
            f,
            a.PT
        ];
    }
}
var v = (0, l.QT)(n.proto3, u, "StreamCppRequest.ControlToken", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "QUIET"
    ],
    [
        2,
        "LOUD"
    ],
    [
        3,
        "OP"
    ]
], 1);
class _ extends d {
    constructor(e){
        super(), this.text = "", n.proto3.util.initPartial(e, this);
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
            "StreamCppResponse|1 text 9|2 suggestion_start_line 5?|3 suggestion_confidence 5?|4 done_stream 8?|5 debug_model_output 9?|6 debug_model_input 9?|7 debug_stream_time 9?|8 debug_total_time 9?|9 debug_ttft_time 9?|10 debug_server_timing 9?|11 range_to_replace #0?|12 cursor_prediction_target #1?|13 done_edit 8?|14 model_info #2?|15 begin_edit 8?|16 should_remove_leading_eol 8?|17 binding_id 9?",
            s.LineRange,
            A,
            S
        ];
    }
}
class A extends d {
    constructor(e){
        super(), this.relativePath = "", this.lineNumberOneIndexed = 0, this.expectedContent = "", this.shouldRetriggerCpp = !1, n.proto3.util.initPartial(e, this);
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
            "StreamCppResponse.CursorPredictionTarget|1 relative_path 9|2 line_number_one_indexed 5|3 expected_content 9|4 should_retrigger_cpp 8"
        ];
    }
}
class S extends d {
    constructor(e){
        super(), this.isFusedCursorPredictionModel = !1, this.isMultidiffModel = !1, n.proto3.util.initPartial(e, this);
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
            "StreamCppResponse.ModelInfo|1 is_fused_cursor_prediction_model 8|2 is_multidiff_model 8"
        ];
    }
}
class b extends d {
    constructor(e){
        super(), this.model = "", n.proto3.util.initPartial(e, this);
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
            "CppConfigRequest|1 is_nightly 8?|2 model 9|3 supports_cpt 8?"
        ];
    }
}
class E extends d {
    constructor(e){
        super(), this.heuristics = [], this.excludeRecentlyViewedFilesPatterns = [], this.enableRvfTracking = !1, this.globalDebounceDurationMillis = 0, this.clientDebounceDurationMillis = 0, this.cppUrl = "", this.useWhitespaceDiffHistory = !1, this.enableFilesyncDebounceSkipping = !1, this.checkFilesyncHashPercent = 0, this.geoCppBackendUrl = "", this.isFusedCursorPredictionModel = !1, this.includeUnchangedLines = !1, this.shouldFetchRvfText = !1, this.allowsTabChunks = !1, n.proto3.util.initPartial(e, this);
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
            "CppConfigResponse|1 above_radius 5?|2 below_radius 5?|4 merge_behavior #0?|5 is_on 8?|6 is_ghost_text 8?|7 should_let_user_enable_cpp_even_if_not_pro 8?|8 heuristics #1*|9 exclude_recently_viewed_files_patterns 9*|10 enable_rvf_tracking 8|11 global_debounce_duration_millis 5|12 client_debounce_duration_millis 5|13 cpp_url 9|14 use_whitespace_diff_history 8|15 import_prediction_config #2|16 enable_filesync_debounce_skipping 8|17 check_filesync_hash_percent 2|18 geo_cpp_backend_url 9|19 recently_rejected_edit_thresholds #3?|20 is_fused_cursor_prediction_model 8|21 include_unchanged_lines 8|22 should_fetch_rvf_text 8|23 max_number_of_cleared_suggestions_since_last_accept 5?|24 suggestion_hint_config #4?|25 allows_tab_chunks 8|26 tab_context_refresh_debounce_ms 5?|27 tab_context_refresh_editor_change_debounce_ms 5?",
            k,
            I,
            C,
            x,
            T
        ];
    }
}
var I = (0, l.QT)(n.proto3, u, "CppConfigResponse.Heuristic", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "LOTS_OF_ADDED_TEXT"
    ],
    [
        2,
        "DUPLICATING_LINE_AFTER_SUGGESTION"
    ],
    [
        3,
        "DUPLICATING_MULTIPLE_LINES_AFTER_SUGGESTION"
    ],
    [
        4,
        "REVERTING_USER_CHANGE"
    ],
    [
        5,
        "OUTPUT_EXTENDS_BEYOND_RANGE_AND_IS_REPEATED"
    ],
    [
        6,
        "SUGGESTING_RECENTLY_REJECTED_EDIT"
    ]
], 1);
class C extends d {
    constructor(e){
        super(), this.isDisabledByBackend = !1, this.shouldTurnOnAutomatically = !1, this.pythonEnabled = !1, n.proto3.util.initPartial(e, this);
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
            "CppConfigResponse.ImportPredictionConfig|1 is_disabled_by_backend 8|2 should_turn_on_automatically 8|3 python_enabled 8"
        ];
    }
}
class k extends d {
    constructor(e){
        super(), this.type = "", n.proto3.util.initPartial(e, this);
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
            "CppConfigResponse.MergeBehavior|1 type 9|2 limit 5?|3 radius 5?"
        ];
    }
}
class x extends d {
    constructor(e){
        super(), this.hardRejectThreshold = 0, this.softRejectThreshold = 0, n.proto3.util.initPartial(e, this);
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
            "CppConfigResponse.RecentlyRejectedEditThresholds|1 hard_reject_threshold 5|2 soft_reject_threshold 5"
        ];
    }
}
class T extends d {
    constructor(e){
        super(), this.importantLspExtensions = [], this.enabledForPathExtensions = [], n.proto3.util.initPartial(e, this);
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
            "CppConfigResponse.SuggestionHintConfig|1 important_lsp_extensions 9*|2 enabled_for_path_extensions 9*"
        ];
    }
}
class R extends d {
    constructor(e){
        super(), this.text = "", n.proto3.util.initPartial(e, this);
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
            "SuggestedEdit|1 edit_range #0|2 text 9",
            s.SimpleRange
        ];
    }
}
class B extends d {
    constructor(e){
        super(), this.suggestedEdits = [], this.markerTouchesGreen = !1, this.currentFileContentsForLinterErrors = "", n.proto3.util.initPartial(e, this);
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
            "GetCppEditClassificationRequest|1 cpp_request #0|25 suggested_edits #1*|26 marker_touches_green 8|27 current_file_contents_for_linter_errors 9",
            w,
            R
        ];
    }
}
class P extends d {
    constructor(e){
        super(), this.scoredEdits = [], n.proto3.util.initPartial(e, this);
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
            "GetCppEditClassificationResponse|1 scored_edits #0*|2 noop_edit #0|3 should_noop 8?|4 generation_edit #0",
            M
        ];
    }
}
class J extends d {
    constructor(e){
        super(), this.tokens = [], this.tokenLogprobs = [], n.proto3.util.initPartial(e, this);
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
            "GetCppEditClassificationResponse.LogProbs|1 tokens 9*|2 token_logprobs 1*"
        ];
    }
}
class M extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "GetCppEditClassificationResponse.ScoredEdit|1 edit #0|2 log_probs #1",
            R,
            J
        ];
    }
}
class q extends d {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.isOpen = !1, this.visibleRangeContent = [], this.startLineNumberOneIndexed = [], this.visibleRanges = [], n.proto3.util.initPartial(e, this);
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
            "AdditionalFile|1 relative_workspace_path 9|2 is_open 8|3 visible_range_content 9*|4 last_viewed_at 1?|5 start_line_number_one_indexed 5*|6 visible_ranges #0*",
            s.LineRange
        ];
    }
}
class D extends d {
    constructor(e){
        super(), this.fileName = "", this.diffHistory = [], this.diffHistoryTimestamps = [], n.proto3.util.initPartial(e, this);
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
            "CppFileDiffHistory|1 file_name 9|2 diff_history 9*|3 diff_history_timestamps 1*"
        ];
    }
}
class O extends d {
    constructor(e){
        super(), this.fileDiffHistories = [], this.additionalFiles = [], this.timeSinceRequestStart = 0, this.timeAtRequestSend = 0, n.proto3.util.initPartial(e, this);
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
            "RefreshTabContextRequest|1 current_file #0|2 model_name 9?|3 linter_errors #1?|4 file_diff_histories #2*|5 additional_files #3*|6 client_time 1?|7 time_since_request_start 1|8 time_at_request_send 1|9 is_debug 8?|10 workspace_id 9?|11 supports_cpt 8?|12 supports_crlf_cpt 8?|13 repository_info #4",
            s.CurrentFileInfo,
            s.LinterErrors,
            D,
            q,
            a.bn
        ];
    }
}
class N extends d {
    constructor(e){
        super(), this.codeResults = [], n.proto3.util.initPartial(e, this);
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
            "RefreshTabContextResponse|1 code_results #0*",
            a.PT
        ];
    }
}
class F extends d {
    constructor(e){
        super(), this.contents = "", this.relativeWorkspacePath = "", this.score = 0, n.proto3.util.initPartial(e, this);
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
            "CppContextItem|1 contents 9|2 symbol 9?|3 relative_workspace_path 9|4 score 2"
        ];
    }
}
n.proto3;
class U extends d {
    constructor(e){
        super(), this.label = "", n.proto3.util.initPartial(e, this);
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
            "CppParameterHint|1 label 9|2 documentation 9?"
        ];
    }
}
class L extends d {
    constructor(e){
        super(), this.startLineNumber = 0, this.startColumn = 0, this.endLineNumber = 0, this.endColumn = 0, n.proto3.util.initPartial(e, this);
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
            "IRange|1 start_line_number 5|2 start_column 5|3 end_line_number 5|4 end_column 5"
        ];
    }
}
class $ extends d {
    constructor(e){
        super(), this.lineNumberOneIndexed = 0, this.columnOneIndexed = 0, n.proto3.util.initPartial(e, this);
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
            "OneIndexedPosition|1 line_number_one_indexed 5|2 column_one_indexed 5"
        ];
    }
}
class Q extends d {
    constructor(e){
        super(), this.selectionStartLineNumber = 0, this.selectionStartColumn = 0, this.positionLineNumber = 0, this.positionColumn = 0, n.proto3.util.initPartial(e, this);
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
            "CursorSelection|1 selection_start_line_number 5|2 selection_start_column 5|3 position_line_number 5|4 position_column 5"
        ];
    }
}
class j extends d {
    constructor(e){
        super(), this.text = "", this.modelIsAttachedToEditor = !1, this.modelIsAttachedToTheActiveEditor = !1, this.cursorSelections = [], this.modelVersionAtMetadataRetrievalTime = 0, n.proto3.util.initPartial(e, this);
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
            "ModelChange|1 text 9|2 range #0|3 final_model_hash 9?|4 model_version_immediately_after_this_change 5?|5 performance_now_timestamp 1?|7 is_undoing 8?|8 is_redoing 8?|9 model_is_attached_to_editor 8|10 model_is_attached_to_the_active_editor 8|11 cursor_selections #1*|12 model_version_at_metadata_retrieval_time 5|13 global_index 3?|14 performance_now_flush_time 1?|15 change_index 5?|16 flush_index 5?|17 global_index_v2 5?",
            L,
            Q
        ];
    }
}
class G extends d {
    constructor(e){
        super(), this.suggestionId = 0, this.suggestionText = "", this.modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel = 0, this.originalText = "", n.proto3.util.initPartial(e, this);
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
            "CurrentlyShownCppSuggestion|1 suggestion_id 5|2 suggestion_text 9|3 model_version_when_the_change_is_first_indicated_to_the_user_but_not_shown_in_the_model 5|4 range_of_suggestion_in_current_model #0?|5 original_text 9|6 binding_id 9?",
            L
        ];
    }
}
class H extends d {
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
            "CppAcceptEventNew|1 cpp_suggestion #0|7 point_in_time_model #1",
            G,
            ie
        ];
    }
}
class z extends d {
    constructor(e){
        super(), this.requestId = "", this.suggestionText = "", n.proto3.util.initPartial(e, this);
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
            "RecoverableCppData|1 request_id 9|2 suggestion_text 9|3 suggestion_range #0|4 position #1",
            L,
            $
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
            "CppSuggestEvent|1 cpp_suggestion #0|2 point_in_time_model #1|3 recoverable_cpp_data #2",
            G,
            ie,
            z
        ];
    }
}
class V extends d {
    constructor(e){
        super(), this.generationUuid = "", this.modelVersion = 0, this.source = p.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "CppTriggerEvent|1 generation_uuid 9|2 model_version 5|3 cursor_position #0|4 point_in_time_model #1|5 source #2",
            $,
            ie,
            p
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
            "FinishedCppGenerationEvent|1 point_in_time_model #0|2 recoverable_cpp_data #1",
            ie,
            z
        ];
    }
}
class Y extends d {
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
            "CppRejectEventNew|1 cpp_suggestion #0|7 point_in_time_model #1",
            G,
            ie
        ];
    }
}
class Z extends d {
    constructor(e){
        super(), this.text = "", n.proto3.util.initPartial(e, this);
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
            "Edit|1 text 9|2 range #0",
            L
        ];
    }
}
class X extends d {
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
            "CppPartialAcceptEvent|1 cpp_suggestion #0|2 edit #1|3 point_in_time_model #2",
            G,
            Z,
            ie
        ];
    }
}
class ee extends d {
    constructor(e){
        super(), this.requestId = "", this.predictionId = 0, this.lineNumber = 0, this.source = te.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "CursorPrediction|1 request_id 9|2 prediction_id 5|3 line_number 5|4 source #0|5 binding_id 9?",
            te
        ];
    }
}
var te = (0, l.QT)(n.proto3, u, "CursorPrediction.CursorPredictionSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ALWAYS_ON"
    ],
    [
        2,
        "ACCEPT"
    ],
    [
        3,
        "UNDO"
    ],
    [
        4,
        "EDITOR_CHANGE"
    ]
], 1);
class re extends d {
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
            "SuggestCursorPredictionEvent|1 cursor_prediction #0|2 point_in_time_model #1",
            ee,
            ie
        ];
    }
}
class ne extends d {
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
            "AcceptCursorPredictionEvent|1 cursor_prediction #0|2 point_in_time_model #1",
            ee,
            ie
        ];
    }
}
class se extends d {
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
            "RejectCursorPredictionEvent|1 cursor_prediction #0|2 point_in_time_model #1",
            ee,
            ie
        ];
    }
}
class oe extends d {
    constructor(e){
        super(), this.modelVersion = 0, this.relativePath = "", this.modelId = "", n.proto3.util.initPartial(e, this);
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
            "MaybeDefinedPointInTimeModel|1 model_uuid 9?|2 model_version 5|3 relative_path 9|4 model_id 9"
        ];
    }
}
class ie extends d {
    constructor(e){
        super(), this.modelUuid = "", this.modelVersion = 0, this.relativePath = "", this.modelId = "", n.proto3.util.initPartial(e, this);
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
            "PointInTimeModel|1 model_uuid 9|2 model_version 5|3 relative_path 9|4 model_id 9"
        ];
    }
}
class ae extends d {
    constructor(e){
        super(), this.lineNumberOneIndexed = 0, this.columnNumberOneIndexed = 0, n.proto3.util.initPartial(e, this);
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
            "CppManualTriggerEventNew|1 line_number_one_indexed 5|2 column_number_one_indexed 5|7 point_in_time_model #0",
            ie
        ];
    }
}
class ce extends d {
    constructor(e){
        super(), this.modelUuid = "", this.relativePath = "", this.reason = le.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "CppStoppedTrackingModelEvent|1 model_uuid 9|2 relative_path 9|3 reason #0",
            le
        ];
    }
}
var le = (0, l.QT)(n.proto3, u, "CppStoppedTrackingModelEvent.StoppedTrackingModelReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "FILE_TOO_BIG"
    ],
    [
        2,
        "FILE_DISPOSED"
    ],
    [
        3,
        "CHANGE_TOO_BIG"
    ]
], 1);
class ue extends d {
    constructor(e){
        super(), this.addedErrors = [], this.removedErrors = [], this.errors = [], n.proto3.util.initPartial(e, this);
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
            "CppLinterErrorEvent|1 point_in_time_model #0|2 added_errors #1*|3 removed_errors #1*|4 errors #1*",
            ie,
            s.LinterError
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
            "CppDebouncedCursorMovementEvent|1 point_in_time_model #0|2 cursor_position #1",
            ie,
            $
        ];
    }
}
class pe extends d {
    constructor(e){
        super(), this.visibleRanges = [], this.editorId = "", n.proto3.util.initPartial(e, this);
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
            "CppEditorChangedEvent|1 point_in_time_model #0|2 cursor_position #1|3 visible_ranges #2*|4 editor_id 9",
            ie,
            $,
            L
        ];
    }
}
class me extends d {
    constructor(e){
        super(), this.clipboardContents = "", n.proto3.util.initPartial(e, this);
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
            "CppCopyEvent|1 clipboard_contents 9"
        ];
    }
}
class he extends d {
    constructor(e){
        super(), this.title = "", this.id = "", this.arguments = [], n.proto3.util.initPartial(e, this);
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
            "CppQuickActionCommand|1 title 9|2 id 9|3 arguments 9*"
        ];
    }
}
class fe extends d {
    constructor(e){
        super(), this.title = "", this.edits = [], n.proto3.util.initPartial(e, this);
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
            "CppQuickAction|1 title 9|2 edits #0*|3 is_preferred 8?|4 command #1",
            ge,
            he
        ];
    }
}
class ge extends d {
    constructor(e){
        super(), this.text = "", n.proto3.util.initPartial(e, this);
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
            "CppQuickAction.Edit|1 text 9|2 range #0",
            L
        ];
    }
}
class ye extends d {
    constructor(e){
        super(), this.added = [], this.removed = [], this.actions = [], n.proto3.util.initPartial(e, this);
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
            "CppChangeQuickActionEvent|1 point_in_time_model #0|2 added #1*|3 removed #1*|4 actions #1*",
            ie,
            fe
        ];
    }
}
class we extends d {
    constructor(e){
        super(), this.actionIdentifier = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "CppQuickActionFireEvent|1 point_in_time_model #0|2 quick_action_command #1 action_identifier|3 quick_action_event #2 action_identifier",
            ie,
            he,
            fe
        ];
    }
}
class ve extends d {
    constructor(e){
        super(), this.requestId = "", this.eventType = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "CmdKEvent|1 point_in_time_model #0|2 request_id 9|20 prompt_bar_id 9?|3 submit_prompt #1 event_type|4 end_of_generation #2 event_type|5 interrupt_generation #3 event_type|6 accept_all #4 event_type|7 reject_all #5 event_type|8 reject_partial_diff #6 event_type|9 accept_partial_diff #7 event_type|10 after_reject #8 event_type",
            ie,
            _e,
            Ae,
            Se,
            be,
            Ee,
            Ce,
            Ie,
            ke
        ];
    }
}
class _e extends d {
    constructor(e){
        super(), this.originalText = "", this.prompt = "", n.proto3.util.initPartial(e, this);
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
            "CmdKEvent.SubmitPrompt|1 original_range #0|2 original_text 9|3 prompt 9",
            L
        ];
    }
}
class Ae extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "CmdKEvent.EndOfGeneration"
        ];
    }
}
class Se extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "CmdKEvent.InterruptGeneration"
        ];
    }
}
class be extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "CmdKEvent.AcceptDiffs"
        ];
    }
}
class Ee extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "CmdKEvent.RejectDiffs|1 actor_request_id 9?|2 silent 8?"
        ];
    }
}
class Ie extends d {
    constructor(e){
        super(), this.greenLines = [], this.redLines = [], n.proto3.util.initPartial(e, this);
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
            "CmdKEvent.AcceptPartialDiff|1 green_range #0|2 green_lines 9*|3 red_lines 9*",
            L
        ];
    }
}
class Ce extends d {
    constructor(e){
        super(), this.greenLines = [], this.redLines = [], n.proto3.util.initPartial(e, this);
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
            "CmdKEvent.RejectPartialDiff|1 green_range #0|2 green_lines 9*|3 red_lines 9*",
            L
        ];
    }
}
class ke extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "CmdKEvent.AfterReject"
        ];
    }
}
class xe extends d {
    constructor(e){
        super(), this.requestId = "", this.eventType = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "ChatEvent|1 request_id 9|2 submit_prompt #0 event_type|3 end_of_any_generation #1 event_type|4 end_of_uninterrupted_generation #2 event_type",
            Te,
            Re,
            Be
        ];
    }
}
class Te extends d {
    constructor(e){
        super(), this.prompt = "", n.proto3.util.initPartial(e, this);
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
            "ChatEvent.SubmitPrompt|1 prompt 9"
        ];
    }
}
class Re extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ChatEvent.EndOfAnyGeneration"
        ];
    }
}
class Be extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ChatEvent.EndOfUninterruptedGeneration"
        ];
    }
}
class Pe extends d {
    constructor(e){
        super(), this.requestId = "", this.eventType = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "BugBotLinterEvent|1 request_id 9|2 point_in_time_model #0|3 lint_generated #1 event_type|4 lint_dismissed #2 event_type|5 user_feedback #3 event_type|6 viewed_report #4 event_type|7 unviewed_report #5 event_type|8 started #6 event_type|9 not_shown_because_heuristic #7 event_type",
            ie,
            Me,
            qe,
            De,
            Oe,
            Ne,
            Je,
            Fe
        ];
    }
}
class Je extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "BugBotLinterEvent.Started"
        ];
    }
}
class Me extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "BugBotLinterEvent.LintGenerated|1 bug_report #0",
            c.Fl
        ];
    }
}
class qe extends d {
    constructor(e){
        super(), this.bugReportId = "", n.proto3.util.initPartial(e, this);
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
            "BugBotLinterEvent.LintDismissed|1 bug_report_id 9"
        ];
    }
}
class De extends d {
    constructor(e){
        super(), this.bugReportId = "", this.feedback = "", n.proto3.util.initPartial(e, this);
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
            "BugBotLinterEvent.UserFeedback|1 bug_report_id 9|2 feedback 9"
        ];
    }
}
class Oe extends d {
    constructor(e){
        super(), this.bugReportId = "", n.proto3.util.initPartial(e, this);
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
            "BugBotLinterEvent.ViewedReport|1 bug_report_id 9"
        ];
    }
}
class Ne extends d {
    constructor(e){
        super(), this.bugReportId = "", n.proto3.util.initPartial(e, this);
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
            "BugBotLinterEvent.UnviewedReport|1 bug_report_id 9"
        ];
    }
}
class Fe extends d {
    constructor(e){
        super(), this.heuristic = Ue.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "BugBotLinterEvent.NotShownBecauseHeuristic|1 heuristic #0",
            Ue
        ];
    }
}
var Ue = (0, l.QT)(n.proto3, u, "BugBotLinterEvent.NotShownBecauseHeuristic.Heuristic", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "LINT_OVERLAP"
    ],
    [
        2,
        "LINES_MISMATCH"
    ]
], 1);
class Le extends d {
    constructor(e){
        super(), this.requestId = "", this.eventType = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "BugBotEvent|1 request_id 9|2 started #0 event_type|3 reports_generated #1 event_type|4 pressed_fix_in_composer #2 event_type|5 pressed_open_in_editor #3 event_type|6 viewed_report #4 event_type|7 user_feedback #5 event_type|8 pressed_add_to_chat #6 event_type|9 background_interval_started #7 event_type|10 background_interval_ended #8 event_type|11 background_interval_interrupted #9 event_type|12 background_interval_errored #10 event_type",
            Qe,
            je,
            Ge,
            ze,
            We,
            Ke,
            He,
            Ye,
            Ze,
            Xe,
            et
        ];
    }
}
var $e = (0, l.QT)(n.proto3, u, "BugBotEvent.BackgroundIntervalInterruptedReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DISABLED"
    ],
    [
        2,
        "TOO_RECENT"
    ],
    [
        3,
        "UNVIEWED_BUG_REPORTS"
    ],
    [
        4,
        "NOT_IN_GIT_REPO"
    ],
    [
        5,
        "DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH"
    ],
    [
        6,
        "NO_GIT_USER"
    ],
    [
        7,
        "NO_LAST_COMMIT"
    ],
    [
        8,
        "LAST_COMMIT_NOT_MADE_BY_USER"
    ],
    [
        9,
        "LAST_COMMIT_TOO_OLD"
    ],
    [
        10,
        "DIFF_TOO_LONG"
    ],
    [
        11,
        "DIFF_TOO_SHORT"
    ],
    [
        12,
        "TELEMETRY_UNHEALTHY"
    ]
], 1);
class Qe extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "BugBotEvent.Started"
        ];
    }
}
class je extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "BugBotEvent.ReportsGenerated|1 bug_reports #0",
            c.gl
        ];
    }
}
class Ge extends d {
    constructor(e){
        super(), this.bugReportId = "", n.proto3.util.initPartial(e, this);
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
            "BugBotEvent.PressedFixInComposer|1 bug_report_id 9"
        ];
    }
}
class He extends d {
    constructor(e){
        super(), this.bugReportId = "", n.proto3.util.initPartial(e, this);
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
            "BugBotEvent.PressedAddToChat|1 bug_report_id 9"
        ];
    }
}
class ze extends d {
    constructor(e){
        super(), this.bugReportId = "", n.proto3.util.initPartial(e, this);
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
            "BugBotEvent.PressedOpenInEditor|1 bug_location #0|2 bug_report_id 9",
            c.Cr
        ];
    }
}
class We extends d {
    constructor(e){
        super(), this.secondsViewed = 0, this.reportViews = [], n.proto3.util.initPartial(e, this);
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
            "BugBotEvent.ViewedReport|1 seconds_viewed 5|2 report_views #0*",
            Ve
        ];
    }
}
class Ve extends d {
    constructor(e){
        super(), this.bugReportId = "", this.viewPercentage = 0, this.textPercentage = 0, n.proto3.util.initPartial(e, this);
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
            "BugBotEvent.ViewedReport.ReportView|1 bug_report_id 9|2 view_percentage 1|3 text_percentage 1"
        ];
    }
}
class Ke extends d {
    constructor(e){
        super(), this.bugReportId = "", this.feedback = "", n.proto3.util.initPartial(e, this);
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
            "BugBotEvent.UserFeedback|1 bug_report_id 9|2 feedback 9"
        ];
    }
}
class Ye extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "BugBotEvent.BackgroundIntervalStarted"
        ];
    }
}
class Ze extends d {
    constructor(e){
        super(), this.success = !1, n.proto3.util.initPartial(e, this);
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
            "BugBotEvent.BackgroundIntervalEnded|1 success 8"
        ];
    }
}
class Xe extends d {
    constructor(e){
        super(), this.reason = $e.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "BugBotEvent.BackgroundIntervalInterrupted|1 reason #0",
            $e
        ];
    }
}
class et extends d {
    constructor(e){
        super(), this.errorMessage = "", n.proto3.util.initPartial(e, this);
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
            "BugBotEvent.BackgroundIntervalErrored|1 error_message 9"
        ];
    }
}
class tt extends d {
    constructor(e){
        super(), this.requestType = rt.UNSPECIFIED, this.requestId = "", this.source = nt.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "AiRequestEvent|1 request_type #0|2 request_id 9|3 source #1",
            rt,
            nt
        ];
    }
}
var rt = (0, l.QT)(n.proto3, u, "AiRequestEvent.RequestType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "START"
    ],
    [
        2,
        "END"
    ]
], 1), nt = (0, l.QT)(n.proto3, u, "AiRequestEvent.Source", [
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
        "CMDK"
    ],
    [
        3,
        "APPLY"
    ],
    [
        4,
        "COMPOSER"
    ],
    [
        5,
        "TASK"
    ],
    [
        6,
        "CODE_INTERPRETER"
    ],
    [
        7,
        "INTERPRETER_EXECUTION"
    ],
    [
        8,
        "BUGBOT"
    ]
], 1);
class st extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ModelOpenedEvent|1 point_in_time_model #0|2 maybe_defined_point_in_time_model #1",
            ie,
            oe
        ];
    }
}
class ot extends d {
    constructor(e){
        super(), this.files = [], n.proto3.util.initPartial(e, this);
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
            "BackgroundFilesEvent|2 files #0*",
            it
        ];
    }
}
class it extends d {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.contents = "", this.hash = "", this.fullPath = "", n.proto3.util.initPartial(e, this);
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
            "BackgroundFilesEvent.BackgroundFile|1 relative_workspace_path 9|2 contents 9|3 hash 9|4 full_path 9"
        ];
    }
}
class at extends d {
    constructor(e){
        super(), this.visibleRanges = [], this.editorId = "", n.proto3.util.initPartial(e, this);
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
            "ScrollEvent|1 point_in_time_model #0|2 visible_ranges #1*|3 editor_id 9",
            ie,
            L
        ];
    }
}
class ct extends d {
    constructor(e){
        super(), this.editorId = "", n.proto3.util.initPartial(e, this);
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
            "EditorCloseEvent|1 editor_id 9"
        ];
    }
}
class lt extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new lt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new lt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new lt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(lt, e, t);
    }
    static $() {
        return [
            "TabCloseEvent|1 point_in_time_model #0",
            oe
        ];
    }
}
class ut extends d {
    constructor(e){
        super(), this.fullUri = "", this.modelId = "", this.uriScheme = "", this.isTooLargeForSyncing = !1, this.isTooLargeForTokenization = !1, this.isTooLargeForHeapOperation = !1, n.proto3.util.initPartial(e, this);
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
            "ModelAddedEvent|1 point_in_time_model #0|2 full_uri 9|3 model_id 9|4 uri_scheme 9|5 is_too_large_for_syncing 8|6 is_too_large_for_tokenization 8|7 is_too_large_for_heap_operation 8",
            oe
        ];
    }
}
class dt extends d {
    constructor(e){
        super(), this.item = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "AnythingQuickAccessItem|1 resource #0 item|2 separator 9 item|3 section 9 item",
            pt
        ];
    }
}
class pt extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new pt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new pt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new pt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(pt, e, t);
    }
    static $() {
        return [
            "AnythingQuickAccessItem.Resource|1 model #0?|2 range #1?|3 uri 9?",
            ie,
            L
        ];
    }
}
class mt extends d {
    constructor(e){
        super(), this.query = "", this.items = [], this.selectedIndices = [], n.proto3.util.initPartial(e, this);
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
            "AnythingQuickAccessSelectionEvent|1 query 9|2 items #0*|3 selected_indices 5*",
            dt
        ];
    }
}
class ht extends d {
    constructor(e){
        super(), this.suggestions = [], n.proto3.util.initPartial(e, this);
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
            "LspSuggestionEvent|1 suggestions 9*|2 request_id 9?|3 editor_id 9?|4 point_in_time_model #0",
            ie
        ];
    }
}
class ft extends d {
    constructor(e){
        super(), this.event = {
            case: void 0
        }, this.performanceNowTimestamp = 0, n.proto3.util.initPartial(e, this);
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
            "CppSessionEvent|2 accept_event #0 event|3 reject_event #1 event|4 manual_trigger_event #2 event|6 stopped_tracking_model_event #3 event|7 suggest_event #4 event|8 linter_error_event #5 event|9 debounced_cursor_movement_event #6 event|10 editor_changed_event #7 event|11 copy_event #8 event|13 quick_action_event #9 event|14 quick_action_fire_event #10 event|15 model_opened_event #11 event|17 cmd_k_event #12 event|18 chat_event #13 event|19 ai_event #14 event|21 scroll_event #15 event|22 editor_close_event #16 event|23 tab_close_event #17 event|33 model_added_event #18 event|26 partial_accept_event #19 event|27 accept_cursor_prediction_event #20 event|28 reject_cursor_prediction_event #21 event|29 suggest_cursor_prediction_event #22 event|30 cpp_trigger_event #23 event|31 finished_cpp_generation_event #24 event|32 bug_bot_event #25 event|34 bug_bot_linter_event #26 event|35 anything_quick_access_selection_event #27 event|36 lsp_suggestion_event #28 event|37 ntp_event #29 event|38 repo_event #30 event|39 git_event #31 event|40 tool_call_event #32 event|46 before_ai_edit_event #33 event|47 search_event #34 event|48 terminal_event #35 event|49 worktree_event #36 event|50 review_changes_opened_event #37 event|51 browser_event #38 event|16 background_files_event #39 event|5 performance_now_timestamp 1|25 performance_time_origin 1?|41 global_index 3?|42 performance_now_flush_time 1?|43 event_index 5?|44 flush_index 5?|45 global_index_v2 5?",
            H,
            Y,
            ae,
            ce,
            W,
            ue,
            de,
            pe,
            me,
            ye,
            we,
            st,
            ve,
            xe,
            tt,
            at,
            ct,
            lt,
            ut,
            X,
            ne,
            se,
            re,
            V,
            K,
            Le,
            Pe,
            mt,
            ht,
            Qt,
            jt,
            Ht,
            Xt,
            gt,
            rr,
            Pt,
            Wt,
            Zt,
            Ot,
            ot
        ];
    }
}
class gt extends d {
    constructor(e){
        super(), this.model = {
            case: void 0
        }, this.toolCallId = "", n.proto3.util.initPartial(e, this);
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
            "BeforeAiEditEvent|1 point_in_time_model #0 model|5 relative_workspace_path 9 model|2 tool_call_id 9|3 request_id 9?|4 tool_name 9?",
            ie
        ];
    }
}
class yt extends d {
    constructor(e){
        super(), this.changes = new Uint8Array(0), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new yt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new yt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new yt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(yt, e, t);
    }
    static $() {
        return [
            "CppAppendRequest|1 changes 12"
        ];
    }
}
class wt extends d {
    constructor(e){
        super(), this.success = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new wt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new wt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new wt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(wt, e, t);
    }
    static $() {
        return [
            "CppAppendResponse|1 success 8"
        ];
    }
}
class vt extends d {
    constructor(e){
        super(), this.sessionId = "", this.modelUuid = "", this.relativePath = "", this.uri = "", this.clientVersion = "", this.changes = [], this.sessionEvents = [], this.modelChangesMayBeOutOfOrder = !1, this.privacyModeStatus = _t.UNSPECIFIED, this.events = [], this.timeOrigin = 0, n.proto3.util.initPartial(e, this);
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
            "EditHistoryAppendChangesRequest|1 session_id 9|2 model_uuid 9|3 starting_model_value 9?|10 starting_model_version 5?|5 relative_path 9|14 uri 9|6 client_version 9|8 client_commit 9?|4 changes #0*|9 session_events #1*|11 model_changes_may_be_out_of_order 8|12 privacy_mode_status #2|7 events #3*|13 time_origin 2",
            j,
            ft,
            _t,
            kt
        ];
    }
}
var _t = (0, l.QT)(n.proto3, u, "EditHistoryAppendChangesRequest.PrivacyModeStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PRIVACY_ENABLED"
    ],
    [
        2,
        "IMPLICIT_NO_PRIVACY"
    ],
    [
        3,
        "EXPLICIT_NO_PRIVACY"
    ]
], 1);
class At extends d {
    constructor(e){
        super(), this.success = !1, n.proto3.util.initPartial(e, this);
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
            "EditHistoryAppendChangesResponse|1 success 8"
        ];
    }
}
class St extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new St).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new St).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new St).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(St, e, t);
    }
    static $() {
        return [
            "CppEditHistoryStatusRequest"
        ];
    }
}
class bt extends d {
    constructor(e){
        super(), this.on = !1, this.onlyIfExplicit = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new bt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new bt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new bt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(bt, e, t);
    }
    static $() {
        return [
            "CppEditHistoryStatusResponse|1 on 8|2 only_if_explicit 8"
        ];
    }
}
class Et extends d {
    constructor(e){
        super(), this.changes = [], this.relativePath = "", this.modelUuid = "", this.startFromChangeIndex = 0, n.proto3.util.initPartial(e, this);
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
            "BlockDiffPatch|1 start_model_window #0|3 changes #1*|4 relative_path 9|7 model_uuid 9|5 start_from_change_index 5",
            Ct,
            It
        ];
    }
}
class It extends d {
    constructor(e){
        super(), this.text = "", n.proto3.util.initPartial(e, this);
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
            "BlockDiffPatch.Change|1 text 9|2 range #0",
            L
        ];
    }
}
class Ct extends d {
    constructor(e){
        super(), this.lines = [], this.startLineNumber = 0, this.endLineNumber = 0, n.proto3.util.initPartial(e, this);
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
            "BlockDiffPatch.ModelWindow|1 lines 9*|2 start_line_number 5|3 end_line_number 5"
        ];
    }
}
class kt extends d {
    constructor(e){
        super(), this.event = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "CppHistoryAppendEvent|1 model_change #0 event|2 accept_event #1 event|3 reject_event #2 event|4 manual_trigger_event #3 event|10 final_model_hash 9?",
            j,
            Tt,
            Rt,
            xt
        ];
    }
}
class xt extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "CppManualTriggerEvent|2 position #0",
            s.CursorPosition
        ];
    }
}
class Tt extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "CppAcceptEvent|1 cpp_suggestion #0",
            Bt
        ];
    }
}
class Rt extends d {
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
            "CppRejectEvent|1 cpp_suggestion #0",
            Bt
        ];
    }
}
class Bt extends d {
    constructor(e){
        super(), this.suggestionText = "", this.seen = !1, n.proto3.util.initPartial(e, this);
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
            "CppSuggestion|1 suggestion_text 9|2 range #0|5 seen 8|6 editor_selection_before_peek #1|7 binding_id 9?",
            L,
            s.SelectionWithOrientation
        ];
    }
}
n.proto3;
class Pt extends d {
    constructor(e){
        super(), this.uri = "", this.event = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "TerminalEvent|1 uri 9|2 create #0 event|3 exit #1 event|4 command_start #2 event|5 command_finish #3 event",
            Jt,
            Mt,
            qt,
            Dt
        ];
    }
}
class Jt extends d {
    constructor(e){
        super(), this.isRemote = !1, n.proto3.util.initPartial(e, this);
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
            "TerminalEvent.Create|1 is_remote 8"
        ];
    }
}
class Mt extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "TerminalEvent.Exit|1 exit_code 5?"
        ];
    }
}
class qt extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "TerminalEvent.CommandStart|1 point_in_time_model #0|2 cwd 9?",
            ie
        ];
    }
}
class Dt extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "TerminalEvent.CommandFinish|1 point_in_time_model #0|2 exit_code 5?",
            ie
        ];
    }
}
class Ot extends d {
    constructor(e){
        super(), this.viewId = "", this.event = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "BrowserEvent|1 view_id 9|2 tab_created #0 event|3 tab_closed #1 event|4 navigation #2 event|5 tool_action #3 event",
            Nt,
            Ft,
            Ut,
            Lt
        ];
    }
}
class Nt extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "BrowserEvent.TabCreated"
        ];
    }
}
class Ft extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "BrowserEvent.TabClosed"
        ];
    }
}
class Ut extends d {
    constructor(e){
        super(), this.url = "", n.proto3.util.initPartial(e, this);
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
            "BrowserEvent.Navigation|1 url 9|2 title 9?"
        ];
    }
}
class Lt extends d {
    constructor(e){
        super(), this.toolName = "", this.argsJson = "", this.source = $t.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "BrowserEvent.ToolAction|1 tool_name 9|2 args_json 9|3 success 8?|4 post_snapshot_yaml 9?|5 post_url 9?|6 post_title 9?|7 source #0",
            $t
        ];
    }
}
var $t = (0, l.QT)(n.proto3, u, "BrowserEvent.ToolAction.Source", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "MCP_TOOL"
    ],
    [
        2,
        "MANUAL_USER"
    ]
], 1);
class Qt extends d {
    constructor(e){
        super(), this.originateTimestamp = 0, this.receiveTimestamp = 0, this.transmitTimestamp = 0, this.destinationTimestamp = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Qt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Qt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Qt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Qt, e, t);
    }
    static $() {
        return [
            "NtpEvent|1 originate_timestamp 1|2 receive_timestamp 1|3 transmit_timestamp 1|4 destination_timestamp 1"
        ];
    }
}
class jt extends d {
    constructor(e){
        super(), this.repoOwner = "", this.repoName = "", this.eventType = Gt.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new jt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new jt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new jt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(jt, e, t);
    }
    static $() {
        return [
            "RepoEvent|1 repo_owner 9|2 repo_name 9|3 event_type #0",
            Gt
        ];
    }
}
var Gt = (0, l.QT)(n.proto3, u, "RepoEvent.Type", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SYNCED"
    ],
    [
        2,
        "LOADING"
    ],
    [
        3,
        "INDEXING_SETUP"
    ],
    [
        4,
        "INDEXING_INIT_FROM_SIMILAR_CODEBASE"
    ],
    [
        5,
        "PAUSED"
    ],
    [
        6,
        "INDEXING"
    ],
    [
        7,
        "ERROR"
    ],
    [
        8,
        "NOT_AUTO_INDEXING"
    ],
    [
        9,
        "NOT_INDEXED"
    ]
], 1);
class Ht extends d {
    constructor(e){
        super(), this.operationType = zt.UNSPECIFIED, this.repositoryPath = "", this.operationSuccess = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ht).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ht).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ht).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ht, e, t);
    }
    static $() {
        return [
            "GitEvent|1 operation_type #0|2 repository_path 9|3 operation_success 8|4 branch_name 9?|5 error_message 9?|6 is_default_branch 8?|7 default_branch_name 9?|8 commit_hash 9?|9 previous_commit_hash 9?|10 remote_url 9?",
            zt
        ];
    }
}
var zt = (0, l.QT)(n.proto3, u, "GitEvent.OperationType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "COMMIT"
    ],
    [
        2,
        "CHECKOUT"
    ],
    [
        3,
        "PULL"
    ],
    [
        4,
        "FETCH"
    ],
    [
        5,
        "MERGE"
    ],
    [
        6,
        "REBASE"
    ],
    [
        7,
        "STASH"
    ],
    [
        8,
        "BRANCH"
    ],
    [
        9,
        "TAG"
    ]
], 1);
class Wt extends d {
    constructor(e){
        super(), this.eventType = Vt.UNSPECIFIED, this.allWorktreePaths = [], this.worktreeComposerMappings = [], this.backgroundAgentComposerMappings = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Wt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Wt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Wt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Wt, e, t);
    }
    static $() {
        return [
            "WorktreeEvent|1 event_type #0|2 model_name 9?|3 best_of_n_group_id 9?|4 all_worktree_paths 9*|5 applied_worktree_path 9?|6 worktree_composer_mappings #1*|7 background_agent_composer_mappings #2*|8 applied_composer_id 9?|9 viewed_composer_id 9?",
            Vt,
            Kt,
            Yt
        ];
    }
}
var Vt = (0, l.QT)(n.proto3, u, "WorktreeEvent.EventType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "APPLY_TO_MAIN"
    ],
    [
        2,
        "UNDO_APPLY"
    ],
    [
        3,
        "VIEW_SUBCOMPOSER"
    ]
], 1);
class Kt extends d {
    constructor(e){
        super(), this.worktreePath = "", this.composerId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Kt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Kt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Kt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Kt, e, t);
    }
    static $() {
        return [
            "WorktreeEvent.WorktreeComposerMapping|1 worktree_path 9|2 composer_id 9"
        ];
    }
}
class Yt extends d {
    constructor(e){
        super(), this.bcId = "", this.composerId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Yt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Yt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Yt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Yt, e, t);
    }
    static $() {
        return [
            "WorktreeEvent.BackgroundAgentComposerMapping|1 bc_id 9|2 composer_id 9"
        ];
    }
}
class Zt extends d {
    constructor(e){
        super(), this.composerId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Zt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Zt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Zt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Zt, e, t);
    }
    static $() {
        return [
            "ReviewChangesOpenedEvent|1 composer_id 9|2 best_of_n_group_id 9?"
        ];
    }
}
class Xt extends d {
    constructor(e){
        super(), this.toolCallId = "", this.requestId = "", this.toolName = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Xt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Xt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Xt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Xt, e, t);
    }
    static $() {
        return [
            "ToolCallEvent|1 tool_call_id 9|2 request_id 9|3 tool_name 9"
        ];
    }
}
class er extends d {
    constructor(e){
        super(), this.lineNumber = 0, this.column = 0, this.matchText = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new er).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new er).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new er).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(er, e, t);
    }
    static $() {
        return [
            "SearchMatch|1 line_number 5|2 column 5|3 match_text 9"
        ];
    }
}
class tr extends d {
    constructor(e){
        super(), this.filePath = "", this.matchCount = 0, this.matches = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new tr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new tr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new tr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(tr, e, t);
    }
    static $() {
        return [
            "SearchResultFile|1 file_path 9|2 match_count 5|3 matches #0*",
            er
        ];
    }
}
class rr extends d {
    constructor(e){
        super(), this.query = "", this.resultCount = 0, this.fileCount = 0, this.isRegex = !1, this.isCaseSensitive = !1, this.isWholeWord = !1, this.durationMs = 0, this.results = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new rr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new rr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new rr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(rr, e, t);
    }
    static $() {
        return [
            "SearchEvent|1 query 9|2 result_count 5|3 file_count 5|4 is_regex 8|5 is_case_sensitive 8|6 is_whole_word 8|7 files_to_include 9?|8 files_to_exclude 9?|9 duration_ms 5|10 results #0*",
            tr
        ];
    }
}
