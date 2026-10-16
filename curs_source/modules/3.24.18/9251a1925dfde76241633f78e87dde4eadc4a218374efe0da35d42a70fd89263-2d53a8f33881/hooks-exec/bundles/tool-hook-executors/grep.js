import { init_generic_hooks } from "../generic-hooks.js";
import { HooksToolName, init_tool_names } from "../tool-names.js";
import { createExecutorWithHooks, getToolCallIdFromArgs } from "../../../mcp_sandbox_policy_exports.js";
import { GrepError, GrepResult, init_grep_exec_pb } from "../../../proto/dist/generated/agent/v1/grep_exec_pb.js";
var grepHooksConfig, GrepExecutorWithHooks;
export { GrepExecutorWithHooks, grepHooksConfig };
var __wakaru_init_grep4_initialized = false;
export function init_grep4() {
if (__wakaru_init_grep4_initialized) return;
__wakaru_init_grep4_initialized = true;
"use strict";
init_grep_exec_pb();
init_generic_hooks();
init_tool_names();
grepHooksConfig = {
    toolName: HooksToolName.Grep,
    getToolCallId: getToolCallIdFromArgs,
    createToolInput: (args)=>({
            pattern: args.pattern,
            file_path: args.path,
            glob: args.glob,
            output_mode: args.outputMode
        }),
    applyUpdatedInput: (args, updatedInput)=>{
        if (typeof updatedInput.pattern === "string") {
            args.pattern = updatedInput.pattern;
        }
        if (typeof updatedInput.file_path === "string") {
            args.path = updatedInput.file_path;
        }
    },
    createRejectedResult: (_args, reason)=>new GrepResult({
            result: {
                case: "error",
                value: new GrepError({
                    error: reason
                })
            }
        }),
    isSuccess: (result)=>result.result.case === "success",
    getErrorMessage: (result)=>{
        if (result.result.case === "error") {
            return result.result.value.error || "Grep error";
        }
        return "Unknown error";
    },
    createSuccessOutput: (args)=>({
            pattern: args.pattern,
            success: true
        })
};
GrepExecutorWithHooks = class {
    constructor(innerExecutor, hookExecutor, baseHookRequestExtractor){
        this.wrappedExecutor = createExecutorWithHooks(innerExecutor, hookExecutor, baseHookRequestExtractor, grepHooksConfig);
    }
    execute(ctx, args, options2) {
        return this.wrappedExecutor.execute(ctx, args, options2);
    }
};

}
