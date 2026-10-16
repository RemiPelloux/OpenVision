import { Q0s, R0n } from "./MenuGroupContext.js";
import { kp } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { wp } from "./useRenderElement.js";
import * as SFl from "./react-runtime/react/esm-index-production.js";
import { jsx as naf } from "./react-runtime/react/esm-jsx-runtime-production.js";
var J0s;
export { J0s };
var __wakaru_iaf_initialized = false;
export function iaf() {
if (__wakaru_iaf_initialized) return;
__wakaru_iaf_initialized = true;
x(), wp(), Q0s(), J0s = SFl.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, ...o } = t, [a, c] = SFl.useState(void 0), l = kp("div", t, {
        ref: n,
        props: {
            role: "group",
            "aria-labelledby": a,
            ...o
        }
    });
    return naf(R0n.Provider, {
        value: c,
        children: l
    });
}), process.env.NODE_ENV !== "production" && (J0s.displayName = "MenuGroup");

}
