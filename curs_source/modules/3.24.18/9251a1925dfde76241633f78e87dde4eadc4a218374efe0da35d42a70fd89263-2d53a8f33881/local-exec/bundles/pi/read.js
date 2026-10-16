import { createSpan } from "../../../agent-kv/dist/controlled.js";
import { init_dist } from "../../../context/dist/index.js";
import { init_common6 } from "./common.js";
import { init_path } from "./path.js";
import { PI_DEFAULT_MAX_BYTES, init_truncate } from "./truncate.js";
import { blockReasonToString, formatSize, resolvePiReadPath, truncateHead } from "../../../mcp_sandbox_policy_exports.js";
import { PiReadExecError, PiReadExecResult, PiReadExecSuccess, init_pi_read_exec_pb } from "../../../proto/dist/generated/agent/v1/pi_read_exec_pb.js";
var import_promises37, __addDisposableResource35, __disposeResources35, LocalPiReadExecutor;
export { LocalPiReadExecutor, __addDisposableResource35, __disposeResources35, import_promises37 };
var __wakaru_init_read2_initialized = false;
export function init_read2() {
if (__wakaru_init_read2_initialized) return;
__wakaru_init_read2_initialized = true;
"use strict";
import_promises37 = require("node:fs/promises");
init_dist();
init_pi_read_exec_pb();
init_common6();
init_path();
init_truncate();
__addDisposableResource35 = function(env, value, async) {
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
__disposeResources35 = (function(SuppressedError2) {
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
LocalPiReadExecutor = class {
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
            const span = __addDisposableResource35(env_1, createSpan(parentCtx.withName("LocalPiReadExecutor.execute")), false);
            const resolvedPath = resolvePiReadPath(args.path, this.workspacePath);
            const shouldBlock = await this.permissionsService.shouldBlockRead(resolvedPath);
            if (shouldBlock) {
                return this.error(`Read blocked: ${blockReasonToString(shouldBlock)}`);
            }
            try {
                const stats = await (0, import_promises37.stat)(resolvedPath);
                if (stats.isDirectory()) {
                    return this.error(`Path is a directory: ${resolvedPath}`);
                }
                const text4 = (await (0, import_promises37.readFile)(resolvedPath)).toString("utf8");
                const allLines = text4.split("\n");
                const startLine = args.offset !== void 0 ? Math.max(0, args.offset - 1) : 0;
                if (startLine >= allLines.length) {
                    return this.error(`Offset ${args.offset} is beyond end of file (${allLines.length} lines total)`);
                }
                const selected = args.limit !== void 0 ? allLines.slice(startLine, startLine + args.limit).join("\n") : allLines.slice(startLine).join("\n");
                const { content, truncation } = truncateHead(selected);
                const startLineDisplay = startLine + 1;
                let output = content;
                if (truncation.firstLineExceedsLimit) {
                    const firstLineSize = formatSize(Buffer.byteLength(allLines[startLine] ?? "", "utf8"));
                    output = `[Line ${startLineDisplay} is ${firstLineSize}, exceeds ${formatSize(PI_DEFAULT_MAX_BYTES)} limit. Use bash: sed -n '${startLineDisplay}p' ${args.path} | head -c ${PI_DEFAULT_MAX_BYTES}]`;
                } else if (truncation.truncated) {
                    const endLine = startLineDisplay + truncation.outputLines - 1;
                    output += `

[Showing lines ${startLineDisplay}-${endLine} of ${allLines.length}. Use offset=${endLine + 1} to continue.]`;
                } else if (args.limit !== void 0 && startLine + args.limit < allLines.length) {
                    const nextOffset = startLine + args.limit + 1;
                    output += `

[${allLines.length - (startLine + args.limit)} more lines in file. Use offset=${nextOffset} to continue.]`;
                }
                return new PiReadExecResult({
                    result: {
                        case: "success",
                        value: new PiReadExecSuccess({
                            output,
                            truncation: truncation.truncated ? truncation : void 0
                        })
                    }
                });
            } catch (error3) {
                return this.error(error3 instanceof Error ? error3.message : "Unknown read error");
            }
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources35(env_1);
        }
    }
    error(error3) {
        return new PiReadExecResult({
            result: {
                case: "error",
                value: new PiReadExecError({
                    error: error3
                })
            }
        });
    }
};

}
