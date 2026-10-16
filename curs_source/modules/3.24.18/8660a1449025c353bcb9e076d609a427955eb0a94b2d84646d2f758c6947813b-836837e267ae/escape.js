import { E } from "./tslib.es6.js";
var bKy;
export { bKy };
var __wakaru_yKy_initialized = false;
export function yKy() {
if (__wakaru_yKy_initialized) return;
__wakaru_yKy_initialized = true;
E(), bKy = String.prototype.codePointAt == null ? (t, e)=>(t.charCodeAt(e) & 64512) === 55296 ? (t.charCodeAt(e) - 55296) * 1024 + t.charCodeAt(e + 1) - 56320 + 65536 : t.charCodeAt(e) : ((t, e)=>t.codePointAt(e));

}
