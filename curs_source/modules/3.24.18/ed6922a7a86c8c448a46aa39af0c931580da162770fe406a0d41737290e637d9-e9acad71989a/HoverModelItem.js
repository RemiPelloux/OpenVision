import { eve } from "./Checkbox.js";
import { yU } from "./DirectionContext.js";
import { J6f } from "./HoverOptionsSubmenu.js";
import { vPs } from "./ModelItemRow.js";
import { JNi, U_t } from "./ModelPicker.types.js";
import { f$ } from "./ModelPickerContext.js";
import { see } from "./ModelPickerMarkdown.js";
import { V6f, i4f, kS, n4f, yXl } from "./f0s.js";
import { Nvt } from "./inline-direction.js";
import { WW, ul } from "./menu_2.js";
import { IMs } from "./modelTooltip.js";
import { x } from "./tslib.es6.js";
import { c as CPs } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as Lue } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as e4f } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { memo as t4f } from "./react-runtime/react/esm-index-production.js";
var dQl;
export { dQl };
var __wakaru_r4f_initialized = false;
export function r4f() {
if (__wakaru_r4f_initialized) return;
__wakaru_r4f_initialized = true;
"use strict";
x(), Nvt(), vPs(), see(), JNi(), f$(), IMs(), J6f(), WW(), eve(), yU(), dQl = t4f(function(t) {
    const n = CPs(41), { model: i, variant: r, isSelected: s, multiModelMode: o, count: a, parameters: c, itemRef: l, anchorRef: u, isDisabled: h, disabled: p, onSelect: g, onOpenOptions: f, optionsOpen: v, onOptionsOpenChange: b, hoverOptionsEnabled: y, hasSavedParameters: T, searchQuery: E, tooltipMarkdown: A } = t, R = p === void 0 ? !1 : p, D = T === void 0 ? !1 : T, { state: P } = kS();
    if (!y) {
        let H;
        n[0] !== i || n[1] !== P || n[2] !== A ? (H = A ?? yXl(i, P.maxMode), n[0] = i, n[1] = P, n[2] = A, n[3] = H) : H = n[3];
        let $;
        return n[4] !== u || n[5] !== a || n[6] !== R || n[7] !== h || n[8] !== s || n[9] !== l || n[10] !== i || n[11] !== o || n[12] !== g || n[13] !== E || n[14] !== H || n[15] !== r ? ($ = Lue(n4f, {
            model: i,
            variant: r,
            isSelected: s,
            multiModelMode: o,
            count: a,
            itemRef: l,
            anchorRef: u,
            isDisabled: h,
            disabled: R,
            onSelect: g,
            searchQuery: E,
            tooltipMarkdown: H
        }), n[4] = u, n[5] = a, n[6] = R, n[7] = h, n[8] = s, n[9] = l, n[10] = i, n[11] = o, n[12] = g, n[13] = E, n[14] = H, n[15] = r, n[16] = $) : $ = n[16], $;
    }
    let N;
    n[17] !== a || n[18] !== R || n[19] !== h || n[20] !== s || n[21] !== l || n[22] !== i || n[23] !== o || n[24] !== f || n[25] !== g || n[26] !== E || n[27] !== r ? (N = Lue(i4f, {
        model: i,
        variant: r,
        isSelected: s,
        multiModelMode: o,
        count: a,
        itemRef: l,
        isDisabled: h,
        disabled: R,
        onSelect: g,
        onOpenOptions: f,
        searchQuery: E
    }), n[17] = a, n[18] = R, n[19] = h, n[20] = s, n[21] = l, n[22] = i, n[23] = o, n[24] = f, n[25] = g, n[26] = E, n[27] = r, n[28] = N) : N = n[28];
    let O;
    n[29] !== D || n[30] !== i || n[31] !== v || n[32] !== c || n[33] !== A || n[34] !== r ? (O = v && Lue(ul.SubMenuContent, {
        "aria-label": `${i.name} parameters`,
        "data-testid": "parameter-submenu",
        minWidth: U_t,
        maxWidth: U_t,
        children: Lue(V6f, {
            model: i,
            parameters: c,
            variant: r,
            hasSavedParameters: D,
            tooltipOverride: A
        })
    }), n[29] = D, n[30] = i, n[31] = v, n[32] = c, n[33] = A, n[34] = r, n[35] = O) : O = n[35];
    let F;
    return n[36] !== b || n[37] !== v || n[38] !== N || n[39] !== O ? (F = e4f(ul.SubMenu, {
        trigger: "hover",
        hoverOpenDelay: 0,
        placement: "right",
        closeOnSelect: !1,
        open: v,
        onOpenChange: b,
        dismissOnReferenceScroll: !0,
        children: [
            N,
            O
        ]
    }), n[36] = b, n[37] = v, n[38] = N, n[39] = O, n[40] = F) : F = n[40], F;
});

}
