import { BY, wne } from "./constants_11.js";
import { E } from "./tslib.es6.js";
var N_i;
export { N_i };
var __wakaru_d$r_initialized = false;
export function d$r() {
if (__wakaru_d$r_initialized) return;
__wakaru_d$r_initialized = true;
E(), BY(), N_i = {
    inputValue: ()=>null,
    value: ()=>null,
    ...wne
};

}
