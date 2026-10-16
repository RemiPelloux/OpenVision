var i, r = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
    void 0 === i && (i = n);
    var r = Object.getOwnPropertyDescriptor(t, n);
    r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
        enumerable: !0,
        get: function() {
            return t[n];
        }
    }), Object.defineProperty(e, i, r);
} : function(e, t, n, i) {
    void 0 === i && (i = n), e[i] = t[n];
}), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
    Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
    });
} : function(e, t) {
    e.default = t;
}), o = this && this.__importStar || (i = function(e) {
    return i = Object.getOwnPropertyNames || function(e) {
        var t = [];
        for(var n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
        return t;
    }, i(e);
}, function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for(var n = i(e), o = 0; o < n.length; o++)"default" !== n[o] && r(t, e, n[o]);
    return s(t, e), t;
});
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.DiffComputer = exports.LegacyLinesDiffComputer = void 0;
const a = require("./module-804.js"), u = require("./module-306.js"), l = require("./module-90.js"), h = o(require("./module-589.js")), c = require("./module-298.js"), f = require("./module-141.js"), d = require("./module-496.js"), g = 1e5;
function m(e, t, n, i) {
    return new a.LcsDiff(e, t, n).ComputeDiff(i);
}
exports.LegacyLinesDiffComputer = class {
    computeDiff(e, t, n) {
        const i = new v(e, t, {
            maxComputationTime: n.maxComputationTimeMs,
            shouldIgnoreTrimWhitespace: n.ignoreTrimWhitespace,
            shouldComputeCharChanges: !0,
            shouldMakePrettyDiff: !0,
            shouldPostProcessCharChanges: !0
        }).computeDiff(), r = [];
        let s = null;
        for (const e of i.changes){
            let t, n;
            t = 0 === e.originalEndLineNumber ? new d.LineRange(e.originalStartLineNumber + 1, e.originalStartLineNumber + 1) : new d.LineRange(e.originalStartLineNumber, e.originalEndLineNumber + 1), n = 0 === e.modifiedEndLineNumber ? new d.LineRange(e.modifiedStartLineNumber + 1, e.modifiedStartLineNumber + 1) : new d.LineRange(e.modifiedStartLineNumber, e.modifiedEndLineNumber + 1);
            let i = new l.DetailedLineRangeMapping(t, n, e.charChanges?.map((e)=>new l.RangeMapping(new c.Range(e.originalStartLineNumber, e.originalStartColumn, e.originalEndLineNumber, e.originalEndColumn), new c.Range(e.modifiedStartLineNumber, e.modifiedStartColumn, e.modifiedEndLineNumber, e.modifiedEndColumn))));
            s && (s.modified.endLineNumberExclusive !== i.modified.startLineNumber && s.original.endLineNumberExclusive !== i.original.startLineNumber || (i = new l.DetailedLineRangeMapping(s.original.join(i.original), s.modified.join(i.modified), s.innerChanges && i.innerChanges ? s.innerChanges.concat(i.innerChanges) : void 0), r.pop())), r.push(i), s = i;
        }
        return (0, f.assertFn)(()=>(0, f.checkAdjacentItems)(r, (e, t)=>t.original.startLineNumber - e.original.endLineNumberExclusive === t.modified.startLineNumber - e.modified.endLineNumberExclusive && e.original.endLineNumberExclusive < t.original.startLineNumber && e.modified.endLineNumberExclusive < t.modified.startLineNumber)), new u.LinesDiff(r, [], i.quitEarly);
    }
};
class p {
    constructor(e){
        const t = [], n = [];
        for(let i = 0, r = e.length; i < r; i++)t[i] = E(e[i], 1), n[i] = w(e[i], 1);
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
            const t = this.lines[a], u = e ? this._startColumns[a] : 1, l = e ? this._endColumns[a] : t.length + 1;
            for(let e = u; e < l; e++)i[o] = t.charCodeAt(e - 1), r[o] = a + 1, s[o] = e, o++;
            !e && a < n && (i[o] = 10, r[o] = a + 1, s[o] = t.length + 1, o++);
        }
        return new b(i, r, s);
    }
}
class b {
    constructor(e, t, n){
        this._charCodes = e, this._lineNumbers = t, this._columns = n;
    }
    toString() {
        return "[" + this._charCodes.map((e, t)=>(10 === e ? "\\n" : String.fromCharCode(e)) + `-(${this._lineNumbers[t]},${this._columns[t]})`).join(", ") + "]";
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
        return -1 === e ? this.getStartLineNumber(e + 1) : (this._assertIndex(e, this._lineNumbers), 10 === this._charCodes[e] ? this._lineNumbers[e] + 1 : this._lineNumbers[e]);
    }
    getStartColumn(e) {
        return e > 0 && e === this._columns.length ? this.getEndColumn(e - 1) : (this._assertIndex(e, this._columns), this._columns[e]);
    }
    getEndColumn(e) {
        return -1 === e ? this.getStartColumn(e + 1) : (this._assertIndex(e, this._columns), 10 === this._charCodes[e] ? 1 : this._columns[e] + 1);
    }
}
class L {
    constructor(e, t, n, i, r, s, o, a){
        this.originalStartLineNumber = e, this.originalStartColumn = t, this.originalEndLineNumber = n, this.originalEndColumn = i, this.modifiedStartLineNumber = r, this.modifiedStartColumn = s, this.modifiedEndLineNumber = o, this.modifiedEndColumn = a;
    }
    static createFromDiffChange(e, t, n) {
        const i = t.getStartLineNumber(e.originalStart), r = t.getStartColumn(e.originalStart), s = t.getEndLineNumber(e.originalStart + e.originalLength - 1), o = t.getEndColumn(e.originalStart + e.originalLength - 1), a = n.getStartLineNumber(e.modifiedStart), u = n.getStartColumn(e.modifiedStart), l = n.getEndLineNumber(e.modifiedStart + e.modifiedLength - 1), h = n.getEndColumn(e.modifiedStart + e.modifiedLength - 1);
        return new L(i, r, s, o, a, u, l, h);
    }
}
class _ {
    constructor(e, t, n, i, r){
        this.originalStartLineNumber = e, this.originalEndLineNumber = t, this.modifiedStartLineNumber = n, this.modifiedEndLineNumber = i, this.charChanges = r;
    }
    static createFromDiffResult(e, t, n, i, r, s, o) {
        let a, u, l, h, c;
        if (0 === t.originalLength ? (a = n.getStartLineNumber(t.originalStart) - 1, u = 0) : (a = n.getStartLineNumber(t.originalStart), u = n.getEndLineNumber(t.originalStart + t.originalLength - 1)), 0 === t.modifiedLength ? (l = i.getStartLineNumber(t.modifiedStart) - 1, h = 0) : (l = i.getStartLineNumber(t.modifiedStart), h = i.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1)), s && t.originalLength > 0 && t.originalLength < 20 && t.modifiedLength > 0 && t.modifiedLength < 20 && n.getCharLength(e, t.originalStart, t.originalStart + t.originalLength - 1) <= g && i.getCharLength(e, t.modifiedStart, t.modifiedStart + t.modifiedLength - 1) <= g && r()) {
            const s = n.createCharSequence(e, t.originalStart, t.originalStart + t.originalLength - 1), a = i.createCharSequence(e, t.modifiedStart, t.modifiedStart + t.modifiedLength - 1);
            if (s.getElements().length > 0 && a.getElements().length > 0) {
                let e = m(s, a, r, !0).changes;
                o && (e = function(e) {
                    if (e.length <= 1) return e;
                    const t = [
                        e[0]
                    ];
                    let n = t[0];
                    for(let i = 1, r = e.length; i < r; i++){
                        const r = e[i], s = r.originalStart - (n.originalStart + n.originalLength), o = r.modifiedStart - (n.modifiedStart + n.modifiedLength);
                        Math.min(s, o) < 3 ? (n.originalLength = r.originalStart + r.originalLength - n.originalStart, n.modifiedLength = r.modifiedStart + r.modifiedLength - n.modifiedStart) : (t.push(r), n = r);
                    }
                    return t;
                }(e)), c = [];
                for(let t = 0, n = e.length; t < n; t++)c.push(L.createFromDiffChange(e[t], s, a));
            }
        }
        return new _(a, u, l, h, c);
    }
}
class v {
    constructor(e, t, n){
        this.shouldComputeCharChanges = n.shouldComputeCharChanges, this.shouldPostProcessCharChanges = n.shouldPostProcessCharChanges, this.shouldIgnoreTrimWhitespace = n.shouldIgnoreTrimWhitespace, this.shouldMakePrettyDiff = n.shouldMakePrettyDiff, this.originalLines = e, this.modifiedLines = t, this.original = new p(e), this.modified = new p(t), this.continueLineDiff = y(n.maxComputationTime), this.continueCharDiff = y(0 === n.maxComputationTime ? 0 : Math.min(n.maxComputationTime, 5e3));
    }
    computeDiff() {
        if (1 === this.original.lines.length && 0 === this.original.lines[0].length) return 1 === this.modified.lines.length && 0 === this.modified.lines[0].length ? {
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
        if (1 === this.modified.lines.length && 0 === this.modified.lines[0].length) return {
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
        const e = m(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff), t = e.changes, n = e.quitEarly;
        if (this.shouldIgnoreTrimWhitespace) {
            const e = [];
            for(let n = 0, i = t.length; n < i; n++)e.push(_.createFromDiffResult(this.shouldIgnoreTrimWhitespace, t[n], this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
            return {
                quitEarly: n,
                changes: e
            };
        }
        const i = [];
        let r = 0, s = 0;
        for(let e = -1, n = t.length; e < n; e++){
            const o = e + 1 < n ? t[e + 1] : null, a = o ? o.originalStart : this.originalLines.length, u = o ? o.modifiedStart : this.modifiedLines.length;
            for(; r < a && s < u;){
                const e = this.originalLines[r], t = this.modifiedLines[s];
                if (e !== t) {
                    {
                        let n = E(e, 1), o = E(t, 1);
                        for(; n > 1 && o > 1;){
                            if (e.charCodeAt(n - 2) !== t.charCodeAt(o - 2)) break;
                            n--, o--;
                        }
                        (n > 1 || o > 1) && this._pushTrimWhitespaceCharChange(i, r + 1, 1, n, s + 1, 1, o);
                    }
                    {
                        let n = w(e, 1), o = w(t, 1);
                        const a = e.length + 1, u = t.length + 1;
                        for(; n < a && o < u;){
                            if (e.charCodeAt(n - 1) !== e.charCodeAt(o - 1)) break;
                            n++, o++;
                        }
                        (n < a || o < u) && this._pushTrimWhitespaceCharChange(i, r + 1, n, a, s + 1, o, u);
                    }
                }
                r++, s++;
            }
            o && (i.push(_.createFromDiffResult(this.shouldIgnoreTrimWhitespace, o, this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges)), r += o.originalLength, s += o.modifiedLength);
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
            new L(t, n, t, i, r, s, r, o)
        ]), e.push(new _(t, t, r, r, a));
    }
    _mergeTrimWhitespaceCharChange(e, t, n, i, r, s, o) {
        const a = e.length;
        if (0 === a) return !1;
        const u = e[a - 1];
        return 0 !== u.originalEndLineNumber && 0 !== u.modifiedEndLineNumber && (u.originalEndLineNumber === t && u.modifiedEndLineNumber === r ? (this.shouldComputeCharChanges && u.charChanges && u.charChanges.push(new L(t, n, t, i, r, s, r, o)), !0) : u.originalEndLineNumber + 1 === t && u.modifiedEndLineNumber + 1 === r && (u.originalEndLineNumber = t, u.modifiedEndLineNumber = r, this.shouldComputeCharChanges && u.charChanges && u.charChanges.push(new L(t, n, t, i, r, s, r, o)), !0));
    }
}
function E(e, t) {
    const n = h.firstNonWhitespaceIndex(e);
    return -1 === n ? t : n + 1;
}
function w(e, t) {
    const n = h.lastNonWhitespaceIndex(e);
    return -1 === n ? t : n + 2;
}
function y(e) {
    if (0 === e) return ()=>!0;
    const t = Date.now();
    return ()=>Date.now() - t < e;
}
exports.DiffComputer = v;
