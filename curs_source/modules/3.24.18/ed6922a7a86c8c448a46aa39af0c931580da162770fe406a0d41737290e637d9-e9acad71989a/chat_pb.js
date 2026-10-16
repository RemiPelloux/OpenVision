import { G3, Hm, UE, Y4i, YVs, fDu, jVs, qVs, xd, zd } from "./agent_pb.js";
import { Hpu, Jm, wpu } from "./composer_pb.js";
import { hUi, yjs } from "./docs_pb.js";
import { qP } from "./empty_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { GUt, YO, nX, w1 } from "./repository_pb.js";
import { Bj, J7t } from "./request_context_exec_pb.js";
import { MMe, NDn, jW } from "./selected_context_pb.js";
import { d$t, u$t } from "./shadow_workspace_pb.js";
import { DI, KBs, Kue, M3i, YBs, dIn, l8t, mse, nt, qZe, ql, xR, zZe } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
import { A3t, AVc, C5e, Gle, JSi, JVc, OO, QVc, RVc, Vle, ZC, c6, ffe, hu, kD, oN, wRe, xf, y5, zSi } from "./utils_pb.js";
var qDn, ade, Ojs, gUi, Fjs, Bjs, Ujs, LMe, $js, Hjs, fUi, ZDu, Wjs, Rse, Gjs, vUi, zDn, _Ui, bUi, h$t, yUi, Vjs, jjs, SUi, qjs, zjs, Kjs, Yjs, KDn, Xjs, U0e, x4e, Zjs, Qjs, Jjs, eqs, tqs, nqs, iqs, rqs, kUi, sqs, p$t, oqs, aqs, cqs, lqs, wUi, uqs, dqs, m$t, g$t, YDn, hqs, pqs, XDn, mqs, gqs, fqs, CUi, Uv, Tr, I4e, cde, FU, ZDn, vqs, _qs, TUi, QDu, bqs, yqs, Sqs, kqs, wqs, Cqs, Tqs, Eqs, xqs, Iqs, KQe, Aqs, Rqs, QDn, Dqs, f$t, zyt, Mqs, Pqs, Lqs, Nqs, EUi, JDu, Oqs, Fqs, Bqs, Uqs, $qs, Hqs, NMe, xUi, Wqs, Gqs, Vqs, jqs, Kyt, qqs, v$t, zqs, IUi, Kqs, Yqs, Xqs, Zqs, AUi, Qqs, Jqs, ezs, tzs, RUi, nzs, izs, rzs, szs, ozs, azs, czs, lzs, uzs, dzs, hzs, DUi, MUi, pzs, PUi, mzs, gzs;
export { $js, $qs, AUi, Aqs, Bjs, Bqs, CUi, Cqs, DUi, Dqs, EUi, Eqs, FU, Fjs, Fqs, Gjs, Gqs, Hjs, Hqs, I4e, IUi, Iqs, JDu, Jjs, Jqs, KDn, KQe, Kjs, Kqs, Kyt, LMe, Lqs, MUi, Mqs, NMe, Nqs, Ojs, Oqs, PUi, Pqs, QDn, QDu, Qjs, Qqs, RUi, Rqs, Rse, SUi, Sqs, TUi, Tqs, Tr, U0e, Ujs, Uqs, Uv, Vjs, Vqs, Wjs, Wqs, XDn, Xjs, Xqs, YDn, Yjs, Yqs, ZDn, ZDu, Zjs, Zqs, _Ui, _qs, ade, aqs, azs, bUi, bqs, cde, cqs, czs, dqs, dzs, eqs, ezs, f$t, fUi, fqs, g$t, gUi, gqs, gzs, h$t, hqs, hzs, iqs, izs, jjs, jqs, kUi, kqs, lqs, lzs, m$t, mqs, mzs, nqs, nzs, oqs, ozs, p$t, pqs, pzs, qDn, qjs, qqs, rqs, rzs, sqs, szs, tqs, tzs, uqs, uzs, v$t, vUi, vqs, wUi, wqs, x4e, xUi, xqs, yUi, yqs, zDn, zjs, zqs, zyt };
var __wakaru_Hu_initialized = false;
export function Hu() {
if (__wakaru_Hu_initialized) return;
__wakaru_Hu_initialized = true;
"use strict";
x(), bi(), ql(), hu(), hUi(), nX(), Jm(), zd(), Bj(), jW(), d$t(), qDn = k.makeEnum("aiserver.v1.ChunkType", [
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
]), ade = k.makeEnum("aiserver.v1.SubagentType", [
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
]), Ojs = k.makeMessageType("aiserver.v1.StreamReplayChatRequest", ()=>[
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
    ]), gUi = k.makeMessageType("aiserver.v1.StreamUnifiedChatRequestWithTools", ()=>[
        {
            no: 1,
            name: "stream_unified_chat_request",
            kind: "message",
            T: U0e,
            oneof: "request"
        },
        {
            no: 2,
            name: "client_side_tool_v2_result",
            kind: "message",
            T: xR,
            oneof: "request"
        }
    ]), Fjs = k.makeMessageType("aiserver.v1.UserRules", ()=>[
        {
            no: 1,
            name: "rules",
            kind: "message",
            T: QDn,
            repeated: !0
        }
    ]), Bjs = k.makeMessageType("aiserver.v1.StreamStart", ()=>[
        {
            no: 1,
            name: "padding",
            kind: "scalar",
            T: 9
        }
    ]), Ujs = k.makeMessageType("aiserver.v1.SpanContext", ()=>[
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
    ]), LMe = k.makeMessageType("aiserver.v1.StreamUnifiedChatResponseWithTools", ()=>[
        {
            no: 1,
            name: "client_side_tool_v2_call",
            kind: "message",
            T: Kue,
            oneof: "response"
        },
        {
            no: 2,
            name: "stream_unified_chat_response",
            kind: "message",
            T: p$t,
            oneof: "response"
        },
        {
            no: 3,
            name: "conversation_summary",
            kind: "message",
            T: Rse,
            oneof: "response"
        },
        {
            no: 4,
            name: "user_rules",
            kind: "message",
            T: Fjs,
            oneof: "response"
        },
        {
            no: 5,
            name: "stream_start",
            kind: "message",
            T: Bjs,
            oneof: "response"
        },
        {
            no: 6,
            name: "tracing_context",
            kind: "message",
            T: Ujs,
            opt: !0
        },
        {
            no: 7,
            name: "event_id",
            kind: "scalar",
            T: 9
        }
    ]), $js = k.makeMessageType("aiserver.v1.StreamUnifiedChatRequestWithToolsIdempotent", ()=>[
        {
            no: 1,
            name: "client_chunk",
            kind: "message",
            T: gUi,
            oneof: "request"
        },
        {
            no: 2,
            name: "abort",
            kind: "message",
            T: qP,
            oneof: "request"
        },
        {
            no: 3,
            name: "close",
            kind: "message",
            T: qP,
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
    ]), Hjs = k.makeMessageType("aiserver.v1.WelcomeMessage", ()=>[
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
    ]), fUi = k.makeMessageType("aiserver.v1.StreamUnifiedChatResponseWithToolsIdempotent", ()=>[
        {
            no: 1,
            name: "server_chunk",
            kind: "message",
            T: LMe,
            oneof: "response"
        },
        {
            no: 3,
            name: "welcome_message",
            kind: "message",
            T: Hjs,
            oneof: "response"
        },
        {
            no: 4,
            name: "seqno_ack",
            kind: "scalar",
            T: 13,
            oneof: "response"
        }
    ]), ZDu = k.makeMessageType("aiserver.v1.ConversationSummaryStrategy", ()=>[
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
            T: Wjs,
            oneof: "strategy"
        }
    ]), Wjs = k.makeMessageType("aiserver.v1.ConversationSummaryStrategy.ArbitrarySummaryPlusToolResultTruncation", ()=>[
        {
            no: 1,
            name: "arbitrary_summary",
            kind: "message",
            T: Rse
        },
        {
            no: 2,
            name: "tool_result_truncation_length",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation"
}), Rse = k.makeMessageType("aiserver.v1.ConversationSummary", ()=>[
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
    ]), Gjs = k.makeMessageType("aiserver.v1.ContextToRank", ()=>[
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
            T: c6,
            opt: !0
        },
        {
            no: 4,
            name: "code_block",
            kind: "message",
            T: kD,
            opt: !0
        }
    ]), vUi = k.makeMessageType("aiserver.v1.RankedContext", ()=>[
        {
            no: 1,
            name: "context",
            kind: "message",
            T: Gjs
        },
        {
            no: 2,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]), zDn = k.makeMessageType("aiserver.v1.DocumentationCitation", ()=>[
        {
            no: 1,
            name: "chunks",
            kind: "message",
            T: yjs,
            repeated: !0
        }
    ]), _Ui = k.makeMessageType("aiserver.v1.WebCitation", ()=>[
        {
            no: 1,
            name: "references",
            kind: "message",
            T: bUi,
            repeated: !0
        }
    ]), bUi = k.makeMessageType("aiserver.v1.WebReference", ()=>[
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
    ]), h$t = k.makeMessageType("aiserver.v1.DocsReference", ()=>[
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
    ]), yUi = k.makeMessageType("aiserver.v1.AiWebSearchResult", ()=>[
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
    ]), Vjs = k.makeMessageType("aiserver.v1.AiWebSearchResults", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: yUi,
            repeated: !0
        }
    ]), jjs = k.makeMessageType("aiserver.v1.StatusUpdate", ()=>[
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
    ]), SUi = k.makeMessageType("aiserver.v1.StatusUpdates", ()=>[
        {
            no: 1,
            name: "updates",
            kind: "message",
            T: jjs,
            repeated: !0
        }
    ]), qjs = k.makeMessageType("aiserver.v1.RerankDocumentsRequest", ()=>[
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
            T: Kjs,
            repeated: !0
        }
    ]), zjs = k.makeMessageType("aiserver.v1.RerankDocumentsResponse", ()=>[
        {
            no: 1,
            name: "documents",
            kind: "message",
            T: Yjs,
            repeated: !0
        }
    ]), Kjs = k.makeMessageType("aiserver.v1.Document", ()=>[
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
    ]), Yjs = k.makeMessageType("aiserver.v1.DocumentIdsWithScores", ()=>[
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
    ]), KDn = k.makeMessageType("aiserver.v1.ComposerFileDiffHistory", ()=>[
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
    ]), Xjs = k.makeMessageType("aiserver.v1.WorkspaceFolder", ()=>[
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
    ]), U0e = k.makeMessageType("aiserver.v1.StreamUnifiedChatRequest", ()=>[
        {
            no: 1,
            name: "conversation",
            kind: "message",
            T: Uv,
            repeated: !0
        },
        {
            no: 30,
            name: "full_conversation_headers_only",
            kind: "message",
            T: pqs,
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
            T: OO
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
            T: xf
        },
        {
            no: 6,
            name: "linter_errors",
            kind: "message",
            T: oN
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
            T: A3t,
            repeated: !0
        },
        {
            no: 10,
            name: "project_context",
            kind: "message",
            T: Uv,
            opt: !0
        },
        {
            no: 11,
            name: "diffs_for_compressing_files",
            kind: "message",
            T: Qjs,
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
            T: oN,
            repeated: !0
        },
        {
            no: 15,
            name: "current_file",
            kind: "message",
            T: ZC
        },
        {
            no: 16,
            name: "recent_edits",
            kind: "message",
            T: Jjs,
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
            T: KDn,
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
            T: JSi,
            repeated: !0
        },
        {
            no: 20,
            name: "additional_ranked_context",
            kind: "message",
            T: vUi,
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
            T: w1
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
            T: GUt
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
            T: zSi
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
            T: Rse,
            opt: !0
        },
        {
            no: 29,
            name: "supported_tools",
            kind: "enum",
            T: k.getEnumType(nt),
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
            T: zZe,
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
            T: nqs,
            opt: !0
        },
        {
            no: 46,
            name: "unified_mode",
            kind: "enum",
            T: k.getEnumType(x4e),
            opt: !0
        },
        {
            no: 47,
            name: "tools_requiring_accepted_return",
            kind: "enum",
            T: k.getEnumType(nt),
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
            T: k.getEnumType(Zjs),
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
            T: DUi,
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
            T: iqs,
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
            T: nzs,
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
            T: Xjs,
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
            T: rqs,
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
    ]), x4e = k.makeEnum("aiserver.v1.StreamUnifiedChatRequest.UnifiedMode", [
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
]), Zjs = k.makeEnum("aiserver.v1.StreamUnifiedChatRequest.ThinkingLevel", [
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
]), Qjs = k.makeMessageType("aiserver.v1.StreamUnifiedChatRequest.RedDiff", ()=>[
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
            T: Gle,
            repeated: !0
        },
        {
            no: 3,
            name: "red_ranges_reversed",
            kind: "message",
            T: Gle,
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
}), Jjs = k.makeMessageType("aiserver.v1.StreamUnifiedChatRequest.RecentEdits", ()=>[
        {
            no: 1,
            name: "code_block_info",
            kind: "message",
            T: eqs,
            repeated: !0
        },
        {
            no: 2,
            name: "final_file_values",
            kind: "message",
            T: tqs,
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
}), eqs = k.makeMessageType("aiserver.v1.StreamUnifiedChatRequest.RecentEdits.CodeBlockInfo", ()=>[
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
}), tqs = k.makeMessageType("aiserver.v1.StreamUnifiedChatRequest.RecentEdits.FileInfo", ()=>[
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
}), nqs = k.makeMessageType("aiserver.v1.StreamUnifiedChatRequest.CodeSearchResult", ()=>[
        {
            no: 1,
            name: "results",
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
        }
    ], {
    localName: "StreamUnifiedChatRequest_CodeSearchResult"
}), iqs = k.makeMessageType("aiserver.v1.StreamUnifiedChatRequest.FullFileCmdKOptions", ()=>[
        {
            no: 1,
            name: "file_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamUnifiedChatRequest_FullFileCmdKOptions"
}), rqs = k.makeMessageType("aiserver.v1.StreamUnifiedChatRequest.CurrentPlan", ()=>[
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
}), kUi = k.makeMessageType("aiserver.v1.ContextPiece", ()=>[
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
    ]), sqs = k.makeMessageType("aiserver.v1.ContextPieceUpdate", ()=>[
        {
            no: 1,
            name: "pieces",
            kind: "message",
            T: kUi,
            repeated: !0
        }
    ]), p$t = k.makeMessageType("aiserver.v1.StreamUnifiedChatResponse", ()=>[
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
            T: zDn
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
            T: aqs,
            opt: !0
        },
        {
            no: 9,
            name: "docs_reference",
            kind: "message",
            T: h$t,
            opt: !0
        },
        {
            no: 11,
            name: "web_citation",
            kind: "message",
            T: _Ui,
            opt: !0
        },
        {
            no: 33,
            name: "ai_web_search_results",
            kind: "message",
            T: Vjs,
            opt: !0
        },
        {
            no: 12,
            name: "status_updates",
            kind: "message",
            T: SUi,
            opt: !0
        },
        {
            no: 13,
            name: "tool_call",
            kind: "message",
            T: M3i,
            opt: !0
        },
        {
            no: 36,
            name: "tool_call_v2",
            kind: "message",
            T: YBs,
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
            T: KBs,
            opt: !0
        },
        {
            no: 16,
            name: "final_tool_result",
            kind: "message",
            T: cqs,
            opt: !0
        },
        {
            no: 17,
            name: "symbol_link",
            kind: "message",
            T: g$t,
            opt: !0
        },
        {
            no: 19,
            name: "file_link",
            kind: "message",
            T: YDn,
            opt: !0
        },
        {
            no: 18,
            name: "conversation_summary",
            kind: "message",
            T: Rse,
            opt: !0
        },
        {
            no: 20,
            name: "service_status_update",
            kind: "message",
            T: m$t,
            opt: !0
        },
        {
            no: 21,
            name: "viewable_git_context",
            kind: "message",
            T: CUi,
            opt: !0
        },
        {
            no: 23,
            name: "context_piece_update",
            kind: "message",
            T: sqs,
            opt: !0
        },
        {
            no: 24,
            name: "used_code",
            kind: "message",
            T: oqs,
            opt: !0
        },
        {
            no: 25,
            name: "thinking",
            kind: "message",
            T: KQe,
            opt: !0
        },
        {
            no: 37,
            name: "thinking_style",
            kind: "enum",
            T: k.getEnumType(I4e),
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
            T: dqs,
            opt: !0
        },
        {
            no: 29,
            name: "subagent_return",
            kind: "message",
            T: RUi,
            opt: !0
        },
        {
            no: 30,
            name: "context_window_status",
            kind: "message",
            T: wUi,
            opt: !0
        },
        {
            no: 31,
            name: "image_description",
            kind: "message",
            T: lqs,
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
            T: uqs,
            opt: !0
        },
        {
            no: 35,
            name: "model_provider_request_json",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), oqs = k.makeMessageType("aiserver.v1.StreamUnifiedChatResponse.UsedCode", ()=>[
        {
            no: 1,
            name: "code_results",
            kind: "message",
            T: YO,
            repeated: !0
        }
    ], {
    localName: "StreamUnifiedChatResponse_UsedCode"
}), aqs = k.makeMessageType("aiserver.v1.StreamUnifiedChatResponse.ChunkIdentity", ()=>[
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
            T: k.getEnumType(qDn)
        }
    ], {
    localName: "StreamUnifiedChatResponse_ChunkIdentity"
}), cqs = k.makeMessageType("aiserver.v1.StreamUnifiedChatResponse.FinalToolResult", ()=>[
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
            T: xR
        }
    ], {
    localName: "StreamUnifiedChatResponse_FinalToolResult"
}), lqs = k.makeMessageType("aiserver.v1.StreamUnifiedChatResponse.ImageDescription", ()=>[
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
}), wUi = k.makeMessageType("aiserver.v1.ContextWindowStatus", ()=>[
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
    ]), uqs = k.makeMessageType("aiserver.v1.StarsFeedbackRequest", ()=>[
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
    ]), dqs = k.makeMessageType("aiserver.v1.ConversationSummaryStarter", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), m$t = k.makeMessageType("aiserver.v1.ServiceStatusUpdate", ()=>[
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
    ]), g$t = k.makeMessageType("aiserver.v1.SymbolLink", ()=>[
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
    ]), YDn = k.makeMessageType("aiserver.v1.FileLink", ()=>[
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
    ]), hqs = k.makeMessageType("aiserver.v1.RedDiff", ()=>[
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
            T: Gle,
            repeated: !0
        },
        {
            no: 3,
            name: "red_ranges_reversed",
            kind: "message",
            T: Gle,
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
    ]), pqs = k.makeMessageType("aiserver.v1.ConversationMessageHeader", ()=>[
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
            T: k.getEnumType(Tr)
        }
    ]), XDn = k.makeMessageType("aiserver.v1.DiffFile", ()=>[
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
    ]), mqs = k.makeMessageType("aiserver.v1.ViewableCommitProps", ()=>[
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
            T: XDn,
            repeated: !0
        }
    ]), gqs = k.makeMessageType("aiserver.v1.ViewablePRProps", ()=>[
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
            T: XDn,
            repeated: !0
        }
    ]), fqs = k.makeMessageType("aiserver.v1.ViewableDiffProps", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: XDn,
            repeated: !0
        },
        {
            no: 2,
            name: "diff_preface",
            kind: "scalar",
            T: 9
        }
    ]), CUi = k.makeMessageType("aiserver.v1.ViewableGitContext", ()=>[
        {
            no: 1,
            name: "commit_data",
            kind: "message",
            T: mqs,
            opt: !0
        },
        {
            no: 2,
            name: "pull_request_data",
            kind: "message",
            T: gqs,
            opt: !0
        },
        {
            no: 3,
            name: "diff_data",
            kind: "message",
            T: fqs,
            repeated: !0
        }
    ]), Uv = k.makeMessageType("aiserver.v1.ConversationMessage", ()=>[
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
            T: k.getEnumType(Tr)
        },
        {
            no: 3,
            name: "attached_code_chunks",
            kind: "message",
            T: cde,
            repeated: !0
        },
        {
            no: 4,
            name: "codebase_context_chunks",
            kind: "message",
            T: kD,
            repeated: !0
        },
        {
            no: 5,
            name: "commits",
            kind: "message",
            T: NMe,
            repeated: !0
        },
        {
            no: 6,
            name: "pull_requests",
            kind: "message",
            T: xUi,
            repeated: !0
        },
        {
            no: 7,
            name: "git_diffs",
            kind: "message",
            T: y5,
            repeated: !0
        },
        {
            no: 8,
            name: "assistant_suggested_diffs",
            kind: "message",
            T: $qs,
            repeated: !0
        },
        {
            no: 9,
            name: "interpreter_results",
            kind: "message",
            T: Uqs,
            repeated: !0
        },
        {
            no: 10,
            name: "images",
            kind: "message",
            T: Vle,
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
            T: Cqs,
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
            T: Fqs,
            repeated: !0
        },
        {
            no: 15,
            name: "lints",
            kind: "message",
            T: Tqs,
            repeated: !0
        },
        {
            no: 16,
            name: "user_responses_to_suggested_code_blocks",
            kind: "message",
            T: Gqs,
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
            T: TUi,
            repeated: !0
        },
        {
            no: 19,
            name: "notepads",
            kind: "message",
            T: yqs,
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
            T: wpu,
            repeated: !0
        },
        {
            no: 22,
            name: "edit_trail_contexts",
            kind: "message",
            T: wqs,
            repeated: !0
        },
        {
            no: 23,
            name: "suggested_code_blocks",
            kind: "message",
            T: Wqs,
            repeated: !0
        },
        {
            no: 24,
            name: "diffs_for_compressing_files",
            kind: "message",
            T: hqs,
            repeated: !0
        },
        {
            no: 25,
            name: "multi_file_linter_errors",
            kind: "message",
            T: RVc,
            repeated: !0
        },
        {
            no: 26,
            name: "diff_histories",
            kind: "message",
            T: zqs,
            repeated: !0
        },
        {
            no: 27,
            name: "recently_viewed_files",
            kind: "message",
            T: cde,
            repeated: !0
        },
        {
            no: 28,
            name: "recent_locations_history",
            kind: "message",
            T: Eqs,
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
            T: KDn,
            repeated: !0
        },
        {
            no: 31,
            name: "conversation_summary",
            kind: "message",
            T: Rse,
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
            T: h$t,
            repeated: !0
        },
        {
            no: 36,
            name: "web_references",
            kind: "message",
            T: bUi,
            repeated: !0
        },
        {
            no: 75,
            name: "ai_web_search_results",
            kind: "message",
            T: yUi,
            repeated: !0
        },
        {
            no: 37,
            name: "git_context",
            kind: "message",
            T: CUi,
            opt: !0
        },
        {
            no: 38,
            name: "attached_folders_list_dir_results",
            kind: "message",
            T: dIn,
            repeated: !0
        },
        {
            no: 39,
            name: "cached_conversation_summary",
            kind: "message",
            T: Rse,
            opt: !0
        },
        {
            no: 40,
            name: "human_changes",
            kind: "message",
            T: Iqs,
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
            T: Sqs,
            repeated: !0
        },
        {
            no: 43,
            name: "cursor_rules",
            kind: "message",
            T: wRe,
            repeated: !0
        },
        {
            no: 44,
            name: "context_pieces",
            kind: "message",
            T: kUi,
            repeated: !0
        },
        {
            no: 45,
            name: "thinking",
            kind: "message",
            T: KQe,
            opt: !0
        },
        {
            no: 46,
            name: "all_thinking_blocks",
            kind: "message",
            T: KQe,
            repeated: !0
        },
        {
            no: 85,
            name: "thinking_style",
            kind: "enum",
            T: k.getEnumType(I4e),
            opt: !0
        },
        {
            no: 47,
            name: "unified_mode",
            kind: "enum",
            T: k.getEnumType(x4e),
            opt: !0
        },
        {
            no: 98,
            name: "agent_mode",
            kind: "enum",
            T: k.getEnumType(UE),
            opt: !0
        },
        {
            no: 48,
            name: "diffs_since_last_apply",
            kind: "message",
            T: Aqs,
            repeated: !0
        },
        {
            no: 49,
            name: "deleted_files",
            kind: "message",
            T: Rqs,
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
            T: k.getEnumType(nt),
            repeated: !0
        },
        {
            no: 52,
            name: "current_file_location_data",
            kind: "message",
            T: EUi,
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
            T: QVc,
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
            T: QDn,
            repeated: !0
        },
        {
            no: 59,
            name: "ui_element_picked",
            kind: "message",
            T: JVc,
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
            T: Dqs,
            repeated: !0
        },
        {
            no: 62,
            name: "external_links",
            kind: "message",
            T: A3t,
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
            T: DUi,
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
            T: RUi,
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
            T: Hpu,
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
            T: DI,
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
            T: f$t,
            opt: !0
        },
        {
            no: 76,
            name: "context_window_status",
            kind: "message",
            T: wUi,
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
            T: AVc
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
            T: Mqs,
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
            T: k.getEnumType(xd),
            opt: !0
        },
        {
            no: 97,
            name: "simulated_message_metadata",
            kind: "message",
            T: Pqs,
            opt: !0
        },
        {
            no: 83,
            name: "mcp_descriptors",
            kind: "message",
            T: Lqs,
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
            T: J7t,
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
            T: MMe,
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
            T: NDn,
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
            T: Y4i,
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
            T: YVs,
            opt: !0
        }
    ]), Tr = k.makeEnum("aiserver.v1.ConversationMessage.MessageType", [
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
]), I4e = k.makeEnum("aiserver.v1.ConversationMessage.ThinkingStyle", [
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
]), cde = k.makeMessageType("aiserver.v1.ConversationMessage.CodeChunk", ()=>[
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
            T: k.getEnumType(ZDn),
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
            T: k.getEnumType(FU),
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
            T: vqs,
            opt: !0
        }
    ], {
    localName: "ConversationMessage_CodeChunk"
}), FU = k.makeEnum("aiserver.v1.ConversationMessage.CodeChunk.Intent", [
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
]), ZDn = k.makeEnum("aiserver.v1.ConversationMessage.CodeChunk.SummarizationStrategy", [
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
]), vqs = k.makeMessageType("aiserver.v1.ConversationMessage.CodeChunk.CodeChunkGitContext", ()=>[
        {
            no: 1,
            name: "git_info",
            kind: "message",
            T: _qs,
            repeated: !0
        }
    ], {
    localName: "ConversationMessage_CodeChunk_CodeChunkGitContext"
}), _qs = k.makeMessageType("aiserver.v1.ConversationMessage.CodeChunk.CodeChunkGitContext.CodeChunkGitInfo", ()=>[
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
}), TUi = k.makeMessageType("aiserver.v1.ConversationMessage.ToolResult", ()=>[
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
            T: cde,
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
            T: xR
        },
        {
            no: 9,
            name: "error",
            kind: "message",
            T: mse,
            opt: !0
        },
        {
            no: 10,
            name: "images",
            kind: "message",
            T: Vle,
            repeated: !0
        },
        {
            no: 11,
            name: "tool_call",
            kind: "message",
            T: Kue,
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
}), QDu = k.makeMessageType("aiserver.v1.ConversationMessage.MultiRangeCodeChunk", ()=>[
        {
            no: 1,
            name: "ranges",
            kind: "message",
            T: bqs,
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
}), bqs = k.makeMessageType("aiserver.v1.ConversationMessage.MultiRangeCodeChunk.RangeWithPriority", ()=>[
        {
            no: 1,
            name: "range",
            kind: "message",
            T: Gle
        },
        {
            no: 2,
            name: "priority",
            kind: "scalar",
            T: 1
        }
    ], {
    localName: "ConversationMessage_MultiRangeCodeChunk_RangeWithPriority"
}), yqs = k.makeMessageType("aiserver.v1.ConversationMessage.NotepadContext", ()=>[
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
            T: cde,
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
            T: NMe,
            repeated: !0
        },
        {
            no: 6,
            name: "pull_requests",
            kind: "message",
            T: xUi,
            repeated: !0
        },
        {
            no: 7,
            name: "git_diffs",
            kind: "message",
            T: y5,
            repeated: !0
        },
        {
            no: 8,
            name: "images",
            kind: "message",
            T: Vle,
            repeated: !0
        }
    ], {
    localName: "ConversationMessage_NotepadContext"
}), Sqs = k.makeMessageType("aiserver.v1.ConversationMessage.ComposerContext", ()=>[
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
            T: Rse
        }
    ], {
    localName: "ConversationMessage_ComposerContext"
}), kqs = k.makeMessageType("aiserver.v1.ConversationMessage.EditLocation", ()=>[
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
            T: Gle
        },
        {
            no: 4,
            name: "initial_range",
            kind: "message",
            T: Gle
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
            T: Gle
        }
    ], {
    localName: "ConversationMessage_EditLocation"
}), wqs = k.makeMessageType("aiserver.v1.ConversationMessage.EditTrailContext", ()=>[
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
            T: kqs,
            repeated: !0
        }
    ], {
    localName: "ConversationMessage_EditTrailContext"
}), Cqs = k.makeMessageType("aiserver.v1.ConversationMessage.ApproximateLintError", ()=>[
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
}), Tqs = k.makeMessageType("aiserver.v1.ConversationMessage.Lints", ()=>[
        {
            no: 1,
            name: "lints",
            kind: "message",
            T: u$t
        },
        {
            no: 2,
            name: "chat_codeblock_model_value",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ConversationMessage_Lints"
}), Eqs = k.makeMessageType("aiserver.v1.ConversationMessage.RecentLocation", ()=>[
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
}), xqs = k.makeMessageType("aiserver.v1.ConversationMessage.RenderedDiff", ()=>[
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
}), Iqs = k.makeMessageType("aiserver.v1.ConversationMessage.HumanChange", ()=>[
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
            T: xqs,
            repeated: !0
        }
    ], {
    localName: "ConversationMessage_HumanChange"
}), KQe = k.makeMessageType("aiserver.v1.ConversationMessage.Thinking", ()=>[
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
}), Aqs = k.makeMessageType("aiserver.v1.ConversationMessage.DiffSinceLastApply", ()=>[
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
            T: qZe,
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
}), Rqs = k.makeMessageType("aiserver.v1.ConversationMessage.DeletedFile", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ConversationMessage_DeletedFile"
}), QDn = k.makeMessageType("aiserver.v1.ConversationMessage.KnowledgeItem", ()=>[
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
}), Dqs = k.makeMessageType("aiserver.v1.ConversationMessage.DocumentationSelection", ()=>[
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
}), f$t = k.makeMessageType("aiserver.v1.ConversationMessage.IdeEditorsState", ()=>[
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
            T: zyt,
            repeated: !0
        },
        {
            no: 5,
            name: "recently_viewed_files",
            kind: "message",
            T: zyt,
            repeated: !0
        }
    ], {
    localName: "ConversationMessage_IdeEditorsState"
}), zyt = k.makeMessageType("aiserver.v1.ConversationMessage.IdeEditorsState.File", ()=>[
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
}), Mqs = k.makeMessageType("aiserver.v1.ConversationMessage.PlanUpdate", ()=>[
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
}), Pqs = k.makeMessageType("aiserver.v1.ConversationMessage.SimulatedMessageMetadata", ()=>[
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
            T: k.getEnumType(G3),
            opt: !0
        },
        {
            no: 6,
            name: "subscription_event_display",
            kind: "message",
            T: qVs,
            opt: !0
        },
        {
            no: 7,
            name: "interaction_response",
            kind: "message",
            T: jVs,
            opt: !0
        }
    ], {
    localName: "ConversationMessage_SimulatedMessageMetadata"
}), Lqs = k.makeMessageType("aiserver.v1.ConversationMessage.McpDescriptor", ()=>[
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
            T: Nqs,
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
}), Nqs = k.makeMessageType("aiserver.v1.ConversationMessage.McpDescriptor.Tool", ()=>[
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
}), EUi = k.makeMessageType("aiserver.v1.CurrentFileLocationData", ()=>[
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
    ]), JDu = k.makeMessageType("aiserver.v1.SearchInfo", ()=>[
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
            T: Oqs,
            repeated: !0
        }
    ]), Oqs = k.makeMessageType("aiserver.v1.SearchFileInfo", ()=>[
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
    ]), Fqs = k.makeMessageType("aiserver.v1.FolderInfo", ()=>[
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
            T: Bqs,
            repeated: !0
        }
    ]), Bqs = k.makeMessageType("aiserver.v1.FolderFileInfo", ()=>[
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
    ]), Uqs = k.makeMessageType("aiserver.v1.InterpreterResult", ()=>[
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
    ]), $qs = k.makeMessageType("aiserver.v1.SimpleFileDiff", ()=>[
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
            T: Hqs,
            repeated: !0
        }
    ]), Hqs = k.makeMessageType("aiserver.v1.SimpleFileDiff.Chunk", ()=>[
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
            T: c6
        },
        {
            no: 4,
            name: "new_range",
            kind: "message",
            T: c6
        }
    ], {
    localName: "SimpleFileDiff_Chunk"
}), NMe = k.makeMessageType("aiserver.v1.Commit", ()=>[
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
            T: C5e,
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
    ]), xUi = k.makeMessageType("aiserver.v1.PullRequest", ()=>[
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
            T: C5e,
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
    ]), Wqs = k.makeMessageType("aiserver.v1.SuggestedCodeBlock", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]), Gqs = k.makeMessageType("aiserver.v1.UserResponseToSuggestedCodeBlock", ()=>[
        {
            no: 1,
            name: "user_response_type",
            kind: "enum",
            T: k.getEnumType(Vqs)
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
            T: C5e,
            opt: !0
        }
    ]), Vqs = k.makeEnum("aiserver.v1.UserResponseToSuggestedCodeBlock.UserResponseType", [
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
]), jqs = k.makeMessageType("aiserver.v1.ContextRerankingCandidateFile", ()=>[
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
    ]), Kyt = k.makeMessageType("aiserver.v1.ComposerFileDiff", ()=>[
        {
            no: 1,
            name: "chunks",
            kind: "message",
            T: v$t,
            repeated: !0
        },
        {
            no: 2,
            name: "editor",
            kind: "enum",
            T: k.getEnumType(qqs)
        },
        {
            no: 3,
            name: "hit_timeout",
            kind: "scalar",
            T: 8
        }
    ]), qqs = k.makeEnum("aiserver.v1.ComposerFileDiff.Editor", [
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
]), v$t = k.makeMessageType("aiserver.v1.ComposerFileDiff.ChunkDiff", ()=>[
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
}), zqs = k.makeMessageType("aiserver.v1.DiffHistoryData", ()=>[
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
            T: Kyt,
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
            T: Kyt
        }
    ]), IUi = k.makeMessageType("aiserver.v1.WarmStreamUnifiedChatWithToolsResponse", []), Kqs = k.makeMessageType("aiserver.v1.CodeChunkContextInclusionInfoV2", ()=>[
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
            T: k.getEnumType(Yqs)
        },
        {
            no: 10,
            name: "inclusion_type",
            kind: "enum",
            T: k.getEnumType(Xqs)
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
    ]), Yqs = k.makeEnum("aiserver.v1.CodeChunkContextInclusionInfoV2.Intent", [
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
]), Xqs = k.makeEnum("aiserver.v1.CodeChunkContextInclusionInfoV2.InclusionType", [
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
]), Zqs = k.makeMessageType("aiserver.v1.GetPromptDryRunResponse", ()=>[
        {
            no: 1,
            name: "code_chunks",
            kind: "message",
            T: Qqs,
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
            T: AUi
        },
        {
            no: 5,
            name: "full_conversation_token_count",
            kind: "message",
            T: AUi
        },
        {
            no: 6,
            name: "code_chunks_v2",
            kind: "message",
            T: Kqs,
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
    ]), AUi = k.makeMessageType("aiserver.v1.GetPromptDryRunResponse.TokenCount", ()=>[
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
}), Qqs = k.makeMessageType("aiserver.v1.CodeChunkContextInclusionInfo", ()=>[
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
            T: k.getEnumType(Jqs)
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
            T: tzs
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
            T: k.getEnumType(ezs)
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
    ]), Jqs = k.makeEnum("aiserver.v1.CodeChunkContextInclusionInfo.InclusionType", [
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
]), ezs = k.makeEnum("aiserver.v1.CodeChunkContextInclusionInfo.Intent", [
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
]), tzs = k.makeMessageType("aiserver.v1.CodeChunkContextInclusionInfo.TokenCount", ()=>[
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
}), RUi = k.makeMessageType("aiserver.v1.SubagentReturnCall", ()=>[
        {
            no: 1,
            name: "subagent_type",
            kind: "enum",
            T: k.getEnumType(ade)
        },
        {
            no: 2,
            name: "deep_search_return_value",
            kind: "message",
            T: rzs,
            oneof: "return_value"
        },
        {
            no: 3,
            name: "fix_lints_return_value",
            kind: "message",
            T: azs,
            oneof: "return_value"
        },
        {
            no: 4,
            name: "task_return_value",
            kind: "message",
            T: lzs,
            oneof: "return_value"
        },
        {
            no: 5,
            name: "spec_return_value",
            kind: "message",
            T: dzs,
            oneof: "return_value"
        }
    ]), nzs = k.makeMessageType("aiserver.v1.SubagentInfo", ()=>[
        {
            no: 1,
            name: "subagent_type",
            kind: "enum",
            T: k.getEnumType(ade)
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
            T: izs,
            oneof: "params"
        },
        {
            no: 4,
            name: "fix_lints_params",
            kind: "message",
            T: ozs,
            oneof: "params"
        },
        {
            no: 6,
            name: "task_params",
            kind: "message",
            T: czs,
            oneof: "params"
        },
        {
            no: 7,
            name: "spec_params",
            kind: "message",
            T: uzs,
            oneof: "params"
        },
        {
            no: 5,
            name: "parent_request_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), izs = k.makeMessageType("aiserver.v1.DeepSearchSubagentParams", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]), rzs = k.makeMessageType("aiserver.v1.DeepSearchSubagentReturnValue", ()=>[
        {
            no: 1,
            name: "context_items",
            kind: "message",
            T: szs,
            repeated: !0
        }
    ]), szs = k.makeMessageType("aiserver.v1.DeepSearchSubagentReturnValue.ContextItem", ()=>[
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
            T: c6,
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
}), ozs = k.makeMessageType("aiserver.v1.FixLintsSubagentParams", []), azs = k.makeMessageType("aiserver.v1.FixLintsSubagentReturnValue", []), czs = k.makeMessageType("aiserver.v1.TaskSubagentParams", ()=>[
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
    ]), lzs = k.makeMessageType("aiserver.v1.TaskSubagentReturnValue", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ]), uzs = k.makeMessageType("aiserver.v1.SpecSubagentParams", ()=>[
        {
            no: 1,
            name: "plan",
            kind: "scalar",
            T: 9
        }
    ]), dzs = k.makeMessageType("aiserver.v1.SpecSubagentReturnValue", ()=>[
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
            T: hzs,
            repeated: !0
        }
    ]), hzs = k.makeMessageType("aiserver.v1.StringReplacement", ()=>[
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
    ]), DUi = k.makeMessageType("aiserver.v1.ProjectLayout", ()=>[
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
            T: MUi
        },
        {
            no: 3,
            name: "list_dir_v2_result",
            kind: "message",
            T: l8t,
            opt: !0
        }
    ]), MUi = k.makeMessageType("aiserver.v1.ProjectLayoutDirectoryContent", ()=>[
        {
            no: 1,
            name: "directories",
            kind: "message",
            T: pzs,
            repeated: !0
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: PUi,
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
            T: PUi,
            repeated: !0
        }
    ]), pzs = k.makeMessageType("aiserver.v1.ProjectLayoutDirectory", ()=>[
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
            T: MUi
        }
    ]), PUi = k.makeMessageType("aiserver.v1.ProjectLayoutFile", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]), mzs = k.makeMessageType("aiserver.v1.ConvertOALToNALRequest", ()=>[
        {
            no: 1,
            name: "request",
            kind: "message",
            T: U0e
        },
        {
            no: 2,
            name: "file_states",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: fDu
            }
        }
    ]), gzs = k.makeMessageType("aiserver.v1.ConvertOALToNALResponse", ()=>[
        {
            no: 1,
            name: "conversation_state",
            kind: "message",
            T: Hm
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
                T: Hm
            }
        }
    ]);

}
