import { jsxs as Af } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as My } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as Tz } from "./react-runtime/react/esm-index-production.js";
import { jsx as _8t } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { Fragment as _pi } from "./react-runtime/react/esm-index-production.js";
import { useLayoutEffect as fpi } from "./react-runtime/react/esm-index-production.js";
import { jsx as hpe } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as hpi } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsxs as k8t } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as kpi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useEffect as nTe } from "./react-runtime/react/esm-index-production.js";
import * as vHn from "./react-runtime/react/esm-index-production.js";
import * as vpi from "./react-runtime/react/esm-index-production.js";
import { Fragment as w8t } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useRef as wT } from "./react-runtime/react/esm-index-production.js";
import { c as wpi } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as ws } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as xpi from "./react-runtime/react/esm-index-production.js";
import { ui } from "./Zyr.js";
import { OOt, yPe } from "./Iwr.js";
import { $Ar, $Tr, CGt, IAr, MAr, TGt, Vge, XAr, cTr, fGt, kTr, mGt, oTr, qAr, rGt, sd, vGt, zAr } from "./f6r.js";
import { JIr, QIr, WIr, XIr, eNr, lNr, nNr, sNr, tNr, uNr } from "./x$r.js";
import { pGt } from "./DefaultDiff.constants.ts";
import { GTr, HGt, HTr, KTr, UTr, VGt, WTr, ZGt, lq, uLe } from "./DefaultDiff.tsx";
import { LY } from "./Text.tsx";
import { $e } from "./attach.ts";
import { Zr } from "./cn.ts";
import { eRe } from "./code-token.ts";
import { TQ } from "./diff-reveal-ranges.ts";
import { dGt } from "./diff-word-wrap.ts";
import { Mn } from "./icon.tsx";
import { MY } from "./index.js";
import { ji } from "./index_2.ts";
import { Ra } from "./index_4.ts";
import { Y$e } from "./index_5.ts";
import { A$ } from "./line-range-set.ts";
import { Ye } from "./marked.esm.js";
import { i } from "./plugin-brand-icon.js";
import { Ho, wn } from "./stylex.mjs";
import { t3 } from "./use-latest-ref.ts";
import { bo } from "./useIsoLayoutEffect.mjs";
import { C0, eg } from "./useRefWithInit.mjs";
export function NTr(r, e, a) {
    const s = r + 8;
    return e ? (a > lq ? Math.max(s, UTr) : s) + 16 : s + 8;
}
export function MGt(r, e) {
    const a = My(6), s = e === void 0 ? GTr : e, [l, u] = Tz(!0), p = wT(null), m = wT(s);
    let b, g;
    a[0] !== s ? (b = i(()=>{
        m.current = s;
    }, "t1"), g = [
        s
    ], a[0] = s, a[1] = b, a[2] = g) : (b = a[1], g = a[2]), fpi(b, g);
    let _;
    a[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = i((E)=>{
        if (p.current && (p.current.disconnect(), p.current = null), !E) return;
        const A = new ResizeObserver(($)=>{
            const I = $[0]?.contentRect.width;
            I !== void 0 && u(I >= m.current);
        });
        A.observe(E), p.current = A;
    }, "t3"), a[3] = _) : _ = a[3];
    const v = _, x = r === "split" && !l ? "unified" : r;
    let C;
    return a[4] !== x ? (C = [
        x,
        v
    ], a[4] = x, a[5] = C) : C = a[5], C;
}
export function RGt(r, e, a) {
    let s = 0;
    for(let u = 1; u < e; u++){
        const p = r.indexOf(`
`, s);
        if (p === -1) return "";
        s = p + 1;
    }
    const l = s;
    for(let u = e; u <= a; u++){
        const p = r.indexOf(`
`, s);
        if (p === -1) return r.slice(l);
        s = p + 1;
    }
    return r.slice(l, s - 1);
}
export function MTr(r) {
    let e = 0;
    for (const a of r)a.originalLineNumber !== void 0 && a.originalLineNumber > e && (e = a.originalLineNumber), a.modifiedLineNumber !== void 0 && a.modifiedLineNumber > e && (e = a.modifiedLineNumber);
    return Math.max(WTr, String(e).length);
}
export function PGt({ tabSize: r, minHeight: e, style: a, fontSizePx: s = HGt, gutterFontSizePx: l = ZGt, lineHeightPx: u = pGt }) {
    return {
        ...{
            "--ui-default-diff-tab-size": String(r),
            "--ui-default-diff-font-size": `${s}px`,
            "--diff-gutter-font-size": `${l}px`,
            "--ui-default-diff-line-height": `${u}px`
        },
        ...e === void 0 ? {} : {
            minHeight: e
        },
        overscrollBehavior: "auto",
        ...a
    };
}
export function eLe(r) {
    const e = My(38), { children: a, className: s, style: l, fontSizePx: u, gutterFontSizePx: p, lineHeightPx: m, showScrollbar: b, tabSize: g, minHeight: _, contentStyle: v, contentClassName: x, scrollableRef: C, wordWrap: E, stylexStyles: A } = r;
    let $;
    e[0] !== s || e[1] !== u || e[2] !== p || e[3] !== m || e[4] !== _ || e[5] !== b || e[6] !== l || e[7] !== A?.root || e[8] !== g ? ($ = $e({
        rootClass: "ui-default-diff",
        stylexStyles: [
            mGt({
                split: !1,
                hideScrollbar: !b
            }),
            A?.root
        ],
        className: s,
        style: PGt({
            tabSize: g,
            minHeight: _,
            style: l,
            fontSizePx: u,
            gutterFontSizePx: p,
            lineHeightPx: m
        })
    }), e[0] = s, e[1] = u, e[2] = p, e[3] = m, e[4] = _, e[5] = b, e[6] = l, e[7] = A?.root, e[8] = g, e[9] = $) : $ = e[9];
    const I = $;
    let N, R, P, L, j, z, q;
    e[10] !== x || e[11] !== I.className || e[12] !== I.style || e[13] !== C || e[14] !== b || e[15] !== A?.content || e[16] !== E ? (N = wn(fGt({
        wordWrap: !!E,
        inSplitPane: !1
    }), A?.content), P = C, L = I.className, j = b ? void 0 : "", z = b ? void 0 : "none", q = I.style, R = Zr("ui-default-diff__content", N.className, x), e[10] = x, e[11] = I.className, e[12] = I.style, e[13] = C, e[14] = b, e[15] = A?.content, e[16] = E, e[17] = N, e[18] = R, e[19] = P, e[20] = L, e[21] = j, e[22] = z, e[23] = q) : (N = e[17], R = e[18], P = e[19], L = e[20], j = e[21], z = e[22], q = e[23]);
    let O;
    e[24] !== v || e[25] !== N.style ? (O = {
        ...N.style,
        ...v
    }, e[24] = v, e[25] = N.style, e[26] = O) : O = e[26];
    let B;
    e[27] !== a || e[28] !== R || e[29] !== O ? (B = ws("div", {
        className: R,
        style: O,
        children: a
    }), e[27] = a, e[28] = R, e[29] = O, e[30] = B) : B = e[30];
    let V;
    return e[31] !== P || e[32] !== L || e[33] !== j || e[34] !== z || e[35] !== q || e[36] !== B ? (V = ws("div", {
        ref: P,
        className: L,
        "data-hide-scrollbar": j,
        "data-native-scrollbar": z,
        style: q,
        children: B
    }), e[31] = P, e[32] = L, e[33] = j, e[34] = z, e[35] = q, e[36] = B, e[37] = V) : V = e[37], V;
}
export function jGt(r) {
    const e = My(67), { leftChildren: a, rightChildren: s, className: l, style: u, fontSizePx: p, gutterFontSizePx: m, lineHeightPx: b, showScrollbar: g, tabSize: _, minHeight: v, scrollableRef: x, wordWrap: C, splitOverlayPane: E, splitOverlayContentClassName: A, splitOverlayChildren: $, stylexStyles: I } = r, N = wT(null), R = wT(null);
    let P;
    e[0] === Symbol.for("react.memo_cache_sentinel") ? (P = i(()=>{
        N.current && R.current && (R.current.scrollLeft = N.current.scrollLeft);
    }, "t1"), e[0] = P) : P = e[0];
    const L = P;
    let j;
    e[1] === Symbol.for("react.memo_cache_sentinel") ? (j = i(()=>{
        N.current && R.current && (N.current.scrollLeft = R.current.scrollLeft);
    }, "t2"), e[1] = j) : j = e[1];
    const z = j;
    let q;
    e[2] !== l || e[3] !== p || e[4] !== m || e[5] !== b || e[6] !== v || e[7] !== g || e[8] !== u || e[9] !== I?.root || e[10] !== _ ? (q = $e({
        rootClass: "ui-default-diff",
        stylexStyles: [
            mGt({
                split: !0,
                hideScrollbar: !g
            }),
            I?.root
        ],
        className: l,
        style: PGt({
            tabSize: _,
            minHeight: v,
            style: u,
            fontSizePx: p,
            gutterFontSizePx: m,
            lineHeightPx: b
        })
    }), e[2] = l, e[3] = p, e[4] = m, e[5] = b, e[6] = v, e[7] = g, e[8] = u, e[9] = I?.root, e[10] = _, e[11] = q) : q = e[11];
    const O = q;
    let B, V, H, Z, K, Y, J, re, ne, ae, W, oe;
    if (e[12] !== a || e[13] !== O.className || e[14] !== O.style || e[15] !== x || e[16] !== g || e[17] !== $ || e[18] !== A || e[19] !== E || e[20] !== I?.content || e[21] !== C) {
        const be = wn(XAr()), ue = wn(vGt({
            second: !1
        }));
        H = wn(vGt({
            second: !0
        }));
        let ge, _e;
        e[34] !== A || e[35] !== E || e[36] !== I?.content || e[37] !== C ? (B = wn(fGt({
            wordWrap: !!C,
            inSplitPane: !0
        }), I?.content), ge = Zr("ui-default-diff__content", B.className, E === "left" ? A : void 0), _e = Zr("ui-default-diff__content", B.className, E === "right" ? A : void 0), e[34] = A, e[35] = E, e[36] = I?.content, e[37] = C, e[38] = B, e[39] = ge, e[40] = _e) : (B = e[38], ge = e[39], _e = e[40]), V = _e, W = x, oe = O.className, Z = g ? void 0 : "", K = g ? void 0 : "none", Y = O.style, re = Zr("ui-default-diff__split-panes", be.className), ne = be.style;
        const ve = E === "left" ? $ : null;
        e[41] !== B.style || e[42] !== a || e[43] !== ge || e[44] !== ve ? (ae = ws("div", {
            className: Zr("ui-default-diff__split-pane", ue.className),
            ref: N,
            onScroll: L,
            style: ue.style,
            children: Af("div", {
                className: ge,
                style: B.style,
                children: [
                    a,
                    ve
                ]
            })
        }), e[41] = B.style, e[42] = a, e[43] = ge, e[44] = ve, e[45] = ae) : ae = e[45], J = Zr("ui-default-diff__split-pane", H.className), e[12] = a, e[13] = O.className, e[14] = O.style, e[15] = x, e[16] = g, e[17] = $, e[18] = A, e[19] = E, e[20] = I?.content, e[21] = C, e[22] = B, e[23] = V, e[24] = H, e[25] = Z, e[26] = K, e[27] = Y, e[28] = J, e[29] = re, e[30] = ne, e[31] = ae, e[32] = W, e[33] = oe;
    } else B = e[22], V = e[23], H = e[24], Z = e[25], K = e[26], Y = e[27], J = e[28], re = e[29], ne = e[30], ae = e[31], W = e[32], oe = e[33];
    const ce = E === "right" ? $ : null;
    let Q;
    e[46] !== B.style || e[47] !== s || e[48] !== V || e[49] !== ce ? (Q = Af("div", {
        className: V,
        style: B.style,
        children: [
            s,
            ce
        ]
    }), e[46] = B.style, e[47] = s, e[48] = V, e[49] = ce, e[50] = Q) : Q = e[50];
    let le;
    e[51] !== H.style || e[52] !== Q || e[53] !== J ? (le = ws("div", {
        className: J,
        ref: R,
        onScroll: z,
        style: H.style,
        children: Q
    }), e[51] = H.style, e[52] = Q, e[53] = J, e[54] = le) : le = e[54];
    let he;
    e[55] !== le || e[56] !== re || e[57] !== ne || e[58] !== ae ? (he = Af("div", {
        className: re,
        style: ne,
        children: [
            ae,
            le
        ]
    }), e[55] = le, e[56] = re, e[57] = ne, e[58] = ae, e[59] = he) : he = e[59];
    let me;
    return e[60] !== Z || e[61] !== K || e[62] !== Y || e[63] !== he || e[64] !== W || e[65] !== oe ? (me = ws("div", {
        ref: W,
        className: oe,
        "data-hide-scrollbar": Z,
        "data-native-scrollbar": K,
        style: Y,
        children: he
    }), e[60] = Z, e[61] = K, e[62] = Y, e[63] = he, e[64] = W, e[65] = oe, e[66] = me) : me = e[66], me;
}
export function LGt(r, e) {
    const a = [
        ...e
    ].sort((l, u)=>l.startColumn - u.startColumn), s = [];
    for (const l of r){
        const u = l.col, p = l.col + l.content.length, m = a.filter((g)=>g.startColumn - 1 < p && g.endColumn - 1 > u);
        if (m.length === 0) {
            s.push({
                ...l,
                highlighted: !1
            });
            continue;
        }
        let b = u;
        for (const g of m){
            const _ = g.startColumn - 1, v = g.endColumn - 1;
            _ > b && s.push({
                content: l.content.slice(b - u, _ - u),
                color: l.color,
                className: l.className,
                fontStyle: l.fontStyle,
                col: b,
                highlighted: !1
            });
            const x = Math.max(_, b), C = Math.min(v, p);
            C > x && s.push({
                content: l.content.slice(x - u, C - u),
                color: l.color,
                className: l.className,
                fontStyle: l.fontStyle,
                col: x,
                highlighted: !0
            }), b = Math.max(b, C);
        }
        b < p && s.push({
            content: l.content.slice(b - u),
            color: l.color,
            className: l.className,
            fontStyle: l.fontStyle,
            col: b,
            highlighted: !1
        });
    }
    return tLe(s), s;
}
export function tLe(r) {
    for(let e = 0; e < r.length; e++){
        const a = r[e];
        if (!a.highlighted) {
            a.runStart = !1, a.runEnd = !1;
            continue;
        }
        a.runStart = e === 0 || !r[e - 1].highlighted, a.runEnd = e === r.length - 1 || !r[e + 1].highlighted;
    }
}
export function DGt(r) {
    switch(r){
        case "added":
            return "ui-default-diff__inline--added";
        case "removed":
            return "ui-default-diff__inline--removed";
        case "unchanged":
            return "";
        default:
            {
                const e = r;
                return "";
            }
    }
}
export function FGt(r) {
    return {
        base: wn(Vge({
            type: r
        })),
        runStart: wn(Vge({
            type: r,
            runStart: !0
        })),
        runEnd: wn(Vge({
            type: r,
            runEnd: !0
        })),
        runStartEnd: wn(Vge({
            type: r,
            runStart: !0,
            runEnd: !0
        }))
    };
}
export function RTr(r, e) {
    return e.runStart && e.runEnd ? r.runStartEnd : e.runStart ? r.runStart : e.runEnd ? r.runEnd : r.base;
}
export function OGt(r, e, a) {
    const s = r.highlighted && a ? RTr(a, r) : null;
    return ws("span", {
        className: Zr(r.className, r.highlighted && e, s?.className),
        style: {
            color: r.color,
            ...eRe(r.fontStyle),
            ...s ? s.style : void 0
        },
        children: r.content
    }, r.col);
}
export function nLe(r, e, a, s) {
    if (!s) return r.map((m)=>OGt(m, e, a));
    const l = dGt.splitTokensAtBreakOffsets(r, s.breakOffsets);
    tLe(l.flat());
    const u = wn(qAr()), p = s.indentColumns > 0 ? {
        ...u.style,
        paddingLeft: `${s.indentColumns}ch`
    } : u.style;
    return l.map((m, b)=>ws("span", {
            className: Zr("ui-default-diff__wrap-row", u.className),
            style: b > 0 ? p : u.style,
            children: m.map((g)=>OGt(g, e, a))
        }, b));
}
export function zGt(r) {
    const e = My(11), { plusDragActive: a, onMouseDown: s, placement: l } = r;
    let u, p, m;
    e[0] !== l || e[1] !== a ? (u = wn(zAr({
        placement: l,
        dragActive: a
    })), p = "Select line range", m = Zr("ui-default-diff__add-line", a && "ui-default-diff__add-line--drag-active", u.className), e[0] = l, e[1] = a, e[2] = u, e[3] = p, e[4] = m) : (u = e[2], p = e[3], m = e[4]);
    let b;
    e[5] === Symbol.for("react.memo_cache_sentinel") ? (b = ws(Mn, {
        "aria-hidden": !0,
        name: "plus",
        size: 11,
        rootStyle: HTr.icon
    }), e[5] = b) : b = e[5];
    let g;
    return e[6] !== s || e[7] !== u.style || e[8] !== p || e[9] !== m ? (g = ws("button", {
        "aria-label": p,
        className: m,
        onMouseDown: s,
        style: u.style,
        type: "button",
        children: b
    }), e[6] = s, e[7] = u.style, e[8] = p, e[9] = m, e[10] = g) : g = e[10], g;
}
export function BGt(r) {
    return `
[${r} ${r === 1 ? "line" : "lines"} collapsed]

`;
}
export function PTr(r) {
    switch(r){
        case "idle":
            return "More unmodified lines";
        case "loading":
            return "Loading unmodified lines\u2026";
        case "failed":
            return "Couldn't load unmodified lines. Click to retry.";
        case "unavailable":
            return "Unmodified lines aren't available";
    }
}
export function qGt(r) {
    return r !== void 0 && r > 1 ? {
        minHeight: `calc(var(--ui-default-diff-line-height) * ${r})`
    } : void 0;
}
export function rLe(r, e, a, s, l) {
    const u = r.originalTokenLineNumber ?? r.originalLineNumber, p = r.modifiedTokenLineNumber ?? r.modifiedLineNumber, m = e === "left" ? `orig:${u}` : `mod:${p}`;
    return a?.has(m) ? a.get(m) : l?.has(m) ? l.get(m) : s?.has(m) ? s.get(m) : [
        {
            content: r.content,
            col: 0
        }
    ];
}
export function iLe(r, e, a, s) {
    const l = r.originalTokenLineNumber ?? r.originalLineNumber, u = r.modifiedTokenLineNumber ?? r.modifiedLineNumber, p = e === "left" && r.type !== "added" || e === "unified" && r.type === "removed", m = e === "right" && r.type !== "removed" || e === "unified" && r.type !== "removed";
    p && l !== void 0 && a.set(l, r.content), m && u !== void 0 && s.set(u, r.content);
}
export function jTr(r) {
    const e = new Map, a = new Map;
    for (const s of r){
        const l = s.item;
        if (!sd(l)) if ("left" in l) {
            const u = l;
            u.left && iLe(u.left, "left", e, a), u.right && iLe(u.right, "right", e, a);
        } else iLe(l, "unified", e, a);
    }
    return {
        original: [
            ...e.keys()
        ].sort((s, l)=>s - l),
        modified: [
            ...a.keys()
        ].sort((s, l)=>s - l),
        originalText: e,
        modifiedText: a
    };
}
export function UGt(r) {
    const e = yPe();
    return r ?? e.lineTokenizer;
}
export function aLe(r) {
    const e = My(24), { lineTokenizer: a, entries: s, original: l, modified: u, language: p, existingLineTokens: m, enabled: b } = r, g = b === void 0 ? !0 : b, _ = UGt(a), [v, x] = Tz(null);
    let C;
    e[0] === Symbol.for("react.memo_cache_sentinel") ? (C = new Map, e[0] = C) : C = e[0];
    const E = wT(C);
    let A;
    e[1] === Symbol.for("react.memo_cache_sentinel") ? (A = new Set, e[1] = A) : A = e[1];
    const $ = wT(A), I = wT(0);
    let N;
    e[2] === Symbol.for("react.memo_cache_sentinel") ? (N = new Map, e[2] = N) : N = e[2];
    const R = wT(N);
    let P;
    e[3] !== p || e[4] !== _ ? (P = {
        lineTokenizer: _,
        language: p
    }, e[3] = p, e[4] = _, e[5] = P) : P = e[5];
    const L = wT(P);
    let j;
    e[6] === Symbol.for("react.memo_cache_sentinel") ? (j = i(()=>{
        x((H)=>H !== null && H.size === E.current.size ? H : new Map(E.current));
    }, "t6"), e[6] = j) : j = e[6];
    const z = j;
    let q;
    e[7] !== p || e[8] !== _ ? (q = i(()=>{
        I.current = I.current + 1;
        const H = L.current;
        L.current = {
            lineTokenizer: _,
            language: p
        };
        const Z = new Map;
        if (H.lineTokenizer === _ && H.language === p) for (const K of E.current.values())Z.set(K.map(LTr).join(""), K);
        R.current = Z, E.current = new Map, $.current = new Set, x(null);
    }, "t7"), e[7] = p, e[8] = _, e[9] = q) : q = e[9];
    let O;
    e[10] !== p || e[11] !== _ || e[12] !== u || e[13] !== l ? (O = [
        _,
        l,
        u,
        p
    ], e[10] = p, e[11] = _, e[12] = u, e[13] = l, e[14] = O) : O = e[14], nTe(q, O);
    let B, V;
    return e[15] !== g || e[16] !== s || e[17] !== m || e[18] !== p || e[19] !== _ || e[20] !== u || e[21] !== l ? (V = i(()=>{
        if (!g || !_) return;
        const H = jTr(s), Z = R.current;
        let K = !1;
        const Y = i((Q, le)=>{
            if (m?.has(Q) || $.current.has(Q)) return !1;
            const he = Z.get(le);
            return he === void 0 ? !0 : (E.current.set(Q, he), $.current.add(Q), K = !0, !1);
        }, "needsRequest"), J = H.original.filter((Q)=>Y(`orig:${Q}`, H.originalText.get(Q))), re = H.modified.filter((Q)=>Y(`mod:${Q}`, H.modifiedText.get(Q)));
        if (J.length === 0 && re.length === 0) {
            E.current.size > 0 && z();
            return;
        }
        K && z();
        for (const Q of J)$.current.add(`orig:${Q}`);
        for (const Q of re)$.current.add(`mod:${Q}`);
        let ne = !1, ae = !1;
        const W = I.current, oe = i(()=>{
            if (W === I.current) {
                for (const Q of J)$.current.delete(`orig:${Q}`);
                for (const Q of re)$.current.delete(`mod:${Q}`);
            }
        }, "clearRequestedLineKeys"), ce = i((Q, le)=>{
            if (W === I.current) {
                for (const he of J)Q.has(he) || $.current.delete(`orig:${he}`);
                for (const he of re)le.has(he) || $.current.delete(`mod:${he}`);
            }
        }, "clearMissingRequestedLineKeys");
        return Promise.all([
            J.length > 0 ? _({
                language: p,
                text: l,
                lineNumbers: J
            }) : Promise.resolve(new Map),
            re.length > 0 ? _({
                language: p,
                text: u,
                lineNumbers: re
            }) : Promise.resolve(new Map)
        ]).then((Q)=>{
            const [le, he] = Q;
            if (ae = !0, !(ne || W !== I.current)) {
                for (const [me, be] of le)E.current.set(`orig:${me}`, be);
                for (const [me, be] of he)E.current.set(`mod:${me}`, be);
                ce(le, he), z();
            }
        }).catch(()=>{
            ae = !0, oe();
        }), ()=>{
            ne = !0, ae || oe();
        };
    }, "t9"), B = [
        g,
        _,
        s,
        l,
        u,
        p,
        m,
        z
    ], e[15] = g, e[16] = s, e[17] = m, e[18] = p, e[19] = _, e[20] = u, e[21] = l, e[22] = B, e[23] = V) : (B = e[22], V = e[23]), nTe(V, B), v;
}
export function LTr(r) {
    return r.content;
}
export function oLe(r) {
    const e = My(56), { original: a, modified: s, language: l, contextLines: u, showLineNumbers: p, showPlusMinus: m, coloredLineNumbers: b, precomputedDiff: g, precomputedLineTokens: _, lineTokenizer: v, showAccentStrip: x, tabSize: C, maxLines: E, className: A, style: $, showScrollbar: I, sync: N, expandableUnchanged: R, onRequestExpandUnchanged: P, unloadedUnchangedEdges: L, unloadedUnchangedFetchState: j, wordWrap: z, viewMode: q, minSplitViewWidth: O, ignoreWhitespace: B } = r, V = u === void 0 ? 3 : u, H = p === void 0 ? !1 : p, Z = m === void 0 ? !0 : m, K = b === void 0 ? !1 : b, Y = x === void 0 ? !0 : x, J = C === void 0 ? 4 : C, re = I === void 0 ? !1 : I, ne = N === void 0 ? !1 : N, ae = R === void 0 ? !1 : R, W = j === void 0 ? "idle" : j, oe = z === void 0 ? !1 : z, ce = q === void 0 ? "unified" : q, Q = B === void 0 ? !1 : B, le = ae || P !== void 0, he = yPe(), me = v ?? he.lineTokenizer, be = !ne && !_ && me === void 0 ? he.offThread : void 0, ue = OOt(he, l, ne);
    let ge;
    e[0] !== Q || e[1] !== s || e[2] !== a || e[3] !== g ? (ge = g ? null : $Ar(a, s, {
        ignoreWhitespace: Q
    }), e[0] = Q, e[1] = s, e[2] = a, e[3] = g, e[4] = ge) : ge = e[4];
    const ve = g ?? ge;
    let Se;
    e: {
        if (!Q || !g) {
            Se = ve;
            break e;
        }
        let Ge;
        e[5] !== ve.lines ? (Ge = IAr(ve.lines), e[5] = ve.lines, e[6] = Ge) : Ge = e[6], Se = Ge;
    }
    const Ne = Se;
    let je;
    e[7] !== Ne.lines ? (je = MTr(Ne.lines), e[7] = Ne.lines, e[8] = je) : je = e[8];
    const tt = `${je}ch`;
    let Ke;
    e[9] !== $ || e[10] !== tt ? (Ke = {
        ...$,
        "--ui-default-diff-line-number-width": tt
    }, e[9] = $, e[10] = tt, e[11] = Ke) : Ke = e[11];
    const nt = Ke;
    let ut;
    e[12] !== V || e[13] !== Ne.lines ? (ut = MAr(Ne.lines, V), e[12] = V, e[13] = Ne.lines, e[14] = ut) : ut = e[14];
    const it = ut;
    let Ze;
    e: {
        if (E !== void 0 && E < it.length) {
            let Ge;
            e[15] !== it || e[16] !== E ? (Ge = it.slice(0, E), e[15] = it, e[16] = E, e[17] = Ge) : Ge = e[17], Ze = Ge;
            break e;
        }
        Ze = it;
    }
    const Ie = Ze;
    let Me;
    e: {
        if (!ne) {
            Me = null;
            break e;
        }
        let Ge;
        if (e[18] !== Ie || e[19] !== s || e[20] !== a || e[21] !== ue) {
            Ge = new Map;
            const at = [];
            let Le = [];
            for (const kt of Ie)sd(kt) ? Le.length > 0 && (at.push(Le), Le = []) : Le.push(kt);
            Le.length > 0 && at.push(Le);
            for (const kt of at){
                let Ft = 1 / 0, ft = 0, Ct = 1 / 0, Et = 0;
                for (const Ht of kt){
                    const mn = Ht.originalTokenLineNumber ?? Ht.originalLineNumber, Vt = Ht.modifiedTokenLineNumber ?? Ht.modifiedLineNumber;
                    Ht.type !== "added" && mn !== void 0 && (mn < Ft && (Ft = mn), mn > ft && (ft = mn)), Ht.type !== "removed" && Vt !== void 0 && (Vt < Ct && (Ct = Vt), Vt > Et && (Et = Vt));
                }
                const Zt = ft > 0 ? ue(RGt(a, Ft, ft)) : null, bn = Et > 0 ? ue(RGt(s, Ct, Et)) : null;
                for (const Ht of kt)if (Ht.type === "removed") {
                    const mn = Ht.originalTokenLineNumber ?? Ht.originalLineNumber;
                    if (mn === void 0 || !Zt) continue;
                    const Vt = `orig:${mn}`;
                    Ge.has(Vt) || Ge.set(Vt, Zt[mn - Ft] ?? [
                        {
                            content: Ht.content,
                            col: 0
                        }
                    ]);
                } else {
                    const mn = Ht.modifiedTokenLineNumber ?? Ht.modifiedLineNumber;
                    if (mn === void 0 || !bn) continue;
                    const Vt = `mod:${mn}`;
                    Ge.has(Vt) || Ge.set(Vt, bn[mn - Ct] ?? [
                        {
                            content: Ht.content,
                            col: 0
                        }
                    ]);
                }
            }
            e[18] = Ie, e[19] = s, e[20] = a, e[21] = ue, e[22] = Ge;
        } else Ge = e[22];
        Me = Ge;
    }
    const et = Me, [Ue, Be] = Tz(null);
    let Fe, Je;
    e[23] !== l || e[24] !== me || e[25] !== s || e[26] !== be || e[27] !== a || e[28] !== _ || e[29] !== ne ? (Fe = i(()=>{
        if (ne || _ || me) {
            Be(null);
            return;
        }
        let Ge = !1;
        if (Be(null), be !== void 0) return Promise.all([
            be.tokenize(a, l),
            be.tokenize(s, l)
        ]).then((at)=>{
            const [Le, kt] = at;
            if (Ge) return;
            const Ft = new Map;
            for(let ft = 0; ft < Le.length; ft++)Ft.set(`orig:${ft + 1}`, Le[ft] ?? [
                {
                    content: "",
                    col: 0
                }
            ]);
            for(let ft = 0; ft < kt.length; ft++)Ft.set(`mod:${ft + 1}`, kt[ft] ?? [
                {
                    content: "",
                    col: 0
                }
            ]);
            Be(Ft);
        }).catch(()=>{
            Ge || Be(null);
        }), ()=>{
            Ge = !0;
        };
    }, "t22"), Je = [
        ne,
        a,
        s,
        l,
        _,
        me,
        be
    ], e[23] = l, e[24] = me, e[25] = s, e[26] = be, e[27] = a, e[28] = _, e[29] = ne, e[30] = Fe, e[31] = Je) : (Fe = e[30], Je = e[31]), nTe(Fe, Je);
    let ee;
    if (e[32] !== le || e[33] !== Ie || e[34] !== L) {
        if (ee = [], L === "before" || L === "both") {
            let Ge;
            e[36] === Symbol.for("react.memo_cache_sentinel") ? (Ge = {
                key: "collapsed-unloaded-before",
                item: {
                    type: "collapsed",
                    lineCount: 0,
                    originalStartLine: 1,
                    modifiedStartLine: 1,
                    linesStartIndex: -1,
                    linesEndIndex: -1,
                    unloadedEdge: "before"
                }
            }, e[36] = Ge) : Ge = e[36], ee.push(Ge);
        }
        for(let Ge = 0; Ge < Ie.length; Ge++){
            const at = Ie[Ge];
            if (sd(at)) {
                if ((Ge === 0 || Ge === Ie.length - 1) && !le) continue;
                ee.push({
                    key: `collapsed-${at.originalStartLine}-${at.modifiedStartLine}-${at.lineCount}`,
                    item: at
                });
                continue;
            }
            const Le = at;
            ee.push({
                key: `${Ge}-${Le.type}-${Le.originalLineNumber ?? "x"}-${Le.modifiedLineNumber ?? "x"}`,
                item: Le
            });
        }
        if (L === "after" || L === "both") {
            let Ge;
            e[37] === Symbol.for("react.memo_cache_sentinel") ? (Ge = {
                key: "collapsed-unloaded-after",
                item: {
                    type: "collapsed",
                    lineCount: 0,
                    originalStartLine: 1,
                    modifiedStartLine: 1,
                    linesStartIndex: -1,
                    linesEndIndex: -1,
                    unloadedEdge: "after"
                }
            }, e[37] = Ge) : Ge = e[37], ee.push(Ge);
        }
        e[32] = le, e[33] = Ie, e[34] = L, e[35] = ee;
    } else ee = e[35];
    const Xe = ee, We = P ? W : "unavailable";
    let He;
    return e[38] !== Ue || e[39] !== A || e[40] !== K || e[41] !== Ne.lines || e[42] !== O || e[43] !== _ || e[44] !== Xe || e[45] !== nt || e[46] !== Y || e[47] !== H || e[48] !== Z || e[49] !== re || e[50] !== We || e[51] !== J || e[52] !== ce || e[53] !== et || e[54] !== oe ? (He = {
        renderItems: Xe,
        diffLines: Ne.lines,
        visibleLineTokens: et,
        asyncLineTokens: Ue,
        precomputedLineTokens: _,
        showLineNumbers: H,
        showPlusMinus: Z,
        coloredLineNumbers: K,
        showAccentStrip: Y,
        tabSize: J,
        className: A,
        style: nt,
        showScrollbar: re,
        wordWrap: oe,
        viewMode: ce,
        minSplitViewWidth: O,
        unloadedUnchangedFetchState: We
    }, e[38] = Ue, e[39] = A, e[40] = K, e[41] = Ne.lines, e[42] = O, e[43] = _, e[44] = Xe, e[45] = nt, e[46] = Y, e[47] = H, e[48] = Z, e[49] = re, e[50] = We, e[51] = J, e[52] = ce, e[53] = et, e[54] = oe, e[55] = He) : He = e[55], He;
}
export function GGt(r, e, a) {
    if (e.size === 0) return r;
    const s = [];
    for (const l of r){
        const u = e.get(l.key);
        if (!u || !sd(l.item)) {
            s.push(l);
            continue;
        }
        const p = l.item;
        if (p.linesStartIndex < 0 || p.linesEndIndex > a.length) {
            s.push(l);
            continue;
        }
        const m = Math.min(p.linesStartIndex + u.fromTop, p.linesEndIndex), b = Math.max(p.linesEndIndex - u.fromBottom, m), g = b - m;
        for(let _ = p.linesStartIndex; _ < m; _++){
            const v = a[_];
            s.push({
                key: `exp-top-${_}-${v.originalLineNumber ?? "x"}-${v.modifiedLineNumber ?? "x"}`,
                item: v,
                rowIndex: -1
            });
        }
        g > 0 && s.push({
            key: l.key,
            item: {
                ...p,
                lineCount: g,
                linesStartIndex: m,
                linesEndIndex: b
            },
            rowIndex: -1
        });
        for(let _ = b; _ < p.linesEndIndex; _++){
            const v = a[_];
            s.push({
                key: `exp-bot-${_}-${v.originalLineNumber ?? "x"}-${v.modifiedLineNumber ?? "x"}`,
                item: v,
                rowIndex: -1
            });
        }
    }
    return s;
}
export function DTr(r, e) {
    const a = e === "before" ? r[0] : r[r.length - 1];
    return a && sd(a.item) && a.item.unloadedEdge === void 0 ? a : void 0;
}
export function WGt(r, e, a, s, l) {
    const u = My(57);
    let p;
    u[0] !== s ? (p = i(()=>new A$(s), "t0"), u[0] = s, u[1] = p) : p = u[1];
    const [m, b] = Tz(p), [g, _] = Tz();
    let v;
    u[2] !== a || u[3] !== r ? (v = a ? TQ.autoRevealRanges(r) : A$.empty(), u[2] = a, u[3] = r, u[4] = v) : v = u[4];
    const x = v;
    let C;
    e: {
        if (!a) {
            let _e;
            u[5] === Symbol.for("react.memo_cache_sentinel") ? (_e = A$.empty(), u[5] = _e) : _e = u[5], C = _e;
            break e;
        }
        let be, ue;
        if (u[6] !== e || u[7] !== be) {
            for (const _e of e)_e.originalLineNumber !== void 0 && (be === void 0 && (be = _e.originalLineNumber), ue = _e.originalLineNumber);
            u[6] = e, u[7] = be, u[8] = be, u[9] = ue;
        } else be = u[8], ue = u[9];
        if (be === void 0 || ue === void 0) {
            C = x;
            break e;
        }
        let ge;
        u[10] !== x || u[11] !== be || u[12] !== ue ? (ge = x.union(new A$([
            [
                be,
                be
            ],
            [
                ue,
                ue
            ]
        ])), u[10] = x, u[11] = be, u[12] = ue, u[13] = ge) : ge = u[13], C = ge;
    }
    const E = C;
    let A;
    e: {
        if (!a) {
            A = m;
            break e;
        }
        let be;
        if (u[14] !== e || u[15] !== g || u[16] !== r || u[17] !== m) {
            be = g ? m.union(g.ranges) : m;
            for (const ge of g?.edges ?? [])if (!r.some((ve)=>sd(ve.item) && ve.item.unloadedEdge === ge)) {
                const ve = DTr(r, ge);
                if (ve && sd(ve.item)) {
                    const Se = TQ.revealedRangeForExpand(ve.item, e, be, ge === "before" ? "down" : "up", lq);
                    Se && (be = be.withRange(Se));
                }
            }
            u[14] = e, u[15] = g, u[16] = r, u[17] = m, u[18] = be;
        } else be = u[18];
        let ue;
        u[19] !== be || u[20] !== E ? (ue = TQ.pruneToConnected(be, E), u[19] = be, u[20] = E, u[21] = ue) : ue = u[21], A = ue;
    }
    const $ = A;
    let I;
    u[22] !== g || u[23] !== r ? (I = g !== void 0 && [
        ...g.edges
    ].some((be)=>r.some((ue)=>sd(ue.item) && ue.item.unloadedEdge === be)), u[22] = g, u[23] = r, u[24] = I) : I = u[24];
    const R = a && g !== void 0 && !I;
    let P, L;
    u[25] !== $ || u[26] !== R ? (P = i(()=>{
        R && (b($), _(void 0));
    }, "t5"), L = [
        $,
        R
    ], u[25] = $, u[26] = R, u[27] = P, u[28] = L) : (P = u[27], L = u[28]), nTe(P, L);
    const j = t3(r), z = t3(e), q = t3($), O = t3(a), B = t3(l);
    let V;
    u[29] !== z || u[30] !== O || u[31] !== B || u[32] !== j || u[33] !== q ? (V = i((be, ue, ge)=>{
        const _e = j.current.find((Ne)=>Ne.key === be);
        if (!_e || !sd(_e.item)) return;
        const ve = _e.item.unloadedEdge;
        if (ve !== void 0) {
            _((Ne)=>({
                    ranges: Ne?.ranges ?? A$.empty(),
                    edges: new Set(Ne?.edges).add(ve)
                })), B.current?.();
            return;
        }
        const Se = TQ.revealedRangeForExpand(_e.item, z.current, q.current, ue, ge);
        if (Se) {
            if (!O.current) {
                _((Ne)=>({
                        ranges: (Ne?.ranges ?? A$.empty()).withRange(Se),
                        edges: Ne?.edges ?? new Set
                    })), B.current?.();
                return;
            }
            b(q.current.withRange(Se));
        }
    }, "t7"), u[29] = z, u[30] = O, u[31] = B, u[32] = j, u[33] = q, u[34] = V) : V = u[34];
    const H = V;
    let Z;
    u[35] !== H ? (Z = i((be)=>H(be, "up", lq), "t8"), u[35] = H, u[36] = Z) : Z = u[36];
    const K = Z;
    let Y;
    u[37] !== H ? (Y = i((be)=>H(be, "down", lq), "t9"), u[37] = H, u[38] = Y) : Y = u[38];
    const J = Y;
    let re;
    u[39] !== H ? (re = i((be)=>H(be, "up", Number.MAX_SAFE_INTEGER), "t10"), u[39] = H, u[40] = re) : re = u[40];
    const ne = re;
    let ae;
    u[41] !== e || u[42] !== $ || u[43] !== a || u[44] !== r ? (ae = a ? TQ.toExpansionOffsets(r, $, e) : new Map, u[41] = e, u[42] = $, u[43] = a, u[44] = r, u[45] = ae) : ae = u[45];
    const W = ae;
    let oe;
    u[46] !== e || u[47] !== a || u[48] !== W || u[49] !== r ? (oe = a && W.size > 0 ? GGt(r, W, e) : r, u[46] = e, u[47] = a, u[48] = W, u[49] = r, u[50] = oe) : oe = u[50];
    const ce = oe, Q = a || l ? K : void 0, le = a || l ? J : void 0, he = a || l ? ne : void 0;
    let me;
    return u[51] !== $.ranges || u[52] !== ce || u[53] !== Q || u[54] !== le || u[55] !== he ? (me = {
        expandedRenderItems: ce,
        revealedRanges: $.ranges,
        handleExpandUp: Q,
        handleExpandDown: le,
        handleExpandAll: he
    }, u[51] = $.ranges, u[52] = ce, u[53] = Q, u[54] = le, u[55] = he, u[56] = me) : me = u[56], me;
}
export function FTr(r) {
    const e = My(54);
    let a, s;
    e[0] !== r ? ({ previewLineCount: a, ...s } = r, e[0] = r, e[1] = a, e[2] = s) : (a = e[1], s = e[2]);
    const l = Math.max(0, Math.floor(a)), u = UGt(s.lineTokenizer), p = !s.sync && u === void 0 && s.precomputedLineTokens === void 0, m = Math.max(l + 2, l * 2), b = s.sync || p;
    let g;
    e[3] !== s || e[4] !== m || e[5] !== b ? (g = {
        ...s,
        expandableUnchanged: !1,
        maxLines: m,
        sync: b
    }, e[3] = s, e[4] = m, e[5] = b, e[6] = g) : g = e[6];
    const _ = oLe(g), { renderItems: v, visibleLineTokens: x, asyncLineTokens: C, precomputedLineTokens: E, showLineNumbers: A, showPlusMinus: $, coloredLineNumbers: I, showAccentStrip: N, tabSize: R, className: P, style: L, wordWrap: j } = _;
    let z;
    e[7] !== v || e[8] !== l ? (z = TGt(v.filter(OTr).slice(0, l)), e[7] = v, e[8] = l, e[9] = z) : z = e[9];
    const q = z;
    let O;
    e[10] !== N || e[11] !== A || e[12] !== $ || e[13] !== R || e[14] !== j ? (O = {
        enabled: j,
        tabSize: R,
        viewMode: "unified",
        showLineNumbers: A,
        showPlusMinus: $,
        showAccentStrip: N,
        interactionEnabled: !1
    }, e[10] = N, e[11] = A, e[12] = $, e[13] = R, e[14] = j, e[15] = O) : O = e[15];
    const { wrapLayout: B, measureRow: V } = CGt(O), H = !_.visibleLineTokens && !s.sync;
    let Z;
    e[16] !== q || e[17] !== s.language || e[18] !== s.lineTokenizer || e[19] !== s.modified || e[20] !== s.original || e[21] !== s.precomputedLineTokens || e[22] !== H ? (Z = {
        lineTokenizer: s.lineTokenizer,
        entries: q,
        original: s.original,
        modified: s.modified,
        language: s.language,
        existingLineTokens: s.precomputedLineTokens,
        enabled: H
    }, e[16] = q, e[17] = s.language, e[18] = s.lineTokenizer, e[19] = s.modified, e[20] = s.original, e[21] = s.precomputedLineTokens, e[22] = H, e[23] = Z) : Z = e[23];
    const Y = aLe(Z) ?? C, J = s.fontSizePx, re = s.gutterFontSizePx, ne = s.lineHeightPx, ae = s.stylexStyles;
    let W;
    if (e[24] !== I || e[25] !== E || e[26] !== q || e[27] !== Y || e[28] !== N || e[29] !== A || e[30] !== $ || e[31] !== x || e[32] !== B) {
        let ce;
        e[34] !== I || e[35] !== E || e[36] !== Y || e[37] !== N || e[38] !== A || e[39] !== $ || e[40] !== x || e[41] !== B ? (ce = i((Q)=>ws(uLe, {
                entry: Q,
                visibleLineTokens: x,
                asyncLineTokens: Y,
                precomputedLineTokens: E,
                showLineNumbers: A,
                showPlusMinus: $,
                coloredLineNumbers: I,
                showAccentStrip: N,
                wrapLayout: B
            }, Q.key), "t13"), e[34] = I, e[35] = E, e[36] = Y, e[37] = N, e[38] = A, e[39] = $, e[40] = x, e[41] = B, e[42] = ce) : ce = e[42], W = q.map(ce), e[24] = I, e[25] = E, e[26] = q, e[27] = Y, e[28] = N, e[29] = A, e[30] = $, e[31] = x, e[32] = B, e[33] = W;
    } else W = e[33];
    let oe;
    return e[43] !== P || e[44] !== V || e[45] !== s.fontSizePx || e[46] !== s.gutterFontSizePx || e[47] !== s.lineHeightPx || e[48] !== s.stylexStyles || e[49] !== L || e[50] !== W || e[51] !== R || e[52] !== j ? (oe = Af(eLe, {
        className: P,
        style: L,
        fontSizePx: J,
        gutterFontSizePx: re,
        lineHeightPx: ne,
        showScrollbar: !1,
        tabSize: R,
        wordWrap: j,
        stylexStyles: ae,
        children: [
            V,
            W
        ]
    }), e[43] = P, e[44] = V, e[45] = s.fontSizePx, e[46] = s.gutterFontSizePx, e[47] = s.lineHeightPx, e[48] = s.stylexStyles, e[49] = L, e[50] = W, e[51] = R, e[52] = j, e[53] = oe) : oe = e[53], oe;
}
export function OTr(r) {
    return !sd(r.item);
}
export function zTr(r) {
    const e = My(132), { renderItems: a, diffLines: s, visibleLineTokens: l, asyncLineTokens: u, precomputedLineTokens: p, showLineNumbers: m, showPlusMinus: b, coloredLineNumbers: g, showAccentStrip: _, tabSize: v, className: x, style: C, showScrollbar: E, wordWrap: A, viewMode: $, minSplitViewWidth: I, unloadedUnchangedFetchState: N } = oLe(r);
    let R;
    e[0] !== N ? (R = i((et)=>ws(oTr, {
            state: N,
            children: et
        }), "t0"), e[0] = N, e[1] = R) : R = e[1];
    const P = R, [L, j] = MGt($, I), { expandedRenderItems: z, handleExpandUp: q, handleExpandDown: O, handleExpandAll: B } = WGt(a, s, r.expandableUnchanged ?? !1, void 0, r.onRequestExpandUnchanged);
    let V;
    e[2] !== z ? (V = TGt(z), e[2] = z, e[3] = V) : V = e[3];
    const H = V, Z = kTr(H, r, L);
    let K;
    e[4] !== Z.enabled || e[5] !== _ || e[6] !== m || e[7] !== b || e[8] !== v || e[9] !== L || e[10] !== A ? (K = {
        enabled: A,
        tabSize: v,
        viewMode: L,
        showLineNumbers: m,
        showPlusMinus: b,
        showAccentStrip: _,
        interactionEnabled: Z.enabled
    }, e[4] = Z.enabled, e[5] = _, e[6] = m, e[7] = b, e[8] = v, e[9] = L, e[10] = A, e[11] = K) : K = e[11];
    const { wrapLayout: Y, measureRow: J } = CGt(K);
    let re;
    e[12] !== H || e[13] !== L ? (re = L === "split" ? cTr(rGt(H)) : [], e[12] = H, e[13] = L, e[14] = re) : re = e[14];
    const ne = re, ae = L === "split" ? ne : H, W = !r.sync;
    let oe;
    e[15] !== r.language || e[16] !== r.lineTokenizer || e[17] !== r.modified || e[18] !== r.original || e[19] !== r.precomputedLineTokens || e[20] !== ae || e[21] !== W ? (oe = {
        lineTokenizer: r.lineTokenizer,
        entries: ae,
        original: r.original,
        modified: r.modified,
        language: r.language,
        existingLineTokens: r.precomputedLineTokens,
        enabled: W
    }, e[15] = r.language, e[16] = r.lineTokenizer, e[17] = r.modified, e[18] = r.original, e[19] = r.precomputedLineTokens, e[20] = ae, e[21] = W, e[22] = oe) : oe = e[22];
    const Q = aLe(oe) ?? u, le = Z.selectionBounds != null ? `${Z.selectionBounds.a}-${Z.selectionBounds.b}` : null;
    let he;
    e[23] !== Z.overlaySelectionActionsVisible || e[24] !== Z.rowCount || e[25] !== Z.selectionOverlaySplitPane || e[26] !== le || e[27] !== L ? (he = {
        overlaySelectionActionsVisible: Z.overlaySelectionActionsVisible,
        selectionRangeKey: le,
        rowCount: Z.rowCount,
        viewMode: L,
        selectionOverlaySplitPane: Z.selectionOverlaySplitPane
    }, e[23] = Z.overlaySelectionActionsVisible, e[24] = Z.rowCount, e[25] = Z.selectionOverlaySplitPane, e[26] = le, e[27] = L, e[28] = he) : he = e[28];
    const { scrollRootRef: me, overlayDockContentClass: be, renderOverlayDock: ue } = $Tr(he), ge = t3(r.scrollableRef);
    let _e;
    e[29] !== j || e[30] !== me || e[31] !== ge ? (_e = i((et)=>{
        me.current = et, j(et), ge.current?.(et);
    }, "t8"), e[29] = j, e[30] = me, e[31] = ge, e[32] = _e) : _e = e[32];
    const ve = _e, Se = L === "split" && Z.overlaySelectionActionsVisible ? Z.selectionOverlaySplitPane ?? "right" : null;
    if (L === "split") {
        let et;
        e[33] !== g || e[34] !== B || e[35] !== O || e[36] !== q || e[37] !== Z.enabled || e[38] !== Z.splitPaneInteraction || e[39] !== p || e[40] !== Q || e[41] !== _ || e[42] !== m || e[43] !== ne || e[44] !== l || e[45] !== Y ? (et = i((ft)=>ne.map((Ct)=>ws(VGt, {
                    entry: Ct,
                    side: ft,
                    visibleLineTokens: l,
                    asyncLineTokens: Q,
                    precomputedLineTokens: p,
                    showLineNumbers: m,
                    coloredLineNumbers: g,
                    showAccentStrip: _,
                    onExpandUp: q,
                    onExpandDown: O,
                    onExpandAll: B,
                    splitPaneInteraction: Z.enabled ? Z.splitPaneInteraction : void 0,
                    wrapLayout: Y
                }, Ct.key)), "t9"), e[33] = g, e[34] = B, e[35] = O, e[36] = q, e[37] = Z.enabled, e[38] = Z.splitPaneInteraction, e[39] = p, e[40] = Q, e[41] = _, e[42] = m, e[43] = ne, e[44] = l, e[45] = Y, e[46] = et) : et = e[46];
        const Ue = et, Be = Z.enabled && "ui-default-diff--interaction";
        let Fe;
        e[47] !== x || e[48] !== Be ? (Fe = Zr(x, Be), e[47] = x, e[48] = Be, e[49] = Fe) : Fe = e[49];
        const Je = r.fontSizePx, ee = r.gutterFontSizePx, Xe = r.lineHeightPx, We = r.stylexStyles;
        let He;
        e[50] !== Ue ? (He = Ue("left"), e[50] = Ue, e[51] = He) : He = e[51];
        let Ge;
        e[52] !== J || e[53] !== He ? (Ge = Af(w8t, {
            children: [
                J,
                He
            ]
        }), e[52] = J, e[53] = He, e[54] = Ge) : Ge = e[54];
        let at;
        e[55] !== Ue ? (at = Ue("right"), e[55] = Ue, e[56] = at) : at = e[56];
        let Le;
        e[57] !== Z.overlaySelectionActions || e[58] !== ue ? (Le = ue(Z.overlaySelectionActions), e[57] = Z.overlaySelectionActions, e[58] = ue, e[59] = Le) : Le = e[59];
        let kt;
        e[60] !== be || e[61] !== r.fontSizePx || e[62] !== r.gutterFontSizePx || e[63] !== r.lineHeightPx || e[64] !== r.stylexStyles || e[65] !== ve || e[66] !== E || e[67] !== Se || e[68] !== C || e[69] !== Fe || e[70] !== Ge || e[71] !== at || e[72] !== Le || e[73] !== v || e[74] !== A ? (kt = ws(jGt, {
            className: Fe,
            style: C,
            fontSizePx: Je,
            gutterFontSizePx: ee,
            lineHeightPx: Xe,
            showScrollbar: E,
            tabSize: v,
            wordWrap: A,
            stylexStyles: We,
            scrollableRef: ve,
            leftChildren: Ge,
            rightChildren: at,
            splitOverlayPane: Se,
            splitOverlayContentClassName: be,
            splitOverlayChildren: Le
        }), e[60] = be, e[61] = r.fontSizePx, e[62] = r.gutterFontSizePx, e[63] = r.lineHeightPx, e[64] = r.stylexStyles, e[65] = ve, e[66] = E, e[67] = Se, e[68] = C, e[69] = Fe, e[70] = Ge, e[71] = at, e[72] = Le, e[73] = v, e[74] = A, e[75] = kt) : kt = e[75];
        let Ft;
        return e[76] !== kt || e[77] !== P ? (Ft = P(kt), e[76] = kt, e[77] = P, e[78] = Ft) : Ft = e[78], Ft;
    }
    const Ne = Z.enabled && "ui-default-diff--interaction";
    let je;
    e[79] !== x || e[80] !== Ne ? (je = Zr(x, Ne), e[79] = x, e[80] = Ne, e[81] = je) : je = e[81];
    const tt = r.fontSizePx, Ke = r.gutterFontSizePx, nt = r.lineHeightPx, ut = r.stylexStyles;
    let it;
    if (e[82] !== g || e[83] !== B || e[84] !== O || e[85] !== q || e[86] !== H || e[87] !== Z.enabled || e[88] !== Z.lineInteractionForEntry || e[89] !== p || e[90] !== Q || e[91] !== _ || e[92] !== m || e[93] !== b || e[94] !== l || e[95] !== Y) {
        let et;
        e[97] !== g || e[98] !== B || e[99] !== O || e[100] !== q || e[101] !== Z.enabled || e[102] !== Z.lineInteractionForEntry || e[103] !== p || e[104] !== Q || e[105] !== _ || e[106] !== m || e[107] !== b || e[108] !== l || e[109] !== Y ? (et = i((Ue)=>ws(uLe, {
                entry: Ue,
                visibleLineTokens: l,
                asyncLineTokens: Q,
                precomputedLineTokens: p,
                showLineNumbers: m,
                showPlusMinus: b,
                coloredLineNumbers: g,
                showAccentStrip: _,
                onExpandUp: q,
                onExpandDown: O,
                onExpandAll: B,
                lineInteraction: Z.enabled ? Z.lineInteractionForEntry : void 0,
                wrapLayout: Y
            }, Ue.key), "t16"), e[97] = g, e[98] = B, e[99] = O, e[100] = q, e[101] = Z.enabled, e[102] = Z.lineInteractionForEntry, e[103] = p, e[104] = Q, e[105] = _, e[106] = m, e[107] = b, e[108] = l, e[109] = Y, e[110] = et) : et = e[110], it = H.map(et), e[82] = g, e[83] = B, e[84] = O, e[85] = q, e[86] = H, e[87] = Z.enabled, e[88] = Z.lineInteractionForEntry, e[89] = p, e[90] = Q, e[91] = _, e[92] = m, e[93] = b, e[94] = l, e[95] = Y, e[96] = it;
    } else it = e[96];
    let Ze;
    e[111] !== Z.overlaySelectionActions || e[112] !== ue ? (Ze = ue(Z.overlaySelectionActions), e[111] = Z.overlaySelectionActions, e[112] = ue, e[113] = Ze) : Ze = e[113];
    let Ie;
    e[114] !== J || e[115] !== be || e[116] !== r.fontSizePx || e[117] !== r.gutterFontSizePx || e[118] !== r.lineHeightPx || e[119] !== r.stylexStyles || e[120] !== ve || e[121] !== E || e[122] !== C || e[123] !== je || e[124] !== it || e[125] !== Ze || e[126] !== v || e[127] !== A ? (Ie = Af(eLe, {
        className: je,
        style: C,
        fontSizePx: tt,
        gutterFontSizePx: Ke,
        lineHeightPx: nt,
        showScrollbar: E,
        tabSize: v,
        wordWrap: A,
        stylexStyles: ut,
        scrollableRef: ve,
        contentClassName: be,
        children: [
            J,
            it,
            Ze
        ]
    }), e[114] = J, e[115] = be, e[116] = r.fontSizePx, e[117] = r.gutterFontSizePx, e[118] = r.lineHeightPx, e[119] = r.stylexStyles, e[120] = ve, e[121] = E, e[122] = C, e[123] = je, e[124] = it, e[125] = Ze, e[126] = v, e[127] = A, e[128] = Ie) : Ie = e[128];
    let Me;
    return e[129] !== Ie || e[130] !== P ? (Me = P(Ie), e[129] = Ie, e[130] = P, e[131] = Me) : Me = e[131], Me;
}
export function BTr(r) {
    return {
        ...r,
        highlighted: !1
    };
}
export function qTr(r) {
    return {
        ...r,
        highlighted: !1
    };
}
MY(), Ra(), ji(), Ho(), ji();
var XTr = {
    base: {
        k1xSpc: "ui-78zum5",
        kXwgrk: "ui-dt5ytf",
        kOIVth: "ui-1oot3zn",
        $$css: !0
    }
};
export function KGt() {
    return XTr.base;
}
i(KGt, "automationsSectionStyleForProps");
var YTr = {
    base: {
        k1xSpc: "ui-78zum5",
        kXwgrk: "ui-dt5ytf",
        kOIVth: "ui-137clkk",
        $$css: !0
    }
};
export function XGt() {
    return YTr.base;
}
i(XGt, "automationsSectionHeaderStyleForProps");
var JTr = {
    base: {
        keoZOQ: "ui-dj266r",
        km5ZXQ: "ui-1yf7rl7",
        k1K539: "ui-at24cr",
        koQZXg: "ui-j3b58b",
        kLKAdn: "ui-exx8yu",
        kpe85a: "ui-1yxiud8",
        kGO01o: "ui-18d9i69",
        kE3dHu: "ui-yab65l",
        kMwMTN: "ui-19aaqeu",
        kGuDYH: "ui-fifm61",
        kLWn49: "ui-1d3mw78",
        k63SB2: "ui-20ajya",
        $$css: !0
    }
};
export function YGt() {
    return JTr.base;
}
i(YGt, "automationsSectionTitleStyleForProps");
var LCi = {
    base: {
        keoZOQ: "ui-dj266r",
        km5ZXQ: "ui-1yf7rl7",
        k1K539: "ui-at24cr",
        koQZXg: "ui-j3b58b",
        kMwMTN: "ui-4b2ntj",
        kGuDYH: "ui-4z9k3i",
        kLWn49: "ui-d4r4e8",
        $$css: !0
    }
}, QTr = {
    base: {
        k1xSpc: "ui-78zum5",
        kXwgrk: "ui-dt5ytf",
        kOIVth: "ui-11twubx",
        $$css: !0
    }
};
export function e$r() {
    return QTr.base;
}
i(e$r, "automationsSectionBodyStyleForProps");
var DCi = {
    base: {
        kDCIIy: "ui-1e2jjag",
        kLF1yn: "ui-177lmp6",
        kWxm6U: "ui-1l8te3o",
        kSiWvW: "ui-1padcyd",
        $$css: !0
    }
};
export function LC() {
    return DCi.base;
}
i(LC, "automationsRowButtonStyleForProps");
export function ZP(r) {
    const e = hpi(22), { title: a, description: s, containerStyle: l, footer: u, children: p } = r;
    let m;
    e[0] === Symbol.for("react.memo_cache_sentinel") ? (m = $e({
        rootClass: "ui-automations-section",
        stylexStyles: XTr.base,
        className: "automations-section"
    }), e[0] = m) : m = e[0];
    const b = m.className;
    let g;
    e[1] === Symbol.for("react.memo_cache_sentinel") ? (g = $e({
        rootClass: "ui-automations-section-header",
        stylexStyles: YTr.base,
        className: "automations-section-header"
    }), e[1] = g) : g = e[1];
    const _ = g.className;
    let v;
    e[2] === Symbol.for("react.memo_cache_sentinel") ? (v = $e({
        rootClass: "ui-automations-section-title",
        stylexStyles: JTr.base,
        className: "automations-section-title"
    }), e[2] = v) : v = e[2];
    let x;
    e[3] !== a ? (x = _8t("h3", {
        className: v.className,
        children: a
    }), e[3] = a, e[4] = x) : x = e[4];
    let C;
    e[5] !== s ? (C = s != null && _8t("p", {
        className: $e({
            rootClass: "ui-automations-section-header-description",
            stylexStyles: LCi.base,
            className: "automations-section-header-description"
        }).className,
        children: s
    }), e[5] = s, e[6] = C) : C = e[6];
    let E;
    e[7] !== x || e[8] !== C ? (E = k8t("div", {
        className: _,
        children: [
            x,
            C
        ]
    }), e[7] = x, e[8] = C, e[9] = E) : E = e[9];
    let A;
    e[10] === Symbol.for("react.memo_cache_sentinel") ? (A = $e({
        rootClass: "ui-automations-section-body",
        stylexStyles: QTr.base,
        className: "automations-section-body"
    }), e[10] = A) : A = e[10];
    const $ = A.className;
    let I;
    e[11] !== l ? (I = wn(l), e[11] = l, e[12] = I) : I = e[12];
    let N;
    e[13] !== p || e[14] !== I ? (N = _8t("div", {
        ...I,
        children: p
    }), e[13] = p, e[14] = I, e[15] = N) : N = e[15];
    let R;
    e[16] !== u || e[17] !== N ? (R = k8t("div", {
        className: $,
        children: [
            N,
            u
        ]
    }), e[16] = u, e[17] = N, e[18] = R) : R = e[18];
    let P;
    return e[19] !== R || e[20] !== E ? (P = k8t("div", {
        className: b,
        children: [
            E,
            R
        ]
    }), e[19] = R, e[20] = E, e[21] = P) : P = e[21], P;
}
i(ZP, "AutomationSection"), Ho(), Y$e(), ji(), Ra(), Ho(), ji();
var T$ = {
    base: {
        khiITx: "ui-vmahel",
        kTUp5R: "ui-lh3980",
        k1xSpc: "ui-3nfvp2",
        kGNEyG: "ui-6s0dn4",
        kOIVth: "ui-pkkfsy",
        $$css: !0
    },
    inline: {
        k1xSpc: "ui-t0psk2",
        kLKAdn: "ui-exx8yu",
        kwRFfy: "ui-yri2b",
        kGO01o: "ui-18d9i69",
        kZCmMZ: "ui-1c1uobl",
        k8aIck: "ui-jlip5",
        kqG3fB: "ui-kyw5k8",
        $$css: !0
    },
    sizeSm: {
        kGuDYH: "ui-y5h43f",
        kLWn49: "ui-1ja60sm",
        $$css: !0
    },
    sizeMd: {
        kGuDYH: "ui-1wm8ruf",
        kLWn49: "ui-spwq11",
        $$css: !0
    },
    sizeLg: {
        kGuDYH: "ui-11wthnw",
        kLWn49: "ui-dod15v",
        $$css: !0
    },
    variantSecondary: {
        kMwMTN: "ui-19aaqeu",
        $$css: !0
    },
    variantTertiary: {
        kMwMTN: "ui-4b2ntj",
        $$css: !0
    },
    variantQuaternary: {
        kMwMTN: "ui-1e4uaio",
        $$css: !0
    }
}, FCi = {
    root: {
        k1xSpc: "ui-3nfvp2",
        kGNEyG: "ui-6s0dn4",
        kOIVth: "ui-137clkk",
        $$css: !0
    }
}, OCi = {
    root: {
        kGuDYH: "ui-1wm8ruf",
        kLWn49: "ui-1u7k74",
        kMwMTN: "ui-1e4uaio",
        $$css: !0
    }
}, dLe = {
    base: {
        k1xSpc: "ui-3nfvp2",
        kGNEyG: "ui-6s0dn4",
        kjj79g: "ui-l56j7k",
        kB7OPa: "ui-9f619",
        krdFHd: "ui-1fqc64z",
        kfmiAY: "ui-s83zq4",
        kT0f0o: "ui-t6ovg4",
        kVL7Gh: "ui-1ru8ea5",
        kLKAdn: "ui-exx8yu",
        kGO01o: "ui-18d9i69",
        k8aIck: "ui-jlip5",
        kqG3fB: "ui-kyw5k8",
        kMwMTN: "ui-19aaqeu",
        kWkggS: "ui-flfp0o",
        $$css: !0
    },
    sizeSm: {
        kzqmXN: "ui-1pwdyn5",
        kZKoxP: "ui-1vatr1o",
        kGuDYH: "ui-y5h43f",
        kLWn49: "ui-1ja60sm",
        $$css: !0
    },
    sizeMd: {
        kzqmXN: "ui-q08q9o",
        kZKoxP: "ui-jmh96e",
        kGuDYH: "ui-1wm8ruf",
        kLWn49: "ui-spwq11",
        $$css: !0
    },
    sizeLg: {
        kzqmXN: "ui-16bvwqk",
        kZKoxP: "ui-1a6rlst",
        kGuDYH: "ui-11wthnw",
        kLWn49: "ui-dod15v",
        $$css: !0
    }
}, JGt = {
    sizeSm: {
        kzqmXN: "ui-14atkfc",
        k7Eaqz: "ui-80aoqz",
        kZCmMZ: "ui-149t747",
        kwRFfy: "ui-1hcev8z",
        $$css: !0
    },
    sizeMd: {
        kzqmXN: "ui-14atkfc",
        k7Eaqz: "ui-aonyeg",
        kZCmMZ: "ui-ms6hlh",
        kwRFfy: "ui-1msowdo",
        $$css: !0
    },
    sizeLg: {
        kzqmXN: "ui-14atkfc",
        k7Eaqz: "ui-cbmsab",
        kZCmMZ: "ui-1uxnm1j",
        kwRFfy: "ui-spvr14",
        $$css: !0
    }
};
function t$r(r, e) {
    return e === "default" ? T$.base : [
        T$.base,
        T$.inline,
        a$r(r),
        o$r(e)
    ];
}
i(t$r, "kbdRootStyleForProps");
function n$r() {
    return FCi.root;
}
i(n$r, "kbdChordStyle");
function r$r() {
    return OCi.root;
}
i(r$r, "kbdChordSeparatorStyle");
function i$r({ isText: r, size: e }) {
    return [
        dLe.base,
        s$r(e),
        r ? c$r(e) : null
    ];
}
i(i$r, "kbdChipStyleForProps");
function a$r(r) {
    switch(r){
        case "sm":
            return T$.sizeSm;
        case "md":
            return T$.sizeMd;
        case "lg":
            return T$.sizeLg;
    }
}
i(a$r, "rootSizeStyleForProps");
function o$r(r) {
    switch(r){
        case "secondary":
            return T$.variantSecondary;
        case "tertiary":
            return T$.variantTertiary;
        case "quaternary":
            return T$.variantQuaternary;
    }
}
i(o$r, "rootVariantStyleForProps");
function s$r(r) {
    switch(r){
        case "sm":
            return dLe.sizeSm;
        case "md":
            return dLe.sizeMd;
        case "lg":
            return dLe.sizeLg;
    }
}
i(s$r, "chipSizeStyleForProps");
function c$r(r) {
    switch(r){
        case "sm":
            return JGt.sizeSm;
        case "md":
            return JGt.sizeMd;
        case "lg":
            return JGt.sizeLg;
    }
}
i(c$r, "chipTextStyleForProps");
function l$r(r) {
    return r !== "default";
}
i(l$r, "isInlineTextVariant");
var u$r = new Set([
    "\u2303",
    "\u21E7",
    "\u2325",
    "\u2318"
]), zCi = {
    delete: "Del",
    del: "Del",
    insert: "Ins",
    ins: "Ins",
    pageup: "PgUp",
    pagedown: "PgDn"
}, d$r = {
    up: "\u2191",
    uparrow: "\u2191",
    down: "\u2193",
    downarrow: "\u2193",
    left: "\u2190",
    leftarrow: "\u2190",
    right: "\u2192",
    rightarrow: "\u2192",
    tab: "\u21E5",
    backspace: "\u232B",
    enter: "\u23CE",
    return: "\u23CE",
    space: "\u2423"
}, BCi = new Set([
    ...u$r,
    ...Object.values(d$r)
]);
function QGt(r) {
    return BCi.has(r);
}
i(QGt, "isGlyphToken");
function pLe(r) {
    if (/^esc(ape)?$/i.test(r)) return "Esc";
    if (/^windows$/i.test(r)) return "Win";
    const e = zCi[r.toLowerCase()];
    if (e !== void 0) return e;
    const a = d$r[r.toLowerCase()];
    return a !== void 0 ? a : r;
}
i(pLe, "normalizeDisplayToken");
function p$r(r) {
    const e = [];
    let a = 0;
    for(; a < r.length;){
        const l = r[a];
        if (!u$r.has(l)) break;
        e.push(l), a += 1;
    }
    const s = r.slice(a).trim();
    return s.length > 0 && e.push(s), e.length === 0 ? [
        pLe(r)
    ] : e.map(pLe);
}
i(p$r, "parseMacChordLabel");
function m$r(r) {
    if (r.includes("+")) {
        const e = r.split("+").map((a)=>a.trim()).filter((a)=>a.length > 0);
        if (e.length > 0) return e.map(pLe);
    }
    return p$r(r);
}
i(m$r, "parseChordLabel");
function f$r(r) {
    return r.trim().split(/\s+/).map((a)=>a.trim()).filter((a)=>a.length > 0).map(m$r).filter((a)=>a.length > 0);
}
i(f$r, "parseShortcutLabel");
function h$r(r) {
    return r.length <= 1 ? r[0] ?? "" : r.slice(0, -1).every(QGt) ? r.join("") : r.join("+");
}
i(h$r, "formatPlainChord");
function g$r(r) {
    return r.map(h$r).join(" then ");
}
i(g$r, "formatPlainShortcutLabel");
function b$r(r) {
    const e = new Map, a = [];
    let s;
    for (const l of r){
        const u = l.join("-"), p = (e.get(u) ?? 0) + 1;
        e.set(u, p), s !== void 0 && (s.showThen = !0);
        const m = {
            chord: l,
            key: `${u}-${p}`,
            showThen: !1
        };
        a.push(m), s = m;
    }
    return a;
}
i(b$r, "buildRenderedChords");
export function y$r(r) {
    const e = wpi(26), { shortcut: a, size: s, variant: l, className: u } = r, p = s === void 0 ? "md" : s, m = l === void 0 ? "default" : l;
    let b, g, _, v, x, C;
    if (e[0] !== u || e[1] !== a || e[2] !== p || e[3] !== m) {
        C = Symbol.for("react.early_return_sentinel");
        e: {
            const A = f$r(a);
            if (A.length === 0) {
                C = null;
                break e;
            }
            let $;
            e[10] !== u || e[11] !== p || e[12] !== m ? ($ = $e({
                rootClass: "ui-kbd",
                stylexStyles: t$r(p, m),
                className: u
            }), e[10] = u, e[11] = p, e[12] = m, e[13] = $) : $ = e[13];
            const I = $;
            if (l$r(m)) {
                C = hpe("span", {
                    className: I.className,
                    style: I.style,
                    "data-size": p,
                    "data-variant": m,
                    children: g$r(A)
                });
                break e;
            }
            let N;
            e[14] === Symbol.for("react.memo_cache_sentinel") ? (N = wn(n$r()), e[14] = N) : N = e[14];
            const R = N;
            let P;
            e[15] === Symbol.for("react.memo_cache_sentinel") ? (P = wn(r$r()), e[15] = P) : P = e[15];
            const L = P, j = b$r(A);
            b = I.className, g = I.style, _ = p, v = m;
            let z;
            e[16] !== R || e[17] !== L || e[18] !== p ? (z = i((q)=>{
                const { chord: O, key: B, showThen: V } = q;
                return kpi(_pi, {
                    children: [
                        hpe("span", {
                            className: R.className,
                            style: R.style,
                            children: O.map((H, Z)=>{
                                const K = !QGt(H), Y = wn(i$r({
                                    isText: K,
                                    size: p
                                }));
                                return hpe("span", {
                                    className: Y.className,
                                    style: Y.style,
                                    children: H
                                }, `token-${B}-${O.slice(0, Z).join("\0")}\0${H}`);
                            })
                        }),
                        V && hpe("span", {
                            className: L.className,
                            style: L.style,
                            children: "then"
                        })
                    ]
                }, B);
            }, "t12"), e[16] = R, e[17] = L, e[18] = p, e[19] = z) : z = e[19], x = j.map(z);
        }
        e[0] = u, e[1] = a, e[2] = p, e[3] = m, e[4] = b, e[5] = g, e[6] = _, e[7] = v, e[8] = x, e[9] = C;
    } else b = e[4], g = e[5], _ = e[6], v = e[7], x = e[8], C = e[9];
    if (C !== Symbol.for("react.early_return_sentinel")) return C;
    let E;
    return e[20] !== b || e[21] !== g || e[22] !== _ || e[23] !== v || e[24] !== x ? (E = hpe("span", {
        className: b,
        style: g,
        "data-size": _,
        "data-variant": v,
        children: x
    }), e[20] = b, e[21] = g, e[22] = _, e[23] = v, e[24] = x, e[25] = E) : E = e[25], E;
}
i(y$r, "Kbd"), LY();
export var IQ = {};
ui(IQ, {
    Arrow: ()=>tNr,
    Handle: ()=>lNr,
    Popup: ()=>eNr,
    Portal: ()=>JIr,
    Positioner: ()=>QIr,
    Provider: ()=>nNr,
    Root: ()=>WIr,
    Trigger: ()=>XIr,
    Viewport: ()=>sNr,
    createHandle: ()=>uNr
}), C0();
var eWt = [], tWt = void 0;
export function w$r() {
    return tWt;
}
i(w$r, "getInstance");
export function _$r(r) {
    eWt.push(r);
}
i(_$r, "register");
export function Xge(r) {
    const e = i((a, s)=>{
        const l = eg(k$r).current;
        let u;
        try {
            tWt = l;
            for (const p of eWt)p.before(l);
            u = r(a, s);
            for (const p of eWt)p.after(l);
            l.didInitialize = !0;
        } finally{
            tWt = void 0;
        }
        return u;
    }, "FastComponent");
    return e.displayName = r.displayName || r.name, e;
}
i(Xge, "fastComponent");
export function mLe(r) {
    return vpi.forwardRef(Xge(r));
}
i(mLe, "fastComponentRef");
function k$r() {
    return {
        didInitialize: !1
    };
}
i(k$r, "createInstance"), bo();
export var nWt = vHn.createContext(void 0);
nWt.displayName = "TooltipRootContext";
export function uq(r) {
    const e = vHn.useContext(nWt);
    if (e === void 0 && !r) throw new Error("Base UI: TooltipRootContext is missing. Tooltip parts must be placed within <Tooltip.Root>.");
    return e;
}
i(uq, "useTooltipRootContext"), C0();
var qCi = [];
export function fLe(r) {
    xpi.useEffect(r, qCi);
}
i(fLe, "useOnMount");
var Yge = 0, v$r = class Vci {
    constructor(){
        Ye(this, "currentId", Yge), Ye(this, "clear", i(()=>{
            this.currentId !== Yge && (clearTimeout(this.currentId), this.currentId = Yge);
        }, "clear")), Ye(this, "disposeEffect", i(()=>this.clear, "disposeEffect"));
    }
    static create() {
        return new Vci;
    }
    start(e, a) {
        this.clear(), this.currentId = setTimeout(()=>{
            this.currentId = Yge, a();
        }, e);
    }
    isStarted() {
        return this.currentId !== Yge;
    }
};
i(v$r, "Timeout");
export var $$ = v$r;
export function jf() {
    const r = eg($$.create).current;
    return fLe(r.disposeEffect), r;
}
i(jf, "useTimeout"), bo();
export { HGt, KTr, VGt, ZGt, lq, pGt, uLe };

