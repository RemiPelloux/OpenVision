import { $I, Lm } from "./LYd.js";
import { Gpa } from "./MenuGroupContext.js";
import { ByS } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { Om } from "./useRenderElement.js";
import * as $yS from "./react-runtime/react/esm-index-production.js";
var zpa;
export { zpa };
var __wakaru_HyS_initialized = false;
export function HyS() {
if (__wakaru_HyS_initialized) return;
__wakaru_HyS_initialized = true;
E(), jv(), Om(), _A(), Gpa(), zpa = $yS.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, id: o, ...a } = e, l = $I(o), c = ByS();
    return su(()=>(c(l), ()=>{
            c(void 0);
        }), [
        c,
        l
    ]), Lm("div", e, {
        ref: n,
        props: {
            id: l,
            role: "presentation",
            ...a
        }
    });
}), process.env.NODE_ENV !== "production" && (zpa.displayName = "MenuGroupLabel");

}
