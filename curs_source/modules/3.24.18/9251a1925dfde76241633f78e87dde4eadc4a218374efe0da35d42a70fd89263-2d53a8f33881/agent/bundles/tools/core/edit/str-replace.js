import { createSpan } from "../../../../../agent-kv/dist/controlled.js";
import { init_common9 } from "../../common.js";
import { init_core5 } from "../../core.js";
import { AmbiguousStringError, EmptyStringError, IdenticalStringsError, StringNotFoundError, getDiffString, init_common15, serializeEditError, withStreamingEditParsedArgs } from "./common.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { createCounter, createHistogram } from "../../../../../dist_exports.js";
import { external_exports } from "../../../../../external_exports.js";
import { assertPlanModeAllowsFileEdit, createCall3, createEditToolCall, createZodAgentTool, editTransformResultToEditResult, formatStrReplaceResultForModel, getDescription2, getParametersSchema2, getToolName3, performEdit, renderEditResult, runSingleEdit } from "../../../../../mcp_sandbox_policy_exports.js";
import { init_dist4 } from "../../../../../metrics/dist/index.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { EditArgs, EditToolCall, init_edit_tool_pb } from "../../../../../proto/dist/generated/agent/v1/edit_tool_pb.js";
var __addDisposableResource84, __disposeResources84, strReplaceTotalCounter, strReplaceSuccessCounter, strReplaceErrorCounter, strReplaceLatencyHistogram, strReplaceWhitespaceInsensitiveCounter, strReplaceLinesModifiedHistogram, parametersSchema13, parametersSchema1018, createStrReplaceTool;
export { __addDisposableResource84, __disposeResources84, createStrReplaceTool, parametersSchema1018, parametersSchema13, strReplaceErrorCounter, strReplaceLatencyHistogram, strReplaceLinesModifiedHistogram, strReplaceSuccessCounter, strReplaceTotalCounter, strReplaceWhitespaceInsensitiveCounter };
var __wakaru_init_str_replace_initialized = false;
export function init_str_replace() {
if (__wakaru_init_str_replace_initialized) return;
__wakaru_init_str_replace_initialized = true;
"use strict";
init_dist();
init_dist4();
init_agent_pb();
init_edit_tool_pb();
init_zod();
init_common9();
init_core5();
init_common15();
__addDisposableResource84 = function(env, value, async) {
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
__disposeResources84 = (function(SuppressedError2) {
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
strReplaceTotalCounter = createCounter("agent.tools.str_replace.total", {
    description: "Total str-replace operations",
    labelNames: []
});
strReplaceSuccessCounter = createCounter("agent.tools.str_replace.success", {
    description: "Successful str-replace operations",
    labelNames: []
});
strReplaceErrorCounter = createCounter("agent.tools.str_replace.error", {
    description: "Failed str-replace operations",
    labelNames: [
        "error_type"
    ]
});
strReplaceLatencyHistogram = createHistogram("agent.tools.str_replace.latency_ms", {
    description: "Latency of str-replace operations in milliseconds",
    labelNames: []
});
strReplaceWhitespaceInsensitiveCounter = createCounter("agent.tools.str_replace.whitespace_insensitive", {
    description: "Number of times whitespace-insensitive fallback was used",
    labelNames: []
});
strReplaceLinesModifiedHistogram = createHistogram("agent.tools.str_replace.lines_modified", {
    description: "Number of lines modified in str-replace operations",
    labelNames: []
});
parametersSchema13 = external_exports.object({
    path: external_exports.string().describe("The absolute path to the file to modify"),
    old_string: external_exports.string().describe("The text to replace"),
    new_string: external_exports.string().describe("The text to replace it with (must be different from old_string)"),
    replace_all: external_exports.boolean().optional().describe("Replace all occurrences of old_string (default false)")
});
parametersSchema1018 = external_exports.object({
    file_path: external_exports.string().describe("The path to the file to modify. Always specify the target file as the first argument. You can use either a relative path in the workspace or an absolute path."),
    old_string: external_exports.string().describe("The text to replace"),
    new_string: external_exports.string().describe("The text to replace it with (must be different from old_string)"),
    replace_all: external_exports.boolean().optional().describe("Replace all occurences of old_string (default false)").default(false)
});
createStrReplaceTool = (resourceAccessor, formattingOptions, fileOperationLockManager, stateHandler, promptVersion, modelInfo, featureFlags)=>{
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource84(env_1, createSpan(parentCtx.withName("strReplaceExecute")), false);
            const startTime = performance.now();
            let usedWhitespaceInsensitive = false;
            let linesModified = 0;
            strReplaceTotalCounter.increment(spanCtxt.ctx, 1);
            const rawPath = "path" in rawArgs ? rawArgs.path : rawArgs.file_path;
            assertPlanModeAllowsFileEdit(rawPath, stateHandler);
            const args = new EditArgs({
                path: rawPath,
                streamContent: rawArgs.new_string
            });
            const editTool = new EditToolCall({
                args,
                result: void 0
            });
            const result = await interactionHandler.executeToolCall(spanCtxt.ctx, createCall3(editTool), meta.toolCallId, async (ctx)=>{
                const performEditResult = await performEdit(ctx, resourceAccessor, rawPath, async (ctx2, original)=>{
                    const eolSequence = "\n";
                    try {
                        const result2 = runSingleEdit(ctx2, {
                            formattingOptions,
                            contentsBeforeEdit: original,
                            eolSequence,
                            edit: {
                                old_string: rawArgs.old_string,
                                new_string: rawArgs.new_string,
                                replace_all: rawArgs.replace_all
                            },
                            includeLineNumbers: rawArgs.replace_all !== true,
                            multiFile: false,
                            useWhitespaceInsensitiveFallback: true
                        });
                        usedWhitespaceInsensitive = result2.usedWhitespaceInsensitive;
                        if (usedWhitespaceInsensitive) {
                            strReplaceWhitespaceInsensitiveCounter.increment(ctx2, 1);
                        }
                        const { diffString, linesAdded, linesRemoved } = await getDiffString({
                            original,
                            new: result2.contentsAfterEdit,
                            filePath: rawPath,
                            fileChangeType: "modified"
                        });
                        linesModified = linesAdded + linesRemoved;
                        const resultForModel = formatStrReplaceResultForModel(rawPath, rawArgs.replace_all, result2.occurrencesModified);
                        return {
                            modified: result2.contentsAfterEdit,
                            edit: {
                                resultForModel,
                                linesAdded,
                                linesRemoved,
                                diffString
                            }
                        };
                    } catch (error3) {
                        let errorType = "unknown";
                        if (error3 instanceof StringNotFoundError) {
                            errorType = "string_not_found";
                        } else if (error3 instanceof AmbiguousStringError) {
                            errorType = "ambiguous_string";
                        } else if (error3 instanceof EmptyStringError) {
                            errorType = "empty_string";
                        } else if (error3 instanceof IdenticalStringsError) {
                            errorType = "identical_strings";
                        }
                        strReplaceErrorCounter.increment(ctx2, 1, {
                            error_type: errorType
                        });
                        throw error3;
                    }
                }, meta, stateHandler);
                return editTransformResultToEditResult(rawPath, performEditResult, {
                    omitBeforeAfterFileStates: featureFlags?.omitEditBeforeAfterFileStates
                });
            }, (result2)=>createCall3(new EditToolCall({
                    ...editTool,
                    result: result2
                })), meta.hookContextCollector);
            const latency = performance.now() - startTime;
            strReplaceLatencyHistogram.histogram(spanCtxt.ctx, latency);
            if (result.result.case === "success") {
                strReplaceSuccessCounter.increment(spanCtxt.ctx, 1);
                strReplaceLinesModifiedHistogram.histogram(spanCtxt.ctx, linesModified);
            }
            return result;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources84(env_1);
        }
    };
    const render2 = renderEditResult;
    const toolName = getToolName3(promptVersion);
    const schema2 = getParametersSchema2(promptVersion);
    const streamingArgsConfig = promptVersion === "dsv3-1018" ? {
        path: "file_path",
        streamField: "new_string",
        fileOperationLockManager
    } : {
        path: "path",
        streamField: "new_string",
        fileOperationLockManager
    };
    return createZodAgentTool("STR_REPLACE", {
        name: toolName,
        descriptionGenerator: (props)=>getDescription2(promptVersion, props.allTools, modelInfo),
        parameters: schema2,
        execute: withStreamingEditParsedArgs(schema2, execute, createEditToolCall(new EditToolCall()), streamingArgsConfig),
        render: render2,
        serializeError: serializeEditError
    });
};

}
