import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { qd } from "./struct_pb.js";
import { E } from "./tslib.es6.js";
var Bkd, Ukd, jkd, $kd, k1r, Hkd, w1r, Wkd, Gkd, qkd;
export { $kd, Bkd, Gkd, Hkd, Ukd, Wkd, jkd, k1r, qkd, w1r };
var __wakaru_C1r_initialized = false;
export function C1r() {
if (__wakaru_C1r_initialized) return;
__wakaru_C1r_initialized = true;
"use strict";
E(), hr(), Bkd = x.makeEnum("agent.v1.SmartModeClassifierDecision", [
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
]), Ukd = x.makeEnum("agent.v1.SmartModeClassifierRuleEffect", [
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
]), jkd = x.makeEnum("agent.v1.SmartModeClassifierRuleSource", [
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
]), $kd = x.makeMessageType("agent.v1.SmartModeClassifierConversationMessage", ()=>[
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
    ]), k1r = x.makeMessageType("agent.v1.SmartModeClassifierArgs", ()=>[
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
            T: Hkd
        },
        {
            no: 4,
            name: "conversation_context",
            kind: "message",
            T: $kd,
            repeated: !0
        }
    ]), Hkd = x.makeMessageType("agent.v1.SmartModeRiskTarget", ()=>[
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
            T: qd
        }
    ]), w1r = x.makeMessageType("agent.v1.SmartModeClassifierResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Wkd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: qkd,
            oneof: "result"
        }
    ]), Wkd = x.makeMessageType("agent.v1.SmartModeClassifierSuccess", ()=>[
        {
            no: 1,
            name: "decision",
            kind: "enum",
            T: x.getEnumType(Bkd)
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
            T: Gkd,
            repeated: !0
        }
    ]), Gkd = x.makeMessageType("agent.v1.SmartModeClassifierAppliedRule", ()=>[
        {
            no: 1,
            name: "effect",
            kind: "enum",
            T: x.getEnumType(Ukd)
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
            T: x.getEnumType(jkd)
        }
    ]), qkd = x.makeMessageType("agent.v1.SmartModeClassifierError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
