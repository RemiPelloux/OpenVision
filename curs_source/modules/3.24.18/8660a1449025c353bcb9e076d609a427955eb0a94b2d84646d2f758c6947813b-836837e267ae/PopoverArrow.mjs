import { AOl, RBe, _Ke } from "./BA.js";
import { c1s } from "./PopoverPositionerContext.mjs";
import { PBe } from "./PopoverRootContext.mjs";
import { E3i, T3i } from "./popupStateMapping.mjs";
import { E } from "./tslib.es6.js";
import { bKe } from "./useRenderElement.mjs";
import * as Ugw from "./react-runtime/react/esm-index-production.js";
var UOl;
export { UOl };
var __wakaru_jgw_initialized = false;
export function jgw() {
if (__wakaru_jgw_initialized) return;
__wakaru_jgw_initialized = true;
"use client";
E(), c1s(), PBe(), E3i(), bKe(), UOl = Ugw.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, { store: a } = RBe(), l = a.useState("open"), { arrowRef: c, side: u, align: d, arrowUncentered: h, arrowStyles: p } = AOl();
    return _Ke("div", e, {
        state: {
            open: l,
            side: u,
            align: d,
            uncentered: h
        },
        ref: [
            n,
            c
        ],
        props: [
            {
                style: p,
                "aria-hidden": !0
            },
            o
        ],
        stateAttributesMapping: T3i
    });
}), process.env.NODE_ENV !== "production" && (UOl.displayName = "PopoverArrow");

}
