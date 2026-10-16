import { x } from "./tslib.es6.js";
var lef;
export { lef };
var __wakaru_vCs_initialized = false;
export function vCs() {
if (__wakaru_vCs_initialized) return;
__wakaru_vCs_initialized = true;
x(), lef = String.prototype.codePointAt == null ? (e, t)=>(e.charCodeAt(t) & 64512) === 55296 ? (e.charCodeAt(t) - 55296) * 1024 + e.charCodeAt(t + 1) - 56320 + 65536 : e.charCodeAt(t) : ((e, t)=>e.codePointAt(t));

}
