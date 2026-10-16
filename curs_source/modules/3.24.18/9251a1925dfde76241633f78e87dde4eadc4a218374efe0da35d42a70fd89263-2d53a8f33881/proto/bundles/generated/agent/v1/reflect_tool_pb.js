import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage41, __protoMessage341, ReflectArgs, ReflectResult, ReflectSuccess, ReflectError, ReflectToolCall;
export { ReflectArgs, ReflectError, ReflectResult, ReflectSuccess, ReflectToolCall, __protoMessage341, __protoPackage41 };
var __wakaru_init_reflect_tool_pb_initialized = false;
export function init_reflect_tool_pb() {
if (__wakaru_init_reflect_tool_pb_initialized) return;
__wakaru_init_reflect_tool_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage41 = "agent.v1.";
__protoMessage341 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage41;
    }
};
ReflectArgs = class _ReflectArgs extends __protoMessage341 {
    constructor(data){
        super();
        this.unexpectedActionOutcomes = "";
        this.relevantInstructions = "";
        this.scenarioAnalysis = "";
        this.criticalSynthesis = "";
        this.nextSteps = "";
        this.toolCallId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReflectArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReflectArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReflectArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReflectArgs, a, b2);
    }
    static $() {
        return [
            "ReflectArgs|1 unexpected_action_outcomes 9|2 relevant_instructions 9|3 scenario_analysis 9|4 critical_synthesis 9|5 next_steps 9|6 tool_call_id 9"
        ];
    }
};
ReflectResult = class _ReflectResult extends __protoMessage341 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReflectResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReflectResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReflectResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReflectResult, a, b2);
    }
    static $() {
        return [
            "ReflectResult|1 success #0 result|2 error #1 result",
            ReflectSuccess,
            ReflectError
        ];
    }
};
ReflectSuccess = class _ReflectSuccess extends __protoMessage341 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReflectSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReflectSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReflectSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReflectSuccess, a, b2);
    }
    static $() {
        return [
            "ReflectSuccess"
        ];
    }
};
ReflectError = class _ReflectError extends __protoMessage341 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReflectError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReflectError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReflectError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReflectError, a, b2);
    }
    static $() {
        return [
            "ReflectError|1 error 9"
        ];
    }
};
ReflectToolCall = class _ReflectToolCall extends __protoMessage341 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReflectToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReflectToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReflectToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReflectToolCall, a, b2);
    }
    static $() {
        return [
            "ReflectToolCall|1 args #0|2 result #1",
            ReflectArgs,
            ReflectResult
        ];
    }
};

}
