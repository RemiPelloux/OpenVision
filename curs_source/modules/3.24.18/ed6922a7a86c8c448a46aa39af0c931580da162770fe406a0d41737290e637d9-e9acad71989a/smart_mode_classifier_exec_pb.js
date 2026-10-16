import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { fd } from "./struct_pb.js";
import { x } from "./tslib.es6.js";
var w2u, C2u, T2u, E2u, F8i, x2u, B8i, I2u, A2u, R2u;
export { A2u, B8i, C2u, E2u, F8i, I2u, R2u, T2u, w2u, x2u };
var __wakaru_U8i_initialized = false;
export function U8i() {
if (__wakaru_U8i_initialized) return;
__wakaru_U8i_initialized = true;
"use strict";
x(), bi(), w2u = k.makeEnum("agent.v1.SmartModeClassifierDecision", [
    {
        no: 0,
        name: "SMART_MODE_CLASSIFIER_DECISION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SMART_MODE_CLASSIFIER_DECISION_ALLOW",
        localName: "ALLOW"
    },
    {
        no: 2,
        name: "SMART_MODE_CLASSIFIER_DECISION_BLOCK",
        localName: "BLOCK"
    }
]), C2u = k.makeEnum("agent.v1.SmartModeClassifierRuleEffect", [
    {
        no: 0,
        name: "SMART_MODE_CLASSIFIER_RULE_EFFECT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SMART_MODE_CLASSIFIER_RULE_EFFECT_ALLOW",
        localName: "ALLOW"
    },
    {
        no: 2,
        name: "SMART_MODE_CLASSIFIER_RULE_EFFECT_ASK_FIRST",
        localName: "ASK_FIRST"
    }
]), T2u = k.makeEnum("agent.v1.SmartModeClassifierRuleSource", [
    {
        no: 0,
        name: "SMART_MODE_CLASSIFIER_RULE_SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SMART_MODE_CLASSIFIER_RULE_SOURCE_CUSTOM_RULE",
        localName: "CUSTOM_RULE"
    },
    {
        no: 2,
        name: "SMART_MODE_CLASSIFIER_RULE_SOURCE_TEAM_RULE",
        localName: "TEAM_RULE"
    }
]), E2u = k.makeMessageType("agent.v1.SmartModeClassifierConversationMessage", ()=>[
        {
            no: 1,
            name: "role",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), F8i = k.makeMessageType("agent.v1.SmartModeClassifierArgs", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "parent_conversation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "target",
            kind: "message",
            T: x2u
        },
        {
            no: 4,
            name: "conversation_context",
            kind: "message",
            T: E2u,
            repeated: !0
        }
    ]), x2u = k.makeMessageType("agent.v1.SmartModeRiskTarget", ()=>[
        {
            no: 1,
            name: "action",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "arguments",
            kind: "message",
            T: fd
        }
    ]), B8i = k.makeMessageType("agent.v1.SmartModeClassifierResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: I2u,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: R2u,
            oneof: "result"
        }
    ]), I2u = k.makeMessageType("agent.v1.SmartModeClassifierSuccess", ()=>[
        {
            no: 1,
            name: "decision",
            kind: "enum",
            T: k.getEnumType(w2u)
        },
        {
            no: 2,
            name: "block_reason",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "proposed_allow_rule",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "applied_rules",
            kind: "message",
            T: A2u,
            repeated: !0
        }
    ]), A2u = k.makeMessageType("agent.v1.SmartModeClassifierAppliedRule", ()=>[
        {
            no: 1,
            name: "effect",
            kind: "enum",
            T: k.getEnumType(C2u)
        },
        {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "source",
            kind: "enum",
            T: k.getEnumType(T2u)
        }
    ]), R2u = k.makeMessageType("agent.v1.SmartModeClassifierError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
