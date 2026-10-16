import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_dist29 } from "../../../agent-summarization/dist/index.js";
import { init_constants5 } from "./constants.js";
import { init_token_estimate2 } from "./token-estimate.js";
import { init_overridable_config } from "../utils/overridable-config.js";
import { init_dist } from "../../../context/dist/index.js";
var logger47;
export { logger47 };
var __wakaru_init_self_summary_initialized = false;
export function init_self_summary() {
if (__wakaru_init_self_summary_initialized) return;
__wakaru_init_self_summary_initialized = true;
"use strict";
init_dist29();
init_dist();
init_overridable_config();
init_constants5();
init_token_estimate2();
init_constants5();
init_token_estimate2();
logger47 = createLogger("@anysphere/agent");

}
