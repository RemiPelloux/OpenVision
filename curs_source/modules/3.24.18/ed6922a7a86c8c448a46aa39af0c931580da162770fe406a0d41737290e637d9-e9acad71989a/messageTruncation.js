import { x } from "./tslib.es6.js";
var ZVr, tpn, npn;
export { ZVr, npn, tpn };
var __wakaru_Wog_initialized = false;
export function Wog() {
if (__wakaru_Wog_initialized) return;
__wakaru_Wog_initialized = true;
"use strict";
x(), ZVr = 2e4, tpn = (e)=>new TextEncoder().encode(e).length, npn = (e)=>tpn(JSON.stringify(e));

}
