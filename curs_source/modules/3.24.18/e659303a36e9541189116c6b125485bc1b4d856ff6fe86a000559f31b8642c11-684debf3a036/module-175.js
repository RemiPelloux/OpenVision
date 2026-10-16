Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.MyersDiffAlgorithm = void 0;
const i = require("./module-991.js"), r = require("./module-933.js");
exports.MyersDiffAlgorithm = class {
    compute(e, t, n = r.InfiniteTimeout.instance) {
        if (0 === e.length || 0 === t.length) return r.DiffAlgorithmResult.trivial(e, t);
        const u = e, l = t;
        function h(e, t) {
            for(; e < u.length && t < l.length && u.getElement(e) === l.getElement(t);)e++, t++;
            return e;
        }
        let c = 0;
        const f = new o;
        f.set(0, h(0, 0));
        const d = new a;
        d.set(0, 0 === f.get(0) ? null : new s(null, 0, 0, f.get(0)));
        let g = 0;
        e: for(;;){
            if (c++, !n.isValid()) return r.DiffAlgorithmResult.trivialTimedOut(u, l);
            const e = -Math.min(c, l.length + c % 2), t = Math.min(c, u.length + c % 2);
            for(g = e; g <= t; g += 2){
                if (!n.isValid()) return r.DiffAlgorithmResult.trivialTimedOut(u, l);
                let i = 0;
                const o = g === t ? -1 : f.get(g + 1), a = g === e ? -1 : f.get(g - 1) + 1;
                i++;
                const c = Math.min(Math.max(o, a), u.length), m = c - g;
                if (i++, c > u.length || m > l.length) continue;
                const p = h(c, m);
                f.set(g, p);
                const b = c === o ? d.get(g + 1) : d.get(g - 1);
                if (d.set(g, p !== c ? new s(b, c, m, p - c) : b), f.get(g) === u.length && f.get(g) - g === l.length) break e;
            }
        }
        let m = d.get(g);
        const p = [];
        let b = u.length, L = l.length;
        for(;;){
            const e = m ? m.x + m.length : 0, t = m ? m.y + m.length : 0;
            if (e === b && t === L || p.push(new r.SequenceDiff(new i.OffsetRange(e, b), new i.OffsetRange(t, L))), !m) break;
            b = m.x, L = m.y, m = m.prev;
        }
        return p.reverse(), new r.DiffAlgorithmResult(p, !1);
    }
};
class s {
    constructor(e, t, n, i){
        this.prev = e, this.x = t, this.y = n, this.length = i;
    }
}
class o {
    constructor(){
        this.positiveArr = new Int32Array(10), this.negativeArr = new Int32Array(10);
    }
    get(e) {
        return e < 0 ? (e = -e - 1, this.negativeArr[e]) : this.positiveArr[e];
    }
    set(e, t) {
        if (e < 0) {
            if ((e = -e - 1) >= this.negativeArr.length) {
                const e = this.negativeArr;
                this.negativeArr = new Int32Array(2 * e.length), this.negativeArr.set(e);
            }
            this.negativeArr[e] = t;
        } else {
            if (e >= this.positiveArr.length) {
                const e = this.positiveArr;
                this.positiveArr = new Int32Array(2 * e.length), this.positiveArr.set(e);
            }
            this.positiveArr[e] = t;
        }
    }
}
class a {
    constructor(){
        this.positiveArr = [], this.negativeArr = [];
    }
    get(e) {
        return e < 0 ? (e = -e - 1, this.negativeArr[e]) : this.positiveArr[e];
    }
    set(e, t) {
        e < 0 ? (e = -e - 1, this.negativeArr[e] = t) : this.positiveArr[e] = t;
    }
}
