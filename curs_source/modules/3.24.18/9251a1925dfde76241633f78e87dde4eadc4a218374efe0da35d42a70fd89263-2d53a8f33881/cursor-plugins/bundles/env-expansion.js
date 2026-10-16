var ENV_VAR_PATTERN;
export { ENV_VAR_PATTERN };
var __wakaru_init_env_expansion_initialized = false;
export function init_env_expansion() {
if (__wakaru_init_env_expansion_initialized) return;
__wakaru_init_env_expansion_initialized = true;
"use strict";
ENV_VAR_PATTERN = /\$\{(?:env:([A-Za-z_][A-Za-z0-9_]*)|([^:}]+)(?::-([^}]*))?)\}/g;

}
