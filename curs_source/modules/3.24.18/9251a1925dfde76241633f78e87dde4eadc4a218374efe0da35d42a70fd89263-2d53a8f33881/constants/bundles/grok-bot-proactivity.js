var PROACTIVE_TYPES, PRIMARY_INTRO_FIRE_TYPE, MAX_INACTIVITY_THRESHOLD_MINUTES, proactiveTypes;
export { MAX_INACTIVITY_THRESHOLD_MINUTES, PRIMARY_INTRO_FIRE_TYPE, PROACTIVE_TYPES, proactiveTypes };
var __wakaru_init_grok_bot_proactivity_initialized = false;
export function init_grok_bot_proactivity() {
if (__wakaru_init_grok_bot_proactivity_initialized) return;
__wakaru_init_grok_bot_proactivity_initialized = true;
"use strict";
PROACTIVE_TYPES = [
    "inactivity",
    "periodic"
];
PRIMARY_INTRO_FIRE_TYPE = "primary_intro";
MAX_INACTIVITY_THRESHOLD_MINUTES = 13 * 24 * 60;
proactiveTypes = new Set(PROACTIVE_TYPES);

}
