require.r(exports);
require.d(exports, {
    ModelSelectionSnapshot: ()=>ModelSelectionSnapshot,
    ModelSelectionSnapshot_ModelParameterValue: ()=>ModelSelectionSnapshot_ModelParameterValue,
    TokenUsage: ()=>TokenUsage,
    UsageEvent: ()=>UsageEvent,
    UsageEventDetails: ()=>UsageEventDetails,
    UsageEventDetails_AgentSdkManagedProduct: ()=>UsageEventDetails_AgentSdkManagedProduct,
    UsageEventDetails_AiReviewAcceptedComment: ()=>UsageEventDetails_AiReviewAcceptedComment,
    UsageEventDetails_BugBot: ()=>UsageEventDetails_BugBot,
    UsageEventDetails_BugFinderTriggerV1: ()=>UsageEventDetails_BugFinderTriggerV1,
    UsageEventDetails_Chat: ()=>UsageEventDetails_Chat,
    UsageEventDetails_CmdK: ()=>UsageEventDetails_CmdK,
    UsageEventDetails_Composer: ()=>UsageEventDetails_Composer,
    UsageEventDetails_ContextChat: ()=>UsageEventDetails_ContextChat,
    UsageEventDetails_FastApply: ()=>UsageEventDetails_FastApply,
    UsageEventDetails_InterpreterChat: ()=>UsageEventDetails_InterpreterChat,
    UsageEventDetails_PromptHook: ()=>UsageEventDetails_PromptHook,
    UsageEventDetails_SlashEdit: ()=>UsageEventDetails_SlashEdit,
    UsageEventDetails_TerminalCmdK: ()=>UsageEventDetails_TerminalCmdK,
    UsageEventDetails_ToolCallComposer: ()=>UsageEventDetails_ToolCallComposer,
    UsageEventDetails_WarmComposer: ()=>UsageEventDetails_WarmComposer,
    UsageEventDisplay: ()=>UsageEventDisplay,
    UsageEventKind: ()=>UsageEventKind
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const UsageEventKind = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.UsageEventKind", [
    {
        no: 0,
        name: "USAGE_EVENT_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "USAGE_EVENT_KIND_USAGE_BASED",
        localName: "USAGE_BASED"
    },
    {
        no: 2,
        name: "USAGE_EVENT_KIND_USER_API_KEY",
        localName: "USER_API_KEY"
    },
    {
        no: 3,
        name: "USAGE_EVENT_KIND_INCLUDED_IN_PRO",
        localName: "INCLUDED_IN_PRO"
    },
    {
        no: 4,
        name: "USAGE_EVENT_KIND_INCLUDED_IN_BUSINESS",
        localName: "INCLUDED_IN_BUSINESS"
    },
    {
        no: 5,
        name: "USAGE_EVENT_KIND_ERRORED_NOT_CHARGED",
        localName: "ERRORED_NOT_CHARGED"
    },
    {
        no: 6,
        name: "USAGE_EVENT_KIND_ABORTED_NOT_CHARGED",
        localName: "ABORTED_NOT_CHARGED"
    },
    {
        no: 7,
        name: "USAGE_EVENT_KIND_CUSTOM_SUBSCRIPTION",
        localName: "CUSTOM_SUBSCRIPTION"
    },
    {
        no: 8,
        name: "USAGE_EVENT_KIND_INCLUDED_IN_PRO_PLUS",
        localName: "INCLUDED_IN_PRO_PLUS"
    },
    {
        no: 9,
        name: "USAGE_EVENT_KIND_INCLUDED_IN_ULTRA",
        localName: "INCLUDED_IN_ULTRA"
    },
    {
        no: 10,
        name: "USAGE_EVENT_KIND_FREE_CREDIT",
        localName: "FREE_CREDIT"
    }
]);
const ModelSelectionSnapshot = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ModelSelectionSnapshot", ()=>[
        {
            no: 1,
            name: "model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "max_mode",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "parameters",
            kind: "message",
            T: ModelSelectionSnapshot_ModelParameterValue,
            repeated: true
        }
    ]);
