import { init_replace_file } from "./replace-file.js";
import { __toESM } from "../storage/sqlite-store.js";
import { external_exports } from "../../../external_exports.js";
import { init_zod } from "../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var fs31, path55, ATTEMPTS_DIR, ATTEMPTS_SCHEMA, attemptsSchema;
export { ATTEMPTS_DIR, ATTEMPTS_SCHEMA, attemptsSchema, fs31, path55 };
var __wakaru_init_attempts_initialized = false;
export function init_attempts() {
if (__wakaru_init_attempts_initialized) return;
__wakaru_init_attempts_initialized = true;
"use strict";
fs31 = __toESM(require("node:fs"), 1);
path55 = __toESM(require("node:path"), 1);
init_zod();
init_replace_file();
ATTEMPTS_DIR = "attempts";
ATTEMPTS_SCHEMA = 1;
attemptsSchema = external_exports.object({
    schema: external_exports.literal(ATTEMPTS_SCHEMA),
    pid: external_exports.number().int().positive(),
    attempts: external_exports.array(external_exports.object({
        generation: external_exports.string().regex(/^[0-9a-f]{64}$/, "is not a sha256 hex digest"),
        install: external_exports.string(),
        phase: external_exports.enum([
            "evaluate",
            "turn"
        ]),
        since: external_exports.string()
    })),
    reportedBy: external_exports.number().int().positive().optional()
});

}
