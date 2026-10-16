import { E } from "./tslib.es6.js";
var Lxf, Oxf, Wxt;
export { Lxf, Oxf, Wxt };
var __wakaru_t8_initialized = false;
export function t8() {
if (__wakaru_t8_initialized) return;
__wakaru_t8_initialized = true;
E(), Lxf = /transform|translate|scale|rotate|perspective|filter/, Oxf = /paint|layout|strict|content/, Wxt = (t)=>!!t && t !== "none";

}
