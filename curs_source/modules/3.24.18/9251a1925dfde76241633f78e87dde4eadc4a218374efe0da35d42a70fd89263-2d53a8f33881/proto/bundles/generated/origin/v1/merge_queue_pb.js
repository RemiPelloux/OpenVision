import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { Timestamp } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/timestamp_pb.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { protoInt64 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { ChangeIdentifier, init_change_pb } from "./change_pb.js";
import { CheckRunGroup, init_ci_pb } from "./ci_pb.js";
import { ClientRepoIdentifier, init_origin_common_pb } from "./origin_common_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage186, __protoMessage3178, MergeQueueValidationCheckMode, MergeQueueConfigOutcome, EnqueueForMergeRequest, EnqueueForMergeResponse, CancelMergeQueueEntryRequest, CancelMergeQueueEntryResponse, GetMergeQueueStatusRequest, GetMergeQueueStatusResponse, GetMergeQueueRequest, GetMergeQueueResponse, MergeQueueConfig, MergeQueueRequiredCheck, MergeQueueValidationChecks, GetMergeQueueConfigRequest, GetMergeQueueConfigResponse, MergeQueuePrOnlyCheck, EnableMergeQueueRequest, EnableMergeQueueResponse, DisableMergeQueueRequest, DisableMergeQueueResponse, UpdateMergeQueueConfigRequest, UpdateMergeQueueConfigResponse, MergeQueueView, MergeQueueViewEntry, MergeQueueViewPullRequest, MergeQueueViewNode, MergeQueueViewNode_State, MergeQueueViewLand, MergeQueueEntry, MergeQueueEntryStatus, MergeQueueEntryStatus_Kind;
export { CancelMergeQueueEntryRequest, CancelMergeQueueEntryResponse, DisableMergeQueueRequest, DisableMergeQueueResponse, EnableMergeQueueRequest, EnableMergeQueueResponse, EnqueueForMergeRequest, EnqueueForMergeResponse, GetMergeQueueConfigRequest, GetMergeQueueConfigResponse, GetMergeQueueRequest, GetMergeQueueResponse, GetMergeQueueStatusRequest, GetMergeQueueStatusResponse, MergeQueueConfig, MergeQueueConfigOutcome, MergeQueueEntry, MergeQueueEntryStatus, MergeQueueEntryStatus_Kind, MergeQueuePrOnlyCheck, MergeQueueRequiredCheck, MergeQueueValidationCheckMode, MergeQueueValidationChecks, MergeQueueView, MergeQueueViewEntry, MergeQueueViewLand, MergeQueueViewNode, MergeQueueViewNode_State, MergeQueueViewPullRequest, UpdateMergeQueueConfigRequest, UpdateMergeQueueConfigResponse, __protoMessage3178, __protoPackage186 };
var __wakaru_init_merge_queue_pb_initialized = false;
export function init_merge_queue_pb() {
if (__wakaru_init_merge_queue_pb_initialized) return;
__wakaru_init_merge_queue_pb_initialized = true;
"use strict";
init_esm2();
init_change_pb();
init_origin_common_pb();
init_ci_pb();
init_compact();
__protoPackage186 = "origin.v1.";
__protoMessage3178 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage186;
    }
};
MergeQueueValidationCheckMode = enumType2(proto3, __protoPackage186, "MergeQueueValidationCheckMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ALL_TRUNK_RULESETS"
    ],
    [
        2,
        "QUEUE_CHECKS_ONLY"
    ]
], 1);
MergeQueueConfigOutcome = enumType2(proto3, __protoPackage186, "MergeQueueConfigOutcome", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CREATED"
    ],
    [
        2,
        "RE_ENABLED"
    ],
    [
        3,
        "ALREADY_ENABLED"
    ],
    [
        4,
        "DISABLED"
    ],
    [
        5,
        "ALREADY_DISABLED"
    ],
    [
        6,
        "UPDATED"
    ],
    [
        7,
        "UNCHANGED"
    ]
], 1);
EnqueueForMergeRequest = class _EnqueueForMergeRequest extends __protoMessage3178 {
    constructor(data){
        super();
        this.expectedHeadSha = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _EnqueueForMergeRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _EnqueueForMergeRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _EnqueueForMergeRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_EnqueueForMergeRequest, a, b2);
    }
    static $() {
        return [
            "EnqueueForMergeRequest|1 change #0|2 expected_head_sha 9",
            ChangeIdentifier
        ];
    }
};
EnqueueForMergeResponse = class _EnqueueForMergeResponse extends __protoMessage3178 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _EnqueueForMergeResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _EnqueueForMergeResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _EnqueueForMergeResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_EnqueueForMergeResponse, a, b2);
    }
    static $() {
        return [
            "EnqueueForMergeResponse|1 entry #0",
            MergeQueueEntry
        ];
    }
};
CancelMergeQueueEntryRequest = class _CancelMergeQueueEntryRequest extends __protoMessage3178 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CancelMergeQueueEntryRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CancelMergeQueueEntryRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CancelMergeQueueEntryRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CancelMergeQueueEntryRequest, a, b2);
    }
    static $() {
        return [
            "CancelMergeQueueEntryRequest|1 change #0",
            ChangeIdentifier
        ];
    }
};
CancelMergeQueueEntryResponse = class _CancelMergeQueueEntryResponse extends __protoMessage3178 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CancelMergeQueueEntryResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CancelMergeQueueEntryResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CancelMergeQueueEntryResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CancelMergeQueueEntryResponse, a, b2);
    }
    static $() {
        return [
            "CancelMergeQueueEntryResponse|1 entry #0",
            MergeQueueEntry
        ];
    }
};
GetMergeQueueStatusRequest = class _GetMergeQueueStatusRequest extends __protoMessage3178 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetMergeQueueStatusRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetMergeQueueStatusRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetMergeQueueStatusRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetMergeQueueStatusRequest, a, b2);
    }
    static $() {
        return [
            "GetMergeQueueStatusRequest|1 change #0",
            ChangeIdentifier
        ];
    }
};
GetMergeQueueStatusResponse = class _GetMergeQueueStatusResponse extends __protoMessage3178 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetMergeQueueStatusResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetMergeQueueStatusResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetMergeQueueStatusResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetMergeQueueStatusResponse, a, b2);
    }
    static $() {
        return [
            "GetMergeQueueStatusResponse|1 entry #0",
            MergeQueueEntry
        ];
    }
};
GetMergeQueueRequest = class _GetMergeQueueRequest extends __protoMessage3178 {
    constructor(data){
        super();
        this.targetRef = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetMergeQueueRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetMergeQueueRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetMergeQueueRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetMergeQueueRequest, a, b2);
    }
    static $() {
        return [
            "GetMergeQueueRequest|1 identifier #0|2 target_ref 9",
            ClientRepoIdentifier
        ];
    }
};
GetMergeQueueResponse = class _GetMergeQueueResponse extends __protoMessage3178 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetMergeQueueResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetMergeQueueResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetMergeQueueResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetMergeQueueResponse, a, b2);
    }
    static $() {
        return [
            "GetMergeQueueResponse|1 queue #0",
            MergeQueueView
        ];
    }
};
MergeQueueConfig = class _MergeQueueConfig extends __protoMessage3178 {
    constructor(data){
        super();
        this.queueId = "";
        this.targetRef = "";
        this.speculationDepth = 0;
        this.maxConcurrentValidations = 0;
        this.validationTimeoutMs = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MergeQueueConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MergeQueueConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MergeQueueConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MergeQueueConfig, a, b2);
    }
    static $() {
        return [
            "MergeQueueConfig|1 queue_id 9|2 target_ref 9|3 enabled 8?|4 speculation_depth 13|5 max_concurrent_validations 13|6 validation_timeout_ms 4|7 validation_checks #0",
            MergeQueueValidationChecks
        ];
    }
};
MergeQueueRequiredCheck = class _MergeQueueRequiredCheck extends __protoMessage3178 {
    constructor(data){
        super();
        this.actorKind = "";
        this.actorId = "";
        this.groupKey = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MergeQueueRequiredCheck().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MergeQueueRequiredCheck().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MergeQueueRequiredCheck().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MergeQueueRequiredCheck, a, b2);
    }
    static $() {
        return [
            "MergeQueueRequiredCheck|1 actor_kind 9|2 actor_id 9|3 group_key 9|4 run_key 9?|5 name 9?"
        ];
    }
};
MergeQueueValidationChecks = class _MergeQueueValidationChecks extends __protoMessage3178 {
    constructor(data){
        super();
        this.mode = MergeQueueValidationCheckMode.UNSPECIFIED;
        this.checks = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MergeQueueValidationChecks().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MergeQueueValidationChecks().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MergeQueueValidationChecks().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MergeQueueValidationChecks, a, b2);
    }
    static $() {
        return [
            "MergeQueueValidationChecks|1 mode #0|2 checks #1*",
            MergeQueueValidationCheckMode,
            MergeQueueRequiredCheck
        ];
    }
};
GetMergeQueueConfigRequest = class _GetMergeQueueConfigRequest extends __protoMessage3178 {
    constructor(data){
        super();
        this.targetRef = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetMergeQueueConfigRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetMergeQueueConfigRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetMergeQueueConfigRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetMergeQueueConfigRequest, a, b2);
    }
    static $() {
        return [
            "GetMergeQueueConfigRequest|1 identifier #0|2 target_ref 9",
            ClientRepoIdentifier
        ];
    }
};
GetMergeQueueConfigResponse = class _GetMergeQueueConfigResponse extends __protoMessage3178 {
    constructor(data){
        super();
        this.inheritedChecks = [];
        this.unresolvedChecks = [];
        this.prOnlyChecks = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetMergeQueueConfigResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetMergeQueueConfigResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetMergeQueueConfigResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetMergeQueueConfigResponse, a, b2);
    }
    static $() {
        return [
            "GetMergeQueueConfigResponse|1 config #0|2 inherited_checks #1*|3 unresolved_checks #1*|4 pr_only_checks #2*",
            MergeQueueConfig,
            MergeQueueRequiredCheck,
            MergeQueuePrOnlyCheck
        ];
    }
};
MergeQueuePrOnlyCheck = class _MergeQueuePrOnlyCheck extends __protoMessage3178 {
    constructor(data){
        super();
        this.groupKey = "";
        this.runKey = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MergeQueuePrOnlyCheck().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MergeQueuePrOnlyCheck().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MergeQueuePrOnlyCheck().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MergeQueuePrOnlyCheck, a, b2);
    }
    static $() {
        return [
            "MergeQueuePrOnlyCheck|1 group_key 9|2 run_key 9"
        ];
    }
};
EnableMergeQueueRequest = class _EnableMergeQueueRequest extends __protoMessage3178 {
    constructor(data){
        super();
        this.targetRef = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _EnableMergeQueueRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _EnableMergeQueueRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _EnableMergeQueueRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_EnableMergeQueueRequest, a, b2);
    }
    static $() {
        return [
            "EnableMergeQueueRequest|1 identifier #0|2 target_ref 9|3 speculation_depth 13?|4 max_concurrent_validations 13?|5 validation_timeout_ms 4?|6 validation_checks #1?",
            ClientRepoIdentifier,
            MergeQueueValidationChecks
        ];
    }
};
EnableMergeQueueResponse = class _EnableMergeQueueResponse extends __protoMessage3178 {
    constructor(data){
        super();
        this.outcome = MergeQueueConfigOutcome.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _EnableMergeQueueResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _EnableMergeQueueResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _EnableMergeQueueResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_EnableMergeQueueResponse, a, b2);
    }
    static $() {
        return [
            "EnableMergeQueueResponse|1 config #0|2 outcome #1",
            MergeQueueConfig,
            MergeQueueConfigOutcome
        ];
    }
};
DisableMergeQueueRequest = class _DisableMergeQueueRequest extends __protoMessage3178 {
    constructor(data){
        super();
        this.targetRef = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _DisableMergeQueueRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DisableMergeQueueRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DisableMergeQueueRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_DisableMergeQueueRequest, a, b2);
    }
    static $() {
        return [
            "DisableMergeQueueRequest|1 identifier #0|2 target_ref 9",
            ClientRepoIdentifier
        ];
    }
};
DisableMergeQueueResponse = class _DisableMergeQueueResponse extends __protoMessage3178 {
    constructor(data){
        super();
        this.outcome = MergeQueueConfigOutcome.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _DisableMergeQueueResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DisableMergeQueueResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DisableMergeQueueResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_DisableMergeQueueResponse, a, b2);
    }
    static $() {
        return [
            "DisableMergeQueueResponse|1 config #0|2 outcome #1",
            MergeQueueConfig,
            MergeQueueConfigOutcome
        ];
    }
};
UpdateMergeQueueConfigRequest = class _UpdateMergeQueueConfigRequest extends __protoMessage3178 {
    constructor(data){
        super();
        this.targetRef = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UpdateMergeQueueConfigRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UpdateMergeQueueConfigRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UpdateMergeQueueConfigRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UpdateMergeQueueConfigRequest, a, b2);
    }
    static $() {
        return [
            "UpdateMergeQueueConfigRequest|1 identifier #0|2 target_ref 9|3 speculation_depth 13?|4 max_concurrent_validations 13?|5 validation_timeout_ms 4?|6 validation_checks #1?",
            ClientRepoIdentifier,
            MergeQueueValidationChecks
        ];
    }
};
UpdateMergeQueueConfigResponse = class _UpdateMergeQueueConfigResponse extends __protoMessage3178 {
    constructor(data){
        super();
        this.outcome = MergeQueueConfigOutcome.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UpdateMergeQueueConfigResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UpdateMergeQueueConfigResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UpdateMergeQueueConfigResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UpdateMergeQueueConfigResponse, a, b2);
    }
    static $() {
        return [
            "UpdateMergeQueueConfigResponse|1 config #0|2 outcome #1",
            MergeQueueConfig,
            MergeQueueConfigOutcome
        ];
    }
};
MergeQueueView = class _MergeQueueView extends __protoMessage3178 {
    constructor(data){
        super();
        this.targetRef = "";
        this.epoch = protoInt64.zero;
        this.entries = [];
        this.nodes = [];
        this.lands = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MergeQueueView().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MergeQueueView().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MergeQueueView().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MergeQueueView, a, b2);
    }
    static $() {
        return [
            "MergeQueueView|1 identifier #0|2 target_ref 9|3 epoch 4|4 entries #1*|5 nodes #2*|6 lands #3*",
            ClientRepoIdentifier,
            MergeQueueViewEntry,
            MergeQueueViewNode,
            MergeQueueViewLand
        ];
    }
};
MergeQueueViewEntry = class _MergeQueueViewEntry extends __protoMessage3178 {
    constructor(data){
        super();
        this.entryId = "";
        this.pullRequests = [];
        this.position = 0;
        this.ciCancelCount = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MergeQueueViewEntry().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MergeQueueViewEntry().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MergeQueueViewEntry().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MergeQueueViewEntry, a, b2);
    }
    static $() {
        return [
            "MergeQueueViewEntry|1 entry_id 9|2 pull_requests #0*|3 position 13|4 status #1|5 enqueued_at #2|6 ci_cancel_count 13",
            MergeQueueViewPullRequest,
            MergeQueueEntryStatus,
            Timestamp
        ];
    }
};
MergeQueueViewPullRequest = class _MergeQueueViewPullRequest extends __protoMessage3178 {
    constructor(data){
        super();
        this.number = protoInt64.zero;
        this.headSha = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MergeQueueViewPullRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MergeQueueViewPullRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MergeQueueViewPullRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MergeQueueViewPullRequest, a, b2);
    }
    static $() {
        return [
            "MergeQueueViewPullRequest|1 number 4|2 head_sha 9"
        ];
    }
};
MergeQueueViewNode = class _MergeQueueViewNode extends __protoMessage3178 {
    constructor(data){
        super();
        this.nodeId = "";
        this.state = MergeQueueViewNode_State.UNSPECIFIED;
        this.changeNumbers = [];
        this.assumedChangeNumbers = [];
        this.checkRunGroups = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MergeQueueViewNode().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MergeQueueViewNode().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MergeQueueViewNode().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MergeQueueViewNode, a, b2);
    }
    static $() {
        return [
            "MergeQueueViewNode|1 node_id 9|2 state #0|3 tested_sha 9?|4 chain_ref 9?|5 started_at #1|6 change_numbers 4*|7 assumed_change_numbers 4*|8 check_run_groups #2*",
            MergeQueueViewNode_State,
            Timestamp,
            CheckRunGroup
        ];
    }
};
MergeQueueViewNode_State = enumType2(proto3, __protoPackage186, "MergeQueueViewNode.State", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PREPARING"
    ],
    [
        2,
        "CONFLICT"
    ],
    [
        3,
        "RUNNING"
    ],
    [
        4,
        "GREEN"
    ],
    [
        5,
        "RED"
    ],
    [
        6,
        "CANCELLING"
    ],
    [
        7,
        "CANCELLED"
    ]
], 1);
MergeQueueViewLand = class _MergeQueueViewLand extends __protoMessage3178 {
    constructor(data){
        super();
        this.moveId = "";
        this.expectedTrunkSha = "";
        this.landedSha = "";
        this.changeNumbers = [];
        this.bookedQueueEpoch = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MergeQueueViewLand().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MergeQueueViewLand().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MergeQueueViewLand().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MergeQueueViewLand, a, b2);
    }
    static $() {
        return [
            "MergeQueueViewLand|1 move_id 9|2 expected_trunk_sha 9|3 landed_sha 9|4 change_numbers 4*|5 decided_at #0|6 landed_at #0|7 booked_queue_epoch 4",
            Timestamp
        ];
    }
};
MergeQueueEntry = class _MergeQueueEntry extends __protoMessage3178 {
    constructor(data){
        super();
        this.entryId = "";
        this.targetRef = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MergeQueueEntry().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MergeQueueEntry().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MergeQueueEntry().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MergeQueueEntry, a, b2);
    }
    static $() {
        return [
            "MergeQueueEntry|1 entry_id 9|2 change #0|3 target_ref 9|4 status #1",
            ChangeIdentifier,
            MergeQueueEntryStatus
        ];
    }
};
MergeQueueEntryStatus = class _MergeQueueEntryStatus extends __protoMessage3178 {
    constructor(data){
        super();
        this.kind = MergeQueueEntryStatus_Kind.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MergeQueueEntryStatus().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MergeQueueEntryStatus().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MergeQueueEntryStatus().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MergeQueueEntryStatus, a, b2);
    }
    static $() {
        return [
            "MergeQueueEntryStatus|1 kind #0|2 position 13?|3 blocked_on 9?|4 tested_sha 9?|5 failure 9?|6 eviction_reason 9?",
            MergeQueueEntryStatus_Kind
        ];
    }
};
MergeQueueEntryStatus_Kind = enumType2(proto3, __protoPackage186, "MergeQueueEntryStatus.Kind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "QUEUED"
    ],
    [
        2,
        "VALIDATING"
    ],
    [
        3,
        "MERGING"
    ],
    [
        4,
        "MERGED"
    ],
    [
        5,
        "EVICTED"
    ],
    [
        6,
        "CANCELLED"
    ]
], 1);

}
