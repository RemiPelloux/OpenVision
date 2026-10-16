import { dQl, r4f } from "./HoverModelItem.js";
import { mQl } from "./LegacyModelItem.js";
import { gQl } from "./ModelButtons.js";
import { f$ } from "./ModelPickerContext.js";
import { hZe } from "./displayConfiguration.js";
import { M4t, _Ql, kS, u4f } from "./f0s.js";
import { sp } from "./icon.js";
import { fZe } from "./menu-layer-context.js";
import { WW } from "./menu_2.js";
import { g4f } from "./scroll-selected-row.js";
import { Oc } from "./stylex.js";
import { x } from "./tslib.es6.js";
import { MJ } from "./typography.stylex.js";
import { n0e } from "./variantSolver.js";
import { c as V_t } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { memo as f4f } from "./react-runtime/react/esm-index-production.js";
import { jsx as gN } from "./react-runtime/react/esm-jsx-runtime-production.js";
var RPs, wQl, CQl;
export { CQl, RPs, wQl };
var __wakaru_DPs_initialized = false;
export function DPs() {
if (__wakaru_DPs_initialized) return;
__wakaru_DPs_initialized = true;
"use strict";
x(), Oc(), MJ(), r4f(), f$(), hZe(), M4t(), n0e(), mQl(), gQl(), g4f(), WW(), sp(), fZe(), RPs = {
    usageLabel: {
        kMwMTN: "ui-4b2ntj",
        kmuXW: "ui-2lah0s",
        $$css: !0
    },
    drawerLabel: {
        kMwMTN: "ui-4b2ntj",
        $$css: !0
    }
}, wQl = [], CQl = f4f(function(t) {
    const n = V_t(44), { model: i, selection: r, rowMode: s, isAtSelectionLimit: o, canOpenHoverOptions: a, itemRef: c, getAnchorRef: l, searchQuery: u, optionsOpen: h, setOpenOptionsModelName: p } = t, { state: g, savedModelParameters: f, namedModelSelectionDisabledTooltipMarkdown: v, onInteraction: b } = kS(), y = !!r;
    let T;
    n[0] !== o || n[1] !== i || n[2] !== u || n[3] !== r ? (T = {
        model: i,
        selection: r,
        isAtSelectionLimit: o,
        searchQuery: u
    }, n[0] = o, n[1] = i, n[2] = u, n[3] = r, n[4] = T) : T = n[4];
    const { modelParams: E, variant: A, isModelDisabled: R, disabledBySelectionLimit: D, ensureModelSelected: P, handleModelSelect: N } = _Ql(T);
    let O;
    n[5] !== l || n[6] !== i.name ? (O = l(i.name), n[5] = l, n[6] = i.name, n[7] = O) : O = n[7];
    const F = O;
    let H;
    n[8] !== c || n[9] !== i.name ? (H = (ee)=>{
        c(i.name, ee);
    }, n[8] = c, n[9] = i.name, n[10] = H) : H = n[10];
    const $ = H;
    let W;
    n[11] !== P || n[12] !== i.name || n[13] !== b ? (W = ()=>P(!1) === "blocked" ? !1 : (b?.({
            kind: "modelOptionsOpened",
            modelId: i.name
        }), !0), n[11] = P, n[12] = i.name, n[13] = b, n[14] = W) : W = n[14];
    const G = W;
    let q;
    n[15] !== i.name || n[16] !== p ? (q = (ee)=>{
        p((se)=>ee ? i.name : se === i.name ? null : se);
    }, n[15] = i.name, n[16] = p, n[17] = q) : q = n[17];
    const z = q, X = (f?.[i.name]?.length ?? 0) > 0 || (r?.parameters.length ?? 0) > 0;
    let Y;
    n[18] !== a || n[19] !== R || n[20] !== y || n[21] !== i ? (Y = !R && a(i, y), n[18] = a, n[19] = R, n[20] = y, n[21] = i, n[22] = Y) : Y = n[22];
    const Z = Y, K = v, J = v !== void 0;
    let ne;
    return n[23] !== F || n[24] !== D || n[25] !== K || n[26] !== G || n[27] !== N || n[28] !== z || n[29] !== X || n[30] !== Z || n[31] !== R || n[32] !== y || n[33] !== J || n[34] !== i || n[35] !== E || n[36] !== h || n[37] !== s || n[38] !== u || n[39] !== r?.count || n[40] !== $ || n[41] !== g.multiModelMode || n[42] !== A ? (ne = s === "hover-options" ? gN(dQl, {
        model: i,
        variant: A,
        isSelected: y,
        multiModelMode: g.multiModelMode,
        count: r?.count ?? 1,
        parameters: E,
        itemRef: $,
        anchorRef: F,
        isDisabled: R,
        disabled: (J ? !1 : R) || D,
        onSelect: N,
        onOpenOptions: G,
        optionsOpen: h,
        onOptionsOpenChange: z,
        hoverOptionsEnabled: Z,
        hasSavedParameters: X,
        searchQuery: u,
        tooltipMarkdown: K
    }) : gN(u4f, {
        model: i,
        variant: A,
        isSelected: y,
        multiModelMode: g.multiModelMode,
        count: r?.count ?? 1,
        parameters: E,
        itemRef: $,
        anchorRef: F,
        isDisabled: R,
        disabled: (J ? !1 : R) || D,
        onSelect: N,
        onEdit: G,
        hasSavedParameters: X,
        searchQuery: u,
        tooltipOverride: K,
        hideOptionsEdit: s === "no-options"
    }), n[23] = F, n[24] = D, n[25] = K, n[26] = G, n[27] = N, n[28] = z, n[29] = X, n[30] = Z, n[31] = R, n[32] = y, n[33] = J, n[34] = i, n[35] = E, n[36] = h, n[37] = s, n[38] = u, n[39] = r?.count, n[40] = $, n[41] = g.multiModelMode, n[42] = A, n[43] = ne) : ne = n[43], ne;
});

}
