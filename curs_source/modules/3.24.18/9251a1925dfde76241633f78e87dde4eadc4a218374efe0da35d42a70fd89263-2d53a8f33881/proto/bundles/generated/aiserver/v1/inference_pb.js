import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { Struct, Value } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/struct_pb.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { protoInt64 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CursorRule, init_cursor_rules_pb } from "../../agent/v1/cursor_rules_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage152, __protoMessage3145, InferenceReason, InferenceAssistantPartKind, InferenceMessageRole, InferenceStreamErrorType, RunInferenceAgentModuleSource, RunInferenceRoutingRole, RunInferenceInvocationPurpose, InferenceStreamRequest, InferenceRequestedModel, InferenceModelParameterValue, InferenceCoreMessage, InferenceReasoningPart, InferenceContentParts, InferenceContentPart, InferenceTextPart, InferenceImagePart, InferenceFilePart, InferenceToolCall, InferenceAgentTool, InferenceCustomToolFormat, InferenceNamedProviderDefinedTool, InferenceModelConfig, InferenceStreamResponse, InferenceLineageTagsInfo, InferenceLineageTag, InferenceImageDescriptionsInfo, InferenceImageDescription, InferenceTextStreamPart, InferenceThinkingStreamPart, InferenceToolCallStreamPart, InferenceUsageInfo, InferenceExtendedUsageInfo, InferenceResponseInfo, InferenceResponseMessage, InferenceToolResultContent, InferenceToolResultPart, InferenceExtraData, InferenceTokenLogprobs, InferenceTokenIds, InferenceRoutingRow, InferenceProviderMetadataInfo, InferenceInvocationIdInfo, InferenceStreamError, InferenceProviderOptions, InferenceCursorOptions, InferenceAnthropicOptions, InferenceCacheControl, AgentFollowupCategorizationRequest, AgentPostTurnLabelingRequest, AgentPostTurnExternalSend, RunInferenceClientMessage, RunInferenceClientHeartbeat, RunInferenceRunRequestLog, RunInferenceResolveSubagentModels, RunInferenceAgentEvent, RunInferenceRunRequest, RunInferenceExecutePlan, RunInferenceAgentModule, RunInferenceSubagentModelOverride, RunInferenceRoutingMessage, RunInferenceInvokeModel, RunInferenceCancelInvocation, RunInferenceFinishRun, RunInferenceServerMessage, RunInferenceHeartbeat, RunInferenceSubagentModelsResolved, RunInferenceResolvedSubagentModel, RunInferenceRunReady, RunInferenceSummarizationConfig, RunInferenceBackgroundSummarizationConfig, RunInferencePromptModelMetadata, RunInferencePostToolReminder, RunInferenceLongReasoningReminderConfig, RunInferenceSubagentModelConfig, RunInferenceSubagentModelPolicy, RunInferenceResolvedSubagentModelOverride, RunInferenceAskQuestionConfig, RunInferenceAgentModeConfig, RunInferenceSwitchModeToolConfig, RunInferenceFlagValue, RunInferenceLoopNudgeConfig, RunInferenceInvocationResponse, RunInferenceInvocationEnd, RunInferenceInvocationError, RunInferenceErrorDetail;
export { AgentFollowupCategorizationRequest, AgentPostTurnExternalSend, AgentPostTurnLabelingRequest, InferenceAgentTool, InferenceAnthropicOptions, InferenceAssistantPartKind, InferenceCacheControl, InferenceContentPart, InferenceContentParts, InferenceCoreMessage, InferenceCursorOptions, InferenceCustomToolFormat, InferenceExtendedUsageInfo, InferenceExtraData, InferenceFilePart, InferenceImageDescription, InferenceImageDescriptionsInfo, InferenceImagePart, InferenceInvocationIdInfo, InferenceLineageTag, InferenceLineageTagsInfo, InferenceMessageRole, InferenceModelConfig, InferenceModelParameterValue, InferenceNamedProviderDefinedTool, InferenceProviderMetadataInfo, InferenceProviderOptions, InferenceReason, InferenceReasoningPart, InferenceRequestedModel, InferenceResponseInfo, InferenceResponseMessage, InferenceRoutingRow, InferenceStreamError, InferenceStreamErrorType, InferenceStreamRequest, InferenceStreamResponse, InferenceTextPart, InferenceTextStreamPart, InferenceThinkingStreamPart, InferenceTokenIds, InferenceTokenLogprobs, InferenceToolCall, InferenceToolCallStreamPart, InferenceToolResultContent, InferenceToolResultPart, InferenceUsageInfo, RunInferenceAgentEvent, RunInferenceAgentModeConfig, RunInferenceAgentModule, RunInferenceAgentModuleSource, RunInferenceAskQuestionConfig, RunInferenceBackgroundSummarizationConfig, RunInferenceCancelInvocation, RunInferenceClientHeartbeat, RunInferenceClientMessage, RunInferenceErrorDetail, RunInferenceExecutePlan, RunInferenceFinishRun, RunInferenceFlagValue, RunInferenceHeartbeat, RunInferenceInvocationEnd, RunInferenceInvocationError, RunInferenceInvocationPurpose, RunInferenceInvocationResponse, RunInferenceInvokeModel, RunInferenceLongReasoningReminderConfig, RunInferenceLoopNudgeConfig, RunInferencePostToolReminder, RunInferencePromptModelMetadata, RunInferenceResolveSubagentModels, RunInferenceResolvedSubagentModel, RunInferenceResolvedSubagentModelOverride, RunInferenceRoutingMessage, RunInferenceRoutingRole, RunInferenceRunReady, RunInferenceRunRequest, RunInferenceRunRequestLog, RunInferenceServerMessage, RunInferenceSubagentModelConfig, RunInferenceSubagentModelOverride, RunInferenceSubagentModelPolicy, RunInferenceSubagentModelsResolved, RunInferenceSummarizationConfig, RunInferenceSwitchModeToolConfig, __protoMessage3145, __protoPackage152 };
var __wakaru_init_inference_pb_initialized = false;
export function init_inference_pb() {
if (__wakaru_init_inference_pb_initialized) return;
__wakaru_init_inference_pb_initialized = true;
"use strict";
init_esm2();
init_cursor_rules_pb();
init_compact();
__protoPackage152 = "aiserver.v1.";
__protoMessage3145 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage152;
    }
};
InferenceReason = enumType2(proto3, __protoPackage152, "InferenceReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "GEMINI_VIDEO_SUBAGENT"
    ],
    [
        2,
        "GROK_BOT_PROACTIVITY_SUBAGENT"
    ]
], 1);
InferenceAssistantPartKind = enumType2(proto3, __protoPackage152, "InferenceAssistantPartKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "REASONING"
    ],
    [
        2,
        "TEXT"
    ],
    [
        3,
        "TOOL_CALL"
    ]
], 1);
InferenceMessageRole = enumType2(proto3, __protoPackage152, "InferenceMessageRole", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "USER"
    ],
    [
        2,
        "ASSISTANT"
    ],
    [
        3,
        "TOOL"
    ],
    [
        4,
        "SYSTEM"
    ]
], 1);
InferenceStreamErrorType = enumType2(proto3, __protoPackage152, "InferenceStreamErrorType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "UNKNOWN"
    ],
    [
        2,
        "INPUT_TOKEN_LIMIT"
    ],
    [
        3,
        "OUTPUT_TOKEN_LIMIT"
    ],
    [
        4,
        "RATE_LIMIT"
    ],
    [
        5,
        "AUTHENTICATION"
    ],
    [
        6,
        "PERMISSION"
    ],
    [
        7,
        "OVERLOADED"
    ],
    [
        8,
        "CONTENT_FILTER"
    ]
], 1);
RunInferenceAgentModuleSource = enumType2(proto3, __protoPackage152, "RunInferenceAgentModuleSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "STATIC"
    ],
    [
        2,
        "FLOOR"
    ],
    [
        3,
        "INSTALLED"
    ]
], 1);
RunInferenceRoutingRole = enumType2(proto3, __protoPackage152, "RunInferenceRoutingRole", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "USER"
    ],
    [
        2,
        "ASSISTANT"
    ]
], 1);
RunInferenceInvocationPurpose = enumType2(proto3, __protoPackage152, "RunInferenceInvocationPurpose", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CONTEXT_SUMMARIZATION"
    ]
], 1);
InferenceStreamRequest = class _InferenceStreamRequest extends __protoMessage3145 {
    constructor(data){
        super();
        this.messages = [];
        this.tools = [];
        this.providerDefinedTools = [];
        this.acceptedUnadvertisedToolNames = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceStreamRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceStreamRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceStreamRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceStreamRequest, a, b2);
    }
    static $() {
        return [
            "InferenceStreamRequest|1 messages #0*|2 tools #1*|3 provider_defined_tools #2*|4 model_config #3?|5 model_id 9?|6 invocation_id 9?|7 requested_model #4?|8 conversation_id 9?|9 accepted_unadvertised_tool_names 9*|10 automation_id 9?|11 inference_reason #5?|12 conversation_group_id 9?|13 parent_request_id 9?|14 root_parent_request_id 9?|15 parent_agent_tool_call_id 9?|16 subagent_type 9?|17 compaction_epoch 5?|18 turn_unit_id 9?|19 turn_unit_type 9?|20 originating_flow 9?|21 routing_reason 9?|22 summarized_message_count 5?|23 is_simulated_msg 8?|24 simulated_msg_reason 5?",
            InferenceCoreMessage,
            InferenceAgentTool,
            InferenceNamedProviderDefinedTool,
            InferenceModelConfig,
            InferenceRequestedModel,
            InferenceReason
        ];
    }
};
InferenceRequestedModel = class _InferenceRequestedModel extends __protoMessage3145 {
    constructor(data){
        super();
        this.modelId = "";
        this.maxMode = false;
        this.parameters = [];
        this.builtInModel = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceRequestedModel().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceRequestedModel().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceRequestedModel().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceRequestedModel, a, b2);
    }
    static $() {
        return [
            "InferenceRequestedModel|1 model_id 9|2 max_mode 8|3 parameters #0*|4 built_in_model 8",
            InferenceModelParameterValue
        ];
    }
};
InferenceModelParameterValue = class _InferenceModelParameterValue extends __protoMessage3145 {
    constructor(data){
        super();
        this.id = "";
        this.value = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceModelParameterValue().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceModelParameterValue().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceModelParameterValue().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceModelParameterValue, a, b2);
    }
    static $() {
        return [
            "InferenceModelParameterValue|1 id 9|2 value 9"
        ];
    }
};
InferenceCoreMessage = class _InferenceCoreMessage extends __protoMessage3145 {
    constructor(data){
        super();
        this.role = InferenceMessageRole.UNSPECIFIED;
        this.content = {
            case: void 0
        };
        this.toolCalls = [];
        this.reasoningParts = [];
        this.assistantPartOrder = [];
        this.assistantTextParts = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceCoreMessage().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceCoreMessage().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceCoreMessage().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceCoreMessage, a, b2);
    }
    static $() {
        return [
            "InferenceCoreMessage|1 role #0|2 text 9 content|3 parts #1 content|6 tool_content #2 content|4 tool_calls #3*|7 reasoning_parts #4*|8 model_provider_message_id 9?|9 openai_phase 9?|10 openai_phase_null 8?|11 cursor_inference_reason 9?|12 cursor_feature_type 9?|13 cursor_is_summary 8?|14 cursor_clear_at 9?|15 cursor_fallback_insert_before 9?|16 assistant_part_order #5*|17 assistant_text_parts 9*|18 anthropic_native_content 9?|19 lineage_tag 9?|20 cursor_request_id 9?",
            InferenceMessageRole,
            InferenceContentParts,
            InferenceToolResultContent,
            InferenceToolCall,
            InferenceReasoningPart,
            InferenceAssistantPartKind
        ];
    }
};
InferenceReasoningPart = class _InferenceReasoningPart extends __protoMessage3145 {
    constructor(data){
        super();
        this.isRedacted = false;
        this.text = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceReasoningPart().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceReasoningPart().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceReasoningPart().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceReasoningPart, a, b2);
    }
    static $() {
        return [
            "InferenceReasoningPart|1 is_redacted 8|2 text 9|3 signature 9?|4 redacted_data 9?|5 model_name 9?|6 lineage_tag 9?"
        ];
    }
};
InferenceContentParts = class _InferenceContentParts extends __protoMessage3145 {
    constructor(data){
        super();
        this.parts = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceContentParts().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceContentParts().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceContentParts().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceContentParts, a, b2);
    }
    static $() {
        return [
            "InferenceContentParts|1 parts #0*",
            InferenceContentPart
        ];
    }
};
InferenceContentPart = class _InferenceContentPart extends __protoMessage3145 {
    constructor(data){
        super();
        this.part = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceContentPart().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceContentPart().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceContentPart().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceContentPart, a, b2);
    }
    static $() {
        return [
            "InferenceContentPart|1 text #0 part|2 image #1 part|3 file #2 part",
            InferenceTextPart,
            InferenceImagePart,
            InferenceFilePart
        ];
    }
};
InferenceTextPart = class _InferenceTextPart extends __protoMessage3145 {
    constructor(data){
        super();
        this.text = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceTextPart().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceTextPart().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceTextPart().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceTextPart, a, b2);
    }
    static $() {
        return [
            "InferenceTextPart|1 text 9|2 provider_options #0?",
            InferenceProviderOptions
        ];
    }
};
InferenceImagePart = class _InferenceImagePart extends __protoMessage3145 {
    constructor(data){
        super();
        this.data = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceImagePart().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceImagePart().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceImagePart().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceImagePart, a, b2);
    }
    static $() {
        return [
            "InferenceImagePart|1 data 9|2 mime_type 9?|3 provider_options #0?",
            InferenceProviderOptions
        ];
    }
};
InferenceFilePart = class _InferenceFilePart extends __protoMessage3145 {
    constructor(data){
        super();
        this.data = "";
        this.mediaType = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceFilePart().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceFilePart().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceFilePart().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceFilePart, a, b2);
    }
    static $() {
        return [
            "InferenceFilePart|1 data 9|2 media_type 9|3 filename 9?|4 provider_options #0?",
            InferenceProviderOptions
        ];
    }
};
InferenceToolCall = class _InferenceToolCall extends __protoMessage3145 {
    constructor(data){
        super();
        this.toolCallId = "";
        this.toolName = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceToolCall, a, b2);
    }
    static $() {
        return [
            "InferenceToolCall|1 tool_call_id 9|2 tool_name 9|3 args #0|4 raw_tool_call_args 9?",
            Struct
        ];
    }
};
InferenceAgentTool = class _InferenceAgentTool extends __protoMessage3145 {
    constructor(data){
        super();
        this.name = "";
        this.description = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceAgentTool().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceAgentTool().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceAgentTool().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceAgentTool, a, b2);
    }
    static $() {
        return [
            "InferenceAgentTool|1 name 9|2 description 9|3 parameters #0|4 custom_tool_format #1?",
            Struct,
            InferenceCustomToolFormat
        ];
    }
};
InferenceCustomToolFormat = class _InferenceCustomToolFormat extends __protoMessage3145 {
    constructor(data){
        super();
        this.type = "";
        this.definition = "";
        this.syntax = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceCustomToolFormat().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceCustomToolFormat().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceCustomToolFormat().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceCustomToolFormat, a, b2);
    }
    static $() {
        return [
            "InferenceCustomToolFormat|1 type 9|2 definition 9|3 syntax 9"
        ];
    }
};
InferenceNamedProviderDefinedTool = class _InferenceNamedProviderDefinedTool extends __protoMessage3145 {
    constructor(data){
        super();
        this.name = "";
        this.id = "";
        this.type = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceNamedProviderDefinedTool().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceNamedProviderDefinedTool().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceNamedProviderDefinedTool().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceNamedProviderDefinedTool, a, b2);
    }
    static $() {
        return [
            "InferenceNamedProviderDefinedTool|1 name 9|2 id 9|3 type 9|4 options #0",
            Struct
        ];
    }
};
InferenceModelConfig = class _InferenceModelConfig extends __protoMessage3145 {
    constructor(data){
        super();
        this.stopSequences = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceModelConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceModelConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceModelConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceModelConfig, a, b2);
    }
    static $() {
        return [
            "InferenceModelConfig|1 max_tokens 5?|2 temperature 2?|3 top_p 2?|4 stop_sequences 9*"
        ];
    }
};
InferenceStreamResponse = class _InferenceStreamResponse extends __protoMessage3145 {
    constructor(data){
        super();
        this.response = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceStreamResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceStreamResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceStreamResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceStreamResponse, a, b2);
    }
    static $() {
        return [
            "InferenceStreamResponse|1 text_part #0 response|2 tool_call_part #1 response|3 usage #2 response|4 response_info #3 response|5 extended_usage #4 response|6 provider_metadata #5 response|7 invocation_id #6 response|8 error #7 response|9 thinking_part #8 response|10 image_descriptions #9 response|11 lineage_tags #10 response",
            InferenceTextStreamPart,
            InferenceToolCallStreamPart,
            InferenceUsageInfo,
            InferenceResponseInfo,
            InferenceExtendedUsageInfo,
            InferenceProviderMetadataInfo,
            InferenceInvocationIdInfo,
            InferenceStreamError,
            InferenceThinkingStreamPart,
            InferenceImageDescriptionsInfo,
            InferenceLineageTagsInfo
        ];
    }
};
InferenceLineageTagsInfo = class _InferenceLineageTagsInfo extends __protoMessage3145 {
    constructor(data){
        super();
        this.tags = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceLineageTagsInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceLineageTagsInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceLineageTagsInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceLineageTagsInfo, a, b2);
    }
    static $() {
        return [
            "InferenceLineageTagsInfo|1 tags #0*",
            InferenceLineageTag
        ];
    }
};
InferenceLineageTag = class _InferenceLineageTag extends __protoMessage3145 {
    constructor(data){
        super();
        this.messageIndex = 0;
        this.tag = "";
        this.reasoningTags = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceLineageTag().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceLineageTag().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceLineageTag().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceLineageTag, a, b2);
    }
    static $() {
        return [
            "InferenceLineageTag|1 message_index 5|2 tag 9|3 reasoning_tags 9*"
        ];
    }
};
InferenceImageDescriptionsInfo = class _InferenceImageDescriptionsInfo extends __protoMessage3145 {
    constructor(data){
        super();
        this.descriptions = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceImageDescriptionsInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceImageDescriptionsInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceImageDescriptionsInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceImageDescriptionsInfo, a, b2);
    }
    static $() {
        return [
            "InferenceImageDescriptionsInfo|1 descriptions #0*",
            InferenceImageDescription
        ];
    }
};
InferenceImageDescription = class _InferenceImageDescription extends __protoMessage3145 {
    constructor(data){
        super();
        this.messageIndex = 0;
        this.partIndex = 0;
        this.description = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceImageDescription().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceImageDescription().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceImageDescription().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceImageDescription, a, b2);
    }
    static $() {
        return [
            "InferenceImageDescription|1 message_index 5|2 part_index 5|3 exp_content_index 5?|4 description 9"
        ];
    }
};
InferenceTextStreamPart = class _InferenceTextStreamPart extends __protoMessage3145 {
    constructor(data){
        super();
        this.text = "";
        this.isFinal = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceTextStreamPart().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceTextStreamPart().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceTextStreamPart().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceTextStreamPart, a, b2);
    }
    static $() {
        return [
            "InferenceTextStreamPart|1 text 9|2 is_final 8"
        ];
    }
};
InferenceThinkingStreamPart = class _InferenceThinkingStreamPart extends __protoMessage3145 {
    constructor(data){
        super();
        this.text = "";
        this.isFinal = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceThinkingStreamPart().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceThinkingStreamPart().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceThinkingStreamPart().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceThinkingStreamPart, a, b2);
    }
    static $() {
        return [
            "InferenceThinkingStreamPart|1 text 9|2 signature 9?|3 is_final 8|4 is_already_summarized 8?|5 model_name 9?|6 redacted_data 9?"
        ];
    }
};
InferenceToolCallStreamPart = class _InferenceToolCallStreamPart extends __protoMessage3145 {
    constructor(data){
        super();
        this.toolCallId = "";
        this.toolName = "";
        this.args = "";
        this.isComplete = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceToolCallStreamPart().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceToolCallStreamPart().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceToolCallStreamPart().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceToolCallStreamPart, a, b2);
    }
    static $() {
        return [
            "InferenceToolCallStreamPart|1 tool_call_id 9|2 tool_name 9|3 args 9|4 is_complete 8|5 tool_index 5?"
        ];
    }
};
InferenceUsageInfo = class _InferenceUsageInfo extends __protoMessage3145 {
    constructor(data){
        super();
        this.promptTokens = 0;
        this.completionTokens = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceUsageInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceUsageInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceUsageInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceUsageInfo, a, b2);
    }
    static $() {
        return [
            "InferenceUsageInfo|1 prompt_tokens 5|2 completion_tokens 5|3 total_tokens 5?"
        ];
    }
};
InferenceExtendedUsageInfo = class _InferenceExtendedUsageInfo extends __protoMessage3145 {
    constructor(data){
        super();
        this.inputTokens = 0;
        this.outputTokens = 0;
        this.cacheReadTokens = 0;
        this.cacheWriteTokens = 0;
        this.maxTokens = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceExtendedUsageInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceExtendedUsageInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceExtendedUsageInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceExtendedUsageInfo, a, b2);
    }
    static $() {
        return [
            "InferenceExtendedUsageInfo|1 input_tokens 5|2 output_tokens 5|3 cache_read_tokens 5|4 cache_write_tokens 5|5 max_tokens 5|6 reasoning_tokens 5?"
        ];
    }
};
InferenceResponseInfo = class _InferenceResponseInfo extends __protoMessage3145 {
    constructor(data){
        super();
        this.id = "";
        this.model = "";
        this.createdAt = protoInt64.zero;
        this.messages = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceResponseInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceResponseInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceResponseInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceResponseInfo, a, b2);
    }
    static $() {
        return [
            "InferenceResponseInfo|1 id 9|2 model 9|3 created_at 3|4 messages #0*|5 error_message 9?|6 inference_extra_data #1?|7 supports_self_summary 8?|8 early_compaction_context_token_threshold 5?",
            InferenceResponseMessage,
            InferenceExtraData
        ];
    }
};
InferenceResponseMessage = class _InferenceResponseMessage extends __protoMessage3145 {
    constructor(data){
        super();
        this.id = "";
        this.role = InferenceMessageRole.UNSPECIFIED;
        this.toolCalls = [];
        this.reasoningParts = [];
        this.assistantPartOrder = [];
        this.assistantTextParts = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceResponseMessage().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceResponseMessage().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceResponseMessage().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceResponseMessage, a, b2);
    }
    static $() {
        return [
            "InferenceResponseMessage|1 id 9|2 role #0|3 content 9?|4 tool_calls #1*|5 tool_result #2?|6 reasoning_parts #3*|7 model_provider_message_id 9?|8 openai_phase 9?|9 openai_phase_null 8?|10 assistant_part_order #4*|11 assistant_text_parts 9*|12 anthropic_native_content 9?|13 lineage_tag 9?",
            InferenceMessageRole,
            InferenceToolCall,
            InferenceToolResultContent,
            InferenceReasoningPart,
            InferenceAssistantPartKind
        ];
    }
};
InferenceToolResultContent = class _InferenceToolResultContent extends __protoMessage3145 {
    constructor(data){
        super();
        this.parts = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceToolResultContent().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceToolResultContent().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceToolResultContent().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceToolResultContent, a, b2);
    }
    static $() {
        return [
            "InferenceToolResultContent|1 parts #0*",
            InferenceToolResultPart
        ];
    }
};
InferenceToolResultPart = class _InferenceToolResultPart extends __protoMessage3145 {
    constructor(data){
        super();
        this.toolCallId = "";
        this.toolName = "";
        this.isError = false;
        this.experimentalContent = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceToolResultPart().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceToolResultPart().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceToolResultPart().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceToolResultPart, a, b2);
    }
    static $() {
        return [
            "InferenceToolResultPart|1 tool_call_id 9|2 tool_name 9|3 result #0|4 is_error 8|5 experimental_content #1*|6 provider_options #2?|7 cursor_tool_call_is_error 8?",
            Value,
            InferenceContentPart,
            InferenceProviderOptions
        ];
    }
};
InferenceExtraData = class _InferenceExtraData extends __protoMessage3145 {
    constructor(data){
        super();
        this.tokenLogprobs = [];
        this.tokenIds = [];
        this.promptTokenIds = [];
        this.extraTokens = [];
        this.extraLogprobs = [];
        this.routingMatrix = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceExtraData().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceExtraData().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceExtraData().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceExtraData, a, b2);
    }
    static $() {
        return [
            "InferenceExtraData|1 token_logprobs #0*|2 token_ids #1*|3 prompt_token_ids #1*|4 extra_tokens #1*|5 extra_logprobs #0*|6 routing_matrix #2*",
            InferenceTokenLogprobs,
            InferenceTokenIds,
            InferenceRoutingRow
        ];
    }
};
InferenceTokenLogprobs = class _InferenceTokenLogprobs extends __protoMessage3145 {
    constructor(data){
        super();
        this.values = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceTokenLogprobs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceTokenLogprobs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceTokenLogprobs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceTokenLogprobs, a, b2);
    }
    static $() {
        return [
            "InferenceTokenLogprobs|1 values 1*"
        ];
    }
};
InferenceTokenIds = class _InferenceTokenIds extends __protoMessage3145 {
    constructor(data){
        super();
        this.values = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceTokenIds().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceTokenIds().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceTokenIds().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceTokenIds, a, b2);
    }
    static $() {
        return [
            "InferenceTokenIds|1 values 3*"
        ];
    }
};
InferenceRoutingRow = class _InferenceRoutingRow extends __protoMessage3145 {
    constructor(data){
        super();
        this.values = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceRoutingRow().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceRoutingRow().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceRoutingRow().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceRoutingRow, a, b2);
    }
    static $() {
        return [
            "InferenceRoutingRow|1 values 9*"
        ];
    }
};
InferenceProviderMetadataInfo = class _InferenceProviderMetadataInfo extends __protoMessage3145 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceProviderMetadataInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceProviderMetadataInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceProviderMetadataInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceProviderMetadataInfo, a, b2);
    }
    static $() {
        return [
            "InferenceProviderMetadataInfo|1 metadata #0",
            Struct
        ];
    }
};
InferenceInvocationIdInfo = class _InferenceInvocationIdInfo extends __protoMessage3145 {
    constructor(data){
        super();
        this.invocationId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceInvocationIdInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceInvocationIdInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceInvocationIdInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceInvocationIdInfo, a, b2);
    }
    static $() {
        return [
            "InferenceInvocationIdInfo|1 invocation_id 9"
        ];
    }
};
InferenceStreamError = class _InferenceStreamError extends __protoMessage3145 {
    constructor(data){
        super();
        this.message = "";
        this.code = "";
        this.isInputTokenLimitError = false;
        this.isOutputTokenLimitError = false;
        this.errorType = InferenceStreamErrorType.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceStreamError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceStreamError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceStreamError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceStreamError, a, b2);
    }
    static $() {
        return [
            "InferenceStreamError|1 message 9|2 code 9|3 is_input_token_limit_error 8|4 is_output_token_limit_error 8|5 error_type #0",
            InferenceStreamErrorType
        ];
    }
};
InferenceProviderOptions = class _InferenceProviderOptions extends __protoMessage3145 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceProviderOptions().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceProviderOptions().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceProviderOptions().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceProviderOptions, a, b2);
    }
    static $() {
        return [
            "InferenceProviderOptions|1 anthropic #0?|2 cursor #1?",
            InferenceAnthropicOptions,
            InferenceCursorOptions
        ];
    }
};
InferenceCursorOptions = class _InferenceCursorOptions extends __protoMessage3145 {
    constructor(data){
        super();
        this.imageDescriptions = {};
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceCursorOptions().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceCursorOptions().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceCursorOptions().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceCursorOptions, a, b2);
    }
    static $() {
        return [
            "InferenceCursorOptions|1 image_description 9?|2 image_descriptions 5,9|3 image_content_sha256 9?"
        ];
    }
};
InferenceAnthropicOptions = class _InferenceAnthropicOptions extends __protoMessage3145 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceAnthropicOptions().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceAnthropicOptions().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceAnthropicOptions().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceAnthropicOptions, a, b2);
    }
    static $() {
        return [
            "InferenceAnthropicOptions|1 cache_control #0?",
            InferenceCacheControl
        ];
    }
};
InferenceCacheControl = class _InferenceCacheControl extends __protoMessage3145 {
    constructor(data){
        super();
        this.type = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceCacheControl().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceCacheControl().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceCacheControl().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceCacheControl, a, b2);
    }
    static $() {
        return [
            "InferenceCacheControl|1 type 9"
        ];
    }
};
AgentFollowupCategorizationRequest = class _AgentFollowupCategorizationRequest extends __protoMessage3145 {
    constructor(data){
        super();
        this.requestId = "";
        this.replyingToRequestId = "";
        this.messages = [];
        this.messageRequestIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentFollowupCategorizationRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentFollowupCategorizationRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentFollowupCategorizationRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentFollowupCategorizationRequest, a, b2);
    }
    static $() {
        return [
            "AgentFollowupCategorizationRequest|1 request_id 9|2 replying_to_request_id 9|3 messages #0*|4 conversation_id 9?|5 agent_mode 9?|6 model_name 9?|7 served_model_name 9?|8 turn_agent_mode 9?|9 message_request_ids 9*",
            InferenceCoreMessage
        ];
    }
};
AgentPostTurnLabelingRequest = class _AgentPostTurnLabelingRequest extends __protoMessage3145 {
    constructor(data){
        super();
        this.requestId = "";
        this.messages = [];
        this.externalSends = [];
        this.parentMessages = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentPostTurnLabelingRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentPostTurnLabelingRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentPostTurnLabelingRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentPostTurnLabelingRequest, a, b2);
    }
    static $() {
        return [
            "AgentPostTurnLabelingRequest|1 request_id 9|2 messages #0*|3 conversation_id 9?|4 agent_mode 9?|5 model_name 9?|6 external_sends #1*|7 external_send_only 8?|8 request_source 9?|9 is_subagent 8?|10 parent_messages #0*|11 external_send_reported 8?|12 turn_agent_mode 9?",
            InferenceCoreMessage,
            AgentPostTurnExternalSend
        ];
    }
};
AgentPostTurnExternalSend = class _AgentPostTurnExternalSend extends __protoMessage3145 {
    constructor(data){
        super();
        this.toolCallId = "";
        this.toolName = "";
        this.connector = "";
        this.humanApprovedCard = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentPostTurnExternalSend().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentPostTurnExternalSend().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentPostTurnExternalSend().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentPostTurnExternalSend, a, b2);
    }
    static $() {
        return [
            "AgentPostTurnExternalSend|1 tool_call_id 9|2 tool_name 9|3 connector 9|4 human_approved_card 8"
        ];
    }
};
RunInferenceClientMessage = class _RunInferenceClientMessage extends __protoMessage3145 {
    constructor(data){
        super();
        this.message = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceClientMessage().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceClientMessage().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceClientMessage().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceClientMessage, a, b2);
    }
    static $() {
        return [
            "RunInferenceClientMessage|1 run_request #0 message|2 invoke_model #1 message|3 cancel_invocation #2 message|4 finish_run #3 message|5 client_heartbeat #4 message|6 agent_event #5 message|7 run_request_log #6 message|9 resolve_subagent_models #7 message",
            RunInferenceRunRequest,
            RunInferenceInvokeModel,
            RunInferenceCancelInvocation,
            RunInferenceFinishRun,
            RunInferenceClientHeartbeat,
            RunInferenceAgentEvent,
            RunInferenceRunRequestLog,
            RunInferenceResolveSubagentModels
        ];
    }
};
RunInferenceClientHeartbeat = class _RunInferenceClientHeartbeat extends __protoMessage3145 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceClientHeartbeat().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceClientHeartbeat().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceClientHeartbeat().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceClientHeartbeat, a, b2);
    }
    static $() {
        return [
            "RunInferenceClientHeartbeat"
        ];
    }
};
RunInferenceRunRequestLog = class _RunInferenceRunRequestLog extends __protoMessage3145 {
    constructor(data){
        super();
        this.agentRunRequest = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceRunRequestLog().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceRunRequestLog().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceRunRequestLog().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceRunRequestLog, a, b2);
    }
    static $() {
        return [
            "RunInferenceRunRequestLog|1 agent_run_request 12"
        ];
    }
};
RunInferenceResolveSubagentModels = class _RunInferenceResolveSubagentModels extends __protoMessage3145 {
    constructor(data){
        super();
        this.resolutionId = "";
        this.requestedModels = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceResolveSubagentModels().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceResolveSubagentModels().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceResolveSubagentModels().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceResolveSubagentModels, a, b2);
    }
    static $() {
        return [
            "RunInferenceResolveSubagentModels|1 resolution_id 9|2 requested_models 9*"
        ];
    }
};
RunInferenceAgentEvent = class _RunInferenceAgentEvent extends __protoMessage3145 {
    constructor(data){
        super();
        this.methodName = "";
        this.optionsJson = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceAgentEvent().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceAgentEvent().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceAgentEvent().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceAgentEvent, a, b2);
    }
    static $() {
        return [
            "RunInferenceAgentEvent|1 method_name 9|2 options_json 9|3 client_reported_at_ms 3?"
        ];
    }
};
RunInferenceRunRequest = class _RunInferenceRunRequest extends __protoMessage3145 {
    constructor(data){
        super();
        this.conversationId = "";
        this.routingConversation = [];
        this.selectedSubagentModels = [];
        this.subagentModelOverrides = [];
        this.supportsLongReasoningReminder = false;
        this.supportsAgentLoopError = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceRunRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceRunRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceRunRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceRunRequest, a, b2);
    }
    static $() {
        return [
            "RunInferenceRunRequest|1 conversation_id 9|2 conversation_group_id 9?|3 requested_model #0|4 routing_conversation #1*|5 agent_mode 9?|6 subagent_type_name 9?|7 selected_subagent_models #0*|8 subagent_model_overrides #2*|9 is_summarize_action 8?|10 supports_long_reasoning_reminder 8|11 agent_module #3?|12 previous_request_id 9?|15 execute_plan #4?|16 turn_agent_mode 9?|17 supports_agent_loop_error 8",
            InferenceRequestedModel,
            RunInferenceRoutingMessage,
            RunInferenceSubagentModelOverride,
            RunInferenceAgentModule,
            RunInferenceExecutePlan
        ];
    }
};
RunInferenceExecutePlan = class _RunInferenceExecutePlan extends __protoMessage3145 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceExecutePlan().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceExecutePlan().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceExecutePlan().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceExecutePlan, a, b2);
    }
    static $() {
        return [
            "RunInferenceExecutePlan|1 plan_file_uri 9?|2 plan_file_content 9?"
        ];
    }
};
RunInferenceAgentModule = class _RunInferenceAgentModule extends __protoMessage3145 {
    constructor(data){
        super();
        this.generation = "";
        this.source = RunInferenceAgentModuleSource.UNSPECIFIED;
        this.channel = "";
        this.interfaceRevision = 0;
        this.promptVersions = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceAgentModule().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceAgentModule().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceAgentModule().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceAgentModule, a, b2);
    }
    static $() {
        return [
            "RunInferenceAgentModule|1 generation 9|2 source #0|3 channel 9|4 commit 9?|5 interface_revision 13|6 prompt_versions 9*",
            RunInferenceAgentModuleSource
        ];
    }
};
RunInferenceSubagentModelOverride = class _RunInferenceSubagentModelOverride extends __protoMessage3145 {
    constructor(data){
        super();
        this.subagentType = "";
        this.selection = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceSubagentModelOverride().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceSubagentModelOverride().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceSubagentModelOverride().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceSubagentModelOverride, a, b2);
    }
    static $() {
        return [
            "RunInferenceSubagentModelOverride|1 subagent_type 9|2 model #0 selection|3 inherit 8 selection|4 disabled 8 selection",
            InferenceRequestedModel
        ];
    }
};
RunInferenceRoutingMessage = class _RunInferenceRoutingMessage extends __protoMessage3145 {
    constructor(data){
        super();
        this.role = RunInferenceRoutingRole.UNSPECIFIED;
        this.text = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceRoutingMessage().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceRoutingMessage().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceRoutingMessage().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceRoutingMessage, a, b2);
    }
    static $() {
        return [
            "RunInferenceRoutingMessage|1 role #0|2 text 9",
            RunInferenceRoutingRole
        ];
    }
};
RunInferenceInvokeModel = class _RunInferenceInvokeModel extends __protoMessage3145 {
    constructor(data){
        super();
        this.invocationId = "";
        this.purpose = RunInferenceInvocationPurpose.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceInvokeModel().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceInvokeModel().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceInvokeModel().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceInvokeModel, a, b2);
    }
    static $() {
        return [
            "RunInferenceInvokeModel|1 invocation_id 9|2 request #0|3 purpose #1",
            InferenceStreamRequest,
            RunInferenceInvocationPurpose
        ];
    }
};
RunInferenceCancelInvocation = class _RunInferenceCancelInvocation extends __protoMessage3145 {
    constructor(data){
        super();
        this.invocationId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceCancelInvocation().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceCancelInvocation().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceCancelInvocation().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceCancelInvocation, a, b2);
    }
    static $() {
        return [
            "RunInferenceCancelInvocation|1 invocation_id 9"
        ];
    }
};
RunInferenceFinishRun = class _RunInferenceFinishRun extends __protoMessage3145 {
    constructor(data){
        super();
        this.aborted = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceFinishRun().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceFinishRun().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceFinishRun().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceFinishRun, a, b2);
    }
    static $() {
        return [
            "RunInferenceFinishRun|1 aborted 8|2 turn_completed 8?"
        ];
    }
};
RunInferenceServerMessage = class _RunInferenceServerMessage extends __protoMessage3145 {
    constructor(data){
        super();
        this.message = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceServerMessage().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceServerMessage().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceServerMessage().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceServerMessage, a, b2);
    }
    static $() {
        return [
            "RunInferenceServerMessage|1 heartbeat #0 message|2 run_ready #1 message|3 invocation_response #2 message|4 invocation_end #3 message|5 subagent_models_resolved #4 message",
            RunInferenceHeartbeat,
            RunInferenceRunReady,
            RunInferenceInvocationResponse,
            RunInferenceInvocationEnd,
            RunInferenceSubagentModelsResolved
        ];
    }
};
RunInferenceHeartbeat = class _RunInferenceHeartbeat extends __protoMessage3145 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceHeartbeat().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceHeartbeat().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceHeartbeat().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceHeartbeat, a, b2);
    }
    static $() {
        return [
            "RunInferenceHeartbeat"
        ];
    }
};
RunInferenceSubagentModelsResolved = class _RunInferenceSubagentModelsResolved extends __protoMessage3145 {
    constructor(data){
        super();
        this.resolutionId = "";
        this.models = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceSubagentModelsResolved().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceSubagentModelsResolved().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceSubagentModelsResolved().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceSubagentModelsResolved, a, b2);
    }
    static $() {
        return [
            "RunInferenceSubagentModelsResolved|1 resolution_id 9|2 models #0*",
            RunInferenceResolvedSubagentModel
        ];
    }
};
RunInferenceResolvedSubagentModel = class _RunInferenceResolvedSubagentModel extends __protoMessage3145 {
    constructor(data){
        super();
        this.requested = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceResolvedSubagentModel().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceResolvedSubagentModel().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceResolvedSubagentModel().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceResolvedSubagentModel, a, b2);
    }
    static $() {
        return [
            "RunInferenceResolvedSubagentModel|1 requested 9|2 resolved_slug 9?"
        ];
    }
};
RunInferenceRunReady = class _RunInferenceRunReady extends __protoMessage3145 {
    constructor(data){
        super();
        this.supportsSelfSummary = false;
        this.nonFileRules = [];
        this.acceptsClientHeartbeat = false;
        this.acceptsAgentEvents = false;
        this.agentRunRequestLogRequested = false;
        this.kvBlobTelemetryEnabled = false;
        this.acceptsAbortedFinish = false;
        this.metricLabels = {};
        this.acceptsSubagentModelResolution = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceRunReady().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceRunReady().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceRunReady().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceRunReady, a, b2);
    }
    static $() {
        return [
            "RunInferenceRunReady|1 resolved_model #0|2 supports_self_summary 8|3 routed_model_display_name 9?|4 prompt_model_metadata #1|5 summarization #2|6 non_file_rules #3*|7 accepts_client_heartbeat 8|8 accepts_agent_events 8|10 agent_run_request_log_requested 8|9 kv_blob_telemetry_enabled 8|13 accepts_aborted_finish 8|12 metric_labels 9,9|14 accepts_subagent_model_resolution 8",
            InferenceRequestedModel,
            RunInferencePromptModelMetadata,
            RunInferenceSummarizationConfig,
            CursorRule
        ];
    }
};
RunInferenceSummarizationConfig = class _RunInferenceSummarizationConfig extends __protoMessage3145 {
    constructor(data){
        super();
        this.isFallbackToMainModel = false;
        this.maxPromptChars = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceSummarizationConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceSummarizationConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceSummarizationConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceSummarizationConfig, a, b2);
    }
    static $() {
        return [
            "RunInferenceSummarizationConfig|1 model #0|2 is_fallback_to_main_model 8|3 max_prompt_chars 5|4 background #1",
            InferenceRequestedModel,
            RunInferenceBackgroundSummarizationConfig
        ];
    }
};
RunInferenceBackgroundSummarizationConfig = class _RunInferenceBackgroundSummarizationConfig extends __protoMessage3145 {
    constructor(data){
        super();
        this.requireTriggerThresholdForMidLoopPersist = false;
        this.discardOnError = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceBackgroundSummarizationConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceBackgroundSummarizationConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceBackgroundSummarizationConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceBackgroundSummarizationConfig, a, b2);
    }
    static $() {
        return [
            "RunInferenceBackgroundSummarizationConfig|1 unused_tokens_threshold_to_start 5?|2 unused_percent_tokens_threshold_to_start 1?|3 unused_tokens_threshold_to_persist 5?|4 unused_percent_tokens_threshold_to_persist 1?|5 require_trigger_threshold_for_mid_loop_persist 8|6 discard_on_error 8"
        ];
    }
};
RunInferencePromptModelMetadata = class _RunInferencePromptModelMetadata extends __protoMessage3145 {
    constructor(data){
        super();
        this.vendor = "";
        this.promptVersion = "";
        this.isSonnet45 = false;
        this.isGemini3 = false;
        this.isGpt51 = false;
        this.isGpt52 = false;
        this.isGpt5 = false;
        this.isGpt55 = false;
        this.isGpt56 = false;
        this.isSonnet4 = false;
        this.isCodexFamily = false;
        this.isGpt54 = false;
        this.isGpt52Codex = false;
        this.isGpt53Codex = false;
        this.isGpt53CodexSpark = false;
        this.isClaude4x = false;
        this.isOpus45 = false;
        this.isOpus46 = false;
        this.isOpus48 = false;
        this.isOpus5 = false;
        this.isOpus55 = false;
        this.isFable5 = false;
        this.isFable51 = false;
        this.isFruitcake = false;
        this.isGpt5Family = false;
        this.isComposer1 = false;
        this.isComposer15 = false;
        this.isComposer2 = false;
        this.isComposerMatterhorn = false;
        this.isGrok45ProductPrompt = false;
        this.isRawTrainingSlug = false;
        this.isGrok46ProductPrompt = false;
        this.useDsv3Harness = false;
        this.persona = "";
        this.featureFlags = {};
        this.supportsAssistantMessagePrefill = false;
        this.enableLineNumbers = false;
        this.useSparseReadLineNumbers = false;
        this.selfIdentityName = "";
        this.agentModeConfigs = [];
        this.postToolReminders = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferencePromptModelMetadata().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferencePromptModelMetadata().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferencePromptModelMetadata().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferencePromptModelMetadata, a, b2);
    }
    static $() {
        return [
            "RunInferencePromptModelMetadata|1 vendor 9|2 prompt_version 9|3 is_sonnet45 8|4 is_gemini3 8|5 is_gpt51 8|6 is_gpt52 8|7 is_gpt5 8|8 is_gpt55 8|9 is_gpt56 8|10 is_sonnet4 8|11 is_codex_family 8|12 is_gpt54 8|13 is_gpt52_codex 8|14 is_gpt53_codex 8|15 is_gpt53_codex_spark 8|16 is_claude_4x 8|17 is_opus45 8|18 is_opus46 8|19 is_opus48 8|20 is_opus5 8|50 is_opus55 8|21 is_fable5 8|43 is_fable51 8|22 is_fruitcake 8|23 is_gpt5_family 8|24 is_composer1 8|25 is_composer15 8|26 is_composer2 8|27 is_composer_matterhorn 8|28 is_grok45_product_prompt 8|29 is_raw_training_slug 8|34 is_grok46_product_prompt 8|30 reasoning_effort 9?|31 use_dsv3_harness 8|32 agent_token_limit 5?|33 estimated_cache_ttl_ms 5?|35 persona 9|36 feature_flags 9,#0|37 loop_nudge #1?|38 progress_reminder_threshold 5?|39 effort_level 9?|40 supports_assistant_message_prefill 8|41 enable_line_numbers 8|42 use_sparse_read_line_numbers 8|44 self_identity_name 9|45 dsv3_is_thinking 8?|46 agent_mode_configs #2*|47 use_new_plan_mode_prompts 8?|48 ask_question_config #3?|49 subagent_model_config #4?|51 post_tool_reminders #5*|52 enable_semantic_search 8?|53 long_reasoning_reminder #6?|54 smart_mode_classifier_mode 8?|55 smart_mode_classifier_shadow_mode 8?",
            RunInferenceFlagValue,
            RunInferenceLoopNudgeConfig,
            RunInferenceAgentModeConfig,
            RunInferenceAskQuestionConfig,
            RunInferenceSubagentModelConfig,
            RunInferencePostToolReminder,
            RunInferenceLongReasoningReminderConfig
        ];
    }
};
RunInferencePostToolReminder = class _RunInferencePostToolReminder extends __protoMessage3145 {
    constructor(data){
        super();
        this.id = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferencePostToolReminder().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferencePostToolReminder().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferencePostToolReminder().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferencePostToolReminder, a, b2);
    }
    static $() {
        return [
            "RunInferencePostToolReminder|1 id 9|2 interval_tool_calls 13?"
        ];
    }
};
RunInferenceLongReasoningReminderConfig = class _RunInferenceLongReasoningReminderConfig extends __protoMessage3145 {
    constructor(data){
        super();
        this.arm = "";
        this.enabled = false;
        this.thresholdTokens = 0;
        this.delayCalls = 0;
        this.reminderText = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceLongReasoningReminderConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceLongReasoningReminderConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceLongReasoningReminderConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceLongReasoningReminderConfig, a, b2);
    }
    static $() {
        return [
            "RunInferenceLongReasoningReminderConfig|1 arm 9|2 enabled 8|3 threshold_tokens 13|4 delay_calls 13|5 reminder_text 9"
        ];
    }
};
RunInferenceSubagentModelConfig = class _RunInferenceSubagentModelConfig extends __protoMessage3145 {
    constructor(data){
        super();
        this.forcePolicy = "";
        this.parentMaxMode = false;
        this.models = [];
        this.overrides = [];
        this.taskToolOmitted = false;
        this.parentRequestedModelName = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceSubagentModelConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceSubagentModelConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceSubagentModelConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceSubagentModelConfig, a, b2);
    }
    static $() {
        return [
            "RunInferenceSubagentModelConfig|1 force_policy 9|2 force_model_id 9?|3 parent_max_mode 8|4 models #0*|5 overrides #1*|6 task_tool_omitted 8|7 parent_requested_model_name 9",
            RunInferenceSubagentModelPolicy,
            RunInferenceResolvedSubagentModelOverride
        ];
    }
};
RunInferenceSubagentModelPolicy = class _RunInferenceSubagentModelPolicy extends __protoMessage3145 {
    constructor(data){
        super();
        this.slug = "";
        this.advertised = false;
        this.valid = false;
        this.blocked = false;
        this.requiresMaxMode = false;
        this.representativeCostDollars = 0;
        this.legacyAliases = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceSubagentModelPolicy().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceSubagentModelPolicy().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceSubagentModelPolicy().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceSubagentModelPolicy, a, b2);
    }
    static $() {
        return [
            "RunInferenceSubagentModelPolicy|1 slug 9|2 advertised 8|3 valid 8|4 blocked 8|5 requires_max_mode 8|6 representative_cost_dollars 1|7 legacy_aliases 9*"
        ];
    }
};
RunInferenceResolvedSubagentModelOverride = class _RunInferenceResolvedSubagentModelOverride extends __protoMessage3145 {
    constructor(data){
        super();
        this.subagentType = "";
        this.kind = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceResolvedSubagentModelOverride().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceResolvedSubagentModelOverride().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceResolvedSubagentModelOverride().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceResolvedSubagentModelOverride, a, b2);
    }
    static $() {
        return [
            "RunInferenceResolvedSubagentModelOverride|1 subagent_type 9|2 kind 9|3 model_id 9?"
        ];
    }
};
RunInferenceAskQuestionConfig = class _RunInferenceAskQuestionConfig extends __protoMessage3145 {
    constructor(data){
        super();
        this.toolName = "";
        this.autoRejectFirst = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceAskQuestionConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceAskQuestionConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceAskQuestionConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceAskQuestionConfig, a, b2);
    }
    static $() {
        return [
            "RunInferenceAskQuestionConfig|1 tool_name 9|2 auto_reject_first 8"
        ];
    }
};
RunInferenceAgentModeConfig = class _RunInferenceAgentModeConfig extends __protoMessage3145 {
    constructor(data){
        super();
        this.modeId = "";
        this.enableAskQuestionTool = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceAgentModeConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceAgentModeConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceAgentModeConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceAgentModeConfig, a, b2);
    }
    static $() {
        return [
            "RunInferenceAgentModeConfig|1 mode_id 9|2 enable_ask_question_tool 8|3 switch_mode_tool_config #0?",
            RunInferenceSwitchModeToolConfig
        ];
    }
};
RunInferenceSwitchModeToolConfig = class _RunInferenceSwitchModeToolConfig extends __protoMessage3145 {
    constructor(data){
        super();
        this.targetModes = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceSwitchModeToolConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceSwitchModeToolConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceSwitchModeToolConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceSwitchModeToolConfig, a, b2);
    }
    static $() {
        return [
            "RunInferenceSwitchModeToolConfig|1 target_modes 9*"
        ];
    }
};
RunInferenceFlagValue = class _RunInferenceFlagValue extends __protoMessage3145 {
    constructor(data){
        super();
        this.value = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceFlagValue().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceFlagValue().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceFlagValue().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceFlagValue, a, b2);
    }
    static $() {
        return [
            "RunInferenceFlagValue|1 bool_value 8 value|2 number_value 1 value|3 string_value 9 value"
        ];
    }
};
RunInferenceLoopNudgeConfig = class _RunInferenceLoopNudgeConfig extends __protoMessage3145 {
    constructor(data){
        super();
        this.minRepetitions = 0;
        this.minMessageLength = 0;
        this.injectReminder = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceLoopNudgeConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceLoopNudgeConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceLoopNudgeConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceLoopNudgeConfig, a, b2);
    }
    static $() {
        return [
            "RunInferenceLoopNudgeConfig|1 min_repetitions 5|2 min_message_length 5|3 inject_reminder 8"
        ];
    }
};
RunInferenceInvocationResponse = class _RunInferenceInvocationResponse extends __protoMessage3145 {
    constructor(data){
        super();
        this.invocationId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceInvocationResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceInvocationResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceInvocationResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceInvocationResponse, a, b2);
    }
    static $() {
        return [
            "RunInferenceInvocationResponse|1 invocation_id 9|2 response #0",
            InferenceStreamResponse
        ];
    }
};
RunInferenceInvocationEnd = class _RunInferenceInvocationEnd extends __protoMessage3145 {
    constructor(data){
        super();
        this.invocationId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceInvocationEnd().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceInvocationEnd().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceInvocationEnd().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceInvocationEnd, a, b2);
    }
    static $() {
        return [
            "RunInferenceInvocationEnd|1 invocation_id 9|2 error #0?",
            RunInferenceInvocationError
        ];
    }
};
RunInferenceInvocationError = class _RunInferenceInvocationError extends __protoMessage3145 {
    constructor(data){
        super();
        this.code = 0;
        this.message = "";
        this.details = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceInvocationError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceInvocationError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceInvocationError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceInvocationError, a, b2);
    }
    static $() {
        return [
            "RunInferenceInvocationError|1 code 5|2 message 9|3 details #0*",
            RunInferenceErrorDetail
        ];
    }
};
RunInferenceErrorDetail = class _RunInferenceErrorDetail extends __protoMessage3145 {
    constructor(data){
        super();
        this.type = "";
        this.value = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunInferenceErrorDetail().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunInferenceErrorDetail().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunInferenceErrorDetail().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunInferenceErrorDetail, a, b2);
    }
    static $() {
        return [
            "RunInferenceErrorDetail|1 type 9|2 value 12"
        ];
    }
};

}
