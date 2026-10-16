import { x } from "./tslib.es6.js";
var g4h, f4h;
export { f4h, g4h };
var __wakaru_v4h_initialized = false;
export function v4h() {
if (__wakaru_v4h_initialized) return;
__wakaru_v4h_initialized = true;
"use strict";
x(), g4h = 15e3, f4h = class {
    kind = "idle";
    cancelWait = null;
    args;
    constructor(e){
        this.args = e;
    }
    get state() {
        return this.kind;
    }
    start() {
        this.kind === "idle" && (this.kind = "waiting", this.cancelWait = this.args.schedule(g4h, ()=>this.fire()));
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
        const e = this.cancelWait;
        this.cancelWait = null, e?.();
    }
};

}
