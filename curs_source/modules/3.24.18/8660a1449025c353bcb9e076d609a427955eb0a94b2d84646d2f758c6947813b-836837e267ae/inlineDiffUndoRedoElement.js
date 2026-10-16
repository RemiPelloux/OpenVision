import { E } from "./tslib.es6.js";
var zae;
export { zae };
var __wakaru_xCm_initialized = false;
export function xCm() {
if (__wakaru_xCm_initialized) return;
__wakaru_xCm_initialized = true;
"use strict";
E(), zae = class {
    constructor(t, e, n, i, r, s, o = !1){
        this.label = t, this.code = e, this.diffId = n, this.resource = i, this.skipIntermediateSteps = o, this.undos = [], this.redos = [], this.confirmBeforeUndo = !1, this.undos.push(r), this.redos.push(s);
    }
    get type() {
        return 0;
    }
    push(t, e) {
        this.skipIntermediateSteps && e ? this.redos.push(...t.redos) : this.skipIntermediateSteps || (this.undos.push(...t.undos), this.redos.push(...t.redos));
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
    rebase() {}
    toString() {
        return `InlineDiffUndoRedoElement: ${this.label}`;
    }
};

}
