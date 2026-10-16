import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { setShellHookApprovalRequirement } from "../../../dist_exports.js";
import { init_generic_hooks } from "../generic-hooks.js";
import { init_sandbox2 } from "../sandbox.js";
import { init_shell_permission } from "./shell-permission.js";
import { HooksToolName, init_tool_names } from "../tool-names.js";
import { createExecutorWithHooks, getToolCallIdFromArgs, isSandboxed, runBeforeShellExecutionPermissionHook } from "../../../mcp_sandbox_policy_exports.js";
import { BackgroundShellSpawnResult, WriteShellStdinError, WriteShellStdinResult, init_background_shell_exec_pb } from "../../../proto/dist/generated/agent/v1/background_shell_exec_pb.js";
import { ShellRejected, init_shell_exec_pb } from "../../../proto/dist/generated/agent/v1/shell_exec_pb.js";
var backgroundShellHooksConfig, BackgroundShellExecutorWithHooks, writeShellStdinHooksConfig, WriteBackgroundShellStdinExecutorWithHooks;
export { BackgroundShellExecutorWithHooks, WriteBackgroundShellStdinExecutorWithHooks, backgroundShellHooksConfig, writeShellStdinHooksConfig };
var __wakaru_init_background_shell3_initialized = false;
export function init_background_shell3() {
if (__wakaru_init_background_shell3_initialized) return;
__wakaru_init_background_shell3_initialized = true;
"use strict";
init_dist8();
init_background_shell_exec_pb();
init_shell_exec_pb();
init_generic_hooks();
init_sandbox2();
init_tool_names();
init_shell_permission();
backgroundShellHooksConfig = {
    toolName: HooksToolName.Shell,
    getToolCallId: getToolCallIdFromArgs,
    createToolInput: (args)=>{
        const cwd = args.workingDirectory || "";
        return {
            command: args.command,
            cwd
        };
    },
    applyUpdatedInput: (args, updatedInput)=>{
        if (typeof updatedInput.command === "string") {
            args.command = updatedInput.command;
        }
        if (typeof updatedInput.cwd === "string") {
            args.workingDirectory = updatedInput.cwd;
        }
    },
    createRejectedResult: (args, reason)=>new BackgroundShellSpawnResult({
            result: {
                case: "rejected",
                value: new ShellRejected({
                    command: args.command,
                    workingDirectory: args.workingDirectory,
                    reason
                })
            }
        }),
    isSuccess: (result)=>result.result.case === "success",
    getErrorMessage: (result)=>{
        switch(result.result.case){
            case "error":
                return result.result.value.error || "BackgroundShell error";
            case "rejected":
                return result.result.value.reason || "BackgroundShell rejected";
            case "permissionDenied":
                return "Permission denied";
            case "sandboxUnsupported":
                return `Sandbox policy unsupported on this host: ${result.result.value.reason}`;
            default:
                return "Unknown error";
        }
    },
    createSuccessOutput: (_args, result)=>{
        if (result.result.case === "success") {
            return {
                shell_id: result.result.value.shellId,
                pid: result.result.value.pid
            };
        }
        return {
            success: true
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
        const sandbox = isSandboxed(args.sandboxPolicy);
        setShellHookApprovalRequirement(args, await runBeforeShellExecutionPermissionHook({
            hookExecutor,
            baseHookRequest,
            toolUseId,
            command: args.command,
            cwd,
            sandbox
        }));
        return void 0;
    }
};
BackgroundShellExecutorWithHooks = class {
    constructor(innerExecutor, hookExecutor, baseHookRequestExtractor){
        this.wrappedExecutor = createExecutorWithHooks(innerExecutor, hookExecutor, baseHookRequestExtractor, backgroundShellHooksConfig);
    }
    execute(ctx, args, options2) {
        return this.wrappedExecutor.execute(ctx, args, options2);
    }
};
writeShellStdinHooksConfig = {
    toolName: HooksToolName.WriteShellStdin,
    createToolInput: (args)=>({
            shell_id: args.shellId,
            chars_length: args.chars.length
        }),
    createRejectedResult: (_args, reason)=>new WriteShellStdinResult({
            result: {
                case: "error",
                value: new WriteShellStdinError({
                    error: reason
                })
            }
        }),
    isSuccess: (result)=>result.result.case === "success",
    getErrorMessage: (result)=>{
        if (result.result.case === "error") {
            return result.result.value.error || "WriteShellStdin error";
        }
        return "Unknown error";
    },
    createSuccessOutput: (args)=>({
            shell_id: args.shellId,
            success: true
        })
};
WriteBackgroundShellStdinExecutorWithHooks = class {
    constructor(innerExecutor, hookExecutor, baseHookRequestExtractor){
        this.wrappedExecutor = createExecutorWithHooks(innerExecutor, hookExecutor, baseHookRequestExtractor, writeShellStdinHooksConfig);
    }
    execute(ctx, args, options2) {
        return this.wrappedExecutor.execute(ctx, args, options2);
    }
};

}
