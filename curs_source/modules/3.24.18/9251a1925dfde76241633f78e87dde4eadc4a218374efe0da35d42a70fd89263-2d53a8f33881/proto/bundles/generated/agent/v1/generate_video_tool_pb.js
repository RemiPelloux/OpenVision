import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage76, __protoMessage376, GenerateVideoArgs, GenerateVideoResult, GenerateVideoSuccess, GenerateVideoError, GenerateVideoToolCall;
export { GenerateVideoArgs, GenerateVideoError, GenerateVideoResult, GenerateVideoSuccess, GenerateVideoToolCall, __protoMessage376, __protoPackage76 };
var __wakaru_init_generate_video_tool_pb_initialized = false;
export function init_generate_video_tool_pb() {
if (__wakaru_init_generate_video_tool_pb_initialized) return;
__wakaru_init_generate_video_tool_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage76 = "agent.v1.";
__protoMessage376 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage76;
    }
};
GenerateVideoArgs = class _GenerateVideoArgs extends __protoMessage376 {
    constructor(data){
        super();
        this.prompt = "";
        this.referenceImagePaths = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GenerateVideoArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GenerateVideoArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GenerateVideoArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GenerateVideoArgs, a, b2);
    }
    static $() {
        return [
            "GenerateVideoArgs|1 prompt 9|2 file_path 9?|3 image_path 9?|4 reference_image_paths 9*|5 duration_seconds 13?|6 aspect_ratio 9?|7 resolution 9?"
        ];
    }
};
GenerateVideoResult = class _GenerateVideoResult extends __protoMessage376 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GenerateVideoResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GenerateVideoResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GenerateVideoResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GenerateVideoResult, a, b2);
    }
    static $() {
        return [
            "GenerateVideoResult|1 success #0 result|2 error #1 result",
            GenerateVideoSuccess,
            GenerateVideoError
        ];
    }
};
GenerateVideoSuccess = class _GenerateVideoSuccess extends __protoMessage376 {
    constructor(data){
        super();
        this.filePath = "";
        this.durationSeconds = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GenerateVideoSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GenerateVideoSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GenerateVideoSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GenerateVideoSuccess, a, b2);
    }
    static $() {
        return [
            "GenerateVideoSuccess|1 file_path 9|2 duration_seconds 13"
        ];
    }
};
GenerateVideoError = class _GenerateVideoError extends __protoMessage376 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GenerateVideoError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GenerateVideoError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GenerateVideoError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GenerateVideoError, a, b2);
    }
    static $() {
        return [
            "GenerateVideoError|1 error 9"
        ];
    }
};
GenerateVideoToolCall = class _GenerateVideoToolCall extends __protoMessage376 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GenerateVideoToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GenerateVideoToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GenerateVideoToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GenerateVideoToolCall, a, b2);
    }
    static $() {
        return [
            "GenerateVideoToolCall|1 args #0|2 result #1",
            GenerateVideoArgs,
            GenerateVideoResult
        ];
    }
};

}
