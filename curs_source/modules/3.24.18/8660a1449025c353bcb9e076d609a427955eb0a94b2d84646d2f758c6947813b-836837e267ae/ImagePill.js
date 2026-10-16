import { Ga, Tr } from "./Iwo.js";
import { AZg, S5k } from "./MultiImageViewer.js";
import { Gr, RZg } from "./Ycg.js";
import { gs, yt } from "./codicons.js";
import { Ki } from "./network.js";
import { vo } from "./solidContext.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { Ai, Xo } from "./uuid_2.js";
import { at } from "./web.js";
import { Er, Le, lo, wt } from "./yBp.js";
import { Cn, Ee, Ut, Wt, pi, vt, xn } from "./ze.js";
var PZg, MZg, DZg;
export { DZg, MZg, PZg };
var __wakaru_k5k_initialized = false;
export function k5k() {
if (__wakaru_k5k_initialized) return;
__wakaru_k5k_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), pi(), Ga(), gs(), Ki(), ta(), fn(), Xo(), S5k(), vo(), PZg = wt("<div>"), MZg = wt('<div class="context-pill context-pill-image"><div class=image-pill-container><img alt="Attached image"class=image-pill-img>'), DZg = (t)=>{
    const e = Gr(), [n, i] = Wt(!1), [r, s] = Wt(!0), [o, a] = Wt(!1), l = vt(()=>!r() || !t.data?.path ? "" : RZg(t.data, 0).src), c = vt(()=>(t.allImages?.length ? t.allImages : [
            t.data
        ]).map((h, p)=>RZg(h, p))), u = async (d)=>{
        if (!t.setSelectedImages || !t.getSelectedImages) return;
        const h = t.getSelectedImages();
        if (!h[d.index]) return;
        const f = e.workspaceContextService.getWorkspace().id, _ = rt.joinPath(e.environmentService.workspaceStorageHome, f, "images");
        await e.fileService.createFolder(_);
        const b = rt.joinPath(_, `composer-annotation-${Ai()}.png`);
        await e.fileService.writeFile(b, Tr.wrap(d.bytes));
        const y = h.map((S, k)=>k === d.index ? {
                ...S,
                path: b.fsPath,
                dimension: {
                    width: d.width,
                    height: d.height
                },
                loadedAt: Date.now()
            } : S);
        t.setSelectedImages(y);
    };
    return Cn(()=>{
        const d = t.data?.path;
        if (!d) return;
        const h = rt.file(d);
        e.fileService.exists(h).then((p)=>{
            s(p);
        }).catch(()=>{
            s(!1);
        });
    }), [
        (()=>{
            var d = MZg(), h = d.firstChild, p = h.firstChild;
            return d.addEventListener("mouseleave", ()=>{
                i(!1);
            }), d.addEventListener("mouseenter", ()=>{
                i(!0);
            }), d.addEventListener("click", (g)=>{
                t.disabled || (g.stopPropagation(), a(!0), t.onClick?.(g));
            }), Le(h, Ee(Ut, {
                get when () {
                    return n() && t.onRemove;
                },
                get children () {
                    var g = PZg();
                    return g.addEventListener("click", (f)=>{
                        f.stopPropagation(), t.onRemove?.();
                    }), xn(()=>Er(g, `image-pill-close-button ${Gn.asClassName(yt.close)}`)), g;
                }
            }), null), xn((g)=>{
                var f = t.id, _ = !!t.isSelected, b = !!t.willBeOmitted, y = !!t.disabled, S = l();
                return f !== g.e && lo(d, "id", g.e = f), _ !== g.t && d.classList.toggle("context-pill-selected", g.t = _), b !== g.a && d.classList.toggle("context-pill-omitted", g.a = b), y !== g.o && d.classList.toggle("context-pill-disabled", g.o = y), S !== g.i && lo(p, "src", g.i = S), g;
            }, {
                e: void 0,
                t: void 0,
                a: void 0,
                o: void 0,
                i: void 0
            }), d;
        })(),
        Ee(Ut, {
            get when () {
                return o();
            },
            get children () {
                return Ee(AZg, {
                    get images () {
                        return c();
                    },
                    get initialIndex () {
                        return t.imageIndex ?? 0;
                    },
                    get isOpen () {
                        return o();
                    },
                    onClose: ()=>a(!1),
                    get enableDrawing () {
                        return !!(t.setSelectedImages && t.getSelectedImages);
                    },
                    onSaveDrawing: (d)=>u({
                            index: d.index,
                            bytes: d.bytes,
                            width: d.width,
                            height: d.height
                        })
                });
            }
        })
    ];
};

}
