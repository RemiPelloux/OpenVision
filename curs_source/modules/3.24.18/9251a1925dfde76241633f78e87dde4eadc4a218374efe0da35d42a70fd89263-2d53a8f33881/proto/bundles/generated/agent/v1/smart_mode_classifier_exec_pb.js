import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { Struct } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/struct_pb.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage89, __protoMessage388, SmartModeClassifierDecision, SmartModeClassifierRuleEffect, SmartModeClassifierRuleSource, SmartModeClassifierConversationMessage, SmartModeClassifierArgs, SmartModeRiskTarget, SmartModeClassifierResult, SmartModeClassifierSuccess, SmartModeClassifierAppliedRule, SmartModeClassifierError;
export { SmartModeClassifierAppliedRule, SmartModeClassifierArgs, SmartModeClassifierConversationMessage, SmartModeClassifierDecision, SmartModeClassifierError, SmartModeClassifierResult, SmartModeClassifierRuleEffect, SmartModeClassifierRuleSource, SmartModeClassifierSuccess, SmartModeRiskTarget, __protoMessage388, __protoPackage89 };
var __wakaru_init_smart_mode_classifier_exec_pb_initialized = false;
export function init_smart_mode_classifier_exec_pb() {
if (__wakaru_init_smart_mode_classifier_exec_pb_initialized) return;
__wakaru_init_smart_mode_classifier_exec_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage89 = "agent.v1.";
__protoMessage388 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage89;
    }
};
SmartModeClassifierDecision = enumType2(proto3, __protoPackage89, "SmartModeClassifierDecision", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ALLOW"
    ],
    [
        2,
        "BLOCK"
    ]
], 1);
SmartModeClassifierRuleEffect = enumType2(proto3, __protoPackage89, "SmartModeClassifierRuleEffect", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ALLOW"
    ],
    [
        2,
        "ASK_FIRST"
    ]
], 1);
SmartModeClassifierRuleSource = enumType2(proto3, __protoPackage89, "SmartModeClassifierRuleSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CUSTOM_RULE"
    ],
    [
        2,
        "TEAM_RULE"
    ]
], 1);
SmartModeClassifierConversationMessage = class _SmartModeClassifierConversationMessage extends __protoMessage388 {
    constructor(data){
        super();
        this.role = "";
        this.content = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SmartModeClassifierConversationMessage().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SmartModeClassifierConversationMessage().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SmartModeClassifierConversationMessage().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SmartModeClassifierConversationMessage, a, b2);
    }
    static $() {
        return [
            "SmartModeClassifierConversationMessage|1 role 9|2 content 9"
        ];
    }
};
SmartModeClassifierArgs = class _SmartModeClassifierArgs extends __protoMessage388 {
    constructor(data){
        super();
        this.toolCallId = "";
        this.conversationContext = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SmartModeClassifierArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SmartModeClassifierArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SmartModeClassifierArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SmartModeClassifierArgs, a, b2);
    }
    static $() {
        return [
            "SmartModeClassifierArgs|1 tool_call_id 9|2 parent_conversation_id 9?|3 target #0|4 conversation_context #1*",
            SmartModeRiskTarget,
            SmartModeClassifierConversationMessage
        ];
    }
};
SmartModeRiskTarget = class _SmartModeRiskTarget extends __protoMessage388 {
    constructor(data){
        super();
        this.action = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SmartModeRiskTarget().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SmartModeRiskTarget().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SmartModeRiskTarget().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SmartModeRiskTarget, a, b2);
    }
    static $() {
        return [
            "SmartModeRiskTarget|1 action 9|2 arguments #0",
            Struct
        ];
    }
};
SmartModeClassifierResult = class _SmartModeClassifierResult extends __protoMessage388 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SmartModeClassifierResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SmartModeClassifierResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SmartModeClassifierResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SmartModeClassifierResult, a, b2);
    }
    static $() {
        return [
            "SmartModeClassifierResult|1 success #0 result|2 error #1 result",
            SmartModeClassifierSuccess,
            SmartModeClassifierError
        ];
    }
};
SmartModeClassifierSuccess = class _SmartModeClassifierSuccess extends __protoMessage388 {
    constructor(data){
        super();
        this.decision = SmartModeClassifierDecision.UNSPECIFIED;
        this.appliedRules = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SmartModeClassifierSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SmartModeClassifierSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SmartModeClassifierSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SmartModeClassifierSuccess, a, b2);
    }
    static $() {
        return [
            "SmartModeClassifierSuccess|1 decision #0|2 block_reason 9?|3 proposed_allow_rule 9?|4 applied_rules #1*",
            SmartModeClassifierDecision,
            SmartModeClassifierAppliedRule
        ];
    }
};
SmartModeClassifierAppliedRule = class _SmartModeClassifierAppliedRule extends __protoMessage388 {
    constructor(data){
        super();
        this.effect = SmartModeClassifierRuleEffect.UNSPECIFIED;
        this.text = "";
        this.source = SmartModeClassifierRuleSource.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SmartModeClassifierAppliedRule().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SmartModeClassifierAppliedRule().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SmartModeClassifierAppliedRule().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SmartModeClassifierAppliedRule, a, b2);
    }
    static $() {
        return [
            "SmartModeClassifierAppliedRule|1 effect #0|2 text 9|3 source #1",
            SmartModeClassifierRuleEffect,
            SmartModeClassifierRuleSource
        ];
    }
};
SmartModeClassifierError = class _SmartModeClassifierError extends __protoMessage388 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SmartModeClassifierError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SmartModeClassifierError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SmartModeClassifierError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SmartModeClassifierError, a, b2);
    }
    static $() {
        return [
            "SmartModeClassifierError|1 error 9"
        ];
    }
};

}
