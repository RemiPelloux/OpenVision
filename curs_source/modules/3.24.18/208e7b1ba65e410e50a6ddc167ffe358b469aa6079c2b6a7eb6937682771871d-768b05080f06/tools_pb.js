import { Cz, GP } from "./ai_attribution_tool_pb.js";
import { hz, xP } from "./apply_agent_diff_tool_pb.js";
import { DP, NP, zy } from "./background_shell_exec_pb.js";
import { JP, QP, XP, YP } from "./computer_use_tool_pb.js";
import { BP, yz } from "./generate_image_tool_pb.js";
import { KP, Lg } from "./ls_exec_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { LP, OP, UP } from "./record_screen_exec_pb.js";
import { Jy, ZP, _Y, eN } from "./report_bugfix_results_tool_pb.js";
import { Dg, uu, zc } from "./repository_pb.js";
import { Ca, Ng } from "./sandbox_pb.js";
import { AP, du } from "./shell_exec_pb.js";
import { ba } from "./struct_pb.js";
import { Og, jP } from "./subagents_pb.js";
import { Bc } from "./timestamp_pb.js";
import { h } from "./tslib.es6.js";
import { $y, EP, Kc, Mg, lr, qc, yP, yo } from "./utils_pb_2.js";
var xg, vY, TY, kY, SY, yY, wY, EY, Xy, bY, RY, tN, nN, CY, IY, AY, MY, PY, NY, DY, OY, LY, UY, xY, FY, Yc, WY, BY, GY, VY, $Y, jY, Qy, HY, qY, KY, zY, YY, JY, rN, XY, QY, ZY, eJ, tJ, nJ, rJ, sJ, iJ, aJ, oJ, cJ, sN, lJ, dJ, uJ, mJ, pJ, hJ, gJ, fJ, _J, vJ, TJ, iN, kJ, SJ, yJ, wJ, EJ, bJ, RJ, CJ, IJ, AJ, aN, MJ, oN, cN, PJ, NJ, DJ, OJ, LJ, UJ, xJ, FJ, WJ, lN, BJ, GJ, VJ, dN, $J, jJ, HJ, qJ, KJ, zJ, YJ, JJ, XJ, QJ, ZJ, eX, tX, nX, uN, rX, sX, iX, aX, oX, cX, lX, dX, uX, mX, pX, hX, gX, fX, _X, vX, TX, kX, SX, yX, wX, EX, bX, RX, CX, IX, mN, AX, MX, PX, NX, DX, OX, LX, UX, pN, xX, FX, WX, BX, GX, VX, $X, hN, jX, HX, qX, KX, zX, YX, JX, XX, QX, gN, ZX, eQ, tQ, nQ, rQ, sQ, iQ, aQ, oQ, cQ, lQ, dQ, uQ, Hs, mQ, pQ, hQ, gQ, fQ, _Q, fN, _N, vQ, TQ, vN, kQ, SQ, yQ, wQ, EQ, bQ, RQ, CQ, IQ, AQ, MQ, PQ, NQ, DQ, OQ, LQ, UQ, xQ, FQ, WQ, BQ, GQ, VQ, $Q, jQ, TN, HQ, qQ, KQ, zQ, YQ, kN, JQ, XQ, SN, QQ, ZQ, eZ, yN, tZ, nZ, wN, rZ, sZ, iZ, aZ, oZ, cZ, lZ, dZ, uZ, mZ;
export { $J, $Q, $X, $Y, AJ, AQ, AX, AY, BJ, BQ, BX, BY, CJ, CQ, CX, CY, DJ, DQ, DX, DY, EJ, EQ, EX, EY, FJ, FQ, FX, FY, GJ, GQ, GX, GY, HJ, HQ, HX, HY, Hs, IJ, IQ, IX, IY, JJ, JQ, JX, JY, KJ, KQ, KX, KY, LJ, LQ, LX, LY, MJ, MQ, MX, MY, NJ, NQ, NX, NY, OJ, OQ, OX, OY, PJ, PQ, PX, PY, QJ, QQ, QX, QY, Qy, RJ, RQ, RX, RY, SJ, SN, SQ, SX, SY, TJ, TN, TQ, TX, TY, UJ, UQ, UX, UY, VJ, VQ, VX, VY, WJ, WQ, WX, WY, XJ, XQ, XX, XY, Xy, YJ, YQ, YX, YY, Yc, ZJ, ZQ, ZX, ZY, _J, _N, _Q, _X, aJ, aN, aQ, aX, aZ, bJ, bQ, bX, bY, cJ, cN, cQ, cX, cZ, dJ, dN, dQ, dX, dZ, eJ, eQ, eX, eZ, fJ, fN, fQ, fX, gJ, gN, gQ, gX, hJ, hN, hQ, hX, iJ, iN, iQ, iX, iZ, jJ, jQ, jX, jY, kJ, kN, kQ, kX, kY, lJ, lN, lQ, lX, lZ, mJ, mN, mQ, mX, mZ, nJ, nN, nQ, nX, nZ, oJ, oN, oQ, oX, oZ, pJ, pN, pQ, pX, qJ, qQ, qX, qY, rJ, rN, rQ, rX, rZ, sJ, sN, sQ, sX, sZ, tJ, tN, tQ, tX, tZ, uJ, uN, uQ, uX, uZ, vJ, vN, vQ, vX, vY, wJ, wN, wQ, wX, wY, xJ, xQ, xX, xY, xg, yJ, yN, yQ, yX, yY, zJ, zQ, zX, zY };
var __wakaru_Zy_initialized = false;
export function Zy() {
if (__wakaru_Zy_initialized) return;
__wakaru_Zy_initialized = true;
"use strict";
h(), F(), lr(), DP(), UP(), hz(), yz(), Cz(), zc(), Ng(), du(), Og(), Lg(), QP(), _Y(), xg = c.makeEnum("aiserver.v1.ClientSideToolV2", [
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
]), vY = c.makeEnum("aiserver.v1.RunTerminalCommandEndedReason", [
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
]), TY = c.makeMessageType("aiserver.v1.ReapplyParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]), kY = c.makeMessageType("aiserver.v1.ApplyAgentDiffParams", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        }
    ]), SY = c.makeMessageType("aiserver.v1.ReapplyResult", ()=>[
        {
            no: 1,
            name: "diff",
            kind: "message",
            T: Yc
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
            T: yo,
            repeated: !0
        },
        {
            no: 5,
            name: "rejected",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), yY = c.makeMessageType("aiserver.v1.FetchRulesParams", ()=>[
        {
            no: 1,
            name: "rule_names",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), wY = c.makeMessageType("aiserver.v1.FetchRulesResult", ()=>[
        {
            no: 1,
            name: "rules",
            kind: "message",
            T: Mg,
            repeated: !0
        }
    ]), EY = c.makeMessageType("aiserver.v1.ReapplyStream", []), Xy = c.makeMessageType("aiserver.v1.ToolResultError", ()=>[
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
            T: bY,
            oneof: "error_details"
        },
        {
            no: 6,
            name: "search_replace_error_details",
            kind: "message",
            T: RY,
            oneof: "error_details"
        }
    ]), bY = c.makeMessageType("aiserver.v1.ToolResultError.EditFileError", ()=>[
        {
            no: 1,
            name: "num_lines_in_file_before_edit",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ToolResultError_EditFileError"
}), RY = c.makeMessageType("aiserver.v1.ToolResultError.SearchReplaceError", ()=>[
        {
            no: 1,
            name: "num_lines_in_file_before_edit",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ToolResultError_SearchReplaceError"
}), tN = c.makeMessageType("aiserver.v1.ClientSideToolV2Call", ()=>[
        {
            no: 1,
            name: "tool",
            kind: "enum",
            T: c.getEnumType(xg)
        },
        {
            no: 2,
            name: "read_semsearch_files_params",
            kind: "message",
            T: AJ,
            oneof: "params"
        },
        {
            no: 5,
            name: "ripgrep_search_params",
            kind: "message",
            T: nJ,
            oneof: "params"
        },
        {
            no: 8,
            name: "read_file_params",
            kind: "message",
            T: ZY,
            oneof: "params"
        },
        {
            no: 12,
            name: "list_dir_params",
            kind: "message",
            T: JY,
            oneof: "params"
        },
        {
            no: 13,
            name: "edit_file_params",
            kind: "message",
            T: xY,
            oneof: "params"
        },
        {
            no: 16,
            name: "file_search_params",
            kind: "message",
            T: qY,
            oneof: "params"
        },
        {
            no: 17,
            name: "semantic_search_full_params",
            kind: "message",
            T: DJ,
            oneof: "params"
        },
        {
            no: 19,
            name: "delete_file_params",
            kind: "message",
            T: UJ,
            oneof: "params"
        },
        {
            no: 20,
            name: "reapply_params",
            kind: "message",
            T: TY,
            oneof: "params"
        },
        {
            no: 23,
            name: "run_terminal_command_v2_params",
            kind: "message",
            T: qJ,
            oneof: "params"
        },
        {
            no: 24,
            name: "fetch_rules_params",
            kind: "message",
            T: yY,
            oneof: "params"
        },
        {
            no: 26,
            name: "web_search_params",
            kind: "message",
            T: QJ,
            oneof: "params"
        },
        {
            no: 27,
            name: "mcp_params",
            kind: "message",
            T: nX,
            oneof: "params"
        },
        {
            no: 31,
            name: "search_symbols_params",
            kind: "message",
            T: gX,
            oneof: "params"
        },
        {
            no: 41,
            name: "gotodef_params",
            kind: "message",
            T: BJ,
            oneof: "params"
        },
        {
            no: 32,
            name: "background_composer_followup_params",
            kind: "message",
            T: TX,
            oneof: "params"
        },
        {
            no: 33,
            name: "knowledge_base_params",
            kind: "message",
            T: yX,
            oneof: "params"
        },
        {
            no: 34,
            name: "fetch_pull_request_params",
            kind: "message",
            T: bX,
            oneof: "params"
        },
        {
            no: 35,
            name: "deep_search_params",
            kind: "message",
            T: AX,
            oneof: "params"
        },
        {
            no: 36,
            name: "create_diagram_params",
            kind: "message",
            T: NX,
            oneof: "params"
        },
        {
            no: 37,
            name: "fix_lints_params",
            kind: "message",
            T: LX,
            oneof: "params"
        },
        {
            no: 38,
            name: "read_lints_params",
            kind: "message",
            T: FX,
            oneof: "params"
        },
        {
            no: 42,
            name: "task_params",
            kind: "message",
            T: VX,
            oneof: "params"
        },
        {
            no: 43,
            name: "await_task_params",
            kind: "message",
            T: oQ,
            oneof: "params"
        },
        {
            no: 44,
            name: "todo_read_params",
            kind: "message",
            T: uQ,
            oneof: "params"
        },
        {
            no: 45,
            name: "todo_write_params",
            kind: "message",
            T: hQ,
            oneof: "params"
        },
        {
            no: 50,
            name: "edit_file_v2_params",
            kind: "message",
            T: NY,
            oneof: "params"
        },
        {
            no: 52,
            name: "list_dir_v2_params",
            kind: "message",
            T: _Q,
            oneof: "params"
        },
        {
            no: 53,
            name: "read_file_v2_params",
            kind: "message",
            T: vN,
            oneof: "params"
        },
        {
            no: 54,
            name: "ripgrep_raw_search_params",
            kind: "message",
            T: YX,
            oneof: "params"
        },
        {
            no: 55,
            name: "glob_file_search_params",
            kind: "message",
            T: yQ,
            oneof: "params"
        },
        {
            no: 56,
            name: "create_plan_params",
            kind: "message",
            T: NQ,
            oneof: "params"
        },
        {
            no: 57,
            name: "list_mcp_resources_params",
            kind: "message",
            T: aX,
            oneof: "params"
        },
        {
            no: 58,
            name: "read_mcp_resource_params",
            kind: "message",
            T: lX,
            oneof: "params"
        },
        {
            no: 59,
            name: "read_project_params",
            kind: "message",
            T: FQ,
            oneof: "params"
        },
        {
            no: 60,
            name: "update_project_params",
            kind: "message",
            T: VQ,
            oneof: "params"
        },
        {
            no: 61,
            name: "task_v2_params",
            kind: "message",
            T: qX,
            oneof: "params"
        },
        {
            no: 62,
            name: "call_mcp_tool_params",
            kind: "message",
            T: uX,
            oneof: "params"
        },
        {
            no: 63,
            name: "apply_agent_diff_params",
            kind: "message",
            T: kY,
            oneof: "params"
        },
        {
            no: 64,
            name: "ask_question_params",
            kind: "message",
            T: TN,
            oneof: "params"
        },
        {
            no: 65,
            name: "switch_mode_params",
            kind: "message",
            T: kN,
            oneof: "params"
        },
        {
            no: 66,
            name: "computer_use_params",
            kind: "message",
            T: SN,
            oneof: "params"
        },
        {
            no: 67,
            name: "write_shell_stdin_params",
            kind: "message",
            T: zy,
            oneof: "params"
        },
        {
            no: 68,
            name: "record_screen_params",
            kind: "message",
            T: OP,
            oneof: "params"
        },
        {
            no: 69,
            name: "web_fetch_params",
            kind: "message",
            T: yN,
            oneof: "params"
        },
        {
            no: 70,
            name: "report_bugfix_results_params",
            kind: "message",
            T: wN,
            oneof: "params"
        },
        {
            no: 71,
            name: "mcp_auth_params",
            kind: "message",
            T: iZ,
            oneof: "params"
        },
        {
            no: 72,
            name: "get_mcp_tools_params",
            kind: "message",
            T: pX,
            oneof: "params"
        },
        {
            no: 73,
            name: "connect_scm_params",
            kind: "message",
            T: cZ,
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
    ]), nN = c.makeMessageType("aiserver.v1.ClientSideToolV2Result", ()=>[
        {
            no: 1,
            name: "tool",
            kind: "enum",
            T: c.getEnumType(xg)
        },
        {
            no: 2,
            name: "read_semsearch_files_result",
            kind: "message",
            T: PJ,
            oneof: "result"
        },
        {
            no: 4,
            name: "ripgrep_search_result",
            kind: "message",
            T: uJ,
            oneof: "result"
        },
        {
            no: 6,
            name: "read_file_result",
            kind: "message",
            T: eJ,
            oneof: "result"
        },
        {
            no: 9,
            name: "list_dir_result",
            kind: "message",
            T: rN,
            oneof: "result"
        },
        {
            no: 10,
            name: "edit_file_result",
            kind: "message",
            T: FY,
            oneof: "result"
        },
        {
            no: 11,
            name: "file_search_result",
            kind: "message",
            T: zY,
            oneof: "result"
        },
        {
            no: 18,
            name: "semantic_search_full_result",
            kind: "message",
            T: OJ,
            oneof: "result"
        },
        {
            no: 20,
            name: "delete_file_result",
            kind: "message",
            T: xJ,
            oneof: "result"
        },
        {
            no: 21,
            name: "reapply_result",
            kind: "message",
            T: SY,
            oneof: "result"
        },
        {
            no: 24,
            name: "run_terminal_command_v2_result",
            kind: "message",
            T: YJ,
            oneof: "result"
        },
        {
            no: 25,
            name: "fetch_rules_result",
            kind: "message",
            T: wY,
            oneof: "result"
        },
        {
            no: 27,
            name: "web_search_result",
            kind: "message",
            T: ZJ,
            oneof: "result"
        },
        {
            no: 28,
            name: "mcp_result",
            kind: "message",
            T: sX,
            oneof: "result"
        },
        {
            no: 32,
            name: "search_symbols_result",
            kind: "message",
            T: fX,
            oneof: "result"
        },
        {
            no: 33,
            name: "background_composer_followup_result",
            kind: "message",
            T: kX,
            oneof: "result"
        },
        {
            no: 34,
            name: "knowledge_base_result",
            kind: "message",
            T: wX,
            oneof: "result"
        },
        {
            no: 36,
            name: "fetch_pull_request_result",
            kind: "message",
            T: RX,
            oneof: "result"
        },
        {
            no: 37,
            name: "deep_search_result",
            kind: "message",
            T: MX,
            oneof: "result"
        },
        {
            no: 38,
            name: "create_diagram_result",
            kind: "message",
            T: DX,
            oneof: "result"
        },
        {
            no: 39,
            name: "fix_lints_result",
            kind: "message",
            T: UX,
            oneof: "result"
        },
        {
            no: 40,
            name: "read_lints_result",
            kind: "message",
            T: WX,
            oneof: "result"
        },
        {
            no: 41,
            name: "gotodef_result",
            kind: "message",
            T: VJ,
            oneof: "result"
        },
        {
            no: 42,
            name: "task_result",
            kind: "message",
            T: $X,
            oneof: "result"
        },
        {
            no: 43,
            name: "await_task_result",
            kind: "message",
            T: cQ,
            oneof: "result"
        },
        {
            no: 44,
            name: "todo_read_result",
            kind: "message",
            T: mQ,
            oneof: "result"
        },
        {
            no: 45,
            name: "todo_write_result",
            kind: "message",
            T: gQ,
            oneof: "result"
        },
        {
            no: 51,
            name: "edit_file_v2_result",
            kind: "message",
            T: LY,
            oneof: "result"
        },
        {
            no: 52,
            name: "list_dir_v2_result",
            kind: "message",
            T: fN,
            oneof: "result"
        },
        {
            no: 53,
            name: "read_file_v2_result",
            kind: "message",
            T: kQ,
            oneof: "result"
        },
        {
            no: 54,
            name: "ripgrep_raw_search_result",
            kind: "message",
            T: JX,
            oneof: "result"
        },
        {
            no: 55,
            name: "glob_file_search_result",
            kind: "message",
            T: wQ,
            oneof: "result"
        },
        {
            no: 56,
            name: "create_plan_result",
            kind: "message",
            T: DQ,
            oneof: "result"
        },
        {
            no: 57,
            name: "list_mcp_resources_result",
            kind: "message",
            T: oX,
            oneof: "result"
        },
        {
            no: 58,
            name: "read_mcp_resource_result",
            kind: "message",
            T: dX,
            oneof: "result"
        },
        {
            no: 59,
            name: "read_project_result",
            kind: "message",
            T: WQ,
            oneof: "result"
        },
        {
            no: 60,
            name: "update_project_result",
            kind: "message",
            T: $Q,
            oneof: "result"
        },
        {
            no: 61,
            name: "task_v2_result",
            kind: "message",
            T: KX,
            oneof: "result"
        },
        {
            no: 62,
            name: "call_mcp_tool_result",
            kind: "message",
            T: mX,
            oneof: "result"
        },
        {
            no: 63,
            name: "apply_agent_diff_result",
            kind: "message",
            T: xP,
            oneof: "result"
        },
        {
            no: 64,
            name: "ask_question_result",
            kind: "message",
            T: KQ,
            oneof: "result"
        },
        {
            no: 65,
            name: "switch_mode_result",
            kind: "message",
            T: JQ,
            oneof: "result"
        },
        {
            no: 66,
            name: "computer_use_result",
            kind: "message",
            T: QQ,
            oneof: "result"
        },
        {
            no: 67,
            name: "generate_image_result",
            kind: "message",
            T: BP,
            oneof: "result"
        },
        {
            no: 68,
            name: "write_shell_stdin_result",
            kind: "message",
            T: NP,
            oneof: "result"
        },
        {
            no: 69,
            name: "record_screen_result",
            kind: "message",
            T: LP,
            oneof: "result"
        },
        {
            no: 70,
            name: "web_fetch_result",
            kind: "message",
            T: tZ,
            oneof: "result"
        },
        {
            no: 71,
            name: "report_bugfix_results_result",
            kind: "message",
            T: rZ,
            oneof: "result"
        },
        {
            no: 72,
            name: "ai_attribution_result",
            kind: "message",
            T: GP,
            oneof: "result"
        },
        {
            no: 73,
            name: "mcp_auth_result",
            kind: "message",
            T: aZ,
            oneof: "result"
        },
        {
            no: 74,
            name: "get_mcp_tools_result",
            kind: "message",
            T: hX,
            oneof: "result"
        },
        {
            no: 75,
            name: "connect_scm_result",
            kind: "message",
            T: uZ,
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
            T: Xy,
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
            T: IY,
            opt: !0
        }
    ]), CY = c.makeMessageType("aiserver.v1.NudgeMessage", ()=>[
        {
            no: 1,
            name: "raw_message",
            kind: "scalar",
            T: 9
        }
    ]), IY = c.makeMessageType("aiserver.v1.ToolResultAttachments", ()=>[
        {
            no: 1,
            name: "original_todos",
            kind: "message",
            T: Hs,
            repeated: !0
        },
        {
            no: 2,
            name: "updated_todos",
            kind: "message",
            T: Hs,
            repeated: !0
        },
        {
            no: 3,
            name: "nudge_messages",
            kind: "message",
            T: CY,
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
            T: c.getEnumType(AY)
        },
        {
            no: 6,
            name: "discovery_budget_reminder",
            kind: "message",
            T: MY,
            opt: !0
        }
    ]), AY = c.makeEnum("aiserver.v1.ToolResultAttachments.TodoReminderType", [
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
]), MY = c.makeMessageType("aiserver.v1.ToolResultAttachments.DiscoveryBudgetReminder", ()=>[
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
}), PY = c.makeMessageType("aiserver.v1.StreamedBackToolCall", ()=>[
        {
            no: 1,
            name: "tool",
            kind: "enum",
            T: c.getEnumType(xg)
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
            T: NJ,
            oneof: "params"
        },
        {
            no: 5,
            name: "ripgrep_search_stream",
            kind: "message",
            T: IJ,
            oneof: "params"
        },
        {
            no: 7,
            name: "read_file_stream",
            kind: "message",
            T: tJ,
            oneof: "params"
        },
        {
            no: 12,
            name: "list_dir_stream",
            kind: "message",
            T: QY,
            oneof: "params"
        },
        {
            no: 13,
            name: "edit_file_stream",
            kind: "message",
            T: HY,
            oneof: "params"
        },
        {
            no: 14,
            name: "file_search_stream",
            kind: "message",
            T: KY,
            oneof: "params"
        },
        {
            no: 19,
            name: "semantic_search_full_stream",
            kind: "message",
            T: LJ,
            oneof: "params"
        },
        {
            no: 21,
            name: "delete_file_stream",
            kind: "message",
            T: FJ,
            oneof: "params"
        },
        {
            no: 22,
            name: "reapply_stream",
            kind: "message",
            T: EY,
            oneof: "params"
        },
        {
            no: 25,
            name: "run_terminal_command_v2_stream",
            kind: "message",
            T: JJ,
            oneof: "params"
        },
        {
            no: 26,
            name: "fetch_rules_stream",
            kind: "message",
            T: XJ,
            oneof: "params"
        },
        {
            no: 28,
            name: "web_search_stream",
            kind: "message",
            T: tX,
            oneof: "params"
        },
        {
            no: 29,
            name: "mcp_stream",
            kind: "message",
            T: iX,
            oneof: "params"
        },
        {
            no: 33,
            name: "search_symbols_stream",
            kind: "message",
            T: vX,
            oneof: "params"
        },
        {
            no: 41,
            name: "gotodef_stream",
            kind: "message",
            T: GX,
            oneof: "params"
        },
        {
            no: 34,
            name: "background_composer_followup_stream",
            kind: "message",
            T: SX,
            oneof: "params"
        },
        {
            no: 35,
            name: "knowledge_base_stream",
            kind: "message",
            T: EX,
            oneof: "params"
        },
        {
            no: 36,
            name: "fetch_pull_request_stream",
            kind: "message",
            T: IX,
            oneof: "params"
        },
        {
            no: 37,
            name: "deep_search_stream",
            kind: "message",
            T: PX,
            oneof: "params"
        },
        {
            no: 38,
            name: "create_diagram_stream",
            kind: "message",
            T: OX,
            oneof: "params"
        },
        {
            no: 39,
            name: "fix_lints_stream",
            kind: "message",
            T: xX,
            oneof: "params"
        },
        {
            no: 40,
            name: "read_lints_stream",
            kind: "message",
            T: BX,
            oneof: "params"
        },
        {
            no: 42,
            name: "task_stream",
            kind: "message",
            T: HX,
            oneof: "params"
        },
        {
            no: 43,
            name: "await_task_stream",
            kind: "message",
            T: dQ,
            oneof: "params"
        },
        {
            no: 44,
            name: "todo_read_stream",
            kind: "message",
            T: pQ,
            oneof: "params"
        },
        {
            no: 45,
            name: "todo_write_stream",
            kind: "message",
            T: fQ,
            oneof: "params"
        },
        {
            no: 52,
            name: "edit_file_v2_stream",
            kind: "message",
            T: UY,
            oneof: "params"
        },
        {
            no: 53,
            name: "list_dir_v2_stream",
            kind: "message",
            T: TQ,
            oneof: "params"
        },
        {
            no: 54,
            name: "read_file_v2_stream",
            kind: "message",
            T: SQ,
            oneof: "params"
        },
        {
            no: 55,
            name: "ripgrep_raw_search_stream",
            kind: "message",
            T: aQ,
            oneof: "params"
        },
        {
            no: 56,
            name: "glob_file_search_stream",
            kind: "message",
            T: RQ,
            oneof: "params"
        },
        {
            no: 57,
            name: "create_plan_stream",
            kind: "message",
            T: xQ,
            oneof: "params"
        },
        {
            no: 58,
            name: "list_mcp_resources_stream",
            kind: "message",
            T: CQ,
            oneof: "params"
        },
        {
            no: 59,
            name: "read_mcp_resource_stream",
            kind: "message",
            T: AQ,
            oneof: "params"
        },
        {
            no: 60,
            name: "read_project_stream",
            kind: "message",
            T: BQ,
            oneof: "params"
        },
        {
            no: 61,
            name: "update_project_stream",
            kind: "message",
            T: jQ,
            oneof: "params"
        },
        {
            no: 62,
            name: "task_v2_stream",
            kind: "message",
            T: zX,
            oneof: "params"
        },
        {
            no: 63,
            name: "call_mcp_tool_stream",
            kind: "message",
            T: IQ,
            oneof: "params"
        },
        {
            no: 64,
            name: "ask_question_stream",
            kind: "message",
            T: YQ,
            oneof: "params"
        },
        {
            no: 65,
            name: "switch_mode_stream",
            kind: "message",
            T: XQ,
            oneof: "params"
        },
        {
            no: 66,
            name: "computer_use_stream",
            kind: "message",
            T: ZQ,
            oneof: "params"
        },
        {
            no: 67,
            name: "write_shell_stdin_stream",
            kind: "message",
            T: eZ,
            oneof: "params"
        },
        {
            no: 68,
            name: "web_fetch_stream",
            kind: "message",
            T: nZ,
            oneof: "params"
        },
        {
            no: 69,
            name: "report_bugfix_results_stream",
            kind: "message",
            T: sZ,
            oneof: "params"
        },
        {
            no: 70,
            name: "mcp_auth_stream",
            kind: "message",
            T: oZ,
            oneof: "params"
        },
        {
            no: 71,
            name: "connect_scm_stream",
            kind: "message",
            T: mZ,
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
            T: Xy,
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
    ]), NY = c.makeMessageType("aiserver.v1.EditFileV2Params", ()=>[
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
            T: DY,
            oneof: "streaming_edit"
        },
        {
            no: 5,
            name: "code",
            kind: "message",
            T: OY,
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
            T: Yc,
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
    ]), DY = c.makeMessageType("aiserver.v1.EditFileV2Params.StreamingEditText", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "EditFileV2Params_StreamingEditText"
}), OY = c.makeMessageType("aiserver.v1.EditFileV2Params.StreamingEditCode", ()=>[
        {
            no: 1,
            name: "code",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "EditFileV2Params_StreamingEditCode"
}), LY = c.makeMessageType("aiserver.v1.EditFileV2Result", ()=>[
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
            T: Yc,
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
            T: yo,
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
            T: Qy,
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
    ]), UY = c.makeMessageType("aiserver.v1.EditFileV2Stream", []), xY = c.makeMessageType("aiserver.v1.EditFileParams", ()=>[
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
            T: qc,
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
    ]), FY = c.makeMessageType("aiserver.v1.EditFileResult", ()=>[
        {
            no: 1,
            name: "diff",
            kind: "message",
            T: Yc
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
            T: yo,
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
            T: GY,
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
            T: $Y,
            opt: !0
        },
        {
            no: 14,
            name: "human_feedback",
            kind: "message",
            T: jY,
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
            T: Qy,
            opt: !0
        },
        {
            no: 17,
            name: "were_all_new_linter_errors_resolved_by_this_edit",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), Yc = c.makeMessageType("aiserver.v1.EditFileResult.FileDiff", ()=>[
        {
            no: 1,
            name: "chunks",
            kind: "message",
            T: BY,
            repeated: !0
        },
        {
            no: 2,
            name: "editor",
            kind: "enum",
            T: c.getEnumType(WY)
        },
        {
            no: 3,
            name: "hit_timeout",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "EditFileResult_FileDiff"
}), WY = c.makeEnum("aiserver.v1.EditFileResult.FileDiff.Editor", [
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
]), BY = c.makeMessageType("aiserver.v1.EditFileResult.FileDiff.ChunkDiff", ()=>[
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
}), GY = c.makeMessageType("aiserver.v1.EditFileResult.RecoverableError", ()=>[
        {
            no: 1,
            name: "error_type",
            kind: "enum",
            T: c.getEnumType(VY)
        },
        {
            no: 2,
            name: "model_message",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "EditFileResult_RecoverableError"
}), VY = c.makeEnum("aiserver.v1.EditFileResult.RecoverableError.RecoverableErrorType", [
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
]), $Y = c.makeMessageType("aiserver.v1.EditFileResult.EditFileHumanReview", ()=>[
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
}), jY = c.makeMessageType("aiserver.v1.EditFileResult.HumanFeedback", ()=>[
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
}), Qy = c.makeMessageType("aiserver.v1.HumanReview", ()=>[
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
    ]), HY = c.makeMessageType("aiserver.v1.EditFileStream", []), qY = c.makeMessageType("aiserver.v1.ToolCallFileSearchParams", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]), KY = c.makeMessageType("aiserver.v1.ToolCallFileSearchStream", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]), zY = c.makeMessageType("aiserver.v1.ToolCallFileSearchResult", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: YY,
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
    ]), YY = c.makeMessageType("aiserver.v1.ToolCallFileSearchResult.File", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ToolCallFileSearchResult_File"
}), JY = c.makeMessageType("aiserver.v1.ListDirParams", ()=>[
        {
            no: 1,
            name: "directory_path",
            kind: "scalar",
            T: 9
        }
    ]), rN = c.makeMessageType("aiserver.v1.ListDirResult", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: XY,
            repeated: !0
        },
        {
            no: 2,
            name: "directory_relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]), XY = c.makeMessageType("aiserver.v1.ListDirResult.File", ()=>[
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
            T: Bc,
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
}), QY = c.makeMessageType("aiserver.v1.ListDirStream", []), ZY = c.makeMessageType("aiserver.v1.ReadFileParams", ()=>[
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
    ]), eJ = c.makeMessageType("aiserver.v1.ReadFileResult", ()=>[
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
            T: Mg,
            repeated: !0
        },
        {
            no: 14,
            name: "file_git_context",
            kind: "message",
            T: $y
        }
    ]), tJ = c.makeMessageType("aiserver.v1.ReadFileStream", []), nJ = c.makeMessageType("aiserver.v1.RipgrepSearchParams", ()=>[
        {
            no: 1,
            name: "options",
            kind: "message",
            T: iJ
        },
        {
            no: 2,
            name: "pattern_info",
            kind: "message",
            T: rJ
        }
    ]), rJ = c.makeMessageType("aiserver.v1.RipgrepSearchParams.IPatternInfoProto", ()=>[
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
            T: sJ
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
}), sJ = c.makeMessageType("aiserver.v1.RipgrepSearchParams.IPatternInfoProto.INotebookPatternInfoProto", ()=>[
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
}), iJ = c.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto", ()=>[
        {
            no: 1,
            name: "preview_options",
            kind: "message",
            T: lJ
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
            T: dJ
        },
        {
            no: 6,
            name: "exclude_pattern",
            kind: "message",
            T: oJ
        },
        {
            no: 7,
            name: "include_pattern",
            kind: "message",
            T: sN
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
            T: aJ
        }
    ], {
    localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto"
}), aJ = c.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ExtraFileResourcesProto", ()=>[
        {
            no: 1,
            name: "extra_file_resources",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto"
}), oJ = c.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ExcludePatternProto", ()=>[
        {
            no: 1,
            name: "exclude_pattern",
            kind: "message",
            T: cJ,
            repeated: !0
        }
    ], {
    localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto"
}), cJ = c.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ISearchPatternBuilderProto", ()=>[
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
            T: sN
        }
    ], {
    localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto"
}), sN = c.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ISearchPathPatternBuilderProto", ()=>[
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
}), lJ = c.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ITextSearchPreviewOptionsProto", ()=>[
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
}), dJ = c.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.INotebookSearchConfigProto", ()=>[
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
}), uJ = c.makeMessageType("aiserver.v1.RipgrepSearchResult", ()=>[
        {
            no: 1,
            name: "internal",
            kind: "message",
            T: mJ
        }
    ]), mJ = c.makeMessageType("aiserver.v1.RipgrepSearchResultInternal", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: gJ,
            repeated: !0
        },
        {
            no: 2,
            name: "exit",
            kind: "enum",
            T: c.getEnumType(hJ),
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
            T: kJ,
            repeated: !0
        },
        {
            no: 5,
            name: "file_search_stats",
            kind: "message",
            T: SJ,
            oneof: "stats"
        },
        {
            no: 6,
            name: "text_search_stats",
            kind: "message",
            T: wJ,
            oneof: "stats"
        }
    ]), pJ = c.makeEnum("aiserver.v1.RipgrepSearchResultInternal.TextSearchCompleteMessageType", [
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
]), hJ = c.makeEnum("aiserver.v1.RipgrepSearchResultInternal.SearchCompletionExitCode", [
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
]), gJ = c.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.IFileMatch", ()=>[
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
            T: fJ,
            repeated: !0
        }
    ], {
    localName: "RipgrepSearchResultInternal_IFileMatch"
}), fJ = c.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchResult", ()=>[
        {
            no: 1,
            name: "match",
            kind: "message",
            T: _J,
            oneof: "result"
        },
        {
            no: 2,
            name: "context",
            kind: "message",
            T: vJ,
            oneof: "result"
        }
    ], {
    localName: "RipgrepSearchResultInternal_ITextSearchResult"
}), _J = c.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchMatch", ()=>[
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
            T: TJ,
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
}), vJ = c.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchContext", ()=>[
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
}), TJ = c.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ISearchRangeSetPairing", ()=>[
        {
            no: 1,
            name: "source",
            kind: "message",
            T: iN
        },
        {
            no: 2,
            name: "preview",
            kind: "message",
            T: iN
        }
    ], {
    localName: "RipgrepSearchResultInternal_ISearchRangeSetPairing"
}), iN = c.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ISearchRange", ()=>[
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
}), kJ = c.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchCompleteMessage", ()=>[
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
            T: c.getEnumType(pJ)
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
}), SJ = c.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.IFileSearchStats", ()=>[
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
            T: bJ,
            oneof: "detail_stats"
        },
        {
            no: 3,
            name: "cached_search_stats",
            kind: "message",
            T: RJ,
            oneof: "detail_stats"
        },
        {
            no: 4,
            name: "file_search_provider_stats",
            kind: "message",
            T: CJ,
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
            T: c.getEnumType(yJ)
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
}), yJ = c.makeEnum("aiserver.v1.RipgrepSearchResultInternal.IFileSearchStats.FileSearchProviderType", [
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
]), wJ = c.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchStats", ()=>[
        {
            no: 1,
            name: "type",
            kind: "enum",
            T: c.getEnumType(EJ)
        }
    ], {
    localName: "RipgrepSearchResultInternal_ITextSearchStats"
}), EJ = c.makeEnum("aiserver.v1.RipgrepSearchResultInternal.ITextSearchStats.TextSearchProviderType", [
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
]), bJ = c.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ISearchEngineStats", ()=>[
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
}), RJ = c.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ICachedSearchStats", ()=>[
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
}), CJ = c.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.IFileSearchProviderStats", ()=>[
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
}), IJ = c.makeMessageType("aiserver.v1.RipgrepSearchStream", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]), AJ = c.makeMessageType("aiserver.v1.ReadSemsearchFilesParams", ()=>[
        {
            no: 1,
            name: "repository_info",
            kind: "message",
            T: Dg
        },
        {
            no: 2,
            name: "code_results",
            kind: "message",
            T: uu,
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
            T: mN,
            repeated: !0
        },
        {
            no: 5,
            name: "pr_search_on",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), aN = c.makeMessageType("aiserver.v1.MissingFile", ()=>[
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
            T: c.getEnumType(MJ)
        },
        {
            no: 3,
            name: "num_lines",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), MJ = c.makeEnum("aiserver.v1.MissingFile.MissingReason", [
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
]), oN = c.makeMessageType("aiserver.v1.Knowledge", ()=>[
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
    ]), cN = c.makeMessageType("aiserver.v1.ToolPullRequestResult", ()=>[
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
    ]), PJ = c.makeMessageType("aiserver.v1.ReadSemsearchFilesResult", ()=>[
        {
            no: 1,
            name: "code_results",
            kind: "message",
            T: uu,
            repeated: !0
        },
        {
            no: 2,
            name: "all_files",
            kind: "message",
            T: yP,
            repeated: !0
        },
        {
            no: 3,
            name: "missing_files",
            kind: "message",
            T: aN,
            repeated: !0
        },
        {
            no: 4,
            name: "knowledge_results",
            kind: "message",
            T: oN,
            repeated: !0
        },
        {
            no: 5,
            name: "pr_results",
            kind: "message",
            T: cN,
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
    ]), NJ = c.makeMessageType("aiserver.v1.ReadSemsearchFilesStream", ()=>[
        {
            no: 1,
            name: "num_files",
            kind: "scalar",
            T: 5
        }
    ]), DJ = c.makeMessageType("aiserver.v1.SemanticSearchFullParams", ()=>[
        {
            no: 1,
            name: "repository_info",
            kind: "message",
            T: Dg
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
            T: mN,
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
            T: uu,
            repeated: !0
        }
    ]), OJ = c.makeMessageType("aiserver.v1.SemanticSearchFullResult", ()=>[
        {
            no: 1,
            name: "code_results",
            kind: "message",
            T: uu,
            repeated: !0
        },
        {
            no: 2,
            name: "all_files",
            kind: "message",
            T: yP,
            repeated: !0
        },
        {
            no: 3,
            name: "missing_files",
            kind: "message",
            T: aN,
            repeated: !0
        },
        {
            no: 4,
            name: "knowledge_results",
            kind: "message",
            T: oN,
            repeated: !0
        },
        {
            no: 5,
            name: "pr_results",
            kind: "message",
            T: cN,
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
    ]), LJ = c.makeMessageType("aiserver.v1.SemanticSearchFullStream", ()=>[
        {
            no: 1,
            name: "num_files",
            kind: "scalar",
            T: 5
        }
    ]), UJ = c.makeMessageType("aiserver.v1.DeleteFileParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]), xJ = c.makeMessageType("aiserver.v1.DeleteFileResult", ()=>[
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
    ]), FJ = c.makeMessageType("aiserver.v1.DeleteFileStream", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]), WJ = c.makeMessageType("aiserver.v1.Range", ()=>[
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
    ]), lN = c.makeMessageType("aiserver.v1.MatchRange", ()=>[
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
    ]), BJ = c.makeMessageType("aiserver.v1.GotodefParams", ()=>[
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
    ]), GJ = c.makeMessageType("aiserver.v1.GotodefDefinition", ()=>[
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
    ]), VJ = c.makeMessageType("aiserver.v1.GotodefResult", ()=>[
        {
            no: 1,
            name: "definitions",
            kind: "message",
            T: GJ,
            repeated: !0
        }
    ]), dN = c.makeMessageType("aiserver.v1.ShellCommandParsingResult", ()=>[
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
            T: jJ,
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
            T: HJ,
            repeated: !0
        }
    ]), $J = c.makeMessageType("aiserver.v1.ShellCommandParsingResult.ExecutableCommandArg", ()=>[
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
}), jJ = c.makeMessageType("aiserver.v1.ShellCommandParsingResult.ExecutableCommand", ()=>[
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
            T: $J,
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
}), HJ = c.makeMessageType("aiserver.v1.ShellCommandParsingResult.Redirect", ()=>[
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
}), qJ = c.makeMessageType("aiserver.v1.RunTerminalCommandV2Params", ()=>[
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
            T: KJ,
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
            T: dN,
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
            T: Ca,
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
            T: AP,
            opt: !0
        }
    ]), KJ = c.makeMessageType("aiserver.v1.RunTerminalCommandV2Params.ExecutionOptions", ()=>[
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
}), zJ = c.makeMessageType("aiserver.v1.OutputLocation", ()=>[
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
    ]), YJ = c.makeMessageType("aiserver.v1.RunTerminalCommandV2Result", ()=>[
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
            T: c.getEnumType(vY)
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
            T: Qy,
            opt: !0
        },
        {
            no: 14,
            name: "effective_sandbox_policy",
            kind: "message",
            T: Ca,
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
            T: zJ,
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
    ]), JJ = c.makeMessageType("aiserver.v1.RunTerminalCommandV2Stream", ()=>[
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
            T: dN,
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
            T: Ca,
            opt: !0
        }
    ]), XJ = c.makeMessageType("aiserver.v1.FetchRulesStream", ()=>[
        {
            no: 1,
            name: "rule_names",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), QJ = c.makeMessageType("aiserver.v1.WebSearchParams", ()=>[
        {
            no: 1,
            name: "search_term",
            kind: "scalar",
            T: 9
        }
    ]), ZJ = c.makeMessageType("aiserver.v1.WebSearchResult", ()=>[
        {
            no: 1,
            name: "references",
            kind: "message",
            T: eX,
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
    ]), eX = c.makeMessageType("aiserver.v1.WebSearchResult.WebReference", ()=>[
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
}), tX = c.makeMessageType("aiserver.v1.WebSearchStream", ()=>[
        {
            no: 1,
            name: "search_term",
            kind: "scalar",
            T: 9
        }
    ]), nX = c.makeMessageType("aiserver.v1.MCPParams", ()=>[
        {
            no: 1,
            name: "tools",
            kind: "message",
            T: uN,
            repeated: !0
        },
        {
            no: 2,
            name: "file_output_threshold_bytes",
            kind: "scalar",
            T: 3,
            opt: !0
        }
    ]), uN = c.makeMessageType("aiserver.v1.MCPParams.Tool", ()=>[
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
            T: rX,
            opt: !0
        }
    ], {
    localName: "MCPParams_Tool"
}), rX = c.makeMessageType("aiserver.v1.MCPParams.TranscriptDisplay", ()=>[
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
}), sX = c.makeMessageType("aiserver.v1.MCPResult", ()=>[
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
    ]), iX = c.makeMessageType("aiserver.v1.MCPStream", ()=>[
        {
            no: 1,
            name: "tools",
            kind: "message",
            T: uN,
            repeated: !0
        }
    ]), aX = c.makeMessageType("aiserver.v1.ListMcpResourcesParams", ()=>[
        {
            no: 1,
            name: "server",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), oX = c.makeMessageType("aiserver.v1.ListMcpResourcesResult", ()=>[
        {
            no: 1,
            name: "resources",
            kind: "message",
            T: cX,
            repeated: !0
        }
    ]), cX = c.makeMessageType("aiserver.v1.ListMcpResourcesResult.MCPResource", ()=>[
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
}), lX = c.makeMessageType("aiserver.v1.ReadMcpResourceParams", ()=>[
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
    ]), dX = c.makeMessageType("aiserver.v1.ReadMcpResourceResult", ()=>[
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
    ]), uX = c.makeMessageType("aiserver.v1.CallMcpToolParams", ()=>[
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
            T: ba
        }
    ]), mX = c.makeMessageType("aiserver.v1.CallMcpToolResult", ()=>[
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
            T: ba
        }
    ]), pX = c.makeMessageType("aiserver.v1.GetMcpToolsParams", ()=>[
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
    ]), hX = c.makeMessageType("aiserver.v1.GetMcpToolsResult", ()=>[
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
    ]), gX = c.makeMessageType("aiserver.v1.SearchSymbolsParams", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]), fX = c.makeMessageType("aiserver.v1.SearchSymbolsResult", ()=>[
        {
            no: 1,
            name: "matches",
            kind: "message",
            T: _X,
            repeated: !0
        },
        {
            no: 2,
            name: "rejected",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), _X = c.makeMessageType("aiserver.v1.SearchSymbolsResult.SymbolMatch", ()=>[
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
            T: WJ
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
            T: lN,
            repeated: !0
        },
        {
            no: 6,
            name: "description_matches",
            kind: "message",
            T: lN,
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
}), vX = c.makeMessageType("aiserver.v1.SearchSymbolsStream", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]), TX = c.makeMessageType("aiserver.v1.BackgroundComposerFollowupParams", ()=>[
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
    ]), kX = c.makeMessageType("aiserver.v1.BackgroundComposerFollowupResult", ()=>[
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
    ]), SX = c.makeMessageType("aiserver.v1.BackgroundComposerFollowupStream", []), yX = c.makeMessageType("aiserver.v1.KnowledgeBaseParams", ()=>[
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
    ]), wX = c.makeMessageType("aiserver.v1.KnowledgeBaseResult", ()=>[
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
    ]), EX = c.makeMessageType("aiserver.v1.KnowledgeBaseStream", []), bX = c.makeMessageType("aiserver.v1.FetchPullRequestParams", ()=>[
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
    ]), RX = c.makeMessageType("aiserver.v1.FetchPullRequestResult", ()=>[
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
            T: CX,
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
    ]), CX = c.makeMessageType("aiserver.v1.IssueComment", ()=>[
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
    ]), IX = c.makeMessageType("aiserver.v1.FetchPullRequestStream", []), mN = c.makeMessageType("aiserver.v1.PullRequestReference", ()=>[
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
    ]), AX = c.makeMessageType("aiserver.v1.DeepSearchParams", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]), MX = c.makeMessageType("aiserver.v1.DeepSearchResult", ()=>[
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
    ]), PX = c.makeMessageType("aiserver.v1.DeepSearchStream", []), NX = c.makeMessageType("aiserver.v1.CreateDiagramParams", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), DX = c.makeMessageType("aiserver.v1.CreateDiagramResult", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), OX = c.makeMessageType("aiserver.v1.CreateDiagramStream", []), LX = c.makeMessageType("aiserver.v1.FixLintsParams", []), UX = c.makeMessageType("aiserver.v1.FixLintsResult", ()=>[
        {
            no: 1,
            name: "file_results",
            kind: "message",
            T: pN,
            repeated: !0
        }
    ]), pN = c.makeMessageType("aiserver.v1.FixLintsResult.FileResult", ()=>[
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
            T: Yc
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
            T: yo,
            repeated: !0
        }
    ], {
    localName: "FixLintsResult_FileResult"
}), xX = c.makeMessageType("aiserver.v1.FixLintsStream", []), FX = c.makeMessageType("aiserver.v1.ReadLintsParams", ()=>[
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
    ]), WX = c.makeMessageType("aiserver.v1.ReadLintsResult", ()=>[
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
            T: yo,
            repeated: !0
        },
        {
            no: 3,
            name: "linter_errors_by_file",
            kind: "message",
            T: EP,
            repeated: !0
        }
    ]), BX = c.makeMessageType("aiserver.v1.ReadLintsStream", []), GX = c.makeMessageType("aiserver.v1.GotodefStream", []), VX = c.makeMessageType("aiserver.v1.TaskParams", ()=>[
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
    ]), $X = c.makeMessageType("aiserver.v1.TaskResult", ()=>[
        {
            no: 1,
            name: "completed_task_result",
            kind: "message",
            T: hN,
            oneof: "result"
        },
        {
            no: 2,
            name: "async_task_result",
            kind: "message",
            T: jX,
            oneof: "result"
        }
    ]), hN = c.makeMessageType("aiserver.v1.TaskResult.CompletedTaskResult", ()=>[
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
            T: pN,
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
}), jX = c.makeMessageType("aiserver.v1.TaskResult.AsyncTaskResult", ()=>[
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
}), HX = c.makeMessageType("aiserver.v1.TaskStream", []), qX = c.makeMessageType("aiserver.v1.TaskV2Params", ()=>[
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
            T: c.getEnumType(jP)
        }
    ]), KX = c.makeMessageType("aiserver.v1.TaskV2Result", ()=>[
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
    ]), zX = c.makeMessageType("aiserver.v1.TaskV2Stream", []), YX = c.makeMessageType("aiserver.v1.RipgrepRawSearchParams", ()=>[
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
    ]), JX = c.makeMessageType("aiserver.v1.RipgrepRawSearchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: QX,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: XX,
            oneof: "result"
        }
    ]), XX = c.makeMessageType("aiserver.v1.RipgrepRawSearchError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), QX = c.makeMessageType("aiserver.v1.RipgrepRawSearchSuccess", ()=>[
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
                T: gN
            }
        },
        {
            no: 5,
            name: "active_editor_result",
            kind: "message",
            T: gN,
            opt: !0
        }
    ]), gN = c.makeMessageType("aiserver.v1.RipgrepRawSearchUnionResult", ()=>[
        {
            no: 1,
            name: "count",
            kind: "message",
            T: ZX,
            oneof: "result"
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: tQ,
            oneof: "result"
        },
        {
            no: 3,
            name: "content",
            kind: "message",
            T: rQ,
            oneof: "result"
        }
    ]), ZX = c.makeMessageType("aiserver.v1.RipgrepRawSearchCountResult", ()=>[
        {
            no: 1,
            name: "counts",
            kind: "message",
            T: eQ,
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
    ]), eQ = c.makeMessageType("aiserver.v1.RipgrepRawSearchFileCount", ()=>[
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
    ]), tQ = c.makeMessageType("aiserver.v1.RipgrepRawSearchFilesResult", ()=>[
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
            T: nQ,
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
    ]), nQ = c.makeMessageType("aiserver.v1.RipgrepRawSearchFilesResult.FileEntry", ()=>[
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
}), rQ = c.makeMessageType("aiserver.v1.RipgrepRawSearchContentResult", ()=>[
        {
            no: 1,
            name: "matches",
            kind: "message",
            T: sQ,
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
    ]), sQ = c.makeMessageType("aiserver.v1.RipgrepRawSearchFileMatch", ()=>[
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
            T: iQ,
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
    ]), iQ = c.makeMessageType("aiserver.v1.RipgrepRawSearchContentMatch", ()=>[
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
    ]), aQ = c.makeMessageType("aiserver.v1.RipgrepRawSearchStream", ()=>[
        {
            no: 1,
            name: "pattern",
            kind: "scalar",
            T: 9
        }
    ]), oQ = c.makeMessageType("aiserver.v1.AwaitTaskParams", ()=>[
        {
            no: 1,
            name: "ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), cQ = c.makeMessageType("aiserver.v1.AwaitTaskResult", ()=>[
        {
            no: 1,
            name: "task_results",
            kind: "message",
            T: lQ,
            repeated: !0
        },
        {
            no: 2,
            name: "missing_task_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), lQ = c.makeMessageType("aiserver.v1.AwaitTaskResult.TaskResultItem", ()=>[
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
            T: hN
        }
    ], {
    localName: "AwaitTaskResult_TaskResultItem"
}), dQ = c.makeMessageType("aiserver.v1.AwaitTaskStream", []), uQ = c.makeMessageType("aiserver.v1.TodoReadParams", ()=>[
        {
            no: 1,
            name: "read",
            kind: "scalar",
            T: 8
        }
    ]), Hs = c.makeMessageType("aiserver.v1.TodoItem", ()=>[
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
    ]), mQ = c.makeMessageType("aiserver.v1.TodoReadResult", ()=>[
        {
            no: 1,
            name: "todos",
            kind: "message",
            T: Hs,
            repeated: !0
        }
    ]), pQ = c.makeMessageType("aiserver.v1.TodoReadStream", []), hQ = c.makeMessageType("aiserver.v1.TodoWriteParams", ()=>[
        {
            no: 1,
            name: "todos",
            kind: "message",
            T: Hs,
            repeated: !0
        },
        {
            no: 2,
            name: "merge",
            kind: "scalar",
            T: 8
        }
    ]), gQ = c.makeMessageType("aiserver.v1.TodoWriteResult", ()=>[
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
            T: Hs,
            repeated: !0
        },
        {
            no: 5,
            name: "initial_todos",
            kind: "message",
            T: Hs,
            repeated: !0
        },
        {
            no: 6,
            name: "was_merge",
            kind: "scalar",
            T: 8
        }
    ]), fQ = c.makeMessageType("aiserver.v1.TodoWriteStream", []), _Q = c.makeMessageType("aiserver.v1.ListDirV2Params", ()=>[
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
    ]), fN = c.makeMessageType("aiserver.v1.ListDirV2Result", ()=>[
        {
            no: 1,
            name: "directory_tree_root",
            kind: "message",
            T: _N
        }
    ]), _N = c.makeMessageType("aiserver.v1.ListDirV2Result.DirectoryTreeNode", ()=>[
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
            T: _N,
            repeated: !0
        },
        {
            no: 3,
            name: "children_files",
            kind: "message",
            T: vQ,
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
}), vQ = c.makeMessageType("aiserver.v1.ListDirV2Result.DirectoryTreeNode.File", ()=>[
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
            T: KP,
            opt: !0
        }
    ], {
    localName: "ListDirV2Result_DirectoryTreeNode_File"
}), TQ = c.makeMessageType("aiserver.v1.ListDirV2Stream", []), vN = c.makeMessageType("aiserver.v1.ReadFileV2Params", ()=>[
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
    ]), kQ = c.makeMessageType("aiserver.v1.ReadFileV2Result", ()=>[
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
            T: Mg,
            repeated: !0
        },
        {
            no: 6,
            name: "images",
            kind: "message",
            T: Kc,
            repeated: !0
        }
    ]), SQ = c.makeMessageType("aiserver.v1.ReadFileV2Stream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: vN,
            opt: !0
        }
    ]), yQ = c.makeMessageType("aiserver.v1.GlobFileSearchParams", ()=>[
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
    ]), wQ = c.makeMessageType("aiserver.v1.GlobFileSearchResult", ()=>[
        {
            no: 1,
            name: "directories",
            kind: "message",
            T: bQ,
            repeated: !0
        }
    ]), EQ = c.makeMessageType("aiserver.v1.GlobFileSearchResult.File", ()=>[
        {
            no: 1,
            name: "rel_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "GlobFileSearchResult_File"
}), bQ = c.makeMessageType("aiserver.v1.GlobFileSearchResult.Directory", ()=>[
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
            T: EQ,
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
}), RQ = c.makeMessageType("aiserver.v1.GlobFileSearchStream", []), CQ = c.makeMessageType("aiserver.v1.ListMcpResourcesStream", []), IQ = c.makeMessageType("aiserver.v1.CallMcpToolStream", []), AQ = c.makeMessageType("aiserver.v1.ReadMcpResourceStream", []), MQ = c.makeMessageType("aiserver.v1.Step", ()=>[
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
    ]), PQ = c.makeMessageType("aiserver.v1.PlanPhase", ()=>[
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
            T: Hs,
            repeated: !0
        }
    ]), NQ = c.makeMessageType("aiserver.v1.CreatePlanParams", ()=>[
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
            T: MQ,
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
            T: Hs,
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
            T: PQ,
            repeated: !0
        }
    ]), DQ = c.makeMessageType("aiserver.v1.CreatePlanResult", ()=>[
        {
            no: 1,
            name: "accepted",
            kind: "message",
            T: OQ,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: LQ,
            oneof: "result"
        },
        {
            no: 3,
            name: "modified",
            kind: "message",
            T: UQ,
            oneof: "result"
        },
        {
            no: 4,
            name: "plan_uri",
            kind: "scalar",
            T: 9
        }
    ]), OQ = c.makeMessageType("aiserver.v1.CreatePlanResult.Accepted", ()=>[
        {
            no: 1,
            name: "final_todos",
            kind: "message",
            T: Hs,
            repeated: !0
        }
    ], {
    localName: "CreatePlanResult_Accepted"
}), LQ = c.makeMessageType("aiserver.v1.CreatePlanResult.Rejected", [], {
    localName: "CreatePlanResult_Rejected"
}), UQ = c.makeMessageType("aiserver.v1.CreatePlanResult.Modified", ()=>[
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
            T: Hs,
            repeated: !0
        }
    ], {
    localName: "CreatePlanResult_Modified"
}), xQ = c.makeMessageType("aiserver.v1.CreatePlanStream", []), FQ = c.makeMessageType("aiserver.v1.ReadProjectParams", []), WQ = c.makeMessageType("aiserver.v1.ReadProjectResult", ()=>[
        {
            no: 1,
            name: "plan",
            kind: "scalar",
            T: 9
        }
    ]), BQ = c.makeMessageType("aiserver.v1.ReadProjectStream", []), GQ = c.makeMessageType("aiserver.v1.UpdateProjectStringReplacement", ()=>[
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
    ]), VQ = c.makeMessageType("aiserver.v1.UpdateProjectParams", ()=>[
        {
            no: 1,
            name: "string_replacements",
            kind: "message",
            T: GQ,
            repeated: !0
        },
        {
            no: 2,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ]), $Q = c.makeMessageType("aiserver.v1.UpdateProjectResult", ()=>[
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
    ]), jQ = c.makeMessageType("aiserver.v1.UpdateProjectStream", []), TN = c.makeMessageType("aiserver.v1.AskQuestionParams", ()=>[
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
            T: HQ,
            repeated: !0
        },
        {
            no: 3,
            name: "run_async",
            kind: "scalar",
            T: 8
        }
    ]), HQ = c.makeMessageType("aiserver.v1.AskQuestionParams.Question", ()=>[
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
            T: qQ,
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
}), qQ = c.makeMessageType("aiserver.v1.AskQuestionParams.Option", ()=>[
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
}), KQ = c.makeMessageType("aiserver.v1.AskQuestionResult", ()=>[
        {
            no: 1,
            name: "answers",
            kind: "message",
            T: zQ,
            repeated: !0
        },
        {
            no: 2,
            name: "is_async",
            kind: "scalar",
            T: 8
        }
    ]), zQ = c.makeMessageType("aiserver.v1.AskQuestionResult.Answer", ()=>[
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
}), YQ = c.makeMessageType("aiserver.v1.AskQuestionStream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: TN
        }
    ]), kN = c.makeMessageType("aiserver.v1.SwitchModeParams", ()=>[
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
    ]), JQ = c.makeMessageType("aiserver.v1.SwitchModeResult", ()=>[
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
    ]), XQ = c.makeMessageType("aiserver.v1.SwitchModeStream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: kN
        }
    ]), SN = c.makeMessageType("aiserver.v1.ComputerUseParams", ()=>[
        {
            no: 1,
            name: "actions",
            kind: "message",
            T: YP,
            repeated: !0
        }
    ]), QQ = c.makeMessageType("aiserver.v1.ComputerUseResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: JP,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: XP,
            oneof: "result"
        }
    ]), ZQ = c.makeMessageType("aiserver.v1.ComputerUseStream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: SN
        }
    ]), eZ = c.makeMessageType("aiserver.v1.WriteShellStdinStream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: zy
        }
    ]), yN = c.makeMessageType("aiserver.v1.WebFetchParams", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        }
    ]), tZ = c.makeMessageType("aiserver.v1.WebFetchResult", ()=>[
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
    ]), nZ = c.makeMessageType("aiserver.v1.WebFetchStream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: yN
        }
    ]), wN = c.makeMessageType("aiserver.v1.ReportBugfixResultsParams", ()=>[
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
            T: Jy,
            repeated: !0
        }
    ]), rZ = c.makeMessageType("aiserver.v1.ReportBugfixResultsResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ZP,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: eN,
            oneof: "result"
        }
    ]), sZ = c.makeMessageType("aiserver.v1.ReportBugfixResultsStream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: wN
        }
    ]), iZ = c.makeMessageType("aiserver.v1.McpAuthParams", ()=>[
        {
            no: 1,
            name: "server_identifier",
            kind: "scalar",
            T: 9
        }
    ]), aZ = c.makeMessageType("aiserver.v1.McpAuthResult", ()=>[
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
    ]), oZ = c.makeMessageType("aiserver.v1.McpAuthStream", []), cZ = c.makeMessageType("aiserver.v1.ConnectScmParams", ()=>[
        {
            no: 1,
            name: "github",
            kind: "message",
            T: lZ
        }
    ]), lZ = c.makeMessageType("aiserver.v1.ConnectScmGithub", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: dZ
        },
        {
            no: 2,
            name: "ghe_application",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), dZ = c.makeMessageType("aiserver.v1.ConnectScmGithubRepository", ()=>[
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
    ]), uZ = c.makeMessageType("aiserver.v1.ConnectScmResult", ()=>[
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
    ]), mZ = c.makeMessageType("aiserver.v1.ConnectScmStream", []);

}
