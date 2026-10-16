import { COl, RBe, _Ke } from "./BA.js";
import { PBe } from "./PopoverRootContext.mjs";
import { E } from "./tslib.es6.js";
import { TOl } from "./useBaseUiId.mjs";
import { bKe } from "./useRenderElement.mjs";
import * as Wgw from "./react-runtime/react/esm-index-production.js";
var $Ol;
export { $Ol };
var __wakaru_Ggw_initialized = false;
export function Ggw() {
if (__wakaru_Ggw_initialized) return;
__wakaru_Ggw_initialized = true;
"use client";
E(), PBe(), bKe(), TOl(), $Ol = Wgw.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, { store: a } = RBe(), l = COl(o.id);
    return a.useSyncedValueWithCleanup("titleElementId", l), _Ke("h2", e, {
        ref: n,
        props: [
            {
                id: l
            },
            o
        ]
    });
}), process.env.NODE_ENV !== "production" && ($Ol.displayName = "PopoverTitle");

}
