import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { init_token_estimate3 } from "../utils/token-estimate.js";
import { init_dist32 } from "../../../prompt-jsx/dist/index.js";
var INITIAL_SKILL_CATALOG_CONTEXT_FRACTION, FALLBACK_AGENT_TOKEN_LIMIT, TRUNCATED_DESCRIPTION_SUFFIX2, MIN_TRUNCATED_DESCRIPTION_LENGTH, MAX_TRUNCATED_DESCRIPTION_LENGTH, SHORT_DESCRIPTION_PATH_ONLY_THRESHOLD, MAX_OMITTED_DIRECTORY_COUNT, SAND_JTBD_GUIDANCE_SKILL_IDS, PROTECTED_SKILL_NAMES, PROTECTED_SKILL_NAME_PREFIXES, LOOP_PROTECTED_SKILL_NAMES;
export { FALLBACK_AGENT_TOKEN_LIMIT, INITIAL_SKILL_CATALOG_CONTEXT_FRACTION, LOOP_PROTECTED_SKILL_NAMES, MAX_OMITTED_DIRECTORY_COUNT, MAX_TRUNCATED_DESCRIPTION_LENGTH, MIN_TRUNCATED_DESCRIPTION_LENGTH, PROTECTED_SKILL_NAMES, PROTECTED_SKILL_NAME_PREFIXES, SAND_JTBD_GUIDANCE_SKILL_IDS, SHORT_DESCRIPTION_PATH_ONLY_THRESHOLD, TRUNCATED_DESCRIPTION_SUFFIX2 };
var __wakaru_init_skill_catalog_budget_initialized = false;
export function init_skill_catalog_budget() {
if (__wakaru_init_skill_catalog_budget_initialized) return;
__wakaru_init_skill_catalog_budget_initialized = true;
"use strict";
init_dist8();
init_dist32();
init_token_estimate3();
INITIAL_SKILL_CATALOG_CONTEXT_FRACTION = 0.02;
FALLBACK_AGENT_TOKEN_LIMIT = 2e5;
TRUNCATED_DESCRIPTION_SUFFIX2 = "...";
MIN_TRUNCATED_DESCRIPTION_LENGTH = 24;
MAX_TRUNCATED_DESCRIPTION_LENGTH = 480;
SHORT_DESCRIPTION_PATH_ONLY_THRESHOLD = 80;
MAX_OMITTED_DIRECTORY_COUNT = 5;
SAND_JTBD_GUIDANCE_SKILL_IDS = [
    "accommodation-booking",
    "flight-booking",
    "food-ordering",
    "job-search",
    "restaurant-booking",
    "restaurant-recommendations",
    "rideshare",
    "scheduling",
    "shopping"
];
PROTECTED_SKILL_NAMES = new Set([
    "canvas",
    "env-setup",
    "meetings",
    "visualize",
    ...SAND_JTBD_GUIDANCE_SKILL_IDS
]);
PROTECTED_SKILL_NAME_PREFIXES = [
    "site-playbooks-"
];
LOOP_PROTECTED_SKILL_NAMES = new Set([
    "loop"
]);

}
