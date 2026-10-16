import { E } from "./tslib.es6.js";
var MAt, DAt, eOi;
export { DAt, MAt, eOi };
var __wakaru_vTs_initialized = false;
export function vTs() {
if (__wakaru_vTs_initialized) return;
__wakaru_vTs_initialized = true;
"use strict";
E(), MAt = class {
    constructor(t){
        this.affinity = t, this.kind = 1;
    }
    equals(t) {
        return this.kind === t.kind && this.affinity === t.affinity;
    }
    asString() {
        return this.affinity === 0 ? "LocalProcess" : `LocalProcess${this.affinity}`;
    }
}, DAt = class {
    constructor(t){
        this.affinity = t, this.kind = 2;
    }
    equals(t) {
        return this.kind === t.kind && this.affinity === t.affinity;
    }
    asString() {
        return this.affinity === 0 ? "LocalWebWorker" : `LocalWebWorker${this.affinity}`;
    }
}, eOi = class {
    constructor(){
        this.kind = 3, this.affinity = 0;
    }
    equals(t) {
        return this.kind === t.kind;
    }
    asString() {
        return "Remote";
    }
};

}
