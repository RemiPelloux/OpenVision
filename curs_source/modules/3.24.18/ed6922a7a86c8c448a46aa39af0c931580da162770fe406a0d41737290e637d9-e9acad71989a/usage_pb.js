import { qP } from "./empty_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var s5u, jXs, o5u, D7i, a5u, c5u, l5u, u5u, d5u, h5u, p5u, m5u, g5u, f5u, v5u, _5u, b5u, y5u, S5u, qXs, k5u, X0e;
export { D7i, S5u, X0e, _5u, a5u, b5u, c5u, d5u, f5u, g5u, h5u, jXs, k5u, l5u, m5u, o5u, p5u, qXs, s5u, u5u, v5u, y5u };
var __wakaru_w5u_initialized = false;
export function w5u() {
if (__wakaru_w5u_initialized) return;
__wakaru_w5u_initialized = true;
"use strict";
x(), bi(), s5u = k.makeEnum("aiserver.v1.UsageEventKind", [
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
]), jXs = k.makeMessageType("aiserver.v1.ModelSelectionSnapshot", ()=>[
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
            T: o5u,
            repeated: !0
        }
    ]), o5u = k.makeMessageType("aiserver.v1.ModelSelectionSnapshot.ModelParameterValue", ()=>[
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
}), D7i = k.makeMessageType("aiserver.v1.UsageEventDetails", ()=>[
        {
            no: 1,
            name: "chat",
            kind: "message",
            T: u5u,
            oneof: "feature"
        },
        {
            no: 2,
            name: "context_chat",
            kind: "message",
            T: g5u,
            oneof: "feature"
        },
        {
            no: 3,
            name: "cmd_k",
            kind: "message",
            T: f5u,
            oneof: "feature"
        },
        {
            no: 4,
            name: "terminal_cmd_k",
            kind: "message",
            T: v5u,
            oneof: "feature"
        },
        {
            no: 5,
            name: "ai_review_accepted_comment",
            kind: "message",
            T: _5u,
            oneof: "feature"
        },
        {
            no: 6,
            name: "interpreter_chat",
            kind: "message",
            T: b5u,
            oneof: "feature"
        },
        {
            no: 7,
            name: "slash_edit",
            kind: "message",
            T: y5u,
            oneof: "feature"
        },
        {
            no: 8,
            name: "composer",
            kind: "message",
            T: h5u,
            oneof: "feature"
        },
        {
            no: 9,
            name: "fast_apply",
            kind: "message",
            T: d5u,
            oneof: "feature"
        },
        {
            no: 10,
            name: "warm_composer",
            kind: "message",
            T: m5u,
            oneof: "feature"
        },
        {
            no: 11,
            name: "bug_finder_trigger_v1",
            kind: "message",
            T: c5u,
            oneof: "feature"
        },
        {
            no: 12,
            name: "tool_call_composer",
            kind: "message",
            T: p5u,
            oneof: "feature"
        },
        {
            no: 14,
            name: "bug_bot",
            kind: "message",
            T: l5u,
            oneof: "feature"
        },
        {
            no: 15,
            name: "prompt_hook",
            kind: "message",
            T: a5u,
            oneof: "feature"
        },
        {
            no: 20,
            name: "agent_sdk_managed",
            kind: "message",
            T: S5u,
            opt: !0
        },
        {
            no: 13,
            name: "override_num_requests_counted",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 16,
            name: "override_num_requests_counted_millis",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 17,
            name: "routed_model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 18,
            name: "requested_model_selection",
            kind: "message",
            T: jXs,
            opt: !0
        },
        {
            no: 19,
            name: "effective_model_selection",
            kind: "message",
            T: jXs,
            opt: !0
        }
    ]), a5u = k.makeMessageType("aiserver.v1.UsageEventDetails.PromptHook", ()=>[
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
            T: X0e,
            opt: !0
        },
        {
            no: 3,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "is_token_based_call",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ], {
    localName: "UsageEventDetails_PromptHook"
}), c5u = k.makeMessageType("aiserver.v1.UsageEventDetails.BugFinderTriggerV1", ()=>[
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
}), l5u = k.makeMessageType("aiserver.v1.UsageEventDetails.BugBot", ()=>[
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
            T: X0e
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
            T: qP,
            oneof: "discount"
        },
        {
            no: 6,
            name: "free",
            kind: "message",
            T: qP,
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
}), u5u = k.makeMessageType("aiserver.v1.UsageEventDetails.Chat", ()=>[
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
            opt: !0
        },
        {
            no: 3,
            name: "is_token_based_call",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "token_usage",
            kind: "message",
            T: X0e,
            opt: !0
        },
        {
            no: 5,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ], {
    localName: "UsageEventDetails_Chat"
}), d5u = k.makeMessageType("aiserver.v1.UsageEventDetails.FastApply", ()=>[
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
}), h5u = k.makeMessageType("aiserver.v1.UsageEventDetails.Composer", ()=>[
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
            opt: !0
        },
        {
            no: 3,
            name: "is_headless",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "is_token_based_call",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "token_usage",
            kind: "message",
            T: X0e,
            opt: !0
        },
        {
            no: 6,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ], {
    localName: "UsageEventDetails_Composer"
}), p5u = k.makeMessageType("aiserver.v1.UsageEventDetails.ToolCallComposer", ()=>[
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
            opt: !0
        },
        {
            no: 3,
            name: "is_headless",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "is_token_based_call",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "token_usage",
            kind: "message",
            T: X0e,
            opt: !0
        },
        {
            no: 6,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ], {
    localName: "UsageEventDetails_ToolCallComposer"
}), m5u = k.makeMessageType("aiserver.v1.UsageEventDetails.WarmComposer", ()=>[
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
            opt: !0
        }
    ], {
    localName: "UsageEventDetails_WarmComposer"
}), g5u = k.makeMessageType("aiserver.v1.UsageEventDetails.ContextChat", ()=>[
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
            opt: !0
        },
        {
            no: 3,
            name: "is_token_based_call",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "token_usage",
            kind: "message",
            T: X0e,
            opt: !0
        },
        {
            no: 5,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ], {
    localName: "UsageEventDetails_ContextChat"
}), f5u = k.makeMessageType("aiserver.v1.UsageEventDetails.CmdK", ()=>[
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
            opt: !0
        },
        {
            no: 3,
            name: "is_token_based_call",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "token_usage",
            kind: "message",
            T: X0e,
            opt: !0
        },
        {
            no: 5,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ], {
    localName: "UsageEventDetails_CmdK"
}), v5u = k.makeMessageType("aiserver.v1.UsageEventDetails.TerminalCmdK", ()=>[
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
            opt: !0
        },
        {
            no: 3,
            name: "is_token_based_call",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "token_usage",
            kind: "message",
            T: X0e,
            opt: !0
        },
        {
            no: 5,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ], {
    localName: "UsageEventDetails_TerminalCmdK"
}), _5u = k.makeMessageType("aiserver.v1.UsageEventDetails.AiReviewAcceptedComment", [], {
    localName: "UsageEventDetails_AiReviewAcceptedComment"
}), b5u = k.makeMessageType("aiserver.v1.UsageEventDetails.InterpreterChat", ()=>[
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
            opt: !0
        },
        {
            no: 3,
            name: "is_token_based_call",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "token_usage",
            kind: "message",
            T: X0e,
            opt: !0
        },
        {
            no: 5,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ], {
    localName: "UsageEventDetails_InterpreterChat"
}), y5u = k.makeMessageType("aiserver.v1.UsageEventDetails.SlashEdit", ()=>[
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
            opt: !0
        }
    ], {
    localName: "UsageEventDetails_SlashEdit"
}), S5u = k.makeMessageType("aiserver.v1.UsageEventDetails.AgentSdkManagedProduct", ()=>[
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
}), qXs = k.makeMessageType("aiserver.v1.UsageEvent", ()=>[
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
            T: D7i
        },
        {
            no: 3,
            name: "subscription_product_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "usage_price_id",
            kind: "scalar",
            T: 9,
            opt: !0
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
            opt: !0
        },
        {
            no: 8,
            name: "owning_team",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "price_cents",
            kind: "scalar",
            T: 2,
            opt: !0
        },
        {
            no: 10,
            name: "team_membership_type",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), k5u = k.makeMessageType("aiserver.v1.UsageEventDisplay", ()=>[
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
            T: k.getEnumType(s5u)
        },
        {
            no: 4,
            name: "custom_subscription_name",
            kind: "scalar",
            T: 9,
            opt: !0
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
            opt: !0
        },
        {
            no: 8,
            name: "is_token_based_call",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 9,
            name: "token_usage",
            kind: "message",
            T: X0e,
            opt: !0
        },
        {
            no: 10,
            name: "owning_user",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "owning_team",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "user_email",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 13,
            name: "cursor_token_fee",
            kind: "scalar",
            T: 2,
            opt: !0
        },
        {
            no: 14,
            name: "is_chargeable",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 15,
            name: "service_account_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 16,
            name: "service_account_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 17,
            name: "is_headless",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 18,
            name: "charged_cents",
            kind: "scalar",
            T: 2,
            opt: !0
        },
        {
            no: 19,
            name: "cloud_agent_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 20,
            name: "automation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 21,
            name: "automation_managed_type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 22,
            name: "client_type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 23,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 24,
            name: "subscription_product_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 25,
            name: "pr_author",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 26,
            name: "repo",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 27,
            name: "pr_number",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), X0e = k.makeMessageType("aiserver.v1.TokenUsage", ()=>[
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
            opt: !0
        },
        {
            no: 7,
            name: "enterprise_usage_discount_percent",
            kind: "scalar",
            T: 2,
            opt: !0
        }
    ]);

}
