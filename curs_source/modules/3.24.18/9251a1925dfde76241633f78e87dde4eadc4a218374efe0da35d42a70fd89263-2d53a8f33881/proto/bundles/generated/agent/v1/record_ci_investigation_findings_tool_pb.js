import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage58, __protoMessage358, RecordCiInvestigationFinding, RecordCiInvestigationOverall, RecordCiInvestigationFindingsArgs, RecordCiInvestigationFindingsSuccess, RecordCiInvestigationFindingsError, RecordCiInvestigationFindingsResult, RecordCiInvestigationFindingsToolCall;
export { RecordCiInvestigationFinding, RecordCiInvestigationFindingsArgs, RecordCiInvestigationFindingsError, RecordCiInvestigationFindingsResult, RecordCiInvestigationFindingsSuccess, RecordCiInvestigationFindingsToolCall, RecordCiInvestigationOverall, __protoMessage358, __protoPackage58 };
var __wakaru_init_record_ci_investigation_findings_tool_pb_initialized = false;
export function init_record_ci_investigation_findings_tool_pb() {
if (__wakaru_init_record_ci_investigation_findings_tool_pb_initialized) return;
__wakaru_init_record_ci_investigation_findings_tool_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage58 = "agent.v1.";
__protoMessage358 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage58;
    }
};
RecordCiInvestigationFinding = class _RecordCiInvestigationFinding extends __protoMessage358 {
    constructor(data){
        super();
        this.checkName = "";
        this.tldr = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RecordCiInvestigationFinding().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RecordCiInvestigationFinding().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RecordCiInvestigationFinding().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RecordCiInvestigationFinding, a, b2);
    }
    static $() {
        return [
            "RecordCiInvestigationFinding|1 check_name 9|2 details_url 9?|3 tldr 9|4 root_cause 9?|5 failing_signal 9?|6 suggested_next_step 9?|7 diff_relation 9?|8 diff_relation_evidence 9?|9 flake_assessment 9?|10 flake_evidence 9?|11 rerun_available 8?|12 rerun_evidence 9?|13 recommended_action 9?|14 recommended_action_evidence 9?|15 confidence 9?"
        ];
    }
};
RecordCiInvestigationOverall = class _RecordCiInvestigationOverall extends __protoMessage358 {
    constructor(data){
        super();
        this.summary = "";
        this.themes = [];
        this.checkKeys = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RecordCiInvestigationOverall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RecordCiInvestigationOverall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RecordCiInvestigationOverall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RecordCiInvestigationOverall, a, b2);
    }
    static $() {
        return [
            "RecordCiInvestigationOverall|1 summary 9|2 themes 9*|3 recommended_action 9?|4 recommended_action_evidence 9?|5 check_keys 9*"
        ];
    }
};
RecordCiInvestigationFindingsArgs = class _RecordCiInvestigationFindingsArgs extends __protoMessage358 {
    constructor(data){
        super();
        this.findings = [];
        this.toolCallId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RecordCiInvestigationFindingsArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RecordCiInvestigationFindingsArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RecordCiInvestigationFindingsArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RecordCiInvestigationFindingsArgs, a, b2);
    }
    static $() {
        return [
            "RecordCiInvestigationFindingsArgs|1 findings #0*|2 overall #1?|3 tool_call_id 9",
            RecordCiInvestigationFinding,
            RecordCiInvestigationOverall
        ];
    }
};
RecordCiInvestigationFindingsSuccess = class _RecordCiInvestigationFindingsSuccess extends __protoMessage358 {
    constructor(data){
        super();
        this.message = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RecordCiInvestigationFindingsSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RecordCiInvestigationFindingsSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RecordCiInvestigationFindingsSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RecordCiInvestigationFindingsSuccess, a, b2);
    }
    static $() {
        return [
            "RecordCiInvestigationFindingsSuccess|1 message 9"
        ];
    }
};
RecordCiInvestigationFindingsError = class _RecordCiInvestigationFindingsError extends __protoMessage358 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RecordCiInvestigationFindingsError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RecordCiInvestigationFindingsError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RecordCiInvestigationFindingsError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RecordCiInvestigationFindingsError, a, b2);
    }
    static $() {
        return [
            "RecordCiInvestigationFindingsError|1 error 9"
        ];
    }
};
RecordCiInvestigationFindingsResult = class _RecordCiInvestigationFindingsResult extends __protoMessage358 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RecordCiInvestigationFindingsResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RecordCiInvestigationFindingsResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RecordCiInvestigationFindingsResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RecordCiInvestigationFindingsResult, a, b2);
    }
    static $() {
        return [
            "RecordCiInvestigationFindingsResult|1 success #0 result|2 error #1 result",
            RecordCiInvestigationFindingsSuccess,
            RecordCiInvestigationFindingsError
        ];
    }
};
RecordCiInvestigationFindingsToolCall = class _RecordCiInvestigationFindingsToolCall extends __protoMessage358 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RecordCiInvestigationFindingsToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RecordCiInvestigationFindingsToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RecordCiInvestigationFindingsToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RecordCiInvestigationFindingsToolCall, a, b2);
    }
    static $() {
        return [
            "RecordCiInvestigationFindingsToolCall|1 args #0|2 result #1",
            RecordCiInvestigationFindingsArgs,
            RecordCiInvestigationFindingsResult
        ];
    }
};

}
