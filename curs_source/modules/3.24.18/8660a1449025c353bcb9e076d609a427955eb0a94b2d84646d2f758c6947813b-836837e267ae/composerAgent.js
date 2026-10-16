import { jn } from "./SZu.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var oF, ois, Unl;
export { Unl, oF, ois };
var __wakaru_v$_initialized = false;
export function v$() {
if (__wakaru_v$_initialized) return;
__wakaru_v$_initialized = true;
"use strict";
E(), It(), oF = jn("composerAgentService"), ois = class extends Error {
    constructor(t){
        super(`Duplicate step-started event detected at offset ${t}`), this.name = "DuplicateStepStartedError", this.offsetKey = t;
    }
}, Unl = class extends Error {
    constructor(t){
        super(`Restarting from beginning: ${t}`), this.name = "RestartFromBeginningError";
    }
};

}
