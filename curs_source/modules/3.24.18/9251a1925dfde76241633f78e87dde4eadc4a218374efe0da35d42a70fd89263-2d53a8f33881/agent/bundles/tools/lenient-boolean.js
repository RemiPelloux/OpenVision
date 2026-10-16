import { init_shim } from "../shims/shim.js";
import { defineShim } from "../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var stringifiedBoolean;
export { stringifiedBoolean };
var __wakaru_init_lenient_boolean_initialized = false;
export function init_lenient_boolean() {
if (__wakaru_init_lenient_boolean_initialized) return;
__wakaru_init_lenient_boolean_initialized = true;
"use strict";
init_zod();
init_shim();
stringifiedBoolean = defineShim({
    name: "stringified_boolean"
});

}
