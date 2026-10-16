import { Hm, WDn, Yb, ejs, l$t, ode, ojs, qyt, sjs, tL, x1, zd } from "./agent_pb.js";
import { Iee, Lse, O$t, W0e, _X } from "./exec_pb.js";
import { F$t, XOu, YOu } from "./kv_pb.js";
import { FQe, V7t, y4i } from "./mcp_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { MD, Uj } from "./requested_model_pb.js";
import { x } from "./tslib.es6.js";
var NHt, LPd, NPd, _so, OPd, rPe, FPd, KW, bso, yso, Sso, BPd, kso, UPd, wso, $Pd, Cso, Tso, Eso, xso, HPd, WPd, Iso, Aso, Rso, Dso, GPd, Mso, Pso, VPd, Lso, jPd, Nso, qPd, zPd, KPd, Oso, Fso, Bso, YPd, XPd, ZPd, QPd, JPd, eLd, tLd, nLd, iLd, rLd, sLd, oLd, aLd, cLd, lLd, uLd, Uso, dLd, hLd;
export { $Pd, Aso, BPd, Bso, Cso, Dso, Eso, FPd, Fso, GPd, HPd, Iso, JPd, KPd, KW, LPd, Lso, Mso, NHt, NPd, Nso, OPd, Oso, Pso, QPd, Rso, Sso, Tso, UPd, Uso, VPd, WPd, XPd, YPd, ZPd, _so, aLd, bso, cLd, dLd, eLd, hLd, iLd, jPd, kso, lLd, nLd, oLd, qPd, rLd, rPe, sLd, tLd, uLd, wso, xso, yso, zPd };
var __wakaru_aUe_initialized = false;
export function aUe() {
if (__wakaru_aUe_initialized) return;
__wakaru_aUe_initialized = true;
"use strict";
x(), bi(), zd(), Uj(), FQe(), _X(), XOu(), NHt = k.makeEnum("agent.v1.LocalPromptQualityInvocationStatus", [
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
]), LPd = k.makeEnum("agent.v1.LocalAgentMailboxGapReason", [
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
]), NPd = k.makeEnum("agent.v1.LocalAgentMailboxEndedReason", [
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
]), _so = k.makeMessageType("agent.v1.ClientHeartbeat", []), OPd = k.makeMessageType("agent.v1.PrewarmRequest", ()=>[
        {
            no: 1,
            name: "model_details",
            kind: "message",
            T: ode
        },
        {
            no: 9,
            name: "requested_model",
            kind: "message",
            T: MD,
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
            T: Hm
        },
        {
            no: 4,
            name: "mcp_tools",
            kind: "message",
            T: y4i
        },
        {
            no: 5,
            name: "mcp_file_system_options",
            kind: "message",
            T: V7t,
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
            T: MD,
            repeated: !0
        },
        {
            no: 15,
            name: "selected_subagent_model_details",
            kind: "message",
            T: ode,
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
            T: sjs,
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
            T: l$t,
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
            T: WDn,
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
    ]), rPe = k.makeMessageType("agent.v1.AgentClientMessage", ()=>[
        {
            no: 1,
            name: "run_request",
            kind: "message",
            T: ojs,
            oneof: "message"
        },
        {
            no: 2,
            name: "exec_client_message",
            kind: "message",
            T: W0e,
            oneof: "message"
        },
        {
            no: 5,
            name: "exec_client_control_message",
            kind: "message",
            T: Lse,
            oneof: "message"
        },
        {
            no: 3,
            name: "kv_client_message",
            kind: "message",
            T: F$t,
            oneof: "message"
        },
        {
            no: 4,
            name: "conversation_action",
            kind: "message",
            T: x1,
            oneof: "message"
        },
        {
            no: 6,
            name: "interaction_response",
            kind: "message",
            T: tL,
            oneof: "message"
        },
        {
            no: 7,
            name: "client_heartbeat",
            kind: "message",
            T: _so,
            oneof: "message"
        },
        {
            no: 8,
            name: "prewarm_request",
            kind: "message",
            T: OPd,
            oneof: "message"
        }
    ]), FPd = k.makeMessageType("agent.v1.TtftBreakdown", ()=>[
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
    ]), KW = k.makeMessageType("agent.v1.AgentServerMessage", ()=>[
        {
            no: 1,
            name: "interaction_update",
            kind: "message",
            T: Yb,
            oneof: "message"
        },
        {
            no: 2,
            name: "exec_server_message",
            kind: "message",
            T: Iee,
            oneof: "message"
        },
        {
            no: 5,
            name: "exec_server_control_message",
            kind: "message",
            T: O$t,
            oneof: "message"
        },
        {
            no: 3,
            name: "conversation_checkpoint_update",
            kind: "message",
            T: Hm,
            oneof: "message"
        },
        {
            no: 4,
            name: "kv_server_message",
            kind: "message",
            T: YOu,
            oneof: "message"
        },
        {
            no: 7,
            name: "interaction_query",
            kind: "message",
            T: qyt,
            oneof: "message"
        },
        {
            no: 8,
            name: "ttft_breakdown",
            kind: "message",
            T: FPd
        }
    ]), bso = k.makeMessageType("agent.v1.NameAgentRequest", ()=>[
        {
            no: 1,
            name: "user_message",
            kind: "scalar",
            T: 9
        }
    ]), yso = k.makeMessageType("agent.v1.NameAgentResponse", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]), Sso = k.makeMessageType("agent.v1.UpdateConversationMetadataRequest", ()=>[
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
    ]), BPd = k.makeMessageType("agent.v1.UpdateConversationMetadataResponse", []), kso = k.makeMessageType("agent.v1.GetPromptContextUsageRequest", ()=>[
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
    ]), UPd = k.makeMessageType("agent.v1.GetPromptContextUsageResponse", ()=>[
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
            T: ejs
        }
    ]), wso = k.makeMessageType("agent.v1.CreateTranscriptOverviewRequest", ()=>[
        {
            no: 1,
            name: "formatted_conversation",
            kind: "scalar",
            T: 9
        }
    ]), $Pd = k.makeMessageType("agent.v1.CreateTranscriptOverviewResponse", ()=>[
        {
            no: 1,
            name: "overview",
            kind: "scalar",
            T: 9
        }
    ]), Cso = k.makeMessageType("agent.v1.GetUsableModelsRequest", ()=>[
        {
            no: 1,
            name: "custom_model_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Tso = k.makeMessageType("agent.v1.GetUsableModelsResponse", ()=>[
        {
            no: 1,
            name: "models",
            kind: "message",
            T: ode,
            repeated: !0
        }
    ]), Eso = k.makeMessageType("agent.v1.GetDefaultModelForCliRequest", []), xso = k.makeMessageType("agent.v1.GetDefaultModelForCliResponse", ()=>[
        {
            no: 1,
            name: "model",
            kind: "message",
            T: ode
        }
    ]), HPd = k.makeMessageType("agent.v1.GetAllowedModelIntentsRequest", []), WPd = k.makeMessageType("agent.v1.GetAllowedModelIntentsResponse", ()=>[
        {
            no: 1,
            name: "model_intents",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Iso = k.makeMessageType("agent.v1.IdeEditorsStateFile", ()=>[
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
    ]), Aso = k.makeMessageType("agent.v1.IdeEditorsStateLite", ()=>[
        {
            no: 1,
            name: "recently_viewed_files",
            kind: "message",
            T: Iso,
            repeated: !0
        }
    ]), Rso = k.makeMessageType("agent.v1.BlobEntry", ()=>[
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
    ]), Dso = k.makeMessageType("agent.v1.UploadConversationBlobsRequest", ()=>[
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
            T: Rso,
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
    ]), GPd = k.makeMessageType("agent.v1.UploadConversationBlobsResponse", []), Mso = k.makeMessageType("agent.v1.LocalPromptQualityInvocation", ()=>[
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
            T: k.getEnumType(NHt)
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
    ]), Pso = k.makeMessageType("agent.v1.UploadLocalAgentRunToPromptQualityRequest", ()=>[
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
            T: Mso,
            repeated: !0
        },
        {
            no: 6,
            name: "terminal_status",
            kind: "enum",
            T: k.getEnumType(NHt)
        },
        {
            no: 7,
            name: "created_at",
            kind: "scalar",
            T: 9
        }
    ]), VPd = k.makeMessageType("agent.v1.UploadLocalAgentRunToPromptQualityResponse", ()=>[
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
    ]), Lso = k.makeMessageType("agent.v1.GetSignedUrlForAttachedMediaRequest", ()=>[
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
    ]), jPd = k.makeMessageType("agent.v1.GetSignedUrlForAttachedMediaResponse", ()=>[
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
    ]), Nso = k.makeMessageType("agent.v1.NotifyConversationCloneRequest", ()=>[
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
    ]), qPd = k.makeMessageType("agent.v1.NotifyConversationCloneResponse", []), zPd = k.makeMessageType("agent.v1.GetNewChatNudgeLegacyModelPickerRequest", ()=>[
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
    ]), KPd = k.makeMessageType("agent.v1.GetNewChatNudgeLegacyModelPickerResponse", ()=>[
        {
            no: 1,
            name: "nudge",
            kind: "message",
            T: YPd,
            opt: !0
        }
    ]), Oso = k.makeMessageType("agent.v1.NudgeBumpVariant", ()=>[
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
    ]), Fso = k.makeMessageType("agent.v1.NudgeAskVariant", ()=>[
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
    ]), Bso = k.makeMessageType("agent.v1.NudgeSilentSwitchVariant", []), YPd = k.makeMessageType("agent.v1.NewChatNudge", ()=>[
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
            T: Oso,
            oneof: "variant"
        },
        {
            no: 5,
            name: "ask",
            kind: "message",
            T: Fso,
            oneof: "variant"
        },
        {
            no: 6,
            name: "silent_switch",
            kind: "message",
            T: Bso,
            oneof: "variant"
        }
    ]), XPd = k.makeMessageType("agent.v1.ListLocalSubscriptionToolsRequest", []), ZPd = k.makeMessageType("agent.v1.LocalSubscriptionToolDefinition", ()=>[
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
    ]), QPd = k.makeMessageType("agent.v1.ListLocalSubscriptionToolsResponse", ()=>[
        {
            no: 1,
            name: "tools",
            kind: "message",
            T: ZPd,
            repeated: !0
        }
    ]), JPd = k.makeMessageType("agent.v1.CallLocalSubscriptionToolRequest", ()=>[
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
    ]), eLd = k.makeMessageType("agent.v1.CallLocalSubscriptionToolResponse", ()=>[
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
    ]), tLd = k.makeMessageType("agent.v1.SubscriptionDeliveryEntry", ()=>[
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
    ]), nLd = k.makeMessageType("agent.v1.SubscriptionRemovedEntry", ()=>[
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
    ]), iLd = k.makeMessageType("agent.v1.LocalAgentMailboxEntry", ()=>[
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
            T: tLd,
            oneof: "payload"
        },
        {
            no: 3,
            name: "subscription_removed",
            kind: "message",
            T: nLd,
            oneof: "payload"
        }
    ]), rLd = k.makeMessageType("agent.v1.StreamLocalAgentMailboxRequest", ()=>[
        {
            no: 1,
            name: "conversations",
            kind: "message",
            T: sLd,
            repeated: !0
        }
    ]), sLd = k.makeMessageType("agent.v1.StreamLocalAgentMailboxRequest.ConversationCursor", ()=>[
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
}), oLd = k.makeMessageType("agent.v1.LocalAgentMailboxDelivery", ()=>[
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
            T: iLd
        }
    ]), aLd = k.makeMessageType("agent.v1.LocalAgentMailboxGap", ()=>[
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
            T: k.getEnumType(LPd)
        }
    ]), cLd = k.makeMessageType("agent.v1.LocalAgentMailboxEnded", ()=>[
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
            T: k.getEnumType(NPd)
        }
    ]), lLd = k.makeMessageType("agent.v1.StreamLocalAgentMailboxHeartbeat", []), uLd = k.makeMessageType("agent.v1.StreamLocalAgentMailboxResponse", ()=>[
        {
            no: 1,
            name: "delivery",
            kind: "message",
            T: oLd,
            oneof: "message"
        },
        {
            no: 2,
            name: "heartbeat",
            kind: "message",
            T: lLd,
            oneof: "message"
        },
        {
            no: 3,
            name: "gap",
            kind: "message",
            T: aLd,
            oneof: "message"
        },
        {
            no: 4,
            name: "ended",
            kind: "message",
            T: cLd,
            oneof: "message"
        }
    ]), Uso = k.makeMessageType("agent.v1.GetNewChatNudgeParameterizedModelPickerRequest", ()=>[
        {
            no: 1,
            name: "current_model",
            kind: "message",
            T: MD
        },
        {
            no: 2,
            name: "model_nudges_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), dLd = k.makeMessageType("agent.v1.GetNewChatNudgeParameterizedModelPickerResponse", ()=>[
        {
            no: 1,
            name: "nudge",
            kind: "message",
            T: hLd,
            opt: !0
        }
    ]), hLd = k.makeMessageType("agent.v1.NewChatNudgeV2", ()=>[
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
            T: MD
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
            T: Oso,
            oneof: "variant"
        },
        {
            no: 5,
            name: "ask",
            kind: "message",
            T: Fso,
            oneof: "variant"
        },
        {
            no: 6,
            name: "silent_switch",
            kind: "message",
            T: Bso,
            oneof: "variant"
        }
    ]);

}
