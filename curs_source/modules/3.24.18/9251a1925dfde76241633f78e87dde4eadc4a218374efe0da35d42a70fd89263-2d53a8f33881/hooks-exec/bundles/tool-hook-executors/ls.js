import { init_generic_hooks } from "../generic-hooks.js";
import { HooksToolName, init_tool_names } from "../tool-names.js";
import { createExecutorWithHooks, getToolCallIdFromArgs } from "../../../mcp_sandbox_policy_exports.js";
import { LsRejected, LsResult, init_ls_exec_pb } from "../../../proto/dist/generated/agent/v1/ls_exec_pb.js";
var lsHooksConfig, LsExecutorWithHooks;
export { LsExecutorWithHooks, lsHooksConfig };
var __wakaru_init_ls4_initialized = false;
export function init_ls4() {
if (__wakaru_init_ls4_initialized) return;
__wakaru_init_ls4_initialized = true;
"use strict";
init_ls_exec_pb();
init_generic_hooks();
init_tool_names();
lsHooksConfig = {
    toolName: HooksToolName.LS,
    getToolCallId: getToolCallIdFromArgs,
    createToolInput: (args)=>({
            file_path: args.path,
            ignore: args.ignore
        }),
    applyUpdatedInput: (args, updatedInput)=>{
        if (typeof updatedInput.file_path === "string") {
            args.path = updatedInput.file_path;
        }
    },
    createRejectedResult: (args, reason)=>new LsResult({
            result: {
                case: "rejected",
                value: new LsRejected({
                    path: args.path,
                    reason
                })
            }
        }),
    isSuccess: (result)=>result.result.case === "success",
    getErrorMessage: (result)=>{
        switch(result.result.case){
            case "error":
                return result.result.value.error || "Ls error";
            case "rejected":
                return result.result.value.reason || "Ls rejected";
            case "timeout":
                return "Ls operation timed out";
            default:
                return "Unknown error";
        }
    },
    getFailureType: (result)=>result.result.case === "timeout" ? "timeout" : "error",
    createSuccessOutput: (args)=>({
            file_path: args.path,
            success: true
        })
};
LsExecutorWithHooks = class {
    constructor(innerExecutor, hookExecutor, baseHookRequestExtractor){
        this.wrappedExecutor = createExecutorWithHooks(innerExecutor, hookExecutor, baseHookRequestExtractor, lsHooksConfig);
    }
    execute(ctx, args, options2) {
        return this.wrappedExecutor.execute(ctx, args, options2);
    }
};

}
