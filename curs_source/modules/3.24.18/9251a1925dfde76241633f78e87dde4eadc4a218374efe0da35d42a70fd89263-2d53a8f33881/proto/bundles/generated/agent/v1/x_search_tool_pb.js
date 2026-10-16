import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage77, __protoMessage377, XSearchArgs, XSearchResult, XSearchSuccess, XSearchCitation, XSearchError, XSearchRejected, XSearchToolCall;
export { XSearchArgs, XSearchCitation, XSearchError, XSearchRejected, XSearchResult, XSearchSuccess, XSearchToolCall, __protoMessage377, __protoPackage77 };
var __wakaru_init_x_search_tool_pb_initialized = false;
export function init_x_search_tool_pb() {
if (__wakaru_init_x_search_tool_pb_initialized) return;
__wakaru_init_x_search_tool_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage77 = "agent.v1.";
__protoMessage377 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage77;
    }
};
XSearchArgs = class _XSearchArgs extends __protoMessage377 {
    constructor(data){
        super();
        this.query = "";
        this.allowedXHandles = [];
        this.excludedXHandles = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _XSearchArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _XSearchArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _XSearchArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_XSearchArgs, a, b2);
    }
    static $() {
        return [
            "XSearchArgs|1 query 9|2 from_date 9?|3 to_date 9?|4 allowed_x_handles 9*|5 excluded_x_handles 9*"
        ];
    }
};
XSearchResult = class _XSearchResult extends __protoMessage377 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _XSearchResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _XSearchResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _XSearchResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_XSearchResult, a, b2);
    }
    static $() {
        return [
            "XSearchResult|1 success #0 result|2 error #1 result|3 rejected #2 result",
            XSearchSuccess,
            XSearchError,
            XSearchRejected
        ];
    }
};
XSearchSuccess = class _XSearchSuccess extends __protoMessage377 {
    constructor(data){
        super();
        this.answer = "";
        this.citations = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _XSearchSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _XSearchSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _XSearchSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_XSearchSuccess, a, b2);
    }
    static $() {
        return [
            "XSearchSuccess|1 answer 9|2 citations #0*",
            XSearchCitation
        ];
    }
};
XSearchCitation = class _XSearchCitation extends __protoMessage377 {
    constructor(data){
        super();
        this.url = "";
        this.title = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _XSearchCitation().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _XSearchCitation().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _XSearchCitation().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_XSearchCitation, a, b2);
    }
    static $() {
        return [
            "XSearchCitation|1 url 9|2 title 9"
        ];
    }
};
XSearchError = class _XSearchError extends __protoMessage377 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _XSearchError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _XSearchError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _XSearchError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_XSearchError, a, b2);
    }
    static $() {
        return [
            "XSearchError|1 error 9"
        ];
    }
};
XSearchRejected = class _XSearchRejected extends __protoMessage377 {
    constructor(data){
        super();
        this.reason = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _XSearchRejected().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _XSearchRejected().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _XSearchRejected().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_XSearchRejected, a, b2);
    }
    static $() {
        return [
            "XSearchRejected|1 reason 9"
        ];
    }
};
XSearchToolCall = class _XSearchToolCall extends __protoMessage377 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _XSearchToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _XSearchToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _XSearchToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_XSearchToolCall, a, b2);
    }
    static $() {
        return [
            "XSearchToolCall|1 args #0|2 result #1",
            XSearchArgs,
            XSearchResult
        ];
    }
};

}
