import { A$f, F8l, T8l } from "./BA.js";
import { P$f } from "./lazyLoadIntegration.js";
import { E } from "./tslib.es6.js";
var M$f;
export { M$f };
var __wakaru_M3w_initialized = false;
export function M3w() {
if (__wakaru_M3w_initialized) return;
__wakaru_M3w_initialized = true;
E(), F8l(), P$f(), M$f = T8l({
    lazyLoadIntegration: A$f
});

}
