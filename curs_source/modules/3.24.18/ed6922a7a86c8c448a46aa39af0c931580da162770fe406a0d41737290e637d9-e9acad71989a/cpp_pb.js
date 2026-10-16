import { KSt, ano, cno, wHt } from "./bugbot_pb.js";
import { CHt, mno } from "./filesyncserver_pb.js";
import { DHi, lno } from "./lsp_subgraph_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { YO, nX, w1 } from "./repository_pb.js";
import { x } from "./tslib.es6.js";
import { AJ, ZC, a6, c6, hu, oN, vVc, x3, xf } from "./utils_pb.js";
var dLn, r_e, gno, d_d, h_d, p_d, m_d, MHi, Sde, g_d, f_d, v_d, PHi, __d, YSt, b_d, y_d, S_d, k_d, LHi, fno, w_d, C_d, NHi, vno, _no, T_d, E_d, x_d, I_d, A_d, Yj, R_d, D_d, OHi, M_d, P_d, L_d, N_d, O_d, bno, F_d, Use, THt, B_d, FHi, hLn, U_d, yno, $_d, H_d, W_d, G_d, V_d, j_d, BHi, UHi, q_d, z_d, K_d, $Hi, x2, Y_d, X_d, HHi, Z_d, Q_d, J_d, ebd, Sno, pLn, tbd, nbd, ibd, rbd, sbd, obd, abd, cbd, lbd, ubd, dbd, hbd, pbd, mbd, gbd, fbd, vbd, _bd, bbd, ybd, Sbd, kbd, wbd, Cbd, Tbd, Ebd, xbd, Ibd, Abd, Rbd, Dbd, Mbd, Pbd, Lbd, Nbd, Obd, Fbd, Bbd, Ubd, $bd, EHt, $se, Hbd, Wbd, Gbd, Vbd, jbd, qbd, zbd, Kbd, Ybd, Xbd, Zbd, kno, Qbd, Jbd, eyd, mLn, gLn, tyd, wno, Cno, WHi, nyd, iyd, ryd, syd, oyd, ayd, Tno, cyd, lyd, uyd, dyd, hyd, pyd, Eno, xno, Ino, Ano, Rno, myd, gyd, s_e, fyd, vyd, _yd, xHt, byd, yyd, Dno, Syd, kyd, wyd, Cyd;
export { $Hi, $_d, $bd, $se, A_d, Abd, Ano, BHi, B_d, Bbd, C_d, Cbd, Cno, Cyd, D_d, Dbd, Dno, EHt, E_d, Ebd, Eno, FHi, F_d, Fbd, G_d, Gbd, HHi, H_d, Hbd, I_d, Ibd, Ino, J_d, Jbd, K_d, Kbd, LHi, L_d, Lbd, MHi, M_d, Mbd, NHi, N_d, Nbd, OHi, O_d, Obd, PHi, P_d, Pbd, Q_d, Qbd, R_d, Rbd, Rno, S_d, Sbd, Sde, Sno, Syd, THt, T_d, Tbd, Tno, UHi, U_d, Ubd, Use, V_d, Vbd, WHi, W_d, Wbd, X_d, Xbd, YSt, Y_d, Ybd, Yj, Z_d, Zbd, __d, _bd, _no, _yd, abd, ayd, b_d, bbd, bno, byd, cbd, cyd, dLn, d_d, dbd, dyd, ebd, eyd, f_d, fbd, fno, fyd, gLn, g_d, gbd, gno, gyd, hLn, h_d, hbd, hyd, ibd, iyd, j_d, jbd, k_d, kbd, kno, kyd, lbd, lyd, mLn, m_d, mbd, myd, nbd, nyd, obd, oyd, pLn, p_d, pbd, pyd, q_d, qbd, r_e, rbd, ryd, s_e, sbd, syd, tbd, tyd, ubd, uyd, v_d, vbd, vno, vyd, w_d, wbd, wno, wyd, x2, xHt, x_d, xbd, xno, y_d, ybd, yno, yyd, z_d, zbd };
var __wakaru_UU_initialized = false;
export function UU() {
if (__wakaru_UU_initialized) return;
__wakaru_UU_initialized = true;
"use strict";
x(), bi(), hu(), lno(), mno(), nX(), wHt(), dLn = k.makeEnum("aiserver.v1.CppFate", [
    {
        no: 0,
        name: "CPP_FATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CPP_FATE_ACCEPT",
        localName: "ACCEPT"
    },
    {
        no: 2,
        name: "CPP_FATE_REJECT",
        localName: "REJECT"
    },
    {
        no: 3,
        name: "CPP_FATE_PARTIAL_ACCEPT",
        localName: "PARTIAL_ACCEPT"
    }
]), r_e = k.makeEnum("aiserver.v1.CppSource", [
    {
        no: 0,
        name: "CPP_SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CPP_SOURCE_LINE_CHANGE",
        localName: "LINE_CHANGE"
    },
    {
        no: 2,
        name: "CPP_SOURCE_TYPING",
        localName: "TYPING"
    },
    {
        no: 3,
        name: "CPP_SOURCE_OPTION_HOLD",
        localName: "OPTION_HOLD"
    },
    {
        no: 4,
        name: "CPP_SOURCE_LINTER_ERRORS",
        localName: "LINTER_ERRORS"
    },
    {
        no: 5,
        name: "CPP_SOURCE_PARAMETER_HINTS",
        localName: "PARAMETER_HINTS"
    },
    {
        no: 6,
        name: "CPP_SOURCE_CURSOR_PREDICTION",
        localName: "CURSOR_PREDICTION"
    },
    {
        no: 7,
        name: "CPP_SOURCE_MANUAL_TRIGGER",
        localName: "MANUAL_TRIGGER"
    },
    {
        no: 8,
        name: "CPP_SOURCE_EDITOR_CHANGE",
        localName: "EDITOR_CHANGE"
    },
    {
        no: 9,
        name: "CPP_SOURCE_LSP_SUGGESTIONS",
        localName: "LSP_SUGGESTIONS"
    }
]), gno = k.makeMessageType("aiserver.v1.CppIntentInfo", ()=>[
        {
            no: 1,
            name: "source",
            kind: "scalar",
            T: 9
        }
    ]), d_d = k.makeMessageType("aiserver.v1.LspSuggestion", ()=>[
        {
            no: 1,
            name: "label",
            kind: "scalar",
            T: 9
        }
    ]), h_d = k.makeMessageType("aiserver.v1.LspSuggestedItems", ()=>[
        {
            no: 1,
            name: "suggestions",
            kind: "message",
            T: d_d,
            repeated: !0
        }
    ]), p_d = k.makeMessageType("aiserver.v1.ShouldTurnOnCppOnboardingRequest", []), m_d = k.makeMessageType("aiserver.v1.ShouldTurnOnCppOnboardingResponse", ()=>[
        {
            no: 1,
            name: "should_turn_on_cpp_onboarding",
            kind: "scalar",
            T: 8
        }
    ]), MHi = k.makeMessageType("aiserver.v1.StreamCppRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: ZC
        },
        {
            no: 2,
            name: "diff_history",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "model_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "linter_errors",
            kind: "message",
            T: oN,
            opt: !0
        },
        {
            no: 13,
            name: "context_items",
            kind: "message",
            T: OHi,
            repeated: !0
        },
        {
            no: 5,
            name: "diff_history_keys",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 6,
            name: "give_debug_output",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 7,
            name: "file_diff_histories",
            kind: "message",
            T: Yj,
            repeated: !0
        },
        {
            no: 8,
            name: "merged_diff_histories",
            kind: "message",
            T: Yj,
            repeated: !0
        },
        {
            no: 9,
            name: "block_diff_patches",
            kind: "message",
            T: WHi,
            repeated: !0
        },
        {
            no: 10,
            name: "is_nightly",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 11,
            name: "is_debug",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 12,
            name: "immediately_ack",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 17,
            name: "enable_more_context",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 14,
            name: "parameter_hints",
            kind: "message",
            T: bno,
            repeated: !0
        },
        {
            no: 15,
            name: "lsp_contexts",
            kind: "message",
            T: DHi,
            repeated: !0
        },
        {
            no: 16,
            name: "cpp_intent_info",
            kind: "message",
            T: gno,
            opt: !0
        },
        {
            no: 18,
            name: "workspace_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 19,
            name: "additional_files",
            kind: "message",
            T: vno,
            repeated: !0
        },
        {
            no: 20,
            name: "control_token",
            kind: "enum",
            T: k.getEnumType(Sde),
            opt: !0
        },
        {
            no: 21,
            name: "client_time",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 22,
            name: "filesync_updates",
            kind: "message",
            T: CHt,
            repeated: !0
        },
        {
            no: 23,
            name: "time_since_request_start",
            kind: "scalar",
            T: 1
        },
        {
            no: 24,
            name: "time_at_request_send",
            kind: "scalar",
            T: 1
        },
        {
            no: 25,
            name: "client_timezone_offset",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 26,
            name: "lsp_suggested_items",
            kind: "message",
            T: h_d,
            opt: !0
        },
        {
            no: 27,
            name: "supports_cpt",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 28,
            name: "supports_crlf_cpt",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 29,
            name: "code_results",
            kind: "message",
            T: YO,
            repeated: !0
        }
    ]), Sde = k.makeEnum("aiserver.v1.StreamCppRequest.ControlToken", [
    {
        no: 0,
        name: "CONTROL_TOKEN_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CONTROL_TOKEN_QUIET",
        localName: "QUIET"
    },
    {
        no: 2,
        name: "CONTROL_TOKEN_LOUD",
        localName: "LOUD"
    },
    {
        no: 3,
        name: "CONTROL_TOKEN_OP",
        localName: "OP"
    }
]), g_d = k.makeMessageType("aiserver.v1.StreamCppResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "suggestion_start_line",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "suggestion_confidence",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "done_stream",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "debug_model_output",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "debug_model_input",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "debug_stream_time",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "debug_total_time",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "debug_ttft_time",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "debug_server_timing",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "range_to_replace",
            kind: "message",
            T: c6,
            opt: !0
        },
        {
            no: 12,
            name: "cursor_prediction_target",
            kind: "message",
            T: f_d,
            opt: !0
        },
        {
            no: 13,
            name: "done_edit",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 14,
            name: "model_info",
            kind: "message",
            T: v_d,
            opt: !0
        },
        {
            no: 15,
            name: "begin_edit",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 16,
            name: "should_remove_leading_eol",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 17,
            name: "binding_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), f_d = k.makeMessageType("aiserver.v1.StreamCppResponse.CursorPredictionTarget", ()=>[
        {
            no: 1,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line_number_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "expected_content",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "should_retrigger_cpp",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "StreamCppResponse_CursorPredictionTarget"
}), v_d = k.makeMessageType("aiserver.v1.StreamCppResponse.ModelInfo", ()=>[
        {
            no: 1,
            name: "is_fused_cursor_prediction_model",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "is_multidiff_model",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "StreamCppResponse_ModelInfo"
}), PHi = k.makeMessageType("aiserver.v1.CppConfigRequest", ()=>[
        {
            no: 1,
            name: "is_nightly",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 2,
            name: "model",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "supports_cpt",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), __d = k.makeMessageType("aiserver.v1.CppConfigResponse", ()=>[
        {
            no: 1,
            name: "above_radius",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 2,
            name: "below_radius",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "merge_behavior",
            kind: "message",
            T: y_d,
            opt: !0
        },
        {
            no: 5,
            name: "is_on",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "is_ghost_text",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 7,
            name: "should_let_user_enable_cpp_even_if_not_pro",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "heuristics",
            kind: "enum",
            T: k.getEnumType(YSt),
            repeated: !0
        },
        {
            no: 9,
            name: "exclude_recently_viewed_files_patterns",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 10,
            name: "enable_rvf_tracking",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "global_debounce_duration_millis",
            kind: "scalar",
            T: 5
        },
        {
            no: 12,
            name: "client_debounce_duration_millis",
            kind: "scalar",
            T: 5
        },
        {
            no: 13,
            name: "cpp_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 14,
            name: "use_whitespace_diff_history",
            kind: "scalar",
            T: 8
        },
        {
            no: 15,
            name: "import_prediction_config",
            kind: "message",
            T: b_d
        },
        {
            no: 16,
            name: "enable_filesync_debounce_skipping",
            kind: "scalar",
            T: 8
        },
        {
            no: 17,
            name: "check_filesync_hash_percent",
            kind: "scalar",
            T: 2
        },
        {
            no: 18,
            name: "geo_cpp_backend_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 19,
            name: "recently_rejected_edit_thresholds",
            kind: "message",
            T: S_d,
            opt: !0
        },
        {
            no: 20,
            name: "is_fused_cursor_prediction_model",
            kind: "scalar",
            T: 8
        },
        {
            no: 21,
            name: "include_unchanged_lines",
            kind: "scalar",
            T: 8
        },
        {
            no: 22,
            name: "should_fetch_rvf_text",
            kind: "scalar",
            T: 8
        },
        {
            no: 23,
            name: "max_number_of_cleared_suggestions_since_last_accept",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 24,
            name: "suggestion_hint_config",
            kind: "message",
            T: k_d,
            opt: !0
        },
        {
            no: 25,
            name: "allows_tab_chunks",
            kind: "scalar",
            T: 8
        },
        {
            no: 26,
            name: "tab_context_refresh_debounce_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 27,
            name: "tab_context_refresh_editor_change_debounce_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), YSt = k.makeEnum("aiserver.v1.CppConfigResponse.Heuristic", [
    {
        no: 0,
        name: "HEURISTIC_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "HEURISTIC_LOTS_OF_ADDED_TEXT",
        localName: "LOTS_OF_ADDED_TEXT"
    },
    {
        no: 2,
        name: "HEURISTIC_DUPLICATING_LINE_AFTER_SUGGESTION",
        localName: "DUPLICATING_LINE_AFTER_SUGGESTION"
    },
    {
        no: 3,
        name: "HEURISTIC_DUPLICATING_MULTIPLE_LINES_AFTER_SUGGESTION",
        localName: "DUPLICATING_MULTIPLE_LINES_AFTER_SUGGESTION"
    },
    {
        no: 4,
        name: "HEURISTIC_REVERTING_USER_CHANGE",
        localName: "REVERTING_USER_CHANGE"
    },
    {
        no: 5,
        name: "HEURISTIC_OUTPUT_EXTENDS_BEYOND_RANGE_AND_IS_REPEATED",
        localName: "OUTPUT_EXTENDS_BEYOND_RANGE_AND_IS_REPEATED"
    },
    {
        no: 6,
        name: "HEURISTIC_SUGGESTING_RECENTLY_REJECTED_EDIT",
        localName: "SUGGESTING_RECENTLY_REJECTED_EDIT"
    }
]), b_d = k.makeMessageType("aiserver.v1.CppConfigResponse.ImportPredictionConfig", ()=>[
        {
            no: 1,
            name: "is_disabled_by_backend",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "should_turn_on_automatically",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "python_enabled",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "CppConfigResponse_ImportPredictionConfig"
}), y_d = k.makeMessageType("aiserver.v1.CppConfigResponse.MergeBehavior", ()=>[
        {
            no: 1,
            name: "type",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "radius",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ], {
    localName: "CppConfigResponse_MergeBehavior"
}), S_d = k.makeMessageType("aiserver.v1.CppConfigResponse.RecentlyRejectedEditThresholds", ()=>[
        {
            no: 1,
            name: "hard_reject_threshold",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "soft_reject_threshold",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "CppConfigResponse_RecentlyRejectedEditThresholds"
}), k_d = k.makeMessageType("aiserver.v1.CppConfigResponse.SuggestionHintConfig", ()=>[
        {
            no: 1,
            name: "important_lsp_extensions",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "enabled_for_path_extensions",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "CppConfigResponse_SuggestionHintConfig"
}), LHi = k.makeMessageType("aiserver.v1.SuggestedEdit", ()=>[
        {
            no: 1,
            name: "edit_range",
            kind: "message",
            T: x3
        },
        {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), fno = k.makeMessageType("aiserver.v1.GetCppEditClassificationRequest", ()=>[
        {
            no: 1,
            name: "cpp_request",
            kind: "message",
            T: MHi
        },
        {
            no: 25,
            name: "suggested_edits",
            kind: "message",
            T: LHi,
            repeated: !0
        },
        {
            no: 26,
            name: "marker_touches_green",
            kind: "scalar",
            T: 8
        },
        {
            no: 27,
            name: "current_file_contents_for_linter_errors",
            kind: "scalar",
            T: 9
        }
    ]), w_d = k.makeMessageType("aiserver.v1.GetCppEditClassificationResponse", ()=>[
        {
            no: 1,
            name: "scored_edits",
            kind: "message",
            T: NHi,
            repeated: !0
        },
        {
            no: 2,
            name: "noop_edit",
            kind: "message",
            T: NHi
        },
        {
            no: 3,
            name: "should_noop",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "generation_edit",
            kind: "message",
            T: NHi
        }
    ]), C_d = k.makeMessageType("aiserver.v1.GetCppEditClassificationResponse.LogProbs", ()=>[
        {
            no: 1,
            name: "tokens",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "token_logprobs",
            kind: "scalar",
            T: 1,
            repeated: !0
        }
    ], {
    localName: "GetCppEditClassificationResponse_LogProbs"
}), NHi = k.makeMessageType("aiserver.v1.GetCppEditClassificationResponse.ScoredEdit", ()=>[
        {
            no: 1,
            name: "edit",
            kind: "message",
            T: LHi
        },
        {
            no: 2,
            name: "log_probs",
            kind: "message",
            T: C_d
        }
    ], {
    localName: "GetCppEditClassificationResponse_ScoredEdit"
}), vno = k.makeMessageType("aiserver.v1.AdditionalFile", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_open",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "visible_range_content",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "last_viewed_at",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 5,
            name: "start_line_number_one_indexed",
            kind: "scalar",
            T: 5,
            repeated: !0
        },
        {
            no: 6,
            name: "visible_ranges",
            kind: "message",
            T: c6,
            repeated: !0
        }
    ]), _no = k.makeMessageType("aiserver.v1.RecordCppFateRequest", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "performance_now_time",
            kind: "scalar",
            T: 2
        },
        {
            no: 3,
            name: "fate",
            kind: "enum",
            T: k.getEnumType(dLn)
        },
        {
            no: 4,
            name: "extension",
            kind: "scalar",
            T: 9
        }
    ]), T_d = k.makeMessageType("aiserver.v1.RecordCppFateResponse", []), E_d = k.makeMessageType("aiserver.v1.AvailableCppModelsRequest", []), x_d = k.makeMessageType("aiserver.v1.AvailableCppModelsResponse", ()=>[
        {
            no: 1,
            name: "models",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "default_model",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), I_d = k.makeMessageType("aiserver.v1.StreamHoldCppRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: ZC
        },
        {
            no: 4,
            name: "linter_errors",
            kind: "message",
            T: oN,
            opt: !0
        },
        {
            no: 13,
            name: "context_items",
            kind: "message",
            T: OHi,
            repeated: !0
        },
        {
            no: 7,
            name: "file_diff_histories",
            kind: "message",
            T: Yj,
            repeated: !0
        },
        {
            no: 8,
            name: "merged_diff_histories",
            kind: "message",
            T: Yj,
            repeated: !0
        },
        {
            no: 9,
            name: "block_diff_patches",
            kind: "message",
            T: WHi,
            repeated: !0
        },
        {
            no: 10,
            name: "model_details",
            kind: "message",
            T: xf
        }
    ]), A_d = k.makeMessageType("aiserver.v1.StreamHoldCppResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), Yj = k.makeMessageType("aiserver.v1.CppFileDiffHistory", ()=>[
        {
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diff_history",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "diff_history_timestamps",
            kind: "scalar",
            T: 1,
            repeated: !0
        }
    ]), R_d = k.makeMessageType("aiserver.v1.RefreshTabContextRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: ZC
        },
        {
            no: 2,
            name: "model_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "linter_errors",
            kind: "message",
            T: oN,
            opt: !0
        },
        {
            no: 4,
            name: "file_diff_histories",
            kind: "message",
            T: Yj,
            repeated: !0
        },
        {
            no: 5,
            name: "additional_files",
            kind: "message",
            T: vno,
            repeated: !0
        },
        {
            no: 6,
            name: "client_time",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 7,
            name: "time_since_request_start",
            kind: "scalar",
            T: 1
        },
        {
            no: 8,
            name: "time_at_request_send",
            kind: "scalar",
            T: 1
        },
        {
            no: 9,
            name: "is_debug",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 10,
            name: "workspace_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "supports_cpt",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 12,
            name: "supports_crlf_cpt",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 13,
            name: "repository_info",
            kind: "message",
            T: w1
        }
    ]), D_d = k.makeMessageType("aiserver.v1.RefreshTabContextResponse", ()=>[
        {
            no: 1,
            name: "code_results",
            kind: "message",
            T: YO,
            repeated: !0
        }
    ]), OHi = k.makeMessageType("aiserver.v1.CppContextItem", ()=>[
        {
            no: 1,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "symbol",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]), M_d = k.makeMessageType("aiserver.v1.AddTabRequestToEvalRequest", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "expected_behavior",
            kind: "scalar",
            T: 9
        }
    ]), P_d = k.makeMessageType("aiserver.v1.AddTabRequestToEvalResponse", []), L_d = k.makeMessageType("aiserver.v1.MarkCppRequest", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "response_type",
            kind: "enum",
            T: k.getEnumType(N_d)
        },
        {
            no: 4,
            name: "desired_completion",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "range_transformation",
            kind: "message",
            T: O_d
        },
        {
            no: 10,
            name: "model_code_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "model_openai_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "current_performance_now_time",
            kind: "scalar",
            T: 1
        },
        {
            no: 13,
            name: "session_performance_origin_time",
            kind: "scalar",
            T: 1
        }
    ]), N_d = k.makeEnum("aiserver.v1.MarkCppRequest.CppResponseTypes", [
    {
        no: 0,
        name: "CPP_RESPONSE_TYPES_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CPP_RESPONSE_TYPES_GOOD",
        localName: "GOOD"
    },
    {
        no: 2,
        name: "CPP_RESPONSE_TYPES_BAD",
        localName: "BAD"
    },
    {
        no: 3,
        name: "CPP_RESPONSE_TYPES_BAD_CONTEXT",
        localName: "BAD_CONTEXT"
    },
    {
        no: 4,
        name: "CPP_RESPONSE_TYPES_BAD_REASONING",
        localName: "BAD_REASONING"
    },
    {
        no: 5,
        name: "CPP_RESPONSE_TYPES_BAD_STUPID_MISTAKE",
        localName: "BAD_STUPID_MISTAKE"
    },
    {
        no: 6,
        name: "CPP_RESPONSE_TYPES_BAD_FORMATTING",
        localName: "BAD_FORMATTING"
    },
    {
        no: 7,
        name: "CPP_RESPONSE_TYPES_BAD_RANGE",
        localName: "BAD_RANGE"
    },
    {
        no: 8,
        name: "CPP_RESPONSE_TYPES_GOOD_PREDICTION",
        localName: "GOOD_PREDICTION"
    },
    {
        no: 9,
        name: "CPP_RESPONSE_TYPES_BAD_FALSE_POSITIVE_TRIGGER",
        localName: "BAD_FALSE_POSITIVE_TRIGGER"
    },
    {
        no: 10,
        name: "CPP_RESPONSE_TYPES_BAD_FALSE_NEGATIVE_TRIGGER",
        localName: "BAD_FALSE_NEGATIVE_TRIGGER"
    }
]), O_d = k.makeMessageType("aiserver.v1.MarkCppRequest.RangeTransformation", ()=>[
        {
            no: 1,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end_line_number",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "MarkCppRequest_RangeTransformation"
}), bno = k.makeMessageType("aiserver.v1.CppParameterHint", ()=>[
        {
            no: 1,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "documentation",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), F_d = k.makeMessageType("aiserver.v1.MarkCppResponse", []), Use = k.makeMessageType("aiserver.v1.IRange", ()=>[
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
    ]), THt = k.makeMessageType("aiserver.v1.OneIndexedPosition", ()=>[
        {
            no: 1,
            name: "line_number_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "column_one_indexed",
            kind: "scalar",
            T: 5
        }
    ]), B_d = k.makeMessageType("aiserver.v1.CursorSelection", ()=>[
        {
            no: 1,
            name: "selection_start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "selection_start_column",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "position_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "position_column",
            kind: "scalar",
            T: 5
        }
    ]), FHi = k.makeMessageType("aiserver.v1.ModelChange", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: Use
        },
        {
            no: 3,
            name: "final_model_hash",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "model_version_immediately_after_this_change",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 5,
            name: "performance_now_timestamp",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 7,
            name: "is_undoing",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "is_redoing",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 9,
            name: "model_is_attached_to_editor",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "model_is_attached_to_the_active_editor",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "cursor_selections",
            kind: "message",
            T: B_d,
            repeated: !0
        },
        {
            no: 12,
            name: "model_version_at_metadata_retrieval_time",
            kind: "scalar",
            T: 5
        },
        {
            no: 13,
            name: "global_index",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 14,
            name: "performance_now_flush_time",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 15,
            name: "change_index",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 16,
            name: "flush_index",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 17,
            name: "global_index_v2",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), hLn = k.makeMessageType("aiserver.v1.CurrentlyShownCppSuggestion", ()=>[
        {
            no: 1,
            name: "suggestion_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "suggestion_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "model_version_when_the_change_is_first_indicated_to_the_user_but_not_shown_in_the_model",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "range_of_suggestion_in_current_model",
            kind: "message",
            T: Use,
            opt: !0
        },
        {
            no: 5,
            name: "original_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "binding_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), U_d = k.makeMessageType("aiserver.v1.CppAcceptEventNew", ()=>[
        {
            no: 1,
            name: "cpp_suggestion",
            kind: "message",
            T: hLn
        },
        {
            no: 7,
            name: "point_in_time_model",
            kind: "message",
            T: x2
        }
    ]), yno = k.makeMessageType("aiserver.v1.RecoverableCppData", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "suggestion_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "suggestion_range",
            kind: "message",
            T: Use
        },
        {
            no: 4,
            name: "position",
            kind: "message",
            T: THt
        }
    ]), $_d = k.makeMessageType("aiserver.v1.CppSuggestEvent", ()=>[
        {
            no: 1,
            name: "cpp_suggestion",
            kind: "message",
            T: hLn
        },
        {
            no: 2,
            name: "point_in_time_model",
            kind: "message",
            T: x2
        },
        {
            no: 3,
            name: "recoverable_cpp_data",
            kind: "message",
            T: yno
        }
    ]), H_d = k.makeMessageType("aiserver.v1.CppTriggerEvent", ()=>[
        {
            no: 1,
            name: "generation_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "model_version",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "cursor_position",
            kind: "message",
            T: THt
        },
        {
            no: 4,
            name: "point_in_time_model",
            kind: "message",
            T: x2
        },
        {
            no: 5,
            name: "source",
            kind: "enum",
            T: k.getEnumType(r_e)
        }
    ]), W_d = k.makeMessageType("aiserver.v1.FinishedCppGenerationEvent", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: x2
        },
        {
            no: 2,
            name: "recoverable_cpp_data",
            kind: "message",
            T: yno
        }
    ]), G_d = k.makeMessageType("aiserver.v1.CppRejectEventNew", ()=>[
        {
            no: 1,
            name: "cpp_suggestion",
            kind: "message",
            T: hLn
        },
        {
            no: 7,
            name: "point_in_time_model",
            kind: "message",
            T: x2
        }
    ]), V_d = k.makeMessageType("aiserver.v1.Edit", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: Use
        }
    ]), j_d = k.makeMessageType("aiserver.v1.CppPartialAcceptEvent", ()=>[
        {
            no: 1,
            name: "cpp_suggestion",
            kind: "message",
            T: hLn
        },
        {
            no: 2,
            name: "edit",
            kind: "message",
            T: V_d
        },
        {
            no: 3,
            name: "point_in_time_model",
            kind: "message",
            T: x2
        }
    ]), BHi = k.makeMessageType("aiserver.v1.CursorPrediction", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "prediction_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "source",
            kind: "enum",
            T: k.getEnumType(UHi)
        },
        {
            no: 5,
            name: "binding_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), UHi = k.makeEnum("aiserver.v1.CursorPrediction.CursorPredictionSource", [
    {
        no: 0,
        name: "CURSOR_PREDICTION_SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CURSOR_PREDICTION_SOURCE_ALWAYS_ON",
        localName: "ALWAYS_ON"
    },
    {
        no: 2,
        name: "CURSOR_PREDICTION_SOURCE_ACCEPT",
        localName: "ACCEPT"
    },
    {
        no: 3,
        name: "CURSOR_PREDICTION_SOURCE_UNDO",
        localName: "UNDO"
    },
    {
        no: 4,
        name: "CURSOR_PREDICTION_SOURCE_EDITOR_CHANGE",
        localName: "EDITOR_CHANGE"
    }
]), q_d = k.makeMessageType("aiserver.v1.SuggestCursorPredictionEvent", ()=>[
        {
            no: 1,
            name: "cursor_prediction",
            kind: "message",
            T: BHi
        },
        {
            no: 2,
            name: "point_in_time_model",
            kind: "message",
            T: x2
        }
    ]), z_d = k.makeMessageType("aiserver.v1.AcceptCursorPredictionEvent", ()=>[
        {
            no: 1,
            name: "cursor_prediction",
            kind: "message",
            T: BHi
        },
        {
            no: 2,
            name: "point_in_time_model",
            kind: "message",
            T: x2
        }
    ]), K_d = k.makeMessageType("aiserver.v1.RejectCursorPredictionEvent", ()=>[
        {
            no: 1,
            name: "cursor_prediction",
            kind: "message",
            T: BHi
        },
        {
            no: 2,
            name: "point_in_time_model",
            kind: "message",
            T: x2
        }
    ]), $Hi = k.makeMessageType("aiserver.v1.MaybeDefinedPointInTimeModel", ()=>[
        {
            no: 1,
            name: "model_uuid",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "model_version",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "model_id",
            kind: "scalar",
            T: 9
        }
    ]), x2 = k.makeMessageType("aiserver.v1.PointInTimeModel", ()=>[
        {
            no: 1,
            name: "model_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "model_version",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "model_id",
            kind: "scalar",
            T: 9
        }
    ]), Y_d = k.makeMessageType("aiserver.v1.CppManualTriggerEventNew", ()=>[
        {
            no: 1,
            name: "line_number_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "column_number_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 7,
            name: "point_in_time_model",
            kind: "message",
            T: x2
        }
    ]), X_d = k.makeMessageType("aiserver.v1.CppStoppedTrackingModelEvent", ()=>[
        {
            no: 1,
            name: "model_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "reason",
            kind: "enum",
            T: k.getEnumType(HHi)
        }
    ]), HHi = k.makeEnum("aiserver.v1.CppStoppedTrackingModelEvent.StoppedTrackingModelReason", [
    {
        no: 0,
        name: "STOPPED_TRACKING_MODEL_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STOPPED_TRACKING_MODEL_REASON_FILE_TOO_BIG",
        localName: "FILE_TOO_BIG"
    },
    {
        no: 2,
        name: "STOPPED_TRACKING_MODEL_REASON_FILE_DISPOSED",
        localName: "FILE_DISPOSED"
    },
    {
        no: 3,
        name: "STOPPED_TRACKING_MODEL_REASON_CHANGE_TOO_BIG",
        localName: "CHANGE_TOO_BIG"
    }
]), Z_d = k.makeMessageType("aiserver.v1.CppLinterErrorEvent", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: x2
        },
        {
            no: 2,
            name: "added_errors",
            kind: "message",
            T: AJ,
            repeated: !0
        },
        {
            no: 3,
            name: "removed_errors",
            kind: "message",
            T: AJ,
            repeated: !0
        },
        {
            no: 4,
            name: "errors",
            kind: "message",
            T: AJ,
            repeated: !0
        }
    ]), Q_d = k.makeMessageType("aiserver.v1.CppDebouncedCursorMovementEvent", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: x2
        },
        {
            no: 2,
            name: "cursor_position",
            kind: "message",
            T: THt
        }
    ]), J_d = k.makeMessageType("aiserver.v1.CppEditorChangedEvent", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: x2
        },
        {
            no: 2,
            name: "cursor_position",
            kind: "message",
            T: THt
        },
        {
            no: 3,
            name: "visible_ranges",
            kind: "message",
            T: Use,
            repeated: !0
        },
        {
            no: 4,
            name: "editor_id",
            kind: "scalar",
            T: 9
        }
    ]), ebd = k.makeMessageType("aiserver.v1.CppCopyEvent", ()=>[
        {
            no: 1,
            name: "clipboard_contents",
            kind: "scalar",
            T: 9
        }
    ]), Sno = k.makeMessageType("aiserver.v1.CppQuickActionCommand", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "arguments",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), pLn = k.makeMessageType("aiserver.v1.CppQuickAction", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "edits",
            kind: "message",
            T: tbd,
            repeated: !0
        },
        {
            no: 3,
            name: "is_preferred",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "command",
            kind: "message",
            T: Sno
        }
    ]), tbd = k.makeMessageType("aiserver.v1.CppQuickAction.Edit", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: Use
        }
    ], {
    localName: "CppQuickAction_Edit"
}), nbd = k.makeMessageType("aiserver.v1.CppChangeQuickActionEvent", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: x2
        },
        {
            no: 2,
            name: "added",
            kind: "message",
            T: pLn,
            repeated: !0
        },
        {
            no: 3,
            name: "removed",
            kind: "message",
            T: pLn,
            repeated: !0
        },
        {
            no: 4,
            name: "actions",
            kind: "message",
            T: pLn,
            repeated: !0
        }
    ]), ibd = k.makeMessageType("aiserver.v1.CppQuickActionFireEvent", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: x2
        },
        {
            no: 2,
            name: "quick_action_command",
            kind: "message",
            T: Sno,
            oneof: "action_identifier"
        },
        {
            no: 3,
            name: "quick_action_event",
            kind: "message",
            T: pLn,
            oneof: "action_identifier"
        }
    ]), rbd = k.makeMessageType("aiserver.v1.CmdKEvent", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: x2
        },
        {
            no: 2,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 20,
            name: "prompt_bar_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "submit_prompt",
            kind: "message",
            T: sbd,
            oneof: "event_type"
        },
        {
            no: 4,
            name: "end_of_generation",
            kind: "message",
            T: obd,
            oneof: "event_type"
        },
        {
            no: 5,
            name: "interrupt_generation",
            kind: "message",
            T: abd,
            oneof: "event_type"
        },
        {
            no: 6,
            name: "accept_all",
            kind: "message",
            T: cbd,
            oneof: "event_type"
        },
        {
            no: 7,
            name: "reject_all",
            kind: "message",
            T: lbd,
            oneof: "event_type"
        },
        {
            no: 8,
            name: "reject_partial_diff",
            kind: "message",
            T: dbd,
            oneof: "event_type"
        },
        {
            no: 9,
            name: "accept_partial_diff",
            kind: "message",
            T: ubd,
            oneof: "event_type"
        },
        {
            no: 10,
            name: "after_reject",
            kind: "message",
            T: hbd,
            oneof: "event_type"
        }
    ]), sbd = k.makeMessageType("aiserver.v1.CmdKEvent.SubmitPrompt", ()=>[
        {
            no: 1,
            name: "original_range",
            kind: "message",
            T: Use
        },
        {
            no: 2,
            name: "original_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "prompt",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "CmdKEvent_SubmitPrompt"
}), obd = k.makeMessageType("aiserver.v1.CmdKEvent.EndOfGeneration", [], {
    localName: "CmdKEvent_EndOfGeneration"
}), abd = k.makeMessageType("aiserver.v1.CmdKEvent.InterruptGeneration", [], {
    localName: "CmdKEvent_InterruptGeneration"
}), cbd = k.makeMessageType("aiserver.v1.CmdKEvent.AcceptDiffs", [], {
    localName: "CmdKEvent_AcceptDiffs"
}), lbd = k.makeMessageType("aiserver.v1.CmdKEvent.RejectDiffs", ()=>[
        {
            no: 1,
            name: "actor_request_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "silent",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ], {
    localName: "CmdKEvent_RejectDiffs"
}), ubd = k.makeMessageType("aiserver.v1.CmdKEvent.AcceptPartialDiff", ()=>[
        {
            no: 1,
            name: "green_range",
            kind: "message",
            T: Use
        },
        {
            no: 2,
            name: "green_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "red_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "CmdKEvent_AcceptPartialDiff"
}), dbd = k.makeMessageType("aiserver.v1.CmdKEvent.RejectPartialDiff", ()=>[
        {
            no: 1,
            name: "green_range",
            kind: "message",
            T: Use
        },
        {
            no: 2,
            name: "green_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "red_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "CmdKEvent_RejectPartialDiff"
}), hbd = k.makeMessageType("aiserver.v1.CmdKEvent.AfterReject", [], {
    localName: "CmdKEvent_AfterReject"
}), pbd = k.makeMessageType("aiserver.v1.ChatEvent", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "submit_prompt",
            kind: "message",
            T: mbd,
            oneof: "event_type"
        },
        {
            no: 3,
            name: "end_of_any_generation",
            kind: "message",
            T: gbd,
            oneof: "event_type"
        },
        {
            no: 4,
            name: "end_of_uninterrupted_generation",
            kind: "message",
            T: fbd,
            oneof: "event_type"
        }
    ]), mbd = k.makeMessageType("aiserver.v1.ChatEvent.SubmitPrompt", ()=>[
        {
            no: 1,
            name: "prompt",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ChatEvent_SubmitPrompt"
}), gbd = k.makeMessageType("aiserver.v1.ChatEvent.EndOfAnyGeneration", [], {
    localName: "ChatEvent_EndOfAnyGeneration"
}), fbd = k.makeMessageType("aiserver.v1.ChatEvent.EndOfUninterruptedGeneration", [], {
    localName: "ChatEvent_EndOfUninterruptedGeneration"
}), vbd = k.makeMessageType("aiserver.v1.BugBotLinterEvent", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "point_in_time_model",
            kind: "message",
            T: x2
        },
        {
            no: 3,
            name: "lint_generated",
            kind: "message",
            T: bbd,
            oneof: "event_type"
        },
        {
            no: 4,
            name: "lint_dismissed",
            kind: "message",
            T: ybd,
            oneof: "event_type"
        },
        {
            no: 5,
            name: "user_feedback",
            kind: "message",
            T: Sbd,
            oneof: "event_type"
        },
        {
            no: 6,
            name: "viewed_report",
            kind: "message",
            T: kbd,
            oneof: "event_type"
        },
        {
            no: 7,
            name: "unviewed_report",
            kind: "message",
            T: wbd,
            oneof: "event_type"
        },
        {
            no: 8,
            name: "started",
            kind: "message",
            T: _bd,
            oneof: "event_type"
        },
        {
            no: 9,
            name: "not_shown_because_heuristic",
            kind: "message",
            T: Cbd,
            oneof: "event_type"
        }
    ]), _bd = k.makeMessageType("aiserver.v1.BugBotLinterEvent.Started", [], {
    localName: "BugBotLinterEvent_Started"
}), bbd = k.makeMessageType("aiserver.v1.BugBotLinterEvent.LintGenerated", ()=>[
        {
            no: 1,
            name: "bug_report",
            kind: "message",
            T: KSt
        }
    ], {
    localName: "BugBotLinterEvent_LintGenerated"
}), ybd = k.makeMessageType("aiserver.v1.BugBotLinterEvent.LintDismissed", ()=>[
        {
            no: 1,
            name: "bug_report_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "BugBotLinterEvent_LintDismissed"
}), Sbd = k.makeMessageType("aiserver.v1.BugBotLinterEvent.UserFeedback", ()=>[
        {
            no: 1,
            name: "bug_report_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "feedback",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "BugBotLinterEvent_UserFeedback"
}), kbd = k.makeMessageType("aiserver.v1.BugBotLinterEvent.ViewedReport", ()=>[
        {
            no: 1,
            name: "bug_report_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "BugBotLinterEvent_ViewedReport"
}), wbd = k.makeMessageType("aiserver.v1.BugBotLinterEvent.UnviewedReport", ()=>[
        {
            no: 1,
            name: "bug_report_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "BugBotLinterEvent_UnviewedReport"
}), Cbd = k.makeMessageType("aiserver.v1.BugBotLinterEvent.NotShownBecauseHeuristic", ()=>[
        {
            no: 1,
            name: "heuristic",
            kind: "enum",
            T: k.getEnumType(Tbd)
        }
    ], {
    localName: "BugBotLinterEvent_NotShownBecauseHeuristic"
}), Tbd = k.makeEnum("aiserver.v1.BugBotLinterEvent.NotShownBecauseHeuristic.Heuristic", [
    {
        no: 0,
        name: "HEURISTIC_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "HEURISTIC_LINT_OVERLAP",
        localName: "LINT_OVERLAP"
    },
    {
        no: 2,
        name: "HEURISTIC_LINES_MISMATCH",
        localName: "LINES_MISMATCH"
    }
]), Ebd = k.makeMessageType("aiserver.v1.BugBotEvent", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "started",
            kind: "message",
            T: Ibd,
            oneof: "event_type"
        },
        {
            no: 3,
            name: "reports_generated",
            kind: "message",
            T: Abd,
            oneof: "event_type"
        },
        {
            no: 4,
            name: "pressed_fix_in_composer",
            kind: "message",
            T: Rbd,
            oneof: "event_type"
        },
        {
            no: 5,
            name: "pressed_open_in_editor",
            kind: "message",
            T: Mbd,
            oneof: "event_type"
        },
        {
            no: 6,
            name: "viewed_report",
            kind: "message",
            T: Pbd,
            oneof: "event_type"
        },
        {
            no: 7,
            name: "user_feedback",
            kind: "message",
            T: Nbd,
            oneof: "event_type"
        },
        {
            no: 8,
            name: "pressed_add_to_chat",
            kind: "message",
            T: Dbd,
            oneof: "event_type"
        },
        {
            no: 9,
            name: "background_interval_started",
            kind: "message",
            T: Obd,
            oneof: "event_type"
        },
        {
            no: 10,
            name: "background_interval_ended",
            kind: "message",
            T: Fbd,
            oneof: "event_type"
        },
        {
            no: 11,
            name: "background_interval_interrupted",
            kind: "message",
            T: Bbd,
            oneof: "event_type"
        },
        {
            no: 12,
            name: "background_interval_errored",
            kind: "message",
            T: Ubd,
            oneof: "event_type"
        }
    ]), xbd = k.makeEnum("aiserver.v1.BugBotEvent.BackgroundIntervalInterruptedReason", [
    {
        no: 0,
        name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DISABLED",
        localName: "DISABLED"
    },
    {
        no: 2,
        name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_TOO_RECENT",
        localName: "TOO_RECENT"
    },
    {
        no: 3,
        name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_UNVIEWED_BUG_REPORTS",
        localName: "UNVIEWED_BUG_REPORTS"
    },
    {
        no: 4,
        name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_NOT_IN_GIT_REPO",
        localName: "NOT_IN_GIT_REPO"
    },
    {
        no: 5,
        name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH",
        localName: "DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH"
    },
    {
        no: 6,
        name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_NO_GIT_USER",
        localName: "NO_GIT_USER"
    },
    {
        no: 7,
        name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_NO_LAST_COMMIT",
        localName: "NO_LAST_COMMIT"
    },
    {
        no: 8,
        name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_LAST_COMMIT_NOT_MADE_BY_USER",
        localName: "LAST_COMMIT_NOT_MADE_BY_USER"
    },
    {
        no: 9,
        name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_LAST_COMMIT_TOO_OLD",
        localName: "LAST_COMMIT_TOO_OLD"
    },
    {
        no: 10,
        name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DIFF_TOO_LONG",
        localName: "DIFF_TOO_LONG"
    },
    {
        no: 11,
        name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DIFF_TOO_SHORT",
        localName: "DIFF_TOO_SHORT"
    },
    {
        no: 12,
        name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_TELEMETRY_UNHEALTHY",
        localName: "TELEMETRY_UNHEALTHY"
    }
]), Ibd = k.makeMessageType("aiserver.v1.BugBotEvent.Started", [], {
    localName: "BugBotEvent_Started"
}), Abd = k.makeMessageType("aiserver.v1.BugBotEvent.ReportsGenerated", ()=>[
        {
            no: 1,
            name: "bug_reports",
            kind: "message",
            T: cno
        }
    ], {
    localName: "BugBotEvent_ReportsGenerated"
}), Rbd = k.makeMessageType("aiserver.v1.BugBotEvent.PressedFixInComposer", ()=>[
        {
            no: 1,
            name: "bug_report_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "BugBotEvent_PressedFixInComposer"
}), Dbd = k.makeMessageType("aiserver.v1.BugBotEvent.PressedAddToChat", ()=>[
        {
            no: 1,
            name: "bug_report_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "BugBotEvent_PressedAddToChat"
}), Mbd = k.makeMessageType("aiserver.v1.BugBotEvent.PressedOpenInEditor", ()=>[
        {
            no: 1,
            name: "bug_location",
            kind: "message",
            T: ano
        },
        {
            no: 2,
            name: "bug_report_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "BugBotEvent_PressedOpenInEditor"
}), Pbd = k.makeMessageType("aiserver.v1.BugBotEvent.ViewedReport", ()=>[
        {
            no: 1,
            name: "seconds_viewed",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "report_views",
            kind: "message",
            T: Lbd,
            repeated: !0
        }
    ], {
    localName: "BugBotEvent_ViewedReport"
}), Lbd = k.makeMessageType("aiserver.v1.BugBotEvent.ViewedReport.ReportView", ()=>[
        {
            no: 1,
            name: "bug_report_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "view_percentage",
            kind: "scalar",
            T: 1
        },
        {
            no: 3,
            name: "text_percentage",
            kind: "scalar",
            T: 1
        }
    ], {
    localName: "BugBotEvent_ViewedReport_ReportView"
}), Nbd = k.makeMessageType("aiserver.v1.BugBotEvent.UserFeedback", ()=>[
        {
            no: 1,
            name: "bug_report_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "feedback",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "BugBotEvent_UserFeedback"
}), Obd = k.makeMessageType("aiserver.v1.BugBotEvent.BackgroundIntervalStarted", [], {
    localName: "BugBotEvent_BackgroundIntervalStarted"
}), Fbd = k.makeMessageType("aiserver.v1.BugBotEvent.BackgroundIntervalEnded", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "BugBotEvent_BackgroundIntervalEnded"
}), Bbd = k.makeMessageType("aiserver.v1.BugBotEvent.BackgroundIntervalInterrupted", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "enum",
            T: k.getEnumType(xbd)
        }
    ], {
    localName: "BugBotEvent_BackgroundIntervalInterrupted"
}), Ubd = k.makeMessageType("aiserver.v1.BugBotEvent.BackgroundIntervalErrored", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "BugBotEvent_BackgroundIntervalErrored"
}), $bd = k.makeMessageType("aiserver.v1.AiRequestEvent", ()=>[
        {
            no: 1,
            name: "request_type",
            kind: "enum",
            T: k.getEnumType(EHt)
        },
        {
            no: 2,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "source",
            kind: "enum",
            T: k.getEnumType($se)
        }
    ]), EHt = k.makeEnum("aiserver.v1.AiRequestEvent.RequestType", [
    {
        no: 0,
        name: "REQUEST_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "REQUEST_TYPE_START",
        localName: "START"
    },
    {
        no: 2,
        name: "REQUEST_TYPE_END",
        localName: "END"
    }
]), $se = k.makeEnum("aiserver.v1.AiRequestEvent.Source", [
    {
        no: 0,
        name: "SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SOURCE_CHAT",
        localName: "CHAT"
    },
    {
        no: 2,
        name: "SOURCE_CMDK",
        localName: "CMDK"
    },
    {
        no: 3,
        name: "SOURCE_APPLY",
        localName: "APPLY"
    },
    {
        no: 4,
        name: "SOURCE_COMPOSER",
        localName: "COMPOSER"
    },
    {
        no: 5,
        name: "SOURCE_TASK",
        localName: "TASK"
    },
    {
        no: 6,
        name: "SOURCE_CODE_INTERPRETER",
        localName: "CODE_INTERPRETER"
    },
    {
        no: 7,
        name: "SOURCE_INTERPRETER_EXECUTION",
        localName: "INTERPRETER_EXECUTION"
    },
    {
        no: 8,
        name: "SOURCE_BUGBOT",
        localName: "BUGBOT"
    }
]), Hbd = k.makeMessageType("aiserver.v1.ModelOpenedEvent", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: x2
        },
        {
            no: 2,
            name: "maybe_defined_point_in_time_model",
            kind: "message",
            T: $Hi
        }
    ]), Wbd = k.makeMessageType("aiserver.v1.BackgroundFilesEvent", ()=>[
        {
            no: 2,
            name: "files",
            kind: "message",
            T: Gbd,
            repeated: !0
        }
    ]), Gbd = k.makeMessageType("aiserver.v1.BackgroundFilesEvent.BackgroundFile", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "full_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "BackgroundFilesEvent_BackgroundFile"
}), Vbd = k.makeMessageType("aiserver.v1.ScrollEvent", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: x2
        },
        {
            no: 2,
            name: "visible_ranges",
            kind: "message",
            T: Use,
            repeated: !0
        },
        {
            no: 3,
            name: "editor_id",
            kind: "scalar",
            T: 9
        }
    ]), jbd = k.makeMessageType("aiserver.v1.EditorCloseEvent", ()=>[
        {
            no: 1,
            name: "editor_id",
            kind: "scalar",
            T: 9
        }
    ]), qbd = k.makeMessageType("aiserver.v1.TabCloseEvent", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: $Hi
        }
    ]), zbd = k.makeMessageType("aiserver.v1.ModelAddedEvent", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: $Hi
        },
        {
            no: 2,
            name: "full_uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "uri_scheme",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "is_too_large_for_syncing",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "is_too_large_for_tokenization",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "is_too_large_for_heap_operation",
            kind: "scalar",
            T: 8
        }
    ]), Kbd = k.makeMessageType("aiserver.v1.AnythingQuickAccessItem", ()=>[
        {
            no: 1,
            name: "resource",
            kind: "message",
            T: Ybd,
            oneof: "item"
        },
        {
            no: 2,
            name: "separator",
            kind: "scalar",
            T: 9,
            oneof: "item"
        },
        {
            no: 3,
            name: "section",
            kind: "scalar",
            T: 9,
            oneof: "item"
        }
    ]), Ybd = k.makeMessageType("aiserver.v1.AnythingQuickAccessItem.Resource", ()=>[
        {
            no: 1,
            name: "model",
            kind: "message",
            T: x2,
            opt: !0
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: Use,
            opt: !0
        },
        {
            no: 3,
            name: "uri",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "AnythingQuickAccessItem_Resource"
}), Xbd = k.makeMessageType("aiserver.v1.AnythingQuickAccessSelectionEvent", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "items",
            kind: "message",
            T: Kbd,
            repeated: !0
        },
        {
            no: 3,
            name: "selected_indices",
            kind: "scalar",
            T: 5,
            repeated: !0
        }
    ]), Zbd = k.makeMessageType("aiserver.v1.LspSuggestionEvent", ()=>[
        {
            no: 1,
            name: "suggestions",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "request_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "editor_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "point_in_time_model",
            kind: "message",
            T: x2
        }
    ]), kno = k.makeMessageType("aiserver.v1.CppSessionEvent", ()=>[
        {
            no: 2,
            name: "accept_event",
            kind: "message",
            T: U_d,
            oneof: "event"
        },
        {
            no: 3,
            name: "reject_event",
            kind: "message",
            T: G_d,
            oneof: "event"
        },
        {
            no: 4,
            name: "manual_trigger_event",
            kind: "message",
            T: Y_d,
            oneof: "event"
        },
        {
            no: 6,
            name: "stopped_tracking_model_event",
            kind: "message",
            T: X_d,
            oneof: "event"
        },
        {
            no: 7,
            name: "suggest_event",
            kind: "message",
            T: $_d,
            oneof: "event"
        },
        {
            no: 8,
            name: "linter_error_event",
            kind: "message",
            T: Z_d,
            oneof: "event"
        },
        {
            no: 9,
            name: "debounced_cursor_movement_event",
            kind: "message",
            T: Q_d,
            oneof: "event"
        },
        {
            no: 10,
            name: "editor_changed_event",
            kind: "message",
            T: J_d,
            oneof: "event"
        },
        {
            no: 11,
            name: "copy_event",
            kind: "message",
            T: ebd,
            oneof: "event"
        },
        {
            no: 13,
            name: "quick_action_event",
            kind: "message",
            T: nbd,
            oneof: "event"
        },
        {
            no: 14,
            name: "quick_action_fire_event",
            kind: "message",
            T: ibd,
            oneof: "event"
        },
        {
            no: 15,
            name: "model_opened_event",
            kind: "message",
            T: Hbd,
            oneof: "event"
        },
        {
            no: 17,
            name: "cmd_k_event",
            kind: "message",
            T: rbd,
            oneof: "event"
        },
        {
            no: 18,
            name: "chat_event",
            kind: "message",
            T: pbd,
            oneof: "event"
        },
        {
            no: 19,
            name: "ai_event",
            kind: "message",
            T: $bd,
            oneof: "event"
        },
        {
            no: 21,
            name: "scroll_event",
            kind: "message",
            T: Vbd,
            oneof: "event"
        },
        {
            no: 22,
            name: "editor_close_event",
            kind: "message",
            T: jbd,
            oneof: "event"
        },
        {
            no: 23,
            name: "tab_close_event",
            kind: "message",
            T: qbd,
            oneof: "event"
        },
        {
            no: 33,
            name: "model_added_event",
            kind: "message",
            T: zbd,
            oneof: "event"
        },
        {
            no: 26,
            name: "partial_accept_event",
            kind: "message",
            T: j_d,
            oneof: "event"
        },
        {
            no: 27,
            name: "accept_cursor_prediction_event",
            kind: "message",
            T: z_d,
            oneof: "event"
        },
        {
            no: 28,
            name: "reject_cursor_prediction_event",
            kind: "message",
            T: K_d,
            oneof: "event"
        },
        {
            no: 29,
            name: "suggest_cursor_prediction_event",
            kind: "message",
            T: q_d,
            oneof: "event"
        },
        {
            no: 30,
            name: "cpp_trigger_event",
            kind: "message",
            T: H_d,
            oneof: "event"
        },
        {
            no: 31,
            name: "finished_cpp_generation_event",
            kind: "message",
            T: W_d,
            oneof: "event"
        },
        {
            no: 32,
            name: "bug_bot_event",
            kind: "message",
            T: Ebd,
            oneof: "event"
        },
        {
            no: 34,
            name: "bug_bot_linter_event",
            kind: "message",
            T: vbd,
            oneof: "event"
        },
        {
            no: 35,
            name: "anything_quick_access_selection_event",
            kind: "message",
            T: Xbd,
            oneof: "event"
        },
        {
            no: 36,
            name: "lsp_suggestion_event",
            kind: "message",
            T: Zbd,
            oneof: "event"
        },
        {
            no: 37,
            name: "ntp_event",
            kind: "message",
            T: myd,
            oneof: "event"
        },
        {
            no: 38,
            name: "repo_event",
            kind: "message",
            T: gyd,
            oneof: "event"
        },
        {
            no: 39,
            name: "git_event",
            kind: "message",
            T: fyd,
            oneof: "event"
        },
        {
            no: 40,
            name: "tool_call_event",
            kind: "message",
            T: Syd,
            oneof: "event"
        },
        {
            no: 46,
            name: "before_ai_edit_event",
            kind: "message",
            T: Qbd,
            oneof: "event"
        },
        {
            no: 47,
            name: "search_event",
            kind: "message",
            T: Cyd,
            oneof: "event"
        },
        {
            no: 48,
            name: "terminal_event",
            kind: "message",
            T: cyd,
            oneof: "event"
        },
        {
            no: 49,
            name: "worktree_event",
            kind: "message",
            T: _yd,
            oneof: "event"
        },
        {
            no: 50,
            name: "review_changes_opened_event",
            kind: "message",
            T: Dno,
            oneof: "event"
        },
        {
            no: 51,
            name: "browser_event",
            kind: "message",
            T: pyd,
            oneof: "event"
        },
        {
            no: 16,
            name: "background_files_event",
            kind: "message",
            T: Wbd,
            oneof: "event"
        },
        {
            no: 5,
            name: "performance_now_timestamp",
            kind: "scalar",
            T: 1
        },
        {
            no: 25,
            name: "performance_time_origin",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 41,
            name: "global_index",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 42,
            name: "performance_now_flush_time",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 43,
            name: "event_index",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 44,
            name: "flush_index",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 45,
            name: "global_index_v2",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), Qbd = k.makeMessageType("aiserver.v1.BeforeAiEditEvent", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: x2,
            oneof: "model"
        },
        {
            no: 5,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9,
            oneof: "model"
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "request_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "tool_name",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Jbd = k.makeMessageType("aiserver.v1.CppAppendRequest", ()=>[
        {
            no: 1,
            name: "changes",
            kind: "scalar",
            T: 12
        }
    ]), eyd = k.makeMessageType("aiserver.v1.CppAppendResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]), mLn = k.makeMessageType("aiserver.v1.EditHistoryAppendChangesRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "model_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "starting_model_value",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "starting_model_version",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 5,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 14,
            name: "uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "client_version",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "client_commit",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "changes",
            kind: "message",
            T: FHi,
            repeated: !0
        },
        {
            no: 9,
            name: "session_events",
            kind: "message",
            T: kno,
            repeated: !0
        },
        {
            no: 11,
            name: "model_changes_may_be_out_of_order",
            kind: "scalar",
            T: 8
        },
        {
            no: 12,
            name: "privacy_mode_status",
            kind: "enum",
            T: k.getEnumType(gLn)
        },
        {
            no: 7,
            name: "events",
            kind: "message",
            T: ryd,
            repeated: !0
        },
        {
            no: 13,
            name: "time_origin",
            kind: "scalar",
            T: 2
        }
    ]), gLn = k.makeEnum("aiserver.v1.EditHistoryAppendChangesRequest.PrivacyModeStatus", [
    {
        no: 0,
        name: "PRIVACY_MODE_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PRIVACY_MODE_STATUS_PRIVACY_ENABLED",
        localName: "PRIVACY_ENABLED"
    },
    {
        no: 2,
        name: "PRIVACY_MODE_STATUS_IMPLICIT_NO_PRIVACY",
        localName: "IMPLICIT_NO_PRIVACY"
    },
    {
        no: 3,
        name: "PRIVACY_MODE_STATUS_EXPLICIT_NO_PRIVACY",
        localName: "EXPLICIT_NO_PRIVACY"
    }
]), tyd = k.makeMessageType("aiserver.v1.EditHistoryAppendChangesResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]), wno = k.makeMessageType("aiserver.v1.CppEditHistoryStatusRequest", []), Cno = k.makeMessageType("aiserver.v1.CppEditHistoryStatusResponse", ()=>[
        {
            no: 1,
            name: "on",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "only_if_explicit",
            kind: "scalar",
            T: 8
        }
    ]), WHi = k.makeMessageType("aiserver.v1.BlockDiffPatch", ()=>[
        {
            no: 1,
            name: "start_model_window",
            kind: "message",
            T: iyd
        },
        {
            no: 3,
            name: "changes",
            kind: "message",
            T: nyd,
            repeated: !0
        },
        {
            no: 4,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "model_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "start_from_change_index",
            kind: "scalar",
            T: 5
        }
    ]), nyd = k.makeMessageType("aiserver.v1.BlockDiffPatch.Change", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: Use
        }
    ], {
    localName: "BlockDiffPatch_Change"
}), iyd = k.makeMessageType("aiserver.v1.BlockDiffPatch.ModelWindow", ()=>[
        {
            no: 1,
            name: "lines",
            kind: "scalar",
            T: 9,
            repeated: !0
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
        }
    ], {
    localName: "BlockDiffPatch_ModelWindow"
}), ryd = k.makeMessageType("aiserver.v1.CppHistoryAppendEvent", ()=>[
        {
            no: 1,
            name: "model_change",
            kind: "message",
            T: FHi,
            oneof: "event"
        },
        {
            no: 2,
            name: "accept_event",
            kind: "message",
            T: oyd,
            oneof: "event"
        },
        {
            no: 3,
            name: "reject_event",
            kind: "message",
            T: ayd,
            oneof: "event"
        },
        {
            no: 4,
            name: "manual_trigger_event",
            kind: "message",
            T: syd,
            oneof: "event"
        },
        {
            no: 10,
            name: "final_model_hash",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), syd = k.makeMessageType("aiserver.v1.CppManualTriggerEvent", ()=>[
        {
            no: 2,
            name: "position",
            kind: "message",
            T: a6
        }
    ]), oyd = k.makeMessageType("aiserver.v1.CppAcceptEvent", ()=>[
        {
            no: 1,
            name: "cpp_suggestion",
            kind: "message",
            T: Tno
        }
    ]), ayd = k.makeMessageType("aiserver.v1.CppRejectEvent", ()=>[
        {
            no: 1,
            name: "cpp_suggestion",
            kind: "message",
            T: Tno
        }
    ]), Tno = k.makeMessageType("aiserver.v1.CppSuggestion", ()=>[
        {
            no: 1,
            name: "suggestion_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: Use
        },
        {
            no: 5,
            name: "seen",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "editor_selection_before_peek",
            kind: "message",
            T: vVc
        },
        {
            no: 7,
            name: "binding_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), cyd = k.makeMessageType("aiserver.v1.TerminalEvent", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "create",
            kind: "message",
            T: lyd,
            oneof: "event"
        },
        {
            no: 3,
            name: "exit",
            kind: "message",
            T: uyd,
            oneof: "event"
        },
        {
            no: 4,
            name: "command_start",
            kind: "message",
            T: dyd,
            oneof: "event"
        },
        {
            no: 5,
            name: "command_finish",
            kind: "message",
            T: hyd,
            oneof: "event"
        }
    ]), lyd = k.makeMessageType("aiserver.v1.TerminalEvent.Create", ()=>[
        {
            no: 1,
            name: "is_remote",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "TerminalEvent_Create"
}), uyd = k.makeMessageType("aiserver.v1.TerminalEvent.Exit", ()=>[
        {
            no: 1,
            name: "exit_code",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ], {
    localName: "TerminalEvent_Exit"
}), dyd = k.makeMessageType("aiserver.v1.TerminalEvent.CommandStart", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: x2
        },
        {
            no: 2,
            name: "cwd",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "TerminalEvent_CommandStart"
}), hyd = k.makeMessageType("aiserver.v1.TerminalEvent.CommandFinish", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: x2
        },
        {
            no: 2,
            name: "exit_code",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ], {
    localName: "TerminalEvent_CommandFinish"
}), pyd = k.makeMessageType("aiserver.v1.BrowserEvent", ()=>[
        {
            no: 1,
            name: "view_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tab_created",
            kind: "message",
            T: Eno,
            oneof: "event"
        },
        {
            no: 3,
            name: "tab_closed",
            kind: "message",
            T: xno,
            oneof: "event"
        },
        {
            no: 4,
            name: "navigation",
            kind: "message",
            T: Ino,
            oneof: "event"
        },
        {
            no: 5,
            name: "tool_action",
            kind: "message",
            T: Ano,
            oneof: "event"
        }
    ]), Eno = k.makeMessageType("aiserver.v1.BrowserEvent.TabCreated", [], {
    localName: "BrowserEvent_TabCreated"
}), xno = k.makeMessageType("aiserver.v1.BrowserEvent.TabClosed", [], {
    localName: "BrowserEvent_TabClosed"
}), Ino = k.makeMessageType("aiserver.v1.BrowserEvent.Navigation", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "BrowserEvent_Navigation"
}), Ano = k.makeMessageType("aiserver.v1.BrowserEvent.ToolAction", ()=>[
        {
            no: 1,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "args_json",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "success",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "post_snapshot_yaml",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "post_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "post_title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "source",
            kind: "enum",
            T: k.getEnumType(Rno)
        }
    ], {
    localName: "BrowserEvent_ToolAction"
}), Rno = k.makeEnum("aiserver.v1.BrowserEvent.ToolAction.Source", [
    {
        no: 0,
        name: "SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SOURCE_MCP_TOOL",
        localName: "MCP_TOOL"
    },
    {
        no: 2,
        name: "SOURCE_MANUAL_USER",
        localName: "MANUAL_USER"
    }
]), myd = k.makeMessageType("aiserver.v1.NtpEvent", ()=>[
        {
            no: 1,
            name: "originate_timestamp",
            kind: "scalar",
            T: 1
        },
        {
            no: 2,
            name: "receive_timestamp",
            kind: "scalar",
            T: 1
        },
        {
            no: 3,
            name: "transmit_timestamp",
            kind: "scalar",
            T: 1
        },
        {
            no: 4,
            name: "destination_timestamp",
            kind: "scalar",
            T: 1
        }
    ]), gyd = k.makeMessageType("aiserver.v1.RepoEvent", ()=>[
        {
            no: 1,
            name: "repo_owner",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repo_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "event_type",
            kind: "enum",
            T: k.getEnumType(s_e)
        }
    ]), s_e = k.makeEnum("aiserver.v1.RepoEvent.Type", [
    {
        no: 0,
        name: "TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "TYPE_SYNCED",
        localName: "SYNCED"
    },
    {
        no: 2,
        name: "TYPE_LOADING",
        localName: "LOADING"
    },
    {
        no: 3,
        name: "TYPE_INDEXING_SETUP",
        localName: "INDEXING_SETUP"
    },
    {
        no: 4,
        name: "TYPE_INDEXING_INIT_FROM_SIMILAR_CODEBASE",
        localName: "INDEXING_INIT_FROM_SIMILAR_CODEBASE"
    },
    {
        no: 5,
        name: "TYPE_PAUSED",
        localName: "PAUSED"
    },
    {
        no: 6,
        name: "TYPE_INDEXING",
        localName: "INDEXING"
    },
    {
        no: 7,
        name: "TYPE_ERROR",
        localName: "ERROR"
    },
    {
        no: 8,
        name: "TYPE_NOT_AUTO_INDEXING",
        localName: "NOT_AUTO_INDEXING"
    },
    {
        no: 9,
        name: "TYPE_NOT_INDEXED",
        localName: "NOT_INDEXED"
    }
]), fyd = k.makeMessageType("aiserver.v1.GitEvent", ()=>[
        {
            no: 1,
            name: "operation_type",
            kind: "enum",
            T: k.getEnumType(vyd)
        },
        {
            no: 2,
            name: "repository_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "operation_success",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "is_default_branch",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 7,
            name: "default_branch_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "commit_hash",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "previous_commit_hash",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "remote_url",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), vyd = k.makeEnum("aiserver.v1.GitEvent.OperationType", [
    {
        no: 0,
        name: "OPERATION_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "OPERATION_TYPE_COMMIT",
        localName: "COMMIT"
    },
    {
        no: 2,
        name: "OPERATION_TYPE_CHECKOUT",
        localName: "CHECKOUT"
    },
    {
        no: 3,
        name: "OPERATION_TYPE_PULL",
        localName: "PULL"
    },
    {
        no: 4,
        name: "OPERATION_TYPE_FETCH",
        localName: "FETCH"
    },
    {
        no: 5,
        name: "OPERATION_TYPE_MERGE",
        localName: "MERGE"
    },
    {
        no: 6,
        name: "OPERATION_TYPE_REBASE",
        localName: "REBASE"
    },
    {
        no: 7,
        name: "OPERATION_TYPE_STASH",
        localName: "STASH"
    },
    {
        no: 8,
        name: "OPERATION_TYPE_BRANCH",
        localName: "BRANCH"
    },
    {
        no: 9,
        name: "OPERATION_TYPE_TAG",
        localName: "TAG"
    }
]), _yd = k.makeMessageType("aiserver.v1.WorktreeEvent", ()=>[
        {
            no: 1,
            name: "event_type",
            kind: "enum",
            T: k.getEnumType(xHt)
        },
        {
            no: 2,
            name: "model_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "best_of_n_group_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "all_worktree_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "applied_worktree_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "worktree_composer_mappings",
            kind: "message",
            T: byd,
            repeated: !0
        },
        {
            no: 7,
            name: "background_agent_composer_mappings",
            kind: "message",
            T: yyd,
            repeated: !0
        },
        {
            no: 8,
            name: "applied_composer_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "viewed_composer_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), xHt = k.makeEnum("aiserver.v1.WorktreeEvent.EventType", [
    {
        no: 0,
        name: "EVENT_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "EVENT_TYPE_APPLY_TO_MAIN",
        localName: "APPLY_TO_MAIN"
    },
    {
        no: 2,
        name: "EVENT_TYPE_UNDO_APPLY",
        localName: "UNDO_APPLY"
    },
    {
        no: 3,
        name: "EVENT_TYPE_VIEW_SUBCOMPOSER",
        localName: "VIEW_SUBCOMPOSER"
    }
]), byd = k.makeMessageType("aiserver.v1.WorktreeEvent.WorktreeComposerMapping", ()=>[
        {
            no: 1,
            name: "worktree_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "composer_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "WorktreeEvent_WorktreeComposerMapping"
}), yyd = k.makeMessageType("aiserver.v1.WorktreeEvent.BackgroundAgentComposerMapping", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "composer_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "WorktreeEvent_BackgroundAgentComposerMapping"
}), Dno = k.makeMessageType("aiserver.v1.ReviewChangesOpenedEvent", ()=>[
        {
            no: 1,
            name: "composer_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "best_of_n_group_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Syd = k.makeMessageType("aiserver.v1.ToolCallEvent", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "tool_name",
            kind: "scalar",
            T: 9
        }
    ]), kyd = k.makeMessageType("aiserver.v1.SearchMatch", ()=>[
        {
            no: 1,
            name: "line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "column",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "match_text",
            kind: "scalar",
            T: 9
        }
    ]), wyd = k.makeMessageType("aiserver.v1.SearchResultFile", ()=>[
        {
            no: 1,
            name: "file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "match_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "matches",
            kind: "message",
            T: kyd,
            repeated: !0
        }
    ]), Cyd = k.makeMessageType("aiserver.v1.SearchEvent", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "result_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "file_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "is_regex",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "is_case_sensitive",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "is_whole_word",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "files_to_include",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "files_to_exclude",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "duration_ms",
            kind: "scalar",
            T: 5
        },
        {
            no: 10,
            name: "results",
            kind: "message",
            T: wyd,
            repeated: !0
        }
    ]);

}
