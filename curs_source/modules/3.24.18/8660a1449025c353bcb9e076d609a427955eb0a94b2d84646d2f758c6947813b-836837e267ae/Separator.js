import { Lm } from "./LYd.js";
import { E } from "./tslib.es6.js";
import { Om } from "./useRenderElement.js";
import * as u$y from "./react-runtime/react/esm-index-production.js";
var L2r;
export { L2r };
var __wakaru_ech_initialized = false;
export function ech() {
if (__wakaru_ech_initialized) return;
__wakaru_ech_initialized = true;
E(), Om(), L2r = u$y.forwardRef(function(e, n) {
    const { className: i, render: r, orientation: s = "horizontal", style: o, ...a } = e;
    return Lm("div", e, {
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
}), process.env.NODE_ENV !== "production" && (L2r.displayName = "Separator");

}
