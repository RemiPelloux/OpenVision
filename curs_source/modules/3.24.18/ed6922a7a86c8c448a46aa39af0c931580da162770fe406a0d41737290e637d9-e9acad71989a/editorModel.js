import { Se, bt, ve, we } from "./HVr.js";
import { x } from "./tslib.es6.js";
var dhe;
export { dhe };
var __wakaru_bTe_initialized = false;
export function bTe() {
if (__wakaru_bTe_initialized) return;
__wakaru_bTe_initialized = true;
"use strict";
x(), bt(), Se(), dhe = class extends we {
    constructor(){
        super(...arguments), this._onWillDispose = this._register(new ve), this.onWillDispose = this._onWillDispose.event, this.resolved = !1;
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
