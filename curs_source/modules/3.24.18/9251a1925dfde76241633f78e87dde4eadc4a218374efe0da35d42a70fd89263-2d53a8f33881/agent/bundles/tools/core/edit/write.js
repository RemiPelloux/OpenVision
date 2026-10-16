import { init_dist8 } from "../../../../../agent-exec/dist/index.js";
import { readExecutorResource } from "../../../../../agent-exec/dist/read.js";
import { createSpan } from "../../../../../agent-kv/dist/controlled.js";
import { ToolCallError, init_common9 } from "../../common.js";
import { BinaryFileError, FileNotFoundError, ReadPermissionDeniedError, WriteRejectedError, getDiffString, init_common15, serializeEditError, withStreamingEditParsedArgs } from "./common.js";
import { init_worktree_paths } from "../worktree-paths.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { external_exports } from "../../../../../external_exports.js";
import { assertPlanModeAllowsFileEdit, createEditToolCall, createZodAgentTool, editTransformResultToEditResult, generateSeededUuid, maybeRedirectWorktriesPath, performWrite, renderEditResult } from "../../../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { EditArgs, EditToolCall, init_edit_tool_pb } from "../../../../../proto/dist/generated/agent/v1/edit_tool_pb.js";
import { ReadArgs, init_read_exec_pb } from "../../../../../proto/dist/generated/agent/v1/read_exec_pb.js";
var __addDisposableResource85, __disposeResources85, parametersSchema14, parametersSchema08192, createWriteTool;
export { __addDisposableResource85, __disposeResources85, createWriteTool, parametersSchema08192, parametersSchema14 };
var __wakaru_init_write5_initialized = false;
export function init_write5() {
if (__wakaru_init_write5_initialized) return;
__wakaru_init_write5_initialized = true;
"use strict";
init_dist8();
init_dist();
init_edit_tool_pb();
init_read_exec_pb();
init_zod();
init_common9();
init_worktree_paths();
init_common15();
__addDisposableResource85 = function(env, value, async) {
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
__disposeResources85 = (function(SuppressedError2) {
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
parametersSchema14 = external_exports.object({
    path: external_exports.string().describe("The absolute path to the file to modify"),
    contents: external_exports.string().describe("The contents to write to the file")
});
parametersSchema08192 = external_exports.object({
    file_path: external_exports.string().describe("The path to the file to modify. Always specify the target file as the first argument. You can use either a relative path in the workspace or an absolute path."),
    contents: external_exports.string().describe("The contents of the file to write")
});
createWriteTool = (resourceAccessor, fileOperationLockManager, stateHandler, promptVersion, modelInfo, featureFlags)=>{
    const readExecutor = resourceAccessor.get(readExecutorResource);
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource85(env_1, createSpan(parentCtx.withName("writeExecute")), false);
            const originalPath = "file_path" in rawArgs ? rawArgs.file_path : rawArgs.path;
            const path64 = maybeRedirectWorktriesPath(originalPath);
            const contents = rawArgs.contents;
            assertPlanModeAllowsFileEdit(path64, stateHandler);
            const args = new EditArgs({
                path: path64,
                streamContent: contents
            });
            const editTool = new EditToolCall({
                args,
                result: void 0
            });
            const result = await interactionHandler.executeToolCall(spanCtxt.ctx, createEditToolCall(editTool), meta.toolCallId, async (ctx)=>{
                const readArgs = new ReadArgs({
                    path: path64,
                    toolCallId: meta.toolCallId
                });
                const readExecId = generateSeededUuid(`${meta.toolCallId}-read`);
                const readResult = await readExecutor.execute(ctx, readArgs, {
                    execId: readExecId,
                    hookContextCollector: meta.hookContextCollector
                });
                if (readResult.result.case === void 0) {
                    throw new ToolCallError({
                        error: "Unknown error",
                        clientVisibleErrorMessage: "Unknown error",
                        modelVisibleErrorMessage: "Unknown error"
                    });
                }
                let originalContent;
                switch(readResult.result.case){
                    case "success":
                        if (readResult.result.value.output.case === "content") {
                            originalContent = readResult.result.value.output.value;
                        } else {
                            throw new BinaryFileError("File is not a text file (binary data)", "File is not a text file (binary data)");
                        }
                        break;
                    case "fileNotFound":
                        originalContent = void 0;
                        break;
                    case "permissionDenied":
                        {
                            throw new ReadPermissionDeniedError("Read permission denied", "Read permission denied");
                        }
                    case "error":
                        {
                            throw new ToolCallError({
                                error: readResult.result.value.error,
                                clientVisibleErrorMessage: readResult.result.value.error,
                                modelVisibleErrorMessage: readResult.result.value.error
                            });
                        }
                    case "rejected":
                        {
                            throw new WriteRejectedError(readResult.result.value.reason, readResult.result.value.reason);
                        }
                    case "invalidFile":
                        {
                            throw new FileNotFoundError(readResult.result.value.reason, readResult.result.value.reason);
                        }
                    default:
                        {
                            const _exhaustiveCheck = readResult.result;
                            throw new Error(`Unhandled readResult.result: ${String(readResult.result)}`);
                        }
                }
                const { diffString, linesAdded, linesRemoved } = await getDiffString({
                    original: originalContent ?? "",
                    new: rawArgs.contents,
                    filePath: path64,
                    fileChangeType: originalContent === void 0 ? "added" : "modified"
                });
                const resultForModel = `Wrote contents to ${path64}`;
                const writeResult = await performWrite(ctx, resourceAccessor, path64, rawArgs.contents, {
                    resultForModel,
                    linesAdded,
                    linesRemoved,
                    diffString,
                    originalContent
                }, meta, stateHandler);
                return editTransformResultToEditResult(path64, writeResult, {
                    omitBeforeAfterFileStates: featureFlags?.omitEditBeforeAfterFileStates
                });
            }, (result2)=>createEditToolCall(new EditToolCall({
                    ...editTool,
                    result: result2
                })), meta.hookContextCollector);
            return result;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources85(env_1);
        }
    };
    const render2 = renderEditResult;
    const name17 = promptVersion === "dsv3-1018" ? "write" : "Write";
    if (promptVersion === "dsv3-1018") {
        return createZodAgentTool("WRITE", {
            name: name17,
            descriptionGenerator: (_props)=>`Writes a file to the local filesystem.

Usage:
- This tool will overwrite the existing file if there is one at the provided path.
- If this is an existing file, you MUST use the read_file tool first to read the file's contents.
- ALWAYS prefer editing existing files in the codebase. NEVER write new files unless explicitly required.
- NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.`,
            parameters: parametersSchema08192,
            execute: withStreamingEditParsedArgs(parametersSchema08192, execute, createEditToolCall(new EditToolCall()), {
                path: "file_path",
                streamField: "contents",
                fileOperationLockManager
            }),
            render: render2,
            serializeError: serializeEditError
        });
    }
    const composer15Description = `Writes a file to the local filesystem.

Usage:
- This tool will overwrite the existing file if there is one at the provided path.
- If this is an existing file, you MUST use the read_file tool first to read the file's contents.
- ALWAYS prefer editing existing files in the codebase. NEVER write new files unless explicitly required.
- NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.
- The write will FAIL if path isn\u2019t given as the first argument. Always provide path first.`;
    const defaultDescription = `Writes a file to the local filesystem.

Usage:
- This tool will overwrite the existing file if there is one at the provided path.
- ALWAYS prefer editing existing files in the codebase. NEVER write new files unless explicitly required.
- NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.`;
    return createZodAgentTool("WRITE", {
        name: name17,
        descriptionGenerator: (_props)=>promptVersion === "cursor-0226" ? "Writes a file to the local filesystem." : modelInfo?.isComposer15 ? composer15Description : defaultDescription,
        parameters: parametersSchema14,
        execute: withStreamingEditParsedArgs(parametersSchema14, execute, createEditToolCall(new EditToolCall()), {
            path: "path",
            streamField: "contents",
            fileOperationLockManager
        }),
        render: render2,
        serializeError: serializeEditError
    });
};

}
