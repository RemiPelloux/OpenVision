import { BA, RBe, _Ke } from "./BA.js";
import { PBe } from "./PopoverRootContext.mjs";
import { E3i, T3i } from "./popupStateMapping.mjs";
import { rce } from "./reasons.mjs";
import { GSs, vOl } from "./stateAttributesMapping.mjs";
import { E } from "./tslib.es6.js";
import { bKe } from "./useRenderElement.mjs";
import * as $gw from "./react-runtime/react/esm-index-production.js";
var sMf, jOl;
export { jOl, sMf };
var __wakaru_Hgw_initialized = false;
export function Hgw() {
if (__wakaru_Hgw_initialized) return;
__wakaru_Hgw_initialized = true;
"use client";
E(), PBe(), E3i(), GSs(), bKe(), rce(), sMf = {
    ...T3i,
    ...vOl
}, jOl = $gw.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, { store: a } = RBe(), l = a.useState("open"), c = a.useState("mounted"), u = a.useState("transitionStatus"), d = a.useState("openChangeReason");
    return _Ke("div", e, {
        state: {
            open: l,
            transitionStatus: u
        },
        ref: [
            a.context.backdropRef,
            n
        ],
        props: [
            {
                role: "presentation",
                hidden: !c,
                style: {
                    pointerEvents: d === BA.triggerHover ? "none" : void 0,
                    userSelect: "none",
                    WebkitUserSelect: "none"
                }
            },
            o
        ],
        stateAttributesMapping: sMf
    });
}), process.env.NODE_ENV !== "production" && (jOl.displayName = "PopoverBackdrop");

}
