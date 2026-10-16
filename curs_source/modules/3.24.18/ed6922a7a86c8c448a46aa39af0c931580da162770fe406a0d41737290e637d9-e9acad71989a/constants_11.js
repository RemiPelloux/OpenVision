import { Shs, rPg } from "./FieldControlDataAttributes.js";
import { x } from "./tslib.es6.js";
var NSn, qgt, dsl, Ore;
export { NSn, Ore, dsl, qgt };
var __wakaru_sY_initialized = false;
export function sY() {
if (__wakaru_sY_initialized) return;
__wakaru_sY_initialized = true;
x(), rPg(), NSn = {
    badInput: !1,
    customError: !1,
    patternMismatch: !1,
    rangeOverflow: !1,
    rangeUnderflow: !1,
    stepMismatch: !1,
    tooLong: !1,
    tooShort: !1,
    typeMismatch: !1,
    valid: null,
    valueMissing: !1
}, qgt = {
    valid: null,
    touched: !1,
    dirty: !1,
    filled: !1,
    focused: !1
}, dsl = {
    disabled: !1,
    ...qgt
}, Ore = {
    valid (e) {
        return e === null ? null : e ? {
            [Shs.valid]: ""
        } : {
            [Shs.invalid]: ""
        };
    }
};

}
