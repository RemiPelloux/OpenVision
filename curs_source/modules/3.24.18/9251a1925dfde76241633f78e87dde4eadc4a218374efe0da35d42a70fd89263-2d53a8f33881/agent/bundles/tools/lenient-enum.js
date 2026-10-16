import { init_shim } from "../shims/shim.js";
import { defineShim } from "../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var enumCasing;
export { enumCasing };
var __wakaru_init_lenient_enum_initialized = false;
export function init_lenient_enum() {
if (__wakaru_init_lenient_enum_initialized) return;
__wakaru_init_lenient_enum_initialized = true;
"use strict";
init_zod();
init_shim();
enumCasing = defineShim({
    name: "enum_casing"
});

}
