var INT32_MIN2, INT32_MAX2;
export { INT32_MAX2, INT32_MIN2 };
var __wakaru_init_int32_initialized = false;
export function init_int32() {
if (__wakaru_init_int32_initialized) return;
__wakaru_init_int32_initialized = true;
"use strict";
INT32_MIN2 = -(2 ** 31);
INT32_MAX2 = 2 ** 31 - 1;

}
