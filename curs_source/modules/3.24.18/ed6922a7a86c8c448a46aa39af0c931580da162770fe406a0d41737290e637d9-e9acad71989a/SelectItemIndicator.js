import { cps } from "./SelectItemContext.js";
import { aps, dCe, hj, kp } from "./qIc.js";
import { $O, T5 } from "./stateAttributesMapping.js";
import { x } from "./tslib.es6.js";
import { pj } from "./useOpenChangeComplete.js";
import { wp } from "./useRenderElement.js";
import { hCe } from "./useTransitionStatus.js";
import * as M1i from "./react-runtime/react/esm-index-production.js";
import { jsx as iLg } from "./react-runtime/react/esm-jsx-runtime-production.js";
var P1i, ups;
export { P1i, ups };
var __wakaru_rLg_initialized = false;
export function rLg() {
if (__wakaru_rLg_initialized) return;
__wakaru_rLg_initialized = true;
x(), cps(), hCe(), pj(), wp(), $O(), P1i = M1i.forwardRef(function(t, n) {
    const i = t.keepMounted ?? !1, { selected: r } = aps();
    return i || r ? iLg(ups, {
        ...t,
        ref: n
    }) : null;
}), process.env.NODE_ENV !== "production" && (P1i.displayName = "SelectItemIndicator"), ups = M1i.memo(M1i.forwardRef((e, t)=>{
    const { render: n, className: i, style: r, keepMounted: s, ...o } = e, { selected: a } = aps(), c = M1i.useRef(null), { transitionStatus: l, setMounted: u } = dCe(a), p = kp("span", e, {
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
})), process.env.NODE_ENV !== "production" && (ups.displayName = "Inner");

}
