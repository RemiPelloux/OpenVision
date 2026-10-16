import { Lm } from "./LYd.js";
import { Gpa, Zhi } from "./MenuGroupContext.js";
import { E } from "./tslib.es6.js";
import { Om } from "./useRenderElement.js";
import * as QFh from "./react-runtime/react/esm-index-production.js";
import { jsx as UyS } from "./react-runtime/react/esm-jsx-runtime-production.js";
var qpa;
export { qpa };
var __wakaru_jyS_initialized = false;
export function jyS() {
if (__wakaru_jyS_initialized) return;
__wakaru_jyS_initialized = true;
E(), Om(), Gpa(), qpa = QFh.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, [a, l] = QFh.useState(void 0), c = Lm("div", e, {
        ref: n,
        props: {
            role: "group",
            "aria-labelledby": a,
            ...o
        }
    });
    return UyS(Zhi.Provider, {
        value: l,
        children: c
    });
}), process.env.NODE_ENV !== "production" && (qpa.displayName = "MenuGroup");

}
