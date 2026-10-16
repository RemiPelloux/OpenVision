import { Fo, _K, bK } from "./HVr.js";
import { bfg, eJr } from "./contiguousMultilineTokens.js";
import { x } from "./tslib.es6.js";
var kOt;
export { kOt };
var __wakaru_tJr_initialized = false;
export function tJr() {
if (__wakaru_tJr_initialized) return;
__wakaru_tJr_initialized = true;
"use strict";
x(), Fo(), bfg(), kOt = class {
    static deserialize(e) {
        let t = 0;
        const n = _K(e, t);
        t += 4;
        const i = [];
        for(let r = 0; r < n; r++)t = eJr.deserialize(e, t, i);
        return i;
    }
    constructor(){
        this._tokens = [];
    }
    add(e, t) {
        if (this._tokens.length > 0) {
            const n = this._tokens[this._tokens.length - 1];
            if (n.endLineNumber + 1 === e) {
                n.appendLineTokens(t);
                return;
            }
        }
        this._tokens.push(new eJr(e, [
            t
        ]));
    }
    finalize() {
        return this._tokens;
    }
    serialize() {
        const e = this._serializeSize(), t = new Uint8Array(e);
        return this._serialize(t), t;
    }
    _serializeSize() {
        let e = 0;
        e += 4;
        for(let t = 0; t < this._tokens.length; t++)e += this._tokens[t].serializeSize();
        return e;
    }
    _serialize(e) {
        let t = 0;
        bK(e, this._tokens.length, t), t += 4;
        for(let n = 0; n < this._tokens.length; n++)t = this._tokens[n].serialize(e, t);
    }
};

}
