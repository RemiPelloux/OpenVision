import { K$s } from "./De_3.js";
import { qy } from "./charCode.js";
import { zku } from "./search.js";
import { x } from "./tslib.es6.js";
var Y$s, Yku, aRn, cRn, Xku;
export { Xku, Y$s, Yku, aRn, cRn };
var __wakaru_Zku_initialized = false;
export function Zku() {
if (__wakaru_Zku_initialized) return;
__wakaru_Zku_initialized = true;
"use strict";
x(), qy(), zku(), Y$s = class {
    constructor(e){
        this.staticValue = e, this.kind = 0;
    }
}, Yku = class {
    constructor(e){
        this.pieces = e, this.kind = 1;
    }
}, aRn = class hAa {
    static fromStaticValue(t) {
        return new hAa([
            cRn.staticValue(t)
        ]);
    }
    get hasReplacementPatterns() {
        return this._state.kind === 1;
    }
    constructor(t){
        !t || t.length === 0 ? this._state = new Y$s("") : t.length === 1 && t[0].staticValue !== null ? this._state = new Y$s(t[0].staticValue) : this._state = new Yku(t);
    }
    buildReplaceString(t, n) {
        if (this._state.kind === 0) return n ? K$s(t, this._state.staticValue) : this._state.staticValue;
        let i = "";
        for(let r = 0, s = this._state.pieces.length; r < s; r++){
            const o = this._state.pieces[r];
            if (o.staticValue !== null) {
                i += o.staticValue;
                continue;
            }
            let a = hAa._substitute(o.matchIndex, t);
            if (o.caseOps !== null && o.caseOps.length > 0) {
                const c = [], l = o.caseOps.length;
                let u = 0;
                for(let h = 0, p = a.length; h < p; h++){
                    if (u >= l) {
                        c.push(a.slice(h));
                        break;
                    }
                    switch(o.caseOps[u]){
                        case "U":
                            c.push(a[h].toUpperCase());
                            break;
                        case "u":
                            c.push(a[h].toUpperCase()), u++;
                            break;
                        case "L":
                            c.push(a[h].toLowerCase());
                            break;
                        case "l":
                            c.push(a[h].toLowerCase()), u++;
                            break;
                        default:
                            c.push(a[h]);
                    }
                }
                a = c.join("");
            }
            i += a;
        }
        return i;
    }
    static _substitute(t, n) {
        if (n === null) return "";
        if (t === 0) return n[0];
        let i = "";
        for(; t > 0;){
            if (t < n.length) return (n[t] || "") + i;
            i = String(t % 10) + i, t = Math.floor(t / 10);
        }
        return "$" + i;
    }
}, cRn = class A1r {
    static staticValue(t) {
        return new A1r(t, -1, null);
    }
    static matchIndex(t) {
        return new A1r(null, t, null);
    }
    static caseOps(t, n) {
        return new A1r(null, t, n);
    }
    constructor(t, n, i){
        this.staticValue = t, this.matchIndex = n, !i || i.length === 0 ? this.caseOps = null : this.caseOps = i.slice(0);
    }
}, Xku = class {
    constructor(e){
        this._source = e, this._lastCharIndex = 0, this._result = [], this._resultLen = 0, this._currentStaticPiece = "";
    }
    emitUnchanged(e) {
        this._emitStatic(this._source.substring(this._lastCharIndex, e)), this._lastCharIndex = e;
    }
    emitStatic(e, t) {
        this._emitStatic(e), this._lastCharIndex = t;
    }
    _emitStatic(e) {
        e.length !== 0 && (this._currentStaticPiece += e);
    }
    emitMatchIndex(e, t, n) {
        this._currentStaticPiece.length !== 0 && (this._result[this._resultLen++] = cRn.staticValue(this._currentStaticPiece), this._currentStaticPiece = ""), this._result[this._resultLen++] = cRn.caseOps(e, n), this._lastCharIndex = t;
    }
    finalize() {
        return this.emitUnchanged(this._source.length), this._currentStaticPiece.length !== 0 && (this._result[this._resultLen++] = cRn.staticValue(this._currentStaticPiece), this._currentStaticPiece = ""), new aRn(this._result);
    }
};

}
