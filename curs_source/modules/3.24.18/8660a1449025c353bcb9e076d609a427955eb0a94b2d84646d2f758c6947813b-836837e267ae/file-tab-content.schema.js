import { ccv, lcv } from "./file-tab-types.js";
import { iv } from "./index_16.js";
import { E } from "./tslib.es6.js";
import { ze } from "./ze.js";
var ucv;
export { ucv };
var __wakaru_nt0_initialized = false;
export function nt0() {
if (__wakaru_nt0_initialized) return;
__wakaru_nt0_initialized = true;
"use strict";
E(), iv(), ccv(), ucv = {
    filePath: ze.string().optional(),
    ownerAgentId: ze.string().optional(),
    selection: ze.object({
        startLineNumber: ze.number().int().min(1),
        startColumn: ze.number().int().min(1),
        endLineNumber: ze.number().int().min(1),
        endColumn: ze.number().int().min(1)
    }).strict().optional(),
    editorType: ze.enum(lcv).optional(),
    preview: ze.boolean().optional(),
    migrationRequiresWorkspaceContainment: ze.boolean().optional()
};

}
