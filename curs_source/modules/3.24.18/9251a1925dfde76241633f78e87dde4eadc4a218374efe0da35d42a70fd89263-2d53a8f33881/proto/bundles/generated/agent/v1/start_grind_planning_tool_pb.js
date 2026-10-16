import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage44, __protoMessage344, StartGrindPlanningArgs, StartGrindPlanningResult, StartGrindPlanningSuccess, StartGrindPlanningError, StartGrindPlanningToolCall;
export { StartGrindPlanningArgs, StartGrindPlanningError, StartGrindPlanningResult, StartGrindPlanningSuccess, StartGrindPlanningToolCall, __protoMessage344, __protoPackage44 };
var __wakaru_init_start_grind_planning_tool_pb_initialized = false;
export function init_start_grind_planning_tool_pb() {
if (__wakaru_init_start_grind_planning_tool_pb_initialized) return;
__wakaru_init_start_grind_planning_tool_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage44 = "agent.v1.";
__protoMessage344 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage44;
    }
};
StartGrindPlanningArgs = class _StartGrindPlanningArgs extends __protoMessage344 {
    constructor(data){
        super();
        this.toolCallId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StartGrindPlanningArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StartGrindPlanningArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StartGrindPlanningArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StartGrindPlanningArgs, a, b2);
    }
    static $() {
        return [
            "StartGrindPlanningArgs|1 explanation 9?|2 tool_call_id 9"
        ];
    }
};
StartGrindPlanningResult = class _StartGrindPlanningResult extends __protoMessage344 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StartGrindPlanningResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StartGrindPlanningResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StartGrindPlanningResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StartGrindPlanningResult, a, b2);
    }
    static $() {
        return [
            "StartGrindPlanningResult|1 success #0 result|2 error #1 result",
            StartGrindPlanningSuccess,
            StartGrindPlanningError
        ];
    }
};
StartGrindPlanningSuccess = class _StartGrindPlanningSuccess extends __protoMessage344 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StartGrindPlanningSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StartGrindPlanningSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StartGrindPlanningSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StartGrindPlanningSuccess, a, b2);
    }
    static $() {
        return [
            "StartGrindPlanningSuccess"
        ];
    }
};
StartGrindPlanningError = class _StartGrindPlanningError extends __protoMessage344 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StartGrindPlanningError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StartGrindPlanningError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StartGrindPlanningError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StartGrindPlanningError, a, b2);
    }
    static $() {
        return [
            "StartGrindPlanningError|1 error 9"
        ];
    }
};
StartGrindPlanningToolCall = class _StartGrindPlanningToolCall extends __protoMessage344 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StartGrindPlanningToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StartGrindPlanningToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StartGrindPlanningToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StartGrindPlanningToolCall, a, b2);
    }
    static $() {
        return [
            "StartGrindPlanningToolCall|1 args #0|2 result #1",
            StartGrindPlanningArgs,
            StartGrindPlanningResult
        ];
    }
};

}
