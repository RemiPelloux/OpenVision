import { x } from "./tslib.es6.js";
var B5g;
export { B5g };
var __wakaru_U5g_initialized = false;
export function U5g() {
if (__wakaru_U5g_initialized) return;
__wakaru_U5g_initialized = true;
x(), B5g = String.prototype.codePointAt == null ? (e, t)=>(e.charCodeAt(t) & 64512) === 55296 ? (e.charCodeAt(t) - 55296) * 1024 + e.charCodeAt(t + 1) - 56320 + 65536 : e.charCodeAt(t) : ((e, t)=>e.codePointAt(t));

}
