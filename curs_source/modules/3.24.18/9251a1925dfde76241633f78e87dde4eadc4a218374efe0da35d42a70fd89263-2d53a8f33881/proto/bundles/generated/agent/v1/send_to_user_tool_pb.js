import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage61, __protoMessage361, SendToUserArgs, SendToUserSuccess, SendToUserError, SendToUserResult, SendToUserToolCall;
export { SendToUserArgs, SendToUserError, SendToUserResult, SendToUserSuccess, SendToUserToolCall, __protoMessage361, __protoPackage61 };
var __wakaru_init_send_to_user_tool_pb_initialized = false;
export function init_send_to_user_tool_pb() {
if (__wakaru_init_send_to_user_tool_pb_initialized) return;
__wakaru_init_send_to_user_tool_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage61 = "agent.v1.";
__protoMessage361 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage61;
    }
};
SendToUserArgs = class _SendToUserArgs extends __protoMessage361 {
    constructor(data){
        super();
        this.message = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SendToUserArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SendToUserArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SendToUserArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SendToUserArgs, a, b2);
    }
    static $() {
        return [
            "SendToUserArgs|1 message 9"
        ];
    }
};
SendToUserSuccess = class _SendToUserSuccess extends __protoMessage361 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SendToUserSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SendToUserSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SendToUserSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SendToUserSuccess, a, b2);
    }
    static $() {
        return [
            "SendToUserSuccess"
        ];
    }
};
SendToUserError = class _SendToUserError extends __protoMessage361 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SendToUserError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SendToUserError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SendToUserError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SendToUserError, a, b2);
    }
    static $() {
        return [
            "SendToUserError|1 error 9"
        ];
    }
};
SendToUserResult = class _SendToUserResult extends __protoMessage361 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SendToUserResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SendToUserResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SendToUserResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SendToUserResult, a, b2);
    }
    static $() {
        return [
            "SendToUserResult|1 success #0 result|2 error #1 result",
            SendToUserSuccess,
            SendToUserError
        ];
    }
};
SendToUserToolCall = class _SendToUserToolCall extends __protoMessage361 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SendToUserToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SendToUserToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SendToUserToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SendToUserToolCall, a, b2);
    }
    static $() {
        return [
            "SendToUserToolCall|1 args #0|2 result #1",
            SendToUserArgs,
            SendToUserResult
        ];
    }
};

}
