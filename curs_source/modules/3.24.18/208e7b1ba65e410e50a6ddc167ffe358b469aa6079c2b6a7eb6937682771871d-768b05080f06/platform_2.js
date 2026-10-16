import { Lv } from "./assert.js";
import { h } from "./tslib.es6.js";
import { Ze } from "./types.js";
function nR(e, t) {
    if (!e) throw new Error(t ? `Assertion failed (${t})` : "Assertion Failed");
}
function Ln(e) {
    return typeof e == "string";
}
function Un(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e) && !(e instanceof RegExp) && !(e instanceof Date);
}
function rR(e) {
    return typeof e == "function";
}
var z5, pr;
export { Ln, Un, nR, pr, rR, z5 };
var __wakaru_ri_initialized = false;
export function ri() {
if (__wakaru_ri_initialized) return;
__wakaru_ri_initialized = true;
"use strict";
h(), Lv(), Ze(), z5 = class {
    constructor(){
        this.data = new Map;
    }
    add(e, t) {
        nR(Ln(e)), nR(Un(t)), nR(!this.data.has(e), "There is already an extension with this id"), this.data.set(e, t);
    }
    knows(e) {
        return this.data.has(e);
    }
    as(e) {
        return this.data.get(e) || null;
    }
    dispose() {
        this.data.forEach((e)=>{
            rR(e.dispose) && e.dispose();
        }), this.data.clear();
    }
}, pr = new z5;

}
