import { init_shared2 } from "../shared.js";
import { init_shared4 } from "./shared.js";
import { init_jsx_runtime } from "../../../../prompt-jsx/dist/jsx-runtime.js";
var __wakaru_init_parent_initialized = false;
export function init_parent() {
if (__wakaru_init_parent_initialized) return;
__wakaru_init_parent_initialized = true;
"use strict";
init_jsx_runtime();
init_shared2();
init_shared4();

}
