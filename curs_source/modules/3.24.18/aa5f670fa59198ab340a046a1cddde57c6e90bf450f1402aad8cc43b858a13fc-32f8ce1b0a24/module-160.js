require.r(exports);
require.d(exports, {
    SmartModeClassifierAppliedRule: ()=>SmartModeClassifierAppliedRule,
    SmartModeClassifierArgs: ()=>SmartModeClassifierArgs,
    SmartModeClassifierConversationMessage: ()=>SmartModeClassifierConversationMessage,
    SmartModeClassifierDecision: ()=>SmartModeClassifierDecision,
    SmartModeClassifierError: ()=>SmartModeClassifierError,
    SmartModeClassifierResult: ()=>SmartModeClassifierResult,
    SmartModeClassifierRuleEffect: ()=>SmartModeClassifierRuleEffect,
    SmartModeClassifierRuleSource: ()=>SmartModeClassifierRuleSource,
    SmartModeClassifierSuccess: ()=>SmartModeClassifierSuccess,
    SmartModeRiskTarget: ()=>SmartModeRiskTarget
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const SmartModeClassifierDecision = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.SmartModeClassifierDecision", [
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
]);
const SmartModeClassifierRuleEffect = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.SmartModeClassifierRuleEffect", [
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
]);
const SmartModeClassifierRuleSource = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.SmartModeClassifierRuleSource", [
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
]);
const SmartModeClassifierConversationMessage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SmartModeClassifierConversationMessage", ()=>[
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
    ]);
const SmartModeClassifierArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SmartModeClassifierArgs", ()=>[
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
            opt: true
        },
        {
            no: 3,
            name: "target",
            kind: "message",
            T: SmartModeRiskTarget
        },
        {
            no: 4,
            name: "conversation_context",
            kind: "message",
            T: SmartModeClassifierConversationMessage,
            repeated: true
        }
    ]);
const SmartModeRiskTarget = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SmartModeRiskTarget", ()=>[
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
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Struct
        }
    ]);
const SmartModeClassifierResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SmartModeClassifierResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: SmartModeClassifierSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: SmartModeClassifierError,
            oneof: "result"
        }
    ]);
const SmartModeClassifierSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SmartModeClassifierSuccess", ()=>[
        {
            no: 1,
            name: "decision",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SmartModeClassifierDecision)
        },
        {
            no: 2,
            name: "block_reason",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "proposed_allow_rule",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "applied_rules",
            kind: "message",
            T: SmartModeClassifierAppliedRule,
            repeated: true
        }
    ]);
const SmartModeClassifierAppliedRule = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SmartModeClassifierAppliedRule", ()=>[
        {
            no: 1,
            name: "effect",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SmartModeClassifierRuleEffect)
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
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SmartModeClassifierRuleSource)
        }
    ]);
const SmartModeClassifierError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SmartModeClassifierError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
