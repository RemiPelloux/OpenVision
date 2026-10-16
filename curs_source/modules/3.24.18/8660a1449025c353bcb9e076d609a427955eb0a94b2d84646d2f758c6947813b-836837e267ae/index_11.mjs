import { Lut } from "./clamp.mjs";
import { xR } from "./index_10.mjs";
import { E } from "./tslib.es6.js";
var LQt, cOn, lFi;
export { LQt, cOn, lFi };
var __wakaru_OQt_initialized = false;
export function OQt() {
if (__wakaru_OQt_initialized) return;
__wakaru_OQt_initialized = true;
E(), xR(), LQt = {
    test: (t)=>typeof t == "number",
    parse: parseFloat,
    transform: (t)=>t
}, cOn = {
    ...LQt,
    transform: (t)=>Lut(0, 1, t)
}, lFi = {
    ...LQt,
    default: 1
};

}
