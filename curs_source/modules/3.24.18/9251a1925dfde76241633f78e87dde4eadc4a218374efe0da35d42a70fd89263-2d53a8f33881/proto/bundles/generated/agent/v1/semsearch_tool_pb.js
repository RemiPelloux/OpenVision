import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CodeResult, init_repository_pb } from "../../aiserver/v1/repository_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage26, __protoMessage326, SemSearchToolCall, SemSearchToolArgs, SemSearchToolResult, SemSearchToolSuccess, SemSearchToolError;
export { SemSearchToolArgs, SemSearchToolCall, SemSearchToolError, SemSearchToolResult, SemSearchToolSuccess, __protoMessage326, __protoPackage26 };
var __wakaru_init_semsearch_tool_pb_initialized = false;
export function init_semsearch_tool_pb() {
if (__wakaru_init_semsearch_tool_pb_initialized) return;
__wakaru_init_semsearch_tool_pb_initialized = true;
"use strict";
init_esm2();
init_repository_pb();
init_compact();
__protoPackage26 = "agent.v1.";
__protoMessage326 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage26;
    }
};
SemSearchToolCall = class _SemSearchToolCall extends __protoMessage326 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SemSearchToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SemSearchToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SemSearchToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SemSearchToolCall, a, b2);
    }
    static $() {
        return [
            "SemSearchToolCall|1 args #0|2 result #1",
            SemSearchToolArgs,
            SemSearchToolResult
        ];
    }
};
SemSearchToolArgs = class _SemSearchToolArgs extends __protoMessage326 {
    constructor(data){
        super();
        this.query = "";
        this.targetDirectories = [];
        this.explanation = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SemSearchToolArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SemSearchToolArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SemSearchToolArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SemSearchToolArgs, a, b2);
    }
    static $() {
        return [
            "SemSearchToolArgs|1 query 9|2 target_directories 9*|3 explanation 9"
        ];
    }
};
SemSearchToolResult = class _SemSearchToolResult extends __protoMessage326 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SemSearchToolResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SemSearchToolResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SemSearchToolResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SemSearchToolResult, a, b2);
    }
    static $() {
        return [
            "SemSearchToolResult|1 success #0 result|2 error #1 result",
            SemSearchToolSuccess,
            SemSearchToolError
        ];
    }
};
SemSearchToolSuccess = class _SemSearchToolSuccess extends __protoMessage326 {
    constructor(data){
        super();
        this.results = "";
        this.codeResults = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SemSearchToolSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SemSearchToolSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SemSearchToolSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SemSearchToolSuccess, a, b2);
    }
    static $() {
        return [
            "SemSearchToolSuccess|1 results 9|2 code_results #0*",
            CodeResult
        ];
    }
};
SemSearchToolError = class _SemSearchToolError extends __protoMessage326 {
    constructor(data){
        super();
        this.errorMessage = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SemSearchToolError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SemSearchToolError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SemSearchToolError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SemSearchToolError, a, b2);
    }
    static $() {
        return [
            "SemSearchToolError|1 error_message 9"
        ];
    }
};

}
