import { i } from "./plugin-brand-icon.js";
var Yhr;
export { Yhr };
var __wakaru_A4i_initialized = false;
export function A4i() {
if (__wakaru_A4i_initialized) return;
__wakaru_A4i_initialized = true;
Yhr = i((function(r) {
    const s = this.constructor.prototype, l = s[r], u = i(function() {
        return l.apply(u, arguments);
    }, "apply");
    return Object.setPrototypeOf(u, s), u;
}), "CallableInstance");

}
