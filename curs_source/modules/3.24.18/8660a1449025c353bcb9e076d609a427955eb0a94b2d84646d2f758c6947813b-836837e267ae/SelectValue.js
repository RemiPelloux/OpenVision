import { Ic, Lm, Qnt, hjy, ilh } from "./LYd.js";
import { tWe } from "./SelectRootContext.js";
import { o7t } from "./resolveValueLabel.js";
import { _S, iit } from "./store_4.js";
import { E } from "./tslib.es6.js";
import { Om } from "./useRenderElement.js";
import { TW } from "./useStore.js";
import * as Ijy from "./react-runtime/react/esm-index-production.js";
var mlh, OJo;
export { OJo, mlh };
var __wakaru_xjy_initialized = false;
export function xjy() {
if (__wakaru_xjy_initialized) return;
__wakaru_xjy_initialized = true;
E(), Om(), tWe(), o7t(), iit(), TW(), mlh = {
    value: ()=>null
}, OJo = Ijy.forwardRef(function(e, n) {
    const { className: i, render: r, children: s, placeholder: o, style: a, ...l } = e, { store: c, valueRef: u } = Qnt(), d = Ic(c, _S.value), h = Ic(c, _S.items), p = Ic(c, _S.itemToStringLabel), g = Ic(c, _S.hasSelectedValue), f = !g && o != null && s == null, _ = Ic(c, _S.hasNullItemLabel, f), b = {
        value: d,
        placeholder: !g
    };
    let y = null;
    return typeof s == "function" ? y = s(d) : s != null ? y = s : !g && o != null && !_ ? y = o : Array.isArray(d) ? y = hjy(d, h, p) : y = ilh(d, h, p), Lm("span", e, {
        state: b,
        ref: [
            n,
            u
        ],
        props: [
            {
                children: y
            },
            l
        ],
        stateAttributesMapping: mlh
    });
}), process.env.NODE_ENV !== "production" && (OJo.displayName = "SelectValue");

}
