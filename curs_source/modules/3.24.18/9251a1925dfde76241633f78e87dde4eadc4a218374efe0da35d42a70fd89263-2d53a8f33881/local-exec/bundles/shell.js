import { init_dist8 } from "../../agent-exec/dist/index.js";
import { createSpan } from "../../agent-kv/dist/controlled.js";
import { init_dist } from "../../context/dist/index.js";
import { getShellHookApprovalRequirement, resolvePath } from "../../dist_exports.js";
import { convertInternalToProtoPolicy, convertProtoToInternalPolicy, forcedShellSandboxPolicy, isForcedShellEgressEnabled, resolveShellSandboxIgnoreMapping, shellCommandBlockResult } from "../../dist_exports2.js";
import { toOptionalDurationMsInt32 } from "../../esm_exports8.js";
import { init_common3 } from "./common.js";
import { init_forced_egress } from "./forced-egress.js";
import { init_int32 } from "./int32.js";
import { init_sandbox_conversion } from "./sandbox-conversion.js";
import { init_ignore_service } from "./services/ignore-service.js";
import { init_shell_timeout } from "./shell-timeout.js";
import { init_edit_block_handler } from "./utils/edit-block-handler.js";
import { resolveShellTimeoutMs } from "../../mcp_sandbox_policy_exports.js";
import { ShellAbortReason, ShellFailure, ShellRejected, ShellResult, ShellSpawnError, ShellSuccess, ShellTimeout, init_shell_exec_pb } from "../../proto/dist/generated/agent/v1/shell_exec_pb.js";
import { reportEvent } from "../../shell-exec/dist/bash.js";
var __addDisposableResource42, __disposeResources42, LocalShellExecutor;
export { LocalShellExecutor, __addDisposableResource42, __disposeResources42 };
var __wakaru_init_shell3_initialized = false;
export function init_shell3() {
if (__wakaru_init_shell3_initialized) return;
__wakaru_init_shell3_initialized = true;
"use strict";
init_dist8();
init_dist();
init_shell_exec_pb();
init_common3();
init_forced_egress();
init_int32();
init_sandbox_conversion();
init_ignore_service();
init_shell_timeout();
init_edit_block_handler();
__addDisposableResource42 = function(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose2, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose2 = value[Symbol.asyncDispose];
        }
        if (dispose2 === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose2 = value[Symbol.dispose];
            if (async) inner = dispose2;
        }
        if (typeof dispose2 !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose2 = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value,
            dispose: dispose2,
            async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
};
__disposeResources42 = (function(SuppressedError2) {
    return function(env) {
        function fail3(e) {
            env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s3 = 0;
        function next() {
            while(r = env.stack.pop()){
                try {
                    if (!r.async && s3 === 1) return s3 = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s3 |= 2, Promise.resolve(result).then(next, function(e) {
                            fail3(e);
                            return next();
                        });
                    } else s3 |= 1;
                } catch (e) {
                    fail3(e);
                }
            }
            if (s3 === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function(error3, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error3, e.suppressed = suppressed, e;
});
LocalShellExecutor = class {
    constructor(permissionsService, coreExecutor, ignoreService, _pendingDecisionProvider){
        this.permissionsService = permissionsService;
        this.coreExecutor = coreExecutor;
        this.ignoreService = ignoreService;
    }
    buildResultFromExit(base) {
        if ((base.exitCode ?? -1) === 0) {
            return new ShellResult({
                result: {
                    case: "success",
                    value: new ShellSuccess({
                        ...base,
                        stdout: base.outputLocation ? "" : base.stdout,
                        stderr: base.outputLocation ? "" : base.stderr
                    })
                },
                sandboxPolicy: convertInternalToProtoPolicy(base.sandboxPolicy)
            });
        }
        return new ShellResult({
            result: {
                case: "failure",
                value: new ShellFailure({
                    ...base,
                    aborted: base.abortReason !== void 0,
                    stdout: base.outputLocation ? "" : base.stdout,
                    stderr: base.outputLocation ? "" : base.stderr
                })
            },
            sandboxPolicy: convertInternalToProtoPolicy(base.sandboxPolicy)
        });
    }
    async executeWithPolicy(ctx, args, workingDirectory, timeout2, policy) {
        const startTime = Date.now();
        const timeoutController = new AbortController();
        const combinedSignal = ctx.signal ? AbortSignal.any([
            ctx.signal,
            timeoutController.signal
        ]) : timeoutController.signal;
        const timer2 = setTimeout(()=>{
            timeoutController.abort();
        }, timeout2);
        try {
            let stdout = "";
            let stderr = "";
            let exitCode = null;
            let abortReason;
            let outputLocation;
            let localExecutionTimeMs;
            const sandboxPolicyMergeSources = policy ? {
                perRepo: policy
            } : void 0;
            for await (const event of this.coreExecutor.execute(ctx, {
                command: args.command,
                workingDirectory,
                signal: combinedSignal,
                toolCallId: args.toolCallId,
                conversationId: args.conversationId,
                requestId: args.requestId,
                secretScopeId: args.secretScopeId,
                sandboxPolicy: sandboxPolicyMergeSources,
                fileOutputThresholdBytes: args.fileOutputThresholdBytes,
                pipeStdin: false
            })){
                if (event.type === "stdout") stdout += event.data;
                else if (event.type === "stderr") stderr += event.data;
                else if (event.type === "exit") {
                    exitCode = event.code != null ? event.code | 0 : null;
                    outputLocation = event.outputLocation;
                    if (!event.aborted) {
                        abortReason = void 0;
                    } else if (!combinedSignal.aborted) {
                        abortReason = ShellAbortReason.UNSPECIFIED;
                    } else if (timeoutController.signal.aborted && combinedSignal.reason === timeoutController.signal.reason) {
                        abortReason = ShellAbortReason.TIMEOUT;
                    } else {
                        abortReason = ShellAbortReason.USER_ABORT;
                    }
                    localExecutionTimeMs = toOptionalDurationMsInt32(event.localExecutionTimeMs);
                }
            }
            clearTimeout(timer2);
            const executionTime = Date.now() - startTime;
            const baseResult = {
                command: args.command,
                workingDirectory,
                exitCode: abortReason !== void 0 ? -1 : exitCode ?? -1,
                signal: abortReason !== void 0 ? "SIGTERM" : "",
                abortReason,
                stdout,
                stderr,
                executionTime,
                localExecutionTimeMs,
                sandboxPolicy: policy,
                outputLocation
            };
            const res = this.buildResultFromExit(baseResult);
            return res;
        } catch (error3) {
            clearTimeout(timer2);
            if (timeoutController.signal.aborted && !ctx.signal.aborted) {
                return new ShellResult({
                    result: {
                        case: "timeout",
                        value: new ShellTimeout({
                            command: args.command,
                            workingDirectory,
                            timeoutMs: timeout2
                        })
                    },
                    sandboxPolicy: convertInternalToProtoPolicy(policy)
                });
            }
            if (ctx.signal.aborted) {
                return new ShellResult({
                    result: {
                        case: "rejected",
                        value: new ShellRejected({
                            command: args.command,
                            workingDirectory,
                            reason: "Command aborted"
                        })
                    },
                    sandboxPolicy: convertInternalToProtoPolicy(policy)
                });
            }
            return new ShellResult({
                result: {
                    case: "spawnError",
                    value: new ShellSpawnError({
                        command: args.command,
                        workingDirectory,
                        error: error3 instanceof Error ? error3.message : "Unknown error"
                    })
                },
                sandboxPolicy: convertInternalToProtoPolicy(policy)
            });
        }
    }
    async execute(parentCtx, args) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource42(env_1, createSpan(parentCtx.withName("LocalShellExecutor.execute")), false);
            const ctx = span.ctx;
            reportEvent(ctx, "LocalShellExecutor.execute");
            const command = args.command;
            const policy = args.requestedSandboxPolicy ? convertProtoToInternalPolicy(args.requestedSandboxPolicy) : void 0;
            const workingDirectory = args.workingDirectory || await this.coreExecutor.getCwd(args.conversationId);
            const timeout2 = resolveShellTimeoutMs(args);
            const resolvedWorkingDir = resolvePath(workingDirectory);
            if (!args.parsingResult) {
                return new ShellResult({
                    result: {
                        case: "spawnError",
                        value: new ShellSpawnError({
                            command,
                            workingDirectory: resolvedWorkingDir,
                            error: "Parsing result is required"
                        })
                    }
                });
            }
            let effectivePolicy;
            if (!args.skipApproval) {
                const decision = await this.permissionsService.shouldBlockShellCommand(ctx, command, {
                    workingDirectory: resolvedWorkingDir,
                    timeout: timeout2,
                    parsingResult: args.parsingResult,
                    toolCallId: args.toolCallId,
                    smartModeApprovalReason: args.smartModeApproval?.reason,
                    smartModeApprovalRequestId: args.smartModeApproval?.requestId,
                    hookApprovalRequirement: getShellHookApprovalRequirement(args)
                }, policy);
                if (decision.kind === "block") {
                    return new ShellResult({
                        result: shellCommandBlockResult(command, resolvedWorkingDir, decision.reason)
                    });
                }
                effectivePolicy = decision.policy;
            } else {
                const invariantBlock = await this.permissionsService.shouldEnforceShellInvariantBlocks(ctx, {
                    workingDirectory: resolvedWorkingDir,
                    skipUnsafeWorkingDirectoryBlock: true,
                    command,
                    parsingResult: args.parsingResult,
                    toolCallId: args.toolCallId
                }, policy);
                if (invariantBlock.kind === "block") {
                    return new ShellResult({
                        result: shellCommandBlockResult(command, resolvedWorkingDir, invariantBlock.reason)
                    });
                }
                effectivePolicy = policy;
            }
            if (isForcedShellEgressEnabled()) {
                effectivePolicy = forcedShellSandboxPolicy(command, args.parsingResult);
            }
            if (effectivePolicy && effectivePolicy.type !== "insecure_none") {
                const ignoreMapping = await resolveShellSandboxIgnoreMapping(this.ignoreService);
                effectivePolicy = {
                    ...effectivePolicy,
                    ignoreMapping
                };
            }
            return this.executeWithPolicy(ctx, args, workingDirectory, timeout2, effectivePolicy);
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources42(env_1);
        }
    }
};

}
