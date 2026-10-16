import { init_gpt_helpers } from "./gpt-helpers.js";
import { init_shared2 } from "./shared.js";
import { init_synthesis } from "./subagent/synthesis.js";
import { init_jsx_runtime } from "../../../prompt-jsx/dist/jsx-runtime.js";
var __wakaru_init_codex_initialized = false;
export function init_codex() {
if (__wakaru_init_codex_initialized) return;
__wakaru_init_codex_initialized = true;
"use strict";
init_jsx_runtime();
init_gpt_helpers();
init_shared2();
init_synthesis();

}
