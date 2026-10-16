import { Gcp, i7r } from "./ComboboxGroupContext.js";
import { Ccp } from "./GroupCollectionContext.js";
import { Lm } from "./LYd.js";
import { kZS } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { Om } from "./useRenderElement.js";
import * as oTa from "./react-runtime/react/esm-index-production.js";
import { jsx as qcp } from "./react-runtime/react/esm-jsx-runtime-production.js";
var L$t;
export { L$t };
var __wakaru_aTa_initialized = false;
export function aTa() {
if (__wakaru_aTa_initialized) return;
__wakaru_aTa_initialized = true;
E(), Om(), Gcp(), Ccp(), L$t = oTa.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, items: o, ...a } = e, [l, c] = oTa.useState(), u = oTa.useMemo(()=>({
            labelId: l,
            setLabelId: c,
            items: o
        }), [
        l,
        c,
        o
    ]), d = Lm("div", e, {
        ref: n,
        props: [
            {
                role: "group",
                "aria-labelledby": l
            },
            a
        ]
    }), h = qcp(i7r.Provider, {
        value: u,
        children: d
    });
    return o ? qcp(kZS, {
        items: o,
        children: h
    }) : h;
}), process.env.NODE_ENV !== "production" && (L$t.displayName = "ComboboxGroup");

}
