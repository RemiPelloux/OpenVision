var DEFAULT_HARNESS_RECOVERY_CONFIG, HARNESS_RECOVERY_MAX_RETRY_AFTER_MS;
export { DEFAULT_HARNESS_RECOVERY_CONFIG, HARNESS_RECOVERY_MAX_RETRY_AFTER_MS };
var __wakaru_init_harness_lifecycle_initialized = false;
export function init_harness_lifecycle() {
if (__wakaru_init_harness_lifecycle_initialized) return;
__wakaru_init_harness_lifecycle_initialized = true;
"use strict";
DEFAULT_HARNESS_RECOVERY_CONFIG = Object.freeze({
    policy: "recover",
    startJitterMs: 3e4,
    probeBaseMs: 3e5,
    probeMaxMs: 36e5,
    rememberedMountsMax: 16
});
HARNESS_RECOVERY_MAX_RETRY_AFTER_MS = 24 * 60 * 6e4;

}