export var ITr = {};
Object.defineProperty(ITr, "DEFAULT_DIFF_FONT_SIZE_PX", {
    enumerable: true,
    get: ()=>HGt
});
Object.defineProperty(ITr, "DEFAULT_DIFF_GUTTER_FONT_SIZE_PX", {
    enumerable: true,
    get: ()=>ZGt
});
Object.defineProperty(ITr, "DEFAULT_DIFF_LINE_HEIGHT_PX", {
    enumerable: true,
    get: ()=>pGt
});
Object.defineProperty(ITr, "DefaultDiff", {
    enumerable: true,
    get: ()=>zTr
});
Object.defineProperty(ITr, "DefaultDiffFrame", {
    enumerable: true,
    get: ()=>eLe
});
Object.defineProperty(ITr, "DefaultDiffPreview", {
    enumerable: true,
    get: ()=>FTr
});
Object.defineProperty(ITr, "DefaultDiffRenderItem", {
    enumerable: true,
    get: ()=>uLe
});
Object.defineProperty(ITr, "EXPAND_CHUNK_SIZE", {
    enumerable: true,
    get: ()=>lq
});
Object.defineProperty(ITr, "SplitDefaultDiffRenderItem", {
    enumerable: true,
    get: ()=>KTr
});
Object.defineProperty(ITr, "SplitDiffPanesFrame", {
    enumerable: true,
    get: ()=>jGt
});
Object.defineProperty(ITr, "SplitPaneRenderItem", {
    enumerable: true,
    get: ()=>VGt
});
Object.defineProperty(ITr, "collapsedSeparatorHeightPx", {
    enumerable: true,
    get: ()=>NTr
});
Object.defineProperty(ITr, "expandRegionItems", {
    enumerable: true,
    get: ()=>GGt
});
Object.defineProperty(ITr, "formatCollapsedRegionCopyText", {
    enumerable: true,
    get: ()=>BGt
});
Object.defineProperty(ITr, "markHighlightRunBoundaries", {
    enumerable: true,
    get: ()=>tLe
});
Object.defineProperty(ITr, "useCodeLineTokenizerTokens", {
    enumerable: true,
    get: ()=>aLe
});
Object.defineProperty(ITr, "useDefaultDiffRenderState", {
    enumerable: true,
    get: ()=>oLe
});
Object.defineProperty(ITr, "useExpandableRegions", {
    enumerable: true,
    get: ()=>WGt
});
Object.defineProperty(ITr, "useSplitViewFitsContainer", {
    enumerable: true,
    get: ()=>MGt
});
