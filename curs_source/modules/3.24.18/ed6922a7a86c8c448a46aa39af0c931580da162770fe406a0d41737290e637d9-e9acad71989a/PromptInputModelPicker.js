import { Bue, ttu } from "./ModelPicker.js";
import { xZe } from "./PromptInputContext.js";
import { w6e } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { forwardRef as Jzf } from "./react-runtime/react/esm-index-production.js";
import { memo as Qzf } from "./react-runtime/react/esm-index-production.js";
import { jsx as Xzf } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Zzf } from "./react-runtime/react/esm-compiler-runtime-production.js";
var Ksu;
export { Ksu };
var __wakaru_eKf_initialized = false;
export function eKf() {
if (__wakaru_eKf_initialized) return;
__wakaru_eKf_initialized = true;
"use strict";
x(), xZe(), ttu(), Ksu = Qzf(Jzf(function(t, n) {
    const i = Zzf(21);
    let r, s, o, a, c, l;
    i[0] !== t ? ({ onClose: r, onOpenChange: s, open: o, placement: a, tooltipPlacement: l, ...c } = t, i[0] = t, i[1] = r, i[2] = s, i[3] = o, i[4] = a, i[5] = c, i[6] = l) : (r = i[1], s = i[2], o = i[3], a = i[4], c = i[5], l = i[6]);
    const { setMenuOpen: u, defaultModelPickerPlacement: h, isExpanded: p } = w6e("PromptInput.ModelPicker"), g = a ?? h, f = l ?? (p ? "right" : "top");
    let v;
    i[7] !== r || i[8] !== u ? (v = ()=>{
        u(!1), r?.();
    }, i[7] = r, i[8] = u, i[9] = v) : v = i[9];
    let b;
    i[10] !== s || i[11] !== u ? (b = (T)=>{
        u(T), s?.(T);
    }, i[10] = s, i[11] = u, i[12] = b) : b = i[12];
    let y;
    return i[13] !== o || i[14] !== c || i[15] !== n || i[16] !== g || i[17] !== f || i[18] !== v || i[19] !== b ? (y = Xzf(Bue, {
        ref: n,
        open: o,
        placement: g,
        tooltipPlacement: f,
        triggerAppearance: "prompt",
        onClose: v,
        onOpenChange: b,
        ...c
    }), i[13] = o, i[14] = c, i[15] = n, i[16] = g, i[17] = f, i[18] = v, i[19] = b, i[20] = y) : y = i[20], y;
}));

}
