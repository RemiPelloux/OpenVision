import { E } from "./tslib.es6.js";
var fxh, vxh, _xh, bxh, hla;
export { _xh, bxh, fxh, hla, vxh };
var __wakaru_AsS_initialized = false;
export function AsS() {
if (__wakaru_AsS_initialized) return;
__wakaru_AsS_initialized = true;
E(), fxh = /["&'<>`]/g, vxh = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, _xh = /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g, bxh = /[|\\{}()[\]^$+*?.]/g, hla = new WeakMap;

}
