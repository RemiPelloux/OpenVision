import { B2i, oJl } from "./ComboboxGroupContext.js";
import { WQl } from "./GroupCollectionContext.js";
import { tUf } from "./f0s.js";
import { kp } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { wp } from "./useRenderElement.js";
import * as JPs from "./react-runtime/react/esm-index-production.js";
import { jsx as aJl } from "./react-runtime/react/esm-jsx-runtime-production.js";
var X4t;
export { X4t };
var __wakaru_cJl_initialized = false;
export function cJl() {
if (__wakaru_cJl_initialized) return;
__wakaru_cJl_initialized = true;
x(), wp(), oJl(), WQl(), X4t = JPs.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, items: o, ...a } = t, [c, l] = JPs.useState(), u = JPs.useMemo(()=>({
            labelId: c,
            setLabelId: l,
            items: o
        }), [
        c,
        l,
        o
    ]), h = kp("div", t, {
        ref: n,
        props: [
            {
                role: "group",
                "aria-labelledby": c
            },
            a
        ]
    }), p = aJl(B2i.Provider, {
        value: u,
        children: h
    });
    return o ? aJl(tUf, {
        items: o,
        children: p
    }) : p;
}), process.env.NODE_ENV !== "production" && (X4t.displayName = "ComboboxGroup");

}
