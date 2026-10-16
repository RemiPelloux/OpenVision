import { kp } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { wp } from "./useRenderElement.js";
import * as oLg from "./react-runtime/react/esm-index-production.js";
var L1i;
export { L1i };
var __wakaru_bol_initialized = false;
export function bol() {
if (__wakaru_bol_initialized) return;
__wakaru_bol_initialized = true;
x(), wp(), L1i = oLg.forwardRef(function(t, n) {
    const { className: i, render: r, orientation: s = "horizontal", style: o, ...a } = t;
    return kp("div", t, {
        state: {
            orientation: s
        },
        ref: n,
        props: [
            {
                role: "separator",
                "aria-orientation": s
            },
            a
        ]
    });
}), process.env.NODE_ENV !== "production" && (L1i.displayName = "Separator");

}
