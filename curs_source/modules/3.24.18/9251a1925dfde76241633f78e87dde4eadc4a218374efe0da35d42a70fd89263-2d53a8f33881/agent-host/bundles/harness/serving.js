import { init_replace_file } from "./replace-file.js";
import { __toESM } from "../storage/sqlite-store.js";
import { external_exports } from "../../../external_exports.js";
import { init_zod } from "../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var fs32, path56, SERVING_DIR, SERVING_SCHEMA, servingSchema;
export { SERVING_DIR, SERVING_SCHEMA, fs32, path56, servingSchema };
var __wakaru_init_serving_initialized = false;
export function init_serving() {
if (__wakaru_init_serving_initialized) return;
__wakaru_init_serving_initialized = true;
"use strict";
fs32 = __toESM(require("node:fs"), 1);
path56 = __toESM(require("node:path"), 1);
init_zod();
init_replace_file();
SERVING_DIR = "serving";
SERVING_SCHEMA = 1;
servingSchema = external_exports.object({
    schema: external_exports.literal(SERVING_SCHEMA),
    pid: external_exports.number().int().nonnegative(),
    writtenAt: external_exports.string(),
    generations: external_exports.array(external_exports.string().regex(/^[0-9a-f]{64}$/, "is not a sha256 hex digest"))
});

}
