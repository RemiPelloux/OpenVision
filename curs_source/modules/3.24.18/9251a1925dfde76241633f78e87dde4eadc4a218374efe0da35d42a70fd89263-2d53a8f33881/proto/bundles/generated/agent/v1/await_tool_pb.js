import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { protoInt64 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage50, __protoMessage350, AwaitArgs, AwaitTaskComplete, AwaitTaskStillRunning, AwaitError, AwaitSuccess, AwaitResult, AwaitToolCall;
export { AwaitArgs, AwaitError, AwaitResult, AwaitSuccess, AwaitTaskComplete, AwaitTaskStillRunning, AwaitToolCall, __protoMessage350, __protoPackage50 };
var __wakaru_init_await_tool_pb_initialized = false;
export function init_await_tool_pb() {
if (__wakaru_init_await_tool_pb_initialized) return;
__wakaru_init_await_tool_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage50 = "agent.v1.";
__protoMessage350 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage50;
    }
};
AwaitArgs = class _AwaitArgs extends __protoMessage350 {
    constructor(data){
        super();
        this.taskId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AwaitArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AwaitArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AwaitArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AwaitArgs, a, b2);
    }
    static $() {
        return [
            "AwaitArgs|1 task_id 9|2 block_until_ms 13?|3 regex 9?"
        ];
    }
};
AwaitTaskComplete = class _AwaitTaskComplete extends __protoMessage350 {
    constructor(data){
        super();
        this.taskId = "";
        this.runtimeMs = protoInt64.zero;
        this.outputFilePath = "";
        this.outputLength = protoInt64.zero;
        this.regexRequested = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AwaitTaskComplete().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AwaitTaskComplete().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AwaitTaskComplete().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AwaitTaskComplete, a, b2);
    }
    static $() {
        return [
            "AwaitTaskComplete|1 task_id 9|2 runtime_ms 4|3 output_file_path 9|4 output_length 4|5 regex_requested 8|6 regex_match 9?|7 exit_code 17?|8 wake_reason 9?"
        ];
    }
};
AwaitTaskStillRunning = class _AwaitTaskStillRunning extends __protoMessage350 {
    constructor(data){
        super();
        this.taskId = "";
        this.runtimeMs = protoInt64.zero;
        this.outputFilePath = "";
        this.outputLength = protoInt64.zero;
        this.regexRequested = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AwaitTaskStillRunning().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AwaitTaskStillRunning().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AwaitTaskStillRunning().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AwaitTaskStillRunning, a, b2);
    }
    static $() {
        return [
            "AwaitTaskStillRunning|1 task_id 9|2 runtime_ms 4|3 output_file_path 9|4 output_length 4|5 regex_requested 8|6 regex_match 9?|7 wake_reason 9?"
        ];
    }
};
AwaitError = class _AwaitError extends __protoMessage350 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AwaitError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AwaitError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AwaitError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AwaitError, a, b2);
    }
    static $() {
        return [
            "AwaitError|1 error 9"
        ];
    }
};
AwaitSuccess = class _AwaitSuccess extends __protoMessage350 {
    constructor(data){
        super();
        this.awaitResult = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AwaitSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AwaitSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AwaitSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AwaitSuccess, a, b2);
    }
    static $() {
        return [
            "AwaitSuccess|1 complete #0 await_result|2 still_running #1 await_result",
            AwaitTaskComplete,
            AwaitTaskStillRunning
        ];
    }
};
AwaitResult = class _AwaitResult extends __protoMessage350 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AwaitResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AwaitResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AwaitResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AwaitResult, a, b2);
    }
    static $() {
        return [
            "AwaitResult|1 complete #0 result|2 still_running #1 result|3 error #2 result|4 success #3 result",
            AwaitTaskComplete,
            AwaitTaskStillRunning,
            AwaitError,
            AwaitSuccess
        ];
    }
};
AwaitToolCall = class _AwaitToolCall extends __protoMessage350 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AwaitToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AwaitToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AwaitToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AwaitToolCall, a, b2);
    }
    static $() {
        return [
            "AwaitToolCall|1 args #0|2 result #1",
            AwaitArgs,
            AwaitResult
        ];
    }
};

}
