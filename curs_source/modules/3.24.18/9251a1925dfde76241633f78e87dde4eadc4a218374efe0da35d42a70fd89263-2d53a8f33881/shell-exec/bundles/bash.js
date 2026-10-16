import { getSpan2 } from "../../agent-client/dist/exec-controller.js";
import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
import { createSpan } from "../../agent-kv/dist/controlled.js";
import { attachShellOutputStreams, attachShellStateOutput, captureSandboxDenies2, getBashPath, getSudoAliasInjection, resolveSandboxPolicyForWorkspace, spawnWithSignal, splitPwdAndState, windowsPathToGitBash, writePipedCommand, writeShellStatePipe } from "../../bidi_connect_exports.js";
import { init_dist } from "../../context/dist/index.js";
import { INHERITABLE_SPAN_ATTRIBUTES_KEY, ROOT_SPAN_KEY, ROOT_SPAN_START_MS_KEY } from "../../context/dist/otel.js";
import { getTracer } from "../../dashboard_connect_exports.js";
import { createWritableIterable, isFuseMountPath, isSpawnCwdHopActive, isSpawnCwdHopCdFailedError, isSpawnCwdHopCdFailure, safeFallbackSpawnCwd, spawnCwdHopCdFailedError, spawnCwdHopLogFields } from "../../dist_exports.js";
import { context } from "../../node_modules/.pnpm/@opentelemetry+api@1.9.0/node_modules/@opentelemetry/api/build/esm/context-api.js";
import { trace } from "../../node_modules/.pnpm/@opentelemetry+api@1.9.0/node_modules/@opentelemetry/api/build/esm/trace-api.js";
import { READ_PIPED_COMMAND, init_core2 } from "./core.js";
import { BASH_STATE_END_MARKER, BASH_STATE_START_MARKER, init_dump_bash_state } from "./dump_bash_state.js";
import { init_output_limiter } from "./output-limiter.js";
import { SANDBOX_TEMP_RESTORE_EVAL, init_cache_env } from "./sandbox/cache-env.js";
import { init_policy_merge } from "./sandbox/policy-merge.js";
import { init_sandbox } from "./sandbox/sandbox.js";
import { init_sudo } from "./sudo.js";
import { SHELL_ENV_OVERRIDES, init_types4 } from "./types.js";
import { init_dist3 } from "../../utils/dist/index.js";
import { SPAWN_CWD_HOP_CD_FAILED_EVENT, SPAWN_CWD_HOP_USED_EVENT } from "../../utils/dist/safe-spawn-cwd.js";
function reportEvent(ctx, name17) {
    try {
        const tracer = getTracer();
        const parentSpan = getSpan2(ctx);
        if (!parentSpan) {
            return;
        }
        const parentCtx = trace.setSpan(context.active(), parentSpan);
        const eventSpan = tracer.startSpan(name17, void 0, parentCtx);
        const inherited = ctx.get(INHERITABLE_SPAN_ATTRIBUTES_KEY);
        for(const key in inherited){
            eventSpan.setAttribute(key, inherited[key]);
        }
        const now2 = Date.now();
        const rootStart = ctx.get(ROOT_SPAN_START_MS_KEY);
        const delta = typeof rootStart === "number" ? now2 - rootStart : 0;
        const attrKey = `event.${name17}`;
        const rootSpan = ctx.get(ROOT_SPAN_KEY) ?? parentSpan;
        rootSpan.setAttribute(attrKey, delta);
        eventSpan.setAttribute(attrKey, delta);
        eventSpan.end();
    } catch  {}
}
var import_promises6, import_node_os8, import_node_path16, __addDisposableResource9, __disposeResources9, BashState;
export { BashState, __addDisposableResource9, __disposeResources9, import_node_os8, import_node_path16, import_promises6, reportEvent };
var __wakaru_init_bash_initialized = false;
export function init_bash() {
if (__wakaru_init_bash_initialized) return;
__wakaru_init_bash_initialized = true;
"use strict";
import_promises6 = require("node:fs/promises");
import_node_os8 = __toESM(require("node:os"), 1);
import_node_path16 = __toESM(require("node:path"), 1);
init_dist();
init_dist3();
init_core2();
init_dump_bash_state();
init_output_limiter();
init_cache_env();
init_policy_merge();
init_sandbox();
init_sudo();
init_types4();
__addDisposableResource9 = function(env, value, async) {
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
__disposeResources9 = (function(SuppressedError2) {
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
BashState = class _BashState {
    cwd;
    state;
    userTerminalHint;
    useFileStateTransport;
    constructor(cwd, state, userTerminalHint, useFileStateTransport = false){
        this.cwd = cwd;
        this.state = state;
        this.userTerminalHint = userTerminalHint;
        this.useFileStateTransport = useFileStateTransport;
    }
    async getCwd() {
        return this.cwd;
    }
    clone(workingDirectory) {
        return new _BashState(workingDirectory ?? this.cwd, this.state, this.userTerminalHint, this.useFileStateTransport);
    }
    resetSessionCwdAfterHopCdFailure(args) {
        const { cwd, sandboxWorkspaceRoot } = args;
        if (import_node_path16.default.resolve(cwd) !== import_node_path16.default.resolve(this.cwd)) {
            return;
        }
        this.cwd = sandboxWorkspaceRoot !== void 0 && import_node_path16.default.resolve(sandboxWorkspaceRoot) !== import_node_path16.default.resolve(cwd) && !isFuseMountPath(sandboxWorkspaceRoot) ? sandboxWorkspaceRoot : safeFallbackSpawnCwd();
    }
    async *execute(ctx, command, options2) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource9(env_1, createSpan(ctx.withName("BashState.execute")), false);
            const pipeStdin = options2?.pipeStdin ?? false;
            const iterable = createWritableIterable();
            const cwd = options2?.workingDirectory ?? this.cwd;
            const env = {
                ...process.env,
                ...SHELL_ENV_OVERRIDES,
                ...options2?.env
            };
            let core2 = `builtin eval "$1"`;
            if (!pipeStdin) {
                core2 += " < /dev/null";
            }
            const sudoAliasInjection = getSudoAliasInjection(env);
            const useFileTransport = this.useFileStateTransport;
            let tempDir;
            let stateInputPath;
            let stateOutputPath;
            if (useFileTransport) {
                tempDir = await (0, import_promises6.mkdtemp)(import_node_path16.default.join(import_node_os8.default.tmpdir(), "cursor-bash-state-"));
                const dirname33 = import_node_path16.default.basename(tempDir);
                stateInputPath = import_node_path16.default.join(tempDir, "state-in");
                stateOutputPath = import_node_path16.default.join(tempDir, "state-out");
                await (0, import_promises6.writeFile)(stateInputPath, this.state, "utf8");
                await (0, import_promises6.writeFile)(stateOutputPath, "", "utf8").catch(()=>{});
                const gitBashInputPath = windowsPathToGitBash(stateInputPath);
                const gitBashOutputPath = windowsPathToGitBash(stateOutputPath);
                env.CURSOR_STATE_INPUT_FILE = gitBashInputPath;
                env.CURSOR_STATE_OUTPUT_FILE = gitBashOutputPath;
            }
            const stateLoader = useFileTransport ? 'snap=$(command cat "$CURSOR_STATE_INPUT_FILE")' : "snap=$(command cat <&3)";
            const stateWriter = useFileTransport ? 'mkdir -p "$(dirname "$CURSOR_STATE_OUTPUT_FILE")" 2>/dev/null; dump_bash_state > "$CURSOR_STATE_OUTPUT_FILE"' : "dump_bash_state >&4";
            const c = (useFileTransport ? "" : READ_PIPED_COMMAND) + `${stateLoader} && builtin shopt -s extglob && builtin eval -- "$snap" && { builtin set +u 2>/dev/null || true; builtin eval "\${__CURSOR_SANDBOX_ENV_RESTORE:-}" 2>/dev/null; ` + SANDBOX_TEMP_RESTORE_EVAL + `builtin export PWD="$(builtin pwd)"; builtin shopt -s expand_aliases 2>/dev/null; ${sudoAliasInjection}${core2}; }; COMMAND_EXIT_CODE=$?; ${stateWriter}; builtin exit $COMMAND_EXIT_CODE`;
            const args = [
                "-O",
                "extglob",
                "-c",
                c,
                "--",
                ...useFileTransport ? [
                    command
                ] : []
            ];
            const bashPath = getBashPath(this.userTerminalHint);
            if (!bashPath) {
                throw new Error("Can't find Bash");
            }
            const sandboxWorkspaceRoot = options2?.sandboxWorkspaceRoot ?? cwd;
            const resolvedPolicy = (await resolveSandboxPolicyForWorkspace(sandboxWorkspaceRoot, options2?.sandboxPolicy)).policy;
            const sandboxPolicy = resolvedPolicy.type !== "insecure_none" ? {
                ...resolvedPolicy,
                sandboxWorkspaceRoot
            } : resolvedPolicy;
            let newState = "";
            const readStateFromTransport = async ()=>{
                if (useFileTransport) {
                    if (!stateOutputPath) {
                        newState = this.state;
                        return;
                    }
                    try {
                        newState = await (0, import_promises6.readFile)(stateOutputPath, "utf8");
                    } catch (error3) {
                        console.warn("[shell-exec] Failed to read bash state file", error3);
                        newState = this.state;
                    }
                }
            };
            const cleanupStateFiles = async ()=>{
                if (tempDir) {
                    try {
                        await (0, import_promises6.rm)(tempDir, {
                            recursive: true,
                            force: true
                        });
                    } catch  {}
                }
            };
            if (isSpawnCwdHopActive(cwd)) {
                reportEvent(span.ctx, SPAWN_CWD_HOP_USED_EVENT);
            }
            let child;
            try {
                child = spawnWithSignal(bashPath, args, {
                    env,
                    stdio: [
                        pipeStdin ? "pipe" : "ignore",
                        "pipe",
                        "pipe",
                        "pipe",
                        "pipe",
                        useFileTransport ? "ignore" : "pipe"
                    ],
                    cwd,
                    detached: true
                }, sandboxPolicy, options2?.signal);
            } catch (error3) {
                await cleanupStateFiles();
                throw error3;
            }
            child.on("spawn", async ()=>{
                try {
                    await iterable.write({
                        type: "stdin_ready",
                        stdin: child.stdin ?? void 0,
                        pid: child.pid
                    });
                } catch (_error) {}
            });
            const outputPump = attachShellOutputStreams({
                stdout: child.stdout,
                stderr: child.stderr,
                writable: iterable,
                bufferOutputEvents: options2?.bufferOutputEvents,
                outputLimiterOptions: options2?.outputLimiterOptions
            });
            child.on("error", async (error3)=>{
                if (isSpawnCwdHopCdFailedError(error3, cwd)) {
                    this.resetSessionCwdAfterHopCdFailure({
                        cwd,
                        sandboxWorkspaceRoot: options2?.sandboxWorkspaceRoot
                    });
                    reportEvent(span.ctx, SPAWN_CWD_HOP_CD_FAILED_EVENT);
                    const hopLog = spawnCwdHopLogFields(cwd);
                    console.warn(`[shell-exec] working directory is not accessible (${hopLog.cwdKind}:${hopLog.cwdHash})`);
                }
                await cleanupStateFiles();
                iterable.throw(error3);
            });
            let exitCode = null;
            let closeTimeoutId = null;
            let hasEmittedExit = false;
            const emitExitAndClose = async (waitForOutputPumps)=>{
                if (hasEmittedExit) return;
                hasEmittedExit = true;
                if (closeTimeoutId) {
                    clearTimeout(closeTimeoutId);
                    closeTimeoutId = null;
                }
                reportEvent(span.ctx, "exit");
                if (waitForOutputPumps) {
                    try {
                        await outputPump.waitForOutput();
                    } catch (error3) {
                        await cleanupStateFiles();
                        iterable.throw(error3 instanceof Error ? error3 : new Error(String(error3)));
                        return;
                    }
                }
                const hopCdFailed = isSpawnCwdHopCdFailure({
                    exitCode,
                    stdoutBytes: outputPump.stdoutBytes,
                    stdoutPrefix: outputPump.stdoutPrefix,
                    cwd
                }) && newState === "";
                if (hopCdFailed) {
                    outputPump.dropHeldStdout();
                }
                await outputPump.flush();
                if (hopCdFailed) {
                    this.resetSessionCwdAfterHopCdFailure({
                        cwd,
                        sandboxWorkspaceRoot: options2?.sandboxWorkspaceRoot
                    });
                    await cleanupStateFiles();
                    reportEvent(span.ctx, SPAWN_CWD_HOP_CD_FAILED_EVENT);
                    const hopLog = spawnCwdHopLogFields(cwd);
                    console.warn(`[shell-exec] working directory is not accessible (${hopLog.cwdKind}:${hopLog.cwdHash})`);
                    iterable.throw(spawnCwdHopCdFailedError(cwd));
                    return;
                }
                if (!options2?.signal?.aborted) {
                    await readStateFromTransport();
                    const startMarkerLine = `${BASH_STATE_START_MARKER}
`;
                    const endMarkerLine = `${BASH_STATE_END_MARKER}
`;
                    if (newState.startsWith(startMarkerLine) && newState.endsWith(endMarkerLine)) {
                        let stateWithoutMarkers = newState.slice(startMarkerLine.length);
                        stateWithoutMarkers = stateWithoutMarkers.slice(0, -(BASH_STATE_END_MARKER.length + 1));
                        const { cwd: nextCwd, rest } = splitPwdAndState(stateWithoutMarkers);
                        this.state = rest;
                        if (process.platform !== "win32" && nextCwd?.startsWith("/")) {
                            this.cwd = nextCwd;
                        }
                    }
                }
                if (sandboxPolicy.captureDenies) {
                    try {
                        const denyEvents = await captureSandboxDenies2(child);
                        if (denyEvents && denyEvents.length > 0) {
                            await iterable.write({
                                type: "sandbox_denies",
                                events: denyEvents
                            });
                        }
                    } catch  {}
                }
                try {
                    await iterable.write({
                        type: "exit",
                        code: exitCode,
                        data: "",
                        aborted: options2?.signal?.aborted ?? false
                    });
                    iterable.close();
                } catch  {
                    iterable.close();
                }
                await cleanupStateFiles();
            };
            child.on("exit", (code, _signal)=>{
                exitCode = code;
                const timeout2 = options2?.closeTimeout ?? 5e3;
                if (timeout2 > 0) {
                    closeTimeoutId = setTimeout(()=>{
                        console.warn(`[shell-exec] Close event did not fire within ${timeout2}ms after exit. This may indicate a background process is holding file descriptors open. Proceeding anyway to prevent hang.`);
                        emitExitAndClose(false);
                    }, timeout2);
                }
            });
            child.on("close", async ()=>{
                await emitExitAndClose(true);
            });
            const inFd = child.stdio[3];
            const outFd = child.stdio[4];
            if (!useFileTransport) {
                writePipedCommand(child, command);
                writeShellStatePipe(inFd, this.state);
                attachShellStateOutput(outFd, (text4)=>{
                    newState += text4;
                });
            }
            yield* iterable;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources9(env_1);
        }
    }
};

}
