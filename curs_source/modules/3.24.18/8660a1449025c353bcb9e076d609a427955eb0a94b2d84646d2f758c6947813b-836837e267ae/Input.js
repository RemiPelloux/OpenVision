import { QOr, h4h } from "./FieldControl.js";
import { E } from "./tslib.es6.js";
import * as A1S from "./react-runtime/react/esm-index-production.js";
import { jsx as R1S } from "./react-runtime/react/esm-jsx-runtime-production.js";
var Wma;
export { Wma };
var __wakaru_P1S_initialized = false;
export function P1S() {
if (__wakaru_P1S_initialized) return;
__wakaru_P1S_initialized = true;
E(), h4h(), Wma = A1S.forwardRef(function(e, n) {
    return R1S(QOr, {
        ref: n,
        ...e
    });
}), process.env.NODE_ENV !== "production" && (Wma.displayName = "Input");

}
