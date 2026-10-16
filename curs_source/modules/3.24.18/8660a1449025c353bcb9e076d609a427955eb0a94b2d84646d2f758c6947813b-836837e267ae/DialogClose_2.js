import { FGe } from "./DialogRootContext.js";
import { Lm, wz, zd } from "./LYd.js";
import { VS } from "./createBaseUIEventDetails.js";
import { rst } from "./ipa.js";
import { Tli, Zb } from "./reason-parts.js";
import { E } from "./tslib.es6.js";
import { Cz } from "./useButton.js";
import { Om } from "./useRenderElement.js";
import * as f_1 from "./react-runtime/react/esm-index-production.js";
var RRa;
export { RRa };
var __wakaru_v_1_initialized = false;
export function v_1() {
if (__wakaru_v_1_initialized) return;
__wakaru_v_1_initialized = true;
E(), FGe(), Om(), VS(), Cz(), Zb(), RRa = f_1.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, disabled: o = !1, nativeButton: a = !0, ...l } = e, { store: c } = rst(), u = c.useState("open"), { getButtonProps: d, buttonRef: h } = wz({
        disabled: o,
        native: a
    }), p = {
        disabled: o
    };
    function g(f) {
        u && c.setOpen(!1, zd(Tli, f.nativeEvent));
    }
    return Lm("button", e, {
        state: p,
        ref: [
            n,
            h
        ],
        props: [
            {
                onClick: g
            },
            l,
            d
        ]
    });
}), process.env.NODE_ENV !== "production" && (RRa.displayName = "DialogClose");

}
