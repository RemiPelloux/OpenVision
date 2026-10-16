import { Zp } from "./A3u.js";
import { $Pu, $pv, Bpv, Qyt, _pv, tKs } from "./De_3.js";
import { ZO } from "./Observable_3.js";
import { Myt, OQe, QWs, _4i, b4i, v4i, y4e } from "./diagnostics_exec_pb.js";
import { Nde } from "./externalTypes.js";
import { HPu } from "./index_192.js";
import { $_, nc } from "./markers.js";
import { x } from "./tslib.es6.js";
import { S$, k0e, w0e } from "./utils_pb_2.js";
var n1o;
export { n1o };
var __wakaru_W0h_initialized = false;
export function W0h() {
if (__wakaru_W0h_initialized) return;
__wakaru_W0h_initialized = true;
"use strict";
x(), Myt(), w0e(), $_(), Nde(), HPu(), n1o = class {
    constructor(e, t, n, i, r){
        this.markerService = e, this.workspaceService = t, this.fileService = n, this.modelService = i, this.logService = r;
    }
    async execute(e, t, n) {
        this.logService.info(`[VscodeDiagnosticsExecutor] EXECUTE: ${t.path}`);
        try {
            const i = this.workspaceService.resolveRelativePath(t.path);
            if (!i) return new y4e({
                result: {
                    case: "fileNotFound",
                    value: new b4i({
                        path: t.path
                    })
                }
            });
            try {
                await this.fileService.stat(i);
            } catch  {
                return new y4e({
                    result: {
                        case: "fileNotFound",
                        value: new b4i({
                            path: t.path
                        })
                    }
                });
            }
            let r, s;
            const o = this.modelService.getModel(i);
            if (!o || o.isDisposed()) {
                const l = this.markerService.read({
                    resource: i
                });
                return new y4e({
                    result: {
                        case: "success",
                        value: new v4i({
                            path: t.path,
                            diagnostics: l.map((u)=>this.convertMarkerToDiagnostic(u, s)),
                            totalDiagnostics: l.length
                        })
                    }
                });
            }
            r = this.waitForProbablyFinished(o, 150, 6 * 1e3);
            let { linterErrors: a, status: c } = await this.getUpToDateLinterErrors(o);
            return c === "someOutOfDate" && (a = await r), s = this.resolveCurrentVersionId(o, a), this.logService.info(`[VscodeDiagnosticsExecutor] Returning ${a.length} linter errors`), new y4e({
                result: {
                    case: "success",
                    value: new v4i({
                        path: t.path,
                        diagnostics: a.map((l)=>this.convertMarkerToDiagnostic(l, s)),
                        totalDiagnostics: a.length
                    })
                }
            });
        } catch (i) {
            return this.logService.error(`[VscodeDiagnosticsExecutor] ERROR: ${i instanceof Error ? i.message : String(i)}`), new y4e({
                result: {
                    case: "error",
                    value: new QWs({
                        path: t.path,
                        error: i instanceof Error ? i.message : String(i)
                    })
                }
            });
        }
    }
    resolveCurrentVersionId(e, t) {
        if (!e.isDisposed()) return e.getVersionId();
        let n;
        for (const i of t)i.modelVersionId !== void 0 && (n = n === void 0 ? i.modelVersionId : Math.max(n, i.modelVersionId));
        return n;
    }
    async getUpToDateLinterErrors(e) {
        const t = this.markerService.read({
            resource: e.uri
        });
        if (e.isDisposed()) return {
            linterErrors: t,
            status: "noVersionId"
        };
        const n = e.getVersionId();
        if (t.every((i)=>i.modelVersionId === n || i.modelVersionId === void 0) && t.some((i)=>i.modelVersionId === n)) return {
            linterErrors: t,
            status: "upToDate"
        };
        {
            const i = t.filter((r)=>r.modelVersionId === n || r.modelVersionId === void 0);
            return t.some((r)=>r.modelVersionId !== void 0) ? {
                linterErrors: i,
                status: "someOutOfDate"
            } : t.length === 0 ? {
                linterErrors: i,
                status: "noLinterErrors"
            } : {
                linterErrors: i,
                status: "noVersionId"
            };
        }
    }
    waitForProbablyFinished(e, t, n) {
        const i = new ZO((s)=>{
            const o = this.markerService.onMarkerChanged((a)=>{
                const c = e.uri.toString();
                a.some((l)=>l.toString() === c) && s.next(a);
            });
            return ()=>o.dispose();
        }), r = Date.now();
        return Qyt(i.pipe(Bpv(t), tKs(()=>this.getUpToDateLinterErrors(e)), $Pu((s)=>s.status !== "someOutOfDate"), $pv(1), _pv(n))).then((s)=>(this.logService?.info(`[VscodeDiagnosticsExecutor] Waited ${Date.now() - r}ms for linter errors to settle`, e.uri.toString()), s.linterErrors), (s)=>(this.logService.info(`[VscodeDiagnosticsExecutor] Couldn't wait on latest linter errors: ${s instanceof Error ? s.message : String(s)}`), this.getUpToDateLinterErrors(e).then((o)=>o.linterErrors)));
    }
    convertMarkerToDiagnostic(e, t) {
        const n = e.modelVersionId, i = n !== void 0 && t !== void 0 && n < t;
        return new _4i({
            severity: this.convertSeverity(e.severity),
            range: new k0e({
                start: new S$({
                    line: Zp(e.startLineNumber),
                    column: Zp(e.startColumn)
                }),
                end: new S$({
                    line: Zp(e.endLineNumber),
                    column: Zp(e.endColumn)
                })
            }),
            message: e.message,
            source: e.source,
            code: typeof e.code == "string" ? e.code : e.code?.value,
            isStale: i
        });
    }
    convertSeverity(e) {
        switch(e){
            case nc.Error:
                return OQe.ERROR;
            case nc.Warning:
                return OQe.WARNING;
            case nc.Info:
                return OQe.INFORMATION;
            case nc.Hint:
                return OQe.HINT;
            default:
                return OQe.UNSPECIFIED;
        }
    }
};

}
