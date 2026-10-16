import { E } from "./tslib.es6.js";
var mGo, gGo, Dyt;
export { Dyt, gGo, mGo };
var __wakaru_bGd_initialized = false;
export function bGd() {
if (__wakaru_bGd_initialized) return;
__wakaru_bGd_initialized = true;
"use strict";
E(), mGo = ((t)=>(t[t.Copy = 0] = "Copy", t[t.Move = 1] = "Move", t))(mGo || {}), gGo = ((t)=>(t.Over = "drop-target", t.Before = "drop-target-before", t.After = "drop-target-after", t))(gGo || {}), Dyt = class extends Error {
    constructor(t, e){
        super(`ListError [${t}] ${e}`);
    }
};

}
