import { $lp, IXS } from "./HoverModelItem.js";
import { Glp } from "./LegacyModelItem.js";
import { qlp } from "./ModelButtons.js";
import { JY } from "./ModelPickerContext.js";
import { Drt } from "./displayConfiguration.js";
import { fd } from "./icon.js";
import { DXS, Klp, Tkn, nw } from "./ipa.js";
import { awt } from "./menu-layer-context.js";
import { aJ } from "./menu_2.js";
import { BXS } from "./scroll-selected-row.js";
import { Va } from "./stylex.js";
import { E } from "./tslib.es6.js";
import { P7 } from "./typography.stylex.js";
import { VFe } from "./variantSolver.js";
import { c as R$t } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { memo as UXS } from "./react-runtime/react/esm-index-production.js";
import { jsx as m6 } from "./react-runtime/react/esm-jsx-runtime-production.js";
var jCa, Jlp, ecp;
export { Jlp, ecp, jCa };
var __wakaru_$Ca_initialized = false;
export function $Ca() {
if (__wakaru_$Ca_initialized) return;
__wakaru_$Ca_initialized = true;
"use strict";
E(), Va(), P7(), IXS(), JY(), Drt(), Tkn(), VFe(), Glp(), qlp(), BXS(), aJ(), fd(), awt(), jCa = {
    usageLabel: {
        kMwMTN: "ui-4b2ntj",
        kmuXW: "ui-2lah0s",
        $$css: !0
    },
    drawerLabel: {
        kMwMTN: "ui-4b2ntj",
        $$css: !0
    }
}, Jlp = [], ecp = UXS(function(e) {
    const n = R$t(44), { model: i, selection: r, rowMode: s, isAtSelectionLimit: o, canOpenHoverOptions: a, itemRef: l, getAnchorRef: c, searchQuery: u, optionsOpen: d, setOpenOptionsModelName: h } = e, { state: p, savedModelParameters: g, namedModelSelectionDisabledTooltipMarkdown: f, onInteraction: _ } = nw(), b = !!r;
    let y;
    n[0] !== o || n[1] !== i || n[2] !== u || n[3] !== r ? (y = {
        model: i,
        selection: r,
        isAtSelectionLimit: o,
        searchQuery: u
    }, n[0] = o, n[1] = i, n[2] = u, n[3] = r, n[4] = y) : y = n[4];
    const { modelParams: S, variant: k, isModelDisabled: C, disabledBySelectionLimit: T, ensureModelSelected: I, handleModelSelect: A } = Klp(y);
    let P;
    n[5] !== c || n[6] !== i.name ? (P = c(i.name), n[5] = c, n[6] = i.name, n[7] = P) : P = n[7];
    const M = P;
    let O;
    n[8] !== l || n[9] !== i.name ? (O = (Q)=>{
        l(i.name, Q);
    }, n[8] = l, n[9] = i.name, n[10] = O) : O = n[10];
    const N = O;
    let U;
    n[11] !== I || n[12] !== i.name || n[13] !== _ ? (U = ()=>I(!1) === "blocked" ? !1 : (_?.({
            kind: "modelOptionsOpened",
            modelId: i.name
        }), !0), n[11] = I, n[12] = i.name, n[13] = _, n[14] = U) : U = n[14];
    const j = U;
    let $;
    n[15] !== i.name || n[16] !== h ? ($ = (Q)=>{
        h((te)=>Q ? i.name : te === i.name ? null : te);
    }, n[15] = i.name, n[16] = h, n[17] = $) : $ = n[17];
    const H = $, G = (g?.[i.name]?.length ?? 0) > 0 || (r?.parameters.length ?? 0) > 0;
    let q;
    n[18] !== a || n[19] !== C || n[20] !== b || n[21] !== i ? (q = !C && a(i, b), n[18] = a, n[19] = C, n[20] = b, n[21] = i, n[22] = q) : q = n[22];
    const K = q, V = f, Y = f !== void 0;
    let J;
    return n[23] !== M || n[24] !== T || n[25] !== V || n[26] !== j || n[27] !== A || n[28] !== H || n[29] !== G || n[30] !== K || n[31] !== C || n[32] !== b || n[33] !== Y || n[34] !== i || n[35] !== S || n[36] !== d || n[37] !== s || n[38] !== u || n[39] !== r?.count || n[40] !== N || n[41] !== p.multiModelMode || n[42] !== k ? (J = s === "hover-options" ? m6($lp, {
        model: i,
        variant: k,
        isSelected: b,
        multiModelMode: p.multiModelMode,
        count: r?.count ?? 1,
        parameters: S,
        itemRef: N,
        anchorRef: M,
        isDisabled: C,
        disabled: (Y ? !1 : C) || T,
        onSelect: A,
        onOpenOptions: j,
        optionsOpen: d,
        onOptionsOpenChange: H,
        hoverOptionsEnabled: K,
        hasSavedParameters: G,
        searchQuery: u,
        tooltipMarkdown: V
    }) : m6(DXS, {
        model: i,
        variant: k,
        isSelected: b,
        multiModelMode: p.multiModelMode,
        count: r?.count ?? 1,
        parameters: S,
        itemRef: N,
        anchorRef: M,
        isDisabled: C,
        disabled: (Y ? !1 : C) || T,
        onSelect: A,
        onEdit: j,
        hasSavedParameters: G,
        searchQuery: u,
        tooltipOverride: V,
        hideOptionsEdit: s === "no-options"
    }), n[23] = M, n[24] = T, n[25] = V, n[26] = j, n[27] = A, n[28] = H, n[29] = G, n[30] = K, n[31] = C, n[32] = b, n[33] = Y, n[34] = i, n[35] = S, n[36] = d, n[37] = s, n[38] = u, n[39] = r?.count, n[40] = N, n[41] = p.multiModelMode, n[42] = k, n[43] = J) : J = n[43], J;
});

}
