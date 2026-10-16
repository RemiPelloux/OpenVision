import { diagnosticsExecutorResource } from "../../../../agent-exec/dist/diagnostics.js";
import { init_dist8 } from "../../../../agent-exec/dist/index.js";
import { createSpan } from "../../../../agent-kv/dist/controlled.js";
import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { ToolCallUnexpectedEnvironmentError, ToolTimeoutError, init_common9, withSafeParsedArgs } from "../common.js";
import { init_lenient_array } from "../lenient-array.js";
import { READ_LINT_TIMEOUT_MS, init_overridable_config } from "../../utils/overridable-config.js";
import { init_dist26 } from "../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { external_exports } from "../../../../external_exports.js";
import { appendSystemReminder, createStringResult, createZodAgentTool, generateSeededUuid, lenientArray } from "../../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { createErrorResult2, createReadLintsToolCall2, createSuccessResult4 } from "../../../../pdf_worker_exports.js";
import { init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { DiagnosticSeverity, DiagnosticsArgs, init_diagnostics_exec_pb } from "../../../../proto/dist/generated/agent/v1/diagnostics_exec_pb.js";
import { DiagnosticItem, DiagnosticRange, FileDiagnostics, ReadLintsToolArgs, ReadLintsToolCall, init_read_lints_tool_pb } from "../../../../proto/dist/generated/agent/v1/read_lints_tool_pb.js";
import { Position, init_utils_pb } from "../../../../proto/dist/generated/agent/v1/utils_pb.js";
var __addDisposableResource94, __disposeResources94, logger98, readLintsParametersSchema, STALE_LINTS_REMINDER, createReadLintsTool;
export { STALE_LINTS_REMINDER, __addDisposableResource94, __disposeResources94, createReadLintsTool, logger98, readLintsParametersSchema };
var __wakaru_init_read_lints_initialized = false;
export function init_read_lints() {
if (__wakaru_init_read_lints_initialized) return;
__wakaru_init_read_lints_initialized = true;
"use strict";
init_dist8();
init_dist26();
init_dist();
init_agent_pb();
init_diagnostics_exec_pb();
init_read_lints_tool_pb();
init_utils_pb();
init_zod();
init_overridable_config();
init_common9();
init_lenient_array();
__addDisposableResource94 = function(env, value, async) {
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
__disposeResources94 = (function(SuppressedError2) {
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
logger98 = createLogger("@anysphere/agent/tools/read-lints");
readLintsParametersSchema = external_exports.object({
    paths: lenientArray(external_exports.array(external_exports.string()), {
        field: "paths",
        primitiveItems: true
    }).optional().describe("Optional. An array of paths to files or directories to read linter errors for. You can use either relative paths in the workspace or absolute paths. If provided, returns diagnostics for the specified files/directories only. If not provided, returns diagnostics for all files in the workspace.")
}).passthrough();
STALE_LINTS_REMINDER = 'Lints marked "stale" were computed on an older version of the file, and may be outdated.';
createReadLintsTool = (resourceAccessor, promptVersion, options2)=>{
    promptVersion = promptVersion ?? "latest";
    const executor = resourceAccessor.get(diagnosticsExecutorResource);
    const fileOperationLockManager = options2?.fileOperationLockManager;
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource94(env_1, createSpan(parentCtx.withName("readLintsExecute")), false);
            const rawArgsWithExtra = rawArgs;
            if (rawArgsWithExtra.offset !== void 0 || rawArgsWithExtra.limit !== void 0) {
                logger98.info(spanCtxt.ctx, "ReadLints called with offset or limit", {
                    offset: rawArgsWithExtra.offset,
                    limit: rawArgsWithExtra.limit,
                    paths: rawArgs.paths,
                    toolCallId: meta.toolCallId
                });
            }
            const toolArgs = new ReadLintsToolArgs({
                paths: rawArgs.paths
            });
            const baseToolCall = new ReadLintsToolCall({
                args: toolArgs,
                result: void 0
            });
            const result = await interactionHandler.executeToolCall(spanCtxt.ctx, createReadLintsToolCall2(baseToolCall), meta.toolCallId, async (ctx)=>{
                const fileDiagnosticsResults = [];
                let totalDiagnostics = 0;
                const paths = rawArgs.paths || [];
                const errors = [];
                let hasTimeoutError = false;
                let hasNonTimeoutError = false;
                for (const path64 of paths){
                    const env_2 = {
                        stack: [],
                        error: void 0,
                        hasError: false
                    };
                    try {
                        const _lockHandle = __addDisposableResource94(env_2, fileOperationLockManager === void 0 ? void 0 : await fileOperationLockManager.waitForLock(ctx, path64), false);
                        const abortController = new AbortController();
                        try {
                            const timeoutId = setTimeout(()=>{
                                abortController.abort();
                            }, READ_LINT_TIMEOUT_MS(spanCtxt.ctx));
                            let result2;
                            try {
                                const execArgs = new DiagnosticsArgs({
                                    path: path64,
                                    toolCallId: meta.toolCallId
                                });
                                result2 = await executor.execute(ctx, execArgs, {
                                    execId: generateSeededUuid(`${meta.toolCallId}-readlints-${path64}`),
                                    hookContextCollector: meta.hookContextCollector
                                });
                            } finally{
                                clearTimeout(timeoutId);
                            }
                            if (abortController.signal.aborted) {
                                const errorMessage4 = `Failed to get diagnostics for ${path64}: Request timed out after 10 seconds`;
                                errors.push(errorMessage4);
                                hasTimeoutError = true;
                                logger98.error(spanCtxt.ctx, "ReadLintsTool aborted", errorMessage4);
                                continue;
                            }
                            if (result2.result.case === "success") {
                                const success = result2.result.value;
                                const diagnosticItems = success.diagnostics.filter((diag)=>diag.severity === DiagnosticSeverity.ERROR || diag.severity === DiagnosticSeverity.WARNING).map((diag)=>new DiagnosticItem({
                                        severity: diag.severity,
                                        range: new DiagnosticRange({
                                            start: new Position({
                                                line: diag.range?.start?.line ?? 0,
                                                column: diag.range?.start?.column ?? 0
                                            }),
                                            end: new Position({
                                                line: diag.range?.end?.line ?? 0,
                                                column: diag.range?.end?.column ?? 0
                                            })
                                        }),
                                        message: diag.message,
                                        source: diag.source,
                                        code: diag.code,
                                        isStale: diag.isStale ?? false
                                    }));
                                fileDiagnosticsResults.push(new FileDiagnostics({
                                    path: success.path,
                                    diagnostics: diagnosticItems,
                                    diagnosticsCount: diagnosticItems.length
                                }));
                                totalDiagnostics += diagnosticItems.length;
                            } else {
                                let errorMessage4 = `Failed to get diagnostics for ${path64}: `;
                                switch(result2.result.case){
                                    case "error":
                                        errorMessage4 += result2.result.value.error;
                                        break;
                                    case "rejected":
                                        errorMessage4 += `Rejected - ${result2.result.value.reason}`;
                                        break;
                                    case "fileNotFound":
                                        errorMessage4 += "File not found";
                                        break;
                                    case "permissionDenied":
                                        errorMessage4 += "Permission denied";
                                        break;
                                    default:
                                        errorMessage4 += "Unknown error";
                                }
                                errors.push(errorMessage4);
                                hasNonTimeoutError = true;
                                logger98.error(spanCtxt.ctx, "ReadLintsTool error message", errorMessage4);
                            }
                        } catch (error3) {
                            let errorMessage4 = `Failed to get diagnostics for ${path64}: `;
                            if (error3 instanceof Error && error3.name === "AbortError" && abortController.signal.aborted) {
                                errorMessage4 += "Request timed out after 10 seconds";
                                hasTimeoutError = true;
                            } else {
                                errorMessage4 += error3 instanceof Error ? error3.message : String(error3);
                                hasNonTimeoutError = true;
                            }
                            errors.push(errorMessage4);
                            logger98.error(spanCtxt.ctx, "ReadLintsTool error", error3);
                        }
                    } catch (e_2) {
                        env_2.error = e_2;
                        env_2.hasError = true;
                    } finally{
                        __disposeResources94(env_2);
                    }
                }
                if (fileDiagnosticsResults.length > 0) {
                    return createSuccessResult4(fileDiagnosticsResults, totalDiagnostics);
                } else if (errors.length > 0) {
                    const joinedErrors = errors.join("; ");
                    if (hasTimeoutError && !hasNonTimeoutError) {
                        throw new ToolTimeoutError({
                            clientVisibleErrorMessage: joinedErrors,
                            modelVisibleErrorMessage: joinedErrors,
                            error: joinedErrors
                        });
                    }
                    throw new ToolCallUnexpectedEnvironmentError(joinedErrors);
                } else if (paths.length === 0) {
                    return createSuccessResult4([], 0);
                } else {
                    throw new ToolCallUnexpectedEnvironmentError("No diagnostics found for the specified paths");
                }
            }, (result2)=>createReadLintsToolCall2(new ReadLintsToolCall({
                    ...baseToolCall,
                    result: result2
                })), meta.hookContextCollector);
            return result;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources94(env_1);
        }
    };
    const render2 = async (_ctx, { result }, _props)=>{
        switch(result.case){
            case "success":
                {
                    const value = result.value;
                    if (value.totalDiagnostics === 0) {
                        return createStringResult("No linter errors found.");
                    }
                    const output = [];
                    let hasStaleLints = false;
                    const useNewFormatting = promptVersion !== "dsv3-1018";
                    const linePrefix = useNewFormatting ? "L" : "Line ";
                    for (const fileDiag of value.fileDiagnostics){
                        if (fileDiag.diagnosticsCount > 0) {
                            output.push(`
${fileDiag.path} (${fileDiag.diagnosticsCount} error${fileDiag.diagnosticsCount > 1 ? "s" : ""}):`);
                            for (const diag of fileDiag.diagnostics){
                                const severity = diag.severity === DiagnosticSeverity.ERROR ? "ERROR" : diag.severity === DiagnosticSeverity.WARNING ? "WARNING" : diag.severity === DiagnosticSeverity.INFORMATION ? "INFO" : "HINT";
                                const staleSuffix = diag.isStale === true && useNewFormatting ? ", stale" : "";
                                if (diag.isStale === true) {
                                    hasStaleLints = true;
                                }
                                output.push(`  [${severity}] ${linePrefix}${diag.range?.start?.line ?? 0}:${diag.range?.start?.column ?? 0} - ${diag.message}${diag.source ? ` (${diag.source})` : ""}${staleSuffix}`);
                            }
                        }
                    }
                    const rendered = createStringResult(`Found ${value.totalDiagnostics} linter error${value.totalDiagnostics > 1 ? "s" : ""} in ${value.totalFiles} file${value.totalFiles > 1 ? "s" : ""}:${output.join("\n")}`);
                    if (hasStaleLints && promptVersion !== "dsv3-1018") {
                        return appendSystemReminder(rendered, STALE_LINTS_REMINDER);
                    }
                    return rendered;
                }
            case "error":
                return createStringResult(`Error: ${result.value.errorMessage}`);
            case void 0:
                return createStringResult("Unknown error");
            default:
                {
                    const _exhaustiveCheck = result;
                    throw new Error(`Unhandled result case: ${_exhaustiveCheck}`);
                }
        }
    };
    const toolName = promptVersion === "dsv3-1018" ? "read_lints" : "ReadLints";
    function getDescription6(version4) {
        switch(version4){
            case "cursor-0226":
                return "Read and display linter errors from the current workspace. You can provide paths to specific files or directories, or omit the argument to get diagnostics for all files.";
            case "gpt5-codex":
            case "codex-cloud":
                return `Read linter warnings/errors. Only includes IDE diagnostics, which can occasionally be outdated. Optional paths array limits scope. Skip for unchanged files and ignore issues that existed before your changes.`;
            default:
                return `Read and display linter errors from the current workspace. You can provide paths to specific files or directories, or omit the argument to get diagnostics for all files.

- If a file path is provided, returns diagnostics for that file only
- If a directory path is provided, returns diagnostics for all files within that directory
- If no path is provided, returns diagnostics for all files in the workspace
- This tool can return linter errors that were already present before your edits, so avoid calling it with a very wide scope of files
- NEVER call this tool on a file unless you've edited it or are about to edit it`;
        }
    }
    const description3 = getDescription6(promptVersion);
    return createZodAgentTool("READ_LINTS", {
        name: toolName,
        contextType: {
            type: "dynamic",
            conciseStaticContext: "Check for linter errors after substantive edits."
        },
        descriptionGenerator: (_props)=>description3,
        parameters: readLintsParametersSchema,
        execute: withSafeParsedArgs(readLintsParametersSchema, execute, createReadLintsToolCall2(new ReadLintsToolCall())),
        render: render2,
        serializeError: (error3)=>{
            const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
            return createReadLintsToolCall2(new ReadLintsToolCall({
                result: createErrorResult2(errorMessage4)
            }));
        }
    });
};

}
