import { h } from "./tslib.es6.js";
var RF;
export { RF };
var __wakaru_x4e_initialized = false;
export function x4e() {
if (__wakaru_x4e_initialized) return;
__wakaru_x4e_initialized = true;
"use strict";
h(), RF = class {
    constructor(e, t){
        this.sender = e, this.onMessage = t;
    }
    send(e) {
        try {
            this.sender.send("vscode:message", e.buffer);
        } catch  {}
    }
    disconnect() {
        this.sender.send("vscode:disconnect", null);
    }
};

}
