import { external_exports } from "../../../../../external_exports.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var import_node_child_process18, import_node_fs39, import_promises53, DEFAULT_LOCAL_API_KEY_HELPER_TTL_MS, DEFAULT_LOCAL_API_KEY_HELPER_TIMEOUT_MS, EARLY_REFRESH_MS, REJECTION_REMINT_MIN_AGE_MS, LocalApiKeyHelperError, sharedHelpers, nonEmptyString2, finiteNumber3, helperJsonSchema, jwtPayloadSchema;
export { DEFAULT_LOCAL_API_KEY_HELPER_TIMEOUT_MS, DEFAULT_LOCAL_API_KEY_HELPER_TTL_MS, EARLY_REFRESH_MS, LocalApiKeyHelperError, REJECTION_REMINT_MIN_AGE_MS, finiteNumber3, helperJsonSchema, import_node_child_process18, import_node_fs39, import_promises53, jwtPayloadSchema, nonEmptyString2, sharedHelpers };
var __wakaru_init_api_key_helper_initialized = false;
export function init_api_key_helper() {
if (__wakaru_init_api_key_helper_initialized) return;
__wakaru_init_api_key_helper_initialized = true;
"use strict";
import_node_child_process18 = require("node:child_process");
import_node_fs39 = require("node:fs");
import_promises53 = require("node:fs/promises");
init_zod();
DEFAULT_LOCAL_API_KEY_HELPER_TTL_MS = 20 * 60 * 1e3;
DEFAULT_LOCAL_API_KEY_HELPER_TIMEOUT_MS = 3e4;
EARLY_REFRESH_MS = 6e4;
REJECTION_REMINT_MIN_AGE_MS = 3e4;
LocalApiKeyHelperError = class extends Error {
    constructor(){
        super(...arguments);
        this.name = "LocalApiKeyHelperError";
    }
};
sharedHelpers = new Map();
nonEmptyString2 = external_exports.string().transform((value)=>value.trim()).refine((value)=>value.length > 0).optional().catch(void 0);
finiteNumber3 = external_exports.number().finite().optional().catch(void 0);
helperJsonSchema = external_exports.object({
    access_token: nonEmptyString2,
    expires_in: finiteNumber3,
    refresh_token: nonEmptyString2
});
jwtPayloadSchema = external_exports.object({
    exp: finiteNumber3
});

}
