import { _b } from "./color.js";
import { e4i } from "./glass-theme-constants.js";
import { J6i } from "./glass-theme-service.types.js";
import { iv, zo } from "./index_16.js";
import { Mt } from "./index_197.js";
import { LI, ov } from "./theme.js";
import { E } from "./tslib.es6.js";
import { Xo } from "./uuid_2.js";
import { R6 } from "./workbenchThemeService.js";
var CLv, TLv, Jic, jMs, u8e, ELv;
export { CLv, ELv, Jic, TLv, jMs, u8e };
var __wakaru_n4i_initialized = false;
export function n4i() {
if (__wakaru_n4i_initialized) return;
__wakaru_n4i_initialized = true;
"use strict";
E(), Mt(), iv(), _b(), Xo(), LI(), R6(), e4i(), J6i(), J6i(), CLv = {
    light: ov.LIGHT,
    dark: ov.DARK,
    lightHighContrast: ov.HIGH_CONTRAST_LIGHT,
    darkHighContrast: ov.HIGH_CONTRAST_DARK
}, TLv = [
    "	--vscode-errorForeground: var(--cursor-text-red-primary);",
    "	--vscode-editorWarning-foreground: var(--cursor-text-yellow-primary);",
    "	--vscode-editorWarning-background: var(--cursor-bg-yellow-secondary);",
    "	--vscode-focusBorder: var(--cursor-focus);",
    "	--vscode-gitDecoration-addedResourceForeground: var(--cursor-text-git-added-primary);",
    "	--vscode-gitDecoration-deletedResourceForeground: var(--cursor-text-git-removed-primary);",
    "	--vscode-testing-iconPassed: var(--cursor-text-green-primary);",
    "	--vscode-testing-iconFailed: var(--cursor-text-red-primary);",
    "	--vscode-textLink-foreground: var(--cursor-text-link);",
    "	--vscode-textLink-activeForeground: var(--cursor-text-link-active);"
], Jic = new WeakMap, jMs = "cursor-custom-theme:", u8e = class extends Error {
    constructor(t){
        super(t), this.name = "GlassThemeImportError";
    }
}, ELv = zo.object({
    name: zo.unknown().optional(),
    type: zo.unknown().optional(),
    colors: zo.unknown().optional()
}).catchall(zo.unknown());

}
