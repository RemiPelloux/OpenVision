import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { protoInt64 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage123, __protoMessage3120, BidiRequestId, BidiAppendRequest, BidiAppendResponse, BidiPollRequest, BidiPollResponse;
export { BidiAppendRequest, BidiAppendResponse, BidiPollRequest, BidiPollResponse, BidiRequestId, __protoMessage3120, __protoPackage123 };
var __wakaru_init_bidi_pb_initialized = false;
export function init_bidi_pb() {
if (__wakaru_init_bidi_pb_initialized) return;
__wakaru_init_bidi_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage123 = "aiserver.v1.";
__protoMessage3120 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage123;
    }
};
BidiRequestId = class _BidiRequestId extends __protoMessage3120 {
    constructor(data){
        super();
        this.requestId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _BidiRequestId().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _BidiRequestId().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _BidiRequestId().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_BidiRequestId, a, b2);
    }
    static $() {
        return [
            "BidiRequestId|1 request_id 9"
        ];
    }
};
BidiAppendRequest = class _BidiAppendRequest extends __protoMessage3120 {
    constructor(data){
        super();
        this.data = "";
        this.appendSeqno = protoInt64.zero;
        this.dataBinary = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _BidiAppendRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _BidiAppendRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _BidiAppendRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_BidiAppendRequest, a, b2);
    }
    static $() {
        return [
            "BidiAppendRequest|1 data 9|2 request_id #0|3 append_seqno 3|4 data_binary 12",
            BidiRequestId
        ];
    }
};
BidiAppendResponse = class _BidiAppendResponse extends __protoMessage3120 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _BidiAppendResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _BidiAppendResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _BidiAppendResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_BidiAppendResponse, a, b2);
    }
    static $() {
        return [
            "BidiAppendResponse"
        ];
    }
};
BidiPollRequest = class _BidiPollRequest extends __protoMessage3120 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _BidiPollRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _BidiPollRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _BidiPollRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_BidiPollRequest, a, b2);
    }
    static $() {
        return [
            "BidiPollRequest|1 request_id #0|2 start_request 8?",
            BidiRequestId
        ];
    }
};
BidiPollResponse = class _BidiPollResponse extends __protoMessage3120 {
    constructor(data){
        super();
        this.seqno = protoInt64.zero;
        this.data = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _BidiPollResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _BidiPollResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _BidiPollResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_BidiPollResponse, a, b2);
    }
    static $() {
        return [
            "BidiPollResponse|1 seqno 3|2 data 9|3 eof 8?"
        ];
    }
};

}
