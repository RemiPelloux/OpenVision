Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.LcsDiff = exports.StringDiffSequence = void 0, exports.stringDiff = function(e, t, n) {
    return new l(new s(e), new s(t)).ComputeDiff(n).changes;
}, exports.computeLevenshteinDistance = function(e, t) {
    if (e.length < t.length) {
        const n = t;
        t = e, e = n;
    }
    if (0 === t.length) return e.length;
    if (e.length <= 32) return c(e, t);
    return function(e, t) {
        const n = e.length, i = t.length, r = [], s = [], o = Math.ceil(n / 32), a = Math.ceil(i / 32);
        for(let e = 0; e < o; e++)r[e] = -1, s[e] = 0;
        let u = 0;
        for(; u < a - 1; u++){
            let o = 0, a = -1;
            const l = 32 * u, c = Math.min(32, i) + l;
            for(let e = l; e < c; e++)h[t.charCodeAt(e)] |= 1 << e;
            for(let t = 0; t < n; t++){
                const n = h[e.charCodeAt(t)], i = r[t / 32 | 0] >>> t & 1, u = s[t / 32 | 0] >>> t & 1, l = n | o, c = ((n | u) & a) + a ^ a | n | u;
                let f = o | ~(c | a), d = a & c;
                f >>> 31 ^ i && (r[t / 32 | 0] ^= 1 << t), d >>> 31 ^ u && (s[t / 32 | 0] ^= 1 << t), f = f << 1 | i, d = d << 1 | u, a = d | ~(l | f), o = f & l;
            }
            for(let e = l; e < c; e++)h[t.charCodeAt(e)] = 0;
        }
        let l = 0, c = -1;
        const f = 32 * u, d = Math.min(32, i - f) + f;
        for(let e = f; e < d; e++)h[t.charCodeAt(e)] |= 1 << e;
        let g = i;
        for(let t = 0; t < n; t++){
            const n = h[e.charCodeAt(t)], o = r[t / 32 | 0] >>> t & 1, a = s[t / 32 | 0] >>> t & 1, u = n | l, f = ((n | a) & c) + c ^ c | n | a;
            let d = l | ~(f | c), m = c & f;
            g += d >>> i - 1 & 1, g -= m >>> i - 1 & 1, d >>> 31 ^ o && (r[t / 32 | 0] ^= 1 << t), m >>> 31 ^ a && (s[t / 32 | 0] ^= 1 << t), d = d << 1 | o, m = m << 1 | a, c = m | ~(u | d), l = d & u;
        }
        for(let e = f; e < d; e++)h[t.charCodeAt(e)] = 0;
        return g;
    }(e, t);
};
const i = require("./module-988.js"), r = require("./module-499.js");
class s {
    constructor(e){
        this.source = e;
    }
    getElements() {
        const e = this.source, t = new Int32Array(e.length);
        for(let n = 0, i = e.length; n < i; n++)t[n] = e.charCodeAt(n);
        return t;
    }
}
exports.StringDiffSequence = s;
class o {
    static Assert(e, t) {
        if (!e) throw new Error(t);
    }
}
class a {
    static Copy(e, t, n, i, r) {
        for(let s = 0; s < r; s++)n[i + s] = e[t + s];
    }
    static Copy2(e, t, n, i, r) {
        for(let s = 0; s < r; s++)n[i + s] = e[t + s];
    }
}
class u {
    constructor(){
        this.m_changes = [], this.m_originalStart = 1073741824, this.m_modifiedStart = 1073741824, this.m_originalCount = 0, this.m_modifiedCount = 0;
    }
    MarkNextChange() {
        (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new i.DiffChange(this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount)), this.m_originalCount = 0, this.m_modifiedCount = 0, this.m_originalStart = 1073741824, this.m_modifiedStart = 1073741824;
    }
    AddOriginalElement(e, t) {
        this.m_originalStart = Math.min(this.m_originalStart, e), this.m_modifiedStart = Math.min(this.m_modifiedStart, t), this.m_originalCount++;
    }
    AddModifiedElement(e, t) {
        this.m_originalStart = Math.min(this.m_originalStart, e), this.m_modifiedStart = Math.min(this.m_modifiedStart, t), this.m_modifiedCount++;
    }
    getChanges() {
        return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes;
    }
    getReverseChanges() {
        return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes.reverse(), this.m_changes;
    }
}
class l {
    constructor(e, t, n = null){
        this.ContinueProcessingPredicate = n, this._originalSequence = e, this._modifiedSequence = t;
        const [i, r, s] = l._getElements(e), [o, a, u] = l._getElements(t);
        this._hasStrings = s && u, this._originalStringElements = i, this._originalElementsOrHash = r, this._modifiedStringElements = o, this._modifiedElementsOrHash = a, this.m_forwardHistory = [], this.m_reverseHistory = [];
    }
    static _isStringArray(e) {
        return e.length > 0 && "string" == typeof e[0];
    }
    static _getElements(e) {
        const t = e.getElements();
        if (l._isStringArray(t)) {
            const e = new Int32Array(t.length);
            for(let n = 0, i = t.length; n < i; n++)e[n] = (0, r.stringHash)(t[n], 0);
            return [
                t,
                e,
                !0
            ];
        }
        return t instanceof Int32Array ? [
            [],
            t,
            !1
        ] : [
            [],
            new Int32Array(t),
            !1
        ];
    }
    ElementsAreEqual(e, t) {
        return this._originalElementsOrHash[e] === this._modifiedElementsOrHash[t] && (!this._hasStrings || this._originalStringElements[e] === this._modifiedStringElements[t]);
    }
    ElementsAreStrictEqual(e, t) {
        if (!this.ElementsAreEqual(e, t)) return !1;
        return l._getStrictElement(this._originalSequence, e) === l._getStrictElement(this._modifiedSequence, t);
    }
    static _getStrictElement(e, t) {
        return "function" == typeof e.getStrictElement ? e.getStrictElement(t) : null;
    }
    OriginalElementsAreEqual(e, t) {
        return this._originalElementsOrHash[e] === this._originalElementsOrHash[t] && (!this._hasStrings || this._originalStringElements[e] === this._originalStringElements[t]);
    }
    ModifiedElementsAreEqual(e, t) {
        return this._modifiedElementsOrHash[e] === this._modifiedElementsOrHash[t] && (!this._hasStrings || this._modifiedStringElements[e] === this._modifiedStringElements[t]);
    }
    ComputeDiff(e) {
        return this._ComputeDiff(0, this._originalElementsOrHash.length - 1, 0, this._modifiedElementsOrHash.length - 1, e);
    }
    _ComputeDiff(e, t, n, i, r) {
        const s = [
            !1
        ];
        let o = this.ComputeDiffRecursive(e, t, n, i, s);
        return r && (o = this.PrettifyChanges(o)), {
            quitEarly: s[0],
            changes: o
        };
    }
    ComputeDiffRecursive(e, t, n, r, s) {
        for(s[0] = !1; e <= t && n <= r && this.ElementsAreEqual(e, n);)e++, n++;
        for(; t >= e && r >= n && this.ElementsAreEqual(t, r);)t--, r--;
        if (e > t || n > r) {
            let s;
            return n <= r ? (o.Assert(e === t + 1, "originalStart should only be one more than originalEnd"), s = [
                new i.DiffChange(e, 0, n, r - n + 1)
            ]) : e <= t ? (o.Assert(n === r + 1, "modifiedStart should only be one more than modifiedEnd"), s = [
                new i.DiffChange(e, t - e + 1, n, 0)
            ]) : (o.Assert(e === t + 1, "originalStart should only be one more than originalEnd"), o.Assert(n === r + 1, "modifiedStart should only be one more than modifiedEnd"), s = []), s;
        }
        const a = [
            0
        ], u = [
            0
        ], l = this.ComputeRecursionPoint(e, t, n, r, a, u, s), h = a[0], c = u[0];
        if (null !== l) return l;
        if (!s[0]) {
            const o = this.ComputeDiffRecursive(e, h, n, c, s);
            let a = [];
            return a = s[0] ? [
                new i.DiffChange(h + 1, t - (h + 1) + 1, c + 1, r - (c + 1) + 1)
            ] : this.ComputeDiffRecursive(h + 1, t, c + 1, r, s), this.ConcatenateChanges(o, a);
        }
        return [
            new i.DiffChange(e, t - e + 1, n, r - n + 1)
        ];
    }
    WALKTRACE(e, t, n, r, s, o, a, l, h, c, f, d, g, m, p, b, L, _) {
        let v = null, E = null, w = new u, y = t, N = n, R = g[0] - b[0] - r, C = -1073741824, x = this.m_forwardHistory.length - 1;
        do {
            const t = R + e;
            t === y || t < N && h[t - 1] < h[t + 1] ? (m = (f = h[t + 1]) - R - r, f < C && w.MarkNextChange(), C = f, w.AddModifiedElement(f + 1, m), R = t + 1 - e) : (m = (f = h[t - 1] + 1) - R - r, f < C && w.MarkNextChange(), C = f - 1, w.AddOriginalElement(f, m + 1), R = t - 1 - e), x >= 0 && (e = (h = this.m_forwardHistory[x])[0], y = 1, N = h.length - 1);
        }while (--x >= -1)
        if (v = w.getReverseChanges(), _[0]) {
            let e = g[0] + 1, t = b[0] + 1;
            if (null !== v && v.length > 0) {
                const n = v[v.length - 1];
                e = Math.max(e, n.getOriginalEnd()), t = Math.max(t, n.getModifiedEnd());
            }
            E = [
                new i.DiffChange(e, d - e + 1, t, p - t + 1)
            ];
        } else {
            w = new u, y = o, N = a, R = g[0] - b[0] - l, C = 1073741824, x = L ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
            do {
                const e = R + s;
                e === y || e < N && c[e - 1] >= c[e + 1] ? (m = (f = c[e + 1] - 1) - R - l, f > C && w.MarkNextChange(), C = f + 1, w.AddOriginalElement(f + 1, m + 1), R = e + 1 - s) : (m = (f = c[e - 1]) - R - l, f > C && w.MarkNextChange(), C = f, w.AddModifiedElement(f + 1, m + 1), R = e - 1 - s), x >= 0 && (s = (c = this.m_reverseHistory[x])[0], y = 1, N = c.length - 1);
            }while (--x >= -1)
            E = w.getChanges();
        }
        return this.ConcatenateChanges(v, E);
    }
    ComputeRecursionPoint(e, t, n, r, s, o, u) {
        let l = 0, h = 0, c = 0, f = 0, d = 0, g = 0;
        e--, n--, s[0] = 0, o[0] = 0, this.m_forwardHistory = [], this.m_reverseHistory = [];
        const m = t - e + (r - n), p = m + 1, b = new Int32Array(p), L = new Int32Array(p), _ = r - n, v = t - e, E = e - n, w = t - r, y = (v - _) % 2 == 0;
        b[_] = e, L[v] = t, u[0] = !1;
        for(let N = 1; N <= m / 2 + 1; N++){
            let m = 0, R = 0;
            c = this.ClipDiagonalBound(_ - N, N, _, p), f = this.ClipDiagonalBound(_ + N, N, _, p);
            for(let e = c; e <= f; e += 2){
                l = e === c || e < f && b[e - 1] < b[e + 1] ? b[e + 1] : b[e - 1] + 1, h = l - (e - _) - E;
                const n = l;
                for(; l < t && h < r && this.ElementsAreEqual(l + 1, h + 1);)l++, h++;
                if (b[e] = l, l + h > m + R && (m = l, R = h), !y && Math.abs(e - v) <= N - 1 && l >= L[e]) return s[0] = l, o[0] = h, n <= L[e] && N <= 1448 ? this.WALKTRACE(_, c, f, E, v, d, g, w, b, L, l, t, s, h, r, o, y, u) : null;
            }
            const C = (m - e + (R - n) - N) / 2;
            if (null !== this.ContinueProcessingPredicate && !this.ContinueProcessingPredicate(m, C)) return u[0] = !0, s[0] = m, o[0] = R, C > 0 && N <= 1448 ? this.WALKTRACE(_, c, f, E, v, d, g, w, b, L, l, t, s, h, r, o, y, u) : (e++, n++, [
                new i.DiffChange(e, t - e + 1, n, r - n + 1)
            ]);
            d = this.ClipDiagonalBound(v - N, N, v, p), g = this.ClipDiagonalBound(v + N, N, v, p);
            for(let i = d; i <= g; i += 2){
                l = i === d || i < g && L[i - 1] >= L[i + 1] ? L[i + 1] - 1 : L[i - 1], h = l - (i - v) - w;
                const a = l;
                for(; l > e && h > n && this.ElementsAreEqual(l, h);)l--, h--;
                if (L[i] = l, y && Math.abs(i - _) <= N && l <= b[i]) return s[0] = l, o[0] = h, a >= b[i] && N <= 1448 ? this.WALKTRACE(_, c, f, E, v, d, g, w, b, L, l, t, s, h, r, o, y, u) : null;
            }
            if (N <= 1447) {
                let e = new Int32Array(f - c + 2);
                e[0] = _ - c + 1, a.Copy2(b, c, e, 1, f - c + 1), this.m_forwardHistory.push(e), e = new Int32Array(g - d + 2), e[0] = v - d + 1, a.Copy2(L, d, e, 1, g - d + 1), this.m_reverseHistory.push(e);
            }
        }
        return this.WALKTRACE(_, c, f, E, v, d, g, w, b, L, l, t, s, h, r, o, y, u);
    }
    PrettifyChanges(e) {
        for(let t = 0; t < e.length; t++){
            const n = e[t], i = t < e.length - 1 ? e[t + 1].originalStart : this._originalElementsOrHash.length, r = t < e.length - 1 ? e[t + 1].modifiedStart : this._modifiedElementsOrHash.length, s = n.originalLength > 0, o = n.modifiedLength > 0;
            for(; n.originalStart + n.originalLength < i && n.modifiedStart + n.modifiedLength < r && (!s || this.OriginalElementsAreEqual(n.originalStart, n.originalStart + n.originalLength)) && (!o || this.ModifiedElementsAreEqual(n.modifiedStart, n.modifiedStart + n.modifiedLength));){
                const e = this.ElementsAreStrictEqual(n.originalStart, n.modifiedStart);
                if (this.ElementsAreStrictEqual(n.originalStart + n.originalLength, n.modifiedStart + n.modifiedLength) && !e) break;
                n.originalStart++, n.modifiedStart++;
            }
            const a = [
                null
            ];
            t < e.length - 1 && this.ChangesOverlap(e[t], e[t + 1], a) && (e[t] = a[0], e.splice(t + 1, 1), t--);
        }
        for(let t = e.length - 1; t >= 0; t--){
            const n = e[t];
            let i = 0, r = 0;
            if (t > 0) {
                const n = e[t - 1];
                i = n.originalStart + n.originalLength, r = n.modifiedStart + n.modifiedLength;
            }
            const s = n.originalLength > 0, o = n.modifiedLength > 0;
            let a = 0, u = this._boundaryScore(n.originalStart, n.originalLength, n.modifiedStart, n.modifiedLength);
            for(let e = 1;; e++){
                const t = n.originalStart - e, l = n.modifiedStart - e;
                if (t < i || l < r) break;
                if (s && !this.OriginalElementsAreEqual(t, t + n.originalLength)) break;
                if (o && !this.ModifiedElementsAreEqual(l, l + n.modifiedLength)) break;
                const h = (t === i && l === r ? 5 : 0) + this._boundaryScore(t, n.originalLength, l, n.modifiedLength);
                h > u && (u = h, a = e);
            }
            n.originalStart -= a, n.modifiedStart -= a;
            const l = [
                null
            ];
            t > 0 && this.ChangesOverlap(e[t - 1], e[t], l) && (e[t - 1] = l[0], e.splice(t, 1), t++);
        }
        if (this._hasStrings) for(let t = 1, n = e.length; t < n; t++){
            const n = e[t - 1], i = e[t], r = i.originalStart - n.originalStart - n.originalLength, s = n.originalStart, o = i.originalStart + i.originalLength, a = o - s, u = n.modifiedStart, l = i.modifiedStart + i.modifiedLength, h = l - u;
            if (r < 5 && a < 20 && h < 20) {
                const e = this._findBetterContiguousSequence(s, a, u, h, r);
                if (e) {
                    const [t, s] = e;
                    t === n.originalStart + n.originalLength && s === n.modifiedStart + n.modifiedLength || (n.originalLength = t - n.originalStart, n.modifiedLength = s - n.modifiedStart, i.originalStart = t + r, i.modifiedStart = s + r, i.originalLength = o - i.originalStart, i.modifiedLength = l - i.modifiedStart);
                }
            }
        }
        return e;
    }
    _findBetterContiguousSequence(e, t, n, i, r) {
        if (t < r || i < r) return null;
        const s = e + t - r + 1, o = n + i - r + 1;
        let a = 0, u = 0, l = 0;
        for(let t = e; t < s; t++)for(let e = n; e < o; e++){
            const n = this._contiguousSequenceScore(t, e, r);
            n > 0 && n > a && (a = n, u = t, l = e);
        }
        return a > 0 ? [
            u,
            l
        ] : null;
    }
    _contiguousSequenceScore(e, t, n) {
        let i = 0;
        for(let r = 0; r < n; r++){
            if (!this.ElementsAreEqual(e + r, t + r)) return 0;
            i += this._originalStringElements[e + r].length;
        }
        return i;
    }
    _OriginalIsBoundary(e) {
        return e <= 0 || e >= this._originalElementsOrHash.length - 1 || this._hasStrings && /^\s*$/.test(this._originalStringElements[e]);
    }
    _OriginalRegionIsBoundary(e, t) {
        if (this._OriginalIsBoundary(e) || this._OriginalIsBoundary(e - 1)) return !0;
        if (t > 0) {
            const n = e + t;
            if (this._OriginalIsBoundary(n - 1) || this._OriginalIsBoundary(n)) return !0;
        }
        return !1;
    }
    _ModifiedIsBoundary(e) {
        return e <= 0 || e >= this._modifiedElementsOrHash.length - 1 || this._hasStrings && /^\s*$/.test(this._modifiedStringElements[e]);
    }
    _ModifiedRegionIsBoundary(e, t) {
        if (this._ModifiedIsBoundary(e) || this._ModifiedIsBoundary(e - 1)) return !0;
        if (t > 0) {
            const n = e + t;
            if (this._ModifiedIsBoundary(n - 1) || this._ModifiedIsBoundary(n)) return !0;
        }
        return !1;
    }
    _boundaryScore(e, t, n, i) {
        return (this._OriginalRegionIsBoundary(e, t) ? 1 : 0) + (this._ModifiedRegionIsBoundary(n, i) ? 1 : 0);
    }
    ConcatenateChanges(e, t) {
        const n = [];
        if (0 === e.length || 0 === t.length) return t.length > 0 ? t : e;
        if (this.ChangesOverlap(e[e.length - 1], t[0], n)) {
            const i = new Array(e.length + t.length - 1);
            return a.Copy(e, 0, i, 0, e.length - 1), i[e.length - 1] = n[0], a.Copy(t, 1, i, e.length, t.length - 1), i;
        }
        {
            const n = new Array(e.length + t.length);
            return a.Copy(e, 0, n, 0, e.length), a.Copy(t, 0, n, e.length, t.length), n;
        }
    }
    ChangesOverlap(e, t, n) {
        if (o.Assert(e.originalStart <= t.originalStart, "Left change is not less than or equal to right change"), o.Assert(e.modifiedStart <= t.modifiedStart, "Left change is not less than or equal to right change"), e.originalStart + e.originalLength >= t.originalStart || e.modifiedStart + e.modifiedLength >= t.modifiedStart) {
            const r = e.originalStart;
            let s = e.originalLength;
            const o = e.modifiedStart;
            let a = e.modifiedLength;
            return e.originalStart + e.originalLength >= t.originalStart && (s = t.originalStart + t.originalLength - e.originalStart), e.modifiedStart + e.modifiedLength >= t.modifiedStart && (a = t.modifiedStart + t.modifiedLength - e.modifiedStart), n[0] = new i.DiffChange(r, s, o, a), !0;
        }
        return n[0] = null, !1;
    }
    ClipDiagonalBound(e, t, n, i) {
        if (e >= 0 && e < i) return e;
        const r = t % 2 == 0;
        if (e < 0) {
            return r === (n % 2 == 0) ? 0 : 1;
        }
        return r === ((i - n - 1) % 2 == 0) ? i - 1 : i - 2;
    }
}
exports.LcsDiff = l;
const h = new Uint32Array(65536), c = (e, t)=>{
    const n = e.length, i = t.length, r = 1 << n - 1;
    let s = -1, o = 0, a = n, u = n;
    for(; u--;)h[e.charCodeAt(u)] |= 1 << u;
    for(u = 0; u < i; u++){
        let e = h[t.charCodeAt(u)];
        const n = e | o;
        e |= (e & s) + s ^ s, o |= ~(e | s), s &= e, o & r && a++, s & r && a--, o = o << 1 | 1, s = s << 1 | ~(n | o), o &= n;
    }
    for(u = n; u--;)h[e.charCodeAt(u)] = 0;
    return a;
};
