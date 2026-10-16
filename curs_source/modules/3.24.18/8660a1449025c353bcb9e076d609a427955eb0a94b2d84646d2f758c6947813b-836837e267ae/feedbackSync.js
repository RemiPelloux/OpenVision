import { E$f, F8l, I$f, T8l } from "./BA.js";
import { E } from "./tslib.es6.js";
var j8l;
export { j8l };
var __wakaru_D3w_initialized = false;
export function D3w() {
if (__wakaru_D3w_initialized) return;
__wakaru_D3w_initialized = true;
E(), F8l(), j8l = T8l({
    getModalIntegration: ()=>E$f,
    getScreenshotIntegration: ()=>I$f
});

}
