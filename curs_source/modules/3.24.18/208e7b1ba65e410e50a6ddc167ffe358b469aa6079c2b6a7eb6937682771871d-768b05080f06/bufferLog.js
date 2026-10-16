import { Ut, j } from "./lifecycle.js";
import { FT, op, te } from "./log.js";
import { F0 } from "./logIpc.js";
import { h } from "./tslib.es6.js";
var J2e;
export { J2e };
var __wakaru_Yct_initialized = false;
export function Yct() {
if (__wakaru_Yct_initialized) return;
__wakaru_Yct_initialized = true;
"use strict";
h(), j(), te(), J2e = class extends FT {
    constructor(e = op){
        super(), this.buffer = [], this._logger = void 0, this._logLevelDisposable = this._register(new Ut), this.setLevel(e);
    }
    set logger(e) {
        this._logger = e, this.setLevel(e.getLevel()), this._logLevelDisposable.value = e.onDidChangeLogLevel(this.setLevel, this);
        for (const { level: t, message: n } of this.buffer)F0(e, t, n);
        this.buffer = [];
    }
    log(e, t) {
        this._logger ? F0(this._logger, e, t) : this.getLevel() <= e && this.buffer.push({
            level: e,
            message: t
        });
    }
    dispose() {
        this._logger?.dispose(), super.dispose();
    }
    flush() {
        this._logger?.flush();
    }
};

}
