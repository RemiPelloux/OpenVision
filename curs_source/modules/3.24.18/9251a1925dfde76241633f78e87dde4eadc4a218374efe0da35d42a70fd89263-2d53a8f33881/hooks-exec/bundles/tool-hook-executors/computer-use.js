import { init_generic_hooks } from "../generic-hooks.js";
import { HooksToolName, init_tool_names } from "../tool-names.js";
import { createExecutorWithHooks, getToolCallIdFromArgs } from "../../../mcp_sandbox_policy_exports.js";
import { ComputerUseError, ComputerUseResult, init_computer_use_tool_pb } from "../../../proto/dist/generated/agent/v1/computer_use_tool_pb.js";
var computerUseHooksConfig, ComputerUseExecutorWithHooks;
export { ComputerUseExecutorWithHooks, computerUseHooksConfig };
var __wakaru_init_computer_use4_initialized = false;
export function init_computer_use4() {
if (__wakaru_init_computer_use4_initialized) return;
__wakaru_init_computer_use4_initialized = true;
"use strict";
init_computer_use_tool_pb();
init_generic_hooks();
init_tool_names();
computerUseHooksConfig = {
    toolName: HooksToolName.ComputerUse,
    getToolCallId: getToolCallIdFromArgs,
    createToolInput: (args)=>({
            actions_count: args.actions.length
        }),
    createRejectedResult: (_args, reason)=>new ComputerUseResult({
            result: {
                case: "error",
                value: new ComputerUseError({
                    error: reason
                })
            }
        }),
    isSuccess: (result)=>result.result.case === "success",
    getErrorMessage: (result)=>{
        if (result.result.case === "error") {
            return result.result.value.error || "ComputerUse error";
        }
        return "Unknown error";
    },
    createSuccessOutput: (_args, result)=>{
        if (result.result.case === "success") {
            return {
                action_count: result.result.value.actionCount,
                duration_ms: result.result.value.durationMs
            };
        }
        return {
            success: true
        };
    }
};
ComputerUseExecutorWithHooks = class {
    constructor(innerExecutor, hookExecutor, baseHookRequestExtractor){
        this.wrappedExecutor = createExecutorWithHooks(innerExecutor, hookExecutor, baseHookRequestExtractor, computerUseHooksConfig);
    }
    execute(ctx, args, options2) {
        return this.wrappedExecutor.execute(ctx, args, options2);
    }
};

}
