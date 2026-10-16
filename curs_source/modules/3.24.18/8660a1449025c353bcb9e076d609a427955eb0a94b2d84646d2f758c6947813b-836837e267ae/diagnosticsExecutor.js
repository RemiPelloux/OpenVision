import { F4 } from "./Observable_3.js";
import { $4t, UOo, Z_t, ett, iSr, nSr, tSr } from "./diagnostics_exec_pb.js";
import { TCe } from "./externalTypes.js";
import { lFp } from "./index_198.js";
import { E0t, IOa, aD1, aFp, cD1, nFp } from "./ipa.js";
import { ed, rT } from "./markers.js";
import { E } from "./tslib.es6.js";
import { dY, i5e, n5e } from "./utils_pb_2.js";
import { ff } from "./yBp.js";
var oll;
export { oll };
var __wakaru_adg_initialized = false;
export function adg() {
if (__wakaru_adg_initialized) return;
__wakaru_adg_initialized = true;
"use strict";
E(), $4t(), i5e(), rT(), TCe(), lFp(), oll = class {
    constructor(t, e, n, i, r){
        this.markerService = t, this.workspaceService = e, this.fileService = n, this.modelService = i, this.logService = r;
    }
    async execute(t, e, n) {
        this.logService.info(`[VscodeDiagnosticsExecutor] EXECUTE: ${e.path}`);
        try {
            const i = this.workspaceService.resolveRelativePath(e.path);
            if (!i) return new ett({
                result: {
                    case: "fileNotFound",
                    value: new iSr({
                        path: e.path
                    })
                }
            });
            try {
                await this.fileService.stat(i);
            } catch  {
                return new ett({
                    result: {
                        case: "fileNotFound",
                        value: new iSr({
                            path: e.path
                        })
                    }
                });
            }
            let r, s;
            const o = this.modelService.getModel(i);
            if (!o || o.isDisposed()) {
                const c = this.markerService.read({
                    resource: i
                });
                return new ett({
                    result: {
                        case: "success",
                        value: new tSr({
                            path: e.path,
                            diagnostics: c.map((u)=>this.convertMarkerToDiagnostic(u, s)),
                            totalDiagnostics: c.length
                        })
                    }
                });
            }
            r = this.waitForProbablyFinished(o, 150, 6 * 1e3);
            let { linterErrors: a, status: l } = await this.getUpToDateLinterErrors(o);
            return l === "someOutOfDate" && (a = await r), s = this.resolveCurrentVersionId(o, a), this.logService.info(`[VscodeDiagnosticsExecutor] Returning ${a.length} linter errors`), new ett({
                result: {
                    case: "success",
                    value: new tSr({
                        path: e.path,
                        diagnostics: a.map((c)=>this.convertMarkerToDiagnostic(c, s)),
                        totalDiagnostics: a.length
                    })
                }
            });
        } catch (i) {
            return this.logService.error(`[VscodeDiagnosticsExecutor] ERROR: ${i instanceof Error ? i.message : String(i)}`), new ett({
                result: {
                    case: "error",
                    value: new UOo({
                        path: e.path,
                        error: i instanceof Error ? i.message : String(i)
                    })
                }
            });
        }
    }
    resolveCurrentVersionId(t, e) {
        if (!t.isDisposed()) return t.getVersionId();
        let n;
        for (const i of e)i.modelVersionId !== void 0 && (n = n === void 0 ? i.modelVersionId : Math.max(n, i.modelVersionId));
        return n;
    }
    async getUpToDateLinterErrors(t) {
        const e = this.markerService.read({
            resource: t.uri
        });
        if (t.isDisposed()) return {
            linterErrors: e,
            status: "noVersionId"
        };
        const n = t.getVersionId();
        if (e.every((i)=>i.modelVersionId === n || i.modelVersionId === void 0) && e.some((i)=>i.modelVersionId === n)) return {
            linterErrors: e,
            status: "upToDate"
        };
        {
            const i = e.filter((r)=>r.modelVersionId === n || r.modelVersionId === void 0);
            return e.some((r)=>r.modelVersionId !== void 0) ? {
                linterErrors: i,
                status: "someOutOfDate"
            } : e.length === 0 ? {
                linterErrors: i,
                status: "noLinterErrors"
            } : {
                linterErrors: i,
                status: "noVersionId"
            };
        }
    }
    waitForProbablyFinished(t, e, n) {
        const i = new F4((s)=>{
            const o = this.markerService.onMarkerChanged((a)=>{
                const l = t.uri.toString();
                a.some((c)=>c.toString() === l) && s.next(a);
            });
            return ()=>o.dispose();
        }), r = Date.now();
        return E0t(i.pipe(aD1(e), IOa(()=>this.getUpToDateLinterErrors(t)), aFp((s)=>s.status !== "someOutOfDate"), cD1(1), nFp(n))).then((s)=>(this.logService?.info(`[VscodeDiagnosticsExecutor] Waited ${Date.now() - r}ms for linter errors to settle`, t.uri.toString()), s.linterErrors), (s)=>(this.logService.info(`[VscodeDiagnosticsExecutor] Couldn't wait on latest linter errors: ${s instanceof Error ? s.message : String(s)}`), this.getUpToDateLinterErrors(t).then((o)=>o.linterErrors)));
    }
    convertMarkerToDiagnostic(t, e) {
        const n = t.modelVersionId, i = n !== void 0 && e !== void 0 && n < e;
        return new nSr({
            severity: this.convertSeverity(t.severity),
            range: new n5e({
                start: new dY({
                    line: ff(t.startLineNumber),
                    column: ff(t.startColumn)
                }),
                end: new dY({
                    line: ff(t.endLineNumber),
                    column: ff(t.endColumn)
                })
            }),
            message: t.message,
            source: t.source,
            code: typeof t.code == "string" ? t.code : t.code?.value,
            isStale: i
        });
    }
    convertSeverity(t) {
        switch(t){
            case ed.Error:
                return Z_t.ERROR;
            case ed.Warning:
                return Z_t.WARNING;
            case ed.Info:
                return Z_t.INFORMATION;
            case ed.Hint:
                return Z_t.HINT;
            default:
                return Z_t.UNSPECIFIED;
        }
    }
};

}
