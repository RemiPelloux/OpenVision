import { CMi, PEs } from "./CollapsibleRootContext.js";
import { lgf } from "./f0s.js";
import { kp, su } from "./qIc.js";
import { D6l, LEs } from "./stateAttributesMapping_6.js";
import { x } from "./tslib.es6.js";
import { ugf } from "./useCollapsibleRoot.js";
import { wp } from "./useRenderElement.js";
import { Cy } from "./useStableCallback.js";
import * as NEs from "./react-runtime/react/esm-index-production.js";
import { jsx as hgf } from "./react-runtime/react/esm-jsx-runtime-production.js";
var OEs;
export { OEs };
var __wakaru_pgf_initialized = false;
export function pgf() {
if (__wakaru_pgf_initialized) return;
__wakaru_pgf_initialized = true;
x(), Cy(), wp(), ugf(), PEs(), D6l(), OEs = NEs.forwardRef(function(t, n) {
    const { render: i, className: r, defaultOpen: s = !1, disabled: o = !1, onOpenChange: a, open: c, style: l, ...u } = t, h = su(a), p = lgf({
        open: c,
        defaultOpen: s,
        onOpenChange: h,
        disabled: o
    }), g = NEs.useMemo(()=>({
            open: p.open,
            disabled: p.disabled,
            transitionStatus: p.transitionStatus
        }), [
        p.open,
        p.disabled,
        p.transitionStatus
    ]), f = NEs.useMemo(()=>({
            ...p,
            onOpenChange: h,
            state: g
        }), [
        p,
        h,
        g
    ]), v = kp("div", t, {
        state: g,
        ref: n,
        props: u,
        stateAttributesMapping: LEs
    });
    return hgf(CMi.Provider, {
        value: f,
        children: v
    });
}), process.env.NODE_ENV !== "production" && (OEs.displayName = "CollapsibleRoot");

}
