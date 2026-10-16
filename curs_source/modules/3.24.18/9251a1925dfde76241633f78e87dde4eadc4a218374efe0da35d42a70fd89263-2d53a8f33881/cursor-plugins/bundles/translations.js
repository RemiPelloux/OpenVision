import { init_identifiers } from "./identifiers.js";
import { init_loader } from "./loader.js";
var import_node_path36;
export { import_node_path36 };
var __wakaru_init_translations_initialized = false;
export function init_translations() {
if (__wakaru_init_translations_initialized) return;
__wakaru_init_translations_initialized = true;
"use strict";
import_node_path36 = require("node:path");
init_identifiers();
init_loader();

}
