import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage55, __protoMessage355, SendFinalSummaryArgs, SendFinalSummarySuccess, SendFinalSummaryError, SendFinalSummaryResult, SendFinalSummaryToolCall;
export { SendFinalSummaryArgs, SendFinalSummaryError, SendFinalSummaryResult, SendFinalSummarySuccess, SendFinalSummaryToolCall, __protoMessage355, __protoPackage55 };
var __wakaru_init_send_final_summary_tool_pb_initialized = false;
export function init_send_final_summary_tool_pb() {
if (__wakaru_init_send_final_summary_tool_pb_initialized) return;
__wakaru_init_send_final_summary_tool_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage55 = "agent.v1.";
__protoMessage355 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage55;
    }
};
SendFinalSummaryArgs = class _SendFinalSummaryArgs extends __protoMessage355 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SendFinalSummaryArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SendFinalSummaryArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SendFinalSummaryArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SendFinalSummaryArgs, a, b2);
    }
    static $() {
        return [
            "SendFinalSummaryArgs|1 final_summary 9?"
        ];
    }
};
SendFinalSummarySuccess = class _SendFinalSummarySuccess extends __protoMessage355 {
    constructor(data){
        super();
        this.finalSummary = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SendFinalSummarySuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SendFinalSummarySuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SendFinalSummarySuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SendFinalSummarySuccess, a, b2);
    }
    static $() {
        return [
            "SendFinalSummarySuccess|1 final_summary 9"
        ];
    }
};
SendFinalSummaryError = class _SendFinalSummaryError extends __protoMessage355 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SendFinalSummaryError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SendFinalSummaryError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SendFinalSummaryError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SendFinalSummaryError, a, b2);
    }
    static $() {
        return [
            "SendFinalSummaryError|1 error 9"
        ];
    }
};
SendFinalSummaryResult = class _SendFinalSummaryResult extends __protoMessage355 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SendFinalSummaryResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SendFinalSummaryResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SendFinalSummaryResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SendFinalSummaryResult, a, b2);
    }
    static $() {
        return [
            "SendFinalSummaryResult|1 success #0 result|2 error #1 result",
            SendFinalSummarySuccess,
            SendFinalSummaryError
        ];
    }
};
SendFinalSummaryToolCall = class _SendFinalSummaryToolCall extends __protoMessage355 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SendFinalSummaryToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SendFinalSummaryToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SendFinalSummaryToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SendFinalSummaryToolCall, a, b2);
    }
    static $() {
        return [
            "SendFinalSummaryToolCall|1 args #0|2 result #1",
            SendFinalSummaryArgs,
            SendFinalSummaryResult
        ];
    }
};

}
