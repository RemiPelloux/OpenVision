import { init_replace_file } from "./replace-file.js";
import { __toESM } from "../storage/sqlite-store.js";
import { external_exports } from "../../../external_exports.js";
import { init_zod } from "../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var fs35, path60, REVERTED_FILE, REVERTED_SCHEMA, REVERT_HOLD_MS, REVERTS_KEPT, revertSchema, revertedSchema;
export { REVERTED_FILE, REVERTED_SCHEMA, REVERTS_KEPT, REVERT_HOLD_MS, fs35, path60, revertSchema, revertedSchema };
var __wakaru_init_reverted_initialized = false;
export function init_reverted() {
if (__wakaru_init_reverted_initialized) return;
__wakaru_init_reverted_initialized = true;
"use strict";
fs35 = __toESM(require("node:fs"), 1);
path60 = __toESM(require("node:path"), 1);
init_zod();
init_replace_file();
REVERTED_FILE = "reverted.json";
REVERTED_SCHEMA = 1;
REVERT_HOLD_MS = 24 * 60 * 60 * 1e3;
REVERTS_KEPT = 16;
revertSchema = external_exports.object({
    generation: external_exports.string().regex(/^[0-9a-f]{64}$/, "is not a sha256 hex digest"),
    label: external_exports.string(),
    install: external_exports.string(),
    clientVersion: external_exports.string().optional(),
    revertedAt: external_exports.string(),
    trigger: external_exports.string(),
    pid: external_exports.number().int().nonnegative()
});
revertedSchema = external_exports.object({
    schema: external_exports.literal(REVERTED_SCHEMA),
    reverts: external_exports.array(revertSchema)
});

}
