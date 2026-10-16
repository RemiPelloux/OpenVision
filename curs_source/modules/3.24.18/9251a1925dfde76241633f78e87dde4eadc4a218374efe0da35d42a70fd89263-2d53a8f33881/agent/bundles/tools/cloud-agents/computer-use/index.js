import { init_anthropic2 } from "./adapters/anthropic.js";
import { init_gemini2 } from "./adapters/gemini.js";
import { init_openai2 } from "./adapters/openai.js";
import { init_anthropic_tool } from "./anthropic-tool.js";
import { init_gemini_tool } from "./gemini-tool.js";
import { init_openai_tool } from "./openai-tool.js";
import { init_types14 } from "./types.js";
var __wakaru_init_computer_use5_initialized = false;
export function init_computer_use5() {
if (__wakaru_init_computer_use5_initialized) return;
__wakaru_init_computer_use5_initialized = true;
"use strict";
init_anthropic2();
init_gemini2();
init_openai2();
init_anthropic_tool();
init_gemini_tool();
init_openai_tool();
init_types14();

}
