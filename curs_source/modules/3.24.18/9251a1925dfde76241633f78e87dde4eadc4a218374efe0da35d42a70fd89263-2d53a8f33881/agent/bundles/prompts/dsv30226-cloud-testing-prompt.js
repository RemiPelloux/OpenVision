import { init_claude_helpers } from "./claude-helpers.js";
import { init_cloud_agent2 } from "./cloud-agent.js";
import { init_composer2_cloud_testing_sections } from "./composer2-cloud-testing-sections.js";
import { init_shared2 } from "./shared.js";
import { init_system } from "./system.js";
import { init_agent_config } from "../utils/agent-config.js";
import { init_dist32 } from "../../../prompt-jsx/dist/index.js";
import { init_jsx_runtime } from "../../../prompt-jsx/dist/jsx-runtime.js";
var __wakaru_init_dsv30226_cloud_testing_prompt_initialized = false;
export function init_dsv30226_cloud_testing_prompt() {
if (__wakaru_init_dsv30226_cloud_testing_prompt_initialized) return;
__wakaru_init_dsv30226_cloud_testing_prompt_initialized = true;
"use strict";
init_jsx_runtime();
init_dist32();
init_agent_config();
init_claude_helpers();
init_cloud_agent2();
init_composer2_cloud_testing_sections();
init_shared2();
init_system();

}
