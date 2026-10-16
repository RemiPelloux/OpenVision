import { E } from "./tslib.es6.js";
import { sLl } from "./useOnMount.mjs";
import { jxt } from "./useRefWithInit.mjs";
var c3n, pKe;
export { c3n, pKe };
var __wakaru_xct_initialized = false;
export function xct() {
if (__wakaru_xct_initialized) return;
__wakaru_xct_initialized = true;
"use client";
E(), jxt(), sLl(), c3n = 0, pKe = class gMb {
    static create() {
        return new gMb;
    }
    currentId = c3n;
    start(e, n) {
        this.clear(), this.currentId = setTimeout(()=>{
            this.currentId = c3n, n();
        }, e);
    }
    isStarted() {
        return this.currentId !== c3n;
    }
    clear = ()=>{
        this.currentId !== c3n && (clearTimeout(this.currentId), this.currentId = c3n);
    };
    disposeEffect = ()=>this.clear;
};

}
