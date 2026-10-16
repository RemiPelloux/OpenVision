import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage9, __protoMessage39, GlobToolArgs, GlobToolResult, GlobToolError, GlobToolSuccess, GlobToolCall;
export { GlobToolArgs, GlobToolCall, GlobToolError, GlobToolResult, GlobToolSuccess, __protoMessage39, __protoPackage9 };
var __wakaru_init_glob_tool_pb_initialized = false;
export function init_glob_tool_pb() {
if (__wakaru_init_glob_tool_pb_initialized) return;
__wakaru_init_glob_tool_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage9 = "agent.v1.";
__protoMessage39 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage9;
    }
};
GlobToolArgs = class _GlobToolArgs extends __protoMessage39 {
    constructor(data){
        super();
        this.globPattern = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GlobToolArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GlobToolArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GlobToolArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GlobToolArgs, a, b2);
    }
    static $() {
        return [
            "GlobToolArgs|1 target_directory 9?|2 glob_pattern 9"
        ];
    }
};
GlobToolResult = class _GlobToolResult extends __protoMessage39 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GlobToolResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GlobToolResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GlobToolResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GlobToolResult, a, b2);
    }
    static $() {
        return [
            "GlobToolResult|1 success #0 result|2 error #1 result",
            GlobToolSuccess,
            GlobToolError
        ];
    }
};
GlobToolError = class _GlobToolError extends __protoMessage39 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GlobToolError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GlobToolError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GlobToolError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GlobToolError, a, b2);
    }
    static $() {
        return [
            "GlobToolError|1 error 9"
        ];
    }
};
GlobToolSuccess = class _GlobToolSuccess extends __protoMessage39 {
    constructor(data){
        super();
        this.pattern = "";
        this.path = "";
        this.files = [];
        this.totalFiles = 0;
        this.clientTruncated = false;
        this.ripgrepTruncated = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GlobToolSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GlobToolSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GlobToolSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GlobToolSuccess, a, b2);
    }
    static $() {
        return [
            "GlobToolSuccess|1 pattern 9|2 path 9|3 files 9*|4 total_files 5|5 client_truncated 8|6 ripgrep_truncated 8"
        ];
    }
};
GlobToolCall = class _GlobToolCall extends __protoMessage39 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GlobToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GlobToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GlobToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GlobToolCall, a, b2);
    }
    static $() {
        return [
            "GlobToolCall|1 args #0|2 result #1",
            GlobToolArgs,
            GlobToolResult
        ];
    }
};

}
