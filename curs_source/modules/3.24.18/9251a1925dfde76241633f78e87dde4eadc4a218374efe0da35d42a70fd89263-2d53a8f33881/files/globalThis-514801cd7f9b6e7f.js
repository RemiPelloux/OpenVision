var _globalThis;
export { _globalThis };
var __wakaru_init_globalThis_initialized = false;
export function init_globalThis() {
if (__wakaru_init_globalThis_initialized) return;
__wakaru_init_globalThis_initialized = true;
_globalThis = typeof globalThis === "object" ? globalThis : global;

}
