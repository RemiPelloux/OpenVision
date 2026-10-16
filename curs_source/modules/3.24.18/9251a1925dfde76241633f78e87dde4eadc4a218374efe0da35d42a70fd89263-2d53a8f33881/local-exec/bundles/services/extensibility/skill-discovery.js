var import_node_path37, BUILTIN_SKILL_CONFIG_DIR, SKILL_CONFIG_DIRS, EXTENSIBILITY_MARKER_DIRS, EXCLUDED_CODEX_SKILL_NAMES;
export { BUILTIN_SKILL_CONFIG_DIR, EXCLUDED_CODEX_SKILL_NAMES, EXTENSIBILITY_MARKER_DIRS, SKILL_CONFIG_DIRS, import_node_path37 };
var __wakaru_init_skill_discovery_initialized = false;
export function init_skill_discovery() {
if (__wakaru_init_skill_discovery_initialized) return;
__wakaru_init_skill_discovery_initialized = true;
"use strict";
import_node_path37 = require("node:path");
BUILTIN_SKILL_CONFIG_DIR = {
    configDir: ".cursor",
    subdir: "skills-cursor",
    thirdParty: false,
    builtin: true
};
SKILL_CONFIG_DIRS = [
    {
        configDir: ".cursor",
        subdir: "skills",
        thirdParty: false,
        builtin: false
    },
    {
        configDir: ".claude",
        subdir: "skills",
        thirdParty: true,
        builtin: false
    },
    {
        configDir: ".codex",
        subdir: "skills",
        thirdParty: true,
        builtin: false
    },
    {
        configDir: ".grok",
        subdir: "skills",
        thirdParty: true,
        builtin: false
    },
    {
        configDir: ".agents",
        subdir: "skills",
        thirdParty: false,
        builtin: false
    },
    BUILTIN_SKILL_CONFIG_DIR
];
EXTENSIBILITY_MARKER_DIRS = new Set(SKILL_CONFIG_DIRS.map((dir)=>dir.configDir));
EXCLUDED_CODEX_SKILL_NAMES = new Set([
    "imagegen",
    "openai-docs",
    "opneai-docs",
    "plugin-creator",
    "skill-creator",
    "skill-installer"
]);

}
