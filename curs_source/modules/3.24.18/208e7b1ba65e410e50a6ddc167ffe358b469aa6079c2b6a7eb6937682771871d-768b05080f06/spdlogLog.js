import { Wt, mc } from "./files.js";
import { FT, rn, te } from "./log.js";
import { h } from "./tslib.es6.js";
async function oYe(e, t, n, r, s) {
    try {
        const i = await import("@vscode/spdlog");
        i.setFlushOn(0);
        const a = await i.createAsyncRotatingLogger(e, t, n, r);
        return s ? a.clearFormatters() : a.setPattern("%Y-%m-%d %H:%M:%S.%e [%l] %v"), a;
    } catch (i) {
        console.error(i);
    }
    return null;
}
function bpe(e, t, n) {
    switch(t){
        case rn.Trace:
            e.trace(n);
            break;
        case rn.Debug:
            e.debug(n);
            break;
        case rn.Info:
            e.info(n);
            break;
        case rn.Warning:
            e.warn(n);
            break;
        case rn.Error:
            e.error(n);
            break;
        case rn.Off:
            break;
        default:
            throw new Error(`Invalid log level ${t}`);
    }
}
function Rpe(e, t) {
    switch(t){
        case rn.Trace:
            e.setLevel(0);
            break;
        case rn.Debug:
            e.setLevel(1);
            break;
        case rn.Info:
            e.setLevel(2);
            break;
        case rn.Warning:
            e.setLevel(3);
            break;
        case rn.Error:
            e.setLevel(4);
            break;
        case rn.Off:
            e.setLevel(6);
            break;
        default:
            throw new Error(`Invalid log level ${t}`);
    }
}
var Cpe;
export { Cpe, Rpe, bpe, oYe };
var __wakaru_cYe_initialized = false;
export function cYe() {
if (__wakaru_cYe_initialized) return;
__wakaru_cYe_initialized = true;
"use strict";
h(), Wt(), te(), Cpe = class extends FT {
    constructor(e, t, n, r, s){
        super(), this.buffer = [], this.setLevel(s), this._loggerCreationPromise = this._createSpdLogLogger(e, t, n, r), this._register(this.onDidChangeLogLevel((i)=>{
            this._logger && Rpe(this._logger, i);
        }));
    }
    async _createSpdLogLogger(e, t, n, r) {
        const s = n ? 6 : 1, i = 30 / s * mc.MB, a = await oYe(e, t, i, s, r);
        if (a) {
            this._logger = a, Rpe(this._logger, this.getLevel());
            for (const { level: o, message: l } of this.buffer)bpe(this._logger, o, l);
            this.buffer = [];
        }
    }
    log(e, t) {
        this._logger ? bpe(this._logger, e, t) : this.getLevel() <= e && this.buffer.push({
            level: e,
            message: t
        });
    }
    flush() {
        this._logger ? this.flushLogger() : this._loggerCreationPromise.then(()=>this.flushLogger());
    }
    dispose() {
        this._logger ? this.disposeLogger() : this._loggerCreationPromise.then(()=>this.disposeLogger()), super.dispose();
    }
    flushLogger() {
        this._logger && this._logger.flush();
    }
    disposeLogger() {
        this._logger && (this._logger.drop(), this._logger = void 0);
    }
};

}
