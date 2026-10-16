import { BFo, GFo, MI, Nni, Ove, P5, WFo, e9t, i9t, ju, nf, ok } from "./agent_pb.js";
import { Bve, Gmn, Xse, p5e, qde } from "./exec_pb.js";
import { U4p, j4p, jCn } from "./kv_pb.js";
import { Q_t, mmn, rSr } from "./mcp_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { AD, SQ } from "./requested_model_pb.js";
import { E } from "./tslib.es6.js";
var wTn, yki, CTn, x7a, c1m, _qe, u1m, _J, A7a, R7a, P7a, d1m, M7a, h1m, D7a, p1m, N7a, L7a, O7a, F7a, m1m, g1m, B7a, U7a, j7a, $7a, f1m, H7a, W7a, v1m, G7a, _1m, q7a, b1m, y1m, S1m, z7a, V7a, K7a, k1m, Y7a, w1m, C1m, X7a, T1m, E1m, I1m, x1m, Z7a, Q7a, A1m, R1m, P1m, M1m, D1m, J7a, N1m, L1m;
export { $7a, A1m, A7a, B7a, C1m, CTn, D1m, D7a, E1m, F7a, G7a, H7a, I1m, J7a, K7a, L1m, L7a, M1m, M7a, N1m, N7a, O7a, P1m, P7a, Q7a, R1m, R7a, S1m, T1m, U7a, V7a, W7a, X7a, Y7a, Z7a, _1m, _J, _qe, b1m, c1m, d1m, f1m, g1m, h1m, j7a, k1m, m1m, p1m, q7a, u1m, v1m, w1m, wTn, x1m, x7a, y1m, yki, z7a };
var __wakaru_V6e_initialized = false;
export function V6e() {
if (__wakaru_V6e_initialized) return;
__wakaru_V6e_initialized = true;
"use strict";
E(), hr(), ju(), SQ(), Q_t(), Xse(), j4p(), wTn = x.makeEnum("agent.v1.LocalPromptQualityInvocationStatus", [
    {
        no: 0,
        name: "LOCAL_PROMPT_QUALITY_INVOCATION_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "LOCAL_PROMPT_QUALITY_INVOCATION_STATUS_SUCCESS",
        localName: "SUCCESS"
    },
    {
        no: 2,
        name: "LOCAL_PROMPT_QUALITY_INVOCATION_STATUS_ERRORED",
        localName: "ERRORED"
    },
    {
        no: 3,
        name: "LOCAL_PROMPT_QUALITY_INVOCATION_STATUS_ABORTED",
        localName: "ABORTED"
    }
]), yki = x.makeEnum("agent.v1.LocalAgentMailboxGapReason", [
    {
        no: 0,
        name: "LOCAL_AGENT_MAILBOX_GAP_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "LOCAL_AGENT_MAILBOX_GAP_REASON_TRIMMED",
        localName: "TRIMMED"
    },
    {
        no: 2,
        name: "LOCAL_AGENT_MAILBOX_GAP_REASON_LOST",
        localName: "LOST"
    }
]), CTn = x.makeEnum("agent.v1.LocalAgentMailboxEndedReason", [
    {
        no: 0,
        name: "LOCAL_AGENT_MAILBOX_ENDED_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "LOCAL_AGENT_MAILBOX_ENDED_REASON_NO_ACTIVE_SUBSCRIPTIONS",
        localName: "NO_ACTIVE_SUBSCRIPTIONS"
    },
    {
        no: 2,
        name: "LOCAL_AGENT_MAILBOX_ENDED_REASON_STORE_DELETED",
        localName: "STORE_DELETED"
    },
    {
        no: 3,
        name: "LOCAL_AGENT_MAILBOX_ENDED_REASON_MIGRATED_TO_CLOUD",
        localName: "MIGRATED_TO_CLOUD"
    }
]), x7a = x.makeMessageType("agent.v1.ClientHeartbeat", []), c1m = x.makeMessageType("agent.v1.PrewarmRequest", ()=>[
        {
            no: 1,
            name: "model_details",
            kind: "message",
            T: Ove
        },
        {
            no: 9,
            name: "requested_model",
            kind: "message",
            T: AD,
            opt: !0
        },
        {
            no: 2,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "conversation_state",
            kind: "message",
            T: nf
        },
        {
            no: 4,
            name: "mcp_tools",
            kind: "message",
            T: rSr
        },
        {
            no: 5,
            name: "mcp_file_system_options",
            kind: "message",
            T: mmn,
            opt: !0
        },
        {
            no: 6,
            name: "best_of_n_group_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "try_use_best_of_n_promotion",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "custom_system_prompt",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "suggest_next_prompt",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 11,
            name: "subagent_type_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "exclude_workspace_context",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 13,
            name: "harness",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 14,
            name: "selected_subagent_models",
            kind: "message",
            T: AD,
            repeated: !0
        },
        {
            no: 15,
            name: "selected_subagent_model_details",
            kind: "message",
            T: Ove,
            repeated: !0
        },
        {
            no: 16,
            name: "conversation_group_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 17,
            name: "pre_fetched_blobs",
            kind: "message",
            T: WFo,
            repeated: !0
        },
        {
            no: 18,
            name: "client_supports_inline_images",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 19,
            name: "subagent_model_overrides",
            kind: "message",
            T: e9t,
            repeated: !0
        },
        {
            no: 20,
            name: "can_create_cloud_subagents",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 21,
            name: "suppress_subagent_progress_update_tool",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 22,
            name: "client_supports_send_to_user",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 23,
            name: "computer_use_coordinate_mode",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 24,
            name: "agent_session_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 26,
            name: "client_supports_routed_model_update",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 27,
            name: "client_llm_gateway_credential",
            kind: "message",
            T: Nni,
            opt: !0
        },
        {
            no: 28,
            name: "client_supports_preview_card",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 29,
            name: "started_as_new_project",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 30,
            name: "first_project_onboarding",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), _qe = x.makeMessageType("agent.v1.AgentClientMessage", ()=>[
        {
            no: 1,
            name: "run_request",
            kind: "message",
            T: GFo,
            oneof: "message"
        },
        {
            no: 2,
            name: "exec_client_message",
            kind: "message",
            T: p5e,
            oneof: "message"
        },
        {
            no: 5,
            name: "exec_client_control_message",
            kind: "message",
            T: Bve,
            oneof: "message"
        },
        {
            no: 3,
            name: "kv_client_message",
            kind: "message",
            T: jCn,
            oneof: "message"
        },
        {
            no: 4,
            name: "conversation_action",
            kind: "message",
            T: MI,
            oneof: "message"
        },
        {
            no: 6,
            name: "interaction_response",
            kind: "message",
            T: P5,
            oneof: "message"
        },
        {
            no: 7,
            name: "client_heartbeat",
            kind: "message",
            T: x7a,
            oneof: "message"
        },
        {
            no: 8,
            name: "prewarm_request",
            kind: "message",
            T: c1m,
            oneof: "message"
        }
    ]), u1m = x.makeMessageType("agent.v1.TtftBreakdown", ()=>[
        {
            no: 1,
            name: "server_first_token_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 2,
            name: "pre_stream_setup_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 3,
            name: "wait_for_first_event_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 4,
            name: "provider_ttft_ms",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 5,
            name: "slow_pool_wait_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 6,
            name: "client_prep_ms",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 7,
            name: "client_clock",
            kind: "scalar",
            T: 8
        }
    ]), _J = x.makeMessageType("agent.v1.AgentServerMessage", ()=>[
        {
            no: 1,
            name: "interaction_update",
            kind: "message",
            T: ok,
            oneof: "message"
        },
        {
            no: 2,
            name: "exec_server_message",
            kind: "message",
            T: qde,
            oneof: "message"
        },
        {
            no: 5,
            name: "exec_server_control_message",
            kind: "message",
            T: Gmn,
            oneof: "message"
        },
        {
            no: 3,
            name: "conversation_checkpoint_update",
            kind: "message",
            T: nf,
            oneof: "message"
        },
        {
            no: 4,
            name: "kv_server_message",
            kind: "message",
            T: U4p,
            oneof: "message"
        },
        {
            no: 7,
            name: "interaction_query",
            kind: "message",
            T: i9t,
            oneof: "message"
        },
        {
            no: 8,
            name: "ttft_breakdown",
            kind: "message",
            T: u1m
        }
    ]), A7a = x.makeMessageType("agent.v1.NameAgentRequest", ()=>[
        {
            no: 1,
            name: "user_message",
            kind: "scalar",
            T: 9
        }
    ]), R7a = x.makeMessageType("agent.v1.NameAgentResponse", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]), P7a = x.makeMessageType("agent.v1.UpdateConversationMetadataRequest", ()=>[
        {
            no: 1,
            name: "conversation_id",
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
            name: "only_set_name_if_empty",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "workspace_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), d1m = x.makeMessageType("agent.v1.UpdateConversationMetadataResponse", []), M7a = x.makeMessageType("agent.v1.GetPromptContextUsageRequest", ()=>[
        {
            no: 1,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "root_prompt_messages_json",
            kind: "scalar",
            T: 12,
            repeated: !0
        }
    ]), h1m = x.makeMessageType("agent.v1.GetPromptContextUsageResponse", ()=>[
        {
            no: 2,
            name: "unavailable_blob_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "tree",
            kind: "message",
            T: BFo
        }
    ]), D7a = x.makeMessageType("agent.v1.CreateTranscriptOverviewRequest", ()=>[
        {
            no: 1,
            name: "formatted_conversation",
            kind: "scalar",
            T: 9
        }
    ]), p1m = x.makeMessageType("agent.v1.CreateTranscriptOverviewResponse", ()=>[
        {
            no: 1,
            name: "overview",
            kind: "scalar",
            T: 9
        }
    ]), N7a = x.makeMessageType("agent.v1.GetUsableModelsRequest", ()=>[
        {
            no: 1,
            name: "custom_model_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), L7a = x.makeMessageType("agent.v1.GetUsableModelsResponse", ()=>[
        {
            no: 1,
            name: "models",
            kind: "message",
            T: Ove,
            repeated: !0
        }
    ]), O7a = x.makeMessageType("agent.v1.GetDefaultModelForCliRequest", []), F7a = x.makeMessageType("agent.v1.GetDefaultModelForCliResponse", ()=>[
        {
            no: 1,
            name: "model",
            kind: "message",
            T: Ove
        }
    ]), m1m = x.makeMessageType("agent.v1.GetAllowedModelIntentsRequest", []), g1m = x.makeMessageType("agent.v1.GetAllowedModelIntentsResponse", ()=>[
        {
            no: 1,
            name: "model_intents",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), B7a = x.makeMessageType("agent.v1.IdeEditorsStateFile", ()=>[
        {
            no: 1,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "absolute_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "is_currently_focused",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "current_line_number",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 5,
            name: "current_line_text",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "line_count",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), U7a = x.makeMessageType("agent.v1.IdeEditorsStateLite", ()=>[
        {
            no: 1,
            name: "recently_viewed_files",
            kind: "message",
            T: B7a,
            repeated: !0
        }
    ]), j7a = x.makeMessageType("agent.v1.BlobEntry", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 12
        }
    ]), $7a = x.makeMessageType("agent.v1.UploadConversationBlobsRequest", ()=>[
        {
            no: 1,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "blobs",
            kind: "message",
            T: j7a,
            repeated: !0
        },
        {
            no: 3,
            name: "chunk_index",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "total_chunks",
            kind: "scalar",
            T: 5
        }
    ]), f1m = x.makeMessageType("agent.v1.UploadConversationBlobsResponse", []), H7a = x.makeMessageType("agent.v1.LocalPromptQualityInvocation", ()=>[
        {
            no: 1,
            name: "invocation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "attempt_request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "attempt",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "started_at",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "completed_at",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "provider_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "status",
            kind: "enum",
            T: x.getEnumType(wTn)
        },
        {
            no: 9,
            name: "messages",
            kind: "scalar",
            T: 12,
            repeated: !0
        },
        {
            no: 10,
            name: "response_messages",
            kind: "scalar",
            T: 12,
            repeated: !0
        },
        {
            no: 11,
            name: "tools_json",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "prompt_tokens",
            kind: "scalar",
            T: 3
        },
        {
            no: 13,
            name: "completion_tokens",
            kind: "scalar",
            T: 3
        },
        {
            no: 14,
            name: "total_tokens",
            kind: "scalar",
            T: 3
        },
        {
            no: 15,
            name: "token_limit",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 16,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 17,
            name: "prompt_tag",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 18,
            name: "feature_type",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), W7a = x.makeMessageType("agent.v1.UploadLocalAgentRunToPromptQualityRequest", ()=>[
        {
            no: 1,
            name: "schema_version",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "generation_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "payload_digest",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "invocations",
            kind: "message",
            T: H7a,
            repeated: !0
        },
        {
            no: 6,
            name: "terminal_status",
            kind: "enum",
            T: x.getEnumType(wTn)
        },
        {
            no: 7,
            name: "created_at",
            kind: "scalar",
            T: 9
        }
    ]), v1m = x.makeMessageType("agent.v1.UploadLocalAgentRunToPromptQualityResponse", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "primary_invocation_id",
            kind: "scalar",
            T: 9
        }
    ]), G7a = x.makeMessageType("agent.v1.GetSignedUrlForAttachedMediaRequest", ()=>[
        {
            no: 3,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 1,
            name: "key",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "mime_type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "content_length_bytes",
            kind: "scalar",
            T: 3,
            opt: !0
        }
    ]), _1m = x.makeMessageType("agent.v1.GetSignedUrlForAttachedMediaResponse", ()=>[
        {
            no: 1,
            name: "key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "post_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "get_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "expires_at_unix_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "refresh_after_unix_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 6,
            name: "post_fields",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 7,
            name: "put_url",
            kind: "scalar",
            T: 9
        }
    ]), q7a = x.makeMessageType("agent.v1.NotifyConversationCloneRequest", ()=>[
        {
            no: 1,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "source_conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "source_request_id",
            kind: "scalar",
            T: 9
        }
    ]), b1m = x.makeMessageType("agent.v1.NotifyConversationCloneResponse", []), y1m = x.makeMessageType("agent.v1.GetNewChatNudgeLegacyModelPickerRequest", ()=>[
        {
            no: 1,
            name: "current_model",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "max_mode",
            kind: "scalar",
            T: 8
        }
    ]), S1m = x.makeMessageType("agent.v1.GetNewChatNudgeLegacyModelPickerResponse", ()=>[
        {
            no: 1,
            name: "nudge",
            kind: "message",
            T: k1m,
            opt: !0
        }
    ]), z7a = x.makeMessageType("agent.v1.NudgeBumpVariant", ()=>[
        {
            no: 1,
            name: "banner_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "banner_description",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), V7a = x.makeMessageType("agent.v1.NudgeAskVariant", ()=>[
        {
            no: 1,
            name: "popup_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "accept_label",
            kind: "scalar",
            T: 9
        }
    ]), K7a = x.makeMessageType("agent.v1.NudgeSilentSwitchVariant", []), k1m = x.makeMessageType("agent.v1.NewChatNudge", ()=>[
        {
            no: 1,
            name: "nudge_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "target_model",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "experiment_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "bump",
            kind: "message",
            T: z7a,
            oneof: "variant"
        },
        {
            no: 5,
            name: "ask",
            kind: "message",
            T: V7a,
            oneof: "variant"
        },
        {
            no: 6,
            name: "silent_switch",
            kind: "message",
            T: K7a,
            oneof: "variant"
        }
    ]), Y7a = x.makeMessageType("agent.v1.ListLocalSubscriptionToolsRequest", []), w1m = x.makeMessageType("agent.v1.LocalSubscriptionToolDefinition", ()=>[
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
            T: 9
        },
        {
            no: 3,
            name: "input_schema_json",
            kind: "scalar",
            T: 9
        }
    ]), C1m = x.makeMessageType("agent.v1.ListLocalSubscriptionToolsResponse", ()=>[
        {
            no: 1,
            name: "tools",
            kind: "message",
            T: w1m,
            repeated: !0
        }
    ]), X7a = x.makeMessageType("agent.v1.CallLocalSubscriptionToolRequest", ()=>[
        {
            no: 1,
            name: "conversation_id",
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
            name: "tool_args_json",
            kind: "scalar",
            T: 9
        }
    ]), T1m = x.makeMessageType("agent.v1.CallLocalSubscriptionToolResponse", ()=>[
        {
            no: 1,
            name: "result_json",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_error",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "watch_expires_at_unix_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        }
    ]), E1m = x.makeMessageType("agent.v1.SubscriptionDeliveryEntry", ()=>[
        {
            no: 1,
            name: "subscription_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "event_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "inbox_rel_path",
            kind: "scalar",
            T: 9
        }
    ]), I1m = x.makeMessageType("agent.v1.SubscriptionRemovedEntry", ()=>[
        {
            no: 1,
            name: "subscription_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "inbox_rel_path",
            kind: "scalar",
            T: 9
        }
    ]), x1m = x.makeMessageType("agent.v1.LocalAgentMailboxEntry", ()=>[
        {
            no: 1,
            name: "local_agent_mailbox_entry_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "subscription_delivery",
            kind: "message",
            T: E1m,
            oneof: "payload"
        },
        {
            no: 3,
            name: "subscription_removed",
            kind: "message",
            T: I1m,
            oneof: "payload"
        }
    ]), Z7a = x.makeMessageType("agent.v1.StreamLocalAgentMailboxRequest", ()=>[
        {
            no: 1,
            name: "conversations",
            kind: "message",
            T: Q7a,
            repeated: !0
        }
    ]), Q7a = x.makeMessageType("agent.v1.StreamLocalAgentMailboxRequest.ConversationCursor", ()=>[
        {
            no: 1,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "after_offset",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamLocalAgentMailboxRequest_ConversationCursor"
}), A1m = x.makeMessageType("agent.v1.LocalAgentMailboxDelivery", ()=>[
        {
            no: 1,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "offset",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "entry",
            kind: "message",
            T: x1m
        }
    ]), R1m = x.makeMessageType("agent.v1.LocalAgentMailboxGap", ()=>[
        {
            no: 1,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "after_offset",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "resume_offset",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "reason",
            kind: "enum",
            T: x.getEnumType(yki)
        }
    ]), P1m = x.makeMessageType("agent.v1.LocalAgentMailboxEnded", ()=>[
        {
            no: 1,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reason",
            kind: "enum",
            T: x.getEnumType(CTn)
        }
    ]), M1m = x.makeMessageType("agent.v1.StreamLocalAgentMailboxHeartbeat", []), D1m = x.makeMessageType("agent.v1.StreamLocalAgentMailboxResponse", ()=>[
        {
            no: 1,
            name: "delivery",
            kind: "message",
            T: A1m,
            oneof: "message"
        },
        {
            no: 2,
            name: "heartbeat",
            kind: "message",
            T: M1m,
            oneof: "message"
        },
        {
            no: 3,
            name: "gap",
            kind: "message",
            T: R1m,
            oneof: "message"
        },
        {
            no: 4,
            name: "ended",
            kind: "message",
            T: P1m,
            oneof: "message"
        }
    ]), J7a = x.makeMessageType("agent.v1.GetNewChatNudgeParameterizedModelPickerRequest", ()=>[
        {
            no: 1,
            name: "current_model",
            kind: "message",
            T: AD
        },
        {
            no: 2,
            name: "model_nudges_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), N1m = x.makeMessageType("agent.v1.GetNewChatNudgeParameterizedModelPickerResponse", ()=>[
        {
            no: 1,
            name: "nudge",
            kind: "message",
            T: L1m,
            opt: !0
        }
    ]), L1m = x.makeMessageType("agent.v1.NewChatNudgeV2", ()=>[
        {
            no: 1,
            name: "nudge_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "target_model",
            kind: "message",
            T: AD
        },
        {
            no: 3,
            name: "experiment_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "bump",
            kind: "message",
            T: z7a,
            oneof: "variant"
        },
        {
            no: 5,
            name: "ask",
            kind: "message",
            T: V7a,
            oneof: "variant"
        },
        {
            no: 6,
            name: "silent_switch",
            kind: "message",
            T: K7a,
            oneof: "variant"
        }
    ]);

}
