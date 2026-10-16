Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.StreamingDPDiffing = void 0;
const i = require("./module-991.js"), r = require("./module-933.js"), s = require("./module-891.js");
exports.StreamingDPDiffing = class {
    compute(e, t, n = r.InfiniteTimeout.instance, o) {
        if (0 === e.length || 0 === t.length) return r.DiffAlgorithmResult.trivial(e, t);
        const a = new s.Array2D(2 * e.length + 1, t.length + 1), u = new s.Array2D(2 * e.length + 1, t.length + 1);
        for(let e = 0; e <= t.length; e++)a.set(0, e, e), e > 0 ? u.set(0, e, !0) : u.set(0, e, !1);
        for(let t = 0; t <= 2 * e.length; t++)a.set(t, 0, Math.floor((t + 1) / 2)), u.set(t, 0, !1);
        for(let i = 1; i <= t.length; i++)for(let s = 1; s <= 2 * e.length; s++){
            if (!n.isValid()) return r.DiffAlgorithmResult.trivialTimedOut(e, t);
            if (s % 2 == 0) {
                const e = a.get(s, i - 1) + 1, t = a.get(s - 1, i);
                e < t ? (a.set(s, i, e), u.set(s, i, !0)) : (a.set(s, i, t), u.set(s, i, !1));
            } else {
                const n = a.get(s - 1, i) + .4, r = e.getElement(Math.floor(s / 2)) === t.getElement(i - 1) ? a.get(s - 1, i - 1) : Number.MAX_VALUE;
                r < n ? (a.set(s, i, r), u.set(s, i, !0)) : (a.set(s, i, n), u.set(s, i, !1));
            }
        }
        let l = Number.MAX_VALUE, h = -1;
        for(let n = 0; n <= 2 * e.length; n++){
            const e = a.get(n, t.length);
            e < l && (l = e, h = n);
        }
        let c, f = [], d = h, g = t.length;
        for(d <= 2 * e.length - 2 && f.push(new r.SequenceDiff(new i.OffsetRange(Math.floor((d + 1) / 2), e.length), new i.OffsetRange(g, g))); d >= 0 && g >= 0;)u.get(d, g) ? d % 2 == 0 ? (void 0 === c && (c = {
            x: Math.floor(d / 2),
            y: g
        }), g -= 1) : (void 0 !== c && (c.x === Math.floor(d / 2) + 1 && c.y === g || f.push(new r.SequenceDiff(new i.OffsetRange(Math.floor(d / 2) + 1, c.x), new i.OffsetRange(g, c.y))), c = void 0), d -= 1, g -= 1) : (void 0 === c && (c = {
            x: Math.floor((d + 1) / 2),
            y: g
        }), d -= 1);
        return void 0 !== c && (c.x === Math.floor(d / 2) + 1 && c.y === g || f.push(new r.SequenceDiff(new i.OffsetRange(Math.floor(d / 2) + 1, c.x), new i.OffsetRange(g, c.y))), c = void 0), f.reverse(), new r.DiffAlgorithmResult(f, !1);
    }
};
