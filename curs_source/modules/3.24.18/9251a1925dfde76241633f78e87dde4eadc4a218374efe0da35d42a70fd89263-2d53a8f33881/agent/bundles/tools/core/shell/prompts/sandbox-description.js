import { init_sandbox_shared } from "./sandbox-shared.js";
import { init_jsx_runtime } from "../../../../../../prompt-jsx/dist/jsx-runtime.js";
var __wakaru_init_sandbox_description_initialized = false;
export function init_sandbox_description() {
if (__wakaru_init_sandbox_description_initialized) return;
__wakaru_init_sandbox_description_initialized = true;
"use strict";
init_jsx_runtime();
init_sandbox_shared();

}
