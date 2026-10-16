import { Se, bt, ve, we } from "./HVr.js";
import { x } from "./tslib.es6.js";
var x9h;
export { x9h };
var __wakaru_lh__initialized = false;
export function lh_() {
if (__wakaru_lh__initialized) return;
__wakaru_lh__initialized = true;
"use strict";
x(), bt(), Se(), x9h = class extends we {
    constructor(){
        super(...arguments), this.type = 0, this._cwd = "", this._cwds = new Map, this._onDidChangeCwd = this._register(new ve), this.onDidChangeCwd = this._onDidChangeCwd.event;
    }
    get cwds() {
        return Array.from(this._cwds.keys());
    }
    getCwd() {
        return this._cwd;
    }
    updateCwd(e) {
        const t = this._cwd !== e;
        this._cwd = e;
        const n = this._cwds.get(this._cwd) || 0;
        this._cwds.delete(this._cwd), this._cwds.set(this._cwd, n + 1), t && this._onDidChangeCwd.fire(e);
    }
};

}
