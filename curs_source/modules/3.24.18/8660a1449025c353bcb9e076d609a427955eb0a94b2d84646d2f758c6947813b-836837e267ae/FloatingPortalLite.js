import { Y8t } from "./FloatingPortal.js";
import { Moh } from "./LYd.js";
import { E } from "./tslib.es6.js";
import * as bWy from "./react-runtime/react-dom/esm-index-production.js";
import * as ghh from "./react-runtime/react/esm-index-production.js";
import { jsxs as yWy } from "./react-runtime/react/esm-jsx-runtime-production.js";
var EPr;
export { EPr };
var __wakaru_fhh_initialized = false;
export function fhh() {
if (__wakaru_fhh_initialized) return;
__wakaru_fhh_initialized = true;
E(), Y8t(), EPr = ghh.forwardRef(function(e, n) {
    const { children: i, container: r, className: s, render: o, style: a, ...l } = e, { portalNode: c, portalSubtree: u } = Moh({
        container: r,
        ref: n,
        componentProps: e,
        elementProps: l
    });
    return !u && !c ? null : yWy(ghh.Fragment, {
        children: [
            u,
            c && bWy.createPortal(i, c)
        ]
    });
}), process.env.NODE_ENV !== "production" && (EPr.displayName = "FloatingPortalLite");

}
