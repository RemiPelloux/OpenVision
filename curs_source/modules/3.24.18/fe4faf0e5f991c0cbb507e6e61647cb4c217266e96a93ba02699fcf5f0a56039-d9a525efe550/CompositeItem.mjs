import { J_, Tl, vd } from "./empty.mjs";
import { i } from "./plugin-brand-icon.js";
import { a$t, qer } from "./useCompositeItem.mjs";
import { Ki, ea } from "./useRenderElement.mjs";
function SIe(r) {
    const { render: e, className: a, style: s, state: l = Tl, props: u = J_, refs: p = J_, metadata: m, stateAttributesMapping: b, tag: g = "div", ..._ } = r, { compositeProps: v, compositeRef: x } = a$t({
        metadata: m
    });
    return Ki(g, r, {
        state: l,
        ref: [
            ...p,
            x
        ],
        props: [
            v,
            ...u,
            _
        ],
        stateAttributesMapping: b
    });
}
export { SIe };
var __wakaru_b$t_initialized = false;
export function b$t() {
if (__wakaru_b$t_initialized) return;
__wakaru_b$t_initialized = true;
"use client";
vd(), ea(), qer(), i(SIe, "CompositeItem");

}
