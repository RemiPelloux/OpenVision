import { conversationSearchExecutorResource } from "../../../../../agent-exec/dist/conversation-search.js";
import { init_dist8 } from "../../../../../agent-exec/dist/index.js";
import { createSpan } from "../../../../../agent-kv/dist/controlled.js";
import { ToolCallError, init_common9, withSafeParsedArgs } from "../../common.js";
import { init_dist26 } from "../../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { external_exports } from "../../../../../external_exports.js";
import { createStringResult, createZodAgentTool, generateSeededUuid } from "../../../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { createSearchConversationsToolCall, formatConversationSearchResult } from "../../../../../pdf_worker_exports.js";
import { init_agent_pb } from "../../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { ConversationSearchArgs, ConversationSearchError, ConversationSearchResult, ConversationSearchSource, init_conversation_search_exec_pb } from "../../../../../proto/dist/generated/agent/v1/conversation_search_exec_pb.js";
import { SearchConversationsToolCall, init_search_conversations_tool_pb } from "../../../../../proto/dist/generated/agent/v1/search_conversations_tool_pb.js";
var __addDisposableResource96, __disposeResources96, parametersSchema23, CONVERSATION_SEARCH_SOURCE_LABELS, createSearchConversationsTool;
export { CONVERSATION_SEARCH_SOURCE_LABELS, __addDisposableResource96, __disposeResources96, createSearchConversationsTool, parametersSchema23 };
var __wakaru_init_search_conversations_initialized = false;
export function init_search_conversations() {
if (__wakaru_init_search_conversations_initialized) return;
__wakaru_init_search_conversations_initialized = true;
"use strict";
init_dist8();
init_dist26();
init_dist();
init_agent_pb();
init_conversation_search_exec_pb();
init_search_conversations_tool_pb();
init_zod();
init_common9();
__addDisposableResource96 = function(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose2, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose2 = value[Symbol.asyncDispose];
        }
        if (dispose2 === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose2 = value[Symbol.dispose];
            if (async) inner = dispose2;
        }
        if (typeof dispose2 !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose2 = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value,
            dispose: dispose2,
            async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
};
__disposeResources96 = (function(SuppressedError2) {
    return function(env) {
        function fail3(e) {
            env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s3 = 0;
        function next() {
            while(r = env.stack.pop()){
                try {
                    if (!r.async && s3 === 1) return s3 = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s3 |= 2, Promise.resolve(result).then(next, function(e) {
                            fail3(e);
                            return next();
                        });
                    } else s3 |= 1;
                } catch (e) {
                    fail3(e);
                }
            }
            if (s3 === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function(error3, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error3, e.suppressed = suppressed, e;
});
parametersSchema23 = external_exports.object({
    query: external_exports.string().min(1).describe("One or two keywords, or a short exact phrase in quotes, to search for in conversation titles and visible user/assistant message text. Every unquoted keyword must match the same conversation; use separate searches for additional keywords."),
    limit: external_exports.number().int().min(1).max(100).optional().describe("Maximum number of conversation results to return (1-100). Defaults to 20.")
});
CONVERSATION_SEARCH_SOURCE_LABELS = {
    [ConversationSearchSource.UNSPECIFIED]: "unknown",
    [ConversationSearchSource.LOCAL]: "local",
    [ConversationSearchSource.CLOUD_CACHE]: "cloud-cache"
};
createSearchConversationsTool = (resourceAccessor)=>{
    const conversationSearchExecutor = resourceAccessor.get(conversationSearchExecutorResource);
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource96(env_1, createSpan(parentCtx.withName("searchConversationsExecute")), false);
            const args = new ConversationSearchArgs({
                query: rawArgs.query,
                toolCallId: meta.toolCallId,
                limit: rawArgs.limit
            });
            const baseToolCall = new SearchConversationsToolCall({
                args
            });
            return await interactionHandler.executeToolCall(spanCtxt.ctx, createSearchConversationsToolCall(baseToolCall), meta.toolCallId, async (ctx)=>{
                const execId = generateSeededUuid(meta.toolCallId);
                const execResult = await conversationSearchExecutor.execute(ctx, args, {
                    execId,
                    hookContextCollector: meta.hookContextCollector
                });
                switch(execResult.result.case){
                    case "success":
                        return execResult;
                    case "error":
                        {
                            const error3 = execResult.result.value.error;
                            throw new ToolCallError({
                                clientVisibleErrorMessage: error3,
                                modelVisibleErrorMessage: error3,
                                error: error3
                            });
                        }
                    default:
                        throw new Error(`Unexpected result case: ${execResult.result.case}`);
                }
            }, (result)=>createSearchConversationsToolCall(new SearchConversationsToolCall({
                    ...baseToolCall,
                    result
                })), meta.hookContextCollector);
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources96(env_1);
        }
    };
    return createZodAgentTool("SEARCH_CONVERSATIONS", {
        name: "SearchConversations",
        descriptionGenerator: (_props)=>"Search a fast local index of the user's local conversations and cached cloud agent conversations. Every unquoted keyword must match the same conversation, so queries with many keywords often return no results; run several searches with 1\u20132 keywords each instead. Use quotes only for a short exact phrase. Returns conversation IDs, titles, and short snippets\u2014not full transcripts. Some cloud agent conversations may not be searchable.",
        parameters: parametersSchema23,
        execute: withSafeParsedArgs(parametersSchema23, execute, createSearchConversationsToolCall(new SearchConversationsToolCall())),
        render: async (_ctx, result, _props)=>createStringResult(formatConversationSearchResult(result)),
        serializeError: (error3)=>{
            const errorMessage4 = error3 instanceof ToolCallError ? error3.modelVisibleErrorMessage : "Conversation search failed";
            return createSearchConversationsToolCall(new SearchConversationsToolCall({
                result: new ConversationSearchResult({
                    result: {
                        case: "error",
                        value: new ConversationSearchError({
                            error: errorMessage4
                        })
                    }
                })
            }));
        }
    });
};

}
