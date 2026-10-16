import { init_dist27 } from "../../redaction/dist/index.js";
var MANUALLY_ATTACHED_SKILLS_REGEX;
export { MANUALLY_ATTACHED_SKILLS_REGEX };
var __wakaru_init_skill_persistence_initialized = false;
export function init_skill_persistence() {
if (__wakaru_init_skill_persistence_initialized) return;
__wakaru_init_skill_persistence_initialized = true;
"use strict";
init_dist27();
MANUALLY_ATTACHED_SKILLS_REGEX = /<manually_attached_skills>[\s\S]*?<\/manually_attached_skills>/g;

}
