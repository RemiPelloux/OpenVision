import { BA, Fgw, NG, RBe, _Ke, cPf } from "./BA.js";
import { PBe } from "./PopoverRootContext.mjs";
import { tMf } from "./closePart.mjs";
import { xBe } from "./createBaseUIEventDetails.mjs";
import { Vgw } from "./index_6.mjs";
import { rce } from "./reasons.mjs";
import { E } from "./tslib.es6.js";
import { bKe } from "./useRenderElement.mjs";
import * as Kgw from "./react-runtime/react/esm-index-production.js";
var WOl;
export { WOl };
var __wakaru_Ygw_initialized = false;
export function Ygw() {
if (__wakaru_Ygw_initialized) return;
__wakaru_Ygw_initialized = true;
"use client";
E(), PBe(), bKe(), Vgw(), xBe(), rce(), tMf(), WOl = Kgw.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, disabled: o = !1, nativeButton: a = !0, ...l } = e, { buttonRef: c, getButtonProps: u } = cPf({
        disabled: o,
        focusableWhenDisabled: !1,
        native: a
    }), { store: d } = RBe();
    return Fgw(), _Ke("button", e, {
        ref: [
            n,
            c
        ],
        props: [
            {
                onClick (p) {
                    d.setOpen(!1, NG(BA.closePress, p.nativeEvent));
                }
            },
            l,
            u
        ]
    });
}), process.env.NODE_ENV !== "production" && (WOl.displayName = "PopoverClose");

}
