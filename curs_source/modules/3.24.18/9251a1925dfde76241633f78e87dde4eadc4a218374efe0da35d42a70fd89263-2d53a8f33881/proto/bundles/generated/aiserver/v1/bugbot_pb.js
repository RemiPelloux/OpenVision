import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CodeBlock, GitDiff, ModelDetails, init_utils_pb2 } from "./utils_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage124, __protoMessage3121, BugLocation, BugReport, BugReports, StreamBugBotRequest, StreamBugBotRequest_Range;
export { BugLocation, BugReport, BugReports, StreamBugBotRequest, StreamBugBotRequest_Range, __protoMessage3121, __protoPackage124 };
var __wakaru_init_bugbot_pb_initialized = false;
export function init_bugbot_pb() {
if (__wakaru_init_bugbot_pb_initialized) return;
__wakaru_init_bugbot_pb_initialized = true;
"use strict";
init_esm2();
init_utils_pb2();
init_compact();
__protoPackage124 = "aiserver.v1.";
__protoMessage3121 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage124;
    }
};
BugLocation = class _BugLocation extends __protoMessage3121 {
    constructor(data){
        super();
        this.file = "";
        this.startLine = 0;
        this.endLine = 0;
        this.codeLines = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _BugLocation().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _BugLocation().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _BugLocation().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_BugLocation, a, b2);
    }
    static $() {
        return [
            "BugLocation|1 file 9|2 start_line 5|3 end_line 5|4 code_lines 9*"
        ];
    }
};
BugReport = class _BugReport extends __protoMessage3121 {
    constructor(data){
        super();
        this.locations = [];
        this.id = "";
        this.description = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _BugReport().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _BugReport().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _BugReport().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_BugReport, a, b2);
    }
    static $() {
        return [
            "BugReport|1 locations #0*|2 id 9|3 description 9|4 confidence 2?|5 category 9?|6 severity 9?|7 title 9?|9 rationale 9?|10 triggered_by_rule_id 9?|11 model_confidence 2?",
            BugLocation
        ];
    }
};
BugReports = class _BugReports extends __protoMessage3121 {
    constructor(data){
        super();
        this.bugReports = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _BugReports().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _BugReports().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _BugReports().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_BugReports, a, b2);
    }
    static $() {
        return [
            "BugReports|1 bug_reports #0*",
            BugReport
        ];
    }
};
StreamBugBotRequest = class _StreamBugBotRequest extends __protoMessage3121 {
    constructor(data){
        super();
        this.contextFiles = [];
        this.inBackgroundSubsidized = false;
        this.hasTelemetry = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamBugBotRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamBugBotRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamBugBotRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamBugBotRequest, a, b2);
    }
    static $() {
        return [
            "StreamBugBotRequest|1 git_diff #0|13 context_files #1*|2 model_details #2|3 user_instructions 9?|4 bug_detection_guidelines 9?|5 iterations 5?|12 unified_context_lines 5?|6 in_background_subsidized 8|7 session_id 9?|8 price_id 9?|9 has_telemetry 8|10 constrain_to_file 9?|11 constrain_to_range #3?|14 deep_review 8?",
            GitDiff,
            CodeBlock,
            ModelDetails,
            StreamBugBotRequest_Range
        ];
    }
};
StreamBugBotRequest_Range = class _StreamBugBotRequest_Range extends __protoMessage3121 {
    constructor(data){
        super();
        this.startLine = 0;
        this.endLineInclusive = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamBugBotRequest_Range().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamBugBotRequest_Range().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamBugBotRequest_Range().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamBugBotRequest_Range, a, b2);
    }
    static $() {
        return [
            "StreamBugBotRequest.Range|1 start_line 5|2 end_line_inclusive 5"
        ];
    }
};

}
