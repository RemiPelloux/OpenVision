import { E } from "./tslib.es6.js";
var Gsc;
export { Gsc };
var __wakaru_e$0_initialized = false;
export function e$0() {
if (__wakaru_e$0_initialized) return;
__wakaru_e$0_initialized = true;
"use strict";
E(), Gsc = class extends Error {
    constructor(t, e){
        super(t), this.name = "AutomationApiError", this.status = e;
    }
};

}
