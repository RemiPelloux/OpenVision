import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { Timestamp } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/timestamp_pb.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { InferenceRequestedModel, RunInferencePromptModelMetadata, init_inference_pb } from "./inference_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage153, __protoMessage3146, PrivateInferenceInvocationStatus, AdmitRunRequest, AdmitRunResponse, ReportPrivateInferenceUsageRequest, PrivateInferenceTurnOutcome, ReportPrivateInferenceUsageResponse, PrivateInferenceInvocationUsage, PrivateInferenceHeaderUsage, OpenAIChatCompletionsUsage, OpenAIPromptTokensDetails, OpenAICompletionTokensDetails, OpenAIResponsesUsage, OpenAIInputTokensDetails, OpenAIOutputTokensDetails, AnthropicMessagesUsage, AnthropicUsage, AnthropicUsageIteration, AnthropicCacheCreationUsage, BedrockConverseUsage;
export { AdmitRunRequest, AdmitRunResponse, AnthropicCacheCreationUsage, AnthropicMessagesUsage, AnthropicUsage, AnthropicUsageIteration, BedrockConverseUsage, OpenAIChatCompletionsUsage, OpenAICompletionTokensDetails, OpenAIInputTokensDetails, OpenAIOutputTokensDetails, OpenAIPromptTokensDetails, OpenAIResponsesUsage, PrivateInferenceHeaderUsage, PrivateInferenceInvocationStatus, PrivateInferenceInvocationUsage, PrivateInferenceTurnOutcome, ReportPrivateInferenceUsageRequest, ReportPrivateInferenceUsageResponse, __protoMessage3146, __protoPackage153 };
var __wakaru_init_private_inference_pb_initialized = false;
export function init_private_inference_pb() {
if (__wakaru_init_private_inference_pb_initialized) return;
__wakaru_init_private_inference_pb_initialized = true;
"use strict";
init_esm2();
init_inference_pb();
init_compact();
__protoPackage153 = "aiserver.v1.";
__protoMessage3146 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage153;
    }
};
PrivateInferenceInvocationStatus = enumType2(proto3, __protoPackage153, "PrivateInferenceInvocationStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SUCCESS"
    ],
    [
        2,
        "ABORTED"
    ],
    [
        3,
        "ERRORED"
    ]
], 1);
AdmitRunRequest = class _AdmitRunRequest extends __protoMessage3146 {
    constructor(data){
        super();
        this.modelName = "";
        this.conversationId = "";
        this.clientTurnId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AdmitRunRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AdmitRunRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AdmitRunRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AdmitRunRequest, a, b2);
    }
    static $() {
        return [
            "AdmitRunRequest|1 model_name 9|2 conversation_id 9|3 client_turn_id 9|4 prompt_model_name 9?|5 prompt_model #0?",
            InferenceRequestedModel
        ];
    }
};
AdmitRunResponse = class _AdmitRunResponse extends __protoMessage3146 {
    constructor(data){
        super();
        this.usageUuid = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AdmitRunResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AdmitRunResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AdmitRunResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AdmitRunResponse, a, b2);
    }
    static $() {
        return [
            "AdmitRunResponse|1 usage_uuid 9|2 prompt_model_metadata #0",
            RunInferencePromptModelMetadata
        ];
    }
};
ReportPrivateInferenceUsageRequest = class _ReportPrivateInferenceUsageRequest extends __protoMessage3146 {
    constructor(data){
        super();
        this.invocations = [];
        this.turns = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReportPrivateInferenceUsageRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReportPrivateInferenceUsageRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReportPrivateInferenceUsageRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReportPrivateInferenceUsageRequest, a, b2);
    }
    static $() {
        return [
            "ReportPrivateInferenceUsageRequest|1 invocations #0*|2 turns #1*",
            PrivateInferenceInvocationUsage,
            PrivateInferenceTurnOutcome
        ];
    }
};
PrivateInferenceTurnOutcome = class _PrivateInferenceTurnOutcome extends __protoMessage3146 {
    constructor(data){
        super();
        this.usageUuid = "";
        this.invocationCount = 0;
        this.modelOutputDelivered = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PrivateInferenceTurnOutcome().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PrivateInferenceTurnOutcome().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PrivateInferenceTurnOutcome().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PrivateInferenceTurnOutcome, a, b2);
    }
    static $() {
        return [
            "PrivateInferenceTurnOutcome|1 usage_uuid 9|2 finished_at #0|3 invocation_count 5|4 model_output_delivered 8",
            Timestamp
        ];
    }
};
ReportPrivateInferenceUsageResponse = class _ReportPrivateInferenceUsageResponse extends __protoMessage3146 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReportPrivateInferenceUsageResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReportPrivateInferenceUsageResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReportPrivateInferenceUsageResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReportPrivateInferenceUsageResponse, a, b2);
    }
    static $() {
        return [
            "ReportPrivateInferenceUsageResponse"
        ];
    }
};
PrivateInferenceInvocationUsage = class _PrivateInferenceInvocationUsage extends __protoMessage3146 {
    constructor(data){
        super();
        this.usageUuid = "";
        this.invocationId = "";
        this.modelId = "";
        this.status = PrivateInferenceInvocationStatus.UNSPECIFIED;
        this.usage = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PrivateInferenceInvocationUsage().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PrivateInferenceInvocationUsage().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PrivateInferenceInvocationUsage().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PrivateInferenceInvocationUsage, a, b2);
    }
    static $() {
        return [
            "PrivateInferenceInvocationUsage|1 usage_uuid 9|2 invocation_id 9|3 model_id 9|4 observed_at #0|5 status #1|6 inference_reason 9?|7 header_usage #2|10 openai_chat_completions #3 usage|11 openai_responses #4 usage|12 anthropic_messages #5 usage|13 bedrock_converse #6 usage",
            Timestamp,
            PrivateInferenceInvocationStatus,
            PrivateInferenceHeaderUsage,
            OpenAIChatCompletionsUsage,
            OpenAIResponsesUsage,
            AnthropicMessagesUsage,
            BedrockConverseUsage
        ];
    }
};
PrivateInferenceHeaderUsage = class _PrivateInferenceHeaderUsage extends __protoMessage3146 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PrivateInferenceHeaderUsage().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PrivateInferenceHeaderUsage().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PrivateInferenceHeaderUsage().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PrivateInferenceHeaderUsage, a, b2);
    }
    static $() {
        return [
            "PrivateInferenceHeaderUsage|1 prompt_tokens 5?|2 cached_prompt_tokens 5?"
        ];
    }
};
OpenAIChatCompletionsUsage = class _OpenAIChatCompletionsUsage extends __protoMessage3146 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _OpenAIChatCompletionsUsage().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _OpenAIChatCompletionsUsage().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _OpenAIChatCompletionsUsage().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_OpenAIChatCompletionsUsage, a, b2);
    }
    static $() {
        return [
            "OpenAIChatCompletionsUsage|1 prompt_tokens 5?|2 completion_tokens 5?|3 prompt_tokens_details #0|4 completion_tokens_details #1|5 input_tokens 5?|6 output_tokens 5?|7 cache_read_input_tokens 5?|8 cache_creation_input_tokens 5?",
            OpenAIPromptTokensDetails,
            OpenAICompletionTokensDetails
        ];
    }
};
OpenAIPromptTokensDetails = class _OpenAIPromptTokensDetails extends __protoMessage3146 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _OpenAIPromptTokensDetails().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _OpenAIPromptTokensDetails().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _OpenAIPromptTokensDetails().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_OpenAIPromptTokensDetails, a, b2);
    }
    static $() {
        return [
            "OpenAIPromptTokensDetails|1 cached_tokens 5?|2 cache_write_tokens 5?"
        ];
    }
};
OpenAICompletionTokensDetails = class _OpenAICompletionTokensDetails extends __protoMessage3146 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _OpenAICompletionTokensDetails().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _OpenAICompletionTokensDetails().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _OpenAICompletionTokensDetails().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_OpenAICompletionTokensDetails, a, b2);
    }
    static $() {
        return [
            "OpenAICompletionTokensDetails|1 reasoning_tokens 5?"
        ];
    }
};
OpenAIResponsesUsage = class _OpenAIResponsesUsage extends __protoMessage3146 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _OpenAIResponsesUsage().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _OpenAIResponsesUsage().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _OpenAIResponsesUsage().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_OpenAIResponsesUsage, a, b2);
    }
    static $() {
        return [
            "OpenAIResponsesUsage|1 input_tokens 5?|2 output_tokens 5?|3 input_tokens_details #0|4 output_tokens_details #1",
            OpenAIInputTokensDetails,
            OpenAIOutputTokensDetails
        ];
    }
};
OpenAIInputTokensDetails = class _OpenAIInputTokensDetails extends __protoMessage3146 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _OpenAIInputTokensDetails().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _OpenAIInputTokensDetails().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _OpenAIInputTokensDetails().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_OpenAIInputTokensDetails, a, b2);
    }
    static $() {
        return [
            "OpenAIInputTokensDetails|1 cached_tokens 5?|2 cache_write_tokens 5?"
        ];
    }
};
OpenAIOutputTokensDetails = class _OpenAIOutputTokensDetails extends __protoMessage3146 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _OpenAIOutputTokensDetails().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _OpenAIOutputTokensDetails().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _OpenAIOutputTokensDetails().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_OpenAIOutputTokensDetails, a, b2);
    }
    static $() {
        return [
            "OpenAIOutputTokensDetails|1 reasoning_tokens 5?"
        ];
    }
};
AnthropicMessagesUsage = class _AnthropicMessagesUsage extends __protoMessage3146 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AnthropicMessagesUsage().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AnthropicMessagesUsage().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AnthropicMessagesUsage().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AnthropicMessagesUsage, a, b2);
    }
    static $() {
        return [
            "AnthropicMessagesUsage|1 initial #0|2 final #0",
            AnthropicUsage
        ];
    }
};
AnthropicUsage = class _AnthropicUsage extends __protoMessage3146 {
    constructor(data){
        super();
        this.iterations = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AnthropicUsage().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AnthropicUsage().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AnthropicUsage().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AnthropicUsage, a, b2);
    }
    static $() {
        return [
            "AnthropicUsage|1 input_tokens 5?|2 output_tokens 5?|3 cache_creation_input_tokens 5?|4 cache_read_input_tokens 5?|5 iterations #0*|6 cache_creation #1",
            AnthropicUsageIteration,
            AnthropicCacheCreationUsage
        ];
    }
};
AnthropicUsageIteration = class _AnthropicUsageIteration extends __protoMessage3146 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AnthropicUsageIteration().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AnthropicUsageIteration().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AnthropicUsageIteration().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AnthropicUsageIteration, a, b2);
    }
    static $() {
        return [
            "AnthropicUsageIteration|1 type 9?|2 model 9?|3 input_tokens 5?|4 output_tokens 5?|5 cache_creation_input_tokens 5?|6 cache_read_input_tokens 5?|7 cache_creation #0",
            AnthropicCacheCreationUsage
        ];
    }
};
AnthropicCacheCreationUsage = class _AnthropicCacheCreationUsage extends __protoMessage3146 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AnthropicCacheCreationUsage().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AnthropicCacheCreationUsage().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AnthropicCacheCreationUsage().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AnthropicCacheCreationUsage, a, b2);
    }
    static $() {
        return [
            "AnthropicCacheCreationUsage|1 ephemeral_5m_input_tokens 5?|2 ephemeral_1h_input_tokens 5?"
        ];
    }
};
BedrockConverseUsage = class _BedrockConverseUsage extends __protoMessage3146 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _BedrockConverseUsage().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _BedrockConverseUsage().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _BedrockConverseUsage().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_BedrockConverseUsage, a, b2);
    }
    static $() {
        return [
            "BedrockConverseUsage|1 input_tokens 5?|2 output_tokens 5?|3 cache_read_input_tokens 5?|4 cache_write_input_tokens 5?"
        ];
    }
};

}
