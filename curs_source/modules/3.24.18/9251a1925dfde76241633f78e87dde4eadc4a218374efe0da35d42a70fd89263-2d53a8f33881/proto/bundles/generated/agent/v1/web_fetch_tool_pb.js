import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { OutputLocation, SmartModeApproval, init_utils_pb } from "./utils_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage45, __protoMessage345, WebFetchArgs, WebFetchResult, WebFetchSuccess, WebFetchError, WebFetchRejected, WebFetchToolCall, WebFetchRequestQuery, WebFetchRequestResponse, WebFetchRequestResponse_Approved, WebFetchRequestResponse_Rejected;
export { WebFetchArgs, WebFetchError, WebFetchRejected, WebFetchRequestQuery, WebFetchRequestResponse, WebFetchRequestResponse_Approved, WebFetchRequestResponse_Rejected, WebFetchResult, WebFetchSuccess, WebFetchToolCall, __protoMessage345, __protoPackage45 };
var __wakaru_init_web_fetch_tool_pb_initialized = false;
export function init_web_fetch_tool_pb() {
if (__wakaru_init_web_fetch_tool_pb_initialized) return;
__wakaru_init_web_fetch_tool_pb_initialized = true;
"use strict";
init_esm2();
init_utils_pb();
init_compact();
__protoPackage45 = "agent.v1.";
__protoMessage345 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage45;
    }
};
WebFetchArgs = class _WebFetchArgs extends __protoMessage345 {
    constructor(data){
        super();
        this.url = "";
        this.toolCallId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WebFetchArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WebFetchArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WebFetchArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WebFetchArgs, a, b2);
    }
    static $() {
        return [
            "WebFetchArgs|1 url 9|2 tool_call_id 9"
        ];
    }
};
WebFetchResult = class _WebFetchResult extends __protoMessage345 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WebFetchResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WebFetchResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WebFetchResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WebFetchResult, a, b2);
    }
    static $() {
        return [
            "WebFetchResult|1 success #0 result|2 error #1 result|3 rejected #2 result",
            WebFetchSuccess,
            WebFetchError,
            WebFetchRejected
        ];
    }
};
WebFetchSuccess = class _WebFetchSuccess extends __protoMessage345 {
    constructor(data){
        super();
        this.url = "";
        this.markdown = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WebFetchSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WebFetchSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WebFetchSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WebFetchSuccess, a, b2);
    }
    static $() {
        return [
            "WebFetchSuccess|1 url 9|2 markdown 9|3 output_location #0?",
            OutputLocation
        ];
    }
};
WebFetchError = class _WebFetchError extends __protoMessage345 {
    constructor(data){
        super();
        this.url = "";
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WebFetchError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WebFetchError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WebFetchError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WebFetchError, a, b2);
    }
    static $() {
        return [
            "WebFetchError|1 url 9|2 error 9"
        ];
    }
};
WebFetchRejected = class _WebFetchRejected extends __protoMessage345 {
    constructor(data){
        super();
        this.reason = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WebFetchRejected().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WebFetchRejected().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WebFetchRejected().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WebFetchRejected, a, b2);
    }
    static $() {
        return [
            "WebFetchRejected|1 reason 9"
        ];
    }
};
WebFetchToolCall = class _WebFetchToolCall extends __protoMessage345 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WebFetchToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WebFetchToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WebFetchToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WebFetchToolCall, a, b2);
    }
    static $() {
        return [
            "WebFetchToolCall|1 args #0|2 result #1",
            WebFetchArgs,
            WebFetchResult
        ];
    }
};
WebFetchRequestQuery = class _WebFetchRequestQuery extends __protoMessage345 {
    constructor(data){
        super();
        this.skipApproval = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WebFetchRequestQuery().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WebFetchRequestQuery().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WebFetchRequestQuery().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WebFetchRequestQuery, a, b2);
    }
    static $() {
        return [
            "WebFetchRequestQuery|1 args #0|2 skip_approval 8|3 smart_mode_approval #1",
            WebFetchArgs,
            SmartModeApproval
        ];
    }
};
WebFetchRequestResponse = class _WebFetchRequestResponse extends __protoMessage345 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WebFetchRequestResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WebFetchRequestResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WebFetchRequestResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WebFetchRequestResponse, a, b2);
    }
    static $() {
        return [
            "WebFetchRequestResponse|1 approved #0 result|2 rejected #1 result",
            WebFetchRequestResponse_Approved,
            WebFetchRequestResponse_Rejected
        ];
    }
};
WebFetchRequestResponse_Approved = class _WebFetchRequestResponse_Approved extends __protoMessage345 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WebFetchRequestResponse_Approved().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WebFetchRequestResponse_Approved().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WebFetchRequestResponse_Approved().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WebFetchRequestResponse_Approved, a, b2);
    }
    static $() {
        return [
            "WebFetchRequestResponse.Approved"
        ];
    }
};
WebFetchRequestResponse_Rejected = class _WebFetchRequestResponse_Rejected extends __protoMessage345 {
    constructor(data){
        super();
        this.reason = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WebFetchRequestResponse_Rejected().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WebFetchRequestResponse_Rejected().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WebFetchRequestResponse_Rejected().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WebFetchRequestResponse_Rejected, a, b2);
    }
    static $() {
        return [
            "WebFetchRequestResponse.Rejected|1 reason 9"
        ];
    }
};

}
