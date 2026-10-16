var MANAGED_LOCAL_LAUNCHED_DEFAULTS;
export { MANAGED_LOCAL_LAUNCHED_DEFAULTS };
var __wakaru_init_managed_local_launched_defaults_initialized = false;
export function init_managed_local_launched_defaults() {
if (__wakaru_init_managed_local_launched_defaults_initialized) return;
__wakaru_init_managed_local_launched_defaults_initialized = true;
"use strict";
MANAGED_LOCAL_LAUNCHED_DEFAULTS = {
    maxDirectMcpTools: 100,
    maxAdvertisedTools: 300,
    enableToolArgPreservation: true,
    enableImageFiles: true,
    enableSemanticSearch: false
};

}
