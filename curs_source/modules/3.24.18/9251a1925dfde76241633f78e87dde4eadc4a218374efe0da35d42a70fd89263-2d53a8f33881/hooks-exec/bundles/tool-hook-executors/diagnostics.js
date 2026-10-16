import { init_generic_hooks } from "../generic-hooks.js";
import { HooksToolName, init_tool_names } from "../tool-names.js";
import { createExecutorWithHooks, getToolCallIdFromArgs } from "../../../mcp_sandbox_policy_exports.js";
import { DiagnosticsRejected, DiagnosticsResult, init_diagnostics_exec_pb } from "../../../proto/dist/generated/agent/v1/diagnostics_exec_pb.js";
var diagnosticsHooksConfig, DiagnosticsExecutorWithHooks;
export { DiagnosticsExecutorWithHooks, diagnosticsHooksConfig };
var __wakaru_init_diagnostics4_initialized = false;
export function init_diagnostics4() {
if (__wakaru_init_diagnostics4_initialized) return;
__wakaru_init_diagnostics4_initialized = true;
"use strict";
init_diagnostics_exec_pb();
init_generic_hooks();
init_tool_names();
diagnosticsHooksConfig = {
    toolName: HooksToolName.ReadLints,
    getToolCallId: getToolCallIdFromArgs,
    createToolInput: (args)=>({
            file_path: args.path
        }),
    applyUpdatedInput: (args, updatedInput)=>{
        if (typeof updatedInput.file_path === "string") {
            args.path = updatedInput.file_path;
        }
    },
    createRejectedResult: (args, reason)=>new DiagnosticsResult({
            result: {
                case: "rejected",
                value: new DiagnosticsRejected({
                    path: args.path,
                    reason
                })
            }
        }),
    isSuccess: (result)=>result.result.case === "success",
    getErrorMessage: (result)=>{
        switch(result.result.case){
            case "error":
                return result.result.value.error || "Diagnostics error";
            case "rejected":
                return result.result.value.reason || "Diagnostics rejected";
            case "fileNotFound":
                return `File not found: ${result.result.value.path}`;
            case "permissionDenied":
                return `Permission denied: ${result.result.value.path}`;
            default:
                return "Unknown error";
        }
    },
    createSuccessOutput: (args, result)=>{
        if (result.result.case === "success") {
            return {
                file_path: args.path,
                diagnostics_count: result.result.value.totalDiagnostics
            };
        }
        return {
            file_path: args.path,
            success: true
        };
    }
};
DiagnosticsExecutorWithHooks = class {
    constructor(innerExecutor, hookExecutor, baseHookRequestExtractor){
        this.wrappedExecutor = createExecutorWithHooks(innerExecutor, hookExecutor, baseHookRequestExtractor, diagnosticsHooksConfig);
    }
    execute(ctx, args, options2) {
        return this.wrappedExecutor.execute(ctx, args, options2);
    }
};

}
