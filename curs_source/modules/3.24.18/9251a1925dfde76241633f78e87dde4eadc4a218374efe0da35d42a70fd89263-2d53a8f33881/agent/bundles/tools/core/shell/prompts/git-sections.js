import { init_agent_config } from "../../../../utils/agent-config.js";
import { init_dist32 } from "../../../../../../prompt-jsx/dist/index.js";
import { init_jsx_runtime } from "../../../../../../prompt-jsx/dist/jsx-runtime.js";
var COMPOSER_USER_REQUEST_SCOPE;
export { COMPOSER_USER_REQUEST_SCOPE };
var __wakaru_init_git_sections_initialized = false;
export function init_git_sections() {
if (__wakaru_init_git_sections_initialized) return;
__wakaru_init_git_sections_initialized = true;
"use strict";
init_jsx_runtime();
init_dist32();
init_agent_config();
COMPOSER_USER_REQUEST_SCOPE = " in the user query or in a different user rule";

}
