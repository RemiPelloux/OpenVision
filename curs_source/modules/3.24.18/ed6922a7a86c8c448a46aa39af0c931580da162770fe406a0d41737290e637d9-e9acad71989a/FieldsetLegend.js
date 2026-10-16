import { F1s } from "./FieldsetRootContext.js";
import { O1s } from "./f0s.js";
import { SR, kp } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { TD } from "./useBaseUiId.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { wp } from "./useRenderElement.js";
import * as cev from "./react-runtime/react/esm-index-production.js";
var QOs;
export { QOs };
var __wakaru_lev_initialized = false;
export function lev() {
if (__wakaru_lev_initialized) return;
__wakaru_lev_initialized = true;
x(), af(), TD(), wp(), F1s(), QOs = cev.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, id: o, ...a } = t, { disabled: c, setLegendId: l } = O1s(), u = SR(o);
    return gl(()=>(l(u), ()=>{
            l(void 0);
        }), [
        l,
        u
    ]), kp("div", t, {
        state: {
            disabled: c ?? !1
        },
        ref: n,
        props: [
            {
                id: u
            },
            a
        ]
    });
}), process.env.NODE_ENV !== "production" && (QOs.displayName = "FieldsetLegend");

}
