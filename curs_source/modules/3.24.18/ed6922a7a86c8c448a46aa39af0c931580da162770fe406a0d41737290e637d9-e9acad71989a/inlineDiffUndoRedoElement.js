import { x } from "./tslib.es6.js";
var TX;
export { TX };
var __wakaru_oFd_initialized = false;
export function oFd() {
if (__wakaru_oFd_initialized) return;
__wakaru_oFd_initialized = true;
"use strict";
x(), TX = class {
    constructor(e, t, n, i, r, s, o = !1){
        this.label = e, this.code = t, this.diffId = n, this.resource = i, this.skipIntermediateSteps = o, this.undos = [], this.redos = [], this.confirmBeforeUndo = !1, this.undos.push(r), this.redos.push(s);
    }
    get type() {
        return 0;
    }
    push(e, t) {
        this.skipIntermediateSteps && t ? this.redos.push(...e.redos) : this.skipIntermediateSteps || (this.undos.push(...e.undos), this.redos.push(...e.redos));
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
    rebase() {}
    toString() {
        return `InlineDiffUndoRedoElement: ${this.label}`;
    }
};

}
