import { _u, dD, lD, nD, ow, tD, uD, uw } from "./agent_pb.js";
import { GZ, OZ, hZ } from "./composer_pb.js";
import { pZ } from "./docs_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { zc } from "./repository_pb.js";
import { KN, zN } from "./request_context_exec_pb.js";
import { aw, iw, sw } from "./selected_context_pb.js";
import { tde, yKe } from "./shadow_workspace_pb.js";
import { Hs, Xy, Yc, Zy, fN, nN, rN, tN, xg } from "./tools_pb.js";
import { h } from "./tslib.es6.js";
import { Ig, Kc, Ki, Mg, SK, SP, au, jy, lr, nK, qc, tK, yK } from "./utils_pb_2.js";
var ide, mw, ade, ode, cde, lde, dde, ude, mde, pde, pw, hde, gde, fde, _de, Ji, vde, fD, Gg, Tde, kde, Sde, yde, wde, Ede, bde, Rde, Cde, Ide, Ade, Mde, Pde, Nde, hw, Dde, Ode, Lde, Ude, xde, _D, Fde, Wde, Bde, Gde, Vde, $de, jde, Hde, qde, Kde, vD, TD, zde, Yde, Jde, kD, Xde, Qde, Zde, eue, tue, nue, rue, sue, iue, aue, oue, SD, cue, yD;
export { $de, Ade, Bde, Cde, Dde, Ede, Fde, Gde, Gg, Hde, Ide, Jde, Ji, Kde, Lde, Mde, Nde, Ode, Pde, Qde, Rde, SD, Sde, TD, Tde, Ude, Vde, Wde, Xde, Yde, Zde, _D, _de, ade, aue, bde, cde, cue, dde, eue, fD, fde, gde, hde, hw, ide, iue, jde, kD, kde, lde, mde, mw, nue, ode, oue, pde, pw, qde, rue, sue, tue, ude, vD, vde, wde, xde, yD, yde, zde };
var __wakaru_Vg_initialized = false;
export function Vg() {
if (__wakaru_Vg_initialized) return;
__wakaru_Vg_initialized = true;
"use strict";
h(), F(), Zy(), lr(), pZ(), zc(), GZ(), uw(), zN(), aw(), yKe(), ide = c.makeEnum("aiserver.v1.SubagentType", [
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
]), mw = c.makeMessageType("aiserver.v1.ConversationSummary", ()=>[
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
    ]), ade = c.makeMessageType("aiserver.v1.WebReference", ()=>[
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
    ]), ode = c.makeMessageType("aiserver.v1.DocsReference", ()=>[
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
    ]), cde = c.makeMessageType("aiserver.v1.AiWebSearchResult", ()=>[
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
    ]), lde = c.makeMessageType("aiserver.v1.ComposerFileDiffHistory", ()=>[
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
    ]), dde = c.makeEnum("aiserver.v1.StreamUnifiedChatRequest.UnifiedMode", [
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
]), ude = c.makeMessageType("aiserver.v1.ContextPiece", ()=>[
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
    ]), mde = c.makeMessageType("aiserver.v1.ContextWindowStatus", ()=>[
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
    ]), pde = c.makeMessageType("aiserver.v1.RedDiff", ()=>[
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
            T: au,
            repeated: !0
        },
        {
            no: 3,
            name: "red_ranges_reversed",
            kind: "message",
            T: au,
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
    ]), pw = c.makeMessageType("aiserver.v1.DiffFile", ()=>[
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
    ]), hde = c.makeMessageType("aiserver.v1.ViewableCommitProps", ()=>[
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
            T: pw,
            repeated: !0
        }
    ]), gde = c.makeMessageType("aiserver.v1.ViewablePRProps", ()=>[
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
            T: pw,
            repeated: !0
        }
    ]), fde = c.makeMessageType("aiserver.v1.ViewableDiffProps", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: pw,
            repeated: !0
        },
        {
            no: 2,
            name: "diff_preface",
            kind: "scalar",
            T: 9
        }
    ]), _de = c.makeMessageType("aiserver.v1.ViewableGitContext", ()=>[
        {
            no: 1,
            name: "commit_data",
            kind: "message",
            T: hde,
            opt: !0
        },
        {
            no: 2,
            name: "pull_request_data",
            kind: "message",
            T: gde,
            opt: !0
        },
        {
            no: 3,
            name: "diff_data",
            kind: "message",
            T: fde,
            repeated: !0
        }
    ]), Ji = c.makeMessageType("aiserver.v1.ConversationMessage", ()=>[
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
            T: c.getEnumType(vde)
        },
        {
            no: 3,
            name: "attached_code_chunks",
            kind: "message",
            T: Gg,
            repeated: !0
        },
        {
            no: 4,
            name: "codebase_context_chunks",
            kind: "message",
            T: SP,
            repeated: !0
        },
        {
            no: 5,
            name: "commits",
            kind: "message",
            T: vD,
            repeated: !0
        },
        {
            no: 6,
            name: "pull_requests",
            kind: "message",
            T: TD,
            repeated: !0
        },
        {
            no: 7,
            name: "git_diffs",
            kind: "message",
            T: Ki,
            repeated: !0
        },
        {
            no: 8,
            name: "assistant_suggested_diffs",
            kind: "message",
            T: qde,
            repeated: !0
        },
        {
            no: 9,
            name: "interpreter_results",
            kind: "message",
            T: Hde,
            repeated: !0
        },
        {
            no: 10,
            name: "images",
            kind: "message",
            T: Kc,
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
            T: Ide,
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
            T: $de,
            repeated: !0
        },
        {
            no: 15,
            name: "lints",
            kind: "message",
            T: Ade,
            repeated: !0
        },
        {
            no: 16,
            name: "user_responses_to_suggested_code_blocks",
            kind: "message",
            T: Yde,
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
            T: wde,
            repeated: !0
        },
        {
            no: 19,
            name: "notepads",
            kind: "message",
            T: Ede,
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
            T: hZ,
            repeated: !0
        },
        {
            no: 22,
            name: "edit_trail_contexts",
            kind: "message",
            T: Cde,
            repeated: !0
        },
        {
            no: 23,
            name: "suggested_code_blocks",
            kind: "message",
            T: zde,
            repeated: !0
        },
        {
            no: 24,
            name: "diffs_for_compressing_files",
            kind: "message",
            T: pde,
            repeated: !0
        },
        {
            no: 25,
            name: "multi_file_linter_errors",
            kind: "message",
            T: nK,
            repeated: !0
        },
        {
            no: 26,
            name: "diff_histories",
            kind: "message",
            T: Zde,
            repeated: !0
        },
        {
            no: 27,
            name: "recently_viewed_files",
            kind: "message",
            T: Gg,
            repeated: !0
        },
        {
            no: 28,
            name: "recent_locations_history",
            kind: "message",
            T: Mde,
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
            T: lde,
            repeated: !0
        },
        {
            no: 31,
            name: "conversation_summary",
            kind: "message",
            T: mw,
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
            T: ode,
            repeated: !0
        },
        {
            no: 36,
            name: "web_references",
            kind: "message",
            T: ade,
            repeated: !0
        },
        {
            no: 75,
            name: "ai_web_search_results",
            kind: "message",
            T: cde,
            repeated: !0
        },
        {
            no: 37,
            name: "git_context",
            kind: "message",
            T: _de,
            opt: !0
        },
        {
            no: 38,
            name: "attached_folders_list_dir_results",
            kind: "message",
            T: rN,
            repeated: !0
        },
        {
            no: 39,
            name: "cached_conversation_summary",
            kind: "message",
            T: mw,
            opt: !0
        },
        {
            no: 40,
            name: "human_changes",
            kind: "message",
            T: Nde,
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
            T: bde,
            repeated: !0
        },
        {
            no: 43,
            name: "cursor_rules",
            kind: "message",
            T: Mg,
            repeated: !0
        },
        {
            no: 44,
            name: "context_pieces",
            kind: "message",
            T: ude,
            repeated: !0
        },
        {
            no: 45,
            name: "thinking",
            kind: "message",
            T: hw,
            opt: !0
        },
        {
            no: 46,
            name: "all_thinking_blocks",
            kind: "message",
            T: hw,
            repeated: !0
        },
        {
            no: 85,
            name: "thinking_style",
            kind: "enum",
            T: c.getEnumType(fD),
            opt: !0
        },
        {
            no: 47,
            name: "unified_mode",
            kind: "enum",
            T: c.getEnumType(dde),
            opt: !0
        },
        {
            no: 98,
            name: "agent_mode",
            kind: "enum",
            T: c.getEnumType(_u),
            opt: !0
        },
        {
            no: 48,
            name: "diffs_since_last_apply",
            kind: "message",
            T: Dde,
            repeated: !0
        },
        {
            no: 49,
            name: "deleted_files",
            kind: "message",
            T: Ode,
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
            T: c.getEnumType(xg),
            repeated: !0
        },
        {
            no: 52,
            name: "current_file_location_data",
            kind: "message",
            T: Vde,
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
            T: SK,
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
            T: Lde,
            repeated: !0
        },
        {
            no: 59,
            name: "ui_element_picked",
            kind: "message",
            T: yK,
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
            T: Ude,
            repeated: !0
        },
        {
            no: 62,
            name: "external_links",
            kind: "message",
            T: jy,
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
            T: oue,
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
            T: eue,
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
            T: OZ,
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
            T: Hs,
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
            T: xde,
            opt: !0
        },
        {
            no: 76,
            name: "context_window_status",
            kind: "message",
            T: mde,
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
            T: tK
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
            T: Fde,
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
            T: c.getEnumType(tD),
            opt: !0
        },
        {
            no: 97,
            name: "simulated_message_metadata",
            kind: "message",
            T: Wde,
            opt: !0
        },
        {
            no: 83,
            name: "mcp_descriptors",
            kind: "message",
            T: Bde,
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
            T: KN,
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
            T: sw,
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
            T: iw,
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
            T: ow,
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
            T: uD,
            opt: !0
        }
    ]), vde = c.makeEnum("aiserver.v1.ConversationMessage.MessageType", [
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
]), fD = c.makeEnum("aiserver.v1.ConversationMessage.ThinkingStyle", [
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
]), Gg = c.makeMessageType("aiserver.v1.ConversationMessage.CodeChunk", ()=>[
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
            T: c.getEnumType(kde),
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
            T: c.getEnumType(Tde),
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
            T: Sde,
            opt: !0
        }
    ], {
    localName: "ConversationMessage_CodeChunk"
}), Tde = c.makeEnum("aiserver.v1.ConversationMessage.CodeChunk.Intent", [
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
]), kde = c.makeEnum("aiserver.v1.ConversationMessage.CodeChunk.SummarizationStrategy", [
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
]), Sde = c.makeMessageType("aiserver.v1.ConversationMessage.CodeChunk.CodeChunkGitContext", ()=>[
        {
            no: 1,
            name: "git_info",
            kind: "message",
            T: yde,
            repeated: !0
        }
    ], {
    localName: "ConversationMessage_CodeChunk_CodeChunkGitContext"
}), yde = c.makeMessageType("aiserver.v1.ConversationMessage.CodeChunk.CodeChunkGitContext.CodeChunkGitInfo", ()=>[
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
}), wde = c.makeMessageType("aiserver.v1.ConversationMessage.ToolResult", ()=>[
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
            T: Gg,
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
            T: nN
        },
        {
            no: 9,
            name: "error",
            kind: "message",
            T: Xy,
            opt: !0
        },
        {
            no: 10,
            name: "images",
            kind: "message",
            T: Kc,
            repeated: !0
        },
        {
            no: 11,
            name: "tool_call",
            kind: "message",
            T: tN,
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
}), Ede = c.makeMessageType("aiserver.v1.ConversationMessage.NotepadContext", ()=>[
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
            T: Gg,
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
            T: vD,
            repeated: !0
        },
        {
            no: 6,
            name: "pull_requests",
            kind: "message",
            T: TD,
            repeated: !0
        },
        {
            no: 7,
            name: "git_diffs",
            kind: "message",
            T: Ki,
            repeated: !0
        },
        {
            no: 8,
            name: "images",
            kind: "message",
            T: Kc,
            repeated: !0
        }
    ], {
    localName: "ConversationMessage_NotepadContext"
}), bde = c.makeMessageType("aiserver.v1.ConversationMessage.ComposerContext", ()=>[
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
            T: mw
        }
    ], {
    localName: "ConversationMessage_ComposerContext"
}), Rde = c.makeMessageType("aiserver.v1.ConversationMessage.EditLocation", ()=>[
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
            T: au
        },
        {
            no: 4,
            name: "initial_range",
            kind: "message",
            T: au
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
            T: au
        }
    ], {
    localName: "ConversationMessage_EditLocation"
}), Cde = c.makeMessageType("aiserver.v1.ConversationMessage.EditTrailContext", ()=>[
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
            T: Rde,
            repeated: !0
        }
    ], {
    localName: "ConversationMessage_EditTrailContext"
}), Ide = c.makeMessageType("aiserver.v1.ConversationMessage.ApproximateLintError", ()=>[
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
}), Ade = c.makeMessageType("aiserver.v1.ConversationMessage.Lints", ()=>[
        {
            no: 1,
            name: "lints",
            kind: "message",
            T: tde
        },
        {
            no: 2,
            name: "chat_codeblock_model_value",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ConversationMessage_Lints"
}), Mde = c.makeMessageType("aiserver.v1.ConversationMessage.RecentLocation", ()=>[
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
}), Pde = c.makeMessageType("aiserver.v1.ConversationMessage.RenderedDiff", ()=>[
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
}), Nde = c.makeMessageType("aiserver.v1.ConversationMessage.HumanChange", ()=>[
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
            T: Pde,
            repeated: !0
        }
    ], {
    localName: "ConversationMessage_HumanChange"
}), hw = c.makeMessageType("aiserver.v1.ConversationMessage.Thinking", ()=>[
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
}), Dde = c.makeMessageType("aiserver.v1.ConversationMessage.DiffSinceLastApply", ()=>[
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
            T: Yc,
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
}), Ode = c.makeMessageType("aiserver.v1.ConversationMessage.DeletedFile", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ConversationMessage_DeletedFile"
}), Lde = c.makeMessageType("aiserver.v1.ConversationMessage.KnowledgeItem", ()=>[
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
}), Ude = c.makeMessageType("aiserver.v1.ConversationMessage.DocumentationSelection", ()=>[
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
}), xde = c.makeMessageType("aiserver.v1.ConversationMessage.IdeEditorsState", ()=>[
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
            T: _D,
            repeated: !0
        },
        {
            no: 5,
            name: "recently_viewed_files",
            kind: "message",
            T: _D,
            repeated: !0
        }
    ], {
    localName: "ConversationMessage_IdeEditorsState"
}), _D = c.makeMessageType("aiserver.v1.ConversationMessage.IdeEditorsState.File", ()=>[
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
}), Fde = c.makeMessageType("aiserver.v1.ConversationMessage.PlanUpdate", ()=>[
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
}), Wde = c.makeMessageType("aiserver.v1.ConversationMessage.SimulatedMessageMetadata", ()=>[
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
            T: c.getEnumType(nD),
            opt: !0
        },
        {
            no: 6,
            name: "subscription_event_display",
            kind: "message",
            T: dD,
            opt: !0
        },
        {
            no: 7,
            name: "interaction_response",
            kind: "message",
            T: lD,
            opt: !0
        }
    ], {
    localName: "ConversationMessage_SimulatedMessageMetadata"
}), Bde = c.makeMessageType("aiserver.v1.ConversationMessage.McpDescriptor", ()=>[
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
            T: Gde,
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
}), Gde = c.makeMessageType("aiserver.v1.ConversationMessage.McpDescriptor.Tool", ()=>[
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
}), Vde = c.makeMessageType("aiserver.v1.CurrentFileLocationData", ()=>[
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
    ]), $de = c.makeMessageType("aiserver.v1.FolderInfo", ()=>[
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
            T: jde,
            repeated: !0
        }
    ]), jde = c.makeMessageType("aiserver.v1.FolderFileInfo", ()=>[
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
    ]), Hde = c.makeMessageType("aiserver.v1.InterpreterResult", ()=>[
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
    ]), qde = c.makeMessageType("aiserver.v1.SimpleFileDiff", ()=>[
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
            T: Kde,
            repeated: !0
        }
    ]), Kde = c.makeMessageType("aiserver.v1.SimpleFileDiff.Chunk", ()=>[
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
            T: qc
        },
        {
            no: 4,
            name: "new_range",
            kind: "message",
            T: qc
        }
    ], {
    localName: "SimpleFileDiff_Chunk"
}), vD = c.makeMessageType("aiserver.v1.Commit", ()=>[
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
            T: Ig,
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
    ]), TD = c.makeMessageType("aiserver.v1.PullRequest", ()=>[
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
            T: Ig,
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
    ]), zde = c.makeMessageType("aiserver.v1.SuggestedCodeBlock", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]), Yde = c.makeMessageType("aiserver.v1.UserResponseToSuggestedCodeBlock", ()=>[
        {
            no: 1,
            name: "user_response_type",
            kind: "enum",
            T: c.getEnumType(Jde)
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
            T: Ig,
            opt: !0
        }
    ]), Jde = c.makeEnum("aiserver.v1.UserResponseToSuggestedCodeBlock.UserResponseType", [
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
]), kD = c.makeMessageType("aiserver.v1.ComposerFileDiff", ()=>[
        {
            no: 1,
            name: "chunks",
            kind: "message",
            T: Qde,
            repeated: !0
        },
        {
            no: 2,
            name: "editor",
            kind: "enum",
            T: c.getEnumType(Xde)
        },
        {
            no: 3,
            name: "hit_timeout",
            kind: "scalar",
            T: 8
        }
    ]), Xde = c.makeEnum("aiserver.v1.ComposerFileDiff.Editor", [
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
]), Qde = c.makeMessageType("aiserver.v1.ComposerFileDiff.ChunkDiff", ()=>[
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
}), Zde = c.makeMessageType("aiserver.v1.DiffHistoryData", ()=>[
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
            T: kD,
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
            T: kD
        }
    ]), eue = c.makeMessageType("aiserver.v1.SubagentReturnCall", ()=>[
        {
            no: 1,
            name: "subagent_type",
            kind: "enum",
            T: c.getEnumType(ide)
        },
        {
            no: 2,
            name: "deep_search_return_value",
            kind: "message",
            T: tue,
            oneof: "return_value"
        },
        {
            no: 3,
            name: "fix_lints_return_value",
            kind: "message",
            T: rue,
            oneof: "return_value"
        },
        {
            no: 4,
            name: "task_return_value",
            kind: "message",
            T: sue,
            oneof: "return_value"
        },
        {
            no: 5,
            name: "spec_return_value",
            kind: "message",
            T: iue,
            oneof: "return_value"
        }
    ]), tue = c.makeMessageType("aiserver.v1.DeepSearchSubagentReturnValue", ()=>[
        {
            no: 1,
            name: "context_items",
            kind: "message",
            T: nue,
            repeated: !0
        }
    ]), nue = c.makeMessageType("aiserver.v1.DeepSearchSubagentReturnValue.ContextItem", ()=>[
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
            T: qc,
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
}), rue = c.makeMessageType("aiserver.v1.FixLintsSubagentReturnValue", []), sue = c.makeMessageType("aiserver.v1.TaskSubagentReturnValue", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ]), iue = c.makeMessageType("aiserver.v1.SpecSubagentReturnValue", ()=>[
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
            T: aue,
            repeated: !0
        }
    ]), aue = c.makeMessageType("aiserver.v1.StringReplacement", ()=>[
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
    ]), oue = c.makeMessageType("aiserver.v1.ProjectLayout", ()=>[
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
            T: SD
        },
        {
            no: 3,
            name: "list_dir_v2_result",
            kind: "message",
            T: fN,
            opt: !0
        }
    ]), SD = c.makeMessageType("aiserver.v1.ProjectLayoutDirectoryContent", ()=>[
        {
            no: 1,
            name: "directories",
            kind: "message",
            T: cue,
            repeated: !0
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: yD,
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
            T: yD,
            repeated: !0
        }
    ]), cue = c.makeMessageType("aiserver.v1.ProjectLayoutDirectory", ()=>[
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
            T: SD
        }
    ]), yD = c.makeMessageType("aiserver.v1.ProjectLayoutFile", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]);

}
