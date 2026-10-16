var ALL_RUNTIME_SETTING_SOURCES, VALID_RUNTIME_SETTING_SOURCES;
export { ALL_RUNTIME_SETTING_SOURCES, VALID_RUNTIME_SETTING_SOURCES };
var __wakaru_init_setting_sources_initialized = false;
export function init_setting_sources() {
if (__wakaru_init_setting_sources_initialized) return;
__wakaru_init_setting_sources_initialized = true;
"use strict";
ALL_RUNTIME_SETTING_SOURCES = [
    "project",
    "user",
    "team",
    "mdm",
    "plugins"
];
VALID_RUNTIME_SETTING_SOURCES = new Set([
    ...ALL_RUNTIME_SETTING_SOURCES,
    "all"
]);

}
