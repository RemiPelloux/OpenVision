import { Fcv, Kwu, SHs, yHs, zwu } from "./De_3.js";
import { Ps, rJ, vAe } from "./HVr.js";
import { C0 } from "./assert.js";
import { En, qy } from "./charCode.js";
import { a_n } from "./diff.js";
import { Vl, hA } from "./lineRange.js";
import { Ivn, SW } from "./linesDiffComputer.js";
import { dt, qi } from "./range.js";
import { C3, KV, Ple } from "./rangeMapping.js";
import { x } from "./tslib.es6.js";
var Ywu, kHs, Xwu, wHs, Zwu, vRn, c6i, CHs;
export { CHs, Xwu, Ywu, Zwu, c6i, kHs, vRn, wHs };
var __wakaru_Qwu_initialized = false;
export function Qwu() {
if (__wakaru_Qwu_initialized) return;
__wakaru_Qwu_initialized = true;
"use strict";
x(), qy(), a_n(), Ivn(), Ple(), Ps(), qi(), C0(), hA(), Ywu = 3, kHs = 1e5, Xwu = class {
    computeDiff(e, t, n) {
        const r = new CHs(e, t, {
            maxComputationTime: n.maxComputationTimeMs,
            shouldIgnoreTrimWhitespace: n.ignoreTrimWhitespace,
            shouldComputeCharChanges: !0,
            shouldMakePrettyDiff: !0,
            shouldPostProcessCharChanges: !0
        }).computeDiff(), s = [];
        let o = null;
        for (const a of r.changes){
            let c;
            a.originalEndLineNumber === 0 ? c = new Vl(a.originalStartLineNumber + 1, a.originalStartLineNumber + 1) : c = new Vl(a.originalStartLineNumber, a.originalEndLineNumber + 1);
            let l;
            a.modifiedEndLineNumber === 0 ? l = new Vl(a.modifiedStartLineNumber + 1, a.modifiedStartLineNumber + 1) : l = new Vl(a.modifiedStartLineNumber, a.modifiedEndLineNumber + 1);
            let u = new C3(c, l, a.charChanges?.map((h)=>new KV(new dt(h.originalStartLineNumber, h.originalStartColumn, h.originalEndLineNumber, h.originalEndColumn), new dt(h.modifiedStartLineNumber, h.modifiedStartColumn, h.modifiedEndLineNumber, h.modifiedEndColumn))));
            o && (o.modified.endLineNumberExclusive === u.modified.startLineNumber || o.original.endLineNumberExclusive === u.original.startLineNumber) && (u = new C3(o.original.join(u.original), o.modified.join(u.modified), o.innerChanges && u.innerChanges ? o.innerChanges.concat(u.innerChanges) : void 0), s.pop()), s.push(u), o = u;
        }
        return rJ(()=>vAe(s, (a, c)=>c.original.startLineNumber - a.original.endLineNumberExclusive === c.modified.startLineNumber - a.modified.endLineNumberExclusive && a.original.endLineNumberExclusive < c.original.startLineNumber && a.modified.endLineNumberExclusive < c.modified.startLineNumber)), new SW(s, [], r.quitEarly);
    }
}, wHs = class {
    constructor(e){
        const t = [], n = [];
        for(let i = 0, r = e.length; i < r; i++)t[i] = yHs(e[i], 1), n[i] = SHs(e[i], 1);
        this.lines = e, this._startColumns = t, this._endColumns = n;
    }
    getElements() {
        const e = [];
        for(let t = 0, n = this.lines.length; t < n; t++)e[t] = this.lines[t].substring(this._startColumns[t] - 1, this._endColumns[t] - 1);
        return e;
    }
    getStrictElement(e) {
        return this.lines[e];
    }
    getStartLineNumber(e) {
        return e + 1;
    }
    getEndLineNumber(e) {
        return e + 1;
    }
    getCharLength(e, t, n) {
        let i = 0;
        for(let r = t; r <= n; r++)e ? i += this._endColumns[r] - this._startColumns[r] : (i += this.lines[r].length, r < n && (i += 1));
        return i;
    }
    createCharSequence(e, t, n) {
        const i = [], r = [], s = [];
        let o = 0;
        for(let a = t; a <= n; a++){
            const c = this.lines[a], l = e ? this._startColumns[a] : 1, u = e ? this._endColumns[a] : c.length + 1;
            for(let h = l; h < u; h++)i[o] = c.charCodeAt(h - 1), r[o] = a + 1, s[o] = h, o++;
            !e && a < n && (i[o] = En.LineFeed, r[o] = a + 1, s[o] = c.length + 1, o++);
        }
        return new Zwu(i, r, s);
    }
}, Zwu = class {
    constructor(e, t, n){
        this._charCodes = e, this._lineNumbers = t, this._columns = n;
    }
    toString() {
        return "[" + this._charCodes.map((e, t)=>(e === En.LineFeed ? "\\n" : String.fromCharCode(e)) + `-(${this._lineNumbers[t]},${this._columns[t]})`).join(", ") + "]";
    }
    _assertIndex(e, t) {
        if (e < 0 || e >= t.length) throw new Error("Illegal index");
    }
    getElements() {
        return this._charCodes;
    }
    getStartLineNumber(e) {
        return e > 0 && e === this._lineNumbers.length ? this.getEndLineNumber(e - 1) : (this._assertIndex(e, this._lineNumbers), this._lineNumbers[e]);
    }
    getEndLineNumber(e) {
        return e === -1 ? this.getStartLineNumber(e + 1) : (this._assertIndex(e, this._lineNumbers), this._charCodes[e] === En.LineFeed ? this._lineNumbers[e] + 1 : this._lineNumbers[e]);
    }
    getStartColumn(e) {
        return e > 0 && e === this._columns.length ? this.getEndColumn(e - 1) : (this._assertIndex(e, this._columns), this._columns[e]);
    }
    getEndColumn(e) {
        return e === -1 ? this.getStartColumn(e + 1) : (this._assertIndex(e, this._columns), this._charCodes[e] === En.LineFeed ? 1 : this._columns[e] + 1);
    }
}, vRn = class Qwm {
    constructor(t, n, i, r, s, o, a, c){
        this.originalStartLineNumber = t, this.originalStartColumn = n, this.originalEndLineNumber = i, this.originalEndColumn = r, this.modifiedStartLineNumber = s, this.modifiedStartColumn = o, this.modifiedEndLineNumber = a, this.modifiedEndColumn = c;
    }
    static createFromDiffChange(t, n, i) {
        const r = n.getStartLineNumber(t.originalStart), s = n.getStartColumn(t.originalStart), o = n.getEndLineNumber(t.originalStart + t.originalLength - 1), a = n.getEndColumn(t.originalStart + t.originalLength - 1), c = i.getStartLineNumber(t.modifiedStart), l = i.getStartColumn(t.modifiedStart), u = i.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1), h = i.getEndColumn(t.modifiedStart + t.modifiedLength - 1);
        return new Qwm(r, s, o, a, c, l, u, h);
    }
}, c6i = class Jwm {
    constructor(t, n, i, r, s){
        this.originalStartLineNumber = t, this.originalEndLineNumber = n, this.modifiedStartLineNumber = i, this.modifiedEndLineNumber = r, this.charChanges = s;
    }
    static createFromDiffResult(t, n, i, r, s, o, a) {
        let c, l, u, h, p;
        if (n.originalLength === 0 ? (c = i.getStartLineNumber(n.originalStart) - 1, l = 0) : (c = i.getStartLineNumber(n.originalStart), l = i.getEndLineNumber(n.originalStart + n.originalLength - 1)), n.modifiedLength === 0 ? (u = r.getStartLineNumber(n.modifiedStart) - 1, h = 0) : (u = r.getStartLineNumber(n.modifiedStart), h = r.getEndLineNumber(n.modifiedStart + n.modifiedLength - 1)), o && n.originalLength > 0 && n.originalLength < 20 && n.modifiedLength > 0 && n.modifiedLength < 20 && i.getCharLength(t, n.originalStart, n.originalStart + n.originalLength - 1) <= kHs && r.getCharLength(t, n.modifiedStart, n.modifiedStart + n.modifiedLength - 1) <= kHs && s()) {
            const g = i.createCharSequence(t, n.originalStart, n.originalStart + n.originalLength - 1), f = r.createCharSequence(t, n.modifiedStart, n.modifiedStart + n.modifiedLength - 1);
            if (g.getElements().length > 0 && f.getElements().length > 0) {
                let v = zwu(g, f, s, !0).changes;
                a && (v = Fcv(v)), p = [];
                for(let b = 0, y = v.length; b < y; b++)p.push(vRn.createFromDiffChange(v[b], g, f));
            }
        }
        return new Jwm(c, l, u, h, p);
    }
}, CHs = class {
    constructor(e, t, n){
        this.shouldComputeCharChanges = n.shouldComputeCharChanges, this.shouldPostProcessCharChanges = n.shouldPostProcessCharChanges, this.shouldIgnoreTrimWhitespace = n.shouldIgnoreTrimWhitespace, this.shouldMakePrettyDiff = n.shouldMakePrettyDiff, this.originalLines = e, this.modifiedLines = t, this.original = new wHs(e), this.modified = new wHs(t), this.continueLineDiff = Kwu(n.maxComputationTime), this.continueCharDiff = Kwu(n.maxComputationTime === 0 ? 0 : Math.min(n.maxComputationTime, 5e3));
    }
    computeDiff() {
        if (this.original.lines.length === 1 && this.original.lines[0].length === 0) return this.modified.lines.length === 1 && this.modified.lines[0].length === 0 ? {
            quitEarly: !1,
            changes: []
        } : {
            quitEarly: !1,
            changes: [
                {
                    originalStartLineNumber: 1,
                    originalEndLineNumber: 1,
                    modifiedStartLineNumber: 1,
                    modifiedEndLineNumber: this.modified.lines.length,
                    charChanges: void 0
                }
            ]
        };
        if (this.modified.lines.length === 1 && this.modified.lines[0].length === 0) return {
            quitEarly: !1,
            changes: [
                {
                    originalStartLineNumber: 1,
                    originalEndLineNumber: this.original.lines.length,
                    modifiedStartLineNumber: 1,
                    modifiedEndLineNumber: 1,
                    charChanges: void 0
                }
            ]
        };
        const e = zwu(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff), t = e.changes, n = e.quitEarly;
        if (this.shouldIgnoreTrimWhitespace) {
            const o = [];
            for(let a = 0, c = t.length; a < c; a++)o.push(c6i.createFromDiffResult(this.shouldIgnoreTrimWhitespace, t[a], this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
            return {
                quitEarly: n,
                changes: o
            };
        }
        const i = [];
        let r = 0, s = 0;
        for(let o = -1, a = t.length; o < a; o++){
            const c = o + 1 < a ? t[o + 1] : null, l = c ? c.originalStart : this.originalLines.length, u = c ? c.modifiedStart : this.modifiedLines.length;
            for(; r < l && s < u;){
                const h = this.originalLines[r], p = this.modifiedLines[s];
                if (h !== p) {
                    {
                        let g = yHs(h, 1), f = yHs(p, 1);
                        for(; g > 1 && f > 1;){
                            const v = h.charCodeAt(g - 2), b = p.charCodeAt(f - 2);
                            if (v !== b) break;
                            g--, f--;
                        }
                        (g > 1 || f > 1) && this._pushTrimWhitespaceCharChange(i, r + 1, 1, g, s + 1, 1, f);
                    }
                    {
                        let g = SHs(h, 1), f = SHs(p, 1);
                        const v = h.length + 1, b = p.length + 1;
                        for(; g < v && f < b;){
                            const y = h.charCodeAt(g - 1), T = h.charCodeAt(f - 1);
                            if (y !== T) break;
                            g++, f++;
                        }
                        (g < v || f < b) && this._pushTrimWhitespaceCharChange(i, r + 1, g, v, s + 1, f, b);
                    }
                }
                r++, s++;
            }
            c && (i.push(c6i.createFromDiffResult(this.shouldIgnoreTrimWhitespace, c, this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges)), r += c.originalLength, s += c.modifiedLength);
        }
        return {
            quitEarly: n,
            changes: i
        };
    }
    _pushTrimWhitespaceCharChange(e, t, n, i, r, s, o) {
        if (this._mergeTrimWhitespaceCharChange(e, t, n, i, r, s, o)) return;
        let a;
        this.shouldComputeCharChanges && (a = [
            new vRn(t, n, t, i, r, s, r, o)
        ]), e.push(new c6i(t, t, r, r, a));
    }
    _mergeTrimWhitespaceCharChange(e, t, n, i, r, s, o) {
        const a = e.length;
        if (a === 0) return !1;
        const c = e[a - 1];
        return c.originalEndLineNumber === 0 || c.modifiedEndLineNumber === 0 ? !1 : c.originalEndLineNumber === t && c.modifiedEndLineNumber === r ? (this.shouldComputeCharChanges && c.charChanges && c.charChanges.push(new vRn(t, n, t, i, r, s, r, o)), !0) : c.originalEndLineNumber + 1 === t && c.modifiedEndLineNumber + 1 === r ? (c.originalEndLineNumber = t, c.modifiedEndLineNumber = r, this.shouldComputeCharChanges && c.charChanges && c.charChanges.push(new vRn(t, n, t, i, r, s, r, o)), !0) : !1;
    }
};

}
