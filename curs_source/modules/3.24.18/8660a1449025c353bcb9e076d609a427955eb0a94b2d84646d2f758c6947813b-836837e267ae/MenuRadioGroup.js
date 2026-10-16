import { Lm, pu, yne } from "./LYd.js";
import { Gpa, Zhi } from "./MenuGroupContext.js";
import { ROr, a6h } from "./MenuRadioGroupContext.js";
import { E } from "./tslib.es6.js";
import { __e } from "./useControlled.js";
import { Om } from "./useRenderElement.js";
import { Jy } from "./useStableCallback.js";
import * as POr from "./react-runtime/react/esm-index-production.js";
import { jsx as l6h } from "./react-runtime/react/esm-jsx-runtime-production.js";
var Qpa;
export { Qpa };
var __wakaru_QyS_initialized = false;
export function QyS() {
if (__wakaru_QyS_initialized) return;
__wakaru_QyS_initialized = true;
E(), __e(), Jy(), a6h(), Gpa(), Om(), Qpa = POr.memo(POr.forwardRef(function(e, n) {
    const { render: i, className: r, value: s, defaultValue: o, onValueChange: a, disabled: l = !1, style: c, "aria-labelledby": u, ...d } = e, [h, p] = POr.useState(void 0), [g, f] = yne({
        controlled: s,
        default: o,
        name: "MenuRadioGroup"
    }), _ = pu((k, C)=>{
        a?.(k, C), !C.isCanceled && f(k);
    }), y = Lm("div", e, {
        state: {
            disabled: l
        },
        ref: n,
        props: {
            role: "group",
            "aria-labelledby": u ?? h,
            "aria-disabled": l || void 0,
            ...d
        }
    }), S = POr.useMemo(()=>({
            value: g,
            setValue: _,
            disabled: l
        }), [
        g,
        _,
        l
    ]);
    return l6h(Zhi.Provider, {
        value: p,
        children: l6h(ROr.Provider, {
            value: S,
            children: y
        })
    });
})), process.env.NODE_ENV !== "production" && (Qpa.displayName = "MenuRadioGroup");

}
