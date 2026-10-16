import { createSpan } from "../../../agent-kv/dist/controlled.js";
import { init_dist } from "../../../context/dist/index.js";
import { init_common6 } from "./common.js";
import { init_path } from "./path.js";
import { PI_DEFAULT_MAX_BYTES, init_truncate } from "./truncate.js";
import { blockReasonToString, formatSize, resolvePiPath, toPosixPath, truncateHead, walk } from "../../../mcp_sandbox_policy_exports.js";
import { init_esm8, minimatch } from "../../../node_modules/.pnpm/minimatch@10.2.5/node_modules/minimatch/dist/esm/index.js";
import { PiFindExecError, PiFindExecResult, PiFindExecSuccess, init_pi_find_exec_pb } from "../../../proto/dist/generated/agent/v1/pi_find_exec_pb.js";
var import_promises34, import_node_path54, __addDisposableResource32, __disposeResources32, DEFAULT_LIMIT, LocalPiFindExecutor;
export { DEFAULT_LIMIT, LocalPiFindExecutor, __addDisposableResource32, __disposeResources32, import_node_path54, import_promises34 };
var __wakaru_init_find_initialized = false;
export function init_find() {
if (__wakaru_init_find_initialized) return;
__wakaru_init_find_initialized = true;
"use strict";
import_promises34 = require("node:fs/promises");
import_node_path54 = require("node:path");
init_dist();
init_pi_find_exec_pb();
init_esm8();
init_common6();
init_path();
init_truncate();
__addDisposableResource32 = function(env, value, async) {
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
__disposeResources32 = (function(SuppressedError2) {
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
DEFAULT_LIMIT = 1e3;
LocalPiFindExecutor = class {
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
            const span = __addDisposableResource32(env_1, createSpan(parentCtx.withName("LocalPiFindExecutor.execute")), false);
            const searchPath = resolvePiPath(args.path || ".", this.workspacePath);
            const shouldBlock = await this.permissionsService.shouldBlockRead(searchPath);
            if (shouldBlock) {
                return this.error(`Find blocked: ${blockReasonToString(shouldBlock)}`);
            }
            try {
                const stats = await (0, import_promises34.stat)(searchPath);
                if (!stats.isDirectory()) {
                    return this.error(`Not a directory: ${searchPath}`);
                }
                const limit = Math.max(1, args.limit ?? DEFAULT_LIMIT);
                const files = await walk(searchPath, limit, async (path64)=>{
                    return !await this.permissionsService.shouldBlockRead(path64);
                });
                const effectivePattern = args.pattern.includes("/") && !args.pattern.startsWith("**/") ? `**/${args.pattern}` : args.pattern;
                const matches = files.map((path64)=>({
                        raw: path64,
                        relative: toPosixPath((0, import_node_path54.relative)(searchPath, path64))
                    })).filter(({ relative: relative17 })=>minimatch(relative17, effectivePattern, {
                        dot: true
                    }));
                if (matches.length === 0) {
                    return this.success("No files found matching pattern");
                }
                const output = matches.map((match2)=>match2.relative).join("\n");
                const truncated = truncateHead(output, {
                    maxLines: Number.MAX_SAFE_INTEGER
                });
                const resultLimitReached = files.length >= limit ? limit : void 0;
                const notices = [];
                if (resultLimitReached !== void 0) {
                    notices.push(`${limit} results limit reached. Use limit=${limit * 2} for more, or refine pattern`);
                }
                if (truncated.truncation.truncated) {
                    notices.push(`${formatSize(PI_DEFAULT_MAX_BYTES)} limit reached`);
                }
                return this.success(notices.length > 0 ? `${truncated.content}

[${notices.join(". ")}]` : truncated.content, {
                    resultLimitReached,
                    truncation: truncated.truncation.truncated ? truncated.truncation : void 0
                });
            } catch (error3) {
                return this.error(error3 instanceof Error ? error3.message : "Unknown find error");
            }
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources32(env_1);
        }
    }
    success(output, details) {
        return new PiFindExecResult({
            result: {
                case: "success",
                value: new PiFindExecSuccess({
                    output,
                    truncation: details?.truncation,
                    resultLimitReached: details?.resultLimitReached
                })
            }
        });
    }
    error(error3) {
        return new PiFindExecResult({
            result: {
                case: "error",
                value: new PiFindExecError({
                    error: error3
                })
            }
        });
    }
};

}
