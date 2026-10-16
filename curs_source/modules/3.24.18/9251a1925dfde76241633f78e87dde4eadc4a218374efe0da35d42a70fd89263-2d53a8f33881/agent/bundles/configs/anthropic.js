import { init_common11 } from "./common.js";
import { init_dist35 } from "../index.js";
import { init_anthropic3 } from "../prompts/deprecated-do-not-use/anthropic.js";
import { init_core5 } from "../tools/core.js";
var __wakaru_init_anthropic4_initialized = false;
export function init_anthropic4() {
if (__wakaru_init_anthropic4_initialized) return;
__wakaru_init_anthropic4_initialized = true;
"use strict";
init_dist35();
init_anthropic3();
init_core5();
init_common11();

}
