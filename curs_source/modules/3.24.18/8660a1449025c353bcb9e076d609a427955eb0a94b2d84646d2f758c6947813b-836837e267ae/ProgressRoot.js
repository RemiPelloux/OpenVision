import { Lm, uL } from "./LYd.js";
import { h5r, m9h } from "./ProgressRootContext.js";
import { ySn } from "./formatNumber.js";
import { $kS, FkS } from "./ipa.js";
import { g9h, gga } from "./stateAttributesMapping_5.js";
import { E } from "./tslib.es6.js";
import { Om } from "./useRenderElement.js";
import { Fwe } from "./useValueAsRef.js";
import { WHe, Z5e } from "./visuallyHidden.js";
import * as _pi from "./react-runtime/react/esm-index-production.js";
import { jsx as f9h } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as jkS } from "./react-runtime/react/esm-jsx-runtime-production.js";
var SSn;
export { SSn };
var __wakaru_fga_initialized = false;
export function fga() {
if (__wakaru_fga_initialized) return;
__wakaru_fga_initialized = true;
E(), Fwe(), WHe(), ySn(), Om(), m9h(), g9h(), SSn = _pi.forwardRef(function(e, n) {
    const { format: i, getAriaValueText: r = $kS, locale: s, max: o = 100, min: a = 0, value: l, render: c, className: u, children: d, style: h, ...p } = e, [g, f] = _pi.useState(), _ = uL(i);
    let b = "indeterminate";
    Number.isFinite(l) && (b = l === o ? "complete" : "progressing");
    const y = FkS(l, s, _.current), S = _pi.useMemo(()=>({
            status: b
        }), [
        b
    ]), k = {
        "aria-labelledby": g,
        "aria-valuemax": o,
        "aria-valuemin": a,
        "aria-valuenow": l ?? void 0,
        "aria-valuetext": r(y, l),
        role: "progressbar",
        children: jkS(_pi.Fragment, {
            children: [
                d,
                f9h("span", {
                    role: "presentation",
                    style: Z5e,
                    children: "x"
                })
            ]
        })
    }, C = _pi.useMemo(()=>({
            formattedValue: y,
            max: o,
            min: a,
            setLabelId: f,
            state: S,
            status: b,
            value: l
        }), [
        y,
        o,
        a,
        f,
        S,
        b,
        l
    ]), T = Lm("div", e, {
        state: S,
        ref: n,
        props: [
            k,
            p
        ],
        stateAttributesMapping: gga
    });
    return f9h(h5r.Provider, {
        value: C,
        children: T
    });
}), process.env.NODE_ENV !== "production" && (SSn.displayName = "ProgressRoot");

}
