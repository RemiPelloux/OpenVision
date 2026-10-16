import { r3l } from "./SwitchRootContext.js";
import { ecf } from "./f0s.js";
import { kp } from "./qIc.js";
import { k1s, s3l } from "./stateAttributesMapping_3.js";
import { x } from "./tslib.es6.js";
import { wp } from "./useRenderElement.js";
import * as acf from "./react-runtime/react/esm-index-production.js";
var C1s;
export { C1s };
var __wakaru_ccf_initialized = false;
export function ccf() {
if (__wakaru_ccf_initialized) return;
__wakaru_ccf_initialized = true;
x(), r3l(), wp(), s3l(), C1s = acf.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, ...o } = t, a = ecf();
    return kp("span", t, {
        state: a,
        ref: n,
        stateAttributesMapping: k1s,
        props: o
    });
}), process.env.NODE_ENV !== "production" && (C1s.displayName = "SwitchThumb");

}
