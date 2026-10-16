import { B9w, HCs, MNn } from "./BA.js";
import { g_e } from "./LYd.js";
import { rUr } from "./Project.types.js";
import { iv } from "./index_16.js";
import { Mt } from "./index_197.js";
import { OCs } from "./migration-bridge_2.js";
import { F9w } from "./projectDatabaseListRecovery.js";
import { $Cs } from "./projectDatabaseProjection.js";
import { DKf } from "./projectDependencyGraph_2.js";
import { E } from "./tslib.es6.js";
import { ze } from "./ze.js";
var HKf, WKf, t5, FV, GKf, qKf, Rjl, zKf, VKf, Pjl, KKf, YKf, Mjl, XKf, ZKf, Djl, QKf, JKf, eYf;
export { Djl, FV, GKf, HKf, JKf, KKf, Mjl, Pjl, QKf, Rjl, VKf, WKf, XKf, YKf, ZKf, eYf, qKf, t5, zKf };
var __wakaru_Njl_initialized = false;
export function Njl() {
if (__wakaru_Njl_initialized) return;
__wakaru_Njl_initialized = true;
"use strict";
E(), iv(), Mt(), OCs(), $Cs(), DKf(), F9w(), HKf = 256 * 1024, WKf = 100, t5 = Object.freeze({
    tasks: 256,
    properties: 32,
    optionsPerProperty: 64,
    blockedByReferencesPerTask: 32,
    propertyValuesPerTask: 32,
    multiSelectValuesPerProperty: 64,
    projectTitleCharacters: 512,
    projectDescriptionCharacters: 8 * 1024,
    propertyNameCharacters: 256,
    optionLabelCharacters: 256,
    taskSubtitleCharacters: 2 * 1024,
    taskBodyCharacters: 16 * 1024,
    textPropertyValueCharacters: 4 * 1024
}), FV = ze.string().regex(/^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/, "Expected a stable ID containing only letters, numbers, dots, underscores, or hyphens"), GKf = ze.enum(rUr), qKf = ze.string().transform((t, e)=>g_e(t) ? t : (e.addIssue({
        code: "custom",
        message: "Expected a valid Cursor icon name"
    }), ze.NEVER)), Rjl = ze.object({
    id: FV,
    label: HCs("Option label", t5.optionLabelCharacters),
    tone: GKf.optional(),
    icon: qKf.optional()
}).strict(), zKf = ze.object({
    id: FV,
    name: HCs("Property name", t5.propertyNameCharacters),
    type: ze.enum([
        "text",
        "number",
        "boolean"
    ])
}).strict(), VKf = ze.object({
    id: FV,
    name: HCs("Property name", t5.propertyNameCharacters),
    type: ze.enum([
        "select",
        "multiSelect"
    ]),
    options: ze.array(Rjl).max(t5.optionsPerProperty, `Property options must contain at most ${t5.optionsPerProperty} entries`)
}).strict(), Pjl = ze.discriminatedUnion("type", [
    zKf,
    VKf
]), KKf = ze.union([
    MNn("Text property value", t5.textPropertyValueCharacters),
    ze.number().finite(),
    ze.boolean(),
    ze.array(FV).max(t5.multiSelectValuesPerProperty, `Multi-select property values must contain at most ${t5.multiSelectValuesPerProperty} entries`)
]), YKf = ze.record(FV, KKf).refine((t)=>Object.keys(t).length <= t5.propertyValuesPerTask, {
    message: `Task properties must contain at most ${t5.propertyValuesPerTask} values`
}), Mjl = ze.object({
    id: FV,
    title: B9w("Task title"),
    subtitle: MNn("Task subtitle", t5.taskSubtitleCharacters).optional(),
    body: MNn("Task body", t5.taskBodyCharacters).optional(),
    blockedBy: ze.array(FV).max(t5.blockedByReferencesPerTask, `Task blockedBy must contain at most ${t5.blockedByReferencesPerTask} references`).optional(),
    properties: YKf
}).strict(), XKf = {
    isOption: (t)=>Rjl.safeParse(t).success,
    isProperty: (t)=>Pjl.safeParse(t).success,
    isTask: (t)=>Mjl.safeParse(t).success
}, ZKf = ze.object({
    property: FV,
    direction: FV
}).strict(), Djl = ze.object({
    property: FV,
    operator: FV,
    value: ze.union([
        MNn("Filter value", t5.textPropertyValueCharacters),
        ze.number().finite(),
        ze.boolean(),
        ze.null()
    ])
}).strict(), QKf = ze.array(Djl).length(1), JKf = ze.object({
    version: ze.literal(1),
    id: FV,
    title: HCs("Project title", t5.projectTitleCharacters),
    description: MNn("Project description", t5.projectDescriptionCharacters).optional(),
    properties: ze.array(Pjl).min(1).max(t5.properties, `Project database must contain at most ${t5.properties} property definitions`),
    view: ze.object({
        default: ze.enum([
            "board",
            "list",
            "grid"
        ]),
        groupBy: FV,
        groupOrder: ze.array(FV).max(t5.optionsPerProperty, `View groupOrder must contain at most ${t5.optionsPerProperty} references`).optional(),
        order: ZKf.optional(),
        filter: Djl.optional()
    }).strict(),
    dependency: ze.object({
        completionProperty: FV,
        completionValues: ze.array(FV).min(1).max(t5.optionsPerProperty, `Dependency completionValues must contain at most ${t5.optionsPerProperty} references`),
        ignoredValues: ze.array(FV).max(t5.optionsPerProperty, `Dependency ignoredValues must contain at most ${t5.optionsPerProperty} references`).optional(),
        missing: ze.enum([
            "blocks",
            "ignored"
        ]).optional()
    }).strict(),
    tasks: ze.array(Mjl).max(t5.tasks, `Project database must contain at most ${t5.tasks} tasks`)
}).strict(), eYf = ze.object({
    version: ze.unknown()
}).passthrough();

}
