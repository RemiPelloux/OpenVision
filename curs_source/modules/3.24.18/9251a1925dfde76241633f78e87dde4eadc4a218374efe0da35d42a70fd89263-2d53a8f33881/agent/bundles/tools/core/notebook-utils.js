import { external_exports } from "../../../../external_exports.js";
import { init_zod } from "../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var import_node_crypto37, notebookCellOutputSchema, notebookCellSchema, notebookSchema;
export { import_node_crypto37, notebookCellOutputSchema, notebookCellSchema, notebookSchema };
var __wakaru_init_notebook_utils_initialized = false;
export function init_notebook_utils() {
if (__wakaru_init_notebook_utils_initialized) return;
__wakaru_init_notebook_utils_initialized = true;
"use strict";
import_node_crypto37 = require("node:crypto");
init_zod();
notebookCellOutputSchema = external_exports.object({
    output_type: external_exports.string().optional(),
    text: external_exports.union([
        external_exports.string(),
        external_exports.array(external_exports.string())
    ]).optional(),
    data: external_exports.record(external_exports.unknown()).optional(),
    ename: external_exports.string().optional(),
    evalue: external_exports.string().optional(),
    traceback: external_exports.array(external_exports.string()).optional()
});
notebookCellSchema = external_exports.object({
    cell_type: external_exports.enum([
        "code",
        "markdown",
        "raw"
    ]),
    metadata: external_exports.record(external_exports.unknown()).optional().default({}),
    source: external_exports.union([
        external_exports.string(),
        external_exports.array(external_exports.string())
    ]),
    execution_count: external_exports.union([
        external_exports.number(),
        external_exports.null()
    ]).optional(),
    outputs: external_exports.array(notebookCellOutputSchema).optional(),
    id: external_exports.string().optional()
});
notebookSchema = external_exports.object({
    cells: external_exports.array(notebookCellSchema),
    metadata: external_exports.record(external_exports.unknown()).optional().default({}),
    nbformat: external_exports.number().optional(),
    nbformat_minor: external_exports.number().optional()
});

}
