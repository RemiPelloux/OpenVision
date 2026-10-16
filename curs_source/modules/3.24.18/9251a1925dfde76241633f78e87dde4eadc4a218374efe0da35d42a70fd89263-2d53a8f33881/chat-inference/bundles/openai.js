import { BasePromptBuilder, BasePromptExecutor, init_base3 } from "./base.js";
import { init_prompt_executor } from "./prompt-executor.js";
import { createToolRecord, streamText } from "../../mcp_sandbox_policy_exports.js";
import { init_dist25 } from "../../node_modules/.pnpm/_077e680643459f7d1d564b303258f2e9/node_modules/ai/dist/index.mjs";
var OpenAIPromptBuilder, OpenAIPromptExecutor, OpenAIPromptSession, OpenAISessionProvider;
export { OpenAIPromptBuilder, OpenAIPromptExecutor, OpenAIPromptSession, OpenAISessionProvider };
var __wakaru_init_openai_initialized = false;
export function init_openai() {
if (__wakaru_init_openai_initialized) return;
__wakaru_init_openai_initialized = true;
"use strict";
init_dist25();
init_base3();
init_prompt_executor();
OpenAIPromptBuilder = class extends BasePromptBuilder {
};
OpenAIPromptExecutor = class extends BasePromptExecutor {
    constructor(builder, model, thinkingDetails, providerOptions){
        super(builder);
        this.model = model;
        this.thinkingDetails = thinkingDetails;
        this.providerOptions = providerOptions;
    }
    stream(ctx, invocationId, tools, options2) {
        const result = streamText({
            model: this.model,
            messages: this.requestMessages(),
            tools: createToolRecord(tools),
            toolChoice: options2.toolChoice,
            temperature: 1,
            providerOptions: this.providerOptions,
            abortSignal: ctx.signal
        });
        return {
            fullStream: result.fullStream,
            response: result.response,
            providerMetadata: result.providerMetadata,
            usage: result.usage,
            extendedUsage: (async ()=>{
                const usage = await result.usage;
                return {
                    inputTokens: usage.promptTokens,
                    outputTokens: usage.completionTokens,
                    cacheReadTokens: 0,
                    cacheWriteTokens: 0,
                    maxTokens: 0
                };
            })(),
            invocationId: Promise.resolve(invocationId ?? crypto.randomUUID())
        };
    }
};
OpenAIPromptSession = class {
    constructor(model, middleware, thinkingDetails, providerOptions){
        this.model = model;
        this.middleware = middleware;
        this.thinkingDetails = thinkingDetails;
        this.providerOptions = providerOptions;
    }
    getExecutor(state) {
        const builder = new OpenAIPromptBuilder(state);
        const executor = new OpenAIPromptExecutor(builder, this.model, this.thinkingDetails, this.providerOptions);
        return this.middleware ? this.middleware(executor) : executor;
    }
    getModelId() {
        return this.model.modelId;
    }
};
OpenAISessionProvider = class {
    constructor(model, thinkingDetails, providerOptions){
        this.model = model;
        this.thinkingDetails = thinkingDetails;
        this.providerOptions = providerOptions;
    }
    getSession(middleware) {
        return new OpenAIPromptSession(this.model, middleware, this.thinkingDetails, this.providerOptions);
    }
    getProviderName() {
        return "openai";
    }
    getModelId() {
        return this.model.modelId;
    }
    getThinkingDetails() {
        return this.thinkingDetails;
    }
};

}
