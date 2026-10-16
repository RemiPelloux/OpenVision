import { Lm, Qnt, lea } from "./LYd.js";
import { cea } from "./SelectItemContext.js";
import { tWe } from "./SelectRootContext.js";
import { E } from "./tslib.es6.js";
import { Om } from "./useRenderElement.js";
import * as hea from "./react-runtime/react/esm-index-production.js";
var pea;
export { pea };
var __wakaru_c$y_initialized = false;
export function c$y() {
if (__wakaru_c$y_initialized) return;
__wakaru_c$y_initialized = true;
E(), tWe(), cea(), Om(), pea = hea.memo(hea.forwardRef(function(e, n) {
    const { index: i, textRef: r, selectedByFocus: s, hasRegistered: o } = lea(), { firstItemTextRef: a, selectedItemTextRef: l } = Qnt(), { render: c, className: u, style: d, ...h } = e, p = hea.useCallback((f)=>{
        f && (o && i === 0 && (a.current = f), o && s && (l.current = f));
    }, [
        a,
        l,
        i,
        s,
        o
    ]);
    return Lm("div", e, {
        ref: [
            p,
            n,
            r
        ],
        props: h
    });
})), process.env.NODE_ENV !== "production" && (pea.displayName = "SelectItemText");

}
