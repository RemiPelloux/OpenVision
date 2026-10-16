import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { protoInt64 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { ChangeIdentifier, init_change_pb } from "./change_pb.js";
import { ChangesetMergeabilitySummary, init_ci_pb } from "./ci_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage188, __protoMessage3180, GetReviewRequirementsRequest, GetReviewRequirementsResponse, ReviewRequirementsGates, ReviewRequirementsGatesFile, ReviewRequirementsGate, ReviewRequirementsPath, ReviewRequirementsOwnerScope, ReviewRequirementsOwnerRequirement, ReviewRequirementsCodeReviewGate, ReviewRequirementsCodeReviewGateReport, ReviewRequirementsApproval;
export { GetReviewRequirementsRequest, GetReviewRequirementsResponse, ReviewRequirementsApproval, ReviewRequirementsCodeReviewGate, ReviewRequirementsCodeReviewGateReport, ReviewRequirementsGate, ReviewRequirementsGates, ReviewRequirementsGatesFile, ReviewRequirementsOwnerRequirement, ReviewRequirementsOwnerScope, ReviewRequirementsPath, __protoMessage3180, __protoPackage188 };
var __wakaru_init_review_requirements_pb_initialized = false;
export function init_review_requirements_pb() {
if (__wakaru_init_review_requirements_pb_initialized) return;
__wakaru_init_review_requirements_pb_initialized = true;
"use strict";
init_esm2();
init_change_pb();
init_ci_pb();
init_compact();
__protoPackage188 = "origin.v1.";
__protoMessage3180 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage188;
    }
};
GetReviewRequirementsRequest = class _GetReviewRequirementsRequest extends __protoMessage3180 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetReviewRequirementsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetReviewRequirementsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetReviewRequirementsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetReviewRequirementsRequest, a, b2);
    }
    static $() {
        return [
            "GetReviewRequirementsRequest|1 change #0",
            ChangeIdentifier
        ];
    }
};
GetReviewRequirementsResponse = class _GetReviewRequirementsResponse extends __protoMessage3180 {
    constructor(data){
        super();
        this.headSha = "";
        this.codeReviewGates = [];
        this.approvals = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetReviewRequirementsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetReviewRequirementsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetReviewRequirementsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetReviewRequirementsResponse, a, b2);
    }
    static $() {
        return [
            "GetReviewRequirementsResponse|1 head_sha 9|2 mergeability #0|3 gates #1|4 code_review_gates #2*|5 approvals #3*",
            ChangesetMergeabilitySummary,
            ReviewRequirementsGates,
            ReviewRequirementsCodeReviewGate,
            ReviewRequirementsApproval
        ];
    }
};
ReviewRequirementsGates = class _ReviewRequirementsGates extends __protoMessage3180 {
    constructor(data){
        super();
        this.enrollment = "";
        this.headGatesFileErrors = [];
        this.requiredGates = [];
        this.gatesRequired = false;
        this.standInForChecks = [];
        this.gatesClearReview = false;
        this.humanOnlyPaths = [];
        this.cannotStandInPaths = [];
        this.uncoveredPaths = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReviewRequirementsGates().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReviewRequirementsGates().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReviewRequirementsGates().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReviewRequirementsGates, a, b2);
    }
    static $() {
        return [
            "ReviewRequirementsGates|1 enrollment 9|2 head_gates_file_errors 9*|3 gates_file #0?|4 required_gates #1*|5 gates_required 8|6 stand_in_for_checks 9*|7 gates_clear_review 8|8 human_only_paths #2*|9 cannot_stand_in_paths #2*|10 uncovered_paths 9*|11 owner_scope #3?|12 human_approval_latest_version_required 8?",
            ReviewRequirementsGatesFile,
            ReviewRequirementsGate,
            ReviewRequirementsPath,
            ReviewRequirementsOwnerScope
        ];
    }
};
ReviewRequirementsGatesFile = class _ReviewRequirementsGatesFile extends __protoMessage3180 {
    constructor(data){
        super();
        this.status = "";
        this.validationErrors = [];
        this.landingBaseSha = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReviewRequirementsGatesFile().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReviewRequirementsGatesFile().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReviewRequirementsGatesFile().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReviewRequirementsGatesFile, a, b2);
    }
    static $() {
        return [
            "ReviewRequirementsGatesFile|1 status 9|2 unavailable_reason 9?|3 validation_errors 9*|4 landing_base_sha 9|5 blob_oid 9?|6 trunk_tip_blob_oid 9?|7 landing_base_has_gates_file 8?"
        ];
    }
};
ReviewRequirementsGate = class _ReviewRequirementsGate extends __protoMessage3180 {
    constructor(data){
        super();
        this.gate = "";
        this.checkName = "";
        this.status = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReviewRequirementsGate().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReviewRequirementsGate().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReviewRequirementsGate().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReviewRequirementsGate, a, b2);
    }
    static $() {
        return [
            "ReviewRequirementsGate|1 gate 9|2 check_name 9|3 status 9|4 report_url 9?|5 report_client 9?"
        ];
    }
};
ReviewRequirementsPath = class _ReviewRequirementsPath extends __protoMessage3180 {
    constructor(data){
        super();
        this.path = "";
        this.reason = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReviewRequirementsPath().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReviewRequirementsPath().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReviewRequirementsPath().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReviewRequirementsPath, a, b2);
    }
    static $() {
        return [
            "ReviewRequirementsPath|1 path 9|2 reason 9|3 cause 9?"
        ];
    }
};
ReviewRequirementsOwnerScope = class _ReviewRequirementsOwnerScope extends __protoMessage3180 {
    constructor(data){
        super();
        this.kind = "";
        this.outside = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReviewRequirementsOwnerScope().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReviewRequirementsOwnerScope().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReviewRequirementsOwnerScope().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReviewRequirementsOwnerScope, a, b2);
    }
    static $() {
        return [
            "ReviewRequirementsOwnerScope|1 kind 9|2 reason 9?|3 outside #0*",
            ReviewRequirementsOwnerRequirement
        ];
    }
};
ReviewRequirementsOwnerRequirement = class _ReviewRequirementsOwnerRequirement extends __protoMessage3180 {
    constructor(data){
        super();
        this.source = "";
        this.anyHuman = false;
        this.owners = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReviewRequirementsOwnerRequirement().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReviewRequirementsOwnerRequirement().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReviewRequirementsOwnerRequirement().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReviewRequirementsOwnerRequirement, a, b2);
    }
    static $() {
        return [
            "ReviewRequirementsOwnerRequirement|1 source 9|2 any_human 8|3 owners 9*"
        ];
    }
};
ReviewRequirementsCodeReviewGate = class _ReviewRequirementsCodeReviewGate extends __protoMessage3180 {
    constructor(data){
        super();
        this.checkName = "";
        this.state = "";
        this.waivedByGates = false;
        this.blocking = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReviewRequirementsCodeReviewGate().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReviewRequirementsCodeReviewGate().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReviewRequirementsCodeReviewGate().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReviewRequirementsCodeReviewGate, a, b2);
    }
    static $() {
        return [
            "ReviewRequirementsCodeReviewGate|1 check_name 9|2 state 9|3 waived_by_gates 8|4 blocking 8|5 report #0?|6 owners_unknown_reason 9?",
            ReviewRequirementsCodeReviewGateReport
        ];
    }
};
ReviewRequirementsCodeReviewGateReport = class _ReviewRequirementsCodeReviewGateReport extends __protoMessage3180 {
    constructor(data){
        super();
        this.outcome = "";
        this.unblockReviewers = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReviewRequirementsCodeReviewGateReport().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReviewRequirementsCodeReviewGateReport().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReviewRequirementsCodeReviewGateReport().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReviewRequirementsCodeReviewGateReport, a, b2);
    }
    static $() {
        return [
            "ReviewRequirementsCodeReviewGateReport|1 outcome 9|2 satisfied_policies 13?|3 total_policies 13?|4 unblock_reviewers 9*"
        ];
    }
};
ReviewRequirementsApproval = class _ReviewRequirementsApproval extends __protoMessage3180 {
    constructor(data){
        super();
        this.source = "";
        this.owners = [];
        this.anyHuman = false;
        this.paths = [];
        this.morePaths = 0;
        this.changeNumber = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReviewRequirementsApproval().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReviewRequirementsApproval().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReviewRequirementsApproval().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReviewRequirementsApproval, a, b2);
    }
    static $() {
        return [
            "ReviewRequirementsApproval|1 source 9|2 owners 9*|3 any_human 8|4 paths 9*|5 more_paths 13|6 check_name 9?|7 scope 9?|8 required_count 13?|9 approved_count 13?|10 change_number 4"
        ];
    }
};

}
