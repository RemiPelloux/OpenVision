import { createSpan } from "../../../agent-kv/dist/controlled.js";
import { init_dist } from "../../../context/dist/index.js";
import { init_truncate } from "./truncate.js";
import { formatOutput, shellArgs } from "../../../mcp_sandbox_policy_exports.js";
import { PiBashExecError, PiBashExecResult, PiBashExecSuccess, init_pi_bash_exec_pb } from "../../../proto/dist/generated/agent/v1/pi_bash_exec_pb.js";
import { init_shell_exec_pb } from "../../../proto/dist/generated/agent/v1/shell_exec_pb.js";
var import_promises31, import_node_os16, import_node_path52, __addDisposableResource30, __disposeResources30, PI_BASH_DEFAULT_TIMEOUT_MS, LocalPiBashExecutor;
export { LocalPiBashExecutor, PI_BASH_DEFAULT_TIMEOUT_MS, __addDisposableResource30, __disposeResources30, import_node_os16, import_node_path52, import_promises31 };
var __wakaru_init_bash2_initialized = false;
export function init_bash2() {
if (__wakaru_init_bash2_initialized) return;
__wakaru_init_bash2_initialized = true;
"use strict";
import_promises31 = require("node:fs/promises");
import_node_os16 = require("node:os");
import_node_path52 = require("node:path");
init_dist();
init_pi_bash_exec_pb();
init_shell_exec_pb();
init_truncate();
__addDisposableResource30 = function(env, value, async) {
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
__disposeResources30 = (function(SuppressedError2) {
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
PI_BASH_DEFAULT_TIMEOUT_MS = 2147483647;
LocalPiBashExecutor = class {
    constructor(shellExecutor){
        this.shellExecutor = shellExecutor;
    }
    async execute(parentCtx, args, options2) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource30(env_1, createSpan(parentCtx.withName("LocalPiBashExecutor.execute")), false);
            const result = await this.shellExecutor.execute(span.ctx, shellArgs(args, options2), options2);
            switch(result.result.case){
                case "success":
                    {
                        const formatted = await formatOutput(`${result.result.value.stdout}${result.result.value.stderr}`);
                        return new PiBashExecResult({
                            result: {
                                case: "success",
                                value: new PiBashExecSuccess(formatted)
                            }
                        });
                    }
                case "failure":
                    {
                        const formatted = await formatOutput(`${result.result.value.stdout}${result.result.value.stderr}`);
                        return new PiBashExecResult({
                            result: {
                                case: "success",
                                value: new PiBashExecSuccess({
                                    ...formatted,
                                    output: `${formatted.output}

Command exited with code ${result.result.value.exitCode}`
                                })
                            }
                        });
                    }
                case "timeout":
                    return this.error(`Command timed out after ${Math.round(result.result.value.timeoutMs / 1e3)} seconds`);
                case "rejected":
                    return this.error(result.result.value.reason || "Command aborted");
                case "permissionDenied":
                    return this.error(result.result.value.error);
                case "spawnError":
                    return this.error(result.result.value.error);
                default:
                    return this.error("Command failed");
            }
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources30(env_1);
        }
    }
    error(error3) {
        return new PiBashExecResult({
            result: {
                case: "error",
                value: new PiBashExecError({
                    error: error3
                })
            }
        });
    }
};

}
