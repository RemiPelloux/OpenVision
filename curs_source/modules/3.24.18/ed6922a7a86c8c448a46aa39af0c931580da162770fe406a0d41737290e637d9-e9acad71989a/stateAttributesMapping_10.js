import { Ore, sY } from "./constants_11.js";
import { x } from "./tslib.es6.js";
var kxn;
export { kxn };
var __wakaru_IFi_initialized = false;
export function IFi() {
if (__wakaru_IFi_initialized) return;
__wakaru_IFi_initialized = true;
x(), sY(), kxn = {
    inputValue: ()=>null,
    value: ()=>null,
    ...Ore
};

}
