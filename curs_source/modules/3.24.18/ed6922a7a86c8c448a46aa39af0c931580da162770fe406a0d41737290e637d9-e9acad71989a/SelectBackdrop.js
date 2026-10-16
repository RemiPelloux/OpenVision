import { VRe } from "./SelectRootContext.js";
import { Ure, g2 } from "./popupStateMapping.js";
import { Q5e, jc, kp } from "./qIc.js";
import { $O, T5 } from "./stateAttributesMapping.js";
import { J5e, f_ } from "./store_4.js";
import { x } from "./tslib.es6.js";
import { wp } from "./useRenderElement.js";
import { kU } from "./useStore.js";
import * as APg from "./react-runtime/react/esm-index-production.js";
var Msl, Ghs;
export { Ghs, Msl };
var __wakaru_RPg_initialized = false;
export function RPg() {
if (__wakaru_RPg_initialized) return;
__wakaru_RPg_initialized = true;
x(), VRe(), g2(), $O(), wp(), J5e(), kU(), Msl = {
    ...Ure,
    ...T5
}, Ghs = APg.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, ...o } = t, { store: a } = Q5e(), c = jc(a, f_.open), l = jc(a, f_.mounted), u = jc(a, f_.transitionStatus);
    return kp("div", t, {
        state: {
            open: c,
            transitionStatus: u
        },
        ref: n,
        props: [
            {
                role: "presentation",
                hidden: !l,
                style: {
                    userSelect: "none",
                    WebkitUserSelect: "none"
                }
            },
            o
        ],
        stateAttributesMapping: Msl
    });
}), process.env.NODE_ENV !== "production" && (Ghs.displayName = "SelectBackdrop");

}
