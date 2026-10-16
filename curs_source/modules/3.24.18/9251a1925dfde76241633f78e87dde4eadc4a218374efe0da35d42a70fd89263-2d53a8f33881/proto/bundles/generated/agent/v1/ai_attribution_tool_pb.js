import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { OutputLocation, init_utils_pb } from "./utils_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage47, __protoMessage347, AiAttributionArgs, AiAttributionResult, AiAttributionSuccess, AiAttributionError, AiAttributionToolCall;
export { AiAttributionArgs, AiAttributionError, AiAttributionResult, AiAttributionSuccess, AiAttributionToolCall, __protoMessage347, __protoPackage47 };
var __wakaru_init_ai_attribution_tool_pb_initialized = false;
export function init_ai_attribution_tool_pb() {
if (__wakaru_init_ai_attribution_tool_pb_initialized) return;
__wakaru_init_ai_attribution_tool_pb_initialized = true;
"use strict";
init_esm2();
init_utils_pb();
init_compact();
__protoPackage47 = "agent.v1.";
__protoMessage347 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage47;
    }
};
AiAttributionArgs = class _AiAttributionArgs extends __protoMessage347 {
    constructor(data){
        super();
        this.filePaths = [];
        this.commitHashes = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AiAttributionArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AiAttributionArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AiAttributionArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AiAttributionArgs, a, b2);
    }
    static $() {
        return [
            "AiAttributionArgs|5 file_paths 9*|2 start_line 5?|3 end_line 5?|6 commit_hashes 9*|7 output_mode 9?|9 max_commits 5?|10 include_line_ranges 8?"
        ];
    }
};
AiAttributionResult = class _AiAttributionResult extends __protoMessage347 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AiAttributionResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AiAttributionResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AiAttributionResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AiAttributionResult, a, b2);
    }
    static $() {
        return [
            "AiAttributionResult|1 success #0 result|2 error #1 result",
            AiAttributionSuccess,
            AiAttributionError
        ];
    }
};
AiAttributionSuccess = class _AiAttributionSuccess extends __protoMessage347 {
    constructor(data){
        super();
        this.attributionText = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AiAttributionSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AiAttributionSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AiAttributionSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AiAttributionSuccess, a, b2);
    }
    static $() {
        return [
            "AiAttributionSuccess|1 attribution_text 9|2 output_location #0?",
            OutputLocation
        ];
    }
};
AiAttributionError = class _AiAttributionError extends __protoMessage347 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AiAttributionError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AiAttributionError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AiAttributionError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AiAttributionError, a, b2);
    }
    static $() {
        return [
            "AiAttributionError|1 error 9"
        ];
    }
};
AiAttributionToolCall = class _AiAttributionToolCall extends __protoMessage347 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AiAttributionToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AiAttributionToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AiAttributionToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AiAttributionToolCall, a, b2);
    }
    static $() {
        return [
            "AiAttributionToolCall|1 args #0|2 result #1",
            AiAttributionArgs,
            AiAttributionResult
        ];
    }
};

}
