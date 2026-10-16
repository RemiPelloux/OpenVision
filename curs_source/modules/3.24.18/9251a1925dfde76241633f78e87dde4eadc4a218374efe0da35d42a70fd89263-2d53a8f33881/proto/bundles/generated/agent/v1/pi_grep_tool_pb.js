import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { PiTruncation, init_pi_common_pb } from "./pi_common_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage67, __protoMessage367, PiGrepToolCall, PiGrepToolArgs, PiGrepToolResult, PiGrepToolSuccess, PiGrepToolError;
export { PiGrepToolArgs, PiGrepToolCall, PiGrepToolError, PiGrepToolResult, PiGrepToolSuccess, __protoMessage367, __protoPackage67 };
var __wakaru_init_pi_grep_tool_pb_initialized = false;
export function init_pi_grep_tool_pb() {
if (__wakaru_init_pi_grep_tool_pb_initialized) return;
__wakaru_init_pi_grep_tool_pb_initialized = true;
"use strict";
init_esm2();
init_pi_common_pb();
init_compact();
__protoPackage67 = "agent.v1.";
__protoMessage367 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage67;
    }
};
PiGrepToolCall = class _PiGrepToolCall extends __protoMessage367 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiGrepToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiGrepToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiGrepToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiGrepToolCall, a, b2);
    }
    static $() {
        return [
            "PiGrepToolCall|1 args #0|2 result #1",
            PiGrepToolArgs,
            PiGrepToolResult
        ];
    }
};
PiGrepToolArgs = class _PiGrepToolArgs extends __protoMessage367 {
    constructor(data){
        super();
        this.pattern = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiGrepToolArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiGrepToolArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiGrepToolArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiGrepToolArgs, a, b2);
    }
    static $() {
        return [
            "PiGrepToolArgs|1 pattern 9|2 path 9?|3 glob 9?|4 ignore_case 8?|5 literal 8?|6 context 5?|7 limit 5?"
        ];
    }
};
PiGrepToolResult = class _PiGrepToolResult extends __protoMessage367 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiGrepToolResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiGrepToolResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiGrepToolResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiGrepToolResult, a, b2);
    }
    static $() {
        return [
            "PiGrepToolResult|1 success #0 result|2 error #1 result",
            PiGrepToolSuccess,
            PiGrepToolError
        ];
    }
};
PiGrepToolSuccess = class _PiGrepToolSuccess extends __protoMessage367 {
    constructor(data){
        super();
        this.output = "";
        this.linesTruncated = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiGrepToolSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiGrepToolSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiGrepToolSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiGrepToolSuccess, a, b2);
    }
    static $() {
        return [
            "PiGrepToolSuccess|1 output 9|2 truncation #0?|3 match_limit_reached 13?|4 lines_truncated 8",
            PiTruncation
        ];
    }
};
PiGrepToolError = class _PiGrepToolError extends __protoMessage367 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiGrepToolError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiGrepToolError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiGrepToolError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiGrepToolError, a, b2);
    }
    static $() {
        return [
            "PiGrepToolError|1 error 9"
        ];
    }
};

}
