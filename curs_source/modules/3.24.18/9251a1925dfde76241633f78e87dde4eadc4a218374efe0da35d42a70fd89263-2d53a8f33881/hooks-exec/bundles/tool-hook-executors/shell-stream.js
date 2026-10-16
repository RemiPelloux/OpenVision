import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { setShellHookApprovalRequirement } from "../../../dist_exports.js";
import { init_generic_hooks } from "../generic-hooks.js";
import { init_sandbox2 } from "../sandbox.js";
import { init_shell_permission } from "./shell-permission.js";
import { HooksToolName, init_tool_names } from "../tool-names.js";
import { HookStep } from "../../../hooks/dist/hook-step.js";
import { init_dist6 } from "../../../hooks/dist/index.js";
import { createStreamingExecutorWithHooks, isSandboxed, runBeforeShellExecutionPermissionHook } from "../../../mcp_sandbox_policy_exports.js";
import { ShellRejected, ShellStream, ShellStreamHookContext, init_shell_exec_pb } from "../../../proto/dist/generated/agent/v1/shell_exec_pb.js";
var ShellStreamResultCollector, shellStreamHooksConfig, ShellStreamExecutorWithHooks;
export { ShellStreamExecutorWithHooks, ShellStreamResultCollector, shellStreamHooksConfig };
var __wakaru_init_shell_stream3_initialized = false;
export function init_shell_stream3() {
if (__wakaru_init_shell_stream3_initialized) return;
__wakaru_init_shell_stream3_initialized = true;
"use strict";
init_dist8();
init_dist6();
init_shell_exec_pb();
init_generic_hooks();
init_sandbox2();
init_tool_names();
init_shell_permission();
ShellStreamResultCollector = class {
    constructor(){
        this.output = "";
    }
    onEvent(event) {
        if (event.event.case === "stdout") {
            this.output += event.event.value.data;
        } else if (event.event.case === "stderr") {
            this.output += event.event.value.data;
        } else if (event.event.case === "exit") {
            this.exitEvent = event.event.value;
        }
    }
    getOutput() {
        return this.output;
    }
    isAborted() {
        return this.exitEvent?.aborted ?? false;
    }
    getExitCode() {
        return this.exitEvent?.code ?? 0;
    }
};
shellStreamHooksConfig = {
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
    createRejectedEvent: (args, reason)=>new ShellStream({
            event: {
                case: "rejected",
                value: new ShellRejected({
                    command: args.command,
                    workingDirectory: args.workingDirectory,
                    reason
                })
            }
        }),
    createHookContextEvent: (contexts)=>new ShellStream({
            event: {
                case: "hookContext",
                value: new ShellStreamHookContext({
                    hookAdditionalContexts: [
                        ...contexts
                    ]
                })
            }
        }),
    getExtraHookFields: (args)=>{
        const cwd = args.workingDirectory || "";
        return {
            cwd
        };
    },
    createResultCollector: ()=>new ShellStreamResultCollector(),
    createSuccessOutput: (_args, collector)=>({
            output: collector.getOutput(),
            exitCode: collector.getExitCode()
        }),
    isStreamSuccess: (collector)=>collector.getExitCode() === 0,
    getStreamErrorMessage: (_args, collector)=>{
        const output = collector.getOutput().trim();
        return output || `Command failed with exit code ${collector.getExitCode()}`;
    },
    runPreExecutionHooks: async (params)=>{
        const { args, baseHookRequest, hookExecutor, toolUseId } = params;
        const cwd = args.workingDirectory || "";
        const sandbox = isSandboxed(args.requestedSandboxPolicy);
        setShellHookApprovalRequirement(args, await runBeforeShellExecutionPermissionHook({
            hookExecutor,
            baseHookRequest,
            toolUseId,
            command: args.command,
            cwd,
            sandbox
        }));
    },
    runPostExecutionHooks: async (params)=>{
        const { args, baseHookRequest, hookExecutor, collector, executionDurationMs, toolUseId } = params;
        const sandbox = isSandboxed(args.requestedSandboxPolicy);
        await hookExecutor.executeHookForStep(HookStep.afterShellExecution, {
            ...baseHookRequest,
            command: args.command,
            output: collector.getOutput(),
            duration: executionDurationMs,
            sandbox,
            tool_use_id: toolUseId
        });
    }
};
ShellStreamExecutorWithHooks = class {
    constructor(innerExecutor, hookExecutor, baseHookRequestExtractor){
        this.wrappedExecutor = createStreamingExecutorWithHooks(innerExecutor, hookExecutor, baseHookRequestExtractor, shellStreamHooksConfig);
    }
    execute(ctx, args, options2) {
        return this.wrappedExecutor.execute(ctx, args, options2);
    }
};

}
