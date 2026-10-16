import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_common12 } from "./common.js";
import { init_request_id } from "../utils/request-id.js";
import { init_smart_mode_permissions_instructions } from "../utils/smart-mode-permissions-instructions.js";
import { init_dist } from "../../../context/dist/index.js";
import { init_dist21 } from "../../../cursor-config/dist/index.js";
var logger72;
export { logger72 };
var __wakaru_init_summarization_tool_context_initialized = false;
export function init_summarization_tool_context() {
if (__wakaru_init_summarization_tool_context_initialized) return;
__wakaru_init_summarization_tool_context_initialized = true;
"use strict";
init_dist();
init_dist21();
init_request_id();
init_smart_mode_permissions_instructions();
init_common12();
logger72 = createLogger("@anysphere/agent:summarization-tool-context");

}
