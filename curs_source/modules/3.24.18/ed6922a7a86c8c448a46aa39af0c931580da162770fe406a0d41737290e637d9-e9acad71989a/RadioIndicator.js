import { Plf } from "./RadioRootContext.js";
import { Mlf } from "./f0s.js";
import { dCe, hj, kp } from "./qIc.js";
import { Dlf, bBl } from "./stateAttributesMapping_4.js";
import { x } from "./tslib.es6.js";
import { pj } from "./useOpenChangeComplete.js";
import { wp } from "./useRenderElement.js";
import { hCe } from "./useTransitionStatus.js";
import * as kBl from "./react-runtime/react/esm-index-production.js";
var gTs;
export { gTs };
var __wakaru_Llf_initialized = false;
export function Llf() {
if (__wakaru_Llf_initialized) return;
__wakaru_Llf_initialized = true;
x(), wp(), Plf(), Dlf(), pj(), hCe(), gTs = kBl.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, keepMounted: o = !1, ...a } = t, c = Mlf(), l = c.checked, { mounted: u, transitionStatus: h, setMounted: p } = dCe(l), g = {
        ...c,
        transitionStatus: h
    }, f = kBl.useRef(null), v = o || u, b = kp("span", t, {
        ref: [
            n,
            f
        ],
        state: g,
        props: a,
        stateAttributesMapping: bBl
    });
    return hj({
        open: l,
        ref: f,
        onComplete () {
            l || p(!1);
        }
    }), v ? b : null;
}), process.env.NODE_ENV !== "production" && (gTs.displayName = "RadioIndicator");

}
