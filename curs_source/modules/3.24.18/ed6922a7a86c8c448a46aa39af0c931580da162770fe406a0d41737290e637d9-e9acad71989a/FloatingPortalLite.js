import { Fgt } from "./FloatingPortal.js";
import { zil } from "./qIc.js";
import { x } from "./tslib.es6.js";
import * as Qll from "./react-runtime/react/esm-index-production.js";
import * as b2g from "./react-runtime/react-dom/esm-index-production.js";
import { jsxs as y2g } from "./react-runtime/react/esm-jsx-runtime-production.js";
var wTi;
export { wTi };
var __wakaru_Jll_initialized = false;
export function Jll() {
if (__wakaru_Jll_initialized) return;
__wakaru_Jll_initialized = true;
x(), Fgt(), wTi = Qll.forwardRef(function(t, n) {
    const { children: i, container: r, className: s, render: o, style: a, ...c } = t, { portalNode: l, portalSubtree: u } = zil({
        container: r,
        ref: n,
        componentProps: t,
        elementProps: c
    });
    return !u && !l ? null : y2g(Qll.Fragment, {
        children: [
            u,
            l && b2g.createPortal(i, l)
        ]
    });
}), process.env.NODE_ENV !== "production" && (wTi.displayName = "FloatingPortalLite");

}
