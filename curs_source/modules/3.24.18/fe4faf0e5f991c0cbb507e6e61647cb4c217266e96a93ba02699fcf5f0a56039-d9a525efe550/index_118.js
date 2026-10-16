import { i } from "./plugin-brand-icon.js";
function yMe(r) {
    if (typeof r != "object" || r === null) return !1;
    const e = Object.getPrototypeOf(r);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in r) && !(Symbol.iterator in r);
}
export { yMe };
var __wakaru_w4i_initialized = false;
export function w4i() {
if (__wakaru_w4i_initialized) return;
__wakaru_w4i_initialized = true;
i(yMe, "isPlainObject");

}
