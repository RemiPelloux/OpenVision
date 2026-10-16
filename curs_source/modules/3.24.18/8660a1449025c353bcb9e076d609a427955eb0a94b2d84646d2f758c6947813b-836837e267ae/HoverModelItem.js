import { s2e } from "./Checkbox.js";
import { Wj } from "./DirectionContext.js";
import { kXS } from "./HoverOptionsSubmenu.js";
import { ICa } from "./ModelItemRow.js";
import { a8r, w$t } from "./ModelPicker.types.js";
import { JY } from "./ModelPickerContext.js";
import { $he } from "./ModelPickerMarkdown.js";
import { ijt } from "./inline-direction.js";
import { EXS, TXS, Zop, nw, pXS } from "./ipa.js";
import { aJ, cl } from "./menu_2.js";
import { B0a } from "./modelTooltip.js";
import { E } from "./tslib.es6.js";
import { memo as CXS } from "./react-runtime/react/esm-index-production.js";
import { jsx as I0e } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as NCa } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsxs as wXS } from "./react-runtime/react/esm-jsx-runtime-production.js";
var $lp;
export { $lp };
var __wakaru_IXS_initialized = false;
export function IXS() {
if (__wakaru_IXS_initialized) return;
__wakaru_IXS_initialized = true;
"use strict";
E(), ijt(), ICa(), $he(), a8r(), JY(), B0a(), kXS(), aJ(), s2e(), Wj(), $lp = CXS(function(e) {
    const n = NCa(41), { model: i, variant: r, isSelected: s, multiModelMode: o, count: a, parameters: l, itemRef: c, anchorRef: u, isDisabled: d, disabled: h, onSelect: p, onOpenOptions: g, optionsOpen: f, onOptionsOpenChange: _, hoverOptionsEnabled: b, hasSavedParameters: y, searchQuery: S, tooltipMarkdown: k } = e, C = h === void 0 ? !1 : h, T = y === void 0 ? !1 : y, { state: I } = nw();
    if (!b) {
        let O;
        n[0] !== i || n[1] !== I || n[2] !== k ? (O = k ?? Zop(i, I.maxMode), n[0] = i, n[1] = I, n[2] = k, n[3] = O) : O = n[3];
        let N;
        return n[4] !== u || n[5] !== a || n[6] !== C || n[7] !== d || n[8] !== s || n[9] !== c || n[10] !== i || n[11] !== o || n[12] !== p || n[13] !== S || n[14] !== O || n[15] !== r ? (N = I0e(TXS, {
            model: i,
            variant: r,
            isSelected: s,
            multiModelMode: o,
            count: a,
            itemRef: c,
            anchorRef: u,
            isDisabled: d,
            disabled: C,
            onSelect: p,
            searchQuery: S,
            tooltipMarkdown: O
        }), n[4] = u, n[5] = a, n[6] = C, n[7] = d, n[8] = s, n[9] = c, n[10] = i, n[11] = o, n[12] = p, n[13] = S, n[14] = O, n[15] = r, n[16] = N) : N = n[16], N;
    }
    let A;
    n[17] !== a || n[18] !== C || n[19] !== d || n[20] !== s || n[21] !== c || n[22] !== i || n[23] !== o || n[24] !== g || n[25] !== p || n[26] !== S || n[27] !== r ? (A = I0e(EXS, {
        model: i,
        variant: r,
        isSelected: s,
        multiModelMode: o,
        count: a,
        itemRef: c,
        isDisabled: d,
        disabled: C,
        onSelect: p,
        onOpenOptions: g,
        searchQuery: S
    }), n[17] = a, n[18] = C, n[19] = d, n[20] = s, n[21] = c, n[22] = i, n[23] = o, n[24] = g, n[25] = p, n[26] = S, n[27] = r, n[28] = A) : A = n[28];
    let P;
    n[29] !== T || n[30] !== i || n[31] !== f || n[32] !== l || n[33] !== k || n[34] !== r ? (P = f && I0e(cl.SubMenuContent, {
        "aria-label": `${i.name} parameters`,
        "data-testid": "parameter-submenu",
        minWidth: w$t,
        maxWidth: w$t,
        children: I0e(pXS, {
            model: i,
            parameters: l,
            variant: r,
            hasSavedParameters: T,
            tooltipOverride: k
        })
    }), n[29] = T, n[30] = i, n[31] = f, n[32] = l, n[33] = k, n[34] = r, n[35] = P) : P = n[35];
    let M;
    return n[36] !== _ || n[37] !== f || n[38] !== A || n[39] !== P ? (M = wXS(cl.SubMenu, {
        trigger: "hover",
        hoverOpenDelay: 0,
        placement: "right",
        closeOnSelect: !1,
        open: f,
        onOpenChange: _,
        dismissOnReferenceScroll: !0,
        children: [
            A,
            P
        ]
    }), n[36] = _, n[37] = f, n[38] = A, n[39] = P, n[40] = M) : M = n[40], M;
});

}
