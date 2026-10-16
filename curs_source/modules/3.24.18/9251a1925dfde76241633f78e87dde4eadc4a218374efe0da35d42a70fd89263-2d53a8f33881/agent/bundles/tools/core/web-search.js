import { init_dist7 } from "../../../../agent-core/dist/index.js";
import { init_dist8 } from "../../../../agent-exec/dist/index.js";
import { init_node2 } from "../../../../agent-exec/dist/node.js";
import { createSpan } from "../../../../agent-kv/dist/controlled.js";
import { init_shim } from "../../shims/shim.js";
import { ToolCallError, ToolCallRejectedError, init_common9, withSafeParsedArgs } from "../common.js";
import { init_core5 } from "../core.js";
import { init_remote_hooks } from "./remote-hooks.js";
import { init_dist26 } from "../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { queryWebSearch } from "../../../../dist_exports.js";
import { external_exports } from "../../../../external_exports.js";
import { createStringResult, createZodAgentTool, defineShim, reportShim, withRemoteHooks } from "../../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { WebSearchArgs, WebSearchError, WebSearchRejected, WebSearchResult, WebSearchSuccess, WebSearchToolCall, init_web_search_tool_pb } from "../../../../proto/dist/generated/agent/v1/web_search_tool_pb.js";
import { applyUpdatedHookInput, buildReferencesFromServiceResult, classifyWebSearchProviderError, createHookInput, createWebSearchToolCall, getBaseDescription, getParametersSchema6, getToolName8, normalizeArgs, resultToString9 } from "../../../../tree_chunk_napi_exports.js";
import { init_dist3 } from "../../../../utils/dist/index.js";
var __addDisposableResource102, __disposeResources102, API_REQUEST_FAILED_STATUS_REGEX, searchTermAlias, exaParametersSchema, NO_DISK_INLINE_CAP_CHARS, WEB_SEARCH_MAX_FILE_SIZE, createWebSearchTool;
export { API_REQUEST_FAILED_STATUS_REGEX, NO_DISK_INLINE_CAP_CHARS, WEB_SEARCH_MAX_FILE_SIZE, __addDisposableResource102, __disposeResources102, createWebSearchTool, exaParametersSchema, searchTermAlias };
var __wakaru_init_web_search_initialized = false;
export function init_web_search() {
if (__wakaru_init_web_search_initialized) return;
__wakaru_init_web_search_initialized = true;
"use strict";
init_dist7();
init_dist8();
init_node2();
init_dist26();
init_dist();
init_agent_pb();
init_web_search_tool_pb();
init_dist3();
init_zod();
init_shim();
init_common9();
init_core5();
init_remote_hooks();
__addDisposableResource102 = function(env, value, async) {
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
__disposeResources102 = (function(SuppressedError2) {
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
API_REQUEST_FAILED_STATUS_REGEX = /\bAPI request failed:\s*(\d{3})\b/i;
searchTermAlias = defineShim({
    name: "web_search_term_alias"
});
exaParametersSchema = external_exports.preprocess((raw)=>{
    if (raw === null || typeof raw !== "object" || Array.isArray(raw)) {
        return raw;
    }
    const input = raw;
    if (input.search_term === void 0) {
        const alias = typeof input.query === "string" ? input.query : typeof input.searchTerm === "string" ? input.searchTerm : void 0;
        if (alias !== void 0) {
            const { query, searchTerm, ...rest } = input;
            return reportShim(searchTermAlias.applied({
                ...rest,
                search_term: alias
            }, {
                log: {
                    alias: typeof query === "string" ? "query" : "searchTerm"
                }
            })).value;
        }
    }
    return input;
}, external_exports.object({
    search_term: external_exports.string().describe("The search term to look up on the web. Be specific and include relevant keywords for better results. For technical queries, include version numbers or dates if relevant."),
    explanation: external_exports.string().optional().describe("One sentence explanation as to why this tool is being used, and how it contributes to the goal.")
}).transform((data)=>({
        variant: "exa",
        search_term: data.search_term,
        explanation: data.explanation
    })));
NO_DISK_INLINE_CAP_CHARS = 3e4;
WEB_SEARCH_MAX_FILE_SIZE = 1024 * 1024 * 5;
createWebSearchTool = (webSearchService, promptVersion, options2)=>{
    promptVersion = promptVersion ?? "latest";
    const variant = options2?.variant ?? "exa";
    const parametersSchema29 = getParametersSchema6(variant);
    const diskWriteCtx = options2?.projectFolder !== void 0 && options2?.resourceAccessor !== void 0 ? {
        projectFolder: options2.projectFolder,
        osPlatform: options2.osPlatform,
        resourceAccessor: options2.resourceAccessor
    } : void 0;
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource102(env_1, createSpan(parentCtx.withName("webSearchExecute")), false);
            const executeCore = async (ctx, args)=>{
                const normalized = normalizeArgs(args);
                const searchArgs = new WebSearchArgs({
                    searchTerm: normalized.searchTerm,
                    toolCallId: meta.toolCallId
                });
                const response = await queryWebSearch(interactionHandler.listener, ctx, searchArgs);
                if (response.result.case === "rejected") {
                    throw new ToolCallRejectedError(response.result.value.reason || "User rejected the web search");
                }
                const baseToolCall = new WebSearchToolCall({
                    args: searchArgs,
                    result: void 0
                });
                return await interactionHandler.executeToolCall(ctx, createWebSearchToolCall(baseToolCall), meta.toolCallId, async (innerCtx)=>{
                    let serviceResult;
                    try {
                        serviceResult = await webSearchService(innerCtx, normalized);
                    } catch (error3) {
                        throw classifyWebSearchProviderError(error3) ?? error3;
                    }
                    const references = await buildReferencesFromServiceResult(innerCtx, serviceResult, meta.toolCallId, diskWriteCtx);
                    return new WebSearchResult({
                        result: {
                            case: "success",
                            value: new WebSearchSuccess({
                                references
                            })
                        }
                    });
                }, (result)=>createWebSearchToolCall(new WebSearchToolCall({
                        ...baseToolCall,
                        result
                    })), meta.hookContextCollector);
            };
            const enableHookExec = Boolean(options2?.enableExecuteHookExec);
            if (options2?.resourceAccessor && enableHookExec) {
                const remoteHookOptions = {
                    resourceAccessor: options2.resourceAccessor,
                    enableExecuteHookExec: options2.enableExecuteHookExec,
                    configuredSteps: options2.configuredSteps,
                    model: options2.model,
                    hookContextCollector: meta.hookContextCollector
                };
                const wrappedExecute = withRemoteHooks({
                    executeFn: executeCore,
                    config: {
                        toolName: "WebSearch",
                        createToolInput: createHookInput,
                        applyUpdatedInput: applyUpdatedHookInput,
                        createRejectedResult: (_args, reason)=>new WebSearchResult({
                                result: {
                                    case: "rejected",
                                    value: new WebSearchRejected({
                                        reason
                                    })
                                }
                            }),
                        createSuccessOutput: (_args, result)=>{
                            const references = result.result.case === "success" ? result.result.value.references.map((ref)=>({
                                    title: ref.title,
                                    url: ref.url,
                                    chunk: ref.chunk
                                })) : [];
                            return {
                                status: "success",
                                references_count: references.length,
                                content: references
                            };
                        },
                        getFailureInfo: (result)=>{
                            switch(result.result.case){
                                case "error":
                                    return {
                                        errorMessage: result.result.value.error,
                                        failureType: "error"
                                    };
                                case "rejected":
                                    return {
                                        errorMessage: result.result.value.reason ?? "Web search rejected",
                                        failureType: "permission_denied"
                                    };
                                case "success":
                                case void 0:
                                    return void 0;
                                default:
                                    {
                                        const _exhaustive = result.result;
                                        throw new Error(`Unhandled result case: ${_exhaustive}`);
                                    }
                            }
                        }
                    },
                    requestContext: {
                        toolCallId: meta.toolCallId
                    },
                    options: remoteHookOptions
                });
                return wrappedExecute(spanCtxt.ctx, rawArgs);
            }
            return executeCore(spanCtxt.ctx, rawArgs);
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources102(env_1);
        }
    };
    const render2 = async (_ctx, result, _props)=>{
        return createStringResult(resultToString9(result));
    };
    const name17 = getToolName8(promptVersion);
    return createZodAgentTool("WEB_SEARCH", {
        name: name17,
        descriptionGenerator: ()=>{
            const base = getBaseDescription(promptVersion, options2?.useMinimalHarness ?? false, options2?.conversationStartedDate);
            return options2?.descriptionSuffix !== void 0 ? `${base}

${options2.descriptionSuffix}` : base;
        },
        parameters: parametersSchema29,
        execute: withSafeParsedArgs(parametersSchema29, execute, createWebSearchToolCall(new WebSearchToolCall())),
        render: render2,
        serializeError: (error3)=>{
            if (error3 instanceof ToolCallRejectedError) {
                return createWebSearchToolCall(new WebSearchToolCall({
                    result: new WebSearchResult({
                        result: {
                            case: "rejected",
                            value: new WebSearchRejected({
                                reason: error3.message
                            })
                        }
                    })
                }));
            }
            const errorMessage4 = error3 instanceof ToolCallError ? error3.clientVisibleErrorMessage : "An error occurred while searching the web";
            return createWebSearchToolCall(new WebSearchToolCall({
                result: new WebSearchResult({
                    result: {
                        case: "error",
                        value: new WebSearchError({
                            error: errorMessage4
                        })
                    }
                })
            }));
        }
    });
};

}
