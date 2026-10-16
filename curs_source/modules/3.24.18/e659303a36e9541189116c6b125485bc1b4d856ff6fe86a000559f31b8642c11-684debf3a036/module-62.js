Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.LinesSliceCharSequence = void 0;
const i = require("./module-270.js"), r = require("./module-991.js"), s = require("./module-584.js"), o = require("./module-298.js"), a = require("./module-891.js");
function u(e) {
    return e >= 97 && e <= 122 || e >= 65 && e <= 90 || e >= 48 && e <= 57;
}
function l(e) {
    return e >= 65 && e <= 90;
}
exports.LinesSliceCharSequence = class {
    constructor(e, t, n){
        this.lines = e, this.range = t, this.considerWhitespaceChanges = n, this.elements = [], this.firstElementOffsetByLineIdx = [], this.lineStartOffsets = [], this.trimmedWsLengthsByLineIdx = [], this.firstElementOffsetByLineIdx.push(0);
        for(let t = this.range.startLineNumber; t <= this.range.endLineNumber; t++){
            let i = e[t - 1], r = 0;
            t === this.range.startLineNumber && this.range.startColumn > 1 && (r = this.range.startColumn - 1, i = i.substring(r)), this.lineStartOffsets.push(r);
            let s = 0;
            if (!n) {
                const e = i.trimStart();
                s = i.length - e.length, i = e.trimEnd();
            }
            this.trimmedWsLengthsByLineIdx.push(s);
            const o = t === this.range.endLineNumber ? Math.min(this.range.endColumn - 1 - r - s, i.length) : i.length;
            for(let e = 0; e < o; e++)this.elements.push(i.charCodeAt(e));
            t < this.range.endLineNumber && (this.elements.push("\n".charCodeAt(0)), this.firstElementOffsetByLineIdx.push(this.elements.length));
        }
    }
    toString() {
        return `Slice: "${this.text}"`;
    }
    get text() {
        return this.getText(new r.OffsetRange(0, this.length));
    }
    getText(e) {
        return this.elements.slice(e.start, e.endExclusive).map((e)=>String.fromCharCode(e)).join("");
    }
    getElement(e) {
        return this.elements[e];
    }
    get length() {
        return this.elements.length;
    }
    getBoundaryScore(e) {
        const t = f(e > 0 ? this.elements[e - 1] : -1), n = f(e < this.elements.length ? this.elements[e] : -1);
        if (7 === t && 8 === n) return 0;
        if (8 === t) return 150;
        let i = 0;
        return t !== n && (i += 10, 0 === t && 1 === n && (i += 1)), i += c(t), i += c(n), i;
    }
    translateOffset(e, t = "right") {
        const n = (0, i.findLastIdxMonotonous)(this.firstElementOffsetByLineIdx, (t)=>t <= e), r = e - this.firstElementOffsetByLineIdx[n];
        return new s.Position(this.range.startLineNumber + n, 1 + this.lineStartOffsets[n] + r + (0 === r && "left" === t ? 0 : this.trimmedWsLengthsByLineIdx[n]));
    }
    translateRange(e) {
        const t = this.translateOffset(e.start, "right"), n = this.translateOffset(e.endExclusive, "left");
        return n.isBefore(t) ? o.Range.fromPositions(n, n) : o.Range.fromPositions(t, n);
    }
    findWordContaining(e) {
        if (e < 0 || e >= this.elements.length) return;
        if (!u(this.elements[e])) return;
        let t = e;
        for(; t > 0 && u(this.elements[t - 1]);)t--;
        let n = e;
        for(; n < this.elements.length && u(this.elements[n]);)n++;
        return new r.OffsetRange(t, n);
    }
    findSubWordContaining(e) {
        if (e < 0 || e >= this.elements.length) return;
        if (!u(this.elements[e])) return;
        let t = e;
        for(; t > 0 && u(this.elements[t - 1]) && !l(this.elements[t]);)t--;
        let n = e;
        for(; n < this.elements.length && u(this.elements[n]) && !l(this.elements[n]);)n++;
        return new r.OffsetRange(t, n);
    }
    countLinesIn(e) {
        return this.translateOffset(e.endExclusive).lineNumber - this.translateOffset(e.start).lineNumber;
    }
    isStronglyEqual(e, t) {
        return this.elements[e] === this.elements[t];
    }
    extendToFullLines(e) {
        const t = (0, i.findLastMonotonous)(this.firstElementOffsetByLineIdx, (t)=>t <= e.start) ?? 0, n = (0, i.findFirstMonotonous)(this.firstElementOffsetByLineIdx, (t)=>e.endExclusive <= t) ?? this.elements.length;
        return new r.OffsetRange(t, n);
    }
};
const h = {
    0: 0,
    1: 0,
    2: 0,
    3: 10,
    4: 2,
    5: 30,
    6: 3,
    7: 10,
    8: 10
};
function c(e) {
    return h[e];
}
function f(e) {
    return 10 === e ? 8 : 13 === e ? 7 : (0, a.isSpace)(e) ? 6 : e >= 97 && e <= 122 ? 0 : e >= 65 && e <= 90 ? 1 : e >= 48 && e <= 57 ? 2 : -1 === e ? 3 : 44 === e || 59 === e ? 5 : 4;
}
