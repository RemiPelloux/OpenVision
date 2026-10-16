import { Lm } from "./LYd.js";
import { u$r } from "./NumberFieldRootContext.js";
import { P2a } from "./ipa.js";
import { N_i, d$r } from "./stateAttributesMapping_11.js";
import { E } from "./tslib.es6.js";
import { Om } from "./useRenderElement.js";
import * as pS1 from "./react-runtime/react/esm-index-production.js";
var Q2a;
export { Q2a };
var __wakaru_mS1_initialized = false;
export function mS1() {
if (__wakaru_mS1_initialized) return;
__wakaru_mS1_initialized = true;
E(), u$r(), d$r(), Om(), Q2a = pS1.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, { state: a } = P2a();
    return Lm("div", e, {
        ref: n,
        state: a,
        props: [
            {
                role: "group"
            },
            o
        ],
        stateAttributesMapping: N_i
    });
}), process.env.NODE_ENV !== "production" && (Q2a.displayName = "NumberFieldGroup");

}
