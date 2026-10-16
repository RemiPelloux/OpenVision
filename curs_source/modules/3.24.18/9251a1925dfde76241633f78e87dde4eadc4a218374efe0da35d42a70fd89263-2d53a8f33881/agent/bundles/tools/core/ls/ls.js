import { init_dist8 } from "../../../../../agent-exec/dist/index.js";
import { lsExecutorResource } from "../../../../../agent-exec/dist/ls.js";
import { createSpan } from "../../../../../agent-kv/dist/controlled.js";
import { CustomToolCallError, ToolCallRejectedError, init_common9, withSafeParsedArgs } from "../../common.js";
import { ToolErrorClassification, init_core5 } from "../../core.js";
import { init_formatters } from "./formatters.js";
import { init_worktree_paths } from "../worktree-paths.js";
import { init_dist26 } from "../../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { external_exports } from "../../../../../external_exports.js";
import { classifyLsError, createLsToolCall, createStringResult, createZodAgentTool, generateSeededUuid, lsDirectoryTreeNodeToString, maybeRedirectWorktriesPath } from "../../../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { LsArgs, LsError, LsRejected, LsResult, LsTimeout, init_ls_exec_pb } from "../../../../../proto/dist/generated/agent/v1/ls_exec_pb.js";
import { LsToolCall, init_ls_tool_pb } from "../../../../../proto/dist/generated/agent/v1/ls_tool_pb.js";
var __addDisposableResource90, __disposeResources90, LsToolCallTimeoutError2, parametersSchema19, createLsTool;
export { LsToolCallTimeoutError2, __addDisposableResource90, __disposeResources90, createLsTool, parametersSchema19 };
var __wakaru_init_ls5_initialized = false;
export function init_ls5() {
if (__wakaru_init_ls5_initialized) return;
__wakaru_init_ls5_initialized = true;
"use strict";
init_dist8();
init_dist26();
init_dist();
init_agent_pb();
init_ls_exec_pb();
init_ls_tool_pb();
init_zod();
init_common9();
init_core5();
init_worktree_paths();
init_formatters();
__addDisposableResource90 = function(env, value, async) {
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
__disposeResources90 = (function(SuppressedError2) {
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
LsToolCallTimeoutError2 = class extends CustomToolCallError {
    constructor(directoryTreeRoot){
        const message = "The operation timed out";
        super(ToolErrorClassification.TIMEOUT, {
            clientVisibleErrorMessage: message,
            modelVisibleErrorMessage: message,
            error: message
        });
        this.directoryTreeRoot = directoryTreeRoot;
    }
};
LsToolCallTimeoutError2.telemetryName = "LsToolCallTimeoutError";
parametersSchema19 = external_exports.object({
    target_directory: external_exports.string().describe("Path to directory to list contents of."),
    ignore_globs: external_exports.array(external_exports.string()).optional().describe(`Optional array of glob patterns to ignore.
All patterns match anywhere in the target directory. Patterns not starting with "**/" are automatically prepended with "**/".

Examples:
	- "*.js" (becomes "**/*.js") - ignore all .js files
	- "**/node_modules/**" - ignore all node_modules directories
	- "**/test/**/test_*.ts" - ignore all test_*.ts files in any test directory`)
});
createLsTool = (resourceAccessor, promptVersion)=>{
    const lsExecutor = resourceAccessor.get(lsExecutorResource);
    promptVersion = promptVersion ?? "latest";
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource90(env_1, createSpan(parentCtx.withName("lsExecute")), false);
            const args = new LsArgs({
                path: maybeRedirectWorktriesPath(rawArgs.target_directory),
                ignore: rawArgs.ignore_globs,
                toolCallId: meta.toolCallId
            });
            const baseToolCall = new LsToolCall({
                args,
                result: void 0
            });
            const result = await interactionHandler.executeToolCall(spanCtxt.ctx, createLsToolCall(baseToolCall), meta.toolCallId, async (ctx)=>{
                const execId = generateSeededUuid(meta.toolCallId);
                const result2 = await lsExecutor.execute(ctx, args, {
                    execId,
                    hookContextCollector: meta.hookContextCollector
                });
                switch(result2.result.case){
                    case "success":
                        return result2;
                    case "timeout":
                        throw new LsToolCallTimeoutError2(result2.result.value.directoryTreeRoot);
                    case "error":
                        throw classifyLsError(result2.result.value.error);
                    case "rejected":
                        throw new ToolCallRejectedError(result2.result.value.reason);
                    default:
                        throw new Error(`Unexpected result case: ${result2.result.case}`);
                }
            }, (result2)=>createLsToolCall(new LsToolCall({
                    ...baseToolCall,
                    result: result2
                })), meta.hookContextCollector);
            return result;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources90(env_1);
        }
    };
    const render2 = async (_ctx, result, _props)=>{
        let output;
        if (result.result.case === void 0) {
            output = "Tool call unexpectedly didn't return result. Try using terminal command to list the directory instead.";
        } else {
            switch(result.result.case){
                case "success":
                case "timeout":
                    if (!result.result.value.directoryTreeRoot) {
                        output = "Tool call unexpectedly didn't return result. Try using terminal command to list the directory instead.";
                        break;
                    }
                    output = lsDirectoryTreeNodeToString(result.result.value.directoryTreeRoot);
                    if (result.result.case === "timeout") {
                        output += "\n\nNote: The operation timed out after 5 seconds. The result is incomplete.";
                    }
                    break;
                case "error":
                    output = `Error listing directory: ${result.result.value.error}`;
                    break;
                case "rejected":
                    output = `Rejected: ${result.result.value.reason}`;
                    break;
                default:
                    {
                        const _exhaustiveCheck = result.result;
                        throw new Error("Unexpected result case");
                    }
            }
        }
        return createStringResult(output);
    };
    function getToolName10(version4) {
        switch(version4){
            case "dsv3-1018":
                return "list_dir";
            case "cursor-0226":
            case "dsv3-1205":
            case "latest":
            case "gpt5-codex":
            case "codex-cloud":
            case "haiku":
                return "LS";
            default:
                {
                    const _exhaustive = version4;
                    throw new Error(`Unhandled version: ${_exhaustive}`);
                }
        }
    }
    function getDescription6(version4) {
        switch(version4){
            case "dsv3-1018":
                return `Lists files and directories in a given path.
The 'target_directory' parameter can be relative to the workspace root or absolute.
You can optionally provide an array of glob patterns to ignore with the "ignore_globs" parameter.

Other details:
- The result does not display dot-files and dot-directories.`;
            case "cursor-0226":
            case "dsv3-1205":
            case "latest":
            case "gpt5-codex":
            case "codex-cloud":
            case "haiku":
                return `Lists files and directories in a given path.
The 'target_directory' parameter must be an absolute path.
You can optionally provide an array of glob patterns to ignore with the "ignore_globs" parameter.

Other details:
- The result does not display dot-files and dot-directories.`;
            default:
                {
                    const _exhaustive = version4;
                    throw new Error(`Unhandled version: ${_exhaustive}`);
                }
        }
    }
    const name17 = getToolName10(promptVersion);
    const description3 = getDescription6(promptVersion);
    return createZodAgentTool("LS", {
        name: name17,
        descriptionGenerator: (_props)=>description3,
        parameters: parametersSchema19,
        execute: withSafeParsedArgs(parametersSchema19, execute, createLsToolCall(new LsToolCall())),
        render: render2,
        serializeError: (error3)=>{
            if (error3 instanceof LsToolCallTimeoutError2) {
                return createLsToolCall(new LsToolCall({
                    result: new LsResult({
                        result: {
                            case: "timeout",
                            value: new LsTimeout({
                                directoryTreeRoot: error3.directoryTreeRoot
                            })
                        }
                    })
                }));
            }
            const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
            let result = new LsResult({
                result: {
                    case: "error",
                    value: new LsError({
                        error: errorMessage4
                    })
                }
            });
            if (error3 instanceof ToolCallRejectedError) {
                result = new LsResult({
                    result: {
                        case: "rejected",
                        value: new LsRejected({
                            reason: error3.message
                        })
                    }
                });
            }
            return createLsToolCall(new LsToolCall({
                result
            }));
        }
    });
};

}
