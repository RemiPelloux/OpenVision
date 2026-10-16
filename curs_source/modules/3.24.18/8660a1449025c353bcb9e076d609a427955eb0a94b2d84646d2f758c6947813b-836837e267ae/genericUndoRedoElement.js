import { E } from "./tslib.es6.js";
var vot;
export { vot };
var __wakaru_zki_initialized = false;
export function zki() {
if (__wakaru_zki_initialized) return;
__wakaru_zki_initialized = true;
"use strict";
E(), vot = class {
    constructor(t, e, n, i, r){
        this.label = t, this.code = e, this.resource = n, this.undos = [], this.redos = [], this.confirmBeforeUndo = !1, this.undos.push(i), this.redos.push(r);
    }
    get type() {
        return 0;
    }
    async undo() {
        for(let t = this.undos.length - 1; t >= 0; t--){
            const e = this.undos[t], n = e();
            n instanceof Promise && await n;
        }
    }
    async redo() {
        for(let t = 0; t < this.redos.length; t++){
            const e = this.redos[t], n = e();
            n instanceof Promise && await n;
        }
    }
    rebase(t, e, n, i, r, s, o, a) {}
};

}
