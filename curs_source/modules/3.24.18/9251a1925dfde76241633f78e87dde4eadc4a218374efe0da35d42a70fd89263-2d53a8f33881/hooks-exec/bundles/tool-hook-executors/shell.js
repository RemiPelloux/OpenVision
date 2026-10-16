import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { setShellHookApprovalRequirement } from "../../../dist_exports.js";
import { init_generic_hooks } from "../generic-hooks.js";
import { init_sandbox2 } from "../sandbox.js";
import { init_shell_permission } from "./shell-permission.js";
import { HooksToolName, init_tool_names } from "../tool-names.js";
import { HookStep } from "../../../hooks/dist/hook-step.js";
import { init_dist6 } from "../../../hooks/dist/index.js";
import { createExecutorWithHooks, getOutputFromResult, isSandboxed, runBeforeShellExecutionPermissionHook } from "../../../mcp_sandbox_policy_exports.js";
import { ShellRejected, ShellResult, init_shell_exec_pb } from "../../../proto/dist/generated/agent/v1/shell_exec_pb.js";
var shellHooksConfig, ShellExecutorWithHooks;
export { ShellExecutorWithHooks, shellHooksConfig };
var __wakaru_init_shell4_initialized = false;
export function init_shell4() {
if (__wakaru_init_shell4_initialized) return;
__wakaru_init_shell4_initialized = true;
"use strict";
init_dist8();
init_dist6();
init_shell_exec_pb();
init_generic_hooks();
init_sandbox2();
init_tool_names();
init_shell_permission();
shellHooksConfig = {
    toolName: HooksToolName.Shell,
    createToolInput: (args)=>{
        const cwd = args.workingDirectory || "";
        const timeout2 = args.timeout;
        return {
            command: args.command,
            cwd,
            ...typeof timeout2 === "number" && timeout2 > 0 && {
                timeout: timeout2
            }
        };
    },
    applyUpdatedInput: (args, updatedInput)=>{
        if (typeof updatedInput.command === "string") {
            args.command = updatedInput.command;
        }
        if (typeof updatedInput.cwd === "string") {
            args.workingDirectory = updatedInput.cwd;
        }
        if (typeof updatedInput.timeout === "number" && updatedInput.timeout >= 0) {
            args.timeout = updatedInput.timeout;
        }
    },
    createRejectedResult: (args, reason)=>new ShellResult({
            result: {
                case: "rejected",
                value: new ShellRejected({
                    command: args.command,
                    workingDirectory: args.workingDirectory,
                    reason
                })
            }
        }),
    isSuccess: (result)=>{
        if (result.result.case === "success") {
            return true;
        }
        if (result.result.case === "failure" && !result.result.value.aborted) {
            return true;
        }
        return false;
    },
    getErrorMessage: (result)=>{
        switch(result.result.case){
            case "timeout":
                return `Command timed out after ${result.result.value.timeoutMs}ms`;
            case "spawnError":
                return result.result.value.error || "Failed to spawn command";
            case "failure":
                if (result.result.value.aborted) {
                    return "Command was aborted";
                }
                return "Command failed";
            case "rejected":
                return result.result.value.reason || "Command rejected";
            default:
                return "Unknown error";
        }
    },
    getFailureType: (result)=>{
        if (result.result.case === "timeout") {
            return "timeout";
        }
        return "error";
    },
    isInterrupt: (result)=>{
        return result.result.case === "failure" && result.result.value.aborted === true;
    },
    createSuccessOutput: (_args, result)=>{
        const output = getOutputFromResult(result);
        const exitCode = result.result.case === "success" ? 0 : 1;
        return {
            output,
            exitCode
        };
    },
    getExtraHookFields: (args)=>{
        const cwd = args.workingDirectory || "";
        return {
            cwd
        };
    },
    runPreExecutionHooks: async (params)=>{
        const { args, baseHookRequest, hookExecutor, toolUseId } = params;
        const cwd = args.workingDirectory || "";
        setShellHookApprovalRequirement(args, await runBeforeShellExecutionPermissionHook({
            hookExecutor,
            baseHookRequest,
            toolUseId,
            command: args.command,
            cwd,
            sandbox: isSandboxed(args.requestedSandboxPolicy)
        }));
        return void 0;
    },
    runPostExecutionHooks: async (params)=>{
        const { args, result, baseHookRequest, hookExecutor, executionDurationMs, toolUseId } = params;
        const output = getOutputFromResult(result);
        await hookExecutor.executeHookForStep(HookStep.afterShellExecution, {
            ...baseHookRequest,
            command: args.command,
            output,
            duration: executionDurationMs,
            sandbox: isSandboxed(args.requestedSandboxPolicy),
            tool_use_id: toolUseId
        });
        return void 0;
    }
};
ShellExecutorWithHooks = class {
    constructor(innerExecutor, hookExecutor, baseHookRequestExtractor){
        this.wrappedExecutor = createExecutorWithHooks(innerExecutor, hookExecutor, baseHookRequestExtractor, shellHooksConfig);
    }
    execute(ctx, args, options2) {
        return this.wrappedExecutor.execute(ctx, args, options2);
    }
};

}
