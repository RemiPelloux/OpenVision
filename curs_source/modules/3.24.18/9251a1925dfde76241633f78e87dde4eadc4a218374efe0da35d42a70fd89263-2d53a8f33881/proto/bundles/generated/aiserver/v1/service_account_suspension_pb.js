import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage120, __protoMessage3117, SuspendTeamServiceAccountRequest, SuspendTeamServiceAccountResponse, ResumeTeamServiceAccountRequest, ResumeTeamServiceAccountResponse;
export { ResumeTeamServiceAccountRequest, ResumeTeamServiceAccountResponse, SuspendTeamServiceAccountRequest, SuspendTeamServiceAccountResponse, __protoMessage3117, __protoPackage120 };
var __wakaru_init_service_account_suspension_pb_initialized = false;
export function init_service_account_suspension_pb() {
if (__wakaru_init_service_account_suspension_pb_initialized) return;
__wakaru_init_service_account_suspension_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage120 = "aiserver.v1.";
__protoMessage3117 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage120;
    }
};
SuspendTeamServiceAccountRequest = class _SuspendTeamServiceAccountRequest extends __protoMessage3117 {
    constructor(data){
        super();
        this.teamId = 0;
        this.serviceAccountId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SuspendTeamServiceAccountRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SuspendTeamServiceAccountRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SuspendTeamServiceAccountRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SuspendTeamServiceAccountRequest, a, b2);
    }
    static $() {
        return [
            "SuspendTeamServiceAccountRequest|1 team_id 5|2 service_account_id 9"
        ];
    }
};
SuspendTeamServiceAccountResponse = class _SuspendTeamServiceAccountResponse extends __protoMessage3117 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SuspendTeamServiceAccountResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SuspendTeamServiceAccountResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SuspendTeamServiceAccountResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SuspendTeamServiceAccountResponse, a, b2);
    }
    static $() {
        return [
            "SuspendTeamServiceAccountResponse"
        ];
    }
};
ResumeTeamServiceAccountRequest = class _ResumeTeamServiceAccountRequest extends __protoMessage3117 {
    constructor(data){
        super();
        this.teamId = 0;
        this.serviceAccountId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ResumeTeamServiceAccountRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ResumeTeamServiceAccountRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ResumeTeamServiceAccountRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ResumeTeamServiceAccountRequest, a, b2);
    }
    static $() {
        return [
            "ResumeTeamServiceAccountRequest|1 team_id 5|2 service_account_id 9"
        ];
    }
};
ResumeTeamServiceAccountResponse = class _ResumeTeamServiceAccountResponse extends __protoMessage3117 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ResumeTeamServiceAccountResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ResumeTeamServiceAccountResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ResumeTeamServiceAccountResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ResumeTeamServiceAccountResponse, a, b2);
    }
    static $() {
        return [
            "ResumeTeamServiceAccountResponse"
        ];
    }
};

}
