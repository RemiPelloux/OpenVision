import { E } from "./tslib.es6.js";
import * as Hjy from "./react-runtime/react/esm-index-production.js";
import { jsx as Wjy } from "./react-runtime/react/esm-jsx-runtime-production.js";
var l7t;
export { l7t };
var __wakaru_cci_initialized = false;
export function cci() {
if (__wakaru_cci_initialized) return;
__wakaru_cci_initialized = true;
E(), l7t = Hjy.forwardRef(function(e, n) {
    const { cutout: i, ...r } = e;
    let s;
    if (i) {
        const o = i.getBoundingClientRect();
        s = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${o.left}px ${o.top}px,${o.left}px ${o.bottom}px,${o.right}px ${o.bottom}px,${o.right}px ${o.top}px,${o.left}px ${o.top}px)`;
    }
    return Wjy("div", {
        ref: n,
        role: "presentation",
        "data-base-ui-inert": "",
        ...r,
        style: {
            position: "fixed",
            inset: 0,
            userSelect: "none",
            WebkitUserSelect: "none",
            clipPath: s
        }
    });
}), process.env.NODE_ENV !== "production" && (l7t.displayName = "InternalBackdrop");

}
