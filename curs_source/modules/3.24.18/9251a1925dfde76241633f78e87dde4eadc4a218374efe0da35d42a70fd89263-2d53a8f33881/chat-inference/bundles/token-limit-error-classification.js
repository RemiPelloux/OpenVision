import { init_prompt_executor } from "./prompt-executor.js";
var OUTPUT_TOKEN_LIMIT_ERROR_SUBSTRING, CANONICAL_INPUT_TOKEN_LIMIT_MESSAGE;
export { CANONICAL_INPUT_TOKEN_LIMIT_MESSAGE, OUTPUT_TOKEN_LIMIT_ERROR_SUBSTRING };
var __wakaru_init_token_limit_error_classification_initialized = false;
export function init_token_limit_error_classification() {
if (__wakaru_init_token_limit_error_classification_initialized) return;
__wakaru_init_token_limit_error_classification_initialized = true;
"use strict";
init_prompt_executor();
OUTPUT_TOKEN_LIMIT_ERROR_SUBSTRING = "exceeded max output tokens";
CANONICAL_INPUT_TOKEN_LIMIT_MESSAGE = "input token limit exceeded";

}
