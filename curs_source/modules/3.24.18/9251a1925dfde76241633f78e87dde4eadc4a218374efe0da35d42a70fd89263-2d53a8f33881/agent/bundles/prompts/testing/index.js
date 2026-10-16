import { init_parent } from "./parent.js";
import { init_jsx_runtime } from "../../../../prompt-jsx/dist/jsx-runtime.js";
var __wakaru_init_testing_initialized = false;
export function init_testing() {
if (__wakaru_init_testing_initialized) return;
__wakaru_init_testing_initialized = true;
"use strict";
init_jsx_runtime();
init_parent();

}
