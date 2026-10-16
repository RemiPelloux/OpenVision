import { E } from "./tslib.es6.js";
var c8e;
export { c8e };
var __wakaru_IMs_initialized = false;
export function IMs() {
if (__wakaru_IMs_initialized) return;
__wakaru_IMs_initialized = true;
"use strict";
E(), c8e = class extends Error {
    constructor(t){
        super(`Failed to read Claude Code transcript: ${t.filePath}`, {
            cause: t.cause
        }), this.name = "ClaudeCodeReadError", this.code = t.code, this.filePath = t.filePath;
    }
};

}
