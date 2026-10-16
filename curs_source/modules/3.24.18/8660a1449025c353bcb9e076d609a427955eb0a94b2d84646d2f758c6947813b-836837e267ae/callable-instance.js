import { E } from "./tslib.es6.js";
var xyh;
export { xyh };
var __wakaru_WtS_initialized = false;
export function WtS() {
if (__wakaru_WtS_initialized) return;
__wakaru_WtS_initialized = true;
E(), xyh = (function(t) {
    const i = this.constructor.prototype, r = i[t], s = function() {
        return r.apply(s, arguments);
    };
    return Object.setPrototypeOf(s, i), s;
});

}
