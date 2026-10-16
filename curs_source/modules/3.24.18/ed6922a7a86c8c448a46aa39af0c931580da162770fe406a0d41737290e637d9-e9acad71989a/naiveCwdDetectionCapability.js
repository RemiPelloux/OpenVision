import { bt, ve } from "./HVr.js";
import { x } from "./tslib.es6.js";
var l9h;
export { l9h };
var __wakaru_eh__initialized = false;
export function eh_() {
if (__wakaru_eh__initialized) return;
__wakaru_eh__initialized = true;
"use strict";
x(), bt(), l9h = class {
    constructor(e){
        this._process = e, this.type = 1, this._cwd = "", this._onDidChangeCwd = new ve, this.onDidChangeCwd = this._onDidChangeCwd.event;
    }
    async getCwd() {
        if (!this._process) return Promise.resolve("");
        const e = await this._process.getCwd();
        return e !== this._cwd && this._onDidChangeCwd.fire(e), this._cwd = e, this._cwd;
    }
};

}
