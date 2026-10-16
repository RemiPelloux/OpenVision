import { D$y, E$y, Kea, M$y, P$y, Pch, Rch, Vea, Wea, ar, cWe, gn, qea, ri } from "./LYd.js";
import { qu } from "./attach.js";
import { mf } from "./cn.js";
import { Gea } from "./create-resize-observer.js";
import { Tch } from "./horizontal-wheel-delta.js";
import { C$y, Ech, Ich } from "./scroll-area.types.js";
import { Nch } from "./scroll-fade-mask.js";
import { $ch, Y2r } from "./scrollbar-controller.js";
import { Va } from "./stylex.js";
import { E } from "./tslib.es6.js";
import { q2r } from "./use-animation-frame.js";
import { useRef as $Re } from "./react-runtime/react/esm-index-production.js";
import { forwardRef as A$y } from "./react-runtime/react/esm-index-production.js";
import { useLayoutEffect as Hch } from "./react-runtime/react/esm-index-production.js";
import { useImperativeHandle as R$y } from "./react-runtime/react/esm-index-production.js";
import { jsx as kbn } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useCallback as uit } from "./react-runtime/react/esm-index-production.js";
import { useState as wbn } from "./react-runtime/react/esm-index-production.js";
import { jsxs as x$y } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useEffect as yci } from "./react-runtime/react/esm-index-production.js";
var Wch, X2r, Z2r, Cbn, Q2r, Gch, Tbn, xg;
export { Cbn, Gch, Q2r, Tbn, Wch, X2r, Z2r, xg };
var __wakaru_f2_initialized = false;
export function f2() {
if (__wakaru_f2_initialized) return;
__wakaru_f2_initialized = true;
"use strict";
E(), Va(), q2r(), mf(), Gea(), Tch(), C$y(), Nch(), $ch(), qu(), Wch = {
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
}, X2r = {
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
}, Z2r = {
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
}, Cbn = {
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
}, Q2r = {
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
}, Gch = 1e4, Tbn = 5, xg = A$y(function({ children: e, height: n, maxHeight: i, width: r, className: s, viewportClassName: o, rootStyle: a, viewportStyle: l, allowScrollChaining: c = !1, contentStyle: u, scrollbarStyle: d, overlay: h, style: p, scrollbarVisibility: g = Ech, isScrollbarRevealed: f = !1, direction: _ = "vertical", topFadeSize: b, bottomFadeSize: y, topFadeStartOpacity: S = 0, bottomFadeStartOpacity: k = 0, startFadeSize: C, endFadeSize: T, autoScrollToBottom: I = !1, scrollTrigger: A, autoScrollPauseTimeout: P = Gch, onScrollStateChange: M, mapVerticalWheelToHorizontal: O = !1, scrollPadding: N = Ich, scrollbarInset: U, onPointerEnter: j, onPointerLeave: $, ...H }, G) {
    const q = $Re(null), K = $Re(null), V = $Re(null), Y = $Re(null), J = $Re(null), Q = $Re(null), te = $Re(null), ee = _ !== "horizontal", re = _ !== "vertical", ie = O && !ee, [oe, se] = wbn(!1), [le, ce] = wbn(!1), [ae, de] = wbn(!1), [he, ge] = wbn(!1), [pe, ve] = wbn(!1), fe = $Re(!1);
    fe.current = pe;
    const Te = $Re(0), _e = $Re(0), Ce = $Re(null), Se = $Re(null);
    Hch(()=>{
        const ft = K.current, bt = V.current;
        if (!ft || !bt) return;
        const St = [];
        if (ee) {
            const Et = Y.current, kt = J.current;
            Et && kt && St.push(new Y2r({
                viewport: ft,
                content: bt,
                scrollbar: Et,
                thumb: kt,
                direction: "vertical",
                mapVerticalWheelToHorizontal: ie
            }));
        }
        if (re) {
            const Et = Q.current, kt = te.current;
            Et && kt && St.push(new Y2r({
                viewport: ft,
                content: bt,
                scrollbar: Et,
                thumb: kt,
                direction: "horizontal",
                mapVerticalWheelToHorizontal: ie
            }));
        }
        if (St.length !== 0) {
            for (const Et of St)Et.attach();
            return ()=>{
                for (const Et of St)Et.detach();
            };
        }
    }, [
        ee,
        re,
        ie
    ]);
    const Pe = uit(()=>{
        const ft = K.current;
        return ft ? {
            scrollTop: ft.scrollTop,
            scrollHeight: ft.scrollHeight,
            clientHeight: ft.clientHeight
        } : {
            scrollTop: 0,
            scrollHeight: 0,
            clientHeight: 0
        };
    }, []), we = uit((ft = !1)=>{
        const bt = K.current;
        bt && bt.scrollTo({
            top: bt.scrollHeight,
            behavior: ft ? "smooth" : "instant"
        });
    }, []), Ie = uit((ft = !1)=>{
        const bt = K.current;
        bt && bt.scrollTo({
            top: 0,
            behavior: ft ? "smooth" : "instant"
        });
    }, []), Me = uit(()=>{
        Se.current === null && (Se.current = requestAnimationFrame(()=>{
            Se.current = null, !fe.current && we(!1);
        }));
    }, [
        we
    ]), De = uit(()=>{
        I && (fe.current || Me());
    }, [
        I,
        Me
    ]);
    R$y(G, ()=>({
            scrollToBottom: we,
            scrollToTop: Ie,
            requestAutoScroll: De,
            getScrollPosition: Pe,
            get rootElement () {
                return q.current;
            },
            get viewportElement () {
                return K.current;
            }
        }), [
        we,
        Ie,
        De,
        Pe
    ]);
    const Ne = uit(()=>{
        const ft = K.current;
        if (!ft) return;
        const { scrollTop: bt, scrollHeight: St, clientHeight: Et } = ft, { isAtTop: kt, isAtBottom: xt } = Rch({
            scrollTop: bt,
            scrollHeight: St,
            clientHeight: Et,
            threshold: Tbn
        });
        se(!kt), ce(!xt);
        const { isAtStart: Pt, isAtEnd: Dt } = E$y({
            scrollLeft: ft.scrollLeft,
            scrollWidth: ft.scrollWidth,
            clientWidth: ft.clientWidth,
            threshold: Tbn
        });
        de(!Pt), ge(!Dt), M?.({
            isAtBottom: xt,
            isAtTop: kt
        }), xt && fe.current && (ve(!1), Ce.current && (clearTimeout(Ce.current), Ce.current = null));
        const Vt = St < _e.current - Tbn, tn = St > _e.current + Tbn, un = bt < Te.current - Tbn;
        un && !Vt && !xt && I && !fe.current && (ve(!0), Ce.current && clearTimeout(Ce.current), Ce.current = setTimeout(()=>{
            ve(!1), Ce.current = null;
        }, P)), tn && I && !fe.current && !xt && !un && Me(), Vt && I && !fe.current && !xt && Me(), Te.current = bt, _e.current = St;
    }, [
        M,
        I,
        P,
        Me
    ]), be = cWe(), je = uit(()=>{
        be.request(Ne);
    }, [
        be,
        Ne
    ]);
    yci(()=>{
        const ft = K.current, bt = V.current;
        if (!ft) return;
        const St = ()=>{
            je();
        };
        ft.addEventListener("scroll", St, {
            passive: !0
        });
        const Et = Wea(Ne);
        return Et !== null && (Et.observe(ft), bt && Et.observe(bt)), ()=>{
            ft.removeEventListener("scroll", St), Et?.disconnect(), be.dispose();
        };
    }, [
        Ne,
        je,
        be
    ]), yci(()=>{
        A !== void 0 && I && (fe.current || Me());
    }, [
        A,
        I,
        Me
    ]), yci(()=>{
        if (!ee) return;
        const ft = K.current;
        if (!ft) return;
        const bt = (St)=>{
            const Et = St.deltaY;
            if (Et === 0) return;
            const kt = ft.scrollHeight - ft.clientHeight;
            if (kt <= 0) return;
            const xt = ft.scrollTop, Pt = xt <= 0 && Et < 0, Dt = xt >= kt - .5 && Et > 0;
            Pt || Dt || St.stopPropagation();
        };
        return ft.addEventListener("wheel", bt, {
            passive: !0
        }), ()=>ft.removeEventListener("wheel", bt);
    }, [
        ee
    ]), yci(()=>{
        if (!re) return;
        const ft = K.current;
        if (!ft) return;
        const bt = (Et)=>{
            const kt = qea({
                deltaX: Et.deltaX,
                deltaY: Et.deltaY,
                mapVerticalWheelToHorizontal: ie
            });
            if (kt === null) return;
            const xt = ft.scrollWidth - ft.clientWidth;
            if (xt <= 0) return;
            const Pt = ft.scrollLeft;
            if (!(kt < 0 && Pt <= 0) && !(kt > 0 && Pt >= xt - .5)) {
                if (!ie) {
                    Et.stopPropagation();
                    return;
                }
                Et.preventDefault(), ft.scrollLeft = Pt + kt;
            }
        }, St = ie ? {
            passive: !1,
            capture: !0
        } : {
            passive: !0,
            capture: !0
        };
        return ft.addEventListener("wheel", bt, St), ()=>ft.removeEventListener("wheel", bt, St);
    }, [
        re,
        ie
    ]);
    const $e = b !== void 0 || y !== void 0, Je = C !== void 0 || T !== void 0, Ge = $e || Je, xe = $e ? b ?? 24 : 0, Oe = $e ? y ?? 24 : 0, ct = Je ? C ?? 24 : 0, Ye = Je ? T ?? 24 : 0, Ve = g === "hover", [Xe, lt] = wbn(!1);
    Hch(()=>{
        Ve && lt(q.current?.matches(":hover") ?? !1);
    }, [
        Ve
    ]);
    const He = uit((ft)=>{
        lt(!0), j?.(ft);
    }, [
        j
    ]), gt = uit((ft)=>{
        lt(!1), $?.(ft);
    }, [
        $
    ]), ht = Ve && !Xe && !f;
    yci(()=>()=>{
            Ce.current && clearTimeout(Ce.current), Se.current !== null && (cancelAnimationFrame(Se.current), Se.current = null);
        }, []);
    const Ae = {
        "--scroll-area-scroll-padding": `${N}px`,
        ...U !== void 0 ? {
            "--scrollbar-inset": `${U}px`
        } : void 0
    }, ot = ar({
        rootClass: "ui-scroll-area",
        stylexStyles: [
            P$y(),
            a
        ],
        className: ri(Ge && "ui-scroll-area--masked", s),
        style: {
            height: n,
            maxHeight: i,
            width: r,
            ...Ae,
            ...p
        }
    }), Be = ar({
        rootClass: "ui-scroll-area__viewport",
        stylexStyles: [
            M$y({
                direction: _
            }),
            l,
            Ge ? Pch({
                topFadePx: oe ? xe : 0,
                bottomFadePx: le ? Oe : 0,
                topFadeStartOpacity: S,
                bottomFadeStartOpacity: k,
                startFadePx: ae ? ct : 0,
                endFadePx: he ? Ye : 0
            }) : null
        ],
        className: o,
        style: c ? {
            overscrollBehavior: "auto"
        } : void 0
    }), Ue = ar({
        rootClass: "ui-scroll-area__content",
        stylexStyles: [
            D$y(_),
            u
        ]
    }), it = ar({
        rootClass: "ui-scroll-area__scrollbar",
        stylexStyles: [
            Vea({
                direction: _,
                orientation: "vertical",
                visibility: g
            }),
            d
        ]
    }), qe = gn(Kea("vertical", ht)), pt = ar({
        rootClass: "ui-scroll-area__scrollbar",
        stylexStyles: [
            Vea({
                direction: _,
                orientation: "horizontal",
                visibility: g
            }),
            d
        ]
    }), dt = gn(Kea("horizontal", ht));
    return x$y("div", {
        ref: q,
        className: ot.className,
        style: ot.style,
        "data-scroll-padding": N,
        "data-visibility": g,
        "data-direction": _,
        ...H,
        onPointerEnter: Ve ? He : j,
        onPointerLeave: Ve ? gt : $,
        children: [
            kbn("div", {
                ref: K,
                className: Be.className,
                style: Be.style,
                "data-native-scrollbar": "none",
                children: kbn("div", {
                    ref: V,
                    className: Ue.className,
                    style: Ue.style,
                    children: e
                })
            }),
            h,
            ee && kbn("div", {
                ref: Y,
                className: it.className,
                style: it.style,
                "data-orientation": "vertical",
                "data-scrollable": "false",
                role: "presentation",
                "aria-hidden": "true",
                children: kbn("div", {
                    ref: J,
                    className: qe.className,
                    style: qe.style,
                    "data-orientation": "vertical"
                })
            }),
            re && kbn("div", {
                ref: Q,
                className: pt.className,
                style: pt.style,
                "data-orientation": "horizontal",
                "data-scrollable": "false",
                role: "presentation",
                "aria-hidden": "true",
                children: kbn("div", {
                    ref: te,
                    className: dt.className,
                    style: dt.style,
                    "data-orientation": "horizontal"
                })
            })
        ]
    });
});

}
