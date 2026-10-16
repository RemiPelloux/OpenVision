import { Fa, Gt, Hvt, Jxe, K9, Qe, a6t, kXu, sY, st, tt } from "./Iwo.js";
import { Jbt } from "./eolCounter.js";
import { J0, LBd } from "./model_2.js";
import { D8d, M8d } from "./pieceTreeBase.js";
import { Qs, qt } from "./range.js";
import { k5e, l8d } from "./textChange.js";
import { E } from "./tslib.es6.js";
import { Qbt } from "./ze.js";
var w0r;
export { w0r };
var __wakaru_i$o_initialized = false;
export function i$o() {
if (__wakaru_i$o_initialized) return;
__wakaru_i$o_initialized = true;
"use strict";
E(), Gt(), Fa(), Qs(), J0(), D8d(), Jbt(), l8d(), Qe(), w0r = class wZi extends st {
    constructor(e, n, i, r, s, o, a){
        super(), this._onDidChangeContent = this._register(new tt), this.onDidChangeContent = this._onDidChangeContent.event, this._BOM = n, this._mightContainNonBasicASCII = !o, this._mightContainRTL = r, this._mightContainUnusualLineTerminators = s, this._pieceTree = new M8d(e, i, a);
    }
    equals(e) {
        return !(e instanceof wZi) || this._BOM !== e._BOM || this.getEOL() !== e.getEOL() ? !1 : this._pieceTree.equal(e._pieceTree);
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
    createSnapshot(e) {
        return this._pieceTree.createSnapshot(e ? this._BOM : "");
    }
    getOffsetAt(e, n) {
        return this._pieceTree.getOffsetAt(e, n);
    }
    getPositionAt(e) {
        return this._pieceTree.getPositionAt(e);
    }
    getRangeAt(e, n) {
        const i = e + n, r = this.getPositionAt(e), s = this.getPositionAt(i);
        return new qt(r.lineNumber, r.column, s.lineNumber, s.column);
    }
    getValueInRange(e, n = 0) {
        if (e.isEmpty()) return "";
        const i = this._getEndOfLine(n);
        return this._pieceTree.getValueInRange(e, i);
    }
    getValueLengthInRange(e, n = 0) {
        if (e.isEmpty()) return 0;
        if (e.startLineNumber === e.endLineNumber) return e.endColumn - e.startColumn;
        const i = this.getOffsetAt(e.startLineNumber, e.startColumn), r = this.getOffsetAt(e.endLineNumber, e.endColumn);
        let s = 0;
        const o = this._getEndOfLine(n), a = this.getEOL();
        if (o.length !== a.length) {
            const l = o.length - a.length, c = e.endLineNumber - e.startLineNumber;
            s = l * c;
        }
        return r - i + s;
    }
    getCharacterCountInRange(e, n = 0) {
        if (this._mightContainNonBasicASCII) {
            let i = 0;
            const r = e.startLineNumber, s = e.endLineNumber;
            for(let o = r; o <= s; o++){
                const a = this.getLineContent(o), l = o === r ? e.startColumn - 1 : 0, c = o === s ? e.endColumn - 1 : a.length;
                for(let u = l; u < c; u++)K9(a.charCodeAt(u)) ? (i = i + 1, u = u + 1) : i = i + 1;
            }
            return i += this._getEndOfLine(n).length * (s - r), i;
        }
        return this.getValueLengthInRange(e, n);
    }
    getNearestChunk(e) {
        return this._pieceTree.getNearestChunk(e);
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
    getLineContent(e) {
        return this._pieceTree.getLineContent(e);
    }
    getLineCharCode(e, n) {
        return this._pieceTree.getLineCharCode(e, n);
    }
    getCharCode(e) {
        return this._pieceTree.getCharCode(e);
    }
    getLineLength(e) {
        return this._pieceTree.getLineLength(e);
    }
    getLineMinColumn(e) {
        return 1;
    }
    getLineMaxColumn(e) {
        return this.getLineLength(e) + 1;
    }
    getLineFirstNonWhitespaceColumn(e) {
        const n = sY(this.getLineContent(e));
        return n === -1 ? 0 : n + 1;
    }
    getLineLastNonWhitespaceColumn(e) {
        const n = Jxe(this.getLineContent(e));
        return n === -1 ? 0 : n + 2;
    }
    _getEndOfLine(e) {
        switch(e){
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
    setEOL(e) {
        this._pieceTree.setEOL(e);
    }
    applyEdits(e, n, i) {
        let r = this._mightContainRTL, s = this._mightContainUnusualLineTerminators, o = this._mightContainNonBasicASCII, a = !0, l = [];
        for(let f = 0; f < e.length; f++){
            const _ = e[f];
            a && _._isTracked && (a = !1);
            const b = _.range;
            if (_.text) {
                let T = !0;
                o || (T = !a6t(_.text), o = T), !r && T && (r = Hvt(_.text)), !s && T && (s = kXu(_.text));
            }
            let y = "", S = 0, k = 0, C = 0;
            if (_.text) {
                let T;
                [S, k, C, T] = Qbt(_.text);
                const I = this.getEOL();
                T === 0 || T === (I === `\r
` ? 2 : 1) ? y = _.text : y = _.text.replace(/\r\n|\r|\n/g, I);
            }
            l[f] = {
                sortIndex: f,
                identifier: _.identifier || null,
                range: b,
                rangeOffset: this.getOffsetAt(b.startLineNumber, b.startColumn),
                rangeLength: this.getValueLengthInRange(b),
                text: y,
                eolCount: S,
                firstLineLength: k,
                lastLineLength: C,
                forceMoveMarkers: !!_.forceMoveMarkers,
                isAutoWhitespaceEdit: _.isAutoWhitespaceEdit || !1
            };
        }
        l.sort(wZi._sortOpsAscending);
        let c = !1;
        for(let f = 0, _ = l.length - 1; f < _; f++){
            const b = l[f].range.getEndPosition(), y = l[f + 1].range.getStartPosition();
            if (y.isBeforeOrEqual(b)) {
                if (y.isBefore(b)) throw new Error("Overlapping ranges are not allowed!");
                c = !0;
            }
        }
        a && (l = this._reduceOperations(l));
        const u = i || n ? wZi._getInverseEditRanges(l) : [], d = [];
        if (n) for(let f = 0; f < l.length; f++){
            const _ = l[f], b = u[f];
            if (_.isAutoWhitespaceEdit && _.range.isEmpty()) for(let y = b.startLineNumber; y <= b.endLineNumber; y++){
                let S = "";
                y === b.startLineNumber && (S = this.getLineContent(_.range.startLineNumber), sY(S) !== -1) || d.push({
                    lineNumber: y,
                    oldContent: S
                });
            }
        }
        let h = null;
        if (i) {
            let f = 0;
            h = [];
            for(let _ = 0; _ < l.length; _++){
                const b = l[_], y = u[_], S = this.getValueInRange(b.range), k = b.rangeOffset + f;
                f += b.text.length - S.length, h[_] = {
                    sortIndex: b.sortIndex,
                    identifier: b.identifier,
                    range: y,
                    text: S,
                    textChange: new k5e(b.rangeOffset, S, k, b.text)
                };
            }
            c || h.sort((_, b)=>_.sortIndex - b.sortIndex);
        }
        this._mightContainRTL = r, this._mightContainUnusualLineTerminators = s, this._mightContainNonBasicASCII = o;
        const p = this._doApplyEdits(l);
        let g = null;
        if (n && d.length > 0) {
            d.sort((f, _)=>_.lineNumber - f.lineNumber), g = [];
            for(let f = 0, _ = d.length; f < _; f++){
                const b = d[f].lineNumber;
                if (f > 0 && d[f - 1].lineNumber === b) continue;
                const y = d[f].oldContent, S = this.getLineContent(b);
                S.length === 0 || S === y || sY(S) !== -1 || g.push(b);
            }
        }
        return this._onDidChangeContent.fire(), new LBd(h, p, g);
    }
    _reduceOperations(e) {
        return e.length < 1e3 ? e : [
            this._toSingleEditOperation(e)
        ];
    }
    _toSingleEditOperation(e) {
        let n = !1;
        const i = e[0].range, r = e[e.length - 1].range, s = new qt(i.startLineNumber, i.startColumn, r.endLineNumber, r.endColumn);
        let o = i.startLineNumber, a = i.startColumn;
        const l = [];
        for(let p = 0, g = e.length; p < g; p++){
            const f = e[p], _ = f.range;
            n = n || f.forceMoveMarkers, l.push(this.getValueInRange(new qt(o, a, _.startLineNumber, _.startColumn))), f.text.length > 0 && l.push(f.text), o = _.endLineNumber, a = _.endColumn;
        }
        const c = l.join(""), [u, d, h] = Qbt(c);
        return {
            sortIndex: 0,
            identifier: e[0].identifier,
            range: s,
            rangeOffset: this.getOffsetAt(s.startLineNumber, s.startColumn),
            rangeLength: this.getValueLengthInRange(s, 0),
            text: c,
            eolCount: u,
            firstLineLength: d,
            lastLineLength: h,
            forceMoveMarkers: n,
            isAutoWhitespaceEdit: !1
        };
    }
    _doApplyEdits(e) {
        e.sort(wZi._sortOpsDescending);
        const n = [];
        for(let i = 0; i < e.length; i++){
            const r = e[i], s = r.range.startLineNumber, o = r.range.startColumn, a = r.range.endLineNumber, l = r.range.endColumn;
            if (s === a && o === l && r.text.length === 0) continue;
            r.text ? (this._pieceTree.delete(r.rangeOffset, r.rangeLength), this._pieceTree.insert(r.rangeOffset, r.text, !0)) : this._pieceTree.delete(r.rangeOffset, r.rangeLength);
            const c = new qt(s, o, a, l);
            n.push({
                range: c,
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
    findMatchesLineByLine(e, n, i, r) {
        return this._pieceTree.findMatchesLineByLine(e, n, i, r);
    }
    getPieceTree() {
        return this._pieceTree;
    }
    static _getInverseEditRange(e, n) {
        const i = e.startLineNumber, r = e.startColumn, [s, o, a] = Qbt(n);
        let l;
        if (n.length > 0) {
            const c = s + 1;
            c === 1 ? l = new qt(i, r, i, r + o) : l = new qt(i, r, i + c - 1, a + 1);
        } else l = new qt(i, r, i, r);
        return l;
    }
    static _getInverseEditRanges(e) {
        const n = [];
        let i = 0, r = 0, s = null;
        for(let o = 0, a = e.length; o < a; o++){
            const l = e[o];
            let c, u;
            s ? s.range.endLineNumber === l.range.startLineNumber ? (c = i, u = r + (l.range.startColumn - s.range.endColumn)) : (c = i + (l.range.startLineNumber - s.range.endLineNumber), u = l.range.startColumn) : (c = l.range.startLineNumber, u = l.range.startColumn);
            let d;
            if (l.text.length > 0) {
                const h = l.eolCount + 1;
                h === 1 ? d = new qt(c, u, c, u + l.firstLineLength) : d = new qt(c, u, c + h - 1, l.lastLineLength + 1);
            } else d = new qt(c, u, c, u);
            i = d.endLineNumber, r = d.endColumn, n.push(d), s = l;
        }
        return n;
    }
    static _sortOpsAscending(e, n) {
        const i = qt.compareRangesUsingEnds(e.range, n.range);
        return i === 0 ? e.sortIndex - n.sortIndex : i;
    }
    static _sortOpsDescending(e, n) {
        const i = qt.compareRangesUsingEnds(e.range, n.range);
        return i === 0 ? n.sortIndex - e.sortIndex : -i;
    }
};

}
