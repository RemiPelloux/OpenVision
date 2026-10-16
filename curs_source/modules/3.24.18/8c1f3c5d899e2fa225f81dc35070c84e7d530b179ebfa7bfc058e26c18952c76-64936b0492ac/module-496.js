Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.LineRangeSet = exports.LineRange = void 0;
const i = require("./module-976.js"), r = require("./module-991.js"), s = require("./module-298.js"), o = require("./module-270.js");
class a {
    static fromRange(e) {
        return new a(e.startLineNumber, e.endLineNumber);
    }
    static fromRangeInclusive(e) {
        return new a(e.startLineNumber, e.endLineNumber + 1);
    }
    static subtract(e, t) {
        return t ? e.startLineNumber < t.startLineNumber && t.endLineNumberExclusive < e.endLineNumberExclusive ? [
            new a(e.startLineNumber, t.startLineNumber),
            new a(t.endLineNumberExclusive, e.endLineNumberExclusive)
        ] : t.startLineNumber <= e.startLineNumber && e.endLineNumberExclusive <= t.endLineNumberExclusive ? [] : t.endLineNumberExclusive < e.endLineNumberExclusive ? [
            new a(Math.max(t.endLineNumberExclusive, e.startLineNumber), e.endLineNumberExclusive)
        ] : [
            new a(e.startLineNumber, Math.min(t.startLineNumber, e.endLineNumberExclusive))
        ] : [
            e
        ];
    }
    static joinMany(e) {
        if (0 === e.length) return [];
        let t = new u(e[0].slice());
        for(let n = 1; n < e.length; n++)t = t.getUnion(new u(e[n].slice()));
        return t.ranges;
    }
    static join(e) {
        if (0 === e.length) throw new i.BugIndicatingError("lineRanges cannot be empty");
        let t = e[0].startLineNumber, n = e[0].endLineNumberExclusive;
        for(let i = 1; i < e.length; i++)t = Math.min(t, e[i].startLineNumber), n = Math.max(n, e[i].endLineNumberExclusive);
        return new a(t, n);
    }
    static ofLength(e, t) {
        return new a(e, e + t);
    }
    static deserialize(e) {
        return new a(e[0], e[1]);
    }
    constructor(e, t){
        if (e > t) throw new i.BugIndicatingError(`startLineNumber ${e} cannot be after endLineNumberExclusive ${t}`);
        this.startLineNumber = e, this.endLineNumberExclusive = t;
    }
    contains(e) {
        return this.startLineNumber <= e && e < this.endLineNumberExclusive;
    }
    get isEmpty() {
        return this.startLineNumber === this.endLineNumberExclusive;
    }
    delta(e) {
        return new a(this.startLineNumber + e, this.endLineNumberExclusive + e);
    }
    deltaLength(e) {
        return new a(this.startLineNumber, this.endLineNumberExclusive + e);
    }
    get length() {
        return this.endLineNumberExclusive - this.startLineNumber;
    }
    join(e) {
        return new a(Math.min(this.startLineNumber, e.startLineNumber), Math.max(this.endLineNumberExclusive, e.endLineNumberExclusive));
    }
    toString() {
        return `[${this.startLineNumber},${this.endLineNumberExclusive})`;
    }
    intersect(e) {
        const t = Math.max(this.startLineNumber, e.startLineNumber), n = Math.min(this.endLineNumberExclusive, e.endLineNumberExclusive);
        if (t <= n) return new a(t, n);
    }
    intersectsStrict(e) {
        return this.startLineNumber < e.endLineNumberExclusive && e.startLineNumber < this.endLineNumberExclusive;
    }
    overlapOrTouch(e) {
        return this.startLineNumber <= e.endLineNumberExclusive && e.startLineNumber <= this.endLineNumberExclusive;
    }
    equals(e) {
        return this.startLineNumber === e.startLineNumber && this.endLineNumberExclusive === e.endLineNumberExclusive;
    }
    toInclusiveRange() {
        return this.isEmpty ? null : new s.Range(this.startLineNumber, 1, this.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER);
    }
    toExclusiveRange() {
        return new s.Range(this.startLineNumber, 1, this.endLineNumberExclusive, 1);
    }
    mapToLineArray(e) {
        const t = [];
        for(let n = this.startLineNumber; n < this.endLineNumberExclusive; n++)t.push(e(n));
        return t;
    }
    forEach(e) {
        for(let t = this.startLineNumber; t < this.endLineNumberExclusive; t++)e(t);
    }
    serialize() {
        return [
            this.startLineNumber,
            this.endLineNumberExclusive
        ];
    }
    includes(e) {
        return this.startLineNumber <= e && e < this.endLineNumberExclusive;
    }
    toOffsetRange() {
        return new r.OffsetRange(this.startLineNumber - 1, this.endLineNumberExclusive - 1);
    }
    distanceToRange(e) {
        return this.endLineNumberExclusive <= e.startLineNumber ? e.startLineNumber - this.endLineNumberExclusive : e.endLineNumberExclusive <= this.startLineNumber ? this.startLineNumber - e.endLineNumberExclusive : 0;
    }
    distanceToLine(e) {
        return this.contains(e) ? 0 : e < this.startLineNumber ? this.startLineNumber - e : e - this.endLineNumberExclusive;
    }
    addMargin(e, t) {
        return new a(this.startLineNumber - e, this.endLineNumberExclusive + t);
    }
}
exports.LineRange = a;
class u {
    constructor(e = []){
        this._normalizedRanges = e;
    }
    get ranges() {
        return this._normalizedRanges;
    }
    addRange(e) {
        if (0 === e.length) return;
        const t = (0, o.findFirstIdxMonotonousOrArrLen)(this._normalizedRanges, (t)=>t.endLineNumberExclusive >= e.startLineNumber), n = (0, o.findLastIdxMonotonous)(this._normalizedRanges, (t)=>t.startLineNumber <= e.endLineNumberExclusive) + 1;
        if (t === n) this._normalizedRanges.splice(t, 0, e);
        else if (t === n - 1) {
            const n = this._normalizedRanges[t];
            this._normalizedRanges[t] = n.join(e);
        } else {
            const i = this._normalizedRanges[t].join(this._normalizedRanges[n - 1]).join(e);
            this._normalizedRanges.splice(t, n - t, i);
        }
    }
    contains(e) {
        const t = (0, o.findLastMonotonous)(this._normalizedRanges, (t)=>t.startLineNumber <= e);
        return !!t && t.endLineNumberExclusive > e;
    }
    intersects(e) {
        const t = (0, o.findLastMonotonous)(this._normalizedRanges, (t)=>t.startLineNumber < e.endLineNumberExclusive);
        return !!t && t.endLineNumberExclusive > e.startLineNumber;
    }
    getUnion(e) {
        if (0 === this._normalizedRanges.length) return e;
        if (0 === e._normalizedRanges.length) return this;
        const t = [];
        let n = 0, i = 0, r = null;
        for(; n < this._normalizedRanges.length || i < e._normalizedRanges.length;){
            let s = null;
            if (n < this._normalizedRanges.length && i < e._normalizedRanges.length) {
                const t = this._normalizedRanges[n], r = e._normalizedRanges[i];
                t.startLineNumber < r.startLineNumber ? (s = t, n++) : (s = r, i++);
            } else n < this._normalizedRanges.length ? (s = this._normalizedRanges[n], n++) : (s = e._normalizedRanges[i], i++);
            null === r ? r = s : r.endLineNumberExclusive >= s.startLineNumber ? r = new a(r.startLineNumber, Math.max(r.endLineNumberExclusive, s.endLineNumberExclusive)) : (t.push(r), r = s);
        }
        return null !== r && t.push(r), new u(t);
    }
    subtractFrom(e) {
        const t = (0, o.findFirstIdxMonotonousOrArrLen)(this._normalizedRanges, (t)=>t.endLineNumberExclusive >= e.startLineNumber), n = (0, o.findLastIdxMonotonous)(this._normalizedRanges, (t)=>t.startLineNumber <= e.endLineNumberExclusive) + 1;
        if (t === n) return new u([
            e
        ]);
        const i = [];
        let r = e.startLineNumber;
        for(let e = t; e < n; e++){
            const t = this._normalizedRanges[e];
            t.startLineNumber > r && i.push(new a(r, t.startLineNumber)), r = t.endLineNumberExclusive;
        }
        return r < e.endLineNumberExclusive && i.push(new a(r, e.endLineNumberExclusive)), new u(i);
    }
    toString() {
        return this._normalizedRanges.map((e)=>e.toString()).join(", ");
    }
    getIntersection(e) {
        const t = [];
        let n = 0, i = 0;
        for(; n < this._normalizedRanges.length && i < e._normalizedRanges.length;){
            const r = this._normalizedRanges[n], s = e._normalizedRanges[i], o = r.intersect(s);
            o && !o.isEmpty && t.push(o), r.endLineNumberExclusive < s.endLineNumberExclusive ? n++ : i++;
        }
        return new u(t);
    }
    getWithDelta(e) {
        return new u(this._normalizedRanges.map((t)=>t.delta(e)));
    }
}
exports.LineRangeSet = u;
