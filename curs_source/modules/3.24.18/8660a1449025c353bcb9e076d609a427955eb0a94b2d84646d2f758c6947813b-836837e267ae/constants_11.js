import { SJo, ljy } from "./FieldControlDataAttributes.js";
import { E } from "./tslib.es6.js";
var Jli, r7t, Xah, wne;
export { Jli, Xah, r7t, wne };
var __wakaru_BY_initialized = false;
export function BY() {
if (__wakaru_BY_initialized) return;
__wakaru_BY_initialized = true;
E(), ljy(), Jli = {
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
}, r7t = {
    valid: null,
    touched: !1,
    dirty: !1,
    filled: !1,
    focused: !1
}, Xah = {
    disabled: !1,
    ...r7t
}, wne = {
    valid (t) {
        return t === null ? null : t ? {
            [SJo.valid]: ""
        } : {
            [SJo.invalid]: ""
        };
    }
};

}
