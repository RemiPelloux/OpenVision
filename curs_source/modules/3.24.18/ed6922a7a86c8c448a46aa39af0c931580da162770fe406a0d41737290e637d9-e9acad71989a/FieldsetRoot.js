import { F1s, kDi } from "./FieldsetRootContext.js";
import { O1s } from "./f0s.js";
import { kp } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { wp } from "./useRenderElement.js";
import * as XOs from "./react-runtime/react/esm-index-production.js";
import { jsx as oev } from "./react-runtime/react/esm-jsx-runtime-production.js";
var ZOs;
export { ZOs };
var __wakaru_aev_initialized = false;
export function aev() {
if (__wakaru_aev_initialized) return;
__wakaru_aev_initialized = true;
x(), F1s(), wp(), ZOs = XOs.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, disabled: o = !1, ...a } = t, [c, l] = XOs.useState(void 0), h = O1s(!0)?.disabled || o, g = kp("fieldset", t, {
        ref: n,
        state: {
            disabled: h
        },
        props: [
            {
                "aria-labelledby": c,
                disabled: h
            },
            a
        ]
    }), f = XOs.useMemo(()=>({
            legendId: c,
            setLegendId: l,
            disabled: h
        }), [
        c,
        l,
        h
    ]);
    return oev(kDi.Provider, {
        value: f,
        children: g
    });
}), process.env.NODE_ENV !== "production" && (ZOs.displayName = "FieldsetRoot");

}
