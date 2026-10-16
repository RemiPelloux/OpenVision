import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { DigestOnlyReadExecutor } from "../../../agent-exec/dist/read.js";
import { init_generic_hooks } from "../generic-hooks.js";
import { HookDeniedError, init_hook_error_handling } from "../hook-error-handling.js";
import { HooksToolName, init_tool_names } from "../tool-names.js";
import { HookStep } from "../../../hooks/dist/hook-step.js";
import { init_dist6 } from "../../../hooks/dist/index.js";
import { createExecutorWithHooks, createHookDenialMessage, getToolCallIdFromArgs, withFailClosed } from "../../../mcp_sandbox_policy_exports.js";
import { ReadRejected, ReadResult, init_read_exec_pb } from "../../../proto/dist/generated/agent/v1/read_exec_pb.js";
var readHooksConfig, ReadExecutorWithHooks;
export { ReadExecutorWithHooks, readHooksConfig };
var __wakaru_init_read4_initialized = false;
export function init_read4() {
if (__wakaru_init_read4_initialized) return;
__wakaru_init_read4_initialized = true;
"use strict";
init_dist8();
init_dist6();
init_read_exec_pb();
init_generic_hooks();
init_hook_error_handling();
init_tool_names();
readHooksConfig = {
    toolName: HooksToolName.Read,
    getToolCallId: getToolCallIdFromArgs,
    createToolInput: (args)=>({
            file_path: args.path
        }),
    applyUpdatedInput: (args, updatedInput)=>{
        if (typeof updatedInput.file_path === "string") {
            args.path = updatedInput.file_path;
        }
    },
    createRejectedResult: (args, reason)=>new ReadResult({
            result: {
                case: "rejected",
                value: new ReadRejected({
                    path: args.path,
                    reason
                })
            }
        }),
    isSuccess: (result)=>result.result.case === "success",
    getErrorMessage: (result)=>{
        switch(result.result.case){
            case "error":
                return result.result.value.error || "Read error";
            case "rejected":
                return result.result.value.reason || "Read rejected";
            case "fileNotFound":
                return `File not found: ${result.result.value.path}`;
            case "permissionDenied":
                return `Permission denied: ${result.result.value.path}`;
            case "invalidFile":
                return `Invalid file: ${result.result.value.path}`;
            default:
                return "Unknown error";
        }
    },
    createSuccessOutput: (args, result)=>{
        if (result.result.case === "success") {
            const content = result.result.value.output.case === "content" ? result.result.value.output.value : "";
            return {
                file_path: args.path,
                content_length: content.length
            };
        }
        return {
            file_path: args.path,
            success: true
        };
    },
    runPostExecutionHooks: async (params)=>{
        const { args, result, baseHookRequest, hookExecutor } = params;
        if (result.result.case !== "success") {
            return void 0;
        }
        const content = result.result.value.output.case === "content" ? result.result.value.output.value : "";
        const beforeReadResponse = await withFailClosed(()=>hookExecutor.executeHookForStep(HookStep.beforeReadFile, {
                ...baseHookRequest,
                content,
                file_path: args.path,
                attachments: []
            }), "File read");
        if (beforeReadResponse?.permission === "deny") {
            const reason = createHookDenialMessage("File read", beforeReadResponse.user_message);
            throw new HookDeniedError(reason);
        }
        return void 0;
    }
};
ReadExecutorWithHooks = class {
    constructor(innerExecutor, hookExecutor, baseHookRequestExtractor){
        this.wrappedExecutor = new DigestOnlyReadExecutor(createExecutorWithHooks(innerExecutor, hookExecutor, baseHookRequestExtractor, readHooksConfig));
    }
    execute(ctx, args, options2) {
        return this.wrappedExecutor.execute(ctx, args, options2);
    }
};

}
