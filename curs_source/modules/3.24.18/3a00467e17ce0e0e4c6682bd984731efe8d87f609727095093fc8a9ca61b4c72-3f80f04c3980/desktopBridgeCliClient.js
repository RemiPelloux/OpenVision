import { Ol } from "./index.ts";
import { w } from "./tslib.es6.js";
var x1, oo, ur, I1;
export { I1, oo, ur, x1 };
var __wakaru_Hl_initialized = false;
export function Hl() {
if (__wakaru_Hl_initialized) return;
__wakaru_Hl_initialized = true;
"use strict";
w(), Ol(), x1 = 4, oo = 1e4, ur = class extends Error {
    constructor(e){
        super(`Unknown desktop thread ref "${e}"`), this.name = "UnknownThreadRefError", this.ref = e;
    }
}, I1 = class extends Error {
    constructor(e, t){
        super(`Desktop thread ref "${e}" is ambiguous`), this.name = "AmbiguousThreadRefError", this.ref = e, this.candidates = [
            ...t
        ];
    }
};

}
