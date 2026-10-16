import { deleteExecutorResource } from "../../../../agent-exec/dist/delete.js";
import { init_dist8 } from "../../../../agent-exec/dist/index.js";
import { createSpan } from "../../../../agent-kv/dist/controlled.js";
import { ASK_MODE_MODEL_ERROR, CustomToolCallError, ToolCallRejectedError, ToolCallUnexpectedEnvironmentError, init_common9, withSafeParsedArgs } from "../common.js";
import { ToolErrorClassification, init_core5 } from "../core.js";
import { init_dist26 } from "../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { external_exports } from "../../../../external_exports.js";
import { createDeleteToolCall, createStringResult, createZodAgentTool, generateSeededUuid, toolCallArgsFor } from "../../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { DeleteArgs, DeleteError, DeletePermissionDenied, DeleteRejected, DeleteResult, init_delete_exec_pb } from "../../../../proto/dist/generated/agent/v1/delete_exec_pb.js";
import { DeleteToolCall, init_delete_tool_pb } from "../../../../proto/dist/generated/agent/v1/delete_tool_pb.js";
var __addDisposableResource81, __disposeResources81, DeletePermissionDeniedError, parametersSchemaLatest, parametersSchemaDsv3, createDeleteTool;
export { DeletePermissionDeniedError, __addDisposableResource81, __disposeResources81, createDeleteTool, parametersSchemaDsv3, parametersSchemaLatest };
var __wakaru_init_delete4_initialized = false;
export function init_delete4() {
if (__wakaru_init_delete4_initialized) return;
__wakaru_init_delete4_initialized = true;
"use strict";
init_dist8();
init_dist26();
init_dist();
init_agent_pb();
init_delete_exec_pb();
init_delete_tool_pb();
init_zod();
init_common9();
init_core5();
__addDisposableResource81 = function(env, value, async) {
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
__disposeResources81 = (function(SuppressedError2) {
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
DeletePermissionDeniedError = class extends CustomToolCallError {
    constructor(path64, isReadonly){
        super(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
            error: `Permission denied: ${path64}`,
            clientVisibleErrorMessage: isReadonly ? ASK_MODE_MODEL_ERROR : `Permission denied: ${path64}`,
            modelVisibleErrorMessage: isReadonly ? ASK_MODE_MODEL_ERROR : `Permission denied: ${path64}`
        });
        this.path = path64;
        this.isReadonly = isReadonly;
    }
};
DeletePermissionDeniedError.telemetryName = "DeletePermissionDeniedError";
parametersSchemaLatest = external_exports.object({
    path: external_exports.string().describe("The absolute path of the file to delete")
});
parametersSchemaDsv3 = external_exports.object({
    target_file: external_exports.string().describe("The path of the file to delete, relative to the workspace root."),
    explanation: external_exports.string().optional().describe("One sentence explanation as to why this tool is being used, and how it contributes to the goal.")
});
createDeleteTool = (resourceAccessor, fileOperationLockManager, stateHandler, promptVersion)=>{
    const deleteExecutor = resourceAccessor.get(deleteExecutorResource);
    promptVersion = promptVersion ?? "latest";
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource81(env_1, createSpan(parentCtx.withName("deleteExecute")), false);
            const path64 = "path" in rawArgs ? rawArgs.path : rawArgs.target_file;
            const _lockHandle = __addDisposableResource81(env_1, await fileOperationLockManager.waitForLock(spanCtxt.ctx, path64), false);
            const args = new DeleteArgs({
                path: path64,
                toolCallId: meta.toolCallId
            });
            const baseToolCall = new DeleteToolCall({
                args,
                result: void 0
            });
            const result = await interactionHandler.executeToolCall(spanCtxt.ctx, createDeleteToolCall(baseToolCall), meta.toolCallId, async (ctx)=>{
                const execId = generateSeededUuid(meta.toolCallId);
                const execResult = await deleteExecutor.execute(ctx, args, {
                    execId,
                    hookContextCollector: meta.hookContextCollector
                });
                switch(execResult.result.case){
                    case "success":
                        return execResult;
                    case "fileNotFound":
                        throw new ToolCallUnexpectedEnvironmentError(`File not found: ${execResult.result.value.path}`);
                    case "notFile":
                        throw new ToolCallUnexpectedEnvironmentError(`Path is not a file (${execResult.result.value.actualType}): ${execResult.result.value.path}`);
                    case "permissionDenied":
                        throw new DeletePermissionDeniedError(execResult.result.value.path, execResult.result.value.isReadonly);
                    case "fileBusy":
                        throw new ToolCallUnexpectedEnvironmentError(`File is busy: ${execResult.result.value.path}`);
                    case "rejected":
                        throw new ToolCallRejectedError(execResult.result.value.reason || "File deletion rejected");
                    case "error":
                        throw new Error(`Error deleting file ${execResult.result.value.path}: ${execResult.result.value.error}`);
                    default:
                        throw new Error(`Unexpected result case: ${execResult.result.case}`);
                }
            }, (result2)=>createDeleteToolCall(new DeleteToolCall({
                    ...baseToolCall,
                    result: result2
                })), meta.hookContextCollector);
            if (result.result.case === "success") {
                const prevContent = result.result.value.prevContent;
                void stateHandler.recordFileState(result.result.value.path, void 0, prevContent);
            }
            return result;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources81(env_1);
        }
    };
    const render2 = async (_ctx, { result }, _props)=>{
        switch(result.case){
            case "success":
                {
                    return createStringResult(`Successfully deleted file: ${result.value.path} (${Number(result.value.fileSize)} bytes)`);
                }
            case "fileNotFound":
                return createStringResult(`File not found: ${result.value.path}`);
            case "notFile":
                return createStringResult(`Path is not a file (${result.value.actualType}): ${result.value.path}`);
            case "permissionDenied":
                if (result.value.isReadonly) {
                    return createStringResult(ASK_MODE_MODEL_ERROR);
                }
                return createStringResult(`Permission denied: ${result.value.path}`);
            case "fileBusy":
                return createStringResult(`File is busy: ${result.value.path}`);
            case "error":
                return createStringResult(`Error deleting file ${result.value.path}: ${result.value.error}`);
            case "rejected":
                return createStringResult(result.value.reason ? `File deletion rejected: ${result.value.reason}` : `File deletion rejected: ${result.value.path}`);
            case void 0:
                return createStringResult("Unknown error");
            default:
                {
                    const _exhaustiveCheck = result;
                    throw new Error(`Unhandled result case: ${_exhaustiveCheck}`);
                }
        }
    };
    const parametersTowardsModel = toolCallArgsFor(promptVersion);
    function getToolName10(version4) {
        switch(version4){
            case "dsv3-1018":
                return "delete_file";
            case "cursor-0226":
            case "dsv3-1205":
            case "latest":
            case "gpt5-codex":
            case "codex-cloud":
            case "haiku":
                return "Delete";
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
                return `Deletes a file at the specified path. The operation will fail gracefully if:
    - The file doesn't exist
    - The operation is rejected for security reasons
    - The file cannot be deleted`;
            case "gpt5-codex":
            case "codex-cloud":
                return `Delete file at specified path relative to workspace root; fails gracefully if file doesn't exist, security rejection, or undeletable.`;
            case "cursor-0226":
            case "dsv3-1205":
            case "latest":
            case "haiku":
                return `Deletes a file at the specified path. The operation will fail gracefully if:
    - The file doesn't exist
    - The operation is rejected for security reasons
    - The file cannot be deleted`;
            default:
                {
                    const _exhaustive = version4;
                    throw new Error(`Unhandled version: ${_exhaustive}`);
                }
        }
    }
    const name17 = getToolName10(promptVersion);
    const description3 = getDescription6(promptVersion);
    return createZodAgentTool("DELETE", {
        name: name17,
        descriptionGenerator: (_props)=>description3,
        parameters: parametersTowardsModel,
        execute: withSafeParsedArgs(parametersTowardsModel, execute, createDeleteToolCall(new DeleteToolCall())),
        render: render2,
        serializeError: (error3)=>{
            if (error3 instanceof DeletePermissionDeniedError) {
                return createDeleteToolCall(new DeleteToolCall({
                    result: new DeleteResult({
                        result: {
                            case: "permissionDenied",
                            value: new DeletePermissionDenied({
                                path: error3.path,
                                isReadonly: error3.isReadonly
                            })
                        }
                    })
                }));
            }
            if (error3 instanceof ToolCallRejectedError) {
                return createDeleteToolCall(new DeleteToolCall({
                    result: new DeleteResult({
                        result: {
                            case: "rejected",
                            value: new DeleteRejected({
                                reason: error3.message
                            })
                        }
                    })
                }));
            }
            const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
            return createDeleteToolCall(new DeleteToolCall({
                result: new DeleteResult({
                    result: {
                        case: "error",
                        value: new DeleteError({
                            error: errorMessage4
                        })
                    }
                })
            }));
        }
    });
};

}
