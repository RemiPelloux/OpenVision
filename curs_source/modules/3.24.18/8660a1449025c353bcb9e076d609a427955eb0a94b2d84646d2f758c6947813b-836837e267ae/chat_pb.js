import { AFo, NFo, NSr, RFo, g7, hc, ju, nf, t2, z1d } from "./agent_pb.js";
import { Afd, dfd, tf } from "./composer_pb.js";
import { Gyr, TOo } from "./docs_pb.js";
import { A5 } from "./empty_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { Cx, Lpn, Q9, qse } from "./repository_pb.js";
import { Gte, Imn } from "./request_context_exec_pb.js";
import { H$e, Rj, xni } from "./selected_context_pb.js";
import { Lmn, Omn } from "./shadow_workspace_pb.js";
import { $_t, A3o, B3, Ct, Gke, Mve, Pu, j_t, oti, oyr, tmn, x3o, yM } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { $ke, Hke, Hu, Lhd, Mg, Nbr, Nhd, QE, R$e, Rpn, Uet, Z9, ZF, aW, hhd, phd, rL, wAe, xbr, xj } from "./utils_pb.js";
var Bni, Yse, _6o, e1r, b6o, y6o, S6o, W$e, k6o, w6o, t1r, Ckd, C6o, Fve, T6o, n1r, Uni, i1r, r1r, Fmn, s1r, E6o, I6o, o1r, x6o, A6o, R6o, P6o, jni, M6o, h5e, ctt, D6o, N6o, L6o, O6o, F6o, B6o, U6o, j6o, a1r, $6o, Bmn, H6o, W6o, G6o, q6o, l1r, z6o, V6o, Umn, jmn, $ni, K6o, Y6o, Hni, X6o, Z6o, Q6o, c1r, wy, bs, utt, Yke, rz, Wni, J6o, e4o, u1r, Tkd, t4o, n4o, i4o, r4o, s4o, o4o, a4o, l4o, c4o, u4o, ubt, d4o, h4o, Gni, p4o, r9t, s9t, m4o, g4o, f4o, v4o, d1r, Ekd, _4o, b4o, y4o, S4o, k4o, w4o, G$e, h1r, C4o, T4o, E4o, I4o, o9t, x4o, $mn, A4o, p1r, R4o, P4o, M4o, D4o, m1r, N4o, L4o, O4o, F4o, g1r, B4o, U4o, j4o, $4o, H4o, W4o, G4o, q4o, z4o, V4o, K4o, f1r, v1r, Y4o, _1r, X4o, Z4o;
export { $4o, $6o, $mn, $ni, A4o, A6o, B4o, B6o, Bmn, Bni, C4o, C6o, Ckd, D4o, D6o, E4o, E6o, Ekd, F4o, F6o, Fmn, Fve, G$e, G4o, G6o, Gni, H4o, H6o, Hni, I4o, I6o, J6o, K4o, K6o, L4o, L6o, M4o, M6o, N4o, N6o, O4o, O6o, P4o, P6o, Q6o, R4o, R6o, S4o, S6o, T4o, T6o, Tkd, U4o, U6o, Umn, Uni, V4o, V6o, W$e, W4o, W6o, Wni, X4o, X6o, Y4o, Y6o, Yke, Yse, Z4o, Z6o, _1r, _4o, _6o, a1r, a4o, b4o, b6o, bs, c1r, c4o, ctt, d1r, d4o, e1r, e4o, f1r, f4o, g1r, g4o, h1r, h4o, h5e, i1r, i4o, j4o, j6o, jmn, jni, k4o, k6o, l1r, l4o, m1r, m4o, n1r, n4o, o1r, o4o, o9t, p1r, p4o, q4o, q6o, r1r, r4o, r9t, rz, s1r, s4o, s9t, t1r, t4o, u1r, u4o, ubt, utt, v1r, v4o, w4o, w6o, wy, x4o, x6o, y4o, y6o, z4o, z6o };
var __wakaru_sd_initialized = false;
export function sd() {
if (__wakaru_sd_initialized) return;
__wakaru_sd_initialized = true;
"use strict";
E(), hr(), Pu(), Hu(), Gyr(), qse(), tf(), ju(), Gte(), Rj(), Omn(), Bni = x.makeEnum("aiserver.v1.ChunkType", [
    {
        no: 0,
        name: "CHUNK_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CHUNK_TYPE_CODEBASE",
        localName: "CODEBASE"
    },
    {
        no: 2,
        name: "CHUNK_TYPE_LONG_FILE",
        localName: "LONG_FILE"
    },
    {
        no: 3,
        name: "CHUNK_TYPE_DOCS",
        localName: "DOCS"
    }
]), Yse = x.makeEnum("aiserver.v1.SubagentType", [
    {
        no: 0,
        name: "SUBAGENT_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SUBAGENT_TYPE_DEEP_SEARCH",
        localName: "DEEP_SEARCH"
    },
    {
        no: 2,
        name: "SUBAGENT_TYPE_FIX_LINTS",
        localName: "FIX_LINTS"
    },
    {
        no: 3,
        name: "SUBAGENT_TYPE_TASK",
        localName: "TASK"
    },
    {
        no: 4,
        name: "SUBAGENT_TYPE_SPEC",
        localName: "SPEC"
    }
]), _6o = x.makeMessageType("aiserver.v1.StreamReplayChatRequest", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "tokens_per_second",
            kind: "scalar",
            T: 1,
            opt: !0
        }
    ]), e1r = x.makeMessageType("aiserver.v1.StreamUnifiedChatRequestWithTools", ()=>[
        {
            no: 1,
            name: "stream_unified_chat_request",
            kind: "message",
            T: h5e,
            oneof: "request"
        },
        {
            no: 2,
            name: "client_side_tool_v2_result",
            kind: "message",
            T: B3,
            oneof: "request"
        }
    ]), b6o = x.makeMessageType("aiserver.v1.UserRules", ()=>[
        {
            no: 1,
            name: "rules",
            kind: "message",
            T: Gni,
            repeated: !0
        }
    ]), y6o = x.makeMessageType("aiserver.v1.StreamStart", ()=>[
        {
            no: 1,
            name: "padding",
            kind: "scalar",
            T: 9
        }
    ]), S6o = x.makeMessageType("aiserver.v1.SpanContext", ()=>[
        {
            no: 1,
            name: "trace_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "span_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "trace_flags",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 4,
            name: "trace_state",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), W$e = x.makeMessageType("aiserver.v1.StreamUnifiedChatResponseWithTools", ()=>[
        {
            no: 1,
            name: "client_side_tool_v2_call",
            kind: "message",
            T: Gke,
            oneof: "response"
        },
        {
            no: 2,
            name: "stream_unified_chat_response",
            kind: "message",
            T: Bmn,
            oneof: "response"
        },
        {
            no: 3,
            name: "conversation_summary",
            kind: "message",
            T: Fve,
            oneof: "response"
        },
        {
            no: 4,
            name: "user_rules",
            kind: "message",
            T: b6o,
            oneof: "response"
        },
        {
            no: 5,
            name: "stream_start",
            kind: "message",
            T: y6o,
            oneof: "response"
        },
        {
            no: 6,
            name: "tracing_context",
            kind: "message",
            T: S6o,
            opt: !0
        },
        {
            no: 7,
            name: "event_id",
            kind: "scalar",
            T: 9
        }
    ]), k6o = x.makeMessageType("aiserver.v1.StreamUnifiedChatRequestWithToolsIdempotent", ()=>[
        {
            no: 1,
            name: "client_chunk",
            kind: "message",
            T: e1r,
            oneof: "request"
        },
        {
            no: 2,
            name: "abort",
            kind: "message",
            T: A5,
            oneof: "request"
        },
        {
            no: 3,
            name: "close",
            kind: "message",
            T: A5,
            oneof: "request"
        },
        {
            no: 4,
            name: "idempotency_key",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "seqno",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), w6o = x.makeMessageType("aiserver.v1.WelcomeMessage", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_degraded_mode",
            kind: "scalar",
            T: 8
        }
    ]), t1r = x.makeMessageType("aiserver.v1.StreamUnifiedChatResponseWithToolsIdempotent", ()=>[
        {
            no: 1,
            name: "server_chunk",
            kind: "message",
            T: W$e,
            oneof: "response"
        },
        {
            no: 3,
            name: "welcome_message",
            kind: "message",
            T: w6o,
            oneof: "response"
        },
        {
            no: 4,
            name: "seqno_ack",
            kind: "scalar",
            T: 13,
            oneof: "response"
        }
    ]), Ckd = x.makeMessageType("aiserver.v1.ConversationSummaryStrategy", ()=>[
        {
            no: 1,
            name: "plain_text_summary",
            kind: "scalar",
            T: 9,
            oneof: "strategy"
        },
        {
            no: 2,
            name: "arbitrary_summary_plus_tool_result_truncation",
            kind: "message",
            T: C6o,
            oneof: "strategy"
        }
    ]), C6o = x.makeMessageType("aiserver.v1.ConversationSummaryStrategy.ArbitrarySummaryPlusToolResultTruncation", ()=>[
        {
            no: 1,
            name: "arbitrary_summary",
            kind: "message",
            T: Fve
        },
        {
            no: 2,
            name: "tool_result_truncation_length",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation"
}), Fve = x.makeMessageType("aiserver.v1.ConversationSummary", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "truncation_last_bubble_id_inclusive",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "client_should_start_sending_from_inclusive_bubble_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "previous_conversation_summary_bubble_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "includes_tool_results",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "strategy",
            kind: "scalar",
            T: 9
        }
    ]), T6o = x.makeMessageType("aiserver.v1.ContextToRank", ()=>[
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
            name: "line_range",
            kind: "message",
            T: aW,
            opt: !0
        },
        {
            no: 4,
            name: "code_block",
            kind: "message",
            T: rL,
            opt: !0
        }
    ]), n1r = x.makeMessageType("aiserver.v1.RankedContext", ()=>[
        {
            no: 1,
            name: "context",
            kind: "message",
            T: T6o
        },
        {
            no: 2,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]), Uni = x.makeMessageType("aiserver.v1.DocumentationCitation", ()=>[
        {
            no: 1,
            name: "chunks",
            kind: "message",
            T: TOo,
            repeated: !0
        }
    ]), i1r = x.makeMessageType("aiserver.v1.WebCitation", ()=>[
        {
            no: 1,
            name: "references",
            kind: "message",
            T: r1r,
            repeated: !0
        }
    ]), r1r = x.makeMessageType("aiserver.v1.WebReference", ()=>[
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 1,
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
    ]), Fmn = x.makeMessageType("aiserver.v1.DocsReference", ()=>[
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
        },
        {
            no: 4,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]), s1r = x.makeMessageType("aiserver.v1.AiWebSearchResult", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        }
    ]), E6o = x.makeMessageType("aiserver.v1.AiWebSearchResults", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: s1r,
            repeated: !0
        }
    ]), I6o = x.makeMessageType("aiserver.v1.StatusUpdate", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "metadata",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), o1r = x.makeMessageType("aiserver.v1.StatusUpdates", ()=>[
        {
            no: 1,
            name: "updates",
            kind: "message",
            T: I6o,
            repeated: !0
        }
    ]), x6o = x.makeMessageType("aiserver.v1.RerankDocumentsRequest", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "documents",
            kind: "message",
            T: R6o,
            repeated: !0
        }
    ]), A6o = x.makeMessageType("aiserver.v1.RerankDocumentsResponse", ()=>[
        {
            no: 1,
            name: "documents",
            kind: "message",
            T: P6o,
            repeated: !0
        }
    ]), R6o = x.makeMessageType("aiserver.v1.Document", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "id",
            kind: "scalar",
            T: 9
        }
    ]), P6o = x.makeMessageType("aiserver.v1.DocumentIdsWithScores", ()=>[
        {
            no: 1,
            name: "document_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]), jni = x.makeMessageType("aiserver.v1.ComposerFileDiffHistory", ()=>[
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
    ]), M6o = x.makeMessageType("aiserver.v1.WorkspaceFolder", ()=>[
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
            T: 9
        }
    ]), h5e = x.makeMessageType("aiserver.v1.StreamUnifiedChatRequest", ()=>[
        {
            no: 1,
            name: "conversation",
            kind: "message",
            T: wy,
            repeated: !0
        },
        {
            no: 30,
            name: "full_conversation_headers_only",
            kind: "message",
            T: Y6o,
            repeated: !0
        },
        {
            no: 2,
            name: "allow_long_file_scan",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "explicit_context",
            kind: "message",
            T: Z9
        },
        {
            no: 4,
            name: "can_handle_filenames_after_language_ids",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "model_details",
            kind: "message",
            T: Mg
        },
        {
            no: 6,
            name: "linter_errors",
            kind: "message",
            T: ZF
        },
        {
            no: 7,
            name: "documentation_identifiers",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 8,
            name: "use_web",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "external_links",
            kind: "message",
            T: Rpn,
            repeated: !0
        },
        {
            no: 10,
            name: "project_context",
            kind: "message",
            T: wy,
            opt: !0
        },
        {
            no: 11,
            name: "diffs_for_compressing_files",
            kind: "message",
            T: N6o,
            repeated: !0
        },
        {
            no: 12,
            name: "compress_edits",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 13,
            name: "should_cache",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 14,
            name: "multi_file_linter_errors",
            kind: "message",
            T: ZF,
            repeated: !0
        },
        {
            no: 15,
            name: "current_file",
            kind: "message",
            T: QE
        },
        {
            no: 16,
            name: "recent_edits",
            kind: "message",
            T: L6o,
            opt: !0
        },
        {
            no: 17,
            name: "use_reference_composer_diff_prompt",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 18,
            name: "file_diff_histories",
            kind: "message",
            T: jni,
            repeated: !0
        },
        {
            no: 19,
            name: "use_new_compression_scheme",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 21,
            name: "quotes",
            kind: "message",
            T: Nbr,
            repeated: !0
        },
        {
            no: 20,
            name: "additional_ranked_context",
            kind: "message",
            T: n1r,
            repeated: !0
        },
        {
            no: 22,
            name: "is_chat",
            kind: "scalar",
            T: 8
        },
        {
            no: 23,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 72,
            name: "replying_to_request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 24,
            name: "repository_info",
            kind: "message",
            T: Cx
        },
        {
            no: 25,
            name: "repository_info_should_query_staging",
            kind: "scalar",
            T: 8
        },
        {
            no: 39,
            name: "repository_info_should_query_prod",
            kind: "scalar",
            T: 8
        },
        {
            no: 52,
            name: "query_only_repo_access",
            kind: "message",
            T: Lpn
        },
        {
            no: 44,
            name: "repo_query_auth_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 26,
            name: "environment_info",
            kind: "message",
            T: xbr
        },
        {
            no: 27,
            name: "is_agentic",
            kind: "scalar",
            T: 8
        },
        {
            no: 28,
            name: "conversation_summary",
            kind: "message",
            T: Fve,
            opt: !0
        },
        {
            no: 29,
            name: "supported_tools",
            kind: "enum",
            T: x.getEnumType(Ct),
            repeated: !0
        },
        {
            no: 31,
            name: "enable_yolo_mode",
            kind: "scalar",
            T: 8
        },
        {
            no: 32,
            name: "yolo_prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 33,
            name: "use_unified_chat_prompt",
            kind: "scalar",
            T: 8
        },
        {
            no: 34,
            name: "mcp_tools",
            kind: "message",
            T: $_t,
            repeated: !0
        },
        {
            no: 35,
            name: "use_full_inputs_context",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 36,
            name: "is_resume",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 37,
            name: "allow_model_fallbacks",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 38,
            name: "number_of_times_shown_fallback_model_warning",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 40,
            name: "context_bank_session_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 41,
            name: "context_bank_version",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 43,
            name: "context_bank_encryption_key",
            kind: "scalar",
            T: 12,
            opt: !0
        },
        {
            no: 45,
            name: "is_headless",
            kind: "scalar",
            T: 8
        },
        {
            no: 68,
            name: "is_background_composer",
            kind: "scalar",
            T: 8
        },
        {
            no: 42,
            name: "uses_codebase_results",
            kind: "message",
            T: B6o,
            opt: !0
        },
        {
            no: 46,
            name: "unified_mode",
            kind: "enum",
            T: x.getEnumType(ctt),
            opt: !0
        },
        {
            no: 47,
            name: "tools_requiring_accepted_return",
            kind: "enum",
            T: x.getEnumType(Ct),
            repeated: !0
        },
        {
            no: 48,
            name: "should_disable_tools",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 49,
            name: "thinking_level",
            kind: "enum",
            T: x.getEnumType(D6o),
            opt: !0
        },
        {
            no: 50,
            name: "should_use_chat_prompt",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 55,
            name: "background_composer_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 51,
            name: "uses_rules",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 53,
            name: "mode_uses_auto_apply",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 54,
            name: "unified_mode_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 56,
            name: "use_generate_rules_prompt",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 57,
            name: "edit_tool_supports_search_and_replace",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 58,
            name: "project_layouts",
            kind: "message",
            T: f1r,
            repeated: !0
        },
        {
            no: 59,
            name: "repository_name_if_unindexed",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 60,
            name: "indexing_progress",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 61,
            name: "full_file_cmd_k_options",
            kind: "message",
            T: U6o,
            opt: !0
        },
        {
            no: 62,
            name: "indexing_phase_if_unindexed",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 63,
            name: "use_knowledge_base_prompt",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 64,
            name: "indexing_num_files_if_unindexed",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 66,
            name: "subagent_info",
            kind: "message",
            T: B4o,
            opt: !0
        },
        {
            no: 67,
            name: "supports_git_index",
            kind: "scalar",
            T: 8
        },
        {
            no: 69,
            name: "force_is_not_dev",
            kind: "scalar",
            T: 8
        },
        {
            no: 70,
            name: "disable_edit_file_timeout",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 71,
            name: "should_attach_linter_errors",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 73,
            name: "should_speculatively_route_gpt5",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 74,
            name: "force_terminal_hanging_detection",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 75,
            name: "force_summarization",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 76,
            name: "is_quick_search_query",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 77,
            name: "is_spec_mode",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 78,
            name: "allow_server_side_semantic_search",
            kind: "scalar",
            T: 8
        },
        {
            no: 79,
            name: "speculative_summarization_encryption_key",
            kind: "scalar",
            T: 12,
            opt: !0
        },
        {
            no: 81,
            name: "workspace_folders",
            kind: "message",
            T: M6o,
            repeated: !0
        },
        {
            no: 82,
            name: "does_readfile_support_images",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 83,
            name: "sandboxing_support_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 84,
            name: "custom_planning_instructions",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 85,
            name: "enable_terminal_file_persistence",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 86,
            name: "terminals_folder",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 93,
            name: "agent_transcripts_folder",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 87,
            name: "agent_notes_folder",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 88,
            name: "agent_tools_folder",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 89,
            name: "current_plan",
            kind: "message",
            T: j6o,
            opt: !0
        },
        {
            no: 90,
            name: "has_mcp_descriptors",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 91,
            name: "best_of_n_group_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 92,
            name: "try_use_best_of_n_promotion",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), ctt = x.makeEnum("aiserver.v1.StreamUnifiedChatRequest.UnifiedMode", [
    {
        no: 0,
        name: "UNIFIED_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "UNIFIED_MODE_CHAT",
        localName: "CHAT"
    },
    {
        no: 2,
        name: "UNIFIED_MODE_AGENT",
        localName: "AGENT"
    },
    {
        no: 3,
        name: "UNIFIED_MODE_EDIT",
        localName: "EDIT"
    },
    {
        no: 4,
        name: "UNIFIED_MODE_CUSTOM",
        localName: "CUSTOM"
    },
    {
        no: 5,
        name: "UNIFIED_MODE_PLAN",
        localName: "PLAN"
    },
    {
        no: 6,
        name: "UNIFIED_MODE_DEBUG",
        localName: "DEBUG"
    }
]), D6o = x.makeEnum("aiserver.v1.StreamUnifiedChatRequest.ThinkingLevel", [
    {
        no: 0,
        name: "THINKING_LEVEL_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "THINKING_LEVEL_MEDIUM",
        localName: "MEDIUM"
    },
    {
        no: 2,
        name: "THINKING_LEVEL_HIGH",
        localName: "HIGH"
    }
]), N6o = x.makeMessageType("aiserver.v1.StreamUnifiedChatRequest.RedDiff", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "red_ranges",
            kind: "message",
            T: $ke,
            repeated: !0
        },
        {
            no: 3,
            name: "red_ranges_reversed",
            kind: "message",
            T: $ke,
            repeated: !0
        },
        {
            no: 4,
            name: "start_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "end_hash",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamUnifiedChatRequest_RedDiff"
}), L6o = x.makeMessageType("aiserver.v1.StreamUnifiedChatRequest.RecentEdits", ()=>[
        {
            no: 1,
            name: "code_block_info",
            kind: "message",
            T: O6o,
            repeated: !0
        },
        {
            no: 2,
            name: "final_file_values",
            kind: "message",
            T: F6o,
            repeated: !0
        },
        {
            no: 3,
            name: "edits_belong_to_composer_generation_uuid",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "StreamUnifiedChatRequest_RecentEdits"
}), O6o = x.makeMessageType("aiserver.v1.StreamUnifiedChatRequest.RecentEdits.CodeBlockInfo", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content_before",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "content_after",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "generation_uuid",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "version",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ], {
    localName: "StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo"
}), F6o = x.makeMessageType("aiserver.v1.StreamUnifiedChatRequest.RecentEdits.FileInfo", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamUnifiedChatRequest_RecentEdits_FileInfo"
}), B6o = x.makeMessageType("aiserver.v1.StreamUnifiedChatRequest.CodeSearchResult", ()=>[
        {
            no: 1,
            name: "results",
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
        }
    ], {
    localName: "StreamUnifiedChatRequest_CodeSearchResult"
}), U6o = x.makeMessageType("aiserver.v1.StreamUnifiedChatRequest.FullFileCmdKOptions", ()=>[
        {
            no: 1,
            name: "file_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamUnifiedChatRequest_FullFileCmdKOptions"
}), j6o = x.makeMessageType("aiserver.v1.StreamUnifiedChatRequest.CurrentPlan", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamUnifiedChatRequest_CurrentPlan"
}), a1r = x.makeMessageType("aiserver.v1.ContextPiece", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]), $6o = x.makeMessageType("aiserver.v1.ContextPieceUpdate", ()=>[
        {
            no: 1,
            name: "pieces",
            kind: "message",
            T: a1r,
            repeated: !0
        }
    ]), Bmn = x.makeMessageType("aiserver.v1.StreamUnifiedChatResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 22,
            name: "server_bubble_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "debugging_only_chat_prompt",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "debugging_only_token_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "document_citation",
            kind: "message",
            T: Uni
        },
        {
            no: 5,
            name: "filled_prompt",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "is_big_file",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 7,
            name: "intermediate_text",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "is_using_slow_request",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "chunk_identity",
            kind: "message",
            T: W6o,
            opt: !0
        },
        {
            no: 9,
            name: "docs_reference",
            kind: "message",
            T: Fmn,
            opt: !0
        },
        {
            no: 11,
            name: "web_citation",
            kind: "message",
            T: i1r,
            opt: !0
        },
        {
            no: 33,
            name: "ai_web_search_results",
            kind: "message",
            T: E6o,
            opt: !0
        },
        {
            no: 12,
            name: "status_updates",
            kind: "message",
            T: o1r,
            opt: !0
        },
        {
            no: 13,
            name: "tool_call",
            kind: "message",
            T: oyr,
            opt: !0
        },
        {
            no: 36,
            name: "tool_call_v2",
            kind: "message",
            T: A3o,
            opt: !0
        },
        {
            no: 14,
            name: "should_break_ai_message",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 15,
            name: "partial_tool_call",
            kind: "message",
            T: x3o,
            opt: !0
        },
        {
            no: 16,
            name: "final_tool_result",
            kind: "message",
            T: G6o,
            opt: !0
        },
        {
            no: 17,
            name: "symbol_link",
            kind: "message",
            T: jmn,
            opt: !0
        },
        {
            no: 19,
            name: "file_link",
            kind: "message",
            T: $ni,
            opt: !0
        },
        {
            no: 18,
            name: "conversation_summary",
            kind: "message",
            T: Fve,
            opt: !0
        },
        {
            no: 20,
            name: "service_status_update",
            kind: "message",
            T: Umn,
            opt: !0
        },
        {
            no: 21,
            name: "viewable_git_context",
            kind: "message",
            T: c1r,
            opt: !0
        },
        {
            no: 23,
            name: "context_piece_update",
            kind: "message",
            T: $6o,
            opt: !0
        },
        {
            no: 24,
            name: "used_code",
            kind: "message",
            T: H6o,
            opt: !0
        },
        {
            no: 25,
            name: "thinking",
            kind: "message",
            T: ubt,
            opt: !0
        },
        {
            no: 37,
            name: "thinking_style",
            kind: "enum",
            T: x.getEnumType(utt),
            opt: !0
        },
        {
            no: 26,
            name: "stop_using_dsv3_agentic_model",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 27,
            name: "usage_uuid",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 28,
            name: "conversation_summary_starter",
            kind: "message",
            T: V6o,
            opt: !0
        },
        {
            no: 29,
            name: "subagent_return",
            kind: "message",
            T: g1r,
            opt: !0
        },
        {
            no: 30,
            name: "context_window_status",
            kind: "message",
            T: l1r,
            opt: !0
        },
        {
            no: 31,
            name: "image_description",
            kind: "message",
            T: q6o,
            opt: !0
        },
        {
            no: 32,
            name: "parallel_tool_calls_complete",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 34,
            name: "stars_feedback_request",
            kind: "message",
            T: z6o,
            opt: !0
        },
        {
            no: 35,
            name: "model_provider_request_json",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), H6o = x.makeMessageType("aiserver.v1.StreamUnifiedChatResponse.UsedCode", ()=>[
        {
            no: 1,
            name: "code_results",
            kind: "message",
            T: Q9,
            repeated: !0
        }
    ], {
    localName: "StreamUnifiedChatResponse_UsedCode"
}), W6o = x.makeMessageType("aiserver.v1.StreamUnifiedChatResponse.ChunkIdentity", ()=>[
        {
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line",
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
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "chunk_type",
            kind: "enum",
            T: x.getEnumType(Bni)
        }
    ], {
    localName: "StreamUnifiedChatResponse_ChunkIdentity"
}), G6o = x.makeMessageType("aiserver.v1.StreamUnifiedChatResponse.FinalToolResult", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: B3
        }
    ], {
    localName: "StreamUnifiedChatResponse_FinalToolResult"
}), q6o = x.makeMessageType("aiserver.v1.StreamUnifiedChatResponse.ImageDescription", ()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "image_uuid",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamUnifiedChatResponse_ImageDescription"
}), l1r = x.makeMessageType("aiserver.v1.ContextWindowStatus", ()=>[
        {
            no: 1,
            name: "percentage_remaining",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "tokens_used",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "token_limit",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "percentage_remaining_float",
            kind: "scalar",
            T: 2,
            opt: !0
        }
    ]), z6o = x.makeMessageType("aiserver.v1.StarsFeedbackRequest", ()=>[
        {
            no: 1,
            name: "bubble_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), V6o = x.makeMessageType("aiserver.v1.ConversationSummaryStarter", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), Umn = x.makeMessageType("aiserver.v1.ServiceStatusUpdate", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "codicon",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "action_to_run_on_status_update",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), jmn = x.makeMessageType("aiserver.v1.SymbolLink", ()=>[
        {
            no: 1,
            name: "symbol_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "symbol_search_string",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "rough_line_number",
            kind: "scalar",
            T: 5
        }
    ]), $ni = x.makeMessageType("aiserver.v1.FileLink", ()=>[
        {
            no: 1,
            name: "display_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]), K6o = x.makeMessageType("aiserver.v1.RedDiff", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "red_ranges",
            kind: "message",
            T: $ke,
            repeated: !0
        },
        {
            no: 3,
            name: "red_ranges_reversed",
            kind: "message",
            T: $ke,
            repeated: !0
        },
        {
            no: 4,
            name: "start_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "end_hash",
            kind: "scalar",
            T: 9
        }
    ]), Y6o = x.makeMessageType("aiserver.v1.ConversationMessageHeader", ()=>[
        {
            no: 1,
            name: "bubble_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "server_bubble_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "type",
            kind: "enum",
            T: x.getEnumType(bs)
        }
    ]), Hni = x.makeMessageType("aiserver.v1.DiffFile", ()=>[
        {
            no: 1,
            name: "file_details",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_name",
            kind: "scalar",
            T: 9
        }
    ]), X6o = x.makeMessageType("aiserver.v1.ViewableCommitProps", ()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "files",
            kind: "message",
            T: Hni,
            repeated: !0
        }
    ]), Z6o = x.makeMessageType("aiserver.v1.ViewablePRProps", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "files",
            kind: "message",
            T: Hni,
            repeated: !0
        }
    ]), Q6o = x.makeMessageType("aiserver.v1.ViewableDiffProps", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: Hni,
            repeated: !0
        },
        {
            no: 2,
            name: "diff_preface",
            kind: "scalar",
            T: 9
        }
    ]), c1r = x.makeMessageType("aiserver.v1.ViewableGitContext", ()=>[
        {
            no: 1,
            name: "commit_data",
            kind: "message",
            T: X6o,
            opt: !0
        },
        {
            no: 2,
            name: "pull_request_data",
            kind: "message",
            T: Z6o,
            opt: !0
        },
        {
            no: 3,
            name: "diff_data",
            kind: "message",
            T: Q6o,
            repeated: !0
        }
    ]), wy = x.makeMessageType("aiserver.v1.ConversationMessage", ()=>[
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
            T: x.getEnumType(bs)
        },
        {
            no: 3,
            name: "attached_code_chunks",
            kind: "message",
            T: Yke,
            repeated: !0
        },
        {
            no: 4,
            name: "codebase_context_chunks",
            kind: "message",
            T: rL,
            repeated: !0
        },
        {
            no: 5,
            name: "commits",
            kind: "message",
            T: G$e,
            repeated: !0
        },
        {
            no: 6,
            name: "pull_requests",
            kind: "message",
            T: h1r,
            repeated: !0
        },
        {
            no: 7,
            name: "git_diffs",
            kind: "message",
            T: xj,
            repeated: !0
        },
        {
            no: 8,
            name: "assistant_suggested_diffs",
            kind: "message",
            T: k4o,
            repeated: !0
        },
        {
            no: 9,
            name: "interpreter_results",
            kind: "message",
            T: S4o,
            repeated: !0
        },
        {
            no: 10,
            name: "images",
            kind: "message",
            T: Hke,
            repeated: !0
        },
        {
            no: 11,
            name: "attached_folders",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 12,
            name: "approximate_lint_errors",
            kind: "message",
            T: o4o,
            repeated: !0
        },
        {
            no: 13,
            name: "bubble_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 32,
            name: "server_bubble_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 14,
            name: "attached_folders_new",
            kind: "message",
            T: b4o,
            repeated: !0
        },
        {
            no: 15,
            name: "lints",
            kind: "message",
            T: a4o,
            repeated: !0
        },
        {
            no: 16,
            name: "user_responses_to_suggested_code_blocks",
            kind: "message",
            T: T4o,
            repeated: !0
        },
        {
            no: 17,
            name: "relevant_files",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 18,
            name: "tool_results",
            kind: "message",
            T: u1r,
            repeated: !0
        },
        {
            no: 19,
            name: "notepads",
            kind: "message",
            T: n4o,
            repeated: !0
        },
        {
            no: 20,
            name: "is_capability_iteration",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 21,
            name: "capabilities",
            kind: "message",
            T: dfd,
            repeated: !0
        },
        {
            no: 22,
            name: "edit_trail_contexts",
            kind: "message",
            T: s4o,
            repeated: !0
        },
        {
            no: 23,
            name: "suggested_code_blocks",
            kind: "message",
            T: C4o,
            repeated: !0
        },
        {
            no: 24,
            name: "diffs_for_compressing_files",
            kind: "message",
            T: K6o,
            repeated: !0
        },
        {
            no: 25,
            name: "multi_file_linter_errors",
            kind: "message",
            T: phd,
            repeated: !0
        },
        {
            no: 26,
            name: "diff_histories",
            kind: "message",
            T: A4o,
            repeated: !0
        },
        {
            no: 27,
            name: "recently_viewed_files",
            kind: "message",
            T: Yke,
            repeated: !0
        },
        {
            no: 28,
            name: "recent_locations_history",
            kind: "message",
            T: l4o,
            repeated: !0
        },
        {
            no: 29,
            name: "is_agentic",
            kind: "scalar",
            T: 8
        },
        {
            no: 30,
            name: "file_diff_trajectories",
            kind: "message",
            T: jni,
            repeated: !0
        },
        {
            no: 31,
            name: "conversation_summary",
            kind: "message",
            T: Fve,
            opt: !0
        },
        {
            no: 33,
            name: "existed_subsequent_terminal_command",
            kind: "scalar",
            T: 8
        },
        {
            no: 34,
            name: "existed_previous_terminal_command",
            kind: "scalar",
            T: 8
        },
        {
            no: 35,
            name: "docs_references",
            kind: "message",
            T: Fmn,
            repeated: !0
        },
        {
            no: 36,
            name: "web_references",
            kind: "message",
            T: r1r,
            repeated: !0
        },
        {
            no: 75,
            name: "ai_web_search_results",
            kind: "message",
            T: s1r,
            repeated: !0
        },
        {
            no: 37,
            name: "git_context",
            kind: "message",
            T: c1r,
            opt: !0
        },
        {
            no: 38,
            name: "attached_folders_list_dir_results",
            kind: "message",
            T: oti,
            repeated: !0
        },
        {
            no: 39,
            name: "cached_conversation_summary",
            kind: "message",
            T: Fve,
            opt: !0
        },
        {
            no: 40,
            name: "human_changes",
            kind: "message",
            T: u4o,
            repeated: !0
        },
        {
            no: 41,
            name: "attached_human_changes",
            kind: "scalar",
            T: 8
        },
        {
            no: 42,
            name: "summarized_composers",
            kind: "message",
            T: i4o,
            repeated: !0
        },
        {
            no: 43,
            name: "cursor_rules",
            kind: "message",
            T: R$e,
            repeated: !0
        },
        {
            no: 44,
            name: "context_pieces",
            kind: "message",
            T: a1r,
            repeated: !0
        },
        {
            no: 45,
            name: "thinking",
            kind: "message",
            T: ubt,
            opt: !0
        },
        {
            no: 46,
            name: "all_thinking_blocks",
            kind: "message",
            T: ubt,
            repeated: !0
        },
        {
            no: 85,
            name: "thinking_style",
            kind: "enum",
            T: x.getEnumType(utt),
            opt: !0
        },
        {
            no: 47,
            name: "unified_mode",
            kind: "enum",
            T: x.getEnumType(ctt),
            opt: !0
        },
        {
            no: 98,
            name: "agent_mode",
            kind: "enum",
            T: x.getEnumType(t2),
            opt: !0
        },
        {
            no: 48,
            name: "diffs_since_last_apply",
            kind: "message",
            T: d4o,
            repeated: !0
        },
        {
            no: 49,
            name: "deleted_files",
            kind: "message",
            T: h4o,
            repeated: !0
        },
        {
            no: 50,
            name: "usage_uuid",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 51,
            name: "supported_tools",
            kind: "enum",
            T: x.getEnumType(Ct),
            repeated: !0
        },
        {
            no: 52,
            name: "current_file_location_data",
            kind: "message",
            T: d1r,
            opt: !0
        },
        {
            no: 53,
            name: "edit_tool_supports_search_and_replace",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 54,
            name: "last_terminal_cwd",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 55,
            name: "user_explicitly_asked_to_generate_cursor_rules",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 56,
            name: "console_logs",
            kind: "message",
            T: Nhd,
            repeated: !0
        },
        {
            no: 57,
            name: "rich_text",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 58,
            name: "knowledge_items",
            kind: "message",
            T: Gni,
            repeated: !0
        },
        {
            no: 59,
            name: "ui_element_picked",
            kind: "message",
            T: Lhd,
            repeated: !0
        },
        {
            no: 60,
            name: "user_explicitly_asked_to_add_to_knowledge_base",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 61,
            name: "documentation_selections",
            kind: "message",
            T: p4o,
            repeated: !0
        },
        {
            no: 62,
            name: "external_links",
            kind: "message",
            T: Rpn,
            repeated: !0
        },
        {
            no: 63,
            name: "use_web",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 64,
            name: "project_layouts",
            kind: "message",
            T: f1r,
            repeated: !0
        },
        {
            no: 65,
            name: "thinking_duration_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 88,
            name: "step_duration_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 66,
            name: "subagent_return",
            kind: "message",
            T: g1r,
            opt: !0
        },
        {
            no: 67,
            name: "is_simple_looping_message",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 68,
            name: "capability_contexts",
            kind: "message",
            T: Afd,
            repeated: !0
        },
        {
            no: 69,
            name: "checkpoint_commit_hash",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 70,
            name: "git_status_raw",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 71,
            name: "todos",
            kind: "message",
            T: yM,
            repeated: !0
        },
        {
            no: 72,
            name: "is_review_edits_followup",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 74,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 73,
            name: "ide_editors_state",
            kind: "message",
            T: r9t,
            opt: !0
        },
        {
            no: 76,
            name: "context_window_status",
            kind: "message",
            T: l1r,
            opt: !0
        },
        {
            no: 77,
            name: "is_plan_execution",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 78,
            name: "created_at",
            kind: "scalar",
            T: 9
        },
        {
            no: 79,
            name: "model_info",
            kind: "message",
            T: hhd
        },
        {
            no: 80,
            name: "is_quick_search_query",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 81,
            name: "plan_update",
            kind: "message",
            T: m4o,
            opt: !0
        },
        {
            no: 82,
            name: "is_simulated_msg",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 95,
            name: "simulated_msg_reason",
            kind: "enum",
            T: x.getEnumType(hc),
            opt: !0
        },
        {
            no: 97,
            name: "simulated_message_metadata",
            kind: "message",
            T: g4o,
            opt: !0
        },
        {
            no: 83,
            name: "mcp_descriptors",
            kind: "message",
            T: f4o,
            repeated: !0
        },
        {
            no: 84,
            name: "workspace_project_dir",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 87,
            name: "workspace_uris",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 86,
            name: "debug_mode_config",
            kind: "message",
            T: Imn,
            opt: !0
        },
        {
            no: 89,
            name: "text_blob_id",
            kind: "scalar",
            T: 12,
            opt: !0
        },
        {
            no: 90,
            name: "rich_text_blob_id",
            kind: "scalar",
            T: 12,
            opt: !0
        },
        {
            no: 91,
            name: "cursor_commands",
            kind: "message",
            T: H$e,
            repeated: !0
        },
        {
            no: 92,
            name: "cursor_commands_explicitly_set",
            kind: "scalar",
            T: 8
        },
        {
            no: 93,
            name: "past_chats",
            kind: "message",
            T: xni,
            repeated: !0
        },
        {
            no: 94,
            name: "past_chats_explicitly_set",
            kind: "scalar",
            T: 8
        },
        {
            no: 96,
            name: "triggering_user_info",
            kind: "message",
            T: NSr,
            opt: !0
        },
        {
            no: 99,
            name: "turn_steer",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 100,
            name: "sent_by_agent_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 101,
            name: "sent_by_voice_call",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 102,
            name: "sender",
            kind: "message",
            T: NFo,
            opt: !0
        }
    ]), bs = x.makeEnum("aiserver.v1.ConversationMessage.MessageType", [
    {
        no: 0,
        name: "MESSAGE_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MESSAGE_TYPE_HUMAN",
        localName: "HUMAN"
    },
    {
        no: 2,
        name: "MESSAGE_TYPE_AI",
        localName: "AI"
    }
]), utt = x.makeEnum("aiserver.v1.ConversationMessage.ThinkingStyle", [
    {
        no: 0,
        name: "THINKING_STYLE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "THINKING_STYLE_DEFAULT",
        localName: "DEFAULT"
    },
    {
        no: 2,
        name: "THINKING_STYLE_CODEX",
        localName: "CODEX"
    },
    {
        no: 3,
        name: "THINKING_STYLE_GPT5",
        localName: "GPT5"
    }
]), Yke = x.makeMessageType("aiserver.v1.ConversationMessage.CodeChunk", ()=>[
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
            name: "summarization_strategy",
            kind: "enum",
            T: x.getEnumType(Wni),
            opt: !0
        },
        {
            no: 5,
            name: "language_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "intent",
            kind: "enum",
            T: x.getEnumType(rz),
            opt: !0
        },
        {
            no: 7,
            name: "is_final_version",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "is_first_version",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 9,
            name: "contents_are_missing",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 10,
            name: "is_only_included_from_folder",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 11,
            name: "code_chunk_git_context",
            kind: "message",
            T: J6o,
            opt: !0
        }
    ], {
    localName: "ConversationMessage_CodeChunk"
}), rz = x.makeEnum("aiserver.v1.ConversationMessage.CodeChunk.Intent", [
    {
        no: 0,
        name: "INTENT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "INTENT_COMPOSER_FILE",
        localName: "COMPOSER_FILE"
    },
    {
        no: 2,
        name: "INTENT_COMPRESSED_COMPOSER_FILE",
        localName: "COMPRESSED_COMPOSER_FILE"
    },
    {
        no: 3,
        name: "INTENT_RECENTLY_VIEWED_FILE",
        localName: "RECENTLY_VIEWED_FILE"
    },
    {
        no: 4,
        name: "INTENT_OUTLINE",
        localName: "OUTLINE"
    },
    {
        no: 5,
        name: "INTENT_MENTIONED_FILE",
        localName: "MENTIONED_FILE"
    },
    {
        no: 6,
        name: "INTENT_CODE_SELECTION",
        localName: "CODE_SELECTION"
    },
    {
        no: 7,
        name: "INTENT_AI_EDITED_FILE",
        localName: "AI_EDITED_FILE"
    },
    {
        no: 8,
        name: "INTENT_VISIBLE_FILE",
        localName: "VISIBLE_FILE"
    },
    {
        no: 9,
        name: "INTENT_TERMINAL_SELECTION",
        localName: "TERMINAL_SELECTION"
    }
]), Wni = x.makeEnum("aiserver.v1.ConversationMessage.CodeChunk.SummarizationStrategy", [
    {
        no: 0,
        name: "SUMMARIZATION_STRATEGY_NONE_UNSPECIFIED",
        localName: "NONE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "SUMMARIZATION_STRATEGY_SUMMARIZED",
        localName: "SUMMARIZED"
    },
    {
        no: 2,
        name: "SUMMARIZATION_STRATEGY_EMBEDDED",
        localName: "EMBEDDED"
    }
]), J6o = x.makeMessageType("aiserver.v1.ConversationMessage.CodeChunk.CodeChunkGitContext", ()=>[
        {
            no: 1,
            name: "git_info",
            kind: "message",
            T: e4o,
            repeated: !0
        }
    ], {
    localName: "ConversationMessage_CodeChunk_CodeChunkGitContext"
}), e4o = x.makeMessageType("aiserver.v1.ConversationMessage.CodeChunk.CodeChunkGitContext.CodeChunkGitInfo", ()=>[
        {
            no: 1,
            name: "commit",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "author",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "date",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo"
}), u1r = x.makeMessageType("aiserver.v1.ConversationMessage.ToolResult", ()=>[
        {
            no: 1,
            name: "tool_call_id",
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
            name: "tool_index",
            kind: "scalar",
            T: 13
        },
        {
            no: 12,
            name: "model_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "args",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "raw_args",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "attached_code_chunks",
            kind: "message",
            T: Yke,
            repeated: !0
        },
        {
            no: 7,
            name: "content",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "result",
            kind: "message",
            T: B3
        },
        {
            no: 9,
            name: "error",
            kind: "message",
            T: Mve,
            opt: !0
        },
        {
            no: 10,
            name: "images",
            kind: "message",
            T: Hke,
            repeated: !0
        },
        {
            no: 11,
            name: "tool_call",
            kind: "message",
            T: Gke,
            opt: !0
        },
        {
            no: 13,
            name: "started_at_ms",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 14,
            name: "completed_at_ms",
            kind: "scalar",
            T: 4,
            opt: !0
        }
    ], {
    localName: "ConversationMessage_ToolResult"
}), Tkd = x.makeMessageType("aiserver.v1.ConversationMessage.MultiRangeCodeChunk", ()=>[
        {
            no: 1,
            name: "ranges",
            kind: "message",
            T: t4o,
            repeated: !0
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ConversationMessage_MultiRangeCodeChunk"
}), t4o = x.makeMessageType("aiserver.v1.ConversationMessage.MultiRangeCodeChunk.RangeWithPriority", ()=>[
        {
            no: 1,
            name: "range",
            kind: "message",
            T: $ke
        },
        {
            no: 2,
            name: "priority",
            kind: "scalar",
            T: 1
        }
    ], {
    localName: "ConversationMessage_MultiRangeCodeChunk_RangeWithPriority"
}), n4o = x.makeMessageType("aiserver.v1.ConversationMessage.NotepadContext", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "attached_code_chunks",
            kind: "message",
            T: Yke,
            repeated: !0
        },
        {
            no: 4,
            name: "attached_folders",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "commits",
            kind: "message",
            T: G$e,
            repeated: !0
        },
        {
            no: 6,
            name: "pull_requests",
            kind: "message",
            T: h1r,
            repeated: !0
        },
        {
            no: 7,
            name: "git_diffs",
            kind: "message",
            T: xj,
            repeated: !0
        },
        {
            no: 8,
            name: "images",
            kind: "message",
            T: Hke,
            repeated: !0
        }
    ], {
    localName: "ConversationMessage_NotepadContext"
}), i4o = x.makeMessageType("aiserver.v1.ConversationMessage.ComposerContext", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "conversation_summary",
            kind: "message",
            T: Fve
        }
    ], {
    localName: "ConversationMessage_ComposerContext"
}), r4o = x.makeMessageType("aiserver.v1.ConversationMessage.EditLocation", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "range",
            kind: "message",
            T: $ke
        },
        {
            no: 4,
            name: "initial_range",
            kind: "message",
            T: $ke
        },
        {
            no: 5,
            name: "context_lines",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "text_range",
            kind: "message",
            T: $ke
        }
    ], {
    localName: "ConversationMessage_EditLocation"
}), s4o = x.makeMessageType("aiserver.v1.ConversationMessage.EditTrailContext", ()=>[
        {
            no: 1,
            name: "unique_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "edit_trail_sorted",
            kind: "message",
            T: r4o,
            repeated: !0
        }
    ], {
    localName: "ConversationMessage_EditTrailContext"
}), o4o = x.makeMessageType("aiserver.v1.ConversationMessage.ApproximateLintError", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
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
        },
        {
            no: 5,
            name: "start_column",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "end_column",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ConversationMessage_ApproximateLintError"
}), a4o = x.makeMessageType("aiserver.v1.ConversationMessage.Lints", ()=>[
        {
            no: 1,
            name: "lints",
            kind: "message",
            T: Lmn
        },
        {
            no: 2,
            name: "chat_codeblock_model_value",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ConversationMessage_Lints"
}), l4o = x.makeMessageType("aiserver.v1.ConversationMessage.RecentLocation", ()=>[
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
            T: 5
        }
    ], {
    localName: "ConversationMessage_RecentLocation"
}), c4o = x.makeMessageType("aiserver.v1.ConversationMessage.RenderedDiff", ()=>[
        {
            no: 1,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end_line_number_exclusive",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "before_context_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "removed_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "added_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 6,
            name: "after_context_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "ConversationMessage_RenderedDiff"
}), u4o = x.makeMessageType("aiserver.v1.ConversationMessage.HumanChange", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "rendered_diffs",
            kind: "message",
            T: c4o,
            repeated: !0
        }
    ], {
    localName: "ConversationMessage_HumanChange"
}), ubt = x.makeMessageType("aiserver.v1.ConversationMessage.Thinking", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "signature",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "redacted_thinking",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "is_last_thinking_chunk",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "ConversationMessage_Thinking"
}), d4o = x.makeMessageType("aiserver.v1.ConversationMessage.DiffSinceLastApply", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diff",
            kind: "message",
            T: j_t,
            opt: !0
        },
        {
            no: 4,
            name: "is_accepted",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "is_rejected",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "last_apply_chained_from_n_human_messages_ago",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ], {
    localName: "ConversationMessage_DiffSinceLastApply"
}), h4o = x.makeMessageType("aiserver.v1.ConversationMessage.DeletedFile", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ConversationMessage_DeletedFile"
}), Gni = x.makeMessageType("aiserver.v1.ConversationMessage.KnowledgeItem", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "knowledge",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "knowledge_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "is_generated",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "ConversationMessage_KnowledgeItem"
}), p4o = x.makeMessageType("aiserver.v1.ConversationMessage.DocumentationSelection", ()=>[
        {
            no: 1,
            name: "doc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ConversationMessage_DocumentationSelection"
}), r9t = x.makeMessageType("aiserver.v1.ConversationMessage.IdeEditorsState", ()=>[
        {
            no: 1,
            name: "is_pill_displayed",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "visible_file_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "recently_viewed_file_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "visible_files",
            kind: "message",
            T: s9t,
            repeated: !0
        },
        {
            no: 5,
            name: "recently_viewed_files",
            kind: "message",
            T: s9t,
            repeated: !0
        }
    ], {
    localName: "ConversationMessage_IdeEditorsState"
}), s9t = x.makeMessageType("aiserver.v1.ConversationMessage.IdeEditorsState.File", ()=>[
        {
            no: 1,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_currently_focused",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "current_line_number",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "current_line_text",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "line_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "absolute_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "ConversationMessage_IdeEditorsState_File"
}), m4o = x.makeMessageType("aiserver.v1.ConversationMessage.PlanUpdate", ()=>[
        {
            no: 1,
            name: "current_plan",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_first_time_seen",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "ConversationMessage_PlanUpdate"
}), g4o = x.makeMessageType("aiserver.v1.ConversationMessage.SimulatedMessageMetadata", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "task_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "fsd_finding_action",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "subscription_source",
            kind: "enum",
            T: x.getEnumType(g7),
            opt: !0
        },
        {
            no: 6,
            name: "subscription_event_display",
            kind: "message",
            T: RFo,
            opt: !0
        },
        {
            no: 7,
            name: "interaction_response",
            kind: "message",
            T: AFo,
            opt: !0
        }
    ], {
    localName: "ConversationMessage_SimulatedMessageMetadata"
}), f4o = x.makeMessageType("aiserver.v1.ConversationMessage.McpDescriptor", ()=>[
        {
            no: 1,
            name: "folder_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "server_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "tools",
            kind: "message",
            T: v4o,
            repeated: !0
        },
        {
            no: 4,
            name: "server_use_instructions",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "ConversationMessage_McpDescriptor"
}), v4o = x.makeMessageType("aiserver.v1.ConversationMessage.McpDescriptor.Tool", ()=>[
        {
            no: 1,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "ConversationMessage_McpDescriptor_Tool"
}), d1r = x.makeMessageType("aiserver.v1.CurrentFileLocationData", ()=>[
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
            T: 5
        },
        {
            no: 3,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), Ekd = x.makeMessageType("aiserver.v1.SearchInfo", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: _4o,
            repeated: !0
        }
    ]), _4o = x.makeMessageType("aiserver.v1.SearchFileInfo", ()=>[
        {
            no: 1,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), b4o = x.makeMessageType("aiserver.v1.FolderInfo", ()=>[
        {
            no: 1,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: y4o,
            repeated: !0
        }
    ]), y4o = x.makeMessageType("aiserver.v1.FolderFileInfo", ()=>[
        {
            no: 1,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]), S4o = x.makeMessageType("aiserver.v1.InterpreterResult", ()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]), k4o = x.makeMessageType("aiserver.v1.SimpleFileDiff", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "chunks",
            kind: "message",
            T: w4o,
            repeated: !0
        }
    ]), w4o = x.makeMessageType("aiserver.v1.SimpleFileDiff.Chunk", ()=>[
        {
            no: 1,
            name: "old_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "new_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "old_range",
            kind: "message",
            T: aW
        },
        {
            no: 4,
            name: "new_range",
            kind: "message",
            T: aW
        }
    ], {
    localName: "SimpleFileDiff_Chunk"
}), G$e = x.makeMessageType("aiserver.v1.Commit", ()=>[
        {
            no: 1,
            name: "sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
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
            name: "diff",
            kind: "message",
            T: Uet,
            repeated: !0
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
        }
    ]), h1r = x.makeMessageType("aiserver.v1.PullRequest", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "diff",
            kind: "message",
            T: Uet,
            repeated: !0
        },
        {
            no: 4,
            name: "id",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "number",
            kind: "scalar",
            T: 3
        }
    ]), C4o = x.makeMessageType("aiserver.v1.SuggestedCodeBlock", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]), T4o = x.makeMessageType("aiserver.v1.UserResponseToSuggestedCodeBlock", ()=>[
        {
            no: 1,
            name: "user_response_type",
            kind: "enum",
            T: x.getEnumType(E4o)
        },
        {
            no: 2,
            name: "file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "user_modifications_to_suggested_code_blocks",
            kind: "message",
            T: Uet,
            opt: !0
        }
    ]), E4o = x.makeEnum("aiserver.v1.UserResponseToSuggestedCodeBlock.UserResponseType", [
    {
        no: 0,
        name: "USER_RESPONSE_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "USER_RESPONSE_TYPE_ACCEPT",
        localName: "ACCEPT"
    },
    {
        no: 2,
        name: "USER_RESPONSE_TYPE_REJECT",
        localName: "REJECT"
    },
    {
        no: 3,
        name: "USER_RESPONSE_TYPE_MODIFY",
        localName: "MODIFY"
    }
]), I4o = x.makeMessageType("aiserver.v1.ContextRerankingCandidateFile", ()=>[
        {
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_content",
            kind: "scalar",
            T: 9
        }
    ]), o9t = x.makeMessageType("aiserver.v1.ComposerFileDiff", ()=>[
        {
            no: 1,
            name: "chunks",
            kind: "message",
            T: $mn,
            repeated: !0
        },
        {
            no: 2,
            name: "editor",
            kind: "enum",
            T: x.getEnumType(x4o)
        },
        {
            no: 3,
            name: "hit_timeout",
            kind: "scalar",
            T: 8
        }
    ]), x4o = x.makeEnum("aiserver.v1.ComposerFileDiff.Editor", [
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
]), $mn = x.makeMessageType("aiserver.v1.ComposerFileDiff.ChunkDiff", ()=>[
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
    localName: "ComposerFileDiff_ChunkDiff"
}), A4o = x.makeMessageType("aiserver.v1.DiffHistoryData", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diffs",
            kind: "message",
            T: o9t,
            repeated: !0
        },
        {
            no: 3,
            name: "timestamp",
            kind: "scalar",
            T: 1
        },
        {
            no: 4,
            name: "unique_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "start_to_end_diff",
            kind: "message",
            T: o9t
        }
    ]), p1r = x.makeMessageType("aiserver.v1.WarmStreamUnifiedChatWithToolsResponse", []), R4o = x.makeMessageType("aiserver.v1.CodeChunkContextInclusionInfoV2", ()=>[
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
            name: "end_line_number_inclusive",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "intent",
            kind: "enum",
            T: x.getEnumType(P4o)
        },
        {
            no: 10,
            name: "inclusion_type",
            kind: "enum",
            T: x.getEnumType(M4o)
        },
        {
            no: 6,
            name: "tooltip_text",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "pill_is_dashed",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "pill_sub_codicon_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "detail_text",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "codicon_name",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), P4o = x.makeEnum("aiserver.v1.CodeChunkContextInclusionInfoV2.Intent", [
    {
        no: 0,
        name: "INTENT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "INTENT_FILE",
        localName: "FILE"
    },
    {
        no: 2,
        name: "INTENT_SELECTION",
        localName: "SELECTION"
    }
]), M4o = x.makeEnum("aiserver.v1.CodeChunkContextInclusionInfoV2.InclusionType", [
    {
        no: 0,
        name: "INCLUSION_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "INCLUSION_TYPE_FULL",
        localName: "FULL"
    },
    {
        no: 2,
        name: "INCLUSION_TYPE_OUTLINE",
        localName: "OUTLINE"
    },
    {
        no: 3,
        name: "INCLUSION_TYPE_FILENAME",
        localName: "FILENAME"
    }
]), D4o = x.makeMessageType("aiserver.v1.GetPromptDryRunResponse", ()=>[
        {
            no: 1,
            name: "code_chunks",
            kind: "message",
            T: N4o,
            repeated: !0
        },
        {
            no: 3,
            name: "user_message_token_limit",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "user_message_token_count",
            kind: "message",
            T: m1r
        },
        {
            no: 5,
            name: "full_conversation_token_count",
            kind: "message",
            T: m1r
        },
        {
            no: 6,
            name: "code_chunks_v2",
            kind: "message",
            T: R4o,
            repeated: !0
        },
        {
            no: 2,
            name: "folder_exclusion_tooltip",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "bar_fraction",
            kind: "scalar",
            T: 2
        },
        {
            no: 8,
            name: "did_bar_overflow",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "should_show_new_chat_hint",
            kind: "scalar",
            T: 8
        }
    ]), m1r = x.makeMessageType("aiserver.v1.GetPromptDryRunResponse.TokenCount", ()=>[
        {
            no: 1,
            name: "is_over_token_limit",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "num_tokens",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ], {
    localName: "GetPromptDryRunResponse_TokenCount"
}), N4o = x.makeMessageType("aiserver.v1.CodeChunkContextInclusionInfo", ()=>[
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
            name: "end_line_number_inclusive",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "inclusion_type",
            kind: "enum",
            T: x.getEnumType(L4o)
        },
        {
            no: 5,
            name: "full_file_token_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "prompt_token_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 11,
            name: "full_file_tokens_count",
            kind: "message",
            T: F4o
        },
        {
            no: 7,
            name: "exclusion_tooltip",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "intent",
            kind: "enum",
            T: x.getEnumType(O4o)
        },
        {
            no: 9,
            name: "chunk_is_from_last_user_message",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "is_compressed",
            kind: "scalar",
            T: 8
        }
    ]), L4o = x.makeEnum("aiserver.v1.CodeChunkContextInclusionInfo.InclusionType", [
    {
        no: 0,
        name: "INCLUSION_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "INCLUSION_TYPE_FULL",
        localName: "FULL"
    },
    {
        no: 2,
        name: "INCLUSION_TYPE_OUTLINE",
        localName: "OUTLINE"
    },
    {
        no: 3,
        name: "INCLUSION_TYPE_FILENAME",
        localName: "FILENAME"
    }
]), O4o = x.makeEnum("aiserver.v1.CodeChunkContextInclusionInfo.Intent", [
    {
        no: 0,
        name: "INTENT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "INTENT_FILE",
        localName: "FILE"
    },
    {
        no: 2,
        name: "INTENT_SELECTION",
        localName: "SELECTION"
    }
]), F4o = x.makeMessageType("aiserver.v1.CodeChunkContextInclusionInfo.TokenCount", ()=>[
        {
            no: 1,
            name: "is_too_large_to_count",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "num_tokens",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "CodeChunkContextInclusionInfo_TokenCount"
}), g1r = x.makeMessageType("aiserver.v1.SubagentReturnCall", ()=>[
        {
            no: 1,
            name: "subagent_type",
            kind: "enum",
            T: x.getEnumType(Yse)
        },
        {
            no: 2,
            name: "deep_search_return_value",
            kind: "message",
            T: j4o,
            oneof: "return_value"
        },
        {
            no: 3,
            name: "fix_lints_return_value",
            kind: "message",
            T: W4o,
            oneof: "return_value"
        },
        {
            no: 4,
            name: "task_return_value",
            kind: "message",
            T: q4o,
            oneof: "return_value"
        },
        {
            no: 5,
            name: "spec_return_value",
            kind: "message",
            T: V4o,
            oneof: "return_value"
        }
    ]), B4o = x.makeMessageType("aiserver.v1.SubagentInfo", ()=>[
        {
            no: 1,
            name: "subagent_type",
            kind: "enum",
            T: x.getEnumType(Yse)
        },
        {
            no: 2,
            name: "subagent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "deep_search_params",
            kind: "message",
            T: U4o,
            oneof: "params"
        },
        {
            no: 4,
            name: "fix_lints_params",
            kind: "message",
            T: H4o,
            oneof: "params"
        },
        {
            no: 6,
            name: "task_params",
            kind: "message",
            T: G4o,
            oneof: "params"
        },
        {
            no: 7,
            name: "spec_params",
            kind: "message",
            T: z4o,
            oneof: "params"
        },
        {
            no: 5,
            name: "parent_request_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), U4o = x.makeMessageType("aiserver.v1.DeepSearchSubagentParams", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]), j4o = x.makeMessageType("aiserver.v1.DeepSearchSubagentReturnValue", ()=>[
        {
            no: 1,
            name: "context_items",
            kind: "message",
            T: $4o,
            repeated: !0
        }
    ]), $4o = x.makeMessageType("aiserver.v1.DeepSearchSubagentReturnValue.ContextItem", ()=>[
        {
            no: 1,
            name: "file",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line_range",
            kind: "message",
            T: aW,
            opt: !0
        },
        {
            no: 3,
            name: "explanation",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "DeepSearchSubagentReturnValue_ContextItem"
}), H4o = x.makeMessageType("aiserver.v1.FixLintsSubagentParams", []), W4o = x.makeMessageType("aiserver.v1.FixLintsSubagentReturnValue", []), G4o = x.makeMessageType("aiserver.v1.TaskSubagentParams", ()=>[
        {
            no: 1,
            name: "task_description",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "allowed_write_directories",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), q4o = x.makeMessageType("aiserver.v1.TaskSubagentReturnValue", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ]), z4o = x.makeMessageType("aiserver.v1.SpecSubagentParams", ()=>[
        {
            no: 1,
            name: "plan",
            kind: "scalar",
            T: 9
        }
    ]), V4o = x.makeMessageType("aiserver.v1.SpecSubagentReturnValue", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "string_replacements",
            kind: "message",
            T: K4o,
            repeated: !0
        }
    ]), K4o = x.makeMessageType("aiserver.v1.StringReplacement", ()=>[
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
    ]), f1r = x.makeMessageType("aiserver.v1.ProjectLayout", ()=>[
        {
            no: 1,
            name: "root_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "message",
            T: v1r
        },
        {
            no: 3,
            name: "list_dir_v2_result",
            kind: "message",
            T: tmn,
            opt: !0
        }
    ]), v1r = x.makeMessageType("aiserver.v1.ProjectLayoutDirectoryContent", ()=>[
        {
            no: 1,
            name: "directories",
            kind: "message",
            T: Y4o,
            repeated: !0
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: _1r,
            repeated: !0
        },
        {
            no: 3,
            name: "total_files",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "total_subfolders",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 5,
            name: "hidden_files",
            kind: "message",
            T: _1r,
            repeated: !0
        }
    ]), Y4o = x.makeMessageType("aiserver.v1.ProjectLayoutDirectory", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "message",
            T: v1r
        }
    ]), _1r = x.makeMessageType("aiserver.v1.ProjectLayoutFile", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]), X4o = x.makeMessageType("aiserver.v1.ConvertOALToNALRequest", ()=>[
        {
            no: 1,
            name: "request",
            kind: "message",
            T: h5e
        },
        {
            no: 2,
            name: "file_states",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: z1d
            }
        }
    ]), Z4o = x.makeMessageType("aiserver.v1.ConvertOALToNALResponse", ()=>[
        {
            no: 1,
            name: "conversation_state",
            kind: "message",
            T: nf
        },
        {
            no: 2,
            name: "blobs",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 12
            }
        },
        {
            no: 3,
            name: "bubble_checkpoints",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: nf
            }
        }
    ]);

}
