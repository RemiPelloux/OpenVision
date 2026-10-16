import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { RepositoryInfo, init_repository_pb } from "./repository_pb.js";
import { CodeBlock, CurrentFileInfo, ExplicitContext, LinterErrors, ModelDetails, init_utils_pb2 } from "./utils_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage136, __protoMessage3132, StreamInlineLongCompletionRequest, StreamInlineLongCompletionRequest_ContextBlock, StreamInlineLongCompletionRequest_ContextBlock_ContextType;
export { StreamInlineLongCompletionRequest, StreamInlineLongCompletionRequest_ContextBlock, StreamInlineLongCompletionRequest_ContextBlock_ContextType, __protoMessage3132, __protoPackage136 };
var __wakaru_init_inline_gpt4_pb_initialized = false;
export function init_inline_gpt4_pb() {
if (__wakaru_init_inline_gpt4_pb_initialized) return;
__wakaru_init_inline_gpt4_pb_initialized = true;
"use strict";
init_esm2();
init_utils_pb2();
init_repository_pb();
init_compact();
__protoPackage136 = "aiserver.v1.";
__protoMessage3132 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage136;
    }
};
StreamInlineLongCompletionRequest = class _StreamInlineLongCompletionRequest extends __protoMessage3132 {
    constructor(data){
        super();
        this.repositories = [];
        this.contextBlocks = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamInlineLongCompletionRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamInlineLongCompletionRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamInlineLongCompletionRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamInlineLongCompletionRequest, a, b2);
    }
    static $() {
        return [
            "StreamInlineLongCompletionRequest|1 current_file #0|6 repositories #1*|7 context_blocks #2*|13 explicit_context #3|14 model_details #4|15 linter_errors #5",
            CurrentFileInfo,
            RepositoryInfo,
            StreamInlineLongCompletionRequest_ContextBlock,
            ExplicitContext,
            ModelDetails,
            LinterErrors
        ];
    }
};
StreamInlineLongCompletionRequest_ContextBlock = class _StreamInlineLongCompletionRequest_ContextBlock extends __protoMessage3132 {
    constructor(data){
        super();
        this.contextType = StreamInlineLongCompletionRequest_ContextBlock_ContextType.UNSPECIFIED;
        this.blocks = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamInlineLongCompletionRequest_ContextBlock().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamInlineLongCompletionRequest_ContextBlock().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamInlineLongCompletionRequest_ContextBlock().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamInlineLongCompletionRequest_ContextBlock, a, b2);
    }
    static $() {
        return [
            "StreamInlineLongCompletionRequest.ContextBlock|1 context_type #0|2 blocks #1*",
            StreamInlineLongCompletionRequest_ContextBlock_ContextType,
            CodeBlock
        ];
    }
};
StreamInlineLongCompletionRequest_ContextBlock_ContextType = enumType2(proto3, __protoPackage136, "StreamInlineLongCompletionRequest.ContextBlock.ContextType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "RECENT_LOCATIONS"
    ]
], 1);

}
