import { E } from "./tslib.es6.js";
var AMs, d2t;
export { AMs, d2t };
var __wakaru_CF0_initialized = false;
export function CF0() {
if (__wakaru_CF0_initialized) return;
__wakaru_CF0_initialized = true;
"use strict";
E(), AMs = "claude-code:", d2t = class extends Error {
    constructor(t){
        super(`Claude Code session not found: ${t}`), this.name = "ClaudeCodeAgentNotFoundError";
    }
};

}
