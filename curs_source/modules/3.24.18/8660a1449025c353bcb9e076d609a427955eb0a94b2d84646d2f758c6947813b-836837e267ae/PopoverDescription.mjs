import { COl, RBe, _Ke } from "./BA.js";
import { PBe } from "./PopoverRootContext.mjs";
import { E } from "./tslib.es6.js";
import { TOl } from "./useBaseUiId.mjs";
import { bKe } from "./useRenderElement.mjs";
import * as qgw from "./react-runtime/react/esm-index-production.js";
var HOl;
export { HOl };
var __wakaru_zgw_initialized = false;
export function zgw() {
if (__wakaru_zgw_initialized) return;
__wakaru_zgw_initialized = true;
"use client";
E(), PBe(), TOl(), bKe(), HOl = qgw.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, { store: a } = RBe(), l = COl(o.id);
    return a.useSyncedValueWithCleanup("descriptionElementId", l), _Ke("p", e, {
        ref: n,
        props: [
            {
                id: l
            },
            o
        ]
    });
}), process.env.NODE_ENV !== "production" && (HOl.displayName = "PopoverDescription");

}
