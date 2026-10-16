import { VCp } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { KCp } from "./useNumberFieldStepperButton.js";
import * as kS1 from "./react-runtime/react/esm-index-production.js";
var ePa;
export { ePa };
var __wakaru_wS1_initialized = false;
export function wS1() {
if (__wakaru_wS1_initialized) return;
__wakaru_wS1_initialized = true;
E(), KCp(), ePa = kS1.forwardRef(function(e, n) {
    return VCp(e, n, !0);
}), process.env.NODE_ENV !== "production" && (ePa.displayName = "NumberFieldIncrement");

}
