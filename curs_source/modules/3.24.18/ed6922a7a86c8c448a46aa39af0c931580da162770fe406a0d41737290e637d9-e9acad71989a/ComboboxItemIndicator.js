import { hJl } from "./ComboboxItemContext.js";
import { dJl } from "./f0s.js";
import { dCe, hj, kp } from "./qIc.js";
import { $O, T5 } from "./stateAttributesMapping.js";
import { x } from "./tslib.es6.js";
import { pj } from "./useOpenChangeComplete.js";
import { wp } from "./useRenderElement.js";
import { hCe } from "./useTransitionStatus.js";
import { jsx as TUf } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as W2i from "./react-runtime/react/esm-index-production.js";
var G2i, nLs;
export { G2i, nLs };
var __wakaru_EUf_initialized = false;
export function EUf() {
if (__wakaru_EUf_initialized) return;
__wakaru_EUf_initialized = true;
x(), hJl(), hCe(), pj(), wp(), $O(), G2i = W2i.forwardRef(function(t, n) {
    const i = t.keepMounted ?? !1, { selected: r } = dJl();
    return i || r ? TUf(nLs, {
        ...t,
        ref: n
    }) : null;
}), process.env.NODE_ENV !== "production" && (G2i.displayName = "ComboboxItemIndicator"), nLs = W2i.memo(W2i.forwardRef((e, t)=>{
    const { render: n, className: i, style: r, keepMounted: s, ...o } = e, { selected: a } = dJl(), c = W2i.useRef(null), { transitionStatus: l, setMounted: u } = dCe(a), p = kp("span", e, {
        ref: [
            t,
            c
        ],
        state: {
            selected: a,
            transitionStatus: l
        },
        props: [
            {
                "aria-hidden": !0,
                children: "\u2714\uFE0F"
            },
            o
        ],
        stateAttributesMapping: T5
    });
    return hj({
        open: a,
        ref: c,
        onComplete () {
            a || u(!1);
        }
    }), p;
})), process.env.NODE_ENV !== "production" && (nLs.displayName = "Inner");

}
