import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CurrentFileInfo, DocumentSymbolWithText, HoverDetails, ModelDetails, init_utils_pb2 } from "./utils_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage137, __protoMessage3133, StreamAiPreviewsIntent, StreamAiPreviewsRequest, StreamAiPreviewsResponse;
export { StreamAiPreviewsIntent, StreamAiPreviewsRequest, StreamAiPreviewsResponse, __protoMessage3133, __protoPackage137 };
var __wakaru_init_fastpreviews_pb_initialized = false;
export function init_fastpreviews_pb() {
if (__wakaru_init_fastpreviews_pb_initialized) return;
__wakaru_init_fastpreviews_pb_initialized = true;
"use strict";
init_esm2();
init_utils_pb2();
init_compact();
__protoPackage137 = "aiserver.v1.";
__protoMessage3133 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage137;
    }
};
StreamAiPreviewsIntent = class _StreamAiPreviewsIntent extends __protoMessage3133 {
    constructor(data){
        super();
        this.mainSymbolsToAnalyzeFromGoToDef = [];
        this.relatedSymbols = [];
        this.mainSymbolsToAnalyzeFromImplementations = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamAiPreviewsIntent().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamAiPreviewsIntent().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamAiPreviewsIntent().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamAiPreviewsIntent, a, b2);
    }
    static $() {
        return [
            "StreamAiPreviewsIntent|1 main_symbols_to_analyze_from_go_to_def #0*|4 main_symbol_hover_details #1|3 related_symbols #0*|6 main_symbols_to_analyze_from_implementations #0*",
            DocumentSymbolWithText,
            HoverDetails
        ];
    }
};
StreamAiPreviewsRequest = class _StreamAiPreviewsRequest extends __protoMessage3133 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamAiPreviewsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamAiPreviewsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamAiPreviewsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamAiPreviewsRequest, a, b2);
    }
    static $() {
        return [
            "StreamAiPreviewsRequest|1 current_file #0|2 intent #1|14 model_details #2|15 is_detailed 8?",
            CurrentFileInfo,
            StreamAiPreviewsIntent,
            ModelDetails
        ];
    }
};
StreamAiPreviewsResponse = class _StreamAiPreviewsResponse extends __protoMessage3133 {
    constructor(data){
        super();
        this.text = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamAiPreviewsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamAiPreviewsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamAiPreviewsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamAiPreviewsResponse, a, b2);
    }
    static $() {
        return [
            "StreamAiPreviewsResponse|1 text 9"
        ];
    }
};

}
