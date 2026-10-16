import { $3l } from "./CheckboxGroupContext.js";
import { EDi, TDi } from "./FieldItemContext.js";
import { mj } from "./FieldRootContext.js";
import { D3l, wDi } from "./LabelableProvider.js";
import { Ore, sY } from "./constants_11.js";
import { U3l } from "./f0s.js";
import { kp, oY } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { wp } from "./useRenderElement.js";
import * as H3l from "./react-runtime/react/esm-index-production.js";
import { jsx as W3l } from "./react-runtime/react/esm-jsx-runtime-production.js";
var Z1s;
export { Z1s };
var __wakaru_Vcf_initialized = false;
export function Vcf() {
if (__wakaru_Vcf_initialized) return;
__wakaru_Vcf_initialized = true;
x(), mj(), sY(), wp(), EDi(), $3l(), D3l(), Z1s = H3l.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, disabled: o = !1, ...a } = t, { state: c, disabled: l } = oY(!1), u = l || o, h = {
        ...c,
        disabled: u
    }, p = U3l(), f = p?.allValues !== void 0 ? p?.parent.id : void 0, v = H3l.useMemo(()=>({
            disabled: u
        }), [
        u
    ]), b = kp("div", t, {
        ref: n,
        state: h,
        props: a,
        stateAttributesMapping: Ore
    });
    return W3l(wDi, {
        controlId: f,
        children: W3l(TDi.Provider, {
            value: v,
            children: b
        })
    });
}), process.env.NODE_ENV !== "production" && (Z1s.displayName = "FieldItem");

}
