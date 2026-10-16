import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
import { init_manifest_parser } from "./manifest-parser.js";
import { require_ajv } from "../../node_modules/.pnpm/ajv@8.18.0/node_modules/ajv/dist/ajv.js";
var import_ajv, ajv;
export { ajv, import_ajv };
var __wakaru_init_plugin_variables_validation_initialized = false;
export function init_plugin_variables_validation() {
if (__wakaru_init_plugin_variables_validation_initialized) return;
__wakaru_init_plugin_variables_validation_initialized = true;
"use strict";
import_ajv = __toESM(require_ajv(), 1);
init_manifest_parser();
ajv = new import_ajv.Ajv({
    allErrors: true,
    strict: false,
    validateSchema: true
});

}
