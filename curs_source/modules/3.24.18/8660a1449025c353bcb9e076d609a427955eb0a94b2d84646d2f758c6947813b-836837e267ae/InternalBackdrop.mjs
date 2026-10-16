import { E } from "./tslib.es6.js";
import { jsx as fgw } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as ggw from "./react-runtime/react/esm-index-production.js";
var POl;
export { POl };
var __wakaru_vgw_initialized = false;
export function vgw() {
if (__wakaru_vgw_initialized) return;
__wakaru_vgw_initialized = true;
E(), POl = ggw.forwardRef(function(e, n) {
    const { cutout: i, ...r } = e;
    let s;
    if (i) {
        const o = i.getBoundingClientRect();
        s = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${o.left}px ${o.top}px,${o.left}px ${o.bottom}px,${o.right}px ${o.bottom}px,${o.right}px ${o.top}px,${o.left}px ${o.top}px)`;
    }
    return fgw("div", {
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
}), process.env.NODE_ENV !== "production" && (POl.displayName = "InternalBackdrop");

}
