import { Gdp, nX } from "./ModelPicker.js";
import { zrt } from "./PromptInputContext.js";
import { TGe } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { memo as $c1 } from "./react-runtime/react/esm-index-production.js";
import { forwardRef as Hc1 } from "./react-runtime/react/esm-index-production.js";
import { jsx as Uc1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as jc1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
var pxa;
export { pxa };
var __wakaru_L_p_initialized = false;
export function L_p() {
if (__wakaru_L_p_initialized) return;
__wakaru_L_p_initialized = true;
"use strict";
E(), zrt(), Gdp(), pxa = $c1(Hc1(function(e, n) {
    const i = jc1(21);
    let r, s, o, a, l, c;
    i[0] !== e ? ({ onClose: r, onOpenChange: s, open: o, placement: a, tooltipPlacement: c, ...l } = e, i[0] = e, i[1] = r, i[2] = s, i[3] = o, i[4] = a, i[5] = l, i[6] = c) : (r = i[1], s = i[2], o = i[3], a = i[4], l = i[5], c = i[6]);
    const { setMenuOpen: u, defaultModelPickerPlacement: d, isExpanded: h } = TGe("PromptInput.ModelPicker"), p = a ?? d, g = c ?? (h ? "right" : "top");
    let f;
    i[7] !== r || i[8] !== u ? (f = ()=>{
        u(!1), r?.();
    }, i[7] = r, i[8] = u, i[9] = f) : f = i[9];
    let _;
    i[10] !== s || i[11] !== u ? (_ = (y)=>{
        u(y), s?.(y);
    }, i[10] = s, i[11] = u, i[12] = _) : _ = i[12];
    let b;
    return i[13] !== o || i[14] !== l || i[15] !== n || i[16] !== p || i[17] !== g || i[18] !== f || i[19] !== _ ? (b = Uc1(nX, {
        ref: n,
        open: o,
        placement: p,
        tooltipPlacement: g,
        triggerAppearance: "prompt",
        onClose: f,
        onOpenChange: _,
        ...l
    }), i[13] = o, i[14] = l, i[15] = n, i[16] = p, i[17] = g, i[18] = f, i[19] = _, i[20] = b) : b = i[20], b;
}));

}
