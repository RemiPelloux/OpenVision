import { init_agent_config } from "../utils/agent-config.js";
var CLI_AGENT_TYPE_DESCRIPTION, IDE_AGENT_TYPE_DESCRIPTION;
export { CLI_AGENT_TYPE_DESCRIPTION, IDE_AGENT_TYPE_DESCRIPTION };
var __wakaru_init_agent_type_description_initialized = false;
export function init_agent_type_description() {
if (__wakaru_init_agent_type_description_initialized) return;
__wakaru_init_agent_type_description_initialized = true;
"use strict";
init_agent_config();
CLI_AGENT_TYPE_DESCRIPTION = "You are an interactive CLI tool that helps users with software engineering tasks. Use the instructions below and the tools available to you to assist the user.";
IDE_AGENT_TYPE_DESCRIPTION = "You operate in Cursor.";

}
