import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage53, __protoMessage353, ReportBugArgs, ReportBugSuccess, ReportBugError, ReportBugResult, ReportBugToolCall;
export { ReportBugArgs, ReportBugError, ReportBugResult, ReportBugSuccess, ReportBugToolCall, __protoMessage353, __protoPackage53 };
var __wakaru_init_report_bug_tool_pb_initialized = false;
export function init_report_bug_tool_pb() {
if (__wakaru_init_report_bug_tool_pb_initialized) return;
__wakaru_init_report_bug_tool_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage53 = "agent.v1.";
__protoMessage353 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage53;
    }
};
ReportBugArgs = class _ReportBugArgs extends __protoMessage353 {
    constructor(data){
        super();
        this.title = "";
        this.file = "";
        this.startLine = 0;
        this.endLine = 0;
        this.description = "";
        this.severity = "";
        this.category = "";
        this.rationale = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReportBugArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReportBugArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReportBugArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReportBugArgs, a, b2);
    }
    static $() {
        return [
            "ReportBugArgs|1 title 9|2 file 9|3 start_line 5|4 end_line 5|5 description 9|6 severity 9|7 category 9|8 rationale 9"
        ];
    }
};
ReportBugSuccess = class _ReportBugSuccess extends __protoMessage353 {
    constructor(data){
        super();
        this.output = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReportBugSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReportBugSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReportBugSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReportBugSuccess, a, b2);
    }
    static $() {
        return [
            "ReportBugSuccess|1 output 9"
        ];
    }
};
ReportBugError = class _ReportBugError extends __protoMessage353 {
    constructor(data){
        super();
        this.errorMessage = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReportBugError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReportBugError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReportBugError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReportBugError, a, b2);
    }
    static $() {
        return [
            "ReportBugError|1 error_message 9"
        ];
    }
};
ReportBugResult = class _ReportBugResult extends __protoMessage353 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReportBugResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReportBugResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReportBugResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReportBugResult, a, b2);
    }
    static $() {
        return [
            "ReportBugResult|1 success #0 result|2 error #1 result",
            ReportBugSuccess,
            ReportBugError
        ];
    }
};
ReportBugToolCall = class _ReportBugToolCall extends __protoMessage353 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReportBugToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReportBugToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReportBugToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReportBugToolCall, a, b2);
    }
    static $() {
        return [
            "ReportBugToolCall|1 args #0|2 result #1",
            ReportBugArgs,
            ReportBugResult
        ];
    }
};

}
