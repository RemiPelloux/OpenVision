import { init_dist32 } from "../../../prompt-jsx/dist/index.js";
import { init_jsx_runtime } from "../../../prompt-jsx/dist/jsx-runtime.js";
var PROMPT_SUGGESTION_MAX_WORDS;
export { PROMPT_SUGGESTION_MAX_WORDS };
var __wakaru_init_prompt_suggestion_initialized = false;
export function init_prompt_suggestion() {
if (__wakaru_init_prompt_suggestion_initialized) return;
__wakaru_init_prompt_suggestion_initialized = true;
"use strict";
init_jsx_runtime();
init_dist32();
PROMPT_SUGGESTION_MAX_WORDS = 12;

}
