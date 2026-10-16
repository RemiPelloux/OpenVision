import { Cw } from "./charCode.js";
import { s3a } from "./ipa.js";
import { $Pp } from "./search.js";
import { E } from "./tslib.es6.js";
var o3a, HPp, mWr, tyi, WPp;
export { HPp, WPp, mWr, o3a, tyi };
var __wakaru_UI1_initialized = false;
export function UI1() {
if (__wakaru_UI1_initialized) return;
__wakaru_UI1_initialized = true;
"use strict";
E(), Cw(), $Pp(), o3a = class {
    constructor(t){
        this.staticValue = t, this.kind = 0;
    }
}, HPp = class {
    constructor(t){
        this.pieces = t, this.kind = 1;
    }
}, mWr = class XJc {
    static fromStaticValue(e) {
        return new XJc([
            tyi.staticValue(e)
        ]);
    }
    get hasReplacementPatterns() {
        return this._state.kind === 1;
    }
    constructor(e){
        !e || e.length === 0 ? this._state = new o3a("") : e.length === 1 && e[0].staticValue !== null ? this._state = new o3a(e[0].staticValue) : this._state = new HPp(e);
    }
    buildReplaceString(e, n) {
        if (this._state.kind === 0) return n ? s3a(e, this._state.staticValue) : this._state.staticValue;
        let i = "";
        for(let r = 0, s = this._state.pieces.length; r < s; r++){
            const o = this._state.pieces[r];
            if (o.staticValue !== null) {
                i += o.staticValue;
                continue;
            }
            let a = XJc._substitute(o.matchIndex, e);
            if (o.caseOps !== null && o.caseOps.length > 0) {
                const l = [], c = o.caseOps.length;
                let u = 0;
                for(let d = 0, h = a.length; d < h; d++){
                    if (u >= c) {
                        l.push(a.slice(d));
                        break;
                    }
                    switch(o.caseOps[u]){
                        case "U":
                            l.push(a[d].toUpperCase());
                            break;
                        case "u":
                            l.push(a[d].toUpperCase()), u++;
                            break;
                        case "L":
                            l.push(a[d].toLowerCase());
                            break;
                        case "l":
                            l.push(a[d].toLowerCase()), u++;
                            break;
                        default:
                            l.push(a[d]);
                    }
                }
                a = l.join("");
            }
            i += a;
        }
        return i;
    }
    static _substitute(e, n) {
        if (n === null) return "";
        if (e === 0) return n[0];
        let i = "";
        for(; e > 0;){
            if (e < n.length) return (n[e] || "") + i;
            i = String(e % 10) + i, e = Math.floor(e / 10);
        }
        return "$" + i;
    }
}, tyi = class SXs {
    static staticValue(e) {
        return new SXs(e, -1, null);
    }
    static matchIndex(e) {
        return new SXs(null, e, null);
    }
    static caseOps(e, n) {
        return new SXs(null, e, n);
    }
    constructor(e, n, i){
        this.staticValue = e, this.matchIndex = n, !i || i.length === 0 ? this.caseOps = null : this.caseOps = i.slice(0);
    }
}, WPp = class {
    constructor(t){
        this._source = t, this._lastCharIndex = 0, this._result = [], this._resultLen = 0, this._currentStaticPiece = "";
    }
    emitUnchanged(t) {
        this._emitStatic(this._source.substring(this._lastCharIndex, t)), this._lastCharIndex = t;
    }
    emitStatic(t, e) {
        this._emitStatic(t), this._lastCharIndex = e;
    }
    _emitStatic(t) {
        t.length !== 0 && (this._currentStaticPiece += t);
    }
    emitMatchIndex(t, e, n) {
        this._currentStaticPiece.length !== 0 && (this._result[this._resultLen++] = tyi.staticValue(this._currentStaticPiece), this._currentStaticPiece = ""), this._result[this._resultLen++] = tyi.caseOps(t, n), this._lastCharIndex = e;
    }
    finalize() {
        return this.emitUnchanged(this._source.length), this._currentStaticPiece.length !== 0 && (this._result[this._resultLen++] = tyi.staticValue(this._currentStaticPiece), this._currentStaticPiece = ""), new mWr(this._result);
    }
};

}
