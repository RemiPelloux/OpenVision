import { createSpan } from "../../../agent-kv/dist/controlled.js";
import { resolveSandboxPolicyForWorkspace, spawnInSandbox, withConfiguredRipgrepEnv } from "../../../bidi_connect_exports.js";
import { init_dist } from "../../../context/dist/index.js";
import { resolvePath } from "../../../dist_exports.js";
import { convertInternalToProtoPolicy, convertProtoToInternalPolicy, forcedShellSandboxPolicy, isForcedShellEgressEnabled, shellBlockReasonMessage } from "../../../dist_exports2.js";
import { toOptionalDurationMsInt32 } from "../../../esm_exports8.js";
import { init_common3 } from "../common.js";
import { init_constants4 } from "../constants.js";
import { init_forced_egress } from "../forced-egress.js";
import { init_int32 } from "../int32.js";
import { init_sandbox_conversion } from "../sandbox-conversion.js";
import { init_edit_block_handler } from "../utils/edit-block-handler.js";
import { appendCappedOutput, getProcessReturncode, windowsCmdShellArgs } from "../../../mcp_sandbox_policy_exports.js";
import { ShellAbortReason, ShellFailure, ShellPermissionDenied, ShellRejected, ShellResult, ShellSpawnError, ShellSuccess, init_shell_exec_pb } from "../../../proto/dist/generated/agent/v1/shell_exec_pb.js";
import { reportEvent } from "../../../shell-exec/dist/bash.js";
import { init_dist13 } from "../../../shell-exec/dist/index.js";
import { init_dist3 } from "../../../utils/dist/index.js";
import { spawnWorkload } from "../../../utils/dist/workload-spawn.js";
var import_node_child_process13, import_node_os15, __addDisposableResource29, __disposeResources29, MINI_SWE_AGENT_DEFAULT_TIMEOUT_MS, MINI_SWE_AGENT_OUTPUT_LIMIT, MINI_SWE_AGENT_OUTPUT_EDGE_CHARS, MINI_SWE_AGENT_ENV, MiniSweAgentOutputAccumulator, LocalMiniSweAgentBashExecutor;
export { LocalMiniSweAgentBashExecutor, MINI_SWE_AGENT_DEFAULT_TIMEOUT_MS, MINI_SWE_AGENT_ENV, MINI_SWE_AGENT_OUTPUT_EDGE_CHARS, MINI_SWE_AGENT_OUTPUT_LIMIT, MiniSweAgentOutputAccumulator, __addDisposableResource29, __disposeResources29, import_node_child_process13, import_node_os15 };
var __wakaru_init_mini_swe_agent_bash2_initialized = false;
export function init_mini_swe_agent_bash2() {
if (__wakaru_init_mini_swe_agent_bash2_initialized) return;
__wakaru_init_mini_swe_agent_bash2_initialized = true;
"use strict";
import_node_child_process13 = require("node:child_process");
import_node_os15 = require("node:os");
init_dist();
init_shell_exec_pb();
init_dist13();
init_dist3();
init_common3();
init_constants4();
init_forced_egress();
init_int32();
init_sandbox_conversion();
init_edit_block_handler();
__addDisposableResource29 = function(env, value, async) {
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
__disposeResources29 = (function(SuppressedError2) {
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
MINI_SWE_AGENT_DEFAULT_TIMEOUT_MS = 3e4;
MINI_SWE_AGENT_OUTPUT_LIMIT = 1e4;
MINI_SWE_AGENT_OUTPUT_EDGE_CHARS = 5e3;
MINI_SWE_AGENT_ENV = {
    PAGER: "cat",
    MANPAGER: "cat",
    LESS: "-R",
    PIP_PROGRESS_BAR: "off",
    TQDM_DISABLE: "1"
};
MiniSweAgentOutputAccumulator = class {
    constructor(){
        this.fullOutput = "";
        this.outputHead = "";
        this.outputTail = "";
        this.totalChars = 0;
    }
    append(chunk) {
        if (chunk.length === 0) {
            return;
        }
        const previousTotalChars = this.totalChars;
        this.totalChars += chunk.length;
        if (this.outputHead.length < MINI_SWE_AGENT_OUTPUT_EDGE_CHARS) {
            this.outputHead = (this.outputHead + chunk).slice(0, MINI_SWE_AGENT_OUTPUT_EDGE_CHARS);
        }
        this.outputTail = (this.outputTail + chunk).slice(-MINI_SWE_AGENT_OUTPUT_EDGE_CHARS);
        if (previousTotalChars < MINI_SWE_AGENT_OUTPUT_LIMIT) {
            const charsToKeep = Math.min(chunk.length, MINI_SWE_AGENT_OUTPUT_LIMIT - previousTotalChars);
            this.fullOutput += chunk.slice(0, charsToKeep);
        }
        if (this.totalChars > MINI_SWE_AGENT_OUTPUT_LIMIT) {
            this.fullOutput = "";
        }
    }
    getOutput() {
        return this.totalChars <= MINI_SWE_AGENT_OUTPUT_LIMIT ? this.fullOutput : void 0;
    }
    getTruncation() {
        if (this.totalChars <= MINI_SWE_AGENT_OUTPUT_LIMIT) {
            return void 0;
        }
        return {
            outputHead: this.outputHead,
            outputTail: this.outputTail,
            elidedChars: this.totalChars - MINI_SWE_AGENT_OUTPUT_LIMIT
        };
    }
};
LocalMiniSweAgentBashExecutor = class {
    constructor(permissionsService, ignoreService, defaultCwd){
        this.permissionsService = permissionsService;
        this.ignoreService = ignoreService;
        this.defaultCwd = defaultCwd;
    }
    buildResult({ args, workingDirectory, processResult, sandboxPolicy }) {
        const base = {
            command: args.command,
            workingDirectory,
            exitCode: processResult.returncode,
            signal: processResult.signal,
            stdout: processResult.stdout,
            stderr: processResult.exceptionInfo || processResult.stderr,
            interleavedOutput: processResult.output,
            outputHead: processResult.outputTruncation?.outputHead,
            outputTail: processResult.outputTruncation?.outputTail,
            elidedChars: processResult.outputTruncation?.elidedChars,
            executionTime: processResult.localExecutionTimeMs ?? 0,
            localExecutionTimeMs: processResult.localExecutionTimeMs
        };
        const aborted2 = processResult.exceptionInfo.length > 0;
        const result = processResult.returncode === 0 && !aborted2 ? {
            case: "success",
            value: new ShellSuccess(base)
        } : {
            case: "failure",
            value: new ShellFailure({
                ...base,
                aborted: aborted2,
                abortReason: processResult.abortReason
            })
        };
        return new ShellResult({
            result,
            sandboxPolicy: convertInternalToProtoPolicy(sandboxPolicy)
        });
    }
    async runProcess({ ctx, args, workingDirectory, sandboxPolicy, timeoutMs }) {
        const startTime = performance.now();
        const sandboxWorkspaceRoot = this.defaultCwd;
        const resolvedSandboxPolicy = (await resolveSandboxPolicyForWorkspace(sandboxWorkspaceRoot, sandboxPolicy ? {
            perRepo: sandboxPolicy
        } : void 0)).policy;
        const executionPolicy = resolvedSandboxPolicy.type !== "insecure_none" ? {
            ...resolvedSandboxPolicy,
            sandboxWorkspaceRoot
        } : resolvedSandboxPolicy;
        return await new Promise((resolve36)=>{
            const output = new MiniSweAgentOutputAccumulator();
            let stdout = "";
            let stderr = "";
            let settled = false;
            let timedOut = false;
            let exceptionInfo = "";
            let abortReason;
            let timeout2;
            let removeAbortListener = ()=>{};
            const env = withConfiguredRipgrepEnv({
                ...process.env,
                ...MINI_SWE_AGENT_ENV,
                CURSOR_AGENT: "1"
            });
            const spawnOptions = {
                cwd: workingDirectory,
                env,
                stdio: [
                    "pipe",
                    "pipe",
                    "pipe"
                ],
                detached: process.platform !== "win32",
                windowsVerbatimArguments: process.platform === "win32"
            };
            const shellCommand = process.platform === "win32" ? {
                executable: process.env.ComSpec ?? "cmd.exe",
                args: windowsCmdShellArgs(args.command)
            } : {
                executable: "/bin/sh",
                args: [
                    "-c",
                    args.command
                ]
            };
            const child = executionPolicy.type === "insecure_none" ? spawnWorkload(import_node_child_process13.spawn, shellCommand.executable, shellCommand.args, spawnOptions) : spawnInSandbox(shellCommand.executable, shellCommand.args, spawnOptions, executionPolicy);
            child.stdin?.end();
            const finish = (result)=>{
                if (settled) {
                    return;
                }
                settled = true;
                clearTimeout(timeout2);
                removeAbortListener();
                resolve36({
                    ...result,
                    output: output.getOutput(),
                    outputTruncation: output.getTruncation(),
                    localExecutionTimeMs: toOptionalDurationMsInt32(performance.now() - startTime)
                });
            };
            timeout2 = setTimeout(()=>{
                timedOut = true;
                if (abortReason === void 0) {
                    exceptionInfo = `An error occurred while executing the command: Command timed out after ${timeoutMs}ms`;
                    abortReason = ShellAbortReason.TIMEOUT;
                    removeAbortListener();
                }
                if (child.pid !== void 0 && process.platform !== "win32") {
                    try {
                        process.kill(-child.pid, "SIGKILL");
                        return;
                    } catch  {}
                }
                child.kill("SIGKILL");
            }, timeoutMs);
            const abort = ()=>{
                if (abortReason !== void 0) {
                    return;
                }
                exceptionInfo = "An error occurred while executing the command: Command aborted";
                abortReason = ShellAbortReason.USER_ABORT;
                if (child.pid !== void 0 && process.platform !== "win32") {
                    try {
                        process.kill(-child.pid, "SIGTERM");
                        return;
                    } catch  {}
                }
                child.kill("SIGTERM");
            };
            if (ctx.signal.aborted) {
                abort();
            } else {
                ctx.signal.addEventListener("abort", abort, {
                    once: true
                });
                removeAbortListener = ()=>{
                    ctx.signal.removeEventListener("abort", abort);
                };
            }
            child.stdout?.on("data", (data)=>{
                const chunk = data.toString();
                stdout = appendCappedOutput(stdout, chunk);
                output.append(chunk);
            });
            child.stderr?.on("data", (data)=>{
                const chunk = data.toString();
                stderr = appendCappedOutput(stderr, chunk);
                output.append(chunk);
            });
            child.on("error", (error3)=>{
                finish({
                    stdout,
                    stderr,
                    returncode: -1,
                    signal: "",
                    exceptionInfo: `An error occurred while executing the command: ${error3.message}`
                });
            });
            child.on("close", (code, signal)=>{
                finish({
                    stdout,
                    stderr,
                    returncode: exceptionInfo.length > 0 ? -1 : getProcessReturncode(code, signal),
                    signal: signal ?? (timedOut ? "SIGKILL" : ""),
                    exceptionInfo,
                    abortReason
                });
            });
        });
    }
    async execute(parentCtx, args) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource29(env_1, createSpan(parentCtx.withName("LocalMiniSweAgentBashExecutor.execute")), false);
            const ctx = span.ctx;
            reportEvent(ctx, "LocalMiniSweAgentBashExecutor.execute");
            const command = args.command;
            const workingDirectory = resolvePath(args.workingDirectory || this.defaultCwd);
            const timeoutMs = args.timeout > 0 ? args.timeout : MINI_SWE_AGENT_DEFAULT_TIMEOUT_MS;
            if (!args.parsingResult) {
                return new ShellResult({
                    result: {
                        case: "spawnError",
                        value: new ShellSpawnError({
                            command,
                            workingDirectory,
                            error: "Parsing result is required"
                        })
                    }
                });
            }
            let requestedPolicy = args.requestedSandboxPolicy ? convertProtoToInternalPolicy(args.requestedSandboxPolicy) : void 0;
            const decision = await this.permissionsService.shouldBlockShellCommand(ctx, command, {
                workingDirectory,
                timeout: timeoutMs,
                parsingResult: args.parsingResult,
                toolCallId: args.toolCallId
            }, requestedPolicy);
            if (decision.kind === "block") {
                const isReadonlyBlock = decision.reason.type === "permissionsConfig" ? decision.reason.isReadonly ?? false : false;
                if (isReadonlyBlock) {
                    return new ShellResult({
                        result: {
                            case: "permissionDenied",
                            value: new ShellPermissionDenied({
                                command,
                                workingDirectory,
                                error: "Command blocked by permissions configuration",
                                isReadonly: true
                            })
                        }
                    });
                }
                return new ShellResult({
                    result: {
                        case: "rejected",
                        value: new ShellRejected({
                            command,
                            workingDirectory,
                            reason: shellBlockReasonMessage(decision.reason)
                        })
                    }
                });
            }
            requestedPolicy = decision.policy;
            if (isForcedShellEgressEnabled()) {
                requestedPolicy = forcedShellSandboxPolicy(command, args.parsingResult);
            }
            if (requestedPolicy && requestedPolicy.type !== "insecure_none") {
                requestedPolicy = {
                    ...requestedPolicy,
                    ignoreMapping: await this.ignoreService.getCursorIgnoreMapping()
                };
            }
            const processResult = await this.runProcess({
                ctx,
                args,
                workingDirectory,
                sandboxPolicy: requestedPolicy,
                timeoutMs
            });
            return this.buildResult({
                args,
                workingDirectory,
                processResult,
                sandboxPolicy: requestedPolicy
            });
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources29(env_1);
        }
    }
};

}
