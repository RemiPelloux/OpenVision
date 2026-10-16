import { E } from "./tslib.es6.js";
var mZd, gZd, cSt;
export { cSt, gZd, mZd };
var __wakaru_aT_initialized = false;
export function aT() {
if (__wakaru_aT_initialized) return;
__wakaru_aT_initialized = true;
E(), mZd = /transform|translate|scale|rotate|perspective|filter/, gZd = /paint|layout|strict|content/, cSt = (t)=>!!t && t !== "none";

}
