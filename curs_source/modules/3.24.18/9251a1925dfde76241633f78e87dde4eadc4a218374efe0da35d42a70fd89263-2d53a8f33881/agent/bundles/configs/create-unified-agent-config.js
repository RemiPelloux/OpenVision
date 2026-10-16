import { init_tool_config } from "./tool-config.js";
import { init_ask_mode_system_reminder } from "../prompts/ask-mode-system-reminder.js";
import { init_debug_mode_system_reminder } from "../prompts/debug-mode-system-reminder.js";
import { init_plan_mode_system_reminder } from "../prompts/plan-mode-system-reminder.js";
import { init_system } from "../prompts/system.js";
import { init_triage_mode_system_reminder } from "../prompts/triage-mode-system-reminder.js";
import { init_agent_config } from "../utils/agent-config.js";
import { init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
var __wakaru_init_create_unified_agent_config_initialized = false;
export function init_create_unified_agent_config() {
if (__wakaru_init_create_unified_agent_config_initialized) return;
__wakaru_init_create_unified_agent_config_initialized = true;
"use strict";
init_agent_pb();
init_ask_mode_system_reminder();
init_debug_mode_system_reminder();
init_plan_mode_system_reminder();
init_system();
init_triage_mode_system_reminder();
init_agent_config();
init_tool_config();

}
