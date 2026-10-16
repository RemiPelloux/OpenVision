import { qOr, zOr } from "./FieldsetRootContext.js";
import { Lm } from "./LYd.js";
import { GOr } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { Om } from "./useRenderElement.js";
import { jsx as Ey1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as v2a from "./react-runtime/react/esm-index-production.js";
var _2a;
export { _2a };
var __wakaru_Iy1_initialized = false;
export function Iy1() {
if (__wakaru_Iy1_initialized) return;
__wakaru_Iy1_initialized = true;
E(), zOr(), Om(), _2a = v2a.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, disabled: o = !1, ...a } = e, [l, c] = v2a.useState(void 0), d = GOr(!0)?.disabled || o, p = Lm("fieldset", e, {
        ref: n,
        state: {
            disabled: d
        },
        props: [
            {
                "aria-labelledby": l,
                disabled: d
            },
            a
        ]
    }), g = v2a.useMemo(()=>({
            legendId: l,
            setLegendId: c,
            disabled: d
        }), [
        l,
        c,
        d
    ]);
    return Ey1(qOr.Provider, {
        value: g,
        children: p
    });
}), process.env.NODE_ENV !== "production" && (_2a.displayName = "FieldsetRoot");

}
