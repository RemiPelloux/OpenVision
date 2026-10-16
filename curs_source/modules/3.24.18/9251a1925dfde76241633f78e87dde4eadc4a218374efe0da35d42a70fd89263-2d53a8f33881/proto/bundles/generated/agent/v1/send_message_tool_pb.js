import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { protoInt64 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage59, __protoMessage359, SendMessageText, SendMessageAttachment, SendMessageArgs, SendMessageSuccess, SendMessageError, SendMessageResult, SendMessageToolCall;
export { SendMessageArgs, SendMessageAttachment, SendMessageError, SendMessageResult, SendMessageSuccess, SendMessageText, SendMessageToolCall, __protoMessage359, __protoPackage59 };
var __wakaru_init_send_message_tool_pb_initialized = false;
export function init_send_message_tool_pb() {
if (__wakaru_init_send_message_tool_pb_initialized) return;
__wakaru_init_send_message_tool_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage59 = "agent.v1.";
__protoMessage359 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage59;
    }
};
SendMessageText = class _SendMessageText extends __protoMessage359 {
    constructor(data){
        super();
        this.content = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SendMessageText().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SendMessageText().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SendMessageText().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SendMessageText, a, b2);
    }
    static $() {
        return [
            "SendMessageText|1 content 9"
        ];
    }
};
SendMessageAttachment = class _SendMessageAttachment extends __protoMessage359 {
    constructor(data){
        super();
        this.url = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SendMessageAttachment().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SendMessageAttachment().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SendMessageAttachment().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SendMessageAttachment, a, b2);
    }
    static $() {
        return [
            "SendMessageAttachment|1 url 9|2 alt 9?"
        ];
    }
};
SendMessageArgs = class _SendMessageArgs extends __protoMessage359 {
    constructor(data){
        super();
        this.message = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SendMessageArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SendMessageArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SendMessageArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SendMessageArgs, a, b2);
    }
    static $() {
        return [
            "SendMessageArgs|1 text #0 message|2 attachment #1 message",
            SendMessageText,
            SendMessageAttachment
        ];
    }
};
SendMessageSuccess = class _SendMessageSuccess extends __protoMessage359 {
    constructor(data){
        super();
        this.timestamp = protoInt64.zero;
        this.messageId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SendMessageSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SendMessageSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SendMessageSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SendMessageSuccess, a, b2);
    }
    static $() {
        return [
            "SendMessageSuccess|1 timestamp 4|2 message_id 9"
        ];
    }
};
SendMessageError = class _SendMessageError extends __protoMessage359 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SendMessageError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SendMessageError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SendMessageError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SendMessageError, a, b2);
    }
    static $() {
        return [
            "SendMessageError|1 error 9"
        ];
    }
};
SendMessageResult = class _SendMessageResult extends __protoMessage359 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SendMessageResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SendMessageResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SendMessageResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SendMessageResult, a, b2);
    }
    static $() {
        return [
            "SendMessageResult|1 success #0 result|2 error #1 result",
            SendMessageSuccess,
            SendMessageError
        ];
    }
};
SendMessageToolCall = class _SendMessageToolCall extends __protoMessage359 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SendMessageToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SendMessageToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SendMessageToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SendMessageToolCall, a, b2);
    }
    static $() {
        return [
            "SendMessageToolCall|1 args #0|2 result #1",
            SendMessageArgs,
            SendMessageResult
        ];
    }
};

}
