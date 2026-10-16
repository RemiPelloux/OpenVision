import { x } from "./tslib.es6.js";
var hUe;
export { hUe };
var __wakaru_fNn_initialized = false;
export function fNn() {
if (__wakaru_fNn_initialized) return;
__wakaru_fNn_initialized = true;
"use strict";
x(), hUe = class {
    constructor(e, t, n, i, r){
        this.label = e, this.code = t, this.resource = n, this.undos = [], this.redos = [], this.confirmBeforeUndo = !1, this.undos.push(i), this.redos.push(r);
    }
    get type() {
        return 0;
    }
    async undo() {
        for(let e = this.undos.length - 1; e >= 0; e--){
            const t = this.undos[e], n = t();
            n instanceof Promise && await n;
        }
    }
    async redo() {
        for(let e = 0; e < this.redos.length; e++){
            const t = this.redos[e], n = t();
            n instanceof Promise && await n;
        }
    }
    rebase(e, t, n, i, r, s, o, a) {}
};

}
