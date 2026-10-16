import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { Timestamp } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/timestamp_pb.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { RepoVisibility, init_repo_pb2 } from "./repo_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage170, __protoMessage3163, OriginSlackChannelSubscriptionFeature, OriginSlackChannelExposureReason, OriginSlackChannelExposureStatus, OriginSlackChannelSubscription, SubscribeOriginSlackChannelRequest, OriginSlackChannelExposure, SubscribeOriginSlackChannelResponse, UnsubscribeOriginSlackChannelRequest, UnsubscribeOriginSlackChannelResponse, ListOriginSlackChannelSubscriptionsRequest, ListOriginSlackChannelSubscriptionsResponse;
export { ListOriginSlackChannelSubscriptionsRequest, ListOriginSlackChannelSubscriptionsResponse, OriginSlackChannelExposure, OriginSlackChannelExposureReason, OriginSlackChannelExposureStatus, OriginSlackChannelSubscription, OriginSlackChannelSubscriptionFeature, SubscribeOriginSlackChannelRequest, SubscribeOriginSlackChannelResponse, UnsubscribeOriginSlackChannelRequest, UnsubscribeOriginSlackChannelResponse, __protoMessage3163, __protoPackage170 };
var __wakaru_init_slack_channel_subscription_pb_initialized = false;
export function init_slack_channel_subscription_pb() {
if (__wakaru_init_slack_channel_subscription_pb_initialized) return;
__wakaru_init_slack_channel_subscription_pb_initialized = true;
"use strict";
init_esm2();
init_repo_pb2();
init_compact();
__protoPackage170 = "origin.v1.";
__protoMessage3163 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage170;
    }
};
OriginSlackChannelSubscriptionFeature = enumType2(proto3, __protoPackage170, "OriginSlackChannelSubscriptionFeature", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PULLS"
    ],
    [
        2,
        "REVIEWS"
    ],
    [
        3,
        "COMMENTS"
    ],
    [
        4,
        "COMMITS"
    ],
    [
        5,
        "BRANCHES"
    ]
], 1);
OriginSlackChannelExposureReason = enumType2(proto3, __protoPackage170, "OriginSlackChannelExposureReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SLACK_CONNECT"
    ],
    [
        2,
        "ORG_SHARED"
    ],
    [
        3,
        "GUESTS"
    ]
], 1);
OriginSlackChannelExposureStatus = enumType2(proto3, __protoPackage170, "OriginSlackChannelExposureStatus", [
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
        "EXPOSED"
    ],
    [
        3,
        "UNKNOWN"
    ]
], 1);
OriginSlackChannelSubscription = class _OriginSlackChannelSubscription extends __protoMessage3163 {
    constructor(data){
        super();
        this.id = "";
        this.slackTeamId = "";
        this.slackChannelId = "";
        this.repoOwner = "";
        this.repoName = "";
        this.features = [];
        this.requiredLabels = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _OriginSlackChannelSubscription().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _OriginSlackChannelSubscription().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _OriginSlackChannelSubscription().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_OriginSlackChannelSubscription, a, b2);
    }
    static $() {
        return [
            "OriginSlackChannelSubscription|1 id 9|2 slack_team_id 9|3 slack_channel_id 9|4 repo_owner 9|5 repo_name 9|6 features #0*|7 commit_ref_pattern 9?|8 required_labels 9*|9 created_at #1|10 updated_at #1",
            OriginSlackChannelSubscriptionFeature,
            Timestamp
        ];
    }
};
SubscribeOriginSlackChannelRequest = class _SubscribeOriginSlackChannelRequest extends __protoMessage3163 {
    constructor(data){
        super();
        this.slackChannelId = "";
        this.repoOwner = "";
        this.repoName = "";
        this.features = [];
        this.requiredLabels = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SubscribeOriginSlackChannelRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SubscribeOriginSlackChannelRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SubscribeOriginSlackChannelRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SubscribeOriginSlackChannelRequest, a, b2);
    }
    static $() {
        return [
            "SubscribeOriginSlackChannelRequest|1 slack_channel_id 9|2 slack_team_id 9?|3 repo_owner 9|4 repo_name 9|5 features #0*|6 commit_ref_pattern 9?|7 required_labels 9*",
            OriginSlackChannelSubscriptionFeature
        ];
    }
};
OriginSlackChannelExposure = class _OriginSlackChannelExposure extends __protoMessage3163 {
    constructor(data){
        super();
        this.status = OriginSlackChannelExposureStatus.UNSPECIFIED;
        this.reasons = [];
        this.repoVisibility = RepoVisibility.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _OriginSlackChannelExposure().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _OriginSlackChannelExposure().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _OriginSlackChannelExposure().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_OriginSlackChannelExposure, a, b2);
    }
    static $() {
        return [
            "OriginSlackChannelExposure|1 status #0|2 reasons #1*|3 repo_visibility #2",
            OriginSlackChannelExposureStatus,
            OriginSlackChannelExposureReason,
            RepoVisibility
        ];
    }
};
SubscribeOriginSlackChannelResponse = class _SubscribeOriginSlackChannelResponse extends __protoMessage3163 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SubscribeOriginSlackChannelResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SubscribeOriginSlackChannelResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SubscribeOriginSlackChannelResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SubscribeOriginSlackChannelResponse, a, b2);
    }
    static $() {
        return [
            "SubscribeOriginSlackChannelResponse|1 subscription #0|2 exposure #1",
            OriginSlackChannelSubscription,
            OriginSlackChannelExposure
        ];
    }
};
UnsubscribeOriginSlackChannelRequest = class _UnsubscribeOriginSlackChannelRequest extends __protoMessage3163 {
    constructor(data){
        super();
        this.slackChannelId = "";
        this.repoOwner = "";
        this.repoName = "";
        this.features = [];
        this.requiredLabels = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UnsubscribeOriginSlackChannelRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UnsubscribeOriginSlackChannelRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UnsubscribeOriginSlackChannelRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UnsubscribeOriginSlackChannelRequest, a, b2);
    }
    static $() {
        return [
            "UnsubscribeOriginSlackChannelRequest|1 slack_channel_id 9|2 slack_team_id 9?|3 repo_owner 9|4 repo_name 9|5 features #0*|6 required_labels 9*",
            OriginSlackChannelSubscriptionFeature
        ];
    }
};
UnsubscribeOriginSlackChannelResponse = class _UnsubscribeOriginSlackChannelResponse extends __protoMessage3163 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UnsubscribeOriginSlackChannelResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UnsubscribeOriginSlackChannelResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UnsubscribeOriginSlackChannelResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UnsubscribeOriginSlackChannelResponse, a, b2);
    }
    static $() {
        return [
            "UnsubscribeOriginSlackChannelResponse|1 subscription #0?",
            OriginSlackChannelSubscription
        ];
    }
};
ListOriginSlackChannelSubscriptionsRequest = class _ListOriginSlackChannelSubscriptionsRequest extends __protoMessage3163 {
    constructor(data){
        super();
        this.slackChannelId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListOriginSlackChannelSubscriptionsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListOriginSlackChannelSubscriptionsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListOriginSlackChannelSubscriptionsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListOriginSlackChannelSubscriptionsRequest, a, b2);
    }
    static $() {
        return [
            "ListOriginSlackChannelSubscriptionsRequest|1 slack_channel_id 9|2 slack_team_id 9?"
        ];
    }
};
ListOriginSlackChannelSubscriptionsResponse = class _ListOriginSlackChannelSubscriptionsResponse extends __protoMessage3163 {
    constructor(data){
        super();
        this.subscriptions = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListOriginSlackChannelSubscriptionsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListOriginSlackChannelSubscriptionsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListOriginSlackChannelSubscriptionsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListOriginSlackChannelSubscriptionsResponse, a, b2);
    }
    static $() {
        return [
            "ListOriginSlackChannelSubscriptionsResponse|1 subscriptions #0*",
            OriginSlackChannelSubscription
        ];
    }
};

}
