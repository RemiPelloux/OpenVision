import { Qe, Vn } from "./Iwo.js";
import { Am, cs, jp } from "./Sol.js";
import { Ca, ME, e1, f9e } from "./Ycg.js";
import { SR } from "./async_3.js";
import { e_ } from "./jotaiSolidBridge.js";
import { eD } from "./scrollableDiv.js";
import { $Rn, ilt } from "./scrollableDivMaxHeight.js";
import { E } from "./tslib.es6.js";
import { at, zr } from "./web.js";
import { Ea, Le, wt, zu } from "./yBp.js";
import { Cn, Ee, On, Ut, V_, Xc, Zy, ks, pi, vt, xn } from "./ze.js";
var T2i, Swl, kwl, wwl, Cwl, Twl, Ewl, Sms, Iwl, xwl, aXg, lXg;
export { Cwl, Ewl, Iwl, Sms, Swl, T2i, Twl, aXg, kwl, lXg, wwl, xwl };
var __wakaru_Awl_initialized = false;
export function Awl() {
if (__wakaru_Awl_initialized) return;
__wakaru_Awl_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), at(), at(), Am(), pi(), SR(), Qe(), e_(), eD(), $Rn(), T2i = wt("<div>"), Swl = (t)=>typeof t == "number" ? `${t}px` : t, kwl = (t)=>t === void 0 ? void 0 : `calc(-1 * ${t})`, wwl = cs(!1), Cwl = (t)=>{
    let e;
    const n = jp(), i = Ca(n, wwl), r = (h)=>{
        n.set(wwl, h);
    }, s = ()=>{
        if (t.expanded) {
            t.onOverflowChange?.(!1);
            return;
        }
        const h = !!(e && e.scrollHeight > e.clientHeight);
        r(h), t.onOverflowChange?.(h);
    };
    Xc(()=>{
        const h = new Vn, p = ()=>{
            h.value = e1(()=>{
                s();
            });
        }, g = new ResizeObserver(()=>{
            p();
        });
        e && g.observe(e), On(()=>{
            h.dispose(), g.disconnect();
        });
    }), Cn(V_(()=>!!t.expanded, (h, p)=>{
        p !== void 0 && s();
    }));
    const o = vt(()=>t.expanded || !i() ? "none" : `linear-gradient(to bottom, black ${t.fadeLength ? `calc(100% - ${t.fadeLength})` : `${100 - (t.fadePercent ?? 15)}%`}, transparent 100%)`), a = (h)=>!t.expanded && i() && h ? Swl(h) : void 0, l = vt(()=>a(t.maskTopBleed)), c = vt(()=>a(t.maskBottomBleed)), u = vt(()=>`calc(${Swl(t.maxHeight)} + ${l() ?? "0px"} + ${c() ?? "0px"})`), d = vt(()=>t.expanded ? {
            overflow: "visible"
        } : {
            "max-height": u(),
            "box-sizing": "border-box",
            overflow: "hidden",
            "-webkit-mask-image": o(),
            "mask-image": o(),
            "padding-top": l(),
            "margin-top": kwl(l()),
            "padding-bottom": c(),
            "margin-bottom": kwl(c())
        });
    return (()=>{
        var h = T2i(), p = e;
        return typeof p == "function" ? zu(p, h) : e = h, Le(h, ()=>t.children), xn((g)=>Ea(h, d(), g)), h;
    })();
}, Twl = cs(!1), Ewl = cs(!1), Sms = cs(!1), Iwl = cs(!1), xwl = cs(!0), aXg = (t)=>{
    const e = jp();
    e.set(Sms, ks(()=>t.staticHeight === !0));
    const n = Ca(e, Twl), i = (j)=>{
        e.set(Twl, j);
    }, r = Ca(e, Ewl), s = (j)=>{
        e.set(Ewl, j);
    }, o = Ca(e, Sms), a = (j)=>{
        e.set(Sms, j);
    };
    let l;
    const c = Ca(e, Iwl), u = (j)=>{
        e.set(Iwl, j);
    };
    let d;
    const h = Ca(e, xwl), p = (j)=>{
        e.set(xwl, j);
    };
    let g;
    const f = ()=>{
        u(!0), d && clearTimeout(d), d = window.setTimeout(()=>{
            u(!1), d = void 0;
        }, 800);
    }, _ = t.scrollable, b = _ === void 0, y = _ ?? f9e();
    On(()=>{
        b && y.dispose();
    });
    const S = (j)=>Math.min(Math.max(j ?? 5, 0), 50), k = ()=>S(t.topFadeSize ?? t.fadeSize), C = ()=>S(t.bottomFadeSize ?? t.fadeSize), T = vt(()=>t.topFadeSizePx !== void 0 ? `${t.topFadeSizePx}px` : `${k()}%`), I = vt(()=>t.bottomFadeSizePx !== void 0 ? `${t.bottomFadeSizePx}px` : `${C()}%`), A = vt(()=>t.maxHeight), P = ()=>{
        if (!l) return;
        const { scrollHeight: j, height: $ } = y.getScrollDimensions(), { scrollTop: H } = y.getCurrentScrollPosition();
        let G = !1;
        const q = ks(A);
        q !== void 0 ? G = $ >= q - 1 : G = j > $, G && !o() && a(!0), j > $ ? (i(H > 5), s(H + $ < j - 5)) : (i(!1), s(!1));
    }, M = vt(()=>t.alwaysShowFade ? 1 : t.enableMasking === !1 || !o() ? 0 : n() ? 1 : 0), O = vt(()=>t.enableMasking === !1 || !o() ? 0 : r() ? 1 : 0), N = (j)=>{
        P(), f(), t.onScroll?.(j);
    };
    Xc(()=>{
        setTimeout(P, 0), t.instantInitialFade ? g = window.setTimeout(()=>{
            p(!1), g = void 0;
        }, 500) : p(!1);
        const j = new ResizeObserver(()=>{
            P();
        });
        l && j.observe(l), On(()=>{
            j.disconnect(), g && (clearTimeout(g), g = void 0);
        });
    }), Cn(V_(()=>t.scrollToBottomTrigger, (j)=>{
        j !== void 0 && f();
    })), On(()=>{
        d && clearTimeout(d), g && clearTimeout(g);
    });
    const U = vt(()=>c() ? "opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "opacity 0.1s ease-out");
    return (()=>{
        var j = T2i();
        return zu(($)=>l = $, j), j.style.setProperty("position", "relative"), j.style.setProperty("overflow", "hidden"), j.style.setProperty("height", "100%"), Le(j, Ee(ilt, Zy(t, {
            get maxHeight () {
                return t.maxHeight;
            },
            get style () {
                return {
                    ...t.containerStyle || {}
                };
            },
            get innerContainerClass () {
                return `${t.innerContainerClass ?? ""} ${t.zeroPadding ? "zero-padding" : ""} masked-scrollable-inner`;
            },
            useResizeObserver: !0,
            get autoScrollToBottom () {
                return t.autoScrollToBottom;
            },
            get scrollToBottomTrigger () {
                return t.autoScrollToBottom ? t.scrollToBottomTrigger : void 0;
            },
            onScroll: N,
            setContainerRef: ($)=>{
                l = $, $ && setTimeout(P, 0), t.setScrollContainerRef?.($);
            },
            scrollable: y,
            get children () {
                return t.children;
            }
        })), null), Le(j, Ee(Ut, {
            get when () {
                return t.enableMasking === !0;
            },
            get children () {
                var $ = T2i();
                return $.style.setProperty("position", "absolute"), $.style.setProperty("top", "0"), $.style.setProperty("left", "0"), $.style.setProperty("right", "0"), $.style.setProperty("pointer-events", "none"), xn((H)=>{
                    var G = T(), q = `linear-gradient(to bottom, ${t.maskColor ?? "var(--vscode-sideBar-background)"} 0%, transparent 100%)`, K = M(), V = t.alwaysShowFade || t.instantInitialFade && h() ? "none" : U();
                    return G !== H.e && ((H.e = G) != null ? $.style.setProperty("height", G) : $.style.removeProperty("height")), q !== H.t && ((H.t = q) != null ? $.style.setProperty("background", q) : $.style.removeProperty("background")), K !== H.a && ((H.a = K) != null ? $.style.setProperty("opacity", K) : $.style.removeProperty("opacity")), V !== H.o && ((H.o = V) != null ? $.style.setProperty("transition", V) : $.style.removeProperty("transition")), H;
                }, {
                    e: void 0,
                    t: void 0,
                    a: void 0,
                    o: void 0
                }), $;
            }
        }), null), Le(j, Ee(Ut, {
            get when () {
                return t.enableMasking === !0;
            },
            get children () {
                var $ = T2i();
                return $.style.setProperty("position", "absolute"), $.style.setProperty("bottom", "0"), $.style.setProperty("left", "0"), $.style.setProperty("right", "0"), $.style.setProperty("pointer-events", "none"), xn((H)=>{
                    var G = I(), q = `linear-gradient(to top, ${t.maskColor ?? "var(--vscode-sideBar-background)"} 0%, transparent 100%)`, K = O(), V = t.alwaysShowFade || t.instantInitialFade && h() ? "none" : U();
                    return G !== H.e && ((H.e = G) != null ? $.style.setProperty("height", G) : $.style.removeProperty("height")), q !== H.t && ((H.t = q) != null ? $.style.setProperty("background", q) : $.style.removeProperty("background")), K !== H.a && ((H.a = K) != null ? $.style.setProperty("opacity", K) : $.style.removeProperty("opacity")), V !== H.o && ((H.o = V) != null ? $.style.setProperty("transition", V) : $.style.removeProperty("transition")), H;
                }, {
                    e: void 0,
                    t: void 0,
                    a: void 0,
                    o: void 0
                }), $;
            }
        }), null), j;
    })();
}, lXg = (t)=>Ee(Ut, {
        get when () {
            return t.maxHeight;
        },
        get fallback () {
            return zr(()=>!!t.scrollable)() ? Ee(ME, Zy(t, {
                get children () {
                    return t.children(()=>{});
                }
            })) : zr(()=>t.children(()=>{}));
        },
        get children () {
            return Ee(aXg, t);
        }
    });

}
