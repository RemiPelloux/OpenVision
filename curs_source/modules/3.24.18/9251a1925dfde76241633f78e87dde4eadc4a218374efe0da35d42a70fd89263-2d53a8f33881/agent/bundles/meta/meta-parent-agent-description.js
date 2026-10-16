import { init_core5 } from "../tools/core.js";
import { init_meta_parent_completion_protocol } from "../utils/meta-parent-completion-protocol.js";
import { init_jsx_runtime } from "../../../prompt-jsx/dist/jsx-runtime.js";
var __wakaru_init_meta_parent_agent_description_initialized = false;
export function init_meta_parent_agent_description() {
if (__wakaru_init_meta_parent_agent_description_initialized) return;
__wakaru_init_meta_parent_agent_description_initialized = true;
"use strict";
init_jsx_runtime();
init_core5();
init_meta_parent_completion_protocol();

}
