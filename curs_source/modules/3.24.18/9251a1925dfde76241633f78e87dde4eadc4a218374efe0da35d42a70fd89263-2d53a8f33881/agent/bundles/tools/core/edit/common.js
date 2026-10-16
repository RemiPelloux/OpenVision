import { init_dist7 } from "../../../../../agent-core/dist/index.js";
import { init_dist8 } from "../../../../../agent-exec/dist/index.js";
import { __toESM } from "../../../../../agent-host/dist/storage/sqlite-store.js";
import { createSpan } from "../../../../../agent-kv/dist/controlled.js";
import { createLogger } from "../../../../../agent-kv/dist/subagent-states.js";
import { CustomToolCallError, ToolCallAbortedError, ToolCallArgParseError, ToolCallError, init_common9 } from "../../common.js";
import { ToolErrorClassification, init_core5 } from "../../core.js";
import { init_diff_patch_worker } from "./diff-patch-worker.js";
import { init_diff_worker } from "./diff-worker.js";
import { init_plan_mode_file_policy } from "./plan-mode-file-policy.js";
import { init_post_write_result_decoration } from "./post-write-result-decoration.js";
import { init_unified_diff_worker } from "./unified-diff-worker.js";
import { init_formatting } from "../formatting.js";
import { init_worker_script_location } from "../worker-script-location.js";
import { init_dist26 } from "../../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { createCounter, createHistogram, isIntentionalAbortReason } from "../../../../../dist_exports.js";
import { calculateDiff, createEditToolCall, getPiscinaWorkerPool, isSeaProcess, matchesJsonPath, normalizeJsonPath, resolveWorkerLocation } from "../../../../../mcp_sandbox_policy_exports.js";
import { init_dist4 } from "../../../../../metrics/dist/index.js";
import { JSONParser, init_jsonparser } from "../../../../../node_modules/.pnpm/@streamparser+json@0.0.21/node_modules/@streamparser/json/dist/mjs/jsonparser.js";
import { init_esm_wrapper } from "../../../../../node_modules/.pnpm/piscina@4.9.3/node_modules/piscina/dist/esm-wrapper.mjs";
import { ToolCallDelta, init_agent_pb } from "../../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { EditArgs, EditError, EditFileNotFound, EditReadPermissionDenied, EditRejected, EditResult, EditToolCall, EditToolCallDelta, EditWritePermissionDenied, init_edit_tool_pb } from "../../../../../proto/dist/generated/agent/v1/edit_tool_pb.js";
import { init_read_exec_pb } from "../../../../../proto/dist/generated/agent/v1/read_exec_pb.js";
import { init_write_exec_pb } from "../../../../../proto/dist/generated/agent/v1/write_exec_pb.js";
import { init_dist3 } from "../../../../../utils/dist/index.js";
import { ReplayableAsyncIterable } from "../../../../../utils/dist/replayable-async-iterable.js";
const import_meta_url = require("node:url").pathToFileURL(__filename).href;
var import_node_os25, import_node_path86, __addDisposableResource79, __disposeResources79, logger92, PLAN_MODE_NON_MARKDOWN_EDIT_ERROR, StringNotFoundError, AmbiguousStringError, EmptyStringError, IdenticalStringsError, editCommonPerformEditCounter, editCommonPerformEditSuccessCounter, editCommonPerformEditErrorCounter, editCommonPerformEditLatencyHistogram, editCommonPerformWriteCounter, editCommonPerformWriteErrorCounter, workerDir, extension, sanitizedEnvForWorkers, DIFF_SIZE_THRESHOLD, serializeEditError, withStreamingEditParsedArgs, NOTEBOOK_VIEW_TYPE_MODEL_ERROR, FileNotFoundError, ReadPermissionDeniedError, WritePermissionDeniedError, WriteRejectedError, BinaryFileError, FileTooLargeError, InvalidEditArgsError, PATCH_FILE_HEADER_REGEX, getDiffString;
export { AmbiguousStringError, BinaryFileError, DIFF_SIZE_THRESHOLD, EmptyStringError, FileNotFoundError, FileTooLargeError, IdenticalStringsError, InvalidEditArgsError, NOTEBOOK_VIEW_TYPE_MODEL_ERROR, PATCH_FILE_HEADER_REGEX, PLAN_MODE_NON_MARKDOWN_EDIT_ERROR, ReadPermissionDeniedError, StringNotFoundError, WritePermissionDeniedError, WriteRejectedError, __addDisposableResource79, __disposeResources79, editCommonPerformEditCounter, editCommonPerformEditErrorCounter, editCommonPerformEditLatencyHistogram, editCommonPerformEditSuccessCounter, editCommonPerformWriteCounter, editCommonPerformWriteErrorCounter, extension, getDiffString, import_meta_url, import_node_os25, import_node_path86, logger92, sanitizedEnvForWorkers, serializeEditError, withStreamingEditParsedArgs, workerDir };
var __wakaru_init_common15_initialized = false;
export function init_common15() {
if (__wakaru_init_common15_initialized) return;
__wakaru_init_common15_initialized = true;
"use strict";
import_node_os25 = __toESM(require("node:os"), 1);
import_node_path86 = __toESM(require("node:path"), 1);
init_dist7();
init_dist8();
init_dist26();
init_dist();
init_dist4();
init_agent_pb();
init_edit_tool_pb();
init_read_exec_pb();
init_write_exec_pb();
init_dist3();
init_jsonparser();
init_esm_wrapper();
init_common9();
init_core5();
init_formatting();
init_worker_script_location();
init_diff_patch_worker();
init_diff_worker();
init_plan_mode_file_policy();
init_post_write_result_decoration();
init_unified_diff_worker();
__addDisposableResource79 = function(env, value, async) {
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
__disposeResources79 = (function(SuppressedError2) {
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
logger92 = createLogger("@anysphere/agent");
PLAN_MODE_NON_MARKDOWN_EDIT_ERROR = "Cannot edit non markdown files in plan mode";
StringNotFoundError = class extends CustomToolCallError {
    constructor(message, modelMessage){
        super(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
            error: message,
            clientVisibleErrorMessage: "The string to replace was not found in the file.",
            modelVisibleErrorMessage: modelMessage
        });
        this.name = "StringNotFoundError";
    }
};
StringNotFoundError.telemetryName = "StringNotFoundError";
AmbiguousStringError = class extends CustomToolCallError {
    constructor(message){
        super(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
            error: message,
            clientVisibleErrorMessage: "The model provided an ambiguous search string to replace",
            modelVisibleErrorMessage: message
        });
        this.name = "AmbiguousStringError";
    }
};
AmbiguousStringError.telemetryName = "AmbiguousStringError";
EmptyStringError = class extends CustomToolCallError {
    constructor(field4){
        const message = `${field4} is empty`;
        super(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
            error: message,
            clientVisibleErrorMessage: "Incorrect tool arguments",
            modelVisibleErrorMessage: message
        });
        this.name = "EmptyStringError";
    }
};
EmptyStringError.telemetryName = "EmptyStringError";
IdenticalStringsError = class extends CustomToolCallError {
    constructor(){
        const message = "old_string and new_string are exactly the same";
        super(ToolErrorClassification.INVALID_ARGS, {
            error: message,
            clientVisibleErrorMessage: "Incorrect tool arguments",
            modelVisibleErrorMessage: message
        });
        this.name = "IdenticalStringsError";
    }
};
IdenticalStringsError.telemetryName = "IdenticalStringsError";
editCommonPerformEditCounter = createCounter("agent.tools.edit_common.perform_edit.total", {
    description: "Total performEdit operations",
    labelNames: []
});
editCommonPerformEditSuccessCounter = createCounter("agent.tools.edit_common.perform_edit.success", {
    description: "Successful performEdit operations",
    labelNames: []
});
editCommonPerformEditErrorCounter = createCounter("agent.tools.edit_common.perform_edit.error", {
    description: "Failed performEdit operations",
    labelNames: [
        "error_type"
    ]
});
editCommonPerformEditLatencyHistogram = createHistogram("agent.tools.edit_common.perform_edit.latency_ms", {
    description: "Latency of performEdit operations in milliseconds",
    labelNames: []
});
editCommonPerformWriteCounter = createCounter("agent.tools.edit_common.perform_write.total", {
    description: "Total performWrite operations",
    labelNames: []
});
editCommonPerformWriteErrorCounter = createCounter("agent.tools.edit_common.perform_write.error", {
    description: "Failed performWrite operations",
    labelNames: [
        "error_type"
    ]
});
({ dir: workerDir, extension } = resolveWorkerLocation(import_meta_url, "diff-worker"));
sanitizedEnvForWorkers = Object.fromEntries(Object.entries(process.env).filter(([key, value])=>key !== "NSOLID_STATSD" && value !== void 0));
DIFF_SIZE_THRESHOLD = 256 * 1024;
serializeEditError = (error3, currentTool)=>{
    const path64 = currentTool?.args?.path;
    if (error3 instanceof WriteRejectedError) {
        return createEditToolCall(new EditToolCall({
            ...currentTool,
            result: new EditResult({
                result: {
                    case: "rejected",
                    value: new EditRejected({
                        path: path64,
                        reason: error3.reason
                    })
                }
            })
        }));
    }
    if (error3 instanceof ReadPermissionDeniedError) {
        return createEditToolCall(new EditToolCall({
            ...currentTool,
            result: new EditResult({
                result: {
                    case: "readPermissionDenied",
                    value: new EditReadPermissionDenied({
                        path: path64
                    })
                }
            })
        }));
    }
    if (error3 instanceof WritePermissionDeniedError) {
        return createEditToolCall(new EditToolCall({
            ...currentTool,
            result: new EditResult({
                result: {
                    case: "writePermissionDenied",
                    value: new EditWritePermissionDenied({
                        path: path64,
                        error: error3.message,
                        isReadonly: error3.isReadonly
                    })
                }
            })
        }));
    }
    if (error3 instanceof FileNotFoundError) {
        return createEditToolCall(new EditToolCall({
            ...currentTool,
            result: new EditResult({
                result: {
                    case: "fileNotFound",
                    value: new EditFileNotFound({
                        path: path64 ?? ""
                    })
                }
            })
        }));
    }
    if (error3 instanceof ToolCallError) {
        return createEditToolCall(new EditToolCall({
            ...currentTool,
            result: new EditResult({
                result: {
                    case: "error",
                    value: new EditError({
                        path: path64,
                        error: error3.clientVisibleErrorMessage,
                        modelVisibleError: error3.modelVisibleErrorMessage
                    })
                }
            })
        }));
    }
    const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
    return createEditToolCall(new EditToolCall({
        ...currentTool,
        result: new EditResult({
            result: {
                case: "error",
                value: new EditError({
                    path: path64,
                    error: errorMessage4,
                    modelVisibleError: errorMessage4
                })
            }
        })
    }));
};
withStreamingEditParsedArgs = (parametersSchema29, execute, initialToolCall, options2)=>{
    return async (ctx, interactionHandler, argsStream, meta)=>{
        const replayableStream = new ReplayableAsyncIterable(argsStream);
        const emitInvalidArgs = async (errorMessage4)=>{
            throw new ToolCallArgParseError(errorMessage4 ?? "Invalid arguments");
        };
        void interactionHandler.emitPartialToolCall(ctx, meta.toolCallId, initialToolCall);
        const pathPath = normalizeJsonPath(options2.path);
        const streamPath = options2.streamField ? normalizeJsonPath(options2.streamField) : void 0;
        const parser = new JSONParser({
            emitPartialTokens: true,
            emitPartialValues: true
        });
        let parserError;
        parser.onError = (err)=>{
            parserError = err;
        };
        let bufferedArgs = "";
        let currentPath;
        let lastPathValue;
        let lastStreamLength = 0;
        let lockHandle;
        let pathJustParsed = false;
        let parseSucceeded = false;
        const { fileOperationLockManager } = options2;
        const emitPathPartial = ()=>{
            if (currentPath === void 0) {
                return;
            }
            const partialToolCall = new EditToolCall({
                args: new EditArgs({
                    path: currentPath
                })
            });
            void interactionHandler.emitPartialToolCall(ctx, meta.toolCallId, createEditToolCall(partialToolCall));
        };
        const emitStreamDelta = (delta)=>{
            if (delta.length === 0) {
                return;
            }
            void interactionHandler.emitToolCallDelta(ctx, meta.toolCallId, new ToolCallDelta({
                delta: {
                    case: "editToolCallDelta",
                    value: new EditToolCallDelta({
                        streamContentDelta: delta
                    })
                }
            }));
        };
        parser.onValue = (parsedInfo)=>{
            if (typeof parsedInfo.value === "string" && !parsedInfo.partial && matchesJsonPath(parsedInfo, pathPath)) {
                if (parsedInfo.value !== lastPathValue) {
                    currentPath = parsedInfo.value;
                    lastPathValue = parsedInfo.value;
                    pathJustParsed = true;
                }
                return;
            }
            if (streamPath !== void 0 && typeof parsedInfo.value === "string" && matchesJsonPath(parsedInfo, streamPath)) {
                const currentValue = parsedInfo.value;
                const deltaContent = currentValue.length >= lastStreamLength ? currentValue.slice(lastStreamLength) : "";
                lastStreamLength = currentValue.length;
                emitStreamDelta(deltaContent);
            }
        };
        try {
            const env_1 = {
                stack: [],
                error: void 0,
                hasError: false
            };
            try {
                for await (const chunk of replayableStream){
                    bufferedArgs += chunk;
                    parser.write(chunk);
                    if (parserError) {
                        throw parserError;
                    }
                    if (pathJustParsed && currentPath !== void 0) {
                        pathJustParsed = false;
                        if (lockHandle === void 0) {
                            lockHandle = await fileOperationLockManager.waitForLock(ctx, currentPath);
                        }
                        emitPathPartial();
                    }
                }
                const parsedArgs = parametersSchema29.safeParse(JSON.parse(bufferedArgs));
                if (!parsedArgs.success) {
                    const errorMessages = parsedArgs.error.errors.map((err)=>{
                        const path64 = err.path.length > 0 ? err.path.join(".") : "argument";
                        return `${path64}: ${err.message}`;
                    });
                    const formattedError = `Invalid arguments:
${errorMessages.join("\n")}`;
                    return await emitInvalidArgs(formattedError);
                }
                if (lockHandle === void 0) {
                    throw new ToolCallArgParseError("Failed to acquire file lock - path may not have been parsed");
                }
                parseSucceeded = true;
                const coreExecuteSpan = __addDisposableResource79(env_1, createSpan(ctx.withName("coreExecute")), false);
                return await execute(coreExecuteSpan.ctx, interactionHandler, parsedArgs.data, meta);
            } catch (e_1) {
                env_1.error = e_1;
                env_1.hasError = true;
            } finally{
                __disposeResources79(env_1);
            }
        } catch (e) {
            if (ctx.signal.aborted) {
                logger92[isIntentionalAbortReason(ctx.reason) ? "info" : "warn"](ctx, "withStreamingEditParsedArgs aborted", {
                    error: e,
                    intentionalAbort: isIntentionalAbortReason(ctx.reason)
                });
                throw new ToolCallAbortedError();
            }
            logger92.error(ctx, "Error in withStreamingEditParsedArgs", e);
            if (e instanceof ToolCallArgParseError || e instanceof ToolCallError) {
                throw e;
            }
            if (parseSucceeded) {
                const message = e instanceof Error ? e.message : String(e);
                throw new ToolCallError({
                    clientVisibleErrorMessage: message,
                    modelVisibleErrorMessage: message,
                    error: message
                });
            }
            const errorMessage4 = e instanceof Error ? e.message : void 0;
            return await emitInvalidArgs(errorMessage4);
        } finally{
            if (lockHandle !== void 0) {
                lockHandle[Symbol.dispose]();
            }
        }
    };
};
NOTEBOOK_VIEW_TYPE_MODEL_ERROR = "This notebook could not be opened for editing because the editor environment has no notebook provider for it (for example, Jupyter/notebook support is unavailable). This is an environment limitation, not a problem with the edit itself \u2014 retrying will not help.";
FileNotFoundError = class extends CustomToolCallError {
    constructor(message, modelMessage){
        super(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
            error: message,
            clientVisibleErrorMessage: message,
            modelVisibleErrorMessage: modelMessage
        });
    }
};
FileNotFoundError.telemetryName = "FileNotFoundError";
ReadPermissionDeniedError = class extends CustomToolCallError {
    constructor(message, modelMessage){
        super(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
            error: message,
            clientVisibleErrorMessage: message,
            modelVisibleErrorMessage: modelMessage
        });
    }
};
ReadPermissionDeniedError.telemetryName = "ReadPermissionDeniedError";
WritePermissionDeniedError = class extends CustomToolCallError {
    constructor(isReadonly, message, modelMessage){
        super(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
            error: message,
            clientVisibleErrorMessage: message,
            modelVisibleErrorMessage: modelMessage
        });
        this.isReadonly = isReadonly;
    }
};
WritePermissionDeniedError.telemetryName = "WritePermissionDeniedError";
WriteRejectedError = class extends CustomToolCallError {
    constructor(reason, message){
        super(ToolErrorClassification.USER_REJECTED, {
            error: message,
            clientVisibleErrorMessage: message,
            modelVisibleErrorMessage: reason
        });
        this.reason = reason;
    }
};
WriteRejectedError.telemetryName = "WriteRejectedError";
BinaryFileError = class extends CustomToolCallError {
    constructor(message, modelMessage){
        super(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
            error: message,
            clientVisibleErrorMessage: message,
            modelVisibleErrorMessage: modelMessage
        });
    }
};
BinaryFileError.telemetryName = "BinaryFileError";
FileTooLargeError = class extends CustomToolCallError {
    constructor(message, modelMessage){
        super(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
            error: message,
            clientVisibleErrorMessage: message,
            modelVisibleErrorMessage: modelMessage
        });
    }
};
FileTooLargeError.telemetryName = "FileTooLargeError";
InvalidEditArgsError = class extends CustomToolCallError {
    constructor(msgs){
        super(ToolErrorClassification.INVALID_ARGS, msgs);
    }
};
InvalidEditArgsError.telemetryName = "InvalidEditArgsError";
PATCH_FILE_HEADER_REGEX = /^\*\*\* (?:Add|Update) File: (.+)$/;
getDiffString = async (params)=>{
    const totalSize = params.original.length + params.new.length;
    const useWorker = totalSize > DIFF_SIZE_THRESHOLD && !isSeaProcess();
    if (useWorker) {
        return await getPiscinaWorkerPool().run(params, {
            filename: import_node_path86.default.join(workerDir, `./diff-worker.${extension}`)
        });
    } else {
        return calculateDiff(params);
    }
};

}
