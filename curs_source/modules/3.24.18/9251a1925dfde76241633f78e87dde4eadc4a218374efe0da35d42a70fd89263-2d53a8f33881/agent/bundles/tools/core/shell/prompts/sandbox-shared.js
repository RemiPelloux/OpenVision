import { init_lenient_array } from "../../../lenient-array.js";
import { init_zod } from "../../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var __wakaru_init_sandbox_shared_initialized = false;
export function init_sandbox_shared() {
if (__wakaru_init_sandbox_shared_initialized) return;
__wakaru_init_sandbox_shared_initialized = true;
"use strict";
init_zod();
init_lenient_array();

}
