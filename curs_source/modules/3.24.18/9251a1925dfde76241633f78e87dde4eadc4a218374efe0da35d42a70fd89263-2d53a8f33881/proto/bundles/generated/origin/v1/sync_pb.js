import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { protoInt64 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { ClientRepoIdentifier, init_origin_common_pb } from "./origin_common_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage193, __protoMessage3185, WatchChangeSyncEventsRequest, WatchChangeSyncEventsResponse, SyncEventHeartbeat, ChangeSyncTarget, SyncResumeCursor, ShaSyncTarget, RepoSyncTarget, RefSyncTarget, QueueSyncTarget, SyncTarget, WatchChangeSyncEventsV2Request, WatchSyncSessionStarted, TaggedSyncSnapshot, TaggedSyncEvent, WatchSyncSubscriptionNack, WatchSyncSubscriptionRemoved, WatchSyncSubscriptionResumed, WatchChangeSyncEventsV2Response, UpdateWatchChangeSyncSubscriptionsRequest, UpdateWatchChangeSyncSubscriptionsResponse;
export { ChangeSyncTarget, QueueSyncTarget, RefSyncTarget, RepoSyncTarget, ShaSyncTarget, SyncEventHeartbeat, SyncResumeCursor, SyncTarget, TaggedSyncEvent, TaggedSyncSnapshot, UpdateWatchChangeSyncSubscriptionsRequest, UpdateWatchChangeSyncSubscriptionsResponse, WatchChangeSyncEventsRequest, WatchChangeSyncEventsResponse, WatchChangeSyncEventsV2Request, WatchChangeSyncEventsV2Response, WatchSyncSessionStarted, WatchSyncSubscriptionNack, WatchSyncSubscriptionRemoved, WatchSyncSubscriptionResumed, __protoMessage3185, __protoPackage193 };
var __wakaru_init_sync_pb_initialized = false;
export function init_sync_pb() {
if (__wakaru_init_sync_pb_initialized) return;
__wakaru_init_sync_pb_initialized = true;
"use strict";
init_esm2();
init_origin_common_pb();
init_compact();
__protoPackage193 = "origin.v1.";
__protoMessage3185 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage193;
    }
};
WatchChangeSyncEventsRequest = class _WatchChangeSyncEventsRequest extends __protoMessage3185 {
    constructor(data){
        super();
        this.changeNumber = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WatchChangeSyncEventsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WatchChangeSyncEventsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WatchChangeSyncEventsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WatchChangeSyncEventsRequest, a, b2);
    }
    static $() {
        return [
            "WatchChangeSyncEventsRequest|1 identifier #0|2 change_number 4",
            ClientRepoIdentifier
        ];
    }
};
WatchChangeSyncEventsResponse = class _WatchChangeSyncEventsResponse extends __protoMessage3185 {
    constructor(data){
        super();
        this.frame = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WatchChangeSyncEventsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WatchChangeSyncEventsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WatchChangeSyncEventsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WatchChangeSyncEventsResponse, a, b2);
    }
    static $() {
        return [
            "WatchChangeSyncEventsResponse|1 snapshot_json 9 frame|2 event_json 9 frame|3 heartbeat #0 frame",
            SyncEventHeartbeat
        ];
    }
};
SyncEventHeartbeat = class _SyncEventHeartbeat extends __protoMessage3185 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SyncEventHeartbeat().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SyncEventHeartbeat().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SyncEventHeartbeat().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SyncEventHeartbeat, a, b2);
    }
    static $() {
        return [
            "SyncEventHeartbeat"
        ];
    }
};
ChangeSyncTarget = class _ChangeSyncTarget extends __protoMessage3185 {
    constructor(data){
        super();
        this.changeNumber = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ChangeSyncTarget().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ChangeSyncTarget().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ChangeSyncTarget().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ChangeSyncTarget, a, b2);
    }
    static $() {
        return [
            "ChangeSyncTarget|1 identifier #0|2 change_number 4|3 resume #1?",
            ClientRepoIdentifier,
            SyncResumeCursor
        ];
    }
};
SyncResumeCursor = class _SyncResumeCursor extends __protoMessage3185 {
    constructor(data){
        super();
        this.streamSeqs = {};
        this.headSha = "";
        this.headVersionNumber = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SyncResumeCursor().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SyncResumeCursor().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SyncResumeCursor().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SyncResumeCursor, a, b2);
    }
    static $() {
        return [
            "SyncResumeCursor|1 stream_seqs 9,4|2 head_sha 9|3 head_version_number 13"
        ];
    }
};
ShaSyncTarget = class _ShaSyncTarget extends __protoMessage3185 {
    constructor(data){
        super();
        this.sha = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ShaSyncTarget().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ShaSyncTarget().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ShaSyncTarget().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ShaSyncTarget, a, b2);
    }
    static $() {
        return [
            "ShaSyncTarget|1 identifier #0|2 sha 9",
            ClientRepoIdentifier
        ];
    }
};
RepoSyncTarget = class _RepoSyncTarget extends __protoMessage3185 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RepoSyncTarget().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RepoSyncTarget().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RepoSyncTarget().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RepoSyncTarget, a, b2);
    }
    static $() {
        return [
            "RepoSyncTarget|1 identifier #0",
            ClientRepoIdentifier
        ];
    }
};
RefSyncTarget = class _RefSyncTarget extends __protoMessage3185 {
    constructor(data){
        super();
        this.ref = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RefSyncTarget().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RefSyncTarget().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RefSyncTarget().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RefSyncTarget, a, b2);
    }
    static $() {
        return [
            "RefSyncTarget|1 identifier #0|2 ref 9",
            ClientRepoIdentifier
        ];
    }
};
QueueSyncTarget = class _QueueSyncTarget extends __protoMessage3185 {
    constructor(data){
        super();
        this.targetRef = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _QueueSyncTarget().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _QueueSyncTarget().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _QueueSyncTarget().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_QueueSyncTarget, a, b2);
    }
    static $() {
        return [
            "QueueSyncTarget|1 identifier #0|2 target_ref 9",
            ClientRepoIdentifier
        ];
    }
};
SyncTarget = class _SyncTarget extends __protoMessage3185 {
    constructor(data){
        super();
        this.kind = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SyncTarget().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SyncTarget().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SyncTarget().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SyncTarget, a, b2);
    }
    static $() {
        return [
            "SyncTarget|1 sha #0 kind|2 repo #1 kind|3 ref #2 kind|4 queue #3 kind",
            ShaSyncTarget,
            RepoSyncTarget,
            RefSyncTarget,
            QueueSyncTarget
        ];
    }
};
WatchChangeSyncEventsV2Request = class _WatchChangeSyncEventsV2Request extends __protoMessage3185 {
    constructor(data){
        super();
        this.subscriptions = [];
        this.targets = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WatchChangeSyncEventsV2Request().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WatchChangeSyncEventsV2Request().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WatchChangeSyncEventsV2Request().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WatchChangeSyncEventsV2Request, a, b2);
    }
    static $() {
        return [
            "WatchChangeSyncEventsV2Request|1 subscriptions #0*|2 targets #1*",
            ChangeSyncTarget,
            SyncTarget
        ];
    }
};
WatchSyncSessionStarted = class _WatchSyncSessionStarted extends __protoMessage3185 {
    constructor(data){
        super();
        this.connectionId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WatchSyncSessionStarted().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WatchSyncSessionStarted().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WatchSyncSessionStarted().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WatchSyncSessionStarted, a, b2);
    }
    static $() {
        return [
            "WatchSyncSessionStarted|1 connection_id 9"
        ];
    }
};
TaggedSyncSnapshot = class _TaggedSyncSnapshot extends __protoMessage3185 {
    constructor(data){
        super();
        this.snapshotJson = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _TaggedSyncSnapshot().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _TaggedSyncSnapshot().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _TaggedSyncSnapshot().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_TaggedSyncSnapshot, a, b2);
    }
    static $() {
        return [
            "TaggedSyncSnapshot|1 target #0|2 snapshot_json 9|3 sync_target #1",
            ChangeSyncTarget,
            SyncTarget
        ];
    }
};
TaggedSyncEvent = class _TaggedSyncEvent extends __protoMessage3185 {
    constructor(data){
        super();
        this.eventJson = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _TaggedSyncEvent().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _TaggedSyncEvent().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _TaggedSyncEvent().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_TaggedSyncEvent, a, b2);
    }
    static $() {
        return [
            "TaggedSyncEvent|1 target #0|2 event_json 9|3 sync_target #1",
            ChangeSyncTarget,
            SyncTarget
        ];
    }
};
WatchSyncSubscriptionNack = class _WatchSyncSubscriptionNack extends __protoMessage3185 {
    constructor(data){
        super();
        this.reason = "";
        this.message = "";
        this.updateId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WatchSyncSubscriptionNack().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WatchSyncSubscriptionNack().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WatchSyncSubscriptionNack().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WatchSyncSubscriptionNack, a, b2);
    }
    static $() {
        return [
            "WatchSyncSubscriptionNack|1 target #0|2 reason 9|3 message 9|4 sync_target #1|5 update_id 9",
            ChangeSyncTarget,
            SyncTarget
        ];
    }
};
WatchSyncSubscriptionRemoved = class _WatchSyncSubscriptionRemoved extends __protoMessage3185 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WatchSyncSubscriptionRemoved().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WatchSyncSubscriptionRemoved().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WatchSyncSubscriptionRemoved().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WatchSyncSubscriptionRemoved, a, b2);
    }
    static $() {
        return [
            "WatchSyncSubscriptionRemoved|1 target #0|2 sync_target #1",
            ChangeSyncTarget,
            SyncTarget
        ];
    }
};
WatchSyncSubscriptionResumed = class _WatchSyncSubscriptionResumed extends __protoMessage3185 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WatchSyncSubscriptionResumed().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WatchSyncSubscriptionResumed().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WatchSyncSubscriptionResumed().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WatchSyncSubscriptionResumed, a, b2);
    }
    static $() {
        return [
            "WatchSyncSubscriptionResumed|1 target #0",
            ChangeSyncTarget
        ];
    }
};
WatchChangeSyncEventsV2Response = class _WatchChangeSyncEventsV2Response extends __protoMessage3185 {
    constructor(data){
        super();
        this.frame = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WatchChangeSyncEventsV2Response().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WatchChangeSyncEventsV2Response().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WatchChangeSyncEventsV2Response().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WatchChangeSyncEventsV2Response, a, b2);
    }
    static $() {
        return [
            "WatchChangeSyncEventsV2Response|1 session #0 frame|2 snapshot #1 frame|3 event #2 frame|4 heartbeat #3 frame|5 nack #4 frame|6 removed #5 frame|7 resumed #6 frame",
            WatchSyncSessionStarted,
            TaggedSyncSnapshot,
            TaggedSyncEvent,
            SyncEventHeartbeat,
            WatchSyncSubscriptionNack,
            WatchSyncSubscriptionRemoved,
            WatchSyncSubscriptionResumed
        ];
    }
};
UpdateWatchChangeSyncSubscriptionsRequest = class _UpdateWatchChangeSyncSubscriptionsRequest extends __protoMessage3185 {
    constructor(data){
        super();
        this.connectionId = "";
        this.add = [];
        this.remove = [];
        this.addTargets = [];
        this.removeTargets = [];
        this.updateId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UpdateWatchChangeSyncSubscriptionsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UpdateWatchChangeSyncSubscriptionsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UpdateWatchChangeSyncSubscriptionsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UpdateWatchChangeSyncSubscriptionsRequest, a, b2);
    }
    static $() {
        return [
            "UpdateWatchChangeSyncSubscriptionsRequest|1 connection_id 9|2 add #0*|3 remove #0*|4 add_targets #1*|5 remove_targets #1*|6 update_id 9",
            ChangeSyncTarget,
            SyncTarget
        ];
    }
};
UpdateWatchChangeSyncSubscriptionsResponse = class _UpdateWatchChangeSyncSubscriptionsResponse extends __protoMessage3185 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UpdateWatchChangeSyncSubscriptionsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UpdateWatchChangeSyncSubscriptionsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UpdateWatchChangeSyncSubscriptionsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UpdateWatchChangeSyncSubscriptionsResponse, a, b2);
    }
    static $() {
        return [
            "UpdateWatchChangeSyncSubscriptionsResponse"
        ];
    }
};

}
