import { F3l, IDi } from "./FieldControl.js";
import { x } from "./tslib.es6.js";
import * as jcf from "./react-runtime/react/esm-index-production.js";
import { jsx as qcf } from "./react-runtime/react/esm-jsx-runtime-production.js";
var Q1s;
export { Q1s };
var __wakaru_zcf_initialized = false;
export function zcf() {
if (__wakaru_zcf_initialized) return;
__wakaru_zcf_initialized = true;
x(), F3l(), Q1s = jcf.forwardRef(function(t, n) {
    return qcf(IDi, {
        ref: n,
        ...t
    });
}), process.env.NODE_ENV !== "production" && (Q1s.displayName = "Input");

}
