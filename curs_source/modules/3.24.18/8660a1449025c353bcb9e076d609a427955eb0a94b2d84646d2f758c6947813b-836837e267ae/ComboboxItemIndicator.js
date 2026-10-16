import { Kcp } from "./ComboboxItemContext.js";
import { GQ, Lm, NRe } from "./LYd.js";
import { Vcp } from "./ipa.js";
import { D7, l6 } from "./stateAttributesMapping.js";
import { E } from "./tslib.es6.js";
import { qQ } from "./useOpenChangeComplete.js";
import { Om } from "./useRenderElement.js";
import { LRe } from "./useTransitionStatus.js";
import { jsx as $ZS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as a7r from "./react-runtime/react/esm-index-production.js";
var Kkn, uTa;
export { Kkn, uTa };
var __wakaru_Qcp_initialized = false;
export function Qcp() {
if (__wakaru_Qcp_initialized) return;
__wakaru_Qcp_initialized = true;
E(), Kcp(), LRe(), qQ(), Om(), l6(), Kkn = a7r.forwardRef(function(e, n) {
    const i = e.keepMounted ?? !1, { selected: r } = Vcp();
    return i || r ? $ZS(uTa, {
        ...e,
        ref: n
    }) : null;
}), process.env.NODE_ENV !== "production" && (Kkn.displayName = "ComboboxItemIndicator"), uTa = a7r.memo(a7r.forwardRef((t, e)=>{
    const { render: n, className: i, style: r, keepMounted: s, ...o } = t, { selected: a } = Vcp(), l = a7r.useRef(null), { transitionStatus: c, setMounted: u } = NRe(a), h = Lm("span", t, {
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
})), process.env.NODE_ENV !== "production" && (uTa.displayName = "Inner");

}
