import { init_common10 } from "../common.js";
import { init_cloud_agent2 } from "./cloud-agent.js";
import { init_shared2 } from "./shared.js";
import { init_synthesis } from "./subagent/synthesis.js";
import { init_testing } from "./testing/index.js";
import { init_agent_config } from "../utils/agent-config.js";
import { init_jsx_runtime } from "../../../prompt-jsx/dist/jsx-runtime.js";
var __wakaru_init_gpt5_initialized = false;
export function init_gpt5() {
if (__wakaru_init_gpt5_initialized) return;
__wakaru_init_gpt5_initialized = true;
"use strict";
init_jsx_runtime();
init_common10();
init_agent_config();
init_cloud_agent2();
init_shared2();
init_synthesis();
init_testing();

}
