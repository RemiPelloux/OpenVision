import { RBe } from "./BA.js";
import { eOl } from "./FloatingPortal.mjs";
import { SPf, a1s } from "./PopoverPortalContext.mjs";
import { PBe } from "./PopoverRootContext.mjs";
import { y3n } from "./index_5.mjs";
import { E } from "./tslib.es6.js";
import * as cgw from "./react-runtime/react/esm-index-production.js";
import { jsx as kPf } from "./react-runtime/react/esm-jsx-runtime-production.js";
var xOl;
export { xOl };
var __wakaru_ugw_initialized = false;
export function ugw() {
if (__wakaru_ugw_initialized) return;
__wakaru_ugw_initialized = true;
"use client";
E(), y3n(), PBe(), SPf(), xOl = cgw.forwardRef(function(e, n) {
    const { keepMounted: i = !1, ...r } = e, { store: s } = RBe();
    return s.useState("mounted") || i ? kPf(a1s.Provider, {
        value: i,
        children: kPf(eOl, {
            ref: n,
            ...r
        })
    }) : null;
}), process.env.NODE_ENV !== "production" && (xOl.displayName = "PopoverPortal");

}
