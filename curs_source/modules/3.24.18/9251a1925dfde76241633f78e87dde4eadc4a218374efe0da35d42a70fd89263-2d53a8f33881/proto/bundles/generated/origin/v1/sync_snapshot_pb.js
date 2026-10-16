import { defineOwn } from "../../../../../external_exports.js";
import { Timestamp } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/timestamp_pb.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { protoInt64 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { Review, init_change_pb } from "./change_pb.js";
import { CommentThread, init_comment_thread_pb } from "./comment_thread_pb.js";
import { ClientRepoIdentifier, init_origin_common_pb } from "./origin_common_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage194, __protoMessage3186, GetChangeSyncSnapshotRequest, GetChangeSyncSnapshotResponse, ChangeSyncViewerState;
export { ChangeSyncViewerState, GetChangeSyncSnapshotRequest, GetChangeSyncSnapshotResponse, __protoMessage3186, __protoPackage194 };
var __wakaru_init_sync_snapshot_pb_initialized = false;
export function init_sync_snapshot_pb() {
if (__wakaru_init_sync_snapshot_pb_initialized) return;
__wakaru_init_sync_snapshot_pb_initialized = true;
"use strict";
init_esm2();
init_origin_common_pb();
init_change_pb();
init_comment_thread_pb();
init_compact();
__protoPackage194 = "origin.v1.";
__protoMessage3186 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage194;
    }
};
GetChangeSyncSnapshotRequest = class _GetChangeSyncSnapshotRequest extends __protoMessage3186 {
    constructor(data){
        super();
        this.changeNumber = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetChangeSyncSnapshotRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetChangeSyncSnapshotRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetChangeSyncSnapshotRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetChangeSyncSnapshotRequest, a, b2);
    }
    static $() {
        return [
            "GetChangeSyncSnapshotRequest|1 identifier #0|2 change_number 4",
            ClientRepoIdentifier
        ];
    }
};
GetChangeSyncSnapshotResponse = class _GetChangeSyncSnapshotResponse extends __protoMessage3186 {
    constructor(data){
        super();
        this.snapshotJson = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetChangeSyncSnapshotResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetChangeSyncSnapshotResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetChangeSyncSnapshotResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetChangeSyncSnapshotResponse, a, b2);
    }
    static $() {
        return [
            "GetChangeSyncSnapshotResponse|1 snapshot_json 9|2 viewer_state #0",
            ChangeSyncViewerState
        ];
    }
};
ChangeSyncViewerState = class _ChangeSyncViewerState extends __protoMessage3186 {
    constructor(data){
        super();
        this.pendingReviews = [];
        this.pendingThreads = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ChangeSyncViewerState().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ChangeSyncViewerState().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ChangeSyncViewerState().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ChangeSyncViewerState, a, b2);
    }
    static $() {
        return [
            "ChangeSyncViewerState|1 timeline_viewed_at #0?|2 pending_reviews #1*|3 pending_threads #2*",
            Timestamp,
            Review,
            CommentThread
        ];
    }
};

}
