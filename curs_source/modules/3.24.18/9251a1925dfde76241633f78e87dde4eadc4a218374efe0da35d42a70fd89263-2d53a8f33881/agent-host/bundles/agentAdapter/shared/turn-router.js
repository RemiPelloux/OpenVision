var alwaysConnectRouter;
export { alwaysConnectRouter };
var __wakaru_init_turn_router_initialized = false;
export function init_turn_router() {
if (__wakaru_init_turn_router_initialized) return;
__wakaru_init_turn_router_initialized = true;
"use strict";
alwaysConnectRouter = ()=>({
        runtime: "connect",
        reason: "managed-local-unavailable",
        disposition: "expected"
    });

}
