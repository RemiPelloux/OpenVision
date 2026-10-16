import { Am, cs, jp } from "./Sol.js";
import { Ca, ME, R5k, f9e } from "./Ycg.js";
import { nIt, t_l } from "./aiInput2.js";
import { e_ } from "./jotaiSolidBridge.js";
import { eD } from "./scrollableDiv.js";
import { E } from "./tslib.es6.js";
import { P5k } from "./useTextSelectionAutoScroll.js";
import { at } from "./web.js";
import { Cn, Ee, On, Zy, pi, vt } from "./ze.js";
var a0l, l0l, c0l, u0l, d0l, h0l, p0l, tYt;
export { a0l, c0l, d0l, h0l, l0l, p0l, tYt, u0l };
var __wakaru_L2i_initialized = false;
export function L2i() {
if (__wakaru_L2i_initialized) return;
__wakaru_L2i_initialized = true;
"use strict";
E(), at(), at(), Am(), pi(), P5k(), e_(), eD(), nIt(), a0l = cs(0), l0l = cs(0), c0l = cs(0), u0l = cs(!1), d0l = cs(0), h0l = cs(void 0), p0l = cs(void 0), tYt = (t)=>{
    const e = jp(), n = Ca(e, a0l), i = (S)=>e.set(a0l, S), r = Ca(e, l0l), s = (S)=>e.set(l0l, S), o = Ca(e, c0l), a = (S)=>e.set(c0l, S), l = Ca(e, u0l), c = (S)=>e.set(u0l, S), u = f9e(), d = Ca(e, d0l), h = (S)=>e.set(d0l, S);
    Cn(()=>{
        const S = t.inputBoxDelegate;
        S && (S.registerScrollToBottomTrigger?.(()=>{
            h((k)=>k + 1);
        }), On(()=>{
            S.clearScrollToBottomTrigger?.();
        }));
    });
    const p = Ca(e, h0l), g = (S)=>e.set(h0l, S), f = Ca(e, p0l), _ = (S)=>e.set(p0l, S), b = vt(()=>t.minHeight ?? 18);
    R5k(p, u), Cn(()=>{
        y();
    }), Cn(()=>{
        const S = p();
        if (!S) return;
        const k = (T)=>{
            T.stopPropagation(), T.preventDefault();
        };
        S.addEventListener("wheel", k, {
            passive: !1
        });
        const C = new ResizeObserver(()=>{
            y(!0);
        });
        C.observe(S), On(()=>{
            S.removeEventListener("wheel", k), C.disconnect();
        });
    }), On(()=>{
        u.dispose();
    });
    const y = (S = !1)=>{
        const k = n(), C = f()?.getRootElement(), T = S ? C?.getBoundingClientRect().height : void 0;
        let A = typeof T == "number" ? T : k;
        const P = b();
        if (!Number.isFinite(A) || A <= 0) {
            const U = o();
            A = Math.max(U > 0 ? U : P, P);
        }
        (C?.textContent ?? "").trim().length === 0 && (A = P), A = Math.max(A, P);
        const O = t.maxHeight ? Math.min(A, t.maxHeight) : A, N = o();
        c(O < N), a(O), s(O), u.setScrollDimensions({
            height: O,
            scrollHeight: A
        }, !0);
    };
    return Ee(ME, {
        class: "smooth-height",
        get style () {
            return {
                height: `${r()}px`,
                "min-height": `${b()}px`,
                width: "100%",
                ...t.maxHeight && {
                    "max-height": `${t.maxHeight}px`
                },
                transition: t.animateHeight ? l() ? "height 260ms cubic-bezier(0.33, 1, 0.68, 1)" : "height 200ms cubic-bezier(0.2, 0.8, 0.2, 1)" : "none",
                "will-change": "height",
                ...t.scrollableStyle
            };
        },
        contentStyle: {
            display: "block"
        },
        get innerContainerStyle () {
            return t.innerContainerStyle;
        },
        scrollable: u,
        scrollingDirection: "vertical",
        autoScrollToBottom: !0,
        get scrollToBottomTrigger () {
            return d();
        },
        get reactiveElementOptions () {
            return t.reactiveScrollableOptions;
        },
        nonReactiveElementOptions: {
            useShadows: !1
        },
        setContainerRef: g,
        get children () {
            return Ee(t_l, Zy(t, {
                setContentHeight: (S)=>{
                    i(S), t.setContentHeight?.(S);
                },
                setEditor: (S)=>{
                    _(S), t.setEditor?.(S);
                },
                get inputBoxDelegate () {
                    return t.inputBoxDelegate;
                },
                get containerStyle () {
                    return {
                        ...t.containerStyle,
                        height: "100%",
                        "min-height": `${b()}px`,
                        "max-height": "none",
                        overflow: "visible"
                    };
                }
            }));
        }
    });
};

}
