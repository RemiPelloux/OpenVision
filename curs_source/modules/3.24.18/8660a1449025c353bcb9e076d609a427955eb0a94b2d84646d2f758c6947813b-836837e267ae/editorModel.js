import { Gt, Qe, st, tt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var x9e;
export { x9e };
var __wakaru_hlt_initialized = false;
export function hlt() {
if (__wakaru_hlt_initialized) return;
__wakaru_hlt_initialized = true;
"use strict";
E(), Gt(), Qe(), x9e = class extends st {
    constructor(){
        super(...arguments), this._onWillDispose = this._register(new tt), this.onWillDispose = this._onWillDispose.event, this.resolved = !1;
    }
    async resolve() {
        this.resolved = !0;
    }
    isResolved() {
        return this.resolved;
    }
    isDisposed() {
        return this._store.isDisposed;
    }
    dispose() {
        this._onWillDispose.fire(), super.dispose();
    }
};

}
