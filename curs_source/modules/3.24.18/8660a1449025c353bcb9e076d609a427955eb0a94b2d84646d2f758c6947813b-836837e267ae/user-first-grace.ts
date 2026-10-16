import { E } from "./tslib.es6.js";
var Anf, Rnf;
export { Anf, Rnf };
var __wakaru_Pnf_initialized = false;
export function Pnf() {
if (__wakaru_Pnf_initialized) return;
__wakaru_Pnf_initialized = true;
"use strict";
E(), Anf = 15e3, Rnf = class {
    kind = "idle";
    cancelWait = null;
    args;
    constructor(t){
        this.args = t;
    }
    get state() {
        return this.kind;
    }
    start() {
        this.kind === "idle" && (this.kind = "waiting", this.cancelWait = this.args.schedule(Anf, ()=>this.fire()));
    }
    callerSpoke() {
        this.kind !== "fired" && (this.dropWait(), this.kind = "cancelled");
    }
    dispose() {
        this.dropWait(), (this.kind === "waiting" || this.kind === "idle") && (this.kind = "cancelled");
    }
    fire() {
        this.kind === "waiting" && (this.cancelWait = null, this.kind = "fired", this.args.onFire());
    }
    dropWait() {
        const t = this.cancelWait;
        this.cancelWait = null, t?.();
    }
};

}
