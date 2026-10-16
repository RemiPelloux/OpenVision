import { hBl } from "./CheckboxRootContext.js";
import { Ore, sY } from "./constants_11.js";
import { Tlf, lBl } from "./f0s.js";
import { dCe, hj, kp } from "./qIc.js";
import { $O, T5 } from "./stateAttributesMapping.js";
import { x } from "./tslib.es6.js";
import { pj } from "./useOpenChangeComplete.js";
import { wp } from "./useRenderElement.js";
import { uBl } from "./useStateAttributesMapping.js";
import { hCe } from "./useTransitionStatus.js";
import * as gBl from "./react-runtime/react/esm-index-production.js";
var aTs;
export { aTs };
var __wakaru_Ilf_initialized = false;
export function Ilf() {
if (__wakaru_Ilf_initialized) return;
__wakaru_Ilf_initialized = true;
x(), hBl(), wp(), uBl(), pj(), hCe(), $O(), sY(), aTs = gBl.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, keepMounted: o = !1, ...a } = t, c = Tlf(), l = c.checked || c.indeterminate, { mounted: u, transitionStatus: h, setMounted: p } = dCe(l), g = gBl.useRef(null), f = {
        ...c,
        transitionStatus: h
    };
    hj({
        open: l,
        ref: g,
        onComplete () {
            l || p(!1);
        }
    });
    const b = {
        ...lBl(c),
        ...T5,
        ...Ore
    }, y = o || u, T = kp("span", t, {
        ref: [
            n,
            g
        ],
        state: f,
        stateAttributesMapping: b,
        props: a
    });
    return y ? T : null;
}), process.env.NODE_ENV !== "production" && (aTs.displayName = "CheckboxIndicator");

}
