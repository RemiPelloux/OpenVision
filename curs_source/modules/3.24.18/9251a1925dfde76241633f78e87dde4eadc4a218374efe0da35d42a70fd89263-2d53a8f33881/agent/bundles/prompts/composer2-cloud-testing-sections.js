import { init_common10 } from "../common.js";
import { init_claude_helpers } from "./claude-helpers.js";
import { init_cloud_agent2 } from "./cloud-agent.js";
import { init_cloud_meta_agent } from "./cloud-meta-agent/index.js";
import { init_shared2 } from "./shared.js";
import { init_testing } from "./testing/index.js";
import { init_agent_config } from "../utils/agent-config.js";
import { init_jsx_runtime } from "../../../prompt-jsx/dist/jsx-runtime.js";
var __wakaru_init_composer2_cloud_testing_sections_initialized = false;
export function init_composer2_cloud_testing_sections() {
if (__wakaru_init_composer2_cloud_testing_sections_initialized) return;
__wakaru_init_composer2_cloud_testing_sections_initialized = true;
"use strict";
init_jsx_runtime();
init_common10();
init_agent_config();
init_claude_helpers();
init_cloud_agent2();
init_cloud_meta_agent();
init_shared2();
init_testing();

}
