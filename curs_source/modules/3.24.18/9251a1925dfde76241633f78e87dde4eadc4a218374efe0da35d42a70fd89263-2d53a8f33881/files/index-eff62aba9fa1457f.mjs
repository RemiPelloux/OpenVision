import { external_exports } from "../../../../../../../external_exports.js";
import { combineHeaders, convertBase64ToUint8Array, isParsableJson, parseProviderOptions } from "../../../../../../../mcp_sandbox_policy_exports.js";
import { APICallError, InvalidResponseDataError, TooManyEmbeddingValuesForCallError, UnsupportedFunctionalityError, init_dist22 } from "../../../../../@ai-sdk+provider@1.1.3/node_modules/@ai-sdk/provider/dist/index.mjs";
import { createBinaryResponseHandler, createEventSourceResponseHandler, createJsonErrorResponseHandler, createJsonResponseHandler, generateId, init_dist23, postFormDataToApi, postJsonToApi } from "../../../../../_bc69990fa6a678cff6ea7a3f9b94be78/node_modules/@ai-sdk/provider-utils/dist/index.mjs";
import { init_zod } from "../../../../../zod@3.25.76/node_modules/zod/index.js";
import { convertToOpenAIChatMessages, convertToOpenAICompletionPrompt, convertToOpenAIResponsesMessages, createOpenAI, getResponseMetadata, getResponsesModelConfig, getSystemMessageMode, isAudioModel, isErrorChunk, isReasoningModel, isResponseAnnotationAddedChunk, isResponseCreatedChunk, isResponseFinishedChunk, isResponseFunctionCallArgumentsDeltaChunk, isResponseOutputItemAddedChunk, isResponseOutputItemDoneChunk, isResponseReasoningSummaryTextDeltaChunk, isTextDeltaChunk, mapOpenAIChatLogProbsOutput, mapOpenAICompletionLogProbs, mapOpenAIFinishReason, mapOpenAIResponseFinishReason, prepareResponsesTools, prepareTools, webSearchPreviewTool } from "../../../../../../../tree_chunk_napi_exports.js";
var openaiErrorDataSchema, openaiFailedResponseHandler, OpenAIChatLanguageModel, openaiTokenUsageSchema, openaiChatResponseSchema, openaiChatChunkSchema, reasoningModels, OpenAICompletionLanguageModel, openaiCompletionResponseSchema, openaiCompletionChunkSchema, OpenAIEmbeddingModel, openaiTextEmbeddingResponseSchema, modelMaxImagesPerCall, hasDefaultResponseFormat, OpenAIImageModel, openaiImageResponseSchema, openAIProviderOptionsSchema, languageMap, OpenAITranscriptionModel, openaiTranscriptionResponseSchema, OpenAIResponsesLanguageModel, usageSchema, textDeltaChunkSchema, responseFinishedChunkSchema, responseCreatedChunkSchema, responseOutputItemDoneSchema, responseFunctionCallArgumentsDeltaSchema, responseOutputItemAddedSchema, responseAnnotationAddedSchema, responseReasoningSummaryTextDeltaSchema, errorChunkSchema, openaiResponsesChunkSchema, openaiResponsesProviderOptionsSchema, WebSearchPreviewParameters, openaiTools, OpenAIProviderOptionsSchema, OpenAISpeechModel, openai;
export { OpenAIChatLanguageModel, OpenAICompletionLanguageModel, OpenAIEmbeddingModel, OpenAIImageModel, OpenAIProviderOptionsSchema, OpenAIResponsesLanguageModel, OpenAISpeechModel, OpenAITranscriptionModel, WebSearchPreviewParameters, errorChunkSchema, hasDefaultResponseFormat, languageMap, modelMaxImagesPerCall, openAIProviderOptionsSchema, openai, openaiChatChunkSchema, openaiChatResponseSchema, openaiCompletionChunkSchema, openaiCompletionResponseSchema, openaiErrorDataSchema, openaiFailedResponseHandler, openaiImageResponseSchema, openaiResponsesChunkSchema, openaiResponsesProviderOptionsSchema, openaiTextEmbeddingResponseSchema, openaiTokenUsageSchema, openaiTools, openaiTranscriptionResponseSchema, reasoningModels, responseAnnotationAddedSchema, responseCreatedChunkSchema, responseFinishedChunkSchema, responseFunctionCallArgumentsDeltaSchema, responseOutputItemAddedSchema, responseOutputItemDoneSchema, responseReasoningSummaryTextDeltaSchema, textDeltaChunkSchema, usageSchema };
var __wakaru_init_dist38_initialized = false;
export function init_dist38() {
if (__wakaru_init_dist38_initialized) return;
__wakaru_init_dist38_initialized = true;
init_dist23();
init_dist22();
init_dist23();
init_zod();
init_dist22();
init_dist23();
init_zod();
init_dist23();
init_dist22();
init_dist22();
init_dist23();
init_zod();
init_dist22();
init_dist22();
init_dist23();
init_zod();
init_dist23();
init_zod();
init_dist23();
init_zod();
init_dist22();
init_dist23();
init_zod();
init_dist22();
init_dist23();
init_dist22();
init_zod();
init_dist23();
init_zod();
openaiErrorDataSchema = external_exports.object({
    error: external_exports.object({
        message: external_exports.string(),
        type: external_exports.string().nullish(),
        param: external_exports.any().nullish(),
        code: external_exports.union([
            external_exports.string(),
            external_exports.number()
        ]).nullish()
    })
});
openaiFailedResponseHandler = createJsonErrorResponseHandler({
    errorSchema: openaiErrorDataSchema,
    errorToMessage: (data)=>data.error.message
});
OpenAIChatLanguageModel = class {
    constructor(modelId, settings, config2){
        this.specificationVersion = "v1";
        this.modelId = modelId;
        this.settings = settings;
        this.config = config2;
    }
    get supportsStructuredOutputs() {
        var _a18;
        return (_a18 = this.settings.structuredOutputs) != null ? _a18 : isReasoningModel(this.modelId);
    }
    get defaultObjectGenerationMode() {
        if (isAudioModel(this.modelId)) {
            return "tool";
        }
        return this.supportsStructuredOutputs ? "json" : "tool";
    }
    get provider() {
        return this.config.provider;
    }
    get supportsImageUrls() {
        return !this.settings.downloadImages;
    }
    getArgs({ mode, prompt, maxTokens, temperature, topP, topK, frequencyPenalty, presencePenalty, stopSequences, responseFormat, seed, providerMetadata }) {
        var _a18, _b2, _c, _d, _e2, _f, _g, _h;
        const type2 = mode.type;
        const warnings = [];
        if (topK != null) {
            warnings.push({
                type: "unsupported-setting",
                setting: "topK"
            });
        }
        if ((responseFormat == null ? void 0 : responseFormat.type) === "json" && responseFormat.schema != null && !this.supportsStructuredOutputs) {
            warnings.push({
                type: "unsupported-setting",
                setting: "responseFormat",
                details: "JSON response format schema is only supported with structuredOutputs"
            });
        }
        const useLegacyFunctionCalling = this.settings.useLegacyFunctionCalling;
        if (useLegacyFunctionCalling && this.settings.parallelToolCalls === true) {
            throw new UnsupportedFunctionalityError({
                functionality: "useLegacyFunctionCalling with parallelToolCalls"
            });
        }
        if (useLegacyFunctionCalling && this.supportsStructuredOutputs) {
            throw new UnsupportedFunctionalityError({
                functionality: "structuredOutputs with useLegacyFunctionCalling"
            });
        }
        const { messages, warnings: messageWarnings } = convertToOpenAIChatMessages({
            prompt,
            useLegacyFunctionCalling,
            systemMessageMode: getSystemMessageMode(this.modelId)
        });
        warnings.push(...messageWarnings);
        const baseArgs = {
            model: this.modelId,
            logit_bias: this.settings.logitBias,
            logprobs: this.settings.logprobs === true || typeof this.settings.logprobs === "number" ? true : void 0,
            top_logprobs: typeof this.settings.logprobs === "number" ? this.settings.logprobs : typeof this.settings.logprobs === "boolean" ? this.settings.logprobs ? 0 : void 0 : void 0,
            user: this.settings.user,
            parallel_tool_calls: this.settings.parallelToolCalls,
            max_tokens: maxTokens,
            temperature,
            top_p: topP,
            frequency_penalty: frequencyPenalty,
            presence_penalty: presencePenalty,
            response_format: (responseFormat == null ? void 0 : responseFormat.type) === "json" ? this.supportsStructuredOutputs && responseFormat.schema != null ? {
                type: "json_schema",
                json_schema: {
                    schema: responseFormat.schema,
                    strict: true,
                    name: (_a18 = responseFormat.name) != null ? _a18 : "response",
                    description: responseFormat.description
                }
            } : {
                type: "json_object"
            } : void 0,
            stop: stopSequences,
            seed,
            max_completion_tokens: (_b2 = providerMetadata == null ? void 0 : providerMetadata.openai) == null ? void 0 : _b2.maxCompletionTokens,
            store: (_c = providerMetadata == null ? void 0 : providerMetadata.openai) == null ? void 0 : _c.store,
            metadata: (_d = providerMetadata == null ? void 0 : providerMetadata.openai) == null ? void 0 : _d.metadata,
            prediction: (_e2 = providerMetadata == null ? void 0 : providerMetadata.openai) == null ? void 0 : _e2.prediction,
            reasoning_effort: (_g = (_f = providerMetadata == null ? void 0 : providerMetadata.openai) == null ? void 0 : _f.reasoningEffort) != null ? _g : this.settings.reasoningEffort,
            messages
        };
        if (isReasoningModel(this.modelId)) {
            if (baseArgs.temperature != null) {
                baseArgs.temperature = void 0;
                warnings.push({
                    type: "unsupported-setting",
                    setting: "temperature",
                    details: "temperature is not supported for reasoning models"
                });
            }
            if (baseArgs.top_p != null) {
                baseArgs.top_p = void 0;
                warnings.push({
                    type: "unsupported-setting",
                    setting: "topP",
                    details: "topP is not supported for reasoning models"
                });
            }
            if (baseArgs.frequency_penalty != null) {
                baseArgs.frequency_penalty = void 0;
                warnings.push({
                    type: "unsupported-setting",
                    setting: "frequencyPenalty",
                    details: "frequencyPenalty is not supported for reasoning models"
                });
            }
            if (baseArgs.presence_penalty != null) {
                baseArgs.presence_penalty = void 0;
                warnings.push({
                    type: "unsupported-setting",
                    setting: "presencePenalty",
                    details: "presencePenalty is not supported for reasoning models"
                });
            }
            if (baseArgs.logit_bias != null) {
                baseArgs.logit_bias = void 0;
                warnings.push({
                    type: "other",
                    message: "logitBias is not supported for reasoning models"
                });
            }
            if (baseArgs.logprobs != null) {
                baseArgs.logprobs = void 0;
                warnings.push({
                    type: "other",
                    message: "logprobs is not supported for reasoning models"
                });
            }
            if (baseArgs.top_logprobs != null) {
                baseArgs.top_logprobs = void 0;
                warnings.push({
                    type: "other",
                    message: "topLogprobs is not supported for reasoning models"
                });
            }
            if (baseArgs.max_tokens != null) {
                if (baseArgs.max_completion_tokens == null) {
                    baseArgs.max_completion_tokens = baseArgs.max_tokens;
                }
                baseArgs.max_tokens = void 0;
            }
        } else if (this.modelId.startsWith("gpt-4o-search-preview") || this.modelId.startsWith("gpt-4o-mini-search-preview")) {
            if (baseArgs.temperature != null) {
                baseArgs.temperature = void 0;
                warnings.push({
                    type: "unsupported-setting",
                    setting: "temperature",
                    details: "temperature is not supported for the search preview models and has been removed."
                });
            }
        }
        switch(type2){
            case "regular":
                {
                    const { tools, tool_choice, functions, function_call, toolWarnings } = prepareTools({
                        mode,
                        useLegacyFunctionCalling,
                        structuredOutputs: this.supportsStructuredOutputs
                    });
                    return {
                        args: {
                            ...baseArgs,
                            tools,
                            tool_choice,
                            functions,
                            function_call
                        },
                        warnings: [
                            ...warnings,
                            ...toolWarnings
                        ]
                    };
                }
            case "object-json":
                {
                    return {
                        args: {
                            ...baseArgs,
                            response_format: this.supportsStructuredOutputs && mode.schema != null ? {
                                type: "json_schema",
                                json_schema: {
                                    schema: mode.schema,
                                    strict: true,
                                    name: (_h = mode.name) != null ? _h : "response",
                                    description: mode.description
                                }
                            } : {
                                type: "json_object"
                            }
                        },
                        warnings
                    };
                }
            case "object-tool":
                {
                    return {
                        args: useLegacyFunctionCalling ? {
                            ...baseArgs,
                            function_call: {
                                name: mode.tool.name
                            },
                            functions: [
                                {
                                    name: mode.tool.name,
                                    description: mode.tool.description,
                                    parameters: mode.tool.parameters
                                }
                            ]
                        } : {
                            ...baseArgs,
                            tool_choice: {
                                type: "function",
                                function: {
                                    name: mode.tool.name
                                }
                            },
                            tools: [
                                {
                                    type: "function",
                                    function: {
                                        name: mode.tool.name,
                                        description: mode.tool.description,
                                        parameters: mode.tool.parameters,
                                        strict: this.supportsStructuredOutputs ? true : void 0
                                    }
                                }
                            ]
                        },
                        warnings
                    };
                }
            default:
                {
                    const _exhaustiveCheck = type2;
                    throw new Error(`Unsupported type: ${_exhaustiveCheck}`);
                }
        }
    }
    async doGenerate(options2) {
        var _a18, _b2, _c, _d, _e2, _f, _g, _h;
        const { args: body, warnings } = this.getArgs(options2);
        const { responseHeaders, value: response, rawValue: rawResponse } = await postJsonToApi({
            url: this.config.url({
                path: "/chat/completions",
                modelId: this.modelId
            }),
            headers: combineHeaders(this.config.headers(), options2.headers),
            body,
            failedResponseHandler: openaiFailedResponseHandler,
            successfulResponseHandler: createJsonResponseHandler(openaiChatResponseSchema),
            abortSignal: options2.abortSignal,
            fetch: this.config.fetch
        });
        const { messages: rawPrompt, ...rawSettings } = body;
        const choice = response.choices[0];
        const completionTokenDetails = (_a18 = response.usage) == null ? void 0 : _a18.completion_tokens_details;
        const promptTokenDetails = (_b2 = response.usage) == null ? void 0 : _b2.prompt_tokens_details;
        const providerMetadata = {
            openai: {}
        };
        if ((completionTokenDetails == null ? void 0 : completionTokenDetails.reasoning_tokens) != null) {
            providerMetadata.openai.reasoningTokens = completionTokenDetails == null ? void 0 : completionTokenDetails.reasoning_tokens;
        }
        if ((completionTokenDetails == null ? void 0 : completionTokenDetails.accepted_prediction_tokens) != null) {
            providerMetadata.openai.acceptedPredictionTokens = completionTokenDetails == null ? void 0 : completionTokenDetails.accepted_prediction_tokens;
        }
        if ((completionTokenDetails == null ? void 0 : completionTokenDetails.rejected_prediction_tokens) != null) {
            providerMetadata.openai.rejectedPredictionTokens = completionTokenDetails == null ? void 0 : completionTokenDetails.rejected_prediction_tokens;
        }
        if ((promptTokenDetails == null ? void 0 : promptTokenDetails.cached_tokens) != null) {
            providerMetadata.openai.cachedPromptTokens = promptTokenDetails == null ? void 0 : promptTokenDetails.cached_tokens;
        }
        return {
            text: (_c = choice.message.content) != null ? _c : void 0,
            toolCalls: this.settings.useLegacyFunctionCalling && choice.message.function_call ? [
                {
                    toolCallType: "function",
                    toolCallId: generateId(),
                    toolName: choice.message.function_call.name,
                    args: choice.message.function_call.arguments
                }
            ] : (_d = choice.message.tool_calls) == null ? void 0 : _d.map((toolCall)=>{
                var _a24;
                return {
                    toolCallType: "function",
                    toolCallId: (_a24 = toolCall.id) != null ? _a24 : generateId(),
                    toolName: toolCall.function.name,
                    args: toolCall.function.arguments
                };
            }),
            finishReason: mapOpenAIFinishReason(choice.finish_reason),
            usage: {
                promptTokens: (_f = (_e2 = response.usage) == null ? void 0 : _e2.prompt_tokens) != null ? _f : NaN,
                completionTokens: (_h = (_g = response.usage) == null ? void 0 : _g.completion_tokens) != null ? _h : NaN
            },
            rawCall: {
                rawPrompt,
                rawSettings
            },
            rawResponse: {
                headers: responseHeaders,
                body: rawResponse
            },
            request: {
                body: JSON.stringify(body)
            },
            response: getResponseMetadata(response),
            warnings,
            logprobs: mapOpenAIChatLogProbsOutput(choice.logprobs),
            providerMetadata
        };
    }
    async doStream(options2) {
        if (this.settings.simulateStreaming) {
            const result = await this.doGenerate(options2);
            const simulatedStream = new ReadableStream({
                start (controller) {
                    controller.enqueue({
                        type: "response-metadata",
                        ...result.response
                    });
                    if (result.text) {
                        controller.enqueue({
                            type: "text-delta",
                            textDelta: result.text
                        });
                    }
                    if (result.toolCalls) {
                        for (const toolCall of result.toolCalls){
                            controller.enqueue({
                                type: "tool-call-delta",
                                toolCallType: "function",
                                toolCallId: toolCall.toolCallId,
                                toolName: toolCall.toolName,
                                argsTextDelta: toolCall.args
                            });
                            controller.enqueue({
                                type: "tool-call",
                                ...toolCall
                            });
                        }
                    }
                    controller.enqueue({
                        type: "finish",
                        finishReason: result.finishReason,
                        usage: result.usage,
                        logprobs: result.logprobs,
                        providerMetadata: result.providerMetadata
                    });
                    controller.close();
                }
            });
            return {
                stream: simulatedStream,
                rawCall: result.rawCall,
                rawResponse: result.rawResponse,
                warnings: result.warnings
            };
        }
        const { args, warnings } = this.getArgs(options2);
        const body = {
            ...args,
            stream: true,
            stream_options: this.config.compatibility === "strict" ? {
                include_usage: true
            } : void 0
        };
        const { responseHeaders, value: response } = await postJsonToApi({
            url: this.config.url({
                path: "/chat/completions",
                modelId: this.modelId
            }),
            headers: combineHeaders(this.config.headers(), options2.headers),
            body,
            failedResponseHandler: openaiFailedResponseHandler,
            successfulResponseHandler: createEventSourceResponseHandler(openaiChatChunkSchema),
            abortSignal: options2.abortSignal,
            fetch: this.config.fetch
        });
        const { messages: rawPrompt, ...rawSettings } = args;
        const toolCalls = [];
        let finishReason = "unknown";
        let usage = {
            promptTokens: void 0,
            completionTokens: void 0
        };
        let logprobs;
        let isFirstChunk = true;
        const { useLegacyFunctionCalling } = this.settings;
        const providerMetadata = {
            openai: {}
        };
        return {
            stream: response.pipeThrough(new TransformStream({
                transform (chunk, controller) {
                    var _a18, _b2, _c, _d, _e2, _f, _g, _h, _i2, _j, _k, _l;
                    if (!chunk.success) {
                        finishReason = "error";
                        controller.enqueue({
                            type: "error",
                            error: chunk.error
                        });
                        return;
                    }
                    const value = chunk.value;
                    if ("error" in value) {
                        finishReason = "error";
                        controller.enqueue({
                            type: "error",
                            error: value.error
                        });
                        return;
                    }
                    if (isFirstChunk) {
                        isFirstChunk = false;
                        controller.enqueue({
                            type: "response-metadata",
                            ...getResponseMetadata(value)
                        });
                    }
                    if (value.usage != null) {
                        const { prompt_tokens, completion_tokens, prompt_tokens_details, completion_tokens_details } = value.usage;
                        usage = {
                            promptTokens: prompt_tokens != null ? prompt_tokens : void 0,
                            completionTokens: completion_tokens != null ? completion_tokens : void 0
                        };
                        if ((completion_tokens_details == null ? void 0 : completion_tokens_details.reasoning_tokens) != null) {
                            providerMetadata.openai.reasoningTokens = completion_tokens_details == null ? void 0 : completion_tokens_details.reasoning_tokens;
                        }
                        if ((completion_tokens_details == null ? void 0 : completion_tokens_details.accepted_prediction_tokens) != null) {
                            providerMetadata.openai.acceptedPredictionTokens = completion_tokens_details == null ? void 0 : completion_tokens_details.accepted_prediction_tokens;
                        }
                        if ((completion_tokens_details == null ? void 0 : completion_tokens_details.rejected_prediction_tokens) != null) {
                            providerMetadata.openai.rejectedPredictionTokens = completion_tokens_details == null ? void 0 : completion_tokens_details.rejected_prediction_tokens;
                        }
                        if ((prompt_tokens_details == null ? void 0 : prompt_tokens_details.cached_tokens) != null) {
                            providerMetadata.openai.cachedPromptTokens = prompt_tokens_details == null ? void 0 : prompt_tokens_details.cached_tokens;
                        }
                    }
                    const choice = value.choices[0];
                    if ((choice == null ? void 0 : choice.finish_reason) != null) {
                        finishReason = mapOpenAIFinishReason(choice.finish_reason);
                    }
                    if ((choice == null ? void 0 : choice.delta) == null) {
                        return;
                    }
                    const delta = choice.delta;
                    if (delta.content != null) {
                        controller.enqueue({
                            type: "text-delta",
                            textDelta: delta.content
                        });
                    }
                    const mappedLogprobs = mapOpenAIChatLogProbsOutput(choice == null ? void 0 : choice.logprobs);
                    if (mappedLogprobs == null ? void 0 : mappedLogprobs.length) {
                        if (logprobs === void 0) logprobs = [];
                        logprobs.push(...mappedLogprobs);
                    }
                    const mappedToolCalls = useLegacyFunctionCalling && delta.function_call != null ? [
                        {
                            type: "function",
                            id: generateId(),
                            function: delta.function_call,
                            index: 0
                        }
                    ] : delta.tool_calls;
                    if (mappedToolCalls != null) {
                        for (const toolCallDelta of mappedToolCalls){
                            const index = toolCallDelta.index;
                            if (toolCalls[index] == null) {
                                if (toolCallDelta.type !== "function") {
                                    throw new InvalidResponseDataError({
                                        data: toolCallDelta,
                                        message: `Expected 'function' type.`
                                    });
                                }
                                if (toolCallDelta.id == null) {
                                    throw new InvalidResponseDataError({
                                        data: toolCallDelta,
                                        message: `Expected 'id' to be a string.`
                                    });
                                }
                                if (((_a18 = toolCallDelta.function) == null ? void 0 : _a18.name) == null) {
                                    throw new InvalidResponseDataError({
                                        data: toolCallDelta,
                                        message: `Expected 'function.name' to be a string.`
                                    });
                                }
                                toolCalls[index] = {
                                    id: toolCallDelta.id,
                                    type: "function",
                                    function: {
                                        name: toolCallDelta.function.name,
                                        arguments: (_b2 = toolCallDelta.function.arguments) != null ? _b2 : ""
                                    },
                                    hasFinished: false
                                };
                                const toolCall2 = toolCalls[index];
                                if (((_c = toolCall2.function) == null ? void 0 : _c.name) != null && ((_d = toolCall2.function) == null ? void 0 : _d.arguments) != null) {
                                    if (toolCall2.function.arguments.length > 0) {
                                        controller.enqueue({
                                            type: "tool-call-delta",
                                            toolCallType: "function",
                                            toolCallId: toolCall2.id,
                                            toolName: toolCall2.function.name,
                                            argsTextDelta: toolCall2.function.arguments
                                        });
                                    }
                                    if (isParsableJson(toolCall2.function.arguments)) {
                                        controller.enqueue({
                                            type: "tool-call",
                                            toolCallType: "function",
                                            toolCallId: (_e2 = toolCall2.id) != null ? _e2 : generateId(),
                                            toolName: toolCall2.function.name,
                                            args: toolCall2.function.arguments
                                        });
                                        toolCall2.hasFinished = true;
                                    }
                                }
                                continue;
                            }
                            const toolCall = toolCalls[index];
                            if (toolCall.hasFinished) {
                                continue;
                            }
                            if (((_f = toolCallDelta.function) == null ? void 0 : _f.arguments) != null) {
                                toolCall.function.arguments += (_h = (_g = toolCallDelta.function) == null ? void 0 : _g.arguments) != null ? _h : "";
                            }
                            controller.enqueue({
                                type: "tool-call-delta",
                                toolCallType: "function",
                                toolCallId: toolCall.id,
                                toolName: toolCall.function.name,
                                argsTextDelta: (_i2 = toolCallDelta.function.arguments) != null ? _i2 : ""
                            });
                            if (((_j = toolCall.function) == null ? void 0 : _j.name) != null && ((_k = toolCall.function) == null ? void 0 : _k.arguments) != null && isParsableJson(toolCall.function.arguments)) {
                                controller.enqueue({
                                    type: "tool-call",
                                    toolCallType: "function",
                                    toolCallId: (_l = toolCall.id) != null ? _l : generateId(),
                                    toolName: toolCall.function.name,
                                    args: toolCall.function.arguments
                                });
                                toolCall.hasFinished = true;
                            }
                        }
                    }
                },
                flush (controller) {
                    var _a18, _b2;
                    controller.enqueue({
                        type: "finish",
                        finishReason,
                        logprobs,
                        usage: {
                            promptTokens: (_a18 = usage.promptTokens) != null ? _a18 : NaN,
                            completionTokens: (_b2 = usage.completionTokens) != null ? _b2 : NaN
                        },
                        ...providerMetadata != null ? {
                            providerMetadata
                        } : {}
                    });
                }
            })),
            rawCall: {
                rawPrompt,
                rawSettings
            },
            rawResponse: {
                headers: responseHeaders
            },
            request: {
                body: JSON.stringify(body)
            },
            warnings
        };
    }
};
openaiTokenUsageSchema = external_exports.object({
    prompt_tokens: external_exports.number().nullish(),
    completion_tokens: external_exports.number().nullish(),
    prompt_tokens_details: external_exports.object({
        cached_tokens: external_exports.number().nullish()
    }).nullish(),
    completion_tokens_details: external_exports.object({
        reasoning_tokens: external_exports.number().nullish(),
        accepted_prediction_tokens: external_exports.number().nullish(),
        rejected_prediction_tokens: external_exports.number().nullish()
    }).nullish()
}).nullish();
openaiChatResponseSchema = external_exports.object({
    id: external_exports.string().nullish(),
    created: external_exports.number().nullish(),
    model: external_exports.string().nullish(),
    choices: external_exports.array(external_exports.object({
        message: external_exports.object({
            role: external_exports.literal("assistant").nullish(),
            content: external_exports.string().nullish(),
            function_call: external_exports.object({
                arguments: external_exports.string(),
                name: external_exports.string()
            }).nullish(),
            tool_calls: external_exports.array(external_exports.object({
                id: external_exports.string().nullish(),
                type: external_exports.literal("function"),
                function: external_exports.object({
                    name: external_exports.string(),
                    arguments: external_exports.string()
                })
            })).nullish()
        }),
        index: external_exports.number(),
        logprobs: external_exports.object({
            content: external_exports.array(external_exports.object({
                token: external_exports.string(),
                logprob: external_exports.number(),
                top_logprobs: external_exports.array(external_exports.object({
                    token: external_exports.string(),
                    logprob: external_exports.number()
                }))
            })).nullable()
        }).nullish(),
        finish_reason: external_exports.string().nullish()
    })),
    usage: openaiTokenUsageSchema
});
openaiChatChunkSchema = external_exports.union([
    external_exports.object({
        id: external_exports.string().nullish(),
        created: external_exports.number().nullish(),
        model: external_exports.string().nullish(),
        choices: external_exports.array(external_exports.object({
            delta: external_exports.object({
                role: external_exports.enum([
                    "assistant"
                ]).nullish(),
                content: external_exports.string().nullish(),
                function_call: external_exports.object({
                    name: external_exports.string().optional(),
                    arguments: external_exports.string().optional()
                }).nullish(),
                tool_calls: external_exports.array(external_exports.object({
                    index: external_exports.number(),
                    id: external_exports.string().nullish(),
                    type: external_exports.literal("function").nullish(),
                    function: external_exports.object({
                        name: external_exports.string().nullish(),
                        arguments: external_exports.string().nullish()
                    })
                })).nullish()
            }).nullish(),
            logprobs: external_exports.object({
                content: external_exports.array(external_exports.object({
                    token: external_exports.string(),
                    logprob: external_exports.number(),
                    top_logprobs: external_exports.array(external_exports.object({
                        token: external_exports.string(),
                        logprob: external_exports.number()
                    }))
                })).nullable()
            }).nullish(),
            finish_reason: external_exports.string().nullish(),
            index: external_exports.number()
        })),
        usage: openaiTokenUsageSchema
    }),
    openaiErrorDataSchema
]);
reasoningModels = {
    "o1-mini": {
        systemMessageMode: "remove"
    },
    "o1-mini-2024-09-12": {
        systemMessageMode: "remove"
    },
    "o1-preview": {
        systemMessageMode: "remove"
    },
    "o1-preview-2024-09-12": {
        systemMessageMode: "remove"
    },
    o3: {
        systemMessageMode: "developer"
    },
    "o3-2025-04-16": {
        systemMessageMode: "developer"
    },
    "o3-mini": {
        systemMessageMode: "developer"
    },
    "o3-mini-2025-01-31": {
        systemMessageMode: "developer"
    },
    "o4-mini": {
        systemMessageMode: "developer"
    },
    "o4-mini-2025-04-16": {
        systemMessageMode: "developer"
    }
};
OpenAICompletionLanguageModel = class {
    constructor(modelId, settings, config2){
        this.specificationVersion = "v1";
        this.defaultObjectGenerationMode = void 0;
        this.modelId = modelId;
        this.settings = settings;
        this.config = config2;
    }
    get provider() {
        return this.config.provider;
    }
    getArgs({ mode, inputFormat, prompt, maxTokens, temperature, topP, topK, frequencyPenalty, presencePenalty, stopSequences: userStopSequences, responseFormat, seed }) {
        var _a18;
        const type2 = mode.type;
        const warnings = [];
        if (topK != null) {
            warnings.push({
                type: "unsupported-setting",
                setting: "topK"
            });
        }
        if (responseFormat != null && responseFormat.type !== "text") {
            warnings.push({
                type: "unsupported-setting",
                setting: "responseFormat",
                details: "JSON response format is not supported."
            });
        }
        const { prompt: completionPrompt, stopSequences } = convertToOpenAICompletionPrompt({
            prompt,
            inputFormat
        });
        const stop = [
            ...stopSequences != null ? stopSequences : [],
            ...userStopSequences != null ? userStopSequences : []
        ];
        const baseArgs = {
            model: this.modelId,
            echo: this.settings.echo,
            logit_bias: this.settings.logitBias,
            logprobs: typeof this.settings.logprobs === "number" ? this.settings.logprobs : typeof this.settings.logprobs === "boolean" ? this.settings.logprobs ? 0 : void 0 : void 0,
            suffix: this.settings.suffix,
            user: this.settings.user,
            max_tokens: maxTokens,
            temperature,
            top_p: topP,
            frequency_penalty: frequencyPenalty,
            presence_penalty: presencePenalty,
            seed,
            prompt: completionPrompt,
            stop: stop.length > 0 ? stop : void 0
        };
        switch(type2){
            case "regular":
                {
                    if ((_a18 = mode.tools) == null ? void 0 : _a18.length) {
                        throw new UnsupportedFunctionalityError({
                            functionality: "tools"
                        });
                    }
                    if (mode.toolChoice) {
                        throw new UnsupportedFunctionalityError({
                            functionality: "toolChoice"
                        });
                    }
                    return {
                        args: baseArgs,
                        warnings
                    };
                }
            case "object-json":
                {
                    throw new UnsupportedFunctionalityError({
                        functionality: "object-json mode"
                    });
                }
            case "object-tool":
                {
                    throw new UnsupportedFunctionalityError({
                        functionality: "object-tool mode"
                    });
                }
            default:
                {
                    const _exhaustiveCheck = type2;
                    throw new Error(`Unsupported type: ${_exhaustiveCheck}`);
                }
        }
    }
    async doGenerate(options2) {
        const { args, warnings } = this.getArgs(options2);
        const { responseHeaders, value: response, rawValue: rawResponse } = await postJsonToApi({
            url: this.config.url({
                path: "/completions",
                modelId: this.modelId
            }),
            headers: combineHeaders(this.config.headers(), options2.headers),
            body: args,
            failedResponseHandler: openaiFailedResponseHandler,
            successfulResponseHandler: createJsonResponseHandler(openaiCompletionResponseSchema),
            abortSignal: options2.abortSignal,
            fetch: this.config.fetch
        });
        const { prompt: rawPrompt, ...rawSettings } = args;
        const choice = response.choices[0];
        return {
            text: choice.text,
            usage: {
                promptTokens: response.usage.prompt_tokens,
                completionTokens: response.usage.completion_tokens
            },
            finishReason: mapOpenAIFinishReason(choice.finish_reason),
            logprobs: mapOpenAICompletionLogProbs(choice.logprobs),
            rawCall: {
                rawPrompt,
                rawSettings
            },
            rawResponse: {
                headers: responseHeaders,
                body: rawResponse
            },
            response: getResponseMetadata(response),
            warnings,
            request: {
                body: JSON.stringify(args)
            }
        };
    }
    async doStream(options2) {
        const { args, warnings } = this.getArgs(options2);
        const body = {
            ...args,
            stream: true,
            stream_options: this.config.compatibility === "strict" ? {
                include_usage: true
            } : void 0
        };
        const { responseHeaders, value: response } = await postJsonToApi({
            url: this.config.url({
                path: "/completions",
                modelId: this.modelId
            }),
            headers: combineHeaders(this.config.headers(), options2.headers),
            body,
            failedResponseHandler: openaiFailedResponseHandler,
            successfulResponseHandler: createEventSourceResponseHandler(openaiCompletionChunkSchema),
            abortSignal: options2.abortSignal,
            fetch: this.config.fetch
        });
        const { prompt: rawPrompt, ...rawSettings } = args;
        let finishReason = "unknown";
        let usage = {
            promptTokens: Number.NaN,
            completionTokens: Number.NaN
        };
        let logprobs;
        let isFirstChunk = true;
        return {
            stream: response.pipeThrough(new TransformStream({
                transform (chunk, controller) {
                    if (!chunk.success) {
                        finishReason = "error";
                        controller.enqueue({
                            type: "error",
                            error: chunk.error
                        });
                        return;
                    }
                    const value = chunk.value;
                    if ("error" in value) {
                        finishReason = "error";
                        controller.enqueue({
                            type: "error",
                            error: value.error
                        });
                        return;
                    }
                    if (isFirstChunk) {
                        isFirstChunk = false;
                        controller.enqueue({
                            type: "response-metadata",
                            ...getResponseMetadata(value)
                        });
                    }
                    if (value.usage != null) {
                        usage = {
                            promptTokens: value.usage.prompt_tokens,
                            completionTokens: value.usage.completion_tokens
                        };
                    }
                    const choice = value.choices[0];
                    if ((choice == null ? void 0 : choice.finish_reason) != null) {
                        finishReason = mapOpenAIFinishReason(choice.finish_reason);
                    }
                    if ((choice == null ? void 0 : choice.text) != null) {
                        controller.enqueue({
                            type: "text-delta",
                            textDelta: choice.text
                        });
                    }
                    const mappedLogprobs = mapOpenAICompletionLogProbs(choice == null ? void 0 : choice.logprobs);
                    if (mappedLogprobs == null ? void 0 : mappedLogprobs.length) {
                        if (logprobs === void 0) logprobs = [];
                        logprobs.push(...mappedLogprobs);
                    }
                },
                flush (controller) {
                    controller.enqueue({
                        type: "finish",
                        finishReason,
                        logprobs,
                        usage
                    });
                }
            })),
            rawCall: {
                rawPrompt,
                rawSettings
            },
            rawResponse: {
                headers: responseHeaders
            },
            warnings,
            request: {
                body: JSON.stringify(body)
            }
        };
    }
};
openaiCompletionResponseSchema = external_exports.object({
    id: external_exports.string().nullish(),
    created: external_exports.number().nullish(),
    model: external_exports.string().nullish(),
    choices: external_exports.array(external_exports.object({
        text: external_exports.string(),
        finish_reason: external_exports.string(),
        logprobs: external_exports.object({
            tokens: external_exports.array(external_exports.string()),
            token_logprobs: external_exports.array(external_exports.number()),
            top_logprobs: external_exports.array(external_exports.record(external_exports.string(), external_exports.number())).nullable()
        }).nullish()
    })),
    usage: external_exports.object({
        prompt_tokens: external_exports.number(),
        completion_tokens: external_exports.number()
    })
});
openaiCompletionChunkSchema = external_exports.union([
    external_exports.object({
        id: external_exports.string().nullish(),
        created: external_exports.number().nullish(),
        model: external_exports.string().nullish(),
        choices: external_exports.array(external_exports.object({
            text: external_exports.string(),
            finish_reason: external_exports.string().nullish(),
            index: external_exports.number(),
            logprobs: external_exports.object({
                tokens: external_exports.array(external_exports.string()),
                token_logprobs: external_exports.array(external_exports.number()),
                top_logprobs: external_exports.array(external_exports.record(external_exports.string(), external_exports.number())).nullable()
            }).nullish()
        })),
        usage: external_exports.object({
            prompt_tokens: external_exports.number(),
            completion_tokens: external_exports.number()
        }).nullish()
    }),
    openaiErrorDataSchema
]);
OpenAIEmbeddingModel = class {
    constructor(modelId, settings, config2){
        this.specificationVersion = "v1";
        this.modelId = modelId;
        this.settings = settings;
        this.config = config2;
    }
    get provider() {
        return this.config.provider;
    }
    get maxEmbeddingsPerCall() {
        var _a18;
        return (_a18 = this.settings.maxEmbeddingsPerCall) != null ? _a18 : 2048;
    }
    get supportsParallelCalls() {
        var _a18;
        return (_a18 = this.settings.supportsParallelCalls) != null ? _a18 : true;
    }
    async doEmbed({ values, headers, abortSignal }) {
        if (values.length > this.maxEmbeddingsPerCall) {
            throw new TooManyEmbeddingValuesForCallError({
                provider: this.provider,
                modelId: this.modelId,
                maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
                values
            });
        }
        const { responseHeaders, value: response } = await postJsonToApi({
            url: this.config.url({
                path: "/embeddings",
                modelId: this.modelId
            }),
            headers: combineHeaders(this.config.headers(), headers),
            body: {
                model: this.modelId,
                input: values,
                encoding_format: "float",
                dimensions: this.settings.dimensions,
                user: this.settings.user
            },
            failedResponseHandler: openaiFailedResponseHandler,
            successfulResponseHandler: createJsonResponseHandler(openaiTextEmbeddingResponseSchema),
            abortSignal,
            fetch: this.config.fetch
        });
        return {
            embeddings: response.data.map((item)=>item.embedding),
            usage: response.usage ? {
                tokens: response.usage.prompt_tokens
            } : void 0,
            rawResponse: {
                headers: responseHeaders
            }
        };
    }
};
openaiTextEmbeddingResponseSchema = external_exports.object({
    data: external_exports.array(external_exports.object({
        embedding: external_exports.array(external_exports.number())
    })),
    usage: external_exports.object({
        prompt_tokens: external_exports.number()
    }).nullish()
});
modelMaxImagesPerCall = {
    "dall-e-3": 1,
    "dall-e-2": 10,
    "gpt-image-1": 10
};
hasDefaultResponseFormat = new Set([
    "gpt-image-1"
]);
OpenAIImageModel = class {
    constructor(modelId, settings, config2){
        this.modelId = modelId;
        this.settings = settings;
        this.config = config2;
        this.specificationVersion = "v1";
    }
    get maxImagesPerCall() {
        var _a18, _b2;
        return (_b2 = (_a18 = this.settings.maxImagesPerCall) != null ? _a18 : modelMaxImagesPerCall[this.modelId]) != null ? _b2 : 1;
    }
    get provider() {
        return this.config.provider;
    }
    async doGenerate({ prompt, n, size, aspectRatio, seed, providerOptions, headers, abortSignal }) {
        var _a18, _b2, _c, _d;
        const warnings = [];
        if (aspectRatio != null) {
            warnings.push({
                type: "unsupported-setting",
                setting: "aspectRatio",
                details: "This model does not support aspect ratio. Use `size` instead."
            });
        }
        if (seed != null) {
            warnings.push({
                type: "unsupported-setting",
                setting: "seed"
            });
        }
        const currentDate = (_c = (_b2 = (_a18 = this.config._internal) == null ? void 0 : _a18.currentDate) == null ? void 0 : _b2.call(_a18)) != null ? _c : new Date();
        const { value: response, responseHeaders } = await postJsonToApi({
            url: this.config.url({
                path: "/images/generations",
                modelId: this.modelId
            }),
            headers: combineHeaders(this.config.headers(), headers),
            body: {
                model: this.modelId,
                prompt,
                n,
                size,
                ...(_d = providerOptions.openai) != null ? _d : {},
                ...!hasDefaultResponseFormat.has(this.modelId) ? {
                    response_format: "b64_json"
                } : {}
            },
            failedResponseHandler: openaiFailedResponseHandler,
            successfulResponseHandler: createJsonResponseHandler(openaiImageResponseSchema),
            abortSignal,
            fetch: this.config.fetch
        });
        return {
            images: response.data.map((item)=>item.b64_json),
            warnings,
            response: {
                timestamp: currentDate,
                modelId: this.modelId,
                headers: responseHeaders
            }
        };
    }
};
openaiImageResponseSchema = external_exports.object({
    data: external_exports.array(external_exports.object({
        b64_json: external_exports.string()
    }))
});
openAIProviderOptionsSchema = external_exports.object({
    include: external_exports.array(external_exports.string()).nullish(),
    language: external_exports.string().nullish(),
    prompt: external_exports.string().nullish(),
    temperature: external_exports.number().min(0).max(1).nullish().default(0),
    timestampGranularities: external_exports.array(external_exports.enum([
        "word",
        "segment"
    ])).nullish().default([
        "segment"
    ])
});
languageMap = {
    afrikaans: "af",
    arabic: "ar",
    armenian: "hy",
    azerbaijani: "az",
    belarusian: "be",
    bosnian: "bs",
    bulgarian: "bg",
    catalan: "ca",
    chinese: "zh",
    croatian: "hr",
    czech: "cs",
    danish: "da",
    dutch: "nl",
    english: "en",
    estonian: "et",
    finnish: "fi",
    french: "fr",
    galician: "gl",
    german: "de",
    greek: "el",
    hebrew: "he",
    hindi: "hi",
    hungarian: "hu",
    icelandic: "is",
    indonesian: "id",
    italian: "it",
    japanese: "ja",
    kannada: "kn",
    kazakh: "kk",
    korean: "ko",
    latvian: "lv",
    lithuanian: "lt",
    macedonian: "mk",
    malay: "ms",
    marathi: "mr",
    maori: "mi",
    nepali: "ne",
    norwegian: "no",
    persian: "fa",
    polish: "pl",
    portuguese: "pt",
    romanian: "ro",
    russian: "ru",
    serbian: "sr",
    slovak: "sk",
    slovenian: "sl",
    spanish: "es",
    swahili: "sw",
    swedish: "sv",
    tagalog: "tl",
    tamil: "ta",
    thai: "th",
    turkish: "tr",
    ukrainian: "uk",
    urdu: "ur",
    vietnamese: "vi",
    welsh: "cy"
};
OpenAITranscriptionModel = class {
    constructor(modelId, config2){
        this.modelId = modelId;
        this.config = config2;
        this.specificationVersion = "v1";
    }
    get provider() {
        return this.config.provider;
    }
    getArgs({ audio, mediaType, providerOptions }) {
        var _a18, _b2, _c, _d, _e2;
        const warnings = [];
        const openAIOptions = parseProviderOptions({
            provider: "openai",
            providerOptions,
            schema: openAIProviderOptionsSchema
        });
        const formData = new FormData();
        const blob = audio instanceof Uint8Array ? new Blob([
            audio
        ]) : new Blob([
            convertBase64ToUint8Array(audio)
        ]);
        formData.append("model", this.modelId);
        formData.append("file", new File([
            blob
        ], "audio", {
            type: mediaType
        }));
        if (openAIOptions) {
            const transcriptionModelOptions = {
                include: (_a18 = openAIOptions.include) != null ? _a18 : void 0,
                language: (_b2 = openAIOptions.language) != null ? _b2 : void 0,
                prompt: (_c = openAIOptions.prompt) != null ? _c : void 0,
                temperature: (_d = openAIOptions.temperature) != null ? _d : void 0,
                timestamp_granularities: (_e2 = openAIOptions.timestampGranularities) != null ? _e2 : void 0
            };
            for(const key in transcriptionModelOptions){
                const value = transcriptionModelOptions[key];
                if (value !== void 0) {
                    formData.append(key, String(value));
                }
            }
        }
        return {
            formData,
            warnings
        };
    }
    async doGenerate(options2) {
        var _a18, _b2, _c, _d, _e2, _f;
        const currentDate = (_c = (_b2 = (_a18 = this.config._internal) == null ? void 0 : _a18.currentDate) == null ? void 0 : _b2.call(_a18)) != null ? _c : new Date();
        const { formData, warnings } = this.getArgs(options2);
        const { value: response, responseHeaders, rawValue: rawResponse } = await postFormDataToApi({
            url: this.config.url({
                path: "/audio/transcriptions",
                modelId: this.modelId
            }),
            headers: combineHeaders(this.config.headers(), options2.headers),
            formData,
            failedResponseHandler: openaiFailedResponseHandler,
            successfulResponseHandler: createJsonResponseHandler(openaiTranscriptionResponseSchema),
            abortSignal: options2.abortSignal,
            fetch: this.config.fetch
        });
        const language = response.language != null && response.language in languageMap ? languageMap[response.language] : void 0;
        return {
            text: response.text,
            segments: (_e2 = (_d = response.words) == null ? void 0 : _d.map((word)=>({
                    text: word.word,
                    startSecond: word.start,
                    endSecond: word.end
                }))) != null ? _e2 : [],
            language,
            durationInSeconds: (_f = response.duration) != null ? _f : void 0,
            warnings,
            response: {
                timestamp: currentDate,
                modelId: this.modelId,
                headers: responseHeaders,
                body: rawResponse
            }
        };
    }
};
openaiTranscriptionResponseSchema = external_exports.object({
    text: external_exports.string(),
    language: external_exports.string().nullish(),
    duration: external_exports.number().nullish(),
    words: external_exports.array(external_exports.object({
        word: external_exports.string(),
        start: external_exports.number(),
        end: external_exports.number()
    })).nullish()
});
OpenAIResponsesLanguageModel = class {
    constructor(modelId, config2){
        this.specificationVersion = "v1";
        this.defaultObjectGenerationMode = "json";
        this.supportsStructuredOutputs = true;
        this.modelId = modelId;
        this.config = config2;
    }
    get provider() {
        return this.config.provider;
    }
    getArgs({ mode, maxTokens, temperature, stopSequences, topP, topK, presencePenalty, frequencyPenalty, seed, prompt, providerMetadata, responseFormat }) {
        var _a18, _b2, _c;
        const warnings = [];
        const modelConfig = getResponsesModelConfig(this.modelId);
        const type2 = mode.type;
        if (topK != null) {
            warnings.push({
                type: "unsupported-setting",
                setting: "topK"
            });
        }
        if (seed != null) {
            warnings.push({
                type: "unsupported-setting",
                setting: "seed"
            });
        }
        if (presencePenalty != null) {
            warnings.push({
                type: "unsupported-setting",
                setting: "presencePenalty"
            });
        }
        if (frequencyPenalty != null) {
            warnings.push({
                type: "unsupported-setting",
                setting: "frequencyPenalty"
            });
        }
        if (stopSequences != null) {
            warnings.push({
                type: "unsupported-setting",
                setting: "stopSequences"
            });
        }
        const { messages, warnings: messageWarnings } = convertToOpenAIResponsesMessages({
            prompt,
            systemMessageMode: modelConfig.systemMessageMode
        });
        warnings.push(...messageWarnings);
        const openaiOptions = parseProviderOptions({
            provider: "openai",
            providerOptions: providerMetadata,
            schema: openaiResponsesProviderOptionsSchema
        });
        const isStrict = (_a18 = openaiOptions == null ? void 0 : openaiOptions.strictSchemas) != null ? _a18 : true;
        const baseArgs = {
            model: this.modelId,
            input: messages,
            temperature,
            top_p: topP,
            max_output_tokens: maxTokens,
            ...(responseFormat == null ? void 0 : responseFormat.type) === "json" && {
                text: {
                    format: responseFormat.schema != null ? {
                        type: "json_schema",
                        strict: isStrict,
                        name: (_b2 = responseFormat.name) != null ? _b2 : "response",
                        description: responseFormat.description,
                        schema: responseFormat.schema
                    } : {
                        type: "json_object"
                    }
                }
            },
            metadata: openaiOptions == null ? void 0 : openaiOptions.metadata,
            parallel_tool_calls: openaiOptions == null ? void 0 : openaiOptions.parallelToolCalls,
            previous_response_id: openaiOptions == null ? void 0 : openaiOptions.previousResponseId,
            store: openaiOptions == null ? void 0 : openaiOptions.store,
            user: openaiOptions == null ? void 0 : openaiOptions.user,
            instructions: openaiOptions == null ? void 0 : openaiOptions.instructions,
            ...modelConfig.isReasoningModel && ((openaiOptions == null ? void 0 : openaiOptions.reasoningEffort) != null || (openaiOptions == null ? void 0 : openaiOptions.reasoningSummary) != null) && {
                reasoning: {
                    ...(openaiOptions == null ? void 0 : openaiOptions.reasoningEffort) != null && {
                        effort: openaiOptions.reasoningEffort
                    },
                    ...(openaiOptions == null ? void 0 : openaiOptions.reasoningSummary) != null && {
                        summary: openaiOptions.reasoningSummary
                    }
                }
            },
            ...modelConfig.requiredAutoTruncation && {
                truncation: "auto"
            }
        };
        if (modelConfig.isReasoningModel) {
            if (baseArgs.temperature != null) {
                baseArgs.temperature = void 0;
                warnings.push({
                    type: "unsupported-setting",
                    setting: "temperature",
                    details: "temperature is not supported for reasoning models"
                });
            }
            if (baseArgs.top_p != null) {
                baseArgs.top_p = void 0;
                warnings.push({
                    type: "unsupported-setting",
                    setting: "topP",
                    details: "topP is not supported for reasoning models"
                });
            }
        }
        switch(type2){
            case "regular":
                {
                    const { tools, tool_choice, toolWarnings } = prepareResponsesTools({
                        mode,
                        strict: isStrict
                    });
                    return {
                        args: {
                            ...baseArgs,
                            tools,
                            tool_choice
                        },
                        warnings: [
                            ...warnings,
                            ...toolWarnings
                        ]
                    };
                }
            case "object-json":
                {
                    return {
                        args: {
                            ...baseArgs,
                            text: {
                                format: mode.schema != null ? {
                                    type: "json_schema",
                                    strict: isStrict,
                                    name: (_c = mode.name) != null ? _c : "response",
                                    description: mode.description,
                                    schema: mode.schema
                                } : {
                                    type: "json_object"
                                }
                            }
                        },
                        warnings
                    };
                }
            case "object-tool":
                {
                    return {
                        args: {
                            ...baseArgs,
                            tool_choice: {
                                type: "function",
                                name: mode.tool.name
                            },
                            tools: [
                                {
                                    type: "function",
                                    name: mode.tool.name,
                                    description: mode.tool.description,
                                    parameters: mode.tool.parameters,
                                    strict: isStrict
                                }
                            ]
                        },
                        warnings
                    };
                }
            default:
                {
                    const _exhaustiveCheck = type2;
                    throw new Error(`Unsupported type: ${_exhaustiveCheck}`);
                }
        }
    }
    async doGenerate(options2) {
        var _a18, _b2, _c, _d, _e2, _f, _g;
        const { args: body, warnings } = this.getArgs(options2);
        const url2 = this.config.url({
            path: "/responses",
            modelId: this.modelId
        });
        const { responseHeaders, value: response, rawValue: rawResponse } = await postJsonToApi({
            url: url2,
            headers: combineHeaders(this.config.headers(), options2.headers),
            body,
            failedResponseHandler: openaiFailedResponseHandler,
            successfulResponseHandler: createJsonResponseHandler(external_exports.object({
                id: external_exports.string(),
                created_at: external_exports.number(),
                error: external_exports.object({
                    message: external_exports.string(),
                    code: external_exports.string()
                }).nullish(),
                model: external_exports.string(),
                output: external_exports.array(external_exports.discriminatedUnion("type", [
                    external_exports.object({
                        type: external_exports.literal("message"),
                        role: external_exports.literal("assistant"),
                        content: external_exports.array(external_exports.object({
                            type: external_exports.literal("output_text"),
                            text: external_exports.string(),
                            annotations: external_exports.array(external_exports.object({
                                type: external_exports.literal("url_citation"),
                                start_index: external_exports.number(),
                                end_index: external_exports.number(),
                                url: external_exports.string(),
                                title: external_exports.string()
                            }))
                        }))
                    }),
                    external_exports.object({
                        type: external_exports.literal("function_call"),
                        call_id: external_exports.string(),
                        name: external_exports.string(),
                        arguments: external_exports.string()
                    }),
                    external_exports.object({
                        type: external_exports.literal("web_search_call")
                    }),
                    external_exports.object({
                        type: external_exports.literal("computer_call")
                    }),
                    external_exports.object({
                        type: external_exports.literal("reasoning"),
                        summary: external_exports.array(external_exports.object({
                            type: external_exports.literal("summary_text"),
                            text: external_exports.string()
                        }))
                    })
                ])),
                incomplete_details: external_exports.object({
                    reason: external_exports.string()
                }).nullable(),
                usage: usageSchema
            })),
            abortSignal: options2.abortSignal,
            fetch: this.config.fetch
        });
        if (response.error) {
            throw new APICallError({
                message: response.error.message,
                url: url2,
                requestBodyValues: body,
                statusCode: 400,
                responseHeaders,
                responseBody: rawResponse,
                isRetryable: false
            });
        }
        const outputTextElements = response.output.filter((output)=>output.type === "message").flatMap((output)=>output.content).filter((content)=>content.type === "output_text");
        const toolCalls = response.output.filter((output)=>output.type === "function_call").map((output)=>({
                toolCallType: "function",
                toolCallId: output.call_id,
                toolName: output.name,
                args: output.arguments
            }));
        const reasoningSummary = (_b2 = (_a18 = response.output.find((item)=>item.type === "reasoning")) == null ? void 0 : _a18.summary) != null ? _b2 : null;
        return {
            text: outputTextElements.map((content)=>content.text).join("\n"),
            sources: outputTextElements.flatMap((content)=>content.annotations.map((annotation)=>{
                    var _a24, _b22, _c2;
                    return {
                        sourceType: "url",
                        id: (_c2 = (_b22 = (_a24 = this.config).generateId) == null ? void 0 : _b22.call(_a24)) != null ? _c2 : generateId(),
                        url: annotation.url,
                        title: annotation.title
                    };
                })),
            finishReason: mapOpenAIResponseFinishReason({
                finishReason: (_c = response.incomplete_details) == null ? void 0 : _c.reason,
                hasToolCalls: toolCalls.length > 0
            }),
            toolCalls: toolCalls.length > 0 ? toolCalls : void 0,
            reasoning: reasoningSummary ? reasoningSummary.map((summary)=>({
                    type: "text",
                    text: summary.text
                })) : void 0,
            usage: {
                promptTokens: response.usage.input_tokens,
                completionTokens: response.usage.output_tokens
            },
            rawCall: {
                rawPrompt: void 0,
                rawSettings: {}
            },
            rawResponse: {
                headers: responseHeaders,
                body: rawResponse
            },
            request: {
                body: JSON.stringify(body)
            },
            response: {
                id: response.id,
                timestamp: new Date(response.created_at * 1e3),
                modelId: response.model
            },
            providerMetadata: {
                openai: {
                    responseId: response.id,
                    cachedPromptTokens: (_e2 = (_d = response.usage.input_tokens_details) == null ? void 0 : _d.cached_tokens) != null ? _e2 : null,
                    reasoningTokens: (_g = (_f = response.usage.output_tokens_details) == null ? void 0 : _f.reasoning_tokens) != null ? _g : null
                }
            },
            warnings
        };
    }
    async doStream(options2) {
        const { args: body, warnings } = this.getArgs(options2);
        const { responseHeaders, value: response } = await postJsonToApi({
            url: this.config.url({
                path: "/responses",
                modelId: this.modelId
            }),
            headers: combineHeaders(this.config.headers(), options2.headers),
            body: {
                ...body,
                stream: true
            },
            failedResponseHandler: openaiFailedResponseHandler,
            successfulResponseHandler: createEventSourceResponseHandler(openaiResponsesChunkSchema),
            abortSignal: options2.abortSignal,
            fetch: this.config.fetch
        });
        const self2 = this;
        let finishReason = "unknown";
        let promptTokens = NaN;
        let completionTokens = NaN;
        let cachedPromptTokens = null;
        let reasoningTokens = null;
        let responseId = null;
        const ongoingToolCalls = {};
        let hasToolCalls = false;
        const getToolCallArgsTextDelta = (toolCall, delta)=>{
            if (delta.length === 0) {
                return "";
            }
            if (toolCall.argsText.length === 0) {
                return delta;
            }
            if (delta.startsWith(toolCall.argsText)) {
                return delta.slice(toolCall.argsText.length);
            }
            return delta;
        };
        const getCompletedToolCallArgsText = (toolCall, argumentsText)=>{
            if (toolCall.argsText.length === 0 || argumentsText === toolCall.argsText) {
                return argumentsText;
            }
            if (argumentsText.startsWith(toolCall.argsText)) {
                const suffix = argumentsText.slice(toolCall.argsText.length);
                if (suffix.length === 0 || toolCall.argsText.endsWith(suffix)) {
                    return toolCall.argsText;
                }
            }
            return argumentsText;
        };
        return {
            stream: response.pipeThrough(new TransformStream({
                transform (chunk, controller) {
                    var _a18, _b2, _c, _d, _e2, _f, _g, _h;
                    if (!chunk.success) {
                        finishReason = "error";
                        controller.enqueue({
                            type: "error",
                            error: chunk.error
                        });
                        return;
                    }
                    if (self2.config.onResponseEvent != null) {
                        self2.config.onResponseEvent(chunk.rawValue);
                    }
                    const value = chunk.value;
                    if (isResponseOutputItemAddedChunk(value)) {
                        if (value.item.type === "function_call") {
                            ongoingToolCalls[value.output_index] = {
                                toolName: value.item.name,
                                toolCallId: value.item.call_id,
                                argsText: value.item.arguments
                            };
                            if (value.item.arguments.length > 0) {
                                controller.enqueue({
                                    type: "tool-call-delta",
                                    toolCallType: "function",
                                    toolCallId: value.item.call_id,
                                    toolName: value.item.name,
                                    argsTextDelta: value.item.arguments
                                });
                            }
                        }
                    } else if (isResponseFunctionCallArgumentsDeltaChunk(value)) {
                        const toolCall = ongoingToolCalls[value.output_index];
                        if (toolCall != null) {
                            const argsTextDelta = getToolCallArgsTextDelta(toolCall, value.delta);
                            toolCall.argsText += argsTextDelta;
                            if (argsTextDelta.length > 0) {
                                controller.enqueue({
                                    type: "tool-call-delta",
                                    toolCallType: "function",
                                    toolCallId: toolCall.toolCallId,
                                    toolName: toolCall.toolName,
                                    argsTextDelta
                                });
                            }
                        }
                    } else if (isResponseCreatedChunk(value)) {
                        responseId = value.response.id;
                        controller.enqueue({
                            type: "response-metadata",
                            id: value.response.id,
                            timestamp: new Date(value.response.created_at * 1e3),
                            modelId: value.response.model
                        });
                    } else if (isTextDeltaChunk(value)) {
                        controller.enqueue({
                            type: "text-delta",
                            textDelta: value.delta
                        });
                    } else if (isResponseReasoningSummaryTextDeltaChunk(value)) {
                        controller.enqueue({
                            type: "reasoning",
                            textDelta: value.delta
                        });
                    } else if (isResponseOutputItemDoneChunk(value) && value.item.type === "function_call") {
                        const toolCall = ongoingToolCalls[value.output_index];
                        ongoingToolCalls[value.output_index] = void 0;
                        hasToolCalls = true;
                        controller.enqueue({
                            type: "tool-call",
                            toolCallType: "function",
                            toolCallId: value.item.call_id,
                            toolName: value.item.name,
                            args: toolCall != null ? getCompletedToolCallArgsText(toolCall, value.item.arguments) : value.item.arguments
                        });
                    } else if (isResponseFinishedChunk(value)) {
                        finishReason = mapOpenAIResponseFinishReason({
                            finishReason: (_a18 = value.response.incomplete_details) == null ? void 0 : _a18.reason,
                            hasToolCalls
                        });
                        promptTokens = value.response.usage.input_tokens;
                        completionTokens = value.response.usage.output_tokens;
                        cachedPromptTokens = (_c = (_b2 = value.response.usage.input_tokens_details) == null ? void 0 : _b2.cached_tokens) != null ? _c : cachedPromptTokens;
                        reasoningTokens = (_e2 = (_d = value.response.usage.output_tokens_details) == null ? void 0 : _d.reasoning_tokens) != null ? _e2 : reasoningTokens;
                    } else if (isResponseAnnotationAddedChunk(value)) {
                        controller.enqueue({
                            type: "source",
                            source: {
                                sourceType: "url",
                                id: (_h = (_g = (_f = self2.config).generateId) == null ? void 0 : _g.call(_f)) != null ? _h : generateId(),
                                url: value.annotation.url,
                                title: value.annotation.title
                            }
                        });
                    } else if (isErrorChunk(value)) {
                        controller.enqueue({
                            type: "error",
                            error: value
                        });
                    }
                },
                flush (controller) {
                    controller.enqueue({
                        type: "finish",
                        finishReason,
                        usage: {
                            promptTokens,
                            completionTokens
                        },
                        ...(cachedPromptTokens != null || reasoningTokens != null) && {
                            providerMetadata: {
                                openai: {
                                    responseId,
                                    cachedPromptTokens,
                                    reasoningTokens
                                }
                            }
                        }
                    });
                }
            })),
            rawCall: {
                rawPrompt: void 0,
                rawSettings: {}
            },
            rawResponse: {
                headers: responseHeaders
            },
            request: {
                body: JSON.stringify(body)
            },
            warnings
        };
    }
};
usageSchema = external_exports.object({
    input_tokens: external_exports.number(),
    input_tokens_details: external_exports.object({
        cached_tokens: external_exports.number().nullish()
    }).nullish(),
    output_tokens: external_exports.number(),
    output_tokens_details: external_exports.object({
        reasoning_tokens: external_exports.number().nullish()
    }).nullish()
});
textDeltaChunkSchema = external_exports.object({
    type: external_exports.literal("response.output_text.delta"),
    delta: external_exports.string()
});
responseFinishedChunkSchema = external_exports.object({
    type: external_exports.enum([
        "response.completed",
        "response.incomplete"
    ]),
    response: external_exports.object({
        incomplete_details: external_exports.object({
            reason: external_exports.string()
        }).nullish(),
        usage: usageSchema
    })
});
responseCreatedChunkSchema = external_exports.object({
    type: external_exports.literal("response.created"),
    response: external_exports.object({
        id: external_exports.string(),
        created_at: external_exports.number(),
        model: external_exports.string()
    })
});
responseOutputItemDoneSchema = external_exports.object({
    type: external_exports.literal("response.output_item.done"),
    output_index: external_exports.number(),
    item: external_exports.discriminatedUnion("type", [
        external_exports.object({
            type: external_exports.literal("message")
        }),
        external_exports.object({
            type: external_exports.literal("function_call"),
            id: external_exports.string(),
            call_id: external_exports.string(),
            name: external_exports.string(),
            arguments: external_exports.string(),
            status: external_exports.literal("completed")
        })
    ])
});
responseFunctionCallArgumentsDeltaSchema = external_exports.object({
    type: external_exports.literal("response.function_call_arguments.delta"),
    item_id: external_exports.string(),
    output_index: external_exports.number(),
    delta: external_exports.string()
});
responseOutputItemAddedSchema = external_exports.object({
    type: external_exports.literal("response.output_item.added"),
    output_index: external_exports.number(),
    item: external_exports.discriminatedUnion("type", [
        external_exports.object({
            type: external_exports.literal("message")
        }),
        external_exports.object({
            type: external_exports.literal("function_call"),
            id: external_exports.string(),
            call_id: external_exports.string(),
            name: external_exports.string(),
            arguments: external_exports.string()
        })
    ])
});
responseAnnotationAddedSchema = external_exports.object({
    type: external_exports.literal("response.output_text.annotation.added"),
    annotation: external_exports.object({
        type: external_exports.literal("url_citation"),
        url: external_exports.string(),
        title: external_exports.string()
    })
});
responseReasoningSummaryTextDeltaSchema = external_exports.object({
    type: external_exports.literal("response.reasoning_summary_text.delta"),
    item_id: external_exports.string(),
    output_index: external_exports.number(),
    summary_index: external_exports.number(),
    delta: external_exports.string()
});
errorChunkSchema = external_exports.object({
    type: external_exports.literal("error"),
    code: external_exports.string(),
    message: external_exports.string(),
    param: external_exports.string().nullish(),
    sequence_number: external_exports.number()
});
openaiResponsesChunkSchema = external_exports.union([
    textDeltaChunkSchema,
    responseFinishedChunkSchema,
    responseCreatedChunkSchema,
    responseOutputItemDoneSchema,
    responseFunctionCallArgumentsDeltaSchema,
    responseOutputItemAddedSchema,
    responseAnnotationAddedSchema,
    responseReasoningSummaryTextDeltaSchema,
    errorChunkSchema,
    external_exports.object({
        type: external_exports.string()
    }).passthrough()
]);
openaiResponsesProviderOptionsSchema = external_exports.object({
    metadata: external_exports.any().nullish(),
    parallelToolCalls: external_exports.boolean().nullish(),
    previousResponseId: external_exports.string().nullish(),
    store: external_exports.boolean().nullish(),
    user: external_exports.string().nullish(),
    reasoningEffort: external_exports.string().nullish(),
    strictSchemas: external_exports.boolean().nullish(),
    instructions: external_exports.string().nullish(),
    reasoningSummary: external_exports.string().nullish()
});
WebSearchPreviewParameters = external_exports.object({});
openaiTools = {
    webSearchPreview: webSearchPreviewTool
};
OpenAIProviderOptionsSchema = external_exports.object({
    instructions: external_exports.string().nullish(),
    speed: external_exports.number().min(0.25).max(4).default(1).nullish()
});
OpenAISpeechModel = class {
    constructor(modelId, config2){
        this.modelId = modelId;
        this.config = config2;
        this.specificationVersion = "v1";
    }
    get provider() {
        return this.config.provider;
    }
    getArgs({ text: text4, voice = "alloy", outputFormat = "mp3", speed, instructions, providerOptions }) {
        const warnings = [];
        const openAIOptions = parseProviderOptions({
            provider: "openai",
            providerOptions,
            schema: OpenAIProviderOptionsSchema
        });
        const requestBody = {
            model: this.modelId,
            input: text4,
            voice,
            response_format: "mp3",
            speed,
            instructions
        };
        if (outputFormat) {
            if ([
                "mp3",
                "opus",
                "aac",
                "flac",
                "wav",
                "pcm"
            ].includes(outputFormat)) {
                requestBody.response_format = outputFormat;
            } else {
                warnings.push({
                    type: "unsupported-setting",
                    setting: "outputFormat",
                    details: `Unsupported output format: ${outputFormat}. Using mp3 instead.`
                });
            }
        }
        if (openAIOptions) {
            const speechModelOptions = {};
            for(const key in speechModelOptions){
                const value = speechModelOptions[key];
                if (value !== void 0) {
                    requestBody[key] = value;
                }
            }
        }
        return {
            requestBody,
            warnings
        };
    }
    async doGenerate(options2) {
        var _a18, _b2, _c;
        const currentDate = (_c = (_b2 = (_a18 = this.config._internal) == null ? void 0 : _a18.currentDate) == null ? void 0 : _b2.call(_a18)) != null ? _c : new Date();
        const { requestBody, warnings } = this.getArgs(options2);
        const { value: audio, responseHeaders, rawValue: rawResponse } = await postJsonToApi({
            url: this.config.url({
                path: "/audio/speech",
                modelId: this.modelId
            }),
            headers: combineHeaders(this.config.headers(), options2.headers),
            body: requestBody,
            failedResponseHandler: openaiFailedResponseHandler,
            successfulResponseHandler: createBinaryResponseHandler(),
            abortSignal: options2.abortSignal,
            fetch: this.config.fetch
        });
        return {
            audio,
            warnings,
            request: {
                body: JSON.stringify(requestBody)
            },
            response: {
                timestamp: currentDate,
                modelId: this.modelId,
                headers: responseHeaders,
                body: rawResponse
            }
        };
    }
};
openai = createOpenAI({
    compatibility: "strict"
});

}
