import { init_shim } from "../shims/shim.js";
import { defineShim } from "../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var stringifiedNumber;
export { stringifiedNumber };
var __wakaru_init_lenient_number_initialized = false;
export function init_lenient_number() {
if (__wakaru_init_lenient_number_initialized) return;
__wakaru_init_lenient_number_initialized = true;
"use strict";
init_zod();
init_shim();
stringifiedNumber = defineShim({
    name: "stringified_number"
});

}
