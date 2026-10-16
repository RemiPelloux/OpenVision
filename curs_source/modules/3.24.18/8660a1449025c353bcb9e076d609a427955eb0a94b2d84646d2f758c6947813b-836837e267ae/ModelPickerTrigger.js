import { P0 } from "./Button_3.js";
import { An, ao, ar, zt } from "./LYd.js";
import { JY } from "./ModelPickerContext.js";
import { $he } from "./ModelPickerMarkdown.js";
import { qu } from "./attach.js";
import { fd } from "./icon.js";
import { Bop, Ddp, Fjt, Me1, N4, Pe1, WTa } from "./ipa.js";
import { hL, xs } from "./tooltip.js";
import { E } from "./tslib.es6.js";
import { VFe } from "./variantSolver.js";
import { jsxs as Ae1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { memo as Mdp } from "./react-runtime/react/esm-index-production.js";
import { c as Pdp } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as Re1 } from "./react-runtime/react/esm-index-production.js";
import { jsx as SGe } from "./react-runtime/react/esm-jsx-runtime-production.js";
var C7r, a6e, Ndp, qTa, twn;
export { C7r, Ndp, a6e, qTa, twn };
var __wakaru_Ldp_initialized = false;
export function Ldp() {
if (__wakaru_Ldp_initialized) return;
__wakaru_Ldp_initialized = true;
"use strict";
E(), JY(), VFe(), $he(), qu(), fd(), P0(), hL(), C7r = {
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
}, a6e = {
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
}, Ndp = {
    p: a6e.markdownLabelParagraph
}, qTa = Mdp(function(e) {
    const n = Pdp(5), { displayName: i, inheritColor: r } = e, o = (r === void 0 ? !1 : r) && a6e.markdownInheritColor;
    let a;
    n[0] !== o ? (a = [
        a6e.nonSelectableLabel,
        a6e.markdownFill,
        o
    ], n[0] = o, n[1] = a) : a = n[1];
    let l;
    return n[2] !== i || n[3] !== a ? (l = SGe(N4, {
        singleLine: !0,
        generatedChildStyles: Ndp,
        stylexStyles: a,
        children: i
    }), n[2] = i, n[3] = a, n[4] = l) : l = n[4], l;
}), twn = Mdp(function(e) {
    const n = Pdp(61), { displayName: i, buttonVariant: r, size: s, rounded: o, appearance: a, showChevron: l, splitVariantDetail: c, chevronSize: u, triggerProps: d, triggerStyle: h, triggerTextStyle: p, ref: g, useBaseModelDisplayName: f, tooltipTitle: _, tooltipShortcut: b, tooltipShortcutRows: y, tooltipPlacement: S } = e, k = r === void 0 ? "ghost" : r, C = s === void 0 ? "sm" : s, T = a === void 0 ? "default" : a, I = l === void 0 ? !0 : l, A = c === void 0 ? !1 : c, P = u === void 0 ? 9 : u, M = f === void 0 ? !1 : f, O = S === void 0 ? "bottom" : S, N = Bop();
    let U, j;
    n[0] !== N || n[1] !== i || n[2] !== A || n[3] !== M ? (i !== void 0 ? U = i : N ? U = Me1(N.state, N.models, M) : U = "Select model", j = A && N !== null && N.state.selections.length > 0 ? Pe1(U, Fjt(N.state.selections[0], N.models)) : void 0, n[0] = N, n[1] = i, n[2] = A, n[3] = M, n[4] = U, n[5] = j) : (U = n[4], j = n[5]);
    const $ = j, H = $ ? U : void 0, G = h != null && h !== !1;
    let q;
    n[6] !== T ? (q = WTa(T), n[6] = T, n[7] = q) : q = n[7];
    const K = q;
    let V;
    n[8] !== G ? (V = ar({
        rootClass: "ui-model-picker__trigger",
        stylexStyles: G ? !1 : Ddp()
    }), n[8] = G, n[9] = V) : V = n[9];
    const Y = V, J = T === "input-shell" && a6e.textInputShell;
    let Q;
    n[10] !== J || n[11] !== p ? (Q = ar({
        rootClass: "ui-model-picker__trigger-text",
        stylexStyles: [
            a6e.text,
            J,
            p
        ]
    }), n[10] = J, n[11] = p, n[12] = Q) : Q = n[12];
    const te = Q, ee = T === "input-shell" && a6e.chevronInputShell;
    let re;
    n[13] !== ee ? (re = ar({
        rootClass: "ui-model-picker__trigger-chevron",
        stylexStyles: [
            a6e.chevron,
            ee
        ]
    }), n[13] = ee, n[14] = re) : re = n[14];
    const ie = re;
    let oe;
    n[15] === Symbol.for("react.memo_cache_sentinel") ? (oe = ar({
        rootClass: "ui-model-picker__trigger-variant-suffix",
        stylexStyles: a6e.variantSuffix
    }), n[15] = oe) : oe = n[15];
    const se = oe, [le, ce] = Re1(!1), ae = d?.onPointerMove, de = d?.onPointerLeave;
    let he;
    n[16] !== ae ? (he = ($e)=>{
        ae?.($e), ce(!0);
    }, n[16] = ae, n[17] = he) : he = n[17];
    const ge = he;
    let pe;
    n[18] !== de ? (pe = ($e)=>{
        de?.($e), ce(!1);
    }, n[18] = de, n[19] = pe) : pe = n[19];
    const ve = pe;
    let fe;
    n[20] !== K || n[21] !== G || n[22] !== h ? (fe = G ? [
        Ddp(),
        K,
        h
    ] : K, n[20] = K, n[21] = G, n[22] = h, n[23] = fe) : fe = n[23];
    const Te = le ? !0 : void 0, _e = $?.name ?? U, Ce = $?.name ?? U;
    let Se;
    n[24] !== _e || n[25] !== Ce ? (Se = SGe(qTa, {
        displayName: Ce,
        inheritColor: !0
    }, _e), n[24] = _e, n[25] = Ce, n[26] = Se) : Se = n[26];
    let Pe;
    n[27] !== Se || n[28] !== te.className || n[29] !== te.style ? (Pe = SGe("span", {
        className: te.className,
        style: te.style,
        children: Se
    }), n[27] = Se, n[28] = te.className, n[29] = te.style, n[30] = Pe) : Pe = n[30];
    let we;
    n[31] !== $ ? (we = $ && SGe("span", {
        className: se.className,
        style: se.style,
        children: SGe(qTa, {
            displayName: $.detail
        }, $.detail)
    }), n[31] = $, n[32] = we) : we = n[32];
    let Ie;
    n[33] !== ie || n[34] !== P || n[35] !== I ? (Ie = I && SGe(zt, {
        name: "chevron-down",
        size: P,
        className: ie.className,
        style: ie.style
    }), n[33] = ie, n[34] = P, n[35] = I, n[36] = Ie) : Ie = n[36];
    let Me;
    n[37] !== k || n[38] !== ve || n[39] !== ge || n[40] !== g || n[41] !== o || n[42] !== C || n[43] !== H || n[44] !== fe || n[45] !== Te || n[46] !== Pe || n[47] !== we || n[48] !== Ie || n[49] !== Y.className || n[50] !== Y.style || n[51] !== d ? (Me = Ae1(An, {
        ref: g,
        variant: k,
        size: C,
        rounded: o,
        rootStyle: fe,
        className: Y.className,
        style: Y.style,
        "aria-label": H,
        ...d,
        "data-pointer-hover-intent": Te,
        onPointerLeave: ve,
        onPointerMove: ge,
        children: [
            Pe,
            we,
            Ie
        ]
    }), n[37] = k, n[38] = ve, n[39] = ge, n[40] = g, n[41] = o, n[42] = C, n[43] = H, n[44] = fe, n[45] = Te, n[46] = Pe, n[47] = we, n[48] = Ie, n[49] = Y.className, n[50] = Y.style, n[51] = d, n[52] = Me) : Me = n[52];
    const De = Me;
    if (!_ && !b && !y?.length) return De;
    let Ne;
    n[53] !== b || n[54] !== y || n[55] !== _ ? (Ne = y?.length ? SGe(ao, {
        shortcutRows: y,
        title: _
    }) : b ? SGe(ao, {
        shortcut: b,
        title: _
    }) : SGe(ao, {
        title: _
    }), n[53] = b, n[54] = y, n[55] = _, n[56] = Ne) : Ne = n[56];
    const be = Ne;
    let je;
    return n[57] !== be || n[58] !== O || n[59] !== De ? (je = SGe(xs, {
        content: be,
        offset: 6,
        placement: O,
        sameAxisOnly: !0,
        children: De
    }), n[57] = be, n[58] = O, n[59] = De, n[60] = je) : je = n[60], je;
});

}
