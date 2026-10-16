import { init_replace_file } from "./replace-file.js";
import { __toESM } from "../storage/sqlite-store.js";
import { external_exports } from "../../../external_exports.js";
import { init_zod } from "../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var fs28, path53, LAST_SERVED_FILE, LAST_SERVED_SCHEMA, lastServedSchema;
export { LAST_SERVED_FILE, LAST_SERVED_SCHEMA, fs28, lastServedSchema, path53 };
var __wakaru_init_last_served_initialized = false;
export function init_last_served() {
if (__wakaru_init_last_served_initialized) return;
__wakaru_init_last_served_initialized = true;
"use strict";
fs28 = __toESM(require("node:fs"), 1);
path53 = __toESM(require("node:path"), 1);
init_zod();
init_replace_file();
LAST_SERVED_FILE = "last-served.json";
LAST_SERVED_SCHEMA = 1;
lastServedSchema = external_exports.object({
    schema: external_exports.literal(LAST_SERVED_SCHEMA),
    generation: external_exports.string().regex(/^[0-9a-f]{64}$/, "is not a sha256 hex digest"),
    label: external_exports.string(),
    builtAt: external_exports.string().optional(),
    servedAt: external_exports.string(),
    pid: external_exports.number().int().nonnegative()
});

}
