import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { Timestamp } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/timestamp_pb.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { ChangeIdentifier, init_change_pb } from "./change_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage181, __protoMessage3174, PullRequestViewedCursor, MarkPullRequestAsViewedRequest, MarkPullRequestAsViewedResponse;
export { MarkPullRequestAsViewedRequest, MarkPullRequestAsViewedResponse, PullRequestViewedCursor, __protoMessage3174, __protoPackage181 };
var __wakaru_init_pull_request_viewed_state_pb_initialized = false;
export function init_pull_request_viewed_state_pb() {
if (__wakaru_init_pull_request_viewed_state_pb_initialized) return;
__wakaru_init_pull_request_viewed_state_pb_initialized = true;
"use strict";
init_esm2();
init_change_pb();
init_compact();
__protoPackage181 = "origin.v1.";
__protoMessage3174 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage181;
    }
};
PullRequestViewedCursor = enumType2(proto3, __protoPackage181, "PullRequestViewedCursor", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "OPENED"
    ],
    [
        2,
        "TIMELINE"
    ]
], 1);
MarkPullRequestAsViewedRequest = class _MarkPullRequestAsViewedRequest extends __protoMessage3174 {
    constructor(data){
        super();
        this.cursor = PullRequestViewedCursor.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MarkPullRequestAsViewedRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MarkPullRequestAsViewedRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MarkPullRequestAsViewedRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MarkPullRequestAsViewedRequest, a, b2);
    }
    static $() {
        return [
            "MarkPullRequestAsViewedRequest|1 change #0|2 viewed_at #1|3 cursor #2",
            ChangeIdentifier,
            Timestamp,
            PullRequestViewedCursor
        ];
    }
};
MarkPullRequestAsViewedResponse = class _MarkPullRequestAsViewedResponse extends __protoMessage3174 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MarkPullRequestAsViewedResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MarkPullRequestAsViewedResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MarkPullRequestAsViewedResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MarkPullRequestAsViewedResponse, a, b2);
    }
    static $() {
        return [
            "MarkPullRequestAsViewedResponse|1 viewed_at #0|2 timeline_viewed_at #0?",
            Timestamp
        ];
    }
};

}
