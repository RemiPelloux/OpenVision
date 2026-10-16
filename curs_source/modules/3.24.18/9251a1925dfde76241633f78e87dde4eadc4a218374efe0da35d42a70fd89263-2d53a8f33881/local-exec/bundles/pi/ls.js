import { createSpan } from "../../../agent-kv/dist/controlled.js";
import { init_dist } from "../../../context/dist/index.js";
import { init_common6 } from "./common.js";
import { init_path } from "./path.js";
import { PI_DEFAULT_MAX_BYTES, init_truncate } from "./truncate.js";
import { blockReasonToString, formatSize, resolvePiPath, truncateHead } from "../../../mcp_sandbox_policy_exports.js";
import { PiLsExecError, PiLsExecResult, PiLsExecSuccess, init_pi_ls_exec_pb } from "../../../proto/dist/generated/agent/v1/pi_ls_exec_pb.js";
var import_promises36, import_node_path56, __addDisposableResource34, __disposeResources34, DEFAULT_LIMIT3, LocalPiLsExecutor;
export { DEFAULT_LIMIT3, LocalPiLsExecutor, __addDisposableResource34, __disposeResources34, import_node_path56, import_promises36 };
var __wakaru_init_ls3_initialized = false;
export function init_ls3() {
if (__wakaru_init_ls3_initialized) return;
__wakaru_init_ls3_initialized = true;
"use strict";
import_promises36 = require("node:fs/promises");
import_node_path56 = require("node:path");
init_dist();
init_pi_ls_exec_pb();
init_common6();
init_path();
init_truncate();
__addDisposableResource34 = function(env, value, async) {
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
__disposeResources34 = (function(SuppressedError2) {
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
DEFAULT_LIMIT3 = 500;
LocalPiLsExecutor = class {
    constructor(permissionsService, workspacePath){
        this.permissionsService = permissionsService;
        this.workspacePath = workspacePath;
    }
    async execute(parentCtx, args) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource34(env_1, createSpan(parentCtx.withName("LocalPiLsExecutor.execute")), false);
            const dirPath = resolvePiPath(args.path || ".", this.workspacePath);
            const shouldBlock = await this.permissionsService.shouldBlockRead(dirPath);
            if (shouldBlock) {
                return this.error(`List blocked: ${blockReasonToString(shouldBlock)}`);
            }
            try {
                const stats = await (0, import_promises36.stat)(dirPath);
                if (!stats.isDirectory()) {
                    return this.error(`Not a directory: ${dirPath}`);
                }
                const limit = Math.max(1, args.limit ?? DEFAULT_LIMIT3);
                const entries = (await (0, import_promises36.readdir)(dirPath)).sort((a, b2)=>a.toLowerCase().localeCompare(b2.toLowerCase()));
                const outputEntries = [];
                let entryLimitReached = false;
                for (const entry of entries){
                    if (outputEntries.length >= limit) {
                        entryLimitReached = true;
                        break;
                    }
                    try {
                        const entryPath = (0, import_node_path56.join)(dirPath, entry);
                        if (await this.permissionsService.shouldBlockRead(entryPath)) {
                            continue;
                        }
                        const entryStats = await (0, import_promises36.stat)(entryPath);
                        outputEntries.push(entry + (entryStats.isDirectory() ? "/" : ""));
                    } catch  {}
                }
                if (outputEntries.length === 0) {
                    return this.success("(empty directory)");
                }
                const truncated = truncateHead(outputEntries.join("\n"), {
                    maxLines: Number.MAX_SAFE_INTEGER
                });
                const notices = [];
                if (entryLimitReached) {
                    notices.push(`${limit} entries limit reached. Use limit=${limit * 2} for more`);
                }
                if (truncated.truncation.truncated) {
                    notices.push(`${formatSize(PI_DEFAULT_MAX_BYTES)} limit reached`);
                }
                return this.success(notices.length > 0 ? `${truncated.content}

[${notices.join(". ")}]` : truncated.content, {
                    entryLimitReached: entryLimitReached ? limit : void 0,
                    truncation: truncated.truncation.truncated ? truncated.truncation : void 0
                });
            } catch (error3) {
                return this.error(error3 instanceof Error ? error3.message : "Unknown ls error");
            }
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources34(env_1);
        }
    }
    success(output, details) {
        return new PiLsExecResult({
            result: {
                case: "success",
                value: new PiLsExecSuccess({
                    output,
                    truncation: details?.truncation,
                    entryLimitReached: details?.entryLimitReached
                })
            }
        });
    }
    error(error3) {
        return new PiLsExecResult({
            result: {
                case: "error",
                value: new PiLsExecError({
                    error: error3
                })
            }
        });
    }
};

}
