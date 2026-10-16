import { BMa } from "./definition-schema.js";
import { iv, zo } from "./index_16.js";
import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
var Ny, qic, bLv, yLv, SLv, kLv;
export { Ny, SLv, bLv, kLv, qic, yLv };
var __wakaru_J6i_initialized = false;
export function J6i() {
if (__wakaru_J6i_initialized) return;
__wakaru_J6i_initialized = true;
"use strict";
E(), Mt(), iv(), Ny = ((t)=>(t.Dark = "cursor-dark", t.Light = "cursor-light", t.LightColorblind = "cursor-light-colorblind", t.DarkColorblind = "cursor-dark-colorblind", t.HighContrast = "cursor-high-contrast", t.LightHighContrast = "cursor-light-high-contrast", t))(Ny || {}), qic = 1, bLv = BMa.partial().catchall(zo.unknown()), yLv = zo.object({
    name: zo.string().min(1),
    source: zo.enum([
        "imported",
        "vscode",
        "user"
    ]).catch("imported"),
    definition: bLv,
    vscodeThemeSettingsId: zo.string().optional(),
    createdAt: zo.number().finite().optional(),
    updatedAt: zo.number().finite().optional()
}), SLv = zo.object({
    _v: zo.literal(qic),
    themes: zo.object({}).catchall(zo.unknown())
}), kLv = zo.object({
    name: zo.string().min(1)
}).catchall(zo.unknown());

}
