import { init_in_app_ad_new_user_blackout } from "./in-app-ad-new-user-blackout.js";
var HEALTHY_USER_MIN_ACCOUNT_AGE_MS, EMPTY_AUDIENCE;
export { EMPTY_AUDIENCE, HEALTHY_USER_MIN_ACCOUNT_AGE_MS };
var __wakaru_init_cloud_onboarding_audiences_initialized = false;
export function init_cloud_onboarding_audiences() {
if (__wakaru_init_cloud_onboarding_audiences_initialized) return;
__wakaru_init_cloud_onboarding_audiences_initialized = true;
"use strict";
init_in_app_ad_new_user_blackout();
HEALTHY_USER_MIN_ACCOUNT_AGE_MS = 30 * 24 * 60 * 60 * 1e3;
EMPTY_AUDIENCE = {
    never_used_cloud_agents: false,
    not_legacy_privacy_mode: false,
    team_cloud_agents_enabled: false,
    not_brand_new_user: false,
    healthy_existing_user: false,
    cloud_onboarding_eligible: false,
    can_see_fullscreen_flow: false,
    can_see_sidebar_pill: false
};

}
