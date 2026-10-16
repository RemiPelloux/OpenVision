import { Cw, ti } from "./charCode.js";
import { J0, Qgn } from "./model_2.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { Fv, gPy, k0r } from "./rbTreeBase.js";
import { ayt, tBt } from "./textModelSearch.js";
import { E } from "./tslib.es6.js";
import { $tt, E8d, S0r, T8d, Xjo, eBt, jtt, t$o } from "./ze.js";
var oHe, A8d, moe, lyt, R8d, P8d, M8d;
export { A8d, M8d, P8d, R8d, lyt, moe, oHe };
var __wakaru_D8d_initialized = false;
export function D8d() {
if (__wakaru_D8d_initialized) return;
__wakaru_D8d_initialized = true;
"use strict";
E(), Cw(), jc(), Qs(), J0(), gPy(), ayt(), oHe = 65535, A8d = class {
    constructor(t, e, n, i, r){
        this.lineStarts = t, this.cr = e, this.lf = n, this.crlf = i, this.isBasicASCII = r;
    }
}, moe = class {
    constructor(t, e, n, i, r){
        this.bufferIndex = t, this.start = e, this.end = n, this.lineFeedCnt = i, this.length = r;
    }
}, lyt = class {
    constructor(t, e){
        this.buffer = t, this.lineStarts = e;
    }
}, R8d = class {
    constructor(t, e){
        this._pieces = [], this._tree = t, this._BOM = e, this._index = 0, t.root !== Fv && t.iterate(t.root, (n)=>(n !== Fv && this._pieces.push(n.piece), !0));
    }
    read() {
        return this._pieces.length === 0 ? this._index === 0 ? (this._index++, this._BOM) : null : this._index > this._pieces.length - 1 ? null : this._index === 0 ? this._BOM + this._tree.getPieceContent(this._pieces[this._index++]) : this._tree.getPieceContent(this._pieces[this._index++]);
    }
}, P8d = class {
    constructor(t){
        this._limit = t, this._cache = [];
    }
    get(t) {
        for(let e = this._cache.length - 1; e >= 0; e--){
            const n = this._cache[e];
            if (n.nodeStartOffset <= t && n.nodeStartOffset + n.node.piece.length >= t) return n;
        }
        return null;
    }
    get2(t) {
        for(let e = this._cache.length - 1; e >= 0; e--){
            const n = this._cache[e];
            if (n.nodeStartLineNumber && n.nodeStartLineNumber < t && n.nodeStartLineNumber + n.node.piece.lineFeedCnt >= t) return n;
        }
        return null;
    }
    set(t) {
        this._cache.length >= this._limit && this._cache.shift(), this._cache.push(t);
    }
    validate(t) {
        let e = !1;
        const n = this._cache;
        for(let i = 0; i < n.length; i++){
            const r = n[i];
            if (r.node.parent === null || r.nodeStartOffset >= t) {
                n[i] = null, e = !0;
                continue;
            }
        }
        if (e) {
            const i = [];
            for (const r of n)r !== null && i.push(r);
            this._cache = i;
        }
    }
}, M8d = class {
    constructor(t, e, n){
        this.create(t, e, n);
    }
    create(t, e, n) {
        this._buffers = [
            new lyt("", [
                0
            ])
        ], this._lastChangeBufferPos = {
            line: 0,
            column: 0
        }, this.root = Fv, this._lineCnt = 1, this._length = 0, this._EOL = e, this._EOLLength = e.length, this._EOLNormalized = n;
        let i = null;
        for(let r = 0, s = t.length; r < s; r++)if (t[r].buffer.length > 0) {
            t[r].lineStarts || (t[r].lineStarts = $tt(t[r].buffer));
            const o = new moe(r + 1, {
                line: 0,
                column: 0
            }, {
                line: t[r].lineStarts.length - 1,
                column: t[r].buffer.length - t[r].lineStarts[t[r].lineStarts.length - 1]
            }, t[r].lineStarts.length - 1, t[r].buffer.length);
            this._buffers.push(t[r]), i = this.rbInsertRight(i, o);
        }
        this._searchCache = new P8d(1), this._lastVisitedLine = {
            lineNumber: 0,
            value: ""
        }, this.computeBufferMetadata();
    }
    normalizeEOL(t) {
        const e = oHe, n = e - Math.floor(e / 3), i = n * 2;
        let r = "", s = 0;
        const o = [];
        if (this.iterate(this.root, (a)=>{
            const l = this.getNodeContent(a), c = l.length;
            if (s <= n || s + c < i) return r += l, s += c, !0;
            const u = r.replace(/\r\n|\r|\n/g, t);
            return o.push(new lyt(u, $tt(u))), r = l, s = c, !0;
        }), s > 0) {
            const a = r.replace(/\r\n|\r|\n/g, t);
            o.push(new lyt(a, $tt(a)));
        }
        this.create(o, t, !0);
    }
    getEOL() {
        return this._EOL;
    }
    setEOL(t) {
        this._EOL = t, this._EOLLength = this._EOL.length, this.normalizeEOL(t);
    }
    createSnapshot(t) {
        return new R8d(this, t);
    }
    equal(t) {
        if (this.getLength() !== t.getLength() || this.getLineCount() !== t.getLineCount()) return !1;
        let e = 0;
        return this.iterate(this.root, (i)=>{
            if (i === Fv) return !0;
            const r = this.getNodeContent(i), s = r.length, o = t.nodeAt(e), a = t.nodeAt(e + s), l = t.getValueInRange2(o, a);
            return e += s, r === l;
        });
    }
    getOffsetAt(t, e) {
        let n = 0, i = this.root;
        for(; i !== Fv;)if (i.left !== Fv && i.lf_left + 1 >= t) i = i.left;
        else if (i.lf_left + i.piece.lineFeedCnt + 1 >= t) {
            n += i.size_left;
            const r = this.getAccumulatedValue(i, t - i.lf_left - 2);
            return n += r + e - 1;
        } else t -= i.lf_left + i.piece.lineFeedCnt, n += i.size_left + i.piece.length, i = i.right;
        return n;
    }
    getPositionAt(t) {
        t = Math.floor(t), t = Math.max(0, t);
        let e = this.root, n = 0;
        const i = t;
        for(; e !== Fv;)if (e.size_left !== 0 && e.size_left >= t) e = e.left;
        else if (e.size_left + e.piece.length >= t) {
            const r = this.getIndexOf(e, t - e.size_left);
            if (n += e.lf_left + r.index, r.index === 0) {
                const s = this.getOffsetAt(n + 1, 1), o = i - s;
                return new er(n + 1, o + 1);
            }
            return new er(n + 1, r.remainder + 1);
        } else if (t -= e.size_left + e.piece.length, n += e.lf_left + e.piece.lineFeedCnt, e.right === Fv) {
            const r = this.getOffsetAt(n + 1, 1), s = i - t - r;
            return new er(n + 1, s + 1);
        } else e = e.right;
        return new er(1, 1);
    }
    getValueInRange(t, e) {
        if (t.startLineNumber === t.endLineNumber && t.startColumn === t.endColumn) return "";
        const n = this.nodeAt2(t.startLineNumber, t.startColumn), i = this.nodeAt2(t.endLineNumber, t.endColumn), r = this.getValueInRange2(n, i);
        return e ? e !== this._EOL || !this._EOLNormalized ? r.replace(/\r\n|\r|\n/g, e) : e === this.getEOL() && this._EOLNormalized ? r : r.replace(/\r\n|\r|\n/g, e) : r;
    }
    getValueInRange2(t, e) {
        if (t.node === e.node) {
            const o = t.node, a = this._buffers[o.piece.bufferIndex].buffer, l = this.offsetInBuffer(o.piece.bufferIndex, o.piece.start);
            return a.substring(l + t.remainder, l + e.remainder);
        }
        let n = t.node;
        const i = this._buffers[n.piece.bufferIndex].buffer, r = this.offsetInBuffer(n.piece.bufferIndex, n.piece.start);
        let s = i.substring(r + t.remainder, r + n.piece.length);
        for(n = n.next(); n !== Fv;){
            const o = this._buffers[n.piece.bufferIndex].buffer, a = this.offsetInBuffer(n.piece.bufferIndex, n.piece.start);
            if (n === e.node) {
                s += o.substring(a, a + e.remainder);
                break;
            } else s += o.substr(a, n.piece.length);
            n = n.next();
        }
        return s;
    }
    getLinesContent() {
        const t = [];
        let e = 0, n = "", i = !1;
        return this.iterate(this.root, (r)=>{
            if (r === Fv) return !0;
            const s = r.piece;
            let o = s.length;
            if (o === 0) return !0;
            const a = this._buffers[s.bufferIndex].buffer, l = this._buffers[s.bufferIndex].lineStarts, c = s.start.line, u = s.end.line;
            let d = l[c] + s.start.column;
            if (i && (a.charCodeAt(d) === ti.LineFeed && (d++, o--), t[e++] = n, n = "", i = !1, o === 0)) return !0;
            if (c === u) return !this._EOLNormalized && a.charCodeAt(d + o - 1) === ti.CarriageReturn ? (i = !0, n += a.substr(d, o - 1)) : n += a.substr(d, o), !0;
            n += this._EOLNormalized ? a.substring(d, Math.max(d, l[c + 1] - this._EOLLength)) : a.substring(d, l[c + 1]).replace(/(\r\n|\r|\n)$/, ""), t[e++] = n;
            for(let h = c + 1; h < u; h++)n = this._EOLNormalized ? a.substring(l[h], l[h + 1] - this._EOLLength) : a.substring(l[h], l[h + 1]).replace(/(\r\n|\r|\n)$/, ""), t[e++] = n;
            return !this._EOLNormalized && a.charCodeAt(l[u] + s.end.column - 1) === ti.CarriageReturn ? (i = !0, s.end.column === 0 ? e-- : n = a.substr(l[u], s.end.column - 1)) : n = a.substr(l[u], s.end.column), !0;
        }), i && (t[e++] = n, n = ""), t[e++] = n, t;
    }
    getLength() {
        return this._length;
    }
    getLineCount() {
        return this._lineCnt;
    }
    getLineContent(t) {
        return this._lastVisitedLine.lineNumber === t ? this._lastVisitedLine.value : (this._lastVisitedLine.lineNumber = t, t === this._lineCnt ? this._lastVisitedLine.value = this.getLineRawContent(t) : this._EOLNormalized ? this._lastVisitedLine.value = this.getLineRawContent(t, this._EOLLength) : this._lastVisitedLine.value = this.getLineRawContent(t).replace(/(\r\n|\r|\n)$/, ""), this._lastVisitedLine.value);
    }
    _getCharCode(t) {
        if (t.remainder === t.node.piece.length) {
            const e = t.node.next();
            if (!e) return 0;
            const n = this._buffers[e.piece.bufferIndex], i = this.offsetInBuffer(e.piece.bufferIndex, e.piece.start);
            return n.buffer.charCodeAt(i);
        } else {
            const e = this._buffers[t.node.piece.bufferIndex], i = this.offsetInBuffer(t.node.piece.bufferIndex, t.node.piece.start) + t.remainder;
            return e.buffer.charCodeAt(i);
        }
    }
    getLineCharCode(t, e) {
        const n = this.nodeAt2(t, e + 1);
        return this._getCharCode(n);
    }
    getLineLength(t) {
        if (t === this.getLineCount()) {
            const e = this.getOffsetAt(t, 1);
            return this.getLength() - e;
        }
        return this.getOffsetAt(t + 1, 1) - this.getOffsetAt(t, 1) - this._EOLLength;
    }
    getCharCode(t) {
        const e = this.nodeAt(t);
        return this._getCharCode(e);
    }
    getNearestChunk(t) {
        const e = this.nodeAt(t);
        if (e.remainder === e.node.piece.length) {
            const n = e.node.next();
            if (!n || n === Fv) return "";
            const i = this._buffers[n.piece.bufferIndex], r = this.offsetInBuffer(n.piece.bufferIndex, n.piece.start);
            return i.buffer.substring(r, r + n.piece.length);
        } else {
            const n = this._buffers[e.node.piece.bufferIndex], i = this.offsetInBuffer(e.node.piece.bufferIndex, e.node.piece.start), r = i + e.remainder, s = i + e.node.piece.length;
            return n.buffer.substring(r, s);
        }
    }
    findMatchesInNode(t, e, n, i, r, s, o, a, l, c, u) {
        const d = this._buffers[t.piece.bufferIndex], h = this.offsetInBuffer(t.piece.bufferIndex, t.piece.start), p = this.offsetInBuffer(t.piece.bufferIndex, r), g = this.offsetInBuffer(t.piece.bufferIndex, s);
        let f;
        const _ = {
            line: 0,
            column: 0
        };
        let b, y;
        e._wordSeparators ? (b = d.buffer.substring(p, g), y = (S)=>S + p, e.reset(0)) : (b = d.buffer, y = (S)=>S, e.reset(p));
        do if (f = e.next(b), f) {
            if (y(f.index) >= g) return c;
            this.positionInBuffer(t, y(f.index) - h, _);
            const S = this.getLineFeedCnt(t.piece.bufferIndex, r, _), k = _.line === r.line ? _.column - r.column + i : _.column + 1, C = k + f[0].length;
            if (u[c++] = eBt(new qt(n + S, k, n + S, C), f, a), y(f.index) + f[0].length >= g || c >= l) return c;
        }
        while (f)
        return c;
    }
    findMatchesLineByLine(t, e, n, i) {
        const r = [];
        let s = 0;
        const o = new tBt(e.wordSeparators, e.regex);
        let a = this.nodeAt2(t.startLineNumber, t.startColumn);
        if (a === null) return [];
        const l = this.nodeAt2(t.endLineNumber, t.endColumn);
        if (l === null) return [];
        let c = this.positionInBuffer(a.node, a.remainder);
        const u = this.positionInBuffer(l.node, l.remainder);
        if (a.node === l.node) return this.findMatchesInNode(a.node, o, t.startLineNumber, t.startColumn, c, u, e, n, i, s, r), r;
        let d = t.startLineNumber, h = a.node;
        for(; h !== l.node;){
            const g = this.getLineFeedCnt(h.piece.bufferIndex, c, h.piece.end);
            if (g >= 1) {
                const _ = this._buffers[h.piece.bufferIndex].lineStarts, b = this.offsetInBuffer(h.piece.bufferIndex, h.piece.start), y = _[c.line + g], S = d === t.startLineNumber ? t.startColumn : 1;
                if (s = this.findMatchesInNode(h, o, d, S, c, this.positionInBuffer(h, y - b), e, n, i, s, r), s >= i) return r;
                d += g;
            }
            const f = d === t.startLineNumber ? t.startColumn - 1 : 0;
            if (d === t.endLineNumber) {
                const _ = this.getLineContent(d).substring(f, t.endColumn - 1);
                return s = this._findMatchesInLine(e, o, _, t.endLineNumber, f, s, r, n, i), r;
            }
            if (s = this._findMatchesInLine(e, o, this.getLineContent(d).substr(f), d, f, s, r, n, i), s >= i) return r;
            d++, a = this.nodeAt2(d, 1), h = a.node, c = this.positionInBuffer(a.node, a.remainder);
        }
        if (d === t.endLineNumber) {
            const g = d === t.startLineNumber ? t.startColumn - 1 : 0, f = this.getLineContent(d).substring(g, t.endColumn - 1);
            return s = this._findMatchesInLine(e, o, f, t.endLineNumber, g, s, r, n, i), r;
        }
        const p = d === t.startLineNumber ? t.startColumn : 1;
        return s = this.findMatchesInNode(l.node, o, d, p, c, u, e, n, i, s, r), r;
    }
    _findMatchesInLine(t, e, n, i, r, s, o, a, l) {
        const c = t.wordSeparators;
        if (!a && t.simpleSearch) {
            const d = t.simpleSearch, h = d.length, p = n.length;
            let g = -h;
            for(; (g = n.indexOf(d, g + h)) !== -1;)if ((!c || t$o(c, n, p, g, h)) && (o[s++] = new Qgn(new qt(i, g + 1 + r, i, g + 1 + h + r), null), s >= l)) return s;
            return s;
        }
        let u;
        e.reset(0);
        do if (u = e.next(n), u && (o[s++] = eBt(new qt(i, u.index + 1 + r, i, u.index + 1 + u[0].length + r), u, a), s >= l)) return s;
        while (u)
        return s;
    }
    insert(t, e, n = !1) {
        if (this._EOLNormalized = this._EOLNormalized && n, this._lastVisitedLine.lineNumber = 0, this._lastVisitedLine.value = "", this.root !== Fv) {
            const { node: i, remainder: r, nodeStartOffset: s } = this.nodeAt(t), o = i.piece, a = o.bufferIndex, l = this.positionInBuffer(i, r);
            if (i.piece.bufferIndex === 0 && o.end.line === this._lastChangeBufferPos.line && o.end.column === this._lastChangeBufferPos.column && s + o.length === t && e.length < oHe) {
                this.appendToNode(i, e), this.computeBufferMetadata();
                return;
            }
            if (s === t) this.insertContentToNodeLeft(e, i), this._searchCache.validate(t);
            else if (s + i.piece.length > t) {
                const c = [];
                let u = new moe(o.bufferIndex, l, o.end, this.getLineFeedCnt(o.bufferIndex, l, o.end), this.offsetInBuffer(a, o.end) - this.offsetInBuffer(a, l));
                if (this.shouldCheckCRLF() && this.endWithCR(e) && this.nodeCharCodeAt(i, r) === 10) {
                    const g = {
                        line: u.start.line + 1,
                        column: 0
                    };
                    u = new moe(u.bufferIndex, g, u.end, this.getLineFeedCnt(u.bufferIndex, g, u.end), u.length - 1), e += `
`;
                }
                if (this.shouldCheckCRLF() && this.startWithLF(e)) if (this.nodeCharCodeAt(i, r - 1) === 13) {
                    const g = this.positionInBuffer(i, r - 1);
                    this.deleteNodeTail(i, g), e = "\r" + e, i.piece.length === 0 && c.push(i);
                } else this.deleteNodeTail(i, l);
                else this.deleteNodeTail(i, l);
                const d = this.createNewPieces(e);
                u.length > 0 && this.rbInsertRight(i, u);
                let h = i;
                for(let p = 0; p < d.length; p++)h = this.rbInsertRight(h, d[p]);
                this.deleteNodes(c);
            } else this.insertContentToNodeRight(e, i);
        } else {
            const i = this.createNewPieces(e);
            let r = this.rbInsertLeft(null, i[0]);
            for(let s = 1; s < i.length; s++)r = this.rbInsertRight(r, i[s]);
        }
        this.computeBufferMetadata();
    }
    delete(t, e) {
        if (this._lastVisitedLine.lineNumber = 0, this._lastVisitedLine.value = "", e <= 0 || this.root === Fv) return;
        const n = this.nodeAt(t), i = this.nodeAt(t + e), r = n.node, s = i.node;
        if (r === s) {
            const d = this.positionInBuffer(r, n.remainder), h = this.positionInBuffer(r, i.remainder);
            if (n.nodeStartOffset === t) {
                if (e === r.piece.length) {
                    const p = r.next();
                    S0r(this, r), this.validateCRLFWithPrevNode(p), this.computeBufferMetadata();
                    return;
                }
                this.deleteNodeHead(r, h), this._searchCache.validate(t), this.validateCRLFWithPrevNode(r), this.computeBufferMetadata();
                return;
            }
            if (n.nodeStartOffset + r.piece.length === t + e) {
                this.deleteNodeTail(r, d), this.validateCRLFWithNextNode(r), this.computeBufferMetadata();
                return;
            }
            this.shrinkNode(r, d, h), this.computeBufferMetadata();
            return;
        }
        const o = [], a = this.positionInBuffer(r, n.remainder);
        this.deleteNodeTail(r, a), this._searchCache.validate(t), r.piece.length === 0 && o.push(r);
        const l = this.positionInBuffer(s, i.remainder);
        this.deleteNodeHead(s, l), s.piece.length === 0 && o.push(s);
        const c = r.next();
        for(let d = c; d !== Fv && d !== s; d = d.next())o.push(d);
        const u = r.piece.length === 0 ? r.prev() : r;
        this.deleteNodes(o), this.validateCRLFWithNextNode(u), this.computeBufferMetadata();
    }
    insertContentToNodeLeft(t, e) {
        const n = [];
        if (this.shouldCheckCRLF() && this.endWithCR(t) && this.startWithLF(e)) {
            const s = e.piece, o = {
                line: s.start.line + 1,
                column: 0
            }, a = new moe(s.bufferIndex, o, s.end, this.getLineFeedCnt(s.bufferIndex, o, s.end), s.length - 1);
            e.piece = a, t += `
`, jtt(this, e, -1, -1), e.piece.length === 0 && n.push(e);
        }
        const i = this.createNewPieces(t);
        let r = this.rbInsertLeft(e, i[i.length - 1]);
        for(let s = i.length - 2; s >= 0; s--)r = this.rbInsertLeft(r, i[s]);
        this.validateCRLFWithPrevNode(r), this.deleteNodes(n);
    }
    insertContentToNodeRight(t, e) {
        this.adjustCarriageReturnFromNext(t, e) && (t += `
`);
        const n = this.createNewPieces(t), i = this.rbInsertRight(e, n[0]);
        let r = i;
        for(let s = 1; s < n.length; s++)r = this.rbInsertRight(r, n[s]);
        this.validateCRLFWithPrevNode(i);
    }
    positionInBuffer(t, e, n) {
        const i = t.piece, r = t.piece.bufferIndex, s = this._buffers[r].lineStarts, a = s[i.start.line] + i.start.column + e;
        let l = i.start.line, c = i.end.line, u = 0, d = 0, h = 0;
        for(; l <= c && (u = l + (c - l) / 2 | 0, h = s[u], u !== c);)if (d = s[u + 1], a < h) c = u - 1;
        else if (a >= d) l = u + 1;
        else break;
        return n ? (n.line = u, n.column = a - h, null) : {
            line: u,
            column: a - h
        };
    }
    getLineFeedCnt(t, e, n) {
        if (n.column === 0) return n.line - e.line;
        const i = this._buffers[t].lineStarts;
        if (n.line === i.length - 1) return n.line - e.line;
        const r = i[n.line + 1], s = i[n.line] + n.column;
        if (r > s + 1) return n.line - e.line;
        const o = s - 1;
        return this._buffers[t].buffer.charCodeAt(o) === 13 ? n.line - e.line + 1 : n.line - e.line;
    }
    offsetInBuffer(t, e) {
        return this._buffers[t].lineStarts[e.line] + e.column;
    }
    deleteNodes(t) {
        for(let e = 0; e < t.length; e++)S0r(this, t[e]);
    }
    createNewPieces(t) {
        if (t.length > oHe) {
            const c = [];
            for(; t.length > oHe;){
                const d = t.charCodeAt(oHe - 1);
                let h;
                d === ti.CarriageReturn || d >= 55296 && d <= 56319 ? (h = t.substring(0, oHe - 1), t = t.substring(oHe - 1)) : (h = t.substring(0, oHe), t = t.substring(oHe));
                const p = $tt(h);
                c.push(new moe(this._buffers.length, {
                    line: 0,
                    column: 0
                }, {
                    line: p.length - 1,
                    column: h.length - p[p.length - 1]
                }, p.length - 1, h.length)), this._buffers.push(new lyt(h, p));
            }
            const u = $tt(t);
            return c.push(new moe(this._buffers.length, {
                line: 0,
                column: 0
            }, {
                line: u.length - 1,
                column: t.length - u[u.length - 1]
            }, u.length - 1, t.length)), this._buffers.push(new lyt(t, u)), c;
        }
        let e = this._buffers[0].buffer.length;
        const n = $tt(t, !1);
        let i = this._lastChangeBufferPos;
        if (this._buffers[0].lineStarts[this._buffers[0].lineStarts.length - 1] === e && e !== 0 && this.startWithLF(t) && this.endWithCR(this._buffers[0].buffer)) {
            this._lastChangeBufferPos = {
                line: this._lastChangeBufferPos.line,
                column: this._lastChangeBufferPos.column + 1
            }, i = this._lastChangeBufferPos;
            for(let c = 0; c < n.length; c++)n[c] += e + 1;
            this._buffers[0].lineStarts = this._buffers[0].lineStarts.concat(n.slice(1)), this._buffers[0].buffer += "_" + t, e += 1;
        } else {
            if (e !== 0) for(let c = 0; c < n.length; c++)n[c] += e;
            this._buffers[0].lineStarts = this._buffers[0].lineStarts.concat(n.slice(1)), this._buffers[0].buffer += t;
        }
        const r = this._buffers[0].buffer.length, s = this._buffers[0].lineStarts.length - 1, o = r - this._buffers[0].lineStarts[s], a = {
            line: s,
            column: o
        }, l = new moe(0, i, a, this.getLineFeedCnt(0, i, a), r - e);
        return this._lastChangeBufferPos = a, [
            l
        ];
    }
    getLinesRawContent() {
        return this.getContentOfSubTree(this.root);
    }
    getLineRawContent(t, e = 0) {
        let n = this.root, i = "";
        const r = this._searchCache.get2(t);
        if (r) {
            n = r.node;
            const s = this.getAccumulatedValue(n, t - r.nodeStartLineNumber - 1), o = this._buffers[n.piece.bufferIndex].buffer, a = this.offsetInBuffer(n.piece.bufferIndex, n.piece.start);
            if (r.nodeStartLineNumber + n.piece.lineFeedCnt === t) i = o.substring(a + s, a + n.piece.length);
            else {
                const l = this.getAccumulatedValue(n, t - r.nodeStartLineNumber);
                return o.substring(a + s, a + l - e);
            }
        } else {
            let s = 0;
            const o = t;
            for(; n !== Fv;)if (n.left !== Fv && n.lf_left >= t - 1) n = n.left;
            else if (n.lf_left + n.piece.lineFeedCnt > t - 1) {
                const a = this.getAccumulatedValue(n, t - n.lf_left - 2), l = this.getAccumulatedValue(n, t - n.lf_left - 1), c = this._buffers[n.piece.bufferIndex].buffer, u = this.offsetInBuffer(n.piece.bufferIndex, n.piece.start);
                return s += n.size_left, this._searchCache.set({
                    node: n,
                    nodeStartOffset: s,
                    nodeStartLineNumber: o - (t - 1 - n.lf_left)
                }), c.substring(u + a, u + l - e);
            } else if (n.lf_left + n.piece.lineFeedCnt === t - 1) {
                const a = this.getAccumulatedValue(n, t - n.lf_left - 2), l = this._buffers[n.piece.bufferIndex].buffer, c = this.offsetInBuffer(n.piece.bufferIndex, n.piece.start);
                i = l.substring(c + a, c + n.piece.length);
                break;
            } else t -= n.lf_left + n.piece.lineFeedCnt, s += n.size_left + n.piece.length, n = n.right;
        }
        for(n = n.next(); n !== Fv;){
            const s = this._buffers[n.piece.bufferIndex].buffer;
            if (n.piece.lineFeedCnt > 0) {
                const o = this.getAccumulatedValue(n, 0), a = this.offsetInBuffer(n.piece.bufferIndex, n.piece.start);
                return i += s.substring(a, a + o - e), i;
            } else {
                const o = this.offsetInBuffer(n.piece.bufferIndex, n.piece.start);
                i += s.substr(o, n.piece.length);
            }
            n = n.next();
        }
        return i;
    }
    computeBufferMetadata() {
        let t = this.root, e = 1, n = 0;
        for(; t !== Fv;)e += t.lf_left + t.piece.lineFeedCnt, n += t.size_left + t.piece.length, t = t.right;
        this._lineCnt = e, this._length = n, this._searchCache.validate(this._length);
    }
    getIndexOf(t, e) {
        const n = t.piece, i = this.positionInBuffer(t, e), r = i.line - n.start.line;
        if (this.offsetInBuffer(n.bufferIndex, n.end) - this.offsetInBuffer(n.bufferIndex, n.start) === e) {
            const s = this.getLineFeedCnt(t.piece.bufferIndex, n.start, i);
            if (s !== r) return {
                index: s,
                remainder: 0
            };
        }
        return {
            index: r,
            remainder: i.column
        };
    }
    getAccumulatedValue(t, e) {
        if (e < 0) return 0;
        const n = t.piece, i = this._buffers[n.bufferIndex].lineStarts, r = n.start.line + e + 1;
        return r > n.end.line ? i[n.end.line] + n.end.column - i[n.start.line] - n.start.column : i[r] - i[n.start.line] - n.start.column;
    }
    deleteNodeTail(t, e) {
        const n = t.piece, i = n.lineFeedCnt, r = this.offsetInBuffer(n.bufferIndex, n.end), s = e, o = this.offsetInBuffer(n.bufferIndex, s), a = this.getLineFeedCnt(n.bufferIndex, n.start, s), l = a - i, c = o - r, u = n.length + c;
        t.piece = new moe(n.bufferIndex, n.start, s, a, u), jtt(this, t, c, l);
    }
    deleteNodeHead(t, e) {
        const n = t.piece, i = n.lineFeedCnt, r = this.offsetInBuffer(n.bufferIndex, n.start), s = e, o = this.getLineFeedCnt(n.bufferIndex, s, n.end), a = this.offsetInBuffer(n.bufferIndex, s), l = o - i, c = r - a, u = n.length + c;
        t.piece = new moe(n.bufferIndex, s, n.end, o, u), jtt(this, t, c, l);
    }
    shrinkNode(t, e, n) {
        const i = t.piece, r = i.start, s = i.end, o = i.length, a = i.lineFeedCnt, l = e, c = this.getLineFeedCnt(i.bufferIndex, i.start, l), u = this.offsetInBuffer(i.bufferIndex, e) - this.offsetInBuffer(i.bufferIndex, r);
        t.piece = new moe(i.bufferIndex, i.start, l, c, u), jtt(this, t, u - o, c - a);
        const d = new moe(i.bufferIndex, n, s, this.getLineFeedCnt(i.bufferIndex, n, s), this.offsetInBuffer(i.bufferIndex, s) - this.offsetInBuffer(i.bufferIndex, n)), h = this.rbInsertRight(t, d);
        this.validateCRLFWithPrevNode(h);
    }
    appendToNode(t, e) {
        this.adjustCarriageReturnFromNext(e, t) && (e += `
`);
        const n = this.shouldCheckCRLF() && this.startWithLF(e) && this.endWithCR(t), i = this._buffers[0].buffer.length;
        this._buffers[0].buffer += e;
        const r = $tt(e, !1);
        for(let h = 0; h < r.length; h++)r[h] += i;
        if (n) {
            const h = this._buffers[0].lineStarts[this._buffers[0].lineStarts.length - 2];
            this._buffers[0].lineStarts.pop(), this._lastChangeBufferPos = {
                line: this._lastChangeBufferPos.line - 1,
                column: i - h
            };
        }
        this._buffers[0].lineStarts = this._buffers[0].lineStarts.concat(r.slice(1));
        const s = this._buffers[0].lineStarts.length - 1, o = this._buffers[0].buffer.length - this._buffers[0].lineStarts[s], a = {
            line: s,
            column: o
        }, l = t.piece.length + e.length, c = t.piece.lineFeedCnt, u = this.getLineFeedCnt(0, t.piece.start, a), d = u - c;
        t.piece = new moe(t.piece.bufferIndex, t.piece.start, a, u, l), this._lastChangeBufferPos = a, jtt(this, t, e.length, d);
    }
    nodeAt(t) {
        let e = this.root;
        const n = this._searchCache.get(t);
        if (n) return {
            node: n.node,
            nodeStartOffset: n.nodeStartOffset,
            remainder: t - n.nodeStartOffset
        };
        let i = 0;
        for(; e !== Fv;)if (e.size_left > t) e = e.left;
        else if (e.size_left + e.piece.length >= t) {
            i += e.size_left;
            const r = {
                node: e,
                remainder: t - e.size_left,
                nodeStartOffset: i
            };
            return this._searchCache.set(r), r;
        } else t -= e.size_left + e.piece.length, i += e.size_left + e.piece.length, e = e.right;
        return null;
    }
    nodeAt2(t, e) {
        let n = this.root, i = 0;
        for(; n !== Fv;)if (n.left !== Fv && n.lf_left >= t - 1) n = n.left;
        else if (n.lf_left + n.piece.lineFeedCnt > t - 1) {
            const r = this.getAccumulatedValue(n, t - n.lf_left - 2), s = this.getAccumulatedValue(n, t - n.lf_left - 1);
            return i += n.size_left, {
                node: n,
                remainder: Math.min(r + e - 1, s),
                nodeStartOffset: i
            };
        } else if (n.lf_left + n.piece.lineFeedCnt === t - 1) {
            const r = this.getAccumulatedValue(n, t - n.lf_left - 2);
            if (r + e - 1 <= n.piece.length) return {
                node: n,
                remainder: r + e - 1,
                nodeStartOffset: i
            };
            e -= n.piece.length - r;
            break;
        } else t -= n.lf_left + n.piece.lineFeedCnt, i += n.size_left + n.piece.length, n = n.right;
        for(n = n.next(); n !== Fv;){
            if (n.piece.lineFeedCnt > 0) {
                const r = this.getAccumulatedValue(n, 0), s = this.offsetOfNode(n);
                return {
                    node: n,
                    remainder: Math.min(e - 1, r),
                    nodeStartOffset: s
                };
            } else if (n.piece.length >= e - 1) {
                const r = this.offsetOfNode(n);
                return {
                    node: n,
                    remainder: e - 1,
                    nodeStartOffset: r
                };
            } else e -= n.piece.length;
            n = n.next();
        }
        return null;
    }
    nodeCharCodeAt(t, e) {
        if (t.piece.lineFeedCnt < 1) return -1;
        const n = this._buffers[t.piece.bufferIndex], i = this.offsetInBuffer(t.piece.bufferIndex, t.piece.start) + e;
        return n.buffer.charCodeAt(i);
    }
    offsetOfNode(t) {
        if (!t) return 0;
        let e = t.size_left;
        for(; t !== this.root;)t.parent.right === t && (e += t.parent.size_left + t.parent.piece.length), t = t.parent;
        return e;
    }
    shouldCheckCRLF() {
        return !(this._EOLNormalized && this._EOL === `
`);
    }
    startWithLF(t) {
        if (typeof t == "string") return t.charCodeAt(0) === 10;
        if (t === Fv || t.piece.lineFeedCnt === 0) return !1;
        const e = t.piece, n = this._buffers[e.bufferIndex].lineStarts, i = e.start.line, r = n[i] + e.start.column;
        return i === n.length - 1 || n[i + 1] > r + 1 ? !1 : this._buffers[e.bufferIndex].buffer.charCodeAt(r) === 10;
    }
    endWithCR(t) {
        return typeof t == "string" ? t.charCodeAt(t.length - 1) === 13 : t === Fv || t.piece.lineFeedCnt === 0 ? !1 : this.nodeCharCodeAt(t, t.piece.length - 1) === 13;
    }
    validateCRLFWithPrevNode(t) {
        if (this.shouldCheckCRLF() && this.startWithLF(t)) {
            const e = t.prev();
            this.endWithCR(e) && this.fixCRLF(e, t);
        }
    }
    validateCRLFWithNextNode(t) {
        if (this.shouldCheckCRLF() && this.endWithCR(t)) {
            const e = t.next();
            this.startWithLF(e) && this.fixCRLF(t, e);
        }
    }
    fixCRLF(t, e) {
        const n = [], i = this._buffers[t.piece.bufferIndex].lineStarts;
        let r;
        t.piece.end.column === 0 ? r = {
            line: t.piece.end.line - 1,
            column: i[t.piece.end.line] - i[t.piece.end.line - 1] - 1
        } : r = {
            line: t.piece.end.line,
            column: t.piece.end.column - 1
        };
        const s = t.piece.length - 1, o = t.piece.lineFeedCnt - 1;
        t.piece = new moe(t.piece.bufferIndex, t.piece.start, r, o, s), jtt(this, t, -1, -1), t.piece.length === 0 && n.push(t);
        const a = {
            line: e.piece.start.line + 1,
            column: 0
        }, l = e.piece.length - 1, c = this.getLineFeedCnt(e.piece.bufferIndex, a, e.piece.end);
        e.piece = new moe(e.piece.bufferIndex, a, e.piece.end, c, l), jtt(this, e, -1, -1), e.piece.length === 0 && n.push(e);
        const u = this.createNewPieces(`\r
`);
        this.rbInsertRight(t, u[0]);
        for(let d = 0; d < n.length; d++)S0r(this, n[d]);
    }
    adjustCarriageReturnFromNext(t, e) {
        if (this.shouldCheckCRLF() && this.endWithCR(t)) {
            const n = e.next();
            if (this.startWithLF(n)) {
                if (t += `
`, n.piece.length === 1) S0r(this, n);
                else {
                    const i = n.piece, r = {
                        line: i.start.line + 1,
                        column: 0
                    }, s = i.length - 1, o = this.getLineFeedCnt(i.bufferIndex, r, i.end);
                    n.piece = new moe(i.bufferIndex, r, i.end, o, s), jtt(this, n, -1, -1);
                }
                return !0;
            }
        }
        return !1;
    }
    iterate(t, e) {
        if (t === Fv) return e(Fv);
        const n = this.iterate(t.left, e);
        return n && e(t) && this.iterate(t.right, e);
    }
    getNodeContent(t) {
        if (t === Fv) return "";
        const e = this._buffers[t.piece.bufferIndex], n = t.piece, i = this.offsetInBuffer(n.bufferIndex, n.start), r = this.offsetInBuffer(n.bufferIndex, n.end);
        return e.buffer.substring(i, r);
    }
    getPieceContent(t) {
        const e = this._buffers[t.bufferIndex], n = this.offsetInBuffer(t.bufferIndex, t.start), i = this.offsetInBuffer(t.bufferIndex, t.end);
        return e.buffer.substring(n, i);
    }
    rbInsertRight(t, e) {
        const n = new k0r(e, 1);
        if (n.left = Fv, n.right = Fv, n.parent = Fv, n.size_left = 0, n.lf_left = 0, this.root === Fv) this.root = n, n.color = 0;
        else if (t.right === Fv) t.right = n, n.parent = t;
        else {
            const r = Xjo(t.right);
            r.left = n, n.parent = r;
        }
        return E8d(this, n), n;
    }
    rbInsertLeft(t, e) {
        const n = new k0r(e, 1);
        if (n.left = Fv, n.right = Fv, n.parent = Fv, n.size_left = 0, n.lf_left = 0, this.root === Fv) this.root = n, n.color = 0;
        else if (t.left === Fv) t.left = n, n.parent = t;
        else {
            const i = T8d(t.left);
            i.right = n, n.parent = i;
        }
        return E8d(this, n), n;
    }
    getContentOfSubTree(t) {
        let e = "";
        return this.iterate(t, (n)=>(e += this.getNodeContent(n), !0)), e;
    }
};

}
