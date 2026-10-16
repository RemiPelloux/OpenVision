import { init_esm5 } from "../../node_modules/.pnpm/lru-cache@11.2.5/node_modules/lru-cache/dist/esm/index.js";
import { init_dist3 } from "../../utils/dist/index.js";
var import_node_crypto20;
export { import_node_crypto20 };
var __wakaru_init_caching_wrapper_initialized = false;
export function init_caching_wrapper() {
if (__wakaru_init_caching_wrapper_initialized) return;
__wakaru_init_caching_wrapper_initialized = true;
"use strict";
import_node_crypto20 = require("node:crypto");
init_dist3();
init_esm5();

}
