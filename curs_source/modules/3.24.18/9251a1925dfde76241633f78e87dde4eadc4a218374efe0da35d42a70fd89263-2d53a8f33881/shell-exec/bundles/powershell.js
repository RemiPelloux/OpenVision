import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
import { createSpan } from "../../agent-kv/dist/controlled.js";
import { attachShellOutputStreams, getPowerShellExecutable, resolveSandboxPolicyForWorkspace, shouldEnableSudoAskpass, spawnWithSignal, splitPwdAndState, transformSudoCommand, writeFileWithBom } from "../../bidi_connect_exports.js";
import { init_dist } from "../../context/dist/index.js";
import { createWritableIterable } from "../../dist_exports.js";
import { reportEvent } from "./bash.js";
import { init_core2 } from "./core.js";
import { dump_powershell_state_default, init_dump_powershell_state } from "./dump_powershell_state.js";
import { init_output_limiter } from "./output-limiter.js";
import { init_policy_merge } from "./sandbox/policy-merge.js";
import { init_sudo } from "./sudo.js";
import { SHELL_ENV_OVERRIDES, init_types4 } from "./types.js";
import { init_dist3 } from "../../utils/dist/index.js";
var import_node_crypto6, import_node_fs16, fs8, import_promises7, os6, path14, __addDisposableResource11, __disposeResources11, PowerShellState, UTF8_BOM;
export { PowerShellState, UTF8_BOM, __addDisposableResource11, __disposeResources11, fs8, import_node_crypto6, import_node_fs16, import_promises7, os6, path14 };
var __wakaru_init_powershell_initialized = false;
export function init_powershell() {
if (__wakaru_init_powershell_initialized) return;
__wakaru_init_powershell_initialized = true;
"use strict";
import_node_crypto6 = require("node:crypto");
import_node_fs16 = require("node:fs");
fs8 = __toESM(require("node:fs/promises"), 1);
import_promises7 = require("node:fs/promises");
os6 = __toESM(require("node:os"), 1);
path14 = __toESM(require("node:path"), 1);
init_dist();
init_dist3();
init_core2();
init_dump_powershell_state();
init_output_limiter();
init_policy_merge();
init_sudo();
init_types4();
__addDisposableResource11 = function(env, value, async) {
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
__disposeResources11 = (function(SuppressedError2) {
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
PowerShellState = class _PowerShellState {
    cwd;
    state;
    constructor(cwd, state){
        this.cwd = cwd;
        this.state = state;
    }
    async getCwd() {
        return this.cwd;
    }
    clone(workingDirectory) {
        return new _PowerShellState(workingDirectory ?? this.cwd, this.state);
    }
    async *execute(ctx, command, options2) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource11(env_1, createSpan(ctx.withName("PowerShellState.execute")), false);
            const pipeStdin = options2?.pipeStdin ?? false;
            const cwd = options2?.workingDirectory ?? this.cwd;
            const iterable = createWritableIterable();
            const env = {
                ...process.env,
                ...SHELL_ENV_OVERRIDES,
                ...options2?.env
            };
            const transformedCommand = shouldEnableSudoAskpass(env) ? transformSudoCommand(command) : command;
            const tempDir = os6.tmpdir();
            const stateOutFile = path14.join(tempDir, `ps-state-out-${(0, import_node_crypto6.randomUUID)()}.txt`);
            const isWindows5 = process.platform === "win32";
            const commandScript = dump_powershell_state_default(this.state, cwd, transformedCommand, stateOutFile, {
                utf8Console: isWindows5 && options2?.powershellUtf8Console === true
            });
            const scriptFile = path14.join(tempDir, `ps-script-${(0, import_node_crypto6.randomUUID)()}.ps1`);
            await writeFileWithBom(scriptFile, commandScript);
            const args = [
                "-ExecutionPolicy",
                "Bypass"
            ];
            if (!pipeStdin) {
                args.push("-NonInteractive");
            }
            args.push("-File", scriptFile);
            const pwsh = getPowerShellExecutable();
            const sandboxWorkspaceRoot = options2?.sandboxWorkspaceRoot ?? cwd;
            const resolvedPolicy = (await resolveSandboxPolicyForWorkspace(sandboxWorkspaceRoot, options2?.sandboxPolicy)).policy;
            const sandboxPolicy = resolvedPolicy.type !== "insecure_none" ? {
                ...resolvedPolicy,
                sandboxWorkspaceRoot
            } : resolvedPolicy;
            const child = spawnWithSignal(pwsh, args, {
                env,
                stdio: [
                    pipeStdin ? "pipe" : "ignore",
                    "pipe",
                    "pipe"
                ],
                cwd,
                detached: !isWindows5
            }, sandboxPolicy, options2?.signal);
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
            const cleanup = async ()=>{
                try {
                    const newState = await fs8.readFile(stateOutFile, "utf8");
                    const { cwd: newCwd, rest } = splitPwdAndState(newState);
                    this.state = rest;
                    this.cwd = newCwd.trim();
                    await (0, import_promises7.rm)(stateOutFile).catch(()=>{});
                } catch (_error) {}
                await (0, import_promises7.rm)(scriptFile).catch(()=>{});
            };
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
                        await cleanup();
                        iterable.throw(error3 instanceof Error ? error3 : new Error(String(error3)));
                        return;
                    }
                }
                await outputPump.flush();
                try {
                    await iterable.write({
                        type: "exit",
                        code: exitCode,
                        data: "",
                        aborted: options2?.signal?.aborted ?? false
                    });
                    await cleanup();
                    iterable.close();
                } catch (_error) {
                    iterable.close();
                }
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
            child.on("error", (error3)=>{
                cleanup().catch(()=>{});
                iterable.throw(error3);
            });
            yield* iterable;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources11(env_1);
        }
    }
};
UTF8_BOM = "\uFEFF";

}
