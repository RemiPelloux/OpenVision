import { e$, kp } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { t$ } from "./useButton.js";
import { wp } from "./useRenderElement.js";
import * as TTg from "./react-runtime/react/esm-index-production.js";
var Ybn;
export { Ybn };
var __wakaru_pas_initialized = false;
export function pas() {
if (__wakaru_pas_initialized) return;
__wakaru_pas_initialized = true;
x(), t$(), wp(), Ybn = TTg.forwardRef(function(t, n) {
    const { render: i, className: r, disabled: s = !1, focusableWhenDisabled: o = !1, nativeButton: a = !0, style: c, ...l } = t, { getButtonProps: u, buttonRef: h } = e$({
        disabled: s,
        focusableWhenDisabled: o,
        native: a
    });
    return kp("button", t, {
        state: {
            disabled: s
        },
        ref: [
            n,
            h
        ],
        props: [
            l,
            u
        ]
    });
}), process.env.NODE_ENV !== "production" && (Ybn.displayName = "Button");

}
