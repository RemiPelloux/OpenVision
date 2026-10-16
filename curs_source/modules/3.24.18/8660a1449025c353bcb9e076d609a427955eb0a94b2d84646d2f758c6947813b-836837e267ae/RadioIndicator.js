import { GQ, Lm, NRe } from "./LYd.js";
import { Z4h } from "./RadioRootContext.js";
import { gkS } from "./ipa.js";
import { V4h, r5r } from "./stateAttributesMapping_4.js";
import { E } from "./tslib.es6.js";
import { qQ } from "./useOpenChangeComplete.js";
import { Om } from "./useRenderElement.js";
import { LRe } from "./useTransitionStatus.js";
import * as J4h from "./react-runtime/react/esm-index-production.js";
var aga;
export { aga };
var __wakaru__kS_initialized = false;
export function _kS() {
if (__wakaru__kS_initialized) return;
__wakaru__kS_initialized = true;
E(), Om(), Z4h(), V4h(), qQ(), LRe(), aga = J4h.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, keepMounted: o = !1, ...a } = e, l = gkS(), c = l.checked, { mounted: u, transitionStatus: d, setMounted: h } = NRe(c), p = {
        ...l,
        transitionStatus: d
    }, g = J4h.useRef(null), f = o || u, _ = Lm("span", e, {
        ref: [
            n,
            g
        ],
        state: p,
        props: a,
        stateAttributesMapping: r5r
    });
    return GQ({
        open: c,
        ref: g,
        onComplete () {
            c || h(!1);
        }
    }), f ? _ : null;
}), process.env.NODE_ENV !== "production" && (aga.displayName = "RadioIndicator");

}
