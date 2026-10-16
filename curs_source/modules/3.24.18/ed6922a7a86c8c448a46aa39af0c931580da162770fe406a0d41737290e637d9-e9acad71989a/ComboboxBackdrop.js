import { Nue } from "./ComboboxRootContext.js";
import { wve } from "./f0s.js";
import { Ure, g2 } from "./popupStateMapping.js";
import { jc, kp } from "./qIc.js";
import { $O, T5 } from "./stateAttributesMapping.js";
import { b6e, op } from "./store_5.js";
import { x } from "./tslib.es6.js";
import { wp } from "./useRenderElement.js";
import { kU } from "./useStore.js";
import * as dUf from "./react-runtime/react/esm-index-production.js";
var eJl, ZPs;
export { ZPs, eJl };
var __wakaru_hUf_initialized = false;
export function hUf() {
if (__wakaru_hUf_initialized) return;
__wakaru_hUf_initialized = true;
x(), Nue(), g2(), $O(), wp(), b6e(), kU(), eJl = {
    ...Ure,
    ...T5
}, ZPs = dUf.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, ...o } = t, a = wve(), c = jc(a, op.open), l = jc(a, op.mounted), u = jc(a, op.transitionStatus);
    return kp("div", t, {
        state: {
            open: c,
            transitionStatus: u
        },
        ref: n,
        stateAttributesMapping: eJl,
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
        ]
    });
}), process.env.NODE_ENV !== "production" && (ZPs.displayName = "ComboboxBackdrop");

}
