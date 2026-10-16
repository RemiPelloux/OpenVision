import { GQ, Lm, NRe, lea } from "./LYd.js";
import { cea } from "./SelectItemContext.js";
import { D7, l6 } from "./stateAttributesMapping.js";
import { E } from "./tslib.es6.js";
import { qQ } from "./useOpenChangeComplete.js";
import { Om } from "./useRenderElement.js";
import { LRe } from "./useTransitionStatus.js";
import * as D2r from "./react-runtime/react/esm-index-production.js";
import { jsx as a$y } from "./react-runtime/react/esm-jsx-runtime-production.js";
var N2r, dea;
export { N2r, dea };
var __wakaru_l$y_initialized = false;
export function l$y() {
if (__wakaru_l$y_initialized) return;
__wakaru_l$y_initialized = true;
E(), cea(), LRe(), qQ(), Om(), l6(), N2r = D2r.forwardRef(function(e, n) {
    const i = e.keepMounted ?? !1, { selected: r } = lea();
    return i || r ? a$y(dea, {
        ...e,
        ref: n
    }) : null;
}), process.env.NODE_ENV !== "production" && (N2r.displayName = "SelectItemIndicator"), dea = D2r.memo(D2r.forwardRef((t, e)=>{
    const { render: n, className: i, style: r, keepMounted: s, ...o } = t, { selected: a } = lea(), l = D2r.useRef(null), { transitionStatus: c, setMounted: u } = NRe(a), h = Lm("span", t, {
        ref: [
            e,
            l
        ],
        state: {
            selected: a,
            transitionStatus: c
        },
        props: [
            {
                "aria-hidden": !0,
                children: "\u2714\uFE0F"
            },
            o
        ],
        stateAttributesMapping: D7
    });
    return GQ({
        open: a,
        ref: l,
        onComplete () {
            a || u(!1);
        }
    }), h;
})), process.env.NODE_ENV !== "production" && (dea.displayName = "Inner");

}
