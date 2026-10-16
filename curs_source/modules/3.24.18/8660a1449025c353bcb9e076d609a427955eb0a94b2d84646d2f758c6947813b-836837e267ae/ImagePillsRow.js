import { yIg } from "./ContextPills.css";
import { DZg, k5k } from "./ImagePill.js";
import { Am, cs, jp } from "./Sol.js";
import { FZg, w5k } from "./VideoPill.js";
import { Ca, ME } from "./Ycg.js";
import { gs, yt } from "./codicons.js";
import { e_ } from "./jotaiSolidBridge.js";
import { eD } from "./scrollableDiv.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { Er, Le, lo, wt } from "./yBp.js";
import { Ee, Ut, Whn, pi, xn } from "./ze.js";
var o0l, BZg, zms, UZg, jZg;
export { BZg, UZg, jZg, o0l, zms };
var __wakaru_C5k_initialized = false;
export function C5k() {
if (__wakaru_C5k_initialized) return;
__wakaru_C5k_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), Am(), pi(), gs(), ta(), e_(), eD(), k5k(), w5k(), yIg(), o0l = wt("<div>"), BZg = wt("<div class=context-pill><i></i><span>"), zms = cs(!1), UZg = (t)=>{
    const e = jp();
    e.set(zms, !1);
    const n = Ca(e, zms), i = (r)=>e.set(zms, r);
    return (()=>{
        var r = BZg(), s = r.firstChild, o = s.nextSibling;
        return r.addEventListener("mouseleave", ()=>i(!1)), r.addEventListener("mouseenter", ()=>i(!0)), Le(o, ()=>t.name ?? "Document"), Le(r, Ee(Ut, {
            get when () {
                return n() && t.onRemove;
            },
            get children () {
                var a = o0l();
                return a.addEventListener("click", (l)=>{
                    l.stopPropagation(), t.onRemove?.();
                }), xn(()=>Er(a, Gn.asClassName(yt.close))), a;
            }
        }), null), xn((a)=>{
            var l = t.id, c = t.name, u = Gn.asClassName(yt.filePdf);
            return l !== a.e && lo(r, "id", a.e = l), c !== a.t && lo(r, "title", a.t = c), u !== a.a && Er(s, a.a = u), a;
        }, {
            e: void 0,
            t: void 0,
            a: void 0
        }), r;
    })();
}, jZg = (t)=>{
    const e = ()=>t.videos ?? [], n = ()=>t.documents ?? [], i = (r)=>{
        if (!t.isModifiable || !t.setSelectedImages || !t.getSelectedImages) return;
        const o = t.getSelectedImages().filter((a, l)=>l !== r);
        t.setSelectedImages(o);
    };
    return (()=>{
        var r = o0l();
        return r.style.setProperty("width", "100%"), r.style.setProperty("overflow", "hidden"), r.style.setProperty("height", "32px"), r.style.setProperty("margin-top", "2px"), Le(r, Ee(ME, {
            scrollingDirection: "horizontal",
            style: {
                height: "100%",
                width: "100%"
            },
            innerContainerStyle: {
                display: "flex",
                gap: "8px",
                height: "32px"
            },
            get children () {
                return [
                    Ee(Whn, {
                        get each () {
                            return t.images;
                        },
                        children: (s, o)=>Ee(DZg, {
                                get data () {
                                    return s();
                                },
                                get allImages () {
                                    return t.images;
                                },
                                imageIndex: o,
                                get getSelectedImages () {
                                    return t.getSelectedImages;
                                },
                                get setSelectedImages () {
                                    return t.setSelectedImages;
                                },
                                get onRemove () {
                                    return t.isModifiable ? ()=>i(o) : void 0;
                                }
                            })
                    }),
                    Ee(Whn, {
                        get each () {
                            return e();
                        },
                        children: (s)=>Ee(FZg, {
                                get id () {
                                    return s().id;
                                },
                                get name () {
                                    return s().name;
                                },
                                get url () {
                                    return s().url;
                                },
                                onClick: ()=>t.onVideoClick?.(s()),
                                get onRemove () {
                                    return t.isModifiable && t.onVideoRemove ? ()=>t.onVideoRemove?.(s().id) : void 0;
                                }
                            })
                    }),
                    Ee(Whn, {
                        get each () {
                            return n();
                        },
                        children: (s)=>Ee(UZg, {
                                get id () {
                                    return s().id;
                                },
                                get name () {
                                    return s().name;
                                },
                                get onRemove () {
                                    return t.isModifiable && t.onDocumentRemove ? ()=>t.onDocumentRemove?.(s().id) : void 0;
                                }
                            })
                    })
                ];
            }
        })), r;
    })();
};

}
