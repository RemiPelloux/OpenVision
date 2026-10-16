import { cBs, g3i } from "./ai_attribution_tool_pb.js";
import { Xxn, Zxn } from "./apply_agent_diff_tool_pb.js";
import { Cbt, GZe, H6e } from "./background_shell_exec_pb.js";
import { LBs, NBs, OBs, rIn } from "./computer_use_tool_pb.js";
import { W6e, jZe } from "./generate_image_tool_pb.js";
import { E3i, G6e } from "./ls_exec_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { HUt, Tbt, VZe } from "./record_screen_exec_pb.js";
import { BBs, UBs, tvu, x3i } from "./report_bugfix_results_tool_pb.js";
import { YO, nX, w1 } from "./repository_pb.js";
import { U6e, zue } from "./sandbox_pb.js";
import { hee, qxn } from "./shell_exec_pb.js";
import { fd } from "./struct_pb.js";
import { Jxn, Pj } from "./subagents_pb.js";
import { Nr } from "./timestamp_pb.js";
import { x } from "./tslib.es6.js";
import { AJ, Cbn, Ess, KSi, Vle, YSi, c6, ffe, hu, oN, wRe, x3 } from "./utils_pb.js";
var nt, I3i, A3i, iX, sIn, YUt, R3i, oIn, D3i, HBs, nvu, mse, WBs, GBs, Kue, xR, VBs, jBs, qBs, zBs, KBs, M3i, YBs, pee, XBs, ZBs, lMe, QBs, aIn, P3i, qZe, JBs, e5s, t5s, n5s, i5s, r5s, cIn, s5s, lIn, o5s, L3i, a5s, uIn, dIn, c5s, l5s, hIn, pIn, u5s, mIn, d5s, h5s, p5s, m5s, g5s, f5s, N3i, v5s, _5s, O3i, b5s, y5s, S5s, k5s, w5s, C5s, T5s, E5s, F3i, x5s, I5s, A5s, R5s, D5s, M5s, P5s, L5s, N5s, XUt, B3i, O5s, U3i, $3i, ZUt, F5s, QUt, JUt, B5s, Abt, Rbt, U5s, $5s, H5s, W5s, G5s, V5s, j5s, ivu, H3i, gIn, q5s, z5s, K5s, Y5s, X5s, Z5s, Q5s, J5s, e9s, t9s, n9s, i9s, W3i, r9s, s9s, o9s, a9s, c9s, l9s, u9s, d9s, h9s, p9s, m9s, g9s, f9s, v9s, rvu, _9s, e8t, b9s, fIn, y9s, S9s, k9s, w9s, C9s, T9s, E9s, x9s, I9s, A9s, R9s, D9s, M9s, P9s, L9s, N9s, O9s, F9s, B9s, U9s, $9s, H9s, W9s, G9s, G3i, V9s, j9s, q9s, C0e, vIn, _In, Lj, z9s, K9s, Dbt, Mbt, V3i, Y9s, t8t, zZe, X9s, bIn, Z9s, n8t, yIn, j3i, i8t, SIn, kIn, q3i, r8t, wIn, CIn, z3i, Q9s, J9s, TIn, K3i, e6s, svu, ovu, avu, EIn, Y3i, t6s, xIn, X3i, n6s, i6s, Z3i, IIn, Q3i, r6s, AIn, J3i, s6s, RIn, eBi, tBi, o6s, s8t, DIn, a6s, c6s, nBi, l6s, iBi, u6s, d6s, V6e, j6e, h6s, Pbt, o8t, MIn, rBi, a8t, PIn, LIn, NIn, p6s, OIn, FIn, BIn, m6s, sBi, g6s, f6s, v6s, UIn, DI, oBi, _6s, Lbt, q6e, b6s, c8t, l8t, aBi, y6s, S6s, Nbt, uMe, k6s, u8t, $In, cBi, lBi, w6s, C6s, T6s, E6s, x6s, I6s, KZe, Obt, A6s, R6s, D6s, M6s, HIn, uBi, P6s, L6s, WIn, dBi, N6s, Pve, hBi, pBi, mee, mBi, O6s, YZe, d8t, F6s, Fbt, h8t, B6s, U6s, XZe, p8t, $6s, m8t, gBi, H6s, ZZe, gse, W6s, Bbt, GIn, VIn, jIn, G6s;
export { $3i, $5s, $6s, $9s, $In, A3i, A5s, A6s, A9s, AIn, Abt, B3i, B5s, B6s, B9s, BIn, Bbt, C0e, C5s, C6s, C9s, CIn, D3i, D5s, D6s, D9s, DI, DIn, Dbt, E5s, E6s, E9s, EIn, F3i, F5s, F6s, F9s, FIn, Fbt, G3i, G5s, G6s, G9s, GBs, GIn, H3i, H5s, H6s, H9s, HBs, HIn, I3i, I5s, I6s, I9s, IIn, J3i, J5s, J9s, JBs, JUt, K3i, K5s, K9s, KBs, KZe, Kue, L3i, L5s, L6s, L9s, LIn, Lbt, Lj, M3i, M5s, M6s, M9s, MIn, Mbt, N3i, N5s, N6s, N9s, NIn, Nbt, O3i, O5s, O6s, O9s, OIn, Obt, P3i, P5s, P6s, P9s, PIn, Pbt, Pve, Q3i, Q5s, Q9s, QBs, QUt, R3i, R5s, R6s, R9s, RIn, Rbt, S5s, S6s, S9s, SIn, T5s, T6s, T9s, TIn, U3i, U5s, U6s, U9s, UIn, V3i, V5s, V6e, V9s, VBs, VIn, W3i, W5s, W6s, W9s, WBs, WIn, X3i, X5s, X9s, XBs, XUt, XZe, Y3i, Y5s, Y9s, YBs, YUt, YZe, Z3i, Z5s, Z9s, ZBs, ZUt, ZZe, _5s, _6s, _9s, _In, a5s, a6s, a8t, a9s, aBi, aIn, avu, b5s, b6s, b9s, bIn, c5s, c6s, c8t, c9s, cBi, cIn, d5s, d6s, d8t, d9s, dBi, dIn, e5s, e6s, e8t, e9s, eBi, f5s, f6s, f9s, fIn, g5s, g6s, g9s, gBi, gIn, gse, h5s, h6s, h8t, h9s, hBi, hIn, i5s, i6s, i8t, i9s, iBi, iX, ivu, j3i, j5s, j6e, j9s, jBs, jIn, k5s, k6s, k9s, kIn, l5s, l6s, l8t, l9s, lBi, lIn, lMe, m5s, m6s, m8t, m9s, mBi, mIn, mee, mse, n5s, n6s, n8t, n9s, nBi, nt, nvu, o5s, o6s, o8t, o9s, oBi, oIn, ovu, p5s, p6s, p8t, p9s, pBi, pIn, pee, q3i, q5s, q6e, q9s, qBs, qZe, r5s, r6s, r8t, r9s, rBi, rvu, s5s, s6s, s8t, s9s, sBi, sIn, svu, t5s, t6s, t8t, t9s, tBi, u5s, u6s, u8t, u9s, uBi, uIn, uMe, v5s, v6s, v9s, vIn, w5s, w6s, w9s, wIn, x5s, x6s, x9s, xIn, xR, y5s, y6s, y9s, yIn, z3i, z5s, z9s, zBs, zZe };
var __wakaru_ql_initialized = false;
export function ql() {
if (__wakaru_ql_initialized) return;
__wakaru_ql_initialized = true;
"use strict";
x(), bi(), hu(), GZe(), Tbt(), Zxn(), jZe(), cBs(), nX(), U6e(), hee(), Pj(), G6e(), rIn(), tvu(), nt = k.makeEnum("aiserver.v1.ClientSideToolV2", [
    {
        no: 0,
        name: "CLIENT_SIDE_TOOL_V2_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CLIENT_SIDE_TOOL_V2_READ_SEMSEARCH_FILES",
        localName: "READ_SEMSEARCH_FILES"
    },
    {
        no: 3,
        name: "CLIENT_SIDE_TOOL_V2_RIPGREP_SEARCH",
        localName: "RIPGREP_SEARCH"
    },
    {
        no: 5,
        name: "CLIENT_SIDE_TOOL_V2_READ_FILE",
        localName: "READ_FILE"
    },
    {
        no: 6,
        name: "CLIENT_SIDE_TOOL_V2_LIST_DIR",
        localName: "LIST_DIR"
    },
    {
        no: 7,
        name: "CLIENT_SIDE_TOOL_V2_EDIT_FILE",
        localName: "EDIT_FILE"
    },
    {
        no: 8,
        name: "CLIENT_SIDE_TOOL_V2_FILE_SEARCH",
        localName: "FILE_SEARCH"
    },
    {
        no: 9,
        name: "CLIENT_SIDE_TOOL_V2_SEMANTIC_SEARCH_FULL",
        localName: "SEMANTIC_SEARCH_FULL"
    },
    {
        no: 11,
        name: "CLIENT_SIDE_TOOL_V2_DELETE_FILE",
        localName: "DELETE_FILE"
    },
    {
        no: 12,
        name: "CLIENT_SIDE_TOOL_V2_REAPPLY",
        localName: "REAPPLY"
    },
    {
        no: 15,
        name: "CLIENT_SIDE_TOOL_V2_RUN_TERMINAL_COMMAND_V2",
        localName: "RUN_TERMINAL_COMMAND_V2"
    },
    {
        no: 16,
        name: "CLIENT_SIDE_TOOL_V2_FETCH_RULES",
        localName: "FETCH_RULES"
    },
    {
        no: 18,
        name: "CLIENT_SIDE_TOOL_V2_WEB_SEARCH",
        localName: "WEB_SEARCH"
    },
    {
        no: 19,
        name: "CLIENT_SIDE_TOOL_V2_MCP",
        localName: "MCP"
    },
    {
        no: 23,
        name: "CLIENT_SIDE_TOOL_V2_SEARCH_SYMBOLS",
        localName: "SEARCH_SYMBOLS"
    },
    {
        no: 24,
        name: "CLIENT_SIDE_TOOL_V2_BACKGROUND_COMPOSER_FOLLOWUP",
        localName: "BACKGROUND_COMPOSER_FOLLOWUP"
    },
    {
        no: 25,
        name: "CLIENT_SIDE_TOOL_V2_KNOWLEDGE_BASE",
        localName: "KNOWLEDGE_BASE"
    },
    {
        no: 26,
        name: "CLIENT_SIDE_TOOL_V2_FETCH_PULL_REQUEST",
        localName: "FETCH_PULL_REQUEST"
    },
    {
        no: 27,
        name: "CLIENT_SIDE_TOOL_V2_DEEP_SEARCH",
        localName: "DEEP_SEARCH"
    },
    {
        no: 28,
        name: "CLIENT_SIDE_TOOL_V2_CREATE_DIAGRAM",
        localName: "CREATE_DIAGRAM"
    },
    {
        no: 29,
        name: "CLIENT_SIDE_TOOL_V2_FIX_LINTS",
        localName: "FIX_LINTS"
    },
    {
        no: 30,
        name: "CLIENT_SIDE_TOOL_V2_READ_LINTS",
        localName: "READ_LINTS"
    },
    {
        no: 31,
        name: "CLIENT_SIDE_TOOL_V2_GO_TO_DEFINITION",
        localName: "GO_TO_DEFINITION"
    },
    {
        no: 32,
        name: "CLIENT_SIDE_TOOL_V2_TASK",
        localName: "TASK"
    },
    {
        no: 33,
        name: "CLIENT_SIDE_TOOL_V2_AWAIT_TASK",
        localName: "AWAIT_TASK"
    },
    {
        no: 34,
        name: "CLIENT_SIDE_TOOL_V2_TODO_READ",
        localName: "TODO_READ"
    },
    {
        no: 35,
        name: "CLIENT_SIDE_TOOL_V2_TODO_WRITE",
        localName: "TODO_WRITE"
    },
    {
        no: 38,
        name: "CLIENT_SIDE_TOOL_V2_EDIT_FILE_V2",
        localName: "EDIT_FILE_V2"
    },
    {
        no: 39,
        name: "CLIENT_SIDE_TOOL_V2_LIST_DIR_V2",
        localName: "LIST_DIR_V2"
    },
    {
        no: 40,
        name: "CLIENT_SIDE_TOOL_V2_READ_FILE_V2",
        localName: "READ_FILE_V2"
    },
    {
        no: 41,
        name: "CLIENT_SIDE_TOOL_V2_RIPGREP_RAW_SEARCH",
        localName: "RIPGREP_RAW_SEARCH"
    },
    {
        no: 42,
        name: "CLIENT_SIDE_TOOL_V2_GLOB_FILE_SEARCH",
        localName: "GLOB_FILE_SEARCH"
    },
    {
        no: 43,
        name: "CLIENT_SIDE_TOOL_V2_CREATE_PLAN",
        localName: "CREATE_PLAN"
    },
    {
        no: 44,
        name: "CLIENT_SIDE_TOOL_V2_LIST_MCP_RESOURCES",
        localName: "LIST_MCP_RESOURCES"
    },
    {
        no: 45,
        name: "CLIENT_SIDE_TOOL_V2_READ_MCP_RESOURCE",
        localName: "READ_MCP_RESOURCE"
    },
    {
        no: 46,
        name: "CLIENT_SIDE_TOOL_V2_READ_PROJECT",
        localName: "READ_PROJECT"
    },
    {
        no: 47,
        name: "CLIENT_SIDE_TOOL_V2_UPDATE_PROJECT",
        localName: "UPDATE_PROJECT"
    },
    {
        no: 48,
        name: "CLIENT_SIDE_TOOL_V2_TASK_V2",
        localName: "TASK_V2"
    },
    {
        no: 49,
        name: "CLIENT_SIDE_TOOL_V2_CALL_MCP_TOOL",
        localName: "CALL_MCP_TOOL"
    },
    {
        no: 50,
        name: "CLIENT_SIDE_TOOL_V2_APPLY_AGENT_DIFF",
        localName: "APPLY_AGENT_DIFF"
    },
    {
        no: 51,
        name: "CLIENT_SIDE_TOOL_V2_ASK_QUESTION",
        localName: "ASK_QUESTION"
    },
    {
        no: 52,
        name: "CLIENT_SIDE_TOOL_V2_SWITCH_MODE",
        localName: "SWITCH_MODE"
    },
    {
        no: 53,
        name: "CLIENT_SIDE_TOOL_V2_GENERATE_IMAGE",
        localName: "GENERATE_IMAGE"
    },
    {
        no: 54,
        name: "CLIENT_SIDE_TOOL_V2_COMPUTER_USE",
        localName: "COMPUTER_USE"
    },
    {
        no: 55,
        name: "CLIENT_SIDE_TOOL_V2_WRITE_SHELL_STDIN",
        localName: "WRITE_SHELL_STDIN"
    },
    {
        no: 56,
        name: "CLIENT_SIDE_TOOL_V2_RECORD_SCREEN",
        localName: "RECORD_SCREEN"
    },
    {
        no: 57,
        name: "CLIENT_SIDE_TOOL_V2_WEB_FETCH",
        localName: "WEB_FETCH"
    },
    {
        no: 58,
        name: "CLIENT_SIDE_TOOL_V2_REPORT_BUGFIX_RESULTS",
        localName: "REPORT_BUGFIX_RESULTS"
    },
    {
        no: 59,
        name: "CLIENT_SIDE_TOOL_V2_AI_ATTRIBUTION",
        localName: "AI_ATTRIBUTION"
    },
    {
        no: 60,
        name: "CLIENT_SIDE_TOOL_V2_MCP_AUTH",
        localName: "MCP_AUTH"
    },
    {
        no: 61,
        name: "CLIENT_SIDE_TOOL_V2_REFLECT",
        localName: "REFLECT"
    },
    {
        no: 62,
        name: "CLIENT_SIDE_TOOL_V2_AWAIT",
        localName: "AWAIT"
    },
    {
        no: 63,
        name: "CLIENT_SIDE_TOOL_V2_GET_MCP_TOOLS",
        localName: "GET_MCP_TOOLS"
    },
    {
        no: 65,
        name: "CLIENT_SIDE_TOOL_V2_SEND_TO_USER",
        localName: "SEND_TO_USER"
    },
    {
        no: 66,
        name: "CLIENT_SIDE_TOOL_V2_CONNECT_SCM",
        localName: "CONNECT_SCM"
    }
]), I3i = k.makeEnum("aiserver.v1.ShellType", [
    {
        no: 0,
        name: "SHELL_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SHELL_TYPE_BASH",
        localName: "BASH"
    },
    {
        no: 2,
        name: "SHELL_TYPE_POWERSHELL",
        localName: "POWERSHELL"
    }
]), A3i = k.makeEnum("aiserver.v1.BuiltinTool", [
    {
        no: 0,
        name: "BUILTIN_TOOL_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BUILTIN_TOOL_SEARCH",
        localName: "SEARCH"
    },
    {
        no: 2,
        name: "BUILTIN_TOOL_READ_CHUNK",
        localName: "READ_CHUNK"
    },
    {
        no: 3,
        name: "BUILTIN_TOOL_GOTODEF",
        localName: "GOTODEF"
    },
    {
        no: 4,
        name: "BUILTIN_TOOL_EDIT",
        localName: "EDIT"
    },
    {
        no: 5,
        name: "BUILTIN_TOOL_UNDO_EDIT",
        localName: "UNDO_EDIT"
    },
    {
        no: 6,
        name: "BUILTIN_TOOL_END",
        localName: "END"
    },
    {
        no: 7,
        name: "BUILTIN_TOOL_NEW_FILE",
        localName: "NEW_FILE"
    },
    {
        no: 8,
        name: "BUILTIN_TOOL_ADD_TEST",
        localName: "ADD_TEST"
    },
    {
        no: 9,
        name: "BUILTIN_TOOL_RUN_TEST",
        localName: "RUN_TEST"
    },
    {
        no: 10,
        name: "BUILTIN_TOOL_DELETE_TEST",
        localName: "DELETE_TEST"
    },
    {
        no: 11,
        name: "BUILTIN_TOOL_SAVE_FILE",
        localName: "SAVE_FILE"
    },
    {
        no: 12,
        name: "BUILTIN_TOOL_GET_TESTS",
        localName: "GET_TESTS"
    },
    {
        no: 13,
        name: "BUILTIN_TOOL_GET_SYMBOLS",
        localName: "GET_SYMBOLS"
    },
    {
        no: 14,
        name: "BUILTIN_TOOL_SEMANTIC_SEARCH",
        localName: "SEMANTIC_SEARCH"
    },
    {
        no: 15,
        name: "BUILTIN_TOOL_GET_PROJECT_STRUCTURE",
        localName: "GET_PROJECT_STRUCTURE"
    },
    {
        no: 16,
        name: "BUILTIN_TOOL_CREATE_RM_FILES",
        localName: "CREATE_RM_FILES"
    },
    {
        no: 17,
        name: "BUILTIN_TOOL_RUN_TERMINAL_COMMANDS",
        localName: "RUN_TERMINAL_COMMANDS"
    },
    {
        no: 18,
        name: "BUILTIN_TOOL_NEW_EDIT",
        localName: "NEW_EDIT"
    },
    {
        no: 19,
        name: "BUILTIN_TOOL_READ_WITH_LINTER",
        localName: "READ_WITH_LINTER"
    }
]), iX = k.makeEnum("aiserver.v1.RunTerminalCommandEndedReason", [
    {
        no: 0,
        name: "RUN_TERMINAL_COMMAND_ENDED_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "RUN_TERMINAL_COMMAND_ENDED_REASON_EXECUTION_COMPLETED",
        localName: "EXECUTION_COMPLETED"
    },
    {
        no: 2,
        name: "RUN_TERMINAL_COMMAND_ENDED_REASON_EXECUTION_ABORTED",
        localName: "EXECUTION_ABORTED"
    },
    {
        no: 3,
        name: "RUN_TERMINAL_COMMAND_ENDED_REASON_EXECUTION_FAILED",
        localName: "EXECUTION_FAILED"
    },
    {
        no: 4,
        name: "RUN_TERMINAL_COMMAND_ENDED_REASON_ERROR_OCCURRED_CHECKING_REASON",
        localName: "ERROR_OCCURRED_CHECKING_REASON"
    },
    {
        no: 5,
        name: "RUN_TERMINAL_COMMAND_ENDED_REASON_IDLE_TIMEOUT",
        localName: "IDLE_TIMEOUT"
    }
]), sIn = k.makeMessageType("aiserver.v1.ReapplyParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]), YUt = k.makeMessageType("aiserver.v1.ApplyAgentDiffParams", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        }
    ]), R3i = k.makeMessageType("aiserver.v1.ReapplyResult", ()=>[
        {
            no: 1,
            name: "diff",
            kind: "message",
            T: qZe
        },
        {
            no: 2,
            name: "is_applied",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "apply_failed",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "linter_errors",
            kind: "message",
            T: AJ,
            repeated: !0
        },
        {
            no: 5,
            name: "rejected",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), oIn = k.makeMessageType("aiserver.v1.FetchRulesParams", ()=>[
        {
            no: 1,
            name: "rule_names",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), D3i = k.makeMessageType("aiserver.v1.FetchRulesResult", ()=>[
        {
            no: 1,
            name: "rules",
            kind: "message",
            T: wRe,
            repeated: !0
        }
    ]), HBs = k.makeMessageType("aiserver.v1.ReapplyStream", []), nvu = k.makeMessageType("aiserver.v1.SemanticSearchArguments", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "target_directories",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "explanation",
            kind: "scalar",
            T: 9
        }
    ]), mse = k.makeMessageType("aiserver.v1.ToolResultError", ()=>[
        {
            no: 1,
            name: "client_visible_error_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "model_visible_error_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "actual_error_message_only_send_from_client_to_server_never_the_other_way_around_because_that_may_be_a_security_risk",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "edit_file_error_details",
            kind: "message",
            T: WBs,
            oneof: "error_details"
        },
        {
            no: 6,
            name: "search_replace_error_details",
            kind: "message",
            T: GBs,
            oneof: "error_details"
        }
    ]), WBs = k.makeMessageType("aiserver.v1.ToolResultError.EditFileError", ()=>[
        {
            no: 1,
            name: "num_lines_in_file_before_edit",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ToolResultError_EditFileError"
}), GBs = k.makeMessageType("aiserver.v1.ToolResultError.SearchReplaceError", ()=>[
        {
            no: 1,
            name: "num_lines_in_file_before_edit",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ToolResultError_SearchReplaceError"
}), Kue = k.makeMessageType("aiserver.v1.ClientSideToolV2Call", ()=>[
        {
            no: 1,
            name: "tool",
            kind: "enum",
            T: k.getEnumType(nt)
        },
        {
            no: 2,
            name: "read_semsearch_files_params",
            kind: "message",
            T: XUt,
            oneof: "params"
        },
        {
            no: 5,
            name: "ripgrep_search_params",
            kind: "message",
            T: mIn,
            oneof: "params"
        },
        {
            no: 8,
            name: "read_file_params",
            kind: "message",
            T: hIn,
            oneof: "params"
        },
        {
            no: 12,
            name: "list_dir_params",
            kind: "message",
            T: uIn,
            oneof: "params"
        },
        {
            no: 13,
            name: "edit_file_params",
            kind: "message",
            T: aIn,
            oneof: "params"
        },
        {
            no: 16,
            name: "file_search_params",
            kind: "message",
            T: lIn,
            oneof: "params"
        },
        {
            no: 17,
            name: "semantic_search_full_params",
            kind: "message",
            T: QUt,
            oneof: "params"
        },
        {
            no: 19,
            name: "delete_file_params",
            kind: "message",
            T: Abt,
            oneof: "params"
        },
        {
            no: 20,
            name: "reapply_params",
            kind: "message",
            T: sIn,
            oneof: "params"
        },
        {
            no: 23,
            name: "run_terminal_command_v2_params",
            kind: "message",
            T: C0e,
            oneof: "params"
        },
        {
            no: 24,
            name: "fetch_rules_params",
            kind: "message",
            T: oIn,
            oneof: "params"
        },
        {
            no: 26,
            name: "web_search_params",
            kind: "message",
            T: Dbt,
            oneof: "params"
        },
        {
            no: 27,
            name: "mcp_params",
            kind: "message",
            T: t8t,
            oneof: "params"
        },
        {
            no: 31,
            name: "search_symbols_params",
            kind: "message",
            T: CIn,
            oneof: "params"
        },
        {
            no: 41,
            name: "gotodef_params",
            kind: "message",
            T: e8t,
            oneof: "params"
        },
        {
            no: 32,
            name: "background_composer_followup_params",
            kind: "message",
            T: TIn,
            oneof: "params"
        },
        {
            no: 33,
            name: "knowledge_base_params",
            kind: "message",
            T: EIn,
            oneof: "params"
        },
        {
            no: 34,
            name: "fetch_pull_request_params",
            kind: "message",
            T: xIn,
            oneof: "params"
        },
        {
            no: 35,
            name: "deep_search_params",
            kind: "message",
            T: IIn,
            oneof: "params"
        },
        {
            no: 36,
            name: "create_diagram_params",
            kind: "message",
            T: AIn,
            oneof: "params"
        },
        {
            no: 37,
            name: "fix_lints_params",
            kind: "message",
            T: RIn,
            oneof: "params"
        },
        {
            no: 38,
            name: "read_lints_params",
            kind: "message",
            T: s8t,
            oneof: "params"
        },
        {
            no: 42,
            name: "task_params",
            kind: "message",
            T: nBi,
            oneof: "params"
        },
        {
            no: 43,
            name: "await_task_params",
            kind: "message",
            T: sBi,
            oneof: "params"
        },
        {
            no: 44,
            name: "todo_read_params",
            kind: "message",
            T: UIn,
            oneof: "params"
        },
        {
            no: 45,
            name: "todo_write_params",
            kind: "message",
            T: Lbt,
            oneof: "params"
        },
        {
            no: 50,
            name: "edit_file_v2_params",
            kind: "message",
            T: pee,
            oneof: "params"
        },
        {
            no: 52,
            name: "list_dir_v2_params",
            kind: "message",
            T: c8t,
            oneof: "params"
        },
        {
            no: 53,
            name: "read_file_v2_params",
            kind: "message",
            T: Nbt,
            oneof: "params"
        },
        {
            no: 54,
            name: "ripgrep_raw_search_params",
            kind: "message",
            T: Pbt,
            oneof: "params"
        },
        {
            no: 55,
            name: "glob_file_search_params",
            kind: "message",
            T: u8t,
            oneof: "params"
        },
        {
            no: 56,
            name: "create_plan_params",
            kind: "message",
            T: KZe,
            oneof: "params"
        },
        {
            no: 57,
            name: "list_mcp_resources_params",
            kind: "message",
            T: n8t,
            oneof: "params"
        },
        {
            no: 58,
            name: "read_mcp_resource_params",
            kind: "message",
            T: i8t,
            oneof: "params"
        },
        {
            no: 59,
            name: "read_project_params",
            kind: "message",
            T: HIn,
            oneof: "params"
        },
        {
            no: 60,
            name: "update_project_params",
            kind: "message",
            T: WIn,
            oneof: "params"
        },
        {
            no: 61,
            name: "task_v2_params",
            kind: "message",
            T: V6e,
            oneof: "params"
        },
        {
            no: 62,
            name: "call_mcp_tool_params",
            kind: "message",
            T: kIn,
            oneof: "params"
        },
        {
            no: 63,
            name: "apply_agent_diff_params",
            kind: "message",
            T: YUt,
            oneof: "params"
        },
        {
            no: 64,
            name: "ask_question_params",
            kind: "message",
            T: Pve,
            oneof: "params"
        },
        {
            no: 65,
            name: "switch_mode_params",
            kind: "message",
            T: YZe,
            oneof: "params"
        },
        {
            no: 66,
            name: "computer_use_params",
            kind: "message",
            T: Fbt,
            oneof: "params"
        },
        {
            no: 67,
            name: "write_shell_stdin_params",
            kind: "message",
            T: H6e,
            oneof: "params"
        },
        {
            no: 68,
            name: "record_screen_params",
            kind: "message",
            T: VZe,
            oneof: "params"
        },
        {
            no: 69,
            name: "web_fetch_params",
            kind: "message",
            T: XZe,
            oneof: "params"
        },
        {
            no: 70,
            name: "report_bugfix_results_params",
            kind: "message",
            T: m8t,
            oneof: "params"
        },
        {
            no: 71,
            name: "mcp_auth_params",
            kind: "message",
            T: ZZe,
            oneof: "params"
        },
        {
            no: 72,
            name: "get_mcp_tools_params",
            kind: "message",
            T: r8t,
            oneof: "params"
        },
        {
            no: 73,
            name: "connect_scm_params",
            kind: "message",
            T: Bbt,
            oneof: "params"
        },
        {
            no: 3,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "timeout_ms",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 9,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 14,
            name: "is_streaming",
            kind: "scalar",
            T: 8
        },
        {
            no: 15,
            name: "is_last_message",
            kind: "scalar",
            T: 8
        },
        {
            no: 51,
            name: "internal",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "raw_args",
            kind: "scalar",
            T: 9
        },
        {
            no: 48,
            name: "tool_index",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 49,
            name: "model_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), xR = k.makeMessageType("aiserver.v1.ClientSideToolV2Result", ()=>[
        {
            no: 1,
            name: "tool",
            kind: "enum",
            T: k.getEnumType(nt)
        },
        {
            no: 2,
            name: "read_semsearch_files_result",
            kind: "message",
            T: ZUt,
            oneof: "result"
        },
        {
            no: 4,
            name: "ripgrep_search_result",
            kind: "message",
            T: O3i,
            oneof: "result"
        },
        {
            no: 6,
            name: "read_file_result",
            kind: "message",
            T: pIn,
            oneof: "result"
        },
        {
            no: 9,
            name: "list_dir_result",
            kind: "message",
            T: dIn,
            oneof: "result"
        },
        {
            no: 10,
            name: "edit_file_result",
            kind: "message",
            T: P3i,
            oneof: "result"
        },
        {
            no: 11,
            name: "file_search_result",
            kind: "message",
            T: L3i,
            oneof: "result"
        },
        {
            no: 18,
            name: "semantic_search_full_result",
            kind: "message",
            T: JUt,
            oneof: "result"
        },
        {
            no: 20,
            name: "delete_file_result",
            kind: "message",
            T: Rbt,
            oneof: "result"
        },
        {
            no: 21,
            name: "reapply_result",
            kind: "message",
            T: R3i,
            oneof: "result"
        },
        {
            no: 24,
            name: "run_terminal_command_v2_result",
            kind: "message",
            T: Lj,
            oneof: "result"
        },
        {
            no: 25,
            name: "fetch_rules_result",
            kind: "message",
            T: D3i,
            oneof: "result"
        },
        {
            no: 27,
            name: "web_search_result",
            kind: "message",
            T: Mbt,
            oneof: "result"
        },
        {
            no: 28,
            name: "mcp_result",
            kind: "message",
            T: bIn,
            oneof: "result"
        },
        {
            no: 32,
            name: "search_symbols_result",
            kind: "message",
            T: z3i,
            oneof: "result"
        },
        {
            no: 33,
            name: "background_composer_followup_result",
            kind: "message",
            T: K3i,
            oneof: "result"
        },
        {
            no: 34,
            name: "knowledge_base_result",
            kind: "message",
            T: Y3i,
            oneof: "result"
        },
        {
            no: 36,
            name: "fetch_pull_request_result",
            kind: "message",
            T: X3i,
            oneof: "result"
        },
        {
            no: 37,
            name: "deep_search_result",
            kind: "message",
            T: Q3i,
            oneof: "result"
        },
        {
            no: 38,
            name: "create_diagram_result",
            kind: "message",
            T: J3i,
            oneof: "result"
        },
        {
            no: 39,
            name: "fix_lints_result",
            kind: "message",
            T: eBi,
            oneof: "result"
        },
        {
            no: 40,
            name: "read_lints_result",
            kind: "message",
            T: DIn,
            oneof: "result"
        },
        {
            no: 41,
            name: "gotodef_result",
            kind: "message",
            T: fIn,
            oneof: "result"
        },
        {
            no: 42,
            name: "task_result",
            kind: "message",
            T: l6s,
            oneof: "result"
        },
        {
            no: 43,
            name: "await_task_result",
            kind: "message",
            T: g6s,
            oneof: "result"
        },
        {
            no: 44,
            name: "todo_read_result",
            kind: "message",
            T: oBi,
            oneof: "result"
        },
        {
            no: 45,
            name: "todo_write_result",
            kind: "message",
            T: q6e,
            oneof: "result"
        },
        {
            no: 51,
            name: "edit_file_v2_result",
            kind: "message",
            T: lMe,
            oneof: "result"
        },
        {
            no: 52,
            name: "list_dir_v2_result",
            kind: "message",
            T: l8t,
            oneof: "result"
        },
        {
            no: 53,
            name: "read_file_v2_result",
            kind: "message",
            T: uMe,
            oneof: "result"
        },
        {
            no: 54,
            name: "ripgrep_raw_search_result",
            kind: "message",
            T: o8t,
            oneof: "result"
        },
        {
            no: 55,
            name: "glob_file_search_result",
            kind: "message",
            T: $In,
            oneof: "result"
        },
        {
            no: 56,
            name: "create_plan_result",
            kind: "message",
            T: Obt,
            oneof: "result"
        },
        {
            no: 57,
            name: "list_mcp_resources_result",
            kind: "message",
            T: yIn,
            oneof: "result"
        },
        {
            no: 58,
            name: "read_mcp_resource_result",
            kind: "message",
            T: SIn,
            oneof: "result"
        },
        {
            no: 59,
            name: "read_project_result",
            kind: "message",
            T: uBi,
            oneof: "result"
        },
        {
            no: 60,
            name: "update_project_result",
            kind: "message",
            T: dBi,
            oneof: "result"
        },
        {
            no: 61,
            name: "task_v2_result",
            kind: "message",
            T: j6e,
            oneof: "result"
        },
        {
            no: 62,
            name: "call_mcp_tool_result",
            kind: "message",
            T: q3i,
            oneof: "result"
        },
        {
            no: 63,
            name: "apply_agent_diff_result",
            kind: "message",
            T: Xxn,
            oneof: "result"
        },
        {
            no: 64,
            name: "ask_question_result",
            kind: "message",
            T: mee,
            oneof: "result"
        },
        {
            no: 65,
            name: "switch_mode_result",
            kind: "message",
            T: d8t,
            oneof: "result"
        },
        {
            no: 66,
            name: "computer_use_result",
            kind: "message",
            T: h8t,
            oneof: "result"
        },
        {
            no: 67,
            name: "generate_image_result",
            kind: "message",
            T: W6e,
            oneof: "result"
        },
        {
            no: 68,
            name: "write_shell_stdin_result",
            kind: "message",
            T: Cbt,
            oneof: "result"
        },
        {
            no: 69,
            name: "record_screen_result",
            kind: "message",
            T: HUt,
            oneof: "result"
        },
        {
            no: 70,
            name: "web_fetch_result",
            kind: "message",
            T: p8t,
            oneof: "result"
        },
        {
            no: 71,
            name: "report_bugfix_results_result",
            kind: "message",
            T: gBi,
            oneof: "result"
        },
        {
            no: 72,
            name: "ai_attribution_result",
            kind: "message",
            T: g3i,
            oneof: "result"
        },
        {
            no: 73,
            name: "mcp_auth_result",
            kind: "message",
            T: gse,
            oneof: "result"
        },
        {
            no: 74,
            name: "get_mcp_tools_result",
            kind: "message",
            T: wIn,
            oneof: "result"
        },
        {
            no: 75,
            name: "connect_scm_result",
            kind: "message",
            T: jIn,
            oneof: "result"
        },
        {
            no: 35,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "error",
            kind: "message",
            T: mse,
            opt: !0
        },
        {
            no: 48,
            name: "model_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 49,
            name: "tool_index",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 50,
            name: "attachments",
            kind: "message",
            T: jBs,
            opt: !0
        }
    ]), VBs = k.makeMessageType("aiserver.v1.NudgeMessage", ()=>[
        {
            no: 1,
            name: "raw_message",
            kind: "scalar",
            T: 9
        }
    ]), jBs = k.makeMessageType("aiserver.v1.ToolResultAttachments", ()=>[
        {
            no: 1,
            name: "original_todos",
            kind: "message",
            T: DI,
            repeated: !0
        },
        {
            no: 2,
            name: "updated_todos",
            kind: "message",
            T: DI,
            repeated: !0
        },
        {
            no: 3,
            name: "nudge_messages",
            kind: "message",
            T: VBs,
            repeated: !0
        },
        {
            no: 4,
            name: "should_show_todo_write_reminder",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "todo_reminder_type",
            kind: "enum",
            T: k.getEnumType(qBs)
        },
        {
            no: 6,
            name: "discovery_budget_reminder",
            kind: "message",
            T: zBs,
            opt: !0
        }
    ]), qBs = k.makeEnum("aiserver.v1.ToolResultAttachments.TodoReminderType", [
    {
        no: 0,
        name: "TODO_REMINDER_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "TODO_REMINDER_TYPE_EVERY_10_TURNS",
        localName: "EVERY_10_TURNS"
    },
    {
        no: 2,
        name: "TODO_REMINDER_TYPE_AFTER_EDIT",
        localName: "AFTER_EDIT"
    }
]), zBs = k.makeMessageType("aiserver.v1.ToolResultAttachments.DiscoveryBudgetReminder", ()=>[
        {
            no: 1,
            name: "discovery_rounds_remaining",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "discovery_effort",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "ToolResultAttachments_DiscoveryBudgetReminder"
}), KBs = k.makeMessageType("aiserver.v1.StreamedBackPartialToolCall", ()=>[
        {
            no: 1,
            name: "tool",
            kind: "enum",
            T: k.getEnumType(nt)
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "tool_index",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 5,
            name: "model_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), M3i = k.makeMessageType("aiserver.v1.StreamedBackToolCall", ()=>[
        {
            no: 1,
            name: "tool",
            kind: "enum",
            T: k.getEnumType(nt)
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "read_semsearch_files_stream",
            kind: "message",
            T: F5s,
            oneof: "params"
        },
        {
            no: 5,
            name: "ripgrep_search_stream",
            kind: "message",
            T: N5s,
            oneof: "params"
        },
        {
            no: 7,
            name: "read_file_stream",
            kind: "message",
            T: u5s,
            oneof: "params"
        },
        {
            no: 12,
            name: "list_dir_stream",
            kind: "message",
            T: l5s,
            oneof: "params"
        },
        {
            no: 13,
            name: "edit_file_stream",
            kind: "message",
            T: s5s,
            oneof: "params"
        },
        {
            no: 14,
            name: "file_search_stream",
            kind: "message",
            T: o5s,
            oneof: "params"
        },
        {
            no: 19,
            name: "semantic_search_full_stream",
            kind: "message",
            T: B5s,
            oneof: "params"
        },
        {
            no: 21,
            name: "delete_file_stream",
            kind: "message",
            T: U5s,
            oneof: "params"
        },
        {
            no: 22,
            name: "reapply_stream",
            kind: "message",
            T: HBs,
            oneof: "params"
        },
        {
            no: 25,
            name: "run_terminal_command_v2_stream",
            kind: "message",
            T: z9s,
            oneof: "params"
        },
        {
            no: 26,
            name: "fetch_rules_stream",
            kind: "message",
            T: K9s,
            oneof: "params"
        },
        {
            no: 28,
            name: "web_search_stream",
            kind: "message",
            T: Y9s,
            oneof: "params"
        },
        {
            no: 29,
            name: "mcp_stream",
            kind: "message",
            T: Z9s,
            oneof: "params"
        },
        {
            no: 33,
            name: "search_symbols_stream",
            kind: "message",
            T: J9s,
            oneof: "params"
        },
        {
            no: 41,
            name: "gotodef_stream",
            kind: "message",
            T: c6s,
            oneof: "params"
        },
        {
            no: 34,
            name: "background_composer_followup_stream",
            kind: "message",
            T: e6s,
            oneof: "params"
        },
        {
            no: 35,
            name: "knowledge_base_stream",
            kind: "message",
            T: t6s,
            oneof: "params"
        },
        {
            no: 36,
            name: "fetch_pull_request_stream",
            kind: "message",
            T: i6s,
            oneof: "params"
        },
        {
            no: 37,
            name: "deep_search_stream",
            kind: "message",
            T: r6s,
            oneof: "params"
        },
        {
            no: 38,
            name: "create_diagram_stream",
            kind: "message",
            T: s6s,
            oneof: "params"
        },
        {
            no: 39,
            name: "fix_lints_stream",
            kind: "message",
            T: o6s,
            oneof: "params"
        },
        {
            no: 40,
            name: "read_lints_stream",
            kind: "message",
            T: a6s,
            oneof: "params"
        },
        {
            no: 42,
            name: "task_stream",
            kind: "message",
            T: d6s,
            oneof: "params"
        },
        {
            no: 43,
            name: "await_task_stream",
            kind: "message",
            T: v6s,
            oneof: "params"
        },
        {
            no: 44,
            name: "todo_read_stream",
            kind: "message",
            T: _6s,
            oneof: "params"
        },
        {
            no: 45,
            name: "todo_write_stream",
            kind: "message",
            T: b6s,
            oneof: "params"
        },
        {
            no: 52,
            name: "edit_file_v2_stream",
            kind: "message",
            T: QBs,
            oneof: "params"
        },
        {
            no: 53,
            name: "list_dir_v2_stream",
            kind: "message",
            T: S6s,
            oneof: "params"
        },
        {
            no: 54,
            name: "read_file_v2_stream",
            kind: "message",
            T: k6s,
            oneof: "params"
        },
        {
            no: 55,
            name: "ripgrep_raw_search_stream",
            kind: "message",
            T: m6s,
            oneof: "params"
        },
        {
            no: 56,
            name: "glob_file_search_stream",
            kind: "message",
            T: w6s,
            oneof: "params"
        },
        {
            no: 57,
            name: "create_plan_stream",
            kind: "message",
            T: M6s,
            oneof: "params"
        },
        {
            no: 58,
            name: "list_mcp_resources_stream",
            kind: "message",
            T: C6s,
            oneof: "params"
        },
        {
            no: 59,
            name: "read_mcp_resource_stream",
            kind: "message",
            T: E6s,
            oneof: "params"
        },
        {
            no: 60,
            name: "read_project_stream",
            kind: "message",
            T: P6s,
            oneof: "params"
        },
        {
            no: 61,
            name: "update_project_stream",
            kind: "message",
            T: N6s,
            oneof: "params"
        },
        {
            no: 62,
            name: "task_v2_stream",
            kind: "message",
            T: h6s,
            oneof: "params"
        },
        {
            no: 63,
            name: "call_mcp_tool_stream",
            kind: "message",
            T: T6s,
            oneof: "params"
        },
        {
            no: 64,
            name: "ask_question_stream",
            kind: "message",
            T: O6s,
            oneof: "params"
        },
        {
            no: 65,
            name: "switch_mode_stream",
            kind: "message",
            T: F6s,
            oneof: "params"
        },
        {
            no: 66,
            name: "computer_use_stream",
            kind: "message",
            T: B6s,
            oneof: "params"
        },
        {
            no: 67,
            name: "write_shell_stdin_stream",
            kind: "message",
            T: U6s,
            oneof: "params"
        },
        {
            no: 68,
            name: "web_fetch_stream",
            kind: "message",
            T: $6s,
            oneof: "params"
        },
        {
            no: 69,
            name: "report_bugfix_results_stream",
            kind: "message",
            T: H6s,
            oneof: "params"
        },
        {
            no: 70,
            name: "mcp_auth_stream",
            kind: "message",
            T: W6s,
            oneof: "params"
        },
        {
            no: 71,
            name: "connect_scm_stream",
            kind: "message",
            T: G6s,
            oneof: "params"
        },
        {
            no: 8,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "raw_args",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "error",
            kind: "message",
            T: mse,
            opt: !0
        },
        {
            no: 50,
            name: "tool_index",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 51,
            name: "model_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), YBs = k.makeMessageType("aiserver.v1.StreamedBackToolCallV2", ()=>[
        {
            no: 1,
            name: "tool",
            kind: "enum",
            T: k.getEnumType(nt)
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "read_semsearch_files_params",
            kind: "message",
            T: XUt,
            oneof: "params"
        },
        {
            no: 5,
            name: "ripgrep_search_params",
            kind: "message",
            T: mIn,
            oneof: "params"
        },
        {
            no: 9,
            name: "read_file_params",
            kind: "message",
            T: hIn,
            oneof: "params"
        },
        {
            no: 12,
            name: "list_dir_params",
            kind: "message",
            T: uIn,
            oneof: "params"
        },
        {
            no: 13,
            name: "edit_file_params",
            kind: "message",
            T: aIn,
            oneof: "params"
        },
        {
            no: 16,
            name: "file_search_params",
            kind: "message",
            T: lIn,
            oneof: "params"
        },
        {
            no: 17,
            name: "semantic_search_full_params",
            kind: "message",
            T: QUt,
            oneof: "params"
        },
        {
            no: 19,
            name: "delete_file_params",
            kind: "message",
            T: Abt,
            oneof: "params"
        },
        {
            no: 20,
            name: "reapply_params",
            kind: "message",
            T: sIn,
            oneof: "params"
        },
        {
            no: 23,
            name: "run_terminal_command_v2_params",
            kind: "message",
            T: C0e,
            oneof: "params"
        },
        {
            no: 24,
            name: "fetch_rules_params",
            kind: "message",
            T: oIn,
            oneof: "params"
        },
        {
            no: 26,
            name: "web_search_params",
            kind: "message",
            T: Dbt,
            oneof: "params"
        },
        {
            no: 27,
            name: "mcp_params",
            kind: "message",
            T: t8t,
            oneof: "params"
        },
        {
            no: 31,
            name: "search_symbols_params",
            kind: "message",
            T: CIn,
            oneof: "params"
        },
        {
            no: 41,
            name: "gotodef_params",
            kind: "message",
            T: e8t,
            oneof: "params"
        },
        {
            no: 32,
            name: "background_composer_followup_params",
            kind: "message",
            T: TIn,
            oneof: "params"
        },
        {
            no: 33,
            name: "knowledge_base_params",
            kind: "message",
            T: EIn,
            oneof: "params"
        },
        {
            no: 34,
            name: "fetch_pull_request_params",
            kind: "message",
            T: xIn,
            oneof: "params"
        },
        {
            no: 35,
            name: "deep_search_params",
            kind: "message",
            T: IIn,
            oneof: "params"
        },
        {
            no: 36,
            name: "create_diagram_params",
            kind: "message",
            T: AIn,
            oneof: "params"
        },
        {
            no: 37,
            name: "fix_lints_params",
            kind: "message",
            T: RIn,
            oneof: "params"
        },
        {
            no: 38,
            name: "read_lints_params",
            kind: "message",
            T: s8t,
            oneof: "params"
        },
        {
            no: 42,
            name: "task_params",
            kind: "message",
            T: nBi,
            oneof: "params"
        },
        {
            no: 43,
            name: "await_task_params",
            kind: "message",
            T: sBi,
            oneof: "params"
        },
        {
            no: 44,
            name: "todo_read_params",
            kind: "message",
            T: UIn,
            oneof: "params"
        },
        {
            no: 45,
            name: "todo_write_params",
            kind: "message",
            T: Lbt,
            oneof: "params"
        },
        {
            no: 48,
            name: "edit_file_v2_params",
            kind: "message",
            T: pee,
            oneof: "params"
        },
        {
            no: 49,
            name: "list_dir_v2_params",
            kind: "message",
            T: c8t,
            oneof: "params"
        },
        {
            no: 61,
            name: "read_file_v2_params",
            kind: "message",
            T: Nbt,
            oneof: "params"
        },
        {
            no: 62,
            name: "ripgrep_raw_search_params",
            kind: "message",
            T: Pbt,
            oneof: "params"
        },
        {
            no: 63,
            name: "glob_file_search_params",
            kind: "message",
            T: u8t,
            oneof: "params"
        },
        {
            no: 64,
            name: "create_plan_params",
            kind: "message",
            T: KZe,
            oneof: "params"
        },
        {
            no: 65,
            name: "list_mcp_resources_params",
            kind: "message",
            T: n8t,
            oneof: "params"
        },
        {
            no: 66,
            name: "read_mcp_resource_params",
            kind: "message",
            T: i8t,
            oneof: "params"
        },
        {
            no: 67,
            name: "read_project_params",
            kind: "message",
            T: HIn,
            oneof: "params"
        },
        {
            no: 68,
            name: "update_project_params",
            kind: "message",
            T: WIn,
            oneof: "params"
        },
        {
            no: 69,
            name: "task_v2_params",
            kind: "message",
            T: V6e,
            oneof: "params"
        },
        {
            no: 70,
            name: "call_mcp_tool_params",
            kind: "message",
            T: kIn,
            oneof: "params"
        },
        {
            no: 71,
            name: "apply_agent_diff_params",
            kind: "message",
            T: YUt,
            oneof: "params"
        },
        {
            no: 72,
            name: "ask_question_params",
            kind: "message",
            T: Pve,
            oneof: "params"
        },
        {
            no: 73,
            name: "switch_mode_params",
            kind: "message",
            T: YZe,
            oneof: "params"
        },
        {
            no: 74,
            name: "computer_use_params",
            kind: "message",
            T: Fbt,
            oneof: "params"
        },
        {
            no: 75,
            name: "write_shell_stdin_params",
            kind: "message",
            T: H6e,
            oneof: "params"
        },
        {
            no: 76,
            name: "record_screen_params",
            kind: "message",
            T: VZe,
            oneof: "params"
        },
        {
            no: 77,
            name: "web_fetch_params",
            kind: "message",
            T: XZe,
            oneof: "params"
        },
        {
            no: 78,
            name: "report_bugfix_results_params",
            kind: "message",
            T: m8t,
            oneof: "params"
        },
        {
            no: 79,
            name: "mcp_auth_params",
            kind: "message",
            T: ZZe,
            oneof: "params"
        },
        {
            no: 80,
            name: "get_mcp_tools_params",
            kind: "message",
            T: r8t,
            oneof: "params"
        },
        {
            no: 81,
            name: "connect_scm_params",
            kind: "message",
            T: Bbt,
            oneof: "params"
        },
        {
            no: 8,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "raw_args",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "error",
            kind: "message",
            T: mse,
            opt: !0
        },
        {
            no: 50,
            name: "tool_index",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 51,
            name: "model_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), pee = k.makeMessageType("aiserver.v1.EditFileV2Params", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "contents_after_edit",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "waiting_for_file_contents",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "text",
            kind: "message",
            T: XBs,
            oneof: "streaming_edit"
        },
        {
            no: 5,
            name: "code",
            kind: "message",
            T: ZBs,
            oneof: "streaming_edit"
        },
        {
            no: 6,
            name: "should_send_back_linter_errors",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "diff",
            kind: "message",
            T: qZe,
            opt: !0
        },
        {
            no: 8,
            name: "result_for_model",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "streaming_content",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "no_codeblock",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 11,
            name: "cloud_agent_edit",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), XBs = k.makeMessageType("aiserver.v1.EditFileV2Params.StreamingEditText", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "EditFileV2Params_StreamingEditText"
}), ZBs = k.makeMessageType("aiserver.v1.EditFileV2Params.StreamingEditCode", ()=>[
        {
            no: 1,
            name: "code",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "EditFileV2Params_StreamingEditCode"
}), lMe = k.makeMessageType("aiserver.v1.EditFileV2Result", ()=>[
        {
            no: 1,
            name: "contents_before_edit",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "eol_sequence",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "detected_language",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "file_was_created",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "diff",
            kind: "message",
            T: qZe,
            opt: !0
        },
        {
            no: 4,
            name: "rejected",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "linter_errors",
            kind: "message",
            T: AJ,
            repeated: !0
        },
        {
            no: 6,
            name: "sent_back_linter_errors",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "should_auto_fix_lints",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "human_review_v2",
            kind: "message",
            T: cIn,
            opt: !0
        },
        {
            no: 10,
            name: "result_for_model",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "contents_after_edit",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 13,
            name: "before_content_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 14,
            name: "after_content_id",
            kind: "scalar",
            T: 9
        }
    ]), QBs = k.makeMessageType("aiserver.v1.EditFileV2Stream", []), aIn = k.makeMessageType("aiserver.v1.EditFileParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "language",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "blocking",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "instructions",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "should_edit_file_fail_for_large_files",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "old_string",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "new_string",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "allow_multiple_matches",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 10,
            name: "use_whitespace_insensitive_fallback",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 11,
            name: "use_did_you_mean_fuzzy_match",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 16,
            name: "gracefully_handle_recoverable_errors",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 9,
            name: "line_ranges",
            kind: "message",
            T: c6,
            repeated: !0
        },
        {
            no: 13,
            name: "notebook_cell_idx",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 14,
            name: "is_new_cell",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 15,
            name: "cell_language",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 17,
            name: "edit_category",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 18,
            name: "should_eagerly_process_lints",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), P3i = k.makeMessageType("aiserver.v1.EditFileResult", ()=>[
        {
            no: 1,
            name: "diff",
            kind: "message",
            T: qZe
        },
        {
            no: 2,
            name: "is_applied",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "apply_failed",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "linter_errors",
            kind: "message",
            T: AJ,
            repeated: !0
        },
        {
            no: 5,
            name: "rejected",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "num_matches",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "whitespace_insensitive_fallback_found_match",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "no_match_found_in_line_ranges",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 11,
            name: "recoverable_error",
            kind: "message",
            T: t5s,
            opt: !0
        },
        {
            no: 9,
            name: "num_lines_in_file",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 10,
            name: "is_subagent_edit",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 12,
            name: "diff_became_no_op_due_to_on_save_fixes",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 13,
            name: "human_review",
            kind: "message",
            T: i5s,
            opt: !0
        },
        {
            no: 14,
            name: "human_feedback",
            kind: "message",
            T: r5s,
            opt: !0
        },
        {
            no: 15,
            name: "should_eagerly_process_lints",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 16,
            name: "human_review_v2",
            kind: "message",
            T: cIn,
            opt: !0
        },
        {
            no: 17,
            name: "were_all_new_linter_errors_resolved_by_this_edit",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), qZe = k.makeMessageType("aiserver.v1.EditFileResult.FileDiff", ()=>[
        {
            no: 1,
            name: "chunks",
            kind: "message",
            T: e5s,
            repeated: !0
        },
        {
            no: 2,
            name: "editor",
            kind: "enum",
            T: k.getEnumType(JBs)
        },
        {
            no: 3,
            name: "hit_timeout",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "EditFileResult_FileDiff"
}), JBs = k.makeEnum("aiserver.v1.EditFileResult.FileDiff.Editor", [
    {
        no: 0,
        name: "EDITOR_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "EDITOR_AI",
        localName: "AI"
    },
    {
        no: 2,
        name: "EDITOR_HUMAN",
        localName: "HUMAN"
    }
]), e5s = k.makeMessageType("aiserver.v1.EditFileResult.FileDiff.ChunkDiff", ()=>[
        {
            no: 1,
            name: "diff_string",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "old_start",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "new_start",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "old_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "new_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "lines_removed",
            kind: "scalar",
            T: 5
        },
        {
            no: 7,
            name: "lines_added",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "EditFileResult_FileDiff_ChunkDiff"
}), t5s = k.makeMessageType("aiserver.v1.EditFileResult.RecoverableError", ()=>[
        {
            no: 1,
            name: "error_type",
            kind: "enum",
            T: k.getEnumType(n5s)
        },
        {
            no: 2,
            name: "model_message",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "EditFileResult_RecoverableError"
}), n5s = k.makeEnum("aiserver.v1.EditFileResult.RecoverableError.RecoverableErrorType", [
    {
        no: 0,
        name: "RECOVERABLE_ERROR_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "RECOVERABLE_ERROR_TYPE_SEARCH_STRING_NOT_FOUND",
        localName: "SEARCH_STRING_NOT_FOUND"
    },
    {
        no: 2,
        name: "RECOVERABLE_ERROR_TYPE_AMBIGUOUS_SEARCH_STRING",
        localName: "AMBIGUOUS_SEARCH_STRING"
    }
]), i5s = k.makeMessageType("aiserver.v1.EditFileResult.EditFileHumanReview", ()=>[
        {
            no: 1,
            name: "is_edit_accepted",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "text_result",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "stop_and_get_new_user_input",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "EditFileResult_EditFileHumanReview"
}), r5s = k.makeMessageType("aiserver.v1.EditFileResult.HumanFeedback", ()=>[
        {
            no: 1,
            name: "selected_option",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "feedback_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "submit_feedback_as_new_message",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "bubble_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "EditFileResult_HumanFeedback"
}), cIn = k.makeMessageType("aiserver.v1.HumanReview", ()=>[
        {
            no: 1,
            name: "selected_option",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "feedback_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "submit_feedback_as_new_message",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "bubble_id",
            kind: "scalar",
            T: 9
        }
    ]), s5s = k.makeMessageType("aiserver.v1.EditFileStream", []), lIn = k.makeMessageType("aiserver.v1.ToolCallFileSearchParams", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]), o5s = k.makeMessageType("aiserver.v1.ToolCallFileSearchStream", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]), L3i = k.makeMessageType("aiserver.v1.ToolCallFileSearchResult", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: a5s,
            repeated: !0
        },
        {
            no: 2,
            name: "limit_hit",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "num_results",
            kind: "scalar",
            T: 5
        }
    ]), a5s = k.makeMessageType("aiserver.v1.ToolCallFileSearchResult.File", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ToolCallFileSearchResult_File"
}), uIn = k.makeMessageType("aiserver.v1.ListDirParams", ()=>[
        {
            no: 1,
            name: "directory_path",
            kind: "scalar",
            T: 9
        }
    ]), dIn = k.makeMessageType("aiserver.v1.ListDirResult", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: c5s,
            repeated: !0
        },
        {
            no: 2,
            name: "directory_relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]), c5s = k.makeMessageType("aiserver.v1.ListDirResult.File", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_directory",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "size",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 4,
            name: "last_modified",
            kind: "message",
            T: Nr,
            opt: !0
        },
        {
            no: 5,
            name: "num_children",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "num_lines",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ], {
    localName: "ListDirResult_File"
}), l5s = k.makeMessageType("aiserver.v1.ListDirStream", []), hIn = k.makeMessageType("aiserver.v1.ReadFileParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "read_entire_file",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "start_line_one_indexed",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "end_line_one_indexed_inclusive",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 5,
            name: "file_is_allowed_to_be_read_entirely",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "max_lines",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "max_chars",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 8,
            name: "min_lines",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), pIn = k.makeMessageType("aiserver.v1.ReadFileResult", ()=>[
        {
            no: 1,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "did_downgrade_to_line_range",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "did_shorten_line_range",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "did_set_default_line_range",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "full_file_contents",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "outline",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "start_line_one_indexed",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 8,
            name: "end_line_one_indexed_inclusive",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 9,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "did_shorten_char_range",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "read_full_file",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 12,
            name: "total_lines",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 13,
            name: "matching_cursor_rules",
            kind: "message",
            T: wRe,
            repeated: !0
        },
        {
            no: 14,
            name: "file_git_context",
            kind: "message",
            T: YSi
        }
    ]), u5s = k.makeMessageType("aiserver.v1.ReadFileStream", []), mIn = k.makeMessageType("aiserver.v1.RipgrepSearchParams", ()=>[
        {
            no: 1,
            name: "options",
            kind: "message",
            T: p5s
        },
        {
            no: 2,
            name: "pattern_info",
            kind: "message",
            T: d5s
        }
    ]), d5s = k.makeMessageType("aiserver.v1.RipgrepSearchParams.IPatternInfoProto", ()=>[
        {
            no: 1,
            name: "pattern",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_reg_exp",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "is_word_match",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "word_separators",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "is_multiline",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "is_unicode",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 7,
            name: "is_case_sensitive",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "notebook_info",
            kind: "message",
            T: h5s
        },
        {
            no: 9,
            name: "pattern_was_escaped",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ], {
    localName: "RipgrepSearchParams_IPatternInfoProto"
}), h5s = k.makeMessageType("aiserver.v1.RipgrepSearchParams.IPatternInfoProto.INotebookPatternInfoProto", ()=>[
        {
            no: 1,
            name: "is_in_notebook_markdown_input",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 2,
            name: "is_in_notebook_markdown_preview",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "is_in_notebook_cell_input",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "is_in_notebook_cell_output",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ], {
    localName: "RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto"
}), p5s = k.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto", ()=>[
        {
            no: 1,
            name: "preview_options",
            kind: "message",
            T: v5s
        },
        {
            no: 2,
            name: "file_encoding",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "surrounding_context",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "is_smart_case",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "notebook_search_config",
            kind: "message",
            T: _5s
        },
        {
            no: 6,
            name: "exclude_pattern",
            kind: "message",
            T: g5s
        },
        {
            no: 7,
            name: "include_pattern",
            kind: "message",
            T: N3i
        },
        {
            no: 8,
            name: "expand_patterns",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 9,
            name: "max_results",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 10,
            name: "max_file_size",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 11,
            name: "disregard_ignore_files",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 12,
            name: "disregard_global_ignore_files",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 13,
            name: "disregard_parent_ignore_files",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 14,
            name: "disregard_exclude_settings",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 15,
            name: "disregard_search_exclude_settings",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 16,
            name: "ignore_symlinks",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 17,
            name: "only_open_editors",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 18,
            name: "only_file_scheme",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 19,
            name: "reason",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 20,
            name: "extra_file_resources",
            kind: "message",
            T: m5s
        }
    ], {
    localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto"
}), m5s = k.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ExtraFileResourcesProto", ()=>[
        {
            no: 1,
            name: "extra_file_resources",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto"
}), g5s = k.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ExcludePatternProto", ()=>[
        {
            no: 1,
            name: "exclude_pattern",
            kind: "message",
            T: f5s,
            repeated: !0
        }
    ], {
    localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto"
}), f5s = k.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ISearchPatternBuilderProto", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "pattern",
            kind: "message",
            T: N3i
        }
    ], {
    localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto"
}), N3i = k.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ISearchPathPatternBuilderProto", ()=>[
        {
            no: 1,
            name: "pattern",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "patterns",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto"
}), v5s = k.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ITextSearchPreviewOptionsProto", ()=>[
        {
            no: 1,
            name: "match_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "chars_per_line",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto"
}), _5s = k.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.INotebookSearchConfigProto", ()=>[
        {
            no: 1,
            name: "include_markup_input",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "include_markup_preview",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "include_code_input",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "include_output",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto"
}), O3i = k.makeMessageType("aiserver.v1.RipgrepSearchResult", ()=>[
        {
            no: 1,
            name: "internal",
            kind: "message",
            T: b5s
        }
    ]), b5s = k.makeMessageType("aiserver.v1.RipgrepSearchResultInternal", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: k5s,
            repeated: !0
        },
        {
            no: 2,
            name: "exit",
            kind: "enum",
            T: k.getEnumType(S5s),
            opt: !0
        },
        {
            no: 3,
            name: "limit_hit",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "messages",
            kind: "message",
            T: x5s,
            repeated: !0
        },
        {
            no: 5,
            name: "file_search_stats",
            kind: "message",
            T: I5s,
            oneof: "stats"
        },
        {
            no: 6,
            name: "text_search_stats",
            kind: "message",
            T: R5s,
            oneof: "stats"
        }
    ]), y5s = k.makeEnum("aiserver.v1.RipgrepSearchResultInternal.TextSearchCompleteMessageType", [
    {
        no: 0,
        name: "TEXT_SEARCH_COMPLETE_MESSAGE_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "TEXT_SEARCH_COMPLETE_MESSAGE_TYPE_INFORMATION",
        localName: "INFORMATION"
    },
    {
        no: 2,
        name: "TEXT_SEARCH_COMPLETE_MESSAGE_TYPE_WARNING",
        localName: "WARNING"
    }
]), S5s = k.makeEnum("aiserver.v1.RipgrepSearchResultInternal.SearchCompletionExitCode", [
    {
        no: 0,
        name: "SEARCH_COMPLETION_EXIT_CODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SEARCH_COMPLETION_EXIT_CODE_NORMAL",
        localName: "NORMAL"
    },
    {
        no: 2,
        name: "SEARCH_COMPLETION_EXIT_CODE_NEW_SEARCH_STARTED",
        localName: "NEW_SEARCH_STARTED"
    }
]), k5s = k.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.IFileMatch", ()=>[
        {
            no: 1,
            name: "resource",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "results",
            kind: "message",
            T: w5s,
            repeated: !0
        }
    ], {
    localName: "RipgrepSearchResultInternal_IFileMatch"
}), w5s = k.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchResult", ()=>[
        {
            no: 1,
            name: "match",
            kind: "message",
            T: C5s,
            oneof: "result"
        },
        {
            no: 2,
            name: "context",
            kind: "message",
            T: T5s,
            oneof: "result"
        }
    ], {
    localName: "RipgrepSearchResultInternal_ITextSearchResult"
}), C5s = k.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchMatch", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "range_locations",
            kind: "message",
            T: E5s,
            repeated: !0
        },
        {
            no: 3,
            name: "preview_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "webview_index",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 5,
            name: "cell_fragment",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "RipgrepSearchResultInternal_ITextSearchMatch"
}), T5s = k.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchContext", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "line_number",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "RipgrepSearchResultInternal_ITextSearchContext"
}), E5s = k.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ISearchRangeSetPairing", ()=>[
        {
            no: 1,
            name: "source",
            kind: "message",
            T: F3i
        },
        {
            no: 2,
            name: "preview",
            kind: "message",
            T: F3i
        }
    ], {
    localName: "RipgrepSearchResultInternal_ISearchRangeSetPairing"
}), F3i = k.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ISearchRange", ()=>[
        {
            no: 1,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "start_column",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "end_column",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "RipgrepSearchResultInternal_ISearchRange"
}), x5s = k.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchCompleteMessage", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "type",
            kind: "enum",
            T: k.getEnumType(y5s)
        },
        {
            no: 3,
            name: "trusted",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ], {
    localName: "RipgrepSearchResultInternal_ITextSearchCompleteMessage"
}), I5s = k.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.IFileSearchStats", ()=>[
        {
            no: 1,
            name: "from_cache",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "search_engine_stats",
            kind: "message",
            T: M5s,
            oneof: "detail_stats"
        },
        {
            no: 3,
            name: "cached_search_stats",
            kind: "message",
            T: P5s,
            oneof: "detail_stats"
        },
        {
            no: 4,
            name: "file_search_provider_stats",
            kind: "message",
            T: L5s,
            oneof: "detail_stats"
        },
        {
            no: 5,
            name: "result_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "type",
            kind: "enum",
            T: k.getEnumType(A5s)
        },
        {
            no: 7,
            name: "sorting_time",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ], {
    localName: "RipgrepSearchResultInternal_IFileSearchStats"
}), A5s = k.makeEnum("aiserver.v1.RipgrepSearchResultInternal.IFileSearchStats.FileSearchProviderType", [
    {
        no: 0,
        name: "FILE_SEARCH_PROVIDER_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "FILE_SEARCH_PROVIDER_TYPE_FILE_SEARCH_PROVIDER",
        localName: "FILE_SEARCH_PROVIDER"
    },
    {
        no: 2,
        name: "FILE_SEARCH_PROVIDER_TYPE_SEARCH_PROCESS",
        localName: "SEARCH_PROCESS"
    }
]), R5s = k.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchStats", ()=>[
        {
            no: 1,
            name: "type",
            kind: "enum",
            T: k.getEnumType(D5s)
        }
    ], {
    localName: "RipgrepSearchResultInternal_ITextSearchStats"
}), D5s = k.makeEnum("aiserver.v1.RipgrepSearchResultInternal.ITextSearchStats.TextSearchProviderType", [
    {
        no: 0,
        name: "TEXT_SEARCH_PROVIDER_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "TEXT_SEARCH_PROVIDER_TYPE_TEXT_SEARCH_PROVIDER",
        localName: "TEXT_SEARCH_PROVIDER"
    },
    {
        no: 2,
        name: "TEXT_SEARCH_PROVIDER_TYPE_SEARCH_PROCESS",
        localName: "SEARCH_PROCESS"
    },
    {
        no: 3,
        name: "TEXT_SEARCH_PROVIDER_TYPE_AI_TEXT_SEARCH_PROVIDER",
        localName: "AI_TEXT_SEARCH_PROVIDER"
    }
]), M5s = k.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ISearchEngineStats", ()=>[
        {
            no: 1,
            name: "file_walk_time",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "directories_walked",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "files_walked",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "cmd_time",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "cmd_result_count",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ], {
    localName: "RipgrepSearchResultInternal_ISearchEngineStats"
}), P5s = k.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ICachedSearchStats", ()=>[
        {
            no: 1,
            name: "cache_was_resolved",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "cache_lookup_time",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "cache_filter_time",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "cache_entry_count",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "RipgrepSearchResultInternal_ICachedSearchStats"
}), L5s = k.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.IFileSearchProviderStats", ()=>[
        {
            no: 1,
            name: "provider_time",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "post_process_time",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "RipgrepSearchResultInternal_IFileSearchProviderStats"
}), N5s = k.makeMessageType("aiserver.v1.RipgrepSearchStream", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]), XUt = k.makeMessageType("aiserver.v1.ReadSemsearchFilesParams", ()=>[
        {
            no: 1,
            name: "repository_info",
            kind: "message",
            T: w1
        },
        {
            no: 2,
            name: "code_results",
            kind: "message",
            T: YO,
            repeated: !0
        },
        {
            no: 3,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "pr_references",
            kind: "message",
            T: Z3i,
            repeated: !0
        },
        {
            no: 5,
            name: "pr_search_on",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), B3i = k.makeMessageType("aiserver.v1.MissingFile", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "missing_reason",
            kind: "enum",
            T: k.getEnumType(O5s)
        },
        {
            no: 3,
            name: "num_lines",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), O5s = k.makeEnum("aiserver.v1.MissingFile.MissingReason", [
    {
        no: 0,
        name: "MISSING_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MISSING_REASON_TOO_LARGE",
        localName: "TOO_LARGE"
    },
    {
        no: 2,
        name: "MISSING_REASON_NOT_FOUND",
        localName: "NOT_FOUND"
    }
]), U3i = k.makeMessageType("aiserver.v1.Knowledge", ()=>[
        {
            no: 1,
            name: "knowledge",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        }
    ]), $3i = k.makeMessageType("aiserver.v1.ToolPullRequestResult", ()=>[
        {
            no: 1,
            name: "sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "full_pr_contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "score",
            kind: "scalar",
            T: 2
        },
        {
            no: 4,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "summary",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "pr_number",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 7,
            name: "changed_files",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 8,
            name: "author",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "date",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), ZUt = k.makeMessageType("aiserver.v1.ReadSemsearchFilesResult", ()=>[
        {
            no: 1,
            name: "code_results",
            kind: "message",
            T: YO,
            repeated: !0
        },
        {
            no: 2,
            name: "all_files",
            kind: "message",
            T: ffe,
            repeated: !0
        },
        {
            no: 3,
            name: "missing_files",
            kind: "message",
            T: B3i,
            repeated: !0
        },
        {
            no: 4,
            name: "knowledge_results",
            kind: "message",
            T: U3i,
            repeated: !0
        },
        {
            no: 5,
            name: "pr_results",
            kind: "message",
            T: $3i,
            repeated: !0
        },
        {
            no: 6,
            name: "git_remote_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "pr_hydration_timed_out",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), F5s = k.makeMessageType("aiserver.v1.ReadSemsearchFilesStream", ()=>[
        {
            no: 1,
            name: "num_files",
            kind: "scalar",
            T: 5
        }
    ]), QUt = k.makeMessageType("aiserver.v1.SemanticSearchFullParams", ()=>[
        {
            no: 1,
            name: "repository_info",
            kind: "message",
            T: w1
        },
        {
            no: 2,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "include_pattern",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "exclude_pattern",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "top_k",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "pr_references",
            kind: "message",
            T: Z3i,
            repeated: !0
        },
        {
            no: 7,
            name: "pr_search_on",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "explanation",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "code_results",
            kind: "message",
            T: YO,
            repeated: !0
        }
    ]), JUt = k.makeMessageType("aiserver.v1.SemanticSearchFullResult", ()=>[
        {
            no: 1,
            name: "code_results",
            kind: "message",
            T: YO,
            repeated: !0
        },
        {
            no: 2,
            name: "all_files",
            kind: "message",
            T: ffe,
            repeated: !0
        },
        {
            no: 3,
            name: "missing_files",
            kind: "message",
            T: B3i,
            repeated: !0
        },
        {
            no: 4,
            name: "knowledge_results",
            kind: "message",
            T: U3i,
            repeated: !0
        },
        {
            no: 5,
            name: "pr_results",
            kind: "message",
            T: $3i,
            repeated: !0
        },
        {
            no: 6,
            name: "git_remote_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "pr_hydration_timed_out",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), B5s = k.makeMessageType("aiserver.v1.SemanticSearchFullStream", ()=>[
        {
            no: 1,
            name: "num_files",
            kind: "scalar",
            T: 5
        }
    ]), Abt = k.makeMessageType("aiserver.v1.DeleteFileParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]), Rbt = k.makeMessageType("aiserver.v1.DeleteFileResult", ()=>[
        {
            no: 1,
            name: "rejected",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "file_non_existent",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "file_deleted_successfully",
            kind: "scalar",
            T: 8
        }
    ]), U5s = k.makeMessageType("aiserver.v1.DeleteFileStream", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]), $5s = k.makeMessageType("aiserver.v1.BuiltinToolCall", ()=>[
        {
            no: 1,
            name: "tool",
            kind: "enum",
            T: k.getEnumType(A3i)
        },
        {
            no: 2,
            name: "search_params",
            kind: "message",
            T: o9s,
            oneof: "params"
        },
        {
            no: 3,
            name: "read_chunk_params",
            kind: "message",
            T: u9s,
            oneof: "params"
        },
        {
            no: 4,
            name: "gotodef_params",
            kind: "message",
            T: e8t,
            oneof: "params"
        },
        {
            no: 5,
            name: "edit_params",
            kind: "message",
            T: w9s,
            oneof: "params"
        },
        {
            no: 6,
            name: "undo_edit_params",
            kind: "message",
            T: h9s,
            oneof: "params"
        },
        {
            no: 7,
            name: "end_params",
            kind: "message",
            T: p9s,
            oneof: "params"
        },
        {
            no: 8,
            name: "new_file_params",
            kind: "message",
            T: t9s,
            oneof: "params"
        },
        {
            no: 9,
            name: "add_test_params",
            kind: "message",
            T: I9s,
            oneof: "params"
        },
        {
            no: 10,
            name: "run_test_params",
            kind: "message",
            T: M9s,
            oneof: "params"
        },
        {
            no: 11,
            name: "delete_test_params",
            kind: "message",
            T: F9s,
            oneof: "params"
        },
        {
            no: 12,
            name: "save_file_params",
            kind: "message",
            T: U9s,
            oneof: "params"
        },
        {
            no: 13,
            name: "get_tests_params",
            kind: "message",
            T: L9s,
            oneof: "params"
        },
        {
            no: 14,
            name: "get_symbols_params",
            kind: "message",
            T: H9s,
            oneof: "params"
        },
        {
            no: 15,
            name: "semantic_search_params",
            kind: "message",
            T: n9s,
            oneof: "params"
        },
        {
            no: 16,
            name: "get_project_structure_params",
            kind: "message",
            T: Q5s,
            oneof: "params"
        },
        {
            no: 17,
            name: "create_rm_files_params",
            kind: "message",
            T: X5s,
            oneof: "params"
        },
        {
            no: 18,
            name: "run_terminal_commands_params",
            kind: "message",
            T: K5s,
            oneof: "params"
        },
        {
            no: 19,
            name: "new_edit_params",
            kind: "message",
            T: S9s,
            oneof: "params"
        },
        {
            no: 20,
            name: "read_with_linter_params",
            kind: "message",
            T: q5s,
            oneof: "params"
        },
        {
            no: 21,
            name: "add_ui_step_params",
            kind: "message",
            T: W5s,
            oneof: "params"
        },
        {
            no: 23,
            name: "read_semsearch_files_params",
            kind: "message",
            T: XUt,
            oneof: "params"
        },
        {
            no: 26,
            name: "delete_file_params",
            kind: "message",
            T: Abt,
            oneof: "params"
        },
        {
            no: 22,
            name: "tool_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), H5s = k.makeMessageType("aiserver.v1.BuiltinToolResult", ()=>[
        {
            no: 1,
            name: "tool",
            kind: "enum",
            T: k.getEnumType(A3i)
        },
        {
            no: 2,
            name: "search_result",
            kind: "message",
            T: l9s,
            oneof: "result"
        },
        {
            no: 3,
            name: "read_chunk_result",
            kind: "message",
            T: d9s,
            oneof: "result"
        },
        {
            no: 4,
            name: "gotodef_result",
            kind: "message",
            T: fIn,
            oneof: "result"
        },
        {
            no: 5,
            name: "edit_result",
            kind: "message",
            T: T9s,
            oneof: "result"
        },
        {
            no: 6,
            name: "undo_edit_result",
            kind: "message",
            T: g9s,
            oneof: "result"
        },
        {
            no: 7,
            name: "end_result",
            kind: "message",
            T: f9s,
            oneof: "result"
        },
        {
            no: 8,
            name: "new_file_result",
            kind: "message",
            T: m9s,
            oneof: "result"
        },
        {
            no: 9,
            name: "add_test_result",
            kind: "message",
            T: A9s,
            oneof: "result"
        },
        {
            no: 10,
            name: "run_test_result",
            kind: "message",
            T: P9s,
            oneof: "result"
        },
        {
            no: 11,
            name: "delete_test_result",
            kind: "message",
            T: B9s,
            oneof: "result"
        },
        {
            no: 12,
            name: "save_file_result",
            kind: "message",
            T: $9s,
            oneof: "result"
        },
        {
            no: 13,
            name: "get_tests_result",
            kind: "message",
            T: N9s,
            oneof: "result"
        },
        {
            no: 14,
            name: "get_symbols_result",
            kind: "message",
            T: G9s,
            oneof: "result"
        },
        {
            no: 15,
            name: "semantic_search_result",
            kind: "message",
            T: r9s,
            oneof: "result"
        },
        {
            no: 16,
            name: "get_project_structure_result",
            kind: "message",
            T: J5s,
            oneof: "result"
        },
        {
            no: 17,
            name: "create_rm_files_result",
            kind: "message",
            T: Z5s,
            oneof: "result"
        },
        {
            no: 18,
            name: "run_terminal_commands_result",
            kind: "message",
            T: Y5s,
            oneof: "result"
        },
        {
            no: 19,
            name: "new_edit_result",
            kind: "message",
            T: k9s,
            oneof: "result"
        },
        {
            no: 20,
            name: "read_with_linter_result",
            kind: "message",
            T: z5s,
            oneof: "result"
        },
        {
            no: 21,
            name: "add_ui_step_result",
            kind: "message",
            T: j5s,
            oneof: "result"
        },
        {
            no: 22,
            name: "read_semsearch_files_result",
            kind: "message",
            T: ZUt,
            oneof: "result"
        },
        {
            no: 24,
            name: "delete_file_result",
            kind: "message",
            T: Rbt,
            oneof: "result"
        }
    ]), W5s = k.makeMessageType("aiserver.v1.AddUiStepParams", ()=>[
        {
            no: 1,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "search_results",
            kind: "message",
            T: V5s,
            oneof: "step"
        }
    ]), G5s = k.makeMessageType("aiserver.v1.AddUiStepParams.SearchResult", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "AddUiStepParams_SearchResult"
}), V5s = k.makeMessageType("aiserver.v1.AddUiStepParams.SearchResults", ()=>[
        {
            no: 1,
            name: "search_results",
            kind: "message",
            T: G5s,
            repeated: !0
        }
    ], {
    localName: "AddUiStepParams_SearchResults"
}), j5s = k.makeMessageType("aiserver.v1.AddUiStepResult", []), ivu = k.makeMessageType("aiserver.v1.ServerSideToolResult", []), H3i = k.makeMessageType("aiserver.v1.ToolCall", ()=>[
        {
            no: 1,
            name: "builtin_tool_call",
            kind: "message",
            T: $5s,
            oneof: "tool_call"
        },
        {
            no: 2,
            name: "custom_tool_call",
            kind: "message",
            T: v9s,
            oneof: "tool_call"
        }
    ]), gIn = k.makeMessageType("aiserver.v1.ToolResult", ()=>[
        {
            no: 1,
            name: "builtin_tool_result",
            kind: "message",
            T: H5s,
            oneof: "tool_result"
        },
        {
            no: 2,
            name: "custom_tool_result",
            kind: "message",
            T: _9s,
            oneof: "tool_result"
        },
        {
            no: 3,
            name: "error_tool_result",
            kind: "message",
            T: y9s,
            oneof: "tool_result"
        }
    ]), q5s = k.makeMessageType("aiserver.v1.ReadWithLinterParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]), z5s = k.makeMessageType("aiserver.v1.ReadWithLinterResult", ()=>[
        {
            no: 1,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diagnostics",
            kind: "message",
            T: Ess,
            repeated: !0
        }
    ]), K5s = k.makeMessageType("aiserver.v1.RunTerminalCommandsParams", ()=>[
        {
            no: 1,
            name: "commands",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "commands_uuid",
            kind: "scalar",
            T: 9
        }
    ]), Y5s = k.makeMessageType("aiserver.v1.RunTerminalCommandsResult", ()=>[
        {
            no: 1,
            name: "outputs",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), X5s = k.makeMessageType("aiserver.v1.CreateRmFilesParams", ()=>[
        {
            no: 1,
            name: "removed_file_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "created_file_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "created_directory_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Z5s = k.makeMessageType("aiserver.v1.CreateRmFilesResult", ()=>[
        {
            no: 1,
            name: "created_file_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "removed_file_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Q5s = k.makeMessageType("aiserver.v1.GetProjectStructureParams", []), J5s = k.makeMessageType("aiserver.v1.GetProjectStructureResult", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: e9s,
            repeated: !0
        },
        {
            no: 2,
            name: "root_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]), e9s = k.makeMessageType("aiserver.v1.GetProjectStructureResult.File", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "outline",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "GetProjectStructureResult_File"
}), t9s = k.makeMessageType("aiserver.v1.NewFileParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]), n9s = k.makeMessageType("aiserver.v1.SemanticSearchParams", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "include_pattern",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "exclude_pattern",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "top_k",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "index_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "grab_whole_file",
            kind: "scalar",
            T: 8
        }
    ]), i9s = k.makeMessageType("aiserver.v1.Range", ()=>[
        {
            no: 1,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "start_character",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "end_character",
            kind: "scalar",
            T: 5
        }
    ]), W3i = k.makeMessageType("aiserver.v1.MatchRange", ()=>[
        {
            no: 1,
            name: "start",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end",
            kind: "scalar",
            T: 5
        }
    ]), r9s = k.makeMessageType("aiserver.v1.SemanticSearchResult", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: s9s,
            repeated: !0
        },
        {
            no: 2,
            name: "files",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]), s9s = k.makeMessageType("aiserver.v1.SemanticSearchResult.Item", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "score",
            kind: "scalar",
            T: 2
        },
        {
            no: 3,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "range",
            kind: "message",
            T: x3
        },
        {
            no: 5,
            name: "original_content",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "detailed_lines",
            kind: "message",
            T: KSi,
            repeated: !0
        }
    ], {
    localName: "SemanticSearchResult_Item"
}), o9s = k.makeMessageType("aiserver.v1.SearchParams", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "regex",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "include_pattern",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "exclude_pattern",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "filename_search",
            kind: "scalar",
            T: 8
        }
    ]), a9s = k.makeMessageType("aiserver.v1.SearchToolFileSearchResult", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "num_matches",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "potentially_relevant_lines",
            kind: "message",
            T: c9s,
            repeated: !0
        },
        {
            no: 4,
            name: "cropped",
            kind: "scalar",
            T: 8
        }
    ]), c9s = k.makeMessageType("aiserver.v1.SearchToolFileSearchResult.Line", ()=>[
        {
            no: 1,
            name: "line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "SearchToolFileSearchResult_Line"
}), l9s = k.makeMessageType("aiserver.v1.SearchResult", ()=>[
        {
            no: 1,
            name: "file_results",
            kind: "message",
            T: a9s,
            repeated: !0
        },
        {
            no: 2,
            name: "num_total_matches",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "num_total_matched_files",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "num_total_may_be_incomplete",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "files_only",
            kind: "scalar",
            T: 8
        }
    ]), u9s = k.makeMessageType("aiserver.v1.ReadChunkParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "num_lines",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), d9s = k.makeMessageType("aiserver.v1.ReadChunkResult", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "total_num_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "cropped",
            kind: "scalar",
            T: 8
        }
    ]), h9s = k.makeMessageType("aiserver.v1.UndoEditParams", []), p9s = k.makeMessageType("aiserver.v1.EndParams", []), m9s = k.makeMessageType("aiserver.v1.NewFileResult", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_total_lines",
            kind: "scalar",
            T: 5
        }
    ]), g9s = k.makeMessageType("aiserver.v1.UndoEditResult", ()=>[
        {
            no: 1,
            name: "feedback",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "context_start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "context_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "context_total_num_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "file_total_lines",
            kind: "scalar",
            T: 5
        }
    ]), f9s = k.makeMessageType("aiserver.v1.EndResult", []), v9s = k.makeMessageType("aiserver.v1.CustomToolCall", ()=>[
        {
            no: 1,
            name: "tool_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "params",
            kind: "scalar",
            T: 9
        }
    ]), rvu = k.makeMessageType("aiserver.v1.ScratchpadResult", []), _9s = k.makeMessageType("aiserver.v1.CustomToolResult", ()=>[
        {
            no: 1,
            name: "tool_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "result",
            kind: "scalar",
            T: 9
        }
    ]), e8t = k.makeMessageType("aiserver.v1.GotodefParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "symbol",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "end_line",
            kind: "scalar",
            T: 5
        }
    ]), b9s = k.makeMessageType("aiserver.v1.GotodefDefinition", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "fully_qualified_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "symbol_kind",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "end_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "code_context_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), fIn = k.makeMessageType("aiserver.v1.GotodefResult", ()=>[
        {
            no: 1,
            name: "definitions",
            kind: "message",
            T: b9s,
            repeated: !0
        }
    ]), y9s = k.makeMessageType("aiserver.v1.ErrorToolResult", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]), S9s = k.makeMessageType("aiserver.v1.NewEditParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line_number",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "end_line_number",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "edit_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "first_edit",
            kind: "scalar",
            T: 8
        }
    ]), k9s = k.makeMessageType("aiserver.v1.NewEditResult", []), w9s = k.makeMessageType("aiserver.v1.EditParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line_number",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "replace_num_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "new_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 7,
            name: "replace_whole_file",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "edit_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "frontend_edit_type",
            kind: "enum",
            T: k.getEnumType(C9s)
        },
        {
            no: 8,
            name: "auto_fix_all_linter_errors_in_file",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), C9s = k.makeEnum("aiserver.v1.EditParams.FrontendEditType", [
    {
        no: 0,
        name: "FRONTEND_EDIT_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "FRONTEND_EDIT_TYPE_INLINE_DIFFS",
        localName: "INLINE_DIFFS"
    },
    {
        no: 2,
        name: "FRONTEND_EDIT_TYPE_SIMPLE",
        localName: "SIMPLE"
    }
]), T9s = k.makeMessageType("aiserver.v1.EditResult", ()=>[
        {
            no: 1,
            name: "feedback",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "context_start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "context_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "file",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "file_total_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "structured_feedback",
            kind: "message",
            T: x9s,
            repeated: !0
        }
    ]), E9s = k.makeMessageType("aiserver.v1.EditResult.RelatedInformation", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "EditResult_RelatedInformation"
}), x9s = k.makeMessageType("aiserver.v1.EditResult.Feedback", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "severity",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "end_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "related_information",
            kind: "message",
            T: E9s,
            repeated: !0
        }
    ], {
    localName: "EditResult_Feedback"
}), I9s = k.makeMessageType("aiserver.v1.AddTestParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "test_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "test_code",
            kind: "scalar",
            T: 9
        }
    ]), A9s = k.makeMessageType("aiserver.v1.AddTestResult", ()=>[
        {
            no: 1,
            name: "feedback",
            kind: "message",
            T: D9s,
            repeated: !0
        }
    ]), R9s = k.makeMessageType("aiserver.v1.AddTestResult.RelatedInformation", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "AddTestResult_RelatedInformation"
}), D9s = k.makeMessageType("aiserver.v1.AddTestResult.Feedback", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "severity",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "end_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "related_information",
            kind: "message",
            T: R9s,
            repeated: !0
        }
    ], {
    localName: "AddTestResult_Feedback"
}), M9s = k.makeMessageType("aiserver.v1.RunTestParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "test_name",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), P9s = k.makeMessageType("aiserver.v1.RunTestResult", ()=>[
        {
            no: 1,
            name: "result",
            kind: "scalar",
            T: 9
        }
    ]), L9s = k.makeMessageType("aiserver.v1.GetTestsParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]), N9s = k.makeMessageType("aiserver.v1.GetTestsResult", ()=>[
        {
            no: 1,
            name: "tests",
            kind: "message",
            T: O9s,
            repeated: !0
        }
    ]), O9s = k.makeMessageType("aiserver.v1.GetTestsResult.Test", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "GetTestsResult_Test"
}), F9s = k.makeMessageType("aiserver.v1.DeleteTestParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "test_name",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), B9s = k.makeMessageType("aiserver.v1.DeleteTestResult", []), U9s = k.makeMessageType("aiserver.v1.SaveFileParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]), $9s = k.makeMessageType("aiserver.v1.SaveFileResult", []), H9s = k.makeMessageType("aiserver.v1.GetSymbolsParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line_range",
            kind: "message",
            T: W9s,
            opt: !0
        },
        {
            no: 3,
            name: "include_children",
            kind: "scalar",
            T: 8
        }
    ]), W9s = k.makeMessageType("aiserver.v1.GetSymbolsParams.LineRange", ()=>[
        {
            no: 1,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end_line_number_inclusive",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "GetSymbolsParams_LineRange"
}), G9s = k.makeMessageType("aiserver.v1.GetSymbolsResult", ()=>[
        {
            no: 1,
            name: "symbols",
            kind: "message",
            T: Cbn,
            repeated: !0
        }
    ]), G3i = k.makeMessageType("aiserver.v1.ShellCommandParsingResult", ()=>[
        {
            no: 1,
            name: "parsing_failed",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "executable_commands",
            kind: "message",
            T: j9s,
            repeated: !0
        },
        {
            no: 3,
            name: "has_redirects",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "has_command_substitution",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "all_redirects_are_dev_null",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "redirects",
            kind: "message",
            T: q9s,
            repeated: !0
        }
    ]), V9s = k.makeMessageType("aiserver.v1.ShellCommandParsingResult.ExecutableCommandArg", ()=>[
        {
            no: 1,
            name: "type",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ShellCommandParsingResult_ExecutableCommandArg"
}), j9s = k.makeMessageType("aiserver.v1.ShellCommandParsingResult.ExecutableCommand", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "args",
            kind: "message",
            T: V9s,
            repeated: !0
        },
        {
            no: 3,
            name: "full_text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ShellCommandParsingResult_ExecutableCommand"
}), q9s = k.makeMessageType("aiserver.v1.ShellCommandParsingResult.Redirect", ()=>[
        {
            no: 1,
            name: "operator",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "destination_fds",
            kind: "scalar",
            T: 13,
            repeated: !0
        },
        {
            no: 3,
            name: "target_node_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "target_text",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "ShellCommandParsingResult_Redirect"
}), C0e = k.makeMessageType("aiserver.v1.RunTerminalCommandV2Params", ()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "cwd",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "new_session",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "options",
            kind: "message",
            T: vIn,
            opt: !0
        },
        {
            no: 5,
            name: "is_background",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "require_user_approval",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "parsing_result",
            kind: "message",
            T: G3i,
            opt: !0
        },
        {
            no: 8,
            name: "idle_timeout_seconds",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 9,
            name: "requested_sandbox_policy",
            kind: "message",
            T: zue,
            opt: !0
        },
        {
            no: 10,
            name: "file_output_threshold_bytes",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 11,
            name: "command_description",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "classifier_result",
            kind: "message",
            T: qxn,
            opt: !0
        }
    ]), vIn = k.makeMessageType("aiserver.v1.RunTerminalCommandV2Params.ExecutionOptions", ()=>[
        {
            no: 1,
            name: "timeout",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 2,
            name: "skip_ai_check",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "command_run_timeout_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "command_change_check_interval_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 5,
            name: "ai_finish_check_max_attempts",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "ai_finish_check_interval_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "delayer_interval_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 8,
            name: "ai_check_for_hangs",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ], {
    localName: "RunTerminalCommandV2Params_ExecutionOptions"
}), _In = k.makeMessageType("aiserver.v1.OutputLocation", ()=>[
        {
            no: 1,
            name: "file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "size_bytes",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "line_count",
            kind: "scalar",
            T: 3
        }
    ]), Lj = k.makeMessageType("aiserver.v1.RunTerminalCommandV2Result", ()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "exit_code",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "rejected",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "popped_out_into_background",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "is_running_in_background",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "not_interrupted",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "resulting_working_directory",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "did_user_change",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "ended_reason",
            kind: "enum",
            T: k.getEnumType(iX)
        },
        {
            no: 10,
            name: "exit_code_v2",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 11,
            name: "updated_command",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "output_raw",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "human_review_v2",
            kind: "message",
            T: cIn,
            opt: !0
        },
        {
            no: 14,
            name: "effective_sandbox_policy",
            kind: "message",
            T: zue,
            opt: !0
        },
        {
            no: 15,
            name: "terminal_instance_id",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 16,
            name: "output_location",
            kind: "message",
            T: _In,
            opt: !0
        },
        {
            no: 17,
            name: "terminal_instance_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 18,
            name: "background_shell_id",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), z9s = k.makeMessageType("aiserver.v1.RunTerminalCommandV2Stream", ()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_background",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "parsing_result",
            kind: "message",
            T: G3i,
            opt: !0
        },
        {
            no: 8,
            name: "idle_timeout_seconds",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 9,
            name: "requested_sandbox_policy",
            kind: "message",
            T: zue,
            opt: !0
        }
    ]), K9s = k.makeMessageType("aiserver.v1.FetchRulesStream", ()=>[
        {
            no: 1,
            name: "rule_names",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Dbt = k.makeMessageType("aiserver.v1.WebSearchParams", ()=>[
        {
            no: 1,
            name: "search_term",
            kind: "scalar",
            T: 9
        }
    ]), Mbt = k.makeMessageType("aiserver.v1.WebSearchResult", ()=>[
        {
            no: 1,
            name: "references",
            kind: "message",
            T: V3i,
            repeated: !0
        },
        {
            no: 2,
            name: "is_final",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "rejected",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), V3i = k.makeMessageType("aiserver.v1.WebSearchResult.WebReference", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "chunk",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "WebSearchResult_WebReference"
}), Y9s = k.makeMessageType("aiserver.v1.WebSearchStream", ()=>[
        {
            no: 1,
            name: "search_term",
            kind: "scalar",
            T: 9
        }
    ]), t8t = k.makeMessageType("aiserver.v1.MCPParams", ()=>[
        {
            no: 1,
            name: "tools",
            kind: "message",
            T: zZe,
            repeated: !0
        },
        {
            no: 2,
            name: "file_output_threshold_bytes",
            kind: "scalar",
            T: 3,
            opt: !0
        }
    ]), zZe = k.makeMessageType("aiserver.v1.MCPParams.Tool", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "parameters",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "server_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "transcript_display",
            kind: "message",
            T: X9s,
            opt: !0
        }
    ], {
    localName: "MCPParams_Tool"
}), X9s = k.makeMessageType("aiserver.v1.MCPParams.TranscriptDisplay", ()=>[
        {
            no: 1,
            name: "loading",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "success",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "MCPParams_TranscriptDisplay"
}), bIn = k.makeMessageType("aiserver.v1.MCPResult", ()=>[
        {
            no: 1,
            name: "selected_tool",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "result",
            kind: "scalar",
            T: 9
        }
    ]), Z9s = k.makeMessageType("aiserver.v1.MCPStream", ()=>[
        {
            no: 1,
            name: "tools",
            kind: "message",
            T: zZe,
            repeated: !0
        }
    ]), n8t = k.makeMessageType("aiserver.v1.ListMcpResourcesParams", ()=>[
        {
            no: 1,
            name: "server",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), yIn = k.makeMessageType("aiserver.v1.ListMcpResourcesResult", ()=>[
        {
            no: 1,
            name: "resources",
            kind: "message",
            T: j3i,
            repeated: !0
        }
    ]), j3i = k.makeMessageType("aiserver.v1.ListMcpResourcesResult.MCPResource", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "mime_type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "server",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "annotations",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ], {
    localName: "ListMcpResourcesResult_MCPResource"
}), i8t = k.makeMessageType("aiserver.v1.ReadMcpResourceParams", ()=>[
        {
            no: 1,
            name: "server",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "download_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), SIn = k.makeMessageType("aiserver.v1.ReadMcpResourceResult", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "mime_type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "text",
            kind: "scalar",
            T: 9,
            oneof: "content"
        },
        {
            no: 6,
            name: "blob",
            kind: "scalar",
            T: 12,
            oneof: "content"
        },
        {
            no: 7,
            name: "annotations",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]), kIn = k.makeMessageType("aiserver.v1.CallMcpToolParams", ()=>[
        {
            no: 1,
            name: "server",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "tool_args",
            kind: "message",
            T: fd
        }
    ]), q3i = k.makeMessageType("aiserver.v1.CallMcpToolResult", ()=>[
        {
            no: 1,
            name: "server",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "result",
            kind: "message",
            T: fd
        }
    ]), r8t = k.makeMessageType("aiserver.v1.GetMcpToolsParams", ()=>[
        {
            no: 1,
            name: "server",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "tool_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "pattern",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), wIn = k.makeMessageType("aiserver.v1.GetMcpToolsResult", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "output_file_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), CIn = k.makeMessageType("aiserver.v1.SearchSymbolsParams", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]), z3i = k.makeMessageType("aiserver.v1.SearchSymbolsResult", ()=>[
        {
            no: 1,
            name: "matches",
            kind: "message",
            T: Q9s,
            repeated: !0
        },
        {
            no: 2,
            name: "rejected",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), Q9s = k.makeMessageType("aiserver.v1.SearchSymbolsResult.SymbolMatch", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "range",
            kind: "message",
            T: i9s
        },
        {
            no: 4,
            name: "secondary_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "label_matches",
            kind: "message",
            T: W3i,
            repeated: !0
        },
        {
            no: 6,
            name: "description_matches",
            kind: "message",
            T: W3i,
            repeated: !0
        },
        {
            no: 7,
            name: "score",
            kind: "scalar",
            T: 1
        }
    ], {
    localName: "SearchSymbolsResult_SymbolMatch"
}), J9s = k.makeMessageType("aiserver.v1.SearchSymbolsStream", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]), TIn = k.makeMessageType("aiserver.v1.BackgroundComposerFollowupParams", ()=>[
        {
            no: 1,
            name: "proposed_followup",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), K3i = k.makeMessageType("aiserver.v1.BackgroundComposerFollowupResult", ()=>[
        {
            no: 1,
            name: "proposed_followup",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_sent",
            kind: "scalar",
            T: 8
        }
    ]), e6s = k.makeMessageType("aiserver.v1.BackgroundComposerFollowupStream", []), svu = k.makeMessageType("aiserver.v1.SummarizeCodeParams", ()=>[
        {
            no: 1,
            name: "target_files",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "focus_query",
            kind: "scalar",
            T: 9
        }
    ]), ovu = k.makeMessageType("aiserver.v1.SummarizeCodeResult", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ]), avu = k.makeMessageType("aiserver.v1.SummarizeCodeStream", []), EIn = k.makeMessageType("aiserver.v1.KnowledgeBaseParams", ()=>[
        {
            no: 1,
            name: "knowledge_to_store",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "existing_knowledge_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "action",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Y3i = k.makeMessageType("aiserver.v1.KnowledgeBaseResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "confirmation_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "id",
            kind: "scalar",
            T: 9
        }
    ]), t6s = k.makeMessageType("aiserver.v1.KnowledgeBaseStream", []), xIn = k.makeMessageType("aiserver.v1.FetchPullRequestParams", ()=>[
        {
            no: 1,
            name: "pull_number_or_commit_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repo",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "is_github",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), X3i = k.makeMessageType("aiserver.v1.FetchPullRequestResult", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pr_number",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "author",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "date",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "diff",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "external_link",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "comments",
            kind: "message",
            T: n6s,
            repeated: !0
        },
        {
            no: 12,
            name: "labels",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 13,
            name: "assignees",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 14,
            name: "is_issue",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 15,
            name: "state",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 16,
            name: "prompt_connect_github",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), n6s = k.makeMessageType("aiserver.v1.IssueComment", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "author",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "created_at",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "updated_at",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "author_association",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), i6s = k.makeMessageType("aiserver.v1.FetchPullRequestStream", []), Z3i = k.makeMessageType("aiserver.v1.PullRequestReference", ()=>[
        {
            no: 1,
            name: "sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "score",
            kind: "scalar",
            T: 2
        },
        {
            no: 3,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "summary",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "pr_number",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 6,
            name: "author",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "date",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "changed_files",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), IIn = k.makeMessageType("aiserver.v1.DeepSearchParams", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]), Q3i = k.makeMessageType("aiserver.v1.DeepSearchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "result",
            kind: "scalar",
            T: 9
        }
    ]), r6s = k.makeMessageType("aiserver.v1.DeepSearchStream", []), AIn = k.makeMessageType("aiserver.v1.CreateDiagramParams", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), J3i = k.makeMessageType("aiserver.v1.CreateDiagramResult", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), s6s = k.makeMessageType("aiserver.v1.CreateDiagramStream", []), RIn = k.makeMessageType("aiserver.v1.FixLintsParams", []), eBi = k.makeMessageType("aiserver.v1.FixLintsResult", ()=>[
        {
            no: 1,
            name: "file_results",
            kind: "message",
            T: tBi,
            repeated: !0
        }
    ]), tBi = k.makeMessageType("aiserver.v1.FixLintsResult.FileResult", ()=>[
        {
            no: 1,
            name: "file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diff",
            kind: "message",
            T: qZe
        },
        {
            no: 3,
            name: "is_applied",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "apply_failed",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "error",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "linter_errors",
            kind: "message",
            T: AJ,
            repeated: !0
        }
    ], {
    localName: "FixLintsResult_FileResult"
}), o6s = k.makeMessageType("aiserver.v1.FixLintsStream", []), s8t = k.makeMessageType("aiserver.v1.ReadLintsParams", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), DIn = k.makeMessageType("aiserver.v1.ReadLintsResult", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "linter_errors",
            kind: "message",
            T: AJ,
            repeated: !0
        },
        {
            no: 3,
            name: "linter_errors_by_file",
            kind: "message",
            T: oN,
            repeated: !0
        }
    ]), a6s = k.makeMessageType("aiserver.v1.ReadLintsStream", []), c6s = k.makeMessageType("aiserver.v1.GotodefStream", []), nBi = k.makeMessageType("aiserver.v1.TaskParams", ()=>[
        {
            no: 1,
            name: "task_description",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "task_title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "async",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "allowed_write_directories",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "model_override",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "max_mode_override",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 7,
            name: "default_expanded_while_running",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), l6s = k.makeMessageType("aiserver.v1.TaskResult", ()=>[
        {
            no: 1,
            name: "completed_task_result",
            kind: "message",
            T: iBi,
            oneof: "result"
        },
        {
            no: 2,
            name: "async_task_result",
            kind: "message",
            T: u6s,
            oneof: "result"
        }
    ]), iBi = k.makeMessageType("aiserver.v1.TaskResult.CompletedTaskResult", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_results",
            kind: "message",
            T: tBi,
            repeated: !0
        },
        {
            no: 3,
            name: "user_aborted",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "subagent_errored",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "TaskResult_CompletedTaskResult"
}), u6s = k.makeMessageType("aiserver.v1.TaskResult.AsyncTaskResult", ()=>[
        {
            no: 1,
            name: "task_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "user_aborted",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "subagent_errored",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "TaskResult_AsyncTaskResult"
}), d6s = k.makeMessageType("aiserver.v1.TaskStream", []), V6e = k.makeMessageType("aiserver.v1.TaskV2Params", ()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "subagent_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "mode",
            kind: "enum",
            T: k.getEnumType(Jxn)
        }
    ]), j6e = k.makeMessageType("aiserver.v1.TaskV2Result", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "is_background",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "cloud_agent_bc_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), h6s = k.makeMessageType("aiserver.v1.TaskV2Stream", []), Pbt = k.makeMessageType("aiserver.v1.RipgrepRawSearchParams", ()=>[
        {
            no: 1,
            name: "pattern",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "glob",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "output_mode",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "context_before",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "context_after",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "context",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 8,
            name: "case_insensitive",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 9,
            name: "type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "head_limit",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 11,
            name: "multiline",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 12,
            name: "sort",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 13,
            name: "sort_ascending",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 14,
            name: "ignore_globs",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 15,
            name: "offset",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), o8t = k.makeMessageType("aiserver.v1.RipgrepRawSearchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: rBi,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: MIn,
            oneof: "result"
        }
    ]), MIn = k.makeMessageType("aiserver.v1.RipgrepRawSearchError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), rBi = k.makeMessageType("aiserver.v1.RipgrepRawSearchSuccess", ()=>[
        {
            no: 1,
            name: "pattern",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "output_mode",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "workspace_results",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: a8t
            }
        },
        {
            no: 5,
            name: "active_editor_result",
            kind: "message",
            T: a8t,
            opt: !0
        }
    ]), a8t = k.makeMessageType("aiserver.v1.RipgrepRawSearchUnionResult", ()=>[
        {
            no: 1,
            name: "count",
            kind: "message",
            T: PIn,
            oneof: "result"
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: NIn,
            oneof: "result"
        },
        {
            no: 3,
            name: "content",
            kind: "message",
            T: OIn,
            oneof: "result"
        }
    ]), PIn = k.makeMessageType("aiserver.v1.RipgrepRawSearchCountResult", ()=>[
        {
            no: 1,
            name: "counts",
            kind: "message",
            T: LIn,
            repeated: !0
        },
        {
            no: 2,
            name: "total_files",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "total_matches",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "client_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "head_limit_applied",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "offset_applied",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 5,
            name: "ripgrep_truncated",
            kind: "scalar",
            T: 8
        }
    ]), LIn = k.makeMessageType("aiserver.v1.RipgrepRawSearchFileCount", ()=>[
        {
            no: 1,
            name: "file",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "count",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "is_dirty",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "is_out_of_workspace",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "absolute_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), NIn = k.makeMessageType("aiserver.v1.RipgrepRawSearchFilesResult", ()=>[
        {
            no: 1,
            name: "files",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "total_files",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "client_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "ripgrep_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "files_with_meta",
            kind: "message",
            T: p6s,
            repeated: !0
        },
        {
            no: 6,
            name: "head_limit_applied",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "offset_applied",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), p6s = k.makeMessageType("aiserver.v1.RipgrepRawSearchFilesResult.FileEntry", ()=>[
        {
            no: 1,
            name: "file",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_dirty",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "is_out_of_workspace",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "absolute_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "RipgrepRawSearchFilesResult_FileEntry"
}), OIn = k.makeMessageType("aiserver.v1.RipgrepRawSearchContentResult", ()=>[
        {
            no: 1,
            name: "matches",
            kind: "message",
            T: FIn,
            repeated: !0
        },
        {
            no: 2,
            name: "total_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "total_matched_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "client_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "ripgrep_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "head_limit_applied",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "offset_applied",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), FIn = k.makeMessageType("aiserver.v1.RipgrepRawSearchFileMatch", ()=>[
        {
            no: 1,
            name: "file",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "matches",
            kind: "message",
            T: BIn,
            repeated: !0
        },
        {
            no: 3,
            name: "is_dirty",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "is_out_of_workspace",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "absolute_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), BIn = k.makeMessageType("aiserver.v1.RipgrepRawSearchContentMatch", ()=>[
        {
            no: 1,
            name: "line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "content_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "is_context_line",
            kind: "scalar",
            T: 8
        }
    ]), m6s = k.makeMessageType("aiserver.v1.RipgrepRawSearchStream", ()=>[
        {
            no: 1,
            name: "pattern",
            kind: "scalar",
            T: 9
        }
    ]), sBi = k.makeMessageType("aiserver.v1.AwaitTaskParams", ()=>[
        {
            no: 1,
            name: "ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), g6s = k.makeMessageType("aiserver.v1.AwaitTaskResult", ()=>[
        {
            no: 1,
            name: "task_results",
            kind: "message",
            T: f6s,
            repeated: !0
        },
        {
            no: 2,
            name: "missing_task_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), f6s = k.makeMessageType("aiserver.v1.AwaitTaskResult.TaskResultItem", ()=>[
        {
            no: 1,
            name: "task_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: iBi
        }
    ], {
    localName: "AwaitTaskResult_TaskResultItem"
}), v6s = k.makeMessageType("aiserver.v1.AwaitTaskStream", []), UIn = k.makeMessageType("aiserver.v1.TodoReadParams", ()=>[
        {
            no: 1,
            name: "read",
            kind: "scalar",
            T: 8
        }
    ]), DI = k.makeMessageType("aiserver.v1.TodoItem", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "dependencies",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), oBi = k.makeMessageType("aiserver.v1.TodoReadResult", ()=>[
        {
            no: 1,
            name: "todos",
            kind: "message",
            T: DI,
            repeated: !0
        }
    ]), _6s = k.makeMessageType("aiserver.v1.TodoReadStream", []), Lbt = k.makeMessageType("aiserver.v1.TodoWriteParams", ()=>[
        {
            no: 1,
            name: "todos",
            kind: "message",
            T: DI,
            repeated: !0
        },
        {
            no: 2,
            name: "merge",
            kind: "scalar",
            T: 8
        }
    ]), q6e = k.makeMessageType("aiserver.v1.TodoWriteResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "ready_task_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "needs_in_progress_todos",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "final_todos",
            kind: "message",
            T: DI,
            repeated: !0
        },
        {
            no: 5,
            name: "initial_todos",
            kind: "message",
            T: DI,
            repeated: !0
        },
        {
            no: 6,
            name: "was_merge",
            kind: "scalar",
            T: 8
        }
    ]), b6s = k.makeMessageType("aiserver.v1.TodoWriteStream", []), c8t = k.makeMessageType("aiserver.v1.ListDirV2Params", ()=>[
        {
            no: 1,
            name: "target_directory",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "ignore_globs",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "should_enrich_terminal_metadata",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), l8t = k.makeMessageType("aiserver.v1.ListDirV2Result", ()=>[
        {
            no: 1,
            name: "directory_tree_root",
            kind: "message",
            T: aBi
        }
    ]), aBi = k.makeMessageType("aiserver.v1.ListDirV2Result.DirectoryTreeNode", ()=>[
        {
            no: 1,
            name: "abs_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "children_dirs",
            kind: "message",
            T: aBi,
            repeated: !0
        },
        {
            no: 3,
            name: "children_files",
            kind: "message",
            T: y6s,
            repeated: !0
        },
        {
            no: 4,
            name: "children_were_processed",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "full_subtree_extension_counts",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 5
            }
        },
        {
            no: 6,
            name: "num_files",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ListDirV2Result_DirectoryTreeNode"
}), y6s = k.makeMessageType("aiserver.v1.ListDirV2Result.DirectoryTreeNode.File", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "terminal_metadata",
            kind: "message",
            T: E3i,
            opt: !0
        }
    ], {
    localName: "ListDirV2Result_DirectoryTreeNode_File"
}), S6s = k.makeMessageType("aiserver.v1.ListDirV2Stream", []), Nbt = k.makeMessageType("aiserver.v1.ReadFileV2Params", ()=>[
        {
            no: 1,
            name: "target_file",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "offset",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "chars_limit",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "effective_uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "enable_line_numbers",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), uMe = k.makeMessageType("aiserver.v1.ReadFileV2Result", ()=>[
        {
            no: 1,
            name: "contents",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "num_characters_in_requested_range",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "offset_is_bigger_than_number_of_lines_in_file",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "total_lines_in_file",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 5,
            name: "matching_cursor_rules",
            kind: "message",
            T: wRe,
            repeated: !0
        },
        {
            no: 6,
            name: "images",
            kind: "message",
            T: Vle,
            repeated: !0
        }
    ]), k6s = k.makeMessageType("aiserver.v1.ReadFileV2Stream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: Nbt,
            opt: !0
        }
    ]), u8t = k.makeMessageType("aiserver.v1.GlobFileSearchParams", ()=>[
        {
            no: 1,
            name: "target_directory",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "glob_pattern",
            kind: "scalar",
            T: 9
        }
    ]), $In = k.makeMessageType("aiserver.v1.GlobFileSearchResult", ()=>[
        {
            no: 1,
            name: "directories",
            kind: "message",
            T: lBi,
            repeated: !0
        }
    ]), cBi = k.makeMessageType("aiserver.v1.GlobFileSearchResult.File", ()=>[
        {
            no: 1,
            name: "rel_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "GlobFileSearchResult_File"
}), lBi = k.makeMessageType("aiserver.v1.GlobFileSearchResult.Directory", ()=>[
        {
            no: 1,
            name: "abs_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: cBi,
            repeated: !0
        },
        {
            no: 3,
            name: "total_files",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "ripgrep_truncated",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "GlobFileSearchResult_Directory"
}), w6s = k.makeMessageType("aiserver.v1.GlobFileSearchStream", []), C6s = k.makeMessageType("aiserver.v1.ListMcpResourcesStream", []), T6s = k.makeMessageType("aiserver.v1.CallMcpToolStream", []), E6s = k.makeMessageType("aiserver.v1.ReadMcpResourceStream", []), x6s = k.makeMessageType("aiserver.v1.Step", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "instructions",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "prerequisites",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 6,
            name: "sub_composer_id",
            kind: "scalar",
            T: 9
        }
    ]), I6s = k.makeMessageType("aiserver.v1.PlanPhase", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "todos",
            kind: "message",
            T: DI,
            repeated: !0
        }
    ]), KZe = k.makeMessageType("aiserver.v1.CreatePlanParams", ()=>[
        {
            no: 1,
            name: "plan",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "summary",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "steps",
            kind: "message",
            T: x6s,
            repeated: !0
        },
        {
            no: 5,
            name: "old_str",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "new_str",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "todos",
            kind: "message",
            T: DI,
            repeated: !0
        },
        {
            no: 9,
            name: "overview",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "is_spec",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "is_project",
            kind: "scalar",
            T: 8
        },
        {
            no: 12,
            name: "phases",
            kind: "message",
            T: I6s,
            repeated: !0
        }
    ]), Obt = k.makeMessageType("aiserver.v1.CreatePlanResult", ()=>[
        {
            no: 1,
            name: "accepted",
            kind: "message",
            T: A6s,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: R6s,
            oneof: "result"
        },
        {
            no: 3,
            name: "modified",
            kind: "message",
            T: D6s,
            oneof: "result"
        },
        {
            no: 4,
            name: "plan_uri",
            kind: "scalar",
            T: 9
        }
    ]), A6s = k.makeMessageType("aiserver.v1.CreatePlanResult.Accepted", ()=>[
        {
            no: 1,
            name: "final_todos",
            kind: "message",
            T: DI,
            repeated: !0
        }
    ], {
    localName: "CreatePlanResult_Accepted"
}), R6s = k.makeMessageType("aiserver.v1.CreatePlanResult.Rejected", [], {
    localName: "CreatePlanResult_Rejected"
}), D6s = k.makeMessageType("aiserver.v1.CreatePlanResult.Modified", ()=>[
        {
            no: 1,
            name: "new_plan",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "final_todos",
            kind: "message",
            T: DI,
            repeated: !0
        }
    ], {
    localName: "CreatePlanResult_Modified"
}), M6s = k.makeMessageType("aiserver.v1.CreatePlanStream", []), HIn = k.makeMessageType("aiserver.v1.ReadProjectParams", []), uBi = k.makeMessageType("aiserver.v1.ReadProjectResult", ()=>[
        {
            no: 1,
            name: "plan",
            kind: "scalar",
            T: 9
        }
    ]), P6s = k.makeMessageType("aiserver.v1.ReadProjectStream", []), L6s = k.makeMessageType("aiserver.v1.UpdateProjectStringReplacement", ()=>[
        {
            no: 1,
            name: "old_string",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "new_string",
            kind: "scalar",
            T: 9
        }
    ]), WIn = k.makeMessageType("aiserver.v1.UpdateProjectParams", ()=>[
        {
            no: 1,
            name: "string_replacements",
            kind: "message",
            T: L6s,
            repeated: !0
        },
        {
            no: 2,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ]), dBi = k.makeMessageType("aiserver.v1.UpdateProjectResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "updated_plan",
            kind: "scalar",
            T: 9
        }
    ]), N6s = k.makeMessageType("aiserver.v1.UpdateProjectStream", []), Pve = k.makeMessageType("aiserver.v1.AskQuestionParams", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "questions",
            kind: "message",
            T: hBi,
            repeated: !0
        },
        {
            no: 3,
            name: "run_async",
            kind: "scalar",
            T: 8
        }
    ]), hBi = k.makeMessageType("aiserver.v1.AskQuestionParams.Question", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: pBi,
            repeated: !0
        },
        {
            no: 4,
            name: "allow_multiple",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "AskQuestionParams_Question"
}), pBi = k.makeMessageType("aiserver.v1.AskQuestionParams.Option", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "label",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "AskQuestionParams_Option"
}), mee = k.makeMessageType("aiserver.v1.AskQuestionResult", ()=>[
        {
            no: 1,
            name: "answers",
            kind: "message",
            T: mBi,
            repeated: !0
        },
        {
            no: 2,
            name: "is_async",
            kind: "scalar",
            T: 8
        }
    ]), mBi = k.makeMessageType("aiserver.v1.AskQuestionResult.Answer", ()=>[
        {
            no: 1,
            name: "question_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "selected_option_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "freeform_text",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "AskQuestionResult_Answer"
}), O6s = k.makeMessageType("aiserver.v1.AskQuestionStream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: Pve
        }
    ]), YZe = k.makeMessageType("aiserver.v1.SwitchModeParams", ()=>[
        {
            no: 1,
            name: "from_mode_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "to_mode_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "explanation",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), d8t = k.makeMessageType("aiserver.v1.SwitchModeResult", ()=>[
        {
            no: 1,
            name: "from_mode_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "to_mode_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "auto_approved",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "user_approved",
            kind: "scalar",
            T: 8
        }
    ]), F6s = k.makeMessageType("aiserver.v1.SwitchModeStream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: YZe
        }
    ]), Fbt = k.makeMessageType("aiserver.v1.ComputerUseParams", ()=>[
        {
            no: 1,
            name: "actions",
            kind: "message",
            T: LBs,
            repeated: !0
        }
    ]), h8t = k.makeMessageType("aiserver.v1.ComputerUseResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: NBs,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: OBs,
            oneof: "result"
        }
    ]), B6s = k.makeMessageType("aiserver.v1.ComputerUseStream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: Fbt
        }
    ]), U6s = k.makeMessageType("aiserver.v1.WriteShellStdinStream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: H6e
        }
    ]), XZe = k.makeMessageType("aiserver.v1.WebFetchParams", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        }
    ]), p8t = k.makeMessageType("aiserver.v1.WebFetchResult", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "markdown",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "error",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), $6s = k.makeMessageType("aiserver.v1.WebFetchStream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: XZe
        }
    ]), m8t = k.makeMessageType("aiserver.v1.ReportBugfixResultsParams", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "results",
            kind: "message",
            T: x3i,
            repeated: !0
        }
    ]), gBi = k.makeMessageType("aiserver.v1.ReportBugfixResultsResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: BBs,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: UBs,
            oneof: "result"
        }
    ]), H6s = k.makeMessageType("aiserver.v1.ReportBugfixResultsStream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: m8t
        }
    ]), ZZe = k.makeMessageType("aiserver.v1.McpAuthParams", ()=>[
        {
            no: 1,
            name: "server_identifier",
            kind: "scalar",
            T: 9
        }
    ]), gse = k.makeMessageType("aiserver.v1.McpAuthResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), W6s = k.makeMessageType("aiserver.v1.McpAuthStream", []), Bbt = k.makeMessageType("aiserver.v1.ConnectScmParams", ()=>[
        {
            no: 1,
            name: "github",
            kind: "message",
            T: GIn
        }
    ]), GIn = k.makeMessageType("aiserver.v1.ConnectScmGithub", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: VIn
        },
        {
            no: 2,
            name: "ghe_application",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), VIn = k.makeMessageType("aiserver.v1.ConnectScmGithubRepository", ()=>[
        {
            no: 1,
            name: "owner",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repo",
            kind: "scalar",
            T: 9
        }
    ]), jIn = k.makeMessageType("aiserver.v1.ConnectScmResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), G6s = k.makeMessageType("aiserver.v1.ConnectScmStream", []);

}
