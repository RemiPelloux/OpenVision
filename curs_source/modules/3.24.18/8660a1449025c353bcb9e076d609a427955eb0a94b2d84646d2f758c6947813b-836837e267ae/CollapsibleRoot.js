import { fva, uFr } from "./CollapsibleRootContext.js";
import { Lm, pu } from "./LYd.js";
import { txS } from "./ipa.js";
import { B$h, vva } from "./stateAttributesMapping_6.js";
import { E } from "./tslib.es6.js";
import { nxS } from "./useCollapsibleRoot.js";
import { Om } from "./useRenderElement.js";
import { Jy } from "./useStableCallback.js";
import * as _va from "./react-runtime/react/esm-index-production.js";
import { jsx as rxS } from "./react-runtime/react/esm-jsx-runtime-production.js";
var bva;
export { bva };
var __wakaru_sxS_initialized = false;
export function sxS() {
if (__wakaru_sxS_initialized) return;
__wakaru_sxS_initialized = true;
E(), Jy(), Om(), nxS(), fva(), B$h(), bva = _va.forwardRef(function(e, n) {
    const { render: i, className: r, defaultOpen: s = !1, disabled: o = !1, onOpenChange: a, open: l, style: c, ...u } = e, d = pu(a), h = txS({
        open: l,
        defaultOpen: s,
        onOpenChange: d,
        disabled: o
    }), p = _va.useMemo(()=>({
            open: h.open,
            disabled: h.disabled,
            transitionStatus: h.transitionStatus
        }), [
        h.open,
        h.disabled,
        h.transitionStatus
    ]), g = _va.useMemo(()=>({
            ...h,
            onOpenChange: d,
            state: p
        }), [
        h,
        d,
        p
    ]), f = Lm("div", e, {
        state: p,
        ref: n,
        props: u,
        stateAttributesMapping: vva
    });
    return rxS(uFr.Provider, {
        value: g,
        children: f
    });
}), process.env.NODE_ENV !== "production" && (bva.displayName = "CollapsibleRoot");

}
