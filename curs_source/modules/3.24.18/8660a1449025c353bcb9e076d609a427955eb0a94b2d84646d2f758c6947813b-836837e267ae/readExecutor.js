import { Ga, Kq } from "./Iwo.js";
import { J_k, ebk, tbk, udg } from "./Ycg.js";
import { kl } from "./browser.ts";
import { Xs, yo } from "./cancellation.js";
import { iQn } from "./composer.ts";
import { KD, zW } from "./composerBlobStore.js";
import { nl } from "./index.ts";
import { OT } from "./index_5.ts";
import { lOp, ppe } from "./ipa.js";
import { Hmn, dbt, e9o, qni, zni } from "./read_exec_pb.js";
import { E } from "./tslib.es6.js";
var ddg;
export { ddg };
var __wakaru_nbk_initialized = false;
export function nbk() {
if (__wakaru_nbk_initialized) return;
__wakaru_nbk_initialized = true;
"use strict";
E(), OT(), nl(), zni(), kl(), yo(), Ga(), zW(), ddg = class {
    constructor(t, e, n, i, r, s, o, a){
        this.remoteReadExecutor = t, this.modelService = e, this.workspaceContextService = n, this.cursorIgnoreService = i, this.notebookService = r, this.textResourceConfigurationService = o, this.textFileService = a, this.blobStore = new KD(s, void 0);
    }
    async execute(t, e, n) {
        const i = this.workspaceContextService.resolveRelativePath(e.path), r = this.cursorIgnoreService.shouldIgnoreUriSync(i, void 0);
        if (r?.type === "adminBlock" || r?.type === "cursorIgnore") return new dbt({
            result: {
                case: "permissionDenied",
                value: new e9o({
                    path: e.path
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
            const g = a.getLineCount(), f = e.offset !== void 0 || e.limit !== void 0;
            let _, b, y;
            if (!f) _ = a.getValue(), b = BigInt(udg(_)), y = !1;
            else {
                const k = a.getLinesContent();
                b = BigInt(tbk(k, a.getEOL()));
                const C = ebk(g, e, k, ()=>a.getValue());
                _ = C.content, y = C.rangeApplied;
            }
            let S = !1;
            return _.length > iQn && (_ = _.substring(0, iQn), S = !0), new dbt({
                result: {
                    case: "success",
                    value: new Hmn({
                        path: e.path,
                        output: {
                            case: "content",
                            value: _
                        },
                        totalLines: g,
                        fileSize: b,
                        truncated: S,
                        rangeApplied: y
                    })
                }
            });
        }
        if (this.notebookService.getNotebookTextModel(i)) try {
            const g = await this.notebookService.createNotebookTextDocumentSnapshot(i, 1, Xs.None), f = await Kq(g), _ = f.toString(), b = _.split(`
`).length, y = BigInt(f.byteLength), S = J_k(_, b, e);
            let k = S.content, C = !1;
            return k.length > iQn && (k = k.substring(0, iQn), C = !0), new dbt({
                result: {
                    case: "success",
                    value: new Hmn({
                        path: e.path,
                        output: {
                            case: "content",
                            value: k
                        },
                        totalLines: b,
                        fileSize: y,
                        truncated: C,
                        rangeApplied: S.rangeApplied
                    })
                }
            });
        } catch (g) {
            console.warn(`Failed to serialize notebook ${e.path}:`, g);
        }
        const u = this.textFileService.files.get(i)?.getEncoding() ?? this.textResourceConfigurationService.getValue(i, "files.encoding");
        let d = e;
        u && u !== "utf8" && (d = new qni({
            ...e,
            encodingHint: lOp(u)
        }));
        const h = await this.remoteReadExecutor.execute(t, d, n);
        if (h.result.case === "success" && h.result.value.output.case === "data") {
            const g = h.result.value.output.value, f = await ppe(g);
            return await this.blobStore.setBlob(t, f, g), new dbt({
                result: {
                    case: "success",
                    value: new Hmn({
                        ...h.result.value,
                        outputBlobId: f
                    })
                }
            });
        }
        if (h.result.case === "success" && h.result.value.output.case === "content" && h.result.value.output.value.length > 1e4) {
            const g = h.result.value.output.value, f = new TextEncoder().encode(g), _ = await ppe(f);
            return await this.blobStore.setBlob(t, _, f), new dbt({
                result: {
                    case: "success",
                    value: new Hmn({
                        ...h.result.value,
                        outputBlobId: _
                    })
                }
            });
        }
        return h;
    }
};

}
