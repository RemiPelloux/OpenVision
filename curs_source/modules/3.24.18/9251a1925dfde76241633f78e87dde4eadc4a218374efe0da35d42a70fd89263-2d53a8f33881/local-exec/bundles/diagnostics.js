import { createSpan } from "../../agent-kv/dist/controlled.js";
import { init_dist } from "../../context/dist/index.js";
import { resolvePath } from "../../dist_exports.js";
import { init_common3 } from "./common.js";
import { Diagnostic, DiagnosticSeverity, DiagnosticsError, DiagnosticsFileNotFound, DiagnosticsPermissionDenied, DiagnosticsResult, DiagnosticsSuccess, init_diagnostics_exec_pb } from "../../proto/dist/generated/agent/v1/diagnostics_exec_pb.js";
import { Position, Range2, init_utils_pb } from "../../proto/dist/generated/agent/v1/utils_pb.js";
import { FileURL } from "../../utils/dist/file-url.js";
import { init_dist3 } from "../../utils/dist/index.js";
var import_promises38, __addDisposableResource37, __disposeResources37, LocalDiagnosticsExecutor;
export { LocalDiagnosticsExecutor, __addDisposableResource37, __disposeResources37, import_promises38 };
var __wakaru_init_diagnostics3_initialized = false;
export function init_diagnostics3() {
if (__wakaru_init_diagnostics3_initialized) return;
__wakaru_init_diagnostics3_initialized = true;
"use strict";
import_promises38 = require("node:fs/promises");
init_dist();
init_diagnostics_exec_pb();
init_utils_pb();
init_dist3();
init_common3();
__addDisposableResource37 = function(env, value, async) {
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
__disposeResources37 = (function(SuppressedError2) {
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
LocalDiagnosticsExecutor = class {
    constructor(workspacePath, diagnosticsProvider){
        this.workspacePath = workspacePath;
        this.diagnosticsProvider = diagnosticsProvider;
    }
    async execute(ctx, args) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource37(env_1, createSpan(ctx.withName("LocalDiagnosticsExecutor.execute")), false);
            let cancel;
            [ctx, cancel] = ctx.withTimeoutAndCancel(1e4);
            try {
                const targetPath = resolvePath(args.path, this.workspacePath);
                try {
                    const stats = await (0, import_promises38.stat)(targetPath);
                    if (!stats.isFile() && !stats.isDirectory()) {
                        return new DiagnosticsResult({
                            result: {
                                case: "fileNotFound",
                                value: new DiagnosticsFileNotFound({
                                    path: args.path
                                })
                            }
                        });
                    }
                } catch (error3) {
                    if (error3.code === "ENOENT") {
                        return new DiagnosticsResult({
                            result: {
                                case: "fileNotFound",
                                value: new DiagnosticsFileNotFound({
                                    path: args.path
                                })
                            }
                        });
                    }
                    if (error3.code === "EACCES") {
                        return new DiagnosticsResult({
                            result: {
                                case: "permissionDenied",
                                value: new DiagnosticsPermissionDenied({
                                    path: args.path
                                })
                            }
                        });
                    }
                    throw error3;
                }
                const absolutePath = resolvePath(targetPath, this.workspacePath);
                const url2 = new FileURL(absolutePath);
                await this.diagnosticsProvider.open(ctx, url2);
                const lspDiagnostics = await this.diagnosticsProvider.getDiagnostics(ctx, url2);
                const protoDiagnostics = lspDiagnostics.map((d)=>this.convertDiagnostic(d));
                return new DiagnosticsResult({
                    result: {
                        case: "success",
                        value: new DiagnosticsSuccess({
                            path: args.path,
                            diagnostics: protoDiagnostics,
                            totalDiagnostics: protoDiagnostics.length
                        })
                    }
                });
            } catch (error3) {
                if (ctx.canceled) {
                    return new DiagnosticsResult({
                        result: {
                            case: "error",
                            value: new DiagnosticsError({
                                path: args.path,
                                error: "Request timed out after 10 seconds"
                            })
                        }
                    });
                }
                return new DiagnosticsResult({
                    result: {
                        case: "error",
                        value: new DiagnosticsError({
                            path: args.path,
                            error: error3 instanceof Error ? error3.message : String(error3)
                        })
                    }
                });
            } finally{
                cancel();
            }
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources37(env_1);
        }
    }
    convertDiagnostic(lspDiagnostic) {
        const rawMessage = lspDiagnostic.message;
        const message = typeof rawMessage === "string" ? rawMessage : rawMessage && typeof rawMessage === "object" && "value" in rawMessage && typeof rawMessage.value === "string" ? rawMessage.value : "";
        return new Diagnostic({
            severity: this.convertSeverity(lspDiagnostic.severity),
            range: lspDiagnostic.range ? new Range2({
                start: new Position({
                    line: lspDiagnostic.range.start.line,
                    column: lspDiagnostic.range.start.character
                }),
                end: new Position({
                    line: lspDiagnostic.range.end.line,
                    column: lspDiagnostic.range.end.character
                })
            }) : void 0,
            message,
            source: lspDiagnostic.source,
            code: lspDiagnostic.code ? String(lspDiagnostic.code) : void 0
        });
    }
    convertSeverity(lspSeverity) {
        switch(lspSeverity){
            case 1:
                return DiagnosticSeverity.ERROR;
            case 2:
                return DiagnosticSeverity.WARNING;
            case 3:
                return DiagnosticSeverity.INFORMATION;
            case 4:
                return DiagnosticSeverity.HINT;
            default:
                return DiagnosticSeverity.UNSPECIFIED;
        }
    }
};

}
