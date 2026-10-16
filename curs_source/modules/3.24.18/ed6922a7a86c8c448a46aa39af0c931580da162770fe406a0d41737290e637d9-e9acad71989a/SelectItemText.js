import { cps } from "./SelectItemContext.js";
import { VRe } from "./SelectRootContext.js";
import { Q5e, aps, kp } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { wp } from "./useRenderElement.js";
import * as dps from "./react-runtime/react/esm-index-production.js";
var hps;
export { hps };
var __wakaru_sLg_initialized = false;
export function sLg() {
if (__wakaru_sLg_initialized) return;
__wakaru_sLg_initialized = true;
x(), VRe(), cps(), wp(), hps = dps.memo(dps.forwardRef(function(t, n) {
    const { index: i, textRef: r, selectedByFocus: s, hasRegistered: o } = aps(), { firstItemTextRef: a, selectedItemTextRef: c } = Q5e(), { render: l, className: u, style: h, ...p } = t, g = dps.useCallback((v)=>{
        v && (o && i === 0 && (a.current = v), o && s && (c.current = v));
    }, [
        a,
        c,
        i,
        s,
        o
    ]);
    return kp("div", t, {
        ref: [
            g,
            n,
            r
        ],
        props: p
    });
})), process.env.NODE_ENV !== "production" && (hps.displayName = "SelectItemText");

}
