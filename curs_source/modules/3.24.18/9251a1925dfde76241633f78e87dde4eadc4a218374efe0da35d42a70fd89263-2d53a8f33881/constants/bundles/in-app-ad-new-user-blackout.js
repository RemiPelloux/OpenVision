var IN_APP_AD_NEW_USER_BLACKOUT_MS;
export { IN_APP_AD_NEW_USER_BLACKOUT_MS };
var __wakaru_init_in_app_ad_new_user_blackout_initialized = false;
export function init_in_app_ad_new_user_blackout() {
if (__wakaru_init_in_app_ad_new_user_blackout_initialized) return;
__wakaru_init_in_app_ad_new_user_blackout_initialized = true;
"use strict";
IN_APP_AD_NEW_USER_BLACKOUT_MS = 3 * 24 * 60 * 60 * 1e3;

}
