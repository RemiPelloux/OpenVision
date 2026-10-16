import { Ze } from "./instantiation.js";
import { vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var V$, oCt;
export { V$, oCt };
var __wakaru_KX_initialized = false;
export function KX() {
if (__wakaru_KX_initialized) return;
__wakaru_KX_initialized = true;
"use strict";
x(), Ze(), V$ = vn("cursorHooksService"), oCt = class extends Error {
    constructor(e, t){
        const n = t ? `File reading was blocked by a security hook: ${t}` : `File reading was blocked by a security hook: ${e}. Do not attempt to work around this restriction using alternative methods or commands.`;
        super(n), this.name = "FileReadBlockedByHookError", this.filePath = e, this.userMessage = t;
    }
};

}
