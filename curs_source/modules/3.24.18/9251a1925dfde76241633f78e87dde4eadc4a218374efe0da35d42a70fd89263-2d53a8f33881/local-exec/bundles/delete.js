import { createSpan } from "../../agent-kv/dist/controlled.js";
import { init_dist } from "../../context/dist/index.js";
import { readText, resolvePath } from "../../dist_exports.js";
import { handleBlockReason } from "../../dist_exports2.js";
import { init_common3 } from "./common.js";
import { MAX_OFS_FILE_SIZE, init_constants4 } from "./constants.js";
import { OperationType, init_pending_decision_provider } from "./pending-decision-provider.js";
import { init_edit_block_handler } from "./utils/edit-block-handler.js";
import { DeleteError, DeleteFileBusy, DeleteFileNotFound, DeleteNotFile, DeletePermissionDenied, DeleteRejected, DeleteResult, DeleteSuccess, init_delete_exec_pb } from "../../proto/dist/generated/agent/v1/delete_exec_pb.js";
import { init_dist3 } from "../../utils/dist/index.js";
var import_promises21, __addDisposableResource19, __disposeResources19, LocalDeleteExecutor;
export { LocalDeleteExecutor, __addDisposableResource19, __disposeResources19, import_promises21 };
var __wakaru_init_delete2_initialized = false;
export function init_delete2() {
if (__wakaru_init_delete2_initialized) return;
__wakaru_init_delete2_initialized = true;
"use strict";
import_promises21 = require("node:fs/promises");
init_dist();
init_delete_exec_pb();
init_dist3();
init_common3();
init_constants4();
init_pending_decision_provider();
init_edit_block_handler();
__addDisposableResource19 = function(env, value, async) {
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
__disposeResources19 = (function(SuppressedError2) {
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
LocalDeleteExecutor = class {
    constructor(pendingDecisionProvider, fileChangeTracker, permissionsService, workspacePath, onDeleteForAiTracking){
        this.pendingDecisionProvider = pendingDecisionProvider;
        this.fileChangeTracker = fileChangeTracker;
        this.permissionsService = permissionsService;
        this.workspacePath = workspacePath;
        this.onDeleteForAiTracking = onDeleteForAiTracking;
    }
    async execute(ctx, args) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource19(env_1, createSpan(ctx.withName("LocalDeleteExecutor.execute")), false);
            const path64 = args.path;
            const resolvedPath = resolvePath(path64, this.workspacePath);
            const shouldBlock = await this.permissionsService.shouldBlockWrite(ctx, resolvedPath, "");
            if (shouldBlock) {
                const blockResult = await handleBlockReason(shouldBlock, {
                    onNeedsApproval: async (_approvalReason, _approvalDetails)=>{
                        return null;
                    },
                    onUserRejected: (reason)=>new DeleteResult({
                            result: {
                                case: "rejected",
                                value: new DeleteRejected({
                                    path: resolvedPath,
                                    reason: reason || ""
                                })
                            }
                        }),
                    onPermissionDenied: (errorMessage4, metadata)=>new DeleteResult({
                            result: {
                                case: "permissionDenied",
                                value: new DeletePermissionDenied({
                                    path: resolvedPath,
                                    clientVisibleError: errorMessage4,
                                    isReadonly: metadata?.isReadonly ?? false
                                })
                            }
                        })
                });
                if (blockResult !== null) {
                    return blockResult;
                }
            }
            const approvalResult = await this.pendingDecisionProvider.requestApproval({
                type: OperationType.Delete,
                details: {
                    path: resolvedPath
                },
                toolCallId: args.toolCallId
            });
            if (!approvalResult.approved) {
                return new DeleteResult({
                    result: {
                        case: "rejected",
                        value: new DeleteRejected({
                            path: resolvedPath,
                            reason: approvalResult.reason || ""
                        })
                    }
                });
            }
            let stats;
            try {
                stats = await (0, import_promises21.stat)(resolvedPath);
            } catch (error3) {
                if (error3.code === "ENOENT") {
                    return new DeleteResult({
                        result: {
                            case: "fileNotFound",
                            value: new DeleteFileNotFound({
                                path: resolvedPath
                            })
                        }
                    });
                }
                return new DeleteResult({
                    result: {
                        case: "error",
                        value: new DeleteError({
                            path: resolvedPath,
                            error: error3.message
                        })
                    }
                });
            }
            if (!stats.isFile()) {
                const actualType = stats.isDirectory() ? "directory" : "other";
                return new DeleteResult({
                    result: {
                        case: "notFile",
                        value: new DeleteNotFile({
                            path: resolvedPath,
                            actualType
                        })
                    }
                });
            }
            const fileSize = stats.size;
            let fileContent;
            if (fileSize <= MAX_OFS_FILE_SIZE) {
                try {
                    fileContent = await readText(resolvedPath);
                } catch  {}
            }
            const prevContent = fileContent ?? "";
            try {
                await (0, import_promises21.unlink)(resolvedPath);
            } catch (error3) {
                if (error3.code === "EACCES") {
                    return new DeleteResult({
                        result: {
                            case: "permissionDenied",
                            value: new DeletePermissionDenied({
                                path: resolvedPath,
                                clientVisibleError: "Permission denied"
                            })
                        }
                    });
                }
                if (error3.code === "EBUSY") {
                    return new DeleteResult({
                        result: {
                            case: "fileBusy",
                            value: new DeleteFileBusy({
                                path: resolvedPath
                            })
                        }
                    });
                }
                return new DeleteResult({
                    result: {
                        case: "error",
                        value: new DeleteError({
                            path: resolvedPath,
                            error: error3.message
                        })
                    }
                });
            }
            if (this.fileChangeTracker && fileContent !== void 0) {
                const metadata = args.toolCallId ? {
                    toolCallId: args.toolCallId
                } : void 0;
                await this.fileChangeTracker.trackChange(resolvedPath, fileContent, void 0, metadata);
            }
            if (this.onDeleteForAiTracking) {
                void this.onDeleteForAiTracking({
                    path: resolvedPath
                }).catch(()=>{});
            }
            return new DeleteResult({
                result: {
                    case: "success",
                    value: new DeleteSuccess({
                        path: resolvedPath,
                        deletedFile: resolvedPath,
                        fileSize: BigInt(fileSize),
                        prevContent
                    })
                }
            });
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources19(env_1);
        }
    }
};

}
