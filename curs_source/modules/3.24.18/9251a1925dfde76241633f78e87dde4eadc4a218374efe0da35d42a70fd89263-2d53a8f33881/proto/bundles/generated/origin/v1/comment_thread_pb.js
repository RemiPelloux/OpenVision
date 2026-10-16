import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { Timestamp } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/timestamp_pb.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { protoInt64 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { ActorWithDisplay, init_actor_with_display_pb } from "./actor_with_display_pb.js";
import { ChangeIdentifier, Comment, CommentReaction, init_change_pb } from "./change_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage179, __protoMessage3172, CommentSide, CommentThreadPortingStatus, CommentThread, CreateCommentThreadRequest, CreateCommentThreadResponse, ListCommentThreadsRequest, ListCommentThreadsResponse, AddCommentToThreadRequest, AddCommentToThreadResponse, ResolveCommentThreadRequest, ResolveCommentThreadResponse, ReopenCommentThreadRequest, ReopenCommentThreadResponse, UpdateCommentRequest, UpdateCommentResponse, DeleteCommentRequest, DeleteCommentResponse, SetCommentReactionRequest, SetCommentReactionResponse, ListCommentReactionsRequest, ListCommentReactionsResponse;
export { AddCommentToThreadRequest, AddCommentToThreadResponse, CommentSide, CommentThread, CommentThreadPortingStatus, CreateCommentThreadRequest, CreateCommentThreadResponse, DeleteCommentRequest, DeleteCommentResponse, ListCommentReactionsRequest, ListCommentReactionsResponse, ListCommentThreadsRequest, ListCommentThreadsResponse, ReopenCommentThreadRequest, ReopenCommentThreadResponse, ResolveCommentThreadRequest, ResolveCommentThreadResponse, SetCommentReactionRequest, SetCommentReactionResponse, UpdateCommentRequest, UpdateCommentResponse, __protoMessage3172, __protoPackage179 };
var __wakaru_init_comment_thread_pb_initialized = false;
export function init_comment_thread_pb() {
if (__wakaru_init_comment_thread_pb_initialized) return;
__wakaru_init_comment_thread_pb_initialized = true;
"use strict";
init_esm2();
init_change_pb();
init_actor_with_display_pb();
init_compact();
__protoPackage179 = "origin.v1.";
__protoMessage3172 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage179;
    }
};
CommentSide = enumType2(proto3, __protoPackage179, "CommentSide", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "LEFT"
    ],
    [
        2,
        "RIGHT"
    ]
], 1);
CommentThreadPortingStatus = enumType2(proto3, __protoPackage179, "CommentThreadPortingStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PORTED"
    ],
    [
        2,
        "ORPHANED"
    ]
], 1);
CommentThread = class _CommentThread extends __protoMessage3172 {
    constructor(data){
        super();
        this.id = "";
        this.changeId = "";
        this.versionId = "";
        this.versionNumber = protoInt64.zero;
        this.reviewId = "";
        this.path = "";
        this.side = CommentSide.UNSPECIFIED;
        this.startLine = 0;
        this.endLine = 0;
        this.externalId = "";
        this.comments = [];
        this.portedToVersionNumber = protoInt64.zero;
        this.portingStatus = CommentThreadPortingStatus.UNSPECIFIED;
        this.portedPath = "";
        this.portedStartLine = 0;
        this.portedEndLine = 0;
        this.versionHeadSha = "";
        this.versionBaseSha = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CommentThread().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CommentThread().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CommentThread().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CommentThread, a, b2);
    }
    static $() {
        return [
            "CommentThread|1 id 9|2 change_id 9|3 version_id 9|4 version_number 4|5 review_id 9|6 resolved_at #0|8 path 9|9 side #1|10 start_line 13|11 end_line 13|12 external_id 9|13 created_at #0|14 updated_at #0|15 comments #2*|19 resolved_by #3|20 ported_to_version_number 4|21 porting_status #4|22 ported_path 9|23 ported_start_line 13|24 ported_end_line 13|25 version_head_sha 9|26 version_base_sha 9|27 version_created_at #0",
            Timestamp,
            CommentSide,
            Comment,
            ActorWithDisplay,
            CommentThreadPortingStatus
        ];
    }
};
CreateCommentThreadRequest = class _CreateCommentThreadRequest extends __protoMessage3172 {
    constructor(data){
        super();
        this.body = "";
        this.versionNumber = protoInt64.zero;
        this.path = "";
        this.side = CommentSide.UNSPECIFIED;
        this.startLine = 0;
        this.endLine = 0;
        this.reviewId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CreateCommentThreadRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CreateCommentThreadRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CreateCommentThreadRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CreateCommentThreadRequest, a, b2);
    }
    static $() {
        return [
            "CreateCommentThreadRequest|1 change #0|2 body 9|3 version_number 4|4 path 9|5 side #1|6 start_line 13|7 end_line 13|8 review_id 9",
            ChangeIdentifier,
            CommentSide
        ];
    }
};
CreateCommentThreadResponse = class _CreateCommentThreadResponse extends __protoMessage3172 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CreateCommentThreadResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CreateCommentThreadResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CreateCommentThreadResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CreateCommentThreadResponse, a, b2);
    }
    static $() {
        return [
            "CreateCommentThreadResponse|1 thread #0",
            CommentThread
        ];
    }
};
ListCommentThreadsRequest = class _ListCommentThreadsRequest extends __protoMessage3172 {
    constructor(data){
        super();
        this.versionNumber = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListCommentThreadsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListCommentThreadsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListCommentThreadsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListCommentThreadsRequest, a, b2);
    }
    static $() {
        return [
            "ListCommentThreadsRequest|1 change #0|2 version_number 4",
            ChangeIdentifier
        ];
    }
};
ListCommentThreadsResponse = class _ListCommentThreadsResponse extends __protoMessage3172 {
    constructor(data){
        super();
        this.threads = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListCommentThreadsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListCommentThreadsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListCommentThreadsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListCommentThreadsResponse, a, b2);
    }
    static $() {
        return [
            "ListCommentThreadsResponse|1 threads #0*",
            CommentThread
        ];
    }
};
AddCommentToThreadRequest = class _AddCommentToThreadRequest extends __protoMessage3172 {
    constructor(data){
        super();
        this.threadId = "";
        this.body = "";
        this.reviewId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AddCommentToThreadRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AddCommentToThreadRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AddCommentToThreadRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AddCommentToThreadRequest, a, b2);
    }
    static $() {
        return [
            "AddCommentToThreadRequest|1 change #0|2 thread_id 9|3 body 9|4 review_id 9",
            ChangeIdentifier
        ];
    }
};
AddCommentToThreadResponse = class _AddCommentToThreadResponse extends __protoMessage3172 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AddCommentToThreadResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AddCommentToThreadResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AddCommentToThreadResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AddCommentToThreadResponse, a, b2);
    }
    static $() {
        return [
            "AddCommentToThreadResponse|1 comment #0",
            Comment
        ];
    }
};
ResolveCommentThreadRequest = class _ResolveCommentThreadRequest extends __protoMessage3172 {
    constructor(data){
        super();
        this.threadId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ResolveCommentThreadRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ResolveCommentThreadRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ResolveCommentThreadRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ResolveCommentThreadRequest, a, b2);
    }
    static $() {
        return [
            "ResolveCommentThreadRequest|1 change #0|2 thread_id 9",
            ChangeIdentifier
        ];
    }
};
ResolveCommentThreadResponse = class _ResolveCommentThreadResponse extends __protoMessage3172 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ResolveCommentThreadResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ResolveCommentThreadResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ResolveCommentThreadResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ResolveCommentThreadResponse, a, b2);
    }
    static $() {
        return [
            "ResolveCommentThreadResponse|1 thread #0",
            CommentThread
        ];
    }
};
ReopenCommentThreadRequest = class _ReopenCommentThreadRequest extends __protoMessage3172 {
    constructor(data){
        super();
        this.threadId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReopenCommentThreadRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReopenCommentThreadRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReopenCommentThreadRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReopenCommentThreadRequest, a, b2);
    }
    static $() {
        return [
            "ReopenCommentThreadRequest|1 change #0|2 thread_id 9",
            ChangeIdentifier
        ];
    }
};
ReopenCommentThreadResponse = class _ReopenCommentThreadResponse extends __protoMessage3172 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReopenCommentThreadResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReopenCommentThreadResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReopenCommentThreadResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReopenCommentThreadResponse, a, b2);
    }
    static $() {
        return [
            "ReopenCommentThreadResponse|1 thread #0",
            CommentThread
        ];
    }
};
UpdateCommentRequest = class _UpdateCommentRequest extends __protoMessage3172 {
    constructor(data){
        super();
        this.commentId = "";
        this.body = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UpdateCommentRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UpdateCommentRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UpdateCommentRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UpdateCommentRequest, a, b2);
    }
    static $() {
        return [
            "UpdateCommentRequest|1 comment_id 9|2 body 9"
        ];
    }
};
UpdateCommentResponse = class _UpdateCommentResponse extends __protoMessage3172 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UpdateCommentResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UpdateCommentResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UpdateCommentResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UpdateCommentResponse, a, b2);
    }
    static $() {
        return [
            "UpdateCommentResponse|1 comment #0",
            Comment
        ];
    }
};
DeleteCommentRequest = class _DeleteCommentRequest extends __protoMessage3172 {
    constructor(data){
        super();
        this.commentId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _DeleteCommentRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DeleteCommentRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DeleteCommentRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_DeleteCommentRequest, a, b2);
    }
    static $() {
        return [
            "DeleteCommentRequest|1 comment_id 9"
        ];
    }
};
DeleteCommentResponse = class _DeleteCommentResponse extends __protoMessage3172 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _DeleteCommentResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DeleteCommentResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DeleteCommentResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_DeleteCommentResponse, a, b2);
    }
    static $() {
        return [
            "DeleteCommentResponse"
        ];
    }
};
SetCommentReactionRequest = class _SetCommentReactionRequest extends __protoMessage3172 {
    constructor(data){
        super();
        this.commentId = "";
        this.emoji = "";
        this.active = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SetCommentReactionRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SetCommentReactionRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SetCommentReactionRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SetCommentReactionRequest, a, b2);
    }
    static $() {
        return [
            "SetCommentReactionRequest|1 comment_id 9|2 emoji 9|3 active 8"
        ];
    }
};
SetCommentReactionResponse = class _SetCommentReactionResponse extends __protoMessage3172 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SetCommentReactionResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SetCommentReactionResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SetCommentReactionResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SetCommentReactionResponse, a, b2);
    }
    static $() {
        return [
            "SetCommentReactionResponse"
        ];
    }
};
ListCommentReactionsRequest = class _ListCommentReactionsRequest extends __protoMessage3172 {
    constructor(data){
        super();
        this.commentId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListCommentReactionsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListCommentReactionsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListCommentReactionsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListCommentReactionsRequest, a, b2);
    }
    static $() {
        return [
            "ListCommentReactionsRequest|1 comment_id 9"
        ];
    }
};
ListCommentReactionsResponse = class _ListCommentReactionsResponse extends __protoMessage3172 {
    constructor(data){
        super();
        this.reactions = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListCommentReactionsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListCommentReactionsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListCommentReactionsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListCommentReactionsResponse, a, b2);
    }
    static $() {
        return [
            "ListCommentReactionsResponse|1 reactions #0*",
            CommentReaction
        ];
    }
};

}
