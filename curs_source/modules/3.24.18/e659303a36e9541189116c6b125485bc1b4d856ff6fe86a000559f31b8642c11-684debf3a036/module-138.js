Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.PositionOffsetTransformer = void 0;
const i = require("./module-270.js"), r = require("./module-991.js"), s = require("./module-584.js"), o = require("./module-298.js"), a = require("./module-588.js");
exports.PositionOffsetTransformer = class {
    constructor(e){
        this.text = e, this.lineStartOffsetByLineIdx = [], this.lineEndOffsetByLineIdx = [], this.lineStartOffsetByLineIdx.push(0);
        for(let t = 0; t < e.length; t++)"\n" === e.charAt(t) && (this.lineStartOffsetByLineIdx.push(t + 1), t > 0 && "\r" === e.charAt(t - 1) ? this.lineEndOffsetByLineIdx.push(t - 1) : this.lineEndOffsetByLineIdx.push(t));
        this.lineEndOffsetByLineIdx.push(e.length);
    }
    getOffset(e) {
        const t = this._validatePosition(e);
        return this.lineStartOffsetByLineIdx[t.lineNumber - 1] + t.column - 1;
    }
    _validatePosition(e) {
        if (e.lineNumber < 1) return new s.Position(1, 1);
        const t = this.textLength.lineCount + 1;
        if (e.lineNumber > t) {
            const e = this.getLineLength(t);
            return new s.Position(t, e + 1);
        }
        if (e.column < 1) return new s.Position(e.lineNumber, 1);
        const n = this.getLineLength(e.lineNumber);
        return e.column - 1 > n ? new s.Position(e.lineNumber, n + 1) : e;
    }
    getOffsetRange(e) {
        return new r.OffsetRange(this.getOffset(e.getStartPosition()), this.getOffset(e.getEndPosition()));
    }
    getPosition(e) {
        const t = (0, i.findLastIdxMonotonous)(this.lineStartOffsetByLineIdx, (t)=>t <= e), n = t + 1, r = e - this.lineStartOffsetByLineIdx[t] + 1;
        return new s.Position(n, r);
    }
    getRange(e) {
        return o.Range.fromPositions(this.getPosition(e.start), this.getPosition(e.endExclusive));
    }
    getTextLength(e) {
        return a.TextLength.ofRange(this.getRange(e));
    }
    get textLength() {
        const e = this.lineStartOffsetByLineIdx.length - 1;
        return new a.TextLength(e, this.text.length - this.lineStartOffsetByLineIdx[e]);
    }
    getLineLength(e) {
        return this.lineEndOffsetByLineIdx[e - 1] - this.lineStartOffsetByLineIdx[e - 1];
    }
};
