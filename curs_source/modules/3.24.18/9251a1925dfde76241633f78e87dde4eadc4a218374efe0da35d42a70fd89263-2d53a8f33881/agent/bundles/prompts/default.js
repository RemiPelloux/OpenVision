import { init_common10 } from "../common.js";
import { init_claude_helpers } from "./claude-helpers.js";
import { init_cloud_agent2 } from "./cloud-agent.js";
import { init_gemini_helpers } from "./gemini-helpers.js";
import { init_gpt_helpers } from "./gpt-helpers.js";
import { init_shared2 } from "./shared.js";
import { init_slack_prompt_flags } from "./slack-prompt-flags.js";
import { init_synthesis } from "./subagent/synthesis.js";
import { init_testing } from "./testing/index.js";
import { init_agent_config } from "../utils/agent-config.js";
import { init_environment_setup_source } from "../utils/environment-setup-source.js";
import { init_jsx_runtime } from "../../../prompt-jsx/dist/jsx-runtime.js";
var __wakaru_init_default2_initialized = false;
export function init_default2() {
if (__wakaru_init_default2_initialized) return;
__wakaru_init_default2_initialized = true;
"use strict";
init_jsx_runtime();
init_common10();
init_agent_config();
init_environment_setup_source();
init_claude_helpers();
init_cloud_agent2();
init_gemini_helpers();
init_gpt_helpers();
init_shared2();
init_slack_prompt_flags();
init_synthesis();
init_testing();

}
