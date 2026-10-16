var AGENT_HOST_MODULE_CHANNELS, AGENT_HOST_MODULE_SOURCES, AGENT_HOST_MODULE_SERVE_CAUSES, AGENT_HOST_MODULE_STATIC_GENERATION, AGENT_HOST_LOOPS, AGENT_HOST_TURN_RUNTIMES, AGENT_HOST_MODULE_METRIC_TAG_KEYS, GENERATION, COMMIT, BUILT, SHORT_VERSION_LENGTH, SHORT_VERSION;
export { AGENT_HOST_LOOPS, AGENT_HOST_MODULE_CHANNELS, AGENT_HOST_MODULE_METRIC_TAG_KEYS, AGENT_HOST_MODULE_SERVE_CAUSES, AGENT_HOST_MODULE_SOURCES, AGENT_HOST_MODULE_STATIC_GENERATION, AGENT_HOST_TURN_RUNTIMES, BUILT, COMMIT, GENERATION, SHORT_VERSION, SHORT_VERSION_LENGTH };
var __wakaru_init_agent_host_module_initialized = false;
export function init_agent_host_module() {
if (__wakaru_init_agent_host_module_initialized) return;
__wakaru_init_agent_host_module_initialized = true;
"use strict";
AGENT_HOST_MODULE_CHANNELS = [
    "dogfood",
    "candidate",
    "stable",
    "local",
    "other",
    "unknown"
];
AGENT_HOST_MODULE_SOURCES = [
    "installed",
    "floor",
    "static"
];
AGENT_HOST_MODULE_SERVE_CAUSES = [
    "current",
    "no_current",
    "kill_switch",
    "disabled",
    "rejected",
    "not_installed",
    "not_claimed",
    "revert",
    "no_harness"
];
AGENT_HOST_MODULE_STATIC_GENERATION = "static";
AGENT_HOST_LOOPS = [
    "backend",
    "local-loop",
    "private-inference"
];
AGENT_HOST_TURN_RUNTIMES = [
    "connect",
    "managed-local"
];
AGENT_HOST_MODULE_METRIC_TAG_KEYS = [
    "module_version",
    "module_channel",
    "serving"
];
GENERATION = /^[0-9a-f]{64}$/;
COMMIT = /^[0-9a-f]{40}$/;
BUILT = /^\d{8}-\d{6}$/;
SHORT_VERSION_LENGTH = 12;
SHORT_VERSION = /^[0-9a-f]{12}$/;

}
