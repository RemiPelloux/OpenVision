import { nh, rJ } from "./HVr.js";
import { dr } from "./arrays.js";
import { C0 } from "./assert.js";
import { tSg } from "./computeMovedLines.js";
import { AFt, PO, Yge, j8c, xvn } from "./diffAlgorithm.js";
import { Kyg, z8c } from "./dynamicProgrammingDiffing.js";
import { o7c } from "./heuristicSequenceOptimizations.js";
import { Vl, hA } from "./lineRange.js";
import { Hns, aSg } from "./lineSequence.js";
import { Fns, Ivn, SW } from "./linesDiffComputer.js";
import { Avn, t7c } from "./linesSliceCharSequence.js";
import { Bns, X8c } from "./myersDiffAlgorithm.js";
import { Mh, uR } from "./offsetRange.js";
import { $ns, Wbi, Yyg, cSg, iSg, oSg, s7c, sSg } from "./qIc.js";
import { dt, qi } from "./range.js";
import { C3, KV, Ple } from "./rangeMapping.js";
import { q8c, zyg } from "./streamingDPDiffing.js";
import { wvn, yW } from "./textEdit.js";
import { x } from "./tslib.es6.js";
var tyi;
export { tyi };
var __wakaru_Wns_initialized = false;
export function Wns() {
if (__wakaru_Wns_initialized) return;
__wakaru_Wns_initialized = true;
"use strict";
x(), zyg(), dr(), C0(), hA(), uR(), qi(), yW(), Ivn(), Ple(), AFt(), Kyg(), X8c(), tSg(), o7c(), aSg(), t7c(), tyi = class {
    constructor(){
        this.dynamicProgrammingDiffing = new z8c, this.myersDiffingAlgorithm = new Bns, this.streamingDPDiffing = new q8c;
    }
    computeDiff(e, t, n) {
        if (e.length === 0 && t.length === 0) return new SW([], [], !1);
        if (e.length === 0) return new SW([
            new C3(new Vl(1, 1), new Vl(1, t.length + 1), void 0)
        ], [], !1);
        if (t.length === 0) return new SW([
            new C3(new Vl(1, e.length + 1), new Vl(1, 1), void 0)
        ], [], !1);
        if (e.length <= 1 && nh(e, t, (N, O)=>N === O)) return new SW([], [], !1);
        if (e.length === 1 && e[0].length === 0 || t.length === 1 && t[0].length === 0) return new SW([
            new C3(new Vl(1, e.length + 1), new Vl(1, t.length + 1), [
                new KV(new dt(1, 1, e.length, e[e.length - 1].length + 1), new dt(1, 1, t.length, t[t.length - 1].length + 1))
            ])
        ], [], !1);
        const i = n.maxComputationTimeMs === 0 ? xvn.instance : new j8c(n.maxComputationTimeMs, n.shouldGracefullyFallBackOnTimeout), r = !n.ignoreTrimWhitespace, s = new Map;
        function o(N) {
            let O = s.get(N);
            return O === void 0 && (O = s.size, s.set(N, O)), O;
        }
        const a = e.length * t.length < 1e6 && n.onlyCareAboutPrefixOfOriginalLines === !0, c = (N)=>{
            const O = [];
            for (const F of N){
                if (!i.isValid()) return;
                O.push(o(a ? F : F.trim()));
            }
            return O;
        }, l = c(e), u = l && c(t);
        if (!l || !u) return new SW([
            new C3(new Vl(1, e.length + 1), new Vl(1, t.length + 1), [
                new KV(new dt(1, 1, e.length, e[e.length - 1].length + 1), new dt(1, 1, t.length, t[t.length - 1].length + 1))
            ])
        ], [], !0);
        const h = e.every((N)=>N.trim().length === 0), p = new Hns(l, e), g = new Hns(u, t), f = a ? h ? Yge.trivial(p, g) : this.streamingDPDiffing.compute(p, g, i, (N, O)=>e[N] === t[O] ? t[O].length === 0 ? .1 : 1 + Math.log(1 + t[O].length) : .99) : p.length + g.length < 1700 ? this.dynamicProgrammingDiffing.compute(p, g, i, (N, O)=>e[N] === t[O] ? t[O].length === 0 ? .1 : 1 + Math.log(1 + t[O].length) : .99) : this.myersDiffingAlgorithm.compute(p, g, i);
        let v = f.diffs, b = f.hitTimeout;
        if (a) {
            const N = v.map((O)=>new C3(new Vl(O.seq1Range.start + 1, O.seq1Range.endExclusive + 1), new Vl(O.seq2Range.start + 1, O.seq2Range.endExclusive + 1), void 0));
            return new SW(N, [], b);
        }
        const y = b;
        if (v = $ns(p, g, v), v = sSg(p, g, v), n.skipDiffRefinement || n.shouldGracefullyFallBackOnTimeout === !0 && b) {
            const N = v.map((O)=>new C3(new Vl(O.seq1Range.start + 1, O.seq1Range.endExclusive + 1), new Vl(O.seq2Range.start + 1, O.seq2Range.endExclusive + 1), void 0));
            return new SW(N, [], b);
        }
        const T = [], E = (N)=>{
            if (r) for(let O = 0; O < N; O++){
                const F = A + O, H = R + O;
                if (e[F] !== t[H]) {
                    const $ = this.refineDiff(e, t, new PO(new Mh(F, F + 1), new Mh(H, H + 1)), i, r, n);
                    for (const W of $.mappings)T.push(W);
                    $.hitTimeout && (b = !0);
                }
            }
        };
        let A = 0, R = 0;
        for (const N of v){
            if (n.shouldGracefullyFallBackOnTimeout === !0 && b) {
                const H = v.map(($)=>new C3(new Vl($.seq1Range.start + 1, $.seq1Range.endExclusive + 1), new Vl($.seq2Range.start + 1, $.seq2Range.endExclusive + 1), void 0));
                return new SW(H, [], y);
            }
            rJ(()=>N.seq1Range.start - A === N.seq2Range.start - R);
            const O = N.seq1Range.start - A;
            E(O), A = N.seq1Range.endExclusive, R = N.seq2Range.endExclusive;
            const F = this.refineDiff(e, t, N, i, r, n);
            F.hitTimeout && (b = !0);
            for (const H of F.mappings)T.push(H);
        }
        E(e.length - A);
        const D = Wbi(T, new wvn(e), new wvn(t));
        let P = [];
        if (n.computeMoves && (P = this.computeMoves(D, e, t, l, u, i, r, n)), rJ(()=>{
            function N(F, H) {
                if (F.lineNumber < 1 || F.lineNumber > H.length) return !1;
                const $ = H[F.lineNumber - 1];
                return !(F.column < 1 || F.column > $.length + 1);
            }
            function O(F, H) {
                return !(F.startLineNumber < 1 || F.startLineNumber > H.length + 1 || F.endLineNumberExclusive < 1 || F.endLineNumberExclusive > H.length + 1);
            }
            for (const F of D){
                if (!F.innerChanges) return !1;
                for (const H of F.innerChanges)if (!(N(H.modifiedRange.getStartPosition(), t) && N(H.modifiedRange.getEndPosition(), t) && N(H.originalRange.getStartPosition(), e) && N(H.originalRange.getEndPosition(), e))) return !1;
                if (!O(F.modified, t) || !O(F.original, e)) return !1;
            }
            return !0;
        }), n.shouldGracefullyFallBackOnTimeout === !0 && b && !y) {
            const N = v.map((O)=>new C3(new Vl(O.seq1Range.start + 1, O.seq1Range.endExclusive + 1), new Vl(O.seq2Range.start + 1, O.seq2Range.endExclusive + 1), void 0));
            return new SW(N, [], y);
        }
        return new SW(D, P, b);
    }
    computeMoves(e, t, n, i, r, s, o, a) {
        return Yyg(e, t, n, i, r, s).map((u)=>{
            const h = this.refineDiff(t, n, new PO(u.original.toOffsetRange(), u.modified.toOffsetRange()), s, o, a), p = Wbi(h.mappings, new wvn(t), new wvn(n), !0);
            return new Fns(u, p);
        });
    }
    refineDiff(e, t, n, i, r, s) {
        const a = cSg(n).toRangeMapping2(e, t), c = new Avn(e, a.originalRange, r), l = new Avn(t, a.modifiedRange, r), u = c.length + l.length < 500 ? this.dynamicProgrammingDiffing.compute(c, l, i) : this.myersDiffingAlgorithm.compute(c, l, i), h = !1;
        let p = u.diffs;
        h && PO.assertSorted(p), p = $ns(c, l, p), h && PO.assertSorted(p), p = s7c(c, l, p, (f, v)=>f.findWordContaining(v)), h && PO.assertSorted(p), s.extendToSubwords && (p = s7c(c, l, p, (f, v)=>f.findSubWordContaining(v), !0), h && PO.assertSorted(p)), p = iSg(c, l, p), h && PO.assertSorted(p), p = oSg(c, l, p), h && PO.assertSorted(p);
        const g = p.map((f)=>new KV(c.translateRange(f.seq1Range), l.translateRange(f.seq2Range)));
        return h && KV.assertSorted(g), {
            mappings: g,
            hitTimeout: u.hitTimeout
        };
    }
};

}
