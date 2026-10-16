import { init_dist7 } from "../../../../agent-core/dist/index.js";
import { createSpan } from "../../../../agent-kv/dist/controlled.js";
import { ToolCallError, ToolCallRejectedError, init_common9, withSafeParsedArgs } from "../common.js";
import { init_core5 } from "../core.js";
import { init_remote_hooks } from "./remote-hooks.js";
import { init_dist26 } from "../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { queryWebSearch } from "../../../../dist_exports.js";
import { external_exports } from "../../../../external_exports.js";
import { createStringResult, createZodAgentTool, withRemoteHooks } from "../../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { WebSearchArgs, init_web_search_tool_pb } from "../../../../proto/dist/generated/agent/v1/web_search_tool_pb.js";
import { XSearchArgs, XSearchCitation, XSearchError, XSearchRejected, XSearchResult, XSearchSuccess, XSearchToolCall, init_x_search_tool_pb } from "../../../../proto/dist/generated/agent/v1/x_search_tool_pb.js";
import { applyUpdatedHookInput2, classifyXSearchServiceError, createHookInput2, createXSearchToolCall, getToolName9, normalizeArgs2, resultToString10 } from "../../../../tree_chunk_napi_exports.js";
var __addDisposableResource103, __disposeResources103, X_SEARCH_MAX_HANDLES, ISO_DATE_PATTERN, XSearchServiceError, handleListSchema, dateSchema, parametersSchema24, DESCRIPTION2, createXSearchTool;
export { DESCRIPTION2, ISO_DATE_PATTERN, XSearchServiceError, X_SEARCH_MAX_HANDLES, __addDisposableResource103, __disposeResources103, createXSearchTool, dateSchema, handleListSchema, parametersSchema24 };
var __wakaru_init_x_search_initialized = false;
export function init_x_search() {
if (__wakaru_init_x_search_initialized) return;
__wakaru_init_x_search_initialized = true;
"use strict";
init_dist7();
init_dist26();
init_dist();
init_agent_pb();
init_web_search_tool_pb();
init_x_search_tool_pb();
init_zod();
init_common9();
init_core5();
init_remote_hooks();
__addDisposableResource103 = function(env, value, async) {
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
__disposeResources103 = (function(SuppressedError2) {
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
X_SEARCH_MAX_HANDLES = 10;
ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
XSearchServiceError = class extends Error {
    constructor(message, providerStatusCode){
        super(message);
        this.providerStatusCode = providerStatusCode;
        this.name = "XSearchServiceError";
    }
};
handleListSchema = (description3)=>external_exports.array(external_exports.string()).max(X_SEARCH_MAX_HANDLES).optional().describe(description3);
dateSchema = (description3)=>external_exports.string().regex(ISO_DATE_PATTERN, "Use the YYYY-MM-DD format.").optional().describe(description3);
parametersSchema24 = external_exports.object({
    query: external_exports.string().trim().min(1, "The query must not be empty.").describe("What to find on X, as a natural-language question or keywords. Include the names, handles, and topics that matter."),
    from_date: dateSchema("Optional start of the date range (YYYY-MM-DD, inclusive). Only posts on or after this date are searched."),
    to_date: dateSchema("Optional end of the date range (YYYY-MM-DD, inclusive). Only posts on or before this date are searched."),
    allowed_x_handles: handleListSchema(`Optional X handles to search exclusively, without the @ (at most ${X_SEARCH_MAX_HANDLES}). Cannot be combined with excluded_x_handles.`),
    excluded_x_handles: handleListSchema(`Optional X handles to leave out of the search, without the @ (at most ${X_SEARCH_MAX_HANDLES}). Cannot be combined with allowed_x_handles.`)
}).refine((args)=>(args.allowed_x_handles?.length ?? 0) === 0 || (args.excluded_x_handles?.length ?? 0) === 0, {
    message: "Use allowed_x_handles or excluded_x_handles, not both.",
    path: [
        "excluded_x_handles"
    ]
});
DESCRIPTION2 = `Search X (formerly Twitter) for posts, accounts, and threads. Returns a summarized answer with links to the posts it is based on.

Use this tool when the user asks what people are saying on X, what a specific account posted, how people reacted to news or a release, or for real-time discussion that web search is unlikely to cover. Prefer web search for documentation and general web pages.

Guidelines:
- Write \`query\` as a natural-language question or keywords, including the names, handles, and topics that matter.
- To search only certain accounts, list them in \`allowed_x_handles\`; to skip accounts, list them in \`excluded_x_handles\`. Use at most ${X_SEARCH_MAX_HANDLES} handles and only one of the two lists.
- To limit the time range, set \`from_date\` and/or \`to_date\` (YYYY-MM-DD).
- Cite the returned post links when you use them in your answer.`;
createXSearchTool = (xSearchService, promptVersion, options2)=>{
    promptVersion = promptVersion ?? "latest";
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource103(env_1, createSpan(parentCtx.withName("xSearchExecute")), false);
            const executeCore = async (ctx, args)=>{
                const serviceArgs = normalizeArgs2(args);
                const approval = await queryWebSearch(interactionHandler.listener, ctx, new WebSearchArgs({
                    searchTerm: serviceArgs.query,
                    toolCallId: meta.toolCallId
                }));
                if (approval.result.case === "rejected") {
                    throw new ToolCallRejectedError(approval.result.value.reason || "User rejected the X search");
                }
                const baseToolCall = new XSearchToolCall({
                    args: new XSearchArgs({
                        query: serviceArgs.query,
                        fromDate: serviceArgs.fromDate,
                        toDate: serviceArgs.toDate,
                        allowedXHandles: serviceArgs.allowedXHandles,
                        excludedXHandles: serviceArgs.excludedXHandles
                    }),
                    result: void 0
                });
                return await interactionHandler.executeToolCall(ctx, createXSearchToolCall(baseToolCall), meta.toolCallId, async (innerCtx)=>{
                    let serviceResult;
                    try {
                        serviceResult = await xSearchService(innerCtx, serviceArgs);
                    } catch (error3) {
                        throw classifyXSearchServiceError(error3) ?? error3;
                    }
                    return new XSearchResult({
                        result: {
                            case: "success",
                            value: new XSearchSuccess({
                                answer: serviceResult.answer,
                                citations: serviceResult.citations.map((citation)=>new XSearchCitation({
                                        url: citation.url,
                                        title: citation.title
                                    }))
                            })
                        }
                    });
                }, (result)=>createXSearchToolCall(new XSearchToolCall({
                        ...baseToolCall,
                        result
                    })), meta.hookContextCollector);
            };
            if (options2?.resourceAccessor && options2.enableExecuteHookExec) {
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
                        toolName: "XSearch",
                        createToolInput: createHookInput2,
                        applyUpdatedInput: applyUpdatedHookInput2,
                        createRejectedResult: (_args, reason)=>new XSearchResult({
                                result: {
                                    case: "rejected",
                                    value: new XSearchRejected({
                                        reason
                                    })
                                }
                            }),
                        createSuccessOutput: (_args, result)=>{
                            const success = result.result.case === "success" ? result.result.value : void 0;
                            return {
                                status: "success",
                                answer: success?.answer ?? "",
                                citations: (success?.citations ?? []).map((citation)=>({
                                        url: citation.url,
                                        title: citation.title
                                    }))
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
                                        errorMessage: result.result.value.reason || "X search rejected",
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
            __disposeResources103(env_1);
        }
    };
    const render2 = async (_ctx, result, _props)=>createStringResult(resultToString10(result));
    return createZodAgentTool("X_SEARCH", {
        name: getToolName9(promptVersion),
        contextType: {
            type: "dynamic",
            conciseStaticContext: "Search X (Twitter) posts and accounts for real-time discussion and news."
        },
        descriptionGenerator: ()=>DESCRIPTION2,
        parameters: parametersSchema24,
        execute: withSafeParsedArgs(parametersSchema24, execute, createXSearchToolCall(new XSearchToolCall())),
        render: render2,
        serializeError: (error3)=>{
            if (error3 instanceof ToolCallRejectedError) {
                return createXSearchToolCall(new XSearchToolCall({
                    result: new XSearchResult({
                        result: {
                            case: "rejected",
                            value: new XSearchRejected({
                                reason: error3.message
                            })
                        }
                    })
                }));
            }
            const errorMessage4 = error3 instanceof ToolCallError ? error3.clientVisibleErrorMessage : "An error occurred while searching X";
            return createXSearchToolCall(new XSearchToolCall({
                result: new XSearchResult({
                    result: {
                        case: "error",
                        value: new XSearchError({
                            error: errorMessage4
                        })
                    }
                })
            }));
        }
    });
};

}
