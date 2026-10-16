import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage35, __protoMessage335, GenerateImageArgs, GenerateImageResult, GenerateImageSuccess, GenerateImageError, GenerateImageToolCall, GenerateImageRequestQuery, GenerateImageRequestResponse, GenerateImageRequestResponse_Approved, GenerateImageRequestResponse_Rejected;
export { GenerateImageArgs, GenerateImageError, GenerateImageRequestQuery, GenerateImageRequestResponse, GenerateImageRequestResponse_Approved, GenerateImageRequestResponse_Rejected, GenerateImageResult, GenerateImageSuccess, GenerateImageToolCall, __protoMessage335, __protoPackage35 };
var __wakaru_init_generate_image_tool_pb_initialized = false;
export function init_generate_image_tool_pb() {
if (__wakaru_init_generate_image_tool_pb_initialized) return;
__wakaru_init_generate_image_tool_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage35 = "agent.v1.";
__protoMessage335 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage35;
    }
};
GenerateImageArgs = class _GenerateImageArgs extends __protoMessage335 {
    constructor(data){
        super();
        this.description = "";
        this.referenceImagePaths = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GenerateImageArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GenerateImageArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GenerateImageArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GenerateImageArgs, a, b2);
    }
    static $() {
        return [
            "GenerateImageArgs|1 description 9|2 file_path 9?|5 reference_image_paths 9*|6 aspect_ratio 9?"
        ];
    }
};
GenerateImageResult = class _GenerateImageResult extends __protoMessage335 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GenerateImageResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GenerateImageResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GenerateImageResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GenerateImageResult, a, b2);
    }
    static $() {
        return [
            "GenerateImageResult|1 success #0 result|2 error #1 result",
            GenerateImageSuccess,
            GenerateImageError
        ];
    }
};
GenerateImageSuccess = class _GenerateImageSuccess extends __protoMessage335 {
    constructor(data){
        super();
        this.filePath = "";
        this.imageData = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GenerateImageSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GenerateImageSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GenerateImageSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GenerateImageSuccess, a, b2);
    }
    static $() {
        return [
            "GenerateImageSuccess|1 file_path 9|2 image_data 9"
        ];
    }
};
GenerateImageError = class _GenerateImageError extends __protoMessage335 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GenerateImageError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GenerateImageError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GenerateImageError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GenerateImageError, a, b2);
    }
    static $() {
        return [
            "GenerateImageError|1 error 9"
        ];
    }
};
GenerateImageToolCall = class _GenerateImageToolCall extends __protoMessage335 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GenerateImageToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GenerateImageToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GenerateImageToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GenerateImageToolCall, a, b2);
    }
    static $() {
        return [
            "GenerateImageToolCall|1 args #0|2 result #1",
            GenerateImageArgs,
            GenerateImageResult
        ];
    }
};
GenerateImageRequestQuery = class _GenerateImageRequestQuery extends __protoMessage335 {
    constructor(data){
        super();
        this.toolCallId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GenerateImageRequestQuery().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GenerateImageRequestQuery().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GenerateImageRequestQuery().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GenerateImageRequestQuery, a, b2);
    }
    static $() {
        return [
            "GenerateImageRequestQuery|1 args #0|2 tool_call_id 9",
            GenerateImageArgs
        ];
    }
};
GenerateImageRequestResponse = class _GenerateImageRequestResponse extends __protoMessage335 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GenerateImageRequestResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GenerateImageRequestResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GenerateImageRequestResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GenerateImageRequestResponse, a, b2);
    }
    static $() {
        return [
            "GenerateImageRequestResponse|1 approved #0 result|2 rejected #1 result",
            GenerateImageRequestResponse_Approved,
            GenerateImageRequestResponse_Rejected
        ];
    }
};
GenerateImageRequestResponse_Approved = class _GenerateImageRequestResponse_Approved extends __protoMessage335 {
    constructor(data){
        super();
        this.description = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GenerateImageRequestResponse_Approved().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GenerateImageRequestResponse_Approved().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GenerateImageRequestResponse_Approved().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GenerateImageRequestResponse_Approved, a, b2);
    }
    static $() {
        return [
            "GenerateImageRequestResponse.Approved|1 description 9"
        ];
    }
};
GenerateImageRequestResponse_Rejected = class _GenerateImageRequestResponse_Rejected extends __protoMessage335 {
    constructor(data){
        super();
        this.reason = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GenerateImageRequestResponse_Rejected().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GenerateImageRequestResponse_Rejected().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GenerateImageRequestResponse_Rejected().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GenerateImageRequestResponse_Rejected, a, b2);
    }
    static $() {
        return [
            "GenerateImageRequestResponse.Rejected|1 reason 9"
        ];
    }
};

}
