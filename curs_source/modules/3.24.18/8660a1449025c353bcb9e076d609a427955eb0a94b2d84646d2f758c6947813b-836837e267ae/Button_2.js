import { Lm, wz } from "./LYd.js";
import { E } from "./tslib.es6.js";
import { Cz } from "./useButton.js";
import { Om } from "./useRenderElement.js";
import * as BFy from "./react-runtime/react/esm-index-production.js";
var gai;
export { gai };
var __wakaru_dKo_initialized = false;
export function dKo() {
if (__wakaru_dKo_initialized) return;
__wakaru_dKo_initialized = true;
E(), Cz(), Om(), gai = BFy.forwardRef(function(e, n) {
    const { render: i, className: r, disabled: s = !1, focusableWhenDisabled: o = !1, nativeButton: a = !0, style: l, ...c } = e, { getButtonProps: u, buttonRef: d } = wz({
        disabled: s,
        focusableWhenDisabled: o,
        native: a
    });
    return Lm("button", e, {
        state: {
            disabled: s
        },
        ref: [
            n,
            d
        ],
        props: [
            c,
            u
        ]
    });
}), process.env.NODE_ENV !== "production" && (gai.displayName = "Button");

}
