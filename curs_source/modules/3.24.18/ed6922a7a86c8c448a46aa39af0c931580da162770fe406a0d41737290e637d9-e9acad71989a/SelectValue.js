import { VRe } from "./SelectRootContext.js";
import { Q5e, jc, kp, lPg, vsl } from "./qIc.js";
import { Xgt } from "./resolveValueLabel.js";
import { J5e, f_ } from "./store_4.js";
import { x } from "./tslib.es6.js";
import { wp } from "./useRenderElement.js";
import { kU } from "./useStore.js";
import * as wPg from "./react-runtime/react/esm-index-production.js";
var Rsl, $hs;
export { $hs, Rsl };
var __wakaru_CPg_initialized = false;
export function CPg() {
if (__wakaru_CPg_initialized) return;
__wakaru_CPg_initialized = true;
x(), wp(), VRe(), Xgt(), J5e(), kU(), Rsl = {
    value: ()=>null
}, $hs = wPg.forwardRef(function(t, n) {
    const { className: i, render: r, children: s, placeholder: o, style: a, ...c } = t, { store: l, valueRef: u } = Q5e(), h = jc(l, f_.value), p = jc(l, f_.items), g = jc(l, f_.itemToStringLabel), f = jc(l, f_.hasSelectedValue), v = !f && o != null && s == null, b = jc(l, f_.hasNullItemLabel, v), y = {
        value: h,
        placeholder: !f
    };
    let T = null;
    return typeof s == "function" ? T = s(h) : s != null ? T = s : !f && o != null && !b ? T = o : Array.isArray(h) ? T = lPg(h, p, g) : T = vsl(h, p, g), kp("span", t, {
        state: y,
        ref: [
            n,
            u
        ],
        props: [
            {
                children: T
            },
            c
        ],
        stateAttributesMapping: Rsl
    });
}), process.env.NODE_ENV !== "production" && ($hs.displayName = "SelectValue");

}
