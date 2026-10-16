import { init_jsx_runtime } from "../../../prompt-jsx/dist/jsx-runtime.js";
var __wakaru_init_host_environment_initialized = false;
export function init_host_environment() {
if (__wakaru_init_host_environment_initialized) return;
__wakaru_init_host_environment_initialized = true;
"use strict";
init_jsx_runtime();

}
