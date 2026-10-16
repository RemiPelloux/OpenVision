import { iv } from "./index_16.js";
import { E } from "./tslib.es6.js";
import { ze } from "./ze.js";
var xql;
export { xql };
var __wakaru_Klv_initialized = false;
export function Klv() {
if (__wakaru_Klv_initialized) return;
__wakaru_Klv_initialized = true;
"use strict";
E(), iv(), xql = {
    initialFilterScope: ze.enum([
        "lastTurn",
        "uncommitted",
        "allChanges",
        "unstaged",
        "staged",
        "branch"
    ]).optional(),
    initialFilterScopeRequestId: ze.number().optional(),
    presentationRequest: ze.discriminatedUnion("filterScope", [
        ze.object({
            requestId: ze.number(),
            filterScope: ze.literal("lastTurn"),
            filePath: ze.string().optional()
        }),
        ze.object({
            requestId: ze.number(),
            filterScope: ze.enum([
                "uncommitted",
                "allChanges",
                "unstaged",
                "staged",
                "branch"
            ])
        })
    ]).optional()
};

}
