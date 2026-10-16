import { Gt, tt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var j2g;
export { j2g };
var __wakaru_lDk_initialized = false;
export function lDk() {
if (__wakaru_lDk_initialized) return;
__wakaru_lDk_initialized = true;
"use strict";
E(), Gt(), j2g = class {
    constructor(t){
        this._process = t, this.type = 1, this._cwd = "", this._onDidChangeCwd = new tt, this.onDidChangeCwd = this._onDidChangeCwd.event;
    }
    async getCwd() {
        if (!this._process) return Promise.resolve("");
        const t = await this._process.getCwd();
        return t !== this._cwd && this._onDidChangeCwd.fire(t), this._cwd = t, this._cwd;
    }
};

}
