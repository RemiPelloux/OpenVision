import { x } from "./tslib.es6.js";
var o_l;
export { o_l };
var __wakaru_cHg_initialized = false;
export function cHg() {
if (__wakaru_cHg_initialized) return;
__wakaru_cHg_initialized = true;
x(), o_l = (function(e) {
    const i = this.constructor.prototype, r = i[e], s = function() {
        return r.apply(s, arguments);
    };
    return Object.setPrototypeOf(s, i), s;
});

}
