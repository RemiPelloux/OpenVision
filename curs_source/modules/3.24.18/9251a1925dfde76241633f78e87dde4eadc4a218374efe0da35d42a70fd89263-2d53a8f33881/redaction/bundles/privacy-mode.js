var PrivacyMode2;
export { PrivacyMode2 };
var __wakaru_init_privacy_mode_initialized = false;
export function init_privacy_mode() {
if (__wakaru_init_privacy_mode_initialized) return;
__wakaru_init_privacy_mode_initialized = true;
"use strict";
PrivacyMode2 = {
    UNSPECIFIED: 0,
    NO_STORAGE: 1,
    NO_TRAINING: 2,
    USAGE_DATA_TRAINING_ALLOWED: 3,
    USAGE_CODEBASE_TRAINING_ALLOWED: 4
};

}
