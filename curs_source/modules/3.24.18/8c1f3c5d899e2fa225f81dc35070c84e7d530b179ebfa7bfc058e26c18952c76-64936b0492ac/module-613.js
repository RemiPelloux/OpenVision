Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.computeMovedLines = function(e, t, n, i, l, c) {
    let { moves: f, excludedChanges: g } = function(e, t, n, i) {
        const s = [], o = e.filter((e)=>e.modified.isEmpty && e.original.length >= 3).map((e)=>new h.LineRangeFragment(e.original, t, e)), a = new Set(e.filter((e)=>e.original.isEmpty && e.modified.length >= 3).map((e)=>new h.LineRangeFragment(e.modified, n, e))), u = new Set;
        for (const e of o){
            let t, n = -1;
            for (const i of a){
                const r = e.computeSimilarity(i);
                r > n && (n = r, t = i);
            }
            if (n > .9 && t && (a.delete(t), s.push(new r.LineRangeMapping(e.range, t.range)), u.add(e.source), u.add(t.source)), !i.isValid()) return {
                moves: s,
                excludedChanges: u
            };
        }
        return {
            moves: s,
            excludedChanges: u
        };
    }(e, t, n, c);
    if (!c.isValid()) return [];
    const m = function(e, t, n, i, l, h) {
        const c = [], f = new a.SetMap;
        for (const n of e)for(let e = n.original.startLineNumber; e < n.original.endLineNumberExclusive - 2; e++){
            const n = `${t[e - 1]}:${t[e + 1 - 1]}:${t[e + 2 - 1]}`;
            f.add(n, {
                range: new u.LineRange(e, e + 3)
            });
        }
        const g = [];
        e.sort((0, s.compareBy)((e)=>e.modified.startLineNumber, s.numberComparator));
        for (const t of e){
            let e = [];
            for(let i = t.modified.startLineNumber; i < t.modified.endLineNumberExclusive - 2; i++){
                const t = `${n[i - 1]}:${n[i + 1 - 1]}:${n[i + 2 - 1]}`, r = new u.LineRange(i, i + 3), s = [];
                f.forEach(t, ({ range: t })=>{
                    for (const n of e)if (n.originalLineRange.endLineNumberExclusive + 1 === t.endLineNumberExclusive && n.modifiedLineRange.endLineNumberExclusive + 1 === r.endLineNumberExclusive) return n.originalLineRange = new u.LineRange(n.originalLineRange.startLineNumber, t.endLineNumberExclusive), n.modifiedLineRange = new u.LineRange(n.modifiedLineRange.startLineNumber, r.endLineNumberExclusive), void s.push(n);
                    const n = {
                        modifiedLineRange: r,
                        originalLineRange: t
                    };
                    g.push(n), s.push(n);
                }), e = s;
            }
            if (!h.isValid()) return [];
        }
        g.sort((0, s.reverseOrder)((0, s.compareBy)((e)=>e.modifiedLineRange.length, s.numberComparator)));
        const m = new u.LineRangeSet, p = new u.LineRangeSet;
        for (const e of g){
            const t = e.modifiedLineRange.startLineNumber - e.originalLineRange.startLineNumber, n = m.subtractFrom(e.modifiedLineRange), i = p.subtractFrom(e.originalLineRange).getWithDelta(t), s = n.getIntersection(i);
            for (const e of s.ranges){
                if (e.length < 3) continue;
                const n = e, i = e.delta(-t);
                c.push(new r.LineRangeMapping(i, n)), m.addRange(n), p.addRange(i);
            }
        }
        c.sort((0, s.compareBy)((e)=>e.original.startLineNumber, s.numberComparator));
        const b = new o.MonotonousArray(e);
        for(let t = 0; t < c.length; t++){
            const n = c[t], s = b.findLastMonotonous((e)=>e.original.startLineNumber <= n.original.startLineNumber), a = (0, o.findLastMonotonous)(e, (e)=>e.modified.startLineNumber <= n.modified.startLineNumber), f = Math.max(n.original.startLineNumber - s.original.startLineNumber, n.modified.startLineNumber - a.modified.startLineNumber), g = b.findLastMonotonous((e)=>e.original.startLineNumber < n.original.endLineNumberExclusive), L = (0, o.findLastMonotonous)(e, (e)=>e.modified.startLineNumber < n.modified.endLineNumberExclusive), _ = Math.max(g.original.endLineNumberExclusive - n.original.endLineNumberExclusive, L.modified.endLineNumberExclusive - n.modified.endLineNumberExclusive);
            let v, E;
            for(v = 0; v < f; v++){
                const e = n.original.startLineNumber - v - 1, t = n.modified.startLineNumber - v - 1;
                if (e > i.length || t > l.length) break;
                if (m.contains(t) || p.contains(e)) break;
                if (!d(i[e - 1], l[t - 1], h)) break;
            }
            for(v > 0 && (p.addRange(new u.LineRange(n.original.startLineNumber - v, n.original.startLineNumber)), m.addRange(new u.LineRange(n.modified.startLineNumber - v, n.modified.startLineNumber))), E = 0; E < _; E++){
                const e = n.original.endLineNumberExclusive + E, t = n.modified.endLineNumberExclusive + E;
                if (e > i.length || t > l.length) break;
                if (m.contains(t) || p.contains(e)) break;
                if (!d(i[e - 1], l[t - 1], h)) break;
            }
            E > 0 && (p.addRange(new u.LineRange(n.original.endLineNumberExclusive, n.original.endLineNumberExclusive + E)), m.addRange(new u.LineRange(n.modified.endLineNumberExclusive, n.modified.endLineNumberExclusive + E))), (v > 0 || E > 0) && (c[t] = new r.LineRangeMapping(new u.LineRange(n.original.startLineNumber - v, n.original.endLineNumberExclusive + E), new u.LineRange(n.modified.startLineNumber - v, n.modified.endLineNumberExclusive + E)));
        }
        return c;
    }(e.filter((e)=>!g.has(e)), i, l, t, n, c);
    return (0, s.pushMany)(f, m), f = function(e) {
        if (0 === e.length) return e;
        e.sort((0, s.compareBy)((e)=>e.original.startLineNumber, s.numberComparator));
        const t = [
            e[0]
        ];
        for(let n = 1; n < e.length; n++){
            const i = t[t.length - 1], r = e[n], s = r.original.startLineNumber - i.original.endLineNumberExclusive, o = r.modified.startLineNumber - i.modified.endLineNumberExclusive;
            s >= 0 && o >= 0 && s + o <= 2 ? t[t.length - 1] = i.join(r) : t.push(r);
        }
        return t;
    }(f), f = f.filter((e)=>{
        const n = e.original.toOffsetRange().slice(t).map((e)=>e.trim());
        return n.join("\n").length >= 15 && function(e, t) {
            let n = 0;
            for (const i of e)t(i) && n++;
            return n;
        }(n, (e)=>e.length >= 2) >= 2;
    }), f = function(e, t) {
        const n = new o.MonotonousArray(e);
        return t = t.filter((t)=>(n.findLastMonotonous((e)=>e.original.startLineNumber < t.original.endLineNumberExclusive) || new r.LineRangeMapping(new u.LineRange(1, 1), new u.LineRange(1, 1))) !== (0, o.findLastMonotonous)(e, (e)=>e.modified.startLineNumber < t.modified.endLineNumberExclusive));
    }(e, f), f;
};
const i = require("./module-933.js"), r = require("./module-90.js"), s = require("./module-501.js"), o = require("./module-270.js"), a = require("./module-281.js"), u = require("./module-496.js"), l = require("./module-62.js"), h = require("./module-891.js"), c = require("./module-175.js"), f = require("./module-298.js");
function d(e, t, n) {
    if (e.trim() === t.trim()) return !0;
    if (e.length > 300 && t.length > 300) return !1;
    const r = (new c.MyersDiffAlgorithm).compute(new l.LinesSliceCharSequence([
        e
    ], new f.Range(1, 1, 1, e.length), !1), new l.LinesSliceCharSequence([
        t
    ], new f.Range(1, 1, 1, t.length), !1), n);
    let s = 0;
    const o = i.SequenceDiff.invert(r.diffs, e.length);
    for (const t of o)t.seq1Range.forEach((t)=>{
        (0, h.isSpace)(e.charCodeAt(t)) || s++;
    });
    const a = function(t) {
        let n = 0;
        for(let i = 0; i < e.length; i++)(0, h.isSpace)(t.charCodeAt(i)) || n++;
        return n;
    }(e.length > t.length ? e : t);
    return s / a > .6 && a > 10;
}
