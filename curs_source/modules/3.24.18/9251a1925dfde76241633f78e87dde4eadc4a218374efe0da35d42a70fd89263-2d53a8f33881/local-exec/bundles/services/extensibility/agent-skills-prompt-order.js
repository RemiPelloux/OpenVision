import { init_skill_dedupe } from "./skill-dedupe.js";
import { init_skill_discovery } from "./skill-discovery.js";
var import_node_path67, SkillPromptTier;
export { SkillPromptTier, import_node_path67 };
var __wakaru_init_agent_skills_prompt_order_initialized = false;
export function init_agent_skills_prompt_order() {
if (__wakaru_init_agent_skills_prompt_order_initialized) return;
__wakaru_init_agent_skills_prompt_order_initialized = true;
"use strict";
import_node_path67 = require("node:path");
init_skill_dedupe();
init_skill_discovery();
(function(SkillPromptTier2) {
    SkillPromptTier2[SkillPromptTier2["Builtin"] = 0] = "Builtin";
    SkillPromptTier2[SkillPromptTier2["UserStore"] = 1] = "UserStore";
    SkillPromptTier2[SkillPromptTier2["UserHome"] = 2] = "UserHome";
    SkillPromptTier2[SkillPromptTier2["Workspace"] = 3] = "Workspace";
    SkillPromptTier2[SkillPromptTier2["Plugin"] = 4] = "Plugin";
})(SkillPromptTier || (SkillPromptTier = {}));

}
