import { init_dist8 } from "../../agent-exec/dist/index.js";
import { createSpan } from "../../agent-kv/dist/controlled.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../context/dist/index.js";
import { getShellHookApprovalRequirement, resolvePath } from "../../dist_exports.js";
import { analyzeShellCommand, convertInternalToProtoPolicy, convertProtoToInternalPolicy, forcedShellSandboxPolicy, getModelShellAdminCommandDenylistBlockReason, isForcedShellEgressEnabled, resolveShellSandboxIgnoreMapping, shellBlockReasonMessage } from "../../dist_exports2.js";
import { toOptionalDurationMsInt32 } from "../../esm_exports8.js";
import { init_common3 } from "./common.js";
import { init_forced_egress } from "./forced-egress.js";
import { init_int32 } from "./int32.js";
import { init_sandbox_conversion } from "./sandbox-conversion.js";
import { init_admin_command_denylist2 } from "./services/admin-command-denylist.js";
import { init_ignore_service } from "./services/ignore-service.js";
import { init_shell_timeout } from "./shell-timeout.js";
import { init_edit_block_handler } from "./utils/edit-block-handler.js";
import { resolveShellTimeoutMs } from "../../mcp_sandbox_policy_exports.js";
import { ForceBackgroundShellResult, ForceBackgroundShellStatus, ShellAbortReason, ShellBackgroundReason, ShellCommandParsingResult, ShellPermissionDenied, ShellRejected, ShellResult, ShellSandboxUnsupported, ShellStream, ShellStreamBackgrounded, ShellStreamExit, ShellStreamStart, ShellStreamStderr, ShellStreamStdout, ShellSuccess, TimeoutBehavior, init_shell_exec_pb } from "../../proto/dist/generated/agent/v1/shell_exec_pb.js";
import { init_dist13 } from "../../shell-exec/dist/index.js";
import { SandboxUnsupportedError } from "../../shell-exec/dist/sandbox/sandbox.js";
import { init_shell_parser } from "../../shell-exec/dist/shell-parser.js";
var __addDisposableResource44, __disposeResources44, logger31, BackgroundableIterator, LocalShellStreamExecutor;
export { BackgroundableIterator, LocalShellStreamExecutor, __addDisposableResource44, __disposeResources44, logger31 };
var __wakaru_init_shell_stream2_initialized = false;
export function init_shell_stream2() {
if (__wakaru_init_shell_stream2_initialized) return;
__wakaru_init_shell_stream2_initialized = true;
"use strict";
init_dist8();
init_dist();
init_shell_exec_pb();
init_dist13();
init_shell_parser();
init_common3();
init_forced_egress();
init_int32();
init_sandbox_conversion();
init_admin_command_denylist2();
init_ignore_service();
init_shell_timeout();
init_edit_block_handler();
__addDisposableResource44 = function(env, value, async) {
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
__disposeResources44 = (function(SuppressedError2) {
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
logger31 = createLogger("local-exec:shell-stream");
BackgroundableIterator = class {
    constructor(iterator, timeoutMs){
        this.iterator = iterator;
        this.timeoutMs = timeoutMs;
        this.pendingPromise = null;
        this.stopPromise = new Promise((resolve36)=>{
            this.stopResolve = resolve36;
        });
    }
    stop(reason) {
        if (this.stopReason !== void 0) {
            return false;
        }
        this.stopReason = reason;
        this.stopResolve?.();
        return true;
    }
    get timedOut() {
        return this.stopReason?.kind === "background" && this.stopReason.reason === ShellBackgroundReason.TIMEOUT;
    }
    get backgroundRequested() {
        return this.stopReason?.kind === "background";
    }
    get backgroundReasonValue() {
        return this.stopReason?.kind === "background" ? this.stopReason.reason : void 0;
    }
    get stopReasonValue() {
        return this.stopReason;
    }
    async *iterate() {
        this.timer = setTimeout(()=>{
            this.stop({
                kind: "background",
                reason: ShellBackgroundReason.TIMEOUT
            });
        }, this.timeoutMs);
        try {
            while(true){
                this.pendingPromise = this.iterator.next();
                const raceResult = await Promise.race([
                    this.pendingPromise.then((result)=>({
                            kind: "result",
                            result
                        })),
                    this.stopPromise.then(()=>({
                            kind: "stopped"
                        }))
                ]);
                if (raceResult.kind === "stopped") {
                    return;
                }
                this.pendingPromise = null;
                if (raceResult.result.done) return;
                yield raceResult.result.value;
            }
        } finally{
            clearTimeout(this.timer);
        }
    }
    requestBackground() {
        return this.stop({
            kind: "background",
            reason: ShellBackgroundReason.USER_REQUEST
        });
    }
    abort() {
        this.stop({
            kind: "abort"
        });
    }
    getHandoffIterator() {
        if (this.pendingPromise) {
            const pending = this.pendingPromise;
            this.pendingPromise = null;
            let consumed = false;
            return {
                next: async ()=>{
                    if (!consumed) {
                        consumed = true;
                        return pending;
                    }
                    return this.iterator.next();
                }
            };
        }
        return this.iterator;
    }
};
LocalShellStreamExecutor = class {
    constructor(permissionsService, coreExecutor, ignoreService, backgroundShellManager){
        this.permissionsService = permissionsService;
        this.coreExecutor = coreExecutor;
        this.ignoreService = ignoreService;
        this.backgroundShellManager = backgroundShellManager;
        this.activeForegroundExecutions = new Map();
    }
    async forceBackgroundByToolCallId(toolCallId) {
        const execution = this.activeForegroundExecutions.get(toolCallId);
        const shellResult = execution?.requestBackground();
        if (!shellResult) {
            return new ForceBackgroundShellResult({
                status: ForceBackgroundShellStatus.NOT_FOUND
            });
        }
        return new ForceBackgroundShellResult({
            status: ForceBackgroundShellStatus.ACCEPTED,
            shellResult
        });
    }
    async *execute(ctx, args) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            ctx.signal?.throwIfAborted();
            const _span = __addDisposableResource44(env_1, createSpan(ctx.withName("LocalShellStreamExecutor.execute")), false);
            const command = args.command;
            let requestedPolicy = args.requestedSandboxPolicy ? convertProtoToInternalPolicy(args.requestedSandboxPolicy) : void 0;
            const workingDirectory = args.workingDirectory || await this.coreExecutor.getCwd(args.conversationId);
            const timeout2 = resolveShellTimeoutMs(args);
            const resolvedWorkingDir = resolvePath(workingDirectory);
            const startTime = Date.now();
            const parsingResult = new ShellCommandParsingResult(analyzeShellCommand(command).structured);
            const modelShellBlockReason = getModelShellAdminCommandDenylistBlockReason({
                command,
                parsingResult,
                blockedCommands: args.adminCommandDenylist
            });
            if (modelShellBlockReason !== void 0) {
                yield new ShellStream({
                    event: {
                        case: "rejected",
                        value: new ShellRejected({
                            command,
                            workingDirectory: resolvedWorkingDir,
                            reason: modelShellBlockReason
                        })
                    }
                });
                return;
            }
            const invariantBlock = await this.permissionsService.shouldEnforceShellInvariantBlocks(ctx, {
                workingDirectory: resolvedWorkingDir,
                skipUnsafeWorkingDirectoryBlock: true,
                command,
                parsingResult,
                toolCallId: args.toolCallId
            }, requestedPolicy);
            if (invariantBlock.kind === "block") {
                if (invariantBlock.reason.type === "permissionsConfig") {
                    yield new ShellStream({
                        event: {
                            case: "permissionDenied",
                            value: new ShellPermissionDenied({
                                command,
                                workingDirectory: resolvedWorkingDir,
                                error: "Command blocked by permissions configuration",
                                isReadonly: invariantBlock.reason.isReadonly ?? false
                            })
                        }
                    });
                    return;
                }
                yield new ShellStream({
                    event: {
                        case: "rejected",
                        value: new ShellRejected({
                            command,
                            workingDirectory: resolvedWorkingDir,
                            reason: shellBlockReasonMessage(invariantBlock.reason)
                        })
                    }
                });
                return;
            }
            logger31.info(ctx, "Shell stream: approval gate reached", {
                toolCallId: args.toolCallId,
                skipApproval: args.skipApproval,
                hasSmartModeApproval: args.smartModeApproval !== void 0,
                hasSmartModeApprovalReason: args.smartModeApproval?.reason !== void 0,
                hasSmartModeApprovalRequestId: args.smartModeApproval?.requestId !== void 0,
                requestedPolicyType: requestedPolicy?.type ?? "undefined",
                parserCommandCount: parsingResult.executableCommands.length,
                classifierCommandCount: args.classifierResult?.commands.length ?? 0,
                commandLength: command.length
            });
            if (!args.skipApproval) {
                const blockResult = await this.permissionsService.shouldBlockShellCommand(ctx, command, {
                    workingDirectory: resolvedWorkingDir,
                    timeout: timeout2,
                    parsingResult,
                    toolCallId: args.toolCallId,
                    classifierResult: args.classifierResult,
                    smartModeApprovalReason: args.smartModeApproval?.reason,
                    smartModeApprovalRequestId: args.smartModeApproval?.requestId,
                    hookApprovalRequirement: getShellHookApprovalRequirement(args)
                }, requestedPolicy);
                if (blockResult.kind === "block") {
                    logger31.info(ctx, "Shell stream: approval gate blocked command", {
                        toolCallId: args.toolCallId,
                        blockReasonType: blockResult.reason.type,
                        hasSmartModeApproval: args.smartModeApproval !== void 0,
                        skipApproval: args.skipApproval
                    });
                    if (blockResult.reason.type === "permissionsConfig") {
                        yield new ShellStream({
                            event: {
                                case: "permissionDenied",
                                value: new ShellPermissionDenied({
                                    command,
                                    workingDirectory: resolvedWorkingDir,
                                    error: "Command blocked by permissions configuration",
                                    isReadonly: blockResult.reason.isReadonly ?? false
                                })
                            }
                        });
                        return;
                    }
                    const reason = shellBlockReasonMessage(blockResult.reason);
                    yield new ShellStream({
                        event: {
                            case: "rejected",
                            value: new ShellRejected({
                                command,
                                workingDirectory: resolvedWorkingDir,
                                reason
                            })
                        }
                    });
                    return;
                }
                requestedPolicy = blockResult.policy;
                logger31.info(ctx, "Shell stream: approval gate allowed command", {
                    toolCallId: args.toolCallId,
                    skipApproval: args.skipApproval,
                    effectivePolicyType: requestedPolicy.type
                });
            } else {
                logger31.info(ctx, "Shell stream: skipped local approval", {
                    toolCallId: args.toolCallId,
                    requestedPolicyType: requestedPolicy?.type ?? "undefined"
                });
            }
            if (isForcedShellEgressEnabled()) {
                requestedPolicy = forcedShellSandboxPolicy(command, parsingResult);
            }
            if (requestedPolicy && requestedPolicy.type !== "insecure_none") {
                const ignoreMapping = await resolveShellSandboxIgnoreMapping(this.ignoreService);
                requestedPolicy = {
                    ...requestedPolicy,
                    ignoreMapping
                };
            }
            yield new ShellStream({
                event: {
                    case: "start",
                    value: new ShellStreamStart({
                        sandboxPolicy: convertInternalToProtoPolicy(requestedPolicy)
                    })
                }
            });
            const timeoutBehavior = args.timeoutBehavior;
            const shouldBackgroundOnTimeout = timeoutBehavior === TimeoutBehavior.BACKGROUND;
            const shouldPipeStdin = shouldBackgroundOnTimeout && !args.closeStdin && args.smartModeApproval === void 0;
            const abortController = new AbortController();
            const executionSignal = shouldBackgroundOnTimeout ? abortController.signal : ctx.signal ? AbortSignal.any([
                ctx.signal,
                abortController.signal
            ]) : abortController.signal;
            const showElapsedTime = true;
            const sandboxPolicyMergeSources = requestedPolicy ? {
                perRepo: requestedPolicy
            } : void 0;
            const iterable = this.coreExecutor.execute(ctx, {
                command,
                workingDirectory,
                signal: executionSignal,
                toolCallId: args.toolCallId,
                conversationId: args.conversationId,
                requestId: args.requestId,
                secretScopeId: args.secretScopeId,
                sandboxPolicy: sandboxPolicyMergeSources,
                fileOutputThresholdBytes: args.fileOutputThresholdBytes,
                pipeStdin: shouldPipeStdin,
                showElapsedTime
            });
            let cancelTimer;
            if (!shouldBackgroundOnTimeout) {
                cancelTimer = setTimeout(()=>abortController.abort(), timeout2);
            }
            const bgIterator = shouldBackgroundOnTimeout ? new BackgroundableIterator(iterable[Symbol.asyncIterator](), timeout2) : null;
            let collectedOutput = "";
            let stdin;
            let pid;
            let backgroundedShellId;
            let killedByHardTimeout = false;
            const foregroundExecution = args.toolCallId && bgIterator ? {
                requestBackground: ()=>{
                    if (!bgIterator.requestBackground()) {
                        return void 0;
                    }
                    backgroundedShellId = backgroundedShellId ?? this.backgroundShellManager.generateShellId();
                    return new ShellResult({
                        result: {
                            case: "success",
                            value: new ShellSuccess({
                                shellId: backgroundedShellId,
                                pid,
                                command,
                                workingDirectory: resolvedWorkingDir,
                                msToWait: toOptionalDurationMsInt32(Date.now() - startTime),
                                backgroundReason: ShellBackgroundReason.USER_REQUEST,
                                interleavedOutput: collectedOutput
                            })
                        }
                    });
                }
            } : void 0;
            if (args.toolCallId && foregroundExecution) {
                this.activeForegroundExecutions.set(args.toolCallId, foregroundExecution);
            }
            const clearForegroundExecution = ()=>{
                if (args.toolCallId && this.activeForegroundExecutions.get(args.toolCallId) === foregroundExecution) {
                    this.activeForegroundExecutions.delete(args.toolCallId);
                }
            };
            if (bgIterator && ctx.signal) {
                ctx.signal.addEventListener("abort", ()=>{
                    if (!bgIterator.backgroundRequested) {
                        abortController.abort();
                        bgIterator.abort();
                    }
                }, {
                    once: true
                });
            }
            let hardKillTimer;
            const hardTimeout = args.hardTimeout;
            if (hardTimeout !== void 0 && hardTimeout > 0) {
                hardKillTimer = setTimeout(()=>{
                    if (backgroundedShellId !== void 0) {
                        const aborted2 = this.backgroundShellManager.abort(backgroundedShellId);
                        if (!aborted2) {
                            abortController.abort();
                        }
                    } else {
                        killedByHardTimeout = true;
                        abortController.abort();
                        bgIterator?.abort();
                    }
                }, hardTimeout);
            }
            const eventSource = bgIterator?.iterate() ?? iterable;
            try {
                for await (const event of eventSource){
                    if (event.type === "stdout") {
                        collectedOutput += event.data;
                        yield new ShellStream({
                            event: {
                                case: "stdout",
                                value: new ShellStreamStdout({
                                    data: event.data
                                })
                            }
                        });
                    } else if (event.type === "stderr") {
                        collectedOutput += event.data;
                        yield new ShellStream({
                            event: {
                                case: "stderr",
                                value: new ShellStreamStderr({
                                    data: event.data
                                })
                            }
                        });
                    } else if (event.type === "stdin_ready") {
                        stdin = event.stdin;
                        pid = event.pid;
                    } else if (event.type === "exit") {
                        let abortReason;
                        if (event.aborted) {
                            if (ctx.signal?.aborted) {
                                abortReason = ShellAbortReason.USER_ABORT;
                            } else if (bgIterator?.timedOut || abortController.signal.aborted) {
                                abortReason = ShellAbortReason.TIMEOUT;
                            } else {
                                abortReason = ShellAbortReason.USER_ABORT;
                            }
                        }
                        yield new ShellStream({
                            event: {
                                case: "exit",
                                value: new ShellStreamExit({
                                    code: (event.code ?? -1) >>> 0,
                                    cwd: await this.coreExecutor.getCwd(args.conversationId),
                                    outputLocation: event.outputLocation,
                                    aborted: event.aborted,
                                    abortReason,
                                    localExecutionTimeMs: toOptionalDurationMsInt32(event.localExecutionTimeMs)
                                })
                            }
                        });
                    }
                }
            } catch (error3) {
                if (!(error3 instanceof SandboxUnsupportedError)) {
                    throw error3;
                }
                const policyType = requestedPolicy?.type ?? "unknown";
                logger31.debug(ctx, "Shell stream: sandbox policy unsupported on this host", {
                    toolCallId: args.toolCallId,
                    policyType,
                    reason: error3.reason
                });
                yield new ShellStream({
                    event: {
                        case: "sandboxUnsupported",
                        value: new ShellSandboxUnsupported({
                            command,
                            workingDirectory: resolvedWorkingDir,
                            sandboxPolicyType: policyType,
                            reason: error3.reason ?? error3.message,
                            isReadonly: policyType === "workspace_readonly"
                        })
                    }
                });
                return;
            } finally{
                clearTimeout(cancelTimer);
                if (!bgIterator?.backgroundRequested) {
                    clearTimeout(hardKillTimer);
                }
                clearForegroundExecution();
            }
            if (bgIterator?.backgroundRequested && !killedByHardTimeout) {
                const shellId = backgroundedShellId ?? this.backgroundShellManager.generateShellId();
                backgroundedShellId = shellId;
                const backgroundReason = bgIterator.backgroundReasonValue === ShellBackgroundReason.USER_REQUEST ? ShellBackgroundReason.USER_REQUEST : ShellBackgroundReason.TIMEOUT;
                const msToWait = backgroundReason === ShellBackgroundReason.USER_REQUEST ? Date.now() - startTime : timeout2;
                await this.backgroundShellManager.adopt({
                    ctx,
                    shellId,
                    command,
                    workingDirectory: resolvedWorkingDir,
                    toolCallId: args.toolCallId,
                    sandboxPolicy: sandboxPolicyMergeSources,
                    initialOutput: collectedOutput,
                    stdin,
                    pid,
                    abortController,
                    eventIterator: bgIterator.getHandoffIterator(),
                    startTime,
                    showElapsedTime,
                    description: args.description,
                    outputNotification: args.outputNotification
                });
                yield new ShellStream({
                    event: {
                        case: "backgrounded",
                        value: new ShellStreamBackgrounded({
                            shellId,
                            command,
                            workingDirectory: resolvedWorkingDir,
                            pid,
                            msToWait: showElapsedTime ? msToWait : void 0,
                            reason: backgroundReason
                        })
                    }
                });
            } else if (ctx.signal?.aborted && bgIterator?.stopReasonValue !== void 0) {
                clearTimeout(hardKillTimer);
                yield new ShellStream({
                    event: {
                        case: "exit",
                        value: new ShellStreamExit({
                            code: 4294967295,
                            cwd: await this.coreExecutor.getCwd(args.conversationId),
                            aborted: true,
                            abortReason: ShellAbortReason.USER_ABORT
                        })
                    }
                });
            } else {
                clearTimeout(hardKillTimer);
            }
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources44(env_1);
        }
    }
};

}
