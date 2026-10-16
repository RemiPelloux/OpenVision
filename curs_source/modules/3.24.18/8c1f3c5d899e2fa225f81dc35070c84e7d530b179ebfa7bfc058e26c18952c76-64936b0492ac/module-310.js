Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.DynamicProgrammingDiffing = void 0;
const i = require("./module-991.js"), r = require("./module-933.js"), s = require("./module-891.js");
exports.DynamicProgrammingDiffing = class {
    compute(e, t, n = r.InfiniteTimeout.instance, o) {
        if (0 === e.length || 0 === t.length) return r.DiffAlgorithmResult.trivial(e, t);
        const a = new s.Array2D(e.length, t.length), u = new s.Array2D(e.length, t.length), l = new s.Array2D(e.length, t.length);
        for(let i = 0; i < e.length; i++)for(let s = 0; s < t.length; s++){
            if (!n.isValid()) return r.DiffAlgorithmResult.trivialTimedOut(e, t);
            const h = 0 === i ? 0 : a.get(i - 1, s), c = 0 === s ? 0 : a.get(i, s - 1);
            let f;
            e.getElement(i) === t.getElement(s) ? (f = 0 === i || 0 === s ? 0 : a.get(i - 1, s - 1), i > 0 && s > 0 && 3 === u.get(i - 1, s - 1) && (f += l.get(i - 1, s - 1)), f += o ? o(i, s) : 1) : f = -1;
            const d = Math.max(h, c, f);
            if (d === f) {
                const e = i > 0 && s > 0 ? l.get(i - 1, s - 1) : 0;
                l.set(i, s, e + 1), u.set(i, s, 3);
            } else d === h ? (l.set(i, s, 0), u.set(i, s, 1)) : d === c && (l.set(i, s, 0), u.set(i, s, 2));
            a.set(i, s, d);
        }
        const h = [];
        let c = e.length, f = t.length;
        function d(e, t) {
            e + 1 === c && t + 1 === f || h.push(new r.SequenceDiff(new i.OffsetRange(e + 1, c), new i.OffsetRange(t + 1, f))), c = e, f = t;
        }
        let g = e.length - 1, m = t.length - 1;
        for(; g >= 0 && m >= 0;)3 === u.get(g, m) ? (d(g, m), g--, m--) : 1 === u.get(g, m) ? g-- : m--;
        return d(-1, -1), h.reverse(), new r.DiffAlgorithmResult(h, !1);
    }
};
