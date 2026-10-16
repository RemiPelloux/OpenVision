import { PROMPT_REFERENCE_ID_REGEX_SOURCE, init_prompt_reference_contract } from "./prompt-reference-contract.js";
var REFERENCE_PATTERN, REFERENCE_CHECK_PATTERN;
export { REFERENCE_CHECK_PATTERN, REFERENCE_PATTERN };
var __wakaru_init_reference_resolver_initialized = false;
export function init_reference_resolver() {
if (__wakaru_init_reference_resolver_initialized) return;
__wakaru_init_reference_resolver_initialized = true;
"use strict";
init_prompt_reference_contract();
REFERENCE_PATTERN = new RegExp(String.raw`(?<!\\)\$(PROMPT_(${PROMPT_REFERENCE_ID_REGEX_SOURCE})|RESPONSE_([a-zA-Z0-9_-]+))(?![A-Za-z0-9_-])(?:\s*\[\s*(\d*)\s*:\s*(\d*)\s*\])?`, "g");
REFERENCE_CHECK_PATTERN = new RegExp(String.raw`(?<!\\)\$(PROMPT(?!_)|PROMPT_${PROMPT_REFERENCE_ID_REGEX_SOURCE}|RESPONSE_[a-zA-Z0-9_-]+)(?![A-Za-z0-9_-])`);

}
