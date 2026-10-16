"use strict";
require.d(exports, {
    $PL: ()=>ce,
    $rP: ()=>Kn,
    AUe: ()=>N,
    Dm_: ()=>ct,
    Faf: ()=>F,
    I8K: ()=>lt,
    KRm: ()=>K,
    MtQ: ()=>P,
    PfC: ()=>S,
    TE4: ()=>M,
    Ue3: ()=>J,
    WtZ: ()=>Cs,
    XaY: ()=>_,
    bR2: ()=>U,
    kWq: ()=>Ln,
    q20: ()=>Ir,
    tze: ()=>Ts
});
var n = require("./module-36038.js"), s = require("./module-67918.js"), o = require("./module-44498.js"), i = require("./module-11531.js"), a = require("./module-85814.js"), c = require("./module-97747.js"), l = require("./module-75178.js"), u = require("./module-4067.js"), d = require("./module-13574.js"), p = require("./module-62671.js"), m = require("./module-11491.js"), h = require("./module-72730.js"), f = require("./module-43643.js"), g = require("./module-60867.js"), y = require("./module-8592.js");
const w = "aiserver.v1.";
class v extends y.HL {
    static get runtime() {
        return (0, y.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return w;
    }
}
var _ = (0, y.QT)(n.proto3, w, "ClientSideToolV2", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "READ_SEMSEARCH_FILES"
    ],
    [
        3,
        "RIPGREP_SEARCH"
    ],
    [
        5,
        "READ_FILE"
    ],
    [
        6,
        "LIST_DIR"
    ],
    [
        7,
        "EDIT_FILE"
    ],
    [
        8,
        "FILE_SEARCH"
    ],
    [
        9,
        "SEMANTIC_SEARCH_FULL"
    ],
    [
        11,
        "DELETE_FILE"
    ],
    [
        12,
        "REAPPLY"
    ],
    [
        15,
        "RUN_TERMINAL_COMMAND_V2"
    ],
    [
        16,
        "FETCH_RULES"
    ],
    [
        18,
        "WEB_SEARCH"
    ],
    [
        19,
        "MCP"
    ],
    [
        23,
        "SEARCH_SYMBOLS"
    ],
    [
        24,
        "BACKGROUND_COMPOSER_FOLLOWUP"
    ],
    [
        25,
        "KNOWLEDGE_BASE"
    ],
    [
        26,
        "FETCH_PULL_REQUEST"
    ],
    [
        27,
        "DEEP_SEARCH"
    ],
    [
        28,
        "CREATE_DIAGRAM"
    ],
    [
        29,
        "FIX_LINTS"
    ],
    [
        30,
        "READ_LINTS"
    ],
    [
        31,
        "GO_TO_DEFINITION"
    ],
    [
        32,
        "TASK"
    ],
    [
        33,
        "AWAIT_TASK"
    ],
    [
        34,
        "TODO_READ"
    ],
    [
        35,
        "TODO_WRITE"
    ],
    [
        38,
        "EDIT_FILE_V2"
    ],
    [
        39,
        "LIST_DIR_V2"
    ],
    [
        40,
        "READ_FILE_V2"
    ],
    [
        41,
        "RIPGREP_RAW_SEARCH"
    ],
    [
        42,
        "GLOB_FILE_SEARCH"
    ],
    [
        43,
        "CREATE_PLAN"
    ],
    [
        44,
        "LIST_MCP_RESOURCES"
    ],
    [
        45,
        "READ_MCP_RESOURCE"
    ],
    [
        46,
        "READ_PROJECT"
    ],
    [
        47,
        "UPDATE_PROJECT"
    ],
    [
        48,
        "TASK_V2"
    ],
    [
        49,
        "CALL_MCP_TOOL"
    ],
    [
        50,
        "APPLY_AGENT_DIFF"
    ],
    [
        51,
        "ASK_QUESTION"
    ],
    [
        52,
        "SWITCH_MODE"
    ],
    [
        53,
        "GENERATE_IMAGE"
    ],
    [
        54,
        "COMPUTER_USE"
    ],
    [
        55,
        "WRITE_SHELL_STDIN"
    ],
    [
        56,
        "RECORD_SCREEN"
    ],
    [
        57,
        "WEB_FETCH"
    ],
    [
        58,
        "REPORT_BUGFIX_RESULTS"
    ],
    [
        59,
        "AI_ATTRIBUTION"
    ],
    [
        60,
        "MCP_AUTH"
    ],
    [
        61,
        "REFLECT"
    ],
    [
        62,
        "AWAIT"
    ],
    [
        63,
        "GET_MCP_TOOLS"
    ],
    [
        65,
        "SEND_TO_USER"
    ],
    [
        66,
        "CONNECT_SCM"
    ]
], 1), b = (0, y.QT)(n.proto3, w, "BuiltinTool", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SEARCH"
    ],
    [
        2,
        "READ_CHUNK"
    ],
    [
        3,
        "GOTODEF"
    ],
    [
        4,
        "EDIT"
    ],
    [
        5,
        "UNDO_EDIT"
    ],
    [
        6,
        "END"
    ],
    [
        7,
        "NEW_FILE"
    ],
    [
        8,
        "ADD_TEST"
    ],
    [
        9,
        "RUN_TEST"
    ],
    [
        10,
        "DELETE_TEST"
    ],
    [
        11,
        "SAVE_FILE"
    ],
    [
        12,
        "GET_TESTS"
    ],
    [
        13,
        "GET_SYMBOLS"
    ],
    [
        14,
        "SEMANTIC_SEARCH"
    ],
    [
        15,
        "GET_PROJECT_STRUCTURE"
    ],
    [
        16,
        "CREATE_RM_FILES"
    ],
    [
        17,
        "RUN_TERMINAL_COMMANDS"
    ],
    [
        18,
        "NEW_EDIT"
    ],
    [
        19,
        "READ_WITH_LINTER"
    ]
], 1), S = (0, y.QT)(n.proto3, w, "RunTerminalCommandEndedReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "EXECUTION_COMPLETED"
    ],
    [
        2,
        "EXECUTION_ABORTED"
    ],
    [
        3,
        "EXECUTION_FAILED"
    ],
    [
        4,
        "ERROR_OCCURRED_CHECKING_REASON"
    ],
    [
        5,
        "IDLE_TIMEOUT"
    ]
], 1);
class k extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e, this);
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
            "ReapplyParams|1 relative_workspace_path 9"
        ];
    }
}
class x extends v {
    constructor(e){
        super(), this.agentId = "", n.proto3.util.initPartial(e, this);
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
            "ApplyAgentDiffParams|1 agent_id 9"
        ];
    }
}
class E extends v {
    constructor(e){
        super(), this.isApplied = !1, this.applyFailed = !1, this.linterErrors = [], n.proto3.util.initPartial(e, this);
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
            "ReapplyResult|1 diff #0|2 is_applied 8|3 apply_failed 8|4 linter_errors #1*|5 rejected 8?",
            K,
            s.bO
        ];
    }
}
class I extends v {
    constructor(e){
        super(), this.ruleNames = [], n.proto3.util.initPartial(e, this);
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
            "FetchRulesParams|1 rule_names 9*"
        ];
    }
}
class T extends v {
    constructor(e){
        super(), this.rules = [], n.proto3.util.initPartial(e, this);
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
            "FetchRulesResult|1 rules #0*",
            s.DX
        ];
    }
}
class C extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ReapplyStream"
        ];
    }
}
class P extends v {
    constructor(e){
        super(), this.clientVisibleErrorMessage = "", this.modelVisibleErrorMessage = "", this.errorDetails = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "ToolResultError|1 client_visible_error_message 9|2 model_visible_error_message 9|3 actual_error_message_only_send_from_client_to_server_never_the_other_way_around_because_that_may_be_a_security_risk 9?|5 edit_file_error_details #0 error_details|6 search_replace_error_details #1 error_details",
            A,
            R
        ];
    }
}
class A extends v {
    constructor(e){
        super(), this.numLinesInFileBeforeEdit = 0, n.proto3.util.initPartial(e, this);
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
            "ToolResultError.EditFileError|1 num_lines_in_file_before_edit 5"
        ];
    }
}
class R extends v {
    constructor(e){
        super(), this.numLinesInFileBeforeEdit = 0, n.proto3.util.initPartial(e, this);
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
            "ToolResultError.SearchReplaceError|1 num_lines_in_file_before_edit 5"
        ];
    }
}
class M extends v {
    constructor(e){
        super(), this.tool = _.UNSPECIFIED, this.params = {
            case: void 0
        }, this.toolCallId = "", this.name = "", this.isStreaming = !1, this.isLastMessage = !1, this.internal = !1, this.rawArgs = "", n.proto3.util.initPartial(e, this);
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
            "ClientSideToolV2Call|1 tool #0|2 read_semsearch_files_params #1 params|5 ripgrep_search_params #2 params|8 read_file_params #3 params|12 list_dir_params #4 params|13 edit_file_params #5 params|16 file_search_params #6 params|17 semantic_search_full_params #7 params|19 delete_file_params #8 params|20 reapply_params #9 params|23 run_terminal_command_v2_params #10 params|24 fetch_rules_params #11 params|26 web_search_params #12 params|27 mcp_params #13 params|31 search_symbols_params #14 params|41 gotodef_params #15 params|32 background_composer_followup_params #16 params|33 knowledge_base_params #17 params|34 fetch_pull_request_params #18 params|35 deep_search_params #19 params|36 create_diagram_params #20 params|37 fix_lints_params #21 params|38 read_lints_params #22 params|42 task_params #23 params|43 await_task_params #24 params|44 todo_read_params #25 params|45 todo_write_params #26 params|50 edit_file_v2_params #27 params|52 list_dir_v2_params #28 params|53 read_file_v2_params #29 params|54 ripgrep_raw_search_params #30 params|55 glob_file_search_params #31 params|56 create_plan_params #32 params|57 list_mcp_resources_params #33 params|58 read_mcp_resource_params #34 params|59 read_project_params #35 params|60 update_project_params #36 params|61 task_v2_params #37 params|62 call_mcp_tool_params #38 params|63 apply_agent_diff_params #39 params|64 ask_question_params #40 params|65 switch_mode_params #41 params|66 computer_use_params #42 params|67 write_shell_stdin_params #43 params|68 record_screen_params #44 params|69 web_fetch_params #45 params|70 report_bugfix_results_params #46 params|71 mcp_auth_params #47 params|72 get_mcp_tools_params #48 params|73 connect_scm_params #49 params|3 tool_call_id 9|6 timeout_ms 1?|9 name 9|14 is_streaming 8|15 is_last_message 8|51 internal 8|10 raw_args 9|48 tool_index 13?|49 model_call_id 9?",
            _,
            je,
            he,
            de,
            ae,
            W,
            ne,
            Ye,
            Ze,
            k,
            fr,
            I,
            br,
            Er,
            Fr,
            Nt,
            jr,
            Wr,
            Vr,
            en,
            nn,
            an,
            dn,
            fn,
            Dn,
            Un,
            Gn,
            L,
            Hn,
            Xn,
            kn,
            ts,
            ds,
            Ar,
            Jr,
            ys,
            bs,
            _n,
            Br,
            x,
            xs,
            As,
            Js,
            o.LL,
            i.zH,
            qs,
            Us,
            js,
            qr,
            Ws
        ];
    }
}
class J extends v {
    constructor(e){
        super(), this.tool = _.UNSPECIFIED, this.result = {
            case: void 0
        }, this.toolCallId = "", n.proto3.util.initPartial(e, this);
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
            "ClientSideToolV2Result|1 tool #0|2 read_semsearch_files_result #1 result|4 ripgrep_search_result #2 result|6 read_file_result #3 result|9 list_dir_result #4 result|10 edit_file_result #5 result|11 file_search_result #6 result|18 semantic_search_full_result #7 result|20 delete_file_result #8 result|21 reapply_result #9 result|24 run_terminal_command_v2_result #10 result|25 fetch_rules_result #11 result|27 web_search_result #12 result|28 mcp_result #13 result|32 search_symbols_result #14 result|33 background_composer_followup_result #15 result|34 knowledge_base_result #16 result|36 fetch_pull_request_result #17 result|37 deep_search_result #18 result|38 create_diagram_result #19 result|39 fix_lints_result #20 result|40 read_lints_result #21 result|41 gotodef_result #22 result|42 task_result #23 result|43 await_task_result #24 result|44 todo_read_result #25 result|45 todo_write_result #26 result|51 edit_file_v2_result #27 result|52 list_dir_v2_result #28 result|53 read_file_v2_result #29 result|54 ripgrep_raw_search_result #30 result|55 glob_file_search_result #31 result|56 create_plan_result #32 result|57 list_mcp_resources_result #33 result|58 read_mcp_resource_result #34 result|59 read_project_result #35 result|60 update_project_result #36 result|61 task_v2_result #37 result|62 call_mcp_tool_result #38 result|63 apply_agent_diff_result #39 result|64 ask_question_result #40 result|65 switch_mode_result #41 result|66 computer_use_result #42 result|67 generate_image_result #43 result|68 write_shell_stdin_result #44 result|69 record_screen_result #45 result|70 web_fetch_result #46 result|71 report_bugfix_results_result #47 result|72 ai_attribution_result #48 result|73 mcp_auth_result #49 result|74 get_mcp_tools_result #50 result|75 connect_scm_result #51 result|35 tool_call_id 9|8 error #52?|48 model_call_id 9?|49 tool_index 13?|50 attachments #53?",
            _,
            Ke,
            xe,
            pe,
            ce,
            H,
            oe,
            Qe,
            et,
            E,
            wr,
            T,
            Sr,
            Cr,
            Ur,
            Gr,
            Hr,
            Yr,
            tn,
            sn,
            cn,
            pn,
            Ut,
            gn,
            qn,
            $n,
            zn,
            G,
            Kn,
            Zn,
            xn,
            rs,
            ps,
            Rr,
            Or,
            ws,
            Ss,
            bn,
            Dr,
            a.y$,
            Ts,
            Rs,
            Os,
            c.k4,
            o.nt,
            i.Tj,
            Ns,
            Ls,
            l.Zc,
            Gs,
            Nr,
            Vs,
            P,
            B
        ];
    }
}
class O extends v {
    constructor(e){
        super(), this.rawMessage = "", n.proto3.util.initPartial(e, this);
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
            "NudgeMessage|1 raw_message 9"
        ];
    }
}
class B extends v {
    constructor(e){
        super(), this.originalTodos = [], this.updatedTodos = [], this.nudgeMessages = [], this.shouldShowTodoWriteReminder = !1, this.todoReminderType = D.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "ToolResultAttachments|1 original_todos #0*|2 updated_todos #0*|3 nudge_messages #1*|4 should_show_todo_write_reminder 8|5 todo_reminder_type #2|6 discovery_budget_reminder #3?",
            Ln,
            O,
            D,
            q
        ];
    }
}
var D = (0, y.QT)(n.proto3, w, "ToolResultAttachments.TodoReminderType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "EVERY_10_TURNS"
    ],
    [
        2,
        "AFTER_EDIT"
    ]
], 1);
class q extends v {
    constructor(e){
        super(), this.discoveryRoundsRemaining = 0, n.proto3.util.initPartial(e, this);
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
            "ToolResultAttachments.DiscoveryBudgetReminder|1 discovery_rounds_remaining 5|2 discovery_effort 9?"
        ];
    }
}
class N extends v {
    constructor(e){
        super(), this.tool = _.UNSPECIFIED, this.toolCallId = "", this.name = "", n.proto3.util.initPartial(e, this);
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
            "StreamedBackPartialToolCall|1 tool #0|2 tool_call_id 9|3 name 9|4 tool_index 13?|5 model_call_id 9?",
            _
        ];
    }
}
class F extends v {
    constructor(e){
        super(), this.tool = _.UNSPECIFIED, this.toolCallId = "", this.params = {
            case: void 0
        }, this.name = "", this.rawArgs = "", n.proto3.util.initPartial(e, this);
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
            "StreamedBackToolCall|1 tool #0|2 tool_call_id 9|3 read_semsearch_files_stream #1 params|5 ripgrep_search_stream #2 params|7 read_file_stream #3 params|12 list_dir_stream #4 params|13 edit_file_stream #5 params|14 file_search_stream #6 params|19 semantic_search_full_stream #7 params|21 delete_file_stream #8 params|22 reapply_stream #9 params|25 run_terminal_command_v2_stream #10 params|26 fetch_rules_stream #11 params|28 web_search_stream #12 params|29 mcp_stream #13 params|33 search_symbols_stream #14 params|41 gotodef_stream #15 params|34 background_composer_followup_stream #16 params|35 knowledge_base_stream #17 params|36 fetch_pull_request_stream #18 params|37 deep_search_stream #19 params|38 create_diagram_stream #20 params|39 fix_lints_stream #21 params|40 read_lints_stream #22 params|42 task_stream #23 params|43 await_task_stream #24 params|44 todo_read_stream #25 params|45 todo_write_stream #26 params|52 edit_file_v2_stream #27 params|53 list_dir_v2_stream #28 params|54 read_file_v2_stream #29 params|55 ripgrep_raw_search_stream #30 params|56 glob_file_search_stream #31 params|57 create_plan_stream #32 params|58 list_mcp_resources_stream #33 params|59 read_mcp_resource_stream #34 params|60 read_project_stream #35 params|61 update_project_stream #36 params|62 task_v2_stream #37 params|63 call_mcp_tool_stream #38 params|64 ask_question_stream #39 params|65 switch_mode_stream #40 params|66 computer_use_stream #41 params|67 write_shell_stdin_stream #42 params|68 web_fetch_stream #43 params|69 report_bugfix_results_stream #44 params|70 mcp_auth_stream #45 params|71 connect_scm_stream #46 params|8 name 9|9 raw_args 9|10 error #47?|50 tool_index 13?|51 model_call_id 9?",
            _,
            Ve,
            $e,
            me,
            ue,
            re,
            se,
            Xe,
            tt,
            C,
            vr,
            _r,
            xr,
            Pr,
            $r,
            hn,
            zr,
            Kr,
            Xr,
            rn,
            on,
            un,
            mn,
            vn,
            Fn,
            jn,
            Wn,
            z,
            Qn,
            es,
            Bn,
            os,
            gs,
            is,
            cs,
            vs,
            ks,
            Sn,
            as,
            Ps,
            Ms,
            Bs,
            Ds,
            Fs,
            $s,
            zs,
            Ys,
            P
        ];
    }
}
class U extends v {
    constructor(e){
        super(), this.tool = _.UNSPECIFIED, this.toolCallId = "", this.params = {
            case: void 0
        }, this.name = "", this.rawArgs = "", n.proto3.util.initPartial(e, this);
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
            "StreamedBackToolCallV2|1 tool #0|2 tool_call_id 9|3 read_semsearch_files_params #1 params|5 ripgrep_search_params #2 params|9 read_file_params #3 params|12 list_dir_params #4 params|13 edit_file_params #5 params|16 file_search_params #6 params|17 semantic_search_full_params #7 params|19 delete_file_params #8 params|20 reapply_params #9 params|23 run_terminal_command_v2_params #10 params|24 fetch_rules_params #11 params|26 web_search_params #12 params|27 mcp_params #13 params|31 search_symbols_params #14 params|41 gotodef_params #15 params|32 background_composer_followup_params #16 params|33 knowledge_base_params #17 params|34 fetch_pull_request_params #18 params|35 deep_search_params #19 params|36 create_diagram_params #20 params|37 fix_lints_params #21 params|38 read_lints_params #22 params|42 task_params #23 params|43 await_task_params #24 params|44 todo_read_params #25 params|45 todo_write_params #26 params|48 edit_file_v2_params #27 params|49 list_dir_v2_params #28 params|61 read_file_v2_params #29 params|62 ripgrep_raw_search_params #30 params|63 glob_file_search_params #31 params|64 create_plan_params #32 params|65 list_mcp_resources_params #33 params|66 read_mcp_resource_params #34 params|67 read_project_params #35 params|68 update_project_params #36 params|69 task_v2_params #37 params|70 call_mcp_tool_params #38 params|71 apply_agent_diff_params #39 params|72 ask_question_params #40 params|73 switch_mode_params #41 params|74 computer_use_params #42 params|75 write_shell_stdin_params #43 params|76 record_screen_params #44 params|77 web_fetch_params #45 params|78 report_bugfix_results_params #46 params|79 mcp_auth_params #47 params|80 get_mcp_tools_params #48 params|81 connect_scm_params #49 params|8 name 9|10 raw_args 9|11 error #50?|50 tool_index 13?|51 model_call_id 9?",
            _,
            je,
            he,
            de,
            ae,
            W,
            ne,
            Ye,
            Ze,
            k,
            fr,
            I,
            br,
            Er,
            Fr,
            Nt,
            jr,
            Wr,
            Vr,
            en,
            nn,
            an,
            dn,
            fn,
            Dn,
            Un,
            Gn,
            L,
            Hn,
            Xn,
            kn,
            ts,
            ds,
            Ar,
            Jr,
            ys,
            bs,
            _n,
            Br,
            x,
            xs,
            As,
            Js,
            o.LL,
            i.zH,
            qs,
            Us,
            js,
            qr,
            Ws,
            P
        ];
    }
}
class L extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.streamingEdit = {
            case: void 0
        }, this.shouldSendBackLinterErrors = !1, this.resultForModel = "", n.proto3.util.initPartial(e, this);
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
            "EditFileV2Params|1 relative_workspace_path 9|2 contents_after_edit 9?|3 waiting_for_file_contents 8?|4 text #0 streaming_edit|5 code #1 streaming_edit|6 should_send_back_linter_errors 8|7 diff #2?|8 result_for_model 9|9 streaming_content 9?|10 no_codeblock 8?|11 cloud_agent_edit 8?",
            $,
            j,
            K
        ];
    }
}
class $ extends v {
    constructor(e){
        super(), this.text = "", n.proto3.util.initPartial(e, this);
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
            "EditFileV2Params.StreamingEditText|1 text 9"
        ];
    }
}
class j extends v {
    constructor(e){
        super(), this.code = "", n.proto3.util.initPartial(e, this);
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
            "EditFileV2Params.StreamingEditCode|1 code 9"
        ];
    }
}
class G extends v {
    constructor(e){
        super(), this.fileWasCreated = !1, this.linterErrors = [], this.sentBackLinterErrors = !1, this.shouldAutoFixLints = !1, this.resultForModel = "", this.afterContentId = "", n.proto3.util.initPartial(e, this);
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
            "EditFileV2Result|1 contents_before_edit 9?|9 eol_sequence 9?|11 detected_language 9?|2 file_was_created 8|3 diff #0?|4 rejected 8?|5 linter_errors #1*|6 sent_back_linter_errors 8|8 should_auto_fix_lints 8|7 human_review_v2 #2?|10 result_for_model 9|12 contents_after_edit 9?|13 before_content_id 9?|14 after_content_id 9",
            K,
            s.bO,
            te
        ];
    }
}
class z extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "EditFileV2Stream"
        ];
    }
}
class W extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.language = "", this.blocking = !1, this.contents = "", this.lineRanges = [], n.proto3.util.initPartial(e, this);
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
            "EditFileParams|1 relative_workspace_path 9|2 language 9|4 blocking 8|3 contents 9|5 instructions 9?|12 should_edit_file_fail_for_large_files 8?|6 old_string 9?|7 new_string 9?|8 allow_multiple_matches 8?|10 use_whitespace_insensitive_fallback 8?|11 use_did_you_mean_fuzzy_match 8?|16 gracefully_handle_recoverable_errors 8?|9 line_ranges #0*|13 notebook_cell_idx 5?|14 is_new_cell 8?|15 cell_language 9?|17 edit_category 9?|18 should_eagerly_process_lints 8?",
            s.MT
        ];
    }
}
class H extends v {
    constructor(e){
        super(), this.isApplied = !1, this.applyFailed = !1, this.linterErrors = [], n.proto3.util.initPartial(e, this);
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
            "EditFileResult|1 diff #0|2 is_applied 8|3 apply_failed 8|4 linter_errors #1*|5 rejected 8?|6 num_matches 5?|7 whitespace_insensitive_fallback_found_match 8?|8 no_match_found_in_line_ranges 8?|11 recoverable_error #2?|9 num_lines_in_file 5?|10 is_subagent_edit 8?|12 diff_became_no_op_due_to_on_save_fixes 8?|13 human_review #3?|14 human_feedback #4?|15 should_eagerly_process_lints 8?|16 human_review_v2 #5?|17 were_all_new_linter_errors_resolved_by_this_edit 8?",
            K,
            s.bO,
            Q,
            Z,
            ee,
            te
        ];
    }
}
class K extends v {
    constructor(e){
        super(), this.chunks = [], this.editor = V.UNSPECIFIED, this.hitTimeout = !1, n.proto3.util.initPartial(e, this);
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
            "EditFileResult.FileDiff|1 chunks #0*|2 editor #1|3 hit_timeout 8",
            Y,
            V
        ];
    }
}
var V = (0, y.QT)(n.proto3, w, "EditFileResult.FileDiff.Editor", [
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
class Y extends v {
    constructor(e){
        super(), this.diffString = "", this.oldStart = 0, this.newStart = 0, this.oldLines = 0, this.newLines = 0, this.linesRemoved = 0, this.linesAdded = 0, n.proto3.util.initPartial(e, this);
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
            "EditFileResult.FileDiff.ChunkDiff|1 diff_string 9|2 old_start 5|3 new_start 5|4 old_lines 5|5 new_lines 5|6 lines_removed 5|7 lines_added 5"
        ];
    }
}
class Q extends v {
    constructor(e){
        super(), this.errorType = X.UNSPECIFIED, this.modelMessage = "", n.proto3.util.initPartial(e, this);
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
            "EditFileResult.RecoverableError|1 error_type #0|2 model_message 9",
            X
        ];
    }
}
var X = (0, y.QT)(n.proto3, w, "EditFileResult.RecoverableError.RecoverableErrorType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SEARCH_STRING_NOT_FOUND"
    ],
    [
        2,
        "AMBIGUOUS_SEARCH_STRING"
    ]
], 1);
class Z extends v {
    constructor(e){
        super(), this.isEditAccepted = !1, this.textResult = "", this.stopAndGetNewUserInput = !1, n.proto3.util.initPartial(e, this);
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
            "EditFileResult.EditFileHumanReview|1 is_edit_accepted 8|2 text_result 9|3 stop_and_get_new_user_input 8"
        ];
    }
}
class ee extends v {
    constructor(e){
        super(), this.selectedOption = "", this.feedbackText = "", this.submitFeedbackAsNewMessage = !1, this.bubbleId = "", n.proto3.util.initPartial(e, this);
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
            "EditFileResult.HumanFeedback|1 selected_option 9|2 feedback_text 9|3 submit_feedback_as_new_message 8|4 bubble_id 9"
        ];
    }
}
class te extends v {
    constructor(e){
        super(), this.selectedOption = "", this.feedbackText = "", this.submitFeedbackAsNewMessage = !1, this.bubbleId = "", n.proto3.util.initPartial(e, this);
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
            "HumanReview|1 selected_option 9|2 feedback_text 9|3 submit_feedback_as_new_message 8|4 bubble_id 9"
        ];
    }
}
class re extends v {
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
            "EditFileStream"
        ];
    }
}
class ne extends v {
    constructor(e){
        super(), this.query = "", n.proto3.util.initPartial(e, this);
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
            "ToolCallFileSearchParams|1 query 9"
        ];
    }
}
class se extends v {
    constructor(e){
        super(), this.query = "", n.proto3.util.initPartial(e, this);
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
            "ToolCallFileSearchStream|1 query 9"
        ];
    }
}
class oe extends v {
    constructor(e){
        super(), this.files = [], this.numResults = 0, n.proto3.util.initPartial(e, this);
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
            "ToolCallFileSearchResult|1 files #0*|2 limit_hit 8?|3 num_results 5",
            ie
        ];
    }
}
class ie extends v {
    constructor(e){
        super(), this.uri = "", n.proto3.util.initPartial(e, this);
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
            "ToolCallFileSearchResult.File|1 uri 9"
        ];
    }
}
class ae extends v {
    constructor(e){
        super(), this.directoryPath = "", n.proto3.util.initPartial(e, this);
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
            "ListDirParams|1 directory_path 9"
        ];
    }
}
class ce extends v {
    constructor(e){
        super(), this.files = [], this.directoryRelativeWorkspacePath = "", n.proto3.util.initPartial(e, this);
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
            "ListDirResult|1 files #0*|2 directory_relative_workspace_path 9",
            le
        ];
    }
}
class le extends v {
    constructor(e){
        super(), this.name = "", this.isDirectory = !1, n.proto3.util.initPartial(e, this);
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
            "ListDirResult.File|1 name 9|2 is_directory 8|3 size 3?|4 last_modified #0?|5 num_children 5?|6 num_lines 5?",
            n.Timestamp
        ];
    }
}
class ue extends v {
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
            "ListDirStream"
        ];
    }
}
class de extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.readEntireFile = !1, this.fileIsAllowedToBeReadEntirely = !1, n.proto3.util.initPartial(e, this);
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
            "ReadFileParams|1 relative_workspace_path 9|2 read_entire_file 8|3 start_line_one_indexed 5?|4 end_line_one_indexed_inclusive 5?|5 file_is_allowed_to_be_read_entirely 8|6 max_lines 5?|7 max_chars 5?|8 min_lines 5?"
        ];
    }
}
class pe extends v {
    constructor(e){
        super(), this.contents = "", this.didDowngradeToLineRange = !1, this.didShortenLineRange = !1, this.didSetDefaultLineRange = !1, this.relativeWorkspacePath = "", this.didShortenCharRange = !1, this.matchingCursorRules = [], n.proto3.util.initPartial(e, this);
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
            "ReadFileResult|1 contents 9|2 did_downgrade_to_line_range 8|3 did_shorten_line_range 8|4 did_set_default_line_range 8|5 full_file_contents 9?|6 outline 9?|7 start_line_one_indexed 5?|8 end_line_one_indexed_inclusive 5?|9 relative_workspace_path 9|10 did_shorten_char_range 8|11 read_full_file 8?|12 total_lines 5?|13 matching_cursor_rules #0*|14 file_git_context #1",
            s.DX,
            s.fL
        ];
    }
}
class me extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ReadFileStream"
        ];
    }
}
class he extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "RipgrepSearchParams|1 options #0|2 pattern_info #1",
            ye,
            fe
        ];
    }
}
class fe extends v {
    constructor(e){
        super(), this.pattern = "", n.proto3.util.initPartial(e, this);
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
            "RipgrepSearchParams.IPatternInfoProto|1 pattern 9|2 is_reg_exp 8?|3 is_word_match 8?|4 word_separators 9?|5 is_multiline 8?|6 is_unicode 8?|7 is_case_sensitive 8?|8 notebook_info #0|9 pattern_was_escaped 8?",
            ge
        ];
    }
}
class ge extends v {
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
            "RipgrepSearchParams.IPatternInfoProto.INotebookPatternInfoProto|1 is_in_notebook_markdown_input 8?|2 is_in_notebook_markdown_preview 8?|3 is_in_notebook_cell_input 8?|4 is_in_notebook_cell_output 8?"
        ];
    }
}
class ye extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "RipgrepSearchParams.ITextQueryBuilderOptionsProto|1 preview_options #0|2 file_encoding 9?|3 surrounding_context 5?|4 is_smart_case 8?|5 notebook_search_config #1|6 exclude_pattern #2|7 include_pattern #3|8 expand_patterns 8?|9 max_results 5?|10 max_file_size 5?|11 disregard_ignore_files 8?|12 disregard_global_ignore_files 8?|13 disregard_parent_ignore_files 8?|14 disregard_exclude_settings 8?|15 disregard_search_exclude_settings 8?|16 ignore_symlinks 8?|17 only_open_editors 8?|18 only_file_scheme 8?|19 reason 9?|20 extra_file_resources #4",
            Se,
            ke,
            ve,
            be,
            we
        ];
    }
}
class we extends v {
    constructor(e){
        super(), this.extraFileResources = [], n.proto3.util.initPartial(e, this);
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
            "RipgrepSearchParams.ITextQueryBuilderOptionsProto.ExtraFileResourcesProto|1 extra_file_resources 9*"
        ];
    }
}
class ve extends v {
    constructor(e){
        super(), this.excludePattern = [], n.proto3.util.initPartial(e, this);
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
            "RipgrepSearchParams.ITextQueryBuilderOptionsProto.ExcludePatternProto|1 exclude_pattern #0*",
            _e
        ];
    }
}
class _e extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "RipgrepSearchParams.ITextQueryBuilderOptionsProto.ISearchPatternBuilderProto|1 uri 9?|2 pattern #0",
            be
        ];
    }
}
class be extends v {
    constructor(e){
        super(), this.patterns = [], n.proto3.util.initPartial(e, this);
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
            "RipgrepSearchParams.ITextQueryBuilderOptionsProto.ISearchPathPatternBuilderProto|1 pattern 9?|2 patterns 9*"
        ];
    }
}
class Se extends v {
    constructor(e){
        super(), this.matchLines = 0, this.charsPerLine = 0, n.proto3.util.initPartial(e, this);
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
            "RipgrepSearchParams.ITextQueryBuilderOptionsProto.ITextSearchPreviewOptionsProto|1 match_lines 5|2 chars_per_line 5"
        ];
    }
}
class ke extends v {
    constructor(e){
        super(), this.includeMarkupInput = !1, this.includeMarkupPreview = !1, this.includeCodeInput = !1, this.includeOutput = !1, n.proto3.util.initPartial(e, this);
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
            "RipgrepSearchParams.ITextQueryBuilderOptionsProto.INotebookSearchConfigProto|1 include_markup_input 8|2 include_markup_preview 8|3 include_code_input 8|4 include_output 8"
        ];
    }
}
class xe extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "RipgrepSearchResult|1 internal #0",
            Ee
        ];
    }
}
class Ee extends v {
    constructor(e){
        super(), this.results = [], this.messages = [], this.stats = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "RipgrepSearchResultInternal|1 results #0*|2 exit #1?|3 limit_hit 8?|4 messages #2*|5 file_search_stats #3 stats|6 text_search_stats #4 stats",
            Ce,
            Te,
            Oe,
            Be,
            qe
        ];
    }
}
var Ie = (0, y.QT)(n.proto3, w, "RipgrepSearchResultInternal.TextSearchCompleteMessageType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "INFORMATION"
    ],
    [
        2,
        "WARNING"
    ]
], 1), Te = (0, y.QT)(n.proto3, w, "RipgrepSearchResultInternal.SearchCompletionExitCode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NORMAL"
    ],
    [
        2,
        "NEW_SEARCH_STARTED"
    ]
], 1);
class Ce extends v {
    constructor(e){
        super(), this.resource = "", this.results = [], n.proto3.util.initPartial(e, this);
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
            "RipgrepSearchResultInternal.IFileMatch|1 resource 9|2 results #0*",
            Pe
        ];
    }
}
class Pe extends v {
    constructor(e){
        super(), this.result = {
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
            "RipgrepSearchResultInternal.ITextSearchResult|1 match #0 result|2 context #1 result",
            Ae,
            Re
        ];
    }
}
class Ae extends v {
    constructor(e){
        super(), this.rangeLocations = [], this.previewText = "", n.proto3.util.initPartial(e, this);
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
            "RipgrepSearchResultInternal.ITextSearchMatch|1 uri 9?|2 range_locations #0*|3 preview_text 9|4 webview_index 5?|5 cell_fragment 9?",
            Me
        ];
    }
}
class Re extends v {
    constructor(e){
        super(), this.text = "", this.lineNumber = 0, n.proto3.util.initPartial(e, this);
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
            "RipgrepSearchResultInternal.ITextSearchContext|1 uri 9?|2 text 9|3 line_number 5"
        ];
    }
}
class Me extends v {
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
            "RipgrepSearchResultInternal.ISearchRangeSetPairing|1 source #0|2 preview #0",
            Je
        ];
    }
}
class Je extends v {
    constructor(e){
        super(), this.startLineNumber = 0, this.startColumn = 0, this.endLineNumber = 0, this.endColumn = 0, n.proto3.util.initPartial(e, this);
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
            "RipgrepSearchResultInternal.ISearchRange|1 start_line_number 5|2 start_column 5|3 end_line_number 5|4 end_column 5"
        ];
    }
}
class Oe extends v {
    constructor(e){
        super(), this.text = "", this.type = Ie.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "RipgrepSearchResultInternal.ITextSearchCompleteMessage|1 text 9|2 type #0|3 trusted 8?",
            Ie
        ];
    }
}
class Be extends v {
    constructor(e){
        super(), this.fromCache = !1, this.detailStats = {
            case: void 0
        }, this.resultCount = 0, this.type = De.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "RipgrepSearchResultInternal.IFileSearchStats|1 from_cache 8|2 search_engine_stats #0 detail_stats|3 cached_search_stats #1 detail_stats|4 file_search_provider_stats #2 detail_stats|5 result_count 5|6 type #3|7 sorting_time 5?",
            Fe,
            Ue,
            Le,
            De
        ];
    }
}
var De = (0, y.QT)(n.proto3, w, "RipgrepSearchResultInternal.IFileSearchStats.FileSearchProviderType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "FILE_SEARCH_PROVIDER"
    ],
    [
        2,
        "SEARCH_PROCESS"
    ]
], 1);
class qe extends v {
    constructor(e){
        super(), this.type = Ne.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "RipgrepSearchResultInternal.ITextSearchStats|1 type #0",
            Ne
        ];
    }
}
var Ne = (0, y.QT)(n.proto3, w, "RipgrepSearchResultInternal.ITextSearchStats.TextSearchProviderType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "TEXT_SEARCH_PROVIDER"
    ],
    [
        2,
        "SEARCH_PROCESS"
    ],
    [
        3,
        "AI_TEXT_SEARCH_PROVIDER"
    ]
], 1);
class Fe extends v {
    constructor(e){
        super(), this.fileWalkTime = 0, this.directoriesWalked = 0, this.filesWalked = 0, this.cmdTime = 0, n.proto3.util.initPartial(e, this);
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
            "RipgrepSearchResultInternal.ISearchEngineStats|1 file_walk_time 5|2 directories_walked 5|3 files_walked 5|4 cmd_time 5|5 cmd_result_count 5?"
        ];
    }
}
class Ue extends v {
    constructor(e){
        super(), this.cacheWasResolved = !1, this.cacheLookupTime = 0, this.cacheFilterTime = 0, this.cacheEntryCount = 0, n.proto3.util.initPartial(e, this);
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
            "RipgrepSearchResultInternal.ICachedSearchStats|1 cache_was_resolved 8|2 cache_lookup_time 5|3 cache_filter_time 5|4 cache_entry_count 5"
        ];
    }
}
class Le extends v {
    constructor(e){
        super(), this.providerTime = 0, this.postProcessTime = 0, n.proto3.util.initPartial(e, this);
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
            "RipgrepSearchResultInternal.IFileSearchProviderStats|1 provider_time 5|2 post_process_time 5"
        ];
    }
}
class $e extends v {
    constructor(e){
        super(), this.query = "", n.proto3.util.initPartial(e, this);
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
            "RipgrepSearchStream|1 query 9"
        ];
    }
}
class je extends v {
    constructor(e){
        super(), this.codeResults = [], this.query = "", this.prReferences = [], n.proto3.util.initPartial(e, this);
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
            "ReadSemsearchFilesParams|1 repository_info #0|2 code_results #1*|3 query 9|4 pr_references #2*|5 pr_search_on 8?",
            u.bn,
            u.PT,
            Zr
        ];
    }
}
class Ge extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.missingReason = ze.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "MissingFile|1 relative_workspace_path 9|2 missing_reason #0|3 num_lines 5?",
            ze
        ];
    }
}
var ze = (0, y.QT)(n.proto3, w, "MissingFile.MissingReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "TOO_LARGE"
    ],
    [
        2,
        "NOT_FOUND"
    ]
], 1);
class We extends v {
    constructor(e){
        super(), this.knowledge = "", this.title = "", n.proto3.util.initPartial(e, this);
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
            "Knowledge|1 knowledge 9|2 title 9"
        ];
    }
}
class He extends v {
    constructor(e){
        super(), this.sha = "", this.fullPrContents = "", this.score = 0, this.changedFiles = [], n.proto3.util.initPartial(e, this);
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
            "ToolPullRequestResult|1 sha 9|2 full_pr_contents 9|3 score 2|4 title 9?|5 summary 9?|6 pr_number 13?|7 changed_files 9*|8 author 9?|9 date 9?"
        ];
    }
}
class Ke extends v {
    constructor(e){
        super(), this.codeResults = [], this.allFiles = [], this.missingFiles = [], this.knowledgeResults = [], this.prResults = [], n.proto3.util.initPartial(e, this);
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
            "ReadSemsearchFilesResult|1 code_results #0*|2 all_files #1*|3 missing_files #2*|4 knowledge_results #3*|5 pr_results #4*|6 git_remote_url 9?|7 pr_hydration_timed_out 8?",
            u.PT,
            s.ZH,
            Ge,
            We,
            He
        ];
    }
}
class Ve extends v {
    constructor(e){
        super(), this.numFiles = 0, n.proto3.util.initPartial(e, this);
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
            "ReadSemsearchFilesStream|1 num_files 5"
        ];
    }
}
class Ye extends v {
    constructor(e){
        super(), this.query = "", this.topK = 0, this.prReferences = [], this.codeResults = [], n.proto3.util.initPartial(e, this);
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
            "SemanticSearchFullParams|1 repository_info #0|2 query 9|3 include_pattern 9?|4 exclude_pattern 9?|5 top_k 5|6 pr_references #1*|7 pr_search_on 8?|8 explanation 9?|9 code_results #2*",
            u.bn,
            Zr,
            u.PT
        ];
    }
}
class Qe extends v {
    constructor(e){
        super(), this.codeResults = [], this.allFiles = [], this.missingFiles = [], this.knowledgeResults = [], this.prResults = [], n.proto3.util.initPartial(e, this);
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
            "SemanticSearchFullResult|1 code_results #0*|2 all_files #1*|3 missing_files #2*|4 knowledge_results #3*|5 pr_results #4*|6 git_remote_url 9?|7 pr_hydration_timed_out 8?",
            u.PT,
            s.ZH,
            Ge,
            We,
            He
        ];
    }
}
class Xe extends v {
    constructor(e){
        super(), this.numFiles = 0, n.proto3.util.initPartial(e, this);
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
            "SemanticSearchFullStream|1 num_files 5"
        ];
    }
}
class Ze extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e, this);
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
            "DeleteFileParams|1 relative_workspace_path 9"
        ];
    }
}
class et extends v {
    constructor(e){
        super(), this.rejected = !1, this.fileNonExistent = !1, this.fileDeletedSuccessfully = !1, n.proto3.util.initPartial(e, this);
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
            "DeleteFileResult|1 rejected 8|2 file_non_existent 8|3 file_deleted_successfully 8"
        ];
    }
}
class tt extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e, this);
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
            "DeleteFileStream|1 relative_workspace_path 9"
        ];
    }
}
class rt extends v {
    constructor(e){
        super(), this.tool = b.UNSPECIFIED, this.params = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "BuiltinToolCall|1 tool #0|2 search_params #1 params|3 read_chunk_params #2 params|4 gotodef_params #3 params|5 edit_params #4 params|6 undo_edit_params #5 params|7 end_params #6 params|8 new_file_params #7 params|9 add_test_params #8 params|10 run_test_params #9 params|11 delete_test_params #10 params|12 save_file_params #11 params|13 get_tests_params #12 params|14 get_symbols_params #13 params|15 semantic_search_params #14 params|16 get_project_structure_params #15 params|17 create_rm_files_params #16 params|18 run_terminal_commands_params #17 params|19 new_edit_params #18 params|20 read_with_linter_params #19 params|21 add_ui_step_params #20 params|23 read_semsearch_files_params #21 params|26 delete_file_params #22 params|22 tool_call_id 9?",
            b,
            Et,
            Pt,
            Nt,
            Gt,
            Rt,
            Mt,
            vt,
            Vt,
            Zt,
            sr,
            ir,
            tr,
            cr,
            _t,
            gt,
            ht,
            pt,
            $t,
            ut,
            st,
            je,
            Ze
        ];
    }
}
class nt extends v {
    constructor(e){
        super(), this.tool = b.UNSPECIFIED, this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "BuiltinToolResult|1 tool #0|2 search_result #1 result|3 read_chunk_result #2 result|4 gotodef_result #3 result|5 edit_result #4 result|6 undo_edit_result #5 result|7 end_result #6 result|8 new_file_result #7 result|9 add_test_result #8 result|10 run_test_result #9 result|11 delete_test_result #10 result|12 save_file_result #11 result|13 get_tests_result #12 result|14 get_symbols_result #13 result|15 semantic_search_result #14 result|16 get_project_structure_result #15 result|17 create_rm_files_result #16 result|18 run_terminal_commands_result #17 result|19 new_edit_result #18 result|20 read_with_linter_result #19 result|21 add_ui_step_result #20 result|22 read_semsearch_files_result #21 result|24 delete_file_result #22 result",
            b,
            Ct,
            At,
            Ut,
            Wt,
            Ot,
            Bt,
            Jt,
            Yt,
            er,
            or,
            ar,
            rr,
            ur,
            kt,
            yt,
            ft,
            mt,
            jt,
            dt,
            at,
            Ke,
            et
        ];
    }
}
class st extends v {
    constructor(e){
        super(), this.conversationId = "", this.step = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "AddUiStepParams|1 conversation_id 9|2 search_results #0 step",
            it
        ];
    }
}
class ot extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e, this);
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
            "AddUiStepParams.SearchResult|1 relative_workspace_path 9"
        ];
    }
}
class it extends v {
    constructor(e){
        super(), this.searchResults = [], n.proto3.util.initPartial(e, this);
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
            "AddUiStepParams.SearchResults|1 search_results #0*",
            ot
        ];
    }
}
class at extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "AddUiStepResult"
        ];
    }
}
class ct extends v {
    constructor(e){
        super(), this.toolCall = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "ToolCall|1 builtin_tool_call #0 tool_call|2 custom_tool_call #1 tool_call",
            rt,
            Dt
        ];
    }
}
class lt extends v {
    constructor(e){
        super(), this.toolResult = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "ToolResult|1 builtin_tool_result #0 tool_result|2 custom_tool_result #1 tool_result|3 error_tool_result #2 tool_result",
            nt,
            qt,
            Lt
        ];
    }
}
class ut extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e, this);
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
            "ReadWithLinterParams|1 relative_workspace_path 9"
        ];
    }
}
class dt extends v {
    constructor(e){
        super(), this.contents = "", this.diagnostics = [], n.proto3.util.initPartial(e, this);
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
            "ReadWithLinterResult|1 contents 9|2 diagnostics #0*",
            s.oQ
        ];
    }
}
class pt extends v {
    constructor(e){
        super(), this.commands = [], this.commandsUuid = "", n.proto3.util.initPartial(e, this);
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
            "RunTerminalCommandsParams|1 commands 9*|2 commands_uuid 9"
        ];
    }
}
class mt extends v {
    constructor(e){
        super(), this.outputs = [], n.proto3.util.initPartial(e, this);
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
            "RunTerminalCommandsResult|1 outputs 9*"
        ];
    }
}
class ht extends v {
    constructor(e){
        super(), this.removedFilePaths = [], this.createdFilePaths = [], this.createdDirectoryPaths = [], n.proto3.util.initPartial(e, this);
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
            "CreateRmFilesParams|1 removed_file_paths 9*|2 created_file_paths 9*|3 created_directory_paths 9*"
        ];
    }
}
class ft extends v {
    constructor(e){
        super(), this.createdFilePaths = [], this.removedFilePaths = [], n.proto3.util.initPartial(e, this);
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
            "CreateRmFilesResult|1 created_file_paths 9*|2 removed_file_paths 9*"
        ];
    }
}
class gt extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "GetProjectStructureParams"
        ];
    }
}
class yt extends v {
    constructor(e){
        super(), this.files = [], this.rootWorkspacePath = "", n.proto3.util.initPartial(e, this);
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
            "GetProjectStructureResult|1 files #0*|2 root_workspace_path 9",
            wt
        ];
    }
}
class wt extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.outline = "", n.proto3.util.initPartial(e, this);
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
            "GetProjectStructureResult.File|1 relative_workspace_path 9|2 outline 9"
        ];
    }
}
class vt extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e, this);
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
            "NewFileParams|1 relative_workspace_path 9"
        ];
    }
}
class _t extends v {
    constructor(e){
        super(), this.query = "", this.topK = 0, this.grabWholeFile = !1, n.proto3.util.initPartial(e, this);
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
            "SemanticSearchParams|1 query 9|2 include_pattern 9?|3 exclude_pattern 9?|4 top_k 5|5 index_id 9?|6 grab_whole_file 8"
        ];
    }
}
class bt extends v {
    constructor(e){
        super(), this.startLine = 0, this.startCharacter = 0, this.endLine = 0, this.endCharacter = 0, n.proto3.util.initPartial(e, this);
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
            "Range|1 start_line 5|2 start_character 5|3 end_line 5|4 end_character 5"
        ];
    }
}
class St extends v {
    constructor(e){
        super(), this.start = 0, this.end = 0, n.proto3.util.initPartial(e, this);
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
            "MatchRange|1 start 5|2 end 5"
        ];
    }
}
class kt extends v {
    constructor(e){
        super(), this.results = [], this.files = {}, n.proto3.util.initPartial(e, this);
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
            "SemanticSearchResult|1 results #0*|2 files 9,9",
            xt
        ];
    }
}
class xt extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.score = 0, this.content = "", this.detailedLines = [], n.proto3.util.initPartial(e, this);
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
            "SemanticSearchResult.Item|1 relative_workspace_path 9|2 score 2|3 content 9|4 range #0|5 original_content 9?|6 detailed_lines #1*",
            s._u,
            s.d7
        ];
    }
}
class Et extends v {
    constructor(e){
        super(), this.query = "", this.regex = !1, this.includePattern = "", this.excludePattern = "", this.filenameSearch = !1, n.proto3.util.initPartial(e, this);
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
            "SearchParams|1 query 9|2 regex 8|3 include_pattern 9|4 exclude_pattern 9|5 filename_search 8"
        ];
    }
}
class It extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.numMatches = 0, this.potentiallyRelevantLines = [], this.cropped = !1, n.proto3.util.initPartial(e, this);
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
            "SearchToolFileSearchResult|1 relative_workspace_path 9|2 num_matches 5|3 potentially_relevant_lines #0*|4 cropped 8",
            Tt
        ];
    }
}
class Tt extends v {
    constructor(e){
        super(), this.lineNumber = 0, this.text = "", n.proto3.util.initPartial(e, this);
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
            "SearchToolFileSearchResult.Line|1 line_number 5|2 text 9"
        ];
    }
}
class Ct extends v {
    constructor(e){
        super(), this.fileResults = [], this.numTotalMatches = 0, this.numTotalMatchedFiles = 0, this.numTotalMayBeIncomplete = !1, this.filesOnly = !1, n.proto3.util.initPartial(e, this);
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
            "SearchResult|1 file_results #0*|2 num_total_matches 5|3 num_total_matched_files 5|4 num_total_may_be_incomplete 8|5 files_only 8",
            It
        ];
    }
}
class Pt extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.startLineNumber = 0, n.proto3.util.initPartial(e, this);
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
            "ReadChunkParams|1 relative_workspace_path 9|2 start_line_number 5|3 num_lines 5?"
        ];
    }
}
class At extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.startLineNumber = 0, this.lines = [], this.totalNumLines = 0, this.cropped = !1, n.proto3.util.initPartial(e, this);
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
            "ReadChunkResult|1 relative_workspace_path 9|2 start_line_number 5|3 lines 9*|4 total_num_lines 5|5 cropped 8"
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
            "UndoEditParams"
        ];
    }
}
class Mt extends v {
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
            "EndParams"
        ];
    }
}
class Jt extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.fileTotalLines = 0, n.proto3.util.initPartial(e, this);
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
            "NewFileResult|1 relative_workspace_path 9|2 file_total_lines 5"
        ];
    }
}
class Ot extends v {
    constructor(e){
        super(), this.feedback = [], this.relativeWorkspacePath = "", this.contextStartLineNumber = 0, this.contextLines = [], this.contextTotalNumLines = 0, this.fileTotalLines = 0, n.proto3.util.initPartial(e, this);
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
            "UndoEditResult|1 feedback 9*|4 relative_workspace_path 9|2 context_start_line_number 5|3 context_lines 9*|5 context_total_num_lines 5|6 file_total_lines 5"
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
            "EndResult"
        ];
    }
}
class Dt extends v {
    constructor(e){
        super(), this.toolId = "", this.params = "", n.proto3.util.initPartial(e, this);
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
            "CustomToolCall|1 tool_id 9|2 params 9"
        ];
    }
}
class qt extends v {
    constructor(e){
        super(), this.toolId = "", this.result = "", n.proto3.util.initPartial(e, this);
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
            "CustomToolResult|1 tool_id 9|2 result 9"
        ];
    }
}
class Nt extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.symbol = "", this.startLine = 0, this.endLine = 0, n.proto3.util.initPartial(e, this);
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
            "GotodefParams|1 relative_workspace_path 9|2 symbol 9|3 start_line 5|4 end_line 5"
        ];
    }
}
class Ft extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.startLine = 0, this.endLine = 0, this.codeContextLines = [], n.proto3.util.initPartial(e, this);
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
            "GotodefDefinition|1 relative_workspace_path 9|2 fully_qualified_name 9?|3 symbol_kind 9?|4 start_line 5|5 end_line 5|6 code_context_lines 9*"
        ];
    }
}
class Ut extends v {
    constructor(e){
        super(), this.definitions = [], n.proto3.util.initPartial(e, this);
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
            "GotodefResult|1 definitions #0*",
            Ft
        ];
    }
}
class Lt extends v {
    constructor(e){
        super(), this.errorMessage = "", n.proto3.util.initPartial(e, this);
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
            "ErrorToolResult|1 error_message 9"
        ];
    }
}
class $t extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.text = "", this.editId = "", this.firstEdit = !1, n.proto3.util.initPartial(e, this);
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
            "NewEditParams|1 relative_workspace_path 9|2 start_line_number 5?|3 end_line_number 5?|4 text 9|5 edit_id 9|6 first_edit 8"
        ];
    }
}
class jt extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "NewEditResult"
        ];
    }
}
class Gt extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.replaceNumLines = 0, this.newLines = [], this.editId = "", this.frontendEditType = zt.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Gt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Gt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Gt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Gt, e, t);
    }
    static $() {
        return [
            "EditParams|1 relative_workspace_path 9|2 line_number 5?|3 replace_num_lines 5|4 new_lines 9*|7 replace_whole_file 8?|5 edit_id 9|6 frontend_edit_type #0|8 auto_fix_all_linter_errors_in_file 8?",
            zt
        ];
    }
}
var zt = (0, y.QT)(n.proto3, w, "EditParams.FrontendEditType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "INLINE_DIFFS"
    ],
    [
        2,
        "SIMPLE"
    ]
], 1);
class Wt extends v {
    constructor(e){
        super(), this.feedback = [], this.contextStartLineNumber = 0, this.contextLines = [], this.file = "", this.fileTotalLines = 0, this.structuredFeedback = [], n.proto3.util.initPartial(e, this);
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
            "EditResult|1 feedback 9*|2 context_start_line_number 5|3 context_lines 9*|4 file 9|5 file_total_lines 5|6 structured_feedback #0*",
            Kt
        ];
    }
}
class Ht extends v {
    constructor(e){
        super(), this.message = "", this.startLineNumber = 0, this.endLineNumber = 0, this.relativeWorkspacePath = "", n.proto3.util.initPartial(e, this);
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
            "EditResult.RelatedInformation|1 message 9|2 start_line_number 5|3 end_line_number 5|4 relative_workspace_path 9"
        ];
    }
}
class Kt extends v {
    constructor(e){
        super(), this.message = "", this.severity = "", this.startLineNumber = 0, this.endLineNumber = 0, this.relatedInformation = [], n.proto3.util.initPartial(e, this);
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
            "EditResult.Feedback|1 message 9|2 severity 9|3 start_line_number 5|4 end_line_number 5|5 related_information #0*",
            Ht
        ];
    }
}
class Vt extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.testName = "", this.testCode = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Vt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Vt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Vt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Vt, e, t);
    }
    static $() {
        return [
            "AddTestParams|1 relative_workspace_path 9|2 test_name 9|3 test_code 9"
        ];
    }
}
class Yt extends v {
    constructor(e){
        super(), this.feedback = [], n.proto3.util.initPartial(e, this);
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
            "AddTestResult|1 feedback #0*",
            Xt
        ];
    }
}
class Qt extends v {
    constructor(e){
        super(), this.message = "", this.startLineNumber = 0, this.endLineNumber = 0, this.relativeWorkspacePath = "", n.proto3.util.initPartial(e, this);
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
            "AddTestResult.RelatedInformation|1 message 9|2 start_line_number 5|3 end_line_number 5|4 relative_workspace_path 9"
        ];
    }
}
class Xt extends v {
    constructor(e){
        super(), this.message = "", this.severity = "", this.startLineNumber = 0, this.endLineNumber = 0, this.relatedInformation = [], n.proto3.util.initPartial(e, this);
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
            "AddTestResult.Feedback|1 message 9|2 severity 9|3 start_line_number 5|4 end_line_number 5|5 related_information #0*",
            Qt
        ];
    }
}
class Zt extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e, this);
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
            "RunTestParams|1 relative_workspace_path 9|2 test_name 9?"
        ];
    }
}
class er extends v {
    constructor(e){
        super(), this.result = "", n.proto3.util.initPartial(e, this);
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
            "RunTestResult|1 result 9"
        ];
    }
}
class tr extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e, this);
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
            "GetTestsParams|1 relative_workspace_path 9"
        ];
    }
}
class rr extends v {
    constructor(e){
        super(), this.tests = [], n.proto3.util.initPartial(e, this);
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
            "GetTestsResult|1 tests #0*",
            nr
        ];
    }
}
class nr extends v {
    constructor(e){
        super(), this.name = "", this.lines = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new nr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new nr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new nr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(nr, e, t);
    }
    static $() {
        return [
            "GetTestsResult.Test|1 name 9|2 lines 9*"
        ];
    }
}
class sr extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new sr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new sr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new sr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(sr, e, t);
    }
    static $() {
        return [
            "DeleteTestParams|1 relative_workspace_path 9|2 test_name 9?"
        ];
    }
}
class or extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new or).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new or).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new or).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(or, e, t);
    }
    static $() {
        return [
            "DeleteTestResult"
        ];
    }
}
class ir extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ir).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ir).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ir).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ir, e, t);
    }
    static $() {
        return [
            "SaveFileParams|1 relative_workspace_path 9"
        ];
    }
}
class ar extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ar).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ar).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ar).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ar, e, t);
    }
    static $() {
        return [
            "SaveFileResult"
        ];
    }
}
class cr extends v {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.includeChildren = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new cr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new cr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new cr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(cr, e, t);
    }
    static $() {
        return [
            "GetSymbolsParams|1 relative_workspace_path 9|2 line_range #0?|3 include_children 8",
            lr
        ];
    }
}
class lr extends v {
    constructor(e){
        super(), this.startLineNumber = 0, this.endLineNumberInclusive = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new lr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new lr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new lr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(lr, e, t);
    }
    static $() {
        return [
            "GetSymbolsParams.LineRange|1 start_line_number 5|2 end_line_number_inclusive 5"
        ];
    }
}
class ur extends v {
    constructor(e){
        super(), this.symbols = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ur).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ur).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ur).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ur, e, t);
    }
    static $() {
        return [
            "GetSymbolsResult|1 symbols #0*",
            s.Az
        ];
    }
}
class dr extends v {
    constructor(e){
        super(), this.parsingFailed = !1, this.executableCommands = [], this.hasRedirects = !1, this.hasCommandSubstitution = !1, this.redirects = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new dr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new dr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new dr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(dr, e, t);
    }
    static $() {
        return [
            "ShellCommandParsingResult|1 parsing_failed 8|2 executable_commands #0*|3 has_redirects 8|4 has_command_substitution 8|5 all_redirects_are_dev_null 8?|6 redirects #1*",
            mr,
            hr
        ];
    }
}
class pr extends v {
    constructor(e){
        super(), this.type = "", this.value = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new pr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new pr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new pr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(pr, e, t);
    }
    static $() {
        return [
            "ShellCommandParsingResult.ExecutableCommandArg|1 type 9|2 value 9"
        ];
    }
}
class mr extends v {
    constructor(e){
        super(), this.name = "", this.args = [], this.fullText = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new mr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new mr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new mr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(mr, e, t);
    }
    static $() {
        return [
            "ShellCommandParsingResult.ExecutableCommand|1 name 9|2 args #0*|3 full_text 9",
            pr
        ];
    }
}
class hr extends v {
    constructor(e){
        super(), this.operator = "", this.destinationFds = [], this.targetNodeType = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new hr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new hr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new hr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(hr, e, t);
    }
    static $() {
        return [
            "ShellCommandParsingResult.Redirect|1 operator 9|2 destination_fds 13*|3 target_node_type 9|4 target_text 9?"
        ];
    }
}
class fr extends v {
    constructor(e){
        super(), this.command = "", this.isBackground = !1, this.requireUserApproval = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new fr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new fr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new fr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(fr, e, t);
    }
    static $() {
        return [
            "RunTerminalCommandV2Params|1 command 9|2 cwd 9?|3 new_session 8?|4 options #0?|5 is_background 8|6 require_user_approval 8|7 parsing_result #1?|8 idle_timeout_seconds 5?|9 requested_sandbox_policy #2?|10 file_output_threshold_bytes 3?|11 command_description 9?|12 classifier_result #3?",
            gr,
            dr,
            d.Mw,
            p.E4
        ];
    }
}
class gr extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new gr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new gr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new gr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(gr, e, t);
    }
    static $() {
        return [
            "RunTerminalCommandV2Params.ExecutionOptions|1 timeout 5?|2 skip_ai_check 8?|3 command_run_timeout_ms 5?|4 command_change_check_interval_ms 5?|5 ai_finish_check_max_attempts 5?|6 ai_finish_check_interval_ms 5?|7 delayer_interval_ms 5?|8 ai_check_for_hangs 8?"
        ];
    }
}
class yr extends v {
    constructor(e){
        super(), this.filePath = "", this.sizeBytes = n.protoInt64.zero, this.lineCount = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new yr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new yr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new yr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(yr, e, t);
    }
    static $() {
        return [
            "OutputLocation|1 file_path 9|2 size_bytes 3|3 line_count 3"
        ];
    }
}
class wr extends v {
    constructor(e){
        super(), this.output = "", this.exitCode = 0, this.poppedOutIntoBackground = !1, this.isRunningInBackground = !1, this.notInterrupted = !1, this.resultingWorkingDirectory = "", this.didUserChange = !1, this.endedReason = S.UNSPECIFIED, this.outputRaw = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new wr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new wr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new wr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(wr, e, t);
    }
    static $() {
        return [
            "RunTerminalCommandV2Result|1 output 9|2 exit_code 5|3 rejected 8?|4 popped_out_into_background 8|5 is_running_in_background 8|6 not_interrupted 8|7 resulting_working_directory 9|8 did_user_change 8|9 ended_reason #0|10 exit_code_v2 5?|11 updated_command 9?|12 output_raw 9|13 human_review_v2 #1?|14 effective_sandbox_policy #2?|15 terminal_instance_id 5?|16 output_location #3?|17 terminal_instance_path 9?|18 background_shell_id 13?",
            S,
            te,
            d.Mw,
            yr
        ];
    }
}
class vr extends v {
    constructor(e){
        super(), this.command = "", this.isBackground = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new vr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new vr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new vr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(vr, e, t);
    }
    static $() {
        return [
            "RunTerminalCommandV2Stream|1 command 9|2 is_background 8|7 parsing_result #0?|8 idle_timeout_seconds 5?|9 requested_sandbox_policy #1?",
            dr,
            d.Mw
        ];
    }
}
class _r extends v {
    constructor(e){
        super(), this.ruleNames = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _r).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _r).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _r).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_r, e, t);
    }
    static $() {
        return [
            "FetchRulesStream|1 rule_names 9*"
        ];
    }
}
class br extends v {
    constructor(e){
        super(), this.searchTerm = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new br).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new br).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new br).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(br, e, t);
    }
    static $() {
        return [
            "WebSearchParams|1 search_term 9"
        ];
    }
}
class Sr extends v {
    constructor(e){
        super(), this.references = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Sr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Sr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Sr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Sr, e, t);
    }
    static $() {
        return [
            "WebSearchResult|1 references #0*|2 is_final 8?|3 rejected 8?",
            kr
        ];
    }
}
class kr extends v {
    constructor(e){
        super(), this.title = "", this.url = "", this.chunk = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new kr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new kr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new kr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(kr, e, t);
    }
    static $() {
        return [
            "WebSearchResult.WebReference|1 title 9|2 url 9|3 chunk 9"
        ];
    }
}
class xr extends v {
    constructor(e){
        super(), this.searchTerm = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new xr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new xr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new xr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(xr, e, t);
    }
    static $() {
        return [
            "WebSearchStream|1 search_term 9"
        ];
    }
}
class Er extends v {
    constructor(e){
        super(), this.tools = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Er).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Er).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Er).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Er, e, t);
    }
    static $() {
        return [
            "MCPParams|1 tools #0*|2 file_output_threshold_bytes 3?",
            Ir
        ];
    }
}
class Ir extends v {
    constructor(e){
        super(), this.name = "", this.description = "", this.parameters = "", this.serverName = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ir).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ir).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ir).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ir, e, t);
    }
    static $() {
        return [
            "MCPParams.Tool|1 name 9|2 description 9|3 parameters 9|4 server_name 9|5 transcript_display #0?",
            Tr
        ];
    }
}
class Tr extends v {
    constructor(e){
        super(), this.loading = "", this.success = "", this.error = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Tr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Tr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Tr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Tr, e, t);
    }
    static $() {
        return [
            "MCPParams.TranscriptDisplay|1 loading 9|2 success 9|3 error 9"
        ];
    }
}
class Cr extends v {
    constructor(e){
        super(), this.selectedTool = "", this.result = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Cr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Cr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Cr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Cr, e, t);
    }
    static $() {
        return [
            "MCPResult|1 selected_tool 9|2 result 9"
        ];
    }
}
class Pr extends v {
    constructor(e){
        super(), this.tools = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Pr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Pr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Pr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Pr, e, t);
    }
    static $() {
        return [
            "MCPStream|1 tools #0*",
            Ir
        ];
    }
}
class Ar extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ar).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ar).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ar).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ar, e, t);
    }
    static $() {
        return [
            "ListMcpResourcesParams|1 server 9?"
        ];
    }
}
class Rr extends v {
    constructor(e){
        super(), this.resources = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Rr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Rr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Rr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Rr, e, t);
    }
    static $() {
        return [
            "ListMcpResourcesResult|1 resources #0*",
            Mr
        ];
    }
}
class Mr extends v {
    constructor(e){
        super(), this.uri = "", this.server = "", this.annotations = {}, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Mr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Mr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Mr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Mr, e, t);
    }
    static $() {
        return [
            "ListMcpResourcesResult.MCPResource|1 uri 9|2 name 9?|3 description 9?|4 mime_type 9?|5 server 9|6 annotations 9,9"
        ];
    }
}
class Jr extends v {
    constructor(e){
        super(), this.server = "", this.uri = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Jr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Jr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Jr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Jr, e, t);
    }
    static $() {
        return [
            "ReadMcpResourceParams|1 server 9|2 uri 9|3 download_path 9?"
        ];
    }
}
class Or extends v {
    constructor(e){
        super(), this.uri = "", this.content = {
            case: void 0
        }, this.annotations = {}, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Or).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Or).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Or).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Or, e, t);
    }
    static $() {
        return [
            "ReadMcpResourceResult|1 uri 9|2 name 9?|3 description 9?|4 mime_type 9?|5 text 9 content|6 blob 12 content|7 annotations 9,9"
        ];
    }
}
class Br extends v {
    constructor(e){
        super(), this.server = "", this.toolName = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Br).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Br).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Br).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Br, e, t);
    }
    static $() {
        return [
            "CallMcpToolParams|1 server 9|2 tool_name 9|3 tool_args #0",
            n.Struct
        ];
    }
}
class Dr extends v {
    constructor(e){
        super(), this.server = "", this.toolName = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Dr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Dr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Dr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Dr, e, t);
    }
    static $() {
        return [
            "CallMcpToolResult|1 server 9|2 tool_name 9|3 result #0",
            n.Struct
        ];
    }
}
class qr extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new qr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new qr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new qr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(qr, e, t);
    }
    static $() {
        return [
            "GetMcpToolsParams|1 server 9?|2 tool_name 9?|3 pattern 9?"
        ];
    }
}
class Nr extends v {
    constructor(e){
        super(), this.content = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Nr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Nr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Nr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Nr, e, t);
    }
    static $() {
        return [
            "GetMcpToolsResult|1 content 9|2 output_file_path 9?"
        ];
    }
}
class Fr extends v {
    constructor(e){
        super(), this.query = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Fr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Fr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Fr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Fr, e, t);
    }
    static $() {
        return [
            "SearchSymbolsParams|1 query 9"
        ];
    }
}
class Ur extends v {
    constructor(e){
        super(), this.matches = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ur).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ur).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ur).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ur, e, t);
    }
    static $() {
        return [
            "SearchSymbolsResult|1 matches #0*|2 rejected 8?",
            Lr
        ];
    }
}
class Lr extends v {
    constructor(e){
        super(), this.name = "", this.uri = "", this.secondaryText = "", this.labelMatches = [], this.descriptionMatches = [], this.score = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Lr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Lr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Lr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Lr, e, t);
    }
    static $() {
        return [
            "SearchSymbolsResult.SymbolMatch|1 name 9|2 uri 9|3 range #0|4 secondary_text 9|5 label_matches #1*|6 description_matches #1*|7 score 1",
            bt,
            St
        ];
    }
}
class $r extends v {
    constructor(e){
        super(), this.query = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new $r).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new $r).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new $r).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals($r, e, t);
    }
    static $() {
        return [
            "SearchSymbolsStream|1 query 9"
        ];
    }
}
class jr extends v {
    constructor(e){
        super(), this.proposedFollowup = "", this.bcId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new jr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new jr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new jr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(jr, e, t);
    }
    static $() {
        return [
            "BackgroundComposerFollowupParams|1 proposed_followup 9|2 bc_id 9"
        ];
    }
}
class Gr extends v {
    constructor(e){
        super(), this.proposedFollowup = "", this.isSent = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Gr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Gr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Gr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Gr, e, t);
    }
    static $() {
        return [
            "BackgroundComposerFollowupResult|1 proposed_followup 9|2 is_sent 8"
        ];
    }
}
class zr extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new zr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new zr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new zr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(zr, e, t);
    }
    static $() {
        return [
            "BackgroundComposerFollowupStream"
        ];
    }
}
class Wr extends v {
    constructor(e){
        super(), this.knowledgeToStore = "", this.title = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Wr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Wr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Wr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Wr, e, t);
    }
    static $() {
        return [
            "KnowledgeBaseParams|1 knowledge_to_store 9|2 title 9|3 existing_knowledge_id 9?|4 action 9?"
        ];
    }
}
class Hr extends v {
    constructor(e){
        super(), this.success = !1, this.confirmationMessage = "", this.id = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Hr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Hr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Hr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Hr, e, t);
    }
    static $() {
        return [
            "KnowledgeBaseResult|1 success 8|2 confirmation_message 9|3 id 9"
        ];
    }
}
class Kr extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Kr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Kr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Kr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Kr, e, t);
    }
    static $() {
        return [
            "KnowledgeBaseStream"
        ];
    }
}
class Vr extends v {
    constructor(e){
        super(), this.pullNumberOrCommitHash = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Vr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Vr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Vr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Vr, e, t);
    }
    static $() {
        return [
            "FetchPullRequestParams|1 pull_number_or_commit_hash 9|2 repo 9?|3 is_github 8?"
        ];
    }
}
class Yr extends v {
    constructor(e){
        super(), this.content = "", this.prNumber = 0, this.title = "", this.body = "", this.author = "", this.date = "", this.diff = "", this.comments = [], this.labels = [], this.assignees = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Yr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Yr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Yr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Yr, e, t);
    }
    static $() {
        return [
            "FetchPullRequestResult|1 content 9|2 pr_number 13|3 title 9|4 body 9|5 author 9|6 date 9|7 diff 9|8 sha 9?|9 external_link 9?|10 url 9?|11 comments #0*|12 labels 9*|13 assignees 9*|14 is_issue 8?|15 state 9?|16 prompt_connect_github 8?",
            Qr
        ];
    }
}
class Qr extends v {
    constructor(e){
        super(), this.id = 0, this.body = "", this.createdAt = "", this.updatedAt = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Qr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Qr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Qr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Qr, e, t);
    }
    static $() {
        return [
            "IssueComment|1 id 13|2 body 9|3 author 9?|4 created_at 9|5 updated_at 9|6 author_association 9?"
        ];
    }
}
class Xr extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Xr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Xr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Xr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Xr, e, t);
    }
    static $() {
        return [
            "FetchPullRequestStream"
        ];
    }
}
class Zr extends v {
    constructor(e){
        super(), this.sha = "", this.score = 0, this.changedFiles = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Zr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Zr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Zr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Zr, e, t);
    }
    static $() {
        return [
            "PullRequestReference|1 sha 9|2 score 2|3 title 9?|4 summary 9?|5 pr_number 13?|6 author 9?|7 date 9?|8 changed_files 9*"
        ];
    }
}
class en extends v {
    constructor(e){
        super(), this.query = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new en).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new en).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new en).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(en, e, t);
    }
    static $() {
        return [
            "DeepSearchParams|1 query 9"
        ];
    }
}
class tn extends v {
    constructor(e){
        super(), this.success = !1, this.result = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new tn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new tn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new tn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(tn, e, t);
    }
    static $() {
        return [
            "DeepSearchResult|1 success 8|2 result 9"
        ];
    }
}
class rn extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new rn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new rn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new rn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(rn, e, t);
    }
    static $() {
        return [
            "DeepSearchStream"
        ];
    }
}
class nn extends v {
    constructor(e){
        super(), this.content = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new nn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new nn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new nn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(nn, e, t);
    }
    static $() {
        return [
            "CreateDiagramParams|1 content 9"
        ];
    }
}
class sn extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new sn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new sn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new sn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(sn, e, t);
    }
    static $() {
        return [
            "CreateDiagramResult|1 error 9?"
        ];
    }
}
class on extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new on).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new on).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new on).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(on, e, t);
    }
    static $() {
        return [
            "CreateDiagramStream"
        ];
    }
}
class an extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new an).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new an).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new an).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(an, e, t);
    }
    static $() {
        return [
            "FixLintsParams"
        ];
    }
}
class cn extends v {
    constructor(e){
        super(), this.fileResults = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new cn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new cn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new cn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(cn, e, t);
    }
    static $() {
        return [
            "FixLintsResult|1 file_results #0*",
            ln
        ];
    }
}
class ln extends v {
    constructor(e){
        super(), this.filePath = "", this.isApplied = !1, this.applyFailed = !1, this.linterErrors = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ln).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ln).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ln).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ln, e, t);
    }
    static $() {
        return [
            "FixLintsResult.FileResult|1 file_path 9|2 diff #0|3 is_applied 8|4 apply_failed 8|5 error 9?|6 linter_errors #1*",
            K,
            s.bO
        ];
    }
}
class un extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new un).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new un).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new un).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(un, e, t);
    }
    static $() {
        return [
            "FixLintsStream"
        ];
    }
}
class dn extends v {
    constructor(e){
        super(), this.path = "", this.paths = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new dn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new dn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new dn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(dn, e, t);
    }
    static $() {
        return [
            "ReadLintsParams|1 path 9|2 paths 9*"
        ];
    }
}
class pn extends v {
    constructor(e){
        super(), this.path = "", this.linterErrors = [], this.linterErrorsByFile = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new pn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new pn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new pn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(pn, e, t);
    }
    static $() {
        return [
            "ReadLintsResult|1 path 9|2 linter_errors #0*|3 linter_errors_by_file #1*",
            s.bO,
            s.wZ
        ];
    }
}
class mn extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new mn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new mn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new mn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(mn, e, t);
    }
    static $() {
        return [
            "ReadLintsStream"
        ];
    }
}
class hn extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new hn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new hn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new hn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(hn, e, t);
    }
    static $() {
        return [
            "GotodefStream"
        ];
    }
}
class fn extends v {
    constructor(e){
        super(), this.taskDescription = "", this.taskTitle = "", this.allowedWriteDirectories = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new fn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new fn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new fn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(fn, e, t);
    }
    static $() {
        return [
            "TaskParams|1 task_description 9|4 task_title 9|2 async 8?|3 allowed_write_directories 9*|5 model_override 9?|6 max_mode_override 8?|7 default_expanded_while_running 8?"
        ];
    }
}
class gn extends v {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new gn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new gn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new gn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(gn, e, t);
    }
    static $() {
        return [
            "TaskResult|1 completed_task_result #0 result|2 async_task_result #1 result",
            yn,
            wn
        ];
    }
}
class yn extends v {
    constructor(e){
        super(), this.summary = "", this.fileResults = [], this.userAborted = !1, this.subagentErrored = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new yn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new yn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new yn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(yn, e, t);
    }
    static $() {
        return [
            "TaskResult.CompletedTaskResult|1 summary 9|2 file_results #0*|3 user_aborted 8|4 subagent_errored 8",
            ln
        ];
    }
}
class wn extends v {
    constructor(e){
        super(), this.taskId = "", this.userAborted = !1, this.subagentErrored = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new wn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new wn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new wn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(wn, e, t);
    }
    static $() {
        return [
            "TaskResult.AsyncTaskResult|1 task_id 9|2 user_aborted 8|3 subagent_errored 8"
        ];
    }
}
class vn extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new vn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new vn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new vn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(vn, e, t);
    }
    static $() {
        return [
            "TaskStream"
        ];
    }
}
class _n extends v {
    constructor(e){
        super(), this.description = "", this.prompt = "", this.subagentType = "", this.name = "", this.mode = m.FL.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _n).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _n).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _n).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_n, e, t);
    }
    static $() {
        return [
            "TaskV2Params|1 description 9|2 prompt 9|3 subagent_type 9|4 model 9?|5 name 9|6 mode #0",
            m.FL
        ];
    }
}
class bn extends v {
    constructor(e){
        super(), this.isBackground = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new bn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new bn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new bn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(bn, e, t);
    }
    static $() {
        return [
            "TaskV2Result|1 agent_id 9?|2 is_background 8|3 cloud_agent_bc_id 9?"
        ];
    }
}
class Sn extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Sn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Sn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Sn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Sn, e, t);
    }
    static $() {
        return [
            "TaskV2Stream"
        ];
    }
}
class kn extends v {
    constructor(e){
        super(), this.pattern = "", this.ignoreGlobs = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new kn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new kn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new kn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(kn, e, t);
    }
    static $() {
        return [
            "RipgrepRawSearchParams|1 pattern 9|2 path 9?|3 glob 9?|4 output_mode 9?|5 context_before 5?|6 context_after 5?|7 context 5?|8 case_insensitive 8?|9 type 9?|10 head_limit 5?|11 multiline 8?|12 sort 9?|13 sort_ascending 8?|14 ignore_globs 9*|15 offset 5?"
        ];
    }
}
class xn extends v {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new xn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new xn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new xn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(xn, e, t);
    }
    static $() {
        return [
            "RipgrepRawSearchResult|1 success #0 result|2 error #1 result",
            In,
            En
        ];
    }
}
class En extends v {
    constructor(e){
        super(), this.error = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new En).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new En).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new En).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(En, e, t);
    }
    static $() {
        return [
            "RipgrepRawSearchError|1 error 9"
        ];
    }
}
class In extends v {
    constructor(e){
        super(), this.pattern = "", this.path = "", this.outputMode = "", this.workspaceResults = {}, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new In).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new In).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new In).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(In, e, t);
    }
    static $() {
        return [
            "RipgrepRawSearchSuccess|1 pattern 9|2 path 9|3 output_mode 9|4 workspace_results 9,#0|5 active_editor_result #0?",
            Tn
        ];
    }
}
class Tn extends v {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Tn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Tn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Tn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Tn, e, t);
    }
    static $() {
        return [
            "RipgrepRawSearchUnionResult|1 count #0 result|2 files #1 result|3 content #2 result",
            Cn,
            An,
            Mn
        ];
    }
}
class Cn extends v {
    constructor(e){
        super(), this.counts = [], this.totalFiles = 0, this.totalMatches = 0, this.clientTruncated = !1, this.ripgrepTruncated = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Cn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Cn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Cn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Cn, e, t);
    }
    static $() {
        return [
            "RipgrepRawSearchCountResult|1 counts #0*|2 total_files 5|3 total_matches 5|4 client_truncated 8|6 head_limit_applied 5?|7 offset_applied 5?|5 ripgrep_truncated 8",
            Pn
        ];
    }
}
class Pn extends v {
    constructor(e){
        super(), this.file = "", this.count = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Pn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Pn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Pn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Pn, e, t);
    }
    static $() {
        return [
            "RipgrepRawSearchFileCount|1 file 9|2 count 5|3 is_dirty 8?|4 is_out_of_workspace 8?|5 absolute_path 9?"
        ];
    }
}
class An extends v {
    constructor(e){
        super(), this.files = [], this.totalFiles = 0, this.clientTruncated = !1, this.ripgrepTruncated = !1, this.filesWithMeta = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new An).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new An).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new An).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(An, e, t);
    }
    static $() {
        return [
            "RipgrepRawSearchFilesResult|1 files 9*|2 total_files 5|3 client_truncated 8|4 ripgrep_truncated 8|5 files_with_meta #0*|6 head_limit_applied 5?|7 offset_applied 5?",
            Rn
        ];
    }
}
class Rn extends v {
    constructor(e){
        super(), this.file = "", this.isDirty = !1, this.isOutOfWorkspace = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Rn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Rn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Rn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Rn, e, t);
    }
    static $() {
        return [
            "RipgrepRawSearchFilesResult.FileEntry|1 file 9|2 is_dirty 8|3 is_out_of_workspace 8|4 absolute_path 9?"
        ];
    }
}
class Mn extends v {
    constructor(e){
        super(), this.matches = [], this.totalLines = 0, this.totalMatchedLines = 0, this.clientTruncated = !1, this.ripgrepTruncated = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Mn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Mn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Mn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Mn, e, t);
    }
    static $() {
        return [
            "RipgrepRawSearchContentResult|1 matches #0*|2 total_lines 5|3 total_matched_lines 5|4 client_truncated 8|5 ripgrep_truncated 8|6 head_limit_applied 5?|7 offset_applied 5?",
            Jn
        ];
    }
}
class Jn extends v {
    constructor(e){
        super(), this.file = "", this.matches = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Jn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Jn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Jn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Jn, e, t);
    }
    static $() {
        return [
            "RipgrepRawSearchFileMatch|1 file 9|2 matches #0*|3 is_dirty 8?|4 is_out_of_workspace 8?|5 absolute_path 9?",
            On
        ];
    }
}
class On extends v {
    constructor(e){
        super(), this.lineNumber = 0, this.content = "", this.contentTruncated = !1, this.isContextLine = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new On).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new On).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new On).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(On, e, t);
    }
    static $() {
        return [
            "RipgrepRawSearchContentMatch|1 line_number 5|2 content 9|3 content_truncated 8|4 is_context_line 8"
        ];
    }
}
class Bn extends v {
    constructor(e){
        super(), this.pattern = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Bn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Bn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Bn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Bn, e, t);
    }
    static $() {
        return [
            "RipgrepRawSearchStream|1 pattern 9"
        ];
    }
}
class Dn extends v {
    constructor(e){
        super(), this.ids = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Dn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Dn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Dn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Dn, e, t);
    }
    static $() {
        return [
            "AwaitTaskParams|1 ids 9*"
        ];
    }
}
class qn extends v {
    constructor(e){
        super(), this.taskResults = [], this.missingTaskIds = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new qn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new qn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new qn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(qn, e, t);
    }
    static $() {
        return [
            "AwaitTaskResult|1 task_results #0*|2 missing_task_ids 9*",
            Nn
        ];
    }
}
class Nn extends v {
    constructor(e){
        super(), this.taskId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Nn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Nn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Nn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Nn, e, t);
    }
    static $() {
        return [
            "AwaitTaskResult.TaskResultItem|1 task_id 9|2 result #0",
            yn
        ];
    }
}
class Fn extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Fn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Fn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Fn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Fn, e, t);
    }
    static $() {
        return [
            "AwaitTaskStream"
        ];
    }
}
class Un extends v {
    constructor(e){
        super(), this.read = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Un).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Un).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Un).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Un, e, t);
    }
    static $() {
        return [
            "TodoReadParams|1 read 8"
        ];
    }
}
class Ln extends v {
    constructor(e){
        super(), this.content = "", this.status = "", this.id = "", this.dependencies = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ln).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ln).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ln).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ln, e, t);
    }
    static $() {
        return [
            "TodoItem|1 content 9|2 status 9|3 id 9|4 dependencies 9*"
        ];
    }
}
class $n extends v {
    constructor(e){
        super(), this.todos = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new $n).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new $n).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new $n).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals($n, e, t);
    }
    static $() {
        return [
            "TodoReadResult|1 todos #0*",
            Ln
        ];
    }
}
class jn extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new jn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new jn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new jn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(jn, e, t);
    }
    static $() {
        return [
            "TodoReadStream"
        ];
    }
}
class Gn extends v {
    constructor(e){
        super(), this.todos = [], this.merge = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Gn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Gn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Gn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Gn, e, t);
    }
    static $() {
        return [
            "TodoWriteParams|1 todos #0*|2 merge 8",
            Ln
        ];
    }
}
class zn extends v {
    constructor(e){
        super(), this.success = !1, this.readyTaskIds = [], this.needsInProgressTodos = !1, this.finalTodos = [], this.initialTodos = [], this.wasMerge = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new zn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new zn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new zn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(zn, e, t);
    }
    static $() {
        return [
            "TodoWriteResult|1 success 8|2 ready_task_ids 9*|3 needs_in_progress_todos 8|4 final_todos #0*|5 initial_todos #0*|6 was_merge 8",
            Ln
        ];
    }
}
class Wn extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Wn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Wn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Wn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Wn, e, t);
    }
    static $() {
        return [
            "TodoWriteStream"
        ];
    }
}
class Hn extends v {
    constructor(e){
        super(), this.targetDirectory = "", this.ignoreGlobs = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Hn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Hn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Hn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Hn, e, t);
    }
    static $() {
        return [
            "ListDirV2Params|1 target_directory 9|2 ignore_globs 9*|3 should_enrich_terminal_metadata 8?"
        ];
    }
}
class Kn extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Kn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Kn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Kn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Kn, e, t);
    }
    static $() {
        return [
            "ListDirV2Result|1 directory_tree_root #0",
            Vn
        ];
    }
}
class Vn extends v {
    constructor(e){
        super(), this.absPath = "", this.childrenDirs = [], this.childrenFiles = [], this.childrenWereProcessed = !1, this.fullSubtreeExtensionCounts = {}, this.numFiles = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Vn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Vn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Vn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Vn, e, t);
    }
    static $() {
        return [
            "ListDirV2Result.DirectoryTreeNode|1 abs_path 9|2 children_dirs #0*|3 children_files #1*|4 children_were_processed 8|5 full_subtree_extension_counts 9,5|6 num_files 5",
            Vn,
            Yn
        ];
    }
}
class Yn extends v {
    constructor(e){
        super(), this.name = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Yn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Yn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Yn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Yn, e, t);
    }
    static $() {
        return [
            "ListDirV2Result.DirectoryTreeNode.File|1 name 9|2 terminal_metadata #0?",
            h.Y$
        ];
    }
}
class Qn extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Qn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Qn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Qn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Qn, e, t);
    }
    static $() {
        return [
            "ListDirV2Stream"
        ];
    }
}
class Xn extends v {
    constructor(e){
        super(), this.targetFile = "", this.charsLimit = 0, this.effectiveUri = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Xn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Xn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Xn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Xn, e, t);
    }
    static $() {
        return [
            "ReadFileV2Params|1 target_file 9|2 offset 5?|3 limit 5?|4 chars_limit 5|5 effective_uri 9|6 enable_line_numbers 8?"
        ];
    }
}
class Zn extends v {
    constructor(e){
        super(), this.numCharactersInRequestedRange = 0, this.matchingCursorRules = [], this.images = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Zn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Zn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Zn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Zn, e, t);
    }
    static $() {
        return [
            "ReadFileV2Result|1 contents 9?|2 num_characters_in_requested_range 5|3 offset_is_bigger_than_number_of_lines_in_file 8?|4 total_lines_in_file 5?|5 matching_cursor_rules #0*|6 images #1*",
            s.DX,
            s.UR
        ];
    }
}
class es extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new es).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new es).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new es).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(es, e, t);
    }
    static $() {
        return [
            "ReadFileV2Stream|1 params #0?",
            Xn
        ];
    }
}
class ts extends v {
    constructor(e){
        super(), this.targetDirectory = "", this.globPattern = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ts).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ts).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ts).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ts, e, t);
    }
    static $() {
        return [
            "GlobFileSearchParams|1 target_directory 9|2 glob_pattern 9"
        ];
    }
}
class rs extends v {
    constructor(e){
        super(), this.directories = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new rs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new rs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new rs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(rs, e, t);
    }
    static $() {
        return [
            "GlobFileSearchResult|1 directories #0*",
            ss
        ];
    }
}
class ns extends v {
    constructor(e){
        super(), this.relPath = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ns).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ns).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ns).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ns, e, t);
    }
    static $() {
        return [
            "GlobFileSearchResult.File|1 rel_path 9"
        ];
    }
}
class ss extends v {
    constructor(e){
        super(), this.absPath = "", this.files = [], this.totalFiles = 0, this.ripgrepTruncated = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ss).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ss).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ss).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ss, e, t);
    }
    static $() {
        return [
            "GlobFileSearchResult.Directory|1 abs_path 9|2 files #0*|3 total_files 5|4 ripgrep_truncated 8",
            ns
        ];
    }
}
class os extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new os).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new os).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new os).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(os, e, t);
    }
    static $() {
        return [
            "GlobFileSearchStream"
        ];
    }
}
class is extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new is).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new is).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new is).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(is, e, t);
    }
    static $() {
        return [
            "ListMcpResourcesStream"
        ];
    }
}
class as extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new as).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new as).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new as).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(as, e, t);
    }
    static $() {
        return [
            "CallMcpToolStream"
        ];
    }
}
class cs extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new cs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new cs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new cs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(cs, e, t);
    }
    static $() {
        return [
            "ReadMcpResourceStream"
        ];
    }
}
class ls extends v {
    constructor(e){
        super(), this.id = "", this.title = "", this.description = "", this.instructions = "", this.prerequisites = [], this.subComposerId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ls).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ls).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ls).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ls, e, t);
    }
    static $() {
        return [
            "Step|1 id 9|2 title 9|3 description 9|4 instructions 9|5 prerequisites 9*|6 sub_composer_id 9"
        ];
    }
}
class us extends v {
    constructor(e){
        super(), this.name = "", this.todos = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new us).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new us).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new us).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(us, e, t);
    }
    static $() {
        return [
            "PlanPhase|1 name 9|2 todos #0*",
            Ln
        ];
    }
}
class ds extends v {
    constructor(e){
        super(), this.plan = "", this.title = "", this.summary = "", this.steps = [], this.oldStr = "", this.newStr = "", this.name = "", this.todos = [], this.overview = "", this.isSpec = !1, this.isProject = !1, this.phases = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ds).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ds).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ds).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ds, e, t);
    }
    static $() {
        return [
            "CreatePlanParams|1 plan 9|2 title 9|3 summary 9|4 steps #0*|5 old_str 9|6 new_str 9|7 name 9|8 todos #1*|9 overview 9|10 is_spec 8|11 is_project 8|12 phases #2*",
            ls,
            Ln,
            us
        ];
    }
}
class ps extends v {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, this.planUri = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ps).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ps).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ps).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ps, e, t);
    }
    static $() {
        return [
            "CreatePlanResult|1 accepted #0 result|2 rejected #1 result|3 modified #2 result|4 plan_uri 9",
            ms,
            hs,
            fs
        ];
    }
}
class ms extends v {
    constructor(e){
        super(), this.finalTodos = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ms).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ms).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ms).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ms, e, t);
    }
    static $() {
        return [
            "CreatePlanResult.Accepted|1 final_todos #0*",
            Ln
        ];
    }
}
class hs extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new hs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new hs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new hs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(hs, e, t);
    }
    static $() {
        return [
            "CreatePlanResult.Rejected"
        ];
    }
}
class fs extends v {
    constructor(e){
        super(), this.newPlan = "", this.finalTodos = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new fs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new fs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new fs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(fs, e, t);
    }
    static $() {
        return [
            "CreatePlanResult.Modified|1 new_plan 9|2 final_todos #0*",
            Ln
        ];
    }
}
class gs extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new gs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new gs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new gs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(gs, e, t);
    }
    static $() {
        return [
            "CreatePlanStream"
        ];
    }
}
class ys extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ys).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ys).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ys).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ys, e, t);
    }
    static $() {
        return [
            "ReadProjectParams"
        ];
    }
}
class ws extends v {
    constructor(e){
        super(), this.plan = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ws).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ws).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ws).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ws, e, t);
    }
    static $() {
        return [
            "ReadProjectResult|1 plan 9"
        ];
    }
}
class vs extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new vs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new vs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new vs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(vs, e, t);
    }
    static $() {
        return [
            "ReadProjectStream"
        ];
    }
}
class _s extends v {
    constructor(e){
        super(), this.oldString = "", this.newString = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _s).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _s).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _s).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_s, e, t);
    }
    static $() {
        return [
            "UpdateProjectStringReplacement|1 old_string 9|2 new_string 9"
        ];
    }
}
class bs extends v {
    constructor(e){
        super(), this.stringReplacements = [], this.summary = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new bs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new bs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new bs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(bs, e, t);
    }
    static $() {
        return [
            "UpdateProjectParams|1 string_replacements #0*|2 summary 9",
            _s
        ];
    }
}
class Ss extends v {
    constructor(e){
        super(), this.success = !1, this.updatedPlan = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ss).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ss).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ss).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ss, e, t);
    }
    static $() {
        return [
            "UpdateProjectResult|1 success 8|2 updated_plan 9"
        ];
    }
}
class ks extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ks).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ks).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ks).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ks, e, t);
    }
    static $() {
        return [
            "UpdateProjectStream"
        ];
    }
}
class xs extends v {
    constructor(e){
        super(), this.title = "", this.questions = [], this.runAsync = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new xs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new xs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new xs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(xs, e, t);
    }
    static $() {
        return [
            "AskQuestionParams|1 title 9|2 questions #0*|3 run_async 8",
            Es
        ];
    }
}
class Es extends v {
    constructor(e){
        super(), this.id = "", this.prompt = "", this.options = [], this.allowMultiple = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Es).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Es).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Es).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Es, e, t);
    }
    static $() {
        return [
            "AskQuestionParams.Question|1 id 9|2 prompt 9|3 options #0*|4 allow_multiple 8",
            Is
        ];
    }
}
class Is extends v {
    constructor(e){
        super(), this.id = "", this.label = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Is).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Is).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Is).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Is, e, t);
    }
    static $() {
        return [
            "AskQuestionParams.Option|1 id 9|2 label 9"
        ];
    }
}
class Ts extends v {
    constructor(e){
        super(), this.answers = [], this.isAsync = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ts).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ts).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ts).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ts, e, t);
    }
    static $() {
        return [
            "AskQuestionResult|1 answers #0*|2 is_async 8",
            Cs
        ];
    }
}
class Cs extends v {
    constructor(e){
        super(), this.questionId = "", this.selectedOptionIds = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Cs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Cs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Cs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Cs, e, t);
    }
    static $() {
        return [
            "AskQuestionResult.Answer|1 question_id 9|2 selected_option_ids 9*|3 freeform_text 9?"
        ];
    }
}
class Ps extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ps).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ps).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ps).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ps, e, t);
    }
    static $() {
        return [
            "AskQuestionStream|1 params #0",
            xs
        ];
    }
}
class As extends v {
    constructor(e){
        super(), this.fromModeId = "", this.toModeId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new As).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new As).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new As).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(As, e, t);
    }
    static $() {
        return [
            "SwitchModeParams|1 from_mode_id 9|2 to_mode_id 9|3 explanation 9?"
        ];
    }
}
class Rs extends v {
    constructor(e){
        super(), this.fromModeId = "", this.toModeId = "", this.autoApproved = !1, this.userApproved = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Rs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Rs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Rs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Rs, e, t);
    }
    static $() {
        return [
            "SwitchModeResult|1 from_mode_id 9|2 to_mode_id 9|3 auto_approved 8|4 user_approved 8"
        ];
    }
}
class Ms extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ms).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ms).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ms).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ms, e, t);
    }
    static $() {
        return [
            "SwitchModeStream|1 params #0",
            As
        ];
    }
}
class Js extends v {
    constructor(e){
        super(), this.actions = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Js).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Js).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Js).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Js, e, t);
    }
    static $() {
        return [
            "ComputerUseParams|1 actions #0*",
            f.ho
        ];
    }
}
class Os extends v {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Os).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Os).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Os).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Os, e, t);
    }
    static $() {
        return [
            "ComputerUseResult|1 success #0 result|2 error #1 result",
            f.Wd,
            f.Jb
        ];
    }
}
class Bs extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Bs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Bs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Bs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Bs, e, t);
    }
    static $() {
        return [
            "ComputerUseStream|1 params #0",
            Js
        ];
    }
}
class Ds extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ds).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ds).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ds).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ds, e, t);
    }
    static $() {
        return [
            "WriteShellStdinStream|1 params #0",
            o.LL
        ];
    }
}
class qs extends v {
    constructor(e){
        super(), this.url = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new qs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new qs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new qs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(qs, e, t);
    }
    static $() {
        return [
            "WebFetchParams|1 url 9"
        ];
    }
}
class Ns extends v {
    constructor(e){
        super(), this.url = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ns).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ns).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ns).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ns, e, t);
    }
    static $() {
        return [
            "WebFetchResult|1 url 9|2 markdown 9?|3 error 9?"
        ];
    }
}
class Fs extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Fs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Fs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Fs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Fs, e, t);
    }
    static $() {
        return [
            "WebFetchStream|1 params #0",
            qs
        ];
    }
}
class Us extends v {
    constructor(e){
        super(), this.summary = "", this.results = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Us).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Us).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Us).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Us, e, t);
    }
    static $() {
        return [
            "ReportBugfixResultsParams|1 summary 9|2 results #0*",
            g.Y6
        ];
    }
}
class Ls extends v {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ls).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ls).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ls).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ls, e, t);
    }
    static $() {
        return [
            "ReportBugfixResultsResult|1 success #0 result|2 error #1 result",
            g.RH,
            g.q3
        ];
    }
}
class $s extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new $s).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new $s).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new $s).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals($s, e, t);
    }
    static $() {
        return [
            "ReportBugfixResultsStream|1 params #0",
            Us
        ];
    }
}
class js extends v {
    constructor(e){
        super(), this.serverIdentifier = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new js).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new js).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new js).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(js, e, t);
    }
    static $() {
        return [
            "McpAuthParams|1 server_identifier 9"
        ];
    }
}
class Gs extends v {
    constructor(e){
        super(), this.success = !1, this.message = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Gs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Gs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Gs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Gs, e, t);
    }
    static $() {
        return [
            "McpAuthResult|1 success 8|2 message 9"
        ];
    }
}
class zs extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new zs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new zs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new zs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(zs, e, t);
    }
    static $() {
        return [
            "McpAuthStream"
        ];
    }
}
class Ws extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ws).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ws).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ws).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ws, e, t);
    }
    static $() {
        return [
            "ConnectScmParams|1 github #0",
            Hs
        ];
    }
}
class Hs extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Hs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Hs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Hs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Hs, e, t);
    }
    static $() {
        return [
            "ConnectScmGithub|1 repository #0|2 ghe_application 9?",
            Ks
        ];
    }
}
class Ks extends v {
    constructor(e){
        super(), this.owner = "", this.repo = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ks).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ks).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ks).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ks, e, t);
    }
    static $() {
        return [
            "ConnectScmGithubRepository|1 owner 9|2 repo 9"
        ];
    }
}
class Vs extends v {
    constructor(e){
        super(), this.success = !1, this.message = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Vs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Vs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Vs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Vs, e, t);
    }
    static $() {
        return [
            "ConnectScmResult|1 success 8|2 message 9"
        ];
    }
}
class Ys extends v {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ys).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ys).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ys).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ys, e, t);
    }
    static $() {
        return [
            "ConnectScmStream"
        ];
    }
}
