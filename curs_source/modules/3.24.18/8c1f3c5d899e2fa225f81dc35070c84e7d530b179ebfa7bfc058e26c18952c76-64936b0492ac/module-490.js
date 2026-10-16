Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.DefaultLinesDiffComputer = void 0;
const i = require("./module-620.js"), r = require("./module-501.js"), s = require("./module-141.js"), o = require("./module-496.js"), a = require("./module-991.js"), u = require("./module-298.js"), l = require("./module-768.js"), h = require("./module-306.js"), c = require("./module-90.js"), f = require("./module-933.js"), d = require("./module-310.js"), g = require("./module-175.js"), m = require("./module-613.js"), p = require("./module-841.js"), b = require("./module-187.js"), L = require("./module-62.js");
exports.DefaultLinesDiffComputer = class {
    constructor(){
        this.dynamicProgrammingDiffing = new d.DynamicProgrammingDiffing, this.myersDiffingAlgorithm = new g.MyersDiffAlgorithm, this.streamingDPDiffing = new i.StreamingDPDiffing;
    }
    computeDiff(e, t, n) {
        if (0 === e.length && 0 === t.length) return new h.LinesDiff([], [], !1);
        if (0 === e.length) return new h.LinesDiff([
            new c.DetailedLineRangeMapping(new o.LineRange(1, 1), new o.LineRange(1, t.length + 1), void 0)
        ], [], !1);
        if (0 === t.length) return new h.LinesDiff([
            new c.DetailedLineRangeMapping(new o.LineRange(1, e.length + 1), new o.LineRange(1, 1), void 0)
        ], [], !1);
        if (e.length <= 1 && (0, r.equals)(e, t, (e, t)=>e === t)) return new h.LinesDiff([], [], !1);
        if (1 === e.length && 0 === e[0].length || 1 === t.length && 0 === t[0].length) return new h.LinesDiff([
            new c.DetailedLineRangeMapping(new o.LineRange(1, e.length + 1), new o.LineRange(1, t.length + 1), [
                new c.RangeMapping(new u.Range(1, 1, e.length, e[e.length - 1].length + 1), new u.Range(1, 1, t.length, t[t.length - 1].length + 1))
            ])
        ], [], !1);
        const i = 0 === n.maxComputationTimeMs ? f.InfiniteTimeout.instance : new f.DateTimeout(n.maxComputationTimeMs, n.shouldGracefullyFallBackOnTimeout), d = !n.ignoreTrimWhitespace, g = new Map;
        function m(e) {
            let t = g.get(e);
            return void 0 === t && (t = g.size, g.set(e, t)), t;
        }
        const L = e.length * t.length < 1e6 && !0 === n.onlyCareAboutPrefixOfOriginalLines, _ = (e)=>{
            const t = [];
            for (const n of e){
                if (!i.isValid()) return;
                t.push(m(L ? n : n.trim()));
            }
            return t;
        }, v = _(e), E = v && _(t);
        if (!v || !E) return new h.LinesDiff([
            new c.DetailedLineRangeMapping(new o.LineRange(1, e.length + 1), new o.LineRange(1, t.length + 1), [
                new c.RangeMapping(new u.Range(1, 1, e.length, e[e.length - 1].length + 1), new u.Range(1, 1, t.length, t[t.length - 1].length + 1))
            ])
        ], [], !0);
        const w = e.every((e)=>0 === e.trim().length), y = new b.LineSequence(v, e), N = new b.LineSequence(E, t), R = (()=>L ? w ? f.DiffAlgorithmResult.trivial(y, N) : this.streamingDPDiffing.compute(y, N, i, (n, i)=>e[n] === t[i] ? 0 === t[i].length ? .1 : 1 + Math.log(1 + t[i].length) : .99) : y.length + N.length < 1700 ? this.dynamicProgrammingDiffing.compute(y, N, i, (n, i)=>e[n] === t[i] ? 0 === t[i].length ? .1 : 1 + Math.log(1 + t[i].length) : .99) : this.myersDiffingAlgorithm.compute(y, N, i))();
        let C = R.diffs, x = R.hitTimeout;
        if (L) {
            const e = C.map((e)=>new c.DetailedLineRangeMapping(new o.LineRange(e.seq1Range.start + 1, e.seq1Range.endExclusive + 1), new o.LineRange(e.seq2Range.start + 1, e.seq2Range.endExclusive + 1), void 0));
            return new h.LinesDiff(e, [], x);
        }
        const S = x;
        if (C = (0, p.optimizeSequenceDiffs)(y, N, C), C = (0, p.removeVeryShortMatchingLinesBetweenDiffs)(y, N, C), n.skipDiffRefinement || !0 === n.shouldGracefullyFallBackOnTimeout && x) {
            const e = C.map((e)=>new c.DetailedLineRangeMapping(new o.LineRange(e.seq1Range.start + 1, e.seq1Range.endExclusive + 1), new o.LineRange(e.seq2Range.start + 1, e.seq2Range.endExclusive + 1), void 0));
            return new h.LinesDiff(e, [], x);
        }
        const D = [], A = (r)=>{
            if (d) for(let s = 0; s < r; s++){
                const r = M + s, o = O + s;
                if (e[r] !== t[o]) {
                    const s = this.refineDiff(e, t, new f.SequenceDiff(new a.OffsetRange(r, r + 1), new a.OffsetRange(o, o + 1)), i, d, n);
                    for (const e of s.mappings)D.push(e);
                    s.hitTimeout && (x = !0);
                }
            }
        };
        let M = 0, O = 0;
        for (const r of C){
            if (!0 === n.shouldGracefullyFallBackOnTimeout && x) {
                const e = C.map((e)=>new c.DetailedLineRangeMapping(new o.LineRange(e.seq1Range.start + 1, e.seq1Range.endExclusive + 1), new o.LineRange(e.seq2Range.start + 1, e.seq2Range.endExclusive + 1), void 0));
                return new h.LinesDiff(e, [], S);
            }
            (0, s.assertFn)(()=>r.seq1Range.start - M === r.seq2Range.start - O);
            A(r.seq1Range.start - M), M = r.seq1Range.endExclusive, O = r.seq2Range.endExclusive;
            const a = this.refineDiff(e, t, r, i, d, n);
            a.hitTimeout && (x = !0);
            for (const e of a.mappings)D.push(e);
        }
        A(e.length - M);
        const P = (0, c.lineRangeMappingFromRangeMappings)(D, new l.ArrayText(e), new l.ArrayText(t));
        let T = [];
        if (n.computeMoves && (T = this.computeMoves(P, e, t, v, E, i, d, n)), (0, s.assertFn)(()=>{
            function n(e, t) {
                if (e.lineNumber < 1 || e.lineNumber > t.length) return !1;
                const n = t[e.lineNumber - 1];
                return !(e.column < 1 || e.column > n.length + 1);
            }
            function i(e, t) {
                return !(e.startLineNumber < 1 || e.startLineNumber > t.length + 1) && !(e.endLineNumberExclusive < 1 || e.endLineNumberExclusive > t.length + 1);
            }
            for (const r of P){
                if (!r.innerChanges) return !1;
                for (const i of r.innerChanges){
                    if (!(n(i.modifiedRange.getStartPosition(), t) && n(i.modifiedRange.getEndPosition(), t) && n(i.originalRange.getStartPosition(), e) && n(i.originalRange.getEndPosition(), e))) return !1;
                }
                if (!i(r.modified, t) || !i(r.original, e)) return !1;
            }
            return !0;
        }), !0 === n.shouldGracefullyFallBackOnTimeout && x && !S) {
            const e = C.map((e)=>new c.DetailedLineRangeMapping(new o.LineRange(e.seq1Range.start + 1, e.seq1Range.endExclusive + 1), new o.LineRange(e.seq2Range.start + 1, e.seq2Range.endExclusive + 1), void 0));
            return new h.LinesDiff(e, [], S);
        }
        return new h.LinesDiff(P, T, x);
    }
    computeMoves(e, t, n, i, r, s, o, a) {
        return (0, m.computeMovedLines)(e, t, n, i, r, s).map((e)=>{
            const i = this.refineDiff(t, n, new f.SequenceDiff(e.original.toOffsetRange(), e.modified.toOffsetRange()), s, o, a), r = (0, c.lineRangeMappingFromRangeMappings)(i.mappings, new l.ArrayText(t), new l.ArrayText(n), !0);
            return new h.MovedText(e, r);
        });
    }
    refineDiff(e, t, n, i, r, s) {
        var a;
        const u = (a = n, new c.LineRangeMapping(new o.LineRange(a.seq1Range.start + 1, a.seq1Range.endExclusive + 1), new o.LineRange(a.seq2Range.start + 1, a.seq2Range.endExclusive + 1))).toRangeMapping2(e, t), l = new L.LinesSliceCharSequence(e, u.originalRange, r), h = new L.LinesSliceCharSequence(t, u.modifiedRange, r), f = l.length + h.length < 500 ? this.dynamicProgrammingDiffing.compute(l, h, i) : this.myersDiffingAlgorithm.compute(l, h, i), d = !1;
        let g = f.diffs;
        g = (0, p.optimizeSequenceDiffs)(l, h, g), g = (0, p.extendDiffsToEntireWordIfAppropriate)(l, h, g, (e, t)=>e.findWordContaining(t)), s.extendToSubwords && (g = (0, p.extendDiffsToEntireWordIfAppropriate)(l, h, g, (e, t)=>e.findSubWordContaining(t), !0)), g = (0, p.removeShortMatches)(l, h, g), g = (0, p.removeVeryShortMatchingTextBetweenLongDiffs)(l, h, g);
        const m = g.map((e)=>new c.RangeMapping(l.translateRange(e.seq1Range), h.translateRange(e.seq2Range)));
        return {
            mappings: m,
            hitTimeout: f.hitTimeout
        };
    }
};
