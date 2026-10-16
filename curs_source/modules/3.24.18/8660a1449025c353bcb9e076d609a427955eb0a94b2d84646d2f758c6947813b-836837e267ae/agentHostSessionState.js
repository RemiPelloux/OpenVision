import { Gt, Qe, st, tt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var zhg;
export { zhg };
var __wakaru__yk_initialized = false;
export function _yk() {
if (__wakaru__yk_initialized) return;
__wakaru__yk_initialized = true;
"use strict";
E(), Gt(), Qe(), zhg = class extends st {
    constructor(t, e){
        super(), this.sessionId = t, this.options = e, this.watchEmitter = this._register(new tt), this.attachEmitter = this._register(new tt), this.closeEmitter = this._register(new tt), this.eventLog = [], this.backgroundWork = new Map, this.lastEventId = 0n;
    }
    dispose() {
        this._store.isDisposed || this.closeEmitter.fire(), super.dispose();
    }
};

}
