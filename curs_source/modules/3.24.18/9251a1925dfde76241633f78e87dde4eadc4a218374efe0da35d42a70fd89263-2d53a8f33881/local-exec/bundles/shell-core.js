import { AGENT_TOOLS_DIR, MAX_OUTPUT_FILE_SIZE } from "../../agent-exec/dist/agent-tools-file.js";
import { init_node2 } from "../../agent-exec/dist/node.js";
import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
import { createSpan } from "../../agent-kv/dist/controlled.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { getSandboxPolicyType } from "../../bidi_connect_exports.js";
import { init_dist } from "../../context/dist/index.js";
import { getSafeConversationId, isAgentStoreFusePath, resolvePath } from "../../dist_exports.js";
import { init_common3 } from "./common.js";
import { MAX_BUFFER_SIZE, init_constants4 } from "./constants.js";
import { agentStoreSandboxPolicyFromEnv, appendRequestScopedEnvRestore, isDirectory, isRequestScopedEnvKey, scrubRestoreRequestIds, shellVisibleRequestId } from "../../mcp_sandbox_policy_exports.js";
import { OutputLocation, init_utils_pb } from "../../proto/dist/generated/agent/v1/utils_pb.js";
import { INSECURE_NONE_SANDBOX_POLICY, init_dist13 } from "../../shell-exec/dist/index.js";
import { SHELL_OUTPUT_SUPPRESSED_NOTICE } from "../../shell-exec/dist/output-suppression.js";
import { init_dist3 } from "../../utils/dist/index.js";
import { TRANSCRIPTS_SUBDIR } from "../../utils/dist/workspace-paths.js";
var import_node_crypto21, import_node_fs29, import_promises42, import_node_path64, __addDisposableResource43, __disposeResources43, logger30, isWindows4, REQUEST_SCOPED_SHELL_ENV_KEYS, HIDDEN_SHELL_REQUEST_ID_MARKERS, SHELL_ENV_NAME_PATTERN, CURSOR_SANDBOX_ENV_NAME_PATTERN2, BaseShellCoreExecutor, ManagedShellCoreExecutor, AskpassShellCoreExecutor;
export { AskpassShellCoreExecutor, BaseShellCoreExecutor, CURSOR_SANDBOX_ENV_NAME_PATTERN2, HIDDEN_SHELL_REQUEST_ID_MARKERS, ManagedShellCoreExecutor, REQUEST_SCOPED_SHELL_ENV_KEYS, SHELL_ENV_NAME_PATTERN, __addDisposableResource43, __disposeResources43, import_node_crypto21, import_node_fs29, import_node_path64, import_promises42, isWindows4, logger30 };
var __wakaru_init_shell_core_initialized = false;
export function init_shell_core() {
if (__wakaru_init_shell_core_initialized) return;
__wakaru_init_shell_core_initialized = true;
"use strict";
import_node_crypto21 = require("node:crypto");
import_node_fs29 = require("node:fs");
import_promises42 = require("node:fs/promises");
import_node_path64 = __toESM(require("node:path"), 1);
init_node2();
init_dist();
init_utils_pb();
init_dist13();
init_dist3();
init_common3();
init_constants4();
__addDisposableResource43 = function(env, value, async) {
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
__disposeResources43 = (function(SuppressedError2) {
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
logger30 = createLogger("local-exec:shell-core");
isWindows4 = process.platform === "win32";
REQUEST_SCOPED_SHELL_ENV_KEYS = [
    "CURSOR_CONVERSATION_ID",
    "CURSOR_REQUEST_ID",
    "CURSOR_AGENT_STORE_FILES_DIR",
    "CURSOR_AGENT_STORE_SHARED_PATHS"
];
HIDDEN_SHELL_REQUEST_ID_MARKERS = [
    "eval-cursorbench",
    "cursorbench",
    "sand-eval",
    "eval-harness"
];
SHELL_ENV_NAME_PATTERN = /^[A-Za-z_][A-Za-z0-9_]*$/;
CURSOR_SANDBOX_ENV_NAME_PATTERN2 = /CURSOR_SANDBOX/i;
BaseShellCoreExecutor = class {
    constructor(executor, workspacePath, projectDir, shellOutputBackpressureOptions, extraEnvProvider, powershellUtf8Console){
        this.executor = executor;
        this.workspacePath = workspacePath;
        this.projectDir = projectDir;
        this.shellOutputBackpressureOptions = shellOutputBackpressureOptions;
        this.extraEnvProvider = extraEnvProvider;
        this.powershellUtf8Console = powershellUtf8Console;
        this.conversationExecutors = new Map();
    }
    executorFor(conversationId) {
        if (!conversationId) {
            return this.executor;
        }
        let executor = this.conversationExecutors.get(conversationId);
        if (executor === void 0) {
            executor = this.executor.clone(this.workspacePath);
            this.conversationExecutors.set(conversationId, executor);
        }
        return executor;
    }
    async *execute(ctx, args) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource43(env_1, createSpan(ctx.withName("ShellCoreExecutor.execute")), false);
            const startMonotonicMs = performance.now();
            const executor = this.executorFor(args.conversationId);
            const workingDirectory = args.workingDirectory || await executor.getCwd();
            const resolvedWorkingDir = resolvePath(workingDirectory, this.workspacePath);
            if (!isAgentStoreFusePath(resolvedWorkingDir) && !await isDirectory(resolvedWorkingDir)) {
                if (resolvedWorkingDir !== resolvePath(await executor.getCwd(), this.workspacePath)) {
                    throw new Error(`working directory does not exist: ${resolvedWorkingDir}; the command did not run`);
                }
                yield {
                    type: "stderr",
                    data: `The shell's working directory no longer exists: ${resolvedWorkingDir}. The command did not run. Re-run it with working_directory set to an existing directory.
`
                };
                yield {
                    type: "exit",
                    code: 1,
                    aborted: false,
                    localExecutionTimeMs: Math.round(performance.now() - startMonotonicMs)
                };
                return;
            }
            let stdoutSize = 0;
            let stderrSize = 0;
            let stdoutTrimmed = false;
            let stderrTrimmed = false;
            let suppressionNoticeSent = false;
            let mergedOutput;
            if (args.fileOutputThresholdBytes && this.projectDir) {
                mergedOutput = {
                    buffer: "",
                    lineCount: 0,
                    size: 0,
                    threshold: Number(args.fileOutputThresholdBytes)
                };
            }
            const signal = args.signal;
            const env = {
                CURSOR_AGENT: "1"
            };
            if (args.conversationId) {
                env.CURSOR_CONVERSATION_ID = getSafeConversationId(args.conversationId);
            }
            if (args.requestId) {
                env.CURSOR_REQUEST_ID = args.requestId;
            }
            if (this.projectDir) {
                env.AGENT_TRANSCRIPTS = import_node_path64.default.join(this.projectDir, TRANSCRIPTS_SUBDIR);
            }
            const extraEnv = this.extraEnvProvider?.(ctx, args);
            if (extraEnv !== void 0) {
                Object.assign(env, extraEnv);
            }
            const requestScopedEnv = args.requestScopedEnv ?? {};
            for (const [key, value] of Object.entries(requestScopedEnv)){
                if (value !== void 0 && isRequestScopedEnvKey(key)) {
                    env[key] = value;
                }
            }
            const rawCursorRequestId = env.CURSOR_REQUEST_ID;
            if (rawCursorRequestId !== void 0) {
                env.CURSOR_REQUEST_ID = shellVisibleRequestId(rawCursorRequestId);
            }
            appendRequestScopedEnvRestore(env, requestScopedEnv);
            if (env.__CURSOR_SANDBOX_ENV_RESTORE !== void 0) {
                env.__CURSOR_SANDBOX_ENV_RESTORE = scrubRestoreRequestIds(env.__CURSOR_SANDBOX_ENV_RESTORE, [
                    args.requestId,
                    rawCursorRequestId,
                    requestScopedEnv.CURSOR_REQUEST_ID,
                    process.env.CURSOR_REQUEST_ID
                ]);
            }
            const sandboxPolicy = agentStoreSandboxPolicyFromEnv(args.sandboxPolicy, env);
            const policyType = getSandboxPolicyType(sandboxPolicy ?? INSECURE_NONE_SANDBOX_POLICY);
            if (sandboxPolicy) {
                yield {
                    type: "start",
                    sandboxed: policyType === "workspace_readonly" || policyType === "workspace_readwrite"
                };
            }
            if (args.askpassConfig && !isWindows4) {
                env.SUDO_ASKPASS = args.askpassConfig.helperPath;
                env.CURSOR_ASKPASS_SOCKET = args.askpassConfig.socketPath;
                env.CURSOR_ASKPASS_SECRET = args.askpassConfig.secret;
            }
            let dataSize = 0;
            let outputData = "";
            for await (const event of executor.execute(ctx, args.command, {
                signal,
                workingDirectory: resolvedWorkingDir,
                env,
                sandboxPolicy,
                sandboxWorkspaceRoot: this.workspacePath,
                pipeStdin: args.pipeStdin ?? false,
                bufferOutputEvents: this.shellOutputBackpressureOptions?.bufferOutputEvents,
                outputLimiterOptions: this.shellOutputBackpressureOptions?.outputLimiterOptions,
                powershellUtf8Console: this.powershellUtf8Console
            })){
                dataSize = 0;
                outputData = "";
                if (event.type === "stdout" || event.type === "stderr") {
                    outputData = event.data.toString();
                    dataSize = event.data.length;
                    if (mergedOutput) {
                        mergedOutput.size += dataSize;
                        mergedOutput.lineCount += outputData.split("\n").length - 1;
                        if (mergedOutput.size > MAX_OUTPUT_FILE_SIZE) {} else if (mergedOutput.file) {
                            mergedOutput.file.write(outputData);
                        } else {
                            mergedOutput.buffer += outputData;
                            if (mergedOutput.size > mergedOutput.threshold) {
                                const agentToolsDir = import_node_path64.default.join(this.projectDir, AGENT_TOOLS_DIR);
                                mergedOutput.path = import_node_path64.default.join(agentToolsDir, `${(0, import_node_crypto21.randomUUID)()}.txt`);
                                await (0, import_promises42.mkdir)(import_node_path64.default.dirname(mergedOutput.path), {
                                    recursive: true
                                });
                                mergedOutput.file = (0, import_node_fs29.createWriteStream)(mergedOutput.path);
                                mergedOutput.file.write(mergedOutput.buffer);
                                mergedOutput.buffer = "";
                            }
                        }
                    }
                }
                switch(event.type){
                    case "stdout":
                        {
                            if (!stdoutTrimmed) {
                                if (stdoutSize + dataSize > MAX_BUFFER_SIZE) {
                                    stdoutTrimmed = true;
                                    yield {
                                        type: "stdout_trimmed"
                                    };
                                } else {
                                    stdoutSize += dataSize;
                                    yield {
                                        type: "stdout",
                                        data: outputData
                                    };
                                }
                            }
                            break;
                        }
                    case "suppressed_output":
                        {
                            if (!suppressionNoticeSent) {
                                suppressionNoticeSent = true;
                                yield {
                                    type: "stdout",
                                    data: SHELL_OUTPUT_SUPPRESSED_NOTICE
                                };
                            }
                            break;
                        }
                    case "stderr":
                        {
                            if (!stderrTrimmed) {
                                if (stderrSize + dataSize > MAX_BUFFER_SIZE) {
                                    stderrTrimmed = true;
                                    yield {
                                        type: "stderr_trimmed"
                                    };
                                } else {
                                    stderrSize += dataSize;
                                    yield {
                                        type: "stderr",
                                        data: outputData
                                    };
                                }
                            }
                            break;
                        }
                    case "exit":
                        {
                            const localExecutionTimeMs = Math.max(0, Math.round(performance.now() - startMonotonicMs));
                            let outputLocation;
                            if (mergedOutput?.file) {
                                await new Promise((resolve36)=>mergedOutput.file.end(resolve36));
                                outputLocation = new OutputLocation({
                                    filePath: mergedOutput.path,
                                    sizeBytes: BigInt(mergedOutput.size),
                                    lineCount: BigInt(mergedOutput.lineCount)
                                });
                            }
                            yield {
                                type: "exit",
                                code: event.code,
                                aborted: event.aborted,
                                outputLocation,
                                localExecutionTimeMs
                            };
                            break;
                        }
                    case "stdin_ready":
                        {
                            yield {
                                type: "stdin_ready",
                                stdin: event.stdin,
                                pid: event.pid
                            };
                            break;
                        }
                    case "sandbox_denies":
                        {
                            yield {
                                type: "sandbox_denies",
                                events: event.events
                            };
                            break;
                        }
                }
            }
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources43(env_1);
        }
    }
    async getCwd(conversationId) {
        return this.executorFor(conversationId).getCwd();
    }
    getWorkspacePath() {
        if (!this.workspacePath) {
            throw new Error("Workspace path is not configured");
        }
        return this.workspacePath;
    }
};
ManagedShellCoreExecutor = class {
    constructor(innerExecutor, shellManager){
        this.innerExecutor = innerExecutor;
        this.shellManager = shellManager;
    }
    async *execute(ctx, args) {
        const env_2 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource43(env_2, createSpan(ctx.withName("ManagedShellCoreExecutor.execute")), false);
            logger30.info(ctx, "Executing shell command", {
                command: args.command,
                workingDirectory: args.workingDirectory,
                toolCallId: args.toolCallId
            });
            let shellEmitter = null;
            if (args.toolCallId) {
                shellEmitter = this.shellManager.getOrCreateShellEmitter(args.toolCallId);
            }
            for await (const event of this.innerExecutor.execute(ctx, args)){
                if (shellEmitter) {
                    switch(event.type){
                        case "stdin_ready":
                            shellEmitter.emit({
                                type: "stdin_ready",
                                stdin: event.stdin,
                                pid: event.pid
                            });
                            break;
                        case "start":
                            shellEmitter.emit({
                                type: "start",
                                sandboxed: event.sandboxed
                            });
                            break;
                        case "stdout":
                            shellEmitter.emit({
                                type: "stdout",
                                data: event.data
                            });
                            break;
                        case "stderr":
                            shellEmitter.emit({
                                type: "stderr",
                                data: event.data
                            });
                            break;
                        case "exit":
                            shellEmitter.emit({
                                type: "exit",
                                code: event.code ?? -1,
                                aborted: event.aborted
                            });
                            break;
                    }
                }
                yield event;
            }
        } catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
        } finally{
            __disposeResources43(env_2);
        }
    }
    async getCwd(conversationId) {
        return this.innerExecutor.getCwd(conversationId);
    }
    getWorkspacePath() {
        return this.innerExecutor.getWorkspacePath();
    }
};
AskpassShellCoreExecutor = class {
    constructor(innerExecutor, askpassConfig){
        this.innerExecutor = innerExecutor;
        this.askpassConfig = askpassConfig;
    }
    async *execute(ctx, args) {
        const argsWithAskpass = {
            ...args,
            askpassConfig: args.askpassConfig ?? this.askpassConfig
        };
        yield* this.innerExecutor.execute(ctx, argsWithAskpass);
    }
    async getCwd(conversationId) {
        return this.innerExecutor.getCwd(conversationId);
    }
    getWorkspacePath() {
        return this.innerExecutor.getWorkspacePath();
    }
};

}
