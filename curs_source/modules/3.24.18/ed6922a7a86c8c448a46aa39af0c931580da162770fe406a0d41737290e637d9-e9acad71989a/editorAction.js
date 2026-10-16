import { x } from "./tslib.es6.js";
var iFc;
export { iFc };
var __wakaru_Lgg_initialized = false;
export function Lgg() {
if (__wakaru_Lgg_initialized) return;
__wakaru_Lgg_initialized = true;
"use strict";
x(), iFc = class {
    constructor(e, t, n, i, r, s, o){
        this.id = e, this.label = t, this.alias = n, this.metadata = i, this._precondition = r, this._run = s, this._contextKeyService = o;
    }
    isSupported() {
        return this._contextKeyService.contextMatchesRules(this._precondition);
    }
    run(e) {
        return this.isSupported() ? this._run(e) : Promise.resolve(void 0);
    }
};

}
