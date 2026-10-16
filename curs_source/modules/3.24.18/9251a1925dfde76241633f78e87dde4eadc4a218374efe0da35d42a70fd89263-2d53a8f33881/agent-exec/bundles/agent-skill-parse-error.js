var SKILL_MISSING_DESCRIPTION_ERROR, READ_ERROR_PREFIX, FRONTMATTER_ERROR_PREFIX;
export { FRONTMATTER_ERROR_PREFIX, READ_ERROR_PREFIX, SKILL_MISSING_DESCRIPTION_ERROR };
var __wakaru_init_agent_skill_parse_error_initialized = false;
export function init_agent_skill_parse_error() {
if (__wakaru_init_agent_skill_parse_error_initialized) return;
__wakaru_init_agent_skill_parse_error_initialized = true;
"use strict";
SKILL_MISSING_DESCRIPTION_ERROR = "Description is required";
READ_ERROR_PREFIX = "Failed to read skill file: ";
FRONTMATTER_ERROR_PREFIX = "Invalid skill frontmatter: ";

}