const ModelSelectionSnapshot_ModelParameterValue = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ModelSelectionSnapshot.ModelParameterValue", ()=>[
        {
            no: 1,
            name: "id",
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
    localName: "ModelSelectionSnapshot_ModelParameterValue"
});
const UsageEventDetails = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UsageEventDetails", ()=>[
        {
            no: 1,
            name: "chat",
            kind: "message",
            T: UsageEventDetails_Chat,
            oneof: "feature"
        },
        {
            no: 2,
            name: "context_chat",
            kind: "message",
            T: UsageEventDetails_ContextChat,
            oneof: "feature"
        },
        {
            no: 3,
            name: "cmd_k",
            kind: "message",
            T: UsageEventDetails_CmdK,
            oneof: "feature"
        },
        {
            no: 4,
            name: "terminal_cmd_k",
            kind: "message",
            T: UsageEventDetails_TerminalCmdK,
            oneof: "feature"
        },
        {
            no: 5,
            name: "ai_review_accepted_comment",
            kind: "message",
            T: UsageEventDetails_AiReviewAcceptedComment,
            oneof: "feature"
        },
        {
            no: 6,
            name: "interpreter_chat",
            kind: "message",
            T: UsageEventDetails_InterpreterChat,
            oneof: "feature"
        },
        {
            no: 7,
            name: "slash_edit",
            kind: "message",
            T: UsageEventDetails_SlashEdit,
            oneof: "feature"
        },
        {
            no: 8,
            name: "composer",
            kind: "message",
            T: UsageEventDetails_Composer,
            oneof: "feature"
        },
        {
            no: 9,
            name: "fast_apply",
            kind: "message",
            T: UsageEventDetails_FastApply,
            oneof: "feature"
        },
        {
            no: 10,
            name: "warm_composer",
            kind: "message",
            T: UsageEventDetails_WarmComposer,
            oneof: "feature"
        },
        {
            no: 11,
            name: "bug_finder_trigger_v1",
            kind: "message",
            T: UsageEventDetails_BugFinderTriggerV1,
            oneof: "feature"
        },
        {
            no: 12,
            name: "tool_call_composer",
            kind: "message",
            T: UsageEventDetails_ToolCallComposer,
            oneof: "feature"
        },
        {
            no: 14,
            name: "bug_bot",
            kind: "message",
            T: UsageEventDetails_BugBot,
            oneof: "feature"
        },
        {
            no: 15,
            name: "prompt_hook",
            kind: "message",
            T: UsageEventDetails_PromptHook,
            oneof: "feature"
        },
        {
            no: 20,
            name: "agent_sdk_managed",
            kind: "message",
            T: UsageEventDetails_AgentSdkManagedProduct,
            opt: true
        },
        {
            no: 13,
            name: "override_num_requests_counted",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 16,
            name: "override_num_requests_counted_millis",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 17,
            name: "routed_model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 18,
            name: "requested_model_selection",
            kind: "message",
            T: ModelSelectionSnapshot,
            opt: true
        },
        {
            no: 19,
            name: "effective_model_selection",
            kind: "message",
            T: ModelSelectionSnapshot,
            opt: true
        }
    ]);
