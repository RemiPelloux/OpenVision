Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.optimizeSequenceDiffs = function(e, t, n) {
    let i = n;
    return i = o(e, t, i), i = o(e, t, i), i = function(e, t, n) {
        if (!e.getBoundaryScore || !t.getBoundaryScore) return n;
        for(let i = 0; i < n.length; i++){
            const s = i > 0 ? n[i - 1] : void 0, o = n[i], u = i + 1 < n.length ? n[i + 1] : void 0, l = new r.OffsetRange(s ? s.seq1Range.endExclusive + 1 : 0, u ? u.seq1Range.start - 1 : e.length), h = new r.OffsetRange(s ? s.seq2Range.endExclusive + 1 : 0, u ? u.seq2Range.start - 1 : t.length);
            o.seq1Range.isEmpty ? n[i] = a(o, e, t, l, h) : o.seq2Range.isEmpty && (n[i] = a(o.swap(), t, e, h, l).swap());
        }
        return n;
    }(e, t, i), i;
}, exports.removeShortMatches = function(e, t, n) {
    const i = [];
    for (const e of n){
        const t = i[i.length - 1];
        t ? e.seq1Range.start - t.seq1Range.endExclusive <= 2 || e.seq2Range.start - t.seq2Range.endExclusive <= 2 ? i[i.length - 1] = new s.SequenceDiff(t.seq1Range.join(e.seq1Range), t.seq2Range.join(e.seq2Range)) : i.push(e) : i.push(e);
    }
    return i;
}, exports.extendDiffsToEntireWordIfAppropriate = function(e, t, n, i, r = !1) {
    const o = s.SequenceDiff.invert(n, e.length), a = [];
    let u = new s.OffsetPair(0, 0);
    function l(n, l) {
        if (n.offset1 < u.offset1 || n.offset2 < u.offset2) return;
        const h = i(e, n.offset1), c = i(t, n.offset2);
        if (!h || !c) return;
        let f = new s.SequenceDiff(h, c);
        const d = f.intersect(l);
        let g = d.seq1Range.length, m = d.seq2Range.length;
        for(; o.length > 0;){
            const n = o[0];
            if (!(n.seq1Range.intersects(f.seq1Range) || n.seq2Range.intersects(f.seq2Range))) break;
            const r = i(e, n.seq1Range.start), a = i(t, n.seq2Range.start), u = new s.SequenceDiff(r, a), l = u.intersect(n);
            if (g += l.seq1Range.length, m += l.seq2Range.length, f = f.join(u), !(f.seq1Range.endExclusive >= n.seq1Range.endExclusive)) break;
            o.shift();
        }
        (r && g + m < f.seq1Range.length + f.seq2Range.length || g + m < 2 * (f.seq1Range.length + f.seq2Range.length) / 3) && a.push(f), u = f.getEndExclusives();
    }
    for(; o.length > 0;){
        const e = o.shift();
        e.seq1Range.isEmpty || (l(e.getStarts(), e), l(e.getEndExclusives().delta(-1), e));
    }
    return function(e, t) {
        const n = [];
        for(; e.length > 0 || t.length > 0;){
            const i = e[0], r = t[0];
            let s;
            s = i && (!r || i.seq1Range.start < r.seq1Range.start) ? e.shift() : t.shift(), n.length > 0 && n[n.length - 1].seq1Range.endExclusive >= s.seq1Range.start ? n[n.length - 1] = n[n.length - 1].join(s) : n.push(s);
        }
        return n;
    }(n, a);
}, exports.removeVeryShortMatchingLinesBetweenDiffs = function(e, t, n) {
    let i = n;
    if (0 === i.length) return i;
    let s, o = 0;
    do {
        s = !1;
        const a = [
            i[0]
        ];
        for(let u = 1; u < i.length; u++){
            const l = i[u], h = a[a.length - 1];
            function c(t, n) {
                const i = new r.OffsetRange(h.seq1Range.endExclusive, l.seq1Range.start);
                return e.getText(i).replace(/\s/g, "").length <= 4 && (t.seq1Range.length + t.seq2Range.length > 5 || n.seq1Range.length + n.seq2Range.length > 5);
            }
            c(h, l) ? (s = !0, a[a.length - 1] = a[a.length - 1].join(l)) : a.push(l);
        }
        i = a;
    }while (o++ < 10 && s)
    return i;
}, exports.removeVeryShortMatchingTextBetweenLongDiffs = function(e, t, n) {
    let o = n;
    if (0 === o.length) return o;
    let a, u = 0;
    do {
        a = !1;
        const h = [
            o[0]
        ];
        for(let c = 1; c < o.length; c++){
            const f = o[c], d = h[h.length - 1];
            function g(n, i) {
                const s = new r.OffsetRange(d.seq1Range.endExclusive, f.seq1Range.start);
                if (e.countLinesIn(s) > 5 || s.length > 500) return !1;
                const o = e.getText(s).trim();
                if (o.length > 20 || o.split(/\r\n|\r|\n/).length > 1) return !1;
                const a = e.countLinesIn(n.seq1Range), u = n.seq1Range.length, l = t.countLinesIn(n.seq2Range), h = n.seq2Range.length, c = e.countLinesIn(i.seq1Range), g = i.seq1Range.length, m = t.countLinesIn(i.seq2Range), p = i.seq2Range.length;
                function b(e) {
                    return Math.min(e, 130);
                }
                return Math.pow(Math.pow(b(40 * a + u), 1.5) + Math.pow(b(40 * l + h), 1.5), 1.5) + Math.pow(Math.pow(b(40 * c + g), 1.5) + Math.pow(b(40 * m + p), 1.5), 1.5) > 74184.96480721243;
            }
            g(d, f) ? (a = !0, h[h.length - 1] = h[h.length - 1].join(f)) : h.push(f);
        }
        o = h;
    }while (u++ < 10 && a)
    const l = [];
    return (0, i.forEachWithNeighbors)(o, (t, n, i)=>{
        let o = n;
        function a(e) {
            return e.length > 0 && e.trim().length <= 3 && n.seq1Range.length + n.seq2Range.length > 100;
        }
        const u = e.extendToFullLines(n.seq1Range), h = e.getText(new r.OffsetRange(u.start, n.seq1Range.start));
        a(h) && (o = o.deltaStart(-h.length));
        const c = e.getText(new r.OffsetRange(n.seq1Range.endExclusive, u.endExclusive));
        a(c) && (o = o.deltaEnd(c.length));
        const f = s.SequenceDiff.fromOffsetPairs(t ? t.getEndExclusives() : s.OffsetPair.zero, i ? i.getStarts() : s.OffsetPair.max), d = o.intersect(f);
        l.length > 0 && d.getStarts().equals(l[l.length - 1].getEndExclusives()) ? l[l.length - 1] = l[l.length - 1].join(d) : l.push(d);
    }), l;
};
const i = require("./module-501.js"), r = require("./module-991.js"), s = require("./module-933.js");
function o(e, t, n) {
    if (0 === n.length) return n;
    const i = [];
    i.push(n[0]);
    for(let o = 1; o < n.length; o++){
        const a = i[i.length - 1];
        let u = n[o];
        if (u.seq1Range.isEmpty || u.seq2Range.isEmpty) {
            const n = u.seq1Range.start - a.seq1Range.endExclusive;
            let o;
            for(o = 1; o <= n && e.getElement(u.seq1Range.start - o) === e.getElement(u.seq1Range.endExclusive - o) && t.getElement(u.seq2Range.start - o) === t.getElement(u.seq2Range.endExclusive - o); o++);
            if (o--, o === n) {
                i[i.length - 1] = new s.SequenceDiff(new r.OffsetRange(a.seq1Range.start, u.seq1Range.endExclusive - n), new r.OffsetRange(a.seq2Range.start, u.seq2Range.endExclusive - n));
                continue;
            }
            u = u.delta(-o);
        }
        i.push(u);
    }
    const o = [];
    for(let n = 0; n < i.length - 1; n++){
        const a = i[n + 1];
        let u = i[n];
        if (u.seq1Range.isEmpty || u.seq2Range.isEmpty) {
            const o = a.seq1Range.start - u.seq1Range.endExclusive;
            let l;
            for(l = 0; l < o && e.isStronglyEqual(u.seq1Range.start + l, u.seq1Range.endExclusive + l) && t.isStronglyEqual(u.seq2Range.start + l, u.seq2Range.endExclusive + l); l++);
            if (l === o) {
                i[n + 1] = new s.SequenceDiff(new r.OffsetRange(u.seq1Range.start + o, a.seq1Range.endExclusive), new r.OffsetRange(u.seq2Range.start + o, a.seq2Range.endExclusive));
                continue;
            }
            l > 0 && (u = u.delta(l));
        }
        o.push(u);
    }
    return i.length > 0 && o.push(i[i.length - 1]), o;
}
function a(e, t, n, i, r) {
    let s = 1;
    for(; e.seq1Range.start - s >= i.start && e.seq2Range.start - s >= r.start && n.isStronglyEqual(e.seq2Range.start - s, e.seq2Range.endExclusive - s) && s < 100;)s++;
    s--;
    let o = 0;
    for(; e.seq1Range.start + o < i.endExclusive && e.seq2Range.endExclusive + o < r.endExclusive && n.isStronglyEqual(e.seq2Range.start + o, e.seq2Range.endExclusive + o) && o < 100;)o++;
    if (0 === s && 0 === o) return e;
    let a = 0, u = -1;
    for(let i = -s; i <= o; i++){
        const r = e.seq2Range.start + i, s = e.seq2Range.endExclusive + i, o = e.seq1Range.start + i, l = t.getBoundaryScore(o) + n.getBoundaryScore(r) + n.getBoundaryScore(s);
        l > u && (u = l, a = i);
    }
    return e.delta(a);
}
