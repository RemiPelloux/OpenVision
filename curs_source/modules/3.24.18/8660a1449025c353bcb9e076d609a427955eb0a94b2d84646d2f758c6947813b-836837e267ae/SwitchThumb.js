import { Lm } from "./LYd.js";
import { L6h } from "./SwitchRootContext.js";
import { BSS } from "./ipa.js";
import { O6h, mma } from "./stateAttributesMapping_3.js";
import { E } from "./tslib.es6.js";
import { Om } from "./useRenderElement.js";
import * as qSS from "./react-runtime/react/esm-index-production.js";
var _ma;
export { _ma };
var __wakaru_zSS_initialized = false;
export function zSS() {
if (__wakaru_zSS_initialized) return;
__wakaru_zSS_initialized = true;
E(), L6h(), Om(), O6h(), _ma = qSS.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, a = BSS();
    return Lm("span", e, {
        state: a,
        ref: n,
        stateAttributesMapping: mma,
        props: o
    });
}), process.env.NODE_ENV !== "production" && (_ma.displayName = "SwitchThumb");

}
