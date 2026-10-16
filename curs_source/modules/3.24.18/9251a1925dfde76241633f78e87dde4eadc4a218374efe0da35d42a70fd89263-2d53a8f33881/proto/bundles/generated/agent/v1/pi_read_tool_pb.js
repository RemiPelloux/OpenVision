import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { PiTruncation, init_pi_common_pb } from "./pi_common_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage63, __protoMessage363, PiReadToolCall, PiReadToolArgs, PiReadToolResult, PiReadToolSuccess, PiReadToolError;
export { PiReadToolArgs, PiReadToolCall, PiReadToolError, PiReadToolResult, PiReadToolSuccess, __protoMessage363, __protoPackage63 };
var __wakaru_init_pi_read_tool_pb_initialized = false;
export function init_pi_read_tool_pb() {
if (__wakaru_init_pi_read_tool_pb_initialized) return;
__wakaru_init_pi_read_tool_pb_initialized = true;
"use strict";
init_esm2();
init_pi_common_pb();
init_compact();
__protoPackage63 = "agent.v1.";
__protoMessage363 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage63;
    }
};
PiReadToolCall = class _PiReadToolCall extends __protoMessage363 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiReadToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiReadToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiReadToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiReadToolCall, a, b2);
    }
    static $() {
        return [
            "PiReadToolCall|1 args #0|2 result #1",
            PiReadToolArgs,
            PiReadToolResult
        ];
    }
};
PiReadToolArgs = class _PiReadToolArgs extends __protoMessage363 {
    constructor(data){
        super();
        this.path = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiReadToolArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiReadToolArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiReadToolArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiReadToolArgs, a, b2);
    }
    static $() {
        return [
            "PiReadToolArgs|1 path 9|2 offset 5?|3 limit 5?"
        ];
    }
};
PiReadToolResult = class _PiReadToolResult extends __protoMessage363 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiReadToolResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiReadToolResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiReadToolResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiReadToolResult, a, b2);
    }
    static $() {
        return [
            "PiReadToolResult|1 success #0 result|2 error #1 result",
            PiReadToolSuccess,
            PiReadToolError
        ];
    }
};
PiReadToolSuccess = class _PiReadToolSuccess extends __protoMessage363 {
    constructor(data){
        super();
        this.output = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiReadToolSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiReadToolSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiReadToolSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiReadToolSuccess, a, b2);
    }
    static $() {
        return [
            "PiReadToolSuccess|1 output 9|2 truncation #0?",
            PiTruncation
        ];
    }
};
PiReadToolError = class _PiReadToolError extends __protoMessage363 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiReadToolError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiReadToolError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiReadToolError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiReadToolError, a, b2);
    }
    static $() {
        return [
            "PiReadToolError|1 error 9"
        ];
    }
};

}
