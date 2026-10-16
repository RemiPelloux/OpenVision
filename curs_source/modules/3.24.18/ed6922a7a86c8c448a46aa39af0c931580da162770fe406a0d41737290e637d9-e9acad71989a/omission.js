import { x } from "./tslib.es6.js";
var dEl;
export { dEl };
var __wakaru_hEl_initialized = false;
export function hEl() {
if (__wakaru_hEl_initialized) return;
__wakaru_hEl_initialized = true;
x(), dEl = {}.hasOwnProperty;

}
