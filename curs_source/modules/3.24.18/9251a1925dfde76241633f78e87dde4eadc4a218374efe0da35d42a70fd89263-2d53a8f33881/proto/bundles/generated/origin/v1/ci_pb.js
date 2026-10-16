import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { protoInt64 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { MergeMode, init_rpc_pb } from "../../git_forge/v1/rpc_pb.js";
import { ChangeIdentifier, ChangesetApprovedGate, init_change_pb } from "./change_pb.js";
import { CheckRunConclusion, CheckRunLifecycleStatus, init_check_run_enums_pb } from "./check_run_enums_pb.js";
import { ClientRepoIdentifier, init_origin_common_pb } from "./origin_common_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage185, __protoMessage3177, CommitCheckRollupState, CheckRunAnnotationLevel, MergeabilityScope, RestackStackMemberOutcome, GetCiStateRequest, GetCiStateResponse, BatchGetCommitCheckRollupsRequest, CommitCheckRollup, BatchGetCommitCheckRollupsResponse, GetCheckRunRequest, GetCheckRunResponse, ListRepoCheckSourcesRequest, RepoCheckSourceRun, RepoCheckSource, ListRepoCheckSourcesResponse, MissingRequiredCheck, CheckRunActor, CheckRunOutput, CheckRunStatus, CheckRunAnnotationBatch, CheckRunGroup, CiState, PostCheckRunRequest, CheckRunGroupInput, CheckRunInput, PostCheckRunResponse, CheckRunAnnotationColumnRange, CheckRunAnnotationLocation, CheckRunAnnotationInput, CheckRunAnnotation, CreateCheckRunAnnotationsRequest, CreateCheckRunAnnotationsResponse, ListCheckRunAnnotationsRequest, ListCheckRunAnnotationsResponse, RerequestCheckRunRequest, RerequestCheckRunResponse, GetChangesetMergeabilityRequest, GetChangesetMergeabilityResponse, ChangesetMergeabilitySummary, ChangesetMergeabilitySummaryBlocker, ChangesetMergeability, ChangesetRuleEvaluation, ChangesetGatesWaivedCheck, ChangesetReviewSatisfaction, ChangesetGatesResult, ChangesetRuleViolation, ChangesetRuleActionableSignal, ChangesetMergeBlocker, ChangesetRuleConfigurationDiagnostic, StackMergeability, StackMemberEvaluation, MergeStackRequest, MergeStackResponse, RestackStackRequest, RestackStackDryRunMember, RestackStackResponse, OriginCiJob, OriginCiJobResult, OriginCiJobStep, GetOriginCiJobLogRequest, GetOriginCiJobLogResponse;
export { BatchGetCommitCheckRollupsRequest, BatchGetCommitCheckRollupsResponse, ChangesetGatesResult, ChangesetGatesWaivedCheck, ChangesetMergeBlocker, ChangesetMergeability, ChangesetMergeabilitySummary, ChangesetMergeabilitySummaryBlocker, ChangesetReviewSatisfaction, ChangesetRuleActionableSignal, ChangesetRuleConfigurationDiagnostic, ChangesetRuleEvaluation, ChangesetRuleViolation, CheckRunActor, CheckRunAnnotation, CheckRunAnnotationBatch, CheckRunAnnotationColumnRange, CheckRunAnnotationInput, CheckRunAnnotationLevel, CheckRunAnnotationLocation, CheckRunGroup, CheckRunGroupInput, CheckRunInput, CheckRunOutput, CheckRunStatus, CiState, CommitCheckRollup, CommitCheckRollupState, CreateCheckRunAnnotationsRequest, CreateCheckRunAnnotationsResponse, GetChangesetMergeabilityRequest, GetChangesetMergeabilityResponse, GetCheckRunRequest, GetCheckRunResponse, GetCiStateRequest, GetCiStateResponse, GetOriginCiJobLogRequest, GetOriginCiJobLogResponse, ListCheckRunAnnotationsRequest, ListCheckRunAnnotationsResponse, ListRepoCheckSourcesRequest, ListRepoCheckSourcesResponse, MergeStackRequest, MergeStackResponse, MergeabilityScope, MissingRequiredCheck, OriginCiJob, OriginCiJobResult, OriginCiJobStep, PostCheckRunRequest, PostCheckRunResponse, RepoCheckSource, RepoCheckSourceRun, RerequestCheckRunRequest, RerequestCheckRunResponse, RestackStackDryRunMember, RestackStackMemberOutcome, RestackStackRequest, RestackStackResponse, StackMemberEvaluation, StackMergeability, __protoMessage3177, __protoPackage185 };
var __wakaru_init_ci_pb_initialized = false;
export function init_ci_pb() {
if (__wakaru_init_ci_pb_initialized) return;
__wakaru_init_ci_pb_initialized = true;
"use strict";
init_esm2();
init_origin_common_pb();
init_check_run_enums_pb();
init_change_pb();
init_rpc_pb();
init_compact();
__protoPackage185 = "origin.v1.";
__protoMessage3177 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage185;
    }
};
CommitCheckRollupState = enumType2(proto3, __protoPackage185, "CommitCheckRollupState", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NONE"
    ],
    [
        2,
        "SUCCESS"
    ],
    [
        3,
        "PENDING"
    ],
    [
        4,
        "FAILURE"
    ]
], 1);
CheckRunAnnotationLevel = enumType2(proto3, __protoPackage185, "CheckRunAnnotationLevel", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NOTICE"
    ],
    [
        2,
        "WARNING"
    ],
    [
        3,
        "FAILURE"
    ]
], 1);
MergeabilityScope = enumType2(proto3, __protoPackage185, "MergeabilityScope", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "STACK"
    ],
    [
        2,
        "SINGLE_CHANGE"
    ]
], 1);
RestackStackMemberOutcome = enumType2(proto3, __protoPackage185, "RestackStackMemberOutcome", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "OK"
    ],
    [
        2,
        "ALREADY_CURRENT"
    ],
    [
        3,
        "CONFLICT"
    ],
    [
        4,
        "SKIPPED"
    ]
], 1);
GetCiStateRequest = class _GetCiStateRequest extends __protoMessage3177 {
    constructor(data){
        super();
        this.sha = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetCiStateRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetCiStateRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetCiStateRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetCiStateRequest, a, b2);
    }
    static $() {
        return [
            "GetCiStateRequest|1 identifier #0|2 sha 9|3 change_number 4?|4 version_number 4?|5 use_latest_version 8?|6 include_check_run_annotations 8?",
            ClientRepoIdentifier
        ];
    }
};
GetCiStateResponse = class _GetCiStateResponse extends __protoMessage3177 {
    constructor(data){
        super();
        this.checkRunGroups = [];
        this.missingRequiredChecks = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetCiStateResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetCiStateResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetCiStateResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetCiStateResponse, a, b2);
    }
    static $() {
        return [
            "GetCiStateResponse|1 check_run_groups #0*|2 missing_required_checks #1*|3 resolved_head_sha 9?",
            CheckRunGroup,
            MissingRequiredCheck
        ];
    }
};
BatchGetCommitCheckRollupsRequest = class _BatchGetCommitCheckRollupsRequest extends __protoMessage3177 {
    constructor(data){
        super();
        this.shas = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _BatchGetCommitCheckRollupsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _BatchGetCommitCheckRollupsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _BatchGetCommitCheckRollupsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_BatchGetCommitCheckRollupsRequest, a, b2);
    }
    static $() {
        return [
            "BatchGetCommitCheckRollupsRequest|1 identifier #0|2 shas 9*",
            ClientRepoIdentifier
        ];
    }
};
CommitCheckRollup = class _CommitCheckRollup extends __protoMessage3177 {
    constructor(data){
        super();
        this.sha = "";
        this.state = CommitCheckRollupState.UNSPECIFIED;
        this.successCount = 0;
        this.pendingCount = 0;
        this.failureCount = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CommitCheckRollup().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CommitCheckRollup().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CommitCheckRollup().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CommitCheckRollup, a, b2);
    }
    static $() {
        return [
            "CommitCheckRollup|1 sha 9|2 state #0|3 success_count 13|4 pending_count 13|5 failure_count 13",
            CommitCheckRollupState
        ];
    }
};
BatchGetCommitCheckRollupsResponse = class _BatchGetCommitCheckRollupsResponse extends __protoMessage3177 {
    constructor(data){
        super();
        this.rollups = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _BatchGetCommitCheckRollupsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _BatchGetCommitCheckRollupsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _BatchGetCommitCheckRollupsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_BatchGetCommitCheckRollupsResponse, a, b2);
    }
    static $() {
        return [
            "BatchGetCommitCheckRollupsResponse|1 rollups #0*",
            CommitCheckRollup
        ];
    }
};
GetCheckRunRequest = class _GetCheckRunRequest extends __protoMessage3177 {
    constructor(data){
        super();
        this.checkRunId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetCheckRunRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetCheckRunRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetCheckRunRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetCheckRunRequest, a, b2);
    }
    static $() {
        return [
            "GetCheckRunRequest|1 identifier #0|2 check_run_id 9",
            ClientRepoIdentifier
        ];
    }
};
GetCheckRunResponse = class _GetCheckRunResponse extends __protoMessage3177 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetCheckRunResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetCheckRunResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetCheckRunResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetCheckRunResponse, a, b2);
    }
    static $() {
        return [
            "GetCheckRunResponse|1 check_run #0",
            CheckRunStatus
        ];
    }
};
ListRepoCheckSourcesRequest = class _ListRepoCheckSourcesRequest extends __protoMessage3177 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListRepoCheckSourcesRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListRepoCheckSourcesRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListRepoCheckSourcesRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListRepoCheckSourcesRequest, a, b2);
    }
    static $() {
        return [
            "ListRepoCheckSourcesRequest|1 identifier #0",
            ClientRepoIdentifier
        ];
    }
};
RepoCheckSourceRun = class _RepoCheckSourceRun extends __protoMessage3177 {
    constructor(data){
        super();
        this.runKey = "";
        this.name = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RepoCheckSourceRun().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RepoCheckSourceRun().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RepoCheckSourceRun().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RepoCheckSourceRun, a, b2);
    }
    static $() {
        return [
            "RepoCheckSourceRun|1 run_key 9|2 name 9"
        ];
    }
};
RepoCheckSource = class _RepoCheckSource extends __protoMessage3177 {
    constructor(data){
        super();
        this.groupKey = "";
        this.suiteName = "";
        this.runs = [];
        this.lastSeenAtUnixMs = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RepoCheckSource().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RepoCheckSource().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RepoCheckSource().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RepoCheckSource, a, b2);
    }
    static $() {
        return [
            "RepoCheckSource|1 actor #0|2 group_key 9|3 suite_name 9|4 runs #1*|5 last_seen_at_unix_ms 3",
            CheckRunActor,
            RepoCheckSourceRun
        ];
    }
};
ListRepoCheckSourcesResponse = class _ListRepoCheckSourcesResponse extends __protoMessage3177 {
    constructor(data){
        super();
        this.sources = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListRepoCheckSourcesResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListRepoCheckSourcesResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListRepoCheckSourcesResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListRepoCheckSourcesResponse, a, b2);
    }
    static $() {
        return [
            "ListRepoCheckSourcesResponse|1 sources #0*",
            RepoCheckSource
        ];
    }
};
MissingRequiredCheck = class _MissingRequiredCheck extends __protoMessage3177 {
    constructor(data){
        super();
        this.displayName = "";
        this.identityPath = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MissingRequiredCheck().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MissingRequiredCheck().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MissingRequiredCheck().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MissingRequiredCheck, a, b2);
    }
    static $() {
        return [
            "MissingRequiredCheck|1 display_name 9|2 identity_path 9"
        ];
    }
};
CheckRunActor = class _CheckRunActor extends __protoMessage3177 {
    constructor(data){
        super();
        this.kind = "";
        this.id = "";
        this.displayName = "";
        this.iconUrl = "";
        this.appId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CheckRunActor().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CheckRunActor().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CheckRunActor().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CheckRunActor, a, b2);
    }
    static $() {
        return [
            "CheckRunActor|1 kind 9|2 id 9|3 display_name 9|5 icon_url 9|6 app_id 9"
        ];
    }
};
CheckRunOutput = class _CheckRunOutput extends __protoMessage3177 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CheckRunOutput().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CheckRunOutput().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CheckRunOutput().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CheckRunOutput, a, b2);
    }
    static $() {
        return [
            "CheckRunOutput|1 title 9?|2 summary 9?|3 text 9?"
        ];
    }
};
CheckRunStatus = class _CheckRunStatus extends __protoMessage3177 {
    constructor(data){
        super();
        this.id = "";
        this.name = "";
        this.status = CheckRunLifecycleStatus.CHECK_RUN_LIFECYCLE_STATUS_UNSPECIFIED;
        this.externalId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CheckRunStatus().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CheckRunStatus().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CheckRunStatus().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CheckRunStatus, a, b2);
    }
    static $() {
        return [
            "CheckRunStatus|1 id 9|2 name 9|4 details_url 9?|5 status #0|6 conclusion #1?|7 started_at_unix_ms 3?|8 completed_at_unix_ms 3?|9 external_id 9|10 required 8?|11 output #2?|12 deadline_at_unix_ms 3?|13 is_rerequestable 8?|14 rerequested_at_unix_ms 3?|15 annotations #3?|16 base_sha 9?",
            CheckRunLifecycleStatus,
            CheckRunConclusion,
            CheckRunOutput,
            CheckRunAnnotationBatch
        ];
    }
};
CheckRunAnnotationBatch = class _CheckRunAnnotationBatch extends __protoMessage3177 {
    constructor(data){
        super();
        this.annotations = [];
        this.truncated = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CheckRunAnnotationBatch().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CheckRunAnnotationBatch().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CheckRunAnnotationBatch().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CheckRunAnnotationBatch, a, b2);
    }
    static $() {
        return [
            "CheckRunAnnotationBatch|1 annotations #0*|2 truncated 8",
            CheckRunAnnotation
        ];
    }
};
CheckRunGroup = class _CheckRunGroup extends __protoMessage3177 {
    constructor(data){
        super();
        this.id = "";
        this.name = "";
        this.checkRuns = [];
        this.externalId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CheckRunGroup().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CheckRunGroup().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CheckRunGroup().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CheckRunGroup, a, b2);
    }
    static $() {
        return [
            "CheckRunGroup|1 id 9|2 name 9|4 details_url 9?|5 check_runs #0*|6 actor #1|7 external_id 9|8 base_sha 9?",
            CheckRunStatus,
            CheckRunActor
        ];
    }
};
CiState = class _CiState extends __protoMessage3177 {
    constructor(data){
        super();
        this.checkRunGroups = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CiState().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CiState().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CiState().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CiState, a, b2);
    }
    static $() {
        return [
            "CiState|1 check_run_groups #0*",
            CheckRunGroup
        ];
    }
};
PostCheckRunRequest = class _PostCheckRunRequest extends __protoMessage3177 {
    constructor(data){
        super();
        this.headSha = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PostCheckRunRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PostCheckRunRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PostCheckRunRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PostCheckRunRequest, a, b2);
    }
    static $() {
        return [
            "PostCheckRunRequest|1 identifier #0|2 head_sha 9|3 group #1|4 check #2",
            ClientRepoIdentifier,
            CheckRunGroupInput,
            CheckRunInput
        ];
    }
};
CheckRunGroupInput = class _CheckRunGroupInput extends __protoMessage3177 {
    constructor(data){
        super();
        this.key = "";
        this.name = "";
        this.externalId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CheckRunGroupInput().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CheckRunGroupInput().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CheckRunGroupInput().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CheckRunGroupInput, a, b2);
    }
    static $() {
        return [
            "CheckRunGroupInput|1 key 9|2 name 9|3 external_id 9|4 details_url 9?"
        ];
    }
};
CheckRunInput = class _CheckRunInput extends __protoMessage3177 {
    constructor(data){
        super();
        this.key = "";
        this.name = "";
        this.externalId = "";
        this.status = CheckRunLifecycleStatus.CHECK_RUN_LIFECYCLE_STATUS_UNSPECIFIED;
        this.externalUpdatedAtUnixMs = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CheckRunInput().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CheckRunInput().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CheckRunInput().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CheckRunInput, a, b2);
    }
    static $() {
        return [
            "CheckRunInput|1 key 9|2 name 9|3 external_id 9|4 status #0|5 conclusion #1?|6 external_updated_at_unix_ms 3|7 started_at_unix_ms 3?|8 completed_at_unix_ms 3?|10 details_url 9?|11 output #2?|12 deadline_at_unix_ms 3?|13 is_rerequestable 8?",
            CheckRunLifecycleStatus,
            CheckRunConclusion,
            CheckRunOutput
        ];
    }
};
PostCheckRunResponse = class _PostCheckRunResponse extends __protoMessage3177 {
    constructor(data){
        super();
        this.repoId = "";
        this.sha = "";
        this.checkRunGroupId = "";
        this.checkRunId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PostCheckRunResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PostCheckRunResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PostCheckRunResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PostCheckRunResponse, a, b2);
    }
    static $() {
        return [
            "PostCheckRunResponse|1 repo_id 9|2 sha 9|3 check_run_group_id 9|4 check_run_id 9"
        ];
    }
};
CheckRunAnnotationColumnRange = class _CheckRunAnnotationColumnRange extends __protoMessage3177 {
    constructor(data){
        super();
        this.startColumn = 0;
        this.endColumn = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CheckRunAnnotationColumnRange().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CheckRunAnnotationColumnRange().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CheckRunAnnotationColumnRange().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CheckRunAnnotationColumnRange, a, b2);
    }
    static $() {
        return [
            "CheckRunAnnotationColumnRange|1 start_column 5|2 end_column 5"
        ];
    }
};
CheckRunAnnotationLocation = class _CheckRunAnnotationLocation extends __protoMessage3177 {
    constructor(data){
        super();
        this.path = "";
        this.startLine = 0;
        this.endLine = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CheckRunAnnotationLocation().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CheckRunAnnotationLocation().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CheckRunAnnotationLocation().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CheckRunAnnotationLocation, a, b2);
    }
    static $() {
        return [
            "CheckRunAnnotationLocation|1 path 9|2 start_line 5|3 end_line 5|4 columns #0",
            CheckRunAnnotationColumnRange
        ];
    }
};
CheckRunAnnotationInput = class _CheckRunAnnotationInput extends __protoMessage3177 {
    constructor(data){
        super();
        this.annotationLevel = CheckRunAnnotationLevel.UNSPECIFIED;
        this.message = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CheckRunAnnotationInput().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CheckRunAnnotationInput().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CheckRunAnnotationInput().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CheckRunAnnotationInput, a, b2);
    }
    static $() {
        return [
            "CheckRunAnnotationInput|4 annotation_level #0|5 message 9|8 title 9?|9 raw_details 9?|11 location #1",
            CheckRunAnnotationLevel,
            CheckRunAnnotationLocation
        ];
    }
};
CheckRunAnnotation = class _CheckRunAnnotation extends __protoMessage3177 {
    constructor(data){
        super();
        this.id = "";
        this.checkRunId = "";
        this.annotationLevel = CheckRunAnnotationLevel.UNSPECIFIED;
        this.message = "";
        this.createdAtUnixMs = protoInt64.zero;
        this.updatedAtUnixMs = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CheckRunAnnotation().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CheckRunAnnotation().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CheckRunAnnotation().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CheckRunAnnotation, a, b2);
    }
    static $() {
        return [
            "CheckRunAnnotation|1 id 9|2 check_run_id 9|3 annotation_level #0|4 message 9|5 title 9?|6 raw_details 9?|7 created_at_unix_ms 3|8 updated_at_unix_ms 3|9 location #1",
            CheckRunAnnotationLevel,
            CheckRunAnnotationLocation
        ];
    }
};
CreateCheckRunAnnotationsRequest = class _CreateCheckRunAnnotationsRequest extends __protoMessage3177 {
    constructor(data){
        super();
        this.checkRunId = "";
        this.annotations = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CreateCheckRunAnnotationsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CreateCheckRunAnnotationsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CreateCheckRunAnnotationsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CreateCheckRunAnnotationsRequest, a, b2);
    }
    static $() {
        return [
            "CreateCheckRunAnnotationsRequest|1 identifier #0|2 check_run_id 9|3 annotations #1*",
            ClientRepoIdentifier,
            CheckRunAnnotationInput
        ];
    }
};
CreateCheckRunAnnotationsResponse = class _CreateCheckRunAnnotationsResponse extends __protoMessage3177 {
    constructor(data){
        super();
        this.annotations = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CreateCheckRunAnnotationsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CreateCheckRunAnnotationsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CreateCheckRunAnnotationsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CreateCheckRunAnnotationsResponse, a, b2);
    }
    static $() {
        return [
            "CreateCheckRunAnnotationsResponse|1 annotations #0*",
            CheckRunAnnotation
        ];
    }
};
ListCheckRunAnnotationsRequest = class _ListCheckRunAnnotationsRequest extends __protoMessage3177 {
    constructor(data){
        super();
        this.checkRunId = "";
        this.pageSize = 0;
        this.pageToken = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListCheckRunAnnotationsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListCheckRunAnnotationsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListCheckRunAnnotationsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListCheckRunAnnotationsRequest, a, b2);
    }
    static $() {
        return [
            "ListCheckRunAnnotationsRequest|1 identifier #0|2 check_run_id 9|3 page_size 5|4 page_token 9",
            ClientRepoIdentifier
        ];
    }
};
ListCheckRunAnnotationsResponse = class _ListCheckRunAnnotationsResponse extends __protoMessage3177 {
    constructor(data){
        super();
        this.annotations = [];
        this.nextPageToken = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListCheckRunAnnotationsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListCheckRunAnnotationsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListCheckRunAnnotationsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListCheckRunAnnotationsResponse, a, b2);
    }
    static $() {
        return [
            "ListCheckRunAnnotationsResponse|1 annotations #0*|2 next_page_token 9",
            CheckRunAnnotation
        ];
    }
};
RerequestCheckRunRequest = class _RerequestCheckRunRequest extends __protoMessage3177 {
    constructor(data){
        super();
        this.checkRunId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RerequestCheckRunRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RerequestCheckRunRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RerequestCheckRunRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RerequestCheckRunRequest, a, b2);
    }
    static $() {
        return [
            "RerequestCheckRunRequest|1 change #0|2 check_run_id 9",
            ChangeIdentifier
        ];
    }
};
RerequestCheckRunResponse = class _RerequestCheckRunResponse extends __protoMessage3177 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RerequestCheckRunResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RerequestCheckRunResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RerequestCheckRunResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RerequestCheckRunResponse, a, b2);
    }
    static $() {
        return [
            "RerequestCheckRunResponse|1 check_run #0",
            CheckRunStatus
        ];
    }
};
GetChangesetMergeabilityRequest = class _GetChangesetMergeabilityRequest extends __protoMessage3177 {
    constructor(data){
        super();
        this.changeNumber = protoInt64.zero;
        this.scope = MergeabilityScope.UNSPECIFIED;
        this.previewRestackConflict = false;
        this.includeDefaultMergeMode = false;
        this.includeSummary = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetChangesetMergeabilityRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetChangesetMergeabilityRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetChangesetMergeabilityRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetChangesetMergeabilityRequest, a, b2);
    }
    static $() {
        return [
            "GetChangesetMergeabilityRequest|1 identifier #0|2 change_number 4|3 expected_head_sha 9?|4 scope #1|5 preview_restack_conflict 8|6 include_default_merge_mode 8|7 include_head_ref_exists 8?|8 include_summary 8",
            ClientRepoIdentifier,
            MergeabilityScope
        ];
    }
};
GetChangesetMergeabilityResponse = class _GetChangesetMergeabilityResponse extends __protoMessage3177 {
    constructor(data){
        super();
        this.mergeable = false;
        this.ciPassing = false;
        this.meetsApprovalRequirements = false;
        this.hasMergeConflicts = false;
        this.conflictedPaths = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetChangesetMergeabilityResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetChangesetMergeabilityResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetChangesetMergeabilityResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetChangesetMergeabilityResponse, a, b2);
    }
    static $() {
        return [
            "GetChangesetMergeabilityResponse|1 mergeable 8|2 ci_passing 8|3 ci_state #0|4 meets_approval_requirements 8|5 has_merge_conflicts 8|6 mergeability #1|7 stack_mergeability #2?|8 conflicted_paths 9*|9 review_decision 9?|10 evaluated_head_sha 9?|11 evaluated_base_tip_sha 9?|12 default_merge_mode #3?|13 head_ref_exists 8?|15 target_rules_unread 8?|16 summary #4?",
            CiState,
            ChangesetMergeability,
            StackMergeability,
            MergeMode,
            ChangesetMergeabilitySummary
        ];
    }
};
ChangesetMergeabilitySummary = class _ChangesetMergeabilitySummary extends __protoMessage3177 {
    constructor(data){
        super();
        this.verdict = "";
        this.blockers = [];
        this.evaluatedChangeNumbers = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ChangesetMergeabilitySummary().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ChangesetMergeabilitySummary().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ChangesetMergeabilitySummary().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ChangesetMergeabilitySummary, a, b2);
    }
    static $() {
        return [
            "ChangesetMergeabilitySummary|1 verdict 9|2 blockers #0*|3 evaluated_change_numbers 4*",
            ChangesetMergeabilitySummaryBlocker
        ];
    }
};
ChangesetMergeabilitySummaryBlocker = class _ChangesetMergeabilitySummaryBlocker extends __protoMessage3177 {
    constructor(data){
        super();
        this.kind = "";
        this.message = "";
        this.changeNumber = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ChangesetMergeabilitySummaryBlocker().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ChangesetMergeabilitySummaryBlocker().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ChangesetMergeabilitySummaryBlocker().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ChangesetMergeabilitySummaryBlocker, a, b2);
    }
    static $() {
        return [
            "ChangesetMergeabilitySummaryBlocker|1 kind 9|2 message 9|3 change_number 4|4 required_checks_state 9?|5 required_approval_count 13?|6 approved_count 13?|7 conflict_inherited_from_downstack 8?|8 invalid_stack_reason 9?"
        ];
    }
};
ChangesetMergeability = class _ChangesetMergeability extends __protoMessage3177 {
    constructor(data){
        super();
        this.verdict = "";
        this.evaluations = [];
        this.blockers = [];
        this.configurationDiagnostics = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ChangesetMergeability().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ChangesetMergeability().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ChangesetMergeability().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ChangesetMergeability, a, b2);
    }
    static $() {
        return [
            "ChangesetMergeability|1 verdict 9|2 evaluations #0*|3 blockers #1*|4 configuration_diagnostics #2*",
            ChangesetRuleEvaluation,
            ChangesetMergeBlocker,
            ChangesetRuleConfigurationDiagnostic
        ];
    }
};
ChangesetRuleEvaluation = class _ChangesetRuleEvaluation extends __protoMessage3177 {
    constructor(data){
        super();
        this.ruleType = "";
        this.rulesetId = "";
        this.rulesetName = "";
        this.ruleId = "";
        this.enforcement = "";
        this.result = "";
        this.message = "";
        this.category = "";
        this.violations = [];
        this.gatesWaivedChecks = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ChangesetRuleEvaluation().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ChangesetRuleEvaluation().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ChangesetRuleEvaluation().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ChangesetRuleEvaluation, a, b2);
    }
    static $() {
        return [
            "ChangesetRuleEvaluation|1 rule_type 9|2 ruleset_id 9|3 ruleset_name 9|4 rule_id 9|5 enforcement 9|6 result 9|7 message 9|8 category 9|9 violations #0*|10 satisfied_by #1?|11 gates_waived_checks #2*",
            ChangesetRuleViolation,
            ChangesetReviewSatisfaction,
            ChangesetGatesWaivedCheck
        ];
    }
};
ChangesetGatesWaivedCheck = class _ChangesetGatesWaivedCheck extends __protoMessage3177 {
    constructor(data){
        super();
        this.name = "";
        this.checkRunIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ChangesetGatesWaivedCheck().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ChangesetGatesWaivedCheck().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ChangesetGatesWaivedCheck().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ChangesetGatesWaivedCheck, a, b2);
    }
    static $() {
        return [
            "ChangesetGatesWaivedCheck|1 name 9|2 check_run_ids 9*"
        ];
    }
};
ChangesetReviewSatisfaction = class _ChangesetReviewSatisfaction extends __protoMessage3177 {
    constructor(data){
        super();
        this.kind = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ChangesetReviewSatisfaction().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ChangesetReviewSatisfaction().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ChangesetReviewSatisfaction().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ChangesetReviewSatisfaction, a, b2);
    }
    static $() {
        return [
            "ChangesetReviewSatisfaction|1 kind 9|2 gates #0?",
            ChangesetGatesResult
        ];
    }
};
ChangesetGatesResult = class _ChangesetGatesResult extends __protoMessage3177 {
    constructor(data){
        super();
        this.headSha = "";
        this.landingBaseSha = "";
        this.gatesFileBlobOid = "";
        this.approved = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ChangesetGatesResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ChangesetGatesResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ChangesetGatesResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ChangesetGatesResult, a, b2);
    }
    static $() {
        return [
            "ChangesetGatesResult|1 head_sha 9|2 landing_base_sha 9|3 gates_file_blob_oid 9|4 approved #0*|5 trunk_tip_gates_file_blob_oid 9?",
            ChangesetApprovedGate
        ];
    }
};
ChangesetRuleViolation = class _ChangesetRuleViolation extends __protoMessage3177 {
    constructor(data){
        super();
        this.ruleType = "";
        this.detail = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ChangesetRuleViolation().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ChangesetRuleViolation().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ChangesetRuleViolation().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ChangesetRuleViolation, a, b2);
    }
    static $() {
        return [
            "ChangesetRuleViolation|1 rule_type 9|2 detail 9|3 remediation 9?|4 actionable_signal #0?",
            ChangesetRuleActionableSignal
        ];
    }
};
ChangesetRuleActionableSignal = class _ChangesetRuleActionableSignal extends __protoMessage3177 {
    constructor(data){
        super();
        this.kind = "";
        this.checkNames = [];
        this.ownerLabels = [];
        this.paths = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ChangesetRuleActionableSignal().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ChangesetRuleActionableSignal().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ChangesetRuleActionableSignal().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ChangesetRuleActionableSignal, a, b2);
    }
    static $() {
        return [
            "ChangesetRuleActionableSignal|1 kind 9|2 check_names 9*|3 required_count 5?|4 actual_count 5?|5 owner_labels 9*|6 paths 9*"
        ];
    }
};
ChangesetMergeBlocker = class _ChangesetMergeBlocker extends __protoMessage3177 {
    constructor(data){
        super();
        this.kind = "";
        this.mergedChangeNumbers = [];
        this.openChangeNumbers = [];
        this.conflictedPaths = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ChangesetMergeBlocker().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ChangesetMergeBlocker().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ChangesetMergeBlocker().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ChangesetMergeBlocker, a, b2);
    }
    static $() {
        return [
            "ChangesetMergeBlocker|1 kind 9|2 rule_failure #0?|3 merge_ref_sha 9?|4 base_tip_sha_at_computation 9?|5 current_base_tip_sha 9?|6 ruleset_id 9?|7 rule_id 9?|8 enforcement 9?|9 message 9?|10 change_number 4?|11 merge_commit_oid 9?|12 merged_change_numbers 4*|13 open_change_numbers 4*|14 top_change_number 4?|15 downstack_change_number 4?|16 top_head_sha 9?|17 downstack_head_sha 9?|18 compare_status 9?|19 topology_reason 9?|20 root_base_ref 9?|21 conflicted_paths 9*|22 conflict_inherited_from_downstack 8?|23 recorded_base_sha 9?|24 target_base_ref 9?",
            ChangesetRuleEvaluation
        ];
    }
};
ChangesetRuleConfigurationDiagnostic = class _ChangesetRuleConfigurationDiagnostic extends __protoMessage3177 {
    constructor(data){
        super();
        this.kind = "";
        this.severity = "";
        this.message = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ChangesetRuleConfigurationDiagnostic().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ChangesetRuleConfigurationDiagnostic().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ChangesetRuleConfigurationDiagnostic().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ChangesetRuleConfigurationDiagnostic, a, b2);
    }
    static $() {
        return [
            "ChangesetRuleConfigurationDiagnostic|1 kind 9|2 severity 9|3 message 9|4 ruleset_id 9?|5 rule_id 9?|6 bypass_actor_id 9?|7 enforcement 9?"
        ];
    }
};
StackMergeability = class _StackMergeability extends __protoMessage3177 {
    constructor(data){
        super();
        this.targetChangeNumber = protoInt64.zero;
        this.prefixChangeNumbers = [];
        this.rootBaseRef = "";
        this.verdict = "";
        this.blockers = [];
        this.memberEvaluations = [];
        this.convergenceConflictedPaths = [];
        this.restackConflictedPaths = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StackMergeability().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StackMergeability().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StackMergeability().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StackMergeability, a, b2);
    }
    static $() {
        return [
            "StackMergeability|1 target_change_number 4|2 prefix_change_numbers 4*|3 root_base_ref 9|4 verdict 9|5 blockers #0*|6 member_evaluations #1*|7 convergence_state 9?|8 convergence_conflicted_change_number 4?|9 convergence_conflicted_paths 9*|10 convergence_updated_at 9?|11 restack_conflicted_change_number 4?|12 restack_conflicted_paths 9*|13 restack_preview_pending 8?",
            ChangesetMergeBlocker,
            StackMemberEvaluation
        ];
    }
};
StackMemberEvaluation = class _StackMemberEvaluation extends __protoMessage3177 {
    constructor(data){
        super();
        this.changeNumber = protoInt64.zero;
        this.role = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StackMemberEvaluation().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StackMemberEvaluation().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StackMemberEvaluation().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StackMemberEvaluation, a, b2);
    }
    static $() {
        return [
            "StackMemberEvaluation|1 change_number 4|2 role 9|3 mergeability #0",
            ChangesetMergeability
        ];
    }
};
MergeStackRequest = class _MergeStackRequest extends __protoMessage3177 {
    constructor(data){
        super();
        this.topChangeNumber = protoInt64.zero;
        this.mode = MergeMode.UNSPECIFIED;
        this.expectedTargetHeadSha = "";
        this.expectedMemberHeadShas = {};
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MergeStackRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MergeStackRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MergeStackRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MergeStackRequest, a, b2);
    }
    static $() {
        return [
            "MergeStackRequest|1 identifier #0|2 top_change_number 4|3 mode #1|4 expected_target_head_sha 9|5 commit_title 9?|6 commit_message 9?|7 bypass_merge_queue 8?|8 allow_open_pull_request_base 8?|9 expected_member_head_shas 4,9",
            ClientRepoIdentifier,
            MergeMode
        ];
    }
};
MergeStackResponse = class _MergeStackResponse extends __protoMessage3177 {
    constructor(data){
        super();
        this.mergeCommitSha = "";
        this.mergedChangeNumbers = [];
        this.mergeQueueEntryId = "";
        this.mergeQueueSkipped = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MergeStackResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MergeStackResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MergeStackResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MergeStackResponse, a, b2);
    }
    static $() {
        return [
            "MergeStackResponse|1 merge_commit_sha 9|2 merged_change_numbers 4*|3 merge_queue_entry_id 9|4 merge_queue_skipped 8"
        ];
    }
};
RestackStackRequest = class _RestackStackRequest extends __protoMessage3177 {
    constructor(data){
        super();
        this.topChangeNumber = protoInt64.zero;
        this.dryRun = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RestackStackRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RestackStackRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RestackStackRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RestackStackRequest, a, b2);
    }
    static $() {
        return [
            "RestackStackRequest|1 identifier #0|2 top_change_number 4|3 dry_run 8",
            ClientRepoIdentifier
        ];
    }
};
RestackStackDryRunMember = class _RestackStackDryRunMember extends __protoMessage3177 {
    constructor(data){
        super();
        this.changeNumber = protoInt64.zero;
        this.headSha = "";
        this.ontoRef = "";
        this.outcome = RestackStackMemberOutcome.UNSPECIFIED;
        this.conflictedPaths = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RestackStackDryRunMember().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RestackStackDryRunMember().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RestackStackDryRunMember().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RestackStackDryRunMember, a, b2);
    }
    static $() {
        return [
            "RestackStackDryRunMember|1 change_number 4|2 head_sha 9|3 onto_ref 9|4 onto_sha 9?|5 new_head_sha 9?|6 outcome #0|7 conflicted_paths 9*",
            RestackStackMemberOutcome
        ];
    }
};
RestackStackResponse = class _RestackStackResponse extends __protoMessage3177 {
    constructor(data){
        super();
        this.restackedChangeNumbers = [];
        this.dryRunMembers = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RestackStackResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RestackStackResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RestackStackResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RestackStackResponse, a, b2);
    }
    static $() {
        return [
            "RestackStackResponse|1 restacked_change_numbers 4*|2 dry_run_members #0*",
            RestackStackDryRunMember
        ];
    }
};
OriginCiJob = class _OriginCiJob extends __protoMessage3177 {
    constructor(data){
        super();
        this.runId = "";
        this.jobName = "";
        this.headSha = "";
        this.cause = {
            case: void 0
        };
        this.runActive = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _OriginCiJob().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _OriginCiJob().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _OriginCiJob().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_OriginCiJob, a, b2);
    }
    static $() {
        return [
            "OriginCiJob|1 run_id 9|2 job_name 9|3 head_sha 9|4 pull_request_number 4 cause|5 push_ref 9 cause|6 run_active 8|7 result #0?",
            OriginCiJobResult
        ];
    }
};
OriginCiJobResult = class _OriginCiJobResult extends __protoMessage3177 {
    constructor(data){
        super();
        this.conclusion = CheckRunConclusion.CHECK_RUN_CONCLUSION_UNSPECIFIED;
        this.completedAtUnixMs = protoInt64.zero;
        this.logTruncated = false;
        this.steps = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _OriginCiJobResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _OriginCiJobResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _OriginCiJobResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_OriginCiJobResult, a, b2);
    }
    static $() {
        return [
            "OriginCiJobResult|1 conclusion #0|2 exit_code 5?|3 image 9?|4 note 9?|5 started_at_unix_ms 3?|6 completed_at_unix_ms 3|7 log_bytes 3?|8 log_truncated 8|9 steps #1*",
            CheckRunConclusion,
            OriginCiJobStep
        ];
    }
};
OriginCiJobStep = class _OriginCiJobStep extends __protoMessage3177 {
    constructor(data){
        super();
        this.index = 0;
        this.startedAtUnixMs = protoInt64.zero;
        this.completedAtUnixMs = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _OriginCiJobStep().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _OriginCiJobStep().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _OriginCiJobStep().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_OriginCiJobStep, a, b2);
    }
    static $() {
        return [
            "OriginCiJobStep|1 index 13|2 started_at_unix_ms 3|3 completed_at_unix_ms 3"
        ];
    }
};
GetOriginCiJobLogRequest = class _GetOriginCiJobLogRequest extends __protoMessage3177 {
    constructor(data){
        super();
        this.runId = "";
        this.jobName = "";
        this.offset = protoInt64.zero;
        this.limit = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetOriginCiJobLogRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetOriginCiJobLogRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetOriginCiJobLogRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetOriginCiJobLogRequest, a, b2);
    }
    static $() {
        return [
            "GetOriginCiJobLogRequest|1 identifier #0|2 run_id 9|3 job_name 9|4 offset 3|5 limit 3|6 live_cursor 9?",
            ClientRepoIdentifier
        ];
    }
};
GetOriginCiJobLogResponse = class _GetOriginCiJobLogResponse extends __protoMessage3177 {
    constructor(data){
        super();
        this.data = new Uint8Array(0);
        this.offset = protoInt64.zero;
        this.totalBytes = protoInt64.zero;
        this.liveCursor = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetOriginCiJobLogResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetOriginCiJobLogResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetOriginCiJobLogResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetOriginCiJobLogResponse, a, b2);
    }
    static $() {
        return [
            "GetOriginCiJobLogResponse|1 job #0|2 data 12|3 offset 3|4 total_bytes 3|5 live_cursor 9",
            OriginCiJob
        ];
    }
};

}
