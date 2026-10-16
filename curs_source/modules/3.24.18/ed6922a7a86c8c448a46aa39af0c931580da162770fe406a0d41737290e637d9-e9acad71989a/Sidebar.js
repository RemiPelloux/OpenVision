import { Yh } from "./DSs.js";
import { yU } from "./DirectionContext.js";
import { aEs } from "./Divider.js";
import { jO } from "./IconButton.js";
import { tpf } from "./OverflowFade.js";
import { Bvt, ID, Wvt, a9l, ive, o9l, tMi, uEs, xXe } from "./Sidebar.stylex.js";
import { u9l } from "./SidebarCollapseClip.js";
import { Dhf } from "./SidebarContext.js";
import { Bhf } from "./SidebarNavigationContext.js";
import { Zhf } from "./SidebarSection.js";
import { fC } from "./Text.js";
import { hh } from "./attach.js";
import { qg } from "./cn.js";
import { A9l, Fhf, Nhf, Shf, V5l, Xhf, Yhf, _9l, _hf, apf, c9l, cpf, dEs, dpf, f9l, fhf, gEs, ghf, hEs, hhf, jhf, lpf, mhf, opf, phf, qhf, spf, upf, vhf, x9l } from "./f0s.js";
import { sp } from "./icon.js";
import { Nvt } from "./inline-direction.js";
import { Hki, sas } from "./inline-mirror.stylex.js";
import { E5, Io, Nn, Or, Px, Ti, ni, uY, xM } from "./qIc.js";
import { v9l } from "./row-control.js";
import { ED, QC } from "./scroll-area.js";
import { Oc } from "./stylex.js";
import { x } from "./tslib.es6.js";
import { wD } from "./variant-enforcer.js";
import { useId as Gvt } from "./react-runtime/react/esm-index-production.js";
import { c as OY } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as SS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useState as cMi } from "./react-runtime/react/esm-index-production.js";
import { useRef as lMi } from "./react-runtime/react/esm-index-production.js";
import { createContext as npf } from "./react-runtime/react/esm-index-production.js";
import { useEffect as rpf } from "./react-runtime/react/esm-index-production.js";
import { jsxs as rve } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { forwardRef as yue } from "./react-runtime/react/esm-index-production.js";
var R9l, fEs, vEs, D9l, M9l, P9l, L9l, N9l, O9l, F9l, B9l, U9l, $9l, _Es, H9l, hpf;
export { $9l, B9l, D9l, F9l, H9l, L9l, M9l, N9l, O9l, P9l, R9l, U9l, _Es, fEs, hpf, vEs };
var __wakaru_ppf_initialized = false;
export function ppf() {
if (__wakaru_ppf_initialized) return;
__wakaru_ppf_initialized = true;
"use strict";
x(), E5(), Oc(), aEs(), jO(), fC(), sas(), qg(), Nvt(), a9l(), u9l(), v9l(), Dhf(), Bhf(), Zhf(), yU(), hh(), wD(), ED(), sp(), tpf(), R9l = {
    "ui--default-marker": "ui--default-marker",
    $$css: !0
}, fEs = npf(null), vEs = yue(function(t, n) {
    const i = OY(55);
    let r, s, o, a, c, l, u, h, p, g, f, v;
    i[0] !== t ? ({ children: r, className: s, surface: h, side: p, width: g, collapsedWidth: f, resizable: v, minWidth: a, maxWidth: o, onWidthChange: c, style: u, ...l } = t, i[0] = t, i[1] = r, i[2] = s, i[3] = o, i[4] = a, i[5] = c, i[6] = l, i[7] = u, i[8] = h, i[9] = p, i[10] = g, i[11] = f, i[12] = v) : (r = i[1], s = i[2], o = i[3], a = i[4], c = i[5], l = i[6], u = i[7], h = i[8], p = i[9], g = i[10], f = i[11], v = i[12]);
    const b = h === void 0 ? "default" : h, y = p === void 0 ? "left" : p, T = g === void 0 ? 180 : g, E = f === void 0 ? 48 : f, A = v === void 0 ? !1 : v, { state: R } = _9l("Sidebar.Root"), D = xM(), [P, N] = cMi(null), [O, F] = cMi(!1), H = lMi(null), $ = lMi(null);
    let W;
    i[13] !== P || i[14] !== T ? (W = P ?? gEs(T, 180), i[13] = P, i[14] = T, i[15] = W) : W = i[15];
    const G = W;
    let q, z;
    i[16] === Symbol.for("react.memo_cache_sentinel") ? (q = ()=>()=>{
            $.current?.();
        }, z = [], i[16] = q, i[17] = z) : (q = i[16], z = i[17]), rpf(q, z);
    let X;
    i[18] !== G || i[19] !== D || i[20] !== o || i[21] !== a || i[22] !== c || i[23] !== A || i[24] !== y || i[25] !== R ? (X = (ye)=>{
        if (!A || R === "collapsed") return;
        ye.preventDefault(), F(!0);
        const _e = ye.clientX, me = G, Ce = gEs(a, 100), xe = gEs(o, 600), Le = (Ge)=>{
            const Xe = hhf(Ge.clientX - _e, D), Ke = y === "left" ? Xe : -Xe;
            let et = me + Ke;
            et = Math.max(Ce, Math.min(xe, et)), N(et), c?.(et);
        }, Be = ()=>{
            F(!1), document.removeEventListener("mousemove", Le), document.removeEventListener("mouseup", je), document.body.style.cursor = "", document.body.style.userSelect = "", $.current = null;
        }, je = ()=>{
            Be();
        };
        document.addEventListener("mousemove", Le), document.addEventListener("mouseup", je), document.body.style.cursor = "col-resize", document.body.style.userSelect = "none", $.current = Be;
    }, i[18] = G, i[19] = D, i[20] = o, i[21] = a, i[22] = c, i[23] = A, i[24] = y, i[25] = R, i[26] = X) : X = i[26];
    const Y = X;
    let Z;
    i[27] !== n ? (Z = [
        H,
        n
    ], i[27] = n, i[28] = Z) : Z = i[28];
    const K = uY(Z), J = `${G}px`, ne = typeof E == "number" ? `${E}px` : E;
    let ee;
    if (i[29] !== s || i[30] !== o || i[31] !== a || i[32] !== u || i[33] !== b || i[34] !== J || i[35] !== ne) {
        const ye = {
            "--sidebar-width": J,
            "--sidebar-width-collapsed": ne,
            ...a !== void 0 && {
                "--sidebar-min-width": typeof a == "number" ? `${a}px` : a
            },
            ...o !== void 0 && {
                "--sidebar-max-width": typeof o == "number" ? `${o}px` : o
            }
        };
        ee = Or({
            rootClass: "ui-sidebar",
            stylexStyles: phf({
                surface: b
            }),
            className: s,
            style: {
                ...ye,
                ...u
            }
        }), i[29] = s, i[30] = o, i[31] = a, i[32] = u, i[33] = b, i[34] = J, i[35] = ne, i[36] = ee;
    } else ee = i[36];
    const se = ee, re = b === "default" ? void 0 : b, ue = A || void 0, ce = O || void 0;
    let de;
    i[37] !== G || i[38] !== Y || i[39] !== A || i[40] !== y || i[41] !== R ? (de = A && R !== "collapsed" && SS(spf, {
        side: y,
        currentWidth: G,
        onMouseDown: Y
    }), i[37] = G, i[38] = Y, i[39] = A, i[40] = y, i[41] = R, i[42] = de) : de = i[42];
    let le;
    return i[43] !== r || i[44] !== K || i[45] !== l || i[46] !== y || i[47] !== se.className || i[48] !== se.style || i[49] !== R || i[50] !== re || i[51] !== ue || i[52] !== ce || i[53] !== de ? (le = rve("nav", {
        ref: K,
        className: se.className,
        "data-sidebar-root": "",
        "data-surface": re,
        "data-state": R,
        "data-side": y,
        "data-resizable": ue,
        "data-resizing": ce,
        style: se.style,
        ...l,
        children: [
            r,
            de
        ]
    }), i[43] = r, i[44] = K, i[45] = l, i[46] = y, i[47] = se.className, i[48] = se.style, i[49] = R, i[50] = re, i[51] = ue, i[52] = ce, i[53] = de, i[54] = le) : le = i[54], le;
}), D9l = yue(function(t, n) {
    const i = OY(36);
    let r, s, o, a, c, l;
    i[0] !== t ? ({ children: r, className: s, layout: a, hasTrafficLights: c, iconButtonsPosition: l, ...o } = t, i[0] = t, i[1] = r, i[2] = s, i[3] = o, i[4] = a, i[5] = c, i[6] = l) : (r = i[1], s = i[2], o = i[3], a = i[4], c = i[5], l = i[6]);
    const u = a === void 0 ? "default" : a, h = c === void 0 ? !1 : c, p = l === void 0 ? "left" : l;
    let g;
    i[7] !== s ? (g = Or({
        rootClass: "ui-sidebar-top-bar",
        stylexStyles: xXe.root,
        className: s
    }), i[7] = s, i[8] = g) : g = i[8];
    const f = g;
    let v, b, y, T, E, A, R, D, P;
    if (i[9] !== r || i[10] !== h || i[11] !== p || i[12] !== u || i[13] !== o || i[14] !== n || i[15] !== f.className || i[16] !== f.style) {
        const O = Nn(xXe.trafficLightsSpacer), F = Nn(xXe.icons, u === "fill" ? xXe.iconsFill : null, h && p === "left" ? xXe.iconsLeftWithTrafficLights : null, p === "right" ? xXe.iconsRight : null);
        E = n, A = f.className, R = f.style, D = u === "default" ? void 0 : u, P = h || void 0, v = p, b = o, y = h && SS("div", {
            className: ni("ui-sidebar-traffic-lights-spacer", O.className),
            style: O.style,
            "aria-hidden": "true"
        }), T = r && SS("div", {
            className: ni("ui-sidebar-top-bar-icons", F.className),
            style: F.style,
            children: r
        }), i[9] = r, i[10] = h, i[11] = p, i[12] = u, i[13] = o, i[14] = n, i[15] = f.className, i[16] = f.style, i[17] = v, i[18] = b, i[19] = y, i[20] = T, i[21] = E, i[22] = A, i[23] = R, i[24] = D, i[25] = P;
    } else v = i[17], b = i[18], y = i[19], T = i[20], E = i[21], A = i[22], R = i[23], D = i[24], P = i[25];
    let N;
    return i[26] !== v || i[27] !== b || i[28] !== y || i[29] !== T || i[30] !== E || i[31] !== A || i[32] !== R || i[33] !== D || i[34] !== P ? (N = rve("div", {
        ref: E,
        className: A,
        style: R,
        "data-layout": D,
        "data-traffic-lights": P,
        "data-icons-position": v,
        ...b,
        children: [
            y,
            T
        ]
    }), i[26] = v, i[27] = b, i[28] = y, i[29] = T, i[30] = E, i[31] = A, i[32] = R, i[33] = D, i[34] = P, i[35] = N) : N = i[35], N;
}), M9l = yue(function(t, n) {
    const i = OY(31);
    let r, s, o, a, c, l, u, h;
    i[0] !== t ? ({ children: r, className: s, region: c, showScrolledDivider: l, hasTrafficLights: u, iconButtons: o, iconButtonsPosition: h, ...a } = t, i[0] = t, i[1] = r, i[2] = s, i[3] = o, i[4] = a, i[5] = c, i[6] = l, i[7] = u, i[8] = h) : (r = i[1], s = i[2], o = i[3], a = i[4], c = i[5], l = i[6], u = i[7], h = i[8]);
    const p = c === void 0 ? "default" : c, g = l === void 0 ? !0 : l, f = u === void 0 ? !1 : u, v = h === void 0 ? "right" : h, b = p === "actions", y = f ? Bvt.trafficLights : null, T = b ? Bvt.regionActions : null, E = b && !g ? Bvt.regionActionsNoScrolledDivider : null;
    let A;
    i[9] !== s || i[10] !== y || i[11] !== T || i[12] !== E ? (A = Or({
        rootClass: "ui-sidebar-header",
        stylexStyles: [
            Bvt.root,
            y,
            T,
            E
        ],
        className: s
    }), i[9] = s, i[10] = y, i[11] = T, i[12] = E, i[13] = A) : A = i[13];
    const R = A;
    let D;
    if (i[14] !== r || i[15] !== f || i[16] !== o || i[17] !== v || i[18] !== b || i[19] !== a || i[20] !== n || i[21] !== p || i[22] !== R.className || i[23] !== R.style || i[24] !== g) {
        const P = Nn(xXe.trafficLightsSpacer), N = Nn(Bvt.icons), O = Nn(Bvt.content);
        let F;
        i[26] !== r || i[27] !== b ? (F = b ? SS(Px, {
            buttonFullWidth: !0,
            children: r
        }) : r, i[26] = r, i[27] = b, i[28] = F) : F = i[28];
        let H;
        i[29] !== F ? (H = SS("div", {
            className: ni("ui-sidebar-header-content", O.className),
            style: O.style,
            children: F
        }), i[29] = F, i[30] = H) : H = i[30], D = rve("div", {
            ref: n,
            className: R.className,
            style: R.style,
            "data-region": p,
            "data-show-scrolled-divider": g || void 0,
            "data-traffic-lights": f || void 0,
            "data-icons-position": v,
            ...a,
            children: [
                f && SS("div", {
                    className: ni("ui-sidebar-traffic-lights-spacer", P.className),
                    style: P.style,
                    "aria-hidden": "true"
                }),
                o && v === "left" && SS("div", {
                    className: ni("ui-sidebar-header-icons", N.className),
                    style: N.style,
                    children: o
                }),
                H,
                o && v === "right" && SS("div", {
                    className: ni("ui-sidebar-header-icons", N.className),
                    style: N.style,
                    children: o
                })
            ]
        }), i[14] = r, i[15] = f, i[16] = o, i[17] = v, i[18] = b, i[19] = a, i[20] = n, i[21] = p, i[22] = R.className, i[23] = R.style, i[24] = g, i[25] = D;
    } else D = i[25];
    return D;
}), P9l = yue(function(t, n) {
    const i = OY(12);
    let r, s, o;
    i[0] !== t ? ({ children: r, className: s, ...o } = t, i[0] = t, i[1] = r, i[2] = s, i[3] = o) : (r = i[1], s = i[2], o = i[3]);
    let a;
    i[4] !== s ? (a = Or({
        rootClass: "ui-sidebar-footer",
        stylexStyles: _hf(),
        className: s
    }), i[4] = s, i[5] = a) : a = i[5];
    const c = a;
    let l;
    return i[6] !== r || i[7] !== o || i[8] !== n || i[9] !== c.className || i[10] !== c.style ? (l = SS("div", {
        ref: n,
        className: c.className,
        style: c.style,
        ...o,
        children: r
    }), i[6] = r, i[7] = o, i[8] = n, i[9] = c.className, i[10] = c.style, i[11] = l) : l = i[11], l;
}), L9l = yue(function(t, n) {
    const i = OY(14);
    let r, s, o;
    i[0] !== t ? ({ children: r, className: s, ...o } = t, i[0] = t, i[1] = r, i[2] = s, i[3] = o) : (r = i[1], s = i[2], o = i[3]);
    let a;
    i[4] !== s ? (a = Or({
        rootClass: "ui-sidebar-actions",
        stylexStyles: mhf(),
        className: s
    }), i[4] = s, i[5] = a) : a = i[5];
    const c = a;
    let l;
    i[6] !== r ? (l = SS(Px, {
        buttonFullWidth: !0,
        children: r
    }), i[6] = r, i[7] = l) : l = i[7];
    let u;
    return i[8] !== o || i[9] !== n || i[10] !== c.className || i[11] !== c.style || i[12] !== l ? (u = SS("div", {
        ref: n,
        className: c.className,
        style: c.style,
        ...o,
        children: l
    }), i[8] = o, i[9] = n, i[10] = c.className, i[11] = c.style, i[12] = l, i[13] = u) : u = i[13], u;
}), N9l = yue(function(t, n) {
    const i = OY(23), { children: r, className: s, onKeyDown: o, onScrollStateChange: a, topFadeSize: c, bottomFadeSize: l, topFadeStartOpacity: u, bottomFadeStartOpacity: h } = t, p = Nhf(), g = lMi(null);
    let f;
    i[0] !== p || i[1] !== o ? (f = ($)=>{
        if (o?.($), !$.defaultPrevented && p) e: switch($.key){
            case "ArrowDown":
                {
                    $.preventDefault(), p.navigateNext();
                    break e;
                }
            case "ArrowUp":
                {
                    $.preventDefault(), p.navigatePrevious();
                    break e;
                }
            case "Enter":
                {
                    p.highlightedIndex >= 0 && ($.preventDefault(), p.selectHighlighted());
                    break e;
                }
            case "Escape":
                p.highlightedIndex >= 0 && ($.preventDefault(), p.clearHighlight());
        }
    }, i[0] = p, i[1] = o, i[2] = f) : f = i[2];
    const v = f;
    let b;
    i[3] !== n ? (b = ($)=>{
        g.current = $, typeof n == "function" ? n($) : n && (n.current = $);
    }, i[3] = n, i[4] = b) : b = i[4];
    const y = b;
    let T;
    i[5] !== a ? (T = ($)=>{
        const W = (g.current?.getScrollPosition().scrollTop ?? 0) > 0, G = g.current?.rootElement?.closest(".ui-sidebar");
        if (G) {
            const q = G.hasAttribute("data-content-scrolled");
            !W && q ? G.removeAttribute("data-content-scrolled") : W && !q && (G.dataset.contentScrolled = "true");
        }
        a?.($);
    }, i[5] = a, i[6] = T) : T = i[6];
    const E = T;
    let A;
    i[7] !== s ? (A = Or({
        rootClass: "ui-sidebar-content",
        stylexStyles: ghf(),
        className: s
    }), i[7] = s, i[8] = A) : A = i[8];
    const R = A, D = R.className;
    let P, N;
    i[9] === Symbol.for("react.memo_cache_sentinel") ? (P = vhf(), N = fhf(), i[9] = P, i[10] = N) : (P = i[9], N = i[10]);
    const O = p ? 0 : void 0, F = p ? v : void 0;
    let H;
    return i[11] !== l || i[12] !== h || i[13] !== r || i[14] !== E || i[15] !== R.className || i[16] !== R.style || i[17] !== y || i[18] !== O || i[19] !== F || i[20] !== c || i[21] !== u ? (H = SS(QC, {
        ref: y,
        bottomFadeSize: l,
        bottomFadeStartOpacity: h,
        className: D,
        contentStyle: P,
        viewportStyle: N,
        style: R.style,
        tabIndex: O,
        topFadeSize: c,
        topFadeStartOpacity: u,
        onKeyDown: F,
        onScrollStateChange: E,
        children: r
    }), i[11] = l, i[12] = h, i[13] = r, i[14] = E, i[15] = R.className, i[16] = R.style, i[17] = y, i[18] = O, i[19] = F, i[20] = c, i[21] = u, i[22] = H) : H = i[22], H;
}), O9l = yue(function(t, n) {
    const i = OY(32);
    let r, s, o, a, c, l, u, h;
    i[0] !== t ? ({ children: r, className: s, headerVisibility: l, collapsible: u, collapsed: o, defaultCollapsed: h, onCollapsedChange: a, ...c } = t, i[0] = t, i[1] = r, i[2] = s, i[3] = o, i[4] = a, i[5] = c, i[6] = l, i[7] = u, i[8] = h) : (r = i[1], s = i[2], o = i[3], a = i[4], c = i[5], l = i[6], u = i[7], h = i[8]);
    const p = l === void 0 ? "visible" : l, g = u === void 0 ? !1 : u, f = h === void 0 ? !1 : h, [v, b] = cMi(f), y = o !== void 0, T = y ? o : v;
    let E;
    i[9] !== T || i[10] !== g || i[11] !== y || i[12] !== a ? (E = ()=>{
        if (!g) return;
        const W = !T;
        y || b(W), a?.(W);
    }, i[9] = T, i[10] = g, i[11] = y, i[12] = a, i[13] = E) : E = i[13];
    const A = E;
    let R;
    i[14] !== T || i[15] !== g || i[16] !== A ? (R = {
        collapsible: g,
        collapsed: T,
        toggleCollapsed: A
    }, i[14] = T, i[15] = g, i[16] = A, i[17] = R) : R = i[17];
    const D = R;
    let P;
    i[18] !== s ? (P = Or({
        rootClass: "ui-sidebar-group",
        stylexStyles: [
            uEs.marker,
            uEs.root
        ],
        className: s
    }), i[18] = s, i[19] = P) : P = i[19];
    const N = P, O = g || void 0, F = T || void 0;
    let H;
    i[20] !== r || i[21] !== p || i[22] !== c || i[23] !== n || i[24] !== N.className || i[25] !== N.style || i[26] !== O || i[27] !== F ? (H = SS("div", {
        ref: n,
        className: N.className,
        style: N.style,
        "data-sidebar-group": "",
        "data-header-visibility": p,
        "data-collapsible": O,
        "data-collapsed": F,
        ...c,
        children: r
    }), i[20] = r, i[21] = p, i[22] = c, i[23] = n, i[24] = N.className, i[25] = N.style, i[26] = O, i[27] = F, i[28] = H) : H = i[28];
    let $;
    return i[29] !== D || i[30] !== H ? ($ = SS(fEs.Provider, {
        value: D,
        children: H
    }), i[29] = D, i[30] = H, i[31] = $) : $ = i[31], $;
}), F9l = yue(function(t, n) {
    const i = OY(50), { children: r, className: s, actions: o, trailingBand: a, subline: c, subtitle: l, onClick: u, onMouseDown: h, onKeyDown: p, ...g } = t, f = a === void 0 ? "default" : a;
    let v;
    i[0] !== c ? (v = c?.trim(), i[0] = c, i[1] = v) : v = i[1];
    const b = v, y = b !== void 0 && b.length > 0;
    let T;
    i[2] !== l ? (T = l?.trim(), i[2] = l, i[3] = T) : T = i[3];
    const E = T, A = E !== void 0 && E.length > 0, R = A9l(), D = R?.collapsible ?? !1, P = R?.collapsed ?? !1, N = xM(), O = Gvt(), H = g["aria-label"] !== void 0 || g["aria-labelledby"] !== void 0 ? void 0 : O, $ = dEs(g);
    let W;
    i[4] !== R ? (W = ()=>{
        R?.toggleCollapsed();
    }, i[4] = R, i[5] = W) : W = i[5];
    const G = W;
    let q;
    i[6] !== R ? (q = (se)=>{
        (se.key === "Enter" || se.key === " ") && (se.preventDefault(), R?.toggleCollapsed());
    }, i[6] = R, i[7] = q) : q = i[7];
    const z = q;
    let X;
    i[8] !== h ? (X = (se)=>{
        h?.(se), !se.defaultPrevented && se.button === 0 && se.preventDefault();
    }, i[8] = h, i[9] = X) : X = i[9];
    const Y = X;
    let Z;
    i[10] !== H || i[11] !== $.control || i[12] !== n ? (Z = {
        ref: n,
        "aria-labelledby": H,
        ...$.control
    }, i[10] = H, i[11] = $.control, i[12] = n, i[13] = Z) : Z = i[13];
    const K = Z;
    let J;
    i[14] !== s ? (J = Or({
        rootClass: "ui-sidebar-group-label",
        stylexStyles: [
            ive.marker,
            ive.root
        ],
        className: s
    }), i[14] = s, i[15] = J) : J = i[15];
    const ne = J;
    let ee;
    if (i[16] !== o || i[17] !== r || i[18] !== K || i[19] !== N || i[20] !== G || i[21] !== z || i[22] !== Y || i[23] !== y || i[24] !== A || i[25] !== P || i[26] !== D || i[27] !== u || i[28] !== p || i[29] !== $.row || i[30] !== ne.className || i[31] !== ne.style || i[32] !== O || i[33] !== f || i[34] !== b || i[35] !== E) {
        const se = Nn(ive.trigger), re = Nn(ive.main, f === "collection" ? ive.mainCollection : null), ue = Nn(Wvt.text, ive.text), ce = Nn(Wvt.title), de = Nn(Wvt.inlineSubtitle), le = Nn(ive.chevron, N === "rtl" && Hki.root), ye = Nn(ive.subline), _e = Nn(ive.actions, f === "collection" ? ive.actionsCollection : null), me = ne.className, Ce = ne.style, xe = $.row, Le = ni("ui-sidebar-group-label-main", re.className), Be = D || void 0;
        let je;
        i[37] !== r || i[38] !== O ? (je = SS("span", {
            id: O,
            className: ni("ui-sidebar-label-row-title ui-sidebar-group-label-title", ce.className),
            style: ce.style,
            children: r
        }), i[37] = r, i[38] = O, i[39] = je) : je = i[39];
        const Ge = A ? SS("span", {
            className: ni("ui-sidebar-label-row-inline-subtitle ui-sidebar-group-label-inline-subtitle", de.className),
            style: de.style,
            children: E
        }) : null, Xe = D && SS(Ti, {
            name: "chevron-down",
            color: "tertiary",
            className: ni("ui-sidebar-group-label-chevron", le.className),
            style: le.style,
            "aria-hidden": "true"
        });
        let Ke;
        i[40] !== Be || i[41] !== je || i[42] !== Ge || i[43] !== Xe ? (Ke = rve(Io, {
            size: "sm",
            weight: "regular",
            color: "tertiary",
            className: ni("ui-sidebar-label-row-text ui-sidebar-group-label-text", ue.className),
            style: ue.style,
            "aria-hidden": Be,
            children: [
                je,
                Ge,
                Xe
            ]
        }), i[40] = Be, i[41] = je, i[42] = Ge, i[43] = Xe, i[44] = Ke) : Ke = i[44];
        const et = o && SS("div", {
            className: ni("ui-sidebar-group-label-actions", _e.className),
            style: _e.style,
            role: "presentation",
            onClick: cpf,
            onKeyDown: lpf,
            children: SS(Px, {
                iconButtonIconSize: tMi,
                iconButtonRootStyle: ive.actionButton,
                iconButtonSize: "sm",
                children: o
            })
        });
        let We;
        i[45] !== re || i[46] !== Le || i[47] !== Ke || i[48] !== et ? (We = rve("div", {
            className: Le,
            style: re.style,
            children: [
                Ke,
                et
            ]
        }), i[45] = re, i[46] = Le, i[47] = Ke, i[48] = et, i[49] = We) : We = i[49], ee = rve("div", {
            className: me,
            style: Ce,
            role: D ? void 0 : "group",
            onClick: u,
            onKeyDown: p,
            onMouseDown: Y,
            "data-sidebar-group-label": "",
            "data-trailing-band": f === "default" ? void 0 : f,
            "data-collapsible": D || void 0,
            "data-has-subline": y ? !0 : void 0,
            ...xe,
            ...D ? null : K,
            children: [
                D ? SS("div", {
                    className: ni("ui-sidebar-group-label-trigger", se.className),
                    style: se.style,
                    role: "button",
                    tabIndex: 0,
                    "aria-expanded": !P,
                    onClick: G,
                    onKeyDown: z,
                    ...K
                }) : null,
                We,
                y ? SS("div", {
                    className: ni("ui-sidebar-group-label-subline", ye.className),
                    style: ye.style,
                    "aria-hidden": D || void 0,
                    children: b
                }) : null
            ]
        }), i[16] = o, i[17] = r, i[18] = K, i[19] = N, i[20] = G, i[21] = z, i[22] = Y, i[23] = y, i[24] = A, i[25] = P, i[26] = D, i[27] = u, i[28] = p, i[29] = $.row, i[30] = ne.className, i[31] = ne.style, i[32] = O, i[33] = f, i[34] = b, i[35] = E, i[36] = ee;
    } else ee = i[36];
    return ee;
}), B9l = yue(function(t, n) {
    const i = OY(27);
    let r, s, o, a;
    i[0] !== t ? ({ children: r, className: s, style: a, ...o } = t, i[0] = t, i[1] = r, i[2] = s, i[3] = o, i[4] = a) : (r = i[1], s = i[2], o = i[3], a = i[4]);
    const c = A9l();
    if (!c?.collapsible) {
        let f;
        i[5] !== s || i[6] !== a ? (f = Or({
            rootClass: "ui-sidebar-group-content",
            stylexStyles: V5l(),
            className: s,
            style: a
        }), i[5] = s, i[6] = a, i[7] = f) : f = i[7];
        const v = f;
        let b;
        return i[8] !== r || i[9] !== o || i[10] !== n || i[11] !== v.className || i[12] !== v.style ? (b = SS("div", {
            ref: n,
            className: v.className,
            style: v.style,
            ...o,
            children: r
        }), i[8] = r, i[9] = o, i[10] = n, i[11] = v.className, i[12] = v.style, i[13] = b) : b = i[13], b;
    }
    let l;
    i[14] !== s ? (l = ni("ui-sidebar-group-content", s), i[14] = s, i[15] = l) : l = i[15];
    const u = !c.collapsed;
    let h;
    i[16] === Symbol.for("react.memo_cache_sentinel") ? (h = Nn(V5l()), i[16] = h) : h = i[16];
    let p;
    i[17] !== r || i[18] !== h ? (p = SS("div", {
        ...h,
        children: r
    }), i[17] = r, i[18] = h, i[19] = p) : p = i[19];
    let g;
    return i[20] !== o || i[21] !== n || i[22] !== a || i[23] !== l || i[24] !== u || i[25] !== p ? (g = SS(c9l, {
        ...o,
        ref: n,
        className: l,
        expanded: u,
        style: a,
        children: p
    }), i[20] = o, i[21] = n, i[22] = a, i[23] = l, i[24] = u, i[25] = p, i[26] = g) : g = i[26], g;
}), U9l = yue(function(t, n) {
    const i = OY(14);
    let r, s, o, a;
    i[0] !== t ? ({ children: r, className: s, rootStyle: a, ...o } = t, i[0] = t, i[1] = r, i[2] = s, i[3] = o, i[4] = a) : (r = i[1], s = i[2], o = i[3], a = i[4]);
    let c;
    i[5] !== s || i[6] !== a ? (c = Or({
        rootClass: "ui-sidebar-menu",
        stylexStyles: [
            Shf(),
            a
        ],
        className: s
    }), i[5] = s, i[6] = a, i[7] = c) : c = i[7];
    const l = c;
    let u;
    return i[8] !== r || i[9] !== o || i[10] !== n || i[11] !== l.className || i[12] !== l.style ? (u = SS("ul", {
        ref: n,
        className: l.className,
        style: l.style,
        ...o,
        children: r
    }), i[8] = r, i[9] = o, i[10] = n, i[11] = l.className, i[12] = l.style, i[13] = u) : u = i[13], u;
}), $9l = yue(function(t, n) {
    const i = OY(12);
    let r, s, o;
    i[0] !== t ? ({ children: r, className: s, ...o } = t, i[0] = t, i[1] = r, i[2] = s, i[3] = o) : (r = i[1], s = i[2], o = i[3]);
    let a;
    i[4] !== s ? (a = Or({
        rootClass: "ui-sidebar-menu-item",
        stylexStyles: o9l.root,
        className: s
    }), i[4] = s, i[5] = a) : a = i[5];
    const c = a;
    let l;
    return i[6] !== r || i[7] !== o || i[8] !== n || i[9] !== c.className || i[10] !== c.style ? (l = SS("li", {
        ref: n,
        className: c.className,
        style: c.style,
        ...o,
        children: r
    }), i[6] = r, i[7] = o, i[8] = n, i[9] = c.className, i[10] = c.style, i[11] = l) : l = i[11], l;
}), _Es = yue(function(t, n) {
    const i = OY(110), { "aria-busy": r, children: s, className: o, stylexStyles: a, interaction: c, trailingBand: l, tilesetState: u, tone: h, icon: p, statusIcon: g, isActive: f, isUnread: v, isLoading: b, isHighlighted: y, description: T, descriptionAdornment: E, beforeEndIcon: A, endIcon: R, endIconColor: D, actions: P, useTextOverflowFade: N, compact: O, hideIcon: F, reserveIconSpace: H, disabled: $, itemId: W, isEditing: G, isRenaming: q, onClick: z, onKeyDown: X, onMouseDown: Y, ...Z } = t, K = c === void 0 ? "default" : c, J = l === void 0 ? "default" : l, ne = u === void 0 ? "default" : u, ee = h === void 0 ? "default" : h, se = v === void 0 ? !1 : v, re = b === void 0 ? !1 : b, ue = N === void 0 ? !1 : N, ce = O === void 0 ? !1 : O, de = F === void 0 ? !1 : F, le = H === void 0 ? !1 : H, ye = $ === void 0 ? !1 : $, _e = lMi(null), me = Gvt(), Ce = Gvt(), xe = Gvt(), Le = Gvt(), Be = Gvt(), je = dEs(Z), Ge = !!T && !ce, Xe = Ge && !re && !!E, Ke = Z["aria-label"] !== void 0 || Z["aria-labelledby"] !== void 0;
    let et;
    i[0] !== xe || i[1] !== Ce || i[2] !== Ke || i[3] !== Ge || i[4] !== Xe || i[5] !== me ? (et = Ke ? void 0 : [
        me,
        Ge ? Ce : null,
        Xe ? xe : null
    ].filter(Boolean).join(" "), i[0] = xe, i[1] = Ce, i[2] = Ke, i[3] = Ge, i[4] = Xe, i[5] = me, i[6] = et) : et = i[6];
    const We = et, it = g ? Le : null, Ne = A ? Be : null;
    let Fe;
    i[7] !== it || i[8] !== Ne ? (Fe = [
        it,
        Ne
    ].filter(Boolean), i[7] = it, i[8] = Ne, i[9] = Fe) : Fe = i[9];
    const tt = Fe.join(" ") || void 0, st = Gvt();
    let vt;
    i[10] !== st || i[11] !== W ? (vt = ()=>W ?? st, i[10] = st, i[11] = W, i[12] = vt) : vt = i[12];
    const [ht] = cMi(vt), ut = y !== void 0;
    let Dt;
    i[13] !== ye || i[14] !== ht || i[15] !== ut ? (Dt = {
        disabled: ye,
        id: ht,
        isHighlightControlled: ut,
        ref: _e
    }, i[13] = ye, i[14] = ht, i[15] = ut, i[16] = Dt) : Dt = i[16];
    const lt = Fhf(Dt), Tt = y ?? lt, ct = !!P, Kt = !de && (g || p || le), Rt = G ?? q ?? !1, Gt = ue && !re;
    let Nt;
    i[17] !== n ? (Nt = [
        _e,
        n
    ], i[17] = n, i[18] = Nt) : Nt = i[18];
    const sn = uY(Nt);
    let un;
    i[19] !== ye || i[20] !== z || i[21] !== X ? (un = (pn)=>{
        X?.(pn), !pn.defaultPrevented && (ye || !hEs(pn, _e) && (pn.key === "Enter" || pn.key === " ") && (pn.preventDefault(), z?.(pn)));
    }, i[19] = ye, i[20] = z, i[21] = X, i[22] = un) : un = i[22];
    const kt = un, ot = !ye && !Rt;
    let ze;
    i[23] !== ot || i[24] !== Y ? (ze = (pn)=>{
        Y?.(pn), ot && f9l(pn, _e);
    }, i[23] = ot, i[24] = Y, i[25] = ze) : ze = i[25];
    const St = ze, ft = K === "static" ? ID.interactionStatic : null, Mt = ne === "default" ? null : ID.tilesetHighlight, Bt = a?.root;
    let Ot;
    i[26] !== o || i[27] !== ft || i[28] !== Mt || i[29] !== Bt ? (Ot = Or({
        rootClass: "ui-button ui-sidebar-menu-button",
        stylexStyles: [
            ID.marker,
            ID.root,
            ft,
            Mt,
            Bt
        ],
        className: o
    }), i[26] = o, i[27] = ft, i[28] = Mt, i[29] = Bt, i[30] = Ot) : Ot = i[30];
    const Wt = Ot;
    let nn;
    if (i[31] !== P || i[32] !== r || i[33] !== A || i[34] !== s || i[35] !== ce || i[36] !== tt || i[37] !== T || i[38] !== E || i[39] !== xe || i[40] !== Ce || i[41] !== ye || i[42] !== R || i[43] !== D || i[44] !== Be || i[45] !== kt || i[46] !== St || i[47] !== ct || i[48] !== Ge || i[49] !== Xe || i[50] !== p || i[51] !== Le || i[52] !== K || i[53] !== f || i[54] !== ot || i[55] !== Rt || i[56] !== Tt || i[57] !== re || i[58] !== se || i[59] !== me || i[60] !== We || i[61] !== sn || i[62] !== z || i[63] !== je.control || i[64] !== je.row || i[65] !== le || i[66] !== Wt.className || i[67] !== Wt.style || i[68] !== Gt || i[69] !== Kt || i[70] !== g || i[71] !== a?.actions || i[72] !== a?.content || i[73] !== a?.end || i[74] !== a?.iconWrapper || i[75] !== a?.label || i[76] !== ne || i[77] !== ee || i[78] !== J) {
        const pn = Nn(R9l, ID.trigger), Yt = Nn(ID.iconWrapper, a?.iconWrapper), _n = Nn(ID.icon), an = Nn(ID.iconElement), ln = Nn(ID.iconPlaceholder), Mn = Nn(ID.statusIcon), Dn = Nn(ID.content, K === "static" && ce ? ID.contentStaticCompact : null, a?.content), Ln = Nn(ID.label, re && ID.loadingText, re && ID.loadingLabel, a?.label), ti = Nn(ID.description, Xe && ID.descriptionWithAdornment, re && ID.loadingText, re && ID.loadingDescription);
        let fi;
        i[80] === Symbol.for("react.memo_cache_sentinel") ? (fi = Nn(ID.descriptionRow), i[80] = fi) : fi = i[80];
        const Oi = fi;
        let xr;
        i[81] === Symbol.for("react.memo_cache_sentinel") ? (xr = Nn(ID.descriptionAdornment), i[81] = xr) : xr = i[81];
        const us = xr, Fr = Nn(ID.end, a?.end), Zn = Nn(ID.endIcon), _r = Nn(ID.endRest), is = Nn(ID.actions, J === "collection" ? ID.actionsCollection : null, a?.actions), pr = Ge ? SS(Io, {
            id: Ce,
            size: "sm",
            color: re ? void 0 : "tertiary",
            className: ni("ui-sidebar-menu-button-description", ti.className),
            style: ti.style,
            children: Gt ? SS(x9l, {
                children: T
            }) : T
        }) : null, Ls = Wt.className, Br = Wt.style, ho = je.row, js = ye ? "presentation" : ot ? "button" : void 0, ec = ot ? 0 : void 0, ia = ye || void 0, fr = re ? !0 : r, cr = ot ? We : void 0, wr = ot ? tt : void 0, vo = ni("ui-sidebar-menu-button-trigger", pn.className), Qc = pn.style, Ei = je.control, br = ni("ui-sidebar-menu-button-content", Dn.className), Hr = Dn.style, Po = ni("ui-sidebar-menu-button-label", Ln.className);
        let ao;
        i[82] !== s || i[83] !== Gt ? (ao = Gt ? SS(x9l, {
            children: s
        }) : s, i[82] = s, i[83] = Gt, i[84] = ao) : ao = i[84];
        let qo;
        i[85] !== Ln || i[86] !== me || i[87] !== Po || i[88] !== ao ? (qo = SS(Io, {
            id: me,
            size: "md",
            className: Po,
            style: Ln.style,
            children: ao
        }), i[85] = Ln, i[86] = me, i[87] = Po, i[88] = ao, i[89] = qo) : qo = i[89];
        let Bo;
        i[90] !== E || i[91] !== xe || i[92] !== pr || i[93] !== Xe ? (Bo = Xe ? rve("div", {
            className: Oi.className,
            "data-sidebar-menu-button-description-row": "",
            style: Oi.style,
            children: [
                pr,
                SS("span", {
                    id: xe,
                    className: us.className,
                    "data-sidebar-menu-button-description-adornment": "",
                    style: us.style,
                    children: E
                })
            ]
        }) : pr, i[90] = E, i[91] = xe, i[92] = pr, i[93] = Xe, i[94] = Bo) : Bo = i[94];
        let Ns;
        i[95] !== Dn || i[96] !== br || i[97] !== qo || i[98] !== Bo ? (Ns = rve("div", {
            className: br,
            style: Hr,
            children: [
                qo,
                Bo
            ]
        }), i[95] = Dn, i[96] = br, i[97] = qo, i[98] = Bo, i[99] = Ns) : Ns = i[99];
        let $a;
        i[100] !== sn || i[101] !== je.control || i[102] !== js || i[103] !== ec || i[104] !== ia || i[105] !== fr || i[106] !== cr || i[107] !== wr || i[108] !== Ns ? ($a = SS("div", {
            ref: sn,
            role: js,
            tabIndex: ec,
            "aria-disabled": ia,
            "aria-busy": fr,
            "aria-labelledby": cr,
            "aria-describedby": wr,
            className: vo,
            style: Qc,
            "data-sidebar-row-trigger": "",
            ...Ei,
            children: Ns
        }), i[100] = sn, i[101] = je.control, i[102] = js, i[103] = ec, i[104] = ia, i[105] = fr, i[106] = cr, i[107] = wr, i[108] = Ns, i[109] = $a) : $a = i[109], nn = rve("div", {
            className: Ls,
            style: Br,
            "data-sidebar-menu-button": "",
            "data-variant": "ghost",
            "data-interaction": K === "default" ? void 0 : K,
            "data-trailing-band": J === "default" ? void 0 : J,
            "data-tileset-state": ne === "default" ? void 0 : ne,
            "data-tone": ee === "default" ? void 0 : ee,
            "data-active": f || void 0,
            "data-unread": se || void 0,
            "data-loading": re || void 0,
            "data-highlighted": Tt || void 0,
            "data-has-description": Ge || void 0,
            "data-has-actions": ct || void 0,
            "data-compact": ce || void 0,
            "data-disabled": ye || void 0,
            "data-editing": Rt || void 0,
            onClick: ye ? void 0 : z,
            onKeyDown: kt,
            onMouseDown: St,
            ...ho,
            children: [
                Kt && SS("div", {
                    id: Le,
                    className: ni("ui-sidebar-menu-button-icon-wrapper", Yt.className),
                    style: Yt.style,
                    children: g ? SS("span", {
                        className: ni("ui-sidebar-menu-button-status-icon", Mn.className),
                        style: Mn.style,
                        children: g
                    }) : typeof p == "string" ? SS(Ti, {
                        name: p,
                        "aria-hidden": "true",
                        className: ni("ui-sidebar-menu-button-icon", _n.className),
                        style: _n.style
                    }) : p ? SS("span", {
                        "aria-hidden": !0,
                        className: ni("ui-sidebar-menu-button-icon", _n.className, an.className),
                        style: {
                            ..._n.style,
                            ...an.style
                        },
                        children: p
                    }) : le ? SS("span", {
                        "aria-hidden": !0,
                        className: ni("ui-sidebar-menu-button-icon-placeholder", ln.className),
                        style: ln.style
                    }) : null
                }),
                $a,
                (A || R || P) && rve("div", {
                    className: ni("ui-sidebar-menu-button-end", Fr.className),
                    style: Fr.style,
                    children: [
                        (A || R) && rve("span", {
                            id: Be,
                            className: ni("ui-sidebar-menu-button-end-rest", _r.className),
                            style: _r.style,
                            children: [
                                A,
                                R && SS(Ti, {
                                    name: R,
                                    color: D,
                                    "aria-hidden": "true",
                                    className: ni("ui-sidebar-menu-button-end-icon", Zn.className),
                                    style: Zn.style
                                })
                            ]
                        }),
                        P && SS("div", {
                            className: ni("ui-sidebar-menu-button-actions", is.className),
                            style: is.style,
                            role: "presentation",
                            onClick: upf,
                            onKeyDown: dpf,
                            children: SS(Px, {
                                buttonRootStyle: ID.actionsControl,
                                iconButtonIconSize: tMi,
                                iconButtonRootStyle: ID.actionsControl,
                                iconButtonSize: "sm",
                                iconButtonVariant: "text",
                                children: P
                            })
                        })
                    ]
                })
            ]
        }), i[31] = P, i[32] = r, i[33] = A, i[34] = s, i[35] = ce, i[36] = tt, i[37] = T, i[38] = E, i[39] = xe, i[40] = Ce, i[41] = ye, i[42] = R, i[43] = D, i[44] = Be, i[45] = kt, i[46] = St, i[47] = ct, i[48] = Ge, i[49] = Xe, i[50] = p, i[51] = Le, i[52] = K, i[53] = f, i[54] = ot, i[55] = Rt, i[56] = Tt, i[57] = re, i[58] = se, i[59] = me, i[60] = We, i[61] = sn, i[62] = z, i[63] = je.control, i[64] = je.row, i[65] = le, i[66] = Wt.className, i[67] = Wt.style, i[68] = Gt, i[69] = Kt, i[70] = g, i[71] = a?.actions, i[72] = a?.content, i[73] = a?.end, i[74] = a?.iconWrapper, i[75] = a?.label, i[76] = ne, i[77] = ee, i[78] = J, i[79] = nn;
    } else nn = i[79];
    return nn;
}), H9l = yue(function(t, n) {
    const i = OY(12);
    let r, s, o;
    i[0] !== t ? ({ className: r, icon: o, ...s } = t, i[0] = t, i[1] = r, i[2] = s, i[3] = o) : (r = i[1], s = i[2], o = i[3]);
    const a = o === void 0 ? "layout-sidebar-left" : o, { toggleSidebar: c } = _9l("Sidebar.Trigger");
    let l;
    i[4] !== r ? (l = ni("ui-sidebar-trigger", r), i[4] = r, i[5] = l) : l = i[5];
    let u;
    return i[6] !== a || i[7] !== s || i[8] !== n || i[9] !== l || i[10] !== c ? (u = SS(Yh, {
        size: "sm",
        ref: n,
        icon: a,
        className: l,
        onClick: c,
        "aria-label": "Toggle sidebar",
        ...s
    }), i[6] = a, i[7] = s, i[8] = n, i[9] = l, i[10] = c, i[11] = u) : u = i[11], u;
}), hpf = Object.assign(vEs, {
    Root: vEs,
    TopBar: D9l,
    Header: M9l,
    Footer: P9l,
    Actions: L9l,
    Content: N9l,
    Group: O9l,
    GroupLabel: F9l,
    GroupContent: B9l,
    Section: jhf,
    SectionHead: qhf,
    SectionContent: Yhf,
    NestedRows: Xhf,
    Menu: U9l,
    MenuItem: $9l,
    MenuButton: _Es,
    Separator: apf,
    Trigger: H9l,
    EnvironmentIndicator: opf
});

}
