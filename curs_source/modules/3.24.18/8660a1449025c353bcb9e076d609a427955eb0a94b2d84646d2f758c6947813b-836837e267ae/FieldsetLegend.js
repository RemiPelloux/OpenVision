import { zOr } from "./FieldsetRootContext.js";
import { $I, Lm } from "./LYd.js";
import { GOr } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { Om } from "./useRenderElement.js";
import * as xy1 from "./react-runtime/react/esm-index-production.js";
var b2a;
export { b2a };
var __wakaru_Ay1_initialized = false;
export function Ay1() {
if (__wakaru_Ay1_initialized) return;
__wakaru_Ay1_initialized = true;
E(), jv(), _A(), Om(), zOr(), b2a = xy1.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, id: o, ...a } = e, { disabled: l, setLegendId: c } = GOr(), u = $I(o);
    return su(()=>(c(u), ()=>{
            c(void 0);
        }), [
        c,
        u
    ]), Lm("div", e, {
        state: {
            disabled: l ?? !1
        },
        ref: n,
        props: [
            {
                id: u
            },
            a
        ]
    });
}), process.env.NODE_ENV !== "production" && (b2a.displayName = "FieldsetLegend");

}