const UsageEventDetails_PromptHook = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UsageEventDetails.PromptHook", ()=>[
        {
            no: 1,
            name: "model_intent",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "token_usage",
            kind: "message",
            T: TokenUsage,
            opt: true
        },
        {
            no: 3,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "is_token_based_call",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ], {
    localName: "UsageEventDetails_PromptHook"
});
const UsageEventDetails_BugFinderTriggerV1 = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UsageEventDetails.BugFinderTriggerV1", ()=>[
        {
            no: 1,
            name: "in_background_subsidized",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "cost_cents",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "is_fast",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "UsageEventDetails_BugFinderTriggerV1"
});
const UsageEventDetails_BugBot = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UsageEventDetails.BugBot", ()=>[
        {
            no: 1,
            name: "model_intent",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "token_usage",
            kind: "message",
            T: TokenUsage
        },
        {
            no: 3,
            name: "is_token_based_call",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "max_mode",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "no_discount",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "discount"
        },
        {
            no: 6,
            name: "free",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "discount"
        },
        {
            no: 7,
            name: "billing_mode",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "UsageEventDetails_BugBot"
});
const UsageEventDetails_Chat = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UsageEventDetails.Chat", ()=>[
        {
            no: 1,
            name: "model_intent",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "override_num_requests_counted",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "is_token_based_call",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "token_usage",
            kind: "message",
            T: TokenUsage,
            opt: true
        },
        {
            no: 5,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ], {
    localName: "UsageEventDetails_Chat"
});
const UsageEventDetails_FastApply = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UsageEventDetails.FastApply", ()=>[
        {
            no: 1,
            name: "is_optimistic",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "willing_to_pay_extra_for_speed",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "UsageEventDetails_FastApply"
});
const UsageEventDetails_Composer = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UsageEventDetails.Composer", ()=>[
        {
            no: 1,
            name: "model_intent",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "override_num_requests_counted",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "is_headless",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "is_token_based_call",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "token_usage",
            kind: "message",
            T: TokenUsage,
            opt: true
        },
        {
            no: 6,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ], {
    localName: "UsageEventDetails_Composer"
});
const UsageEventDetails_ToolCallComposer = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UsageEventDetails.ToolCallComposer", ()=>[
        {
            no: 1,
            name: "model_intent",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "override_num_requests_counted",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "is_headless",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "is_token_based_call",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "token_usage",
            kind: "message",
            T: TokenUsage,
            opt: true
        },
        {
            no: 6,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ], {
    localName: "UsageEventDetails_ToolCallComposer"
});
const UsageEventDetails_WarmComposer = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UsageEventDetails.WarmComposer", ()=>[
        {
            no: 1,
            name: "model_intent",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ], {
    localName: "UsageEventDetails_WarmComposer"
});
const UsageEventDetails_ContextChat = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UsageEventDetails.ContextChat", ()=>[
        {
            no: 1,
            name: "model_intent",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "override_num_requests_counted",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "is_token_based_call",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "token_usage",
            kind: "message",
            T: TokenUsage,
            opt: true
        },
        {
            no: 5,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ], {
    localName: "UsageEventDetails_ContextChat"
});
const UsageEventDetails_CmdK = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UsageEventDetails.CmdK", ()=>[
        {
            no: 1,
            name: "model_intent",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "override_num_requests_counted",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "is_token_based_call",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "token_usage",
            kind: "message",
            T: TokenUsage,
            opt: true
        },
        {
            no: 5,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ], {
    localName: "UsageEventDetails_CmdK"
});
const UsageEventDetails_TerminalCmdK = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UsageEventDetails.TerminalCmdK", ()=>[
        {
            no: 1,
            name: "model_intent",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "override_num_requests_counted",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "is_token_based_call",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "token_usage",
            kind: "message",
            T: TokenUsage,
            opt: true
        },
        {
            no: 5,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ], {
    localName: "UsageEventDetails_TerminalCmdK"
});
const UsageEventDetails_AiReviewAcceptedComment = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UsageEventDetails.AiReviewAcceptedComment", [], {
    localName: "UsageEventDetails_AiReviewAcceptedComment"
});
const UsageEventDetails_InterpreterChat = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UsageEventDetails.InterpreterChat", ()=>[
        {
            no: 1,
            name: "model_intent",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "override_num_requests_counted",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "is_token_based_call",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "token_usage",
            kind: "message",
            T: TokenUsage,
            opt: true
        },
        {
            no: 5,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ], {
    localName: "UsageEventDetails_InterpreterChat"
});
const UsageEventDetails_SlashEdit = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UsageEventDetails.SlashEdit", ()=>[
        {
            no: 1,
            name: "model_intent",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ], {
    localName: "UsageEventDetails_SlashEdit"
});
const UsageEventDetails_AgentSdkManagedProduct = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UsageEventDetails.AgentSdkManagedProduct", ()=>[
        {
            no: 1,
            name: "managed_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "application_slug",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "UsageEventDetails_AgentSdkManagedProduct"
});
const UsageEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UsageEvent", ()=>[
        {
            no: 1,
            name: "timestamp",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "details",
            kind: "message",
            T: UsageEventDetails
        },
        {
            no: 3,
            name: "subscription_product_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "usage_price_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "is_slow",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "status",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "owning_user",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "owning_team",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "price_cents",
            kind: "scalar",
            T: 2,
            opt: true
        },
        {
            no: 10,
            name: "team_membership_type",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const UsageEventDisplay = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UsageEventDisplay", ()=>[
        {
            no: 1,
            name: "timestamp",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "model",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "kind",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(UsageEventKind)
        },
        {
            no: 4,
            name: "custom_subscription_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "max_mode",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "requests_costs",
            kind: "scalar",
            T: 2
        },
        {
            no: 7,
            name: "usage_based_costs",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "is_token_based_call",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 9,
            name: "token_usage",
            kind: "message",
            T: TokenUsage,
            opt: true
        },
        {
            no: 10,
            name: "owning_user",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "owning_team",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 12,
            name: "user_email",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 13,
            name: "cursor_token_fee",
            kind: "scalar",
            T: 2,
            opt: true
        },
        {
            no: 14,
            name: "is_chargeable",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 15,
            name: "service_account_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 16,
            name: "service_account_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 17,
            name: "is_headless",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 18,
            name: "charged_cents",
            kind: "scalar",
            T: 2,
            opt: true
        },
        {
            no: 19,
            name: "cloud_agent_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 20,
            name: "automation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 21,
            name: "automation_managed_type",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 22,
            name: "client_type",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 23,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 24,
            name: "subscription_product_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 25,
            name: "pr_author",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 26,
            name: "repo",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 27,
            name: "pr_number",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const TokenUsage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TokenUsage", ()=>[
        {
            no: 1,
            name: "input_tokens",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "output_tokens",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "cache_write_tokens",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "cache_read_tokens",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "total_cents",
            kind: "scalar",
            T: 2
        },
        {
            no: 6,
            name: "discount_percent_off",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 7,
            name: "enterprise_usage_discount_percent",
            kind: "scalar",
            T: 2,
            opt: true
        }
    ]);
