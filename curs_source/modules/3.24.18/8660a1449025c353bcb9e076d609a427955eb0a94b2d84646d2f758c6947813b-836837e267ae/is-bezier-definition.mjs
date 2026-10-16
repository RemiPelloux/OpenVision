import { E } from "./tslib.es6.js";
var IYl;
export { IYl };
var __wakaru_dbv_initialized = false;
export function dbv() {
if (__wakaru_dbv_initialized) return;
__wakaru_dbv_initialized = true;
E(), IYl = (t)=>Array.isArray(t) && typeof t[0] == "number";

}
