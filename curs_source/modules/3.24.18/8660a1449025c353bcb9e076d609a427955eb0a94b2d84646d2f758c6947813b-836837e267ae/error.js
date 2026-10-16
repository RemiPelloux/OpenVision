import { E } from "./tslib.es6.js";
var Jwo;
export { Jwo };
var __wakaru_LVu_initialized = false;
export function LVu() {
if (__wakaru_LVu_initialized) return;
__wakaru_LVu_initialized = true;
"use strict";
E(), Jwo = class extends Error {
    constructor(t, e = "warn"){
        super(t), this.message = t, this.logLevel = e;
    }
};

}
