var CLOUD_SPECIFIC_INSTRUCTIONS_HEADER2, CLOUD_SPECIFIC_INSTRUCTIONS_SEPARATOR2;
export { CLOUD_SPECIFIC_INSTRUCTIONS_HEADER2, CLOUD_SPECIFIC_INSTRUCTIONS_SEPARATOR2 };
var __wakaru_init_cloud_rules_service_initialized = false;
export function init_cloud_rules_service() {
if (__wakaru_init_cloud_rules_service_initialized) return;
__wakaru_init_cloud_rules_service_initialized = true;
"use strict";
CLOUD_SPECIFIC_INSTRUCTIONS_HEADER2 = "## Cursor Cloud specific instructions";
CLOUD_SPECIFIC_INSTRUCTIONS_SEPARATOR2 = `

${CLOUD_SPECIFIC_INSTRUCTIONS_HEADER2}
`;

}
