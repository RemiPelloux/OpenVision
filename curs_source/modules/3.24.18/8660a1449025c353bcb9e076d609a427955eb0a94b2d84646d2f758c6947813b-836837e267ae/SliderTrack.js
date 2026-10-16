import { Lm } from "./LYd.js";
import { Xjr } from "./SliderRootContext.js";
import { zRa } from "./ipa.js";
import { Kjr, T_i } from "./stateAttributesMapping_10.js";
import { E } from "./tslib.es6.js";
import { Om } from "./useRenderElement.js";
import * as Tb1 from "./react-runtime/react/esm-index-production.js";
var XRa;
export { XRa };
var __wakaru_Eb1_initialized = false;
export function Eb1() {
if (__wakaru_Eb1_initialized) return;
__wakaru_Eb1_initialized = true;
E(), Om(), Xjr(), Kjr(), XRa = Tb1.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, { state: a } = zRa();
    return Lm("div", e, {
        state: a,
        ref: n,
        props: [
            {
                style: {
                    position: "relative"
                }
            },
            o
        ],
        stateAttributesMapping: T_i
    });
}), process.env.NODE_ENV !== "production" && (XRa.displayName = "SliderTrack");

}
