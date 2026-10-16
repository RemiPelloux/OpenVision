import { HDo, Wbr } from "./ai_attribution_tool_pb.js";
import { qei, zei } from "./apply_agent_diff_tool_pb.js";
import { F_t, Get, b4t } from "./background_shell_exec_pb.js";
import { Jei, f3o, g3o, m3o } from "./computer_use_tool_pb.js";
import { U_t, qet } from "./generate_image_tool_pb.js";
import { eyr, zet } from "./ls_exec_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { B_t, Dpn, y4t } from "./record_screen_exec_pb.js";
import { _3o, b3o, tfd, tyr } from "./report_bugfix_results_tool_pb.js";
import { Cx, Q9, qse } from "./repository_pb.js";
import { Het, Wke } from "./sandbox_pb.js";
import { $te, Hei } from "./shell_exec_pb.js";
import { qd } from "./struct_pb.js";
import { Kei, bQ } from "./subagents_pb.js";
import { Js } from "./timestamp_pb.js";
import { E } from "./tslib.es6.js";
import { Abr, Hke, Hu, Nei, R$e, Rbr, ZF, aW, cDo, jde, m7, wAe } from "./utils_pb.js";
var Ct, nyr, iyr, Vse, eti, $pn, ryr, tti, syr, S3o, nfd, Mve, k3o, w3o, Gke, B3, C3o, T3o, E3o, I3o, x3o, oyr, A3o, $de, R3o, P3o, N$e, M3o, nti, ayr, j_t, D3o, N3o, L3o, O3o, F3o, B3o, iti, U3o, rti, j3o, lyr, $3o, sti, oti, H3o, W3o, ati, lti, G3o, cti, q3o, z3o, V3o, K3o, Y3o, X3o, cyr, Z3o, Q3o, uyr, J3o, eNo, tNo, nNo, iNo, rNo, sNo, oNo, dyr, aNo, lNo, cNo, uNo, dNo, hNo, pNo, mNo, gNo, Hpn, hyr, fNo, pyr, myr, Wpn, vNo, Gpn, qpn, _No, C4t, T4t, bNo, yNo, SNo, kNo, wNo, CNo, TNo, ifd, gyr, uti, ENo, INo, xNo, ANo, RNo, PNo, MNo, DNo, NNo, LNo, ONo, FNo, fyr, BNo, UNo, jNo, $No, HNo, WNo, GNo, qNo, zNo, VNo, KNo, YNo, XNo, ZNo, rfd, QNo, zpn, JNo, dti, eLo, tLo, nLo, iLo, rLo, sLo, oLo, aLo, lLo, cLo, uLo, dLo, hLo, pLo, mLo, gLo, fLo, vLo, _Lo, bLo, yLo, SLo, kLo, wLo, vyr, CLo, TLo, ELo, r5e, hti, pti, Hte, ILo, xLo, E4t, I4t, _yr, ALo, Vpn, $_t, RLo, mti, PLo, Kpn, gti, byr, Ypn, fti, vti, yyr, Xpn, _ti, bti, Syr, MLo, DLo, yti, kyr, NLo, sfd, ofd, afd, Sti, wyr, LLo, kti, Cyr, OLo, FLo, Tyr, wti, Eyr, BLo, Cti, Iyr, ULo, Tti, xyr, Ayr, jLo, Zpn, Eti, $Lo, HLo, Ryr, WLo, Pyr, GLo, qLo, L$e, Vet, zLo, x4t, Qpn, Iti, Myr, Jpn, xti, Ati, Rti, VLo, Pti, Mti, Dti, KLo, Dyr, YLo, XLo, ZLo, Nti, yM, Nyr, QLo, A4t, Ket, JLo, emn, tmn, Lyr, eOo, tOo, R4t, O$e, nOo, nmn, Lti, Oyr, Fyr, iOo, rOo, sOo, oOo, aOo, lOo, H_t, P4t, cOo, uOo, dOo, hOo, Oti, Byr, pOo, mOo, Fti, Uyr, gOo, EAe, jyr, $yr, Hde, Hyr, fOo, W_t, imn, vOo, M4t, rmn, _Oo, bOo, G_t, smn, yOo, omn, Wyr, SOo, q_t, Dve, kOo, D4t, Bti, Uti, jti, wOo;
export { $3o, $Lo, $No, $_t, $de, $pn, $yr, A3o, A4t, ALo, ANo, Ati, Ayr, B3, B3o, BLo, BNo, Bti, Byr, C3o, C4t, CLo, CNo, Ct, Cti, Cyr, D3o, D4t, DLo, DNo, Dti, Dve, Dyr, E3o, E4t, EAe, ELo, ENo, Eti, Eyr, F3o, FLo, FNo, Fti, Fyr, G3o, GLo, GNo, G_t, Gke, Gpn, H3o, HLo, HNo, H_t, Hde, Hpn, Hte, Hyr, I3o, I4t, ILo, INo, Iti, Iyr, J3o, JLo, JNo, Jpn, K3o, KLo, KNo, Ket, Kpn, L$e, L3o, LLo, LNo, Lti, Lyr, M3o, M4t, MLo, MNo, Mti, Mve, Myr, N$e, N3o, NLo, NNo, Nti, Nyr, O$e, O3o, OLo, ONo, Oti, Oyr, P3o, P4t, PLo, PNo, Pti, Pyr, Q3o, QLo, QNo, Qpn, R3o, R4t, RLo, RNo, Rti, Ryr, S3o, SLo, SNo, SOo, Sti, Syr, T3o, T4t, TLo, TNo, Tti, Tyr, U3o, ULo, UNo, Uti, Uyr, V3o, VLo, VNo, Vet, Vpn, Vse, W3o, WLo, WNo, W_t, Wpn, Wyr, X3o, XLo, XNo, Xpn, Y3o, YLo, YNo, Ypn, Z3o, ZLo, ZNo, Zpn, _Lo, _No, _Oo, _ti, _yr, aLo, aNo, aOo, afd, ati, ayr, bLo, bNo, bOo, bti, byr, cLo, cNo, cOo, cti, cyr, dLo, dNo, dOo, dti, dyr, eLo, eNo, eOo, emn, eti, fLo, fNo, fOo, fti, fyr, gLo, gNo, gOo, gti, gyr, hLo, hNo, hOo, hti, hyr, iLo, iNo, iOo, ifd, imn, iti, iyr, j3o, jLo, jNo, j_t, jti, jyr, k3o, kLo, kNo, kOo, kti, kyr, lLo, lNo, lOo, lti, lyr, mLo, mNo, mOo, mti, myr, nLo, nNo, nOo, nfd, nmn, nti, nyr, oLo, oNo, oOo, ofd, omn, oti, oyr, pLo, pNo, pOo, pti, pyr, q3o, qLo, qNo, q_t, qpn, r5e, rLo, rNo, rOo, rfd, rmn, rti, ryr, sLo, sNo, sOo, sfd, smn, sti, syr, tLo, tNo, tOo, tmn, tti, uLo, uNo, uOo, uti, uyr, vLo, vNo, vOo, vti, vyr, w3o, wLo, wNo, wOo, wti, wyr, x3o, x4t, xLo, xNo, xti, xyr, yLo, yM, yNo, yOo, yti, yyr, z3o, zLo, zNo, zpn };
var __wakaru_Pu_initialized = false;
export function Pu() {
if (__wakaru_Pu_initialized) return;
__wakaru_Pu_initialized = true;
"use strict";
E(), hr(), Hu(), F_t(), y4t(), zei(), U_t(), HDo(), qse(), Het(), $te(), bQ(), zet(), Jei(), tfd(), Ct = x.makeEnum("aiserver.v1.ClientSideToolV2", [
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
]), nyr = x.makeEnum("aiserver.v1.ShellType", [
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
]), iyr = x.makeEnum("aiserver.v1.BuiltinTool", [
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
]), Vse = x.makeEnum("aiserver.v1.RunTerminalCommandEndedReason", [
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
]), eti = x.makeMessageType("aiserver.v1.ReapplyParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]), $pn = x.makeMessageType("aiserver.v1.ApplyAgentDiffParams", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        }
    ]), ryr = x.makeMessageType("aiserver.v1.ReapplyResult", ()=>[
        {
            no: 1,
            name: "diff",
            kind: "message",
            T: j_t
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
            T: jde,
            repeated: !0
        },
        {
            no: 5,
            name: "rejected",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), tti = x.makeMessageType("aiserver.v1.FetchRulesParams", ()=>[
        {
            no: 1,
            name: "rule_names",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), syr = x.makeMessageType("aiserver.v1.FetchRulesResult", ()=>[
        {
            no: 1,
            name: "rules",
            kind: "message",
            T: R$e,
            repeated: !0
        }
    ]), S3o = x.makeMessageType("aiserver.v1.ReapplyStream", []), nfd = x.makeMessageType("aiserver.v1.SemanticSearchArguments", ()=>[
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
    ]), Mve = x.makeMessageType("aiserver.v1.ToolResultError", ()=>[
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
            T: k3o,
            oneof: "error_details"
        },
        {
            no: 6,
            name: "search_replace_error_details",
            kind: "message",
            T: w3o,
            oneof: "error_details"
        }
    ]), k3o = x.makeMessageType("aiserver.v1.ToolResultError.EditFileError", ()=>[
        {
            no: 1,
            name: "num_lines_in_file_before_edit",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ToolResultError_EditFileError"
}), w3o = x.makeMessageType("aiserver.v1.ToolResultError.SearchReplaceError", ()=>[
        {
            no: 1,
            name: "num_lines_in_file_before_edit",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ToolResultError_SearchReplaceError"
}), Gke = x.makeMessageType("aiserver.v1.ClientSideToolV2Call", ()=>[
        {
            no: 1,
            name: "tool",
            kind: "enum",
            T: x.getEnumType(Ct)
        },
        {
            no: 2,
            name: "read_semsearch_files_params",
            kind: "message",
            T: Hpn,
            oneof: "params"
        },
        {
            no: 5,
            name: "ripgrep_search_params",
            kind: "message",
            T: cti,
            oneof: "params"
        },
        {
            no: 8,
            name: "read_file_params",
            kind: "message",
            T: ati,
            oneof: "params"
        },
        {
            no: 12,
            name: "list_dir_params",
            kind: "message",
            T: sti,
            oneof: "params"
        },
        {
            no: 13,
            name: "edit_file_params",
            kind: "message",
            T: nti,
            oneof: "params"
        },
        {
            no: 16,
            name: "file_search_params",
            kind: "message",
            T: rti,
            oneof: "params"
        },
        {
            no: 17,
            name: "semantic_search_full_params",
            kind: "message",
            T: Gpn,
            oneof: "params"
        },
        {
            no: 19,
            name: "delete_file_params",
            kind: "message",
            T: C4t,
            oneof: "params"
        },
        {
            no: 20,
            name: "reapply_params",
            kind: "message",
            T: eti,
            oneof: "params"
        },
        {
            no: 23,
            name: "run_terminal_command_v2_params",
            kind: "message",
            T: r5e,
            oneof: "params"
        },
        {
            no: 24,
            name: "fetch_rules_params",
            kind: "message",
            T: tti,
            oneof: "params"
        },
        {
            no: 26,
            name: "web_search_params",
            kind: "message",
            T: E4t,
            oneof: "params"
        },
        {
            no: 27,
            name: "mcp_params",
            kind: "message",
            T: Vpn,
            oneof: "params"
        },
        {
            no: 31,
            name: "search_symbols_params",
            kind: "message",
            T: bti,
            oneof: "params"
        },
        {
            no: 41,
            name: "gotodef_params",
            kind: "message",
            T: zpn,
            oneof: "params"
        },
        {
            no: 32,
            name: "background_composer_followup_params",
            kind: "message",
            T: yti,
            oneof: "params"
        },
        {
            no: 33,
            name: "knowledge_base_params",
            kind: "message",
            T: Sti,
            oneof: "params"
        },
        {
            no: 34,
            name: "fetch_pull_request_params",
            kind: "message",
            T: kti,
            oneof: "params"
        },
        {
            no: 35,
            name: "deep_search_params",
            kind: "message",
            T: wti,
            oneof: "params"
        },
        {
            no: 36,
            name: "create_diagram_params",
            kind: "message",
            T: Cti,
            oneof: "params"
        },
        {
            no: 37,
            name: "fix_lints_params",
            kind: "message",
            T: Tti,
            oneof: "params"
        },
        {
            no: 38,
            name: "read_lints_params",
            kind: "message",
            T: Zpn,
            oneof: "params"
        },
        {
            no: 42,
            name: "task_params",
            kind: "message",
            T: Ryr,
            oneof: "params"
        },
        {
            no: 43,
            name: "await_task_params",
            kind: "message",
            T: Dyr,
            oneof: "params"
        },
        {
            no: 44,
            name: "todo_read_params",
            kind: "message",
            T: Nti,
            oneof: "params"
        },
        {
            no: 45,
            name: "todo_write_params",
            kind: "message",
            T: A4t,
            oneof: "params"
        },
        {
            no: 50,
            name: "edit_file_v2_params",
            kind: "message",
            T: $de,
            oneof: "params"
        },
        {
            no: 52,
            name: "list_dir_v2_params",
            kind: "message",
            T: emn,
            oneof: "params"
        },
        {
            no: 53,
            name: "read_file_v2_params",
            kind: "message",
            T: R4t,
            oneof: "params"
        },
        {
            no: 54,
            name: "ripgrep_raw_search_params",
            kind: "message",
            T: x4t,
            oneof: "params"
        },
        {
            no: 55,
            name: "glob_file_search_params",
            kind: "message",
            T: nmn,
            oneof: "params"
        },
        {
            no: 56,
            name: "create_plan_params",
            kind: "message",
            T: H_t,
            oneof: "params"
        },
        {
            no: 57,
            name: "list_mcp_resources_params",
            kind: "message",
            T: Kpn,
            oneof: "params"
        },
        {
            no: 58,
            name: "read_mcp_resource_params",
            kind: "message",
            T: Ypn,
            oneof: "params"
        },
        {
            no: 59,
            name: "read_project_params",
            kind: "message",
            T: Oti,
            oneof: "params"
        },
        {
            no: 60,
            name: "update_project_params",
            kind: "message",
            T: Fti,
            oneof: "params"
        },
        {
            no: 61,
            name: "task_v2_params",
            kind: "message",
            T: L$e,
            oneof: "params"
        },
        {
            no: 62,
            name: "call_mcp_tool_params",
            kind: "message",
            T: vti,
            oneof: "params"
        },
        {
            no: 63,
            name: "apply_agent_diff_params",
            kind: "message",
            T: $pn,
            oneof: "params"
        },
        {
            no: 64,
            name: "ask_question_params",
            kind: "message",
            T: EAe,
            oneof: "params"
        },
        {
            no: 65,
            name: "switch_mode_params",
            kind: "message",
            T: W_t,
            oneof: "params"
        },
        {
            no: 66,
            name: "computer_use_params",
            kind: "message",
            T: M4t,
            oneof: "params"
        },
        {
            no: 67,
            name: "write_shell_stdin_params",
            kind: "message",
            T: Get,
            oneof: "params"
        },
        {
            no: 68,
            name: "record_screen_params",
            kind: "message",
            T: B_t,
            oneof: "params"
        },
        {
            no: 69,
            name: "web_fetch_params",
            kind: "message",
            T: G_t,
            oneof: "params"
        },
        {
            no: 70,
            name: "report_bugfix_results_params",
            kind: "message",
            T: omn,
            oneof: "params"
        },
        {
            no: 71,
            name: "mcp_auth_params",
            kind: "message",
            T: q_t,
            oneof: "params"
        },
        {
            no: 72,
            name: "get_mcp_tools_params",
            kind: "message",
            T: Xpn,
            oneof: "params"
        },
        {
            no: 73,
            name: "connect_scm_params",
            kind: "message",
            T: D4t,
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
    ]), B3 = x.makeMessageType("aiserver.v1.ClientSideToolV2Result", ()=>[
        {
            no: 1,
            name: "tool",
            kind: "enum",
            T: x.getEnumType(Ct)
        },
        {
            no: 2,
            name: "read_semsearch_files_result",
            kind: "message",
            T: Wpn,
            oneof: "result"
        },
        {
            no: 4,
            name: "ripgrep_search_result",
            kind: "message",
            T: uyr,
            oneof: "result"
        },
        {
            no: 6,
            name: "read_file_result",
            kind: "message",
            T: lti,
            oneof: "result"
        },
        {
            no: 9,
            name: "list_dir_result",
            kind: "message",
            T: oti,
            oneof: "result"
        },
        {
            no: 10,
            name: "edit_file_result",
            kind: "message",
            T: ayr,
            oneof: "result"
        },
        {
            no: 11,
            name: "file_search_result",
            kind: "message",
            T: lyr,
            oneof: "result"
        },
        {
            no: 18,
            name: "semantic_search_full_result",
            kind: "message",
            T: qpn,
            oneof: "result"
        },
        {
            no: 20,
            name: "delete_file_result",
            kind: "message",
            T: T4t,
            oneof: "result"
        },
        {
            no: 21,
            name: "reapply_result",
            kind: "message",
            T: ryr,
            oneof: "result"
        },
        {
            no: 24,
            name: "run_terminal_command_v2_result",
            kind: "message",
            T: Hte,
            oneof: "result"
        },
        {
            no: 25,
            name: "fetch_rules_result",
            kind: "message",
            T: syr,
            oneof: "result"
        },
        {
            no: 27,
            name: "web_search_result",
            kind: "message",
            T: I4t,
            oneof: "result"
        },
        {
            no: 28,
            name: "mcp_result",
            kind: "message",
            T: mti,
            oneof: "result"
        },
        {
            no: 32,
            name: "search_symbols_result",
            kind: "message",
            T: Syr,
            oneof: "result"
        },
        {
            no: 33,
            name: "background_composer_followup_result",
            kind: "message",
            T: kyr,
            oneof: "result"
        },
        {
            no: 34,
            name: "knowledge_base_result",
            kind: "message",
            T: wyr,
            oneof: "result"
        },
        {
            no: 36,
            name: "fetch_pull_request_result",
            kind: "message",
            T: Cyr,
            oneof: "result"
        },
        {
            no: 37,
            name: "deep_search_result",
            kind: "message",
            T: Eyr,
            oneof: "result"
        },
        {
            no: 38,
            name: "create_diagram_result",
            kind: "message",
            T: Iyr,
            oneof: "result"
        },
        {
            no: 39,
            name: "fix_lints_result",
            kind: "message",
            T: xyr,
            oneof: "result"
        },
        {
            no: 40,
            name: "read_lints_result",
            kind: "message",
            T: Eti,
            oneof: "result"
        },
        {
            no: 41,
            name: "gotodef_result",
            kind: "message",
            T: dti,
            oneof: "result"
        },
        {
            no: 42,
            name: "task_result",
            kind: "message",
            T: WLo,
            oneof: "result"
        },
        {
            no: 43,
            name: "await_task_result",
            kind: "message",
            T: YLo,
            oneof: "result"
        },
        {
            no: 44,
            name: "todo_read_result",
            kind: "message",
            T: Nyr,
            oneof: "result"
        },
        {
            no: 45,
            name: "todo_write_result",
            kind: "message",
            T: Ket,
            oneof: "result"
        },
        {
            no: 51,
            name: "edit_file_v2_result",
            kind: "message",
            T: N$e,
            oneof: "result"
        },
        {
            no: 52,
            name: "list_dir_v2_result",
            kind: "message",
            T: tmn,
            oneof: "result"
        },
        {
            no: 53,
            name: "read_file_v2_result",
            kind: "message",
            T: O$e,
            oneof: "result"
        },
        {
            no: 54,
            name: "ripgrep_raw_search_result",
            kind: "message",
            T: Qpn,
            oneof: "result"
        },
        {
            no: 55,
            name: "glob_file_search_result",
            kind: "message",
            T: Lti,
            oneof: "result"
        },
        {
            no: 56,
            name: "create_plan_result",
            kind: "message",
            T: P4t,
            oneof: "result"
        },
        {
            no: 57,
            name: "list_mcp_resources_result",
            kind: "message",
            T: gti,
            oneof: "result"
        },
        {
            no: 58,
            name: "read_mcp_resource_result",
            kind: "message",
            T: fti,
            oneof: "result"
        },
        {
            no: 59,
            name: "read_project_result",
            kind: "message",
            T: Byr,
            oneof: "result"
        },
        {
            no: 60,
            name: "update_project_result",
            kind: "message",
            T: Uyr,
            oneof: "result"
        },
        {
            no: 61,
            name: "task_v2_result",
            kind: "message",
            T: Vet,
            oneof: "result"
        },
        {
            no: 62,
            name: "call_mcp_tool_result",
            kind: "message",
            T: yyr,
            oneof: "result"
        },
        {
            no: 63,
            name: "apply_agent_diff_result",
            kind: "message",
            T: qei,
            oneof: "result"
        },
        {
            no: 64,
            name: "ask_question_result",
            kind: "message",
            T: Hde,
            oneof: "result"
        },
        {
            no: 65,
            name: "switch_mode_result",
            kind: "message",
            T: imn,
            oneof: "result"
        },
        {
            no: 66,
            name: "computer_use_result",
            kind: "message",
            T: rmn,
            oneof: "result"
        },
        {
            no: 67,
            name: "generate_image_result",
            kind: "message",
            T: qet,
            oneof: "result"
        },
        {
            no: 68,
            name: "write_shell_stdin_result",
            kind: "message",
            T: b4t,
            oneof: "result"
        },
        {
            no: 69,
            name: "record_screen_result",
            kind: "message",
            T: Dpn,
            oneof: "result"
        },
        {
            no: 70,
            name: "web_fetch_result",
            kind: "message",
            T: smn,
            oneof: "result"
        },
        {
            no: 71,
            name: "report_bugfix_results_result",
            kind: "message",
            T: Wyr,
            oneof: "result"
        },
        {
            no: 72,
            name: "ai_attribution_result",
            kind: "message",
            T: Wbr,
            oneof: "result"
        },
        {
            no: 73,
            name: "mcp_auth_result",
            kind: "message",
            T: Dve,
            oneof: "result"
        },
        {
            no: 74,
            name: "get_mcp_tools_result",
            kind: "message",
            T: _ti,
            oneof: "result"
        },
        {
            no: 75,
            name: "connect_scm_result",
            kind: "message",
            T: jti,
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
            T: Mve,
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
            T: T3o,
            opt: !0
        }
    ]), C3o = x.makeMessageType("aiserver.v1.NudgeMessage", ()=>[
        {
            no: 1,
            name: "raw_message",
            kind: "scalar",
            T: 9
        }
    ]), T3o = x.makeMessageType("aiserver.v1.ToolResultAttachments", ()=>[
        {
            no: 1,
            name: "original_todos",
            kind: "message",
            T: yM,
            repeated: !0
        },
        {
            no: 2,
            name: "updated_todos",
            kind: "message",
            T: yM,
            repeated: !0
        },
        {
            no: 3,
            name: "nudge_messages",
            kind: "message",
            T: C3o,
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
            T: x.getEnumType(E3o)
        },
        {
            no: 6,
            name: "discovery_budget_reminder",
            kind: "message",
            T: I3o,
            opt: !0
        }
    ]), E3o = x.makeEnum("aiserver.v1.ToolResultAttachments.TodoReminderType", [
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
]), I3o = x.makeMessageType("aiserver.v1.ToolResultAttachments.DiscoveryBudgetReminder", ()=>[
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
}), x3o = x.makeMessageType("aiserver.v1.StreamedBackPartialToolCall", ()=>[
        {
            no: 1,
            name: "tool",
            kind: "enum",
            T: x.getEnumType(Ct)
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
    ]), oyr = x.makeMessageType("aiserver.v1.StreamedBackToolCall", ()=>[
        {
            no: 1,
            name: "tool",
            kind: "enum",
            T: x.getEnumType(Ct)
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
            T: vNo,
            oneof: "params"
        },
        {
            no: 5,
            name: "ripgrep_search_stream",
            kind: "message",
            T: gNo,
            oneof: "params"
        },
        {
            no: 7,
            name: "read_file_stream",
            kind: "message",
            T: G3o,
            oneof: "params"
        },
        {
            no: 12,
            name: "list_dir_stream",
            kind: "message",
            T: W3o,
            oneof: "params"
        },
        {
            no: 13,
            name: "edit_file_stream",
            kind: "message",
            T: U3o,
            oneof: "params"
        },
        {
            no: 14,
            name: "file_search_stream",
            kind: "message",
            T: j3o,
            oneof: "params"
        },
        {
            no: 19,
            name: "semantic_search_full_stream",
            kind: "message",
            T: _No,
            oneof: "params"
        },
        {
            no: 21,
            name: "delete_file_stream",
            kind: "message",
            T: bNo,
            oneof: "params"
        },
        {
            no: 22,
            name: "reapply_stream",
            kind: "message",
            T: S3o,
            oneof: "params"
        },
        {
            no: 25,
            name: "run_terminal_command_v2_stream",
            kind: "message",
            T: ILo,
            oneof: "params"
        },
        {
            no: 26,
            name: "fetch_rules_stream",
            kind: "message",
            T: xLo,
            oneof: "params"
        },
        {
            no: 28,
            name: "web_search_stream",
            kind: "message",
            T: ALo,
            oneof: "params"
        },
        {
            no: 29,
            name: "mcp_stream",
            kind: "message",
            T: PLo,
            oneof: "params"
        },
        {
            no: 33,
            name: "search_symbols_stream",
            kind: "message",
            T: DLo,
            oneof: "params"
        },
        {
            no: 41,
            name: "gotodef_stream",
            kind: "message",
            T: HLo,
            oneof: "params"
        },
        {
            no: 34,
            name: "background_composer_followup_stream",
            kind: "message",
            T: NLo,
            oneof: "params"
        },
        {
            no: 35,
            name: "knowledge_base_stream",
            kind: "message",
            T: LLo,
            oneof: "params"
        },
        {
            no: 36,
            name: "fetch_pull_request_stream",
            kind: "message",
            T: FLo,
            oneof: "params"
        },
        {
            no: 37,
            name: "deep_search_stream",
            kind: "message",
            T: BLo,
            oneof: "params"
        },
        {
            no: 38,
            name: "create_diagram_stream",
            kind: "message",
            T: ULo,
            oneof: "params"
        },
        {
            no: 39,
            name: "fix_lints_stream",
            kind: "message",
            T: jLo,
            oneof: "params"
        },
        {
            no: 40,
            name: "read_lints_stream",
            kind: "message",
            T: $Lo,
            oneof: "params"
        },
        {
            no: 42,
            name: "task_stream",
            kind: "message",
            T: qLo,
            oneof: "params"
        },
        {
            no: 43,
            name: "await_task_stream",
            kind: "message",
            T: ZLo,
            oneof: "params"
        },
        {
            no: 44,
            name: "todo_read_stream",
            kind: "message",
            T: QLo,
            oneof: "params"
        },
        {
            no: 45,
            name: "todo_write_stream",
            kind: "message",
            T: JLo,
            oneof: "params"
        },
        {
            no: 52,
            name: "edit_file_v2_stream",
            kind: "message",
            T: M3o,
            oneof: "params"
        },
        {
            no: 53,
            name: "list_dir_v2_stream",
            kind: "message",
            T: tOo,
            oneof: "params"
        },
        {
            no: 54,
            name: "read_file_v2_stream",
            kind: "message",
            T: nOo,
            oneof: "params"
        },
        {
            no: 55,
            name: "ripgrep_raw_search_stream",
            kind: "message",
            T: KLo,
            oneof: "params"
        },
        {
            no: 56,
            name: "glob_file_search_stream",
            kind: "message",
            T: iOo,
            oneof: "params"
        },
        {
            no: 57,
            name: "create_plan_stream",
            kind: "message",
            T: hOo,
            oneof: "params"
        },
        {
            no: 58,
            name: "list_mcp_resources_stream",
            kind: "message",
            T: rOo,
            oneof: "params"
        },
        {
            no: 59,
            name: "read_mcp_resource_stream",
            kind: "message",
            T: oOo,
            oneof: "params"
        },
        {
            no: 60,
            name: "read_project_stream",
            kind: "message",
            T: pOo,
            oneof: "params"
        },
        {
            no: 61,
            name: "update_project_stream",
            kind: "message",
            T: gOo,
            oneof: "params"
        },
        {
            no: 62,
            name: "task_v2_stream",
            kind: "message",
            T: zLo,
            oneof: "params"
        },
        {
            no: 63,
            name: "call_mcp_tool_stream",
            kind: "message",
            T: sOo,
            oneof: "params"
        },
        {
            no: 64,
            name: "ask_question_stream",
            kind: "message",
            T: fOo,
            oneof: "params"
        },
        {
            no: 65,
            name: "switch_mode_stream",
            kind: "message",
            T: vOo,
            oneof: "params"
        },
        {
            no: 66,
            name: "computer_use_stream",
            kind: "message",
            T: _Oo,
            oneof: "params"
        },
        {
            no: 67,
            name: "write_shell_stdin_stream",
            kind: "message",
            T: bOo,
            oneof: "params"
        },
        {
            no: 68,
            name: "web_fetch_stream",
            kind: "message",
            T: yOo,
            oneof: "params"
        },
        {
            no: 69,
            name: "report_bugfix_results_stream",
            kind: "message",
            T: SOo,
            oneof: "params"
        },
        {
            no: 70,
            name: "mcp_auth_stream",
            kind: "message",
            T: kOo,
            oneof: "params"
        },
        {
            no: 71,
            name: "connect_scm_stream",
            kind: "message",
            T: wOo,
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
            T: Mve,
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
    ]), A3o = x.makeMessageType("aiserver.v1.StreamedBackToolCallV2", ()=>[
        {
            no: 1,
            name: "tool",
            kind: "enum",
            T: x.getEnumType(Ct)
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
            T: Hpn,
            oneof: "params"
        },
        {
            no: 5,
            name: "ripgrep_search_params",
            kind: "message",
            T: cti,
            oneof: "params"
        },
        {
            no: 9,
            name: "read_file_params",
            kind: "message",
            T: ati,
            oneof: "params"
        },
        {
            no: 12,
            name: "list_dir_params",
            kind: "message",
            T: sti,
            oneof: "params"
        },
        {
            no: 13,
            name: "edit_file_params",
            kind: "message",
            T: nti,
            oneof: "params"
        },
        {
            no: 16,
            name: "file_search_params",
            kind: "message",
            T: rti,
            oneof: "params"
        },
        {
            no: 17,
            name: "semantic_search_full_params",
            kind: "message",
            T: Gpn,
            oneof: "params"
        },
        {
            no: 19,
            name: "delete_file_params",
            kind: "message",
            T: C4t,
            oneof: "params"
        },
        {
            no: 20,
            name: "reapply_params",
            kind: "message",
            T: eti,
            oneof: "params"
        },
        {
            no: 23,
            name: "run_terminal_command_v2_params",
            kind: "message",
            T: r5e,
            oneof: "params"
        },
        {
            no: 24,
            name: "fetch_rules_params",
            kind: "message",
            T: tti,
            oneof: "params"
        },
        {
            no: 26,
            name: "web_search_params",
            kind: "message",
            T: E4t,
            oneof: "params"
        },
        {
            no: 27,
            name: "mcp_params",
            kind: "message",
            T: Vpn,
            oneof: "params"
        },
        {
            no: 31,
            name: "search_symbols_params",
            kind: "message",
            T: bti,
            oneof: "params"
        },
        {
            no: 41,
            name: "gotodef_params",
            kind: "message",
            T: zpn,
            oneof: "params"
        },
        {
            no: 32,
            name: "background_composer_followup_params",
            kind: "message",
            T: yti,
            oneof: "params"
        },
        {
            no: 33,
            name: "knowledge_base_params",
            kind: "message",
            T: Sti,
            oneof: "params"
        },
        {
            no: 34,
            name: "fetch_pull_request_params",
            kind: "message",
            T: kti,
            oneof: "params"
        },
        {
            no: 35,
            name: "deep_search_params",
            kind: "message",
            T: wti,
            oneof: "params"
        },
        {
            no: 36,
            name: "create_diagram_params",
            kind: "message",
            T: Cti,
            oneof: "params"
        },
        {
            no: 37,
            name: "fix_lints_params",
            kind: "message",
            T: Tti,
            oneof: "params"
        },
        {
            no: 38,
            name: "read_lints_params",
            kind: "message",
            T: Zpn,
            oneof: "params"
        },
        {
            no: 42,
            name: "task_params",
            kind: "message",
            T: Ryr,
            oneof: "params"
        },
        {
            no: 43,
            name: "await_task_params",
            kind: "message",
            T: Dyr,
            oneof: "params"
        },
        {
            no: 44,
            name: "todo_read_params",
            kind: "message",
            T: Nti,
            oneof: "params"
        },
        {
            no: 45,
            name: "todo_write_params",
            kind: "message",
            T: A4t,
            oneof: "params"
        },
        {
            no: 48,
            name: "edit_file_v2_params",
            kind: "message",
            T: $de,
            oneof: "params"
        },
        {
            no: 49,
            name: "list_dir_v2_params",
            kind: "message",
            T: emn,
            oneof: "params"
        },
        {
            no: 61,
            name: "read_file_v2_params",
            kind: "message",
            T: R4t,
            oneof: "params"
        },
        {
            no: 62,
            name: "ripgrep_raw_search_params",
            kind: "message",
            T: x4t,
            oneof: "params"
        },
        {
            no: 63,
            name: "glob_file_search_params",
            kind: "message",
            T: nmn,
            oneof: "params"
        },
        {
            no: 64,
            name: "create_plan_params",
            kind: "message",
            T: H_t,
            oneof: "params"
        },
        {
            no: 65,
            name: "list_mcp_resources_params",
            kind: "message",
            T: Kpn,
            oneof: "params"
        },
        {
            no: 66,
            name: "read_mcp_resource_params",
            kind: "message",
            T: Ypn,
            oneof: "params"
        },
        {
            no: 67,
            name: "read_project_params",
            kind: "message",
            T: Oti,
            oneof: "params"
        },
        {
            no: 68,
            name: "update_project_params",
            kind: "message",
            T: Fti,
            oneof: "params"
        },
        {
            no: 69,
            name: "task_v2_params",
            kind: "message",
            T: L$e,
            oneof: "params"
        },
        {
            no: 70,
            name: "call_mcp_tool_params",
            kind: "message",
            T: vti,
            oneof: "params"
        },
        {
            no: 71,
            name: "apply_agent_diff_params",
            kind: "message",
            T: $pn,
            oneof: "params"
        },
        {
            no: 72,
            name: "ask_question_params",
            kind: "message",
            T: EAe,
            oneof: "params"
        },
        {
            no: 73,
            name: "switch_mode_params",
            kind: "message",
            T: W_t,
            oneof: "params"
        },
        {
            no: 74,
            name: "computer_use_params",
            kind: "message",
            T: M4t,
            oneof: "params"
        },
        {
            no: 75,
            name: "write_shell_stdin_params",
            kind: "message",
            T: Get,
            oneof: "params"
        },
        {
            no: 76,
            name: "record_screen_params",
            kind: "message",
            T: B_t,
            oneof: "params"
        },
        {
            no: 77,
            name: "web_fetch_params",
            kind: "message",
            T: G_t,
            oneof: "params"
        },
        {
            no: 78,
            name: "report_bugfix_results_params",
            kind: "message",
            T: omn,
            oneof: "params"
        },
        {
            no: 79,
            name: "mcp_auth_params",
            kind: "message",
            T: q_t,
            oneof: "params"
        },
        {
            no: 80,
            name: "get_mcp_tools_params",
            kind: "message",
            T: Xpn,
            oneof: "params"
        },
        {
            no: 81,
            name: "connect_scm_params",
            kind: "message",
            T: D4t,
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
            T: Mve,
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
    ]), $de = x.makeMessageType("aiserver.v1.EditFileV2Params", ()=>[
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
            T: R3o,
            oneof: "streaming_edit"
        },
        {
            no: 5,
            name: "code",
            kind: "message",
            T: P3o,
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
            T: j_t,
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
    ]), R3o = x.makeMessageType("aiserver.v1.EditFileV2Params.StreamingEditText", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "EditFileV2Params_StreamingEditText"
}), P3o = x.makeMessageType("aiserver.v1.EditFileV2Params.StreamingEditCode", ()=>[
        {
            no: 1,
            name: "code",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "EditFileV2Params_StreamingEditCode"
}), N$e = x.makeMessageType("aiserver.v1.EditFileV2Result", ()=>[
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
            T: j_t,
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
            T: jde,
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
            T: iti,
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
    ]), M3o = x.makeMessageType("aiserver.v1.EditFileV2Stream", []), nti = x.makeMessageType("aiserver.v1.EditFileParams", ()=>[
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
            T: aW,
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
    ]), ayr = x.makeMessageType("aiserver.v1.EditFileResult", ()=>[
        {
            no: 1,
            name: "diff",
            kind: "message",
            T: j_t
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
            T: jde,
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
            T: L3o,
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
            T: F3o,
            opt: !0
        },
        {
            no: 14,
            name: "human_feedback",
            kind: "message",
            T: B3o,
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
            T: iti,
            opt: !0
        },
        {
            no: 17,
            name: "were_all_new_linter_errors_resolved_by_this_edit",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), j_t = x.makeMessageType("aiserver.v1.EditFileResult.FileDiff", ()=>[
        {
            no: 1,
            name: "chunks",
            kind: "message",
            T: N3o,
            repeated: !0
        },
        {
            no: 2,
            name: "editor",
            kind: "enum",
            T: x.getEnumType(D3o)
        },
        {
            no: 3,
            name: "hit_timeout",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "EditFileResult_FileDiff"
}), D3o = x.makeEnum("aiserver.v1.EditFileResult.FileDiff.Editor", [
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
]), N3o = x.makeMessageType("aiserver.v1.EditFileResult.FileDiff.ChunkDiff", ()=>[
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
}), L3o = x.makeMessageType("aiserver.v1.EditFileResult.RecoverableError", ()=>[
        {
            no: 1,
            name: "error_type",
            kind: "enum",
            T: x.getEnumType(O3o)
        },
        {
            no: 2,
            name: "model_message",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "EditFileResult_RecoverableError"
}), O3o = x.makeEnum("aiserver.v1.EditFileResult.RecoverableError.RecoverableErrorType", [
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
]), F3o = x.makeMessageType("aiserver.v1.EditFileResult.EditFileHumanReview", ()=>[
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
}), B3o = x.makeMessageType("aiserver.v1.EditFileResult.HumanFeedback", ()=>[
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
}), iti = x.makeMessageType("aiserver.v1.HumanReview", ()=>[
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
    ]), U3o = x.makeMessageType("aiserver.v1.EditFileStream", []), rti = x.makeMessageType("aiserver.v1.ToolCallFileSearchParams", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]), j3o = x.makeMessageType("aiserver.v1.ToolCallFileSearchStream", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]), lyr = x.makeMessageType("aiserver.v1.ToolCallFileSearchResult", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: $3o,
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
    ]), $3o = x.makeMessageType("aiserver.v1.ToolCallFileSearchResult.File", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ToolCallFileSearchResult_File"
}), sti = x.makeMessageType("aiserver.v1.ListDirParams", ()=>[
        {
            no: 1,
            name: "directory_path",
            kind: "scalar",
            T: 9
        }
    ]), oti = x.makeMessageType("aiserver.v1.ListDirResult", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: H3o,
            repeated: !0
        },
        {
            no: 2,
            name: "directory_relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]), H3o = x.makeMessageType("aiserver.v1.ListDirResult.File", ()=>[
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
            T: Js,
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
}), W3o = x.makeMessageType("aiserver.v1.ListDirStream", []), ati = x.makeMessageType("aiserver.v1.ReadFileParams", ()=>[
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
    ]), lti = x.makeMessageType("aiserver.v1.ReadFileResult", ()=>[
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
            T: R$e,
            repeated: !0
        },
        {
            no: 14,
            name: "file_git_context",
            kind: "message",
            T: Rbr
        }
    ]), G3o = x.makeMessageType("aiserver.v1.ReadFileStream", []), cti = x.makeMessageType("aiserver.v1.RipgrepSearchParams", ()=>[
        {
            no: 1,
            name: "options",
            kind: "message",
            T: V3o
        },
        {
            no: 2,
            name: "pattern_info",
            kind: "message",
            T: q3o
        }
    ]), q3o = x.makeMessageType("aiserver.v1.RipgrepSearchParams.IPatternInfoProto", ()=>[
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
            T: z3o
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
}), z3o = x.makeMessageType("aiserver.v1.RipgrepSearchParams.IPatternInfoProto.INotebookPatternInfoProto", ()=>[
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
}), V3o = x.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto", ()=>[
        {
            no: 1,
            name: "preview_options",
            kind: "message",
            T: Z3o
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
            T: Q3o
        },
        {
            no: 6,
            name: "exclude_pattern",
            kind: "message",
            T: Y3o
        },
        {
            no: 7,
            name: "include_pattern",
            kind: "message",
            T: cyr
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
            T: K3o
        }
    ], {
    localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto"
}), K3o = x.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ExtraFileResourcesProto", ()=>[
        {
            no: 1,
            name: "extra_file_resources",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto"
}), Y3o = x.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ExcludePatternProto", ()=>[
        {
            no: 1,
            name: "exclude_pattern",
            kind: "message",
            T: X3o,
            repeated: !0
        }
    ], {
    localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto"
}), X3o = x.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ISearchPatternBuilderProto", ()=>[
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
            T: cyr
        }
    ], {
    localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto"
}), cyr = x.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ISearchPathPatternBuilderProto", ()=>[
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
}), Z3o = x.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ITextSearchPreviewOptionsProto", ()=>[
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
}), Q3o = x.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.INotebookSearchConfigProto", ()=>[
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
}), uyr = x.makeMessageType("aiserver.v1.RipgrepSearchResult", ()=>[
        {
            no: 1,
            name: "internal",
            kind: "message",
            T: J3o
        }
    ]), J3o = x.makeMessageType("aiserver.v1.RipgrepSearchResultInternal", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: nNo,
            repeated: !0
        },
        {
            no: 2,
            name: "exit",
            kind: "enum",
            T: x.getEnumType(tNo),
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
            T: aNo,
            repeated: !0
        },
        {
            no: 5,
            name: "file_search_stats",
            kind: "message",
            T: lNo,
            oneof: "stats"
        },
        {
            no: 6,
            name: "text_search_stats",
            kind: "message",
            T: uNo,
            oneof: "stats"
        }
    ]), eNo = x.makeEnum("aiserver.v1.RipgrepSearchResultInternal.TextSearchCompleteMessageType", [
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
]), tNo = x.makeEnum("aiserver.v1.RipgrepSearchResultInternal.SearchCompletionExitCode", [
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
]), nNo = x.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.IFileMatch", ()=>[
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
            T: iNo,
            repeated: !0
        }
    ], {
    localName: "RipgrepSearchResultInternal_IFileMatch"
}), iNo = x.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchResult", ()=>[
        {
            no: 1,
            name: "match",
            kind: "message",
            T: rNo,
            oneof: "result"
        },
        {
            no: 2,
            name: "context",
            kind: "message",
            T: sNo,
            oneof: "result"
        }
    ], {
    localName: "RipgrepSearchResultInternal_ITextSearchResult"
}), rNo = x.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchMatch", ()=>[
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
            T: oNo,
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
}), sNo = x.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchContext", ()=>[
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
}), oNo = x.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ISearchRangeSetPairing", ()=>[
        {
            no: 1,
            name: "source",
            kind: "message",
            T: dyr
        },
        {
            no: 2,
            name: "preview",
            kind: "message",
            T: dyr
        }
    ], {
    localName: "RipgrepSearchResultInternal_ISearchRangeSetPairing"
}), dyr = x.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ISearchRange", ()=>[
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
}), aNo = x.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchCompleteMessage", ()=>[
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
            T: x.getEnumType(eNo)
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
}), lNo = x.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.IFileSearchStats", ()=>[
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
            T: hNo,
            oneof: "detail_stats"
        },
        {
            no: 3,
            name: "cached_search_stats",
            kind: "message",
            T: pNo,
            oneof: "detail_stats"
        },
        {
            no: 4,
            name: "file_search_provider_stats",
            kind: "message",
            T: mNo,
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
            T: x.getEnumType(cNo)
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
}), cNo = x.makeEnum("aiserver.v1.RipgrepSearchResultInternal.IFileSearchStats.FileSearchProviderType", [
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
]), uNo = x.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchStats", ()=>[
        {
            no: 1,
            name: "type",
            kind: "enum",
            T: x.getEnumType(dNo)
        }
    ], {
    localName: "RipgrepSearchResultInternal_ITextSearchStats"
}), dNo = x.makeEnum("aiserver.v1.RipgrepSearchResultInternal.ITextSearchStats.TextSearchProviderType", [
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
]), hNo = x.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ISearchEngineStats", ()=>[
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
}), pNo = x.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ICachedSearchStats", ()=>[
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
}), mNo = x.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.IFileSearchProviderStats", ()=>[
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
}), gNo = x.makeMessageType("aiserver.v1.RipgrepSearchStream", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]), Hpn = x.makeMessageType("aiserver.v1.ReadSemsearchFilesParams", ()=>[
        {
            no: 1,
            name: "repository_info",
            kind: "message",
            T: Cx
        },
        {
            no: 2,
            name: "code_results",
            kind: "message",
            T: Q9,
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
            T: Tyr,
            repeated: !0
        },
        {
            no: 5,
            name: "pr_search_on",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), hyr = x.makeMessageType("aiserver.v1.MissingFile", ()=>[
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
            T: x.getEnumType(fNo)
        },
        {
            no: 3,
            name: "num_lines",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), fNo = x.makeEnum("aiserver.v1.MissingFile.MissingReason", [
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
]), pyr = x.makeMessageType("aiserver.v1.Knowledge", ()=>[
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
    ]), myr = x.makeMessageType("aiserver.v1.ToolPullRequestResult", ()=>[
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
    ]), Wpn = x.makeMessageType("aiserver.v1.ReadSemsearchFilesResult", ()=>[
        {
            no: 1,
            name: "code_results",
            kind: "message",
            T: Q9,
            repeated: !0
        },
        {
            no: 2,
            name: "all_files",
            kind: "message",
            T: wAe,
            repeated: !0
        },
        {
            no: 3,
            name: "missing_files",
            kind: "message",
            T: hyr,
            repeated: !0
        },
        {
            no: 4,
            name: "knowledge_results",
            kind: "message",
            T: pyr,
            repeated: !0
        },
        {
            no: 5,
            name: "pr_results",
            kind: "message",
            T: myr,
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
    ]), vNo = x.makeMessageType("aiserver.v1.ReadSemsearchFilesStream", ()=>[
        {
            no: 1,
            name: "num_files",
            kind: "scalar",
            T: 5
        }
    ]), Gpn = x.makeMessageType("aiserver.v1.SemanticSearchFullParams", ()=>[
        {
            no: 1,
            name: "repository_info",
            kind: "message",
            T: Cx
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
            T: Tyr,
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
            T: Q9,
            repeated: !0
        }
    ]), qpn = x.makeMessageType("aiserver.v1.SemanticSearchFullResult", ()=>[
        {
            no: 1,
            name: "code_results",
            kind: "message",
            T: Q9,
            repeated: !0
        },
        {
            no: 2,
            name: "all_files",
            kind: "message",
            T: wAe,
            repeated: !0
        },
        {
            no: 3,
            name: "missing_files",
            kind: "message",
            T: hyr,
            repeated: !0
        },
        {
            no: 4,
            name: "knowledge_results",
            kind: "message",
            T: pyr,
            repeated: !0
        },
        {
            no: 5,
            name: "pr_results",
            kind: "message",
            T: myr,
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
    ]), _No = x.makeMessageType("aiserver.v1.SemanticSearchFullStream", ()=>[
        {
            no: 1,
            name: "num_files",
            kind: "scalar",
            T: 5
        }
    ]), C4t = x.makeMessageType("aiserver.v1.DeleteFileParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]), T4t = x.makeMessageType("aiserver.v1.DeleteFileResult", ()=>[
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
    ]), bNo = x.makeMessageType("aiserver.v1.DeleteFileStream", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]), yNo = x.makeMessageType("aiserver.v1.BuiltinToolCall", ()=>[
        {
            no: 1,
            name: "tool",
            kind: "enum",
            T: x.getEnumType(iyr)
        },
        {
            no: 2,
            name: "search_params",
            kind: "message",
            T: jNo,
            oneof: "params"
        },
        {
            no: 3,
            name: "read_chunk_params",
            kind: "message",
            T: GNo,
            oneof: "params"
        },
        {
            no: 4,
            name: "gotodef_params",
            kind: "message",
            T: zpn,
            oneof: "params"
        },
        {
            no: 5,
            name: "edit_params",
            kind: "message",
            T: iLo,
            oneof: "params"
        },
        {
            no: 6,
            name: "undo_edit_params",
            kind: "message",
            T: zNo,
            oneof: "params"
        },
        {
            no: 7,
            name: "end_params",
            kind: "message",
            T: VNo,
            oneof: "params"
        },
        {
            no: 8,
            name: "new_file_params",
            kind: "message",
            T: LNo,
            oneof: "params"
        },
        {
            no: 9,
            name: "add_test_params",
            kind: "message",
            T: lLo,
            oneof: "params"
        },
        {
            no: 10,
            name: "run_test_params",
            kind: "message",
            T: hLo,
            oneof: "params"
        },
        {
            no: 11,
            name: "delete_test_params",
            kind: "message",
            T: vLo,
            oneof: "params"
        },
        {
            no: 12,
            name: "save_file_params",
            kind: "message",
            T: bLo,
            oneof: "params"
        },
        {
            no: 13,
            name: "get_tests_params",
            kind: "message",
            T: mLo,
            oneof: "params"
        },
        {
            no: 14,
            name: "get_symbols_params",
            kind: "message",
            T: SLo,
            oneof: "params"
        },
        {
            no: 15,
            name: "semantic_search_params",
            kind: "message",
            T: ONo,
            oneof: "params"
        },
        {
            no: 16,
            name: "get_project_structure_params",
            kind: "message",
            T: MNo,
            oneof: "params"
        },
        {
            no: 17,
            name: "create_rm_files_params",
            kind: "message",
            T: RNo,
            oneof: "params"
        },
        {
            no: 18,
            name: "run_terminal_commands_params",
            kind: "message",
            T: xNo,
            oneof: "params"
        },
        {
            no: 19,
            name: "new_edit_params",
            kind: "message",
            T: tLo,
            oneof: "params"
        },
        {
            no: 20,
            name: "read_with_linter_params",
            kind: "message",
            T: ENo,
            oneof: "params"
        },
        {
            no: 21,
            name: "add_ui_step_params",
            kind: "message",
            T: kNo,
            oneof: "params"
        },
        {
            no: 23,
            name: "read_semsearch_files_params",
            kind: "message",
            T: Hpn,
            oneof: "params"
        },
        {
            no: 26,
            name: "delete_file_params",
            kind: "message",
            T: C4t,
            oneof: "params"
        },
        {
            no: 22,
            name: "tool_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), SNo = x.makeMessageType("aiserver.v1.BuiltinToolResult", ()=>[
        {
            no: 1,
            name: "tool",
            kind: "enum",
            T: x.getEnumType(iyr)
        },
        {
            no: 2,
            name: "search_result",
            kind: "message",
            T: WNo,
            oneof: "result"
        },
        {
            no: 3,
            name: "read_chunk_result",
            kind: "message",
            T: qNo,
            oneof: "result"
        },
        {
            no: 4,
            name: "gotodef_result",
            kind: "message",
            T: dti,
            oneof: "result"
        },
        {
            no: 5,
            name: "edit_result",
            kind: "message",
            T: sLo,
            oneof: "result"
        },
        {
            no: 6,
            name: "undo_edit_result",
            kind: "message",
            T: YNo,
            oneof: "result"
        },
        {
            no: 7,
            name: "end_result",
            kind: "message",
            T: XNo,
            oneof: "result"
        },
        {
            no: 8,
            name: "new_file_result",
            kind: "message",
            T: KNo,
            oneof: "result"
        },
        {
            no: 9,
            name: "add_test_result",
            kind: "message",
            T: cLo,
            oneof: "result"
        },
        {
            no: 10,
            name: "run_test_result",
            kind: "message",
            T: pLo,
            oneof: "result"
        },
        {
            no: 11,
            name: "delete_test_result",
            kind: "message",
            T: _Lo,
            oneof: "result"
        },
        {
            no: 12,
            name: "save_file_result",
            kind: "message",
            T: yLo,
            oneof: "result"
        },
        {
            no: 13,
            name: "get_tests_result",
            kind: "message",
            T: gLo,
            oneof: "result"
        },
        {
            no: 14,
            name: "get_symbols_result",
            kind: "message",
            T: wLo,
            oneof: "result"
        },
        {
            no: 15,
            name: "semantic_search_result",
            kind: "message",
            T: BNo,
            oneof: "result"
        },
        {
            no: 16,
            name: "get_project_structure_result",
            kind: "message",
            T: DNo,
            oneof: "result"
        },
        {
            no: 17,
            name: "create_rm_files_result",
            kind: "message",
            T: PNo,
            oneof: "result"
        },
        {
            no: 18,
            name: "run_terminal_commands_result",
            kind: "message",
            T: ANo,
            oneof: "result"
        },
        {
            no: 19,
            name: "new_edit_result",
            kind: "message",
            T: nLo,
            oneof: "result"
        },
        {
            no: 20,
            name: "read_with_linter_result",
            kind: "message",
            T: INo,
            oneof: "result"
        },
        {
            no: 21,
            name: "add_ui_step_result",
            kind: "message",
            T: TNo,
            oneof: "result"
        },
        {
            no: 22,
            name: "read_semsearch_files_result",
            kind: "message",
            T: Wpn,
            oneof: "result"
        },
        {
            no: 24,
            name: "delete_file_result",
            kind: "message",
            T: T4t,
            oneof: "result"
        }
    ]), kNo = x.makeMessageType("aiserver.v1.AddUiStepParams", ()=>[
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
            T: CNo,
            oneof: "step"
        }
    ]), wNo = x.makeMessageType("aiserver.v1.AddUiStepParams.SearchResult", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "AddUiStepParams_SearchResult"
}), CNo = x.makeMessageType("aiserver.v1.AddUiStepParams.SearchResults", ()=>[
        {
            no: 1,
            name: "search_results",
            kind: "message",
            T: wNo,
            repeated: !0
        }
    ], {
    localName: "AddUiStepParams_SearchResults"
}), TNo = x.makeMessageType("aiserver.v1.AddUiStepResult", []), ifd = x.makeMessageType("aiserver.v1.ServerSideToolResult", []), gyr = x.makeMessageType("aiserver.v1.ToolCall", ()=>[
        {
            no: 1,
            name: "builtin_tool_call",
            kind: "message",
            T: yNo,
            oneof: "tool_call"
        },
        {
            no: 2,
            name: "custom_tool_call",
            kind: "message",
            T: ZNo,
            oneof: "tool_call"
        }
    ]), uti = x.makeMessageType("aiserver.v1.ToolResult", ()=>[
        {
            no: 1,
            name: "builtin_tool_result",
            kind: "message",
            T: SNo,
            oneof: "tool_result"
        },
        {
            no: 2,
            name: "custom_tool_result",
            kind: "message",
            T: QNo,
            oneof: "tool_result"
        },
        {
            no: 3,
            name: "error_tool_result",
            kind: "message",
            T: eLo,
            oneof: "tool_result"
        }
    ]), ENo = x.makeMessageType("aiserver.v1.ReadWithLinterParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]), INo = x.makeMessageType("aiserver.v1.ReadWithLinterResult", ()=>[
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
            T: cDo,
            repeated: !0
        }
    ]), xNo = x.makeMessageType("aiserver.v1.RunTerminalCommandsParams", ()=>[
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
    ]), ANo = x.makeMessageType("aiserver.v1.RunTerminalCommandsResult", ()=>[
        {
            no: 1,
            name: "outputs",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), RNo = x.makeMessageType("aiserver.v1.CreateRmFilesParams", ()=>[
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
    ]), PNo = x.makeMessageType("aiserver.v1.CreateRmFilesResult", ()=>[
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
    ]), MNo = x.makeMessageType("aiserver.v1.GetProjectStructureParams", []), DNo = x.makeMessageType("aiserver.v1.GetProjectStructureResult", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: NNo,
            repeated: !0
        },
        {
            no: 2,
            name: "root_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]), NNo = x.makeMessageType("aiserver.v1.GetProjectStructureResult.File", ()=>[
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
}), LNo = x.makeMessageType("aiserver.v1.NewFileParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]), ONo = x.makeMessageType("aiserver.v1.SemanticSearchParams", ()=>[
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
    ]), FNo = x.makeMessageType("aiserver.v1.Range", ()=>[
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
    ]), fyr = x.makeMessageType("aiserver.v1.MatchRange", ()=>[
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
    ]), BNo = x.makeMessageType("aiserver.v1.SemanticSearchResult", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: UNo,
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
    ]), UNo = x.makeMessageType("aiserver.v1.SemanticSearchResult.Item", ()=>[
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
            T: m7
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
            T: Abr,
            repeated: !0
        }
    ], {
    localName: "SemanticSearchResult_Item"
}), jNo = x.makeMessageType("aiserver.v1.SearchParams", ()=>[
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
    ]), $No = x.makeMessageType("aiserver.v1.SearchToolFileSearchResult", ()=>[
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
            T: HNo,
            repeated: !0
        },
        {
            no: 4,
            name: "cropped",
            kind: "scalar",
            T: 8
        }
    ]), HNo = x.makeMessageType("aiserver.v1.SearchToolFileSearchResult.Line", ()=>[
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
}), WNo = x.makeMessageType("aiserver.v1.SearchResult", ()=>[
        {
            no: 1,
            name: "file_results",
            kind: "message",
            T: $No,
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
    ]), GNo = x.makeMessageType("aiserver.v1.ReadChunkParams", ()=>[
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
    ]), qNo = x.makeMessageType("aiserver.v1.ReadChunkResult", ()=>[
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
    ]), zNo = x.makeMessageType("aiserver.v1.UndoEditParams", []), VNo = x.makeMessageType("aiserver.v1.EndParams", []), KNo = x.makeMessageType("aiserver.v1.NewFileResult", ()=>[
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
    ]), YNo = x.makeMessageType("aiserver.v1.UndoEditResult", ()=>[
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
    ]), XNo = x.makeMessageType("aiserver.v1.EndResult", []), ZNo = x.makeMessageType("aiserver.v1.CustomToolCall", ()=>[
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
    ]), rfd = x.makeMessageType("aiserver.v1.ScratchpadResult", []), QNo = x.makeMessageType("aiserver.v1.CustomToolResult", ()=>[
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
    ]), zpn = x.makeMessageType("aiserver.v1.GotodefParams", ()=>[
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
    ]), JNo = x.makeMessageType("aiserver.v1.GotodefDefinition", ()=>[
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
    ]), dti = x.makeMessageType("aiserver.v1.GotodefResult", ()=>[
        {
            no: 1,
            name: "definitions",
            kind: "message",
            T: JNo,
            repeated: !0
        }
    ]), eLo = x.makeMessageType("aiserver.v1.ErrorToolResult", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]), tLo = x.makeMessageType("aiserver.v1.NewEditParams", ()=>[
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
    ]), nLo = x.makeMessageType("aiserver.v1.NewEditResult", []), iLo = x.makeMessageType("aiserver.v1.EditParams", ()=>[
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
            T: x.getEnumType(rLo)
        },
        {
            no: 8,
            name: "auto_fix_all_linter_errors_in_file",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), rLo = x.makeEnum("aiserver.v1.EditParams.FrontendEditType", [
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
]), sLo = x.makeMessageType("aiserver.v1.EditResult", ()=>[
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
            T: aLo,
            repeated: !0
        }
    ]), oLo = x.makeMessageType("aiserver.v1.EditResult.RelatedInformation", ()=>[
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
}), aLo = x.makeMessageType("aiserver.v1.EditResult.Feedback", ()=>[
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
            T: oLo,
            repeated: !0
        }
    ], {
    localName: "EditResult_Feedback"
}), lLo = x.makeMessageType("aiserver.v1.AddTestParams", ()=>[
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
    ]), cLo = x.makeMessageType("aiserver.v1.AddTestResult", ()=>[
        {
            no: 1,
            name: "feedback",
            kind: "message",
            T: dLo,
            repeated: !0
        }
    ]), uLo = x.makeMessageType("aiserver.v1.AddTestResult.RelatedInformation", ()=>[
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
}), dLo = x.makeMessageType("aiserver.v1.AddTestResult.Feedback", ()=>[
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
            T: uLo,
            repeated: !0
        }
    ], {
    localName: "AddTestResult_Feedback"
}), hLo = x.makeMessageType("aiserver.v1.RunTestParams", ()=>[
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
    ]), pLo = x.makeMessageType("aiserver.v1.RunTestResult", ()=>[
        {
            no: 1,
            name: "result",
            kind: "scalar",
            T: 9
        }
    ]), mLo = x.makeMessageType("aiserver.v1.GetTestsParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]), gLo = x.makeMessageType("aiserver.v1.GetTestsResult", ()=>[
        {
            no: 1,
            name: "tests",
            kind: "message",
            T: fLo,
            repeated: !0
        }
    ]), fLo = x.makeMessageType("aiserver.v1.GetTestsResult.Test", ()=>[
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
}), vLo = x.makeMessageType("aiserver.v1.DeleteTestParams", ()=>[
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
    ]), _Lo = x.makeMessageType("aiserver.v1.DeleteTestResult", []), bLo = x.makeMessageType("aiserver.v1.SaveFileParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]), yLo = x.makeMessageType("aiserver.v1.SaveFileResult", []), SLo = x.makeMessageType("aiserver.v1.GetSymbolsParams", ()=>[
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
            T: kLo,
            opt: !0
        },
        {
            no: 3,
            name: "include_children",
            kind: "scalar",
            T: 8
        }
    ]), kLo = x.makeMessageType("aiserver.v1.GetSymbolsParams.LineRange", ()=>[
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
}), wLo = x.makeMessageType("aiserver.v1.GetSymbolsResult", ()=>[
        {
            no: 1,
            name: "symbols",
            kind: "message",
            T: Nei,
            repeated: !0
        }
    ]), vyr = x.makeMessageType("aiserver.v1.ShellCommandParsingResult", ()=>[
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
            T: TLo,
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
            T: ELo,
            repeated: !0
        }
    ]), CLo = x.makeMessageType("aiserver.v1.ShellCommandParsingResult.ExecutableCommandArg", ()=>[
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
}), TLo = x.makeMessageType("aiserver.v1.ShellCommandParsingResult.ExecutableCommand", ()=>[
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
            T: CLo,
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
}), ELo = x.makeMessageType("aiserver.v1.ShellCommandParsingResult.Redirect", ()=>[
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
}), r5e = x.makeMessageType("aiserver.v1.RunTerminalCommandV2Params", ()=>[
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
            T: hti,
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
            T: vyr,
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
            T: Wke,
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
            T: Hei,
            opt: !0
        }
    ]), hti = x.makeMessageType("aiserver.v1.RunTerminalCommandV2Params.ExecutionOptions", ()=>[
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
}), pti = x.makeMessageType("aiserver.v1.OutputLocation", ()=>[
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
    ]), Hte = x.makeMessageType("aiserver.v1.RunTerminalCommandV2Result", ()=>[
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
            T: x.getEnumType(Vse)
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
            T: iti,
            opt: !0
        },
        {
            no: 14,
            name: "effective_sandbox_policy",
            kind: "message",
            T: Wke,
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
            T: pti,
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
    ]), ILo = x.makeMessageType("aiserver.v1.RunTerminalCommandV2Stream", ()=>[
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
            T: vyr,
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
            T: Wke,
            opt: !0
        }
    ]), xLo = x.makeMessageType("aiserver.v1.FetchRulesStream", ()=>[
        {
            no: 1,
            name: "rule_names",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), E4t = x.makeMessageType("aiserver.v1.WebSearchParams", ()=>[
        {
            no: 1,
            name: "search_term",
            kind: "scalar",
            T: 9
        }
    ]), I4t = x.makeMessageType("aiserver.v1.WebSearchResult", ()=>[
        {
            no: 1,
            name: "references",
            kind: "message",
            T: _yr,
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
    ]), _yr = x.makeMessageType("aiserver.v1.WebSearchResult.WebReference", ()=>[
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
}), ALo = x.makeMessageType("aiserver.v1.WebSearchStream", ()=>[
        {
            no: 1,
            name: "search_term",
            kind: "scalar",
            T: 9
        }
    ]), Vpn = x.makeMessageType("aiserver.v1.MCPParams", ()=>[
        {
            no: 1,
            name: "tools",
            kind: "message",
            T: $_t,
            repeated: !0
        },
        {
            no: 2,
            name: "file_output_threshold_bytes",
            kind: "scalar",
            T: 3,
            opt: !0
        }
    ]), $_t = x.makeMessageType("aiserver.v1.MCPParams.Tool", ()=>[
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
            T: RLo,
            opt: !0
        }
    ], {
    localName: "MCPParams_Tool"
}), RLo = x.makeMessageType("aiserver.v1.MCPParams.TranscriptDisplay", ()=>[
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
}), mti = x.makeMessageType("aiserver.v1.MCPResult", ()=>[
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
    ]), PLo = x.makeMessageType("aiserver.v1.MCPStream", ()=>[
        {
            no: 1,
            name: "tools",
            kind: "message",
            T: $_t,
            repeated: !0
        }
    ]), Kpn = x.makeMessageType("aiserver.v1.ListMcpResourcesParams", ()=>[
        {
            no: 1,
            name: "server",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), gti = x.makeMessageType("aiserver.v1.ListMcpResourcesResult", ()=>[
        {
            no: 1,
            name: "resources",
            kind: "message",
            T: byr,
            repeated: !0
        }
    ]), byr = x.makeMessageType("aiserver.v1.ListMcpResourcesResult.MCPResource", ()=>[
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
}), Ypn = x.makeMessageType("aiserver.v1.ReadMcpResourceParams", ()=>[
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
    ]), fti = x.makeMessageType("aiserver.v1.ReadMcpResourceResult", ()=>[
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
    ]), vti = x.makeMessageType("aiserver.v1.CallMcpToolParams", ()=>[
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
            T: qd
        }
    ]), yyr = x.makeMessageType("aiserver.v1.CallMcpToolResult", ()=>[
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
            T: qd
        }
    ]), Xpn = x.makeMessageType("aiserver.v1.GetMcpToolsParams", ()=>[
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
    ]), _ti = x.makeMessageType("aiserver.v1.GetMcpToolsResult", ()=>[
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
    ]), bti = x.makeMessageType("aiserver.v1.SearchSymbolsParams", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]), Syr = x.makeMessageType("aiserver.v1.SearchSymbolsResult", ()=>[
        {
            no: 1,
            name: "matches",
            kind: "message",
            T: MLo,
            repeated: !0
        },
        {
            no: 2,
            name: "rejected",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), MLo = x.makeMessageType("aiserver.v1.SearchSymbolsResult.SymbolMatch", ()=>[
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
            T: FNo
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
            T: fyr,
            repeated: !0
        },
        {
            no: 6,
            name: "description_matches",
            kind: "message",
            T: fyr,
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
}), DLo = x.makeMessageType("aiserver.v1.SearchSymbolsStream", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]), yti = x.makeMessageType("aiserver.v1.BackgroundComposerFollowupParams", ()=>[
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
    ]), kyr = x.makeMessageType("aiserver.v1.BackgroundComposerFollowupResult", ()=>[
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
    ]), NLo = x.makeMessageType("aiserver.v1.BackgroundComposerFollowupStream", []), sfd = x.makeMessageType("aiserver.v1.SummarizeCodeParams", ()=>[
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
    ]), ofd = x.makeMessageType("aiserver.v1.SummarizeCodeResult", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ]), afd = x.makeMessageType("aiserver.v1.SummarizeCodeStream", []), Sti = x.makeMessageType("aiserver.v1.KnowledgeBaseParams", ()=>[
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
    ]), wyr = x.makeMessageType("aiserver.v1.KnowledgeBaseResult", ()=>[
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
    ]), LLo = x.makeMessageType("aiserver.v1.KnowledgeBaseStream", []), kti = x.makeMessageType("aiserver.v1.FetchPullRequestParams", ()=>[
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
    ]), Cyr = x.makeMessageType("aiserver.v1.FetchPullRequestResult", ()=>[
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
            T: OLo,
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
    ]), OLo = x.makeMessageType("aiserver.v1.IssueComment", ()=>[
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
    ]), FLo = x.makeMessageType("aiserver.v1.FetchPullRequestStream", []), Tyr = x.makeMessageType("aiserver.v1.PullRequestReference", ()=>[
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
    ]), wti = x.makeMessageType("aiserver.v1.DeepSearchParams", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]), Eyr = x.makeMessageType("aiserver.v1.DeepSearchResult", ()=>[
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
    ]), BLo = x.makeMessageType("aiserver.v1.DeepSearchStream", []), Cti = x.makeMessageType("aiserver.v1.CreateDiagramParams", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), Iyr = x.makeMessageType("aiserver.v1.CreateDiagramResult", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), ULo = x.makeMessageType("aiserver.v1.CreateDiagramStream", []), Tti = x.makeMessageType("aiserver.v1.FixLintsParams", []), xyr = x.makeMessageType("aiserver.v1.FixLintsResult", ()=>[
        {
            no: 1,
            name: "file_results",
            kind: "message",
            T: Ayr,
            repeated: !0
        }
    ]), Ayr = x.makeMessageType("aiserver.v1.FixLintsResult.FileResult", ()=>[
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
            T: j_t
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
            T: jde,
            repeated: !0
        }
    ], {
    localName: "FixLintsResult_FileResult"
}), jLo = x.makeMessageType("aiserver.v1.FixLintsStream", []), Zpn = x.makeMessageType("aiserver.v1.ReadLintsParams", ()=>[
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
    ]), Eti = x.makeMessageType("aiserver.v1.ReadLintsResult", ()=>[
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
            T: jde,
            repeated: !0
        },
        {
            no: 3,
            name: "linter_errors_by_file",
            kind: "message",
            T: ZF,
            repeated: !0
        }
    ]), $Lo = x.makeMessageType("aiserver.v1.ReadLintsStream", []), HLo = x.makeMessageType("aiserver.v1.GotodefStream", []), Ryr = x.makeMessageType("aiserver.v1.TaskParams", ()=>[
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
    ]), WLo = x.makeMessageType("aiserver.v1.TaskResult", ()=>[
        {
            no: 1,
            name: "completed_task_result",
            kind: "message",
            T: Pyr,
            oneof: "result"
        },
        {
            no: 2,
            name: "async_task_result",
            kind: "message",
            T: GLo,
            oneof: "result"
        }
    ]), Pyr = x.makeMessageType("aiserver.v1.TaskResult.CompletedTaskResult", ()=>[
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
            T: Ayr,
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
}), GLo = x.makeMessageType("aiserver.v1.TaskResult.AsyncTaskResult", ()=>[
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
}), qLo = x.makeMessageType("aiserver.v1.TaskStream", []), L$e = x.makeMessageType("aiserver.v1.TaskV2Params", ()=>[
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
            T: x.getEnumType(Kei)
        }
    ]), Vet = x.makeMessageType("aiserver.v1.TaskV2Result", ()=>[
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
    ]), zLo = x.makeMessageType("aiserver.v1.TaskV2Stream", []), x4t = x.makeMessageType("aiserver.v1.RipgrepRawSearchParams", ()=>[
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
    ]), Qpn = x.makeMessageType("aiserver.v1.RipgrepRawSearchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Myr,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Iti,
            oneof: "result"
        }
    ]), Iti = x.makeMessageType("aiserver.v1.RipgrepRawSearchError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Myr = x.makeMessageType("aiserver.v1.RipgrepRawSearchSuccess", ()=>[
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
                T: Jpn
            }
        },
        {
            no: 5,
            name: "active_editor_result",
            kind: "message",
            T: Jpn,
            opt: !0
        }
    ]), Jpn = x.makeMessageType("aiserver.v1.RipgrepRawSearchUnionResult", ()=>[
        {
            no: 1,
            name: "count",
            kind: "message",
            T: xti,
            oneof: "result"
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: Rti,
            oneof: "result"
        },
        {
            no: 3,
            name: "content",
            kind: "message",
            T: Pti,
            oneof: "result"
        }
    ]), xti = x.makeMessageType("aiserver.v1.RipgrepRawSearchCountResult", ()=>[
        {
            no: 1,
            name: "counts",
            kind: "message",
            T: Ati,
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
    ]), Ati = x.makeMessageType("aiserver.v1.RipgrepRawSearchFileCount", ()=>[
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
    ]), Rti = x.makeMessageType("aiserver.v1.RipgrepRawSearchFilesResult", ()=>[
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
            T: VLo,
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
    ]), VLo = x.makeMessageType("aiserver.v1.RipgrepRawSearchFilesResult.FileEntry", ()=>[
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
}), Pti = x.makeMessageType("aiserver.v1.RipgrepRawSearchContentResult", ()=>[
        {
            no: 1,
            name: "matches",
            kind: "message",
            T: Mti,
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
    ]), Mti = x.makeMessageType("aiserver.v1.RipgrepRawSearchFileMatch", ()=>[
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
            T: Dti,
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
    ]), Dti = x.makeMessageType("aiserver.v1.RipgrepRawSearchContentMatch", ()=>[
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
    ]), KLo = x.makeMessageType("aiserver.v1.RipgrepRawSearchStream", ()=>[
        {
            no: 1,
            name: "pattern",
            kind: "scalar",
            T: 9
        }
    ]), Dyr = x.makeMessageType("aiserver.v1.AwaitTaskParams", ()=>[
        {
            no: 1,
            name: "ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), YLo = x.makeMessageType("aiserver.v1.AwaitTaskResult", ()=>[
        {
            no: 1,
            name: "task_results",
            kind: "message",
            T: XLo,
            repeated: !0
        },
        {
            no: 2,
            name: "missing_task_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), XLo = x.makeMessageType("aiserver.v1.AwaitTaskResult.TaskResultItem", ()=>[
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
            T: Pyr
        }
    ], {
    localName: "AwaitTaskResult_TaskResultItem"
}), ZLo = x.makeMessageType("aiserver.v1.AwaitTaskStream", []), Nti = x.makeMessageType("aiserver.v1.TodoReadParams", ()=>[
        {
            no: 1,
            name: "read",
            kind: "scalar",
            T: 8
        }
    ]), yM = x.makeMessageType("aiserver.v1.TodoItem", ()=>[
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
    ]), Nyr = x.makeMessageType("aiserver.v1.TodoReadResult", ()=>[
        {
            no: 1,
            name: "todos",
            kind: "message",
            T: yM,
            repeated: !0
        }
    ]), QLo = x.makeMessageType("aiserver.v1.TodoReadStream", []), A4t = x.makeMessageType("aiserver.v1.TodoWriteParams", ()=>[
        {
            no: 1,
            name: "todos",
            kind: "message",
            T: yM,
            repeated: !0
        },
        {
            no: 2,
            name: "merge",
            kind: "scalar",
            T: 8
        }
    ]), Ket = x.makeMessageType("aiserver.v1.TodoWriteResult", ()=>[
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
            T: yM,
            repeated: !0
        },
        {
            no: 5,
            name: "initial_todos",
            kind: "message",
            T: yM,
            repeated: !0
        },
        {
            no: 6,
            name: "was_merge",
            kind: "scalar",
            T: 8
        }
    ]), JLo = x.makeMessageType("aiserver.v1.TodoWriteStream", []), emn = x.makeMessageType("aiserver.v1.ListDirV2Params", ()=>[
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
    ]), tmn = x.makeMessageType("aiserver.v1.ListDirV2Result", ()=>[
        {
            no: 1,
            name: "directory_tree_root",
            kind: "message",
            T: Lyr
        }
    ]), Lyr = x.makeMessageType("aiserver.v1.ListDirV2Result.DirectoryTreeNode", ()=>[
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
            T: Lyr,
            repeated: !0
        },
        {
            no: 3,
            name: "children_files",
            kind: "message",
            T: eOo,
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
}), eOo = x.makeMessageType("aiserver.v1.ListDirV2Result.DirectoryTreeNode.File", ()=>[
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
            T: eyr,
            opt: !0
        }
    ], {
    localName: "ListDirV2Result_DirectoryTreeNode_File"
}), tOo = x.makeMessageType("aiserver.v1.ListDirV2Stream", []), R4t = x.makeMessageType("aiserver.v1.ReadFileV2Params", ()=>[
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
    ]), O$e = x.makeMessageType("aiserver.v1.ReadFileV2Result", ()=>[
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
            T: R$e,
            repeated: !0
        },
        {
            no: 6,
            name: "images",
            kind: "message",
            T: Hke,
            repeated: !0
        }
    ]), nOo = x.makeMessageType("aiserver.v1.ReadFileV2Stream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: R4t,
            opt: !0
        }
    ]), nmn = x.makeMessageType("aiserver.v1.GlobFileSearchParams", ()=>[
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
    ]), Lti = x.makeMessageType("aiserver.v1.GlobFileSearchResult", ()=>[
        {
            no: 1,
            name: "directories",
            kind: "message",
            T: Fyr,
            repeated: !0
        }
    ]), Oyr = x.makeMessageType("aiserver.v1.GlobFileSearchResult.File", ()=>[
        {
            no: 1,
            name: "rel_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "GlobFileSearchResult_File"
}), Fyr = x.makeMessageType("aiserver.v1.GlobFileSearchResult.Directory", ()=>[
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
            T: Oyr,
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
}), iOo = x.makeMessageType("aiserver.v1.GlobFileSearchStream", []), rOo = x.makeMessageType("aiserver.v1.ListMcpResourcesStream", []), sOo = x.makeMessageType("aiserver.v1.CallMcpToolStream", []), oOo = x.makeMessageType("aiserver.v1.ReadMcpResourceStream", []), aOo = x.makeMessageType("aiserver.v1.Step", ()=>[
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
    ]), lOo = x.makeMessageType("aiserver.v1.PlanPhase", ()=>[
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
            T: yM,
            repeated: !0
        }
    ]), H_t = x.makeMessageType("aiserver.v1.CreatePlanParams", ()=>[
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
            T: aOo,
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
            T: yM,
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
            T: lOo,
            repeated: !0
        }
    ]), P4t = x.makeMessageType("aiserver.v1.CreatePlanResult", ()=>[
        {
            no: 1,
            name: "accepted",
            kind: "message",
            T: cOo,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: uOo,
            oneof: "result"
        },
        {
            no: 3,
            name: "modified",
            kind: "message",
            T: dOo,
            oneof: "result"
        },
        {
            no: 4,
            name: "plan_uri",
            kind: "scalar",
            T: 9
        }
    ]), cOo = x.makeMessageType("aiserver.v1.CreatePlanResult.Accepted", ()=>[
        {
            no: 1,
            name: "final_todos",
            kind: "message",
            T: yM,
            repeated: !0
        }
    ], {
    localName: "CreatePlanResult_Accepted"
}), uOo = x.makeMessageType("aiserver.v1.CreatePlanResult.Rejected", [], {
    localName: "CreatePlanResult_Rejected"
}), dOo = x.makeMessageType("aiserver.v1.CreatePlanResult.Modified", ()=>[
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
            T: yM,
            repeated: !0
        }
    ], {
    localName: "CreatePlanResult_Modified"
}), hOo = x.makeMessageType("aiserver.v1.CreatePlanStream", []), Oti = x.makeMessageType("aiserver.v1.ReadProjectParams", []), Byr = x.makeMessageType("aiserver.v1.ReadProjectResult", ()=>[
        {
            no: 1,
            name: "plan",
            kind: "scalar",
            T: 9
        }
    ]), pOo = x.makeMessageType("aiserver.v1.ReadProjectStream", []), mOo = x.makeMessageType("aiserver.v1.UpdateProjectStringReplacement", ()=>[
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
    ]), Fti = x.makeMessageType("aiserver.v1.UpdateProjectParams", ()=>[
        {
            no: 1,
            name: "string_replacements",
            kind: "message",
            T: mOo,
            repeated: !0
        },
        {
            no: 2,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ]), Uyr = x.makeMessageType("aiserver.v1.UpdateProjectResult", ()=>[
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
    ]), gOo = x.makeMessageType("aiserver.v1.UpdateProjectStream", []), EAe = x.makeMessageType("aiserver.v1.AskQuestionParams", ()=>[
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
            T: jyr,
            repeated: !0
        },
        {
            no: 3,
            name: "run_async",
            kind: "scalar",
            T: 8
        }
    ]), jyr = x.makeMessageType("aiserver.v1.AskQuestionParams.Question", ()=>[
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
            T: $yr,
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
}), $yr = x.makeMessageType("aiserver.v1.AskQuestionParams.Option", ()=>[
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
}), Hde = x.makeMessageType("aiserver.v1.AskQuestionResult", ()=>[
        {
            no: 1,
            name: "answers",
            kind: "message",
            T: Hyr,
            repeated: !0
        },
        {
            no: 2,
            name: "is_async",
            kind: "scalar",
            T: 8
        }
    ]), Hyr = x.makeMessageType("aiserver.v1.AskQuestionResult.Answer", ()=>[
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
}), fOo = x.makeMessageType("aiserver.v1.AskQuestionStream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: EAe
        }
    ]), W_t = x.makeMessageType("aiserver.v1.SwitchModeParams", ()=>[
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
    ]), imn = x.makeMessageType("aiserver.v1.SwitchModeResult", ()=>[
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
    ]), vOo = x.makeMessageType("aiserver.v1.SwitchModeStream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: W_t
        }
    ]), M4t = x.makeMessageType("aiserver.v1.ComputerUseParams", ()=>[
        {
            no: 1,
            name: "actions",
            kind: "message",
            T: m3o,
            repeated: !0
        }
    ]), rmn = x.makeMessageType("aiserver.v1.ComputerUseResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: g3o,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: f3o,
            oneof: "result"
        }
    ]), _Oo = x.makeMessageType("aiserver.v1.ComputerUseStream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: M4t
        }
    ]), bOo = x.makeMessageType("aiserver.v1.WriteShellStdinStream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: Get
        }
    ]), G_t = x.makeMessageType("aiserver.v1.WebFetchParams", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        }
    ]), smn = x.makeMessageType("aiserver.v1.WebFetchResult", ()=>[
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
    ]), yOo = x.makeMessageType("aiserver.v1.WebFetchStream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: G_t
        }
    ]), omn = x.makeMessageType("aiserver.v1.ReportBugfixResultsParams", ()=>[
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
            T: tyr,
            repeated: !0
        }
    ]), Wyr = x.makeMessageType("aiserver.v1.ReportBugfixResultsResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: _3o,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: b3o,
            oneof: "result"
        }
    ]), SOo = x.makeMessageType("aiserver.v1.ReportBugfixResultsStream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: omn
        }
    ]), q_t = x.makeMessageType("aiserver.v1.McpAuthParams", ()=>[
        {
            no: 1,
            name: "server_identifier",
            kind: "scalar",
            T: 9
        }
    ]), Dve = x.makeMessageType("aiserver.v1.McpAuthResult", ()=>[
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
    ]), kOo = x.makeMessageType("aiserver.v1.McpAuthStream", []), D4t = x.makeMessageType("aiserver.v1.ConnectScmParams", ()=>[
        {
            no: 1,
            name: "github",
            kind: "message",
            T: Bti
        }
    ]), Bti = x.makeMessageType("aiserver.v1.ConnectScmGithub", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: Uti
        },
        {
            no: 2,
            name: "ghe_application",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Uti = x.makeMessageType("aiserver.v1.ConnectScmGithubRepository", ()=>[
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
    ]), jti = x.makeMessageType("aiserver.v1.ConnectScmResult", ()=>[
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
    ]), wOo = x.makeMessageType("aiserver.v1.ConnectScmStream", []);

}
