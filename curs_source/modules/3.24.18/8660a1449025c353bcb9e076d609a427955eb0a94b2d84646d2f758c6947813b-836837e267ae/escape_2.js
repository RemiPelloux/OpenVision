import { E } from "./tslib.es6.js";
var imS;
export { imS };
var __wakaru_nha_initialized = false;
export function nha() {
if (__wakaru_nha_initialized) return;
__wakaru_nha_initialized = true;
E(), imS = String.prototype.codePointAt == null ? (t, e)=>(t.charCodeAt(e) & 64512) === 55296 ? (t.charCodeAt(e) - 55296) * 1024 + t.charCodeAt(e + 1) - 56320 + 65536 : t.charCodeAt(e) : ((t, e)=>t.codePointAt(e));

}
