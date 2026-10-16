import { x } from "./tslib.es6.js";
var Zzs;
export { Zzs };
var __wakaru_apv_initialized = false;
export function apv() {
if (__wakaru_apv_initialized) return;
__wakaru_apv_initialized = true;
x(), Zzs = {
    now () {
        return (Zzs.delegate || Date).now();
    },
    delegate: void 0
};

}
