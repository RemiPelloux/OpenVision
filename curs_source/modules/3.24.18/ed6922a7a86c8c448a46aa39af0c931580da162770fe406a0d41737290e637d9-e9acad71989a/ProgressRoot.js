import { LBl, ODi } from "./ProgressRootContext.js";
import { Qlf, nuf } from "./f0s.js";
import { Q0n } from "./formatNumber.js";
import { KP, kp } from "./qIc.js";
import { NBl, STs } from "./stateAttributesMapping_5.js";
import { x } from "./tslib.es6.js";
import { wp } from "./useRenderElement.js";
import { oCe } from "./useValueAsRef.js";
import { oYe, sYe } from "./visuallyHidden.js";
import * as J0n from "./react-runtime/react/esm-index-production.js";
import { jsx as OBl } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as tuf } from "./react-runtime/react/esm-jsx-runtime-production.js";
var c6t;
export { c6t };
var __wakaru_kTs_initialized = false;
export function kTs() {
if (__wakaru_kTs_initialized) return;
__wakaru_kTs_initialized = true;
x(), oCe(), oYe(), Q0n(), wp(), LBl(), NBl(), c6t = J0n.forwardRef(function(t, n) {
    const { format: i, getAriaValueText: r = nuf, locale: s, max: o = 100, min: a = 0, value: c, render: l, className: u, children: h, style: p, ...g } = t, [f, v] = J0n.useState(), b = KP(i);
    let y = "indeterminate";
    Number.isFinite(c) && (y = c === o ? "complete" : "progressing");
    const T = Qlf(c, s, b.current), E = J0n.useMemo(()=>({
            status: y
        }), [
        y
    ]), A = {
        "aria-labelledby": f,
        "aria-valuemax": o,
        "aria-valuemin": a,
        "aria-valuenow": c ?? void 0,
        "aria-valuetext": r(T, c),
        role: "progressbar",
        children: tuf(J0n.Fragment, {
            children: [
                h,
                OBl("span", {
                    role: "presentation",
                    style: sYe,
                    children: "x"
                })
            ]
        })
    }, R = J0n.useMemo(()=>({
            formattedValue: T,
            max: o,
            min: a,
            setLabelId: v,
            state: E,
            status: y,
            value: c
        }), [
        T,
        o,
        a,
        v,
        E,
        y,
        c
    ]), D = kp("div", t, {
        state: E,
        ref: n,
        props: [
            A,
            g
        ],
        stateAttributesMapping: STs
    });
    return OBl(ODi.Provider, {
        value: R,
        children: D
    });
}), process.env.NODE_ENV !== "production" && (c6t.displayName = "ProgressRoot");

}
