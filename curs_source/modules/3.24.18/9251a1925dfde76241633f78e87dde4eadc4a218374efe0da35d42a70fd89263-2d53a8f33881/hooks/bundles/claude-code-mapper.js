import { init_claude_code_types } from "./claude-code-types.js";
var noopLogger;
export { noopLogger };
var __wakaru_init_claude_code_mapper_initialized = false;
export function init_claude_code_mapper() {
if (__wakaru_init_claude_code_mapper_initialized) return;
__wakaru_init_claude_code_mapper_initialized = true;
"use strict";
init_claude_code_types();
noopLogger = {
    warn: ()=>{},
    info: ()=>{}
};

}
