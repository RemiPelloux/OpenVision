import { hh } from "./attach.js";
import { qg } from "./cn.js";
import { Ops } from "./create-resize-observer.js";
import { tal } from "./horizontal-wheel-delta.js";
import { $ps, ALg, DLg, Fps, Hps, Nn, Nps, Or, Pps, RLg, aal, ni, oal, wLg } from "./qIc.js";
import { SLg, ial, nal } from "./scroll-area.types.js";
import { ual } from "./scroll-fade-mask.js";
import { val, z1i } from "./scrollbar-controller.js";
import { Oc } from "./stylex.js";
import { x } from "./tslib.es6.js";
import { Lps } from "./use-animation-frame.js";
import { jsxs as ELg } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useImperativeHandle as ILg } from "./react-runtime/react/esm-index-production.js";
import { useRef as Ufe } from "./react-runtime/react/esm-index-production.js";
import { useLayoutEffect as _al } from "./react-runtime/react/esm-index-production.js";
import { jsx as a5t } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useState as c5t } from "./react-runtime/react/esm-index-production.js";
import { useEffect as ckn } from "./react-runtime/react/esm-index-production.js";
import { useCallback as r9e } from "./react-runtime/react/esm-index-production.js";
import { forwardRef as xLg } from "./react-runtime/react/esm-index-production.js";
var bal, K1i, Y1i, l5t, X1i, yal, u5t, QC;
export { K1i, QC, X1i, Y1i, bal, l5t, u5t, yal };
var __wakaru_ED_initialized = false;
export function ED() {
if (__wakaru_ED_initialized) return;
__wakaru_ED_initialized = true;
"use strict";
x(), Oc(), Lps(), qg(), Ops(), tal(), SLg(), ual(), val(), hh(), bal = {
    base: {
        "--scrollbar-size": "ui-1ekbvf6",
        "--scrollbar-inset": "ui-1logqu4",
        "--scrollbar-thumb-top-offset": "ui-1fx8caa",
        "--scroll-area-scroll-padding": "ui-8ddqcf",
        kVAEAm: "ui-1n2onr6",
        kXHlph: "ui-6ikm8r",
        kORKVm: "ui-10wlt62",
        k1xSpc: "ui-rvj5dj",
        k52YG4: "ui-ypqxfk",
        $$css: !0
    }
}, K1i = {
    base: {
        kJuA4N: "ui-175mniq",
        kAzted: "ui-2lwn1j",
        kskxy: "ui-mz0i5r",
        kaIpWk: "ui-1pjcqnp",
        kXHlph: "ui-6ikm8r",
        kORKVm: "ui-1odjw0f",
        kaPefq: "ui-1fu52t7",
        kC2sXz: "ui-1ufbpdf",
        k9lH4S: "ui-3oazx1",
        kphCe6: "ui-19l4kpp",
        kvh3hx: "ui-1t1jukp",
        kacamN: "ui-1e4zzel",
        k5wCbM: "ui-1rohswg",
        kAnDOJ: "ui-6ehuon",
        kOuLrU: "ui-fk6m8",
        $$css: !0
    },
    horizontal: {
        kXHlph: "ui-w2csxc",
        kORKVm: "ui-10wlt62",
        kaPefq: "ui-k8sdt9",
        kC2sXz: "ui-1duton",
        k9lH4S: "ui-101ixbw",
        kphCe6: "ui-exgr1p",
        kvh3hx: "ui-7p5m3t",
        kacamN: "ui-y5w88m",
        $$css: !0
    },
    both: {
        kXHlph: "ui-w2csxc",
        kORKVm: "ui-1odjw0f",
        kaPefq: "ui-k8sdt9",
        kC2sXz: "ui-1duton",
        k9lH4S: "ui-101ixbw",
        kphCe6: "ui-exgr1p",
        kZeWKH: "ui-ish69e",
        $$css: !0
    }
}, Y1i = {
    base: {
        kB7OPa: "ui-9f619",
        kzqmXN: "ui-eq5yr9",
        k7Eaqz: "ui-gqtt45",
        ks0D6T: "ui-193iq5w",
        kAzted: "ui-1us19tq",
        k1xSpc: "ui-78zum5",
        kXwgrk: "ui-dt5ytf",
        $$css: !0
    },
    horizontal: {
        kzqmXN: "ui-14atkfc",
        kZKoxP: "ui-g7h5cd",
        kXwgrk: "ui-1q0g3np",
        $$css: !0
    },
    both: {
        kzqmXN: "ui-ezivpi",
        k7Eaqz: "ui-gqtt45",
        ks0D6T: "ui-1x1rfll",
        kZKoxP: "ui-t7dq6l",
        kXwgrk: "ui-dt5ytf",
        $$css: !0
    }
}, l5t = {
    base: {
        kVAEAm: "ui-10l6tqk",
        kY2c9j: "ui-1n327nk",
        k87sOh: "ui-16271f3",
        kt4wiu: "ui-1cdd6y0",
        krVfgx: "ui-1c87l4o",
        kLqNvP: "ui-hi6v0a",
        kzqmXN: "ui-790ffn",
        kfzvcC: "ui-67bb7w",
        k1xSpc: "ui-1lliihq ui-y36ywk",
        $$css: !0
    },
    horizontal: {
        k87sOh: "ui-80663w",
        kt4wiu: "ui-1cdd6y0",
        krVfgx: "ui-1gncbth",
        kLqNvP: "ui-pl0nw1",
        kzqmXN: "ui-14atkfc",
        kZKoxP: "ui-a38mao",
        $$css: !0
    },
    bothVertical: {
        krVfgx: "ui-1143y87",
        $$css: !0
    },
    bothHorizontal: {
        kt4wiu: "ui-13kbk1n",
        $$css: !0
    },
    visibilityNever: {
        k1xSpc: "ui-1s85apg",
        $$css: !0
    }
}, X1i = {
    base: {
        kVAEAm: "ui-10l6tqk",
        k87sOh: "ui-13vifvy",
        kt4wiu: "ui-tijo5x",
        krVfgx: "ui-dd4er5",
        kLqNvP: "ui-1o0tod",
        kAzted: "ui-4jlmx6",
        kzqmXN: "ui-790ffn",
        kaIpWk: "ui-1i4c3av",
        kWkggS: "ui-1m4ooaa ui-1kik0b9 ui-19p5jqy ui-gk890x",
        kSiTet: "ui-1hc1fzr",
        kfzvcC: "ui-67bb7w",
        k3aq6I: "ui-oww4n8",
        k1ekBW: "ui-1e8aii2",
        kIyJzY: "ui-1vaoic9 ui-144st5w",
        kAMwcw: "ui-1aiz5cx",
        $$css: !0
    },
    horizontal: {
        k87sOh: "ui-13vifvy",
        kt4wiu: "ui-1woyocn",
        krVfgx: "ui-1ey2m1c",
        kLqNvP: "ui-1o0tod",
        kzqmXN: "ui-14atkfc",
        kZKoxP: "ui-a38mao",
        kAzted: "ui-65nank",
        k7Eaqz: "ui-cbmsab",
        $$css: !0
    },
    hoverHidden: {
        kSiTet: "ui-g01cxk ui-4gyw5p ui-gorybd",
        $$css: !0
    }
}, yal = 1e4, u5t = 5, QC = xLg(function({ children: t, height: n, maxHeight: i, width: r, className: s, viewportClassName: o, rootStyle: a, viewportStyle: c, allowScrollChaining: l = !1, contentStyle: u, scrollbarStyle: h, overlay: p, style: g, scrollbarVisibility: f = nal, isScrollbarRevealed: v = !1, direction: b = "vertical", topFadeSize: y, bottomFadeSize: T, topFadeStartOpacity: E = 0, bottomFadeStartOpacity: A = 0, startFadeSize: R, endFadeSize: D, autoScrollToBottom: P = !1, scrollTrigger: N, autoScrollPauseTimeout: O = yal, onScrollStateChange: F, mapVerticalWheelToHorizontal: H = !1, scrollPadding: $ = ial, scrollbarInset: W, onPointerEnter: G, onPointerLeave: q, ...z }, X) {
    const Y = Ufe(null), Z = Ufe(null), K = Ufe(null), J = Ufe(null), ne = Ufe(null), ee = Ufe(null), se = Ufe(null), re = b !== "horizontal", ue = b !== "vertical", ce = H && !re, [de, le] = c5t(!1), [ye, _e] = c5t(!1), [me, Ce] = c5t(!1), [xe, Le] = c5t(!1), [Be, je] = c5t(!1), Ge = Ufe(!1);
    Ge.current = Be;
    const Xe = Ufe(0), Ke = Ufe(0), et = Ufe(null), We = Ufe(null);
    _al(()=>{
        const pn = Z.current, Yt = K.current;
        if (!pn || !Yt) return;
        const _n = [];
        if (re) {
            const an = J.current, ln = ne.current;
            an && ln && _n.push(new z1i({
                viewport: pn,
                content: Yt,
                scrollbar: an,
                thumb: ln,
                direction: "vertical",
                mapVerticalWheelToHorizontal: ce
            }));
        }
        if (ue) {
            const an = ee.current, ln = se.current;
            an && ln && _n.push(new z1i({
                viewport: pn,
                content: Yt,
                scrollbar: an,
                thumb: ln,
                direction: "horizontal",
                mapVerticalWheelToHorizontal: ce
            }));
        }
        if (_n.length !== 0) {
            for (const an of _n)an.attach();
            return ()=>{
                for (const an of _n)an.detach();
            };
        }
    }, [
        re,
        ue,
        ce
    ]);
    const it = r9e(()=>{
        const pn = Z.current;
        return pn ? {
            scrollTop: pn.scrollTop,
            scrollHeight: pn.scrollHeight,
            clientHeight: pn.clientHeight
        } : {
            scrollTop: 0,
            scrollHeight: 0,
            clientHeight: 0
        };
    }, []), Ne = r9e((pn = !1)=>{
        const Yt = Z.current;
        Yt && Yt.scrollTo({
            top: Yt.scrollHeight,
            behavior: pn ? "smooth" : "instant"
        });
    }, []), Fe = r9e((pn = !1)=>{
        const Yt = Z.current;
        Yt && Yt.scrollTo({
            top: 0,
            behavior: pn ? "smooth" : "instant"
        });
    }, []), Qe = r9e(()=>{
        We.current === null && (We.current = requestAnimationFrame(()=>{
            We.current = null, !Ge.current && Ne(!1);
        }));
    }, [
        Ne
    ]), tt = r9e(()=>{
        P && (Ge.current || Qe());
    }, [
        P,
        Qe
    ]);
    ILg(X, ()=>({
            scrollToBottom: Ne,
            scrollToTop: Fe,
            requestAutoScroll: tt,
            getScrollPosition: it,
            get rootElement () {
                return Y.current;
            },
            get viewportElement () {
                return Z.current;
            }
        }), [
        Ne,
        Fe,
        tt,
        it
    ]);
    const st = r9e(()=>{
        const pn = Z.current;
        if (!pn) return;
        const { scrollTop: Yt, scrollHeight: _n, clientHeight: an } = pn, { isAtTop: ln, isAtBottom: Mn } = oal({
            scrollTop: Yt,
            scrollHeight: _n,
            clientHeight: an,
            threshold: u5t
        });
        le(!ln), _e(!Mn);
        const { isAtStart: Dn, isAtEnd: Ln } = wLg({
            scrollLeft: pn.scrollLeft,
            scrollWidth: pn.scrollWidth,
            clientWidth: pn.clientWidth,
            threshold: u5t
        });
        Ce(!Dn), Le(!Ln), F?.({
            isAtBottom: Mn,
            isAtTop: ln
        }), Mn && Ge.current && (je(!1), et.current && (clearTimeout(et.current), et.current = null));
        const ti = _n < Ke.current - u5t, fi = _n > Ke.current + u5t, Oi = Yt < Xe.current - u5t;
        Oi && !ti && !Mn && P && !Ge.current && (je(!0), et.current && clearTimeout(et.current), et.current = setTimeout(()=>{
            je(!1), et.current = null;
        }, O)), fi && P && !Ge.current && !Mn && !Oi && Qe(), ti && P && !Ge.current && !Mn && Qe(), Xe.current = Yt, Ke.current = _n;
    }, [
        F,
        P,
        O,
        Qe
    ]), vt = Pps(), ht = r9e(()=>{
        vt.request(st);
    }, [
        vt,
        st
    ]);
    ckn(()=>{
        const pn = Z.current, Yt = K.current;
        if (!pn) return;
        const _n = ()=>{
            ht();
        };
        pn.addEventListener("scroll", _n, {
            passive: !0
        });
        const an = Nps(st);
        return an !== null && (an.observe(pn), Yt && an.observe(Yt)), ()=>{
            pn.removeEventListener("scroll", _n), an?.disconnect(), vt.dispose();
        };
    }, [
        st,
        ht,
        vt
    ]), ckn(()=>{
        N !== void 0 && P && (Ge.current || Qe());
    }, [
        N,
        P,
        Qe
    ]), ckn(()=>{
        if (!re) return;
        const pn = Z.current;
        if (!pn) return;
        const Yt = (_n)=>{
            const an = _n.deltaY;
            if (an === 0) return;
            const ln = pn.scrollHeight - pn.clientHeight;
            if (ln <= 0) return;
            const Mn = pn.scrollTop, Dn = Mn <= 0 && an < 0, Ln = Mn >= ln - .5 && an > 0;
            Dn || Ln || _n.stopPropagation();
        };
        return pn.addEventListener("wheel", Yt, {
            passive: !0
        }), ()=>pn.removeEventListener("wheel", Yt);
    }, [
        re
    ]), ckn(()=>{
        if (!ue) return;
        const pn = Z.current;
        if (!pn) return;
        const Yt = (an)=>{
            const ln = Fps({
                deltaX: an.deltaX,
                deltaY: an.deltaY,
                mapVerticalWheelToHorizontal: ce
            });
            if (ln === null) return;
            const Mn = pn.scrollWidth - pn.clientWidth;
            if (Mn <= 0) return;
            const Dn = pn.scrollLeft;
            if (!(ln < 0 && Dn <= 0) && !(ln > 0 && Dn >= Mn - .5)) {
                if (!ce) {
                    an.stopPropagation();
                    return;
                }
                an.preventDefault(), pn.scrollLeft = Dn + ln;
            }
        }, _n = ce ? {
            passive: !1,
            capture: !0
        } : {
            passive: !0,
            capture: !0
        };
        return pn.addEventListener("wheel", Yt, _n), ()=>pn.removeEventListener("wheel", Yt, _n);
    }, [
        ue,
        ce
    ]);
    const ut = y !== void 0 || T !== void 0, Dt = R !== void 0 || D !== void 0, lt = ut || Dt, Tt = ut ? y ?? 24 : 0, ct = ut ? T ?? 24 : 0, Kt = Dt ? R ?? 24 : 0, Rt = Dt ? D ?? 24 : 0, Gt = f === "hover", [Nt, sn] = c5t(!1);
    _al(()=>{
        Gt && sn(Y.current?.matches(":hover") ?? !1);
    }, [
        Gt
    ]);
    const un = r9e((pn)=>{
        sn(!0), G?.(pn);
    }, [
        G
    ]), kt = r9e((pn)=>{
        sn(!1), q?.(pn);
    }, [
        q
    ]), ot = Gt && !Nt && !v;
    ckn(()=>()=>{
            et.current && clearTimeout(et.current), We.current !== null && (cancelAnimationFrame(We.current), We.current = null);
        }, []);
    const ze = {
        "--scroll-area-scroll-padding": `${$}px`,
        ...W !== void 0 ? {
            "--scrollbar-inset": `${W}px`
        } : void 0
    }, St = Or({
        rootClass: "ui-scroll-area",
        stylexStyles: [
            ALg(),
            a
        ],
        className: ni(lt && "ui-scroll-area--masked", s),
        style: {
            height: n,
            maxHeight: i,
            width: r,
            ...ze,
            ...g
        }
    }), ft = Or({
        rootClass: "ui-scroll-area__viewport",
        stylexStyles: [
            RLg({
                direction: b
            }),
            c,
            lt ? aal({
                topFadePx: de ? Tt : 0,
                bottomFadePx: ye ? ct : 0,
                topFadeStartOpacity: E,
                bottomFadeStartOpacity: A,
                startFadePx: me ? Kt : 0,
                endFadePx: xe ? Rt : 0
            }) : null
        ],
        className: o,
        style: l ? {
            overscrollBehavior: "auto"
        } : void 0
    }), Mt = Or({
        rootClass: "ui-scroll-area__content",
        stylexStyles: [
            DLg(b),
            u
        ]
    }), Bt = Or({
        rootClass: "ui-scroll-area__scrollbar",
        stylexStyles: [
            $ps({
                direction: b,
                orientation: "vertical",
                visibility: f
            }),
            h
        ]
    }), Ot = Nn(Hps("vertical", ot)), Wt = Or({
        rootClass: "ui-scroll-area__scrollbar",
        stylexStyles: [
            $ps({
                direction: b,
                orientation: "horizontal",
                visibility: f
            }),
            h
        ]
    }), nn = Nn(Hps("horizontal", ot));
    return ELg("div", {
        ref: Y,
        className: St.className,
        style: St.style,
        "data-scroll-padding": $,
        "data-visibility": f,
        "data-direction": b,
        ...z,
        onPointerEnter: Gt ? un : G,
        onPointerLeave: Gt ? kt : q,
        children: [
            a5t("div", {
                ref: Z,
                className: ft.className,
                style: ft.style,
                "data-native-scrollbar": "none",
                children: a5t("div", {
                    ref: K,
                    className: Mt.className,
                    style: Mt.style,
                    children: t
                })
            }),
            p,
            re && a5t("div", {
                ref: J,
                className: Bt.className,
                style: Bt.style,
                "data-orientation": "vertical",
                "data-scrollable": "false",
                role: "presentation",
                "aria-hidden": "true",
                children: a5t("div", {
                    ref: ne,
                    className: Ot.className,
                    style: Ot.style,
                    "data-orientation": "vertical"
                })
            }),
            ue && a5t("div", {
                ref: ee,
                className: Wt.className,
                style: Wt.style,
                "data-orientation": "horizontal",
                "data-scrollable": "false",
                role: "presentation",
                "aria-hidden": "true",
                children: a5t("div", {
                    ref: se,
                    className: nn.className,
                    style: nn.style,
                    "data-orientation": "horizontal"
                })
            })
        ]
    });
});

}
