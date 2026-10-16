import { Ze } from "./instantiation.js";
import { vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var q6, WYi, Xyo;
export { WYi, Xyo, q6 };
var __wakaru_hq_initialized = false;
export function hq() {
if (__wakaru_hq_initialized) return;
__wakaru_hq_initialized = true;
"use strict";
x(), Ze(), q6 = vn("composerAgentService"), WYi = class extends Error {
    constructor(e){
        super(`Duplicate step-started event detected at offset ${e}`), this.name = "DuplicateStepStartedError", this.offsetKey = e;
    }
}, Xyo = class extends Error {
    constructor(e){
        super(`Restarting from beginning: ${e}`), this.name = "RestartFromBeginningError";
    }
};

}
