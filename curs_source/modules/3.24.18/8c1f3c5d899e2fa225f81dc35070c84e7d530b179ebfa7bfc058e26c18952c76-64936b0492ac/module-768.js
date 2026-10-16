Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.StringText = exports.ArrayText = exports.LineBasedText = exports.AbstractText = exports.SingleTextEdit = exports.TextEdit = void 0;
const i = require("./module-501.js"), r = require("./module-141.js"), s = require("./module-976.js"), o = require("./module-589.js"), a = require("./module-584.js"), u = require("./module-138.js"), l = require("./module-298.js"), h = require("./module-588.js");
class c {
    static fromOffsetEdit(e, t) {
        const n = e.edits.map((e)=>new f(t.getTransformer().getRange(e.replaceRange), e.newText));
        return new c(n);
    }
    static single(e, t) {
        return new c([
            new f(e, t)
        ]);
    }
    static insert(e, t) {
        return new c([
            new f(l.Range.fromPositions(e, e), t)
        ]);
    }
    constructor(e){
        this.edits = e, (0, r.assertFn)(()=>(0, r.checkAdjacentItems)(e, (e, t)=>e.range.getEndPosition().isBeforeOrEqual(t.range.getStartPosition())));
    }
    normalize() {
        const e = [];
        for (const t of this.edits)if (e.length > 0 && e[e.length - 1].range.getEndPosition().equals(t.range.getStartPosition())) {
            const n = e[e.length - 1];
            e[e.length - 1] = new f(n.range.plusRange(t.range), n.text + t.text);
        } else t.isEmpty || e.push(t);
        return new c(e);
    }
    mapPosition(e) {
        let t = 0, n = 0, i = 0;
        for (const r of this.edits){
            const s = r.range.getStartPosition();
            if (e.isBeforeOrEqual(s)) break;
            const o = r.range.getEndPosition(), u = h.TextLength.ofText(r.text);
            if (e.isBefore(o)) {
                const e = new a.Position(s.lineNumber + t, s.column + (s.lineNumber + t === n ? i : 0));
                return d(e, u.addToPosition(e));
            }
            s.lineNumber + t !== n && (i = 0), t += u.lineCount - (r.range.endLineNumber - r.range.startLineNumber), 0 === u.lineCount ? o.lineNumber !== s.lineNumber ? i += u.columnCount - (o.column - 1) : i += u.columnCount - (o.column - s.column) : i = u.columnCount, n = o.lineNumber + t;
        }
        return new a.Position(e.lineNumber + t, e.column + (e.lineNumber + t === n ? i : 0));
    }
    mapRange(e) {
        const t = (n = this.mapPosition(e.getStartPosition())) instanceof a.Position ? n : n.getStartPosition();
        var n;
        const i = function(e) {
            return e instanceof a.Position ? e : e.getEndPosition();
        }(this.mapPosition(e.getEndPosition()));
        return d(t, i);
    }
    inverseMapPosition(e, t) {
        return this.inverse(t).mapPosition(e);
    }
    inverseMapRange(e, t) {
        return this.inverse(t).mapRange(e);
    }
    apply(e) {
        let t = "", n = new a.Position(1, 1);
        for (const i of this.edits){
            const r = i.range, s = r.getStartPosition(), o = r.getEndPosition(), a = d(n, s);
            a.isEmpty() || (t += e.getValueOfRange(a)), t += i.text, n = o;
        }
        const i = d(n, e.endPositionExclusive);
        return i.isEmpty() || (t += e.getValueOfRange(i)), t;
    }
    applyToString(e) {
        const t = new p(e);
        return this.apply(t);
    }
    inverse(e) {
        const t = this.getNewRanges();
        return new c(this.edits.map((n, i)=>new f(t[i], e.getValueOfRange(n.range))));
    }
    getNewRanges() {
        const e = [];
        let t = 0, n = 0, i = 0;
        for (const r of this.edits){
            const s = h.TextLength.ofText(r.text), o = a.Position.lift({
                lineNumber: r.range.startLineNumber + n,
                column: r.range.startColumn + (r.range.startLineNumber === t ? i : 0)
            }), u = s.createRange(o);
            e.push(u), n = u.endLineNumber - r.range.endLineNumber, i = u.endColumn - r.range.endColumn, t = r.range.endLineNumber;
        }
        return e;
    }
    toSingle(e) {
        if (0 === this.edits.length) throw new s.BugIndicatingError;
        if (1 === this.edits.length) return this.edits[0];
        const t = this.edits[0].range.getStartPosition(), n = this.edits[this.edits.length - 1].range.getEndPosition();
        let i = "";
        for(let t = 0; t < this.edits.length; t++){
            const n = this.edits[t];
            if (i += n.text, t < this.edits.length - 1) {
                const r = this.edits[t + 1], s = l.Range.fromPositions(n.range.getEndPosition(), r.range.getStartPosition());
                i += e.getValueOfRange(s);
            }
        }
        return new f(l.Range.fromPositions(t, n), i);
    }
    equals(e) {
        return (0, i.equals)(this.edits, e.edits, (e, t)=>e.equals(t));
    }
}
exports.TextEdit = c;
class f {
    static joinEdits(e, t) {
        if (0 === e.length) throw new s.BugIndicatingError;
        if (1 === e.length) return e[0];
        const n = e[0].range.getStartPosition(), i = e[e.length - 1].range.getEndPosition();
        let r = "";
        for(let n = 0; n < e.length; n++){
            const i = e[n];
            if (r += i.text, n < e.length - 1) {
                const s = e[n + 1], o = l.Range.fromPositions(i.range.getEndPosition(), s.range.getStartPosition());
                r += t.getValueOfRange(o);
            }
        }
        return new f(l.Range.fromPositions(n, i), r);
    }
    constructor(e, t){
        this.range = e, this.text = t;
    }
    get isEmpty() {
        return this.range.isEmpty() && 0 === this.text.length;
    }
    static equals(e, t) {
        return e.range.equalsRange(t.range) && e.text === t.text;
    }
    toSingleEditOperation() {
        return {
            range: this.range,
            text: this.text
        };
    }
    toEdit() {
        return new c([
            this
        ]);
    }
    equals(e) {
        return f.equals(this, e);
    }
    extendToCoverRange(e, t) {
        if (this.range.containsRange(e)) return this;
        const n = this.range.plusRange(e), i = t.getValueOfRange(l.Range.fromPositions(n.getStartPosition(), this.range.getStartPosition())), r = t.getValueOfRange(l.Range.fromPositions(this.range.getEndPosition(), n.getEndPosition())), s = i + this.text + r;
        return new f(n, s);
    }
    extendToFullLine(e) {
        const t = new l.Range(this.range.startLineNumber, 1, this.range.endLineNumber, e.getTransformer().getLineLength(this.range.endLineNumber) + 1);
        return this.extendToCoverRange(t, e);
    }
    removeCommonPrefix(e) {
        const t = e.getValueOfRange(this.range).replaceAll("\r\n", "\n"), n = this.text.replaceAll("\r\n", "\n"), i = (0, o.commonPrefixLength)(t, n), r = h.TextLength.ofText(t.substring(0, i)).addToPosition(this.range.getStartPosition()), s = n.substring(i), a = l.Range.fromPositions(r, this.range.getEndPosition());
        return new f(a, s);
    }
    isEffectiveDeletion(e) {
        let t = this.text.replaceAll("\r\n", "\n"), n = e.getValueOfRange(this.range).replaceAll("\r\n", "\n");
        const i = (0, o.commonPrefixLength)(t, n);
        t = t.substring(i), n = n.substring(i);
        const r = (0, o.commonSuffixLength)(t, n);
        return t = t.substring(0, t.length - r), n = n.substring(0, n.length - r), "" === t;
    }
}
function d(e, t) {
    if (e.lineNumber === t.lineNumber && e.column === Number.MAX_SAFE_INTEGER) return l.Range.fromPositions(t, t);
    if (!e.isBeforeOrEqual(t)) throw new s.BugIndicatingError("start must be before end");
    return new l.Range(e.lineNumber, e.column, t.lineNumber, t.column);
}
exports.SingleTextEdit = f;
class g {
    constructor(){
        this._transformer = void 0;
    }
    get endPositionExclusive() {
        return this.length.addToPosition(new a.Position(1, 1));
    }
    get lineRange() {
        return this.length.toLineRange();
    }
    getValue() {
        return this.getValueOfRange(this.length.toRange());
    }
    getLineLength(e) {
        return this.getValueOfRange(new l.Range(e, 1, e, Number.MAX_SAFE_INTEGER)).length;
    }
    getTransformer() {
        return this._transformer || (this._transformer = new u.PositionOffsetTransformer(this.getValue())), this._transformer;
    }
    getLineAt(e) {
        return this.getValueOfRange(new l.Range(e, 1, e, Number.MAX_SAFE_INTEGER));
    }
    getLines() {
        const e = this.getValue();
        return (0, o.splitLines)(e);
    }
}
exports.AbstractText = g;
class m extends g {
    constructor(e, t){
        (0, r.assert)(t >= 1), super(), this._getLineContent = e, this._lineCount = t;
    }
    getValueOfRange(e) {
        if (e.startLineNumber === e.endLineNumber) return this._getLineContent(e.startLineNumber).substring(e.startColumn - 1, e.endColumn - 1);
        let t = this._getLineContent(e.startLineNumber).substring(e.startColumn - 1);
        for(let n = e.startLineNumber + 1; n < e.endLineNumber; n++)t += "\n" + this._getLineContent(n);
        return t += "\n" + this._getLineContent(e.endLineNumber).substring(0, e.endColumn - 1), t;
    }
    getLineLength(e) {
        return this._getLineContent(e).length;
    }
    get length() {
        const e = this._getLineContent(this._lineCount);
        return new h.TextLength(this._lineCount - 1, e.length);
    }
}
exports.LineBasedText = m;
exports.ArrayText = class extends m {
    constructor(e){
        super((t)=>e[t - 1], e.length);
    }
};
class p extends g {
    constructor(e){
        super(), this.value = e, this._t = new u.PositionOffsetTransformer(this.value);
    }
    getValueOfRange(e) {
        return this._t.getOffsetRange(e).substring(this.value);
    }
    get length() {
        return this._t.textLength;
    }
}
exports.StringText = p;
