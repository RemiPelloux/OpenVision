import { Gcp } from "./ComboboxGroupContext.js";
import { $I, Lm } from "./LYd.js";
import { LZS } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { Om } from "./useRenderElement.js";
import * as OZS from "./react-runtime/react/esm-index-production.js";
var Zfi;
export { Zfi };
var __wakaru_lTa_initialized = false;
export function lTa() {
if (__wakaru_lTa_initialized) return;
__wakaru_lTa_initialized = true;
E(), jv(), _A(), Gcp(), Om(), Zfi = OZS.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, id: o, ...a } = e, { setLabelId: l } = LZS(), c = $I(o);
    return su(()=>(l(c), ()=>{
            l(void 0);
        }), [
        c,
        l
    ]), Lm("div", e, {
        ref: n,
        props: [
            {
                id: c
            },
            a
        ]
    });
}), process.env.NODE_ENV !== "production" && (Zfi.displayName = "ComboboxGroupLabel");

}
