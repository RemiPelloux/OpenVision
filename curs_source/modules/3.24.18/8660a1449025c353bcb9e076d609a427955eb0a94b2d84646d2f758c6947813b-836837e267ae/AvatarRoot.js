import { Hjr, fRa } from "./AvatarRootContext.js";
import { Lm } from "./LYd.js";
import { Wjr, vRa } from "./stateAttributesMapping_9.js";
import { E } from "./tslib.es6.js";
import { Om } from "./useRenderElement.js";
import * as _Ra from "./react-runtime/react/esm-index-production.js";
import { jsx as n_1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
var bRa;
export { bRa };
var __wakaru_i_1_initialized = false;
export function i_1() {
if (__wakaru_i_1_initialized) return;
__wakaru_i_1_initialized = true;
E(), Om(), fRa(), vRa(), bRa = _Ra.forwardRef(function(e, n) {
    const { className: i, render: r, style: s, ...o } = e, [a, l] = _Ra.useState("idle"), c = {
        imageLoadingStatus: a
    }, u = _Ra.useMemo(()=>({
            imageLoadingStatus: a,
            setImageLoadingStatus: l
        }), [
        a,
        l
    ]), d = Lm("span", e, {
        state: c,
        ref: n,
        props: o,
        stateAttributesMapping: Wjr
    });
    return n_1(Hjr.Provider, {
        value: u,
        children: d
    });
}), process.env.NODE_ENV !== "production" && (bRa.displayName = "AvatarRoot");

}
