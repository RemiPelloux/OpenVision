import { createSpan } from "../../../agent-kv/dist/controlled.js";
import { getRipgrepBinaryPath } from "../../../bidi_connect_exports.js";
import { init_dist } from "../../../context/dist/index.js";
import { init_common6 } from "./common.js";
import { init_path } from "./path.js";
import { PI_DEFAULT_MAX_BYTES, init_truncate } from "./truncate.js";
import { blockReasonToString, formatSize, resolvePiPath, truncateHead, truncateLine } from "../../../mcp_sandbox_policy_exports.js";
import { PiGrepExecError, PiGrepExecResult, PiGrepExecSuccess, init_pi_grep_exec_pb } from "../../../proto/dist/generated/agent/v1/pi_grep_exec_pb.js";
import { init_dist13 } from "../../../shell-exec/dist/index.js";
import { init_dist3 } from "../../../utils/dist/index.js";
import { spawnWorkload } from "../../../utils/dist/workload-spawn.js";
var import_node_child_process14, import_promises35, import_node_path55, import_node_readline, __addDisposableResource33, __disposeResources33, DEFAULT_LIMIT2, spawnWithPipedOutput, LocalPiGrepExecutor;
export { DEFAULT_LIMIT2, LocalPiGrepExecutor, __addDisposableResource33, __disposeResources33, import_node_child_process14, import_node_path55, import_node_readline, import_promises35, spawnWithPipedOutput };
var __wakaru_init_grep3_initialized = false;
export function init_grep3() {
if (__wakaru_init_grep3_initialized) return;
__wakaru_init_grep3_initialized = true;
"use strict";
import_node_child_process14 = require("node:child_process");
import_promises35 = require("node:fs/promises");
import_node_path55 = require("node:path");
import_node_readline = require("node:readline");
init_dist();
init_pi_grep_exec_pb();
init_dist13();
init_dist3();
init_common6();
init_path();
init_truncate();
__addDisposableResource33 = function(env, value, async) {
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
__disposeResources33 = (function(SuppressedError2) {
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
DEFAULT_LIMIT2 = 100;
spawnWithPipedOutput = import_node_child_process14.spawn;
LocalPiGrepExecutor = class {
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
            const span = __addDisposableResource33(env_1, createSpan(parentCtx.withName("LocalPiGrepExecutor.execute")), false);
            const searchPath = resolvePiPath(args.path || ".", this.workspacePath);
            const shouldBlock = await this.permissionsService.shouldBlockRead(searchPath);
            if (shouldBlock) {
                return this.error(`Search blocked: ${blockReasonToString(shouldBlock)}`);
            }
            try {
                const isDirectory2 = (await (0, import_promises35.stat)(searchPath)).isDirectory();
                const rgArgs = [
                    "--json",
                    "--line-number",
                    "--color=never",
                    "--hidden"
                ];
                if (args.ignoreCase) rgArgs.push("--ignore-case");
                if (args.literal) rgArgs.push("--fixed-strings");
                if (args.glob !== void 0) rgArgs.push("--glob", args.glob);
                rgArgs.push("--", args.pattern, searchPath);
                const child = spawnWorkload(spawnWithPipedOutput, getRipgrepBinaryPath(), rgArgs, {
                    stdio: [
                        "ignore",
                        "pipe",
                        "pipe"
                    ]
                });
                const matches = [];
                let stderr = "";
                let matchLimitReached = false;
                const limit = Math.max(1, args.limit ?? DEFAULT_LIMIT2);
                const rl = (0, import_node_readline.createInterface)({
                    input: child.stdout
                });
                child.stderr.on("data", (chunk)=>{
                    stderr += chunk.toString();
                });
                rl.on("line", (line)=>{
                    if (matches.length >= limit || line.trim().length === 0) return;
                    const parsed = JSON.parse(line);
                    if (parsed.type !== "match") return;
                    const filePath = parsed.data?.path?.text;
                    const lineNumber = parsed.data?.line_number;
                    if (filePath === void 0 || lineNumber === void 0) return;
                    matches.push({
                        filePath,
                        lineNumber,
                        lineText: parsed.data?.lines?.text?.replace(/\n$/, "")
                    });
                    if (matches.length >= limit) {
                        matchLimitReached = true;
                        child.kill();
                    }
                });
                const exitCode = await new Promise((resolve36, reject2)=>{
                    child.on("error", reject2);
                    child.on("close", resolve36);
                });
                rl.close();
                if (!matchLimitReached && exitCode !== 0 && exitCode !== 1) {
                    return this.error(stderr.trim() || `ripgrep exited with code ${exitCode}`);
                }
                if (matches.length === 0) {
                    return this.success("No matches found");
                }
                const allowedMatches = [];
                for (const match2 of matches){
                    if (!await this.permissionsService.shouldBlockRead(match2.filePath)) {
                        allowedMatches.push(match2);
                    }
                }
                if (allowedMatches.length === 0) {
                    return this.success("No matches found");
                }
                const { output, linesTruncated } = await this.formatMatches(allowedMatches, searchPath, isDirectory2, Math.max(0, args.context ?? 0));
                const truncated = truncateHead(output, {
                    maxLines: Number.MAX_SAFE_INTEGER
                });
                const notices = [];
                if (matchLimitReached) notices.push(`${limit} matches limit reached. Use limit=${limit * 2} for more, or refine pattern`);
                if (truncated.truncation.truncated) notices.push(`${formatSize(PI_DEFAULT_MAX_BYTES)} limit reached`);
                if (linesTruncated) notices.push("Some lines truncated to 500 chars. Use read tool to see full lines");
                return this.success(notices.length > 0 ? `${truncated.content}

[${notices.join(". ")}]` : truncated.content, {
                    matchLimitReached: matchLimitReached ? limit : void 0,
                    linesTruncated,
                    truncation: truncated.truncation.truncated ? truncated.truncation : void 0
                });
            } catch (error3) {
                return this.error(error3 instanceof Error ? error3.message : "Unknown grep error");
            }
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources33(env_1);
        }
    }
    async formatMatches(matches, searchPath, isDirectory2, context2) {
        const outputLines = [];
        let linesTruncated = false;
        for (const match2 of matches){
            const displayPath = isDirectory2 ? (0, import_node_path55.relative)(searchPath, match2.filePath) : (0, import_node_path55.basename)(match2.filePath);
            if (context2 === 0 && match2.lineText !== void 0) {
                const line = truncateLine(match2.lineText);
                linesTruncated = linesTruncated || line.wasTruncated;
                outputLines.push(`${displayPath}:${match2.lineNumber}: ${line.text}`);
                continue;
            }
            const fileLines = (await (0, import_promises35.readFile)(match2.filePath, "utf8")).replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");
            const start = Math.max(1, match2.lineNumber - context2);
            const end = Math.min(fileLines.length, match2.lineNumber + context2);
            for(let lineNumber = start; lineNumber <= end; lineNumber++){
                const line = truncateLine(fileLines[lineNumber - 1] ?? "");
                linesTruncated = linesTruncated || line.wasTruncated;
                outputLines.push(lineNumber === match2.lineNumber ? `${displayPath}:${lineNumber}: ${line.text}` : `${displayPath}-${lineNumber}- ${line.text}`);
            }
        }
        return {
            output: outputLines.join("\n"),
            linesTruncated
        };
    }
    success(output, details) {
        return new PiGrepExecResult({
            result: {
                case: "success",
                value: new PiGrepExecSuccess({
                    output,
                    truncation: details?.truncation,
                    matchLimitReached: details?.matchLimitReached,
                    linesTruncated: details?.linesTruncated ?? false
                })
            }
        });
    }
    error(error3) {
        return new PiGrepExecResult({
            result: {
                case: "error",
                value: new PiGrepExecError({
                    error: error3
                })
            }
        });
    }
};

}
