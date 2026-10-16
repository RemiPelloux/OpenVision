import { mC } from "./Button_2.js";
import { f$ } from "./ModelPickerContext.js";
import { see } from "./ModelPickerMarkdown.js";
import { hh } from "./attach.js";
import { B1n, B3, C$f, Geu, HBf, T$f, Veu } from "./f0s.js";
import { sp } from "./icon.js";
import { Or, Ti, ds, ly } from "./qIc.js";
import { HO, fp } from "./tooltip.js";
import { x } from "./tslib.es6.js";
import { n0e } from "./variantSolver.js";
import { c as Heu } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { memo as Weu } from "./react-runtime/react/esm-index-production.js";
import { jsx as YDe } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as k$f } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useState as w$f } from "./react-runtime/react/esm-index-production.js";
var oOi, d0e, qeu, OLs, zeu;
export { OLs, d0e, oOi, qeu, zeu };
var __wakaru_Keu_initialized = false;
export function Keu() {
if (__wakaru_Keu_initialized) return;
__wakaru_Keu_initialized = true;
"use strict";
x(), f$(), n0e(), see(), hh(), sp(), mC(), HO(), oOi = {
    root: {
        k7Eaqz: "ui-euugli",
        ks0D6T: "ui-193iq5w",
        kXHlph: "ui-6ikm8r",
        kORKVm: "ui-10wlt62",
        kIyJzY: "ui-1mq3mr6",
        kUc0BD: "ui-dkle49",
        kTfgSJ: "ui-16luo3s",
        kOU3i8: "ui-vozgur",
        kUFls1: "ui-d4rl0y",
        kutJ1w: "ui-1kdf429",
        keymZJ: "ui-axczk3",
        $$css: !0
    },
    prompt: {
        kZKoxP: "ui-1m1144u",
        kZCmMZ: "ui-22095l",
        kwRFfy: "ui-19bzwdx",
        kaIpWk: "ui-1i4c3av",
        $$css: !0
    },
    inputShell: {
        kzqmXN: "ui-h8yej3",
        kZKoxP: "ui-5yr21d",
        kLKAdn: "ui-exx8yu",
        kwRFfy: "ui-1fg0g13",
        kGO01o: "ui-18d9i69",
        kZCmMZ: "ui-1tajz9i",
        kMzoRj: "ui-c342km",
        kaIpWk: "ui-2u8bby",
        kWkggS: "ui-jbqb8w",
        kMwMTN: "ui-15rks2t",
        kGuDYH: "ui-1qlqyl8",
        kjj79g: "ui-1qughib",
        kMeerF: "ui-1k57tk5",
        k3XXqK: "ui-1t137rt",
        kInvED: "ui-1wfwxd8",
        kjBf7l: "ui-1uczgqu",
        kTfgSJ: "ui-zc49ma",
        $$css: !0
    }
}, d0e = {
    text: {
        k1xSpc: "ui-3nfvp2",
        kGNEyG: "ui-6s0dn4",
        kXHlph: "ui-6ikm8r",
        kORKVm: "ui-10wlt62",
        $$css: !0
    },
    textInputShell: {
        kzQI83: "ui-1iyjqo2",
        kmuXW: "ui-s83m0k",
        kCS8Yb: "ui-1t1x2f9",
        k7Eaqz: "ui-euugli",
        k9WMMc: "ui-1yc453h",
        khDVqt: "ui-uxw1ft",
        kg5iWk: "ui-lyipyv",
        $$css: !0
    },
    variantSuffix: {
        k1xSpc: "ui-3nfvp2",
        kGNEyG: "ui-6s0dn4",
        kmuXW: "ui-2lah0s",
        khDVqt: "ui-uxw1ft",
        $$css: !0
    },
    chevron: {
        kmuXW: "ui-2lah0s",
        kSiTet: "ui-1ks1olk ui-14o0w9m",
        k1ekBW: "ui-19991ni",
        kIyJzY: "ui-x6bhzk",
        kAMwcw: "ui-wji4o3",
        keTefX: "ui-mtumec",
        $$css: !0
    },
    chevronInputShell: {
        kSiTet: "ui-1ks1olk",
        keTefX: "ui-1gk5ko7",
        $$css: !0
    },
    nonSelectableLabel: {
        kfSwDN: "ui-87ps6o",
        $$css: !0
    },
    markdownFill: {
        kzqmXN: "ui-h8yej3",
        $$css: !0
    },
    markdownInheritColor: {
        kMwMTN: "ui-1heor9g",
        $$css: !0
    },
    markdownLabelParagraph: {
        keoZOQ: "ui-dj266r",
        k71WvV: "ui-14z9mp",
        k1K539: "ui-at24cr",
        keTefX: "ui-1lziwak",
        $$css: !0
    }
}, qeu = {
    p: d0e.markdownLabelParagraph
}, OLs = Weu(function(t) {
    const n = Heu(5), { displayName: i, inheritColor: r } = t, o = (r === void 0 ? !1 : r) && d0e.markdownInheritColor;
    let a;
    n[0] !== o ? (a = [
        d0e.nonSelectableLabel,
        d0e.markdownFill,
        o
    ], n[0] = o, n[1] = a) : a = n[1];
    let c;
    return n[2] !== i || n[3] !== a ? (c = YDe(B3, {
        singleLine: !0,
        generatedChildStyles: qeu,
        stylexStyles: a,
        children: i
    }), n[2] = i, n[3] = a, n[4] = c) : c = n[4], c;
}), zeu = Weu(function(t) {
    const n = Heu(61), { displayName: i, buttonVariant: r, size: s, rounded: o, appearance: a, showChevron: c, splitVariantDetail: l, chevronSize: u, triggerProps: h, triggerStyle: p, triggerTextStyle: g, ref: f, useBaseModelDisplayName: v, tooltipTitle: b, tooltipShortcut: y, tooltipShortcutRows: T, tooltipPlacement: E } = t, A = r === void 0 ? "ghost" : r, R = s === void 0 ? "sm" : s, D = a === void 0 ? "default" : a, P = c === void 0 ? !0 : c, N = l === void 0 ? !1 : l, O = u === void 0 ? 9 : u, F = v === void 0 ? !1 : v, H = E === void 0 ? "bottom" : E, $ = HBf();
    let W, G;
    n[0] !== $ || n[1] !== i || n[2] !== N || n[3] !== F ? (i !== void 0 ? W = i : $ ? W = T$f($.state, $.models, F) : W = "Select model", G = N && $ !== null && $.state.selections.length > 0 ? C$f(W, B1n($.state.selections[0], $.models)) : void 0, n[0] = $, n[1] = i, n[2] = N, n[3] = F, n[4] = W, n[5] = G) : (W = n[4], G = n[5]);
    const q = G, z = q ? W : void 0, X = p != null && p !== !1;
    let Y;
    n[6] !== D ? (Y = Veu(D), n[6] = D, n[7] = Y) : Y = n[7];
    const Z = Y;
    let K;
    n[8] !== X ? (K = Or({
        rootClass: "ui-model-picker__trigger",
        stylexStyles: X ? !1 : Geu()
    }), n[8] = X, n[9] = K) : K = n[9];
    const J = K, ne = D === "input-shell" && d0e.textInputShell;
    let ee;
    n[10] !== ne || n[11] !== g ? (ee = Or({
        rootClass: "ui-model-picker__trigger-text",
        stylexStyles: [
            d0e.text,
            ne,
            g
        ]
    }), n[10] = ne, n[11] = g, n[12] = ee) : ee = n[12];
    const se = ee, re = D === "input-shell" && d0e.chevronInputShell;
    let ue;
    n[13] !== re ? (ue = Or({
        rootClass: "ui-model-picker__trigger-chevron",
        stylexStyles: [
            d0e.chevron,
            re
        ]
    }), n[13] = re, n[14] = ue) : ue = n[14];
    const ce = ue;
    let de;
    n[15] === Symbol.for("react.memo_cache_sentinel") ? (de = Or({
        rootClass: "ui-model-picker__trigger-variant-suffix",
        stylexStyles: d0e.variantSuffix
    }), n[15] = de) : de = n[15];
    const le = de, [ye, _e] = w$f(!1), me = h?.onPointerMove, Ce = h?.onPointerLeave;
    let xe;
    n[16] !== me ? (xe = (ut)=>{
        me?.(ut), _e(!0);
    }, n[16] = me, n[17] = xe) : xe = n[17];
    const Le = xe;
    let Be;
    n[18] !== Ce ? (Be = (ut)=>{
        Ce?.(ut), _e(!1);
    }, n[18] = Ce, n[19] = Be) : Be = n[19];
    const je = Be;
    let Ge;
    n[20] !== Z || n[21] !== X || n[22] !== p ? (Ge = X ? [
        Geu(),
        Z,
        p
    ] : Z, n[20] = Z, n[21] = X, n[22] = p, n[23] = Ge) : Ge = n[23];
    const Xe = ye ? !0 : void 0, Ke = q?.name ?? W, et = q?.name ?? W;
    let We;
    n[24] !== Ke || n[25] !== et ? (We = YDe(OLs, {
        displayName: et,
        inheritColor: !0
    }, Ke), n[24] = Ke, n[25] = et, n[26] = We) : We = n[26];
    let it;
    n[27] !== We || n[28] !== se.className || n[29] !== se.style ? (it = YDe("span", {
        className: se.className,
        style: se.style,
        children: We
    }), n[27] = We, n[28] = se.className, n[29] = se.style, n[30] = it) : it = n[30];
    let Ne;
    n[31] !== q ? (Ne = q && YDe("span", {
        className: le.className,
        style: le.style,
        children: YDe(OLs, {
            displayName: q.detail
        }, q.detail)
    }), n[31] = q, n[32] = Ne) : Ne = n[32];
    let Fe;
    n[33] !== ce || n[34] !== O || n[35] !== P ? (Fe = P && YDe(Ti, {
        name: "chevron-down",
        size: O,
        className: ce.className,
        style: ce.style
    }), n[33] = ce, n[34] = O, n[35] = P, n[36] = Fe) : Fe = n[36];
    let Qe;
    n[37] !== A || n[38] !== je || n[39] !== Le || n[40] !== f || n[41] !== o || n[42] !== R || n[43] !== z || n[44] !== Ge || n[45] !== Xe || n[46] !== it || n[47] !== Ne || n[48] !== Fe || n[49] !== J.className || n[50] !== J.style || n[51] !== h ? (Qe = k$f(ds, {
        ref: f,
        variant: A,
        size: R,
        rounded: o,
        rootStyle: Ge,
        className: J.className,
        style: J.style,
        "aria-label": z,
        ...h,
        "data-pointer-hover-intent": Xe,
        onPointerLeave: je,
        onPointerMove: Le,
        children: [
            it,
            Ne,
            Fe
        ]
    }), n[37] = A, n[38] = je, n[39] = Le, n[40] = f, n[41] = o, n[42] = R, n[43] = z, n[44] = Ge, n[45] = Xe, n[46] = it, n[47] = Ne, n[48] = Fe, n[49] = J.className, n[50] = J.style, n[51] = h, n[52] = Qe) : Qe = n[52];
    const tt = Qe;
    if (!b && !y && !T?.length) return tt;
    let st;
    n[53] !== y || n[54] !== T || n[55] !== b ? (st = T?.length ? YDe(ly, {
        shortcutRows: T,
        title: b
    }) : y ? YDe(ly, {
        shortcut: y,
        title: b
    }) : YDe(ly, {
        title: b
    }), n[53] = y, n[54] = T, n[55] = b, n[56] = st) : st = n[56];
    const vt = st;
    let ht;
    return n[57] !== vt || n[58] !== H || n[59] !== tt ? (ht = YDe(fp, {
        content: vt,
        offset: 6,
        placement: H,
        sameAxisOnly: !0,
        children: tt
    }), n[57] = vt, n[58] = H, n[59] = tt, n[60] = ht) : ht = n[60], ht;
});

}
