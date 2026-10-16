import { PMu, Pse } from "./De_3.js";
import { Fo, X4 } from "./HVr.js";
import { Yu } from "./browser.ts";
import { Ar, Ji } from "./cancellation.js";
import { Mbn } from "./composer.ts";
import { BU, SN } from "./composerBlobStore.js";
import { Ml } from "./index.ts";
import { A1 } from "./index_5.ts";
import { L$t, LMn, PMn, hYs, rJe } from "./read_exec_pb.js";
import { x } from "./tslib.es6.js";
function QXv(e, t, n, i) {
    if (n.offset === void 0 && n.limit === void 0) return {
        content: e,
        rangeApplied: !1
    };
    if (e === "" || t === 0) return {
        content: e,
        rangeApplied: !1
    };
    const r = n.offset ?? 1, s = n.limit ?? (r < 0 ? Math.abs(r) : t), o = r < 0 ? Math.max(0, t + r) : Math.max(0, r - 1);
    if (o >= t) return {
        content: e,
        rangeApplied: !1
    };
    const a = Math.min(t, o + s);
    return {
        content: (i ?? e.split(`
`)).slice(o, a).join(`
`),
        rangeApplied: !0
    };
}
function JXv(e, t, n, i) {
    if (e === 0 || n.length <= 1 && (n[0] ?? "") === "") return {
        content: "",
        rangeApplied: !1
    };
    const r = t.offset ?? 1, s = t.limit ?? (r < 0 ? Math.abs(r) : e), o = r < 0 ? Math.max(0, e + r) : Math.max(0, r - 1);
    if (o >= e) return {
        content: i(),
        rangeApplied: !1
    };
    const a = Math.min(e, o + s);
    return {
        content: n.slice(o, a).join(`
`),
        rangeApplied: !0
    };
}
function j0h(e) {
    let t = 0;
    for(let n = 0; n < e.length; n++){
        const i = e.charCodeAt(n);
        if (i <= 127) t += 1;
        else if (i <= 2047) t += 2;
        else if (i >= 55296 && i <= 56319) {
            const r = n + 1 < e.length ? e.charCodeAt(n + 1) : 0;
            r >= 56320 && r <= 57343 ? (t += 4, n++) : t += 3;
        } else t += 3;
    }
    return t;
}
function eZv(e, t) {
    let n = 0;
    for (const i of e)n += j0h(i);
    return e.length > 1 && (n += (e.length - 1) * t.length), n;
}
var q0h;
export { JXv, QXv, eZv, j0h, q0h };
var __wakaru_tZv_initialized = false;
export function tZv() {
if (__wakaru_tZv_initialized) return;
__wakaru_tZv_initialized = true;
"use strict";
x(), A1(), Ml(), LMn(), Yu(), Ar(), Fo(), BU(), q0h = class {
    constructor(e, t, n, i, r, s, o, a){
        this.remoteReadExecutor = e, this.modelService = t, this.workspaceContextService = n, this.cursorIgnoreService = i, this.notebookService = r, this.textResourceConfigurationService = o, this.textFileService = a, this.blobStore = new SN(s, void 0);
    }
    async execute(e, t, n) {
        const i = this.workspaceContextService.resolveRelativePath(t.path), r = this.cursorIgnoreService.shouldIgnoreUriSync(i, void 0);
        if (r?.type === "adminBlock" || r?.type === "cursorIgnore") return new rJe({
            result: {
                case: "permissionDenied",
                value: new hYs({
                    path: t.path
                })
            }
        });
        const s = this.textFileService.files.get(i);
        let o = !1;
        s !== void 0 && !s.isDirty() && (await this.textFileService.files.resolve(i, {
            reload: {
                async: !1
            },
            reason: 3
        }), o = s.hasState(4) && !s.isDirty());
        const a = this.modelService.getModel(i);
        if (a && !o) {
            const f = a.getLineCount(), v = t.offset !== void 0 || t.limit !== void 0;
            let b, y, T;
            if (!v) b = a.getValue(), y = BigInt(j0h(b)), T = !1;
            else {
                const A = a.getLinesContent();
                y = BigInt(eZv(A, a.getEOL()));
                const R = JXv(f, t, A, ()=>a.getValue());
                b = R.content, T = R.rangeApplied;
            }
            let E = !1;
            return b.length > Mbn && (b = b.substring(0, Mbn), E = !0), new rJe({
                result: {
                    case: "success",
                    value: new L$t({
                        path: t.path,
                        output: {
                            case: "content",
                            value: b
                        },
                        totalLines: f,
                        fileSize: y,
                        truncated: E,
                        rangeApplied: T
                    })
                }
            });
        }
        if (this.notebookService.getNotebookTextModel(i)) try {
            const f = await this.notebookService.createNotebookTextDocumentSnapshot(i, 1, Ji.None), v = await X4(f), b = v.toString(), y = b.split(`
`).length, T = BigInt(v.byteLength), E = QXv(b, y, t);
            let A = E.content, R = !1;
            return A.length > Mbn && (A = A.substring(0, Mbn), R = !0), new rJe({
                result: {
                    case: "success",
                    value: new L$t({
                        path: t.path,
                        output: {
                            case: "content",
                            value: A
                        },
                        totalLines: y,
                        fileSize: T,
                        truncated: R,
                        rangeApplied: E.rangeApplied
                    })
                }
            });
        } catch (f) {
            console.warn(`Failed to serialize notebook ${t.path}:`, f);
        }
        const u = this.textFileService.files.get(i)?.getEncoding() ?? this.textResourceConfigurationService.getValue(i, "files.encoding");
        let h = t;
        u && u !== "utf8" && (h = new PMn({
            ...t,
            encodingHint: PMu(u)
        }));
        const p = await this.remoteReadExecutor.execute(e, h, n);
        if (p.result.case === "success" && p.result.value.output.case === "data") {
            const f = p.result.value.output.value, v = await Pse(f);
            return await this.blobStore.setBlob(e, v, f), new rJe({
                result: {
                    case: "success",
                    value: new L$t({
                        ...p.result.value,
                        outputBlobId: v
                    })
                }
            });
        }
        if (p.result.case === "success" && p.result.value.output.case === "content" && p.result.value.output.value.length > 1e4) {
            const f = p.result.value.output.value, v = new TextEncoder().encode(f), b = await Pse(v);
            return await this.blobStore.setBlob(e, b, v), new rJe({
                result: {
                    case: "success",
                    value: new L$t({
                        ...p.result.value,
                        outputBlobId: b
                    })
                }
            });
        }
        return p;
    }
};

}
