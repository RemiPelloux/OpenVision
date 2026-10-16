import { Ga, Lse, Nse } from "./Iwo.js";
import { h$o, wPy } from "./contiguousMultilineTokens.js";
import { E } from "./tslib.es6.js";
var ufn;
export { ufn };
var __wakaru_p$o_initialized = false;
export function p$o() {
if (__wakaru_p$o_initialized) return;
__wakaru_p$o_initialized = true;
"use strict";
E(), Ga(), wPy(), ufn = class {
    static deserialize(t) {
        let e = 0;
        const n = Nse(t, e);
        e += 4;
        const i = [];
        for(let r = 0; r < n; r++)e = h$o.deserialize(t, e, i);
        return i;
    }
    constructor(){
        this._tokens = [];
    }
    add(t, e) {
        if (this._tokens.length > 0) {
            const n = this._tokens[this._tokens.length - 1];
            if (n.endLineNumber + 1 === t) {
                n.appendLineTokens(e);
                return;
            }
        }
        this._tokens.push(new h$o(t, [
            e
        ]));
    }
    finalize() {
        return this._tokens;
    }
    serialize() {
        const t = this._serializeSize(), e = new Uint8Array(t);
        return this._serialize(e), e;
    }
    _serializeSize() {
        let t = 0;
        t += 4;
        for(let e = 0; e < this._tokens.length; e++)t += this._tokens[e].serializeSize();
        return t;
    }
    _serialize(t) {
        let e = 0;
        Lse(t, this._tokens.length, e), e += 4;
        for(let n = 0; n < this._tokens.length; n++)e = this._tokens[n].serialize(t, e);
    }
};

}
