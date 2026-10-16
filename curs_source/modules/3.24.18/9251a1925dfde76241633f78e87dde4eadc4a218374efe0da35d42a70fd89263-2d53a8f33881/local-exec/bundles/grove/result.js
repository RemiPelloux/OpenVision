import { external_exports } from "../../../external_exports.js";
import { init_grep2 } from "../grep.js";
import { init_platform2 } from "./platform.js";
import { init_types10 } from "./types.js";
import { init_int32 } from "../int32.js";
import { init_zod } from "../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var count, groveLineSchema, groveFileSchema, groveSummarySchema, groveRecordTypeSchema;
export { count, groveFileSchema, groveLineSchema, groveRecordTypeSchema, groveSummarySchema };
var __wakaru_init_result_initialized = false;
export function init_result() {
if (__wakaru_init_result_initialized) return;
__wakaru_init_result_initialized = true;
"use strict";
init_zod();
init_grep2();
init_int32();
init_platform2();
init_types10();
count = external_exports.number().int().nonnegative();
groveLineSchema = external_exports.object({
    line_no: external_exports.number().int().positive(),
    kind: external_exports.enum([
        "match",
        "before",
        "after"
    ]),
    text: external_exports.string().optional(),
    bytes: external_exports.string().regex(/^(?:[0-9a-fA-F]{2})*$/).optional(),
    truncated: external_exports.boolean().default(false)
}).refine((line)=>line.text !== void 0 || line.bytes !== void 0);
groveFileSchema = external_exports.object({
    type: external_exports.literal("file"),
    path: external_exports.string(),
    lines: external_exports.array(groveLineSchema)
});
groveSummarySchema = external_exports.object({
    type: external_exports.literal("summary"),
    files_searched: count,
    more: external_exports.boolean(),
    stop_reason: external_exports.string().nullable(),
    skipped: external_exports.object({
        over_size: count,
        size_unknown: count,
        budget_exhausted: count,
        fetch_failed: count,
        unreadable: count
    })
});
groveRecordTypeSchema = external_exports.object({
    type: external_exports.string()
});

}
