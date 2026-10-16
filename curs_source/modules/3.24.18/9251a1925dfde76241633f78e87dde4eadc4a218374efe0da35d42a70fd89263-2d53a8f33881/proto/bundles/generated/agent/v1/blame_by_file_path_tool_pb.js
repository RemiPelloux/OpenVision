import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage51, __protoMessage351, BlameByFilePathArgs, BlameByFilePathSuccess, BlameByFilePathError, BlameByFilePathResult, BlameByFilePathToolCall;
export { BlameByFilePathArgs, BlameByFilePathError, BlameByFilePathResult, BlameByFilePathSuccess, BlameByFilePathToolCall, __protoMessage351, __protoPackage51 };
var __wakaru_init_blame_by_file_path_tool_pb_initialized = false;
export function init_blame_by_file_path_tool_pb() {
if (__wakaru_init_blame_by_file_path_tool_pb_initialized) return;
__wakaru_init_blame_by_file_path_tool_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage51 = "agent.v1.";
__protoMessage351 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage51;
    }
};
BlameByFilePathArgs = class _BlameByFilePathArgs extends __protoMessage351 {
    constructor(data){
        super();
        this.filePath = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _BlameByFilePathArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _BlameByFilePathArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _BlameByFilePathArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_BlameByFilePathArgs, a, b2);
    }
    static $() {
        return [
            "BlameByFilePathArgs|1 file_path 9|2 start_line 5?|3 end_line 5?"
        ];
    }
};
BlameByFilePathSuccess = class _BlameByFilePathSuccess extends __protoMessage351 {
    constructor(data){
        super();
        this.content = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _BlameByFilePathSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _BlameByFilePathSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _BlameByFilePathSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_BlameByFilePathSuccess, a, b2);
    }
    static $() {
        return [
            "BlameByFilePathSuccess|1 content 9"
        ];
    }
};
BlameByFilePathError = class _BlameByFilePathError extends __protoMessage351 {
    constructor(data){
        super();
        this.errorMessage = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _BlameByFilePathError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _BlameByFilePathError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _BlameByFilePathError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_BlameByFilePathError, a, b2);
    }
    static $() {
        return [
            "BlameByFilePathError|1 error_message 9"
        ];
    }
};
BlameByFilePathResult = class _BlameByFilePathResult extends __protoMessage351 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _BlameByFilePathResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _BlameByFilePathResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _BlameByFilePathResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_BlameByFilePathResult, a, b2);
    }
    static $() {
        return [
            "BlameByFilePathResult|1 success #0 result|2 error #1 result",
            BlameByFilePathSuccess,
            BlameByFilePathError
        ];
    }
};
BlameByFilePathToolCall = class _BlameByFilePathToolCall extends __protoMessage351 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _BlameByFilePathToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _BlameByFilePathToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _BlameByFilePathToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_BlameByFilePathToolCall, a, b2);
    }
    static $() {
        return [
            "BlameByFilePathToolCall|1 args #0|2 result #1",
            BlameByFilePathArgs,
            BlameByFilePathResult
        ];
    }
};

}
