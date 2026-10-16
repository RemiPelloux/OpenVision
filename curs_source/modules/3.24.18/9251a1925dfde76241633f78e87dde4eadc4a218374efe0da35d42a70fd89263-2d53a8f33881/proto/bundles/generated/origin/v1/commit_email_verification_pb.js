import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { Timestamp } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/timestamp_pb.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage168, __protoMessage3161, CommitEmailGithubState, CommitEmailVerificationState, OriginCommitEmailVerification, GetOriginCommitEmailVerificationRequest, GetOriginCommitEmailVerificationResponse, StartOriginCommitEmailVerificationRequest, StartOriginCommitEmailVerificationResponse;
export { CommitEmailGithubState, CommitEmailVerificationState, GetOriginCommitEmailVerificationRequest, GetOriginCommitEmailVerificationResponse, OriginCommitEmailVerification, StartOriginCommitEmailVerificationRequest, StartOriginCommitEmailVerificationResponse, __protoMessage3161, __protoPackage168 };
var __wakaru_init_commit_email_verification_pb_initialized = false;
export function init_commit_email_verification_pb() {
if (__wakaru_init_commit_email_verification_pb_initialized) return;
__wakaru_init_commit_email_verification_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage168 = "origin.v1.";
__protoMessage3161 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage168;
    }
};
CommitEmailGithubState = enumType2(proto3, __protoPackage168, "CommitEmailGithubState", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "UNKNOWN"
    ],
    [
        2,
        "NOT_ADDED"
    ],
    [
        3,
        "UNVERIFIED"
    ],
    [
        4,
        "VERIFIED"
    ],
    [
        5,
        "NOT_CONNECTED"
    ]
], 1);
CommitEmailVerificationState = enumType2(proto3, __protoPackage168, "CommitEmailVerificationState", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NOT_STARTED"
    ],
    [
        2,
        "WAITING_FOR_EMAIL"
    ],
    [
        3,
        "READY_TO_VERIFY"
    ],
    [
        4,
        "VERIFIED"
    ],
    [
        5,
        "IDENTITY_MISMATCH"
    ],
    [
        6,
        "EMAIL_NOT_RECEIVED"
    ],
    [
        7,
        "EXPIRED"
    ]
], 1);
OriginCommitEmailVerification = class _OriginCommitEmailVerification extends __protoMessage3161 {
    constructor(data){
        super();
        this.noreplyEmail = "";
        this.eligible = false;
        this.connectedGithubLogin = "";
        this.githubState = CommitEmailGithubState.UNSPECIFIED;
        this.state = CommitEmailVerificationState.UNSPECIFIED;
        this.verificationUrl = "";
        this.mismatchedGithubLogin = "";
        this.githubSettingsEmailsUrl = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _OriginCommitEmailVerification().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _OriginCommitEmailVerification().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _OriginCommitEmailVerification().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_OriginCommitEmailVerification, a, b2);
    }
    static $() {
        return [
            "OriginCommitEmailVerification|1 noreply_email 9|2 eligible 8|3 connected_github_login 9|4 github_state #0|5 state #1|6 verification_url 9|7 mismatched_github_login 9|8 github_settings_emails_url 9|9 updated_at #2",
            CommitEmailGithubState,
            CommitEmailVerificationState,
            Timestamp
        ];
    }
};
GetOriginCommitEmailVerificationRequest = class _GetOriginCommitEmailVerificationRequest extends __protoMessage3161 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetOriginCommitEmailVerificationRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetOriginCommitEmailVerificationRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetOriginCommitEmailVerificationRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetOriginCommitEmailVerificationRequest, a, b2);
    }
    static $() {
        return [
            "GetOriginCommitEmailVerificationRequest"
        ];
    }
};
GetOriginCommitEmailVerificationResponse = class _GetOriginCommitEmailVerificationResponse extends __protoMessage3161 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetOriginCommitEmailVerificationResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetOriginCommitEmailVerificationResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetOriginCommitEmailVerificationResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetOriginCommitEmailVerificationResponse, a, b2);
    }
    static $() {
        return [
            "GetOriginCommitEmailVerificationResponse|1 verification #0",
            OriginCommitEmailVerification
        ];
    }
};
StartOriginCommitEmailVerificationRequest = class _StartOriginCommitEmailVerificationRequest extends __protoMessage3161 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StartOriginCommitEmailVerificationRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StartOriginCommitEmailVerificationRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StartOriginCommitEmailVerificationRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StartOriginCommitEmailVerificationRequest, a, b2);
    }
    static $() {
        return [
            "StartOriginCommitEmailVerificationRequest"
        ];
    }
};
StartOriginCommitEmailVerificationResponse = class _StartOriginCommitEmailVerificationResponse extends __protoMessage3161 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StartOriginCommitEmailVerificationResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StartOriginCommitEmailVerificationResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StartOriginCommitEmailVerificationResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StartOriginCommitEmailVerificationResponse, a, b2);
    }
    static $() {
        return [
            "StartOriginCommitEmailVerificationResponse|1 verification #0",
            OriginCommitEmailVerification
        ];
    }
};

}
