import { AOl, RBe, _Ke, afw } from "./BA.js";
import { c1s } from "./PopoverPositionerContext.mjs";
import { PBe } from "./PopoverRootContext.mjs";
import { Xgw, oMf } from "./PopoverViewportCssVars.mjs";
import { E } from "./tslib.es6.js";
import { dfw } from "./usePopupViewport.mjs";
import { bKe } from "./useRenderElement.mjs";
import * as hfw from "./react-runtime/react/esm-index-production.js";
var uMf, zOl;
export { uMf, zOl };
var __wakaru_pfw_initialized = false;
export function pfw() {
if (__wakaru_pfw_initialized) return;
__wakaru_pfw_initialized = true;
"use client";
E(), PBe(), c1s(), bKe(), Xgw(), dfw(), uMf = {
    activationDirection: (t)=>t ? {
            "data-activation-direction": t
        } : null
}, zOl = hfw.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, children: o, ...a } = e, { store: l } = RBe(), { side: c } = AOl(), u = l.useState("instantType"), { children: d, state: h } = afw({
        store: l,
        side: c,
        cssVars: oMf,
        children: o
    }), p = {
        activationDirection: h.activationDirection,
        transitioning: h.transitioning,
        instant: u
    };
    return _Ke("div", e, {
        state: p,
        ref: n,
        props: [
            a,
            {
                children: d
            }
        ],
        stateAttributesMapping: uMf
    });
}), process.env.NODE_ENV !== "production" && (zOl.displayName = "PopoverViewport");

}
