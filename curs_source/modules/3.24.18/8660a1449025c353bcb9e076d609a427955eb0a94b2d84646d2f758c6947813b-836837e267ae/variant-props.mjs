import { E } from "./tslib.es6.js";
var gRs, fRs;
export { fRs, gRs };
var __wakaru_FXl_initialized = false;
export function FXl() {
if (__wakaru_FXl_initialized) return;
__wakaru_FXl_initialized = true;
E(), gRs = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit"
], fRs = [
    "initial",
    ...gRs
];

}
