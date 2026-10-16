import { init_generic_hooks } from "../generic-hooks.js";
import { HooksToolName, init_tool_names } from "../tool-names.js";
import { createExecutorWithHooks, getToolCallIdFromArgs } from "../../../mcp_sandbox_policy_exports.js";
import { DeleteRejected, DeleteResult, init_delete_exec_pb } from "../../../proto/dist/generated/agent/v1/delete_exec_pb.js";
var deleteHooksConfig, DeleteExecutorWithHooks;
export { DeleteExecutorWithHooks, deleteHooksConfig };
var __wakaru_init_delete3_initialized = false;
export function init_delete3() {
if (__wakaru_init_delete3_initialized) return;
__wakaru_init_delete3_initialized = true;
"use strict";
init_delete_exec_pb();
init_generic_hooks();
init_tool_names();
deleteHooksConfig = {
    toolName: HooksToolName.Delete,
    getToolCallId: getToolCallIdFromArgs,
    createToolInput: (args)=>({
            file_path: args.path
        }),
    applyUpdatedInput: (args, updatedInput)=>{
        if (typeof updatedInput.file_path === "string") {
            args.path = updatedInput.file_path;
        }
    },
    createRejectedResult: (args, reason)=>new DeleteResult({
            result: {
                case: "rejected",
                value: new DeleteRejected({
                    path: args.path,
                    reason
                })
            }
        }),
    isSuccess: (result)=>result.result.case === "success",
    getErrorMessage: (result)=>{
        switch(result.result.case){
            case "fileNotFound":
                return `File not found: ${result.result.value.path}`;
            case "notFile":
                return `Not a file: ${result.result.value.path}`;
            case "permissionDenied":
                return `Permission denied: ${result.result.value.path}`;
            case "fileBusy":
                return `File busy: ${result.result.value.path}`;
            case "rejected":
                return result.result.value.reason || "Delete rejected";
            case "error":
                return result.result.value.error || "Delete error";
            default:
                return "Unknown error";
        }
    },
    createSuccessOutput: (args)=>({
            file_path: args.path,
            deleted: true
        })
};
DeleteExecutorWithHooks = class {
    constructor(innerExecutor, hookExecutor, baseHookRequestExtractor){
        this.wrappedExecutor = createExecutorWithHooks(innerExecutor, hookExecutor, baseHookRequestExtractor, deleteHooksConfig);
    }
    execute(ctx, args, options2) {
        return this.wrappedExecutor.execute(ctx, args, options2);
    }
};

}
