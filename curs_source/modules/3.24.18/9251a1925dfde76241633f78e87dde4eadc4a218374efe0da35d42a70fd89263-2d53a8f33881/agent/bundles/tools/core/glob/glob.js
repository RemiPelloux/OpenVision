import { grepExecutorResource } from "../../../../../agent-exec/dist/grep.js";
import { init_dist8 } from "../../../../../agent-exec/dist/index.js";
import { createSpan } from "../../../../../agent-kv/dist/controlled.js";
import { init_common9, withSafeParsedArgs } from "../../common.js";
import { init_ripgrep_error_classification } from "../ripgrep-error-classification.js";
import { init_mcp_metrics } from "../../../utils/mcp-metrics.js";
import { init_dist26 } from "../../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { createCounter } from "../../../../../dist_exports.js";
import { external_exports } from "../../../../../external_exports.js";
import { classifyRipgrepError, createGlobToolCall, createStringResult, createZodAgentTool, formatFilesForGlob, generateSeededUuid, getParametersSchema3, isEmptyPatternExecutorError, mapGrepResultToGlobToolResult, normalizeGlob, trackMcpDirectoryAccessIfApplicable, truncateOutput } from "../../../../../mcp_sandbox_policy_exports.js";
import { init_dist4 } from "../../../../../metrics/dist/index.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { GlobToolArgs, GlobToolCall, GlobToolError, GlobToolResult, init_glob_tool_pb } from "../../../../../proto/dist/generated/agent/v1/glob_tool_pb.js";
import { GrepArgs, init_grep_exec_pb } from "../../../../../proto/dist/generated/agent/v1/grep_exec_pb.js";
var import_node_path88, __addDisposableResource88, __disposeResources88, EMPTY_PATTERN_FALLBACK_REGEX, globEmptyPatternFallback, description2, parametersSchemaLatest2, parametersSchemaDsv32, TOTAL_CHARACTER_BUDGET, createGlobTool;
export { EMPTY_PATTERN_FALLBACK_REGEX, TOTAL_CHARACTER_BUDGET, __addDisposableResource88, __disposeResources88, createGlobTool, description2, globEmptyPatternFallback, import_node_path88, parametersSchemaDsv32, parametersSchemaLatest2 };
var __wakaru_init_glob_initialized = false;
export function init_glob() {
if (__wakaru_init_glob_initialized) return;
__wakaru_init_glob_initialized = true;
"use strict";
import_node_path88 = require("node:path");
init_dist8();
init_dist26();
init_dist();
init_dist4();
init_agent_pb();
init_glob_tool_pb();
init_grep_exec_pb();
init_zod();
init_mcp_metrics();
init_common9();
init_ripgrep_error_classification();
__addDisposableResource88 = function(env, value, async) {
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
__disposeResources88 = (function(SuppressedError2) {
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
EMPTY_PATTERN_FALLBACK_REGEX = ".";
globEmptyPatternFallback = createCounter("glob.empty_pattern_fallback", {
    description: "Glob retries after an executor rejected the empty-pattern invocation shape",
    labelNames: [
        "outcome"
    ]
});
description2 = `
Tool to search for files matching a glob pattern

- Works fast with codebases of any size
- Returns matching file paths sorted by modification time
- Use this tool when you need to find files by name patterns
- You have the capability to call multiple tools in a single response. It is always better to speculatively perform multiple searches that are potentially useful as a batch.
`;
parametersSchemaLatest2 = external_exports.object({
    target_directory: external_exports.string().optional().describe("Absolute path to directory to search for files in. If not provided, defaults to Cursor workspace root."),
    glob_pattern: external_exports.string().describe(`The glob pattern to match files against.
Patterns not starting with "**/" are automatically prepended with "**/" to enable recursive searching.

Examples:
	- "*.js" (becomes "**/*.js") - find all .js files
	- "**/node_modules/**" - find all node_modules directories
	- "**/test/**/test_*.ts" - find all test_*.ts files in any test directory`)
});
parametersSchemaDsv32 = external_exports.object({
    target_directory: external_exports.string().optional().describe("Path to directory to search for files in. If not provided, defaults to Cursor workspace roots."),
    glob_pattern: external_exports.string().describe(`The glob pattern to match files against.
Patterns not starting with "**/" are automatically prepended with "**/" to enable recursive searching.

Examples:
	- "*.js" (becomes "**/*.js") - find all .js files
	- "**/node_modules/**" - find all node_modules directories
	- "**/test/**/test_*.ts" - find all test_*.ts files in any test directory
`)
});
TOTAL_CHARACTER_BUDGET = 5e3;
createGlobTool = (resourceAccessor, promptVersion = "latest")=>{
    const grepExecutor = resourceAccessor.get(grepExecutorResource);
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource88(env_1, createSpan(parentCtx.withName("globExecute")), false);
            const normalizedGlob = normalizeGlob(rawArgs.glob_pattern);
            trackMcpDirectoryAccessIfApplicable(spanCtxt.ctx, rawArgs.target_directory, "glob");
            const args = new GrepArgs({
                path: rawArgs.target_directory,
                glob: normalizedGlob,
                outputMode: "files_with_matches",
                toolCallId: meta.toolCallId
            });
            const displayArgs = new GlobToolArgs({
                targetDirectory: rawArgs.target_directory,
                globPattern: rawArgs.glob_pattern
            });
            const baseToolCall = new GlobToolCall({
                args: displayArgs,
                result: void 0
            });
            const grepResult = await interactionHandler.executeToolCall(spanCtxt.ctx, createGlobToolCall(baseToolCall), meta.toolCallId, async (ctx)=>{
                const execId = generateSeededUuid(meta.toolCallId);
                let execResult = await grepExecutor.execute(ctx, args, {
                    execId,
                    hookContextCollector: meta.hookContextCollector
                });
                if (execResult.result.case === "error" && isEmptyPatternExecutorError(execResult.result.value.error)) {
                    const retryResult = await grepExecutor.execute(ctx, new GrepArgs({
                        ...args,
                        pattern: EMPTY_PATTERN_FALLBACK_REGEX
                    }), {
                        execId: generateSeededUuid(`${meta.toolCallId}:empty-pattern-fallback`),
                        hookContextCollector: meta.hookContextCollector
                    });
                    globEmptyPatternFallback.increment(ctx, 1, {
                        outcome: retryResult.result.case === "success" ? "success" : "error"
                    });
                    if (retryResult.result.case === "success") {
                        execResult = retryResult;
                    }
                }
                switch(execResult.result.case){
                    case "success":
                        return execResult;
                    case "error":
                        throw classifyRipgrepError(execResult.result.value.error);
                    default:
                        throw new Error(`Unexpected result case: ${execResult.result.case}`);
                }
            }, (r)=>createGlobToolCall(new GlobToolCall({
                    ...baseToolCall,
                    result: mapGrepResultToGlobToolResult(r)
                })), meta.hookContextCollector);
            return mapGrepResultToGlobToolResult(grepResult);
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources88(env_1);
        }
    };
    const render2 = async (_ctx, result, _props)=>{
        const searchRoot = result.result.case === "success" ? result.result.value.path ?? "." : ".";
        return createStringResult(formatFilesForGlob(result, searchRoot));
    };
    const name17 = promptVersion === "dsv3-1018" ? "glob_file_search" : "Glob";
    const parametersSchema29 = getParametersSchema3(promptVersion);
    return createZodAgentTool("GLOB", {
        name: name17,
        descriptionGenerator: (_props)=>description2,
        parameters: parametersSchema29,
        execute: withSafeParsedArgs(parametersSchema29, execute, createGlobToolCall(new GlobToolCall())),
        render: render2,
        serializeError: (error3)=>{
            const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
            const modelVisibleError = truncateOutput(errorMessage4, TOTAL_CHARACTER_BUDGET, true).output;
            return createGlobToolCall(new GlobToolCall({
                result: new GlobToolResult({
                    result: {
                        case: "error",
                        value: new GlobToolError({
                            error: modelVisibleError
                        })
                    }
                })
            }));
        }
    });
};

}
