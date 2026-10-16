import { init_generic_hooks } from "../generic-hooks.js";
import { HooksToolName, init_tool_names } from "../tool-names.js";
import { createExecutorWithHooks, getToolCallIdFromArgs } from "../../../mcp_sandbox_policy_exports.js";
import { RecordScreenFailure, RecordScreenResult, init_record_screen_exec_pb } from "../../../proto/dist/generated/agent/v1/record_screen_exec_pb.js";
var recordScreenHooksConfig, RecordScreenExecutorWithHooks;
export { RecordScreenExecutorWithHooks, recordScreenHooksConfig };
var __wakaru_init_record_screen3_initialized = false;
export function init_record_screen3() {
if (__wakaru_init_record_screen3_initialized) return;
__wakaru_init_record_screen3_initialized = true;
"use strict";
init_record_screen_exec_pb();
init_generic_hooks();
init_tool_names();
recordScreenHooksConfig = {
    toolName: HooksToolName.RecordScreen,
    getToolCallId: getToolCallIdFromArgs,
    createToolInput: (args)=>({
            mode: args.mode,
            save_as_filename: args.saveAsFilename
        }),
    createRejectedResult: (_args, reason)=>new RecordScreenResult({
            result: {
                case: "failure",
                value: new RecordScreenFailure({
                    error: reason
                })
            }
        }),
    isSuccess: (result)=>result.result.case !== "failure",
    getErrorMessage: (result)=>{
        if (result.result.case === "failure") {
            return result.result.value.error || "RecordScreen failed";
        }
        return "Unknown error";
    },
    createSuccessOutput: (_args, result)=>({
            result_type: result.result.case
        })
};
RecordScreenExecutorWithHooks = class {
    constructor(innerExecutor, hookExecutor, baseHookRequestExtractor){
        this.wrappedExecutor = createExecutorWithHooks(innerExecutor, hookExecutor, baseHookRequestExtractor, recordScreenHooksConfig);
    }
    execute(ctx, args, options2) {
        return this.wrappedExecutor.execute(ctx, args, options2);
    }
};

}
