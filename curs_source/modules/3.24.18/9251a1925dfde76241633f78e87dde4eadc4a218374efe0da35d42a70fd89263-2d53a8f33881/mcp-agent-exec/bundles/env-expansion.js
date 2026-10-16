var ENV_VAR_PATTERN2;
export { ENV_VAR_PATTERN2 };
var __wakaru_init_env_expansion2_initialized = false;
export function init_env_expansion2() {
if (__wakaru_init_env_expansion2_initialized) return;
__wakaru_init_env_expansion2_initialized = true;
"use strict";
ENV_VAR_PATTERN2 = /\$\{(?:env:([A-Za-z_][A-Za-z0-9_]*)|([^:}]+)(?::-([^}]*))?)\}/g;

}
