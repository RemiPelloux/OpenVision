import { jn } from "./SZu.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var IX, Nzt;
export { IX, Nzt };
var __wakaru__le_initialized = false;
export function _le() {
if (__wakaru__le_initialized) return;
__wakaru__le_initialized = true;
"use strict";
E(), It(), IX = jn("cursorHooksService"), Nzt = class extends Error {
    constructor(t, e){
        const n = e ? `File reading was blocked by a security hook: ${e}` : `File reading was blocked by a security hook: ${t}. Do not attempt to work around this restriction using alternative methods or commands.`;
        super(n), this.name = "FileReadBlockedByHookError", this.filePath = t, this.userMessage = e;
    }
};

}
