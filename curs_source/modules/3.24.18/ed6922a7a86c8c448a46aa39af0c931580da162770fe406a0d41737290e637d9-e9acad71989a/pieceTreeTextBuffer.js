import { CO, Jce, Ps, R7, Rqe, Se, bt, lht, qxc, ve, we } from "./HVr.js";
import { kze } from "./eolCounter.js";
import { Cb, oFc } from "./model_2.js";
import { r3c, s3c } from "./pieceTreeBase.js";
import { Sze } from "./qIc.js";
import { dt, qi } from "./range.js";
import { PFc, _we } from "./textChange.js";
import { x } from "./tslib.es6.js";
var Bvi;
export { Bvi };
var __wakaru_jQr_initialized = false;
export function jQr() {
if (__wakaru_jQr_initialized) return;
__wakaru_jQr_initialized = true;
"use strict";
x(), bt(), Ps(), qi(), Cb(), s3c(), kze(), PFc(), Se(), Bvi = class $Xn extends we {
    constructor(t, n, i, r, s, o, a){
        super(), this._onDidChangeContent = this._register(new ve), this.onDidChangeContent = this._onDidChangeContent.event, this._BOM = n, this._mightContainNonBasicASCII = !o, this._mightContainRTL = r, this._mightContainUnusualLineTerminators = s, this._pieceTree = new r3c(t, i, a);
    }
    equals(t) {
        return !(t instanceof $Xn) || this._BOM !== t._BOM || this.getEOL() !== t.getEOL() ? !1 : this._pieceTree.equal(t._pieceTree);
    }
    mightContainRTL() {
        return this._mightContainRTL;
    }
    mightContainUnusualLineTerminators() {
        return this._mightContainUnusualLineTerminators;
    }
    resetMightContainUnusualLineTerminators() {
        this._mightContainUnusualLineTerminators = !1;
    }
    mightContainNonBasicASCII() {
        return this._mightContainNonBasicASCII;
    }
    getBOM() {
        return this._BOM;
    }
    getEOL() {
        return this._pieceTree.getEOL();
    }
    createSnapshot(t) {
        return this._pieceTree.createSnapshot(t ? this._BOM : "");
    }
    getOffsetAt(t, n) {
        return this._pieceTree.getOffsetAt(t, n);
    }
    getPositionAt(t) {
        return this._pieceTree.getPositionAt(t);
    }
    getRangeAt(t, n) {
        const i = t + n, r = this.getPositionAt(t), s = this.getPositionAt(i);
        return new dt(r.lineNumber, r.column, s.lineNumber, s.column);
    }
    getValueInRange(t, n = 0) {
        if (t.isEmpty()) return "";
        const i = this._getEndOfLine(n);
        return this._pieceTree.getValueInRange(t, i);
    }
    getValueLengthInRange(t, n = 0) {
        if (t.isEmpty()) return 0;
        if (t.startLineNumber === t.endLineNumber) return t.endColumn - t.startColumn;
        const i = this.getOffsetAt(t.startLineNumber, t.startColumn), r = this.getOffsetAt(t.endLineNumber, t.endColumn);
        let s = 0;
        const o = this._getEndOfLine(n), a = this.getEOL();
        if (o.length !== a.length) {
            const c = o.length - a.length, l = t.endLineNumber - t.startLineNumber;
            s = c * l;
        }
        return r - i + s;
    }
    getCharacterCountInRange(t, n = 0) {
        if (this._mightContainNonBasicASCII) {
            let i = 0;
            const r = t.startLineNumber, s = t.endLineNumber;
            for(let o = r; o <= s; o++){
                const a = this.getLineContent(o), c = o === r ? t.startColumn - 1 : 0, l = o === s ? t.endColumn - 1 : a.length;
                for(let u = c; u < l; u++)CO(a.charCodeAt(u)) ? (i = i + 1, u = u + 1) : i = i + 1;
            }
            return i += this._getEndOfLine(n).length * (s - r), i;
        }
        return this.getValueLengthInRange(t, n);
    }
    getNearestChunk(t) {
        return this._pieceTree.getNearestChunk(t);
    }
    getLength() {
        return this._pieceTree.getLength();
    }
    getLineCount() {
        return this._pieceTree.getLineCount();
    }
    getLinesContent() {
        return this._pieceTree.getLinesContent();
    }
    getLineContent(t) {
        return this._pieceTree.getLineContent(t);
    }
    getLineCharCode(t, n) {
        return this._pieceTree.getLineCharCode(t, n);
    }
    getCharCode(t) {
        return this._pieceTree.getCharCode(t);
    }
    getLineLength(t) {
        return this._pieceTree.getLineLength(t);
    }
    getLineMinColumn(t) {
        return 1;
    }
    getLineMaxColumn(t) {
        return this.getLineLength(t) + 1;
    }
    getLineFirstNonWhitespaceColumn(t) {
        const n = R7(this.getLineContent(t));
        return n === -1 ? 0 : n + 1;
    }
    getLineLastNonWhitespaceColumn(t) {
        const n = Jce(this.getLineContent(t));
        return n === -1 ? 0 : n + 2;
    }
    _getEndOfLine(t) {
        switch(t){
            case 1:
                return `
`;
            case 2:
                return `\r
`;
            case 0:
                return this.getEOL();
            default:
                throw new Error("Unknown EOL preference");
        }
    }
    setEOL(t) {
        this._pieceTree.setEOL(t);
    }
    applyEdits(t, n, i) {
        let r = this._mightContainRTL, s = this._mightContainUnusualLineTerminators, o = this._mightContainNonBasicASCII, a = !0, c = [];
        for(let v = 0; v < t.length; v++){
            const b = t[v];
            a && b._isTracked && (a = !1);
            const y = b.range;
            if (b.text) {
                let D = !0;
                o || (D = !lht(b.text), o = D), !r && D && (r = Rqe(b.text)), !s && D && (s = qxc(b.text));
            }
            let T = "", E = 0, A = 0, R = 0;
            if (b.text) {
                let D;
                [E, A, R, D] = Sze(b.text);
                const P = this.getEOL();
                D === 0 || D === (P === `\r
` ? 2 : 1) ? T = b.text : T = b.text.replace(/\r\n|\r|\n/g, P);
            }
            c[v] = {
                sortIndex: v,
                identifier: b.identifier || null,
                range: y,
                rangeOffset: this.getOffsetAt(y.startLineNumber, y.startColumn),
                rangeLength: this.getValueLengthInRange(y),
                text: T,
                eolCount: E,
                firstLineLength: A,
                lastLineLength: R,
                forceMoveMarkers: !!b.forceMoveMarkers,
                isAutoWhitespaceEdit: b.isAutoWhitespaceEdit || !1
            };
        }
        c.sort($Xn._sortOpsAscending);
        let l = !1;
        for(let v = 0, b = c.length - 1; v < b; v++){
            const y = c[v].range.getEndPosition(), T = c[v + 1].range.getStartPosition();
            if (T.isBeforeOrEqual(y)) {
                if (T.isBefore(y)) throw new Error("Overlapping ranges are not allowed!");
                l = !0;
            }
        }
        a && (c = this._reduceOperations(c));
        const u = i || n ? $Xn._getInverseEditRanges(c) : [], h = [];
        if (n) for(let v = 0; v < c.length; v++){
            const b = c[v], y = u[v];
            if (b.isAutoWhitespaceEdit && b.range.isEmpty()) for(let T = y.startLineNumber; T <= y.endLineNumber; T++){
                let E = "";
                T === y.startLineNumber && (E = this.getLineContent(b.range.startLineNumber), R7(E) !== -1) || h.push({
                    lineNumber: T,
                    oldContent: E
                });
            }
        }
        let p = null;
        if (i) {
            let v = 0;
            p = [];
            for(let b = 0; b < c.length; b++){
                const y = c[b], T = u[b], E = this.getValueInRange(y.range), A = y.rangeOffset + v;
                v += y.text.length - E.length, p[b] = {
                    sortIndex: y.sortIndex,
                    identifier: y.identifier,
                    range: T,
                    text: E,
                    textChange: new _we(y.rangeOffset, E, A, y.text)
                };
            }
            l || p.sort((b, y)=>b.sortIndex - y.sortIndex);
        }
        this._mightContainRTL = r, this._mightContainUnusualLineTerminators = s, this._mightContainNonBasicASCII = o;
        const g = this._doApplyEdits(c);
        let f = null;
        if (n && h.length > 0) {
            h.sort((v, b)=>b.lineNumber - v.lineNumber), f = [];
            for(let v = 0, b = h.length; v < b; v++){
                const y = h[v].lineNumber;
                if (v > 0 && h[v - 1].lineNumber === y) continue;
                const T = h[v].oldContent, E = this.getLineContent(y);
                E.length === 0 || E === T || R7(E) !== -1 || f.push(y);
            }
        }
        return this._onDidChangeContent.fire(), new oFc(p, g, f);
    }
    _reduceOperations(t) {
        return t.length < 1e3 ? t : [
            this._toSingleEditOperation(t)
        ];
    }
    _toSingleEditOperation(t) {
        let n = !1;
        const i = t[0].range, r = t[t.length - 1].range, s = new dt(i.startLineNumber, i.startColumn, r.endLineNumber, r.endColumn);
        let o = i.startLineNumber, a = i.startColumn;
        const c = [];
        for(let g = 0, f = t.length; g < f; g++){
            const v = t[g], b = v.range;
            n = n || v.forceMoveMarkers, c.push(this.getValueInRange(new dt(o, a, b.startLineNumber, b.startColumn))), v.text.length > 0 && c.push(v.text), o = b.endLineNumber, a = b.endColumn;
        }
        const l = c.join(""), [u, h, p] = Sze(l);
        return {
            sortIndex: 0,
            identifier: t[0].identifier,
            range: s,
            rangeOffset: this.getOffsetAt(s.startLineNumber, s.startColumn),
            rangeLength: this.getValueLengthInRange(s, 0),
            text: l,
            eolCount: u,
            firstLineLength: h,
            lastLineLength: p,
            forceMoveMarkers: n,
            isAutoWhitespaceEdit: !1
        };
    }
    _doApplyEdits(t) {
        t.sort($Xn._sortOpsDescending);
        const n = [];
        for(let i = 0; i < t.length; i++){
            const r = t[i], s = r.range.startLineNumber, o = r.range.startColumn, a = r.range.endLineNumber, c = r.range.endColumn;
            if (s === a && o === c && r.text.length === 0) continue;
            r.text ? (this._pieceTree.delete(r.rangeOffset, r.rangeLength), this._pieceTree.insert(r.rangeOffset, r.text, !0)) : this._pieceTree.delete(r.rangeOffset, r.rangeLength);
            const l = new dt(s, o, a, c);
            n.push({
                range: l,
                rangeLength: r.rangeLength,
                text: r.text,
                rangeOffset: r.rangeOffset,
                forceMoveMarkers: r.forceMoveMarkers,
                eolCount: r.eolCount,
                firstLineLength: r.firstLineLength,
                lastLineLength: r.lastLineLength
            });
        }
        return n;
    }
    findMatchesLineByLine(t, n, i, r) {
        return this._pieceTree.findMatchesLineByLine(t, n, i, r);
    }
    getPieceTree() {
        return this._pieceTree;
    }
    static _getInverseEditRange(t, n) {
        const i = t.startLineNumber, r = t.startColumn, [s, o, a] = Sze(n);
        let c;
        if (n.length > 0) {
            const l = s + 1;
            l === 1 ? c = new dt(i, r, i, r + o) : c = new dt(i, r, i + l - 1, a + 1);
        } else c = new dt(i, r, i, r);
        return c;
    }
    static _getInverseEditRanges(t) {
        const n = [];
        let i = 0, r = 0, s = null;
        for(let o = 0, a = t.length; o < a; o++){
            const c = t[o];
            let l, u;
            s ? s.range.endLineNumber === c.range.startLineNumber ? (l = i, u = r + (c.range.startColumn - s.range.endColumn)) : (l = i + (c.range.startLineNumber - s.range.endLineNumber), u = c.range.startColumn) : (l = c.range.startLineNumber, u = c.range.startColumn);
            let h;
            if (c.text.length > 0) {
                const p = c.eolCount + 1;
                p === 1 ? h = new dt(l, u, l, u + c.firstLineLength) : h = new dt(l, u, l + p - 1, c.lastLineLength + 1);
            } else h = new dt(l, u, l, u);
            i = h.endLineNumber, r = h.endColumn, n.push(h), s = c;
        }
        return n;
    }
    static _sortOpsAscending(t, n) {
        const i = dt.compareRangesUsingEnds(t.range, n.range);
        return i === 0 ? t.sortIndex - n.sortIndex : i;
    }
    static _sortOpsDescending(t, n) {
        const i = dt.compareRangesUsingEnds(t.range, n.range);
        return i === 0 ? n.sortIndex - t.sortIndex : -i;
    }
};

}
