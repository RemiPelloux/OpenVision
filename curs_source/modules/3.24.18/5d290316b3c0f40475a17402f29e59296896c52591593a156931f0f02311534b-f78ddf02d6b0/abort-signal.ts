import { h } from "./tslib.es6.js";
var dm;
export { dm };
var __wakaru_hm_initialized = false;
export function hm() {
if (__wakaru_hm_initialized) return;
__wakaru_hm_initialized = true;
"use strict";
h(), dm = class extends Error {
    constructor(){
        super("MCP operation aborted"), this.isMcpAbortError = !0, this.name = "McpAbortError";
    }
};

}
