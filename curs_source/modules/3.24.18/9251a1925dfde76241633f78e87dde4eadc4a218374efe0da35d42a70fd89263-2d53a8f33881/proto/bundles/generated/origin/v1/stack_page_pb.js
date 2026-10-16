import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { Change, ChangeAssignment, ChangeIdentifier, ListOriginRepoReviewerCandidatesResponse, Review, Version2, init_change_pb } from "./change_pb.js";
import { GetChangesetMergeabilityResponse, init_ci_pb } from "./ci_pb.js";
import { MirrorStatus, init_repo_pb2 } from "./repo_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage187, __protoMessage3179, GetChangeStackPageDataRequest, GetChangeStackPageDataResponse, ChangeStackPageItem;
export { ChangeStackPageItem, GetChangeStackPageDataRequest, GetChangeStackPageDataResponse, __protoMessage3179, __protoPackage187 };
var __wakaru_init_stack_page_pb_initialized = false;
export function init_stack_page_pb() {
if (__wakaru_init_stack_page_pb_initialized) return;
__wakaru_init_stack_page_pb_initialized = true;
"use strict";
init_esm2();
init_change_pb();
init_repo_pb2();
init_ci_pb();
init_compact();
__protoPackage187 = "origin.v1.";
__protoMessage3179 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage187;
    }
};
GetChangeStackPageDataRequest = class _GetChangeStackPageDataRequest extends __protoMessage3179 {
    constructor(data){
        super();
        this.previewRestackConflict = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetChangeStackPageDataRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetChangeStackPageDataRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetChangeStackPageDataRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetChangeStackPageDataRequest, a, b2);
    }
    static $() {
        return [
            "GetChangeStackPageDataRequest|1 change #0|2 preview_restack_conflict 8",
            ChangeIdentifier
        ];
    }
};
GetChangeStackPageDataResponse = class _GetChangeStackPageDataResponse extends __protoMessage3179 {
    constructor(data){
        super();
        this.mirrorStatus = MirrorStatus.UNSPECIFIED;
        this.items = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetChangeStackPageDataResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetChangeStackPageDataResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetChangeStackPageDataResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetChangeStackPageDataResponse, a, b2);
    }
    static $() {
        return [
            "GetChangeStackPageDataResponse|1 mirror_status #0|2 items #1*|3 reviewer_candidates #2",
            MirrorStatus,
            ChangeStackPageItem,
            ListOriginRepoReviewerCandidatesResponse
        ];
    }
};
ChangeStackPageItem = class _ChangeStackPageItem extends __protoMessage3179 {
    constructor(data){
        super();
        this.versions = [];
        this.assignments = [];
        this.reviews = [];
        this.totalThreadCount = 0;
        this.unresolvedThreadCount = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ChangeStackPageItem().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ChangeStackPageItem().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ChangeStackPageItem().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ChangeStackPageItem, a, b2);
    }
    static $() {
        return [
            "ChangeStackPageItem|1 change #0|2 versions #1*|3 assignments #2*|4 reviews #3*|5 mergeability #4|6 total_thread_count 5|7 unresolved_thread_count 5",
            Change,
            Version2,
            ChangeAssignment,
            Review,
            GetChangesetMergeabilityResponse
        ];
    }
};

}
