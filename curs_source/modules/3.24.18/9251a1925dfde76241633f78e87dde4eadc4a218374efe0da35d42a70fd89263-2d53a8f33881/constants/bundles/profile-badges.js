var PROFILE_BADGE_CURSOR_AMBASSADOR, PROFILE_BADGE_CURSOR_TEAM, PROFILE_BADGE_IDS, PROFILE_METADATA_BADGES_KEY;
export { PROFILE_BADGE_CURSOR_AMBASSADOR, PROFILE_BADGE_CURSOR_TEAM, PROFILE_BADGE_IDS, PROFILE_METADATA_BADGES_KEY };
var __wakaru_init_profile_badges_initialized = false;
export function init_profile_badges() {
if (__wakaru_init_profile_badges_initialized) return;
__wakaru_init_profile_badges_initialized = true;
"use strict";
PROFILE_BADGE_CURSOR_AMBASSADOR = "cursor_ambassador";
PROFILE_BADGE_CURSOR_TEAM = "cursor_team";
PROFILE_BADGE_IDS = [
    PROFILE_BADGE_CURSOR_AMBASSADOR,
    PROFILE_BADGE_CURSOR_TEAM
];
PROFILE_METADATA_BADGES_KEY = "badges";

}
