import { x } from "./tslib.es6.js";
import * as BPg from "./react-runtime/react/esm-index-production.js";
import { jsx as UPg } from "./react-runtime/react/esm-jsx-runtime-production.js";
var Jgt;
export { Jgt };
var __wakaru_KSn_initialized = false;
export function KSn() {
if (__wakaru_KSn_initialized) return;
__wakaru_KSn_initialized = true;
x(), Jgt = BPg.forwardRef(function(t, n) {
    const { cutout: i, ...r } = t;
    let s;
    if (i) {
        const o = i.getBoundingClientRect();
        s = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${o.left}px ${o.top}px,${o.left}px ${o.bottom}px,${o.right}px ${o.bottom}px,${o.right}px ${o.top}px,${o.left}px ${o.top}px)`;
    }
    return UPg("div", {
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
}), process.env.NODE_ENV !== "production" && (Jgt.displayName = "InternalBackdrop");

}
