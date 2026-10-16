import { init_env_expansion2 } from "./env-expansion.js";
import { init_mcp_config_schema } from "../../mcp-core/dist/config/mcp-config-schema.js";
import { init_main } from "../../node_modules/.pnpm/jsonc-parser@3.3.1/node_modules/jsonc-parser/lib/esm/main.js";
var import_promises24;
export { import_promises24 };
var __wakaru_init_config_initialized = false;
export function init_config() {
if (__wakaru_init_config_initialized) return;
__wakaru_init_config_initialized = true;
"use strict";
import_promises24 = require("node:fs/promises");
init_mcp_config_schema();
init_main();
init_env_expansion2();
init_mcp_config_schema();

}
