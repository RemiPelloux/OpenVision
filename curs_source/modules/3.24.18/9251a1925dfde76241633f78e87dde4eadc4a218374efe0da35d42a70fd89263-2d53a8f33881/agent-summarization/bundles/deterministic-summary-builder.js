import { init_prompt_truncation } from "./prompt-truncation.js";
import { init_summarization_handler } from "./summarization-handler.js";
var DETERMINISTIC_FALLBACK_APPROX_CHARS_PER_TOKEN, DEFAULT_DETERMINISTIC_FALLBACK_WINDOW_RATIO, DETERMINISTIC_FALLBACK_FLOOR_CHARS, DETERMINISTIC_FALLBACK_CEILING_CHARS;
export { DEFAULT_DETERMINISTIC_FALLBACK_WINDOW_RATIO, DETERMINISTIC_FALLBACK_APPROX_CHARS_PER_TOKEN, DETERMINISTIC_FALLBACK_CEILING_CHARS, DETERMINISTIC_FALLBACK_FLOOR_CHARS };
var __wakaru_init_deterministic_summary_builder_initialized = false;
export function init_deterministic_summary_builder() {
if (__wakaru_init_deterministic_summary_builder_initialized) return;
__wakaru_init_deterministic_summary_builder_initialized = true;
"use strict";
init_prompt_truncation();
init_summarization_handler();
DETERMINISTIC_FALLBACK_APPROX_CHARS_PER_TOKEN = 4;
DEFAULT_DETERMINISTIC_FALLBACK_WINDOW_RATIO = 0.02;
DETERMINISTIC_FALLBACK_FLOOR_CHARS = 5e4;
DETERMINISTIC_FALLBACK_CEILING_CHARS = 32e5;

}
