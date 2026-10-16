import { E } from "./tslib.es6.js";
var MBd;
export { MBd };
var __wakaru_O2y_initialized = false;
export function O2y() {
if (__wakaru_O2y_initialized) return;
__wakaru_O2y_initialized = true;
"use strict";
E(), MBd = class {
    constructor(t, e, n, i, r, s, o){
        this.id = t, this.label = e, this.alias = n, this.metadata = i, this._precondition = r, this._run = s, this._contextKeyService = o;
    }
    isSupported() {
        return this._contextKeyService.contextMatchesRules(this._precondition);
    }
    run(t) {
        return this.isSupported() ? this._run(t) : Promise.resolve(void 0);
    }
};

}
