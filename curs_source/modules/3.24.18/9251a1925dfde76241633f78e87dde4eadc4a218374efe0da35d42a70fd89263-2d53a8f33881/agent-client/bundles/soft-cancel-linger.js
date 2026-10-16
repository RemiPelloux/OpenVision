var SOFT_CANCEL_TRANSPORT_LINGER_MS;
export { SOFT_CANCEL_TRANSPORT_LINGER_MS };
var __wakaru_init_soft_cancel_linger_initialized = false;
export function init_soft_cancel_linger() {
if (__wakaru_init_soft_cancel_linger_initialized) return;
__wakaru_init_soft_cancel_linger_initialized = true;
"use strict";
SOFT_CANCEL_TRANSPORT_LINGER_MS = 6e3;

}
