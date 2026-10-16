import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage46, __protoMessage346, BugfixVerdict, BugfixResultItem, ReportBugfixResultsArgs, ReportBugfixResultsSuccess, ReportBugfixResultsError, ReportBugfixResultsResult, ReportBugfixResultsToolCall;
export { BugfixResultItem, BugfixVerdict, ReportBugfixResultsArgs, ReportBugfixResultsError, ReportBugfixResultsResult, ReportBugfixResultsSuccess, ReportBugfixResultsToolCall, __protoMessage346, __protoPackage46 };
var __wakaru_init_report_bugfix_results_tool_pb_initialized = false;
export function init_report_bugfix_results_tool_pb() {
if (__wakaru_init_report_bugfix_results_tool_pb_initialized) return;
__wakaru_init_report_bugfix_results_tool_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage46 = "agent.v1.";
__protoMessage346 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage46;
    }
};
BugfixVerdict = enumType2(proto3, __protoPackage46, "BugfixVerdict", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "FIXED"
    ],
    [
        2,
        "FALSE_POSITIVE"
    ],
    [
        3,
        "COULD_NOT_FIX"
    ],
    [
        4,
        "RESOLVED_BY_OTHER_FIX"
    ]
], 1);
BugfixResultItem = class _BugfixResultItem extends __protoMessage346 {
    constructor(data){
        super();
        this.bugId = "";
        this.bugTitle = "";
        this.verdict = BugfixVerdict.UNSPECIFIED;
        this.explanation = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _BugfixResultItem().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _BugfixResultItem().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _BugfixResultItem().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_BugfixResultItem, a, b2);
    }
    static $() {
        return [
            "BugfixResultItem|1 bug_id 9|2 bug_title 9|3 verdict #0|4 explanation 9|5 severity 9?",
            BugfixVerdict
        ];
    }
};
ReportBugfixResultsArgs = class _ReportBugfixResultsArgs extends __protoMessage346 {
    constructor(data){
        super();
        this.summary = "";
        this.results = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReportBugfixResultsArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReportBugfixResultsArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReportBugfixResultsArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReportBugfixResultsArgs, a, b2);
    }
    static $() {
        return [
            "ReportBugfixResultsArgs|1 summary 9|2 results #0*",
            BugfixResultItem
        ];
    }
};
ReportBugfixResultsSuccess = class _ReportBugfixResultsSuccess extends __protoMessage346 {
    constructor(data){
        super();
        this.results = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReportBugfixResultsSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReportBugfixResultsSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReportBugfixResultsSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReportBugfixResultsSuccess, a, b2);
    }
    static $() {
        return [
            "ReportBugfixResultsSuccess|1 results #0*",
            BugfixResultItem
        ];
    }
};
ReportBugfixResultsError = class _ReportBugfixResultsError extends __protoMessage346 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReportBugfixResultsError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReportBugfixResultsError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReportBugfixResultsError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReportBugfixResultsError, a, b2);
    }
    static $() {
        return [
            "ReportBugfixResultsError|1 error 9"
        ];
    }
};
ReportBugfixResultsResult = class _ReportBugfixResultsResult extends __protoMessage346 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReportBugfixResultsResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReportBugfixResultsResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReportBugfixResultsResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReportBugfixResultsResult, a, b2);
    }
    static $() {
        return [
            "ReportBugfixResultsResult|1 success #0 result|2 error #1 result",
            ReportBugfixResultsSuccess,
            ReportBugfixResultsError
        ];
    }
};
ReportBugfixResultsToolCall = class _ReportBugfixResultsToolCall extends __protoMessage346 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReportBugfixResultsToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReportBugfixResultsToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReportBugfixResultsToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReportBugfixResultsToolCall, a, b2);
    }
    static $() {
        return [
            "ReportBugfixResultsToolCall|1 args #0|2 result #1",
            ReportBugfixResultsArgs,
            ReportBugfixResultsResult
        ];
    }
};

}
