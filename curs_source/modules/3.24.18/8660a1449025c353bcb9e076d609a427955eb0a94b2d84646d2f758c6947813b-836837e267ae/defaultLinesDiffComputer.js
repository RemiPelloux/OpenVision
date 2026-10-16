import { Zm, xde } from "./Iwo.js";
import { bo } from "./arrays.js";
import { YE } from "./assert.js";
import { YNy } from "./computeMovedLines.js";
import { aB, bqd, iRe, noi, rvn } from "./diffAlgorithm.js";
import { HNy, Sqd } from "./dynamicProgrammingDiffing.js";
import { Nqd } from "./heuristicSequenceOptimizations.js";
import { DD, wd } from "./lineRange.js";
import { tLy, zGo } from "./lineSequence.js";
import { HGo, OQ, ioi } from "./linesDiffComputer.js";
import { Aqd, roi } from "./linesSliceCharSequence.js";
import { Cqd, WGo } from "./myersDiffAlgorithm.js";
import { Im, W3 } from "./offsetRange.js";
import { Qs, qt } from "./range.js";
import { I7, Swe, ane } from "./rangeMapping.js";
import { $Ny, yqd } from "./streamingDPDiffing.js";
import { LQ, eoi } from "./textEdit.js";
import { E } from "./tslib.es6.js";
import { Dqd, JNy, WNy, ZNy, eLy, mTr, nLy, qGo } from "./ze.js";
var ATr;
export { ATr };
var __wakaru_VGo_initialized = false;
export function VGo() {
if (__wakaru_VGo_initialized) return;
__wakaru_VGo_initialized = true;
"use strict";
E(), $Ny(), bo(), YE(), DD(), W3(), Qs(), LQ(), ioi(), Swe(), rvn(), HNy(), Cqd(), YNy(), Nqd(), tLy(), Aqd(), ATr = class {
    constructor(){
        this.dynamicProgrammingDiffing = new Sqd, this.myersDiffingAlgorithm = new WGo, this.streamingDPDiffing = new yqd;
    }
    computeDiff(t, e, n) {
        if (t.length === 0 && e.length === 0) return new OQ([], [], !1);
        if (t.length === 0) return new OQ([
            new I7(new wd(1, 1), new wd(1, e.length + 1), void 0)
        ], [], !1);
        if (e.length === 0) return new OQ([
            new I7(new wd(1, t.length + 1), new wd(1, 1), void 0)
        ], [], !1);
        if (t.length <= 1 && Zm(t, e, (A, P)=>A === P)) return new OQ([], [], !1);
        if (t.length === 1 && t[0].length === 0 || e.length === 1 && e[0].length === 0) return new OQ([
            new I7(new wd(1, t.length + 1), new wd(1, e.length + 1), [
                new ane(new qt(1, 1, t.length, t[t.length - 1].length + 1), new qt(1, 1, e.length, e[e.length - 1].length + 1))
            ])
        ], [], !1);
        const i = n.maxComputationTimeMs === 0 ? noi.instance : new bqd(n.maxComputationTimeMs, n.shouldGracefullyFallBackOnTimeout), r = !n.ignoreTrimWhitespace, s = new Map;
        function o(A) {
            let P = s.get(A);
            return P === void 0 && (P = s.size, s.set(A, P)), P;
        }
        const a = t.length * e.length < 1e6 && n.onlyCareAboutPrefixOfOriginalLines === !0, l = (A)=>{
            const P = [];
            for (const M of A){
                if (!i.isValid()) return;
                P.push(o(a ? M : M.trim()));
            }
            return P;
        }, c = l(t), u = c && l(e);
        if (!c || !u) return new OQ([
            new I7(new wd(1, t.length + 1), new wd(1, e.length + 1), [
                new ane(new qt(1, 1, t.length, t[t.length - 1].length + 1), new qt(1, 1, e.length, e[e.length - 1].length + 1))
            ])
        ], [], !0);
        const d = t.every((A)=>A.trim().length === 0), h = new zGo(c, t), p = new zGo(u, e), g = a ? d ? iRe.trivial(h, p) : this.streamingDPDiffing.compute(h, p, i, (A, P)=>t[A] === e[P] ? e[P].length === 0 ? .1 : 1 + Math.log(1 + e[P].length) : .99) : h.length + p.length < 1700 ? this.dynamicProgrammingDiffing.compute(h, p, i, (A, P)=>t[A] === e[P] ? e[P].length === 0 ? .1 : 1 + Math.log(1 + e[P].length) : .99) : this.myersDiffingAlgorithm.compute(h, p, i);
        let f = g.diffs, _ = g.hitTimeout;
        if (a) {
            const A = f.map((P)=>new I7(new wd(P.seq1Range.start + 1, P.seq1Range.endExclusive + 1), new wd(P.seq2Range.start + 1, P.seq2Range.endExclusive + 1), void 0));
            return new OQ(A, [], _);
        }
        const b = _;
        if (f = qGo(h, p, f), f = JNy(h, p, f), n.skipDiffRefinement || n.shouldGracefullyFallBackOnTimeout === !0 && _) {
            const A = f.map((P)=>new I7(new wd(P.seq1Range.start + 1, P.seq1Range.endExclusive + 1), new wd(P.seq2Range.start + 1, P.seq2Range.endExclusive + 1), void 0));
            return new OQ(A, [], _);
        }
        const y = [], S = (A)=>{
            if (r) for(let P = 0; P < A; P++){
                const M = k + P, O = C + P;
                if (t[M] !== e[O]) {
                    const N = this.refineDiff(t, e, new aB(new Im(M, M + 1), new Im(O, O + 1)), i, r, n);
                    for (const U of N.mappings)y.push(U);
                    N.hitTimeout && (_ = !0);
                }
            }
        };
        let k = 0, C = 0;
        for (const A of f){
            if (n.shouldGracefullyFallBackOnTimeout === !0 && _) {
                const O = f.map((N)=>new I7(new wd(N.seq1Range.start + 1, N.seq1Range.endExclusive + 1), new wd(N.seq2Range.start + 1, N.seq2Range.endExclusive + 1), void 0));
                return new OQ(O, [], b);
            }
            xde(()=>A.seq1Range.start - k === A.seq2Range.start - C);
            const P = A.seq1Range.start - k;
            S(P), k = A.seq1Range.endExclusive, C = A.seq2Range.endExclusive;
            const M = this.refineDiff(t, e, A, i, r, n);
            M.hitTimeout && (_ = !0);
            for (const O of M.mappings)y.push(O);
        }
        S(t.length - k);
        const T = mTr(y, new eoi(t), new eoi(e));
        let I = [];
        if (n.computeMoves && (I = this.computeMoves(T, t, e, c, u, i, r, n)), xde(()=>{
            function A(M, O) {
                if (M.lineNumber < 1 || M.lineNumber > O.length) return !1;
                const N = O[M.lineNumber - 1];
                return !(M.column < 1 || M.column > N.length + 1);
            }
            function P(M, O) {
                return !(M.startLineNumber < 1 || M.startLineNumber > O.length + 1 || M.endLineNumberExclusive < 1 || M.endLineNumberExclusive > O.length + 1);
            }
            for (const M of T){
                if (!M.innerChanges) return !1;
                for (const O of M.innerChanges)if (!(A(O.modifiedRange.getStartPosition(), e) && A(O.modifiedRange.getEndPosition(), e) && A(O.originalRange.getStartPosition(), t) && A(O.originalRange.getEndPosition(), t))) return !1;
                if (!P(M.modified, e) || !P(M.original, t)) return !1;
            }
            return !0;
        }), n.shouldGracefullyFallBackOnTimeout === !0 && _ && !b) {
            const A = f.map((P)=>new I7(new wd(P.seq1Range.start + 1, P.seq1Range.endExclusive + 1), new wd(P.seq2Range.start + 1, P.seq2Range.endExclusive + 1), void 0));
            return new OQ(A, [], b);
        }
        return new OQ(T, I, _);
    }
    computeMoves(t, e, n, i, r, s, o, a) {
        return WNy(t, e, n, i, r, s).map((u)=>{
            const d = this.refineDiff(e, n, new aB(u.original.toOffsetRange(), u.modified.toOffsetRange()), s, o, a), h = mTr(d.mappings, new eoi(e), new eoi(n), !0);
            return new HGo(u, h);
        });
    }
    refineDiff(t, e, n, i, r, s) {
        const a = nLy(n).toRangeMapping2(t, e), l = new roi(t, a.originalRange, r), c = new roi(e, a.modifiedRange, r), u = l.length + c.length < 500 ? this.dynamicProgrammingDiffing.compute(l, c, i) : this.myersDiffingAlgorithm.compute(l, c, i), d = !1;
        let h = u.diffs;
        d && aB.assertSorted(h), h = qGo(l, c, h), d && aB.assertSorted(h), h = Dqd(l, c, h, (g, f)=>g.findWordContaining(f)), d && aB.assertSorted(h), s.extendToSubwords && (h = Dqd(l, c, h, (g, f)=>g.findSubWordContaining(f), !0), d && aB.assertSorted(h)), h = ZNy(l, c, h), d && aB.assertSorted(h), h = eLy(l, c, h), d && aB.assertSorted(h);
        const p = h.map((g)=>new ane(l.translateRange(g.seq1Range), c.translateRange(g.seq2Range)));
        return d && ane.assertSorted(p), {
            mappings: p,
            hitTimeout: u.hitTimeout
        };
    }
};

}
