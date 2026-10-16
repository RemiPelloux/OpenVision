import { En, qy } from "./charCode.js";
import { Cb, uOt } from "./model_2.js";
import { Yn, ya } from "./position.js";
import { BQr, GQr, KBe, Ovi, QFc, ZFc, qBe, wpt } from "./qIc.js";
import { dt, qi } from "./range.js";
import { Fvi, dfg, fg } from "./rbTreeBase.js";
import { Cpt, zBe } from "./textModelSearch.js";
import { x } from "./tslib.es6.js";
var YAe, t3c, BK, Rze, n3c, i3c, r3c;
export { BK, Rze, YAe, i3c, n3c, r3c, t3c };
var __wakaru_s3c_initialized = false;
export function s3c() {
if (__wakaru_s3c_initialized) return;
__wakaru_s3c_initialized = true;
"use strict";
x(), qy(), ya(), qi(), Cb(), dfg(), zBe(), YAe = 65535, t3c = class {
    constructor(e, t, n, i, r){
        this.lineStarts = e, this.cr = t, this.lf = n, this.crlf = i, this.isBasicASCII = r;
    }
}, BK = class {
    constructor(e, t, n, i, r){
        this.bufferIndex = e, this.start = t, this.end = n, this.lineFeedCnt = i, this.length = r;
    }
}, Rze = class {
    constructor(e, t){
        this.buffer = e, this.lineStarts = t;
    }
}, n3c = class {
    constructor(e, t){
        this._pieces = [], this._tree = e, this._BOM = t, this._index = 0, e.root !== fg && e.iterate(e.root, (n)=>(n !== fg && this._pieces.push(n.piece), !0));
    }
    read() {
        return this._pieces.length === 0 ? this._index === 0 ? (this._index++, this._BOM) : null : this._index > this._pieces.length - 1 ? null : this._index === 0 ? this._BOM + this._tree.getPieceContent(this._pieces[this._index++]) : this._tree.getPieceContent(this._pieces[this._index++]);
    }
}, i3c = class {
    constructor(e){
        this._limit = e, this._cache = [];
    }
    get(e) {
        for(let t = this._cache.length - 1; t >= 0; t--){
            const n = this._cache[t];
            if (n.nodeStartOffset <= e && n.nodeStartOffset + n.node.piece.length >= e) return n;
        }
        return null;
    }
    get2(e) {
        for(let t = this._cache.length - 1; t >= 0; t--){
            const n = this._cache[t];
            if (n.nodeStartLineNumber && n.nodeStartLineNumber < e && n.nodeStartLineNumber + n.node.piece.lineFeedCnt >= e) return n;
        }
        return null;
    }
    set(e) {
        this._cache.length >= this._limit && this._cache.shift(), this._cache.push(e);
    }
    validate(e) {
        let t = !1;
        const n = this._cache;
        for(let i = 0; i < n.length; i++){
            const r = n[i];
            if (r.node.parent === null || r.nodeStartOffset >= e) {
                n[i] = null, t = !0;
                continue;
            }
        }
        if (t) {
            const i = [];
            for (const r of n)r !== null && i.push(r);
            this._cache = i;
        }
    }
}, r3c = class {
    constructor(e, t, n){
        this.create(e, t, n);
    }
    create(e, t, n) {
        this._buffers = [
            new Rze("", [
                0
            ])
        ], this._lastChangeBufferPos = {
            line: 0,
            column: 0
        }, this.root = fg, this._lineCnt = 1, this._length = 0, this._EOL = t, this._EOLLength = t.length, this._EOLNormalized = n;
        let i = null;
        for(let r = 0, s = e.length; r < s; r++)if (e[r].buffer.length > 0) {
            e[r].lineStarts || (e[r].lineStarts = KBe(e[r].buffer));
            const o = new BK(r + 1, {
                line: 0,
                column: 0
            }, {
                line: e[r].lineStarts.length - 1,
                column: e[r].buffer.length - e[r].lineStarts[e[r].lineStarts.length - 1]
            }, e[r].lineStarts.length - 1, e[r].buffer.length);
            this._buffers.push(e[r]), i = this.rbInsertRight(i, o);
        }
        this._searchCache = new i3c(1), this._lastVisitedLine = {
            lineNumber: 0,
            value: ""
        }, this.computeBufferMetadata();
    }
    normalizeEOL(e) {
        const t = YAe, n = t - Math.floor(t / 3), i = n * 2;
        let r = "", s = 0;
        const o = [];
        if (this.iterate(this.root, (a)=>{
            const c = this.getNodeContent(a), l = c.length;
            if (s <= n || s + l < i) return r += c, s += l, !0;
            const u = r.replace(/\r\n|\r|\n/g, e);
            return o.push(new Rze(u, KBe(u))), r = c, s = l, !0;
        }), s > 0) {
            const a = r.replace(/\r\n|\r|\n/g, e);
            o.push(new Rze(a, KBe(a)));
        }
        this.create(o, e, !0);
    }
    getEOL() {
        return this._EOL;
    }
    setEOL(e) {
        this._EOL = e, this._EOLLength = this._EOL.length, this.normalizeEOL(e);
    }
    createSnapshot(e) {
        return new n3c(this, e);
    }
    equal(e) {
        if (this.getLength() !== e.getLength() || this.getLineCount() !== e.getLineCount()) return !1;
        let t = 0;
        return this.iterate(this.root, (i)=>{
            if (i === fg) return !0;
            const r = this.getNodeContent(i), s = r.length, o = e.nodeAt(t), a = e.nodeAt(t + s), c = e.getValueInRange2(o, a);
            return t += s, r === c;
        });
    }
    getOffsetAt(e, t) {
        let n = 0, i = this.root;
        for(; i !== fg;)if (i.left !== fg && i.lf_left + 1 >= e) i = i.left;
        else if (i.lf_left + i.piece.lineFeedCnt + 1 >= e) {
            n += i.size_left;
            const r = this.getAccumulatedValue(i, e - i.lf_left - 2);
            return n += r + t - 1;
        } else e -= i.lf_left + i.piece.lineFeedCnt, n += i.size_left + i.piece.length, i = i.right;
        return n;
    }
    getPositionAt(e) {
        e = Math.floor(e), e = Math.max(0, e);
        let t = this.root, n = 0;
        const i = e;
        for(; t !== fg;)if (t.size_left !== 0 && t.size_left >= e) t = t.left;
        else if (t.size_left + t.piece.length >= e) {
            const r = this.getIndexOf(t, e - t.size_left);
            if (n += t.lf_left + r.index, r.index === 0) {
                const s = this.getOffsetAt(n + 1, 1), o = i - s;
                return new Yn(n + 1, o + 1);
            }
            return new Yn(n + 1, r.remainder + 1);
        } else if (e -= t.size_left + t.piece.length, n += t.lf_left + t.piece.lineFeedCnt, t.right === fg) {
            const r = this.getOffsetAt(n + 1, 1), s = i - e - r;
            return new Yn(n + 1, s + 1);
        } else t = t.right;
        return new Yn(1, 1);
    }
    getValueInRange(e, t) {
        if (e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn) return "";
        const n = this.nodeAt2(e.startLineNumber, e.startColumn), i = this.nodeAt2(e.endLineNumber, e.endColumn), r = this.getValueInRange2(n, i);
        return t ? t !== this._EOL || !this._EOLNormalized ? r.replace(/\r\n|\r|\n/g, t) : t === this.getEOL() && this._EOLNormalized ? r : r.replace(/\r\n|\r|\n/g, t) : r;
    }
    getValueInRange2(e, t) {
        if (e.node === t.node) {
            const o = e.node, a = this._buffers[o.piece.bufferIndex].buffer, c = this.offsetInBuffer(o.piece.bufferIndex, o.piece.start);
            return a.substring(c + e.remainder, c + t.remainder);
        }
        let n = e.node;
        const i = this._buffers[n.piece.bufferIndex].buffer, r = this.offsetInBuffer(n.piece.bufferIndex, n.piece.start);
        let s = i.substring(r + e.remainder, r + n.piece.length);
        for(n = n.next(); n !== fg;){
            const o = this._buffers[n.piece.bufferIndex].buffer, a = this.offsetInBuffer(n.piece.bufferIndex, n.piece.start);
            if (n === t.node) {
                s += o.substring(a, a + t.remainder);
                break;
            } else s += o.substr(a, n.piece.length);
            n = n.next();
        }
        return s;
    }
    getLinesContent() {
        const e = [];
        let t = 0, n = "", i = !1;
        return this.iterate(this.root, (r)=>{
            if (r === fg) return !0;
            const s = r.piece;
            let o = s.length;
            if (o === 0) return !0;
            const a = this._buffers[s.bufferIndex].buffer, c = this._buffers[s.bufferIndex].lineStarts, l = s.start.line, u = s.end.line;
            let h = c[l] + s.start.column;
            if (i && (a.charCodeAt(h) === En.LineFeed && (h++, o--), e[t++] = n, n = "", i = !1, o === 0)) return !0;
            if (l === u) return !this._EOLNormalized && a.charCodeAt(h + o - 1) === En.CarriageReturn ? (i = !0, n += a.substr(h, o - 1)) : n += a.substr(h, o), !0;
            n += this._EOLNormalized ? a.substring(h, Math.max(h, c[l + 1] - this._EOLLength)) : a.substring(h, c[l + 1]).replace(/(\r\n|\r|\n)$/, ""), e[t++] = n;
            for(let p = l + 1; p < u; p++)n = this._EOLNormalized ? a.substring(c[p], c[p + 1] - this._EOLLength) : a.substring(c[p], c[p + 1]).replace(/(\r\n|\r|\n)$/, ""), e[t++] = n;
            return !this._EOLNormalized && a.charCodeAt(c[u] + s.end.column - 1) === En.CarriageReturn ? (i = !0, s.end.column === 0 ? t-- : n = a.substr(c[u], s.end.column - 1)) : n = a.substr(c[u], s.end.column), !0;
        }), i && (e[t++] = n, n = ""), e[t++] = n, e;
    }
    getLength() {
        return this._length;
    }
    getLineCount() {
        return this._lineCnt;
    }
    getLineContent(e) {
        return this._lastVisitedLine.lineNumber === e ? this._lastVisitedLine.value : (this._lastVisitedLine.lineNumber = e, e === this._lineCnt ? this._lastVisitedLine.value = this.getLineRawContent(e) : this._EOLNormalized ? this._lastVisitedLine.value = this.getLineRawContent(e, this._EOLLength) : this._lastVisitedLine.value = this.getLineRawContent(e).replace(/(\r\n|\r|\n)$/, ""), this._lastVisitedLine.value);
    }
    _getCharCode(e) {
        if (e.remainder === e.node.piece.length) {
            const t = e.node.next();
            if (!t) return 0;
            const n = this._buffers[t.piece.bufferIndex], i = this.offsetInBuffer(t.piece.bufferIndex, t.piece.start);
            return n.buffer.charCodeAt(i);
        } else {
            const t = this._buffers[e.node.piece.bufferIndex], i = this.offsetInBuffer(e.node.piece.bufferIndex, e.node.piece.start) + e.remainder;
            return t.buffer.charCodeAt(i);
        }
    }
    getLineCharCode(e, t) {
        const n = this.nodeAt2(e, t + 1);
        return this._getCharCode(n);
    }
    getLineLength(e) {
        if (e === this.getLineCount()) {
            const t = this.getOffsetAt(e, 1);
            return this.getLength() - t;
        }
        return this.getOffsetAt(e + 1, 1) - this.getOffsetAt(e, 1) - this._EOLLength;
    }
    getCharCode(e) {
        const t = this.nodeAt(e);
        return this._getCharCode(t);
    }
    getNearestChunk(e) {
        const t = this.nodeAt(e);
        if (t.remainder === t.node.piece.length) {
            const n = t.node.next();
            if (!n || n === fg) return "";
            const i = this._buffers[n.piece.bufferIndex], r = this.offsetInBuffer(n.piece.bufferIndex, n.piece.start);
            return i.buffer.substring(r, r + n.piece.length);
        } else {
            const n = this._buffers[t.node.piece.bufferIndex], i = this.offsetInBuffer(t.node.piece.bufferIndex, t.node.piece.start), r = i + t.remainder, s = i + t.node.piece.length;
            return n.buffer.substring(r, s);
        }
    }
    findMatchesInNode(e, t, n, i, r, s, o, a, c, l, u) {
        const h = this._buffers[e.piece.bufferIndex], p = this.offsetInBuffer(e.piece.bufferIndex, e.piece.start), g = this.offsetInBuffer(e.piece.bufferIndex, r), f = this.offsetInBuffer(e.piece.bufferIndex, s);
        let v;
        const b = {
            line: 0,
            column: 0
        };
        let y, T;
        t._wordSeparators ? (y = h.buffer.substring(g, f), T = (E)=>E + g, t.reset(0)) : (y = h.buffer, T = (E)=>E, t.reset(g));
        do if (v = t.next(y), v) {
            if (T(v.index) >= f) return l;
            this.positionInBuffer(e, T(v.index) - p, b);
            const E = this.getLineFeedCnt(e.piece.bufferIndex, r, b), A = b.line === r.line ? b.column - r.column + i : b.column + 1, R = A + v[0].length;
            if (u[l++] = wpt(new dt(n + E, A, n + E, R), v, a), T(v.index) + v[0].length >= f || l >= c) return l;
        }
        while (v)
        return l;
    }
    findMatchesLineByLine(e, t, n, i) {
        const r = [];
        let s = 0;
        const o = new Cpt(t.wordSeparators, t.regex);
        let a = this.nodeAt2(e.startLineNumber, e.startColumn);
        if (a === null) return [];
        const c = this.nodeAt2(e.endLineNumber, e.endColumn);
        if (c === null) return [];
        let l = this.positionInBuffer(a.node, a.remainder);
        const u = this.positionInBuffer(c.node, c.remainder);
        if (a.node === c.node) return this.findMatchesInNode(a.node, o, e.startLineNumber, e.startColumn, l, u, t, n, i, s, r), r;
        let h = e.startLineNumber, p = a.node;
        for(; p !== c.node;){
            const f = this.getLineFeedCnt(p.piece.bufferIndex, l, p.piece.end);
            if (f >= 1) {
                const b = this._buffers[p.piece.bufferIndex].lineStarts, y = this.offsetInBuffer(p.piece.bufferIndex, p.piece.start), T = b[l.line + f], E = h === e.startLineNumber ? e.startColumn : 1;
                if (s = this.findMatchesInNode(p, o, h, E, l, this.positionInBuffer(p, T - y), t, n, i, s, r), s >= i) return r;
                h += f;
            }
            const v = h === e.startLineNumber ? e.startColumn - 1 : 0;
            if (h === e.endLineNumber) {
                const b = this.getLineContent(h).substring(v, e.endColumn - 1);
                return s = this._findMatchesInLine(t, o, b, e.endLineNumber, v, s, r, n, i), r;
            }
            if (s = this._findMatchesInLine(t, o, this.getLineContent(h).substr(v), h, v, s, r, n, i), s >= i) return r;
            h++, a = this.nodeAt2(h, 1), p = a.node, l = this.positionInBuffer(a.node, a.remainder);
        }
        if (h === e.endLineNumber) {
            const f = h === e.startLineNumber ? e.startColumn - 1 : 0, v = this.getLineContent(h).substring(f, e.endColumn - 1);
            return s = this._findMatchesInLine(t, o, v, e.endLineNumber, f, s, r, n, i), r;
        }
        const g = h === e.startLineNumber ? e.startColumn : 1;
        return s = this.findMatchesInNode(c.node, o, h, g, l, u, t, n, i, s, r), r;
    }
    _findMatchesInLine(e, t, n, i, r, s, o, a, c) {
        const l = e.wordSeparators;
        if (!a && e.simpleSearch) {
            const h = e.simpleSearch, p = h.length, g = n.length;
            let f = -p;
            for(; (f = n.indexOf(h, f + p)) !== -1;)if ((!l || GQr(l, n, g, f, p)) && (o[s++] = new uOt(new dt(i, f + 1 + r, i, f + 1 + p + r), null), s >= c)) return s;
            return s;
        }
        let u;
        t.reset(0);
        do if (u = t.next(n), u && (o[s++] = wpt(new dt(i, u.index + 1 + r, i, u.index + 1 + u[0].length + r), u, a), s >= c)) return s;
        while (u)
        return s;
    }
    insert(e, t, n = !1) {
        if (this._EOLNormalized = this._EOLNormalized && n, this._lastVisitedLine.lineNumber = 0, this._lastVisitedLine.value = "", this.root !== fg) {
            const { node: i, remainder: r, nodeStartOffset: s } = this.nodeAt(e), o = i.piece, a = o.bufferIndex, c = this.positionInBuffer(i, r);
            if (i.piece.bufferIndex === 0 && o.end.line === this._lastChangeBufferPos.line && o.end.column === this._lastChangeBufferPos.column && s + o.length === e && t.length < YAe) {
                this.appendToNode(i, t), this.computeBufferMetadata();
                return;
            }
            if (s === e) this.insertContentToNodeLeft(t, i), this._searchCache.validate(e);
            else if (s + i.piece.length > e) {
                const l = [];
                let u = new BK(o.bufferIndex, c, o.end, this.getLineFeedCnt(o.bufferIndex, c, o.end), this.offsetInBuffer(a, o.end) - this.offsetInBuffer(a, c));
                if (this.shouldCheckCRLF() && this.endWithCR(t) && this.nodeCharCodeAt(i, r) === 10) {
                    const f = {
                        line: u.start.line + 1,
                        column: 0
                    };
                    u = new BK(u.bufferIndex, f, u.end, this.getLineFeedCnt(u.bufferIndex, f, u.end), u.length - 1), t += `
`;
                }
                if (this.shouldCheckCRLF() && this.startWithLF(t)) if (this.nodeCharCodeAt(i, r - 1) === 13) {
                    const f = this.positionInBuffer(i, r - 1);
                    this.deleteNodeTail(i, f), t = "\r" + t, i.piece.length === 0 && l.push(i);
                } else this.deleteNodeTail(i, c);
                else this.deleteNodeTail(i, c);
                const h = this.createNewPieces(t);
                u.length > 0 && this.rbInsertRight(i, u);
                let p = i;
                for(let g = 0; g < h.length; g++)p = this.rbInsertRight(p, h[g]);
                this.deleteNodes(l);
            } else this.insertContentToNodeRight(t, i);
        } else {
            const i = this.createNewPieces(t);
            let r = this.rbInsertLeft(null, i[0]);
            for(let s = 1; s < i.length; s++)r = this.rbInsertRight(r, i[s]);
        }
        this.computeBufferMetadata();
    }
    delete(e, t) {
        if (this._lastVisitedLine.lineNumber = 0, this._lastVisitedLine.value = "", t <= 0 || this.root === fg) return;
        const n = this.nodeAt(e), i = this.nodeAt(e + t), r = n.node, s = i.node;
        if (r === s) {
            const h = this.positionInBuffer(r, n.remainder), p = this.positionInBuffer(r, i.remainder);
            if (n.nodeStartOffset === e) {
                if (t === r.piece.length) {
                    const g = r.next();
                    Ovi(this, r), this.validateCRLFWithPrevNode(g), this.computeBufferMetadata();
                    return;
                }
                this.deleteNodeHead(r, p), this._searchCache.validate(e), this.validateCRLFWithPrevNode(r), this.computeBufferMetadata();
                return;
            }
            if (n.nodeStartOffset + r.piece.length === e + t) {
                this.deleteNodeTail(r, h), this.validateCRLFWithNextNode(r), this.computeBufferMetadata();
                return;
            }
            this.shrinkNode(r, h, p), this.computeBufferMetadata();
            return;
        }
        const o = [], a = this.positionInBuffer(r, n.remainder);
        this.deleteNodeTail(r, a), this._searchCache.validate(e), r.piece.length === 0 && o.push(r);
        const c = this.positionInBuffer(s, i.remainder);
        this.deleteNodeHead(s, c), s.piece.length === 0 && o.push(s);
        const l = r.next();
        for(let h = l; h !== fg && h !== s; h = h.next())o.push(h);
        const u = r.piece.length === 0 ? r.prev() : r;
        this.deleteNodes(o), this.validateCRLFWithNextNode(u), this.computeBufferMetadata();
    }
    insertContentToNodeLeft(e, t) {
        const n = [];
        if (this.shouldCheckCRLF() && this.endWithCR(e) && this.startWithLF(t)) {
            const s = t.piece, o = {
                line: s.start.line + 1,
                column: 0
            }, a = new BK(s.bufferIndex, o, s.end, this.getLineFeedCnt(s.bufferIndex, o, s.end), s.length - 1);
            t.piece = a, e += `
`, qBe(this, t, -1, -1), t.piece.length === 0 && n.push(t);
        }
        const i = this.createNewPieces(e);
        let r = this.rbInsertLeft(t, i[i.length - 1]);
        for(let s = i.length - 2; s >= 0; s--)r = this.rbInsertLeft(r, i[s]);
        this.validateCRLFWithPrevNode(r), this.deleteNodes(n);
    }
    insertContentToNodeRight(e, t) {
        this.adjustCarriageReturnFromNext(e, t) && (e += `
`);
        const n = this.createNewPieces(e), i = this.rbInsertRight(t, n[0]);
        let r = i;
        for(let s = 1; s < n.length; s++)r = this.rbInsertRight(r, n[s]);
        this.validateCRLFWithPrevNode(i);
    }
    positionInBuffer(e, t, n) {
        const i = e.piece, r = e.piece.bufferIndex, s = this._buffers[r].lineStarts, a = s[i.start.line] + i.start.column + t;
        let c = i.start.line, l = i.end.line, u = 0, h = 0, p = 0;
        for(; c <= l && (u = c + (l - c) / 2 | 0, p = s[u], u !== l);)if (h = s[u + 1], a < p) l = u - 1;
        else if (a >= h) c = u + 1;
        else break;
        return n ? (n.line = u, n.column = a - p, null) : {
            line: u,
            column: a - p
        };
    }
    getLineFeedCnt(e, t, n) {
        if (n.column === 0) return n.line - t.line;
        const i = this._buffers[e].lineStarts;
        if (n.line === i.length - 1) return n.line - t.line;
        const r = i[n.line + 1], s = i[n.line] + n.column;
        if (r > s + 1) return n.line - t.line;
        const o = s - 1;
        return this._buffers[e].buffer.charCodeAt(o) === 13 ? n.line - t.line + 1 : n.line - t.line;
    }
    offsetInBuffer(e, t) {
        return this._buffers[e].lineStarts[t.line] + t.column;
    }
    deleteNodes(e) {
        for(let t = 0; t < e.length; t++)Ovi(this, e[t]);
    }
    createNewPieces(e) {
        if (e.length > YAe) {
            const l = [];
            for(; e.length > YAe;){
                const h = e.charCodeAt(YAe - 1);
                let p;
                h === En.CarriageReturn || h >= 55296 && h <= 56319 ? (p = e.substring(0, YAe - 1), e = e.substring(YAe - 1)) : (p = e.substring(0, YAe), e = e.substring(YAe));
                const g = KBe(p);
                l.push(new BK(this._buffers.length, {
                    line: 0,
                    column: 0
                }, {
                    line: g.length - 1,
                    column: p.length - g[g.length - 1]
                }, g.length - 1, p.length)), this._buffers.push(new Rze(p, g));
            }
            const u = KBe(e);
            return l.push(new BK(this._buffers.length, {
                line: 0,
                column: 0
            }, {
                line: u.length - 1,
                column: e.length - u[u.length - 1]
            }, u.length - 1, e.length)), this._buffers.push(new Rze(e, u)), l;
        }
        let t = this._buffers[0].buffer.length;
        const n = KBe(e, !1);
        let i = this._lastChangeBufferPos;
        if (this._buffers[0].lineStarts[this._buffers[0].lineStarts.length - 1] === t && t !== 0 && this.startWithLF(e) && this.endWithCR(this._buffers[0].buffer)) {
            this._lastChangeBufferPos = {
                line: this._lastChangeBufferPos.line,
                column: this._lastChangeBufferPos.column + 1
            }, i = this._lastChangeBufferPos;
            for(let l = 0; l < n.length; l++)n[l] += t + 1;
            this._buffers[0].lineStarts = this._buffers[0].lineStarts.concat(n.slice(1)), this._buffers[0].buffer += "_" + e, t += 1;
        } else {
            if (t !== 0) for(let l = 0; l < n.length; l++)n[l] += t;
            this._buffers[0].lineStarts = this._buffers[0].lineStarts.concat(n.slice(1)), this._buffers[0].buffer += e;
        }
        const r = this._buffers[0].buffer.length, s = this._buffers[0].lineStarts.length - 1, o = r - this._buffers[0].lineStarts[s], a = {
            line: s,
            column: o
        }, c = new BK(0, i, a, this.getLineFeedCnt(0, i, a), r - t);
        return this._lastChangeBufferPos = a, [
            c
        ];
    }
    getLinesRawContent() {
        return this.getContentOfSubTree(this.root);
    }
    getLineRawContent(e, t = 0) {
        let n = this.root, i = "";
        const r = this._searchCache.get2(e);
        if (r) {
            n = r.node;
            const s = this.getAccumulatedValue(n, e - r.nodeStartLineNumber - 1), o = this._buffers[n.piece.bufferIndex].buffer, a = this.offsetInBuffer(n.piece.bufferIndex, n.piece.start);
            if (r.nodeStartLineNumber + n.piece.lineFeedCnt === e) i = o.substring(a + s, a + n.piece.length);
            else {
                const c = this.getAccumulatedValue(n, e - r.nodeStartLineNumber);
                return o.substring(a + s, a + c - t);
            }
        } else {
            let s = 0;
            const o = e;
            for(; n !== fg;)if (n.left !== fg && n.lf_left >= e - 1) n = n.left;
            else if (n.lf_left + n.piece.lineFeedCnt > e - 1) {
                const a = this.getAccumulatedValue(n, e - n.lf_left - 2), c = this.getAccumulatedValue(n, e - n.lf_left - 1), l = this._buffers[n.piece.bufferIndex].buffer, u = this.offsetInBuffer(n.piece.bufferIndex, n.piece.start);
                return s += n.size_left, this._searchCache.set({
                    node: n,
                    nodeStartOffset: s,
                    nodeStartLineNumber: o - (e - 1 - n.lf_left)
                }), l.substring(u + a, u + c - t);
            } else if (n.lf_left + n.piece.lineFeedCnt === e - 1) {
                const a = this.getAccumulatedValue(n, e - n.lf_left - 2), c = this._buffers[n.piece.bufferIndex].buffer, l = this.offsetInBuffer(n.piece.bufferIndex, n.piece.start);
                i = c.substring(l + a, l + n.piece.length);
                break;
            } else e -= n.lf_left + n.piece.lineFeedCnt, s += n.size_left + n.piece.length, n = n.right;
        }
        for(n = n.next(); n !== fg;){
            const s = this._buffers[n.piece.bufferIndex].buffer;
            if (n.piece.lineFeedCnt > 0) {
                const o = this.getAccumulatedValue(n, 0), a = this.offsetInBuffer(n.piece.bufferIndex, n.piece.start);
                return i += s.substring(a, a + o - t), i;
            } else {
                const o = this.offsetInBuffer(n.piece.bufferIndex, n.piece.start);
                i += s.substr(o, n.piece.length);
            }
            n = n.next();
        }
        return i;
    }
    computeBufferMetadata() {
        let e = this.root, t = 1, n = 0;
        for(; e !== fg;)t += e.lf_left + e.piece.lineFeedCnt, n += e.size_left + e.piece.length, e = e.right;
        this._lineCnt = t, this._length = n, this._searchCache.validate(this._length);
    }
    getIndexOf(e, t) {
        const n = e.piece, i = this.positionInBuffer(e, t), r = i.line - n.start.line;
        if (this.offsetInBuffer(n.bufferIndex, n.end) - this.offsetInBuffer(n.bufferIndex, n.start) === t) {
            const s = this.getLineFeedCnt(e.piece.bufferIndex, n.start, i);
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
    getAccumulatedValue(e, t) {
        if (t < 0) return 0;
        const n = e.piece, i = this._buffers[n.bufferIndex].lineStarts, r = n.start.line + t + 1;
        return r > n.end.line ? i[n.end.line] + n.end.column - i[n.start.line] - n.start.column : i[r] - i[n.start.line] - n.start.column;
    }
    deleteNodeTail(e, t) {
        const n = e.piece, i = n.lineFeedCnt, r = this.offsetInBuffer(n.bufferIndex, n.end), s = t, o = this.offsetInBuffer(n.bufferIndex, s), a = this.getLineFeedCnt(n.bufferIndex, n.start, s), c = a - i, l = o - r, u = n.length + l;
        e.piece = new BK(n.bufferIndex, n.start, s, a, u), qBe(this, e, l, c);
    }
    deleteNodeHead(e, t) {
        const n = e.piece, i = n.lineFeedCnt, r = this.offsetInBuffer(n.bufferIndex, n.start), s = t, o = this.getLineFeedCnt(n.bufferIndex, s, n.end), a = this.offsetInBuffer(n.bufferIndex, s), c = o - i, l = r - a, u = n.length + l;
        e.piece = new BK(n.bufferIndex, s, n.end, o, u), qBe(this, e, l, c);
    }
    shrinkNode(e, t, n) {
        const i = e.piece, r = i.start, s = i.end, o = i.length, a = i.lineFeedCnt, c = t, l = this.getLineFeedCnt(i.bufferIndex, i.start, c), u = this.offsetInBuffer(i.bufferIndex, t) - this.offsetInBuffer(i.bufferIndex, r);
        e.piece = new BK(i.bufferIndex, i.start, c, l, u), qBe(this, e, u - o, l - a);
        const h = new BK(i.bufferIndex, n, s, this.getLineFeedCnt(i.bufferIndex, n, s), this.offsetInBuffer(i.bufferIndex, s) - this.offsetInBuffer(i.bufferIndex, n)), p = this.rbInsertRight(e, h);
        this.validateCRLFWithPrevNode(p);
    }
    appendToNode(e, t) {
        this.adjustCarriageReturnFromNext(t, e) && (t += `
`);
        const n = this.shouldCheckCRLF() && this.startWithLF(t) && this.endWithCR(e), i = this._buffers[0].buffer.length;
        this._buffers[0].buffer += t;
        const r = KBe(t, !1);
        for(let p = 0; p < r.length; p++)r[p] += i;
        if (n) {
            const p = this._buffers[0].lineStarts[this._buffers[0].lineStarts.length - 2];
            this._buffers[0].lineStarts.pop(), this._lastChangeBufferPos = {
                line: this._lastChangeBufferPos.line - 1,
                column: i - p
            };
        }
        this._buffers[0].lineStarts = this._buffers[0].lineStarts.concat(r.slice(1));
        const s = this._buffers[0].lineStarts.length - 1, o = this._buffers[0].buffer.length - this._buffers[0].lineStarts[s], a = {
            line: s,
            column: o
        }, c = e.piece.length + t.length, l = e.piece.lineFeedCnt, u = this.getLineFeedCnt(0, e.piece.start, a), h = u - l;
        e.piece = new BK(e.piece.bufferIndex, e.piece.start, a, u, c), this._lastChangeBufferPos = a, qBe(this, e, t.length, h);
    }
    nodeAt(e) {
        let t = this.root;
        const n = this._searchCache.get(e);
        if (n) return {
            node: n.node,
            nodeStartOffset: n.nodeStartOffset,
            remainder: e - n.nodeStartOffset
        };
        let i = 0;
        for(; t !== fg;)if (t.size_left > e) t = t.left;
        else if (t.size_left + t.piece.length >= e) {
            i += t.size_left;
            const r = {
                node: t,
                remainder: e - t.size_left,
                nodeStartOffset: i
            };
            return this._searchCache.set(r), r;
        } else e -= t.size_left + t.piece.length, i += t.size_left + t.piece.length, t = t.right;
        return null;
    }
    nodeAt2(e, t) {
        let n = this.root, i = 0;
        for(; n !== fg;)if (n.left !== fg && n.lf_left >= e - 1) n = n.left;
        else if (n.lf_left + n.piece.lineFeedCnt > e - 1) {
            const r = this.getAccumulatedValue(n, e - n.lf_left - 2), s = this.getAccumulatedValue(n, e - n.lf_left - 1);
            return i += n.size_left, {
                node: n,
                remainder: Math.min(r + t - 1, s),
                nodeStartOffset: i
            };
        } else if (n.lf_left + n.piece.lineFeedCnt === e - 1) {
            const r = this.getAccumulatedValue(n, e - n.lf_left - 2);
            if (r + t - 1 <= n.piece.length) return {
                node: n,
                remainder: r + t - 1,
                nodeStartOffset: i
            };
            t -= n.piece.length - r;
            break;
        } else e -= n.lf_left + n.piece.lineFeedCnt, i += n.size_left + n.piece.length, n = n.right;
        for(n = n.next(); n !== fg;){
            if (n.piece.lineFeedCnt > 0) {
                const r = this.getAccumulatedValue(n, 0), s = this.offsetOfNode(n);
                return {
                    node: n,
                    remainder: Math.min(t - 1, r),
                    nodeStartOffset: s
                };
            } else if (n.piece.length >= t - 1) {
                const r = this.offsetOfNode(n);
                return {
                    node: n,
                    remainder: t - 1,
                    nodeStartOffset: r
                };
            } else t -= n.piece.length;
            n = n.next();
        }
        return null;
    }
    nodeCharCodeAt(e, t) {
        if (e.piece.lineFeedCnt < 1) return -1;
        const n = this._buffers[e.piece.bufferIndex], i = this.offsetInBuffer(e.piece.bufferIndex, e.piece.start) + t;
        return n.buffer.charCodeAt(i);
    }
    offsetOfNode(e) {
        if (!e) return 0;
        let t = e.size_left;
        for(; e !== this.root;)e.parent.right === e && (t += e.parent.size_left + e.parent.piece.length), e = e.parent;
        return t;
    }
    shouldCheckCRLF() {
        return !(this._EOLNormalized && this._EOL === `
`);
    }
    startWithLF(e) {
        if (typeof e == "string") return e.charCodeAt(0) === 10;
        if (e === fg || e.piece.lineFeedCnt === 0) return !1;
        const t = e.piece, n = this._buffers[t.bufferIndex].lineStarts, i = t.start.line, r = n[i] + t.start.column;
        return i === n.length - 1 || n[i + 1] > r + 1 ? !1 : this._buffers[t.bufferIndex].buffer.charCodeAt(r) === 10;
    }
    endWithCR(e) {
        return typeof e == "string" ? e.charCodeAt(e.length - 1) === 13 : e === fg || e.piece.lineFeedCnt === 0 ? !1 : this.nodeCharCodeAt(e, e.piece.length - 1) === 13;
    }
    validateCRLFWithPrevNode(e) {
        if (this.shouldCheckCRLF() && this.startWithLF(e)) {
            const t = e.prev();
            this.endWithCR(t) && this.fixCRLF(t, e);
        }
    }
    validateCRLFWithNextNode(e) {
        if (this.shouldCheckCRLF() && this.endWithCR(e)) {
            const t = e.next();
            this.startWithLF(t) && this.fixCRLF(e, t);
        }
    }
    fixCRLF(e, t) {
        const n = [], i = this._buffers[e.piece.bufferIndex].lineStarts;
        let r;
        e.piece.end.column === 0 ? r = {
            line: e.piece.end.line - 1,
            column: i[e.piece.end.line] - i[e.piece.end.line - 1] - 1
        } : r = {
            line: e.piece.end.line,
            column: e.piece.end.column - 1
        };
        const s = e.piece.length - 1, o = e.piece.lineFeedCnt - 1;
        e.piece = new BK(e.piece.bufferIndex, e.piece.start, r, o, s), qBe(this, e, -1, -1), e.piece.length === 0 && n.push(e);
        const a = {
            line: t.piece.start.line + 1,
            column: 0
        }, c = t.piece.length - 1, l = this.getLineFeedCnt(t.piece.bufferIndex, a, t.piece.end);
        t.piece = new BK(t.piece.bufferIndex, a, t.piece.end, l, c), qBe(this, t, -1, -1), t.piece.length === 0 && n.push(t);
        const u = this.createNewPieces(`\r
`);
        this.rbInsertRight(e, u[0]);
        for(let h = 0; h < n.length; h++)Ovi(this, n[h]);
    }
    adjustCarriageReturnFromNext(e, t) {
        if (this.shouldCheckCRLF() && this.endWithCR(e)) {
            const n = t.next();
            if (this.startWithLF(n)) {
                if (e += `
`, n.piece.length === 1) Ovi(this, n);
                else {
                    const i = n.piece, r = {
                        line: i.start.line + 1,
                        column: 0
                    }, s = i.length - 1, o = this.getLineFeedCnt(i.bufferIndex, r, i.end);
                    n.piece = new BK(i.bufferIndex, r, i.end, o, s), qBe(this, n, -1, -1);
                }
                return !0;
            }
        }
        return !1;
    }
    iterate(e, t) {
        if (e === fg) return t(fg);
        const n = this.iterate(e.left, t);
        return n && t(e) && this.iterate(e.right, t);
    }
    getNodeContent(e) {
        if (e === fg) return "";
        const t = this._buffers[e.piece.bufferIndex], n = e.piece, i = this.offsetInBuffer(n.bufferIndex, n.start), r = this.offsetInBuffer(n.bufferIndex, n.end);
        return t.buffer.substring(i, r);
    }
    getPieceContent(e) {
        const t = this._buffers[e.bufferIndex], n = this.offsetInBuffer(e.bufferIndex, e.start), i = this.offsetInBuffer(e.bufferIndex, e.end);
        return t.buffer.substring(n, i);
    }
    rbInsertRight(e, t) {
        const n = new Fvi(t, 1);
        if (n.left = fg, n.right = fg, n.parent = fg, n.size_left = 0, n.lf_left = 0, this.root === fg) this.root = n, n.color = 0;
        else if (e.right === fg) e.right = n, n.parent = e;
        else {
            const r = BQr(e.right);
            r.left = n, n.parent = r;
        }
        return QFc(this, n), n;
    }
    rbInsertLeft(e, t) {
        const n = new Fvi(t, 1);
        if (n.left = fg, n.right = fg, n.parent = fg, n.size_left = 0, n.lf_left = 0, this.root === fg) this.root = n, n.color = 0;
        else if (e.left === fg) e.left = n, n.parent = e;
        else {
            const i = ZFc(e.left);
            i.right = n, n.parent = i;
        }
        return QFc(this, n), n;
    }
    getContentOfSubTree(e) {
        let t = "";
        return this.iterate(e, (n)=>(t += this.getNodeContent(n), !0)), t;
    }
};

}
