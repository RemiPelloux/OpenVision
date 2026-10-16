import { Fa, i$e, xde } from "./Iwo.js";
import { YE } from "./assert.js";
import { Cw, ti } from "./charCode.js";
import { zoi } from "./diff.js";
import { K3a, V3a, nDp, tDp, vx1 } from "./ipa.js";
import { DD, wd } from "./lineRange.js";
import { OQ, ioi } from "./linesDiffComputer.js";
import { Qs, qt } from "./range.js";
import { I7, Swe, ane } from "./rangeMapping.js";
import { E } from "./tslib.es6.js";
var iDp, Y3a, rDp, X3a, sDp, Syi, PWr, Z3a;
export { PWr, Syi, X3a, Y3a, Z3a, iDp, rDp, sDp };
var __wakaru_oDp_initialized = false;
export function oDp() {
if (__wakaru_oDp_initialized) return;
__wakaru_oDp_initialized = true;
"use strict";
E(), Cw(), zoi(), ioi(), Swe(), Fa(), Qs(), YE(), DD(), iDp = 3, Y3a = 1e5, rDp = class {
    computeDiff(t, e, n) {
        const r = new Z3a(t, e, {
            maxComputationTime: n.maxComputationTimeMs,
            shouldIgnoreTrimWhitespace: n.ignoreTrimWhitespace,
            shouldComputeCharChanges: !0,
            shouldMakePrettyDiff: !0,
            shouldPostProcessCharChanges: !0
        }).computeDiff(), s = [];
        let o = null;
        for (const a of r.changes){
            let l;
            a.originalEndLineNumber === 0 ? l = new wd(a.originalStartLineNumber + 1, a.originalStartLineNumber + 1) : l = new wd(a.originalStartLineNumber, a.originalEndLineNumber + 1);
            let c;
            a.modifiedEndLineNumber === 0 ? c = new wd(a.modifiedStartLineNumber + 1, a.modifiedStartLineNumber + 1) : c = new wd(a.modifiedStartLineNumber, a.modifiedEndLineNumber + 1);
            let u = new I7(l, c, a.charChanges?.map((d)=>new ane(new qt(d.originalStartLineNumber, d.originalStartColumn, d.originalEndLineNumber, d.originalEndColumn), new qt(d.modifiedStartLineNumber, d.modifiedStartColumn, d.modifiedEndLineNumber, d.modifiedEndColumn))));
            o && (o.modified.endLineNumberExclusive === u.modified.startLineNumber || o.original.endLineNumberExclusive === u.original.startLineNumber) && (u = new I7(o.original.join(u.original), o.modified.join(u.modified), o.innerChanges && u.innerChanges ? o.innerChanges.concat(u.innerChanges) : void 0), s.pop()), s.push(u), o = u;
        }
        return xde(()=>i$e(s, (a, l)=>l.original.startLineNumber - a.original.endLineNumberExclusive === l.modified.startLineNumber - a.modified.endLineNumberExclusive && a.original.endLineNumberExclusive < l.original.startLineNumber && a.modified.endLineNumberExclusive < l.modified.startLineNumber)), new OQ(s, [], r.quitEarly);
    }
}, X3a = class {
    constructor(t){
        const e = [], n = [];
        for(let i = 0, r = t.length; i < r; i++)e[i] = V3a(t[i], 1), n[i] = K3a(t[i], 1);
        this.lines = t, this._startColumns = e, this._endColumns = n;
    }
    getElements() {
        const t = [];
        for(let e = 0, n = this.lines.length; e < n; e++)t[e] = this.lines[e].substring(this._startColumns[e] - 1, this._endColumns[e] - 1);
        return t;
    }
    getStrictElement(t) {
        return this.lines[t];
    }
    getStartLineNumber(t) {
        return t + 1;
    }
    getEndLineNumber(t) {
        return t + 1;
    }
    getCharLength(t, e, n) {
        let i = 0;
        for(let r = e; r <= n; r++)t ? i += this._endColumns[r] - this._startColumns[r] : (i += this.lines[r].length, r < n && (i += 1));
        return i;
    }
    createCharSequence(t, e, n) {
        const i = [], r = [], s = [];
        let o = 0;
        for(let a = e; a <= n; a++){
            const l = this.lines[a], c = t ? this._startColumns[a] : 1, u = t ? this._endColumns[a] : l.length + 1;
            for(let d = c; d < u; d++)i[o] = l.charCodeAt(d - 1), r[o] = a + 1, s[o] = d, o++;
            !t && a < n && (i[o] = ti.LineFeed, r[o] = a + 1, s[o] = l.length + 1, o++);
        }
        return new sDp(i, r, s);
    }
}, sDp = class {
    constructor(t, e, n){
        this._charCodes = t, this._lineNumbers = e, this._columns = n;
    }
    toString() {
        return "[" + this._charCodes.map((t, e)=>(t === ti.LineFeed ? "\\n" : String.fromCharCode(t)) + `-(${this._lineNumbers[e]},${this._columns[e]})`).join(", ") + "]";
    }
    _assertIndex(t, e) {
        if (t < 0 || t >= e.length) throw new Error("Illegal index");
    }
    getElements() {
        return this._charCodes;
    }
    getStartLineNumber(t) {
        return t > 0 && t === this._lineNumbers.length ? this.getEndLineNumber(t - 1) : (this._assertIndex(t, this._lineNumbers), this._lineNumbers[t]);
    }
    getEndLineNumber(t) {
        return t === -1 ? this.getStartLineNumber(t + 1) : (this._assertIndex(t, this._lineNumbers), this._charCodes[t] === ti.LineFeed ? this._lineNumbers[t] + 1 : this._lineNumbers[t]);
    }
    getStartColumn(t) {
        return t > 0 && t === this._columns.length ? this.getEndColumn(t - 1) : (this._assertIndex(t, this._columns), this._columns[t]);
    }
    getEndColumn(t) {
        return t === -1 ? this.getStartColumn(t + 1) : (this._assertIndex(t, this._columns), this._charCodes[t] === ti.LineFeed ? 1 : this._columns[t] + 1);
    }
}, Syi = class N2b {
    constructor(e, n, i, r, s, o, a, l){
        this.originalStartLineNumber = e, this.originalStartColumn = n, this.originalEndLineNumber = i, this.originalEndColumn = r, this.modifiedStartLineNumber = s, this.modifiedStartColumn = o, this.modifiedEndLineNumber = a, this.modifiedEndColumn = l;
    }
    static createFromDiffChange(e, n, i) {
        const r = n.getStartLineNumber(e.originalStart), s = n.getStartColumn(e.originalStart), o = n.getEndLineNumber(e.originalStart + e.originalLength - 1), a = n.getEndColumn(e.originalStart + e.originalLength - 1), l = i.getStartLineNumber(e.modifiedStart), c = i.getStartColumn(e.modifiedStart), u = i.getEndLineNumber(e.modifiedStart + e.modifiedLength - 1), d = i.getEndColumn(e.modifiedStart + e.modifiedLength - 1);
        return new N2b(r, s, o, a, l, c, u, d);
    }
}, PWr = class L2b {
    constructor(e, n, i, r, s){
        this.originalStartLineNumber = e, this.originalEndLineNumber = n, this.modifiedStartLineNumber = i, this.modifiedEndLineNumber = r, this.charChanges = s;
    }
    static createFromDiffResult(e, n, i, r, s, o, a) {
        let l, c, u, d, h;
        if (n.originalLength === 0 ? (l = i.getStartLineNumber(n.originalStart) - 1, c = 0) : (l = i.getStartLineNumber(n.originalStart), c = i.getEndLineNumber(n.originalStart + n.originalLength - 1)), n.modifiedLength === 0 ? (u = r.getStartLineNumber(n.modifiedStart) - 1, d = 0) : (u = r.getStartLineNumber(n.modifiedStart), d = r.getEndLineNumber(n.modifiedStart + n.modifiedLength - 1)), o && n.originalLength > 0 && n.originalLength < 20 && n.modifiedLength > 0 && n.modifiedLength < 20 && i.getCharLength(e, n.originalStart, n.originalStart + n.originalLength - 1) <= Y3a && r.getCharLength(e, n.modifiedStart, n.modifiedStart + n.modifiedLength - 1) <= Y3a && s()) {
            const p = i.createCharSequence(e, n.originalStart, n.originalStart + n.originalLength - 1), g = r.createCharSequence(e, n.modifiedStart, n.modifiedStart + n.modifiedLength - 1);
            if (p.getElements().length > 0 && g.getElements().length > 0) {
                let f = tDp(p, g, s, !0).changes;
                a && (f = vx1(f)), h = [];
                for(let _ = 0, b = f.length; _ < b; _++)h.push(Syi.createFromDiffChange(f[_], p, g));
            }
        }
        return new L2b(l, c, u, d, h);
    }
}, Z3a = class {
    constructor(t, e, n){
        this.shouldComputeCharChanges = n.shouldComputeCharChanges, this.shouldPostProcessCharChanges = n.shouldPostProcessCharChanges, this.shouldIgnoreTrimWhitespace = n.shouldIgnoreTrimWhitespace, this.shouldMakePrettyDiff = n.shouldMakePrettyDiff, this.originalLines = t, this.modifiedLines = e, this.original = new X3a(t), this.modified = new X3a(e), this.continueLineDiff = nDp(n.maxComputationTime), this.continueCharDiff = nDp(n.maxComputationTime === 0 ? 0 : Math.min(n.maxComputationTime, 5e3));
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
        const t = tDp(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff), e = t.changes, n = t.quitEarly;
        if (this.shouldIgnoreTrimWhitespace) {
            const o = [];
            for(let a = 0, l = e.length; a < l; a++)o.push(PWr.createFromDiffResult(this.shouldIgnoreTrimWhitespace, e[a], this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
            return {
                quitEarly: n,
                changes: o
            };
        }
        const i = [];
        let r = 0, s = 0;
        for(let o = -1, a = e.length; o < a; o++){
            const l = o + 1 < a ? e[o + 1] : null, c = l ? l.originalStart : this.originalLines.length, u = l ? l.modifiedStart : this.modifiedLines.length;
            for(; r < c && s < u;){
                const d = this.originalLines[r], h = this.modifiedLines[s];
                if (d !== h) {
                    {
                        let p = V3a(d, 1), g = V3a(h, 1);
                        for(; p > 1 && g > 1;){
                            const f = d.charCodeAt(p - 2), _ = h.charCodeAt(g - 2);
                            if (f !== _) break;
                            p--, g--;
                        }
                        (p > 1 || g > 1) && this._pushTrimWhitespaceCharChange(i, r + 1, 1, p, s + 1, 1, g);
                    }
                    {
                        let p = K3a(d, 1), g = K3a(h, 1);
                        const f = d.length + 1, _ = h.length + 1;
                        for(; p < f && g < _;){
                            const b = d.charCodeAt(p - 1), y = d.charCodeAt(g - 1);
                            if (b !== y) break;
                            p++, g++;
                        }
                        (p < f || g < _) && this._pushTrimWhitespaceCharChange(i, r + 1, p, f, s + 1, g, _);
                    }
                }
                r++, s++;
            }
            l && (i.push(PWr.createFromDiffResult(this.shouldIgnoreTrimWhitespace, l, this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges)), r += l.originalLength, s += l.modifiedLength);
        }
        return {
            quitEarly: n,
            changes: i
        };
    }
    _pushTrimWhitespaceCharChange(t, e, n, i, r, s, o) {
        if (this._mergeTrimWhitespaceCharChange(t, e, n, i, r, s, o)) return;
        let a;
        this.shouldComputeCharChanges && (a = [
            new Syi(e, n, e, i, r, s, r, o)
        ]), t.push(new PWr(e, e, r, r, a));
    }
    _mergeTrimWhitespaceCharChange(t, e, n, i, r, s, o) {
        const a = t.length;
        if (a === 0) return !1;
        const l = t[a - 1];
        return l.originalEndLineNumber === 0 || l.modifiedEndLineNumber === 0 ? !1 : l.originalEndLineNumber === e && l.modifiedEndLineNumber === r ? (this.shouldComputeCharChanges && l.charChanges && l.charChanges.push(new Syi(e, n, e, i, r, s, r, o)), !0) : l.originalEndLineNumber + 1 === e && l.modifiedEndLineNumber + 1 === r ? (l.originalEndLineNumber = e, l.modifiedEndLineNumber = r, this.shouldComputeCharChanges && l.charChanges && l.charChanges.push(new Syi(e, n, e, i, r, s, r, o)), !0) : !1;
    }
};

}
