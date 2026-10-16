var NOOP_RESILIENCE_LISTENER;
export { NOOP_RESILIENCE_LISTENER };
var __wakaru_init_resilience_events_initialized = false;
export function init_resilience_events() {
if (__wakaru_init_resilience_events_initialized) return;
__wakaru_init_resilience_events_initialized = true;
"use strict";
NOOP_RESILIENCE_LISTENER = Object.freeze({
    onDiskFull () {},
    onSymlinkRefused () {},
    onNetworkError () {},
    onThrottled () {},
    onMintGateStateChanged () {}
});

}
