import { createSpan } from "../../../agent-kv/dist/controlled.js";
import { init_dist } from "../../../context/dist/index.js";
import { init_mutation_queue } from "./mutation-queue.js";
import { init_path } from "./path.js";
import { resolvePiPath, withPiFileMutationQueue } from "../../../mcp_sandbox_policy_exports.js";
import { PiWriteExecError, PiWriteExecRejected, PiWriteExecResult, PiWriteExecSuccess, init_pi_write_exec_pb } from "../../../proto/dist/generated/agent/v1/pi_write_exec_pb.js";
import { WriteArgs, init_write_exec_pb } from "../../../proto/dist/generated/agent/v1/write_exec_pb.js";
var __addDisposableResource36, __disposeResources36, LocalPiWriteExecutor;
export { LocalPiWriteExecutor, __addDisposableResource36, __disposeResources36 };
var __wakaru_init_write2_initialized = false;
export function init_write2() {
if (__wakaru_init_write2_initialized) return;
__wakaru_init_write2_initialized = true;
"use strict";
init_dist();
init_pi_write_exec_pb();
init_write_exec_pb();
init_mutation_queue();
init_path();
__addDisposableResource36 = function(env, value, async) {
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
__disposeResources36 = (function(SuppressedError2) {
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
LocalPiWriteExecutor = class {
    constructor(writeExecutor, workspacePath){
        this.writeExecutor = writeExecutor;
        this.workspacePath = workspacePath;
    }
    async execute(parentCtx, args, options2) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource36(env_1, createSpan(parentCtx.withName("LocalPiWriteExecutor.execute")), false);
            const resolvedPath = resolvePiPath(args.path, this.workspacePath);
            return withPiFileMutationQueue(resolvedPath, async ()=>{
                const result = await this.writeExecutor.execute(span.ctx, new WriteArgs({
                    path: resolvedPath,
                    fileText: args.content,
                    toolCallId: options2?.execId ?? ""
                }), options2);
                switch(result.result.case){
                    case "success":
                        return new PiWriteExecResult({
                            result: {
                                case: "success",
                                value: new PiWriteExecSuccess({
                                    output: `Successfully wrote ${args.content.length} bytes to ${args.path}`
                                })
                            }
                        });
                    case "rejected":
                        return new PiWriteExecResult({
                            result: {
                                case: "rejected",
                                value: new PiWriteExecRejected({
                                    reason: result.result.value.reason
                                })
                            }
                        });
                    case "permissionDenied":
                    case "noSpace":
                    case "error":
                        return new PiWriteExecResult({
                            result: {
                                case: "error",
                                value: new PiWriteExecError({
                                    error: "error" in result.result.value ? result.result.value.error : `Failed to write ${args.path}`
                                })
                            }
                        });
                    default:
                        return new PiWriteExecResult({
                            result: {
                                case: "error",
                                value: new PiWriteExecError({
                                    error: `Failed to write ${args.path}`
                                })
                            }
                        });
                }
            });
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources36(env_1);
        }
    }
};

}
