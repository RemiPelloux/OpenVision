import { createSpan } from "../../../agent-kv/dist/controlled.js";
import { init_dist } from "../../../context/dist/index.js";
import { init_common6 } from "./common.js";
import { init_edit_diff } from "./edit-diff.js";
import { init_mutation_queue } from "./mutation-queue.js";
import { init_path } from "./path.js";
import { applyPiEdits, blockReasonToString, resolvePiPath, withPiFileMutationQueue } from "../../../mcp_sandbox_policy_exports.js";
import { PiEditExecError, PiEditExecRejected, PiEditExecResult, PiEditExecSuccess, init_pi_edit_exec_pb } from "../../../proto/dist/generated/agent/v1/pi_edit_exec_pb.js";
import { WriteArgs, init_write_exec_pb } from "../../../proto/dist/generated/agent/v1/write_exec_pb.js";
var import_promises33, __addDisposableResource31, __disposeResources31, LocalPiEditExecutor;
export { LocalPiEditExecutor, __addDisposableResource31, __disposeResources31, import_promises33 };
var __wakaru_init_edit2_initialized = false;
export function init_edit2() {
if (__wakaru_init_edit2_initialized) return;
__wakaru_init_edit2_initialized = true;
"use strict";
import_promises33 = require("node:fs/promises");
init_dist();
init_pi_edit_exec_pb();
init_write_exec_pb();
init_common6();
init_edit_diff();
init_mutation_queue();
init_path();
__addDisposableResource31 = function(env, value, async) {
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
__disposeResources31 = (function(SuppressedError2) {
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
LocalPiEditExecutor = class {
    constructor(permissionsService, writeExecutor, workspacePath){
        this.permissionsService = permissionsService;
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
            const span = __addDisposableResource31(env_1, createSpan(parentCtx.withName("LocalPiEditExecutor.execute")), false);
            const resolvedPath = resolvePiPath(args.path, this.workspacePath);
            return withPiFileMutationQueue(resolvedPath, async ()=>{
                const shouldBlockRead = await this.permissionsService.shouldBlockRead(resolvedPath);
                if (shouldBlockRead) {
                    return this.error(`Read blocked: ${blockReasonToString(shouldBlockRead)}`);
                }
                try {
                    const stats = await (0, import_promises33.stat)(resolvedPath);
                    if (stats.isDirectory()) {
                        return this.error(`Path is a directory: ${resolvedPath}`);
                    }
                    const rawContent = (await (0, import_promises33.readFile)(resolvedPath)).toString("utf8");
                    const editResult = applyPiEdits(args.path, rawContent, args.edits);
                    const writeResult = await this.writeExecutor.execute(span.ctx, new WriteArgs({
                        path: resolvedPath,
                        fileText: editResult.newContent,
                        toolCallId: options2?.execId ?? ""
                    }), options2);
                    switch(writeResult.result.case){
                        case "success":
                            return new PiEditExecResult({
                                result: {
                                    case: "success",
                                    value: new PiEditExecSuccess({
                                        output: `Successfully replaced ${args.edits.length} block(s) in ${args.path}.`,
                                        diff: editResult.diff,
                                        patch: editResult.patch,
                                        firstChangedLine: editResult.firstChangedLine
                                    })
                                }
                            });
                        case "rejected":
                            return new PiEditExecResult({
                                result: {
                                    case: "rejected",
                                    value: new PiEditExecRejected({
                                        reason: writeResult.result.value.reason
                                    })
                                }
                            });
                        default:
                            return this.error(this.writeErrorMessage(writeResult.result.value, args.path));
                    }
                } catch (error3) {
                    return this.error(error3 instanceof Error ? error3.message : "Unknown edit error");
                }
            });
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources31(env_1);
        }
    }
    writeErrorMessage(value, path64) {
        if (value !== void 0 && value !== null && typeof value === "object" && "error" in value) {
            const error3 = value.error;
            if (typeof error3 === "string") {
                return error3;
            }
        }
        return `Failed to edit ${path64}`;
    }
    error(error3) {
        return new PiEditExecResult({
            result: {
                case: "error",
                value: new PiEditExecError({
                    error: error3
                })
            }
        });
    }
};

}
