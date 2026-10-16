import { j4h } from "./CheckboxRootContext.js";
import { GQ, Lm, NRe } from "./LYd.js";
import { BY, wne } from "./constants_11.js";
import { F4h, ckS } from "./ipa.js";
import { D7, l6 } from "./stateAttributesMapping.js";
import { E } from "./tslib.es6.js";
import { qQ } from "./useOpenChangeComplete.js";
import { Om } from "./useRenderElement.js";
import { B4h } from "./useStateAttributesMapping.js";
import { LRe } from "./useTransitionStatus.js";
import * as W4h from "./react-runtime/react/esm-index-production.js";
var Jma;
export { Jma };
var __wakaru_dkS_initialized = false;
export function dkS() {
if (__wakaru_dkS_initialized) return;
__wakaru_dkS_initialized = true;
E(), j4h(), Om(), B4h(), qQ(), LRe(), l6(), BY(), Jma = W4h.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, keepMounted: o = !1, ...a } = e, l = ckS(), c = l.checked || l.indeterminate, { mounted: u, transitionStatus: d, setMounted: h } = NRe(c), p = W4h.useRef(null), g = {
        ...l,
        transitionStatus: d
    };
    GQ({
        open: c,
        ref: p,
        onComplete () {
            c || h(!1);
        }
    });
    const _ = {
        ...F4h(l),
        ...D7,
        ...wne
    }, b = o || u, y = Lm("span", e, {
        ref: [
            n,
            p
        ],
        state: g,
        stateAttributesMapping: _,
        props: a
    });
    return b ? y : null;
}), process.env.NODE_ENV !== "production" && (Jma.displayName = "CheckboxIndicator");

}
