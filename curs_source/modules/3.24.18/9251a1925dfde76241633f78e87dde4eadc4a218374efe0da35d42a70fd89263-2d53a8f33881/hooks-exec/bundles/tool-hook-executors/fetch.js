import { init_generic_hooks } from "../generic-hooks.js";
import { HooksToolName, init_tool_names } from "../tool-names.js";
import { createExecutorWithHooks, getToolCallIdFromArgs } from "../../../mcp_sandbox_policy_exports.js";
import { FetchError, FetchResult, init_fetch_exec_pb } from "../../../proto/dist/generated/agent/v1/fetch_exec_pb.js";
var fetchHooksConfig, FetchExecutorWithHooks;
export { FetchExecutorWithHooks, fetchHooksConfig };
var __wakaru_init_fetch3_initialized = false;
export function init_fetch3() {
if (__wakaru_init_fetch3_initialized) return;
__wakaru_init_fetch3_initialized = true;
"use strict";
init_fetch_exec_pb();
init_generic_hooks();
init_tool_names();
fetchHooksConfig = {
    toolName: HooksToolName.Fetch,
    getToolCallId: getToolCallIdFromArgs,
    createToolInput: (args)=>({
            url: args.url
        }),
    applyUpdatedInput: (args, updatedInput)=>{
        if (typeof updatedInput.url === "string") {
            args.url = updatedInput.url;
        }
    },
    createRejectedResult: (args, reason)=>new FetchResult({
            result: {
                case: "error",
                value: new FetchError({
                    url: args.url,
                    error: reason
                })
            }
        }),
    isSuccess: (result)=>result.result.case === "success",
    getErrorMessage: (result)=>{
        if (result.result.case === "error") {
            return result.result.value.error || "Fetch error";
        }
        return "Unknown error";
    },
    createSuccessOutput: (args, result)=>{
        if (result.result.case === "success") {
            return {
                url: args.url,
                status_code: result.result.value.statusCode,
                content_length: result.result.value.content.length
            };
        }
        return {
            url: args.url,
            success: true
        };
    }
};
FetchExecutorWithHooks = class {
    constructor(innerExecutor, hookExecutor, baseHookRequestExtractor){
        this.wrappedExecutor = createExecutorWithHooks(innerExecutor, hookExecutor, baseHookRequestExtractor, fetchHooksConfig);
    }
    execute(ctx, args, options2) {
        return this.wrappedExecutor.execute(ctx, args, options2);
    }
};

}
