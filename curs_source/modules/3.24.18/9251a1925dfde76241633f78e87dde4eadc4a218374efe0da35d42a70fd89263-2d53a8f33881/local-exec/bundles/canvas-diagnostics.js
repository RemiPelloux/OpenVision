import { applySaveSnapshot, canvasDiagnosticsError, convertDiagnostic } from "../../dist_exports2.js";
import { CanvasDiagnosticsResult, CanvasDiagnosticsSuccess, init_canvas_diagnostics_exec_pb } from "../../proto/dist/generated/agent/v1/canvas_diagnostics_exec_pb.js";
import { init_diagnostics_exec_pb } from "../../proto/dist/generated/agent/v1/diagnostics_exec_pb.js";
import { init_utils_pb } from "../../proto/dist/generated/agent/v1/utils_pb.js";
var LocalCanvasDiagnosticsExecutor;
export { LocalCanvasDiagnosticsExecutor };
var __wakaru_init_canvas_diagnostics2_initialized = false;
export function init_canvas_diagnostics2() {
if (__wakaru_init_canvas_diagnostics2_initialized) return;
__wakaru_init_canvas_diagnostics2_initialized = true;
"use strict";
init_canvas_diagnostics_exec_pb();
init_diagnostics_exec_pb();
init_utils_pb();
LocalCanvasDiagnosticsExecutor = class {
    constructor(getCanvasDiagnostics, beginCanvasSave){
        this.getCanvasDiagnostics = getCanvasDiagnostics;
        this.beginCanvasSave = beginCanvasSave;
    }
    async execute(_ctx, args) {
        let resolveTypecheck = ()=>{};
        const typecheckOutcome = new Promise((resolve36)=>{
            resolveTypecheck = resolve36;
        });
        let snapshotPromise;
        if (this.beginCanvasSave === void 0) {
            snapshotPromise = Promise.resolve(void 0);
        } else {
            try {
                snapshotPromise = this.beginCanvasSave(args.path, {
                    typecheckOutcome
                }).catch(()=>void 0);
            } catch  {
                snapshotPromise = Promise.resolve(void 0);
            }
        }
        try {
            const diags = await this.getCanvasDiagnostics(args.path);
            if (diags === void 0) {
                resolveTypecheck("unavailable");
                return applySaveSnapshot(canvasDiagnosticsError(args.path, "diagnostics unavailable"), await snapshotPromise);
            }
            resolveTypecheck(diags.some((diag)=>diag.severity === 1) ? "failed" : "passed");
            return applySaveSnapshot(new CanvasDiagnosticsResult({
                result: {
                    case: "success",
                    value: new CanvasDiagnosticsSuccess({
                        path: args.path,
                        diagnostics: diags.map(convertDiagnostic)
                    })
                }
            }), await snapshotPromise);
        } catch (error3) {
            resolveTypecheck("unavailable");
            return applySaveSnapshot(canvasDiagnosticsError(args.path, error3 instanceof Error ? error3.message : String(error3)), await snapshotPromise);
        }
    }
};

}
