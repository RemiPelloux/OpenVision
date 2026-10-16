var MODE_DISPLAY_NAMES;
export { MODE_DISPLAY_NAMES };
var __wakaru_init_agent_mode_guidance_initialized = false;
export function init_agent_mode_guidance() {
if (__wakaru_init_agent_mode_guidance_initialized) return;
__wakaru_init_agent_mode_guidance_initialized = true;
"use strict";
MODE_DISPLAY_NAMES = {
    agent: "Agent",
    plan: "Plan",
    debug: "Debug",
    chat: "Ask",
    multitask: "Multitask"
};

}
