import { Q0s, R0n } from "./MenuGroupContext.js";
import { RFl, cDi } from "./MenuRadioGroupContext.js";
import { Mre, kp, su } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { sCe } from "./useControlled.js";
import { wp } from "./useRenderElement.js";
import { Cy } from "./useStableCallback.js";
import { jsx as DFl } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as lDi from "./react-runtime/react/esm-index-production.js";
var o1s;
export { o1s };
var __wakaru_gaf_initialized = false;
export function gaf() {
if (__wakaru_gaf_initialized) return;
__wakaru_gaf_initialized = true;
x(), sCe(), Cy(), RFl(), Q0s(), wp(), o1s = lDi.memo(lDi.forwardRef(function(t, n) {
    const { render: i, className: r, value: s, defaultValue: o, onValueChange: a, disabled: c = !1, style: l, "aria-labelledby": u, ...h } = t, [p, g] = lDi.useState(void 0), [f, v] = Mre({
        controlled: s,
        default: o,
        name: "MenuRadioGroup"
    }), b = su((A, R)=>{
        a?.(A, R), !R.isCanceled && v(A);
    }), T = kp("div", t, {
        state: {
            disabled: c
        },
        ref: n,
        props: {
            role: "group",
            "aria-labelledby": u ?? p,
            "aria-disabled": c || void 0,
            ...h
        }
    }), E = lDi.useMemo(()=>({
            value: f,
            setValue: b,
            disabled: c
        }), [
        f,
        b,
        c
    ]);
    return DFl(R0n.Provider, {
        value: g,
        children: DFl(cDi.Provider, {
            value: E,
            children: T
        })
    });
})), process.env.NODE_ENV !== "production" && (o1s.displayName = "MenuRadioGroup");

}
