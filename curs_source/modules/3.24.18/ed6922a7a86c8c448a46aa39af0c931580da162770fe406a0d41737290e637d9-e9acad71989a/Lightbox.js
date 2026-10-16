import { TY } from "./Dialog.js";
import { N0s } from "./LightboxContext.js";
import { hh } from "./attach.js";
import { C0n, _vt, cof, dof, gof, hof, lof, mof, pof, uof } from "./f0s.js";
import { HOl } from "./media-scrim.stylex.js";
import { Or } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { forwardRef as GOl } from "./react-runtime/react/esm-index-production.js";
import { jsx as SDe } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useEffect as XRi } from "./react-runtime/react/esm-index-production.js";
import { c as kDe } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as vvt } from "./react-runtime/react/esm-index-production.js";
var F0s, dXe, B0s, U0s, jOl, qOl, MY;
export { B0s, F0s, MY, U0s, dXe, jOl, qOl };
var __wakaru_$0s_initialized = false;
export function $0s() {
if (__wakaru_$0s_initialized) return;
__wakaru_$0s_initialized = true;
"use strict";
x(), HOl(), N0s(), hh(), TY(), F0s = "(prefers-reduced-motion: reduce)", dXe = {
    trigger: {
        kysU6D: "ui-jyslct",
        kEafiO: "ui-972fbf",
        kWqL5O: "ui-gfja2r",
        kt9PQ7: "ui-1qhh985",
        kZ1KPB: "ui-yj58a3",
        kPef9Z: "ui-1ejq31n",
        kSWEuD: "ui-11pwa6s",
        kfdmCh: "ui-1sy0etr",
        k4WBpm: "ui-1b16gh4",
        kWkggS: "ui-jbqb8w",
        kMwMTN: "ui-1heor9g",
        kkrTdU: "ui-1huxd7x",
        k1xSpc: "ui-3nfvp2",
        kMv6JI: "ui-jb2p0i",
        kGuDYH: "ui-1qlqyl8",
        kKX8nH: "ui-1t35e8",
        k63SB2: "ui-1pd3egz",
        kLWn49: "ui-15bjb6t",
        keoZOQ: "ui-dj266r",
        km5ZXQ: "ui-1yf7rl7",
        k1K539: "ui-at24cr",
        koQZXg: "ui-j3b58b",
        kMeerF: "ui-1k57tk5",
        k3XXqK: "ui-1t137rt",
        kjBf7l: "ui-1uczgqu",
        kInvED: "ui-1wfwxd8",
        kLKAdn: "ui-exx8yu",
        kpe85a: "ui-1xpa7k",
        kGO01o: "ui-18d9i69",
        kE3dHu: "ui-1uhho1l",
        $$css: !0
    },
    grid: {
        k1xSpc: "ui-78zum5",
        kwnvtZ: "ui-1a02dak",
        kOIVth: "ui-ehausa",
        $$css: !0
    },
    gridItem: {
        k1xSpc: "ui-1lliihq",
        kaIpWk: "ui-1m7fhj7",
        kXHlph: "ui-6ikm8r",
        kORKVm: "ui-10wlt62",
        $$css: !0
    },
    popup: {
        kzqmXN: "ui-h8yej3",
        kZKoxP: "ui-5yr21d",
        k1xSpc: "ui-78zum5",
        kGNEyG: "ui-6s0dn4",
        kjj79g: "ui-l56j7k",
        $$css: !0
    },
    title: {
        keoZOQ: "ui-dj266r",
        k71WvV: "ui-14z9mp",
        k1K539: "ui-at24cr",
        keTefX: "ui-1lziwak",
        $$css: !0
    },
    description: {
        keoZOQ: "ui-dj266r",
        k71WvV: "ui-14z9mp",
        k1K539: "ui-at24cr",
        keTefX: "ui-1lziwak",
        $$css: !0
    },
    close: {
        kysU6D: "ui-jyslct",
        kEafiO: "ui-972fbf",
        kWqL5O: "ui-gfja2r",
        kt9PQ7: "ui-1qhh985",
        kZ1KPB: "ui-yj58a3",
        kPef9Z: "ui-1ejq31n",
        kSWEuD: "ui-11pwa6s",
        kfdmCh: "ui-1sy0etr",
        k4WBpm: "ui-1b16gh4",
        kkrTdU: "ui-1ypdohk",
        kMwMTN: "ui-1wd3ewq",
        k1xSpc: "ui-t0psk2",
        kMv6JI: "ui-jb2p0i",
        kGuDYH: "ui-1qlqyl8",
        kKX8nH: "ui-1t35e8",
        k63SB2: "ui-1pd3egz",
        kLWn49: "ui-15bjb6t",
        keoZOQ: "ui-dj266r",
        km5ZXQ: "ui-1yf7rl7",
        k1K539: "ui-at24cr",
        koQZXg: "ui-j3b58b",
        kMeerF: "ui-1k57tk5",
        k3XXqK: "ui-1t137rt",
        kjBf7l: "ui-1uczgqu",
        kInvED: "ui-1wfwxd8",
        kLKAdn: "ui-uve7l6",
        kpe85a: "ui-16b7oty",
        kGO01o: "ui-1rgtt3y",
        kE3dHu: "ui-o7x2bt",
        kaIpWk: "ui-1043rbw",
        kWkggS: "ui-1kkznz9 ui-1iuyybk",
        $$css: !0
    }
}, B0s = {
    snappy: {
        durationMs: 240,
        easing: "cubic-bezier(0.19, 1, 0.22, 1)"
    },
    smooth: {
        durationMs: 280,
        easing: "cubic-bezier(0.165, 0.84, 0.44, 1)"
    },
    bouncy: {
        durationMs: 300,
        easing: "cubic-bezier(0.075, 0.82, 0.165, 1)"
    },
    reduced: {
        durationMs: 0,
        easing: "cubic-bezier(0.165, 0.84, 0.44, 1)"
    }
}, U0s = GOl(function(t, n) {
    const i = kDe(44);
    let r, s, o, a, c, l, u, h, p, g;
    i[0] !== t ? ({ children: s, className: o, contextPart: g, sourceRef: h, onClick: l, motion: c, itemIndex: a, aspectRatio: r, style: p, ...u } = t, i[0] = t, i[1] = r, i[2] = s, i[3] = o, i[4] = a, i[5] = c, i[6] = l, i[7] = u, i[8] = h, i[9] = p, i[10] = g) : (r = i[1], s = i[2], o = i[3], a = i[4], c = i[5], l = i[6], u = i[7], h = i[8], p = i[9], g = i[10]);
    const f = g === void 0 ? "Lightbox.Trigger" : g, { openFromElement: v, registerItemElement: b, registerItemAspectRatio: y } = C0n(f), T = vvt(null);
    let E;
    i[11] !== a || i[12] !== n || i[13] !== b || i[14] !== h ? (E = (G)=>{
        T.current = G, typeof n == "function" ? n(G) : n && (n.current = G), a !== void 0 && b(a, h?.current ?? G);
    }, i[11] = a, i[12] = n, i[13] = b, i[14] = h, i[15] = E) : E = i[15];
    const A = E;
    let R;
    i[16] !== r || i[17] !== a || i[18] !== l || i[19] !== v || i[20] !== b || i[21] !== h ? (R = (G)=>{
        if (l?.(G), G.defaultPrevented) return;
        const q = h?.current ?? T.current;
        a !== void 0 && b(a, q), v(q, {
            itemIndex: a,
            aspectRatio: r
        });
    }, i[16] = r, i[17] = a, i[18] = l, i[19] = v, i[20] = b, i[21] = h, i[22] = R) : R = i[22];
    const D = R;
    let P, N;
    i[23] !== r || i[24] !== a || i[25] !== y ? (P = ()=>{
        if (a !== void 0) return y(a, r), ()=>{
            y(a, void 0);
        };
    }, N = [
        a,
        r,
        y
    ], i[23] = r, i[24] = a, i[25] = y, i[26] = P, i[27] = N) : (P = i[26], N = i[27]), XRi(P, N);
    let O, F;
    i[28] !== a || i[29] !== b || i[30] !== h ? (O = ()=>{
        a !== void 0 && b(a, h?.current ?? T.current ?? null);
    }, F = [
        a,
        b,
        h
    ], i[28] = a, i[29] = b, i[30] = h, i[31] = O, i[32] = F) : (O = i[31], F = i[32]), XRi(O, F);
    let H;
    if (i[33] !== o || i[34] !== p) {
        const G = _vt();
        H = Or({
            rootClass: "ui-lightbox-trigger",
            stylexStyles: G.trigger,
            className: o,
            style: p
        }), i[33] = o, i[34] = p, i[35] = H;
    } else H = i[35];
    const $ = H;
    let W;
    return i[36] !== s || i[37] !== D || i[38] !== c || i[39] !== u || i[40] !== A || i[41] !== $.className || i[42] !== $.style ? (W = SDe("button", {
        type: "button",
        ref: A,
        className: $.className,
        style: $.style,
        "data-motion": c,
        onClick: D,
        ...u,
        children: s
    }), i[36] = s, i[37] = D, i[38] = c, i[39] = u, i[40] = A, i[41] = $.className, i[42] = $.style, i[43] = W) : W = i[43], W;
}), jOl = U0s, qOl = GOl(function(t, n) {
    const i = kDe(12);
    let r, s, o;
    i[0] !== t ? ({ className: r, style: o, ...s } = t, i[0] = t, i[1] = r, i[2] = s, i[3] = o) : (r = i[1], s = i[2], o = i[3]);
    let a;
    if (i[4] !== r || i[5] !== o) {
        const u = _vt();
        a = Or({
            rootClass: "ui-lightbox-grid-item",
            stylexStyles: u.gridItem,
            className: r,
            style: o
        }), i[4] = r, i[5] = o, i[6] = a;
    } else a = i[6];
    const c = a;
    let l;
    return i[7] !== c.className || i[8] !== c.style || i[9] !== s || i[10] !== n ? (l = SDe(U0s, {
        ref: n,
        className: c.className,
        contextPart: "Lightbox.GridItem",
        style: c.style,
        ...s
    }), i[7] = c.className, i[8] = c.style, i[9] = s, i[10] = n, i[11] = l) : l = i[11], l;
}), MY = {
    Root: cof,
    Grid: lof,
    GridItem: qOl,
    Trigger: jOl,
    Portal: uof,
    Backdrop: dof,
    Popup: hof,
    Title: pof,
    Description: mof,
    Close: gof
};

}
