import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
import { createSpan } from "../../agent-kv/dist/controlled.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../context/dist/index.js";
import { getBufferForWrite, readText, resolvePath, shouldBlockWorktreePath } from "../../dist_exports.js";
import { handleBlockReason } from "../../dist_exports2.js";
import { init_common3 } from "./common.js";
import { MAX_OFS_FILE_SIZE, init_constants4 } from "./constants.js";
import { init_internal_paths } from "./internal-paths.js";
import { OperationType, init_pending_decision_provider } from "./pending-decision-provider.js";
import { init_permissions_path } from "./permissions-path.js";
import { SymlinkRefusedError, init_symlink_safe_write } from "./symlink-safe-write.js";
import { init_edit_block_handler } from "./utils/edit-block-handler.js";
import { isCursorProjectsInternalPath, resolvePermissionsPath, writeFileNoFollow } from "../../mcp_sandbox_policy_exports.js";
import { WriteError, WriteNoSpace, WritePermissionDenied, WriteRejected, WriteResult, WriteSuccess, init_write_exec_pb } from "../../proto/dist/generated/agent/v1/write_exec_pb.js";
import { init_dist3 } from "../../utils/dist/index.js";
import { WORKTREE_GUARD_ERROR } from "../../utils/dist/path-utils.js";
var import_node_constants, import_promises44, import_node_path65, __addDisposableResource45, __disposeResources45, logger32, watchdog2, LocalWriteExecutor;
export { LocalWriteExecutor, __addDisposableResource45, __disposeResources45, import_node_constants, import_node_path65, import_promises44, logger32, watchdog2 };
var __wakaru_init_write3_initialized = false;
export function init_write3() {
if (__wakaru_init_write3_initialized) return;
__wakaru_init_write3_initialized = true;
"use strict";
import_node_constants = __toESM(require("node:constants"), 1);
import_promises44 = require("node:fs/promises");
import_node_path65 = require("node:path");
init_dist();
init_write_exec_pb();
init_dist3();
init_common3();
init_permissions_path();
init_symlink_safe_write();
init_dist3();
init_constants4();
init_internal_paths();
init_pending_decision_provider();
init_edit_block_handler();
__addDisposableResource45 = function(env, value, async) {
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
__disposeResources45 = (function(SuppressedError2) {
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
logger32 = createLogger("LocalWriteExecutor");
watchdog2 = async (ctx, msg, ms2, f2)=>{
    const timeout2 = setTimeout(()=>{
        logger32.warn(ctx, `[watchdog, LocalWriteExecutor] ${msg} still not completed after ${ms2}ms`);
    }, ms2);
    try {
        return await f2();
    } finally{
        clearTimeout(timeout2);
    }
};
LocalWriteExecutor = class {
    constructor(fileChangeTracker, permissionsService, pendingDecisionProvider, { workspacePaths, workspacePath, worktreeMainPath, onWriteForAiTracking, writeFileMutationGuard }){
        this.fileChangeTracker = fileChangeTracker;
        this.permissionsService = permissionsService;
        this.pendingDecisionProvider = pendingDecisionProvider;
        this.workspacePaths = workspacePaths;
        this.workspacePath = workspacePath;
        this.worktreeMainPath = worktreeMainPath;
        this.onWriteForAiTracking = onWriteForAiTracking;
        this.writeFileMutationGuard = writeFileMutationGuard;
    }
    async execute(parentCtx, args) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource45(env_1, createSpan(parentCtx.withName("LocalWriteExecutor.execute")), false);
            const ctx = span.ctx;
            const path64 = args.path;
            const fileText = args.fileText;
            const fileBytes = args.fileBytes.length > 0 ? args.fileBytes : void 0;
            const resolvedPath = resolvePath(path64, this.workspacePath);
            const shouldSkipAgentTracking = isCursorProjectsInternalPath(resolvedPath, [
                "assets",
                "agent-tools",
                "swarm-agents"
            ]);
            if (shouldBlockWorktreePath({
                targetPath: resolvedPath,
                workspacePaths: this.workspacePaths,
                mainWorktreePath: this.worktreeMainPath
            })) {
                return new WriteResult({
                    result: {
                        case: "error",
                        value: new WriteError({
                            path: resolvedPath,
                            error: WORKTREE_GUARD_ERROR
                        })
                    }
                });
            }
            let beforeContent;
            let existingFileTooLarge = false;
            try {
                const stats = await (0, import_promises44.stat)(resolvedPath);
                if (stats.size <= MAX_OFS_FILE_SIZE) {
                    beforeContent = await watchdog2(ctx, "readText before write", 3e3, ()=>readText(resolvedPath, args.encodingHint));
                } else {
                    existingFileTooLarge = true;
                }
            } catch  {}
            const permResolved = await resolvePermissionsPath(resolvedPath);
            const writeTargetPath = permResolved.resolvedPath;
            const requestedLeafName = resolvedPath.split(import_node_path65.sep).pop()?.toLowerCase() ?? "";
            const cursorIgnoreNameBlock = requestedLeafName === ".cursorignore" ? {
                type: "permissionsConfig"
            } : void 0;
            const shouldBlock = cursorIgnoreNameBlock ?? await watchdog2(ctx, "permissionsService.shouldBlockWrite", 3e3, ()=>this.permissionsService.shouldBlockWrite(ctx, writeTargetPath, fileText));
            if (shouldBlock) {
                const blockResult = await watchdog2(ctx, "handleBlockReason", 3e3, ()=>handleBlockReason(shouldBlock, {
                        onNeedsApproval: async (approvalReason, approvalDetails)=>{
                            const isNewFile = approvalDetails?.type === "fileEdit" ? approvalDetails.isNewFile : true;
                            const diffString = approvalDetails?.type === "fileEdit" ? approvalDetails.diffString : fileText;
                            const blockReason = approvalDetails?.type === "fileEdit" ? approvalDetails.blockReason : void 0;
                            const result = await this.pendingDecisionProvider.requestApproval({
                                type: OperationType.Write,
                                details: {
                                    path: resolvedPath,
                                    reason: approvalReason,
                                    isNewFile,
                                    diffString,
                                    before: beforeContent,
                                    after: fileText,
                                    blockReason
                                },
                                toolCallId: args.toolCallId
                            });
                            if (!result.approved) {
                                return new WriteResult({
                                    result: {
                                        case: "rejected",
                                        value: new WriteRejected({
                                            path: resolvedPath,
                                            reason: result.reason || ""
                                        })
                                    }
                                });
                            }
                            return null;
                        },
                        onUserRejected: (reason)=>new WriteResult({
                                result: {
                                    case: "rejected",
                                    value: new WriteRejected({
                                        path: resolvedPath,
                                        reason: reason || ""
                                    })
                                }
                            }),
                        onPermissionDenied: (errorMessage4, metadata)=>new WriteResult({
                                result: {
                                    case: "permissionDenied",
                                    value: new WritePermissionDenied({
                                        path: resolvedPath,
                                        error: errorMessage4,
                                        isReadonly: metadata?.isReadonly ?? false
                                    })
                                }
                            })
                    }));
                if (blockResult !== null) {
                    return blockResult;
                }
            }
            const dir = (0, import_node_path65.dirname)(writeTargetPath);
            try {
                await watchdog2(ctx, "mkdir", 3e3, ()=>(0, import_promises44.mkdir)(dir, {
                        recursive: true
                    }));
            } catch (error3) {
                const errorCode3 = error3.code;
                if (errorCode3 === "EACCES" || errorCode3 === "EPERM") {
                    return new WriteResult({
                        result: {
                            case: "permissionDenied",
                            value: new WritePermissionDenied({
                                path: resolvedPath,
                                directory: dir,
                                operation: "create_directory",
                                error: "Permission denied"
                            })
                        }
                    });
                }
                return new WriteResult({
                    result: {
                        case: "error",
                        value: new WriteError({
                            path: resolvedPath,
                            error: error3.message
                        })
                    }
                });
            }
            let buffer;
            let lines2;
            if (fileBytes !== void 0) {
                buffer = fileBytes;
                lines2 = 0;
            } else {
                const textResult = await watchdog2(ctx, "getBufferForWrite", 3e3, ()=>getBufferForWrite(writeTargetPath, fileText, this.workspacePath, args.encodingHint));
                buffer = textResult.buffer;
                lines2 = textResult.lines;
            }
            const write2 = ()=>watchdog2(ctx, "writeFile", 3e3, async ()=>{
                    await writeFileNoFollow(writeTargetPath, buffer, {
                        flush: true
                    });
                    let dirHandle;
                    try {
                        dirHandle = await (0, import_promises44.open)((0, import_node_path65.dirname)(writeTargetPath), import_node_constants.default.O_RDONLY);
                        await dirHandle.sync();
                    } catch  {} finally{
                        await dirHandle?.close();
                    }
                });
            let writeFailure;
            let writeFailed = false;
            const guardedWrite = async ()=>{
                try {
                    await write2();
                } catch (error3) {
                    writeFailure = error3;
                    writeFailed = true;
                    throw error3;
                }
            };
            try {
                if (this.writeFileMutationGuard === void 0) {
                    await write2();
                } else {
                    await this.writeFileMutationGuard.runExclusive(writeTargetPath, guardedWrite);
                }
            } catch (error3) {
                if (this.writeFileMutationGuard !== void 0 && (!writeFailed || error3 !== writeFailure)) {
                    return new WriteResult({
                        result: {
                            case: "error",
                            value: new WriteError({
                                path: resolvedPath,
                                error: error3 instanceof Error ? error3.message : String(error3)
                            })
                        }
                    });
                }
                if (error3 instanceof SymlinkRefusedError) {
                    return new WriteResult({
                        result: {
                            case: "permissionDenied",
                            value: new WritePermissionDenied({
                                path: resolvedPath,
                                directory: "",
                                operation: "create_file",
                                error: error3.message
                            })
                        }
                    });
                }
                const errorCode3 = error3.code;
                if (errorCode3 === "EACCES" || errorCode3 === "EPERM") {
                    return new WriteResult({
                        result: {
                            case: "permissionDenied",
                            value: new WritePermissionDenied({
                                path: resolvedPath,
                                directory: "",
                                operation: "create_file",
                                error: "Permission denied"
                            })
                        }
                    });
                }
                if (error3.code === "ENOSPC") {
                    return new WriteResult({
                        result: {
                            case: "noSpace",
                            value: new WriteNoSpace({
                                path: resolvedPath
                            })
                        }
                    });
                }
                if (errorCode3 === "EDQUOT") {
                    return new WriteResult({
                        result: {
                            case: "error",
                            value: new WriteError({
                                path: resolvedPath,
                                error: "Agent-store quota exceeded: this write was rejected because the storage quota is full. Nothing was written; your local copy is intact. Delete or truncate files to free space (including resolved *.conflict* files), then retry. Do not retry the same write without freeing space first."
                            })
                        }
                    });
                }
                return new WriteResult({
                    result: {
                        case: "error",
                        value: new WriteError({
                            path: resolvedPath,
                            error: error3.message
                        })
                    }
                });
            }
            if (this.fileChangeTracker && fileBytes === void 0 && !shouldSkipAgentTracking && !existingFileTooLarge) {
                const metadata = args.toolCallId ? {
                    toolCallId: args.toolCallId
                } : void 0;
                await this.fileChangeTracker.trackChange(resolvedPath, beforeContent, fileText, metadata);
            }
            if (this.onWriteForAiTracking && fileBytes === void 0 && !shouldSkipAgentTracking) {
                const metadata = args.toolCallId ? {
                    toolCallId: args.toolCallId
                } : {};
                try {
                    await this.onWriteForAiTracking({
                        path: resolvedPath,
                        beforeContent,
                        afterContent: fileText,
                        metadata
                    });
                } catch (err) {
                    logger32.warn(ctx, "onWriteForAiTracking failed (write succeeded)", {
                        path: resolvedPath,
                        error: err instanceof Error ? err.message : String(err)
                    });
                }
            }
            const bytes = buffer.byteLength;
            let fileContentAfterWrite;
            if (args.returnFileContentAfterWrite) {
                try {
                    fileContentAfterWrite = await watchdog2(ctx, "readText after write", 3e3, ()=>readText(resolvedPath, args.encodingHint));
                } catch  {}
            }
            return new WriteResult({
                result: {
                    case: "success",
                    value: new WriteSuccess({
                        path: resolvedPath,
                        linesCreated: lines2,
                        fileSize: bytes,
                        ...fileContentAfterWrite !== void 0 && {
                            fileContentAfterWrite
                        }
                    })
                }
            });
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources45(env_1);
        }
    }
};

}
