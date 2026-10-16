import { $e } from "./attach.ts";
import { Zr, rd } from "./cn.ts";
import { rtr, y$t } from "./create-resize-observer.ts";
import { EIe, itr } from "./horizontal-wheel-delta.ts";
import { ji } from "./index_2.ts";
import { i } from "./plugin-brand-icon.js";
import { atr, otr, vki } from "./scroll-area.types.ts";
import { ctr, ltr, str, xki } from "./scroll-fade-mask.ts";
import { Ski, k$t } from "./scrollbar-controller.ts";
import { Ho, wn } from "./stylex.mjs";
import { kki, ntr } from "./use-animation-frame.ts";
import { jsx as $X } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useImperativeHandle as Dui } from "./react-runtime/react/esm-index-production.js";
import { jsxs as Fui } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { forwardRef as Lui } from "./react-runtime/react/esm-index-production.js";
import { useLayoutEffect as QWn } from "./react-runtime/react/esm-index-production.js";
import { useState as TX } from "./react-runtime/react/esm-index-production.js";
import { useCallback as bT } from "./react-runtime/react/esm-index-production.js";
import { useEffect as dpe } from "./react-runtime/react/esm-index-production.js";
import { useRef as h4 } from "./react-runtime/react/esm-index-production.js";
function mtr() {
    return gtr.base;
}
function ftr({ direction: r }) {
    return [
        AIe.base,
        r === "horizontal" ? AIe.horizontal : null,
        r === "both" ? AIe.both : null
    ];
}
function htr(r) {
    return [
        TIe.base,
        r === "horizontal" ? TIe.horizontal : null,
        r === "both" ? TIe.both : null
    ];
}
function v$t({ direction: r, orientation: e, visibility: a }) {
    return [
        qY.base,
        e === "horizontal" ? qY.horizontal : null,
        r === "both" && e === "vertical" ? qY.bothVertical : null,
        r === "both" && e === "horizontal" ? qY.bothHorizontal : null,
        a === "never" ? qY.visibilityNever : null
    ];
}
function x$t(r, e) {
    return [
        $Ie.base,
        r === "horizontal" ? $Ie.horizontal : null,
        e ? $Ie.hoverHidden : null
    ];
}
var gtr, AIe, TIe, qY, $Ie, btr, UY, N4;
export { $Ie, AIe, N4, TIe, UY, btr, ftr, gtr, htr, mtr, qY, v$t, x$t };
var __wakaru_Eki_initialized = false;
export function Eki() {
if (__wakaru_Eki_initialized) return;
__wakaru_Eki_initialized = true;
"use strict";
Ho(), kki(), ji(), rd(), rtr(), itr(), vki(), xki(), Ski(), gtr = {
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
}, AIe = {
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
}, TIe = {
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
}, qY = {
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
}, $Ie = {
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
}, i(mtr, "scrollAreaRootStyleForProps"), i(ftr, "scrollAreaViewportStyleForProps"), i(htr, "scrollAreaContentStyleForProps"), i(v$t, "scrollAreaScrollbarStyleForProps"), i(x$t, "scrollAreaThumbStyleForProps"), btr = 1e4, UY = 5, N4 = Lui(i(function({ children: e, height: a, maxHeight: s, width: l, className: u, viewportClassName: p, rootStyle: m, viewportStyle: b, allowScrollChaining: g = !1, contentStyle: _, scrollbarStyle: v, overlay: x, style: C, scrollbarVisibility: E = atr, isScrollbarRevealed: A = !1, direction: $ = "vertical", topFadeSize: I, bottomFadeSize: N, topFadeStartOpacity: R = 0, bottomFadeStartOpacity: P = 0, startFadeSize: L, endFadeSize: j, autoScrollToBottom: z = !1, scrollTrigger: q, autoScrollPauseTimeout: O = btr, onScrollStateChange: B, mapVerticalWheelToHorizontal: V = !1, scrollPadding: H = otr, scrollbarInset: Z, onPointerEnter: K, onPointerLeave: Y, ...J }, re) {
    const ne = h4(null), ae = h4(null), W = h4(null), oe = h4(null), ce = h4(null), Q = h4(null), le = h4(null), he = $ !== "horizontal", me = $ !== "vertical", be = V && !he, [ue, ge] = TX(!1), [_e, ve] = TX(!1), [Se, Ne] = TX(!1), [je, tt] = TX(!1), [Ke, nt] = TX(!1), ut = h4(!1);
    ut.current = Ke;
    const it = h4(0), Ze = h4(0), Ie = h4(null), Me = h4(null);
    QWn(()=>{
        const Ut = ae.current, fn = W.current;
        if (!Ut || !fn) return;
        const Gt = [];
        if (he) {
            const qe = oe.current, En = ce.current;
            qe && En && Gt.push(new k$t({
                viewport: Ut,
                content: fn,
                scrollbar: qe,
                thumb: En,
                direction: "vertical",
                mapVerticalWheelToHorizontal: be
            }));
        }
        if (me) {
            const qe = Q.current, En = le.current;
            qe && En && Gt.push(new k$t({
                viewport: Ut,
                content: fn,
                scrollbar: qe,
                thumb: En,
                direction: "horizontal",
                mapVerticalWheelToHorizontal: be
            }));
        }
        if (Gt.length !== 0) {
            for (const qe of Gt)qe.attach();
            return ()=>{
                for (const qe of Gt)qe.detach();
            };
        }
    }, [
        he,
        me,
        be
    ]);
    const et = bT(()=>{
        const Ut = ae.current;
        return Ut ? {
            scrollTop: Ut.scrollTop,
            scrollHeight: Ut.scrollHeight,
            clientHeight: Ut.clientHeight
        } : {
            scrollTop: 0,
            scrollHeight: 0,
            clientHeight: 0
        };
    }, []), Ue = bT((Ut = !1)=>{
        const fn = ae.current;
        fn && fn.scrollTo({
            top: fn.scrollHeight,
            behavior: Ut ? "smooth" : "instant"
        });
    }, []), Be = bT((Ut = !1)=>{
        const fn = ae.current;
        fn && fn.scrollTo({
            top: 0,
            behavior: Ut ? "smooth" : "instant"
        });
    }, []), Fe = bT(()=>{
        Me.current === null && (Me.current = requestAnimationFrame(()=>{
            Me.current = null, !ut.current && Ue(!1);
        }));
    }, [
        Ue
    ]), Je = bT(()=>{
        z && (ut.current || Fe());
    }, [
        z,
        Fe
    ]);
    Dui(re, ()=>({
            scrollToBottom: Ue,
            scrollToTop: Be,
            requestAutoScroll: Je,
            getScrollPosition: et,
            get rootElement () {
                return ne.current;
            },
            get viewportElement () {
                return ae.current;
            }
        }), [
        Ue,
        Be,
        Je,
        et
    ]);
    const ee = bT(()=>{
        const Ut = ae.current;
        if (!Ut) return;
        const { scrollTop: fn, scrollHeight: Gt, clientHeight: qe } = Ut, { isAtTop: En, isAtBottom: Hn } = str({
            scrollTop: fn,
            scrollHeight: Gt,
            clientHeight: qe,
            threshold: UY
        });
        ge(!En), ve(!Hn);
        const { isAtStart: Xr, isAtEnd: $r } = ctr({
            scrollLeft: Ut.scrollLeft,
            scrollWidth: Ut.scrollWidth,
            clientWidth: Ut.clientWidth,
            threshold: UY
        });
        Ne(!Xr), tt(!$r), B?.({
            isAtBottom: Hn,
            isAtTop: En
        }), Hn && ut.current && (nt(!1), Ie.current && (clearTimeout(Ie.current), Ie.current = null));
        const Fr = Gt < Ze.current - UY, Vr = Gt > Ze.current + UY, _a = fn < it.current - UY;
        _a && !Fr && !Hn && z && !ut.current && (nt(!0), Ie.current && clearTimeout(Ie.current), Ie.current = setTimeout(()=>{
            nt(!1), Ie.current = null;
        }, O)), Vr && z && !ut.current && !Hn && !_a && Fe(), Fr && z && !ut.current && !Hn && Fe(), it.current = fn, Ze.current = Gt;
    }, [
        B,
        z,
        O,
        Fe
    ]), Xe = ntr(), We = bT(()=>{
        Xe.request(ee);
    }, [
        Xe,
        ee
    ]);
    dpe(()=>{
        const Ut = ae.current, fn = W.current;
        if (!Ut) return;
        const Gt = i(()=>{
            We();
        }, "handleScroll");
        Ut.addEventListener("scroll", Gt, {
            passive: !0
        });
        const qe = y$t(ee);
        return qe !== null && (qe.observe(Ut), fn && qe.observe(fn)), ()=>{
            Ut.removeEventListener("scroll", Gt), qe?.disconnect(), Xe.dispose();
        };
    }, [
        ee,
        We,
        Xe
    ]), dpe(()=>{
        q !== void 0 && z && (ut.current || Fe());
    }, [
        q,
        z,
        Fe
    ]), dpe(()=>{
        if (!he) return;
        const Ut = ae.current;
        if (!Ut) return;
        const fn = i((Gt)=>{
            const qe = Gt.deltaY;
            if (qe === 0) return;
            const En = Ut.scrollHeight - Ut.clientHeight;
            if (En <= 0) return;
            const Hn = Ut.scrollTop, Xr = Hn <= 0 && qe < 0, $r = Hn >= En - .5 && qe > 0;
            Xr || $r || Gt.stopPropagation();
        }, "handleWheel");
        return Ut.addEventListener("wheel", fn, {
            passive: !0
        }), ()=>Ut.removeEventListener("wheel", fn);
    }, [
        he
    ]), dpe(()=>{
        if (!me) return;
        const Ut = ae.current;
        if (!Ut) return;
        const fn = i((qe)=>{
            const En = EIe({
                deltaX: qe.deltaX,
                deltaY: qe.deltaY,
                mapVerticalWheelToHorizontal: be
            });
            if (En === null) return;
            const Hn = Ut.scrollWidth - Ut.clientWidth;
            if (Hn <= 0) return;
            const Xr = Ut.scrollLeft;
            if (!(En < 0 && Xr <= 0) && !(En > 0 && Xr >= Hn - .5)) {
                if (!be) {
                    qe.stopPropagation();
                    return;
                }
                qe.preventDefault(), Ut.scrollLeft = Xr + En;
            }
        }, "handleWheel_0"), Gt = be ? {
            passive: !1,
            capture: !0
        } : {
            passive: !0,
            capture: !0
        };
        return Ut.addEventListener("wheel", fn, Gt), ()=>Ut.removeEventListener("wheel", fn, Gt);
    }, [
        me,
        be
    ]);
    const He = I !== void 0 || N !== void 0, Ge = L !== void 0 || j !== void 0, at = He || Ge, Le = He ? I ?? 24 : 0, kt = He ? N ?? 24 : 0, Ft = Ge ? L ?? 24 : 0, ft = Ge ? j ?? 24 : 0, Ct = E === "hover", [Et, Zt] = TX(!1);
    QWn(()=>{
        Ct && Zt(ne.current?.matches(":hover") ?? !1);
    }, [
        Ct
    ]);
    const bn = bT((Ut)=>{
        Zt(!0), K?.(Ut);
    }, [
        K
    ]), Ht = bT((Ut)=>{
        Zt(!1), Y?.(Ut);
    }, [
        Y
    ]), mn = Ct && !Et && !A;
    dpe(()=>()=>{
            Ie.current && clearTimeout(Ie.current), Me.current !== null && (cancelAnimationFrame(Me.current), Me.current = null);
        }, []);
    const Vt = {
        "--scroll-area-scroll-padding": `${H}px`,
        ...Z !== void 0 ? {
            "--scrollbar-inset": `${Z}px`
        } : void 0
    }, On = $e({
        rootClass: "ui-scroll-area",
        stylexStyles: [
            mtr(),
            m
        ],
        className: Zr(at && "ui-scroll-area--masked", u),
        style: {
            height: a,
            maxHeight: s,
            width: l,
            ...Vt,
            ...C
        }
    }), zn = $e({
        rootClass: "ui-scroll-area__viewport",
        stylexStyles: [
            ftr({
                direction: $
            }),
            b,
            at ? ltr({
                topFadePx: ue ? Le : 0,
                bottomFadePx: _e ? kt : 0,
                topFadeStartOpacity: R,
                bottomFadeStartOpacity: P,
                startFadePx: Se ? Ft : 0,
                endFadePx: je ? ft : 0
            }) : null
        ],
        className: p,
        style: g ? {
            overscrollBehavior: "auto"
        } : void 0
    }), vn = $e({
        rootClass: "ui-scroll-area__content",
        stylexStyles: [
            htr($),
            _
        ]
    }), Dn = $e({
        rootClass: "ui-scroll-area__scrollbar",
        stylexStyles: [
            v$t({
                direction: $,
                orientation: "vertical",
                visibility: E
            }),
            v
        ]
    }), ir = wn(x$t("vertical", mn)), Wn = $e({
        rootClass: "ui-scroll-area__scrollbar",
        stylexStyles: [
            v$t({
                direction: $,
                orientation: "horizontal",
                visibility: E
            }),
            v
        ]
    }), Mr = wn(x$t("horizontal", mn));
    return Fui("div", {
        ref: ne,
        className: On.className,
        style: On.style,
        "data-scroll-padding": H,
        "data-visibility": E,
        "data-direction": $,
        ...J,
        onPointerEnter: Ct ? bn : K,
        onPointerLeave: Ct ? Ht : Y,
        children: [
            $X("div", {
                ref: ae,
                className: zn.className,
                style: zn.style,
                "data-native-scrollbar": "none",
                children: $X("div", {
                    ref: W,
                    className: vn.className,
                    style: vn.style,
                    children: e
                })
            }),
            x,
            he && $X("div", {
                ref: oe,
                className: Dn.className,
                style: Dn.style,
                "data-orientation": "vertical",
                "data-scrollable": "false",
                role: "presentation",
                "aria-hidden": "true",
                children: $X("div", {
                    ref: ce,
                    className: ir.className,
                    style: ir.style,
                    "data-orientation": "vertical"
                })
            }),
            me && $X("div", {
                ref: Q,
                className: Wn.className,
                style: Wn.style,
                "data-orientation": "horizontal",
                "data-scrollable": "false",
                role: "presentation",
                "aria-hidden": "true",
                children: $X("div", {
                    ref: le,
                    className: Mr.className,
                    style: Mr.style,
                    "data-orientation": "horizontal"
                })
            })
        ]
    });
}, "ScrollArea"));

}
