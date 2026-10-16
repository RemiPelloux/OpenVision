import { $ma } from "./CheckboxGroupContext.js";
import { XOr, ppi } from "./FieldItemContext.js";
import { N7 } from "./FieldRootContext.js";
import { Lm, Vj } from "./LYd.js";
import { VOr, o4h } from "./LabelableProvider.js";
import { BY, wne } from "./constants_11.js";
import { m4h } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { Om } from "./useRenderElement.js";
import { jsx as f4h } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as g4h from "./react-runtime/react/esm-index-production.js";
var Hma;
export { Hma };
var __wakaru_x1S_initialized = false;
export function x1S() {
if (__wakaru_x1S_initialized) return;
__wakaru_x1S_initialized = true;
E(), N7(), BY(), Om(), ppi(), $ma(), o4h(), Hma = g4h.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, disabled: o = !1, ...a } = e, { state: l, disabled: c } = Vj(!1), u = c || o, d = {
        ...l,
        disabled: u
    }, h = m4h(), g = h?.allValues !== void 0 ? h?.parent.id : void 0, f = g4h.useMemo(()=>({
            disabled: u
        }), [
        u
    ]), _ = Lm("div", e, {
        ref: n,
        state: d,
        props: a,
        stateAttributesMapping: wne
    });
    return f4h(VOr, {
        controlId: g,
        children: f4h(XOr.Provider, {
            value: f,
            children: _
        })
    });
}), process.env.NODE_ENV !== "production" && (Hma.displayName = "FieldItem");

}
