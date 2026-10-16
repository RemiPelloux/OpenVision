import { E } from "./tslib.es6.js";
var wOa;
export { wOa };
var __wakaru_AM1_initialized = false;
export function AM1() {
if (__wakaru_AM1_initialized) return;
__wakaru_AM1_initialized = true;
E(), wOa = {
    now () {
        return (wOa.delegate || Date).now();
    },
    delegate: void 0
};

}
