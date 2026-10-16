import { Gt, Qe, st, tt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var rPg;
export { rPg };
var __wakaru_vDk_initialized = false;
export function vDk() {
if (__wakaru_vDk_initialized) return;
__wakaru_vDk_initialized = true;
"use strict";
E(), Gt(), Qe(), rPg = class extends st {
    constructor(){
        super(...arguments), this.type = 0, this._cwd = "", this._cwds = new Map, this._onDidChangeCwd = this._register(new tt), this.onDidChangeCwd = this._onDidChangeCwd.event;
    }
    get cwds() {
        return Array.from(this._cwds.keys());
    }
    getCwd() {
        return this._cwd;
    }
    updateCwd(t) {
        const e = this._cwd !== t;
        this._cwd = t;
        const n = this._cwds.get(this._cwd) || 0;
        this._cwds.delete(this._cwd), this._cwds.set(this._cwd, n + 1), e && this._onDidChangeCwd.fire(t);
    }
};

}
