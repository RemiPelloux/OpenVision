import { rUr } from "./Project.types.js";
import { G7 } from "./ProjectDatabaseDocument.js";
import { Njl } from "./ProjectDatabaseDocument_2.js";
import { iv } from "./index_16.js";
import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
import { ze } from "./ze.js";
var Bjl, TDe, UYf, jYf, $Yf, KCs, HYf, WYf, GYf, qYf;
export { $Yf, Bjl, GYf, HYf, KCs, TDe, UYf, WYf, jYf, qYf };
var __wakaru_h8w_initialized = false;
export function h8w() {
if (__wakaru_h8w_initialized) return;
__wakaru_h8w_initialized = true;
"use strict";
E(), Mt(), Njl(), iv(), Bjl = 64 * 1024, TDe = ze.string().regex(/^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/, "Expected a stable ID containing only letters, numbers, dots, underscores, or hyphens"), UYf = ze.union([
    ze.string().max(G7.textPropertyValueCharacters),
    ze.number().finite(),
    ze.boolean(),
    ze.array(TDe).max(G7.multiSelectValuesPerProperty)
]), jYf = ze.object({
    id: TDe,
    title: ze.string().max(G7.projectTitleCharacters).refine((t)=>t.trim().length > 0, {
        message: "Task title must be a non-empty string"
    }),
    subtitle: ze.string().max(G7.taskSubtitleCharacters).optional(),
    status: TDe,
    order: ze.number().finite().optional()
}).strict(), $Yf = ze.record(TDe, UYf).refine((t)=>Object.keys(t).length <= G7.propertyValuesPerTask, {
    message: `Task properties must contain at most ${G7.propertyValuesPerTask} values`
}), KCs = new Set([
    "id",
    "title",
    "subtitle",
    "status",
    "order"
]), HYf = new Map([
    ...KCs
].map((t)=>[
        t.toLowerCase(),
        t
    ])), WYf = ze.object({
    default: ze.enum([
        "board",
        "list",
        "grid"
    ]),
    groupBy: TDe,
    groupOrder: ze.array(TDe).max(G7.optionsPerProperty).optional(),
    statusStages: ze.array(TDe).max(G7.optionsPerProperty).optional(),
    order: ze.object({
        property: TDe,
        direction: ze.enum([
            "asc",
            "desc"
        ])
    }).strict().optional(),
    filter: ze.object({
        property: TDe,
        operator: TDe,
        value: ze.union([
            ze.string().max(G7.textPropertyValueCharacters),
            ze.number().finite(),
            ze.boolean(),
            ze.null()
        ])
    }).strict().optional()
}).strict(), GYf = ze.object({
    version: ze.literal(2),
    source: ze.object({
        directory: ze.string().max(512)
    }).strict(),
    view: WYf,
    statuses: ze.record(ze.string(), ze.unknown()).optional()
}).strict(), qYf = new Set(rUr);

}
