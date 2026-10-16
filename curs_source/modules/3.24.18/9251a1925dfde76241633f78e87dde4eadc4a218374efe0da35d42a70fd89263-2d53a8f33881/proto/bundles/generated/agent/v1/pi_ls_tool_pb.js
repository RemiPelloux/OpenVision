import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { PiTruncation, init_pi_common_pb } from "./pi_common_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage69, __protoMessage369, PiLsToolCall, PiLsToolArgs, PiLsToolResult, PiLsToolSuccess, PiLsToolError;
export { PiLsToolArgs, PiLsToolCall, PiLsToolError, PiLsToolResult, PiLsToolSuccess, __protoMessage369, __protoPackage69 };
var __wakaru_init_pi_ls_tool_pb_initialized = false;
export function init_pi_ls_tool_pb() {
if (__wakaru_init_pi_ls_tool_pb_initialized) return;
__wakaru_init_pi_ls_tool_pb_initialized = true;
"use strict";
init_esm2();
init_pi_common_pb();
init_compact();
__protoPackage69 = "agent.v1.";
__protoMessage369 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage69;
    }
};
PiLsToolCall = class _PiLsToolCall extends __protoMessage369 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiLsToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiLsToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiLsToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiLsToolCall, a, b2);
    }
    static $() {
        return [
            "PiLsToolCall|1 args #0|2 result #1",
            PiLsToolArgs,
            PiLsToolResult
        ];
    }
};
PiLsToolArgs = class _PiLsToolArgs extends __protoMessage369 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiLsToolArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiLsToolArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiLsToolArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiLsToolArgs, a, b2);
    }
    static $() {
        return [
            "PiLsToolArgs|1 path 9?|2 limit 5?"
        ];
    }
};
PiLsToolResult = class _PiLsToolResult extends __protoMessage369 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiLsToolResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiLsToolResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiLsToolResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiLsToolResult, a, b2);
    }
    static $() {
        return [
            "PiLsToolResult|1 success #0 result|2 error #1 result",
            PiLsToolSuccess,
            PiLsToolError
        ];
    }
};
PiLsToolSuccess = class _PiLsToolSuccess extends __protoMessage369 {
    constructor(data){
        super();
        this.output = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiLsToolSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiLsToolSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiLsToolSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiLsToolSuccess, a, b2);
    }
    static $() {
        return [
            "PiLsToolSuccess|1 output 9|2 truncation #0?|3 entry_limit_reached 13?",
            PiTruncation
        ];
    }
};
PiLsToolError = class _PiLsToolError extends __protoMessage369 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiLsToolError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiLsToolError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiLsToolError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiLsToolError, a, b2);
    }
    static $() {
        return [
            "PiLsToolError|1 error 9"
        ];
    }
};

}
